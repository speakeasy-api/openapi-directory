# paymentInstruments

### Available Operations

* [getPaymentInstrumentsId](#getpaymentinstrumentsid) - Get a payment instrument
* [getPaymentInstrumentsIdReveal](#getpaymentinstrumentsidreveal) - Get the PAN of a payment instrument
* [getPaymentInstrumentsIdTransactionRules](#getpaymentinstrumentsidtransactionrules) - Get all transaction rules for a payment instrument
* [patchPaymentInstrumentsId](#patchpaymentinstrumentsid) - Update a payment instrument
* [postPaymentInstruments](#postpaymentinstruments) - Create a payment instrument

## getPaymentInstrumentsId

Returns the details of a payment instrument.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaymentInstrumentsIdRequest;
import org.openapis.openapi.models.operations.GetPaymentInstrumentsIdResponse;
import org.openapis.openapi.models.operations.GetPaymentInstrumentsIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPaymentInstrumentsIdRequest req = new GetPaymentInstrumentsIdRequest("facilis");            

            GetPaymentInstrumentsIdResponse res = sdk.paymentInstruments.getPaymentInstrumentsId(req, new GetPaymentInstrumentsIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.paymentInstrument != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPaymentInstrumentsIdReveal

Returns the primary account number (PAN) of a payment instrument.

To make this request, your API credential must have the following [role](https://docs.adyen.com/issuing/manage-access/api-credentials-web-service#api-permissions):

* Balance Platform BCL PCI role

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaymentInstrumentsIdRevealRequest;
import org.openapis.openapi.models.operations.GetPaymentInstrumentsIdRevealResponse;
import org.openapis.openapi.models.operations.GetPaymentInstrumentsIdRevealSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPaymentInstrumentsIdRevealRequest req = new GetPaymentInstrumentsIdRevealRequest("vero");            

            GetPaymentInstrumentsIdRevealResponse res = sdk.paymentInstruments.getPaymentInstrumentsIdReveal(req, new GetPaymentInstrumentsIdRevealSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.paymentInstrumentRevealInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPaymentInstrumentsIdTransactionRules

Returns a list of transaction rules associated with a payment instrument.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaymentInstrumentsIdTransactionRulesRequest;
import org.openapis.openapi.models.operations.GetPaymentInstrumentsIdTransactionRulesResponse;
import org.openapis.openapi.models.operations.GetPaymentInstrumentsIdTransactionRulesSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPaymentInstrumentsIdTransactionRulesRequest req = new GetPaymentInstrumentsIdTransactionRulesRequest("ducimus");            

            GetPaymentInstrumentsIdTransactionRulesResponse res = sdk.paymentInstruments.getPaymentInstrumentsIdTransactionRules(req, new GetPaymentInstrumentsIdTransactionRulesSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.transactionRulesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchPaymentInstrumentsId

Updates a payment instrument. Once a payment instrument is already active, you can only update its status. However, for cards created with **inactive** status, you can still update the balance account associated with the card.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchPaymentInstrumentsIdRequest;
import org.openapis.openapi.models.operations.PatchPaymentInstrumentsIdResponse;
import org.openapis.openapi.models.operations.PatchPaymentInstrumentsIdSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.Authentication;
import org.openapis.openapi.models.shared.BulkAddress;
import org.openapis.openapi.models.shared.CardConfiguration;
import org.openapis.openapi.models.shared.CardInfo;
import org.openapis.openapi.models.shared.CardInfoFormFactorEnum;
import org.openapis.openapi.models.shared.Contact;
import org.openapis.openapi.models.shared.Name;
import org.openapis.openapi.models.shared.PaymentInstrumentUpdateRequest;
import org.openapis.openapi.models.shared.PaymentInstrumentUpdateRequestStatusEnum;
import org.openapis.openapi.models.shared.PersonalData;
import org.openapis.openapi.models.shared.Phone;
import org.openapis.openapi.models.shared.PhoneNumber;
import org.openapis.openapi.models.shared.PhoneNumberPhoneTypeEnum;
import org.openapis.openapi.models.shared.PhoneTypeEnum;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchPaymentInstrumentsIdRequest req = new PatchPaymentInstrumentsIdRequest("dolore") {{
                paymentInstrumentUpdateRequest = new PaymentInstrumentUpdateRequest() {{
                    balanceAccountId = "quibusdam";
                    card = new CardInfo("illum", "sequi", "natus", CardInfoFormFactorEnum.VIRTUAL) {{
                        authentication = new Authentication() {{
                            email = "Webster.Heidenreich78@gmail.com";
                            password = "maiores";
                            phone = new Phone("doloribus", PhoneTypeEnum.LANDLINE);;
                        }};;
                        configuration = new CardConfiguration("eligendi") {{
                            activation = "ducimus";
                            activationUrl = "alias";
                            bulkAddress = new BulkAddress("officia") {{
                                city = "West Hallie";
                                company = "Keebler Group";
                                email = "Clarabelle.Jacobs@gmail.com";
                                houseNumberOrName = "dolor";
                                mobile = "248.693.9794 x73330";
                                postalCode = "47291";
                                stateOrProvince = "minima";
                                street = "97005 Haag Creek";
                            }};;
                            cardImageId = "accusamus";
                            carrier = "inventore";
                            carrierImageId = "non";
                            currency = "et";
                            envelope = "dolorum";
                            insert = "laborum";
                            language = "placeat";
                            logoImageId = "velit";
                            pinMailer = "eum";
                            shipmentMethod = "autem";
                        }};;
                        deliveryContact = new Contact() {{
                            address = new Address("nobis", "quas", "assumenda", "nulla", "voluptas") {{
                                stateOrProvince = "libero";
                            }};;
                            email = "Don59@gmail.com";
                            fullPhoneNumber = "ipsa";
                            name = new Name("molestiae", "magnam");;
                            personalData = new PersonalData() {{
                                dateOfBirth = "odio";
                                idNumber = "eius";
                                nationality = "esse";
                            }};;
                            phoneNumber = new PhoneNumber() {{
                                phoneCountryCode = "esse";
                                phoneNumber = "rem";
                                phoneType = PhoneNumberPhoneTypeEnum.MOBILE;
                            }};;
                            webAddress = "reprehenderit";
                        }};;
                    }};;
                    status = PaymentInstrumentUpdateRequestStatusEnum.SUSPENDED;
                    statusComment = "fugiat";
                }};;
            }};            

            PatchPaymentInstrumentsIdResponse res = sdk.paymentInstruments.patchPaymentInstrumentsId(req, new PatchPaymentInstrumentsIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.updatePaymentInstrument != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPaymentInstruments

Creates a payment instrument to issue a physical card, a virtual card, or a business account to your user.

 For more information, refer to [Issue cards](https://docs.adyen.com/issuing/create-cards) or [Issue business accounts](https://docs.adyen.com/marketplaces-and-platforms/business-accounts).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPaymentInstrumentsResponse;
import org.openapis.openapi.models.operations.PostPaymentInstrumentsSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.Authentication;
import org.openapis.openapi.models.shared.BulkAddress;
import org.openapis.openapi.models.shared.CardConfiguration;
import org.openapis.openapi.models.shared.CardInfo;
import org.openapis.openapi.models.shared.CardInfoFormFactorEnum;
import org.openapis.openapi.models.shared.Contact;
import org.openapis.openapi.models.shared.Name;
import org.openapis.openapi.models.shared.PaymentInstrumentInfo;
import org.openapis.openapi.models.shared.PaymentInstrumentInfoStatusEnum;
import org.openapis.openapi.models.shared.PaymentInstrumentInfoTypeEnum;
import org.openapis.openapi.models.shared.PersonalData;
import org.openapis.openapi.models.shared.Phone;
import org.openapis.openapi.models.shared.PhoneNumber;
import org.openapis.openapi.models.shared.PhoneNumberPhoneTypeEnum;
import org.openapis.openapi.models.shared.PhoneTypeEnum;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.PaymentInstrumentInfo req = new PaymentInstrumentInfo("ut", "eum", PaymentInstrumentInfoTypeEnum.BANK_ACCOUNT) {{
                card = new CardInfo("assumenda", "eos", "praesentium", CardInfoFormFactorEnum.VIRTUAL) {{
                    authentication = new Authentication() {{
                        email = "Anahi.Olson77@gmail.com";
                        password = "illum";
                        phone = new Phone("quo", PhoneTypeEnum.MOBILE);;
                    }};;
                    configuration = new CardConfiguration("eius") {{
                        activation = "eos";
                        activationUrl = "voluptas";
                        bulkAddress = new BulkAddress("ab") {{
                            city = "Adeliaboro";
                            company = "Hilpert, Collier and Donnelly";
                            email = "Jaida71@hotmail.com";
                            houseNumberOrName = "quod";
                            mobile = "245.934.5491 x640";
                            postalCode = "45515-1662";
                            stateOrProvince = "atque";
                            street = "33191 Braxton Union";
                        }};;
                        cardImageId = "occaecati";
                        carrier = "atque";
                        carrierImageId = "et";
                        currency = "esse";
                        envelope = "eveniet";
                        insert = "accusamus";
                        language = "veritatis";
                        logoImageId = "esse";
                        pinMailer = "quod";
                        shipmentMethod = "nam";
                    }};;
                    deliveryContact = new Contact() {{
                        address = new Address("vero", "aliquid", "quasi", "saepe", "vel") {{
                            stateOrProvince = "harum";
                        }};;
                        email = "Maximus71@yahoo.com";
                        fullPhoneNumber = "eligendi";
                        name = new Name("sit", "culpa");;
                        personalData = new PersonalData() {{
                            dateOfBirth = "tempore";
                            idNumber = "adipisci";
                            nationality = "cumque";
                        }};;
                        phoneNumber = new PhoneNumber() {{
                            phoneCountryCode = "consequuntur";
                            phoneNumber = "consequatur";
                            phoneType = PhoneNumberPhoneTypeEnum.SIP;
                        }};;
                        webAddress = "quaerat";
                    }};;
                }};;
                description = "sapiente";
                paymentInstrumentGroupId = "consectetur";
                reference = "esse";
                status = PaymentInstrumentInfoStatusEnum.REQUESTED;
            }};            

            PostPaymentInstrumentsResponse res = sdk.paymentInstruments.postPaymentInstruments(req, new PostPaymentInstrumentsSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.paymentInstrument != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
