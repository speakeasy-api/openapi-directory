# openBanking

## Overview

Fire Open Payments is a feature of the fire.com business account that leverages Open Banking to allow your customers to pay you via bank transfer and to reconcile those payments as they are received into your fire.com GBP or EUR account.

To set up each Fire Open Payment you first need to create a payment request. This contains the details of the payment such as the amount, destination account, description as well as various other specific fields that you want to associate with the payment. The payment request is represented as a URL with a unique code which can then be incorporated into an eCommerce shopping cart as an alternative form of payment. For example, you can put “Pay by Bank” on your website along with “Pay by Card” and “Pay by PayPal”. It can also be distributed by a variety of means such as by email, SMS, WhatsApp, encoded as a QR code, NFC tag, etc.

Consumers confirm the payment details such as the amount are correct, select their bank and authorise the payment. Payments can be made from all major UK banks.

The funds are settled into your fire.com account, fully reconciled, with your specified fields provided.

There are two implementation options you can use to display payment pages with Fire Open Payments.
1. **Hosted Payment Pages:** fire.com hosts the payment pages - this option allows you to re-direct your customer to the hosted fire.com payment pages displaying the payment details confirmation, bank selection, consent and response pages.
2. **Integrated Payment Pages:** You host the payments page yourself - this option allows you to have control of the UI and UX for displaying the payment details confirmation, bank selection and response pages. Once the response is received, fire.com can re-direct the payer back to your website.

## Hosted Payment Pages Option
![Image](https://fire.com/docs/images/fop-hosted-flow.png)

The payer is brought through 5 stages to complete the payment:
1. **View Payment Details page:** The payer must first be clear on the amount of the payment, who they are paying and the reason for the payment.
2. **Select Bank / Account Provider page:** The payer then selects their bank. Again this step is offered as part of the fire.com payment UI.
3. **Consent page:**  The payer must provide consent to the PISP (fire.com) prior to authorising the payment. This is a regulatory requirement, this page must be hosted by fire.com.
4. **Authenticate and Authorise Payment:** The payer will be redirected to their bank’s online site or mobile banking app. After authenticating, the details of the payment will be displayed, and the payer will authorise the payment.
5. **Response page:** It is a regulatory requirement that the PISP (fire.com) display the results of the payment and provide the same information that would be provided if the payer had made the payment via their banking application. fire.com must display this page, before optionally redirecting the payer back to your website.

To implement the hosted Fire Open Payments option you need to do the following:
1. You can create a new Fire Open Payment request either within Firework Online or via the API.
2. Create your new API application with the appropriate permissions required in Firework Online, as outlined in the “Authentication” steps. The permissions needed are:
    - “Create a Payment Request”
    - “Get Payment Details”

3. Use the Refresh Token, Client ID and Client Key to create an access token as outlined in the “Authentication” steps.
4. On your website, create a “Pay by Bank” button alongside your other available payment methods, such as Cards and PayPal.
5. After the user clicks on “Pay by Bank”, you need to create a new Fire Open Payment request as outlined in the “Create a Fire Open Payment” steps. The Create a Fire Open Payment request endpoint returns a unique code for the payment request.
6. Create a URL using the code returned in this format: `https://payments.fire.com/{code}` and redirect your customer to this page.
7. fire.com will host all the pages that the customer needs to review and authorise the payment. fire.com will will return the paymentUUID of the successful or failed transaction to the returnUrl that you supplied when creating the Fire Open Payment request. fire.com can also optionally send a “webhook” to your website notifying you of the transaction’s outcome.
8. Once fire.com responds with the paymentUUID and/or the webhook to your website, you need to call the “Get Payment Details” endpoint to get the details of the transaction. This will let you know whether the transaction was successful or not. You can set up the “Payment Request Payment Authorised” webhook to notify you once the payment is authorised or cancelled.
9. The funds will be received into your GBP or EUR account. Funding will typically be within 6 business hours.

Once the code is returned the payment can be viewed and paid by going to the following URL: `https://payments.fire.com/{code}`


### Available Operations

* [getListOfAspsps](#getlistofaspsps) - Get list of ASPSPs / Banks
* [getPaymentDetails](#getpaymentdetails) - Get Payment Details
* [newPaymentRequest](#newpaymentrequest) - Create a Fire Open Payment request

## getListOfAspsps

Returns all ASPSPs (Account Servicing Payment Service Provider) / banks. The list can be filtered by currency. You will need to enable the `PERM_BUSINESS_GET_ASPSPS` permission to use this endpoint.
***This endpoint is only required if you intend to host the “Select ASPSP / bank” page yourself.***


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetListOfAspspsRequest;
import org.openapis.openapi.models.operations.GetListOfAspspsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetListOfAspspsRequest req = new GetListOfAspspsRequest() {{
                currency = "odit";
            }};            

            GetListOfAspspsResponse res = sdk.openBanking.getListOfAspsps(req);

            if (res.aspsps != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPaymentDetails

Returns the details of a specific payment.

As the customer goes through the process of making the payment the status of the payment will change.

* `AWAITING_AUTHORISATION` -This is the initial status of all your payments.
* `AUTHORISED` - This is the status that your payment is set to after the customer has authorised the payment with their ASPSP / bank.
* `AWAITING_MULTI_AUTHORISATION` - Some business accounts such as charities require dual authorisation.
* `NOT_AUTHORISED` - Either your customer clicked on cancel or the payment was rejected by their ASPSP / bank.
* `PENDING` - This is the status that your payment is set to after the customer has authorised the payment with their ASPSP / bank but the bank may want to carry out another check before funding the transaction.
* `PAID` - Funds were received into your fire.com GBP or EUR account from your customer’s ASPSP / bank.


You will need to enable the `PERM_BUSINESS_GET_PAYMENT` permission to use this endpoint.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaymentDetailsRequest;
import org.openapis.openapi.models.operations.GetPaymentDetailsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetPaymentDetailsRequest req = new GetPaymentDetailsRequest("4ADFB67A-0F5B-4A9A-9D74-34437250045C");            

            GetPaymentDetailsResponse res = sdk.openBanking.getPaymentDetails(req);

            if (res.paymentRequest != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## newPaymentRequest

Fire Open Payments is a feature of the fire.com business account that leverages Open Banking to allow your customers to pay you via bank transfer and to reconcile those payments as they are received into your fire.com GBP or EUR account.

To set up each Fire Open Payment you first need to create a payment request. This contains the details of the payment such as the amount, destination account, description as well as various other specific fields that you want to associate with the payment. The payment request is represented as a URL with a unique code which can then be incorporated into an eCommerce shopping cart as an alternative form of payment. For example, you can put “Pay by Bank” on your website along with “Pay by Card” and “Pay by PayPal”. It can also be distributed by a variety of means such as by email, SMS, WhatsApp, encoded as a QR code, NFC tag, etc.

Consumers confirm the payment details such as the amount are correct, select their bank and authorise the payment. Payments can be made from all major UK banks.

The funds are settled into your fire.com account, fully reconciled, with your specified fields provided.

There are two implementation options you can use to display payment pages with Fire Open Payments.
1. **Hosted Payment Pages:** fire.com hosts the payment pages - this option allows you to re-direct your customer to the hosted fire.com payment pages displaying the payment details confirmation, bank selection, consent and response pages.
2. **Integrated Payment Pages:** You host the payments page yourself - this option allows you to have control of the UI and UX for displaying the payment details confirmation, bank selection and response pages. Once the response is received, fire.com can re-direct the payer back to your website.

## Hosted Payment Pages Option
![Image](https://fire.com/docs/images/fop-hosted-flow.png)

The payer is brought through 5 stages to complete the payment:
1. **View Payment Details page:** The payer must first be clear on the amount of the payment, who they are paying and the reason for the payment.
2. **Select Bank / Account Provider page:** The payer then selects their bank. Again this step is offered as part of the fire.com payment UI.
3. **Consent page:**  The payer must provide consent to the PISP (fire.com) prior to authorising the payment. This is a regulatory requirement, this page must be hosted by fire.com.
4. **Authenticate and Authorise Payment:** The payer will be redirected to their bank’s online site or mobile banking app. After authenticating, the details of the payment will be displayed, and the payer will authorise the payment.
5. **Response page:** It is a regulatory requirement that the PISP (fire.com) display the results of the payment and provide the same information that would be provided if the payer had made the payment via their banking application. fire.com must display this page, before optionally redirecting the payer back to your website.

To implement the hosted Fire Open Payments option you need to do the following:
1. You can create a new Fire Open Payment request either within Firework Online or via the API.
2. Create your new API application with the appropriate permissions required in Firework Online, as outlined in the “Authentication” steps. The permissions needed are:
    - “Create a Payment Request”
    - “Get Payment Details”

3. Use the Refresh Token, Client ID and Client Key to create an access token as outlined in the “Authentication” steps.
4. On your website, create a “Pay by Bank” button alongside your other available payment methods, such as Cards and PayPal.
5. After the user clicks on “Pay by Bank”, you need to create a new Fire Open Payment request as outlined in the “Create a Fire Open Payment” steps. The Create a Fire Open Payment request endpoint returns a unique code for the payment request.
6. Create a URL using the code returned in this format: `https://payments.fire.com/{code}` and redirect your customer to this page.
7. fire.com will host all the pages that the customer needs to review and authorise the payment. fire.com will will return the paymentUUID of the successful or failed transaction to the returnUrl that you supplied when creating the Fire Open Payment request. fire.com can also optionally send a “webhook” to your website notifying you of the transaction’s outcome.
8. Once fire.com responds with the paymentUUID and/or the webhook to your website, you need to call the “Get Payment Details” endpoint to get the details of the transaction. This will let you know whether the transaction was successful or not. You can set up the “Payment Request Payment Authorised” webhook to notify you once the payment is authorised or cancelled.
9. The funds will be received into your GBP or EUR account. Funding will typically be within 6 business hours.

Once the code is returned the payment can be viewed and paid by going to the following URL: `https://payments.fire.com/{code}`

This request creates a new Fire Open Payment Payment. A code is returned that can be shared to your customers as a URL by any channel you wish.
You will need to enable the `PERM_BUSINESS_POST_PAYMENT_REQUEST` permission to use this endpoint.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NewPaymentRequestNewPaymentRequest;
import org.openapis.openapi.models.operations.NewPaymentRequestNewPaymentRequestCurrencyEnum;
import org.openapis.openapi.models.operations.NewPaymentRequestNewPaymentRequestOrderDetails;
import org.openapis.openapi.models.operations.NewPaymentRequestNewPaymentRequestTypeEnum;
import org.openapis.openapi.models.operations.NewPaymentRequestResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            NewPaymentRequestNewPaymentRequest req = new NewPaymentRequestNewPaymentRequest(NewPaymentRequestNewPaymentRequestCurrencyEnum.GBP, "Gym Fees Oct 2020", 42L, "Fees", NewPaymentRequestNewPaymentRequestTypeEnum.OTHER) {{
                additionalFields = "ORDER_ID|PRODUCT_ID|CUSTOMER_ID|CUSTOMER_NUMBER|COMMENT2";
                amount = 1000L;
                collectFields = "ADDRESS|REFERENCE|COMMENT1";
                expiry = OffsetDateTime.parse("2020-10-22T07:48:56.460Z");
                mandatoryFields = "ADDRESS|REFERENCE|COMMENT1";
                maxNumberPayments = 1L;
                orderDetails = new NewPaymentRequestNewPaymentRequestOrderDetails() {{
                    comment1 = "Additional comments about the transaction";
                    comment2 = "Additional comments about the transaction";
                    customerNumber = "123645";
                    deliveryAddressLine1 = "12 The Street";
                    deliveryAddressLine2 = "The Way";
                    deliveryCity = "London";
                    deliveryCountry = "GB";
                    deliveryPostCode = "EC15155";
                    merchantCustomerIdentification = "8303863544";
                    merchantNumber = "1234567";
                    orderId = "6c28a47d-4502-4111";
                    productId = "ZFDAA-1221";
                    variableReference = "John Doe";
                }};;
                returnUrl = "https://example.com/callback";
            }};            

            NewPaymentRequestResponse res = sdk.openBanking.newPaymentRequest(req);

            if (res.newPaymentRequestResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
