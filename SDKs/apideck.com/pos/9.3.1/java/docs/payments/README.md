# payments

### Available Operations

* [paymentsAdd](#paymentsadd) - Create Payment
* [paymentsAll](#paymentsall) - List Payments
* [paymentsDelete](#paymentsdelete) - Delete Payment
* [paymentsOne](#paymentsone) - Get Payment
* [paymentsUpdate](#paymentsupdate) - Update Payment

## paymentsAdd

Create Payment

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentsAddRequest;
import org.openapis.openapi.models.operations.PaymentsAddResponse;
import org.openapis.openapi.models.operations.PaymentsAddSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.AddressTypeEnum;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.PaymentCardCardBrandEnum;
import org.openapis.openapi.models.shared.PaymentCardCardTypeEnum;
import org.openapis.openapi.models.shared.PaymentCardInput;
import org.openapis.openapi.models.shared.PaymentCardPrepaidTypeEnum;
import org.openapis.openapi.models.shared.PosBankAccount;
import org.openapis.openapi.models.shared.PosBankAccountAchDetails;
import org.openapis.openapi.models.shared.PosPaymentCardDetailsInput;
import org.openapis.openapi.models.shared.PosPaymentCashDetails;
import org.openapis.openapi.models.shared.PosPaymentExternalDetails;
import org.openapis.openapi.models.shared.PosPaymentExternalDetailsTypeEnum;
import org.openapis.openapi.models.shared.PosPaymentInput;
import org.openapis.openapi.models.shared.PosPaymentProcessingFees;
import org.openapis.openapi.models.shared.PosPaymentProcessingFeesTypeEnum;
import org.openapis.openapi.models.shared.PosPaymentSourceEnum;
import org.openapis.openapi.models.shared.PosPaymentStatusEnum;
import org.openapis.openapi.models.shared.PosPaymentWalletDetails;
import org.openapis.openapi.models.shared.PosPaymentWalletDetailsStatusEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceChargeInput;
import org.openapis.openapi.models.shared.ServiceChargeTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PaymentsAddRequest req = new PaymentsAddRequest(                new PosPaymentInput(27.5, CurrencyEnum.USD, "12345", "12345", "12345", "12345") {{
                                appFee = 3;
                                approved = 37.5;
                                bankAccount = new PosBankAccount() {{
                                    accountOwnershipType = "voluptas";
                                    achDetails = new PosBankAccountAchDetails() {{
                                        accountNumberSuffix = "deserunt";
                                        accountType = "quam";
                                        routingNumber = "ipsum";
                                    }};;
                                    bankName = "incidunt";
                                    country = "US";
                                    fingerprint = "qui";
                                    statementDescription = "cupiditate";
                                    transferType = "maxime";
                                }};;
                                cardDetails = new PosPaymentCardDetailsInput() {{
                                    card = new PaymentCardInput() {{
                                        billingAddress = new Address() {{
                                            city = "San Francisco";
                                            contactName = "Elon Musk";
                                            country = "US";
                                            county = "Santa Clara";
                                            email = "elon@musk.com";
                                            fax = "122-111-1111";
                                            id = "123";
                                            latitude = "40.759211";
                                            line1 = "Main street";
                                            line2 = "apt #";
                                            line3 = "Suite #";
                                            line4 = "delivery instructions";
                                            longitude = "-73.984638";
                                            name = "HQ US";
                                            phoneNumber = "111-111-1111";
                                            postalCode = "94104";
                                            rowVersion = "1-12345";
                                            salutation = "Mr";
                                            state = "CA";
                                            streetNumber = "25";
                                            string = "25 Spring Street, Blackburn, VIC 3130";
                                            type = AddressTypeEnum.PRIMARY;
                                            website = "https://elonmusk.com";
                                        }};;
                                        bin = "41111";
                                        cardBrand = PaymentCardCardBrandEnum.EBT;
                                        cardType = PaymentCardCardTypeEnum.CREDIT;
                                        cardholderName = "John Doe";
                                        customerId = "12345";
                                        enabled = true;
                                        expMonth = 1L;
                                        expYear = 2022L;
                                        fingerprint = " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.";
                                        last4 = "The last 4 digits of the card number.";
                                        merchantId = "12345";
                                        prepaidType = PaymentCardPrepaidTypeEnum.PREPAID;
                                        referenceId = "card-001";
                                        version = "230320320320";
                                    }};;
                                }};;
                                cash = new PosPaymentCashDetails() {{
                                    amount = "soluta";
                                    chargeBackAmount = "dicta";
                                }};;
                                changeBackCashAmount = 20;
                                deviceId = "12345";
                                employeeId = "12345";
                                externalDetails = new PosPaymentExternalDetails("laborum", PosPaymentExternalDetailsTypeEnum.EXTERNAL) {{
                                    sourceFeeAmount = 2.5;
                                    sourceId = "incidunt";
                                }};;
                                externalPaymentId = "12345";
                                idempotencyKey = "random_string";
                                locationId = "12345";
                                merchantId = "12345";
                                processingFees = new org.openapis.openapi.models.shared.PosPaymentProcessingFees[]{{
                                    add(new PosPaymentProcessingFees() {{
                                        amount = 1.05;
                                        effectiveAt = OffsetDateTime.parse("2020-09-30T07:43:32.000Z");
                                        processingType = PosPaymentProcessingFeesTypeEnum.INITIAL;
                                    }}),
                                }};
                                refunded = 37.5;
                                serviceCharges = new org.openapis.openapi.models.shared.ServiceChargeInput[]{{
                                    add(new ServiceChargeInput() {{
                                        active = true;
                                        amount = 27500;
                                        currency = CurrencyEnum.USD;
                                        name = "Charge for delivery";
                                        percentage = 12.5;
                                        type = ServiceChargeTypeEnum.CUSTOM;
                                    }}),
                                    add(new ServiceChargeInput() {{
                                        active = true;
                                        amount = 27500;
                                        currency = CurrencyEnum.USD;
                                        name = "Charge for delivery";
                                        percentage = 12.5;
                                        type = ServiceChargeTypeEnum.AUTO_GRATUITY;
                                    }}),
                                    add(new ServiceChargeInput() {{
                                        active = true;
                                        amount = 27500;
                                        currency = CurrencyEnum.USD;
                                        name = "Charge for delivery";
                                        percentage = 12.5;
                                        type = ServiceChargeTypeEnum.AUTO_GRATUITY;
                                    }}),
                                }};
                                source = PosPaymentSourceEnum.EXTERNAL;
                                status = PosPaymentStatusEnum.APPROVED;
                                tax = 20;
                                tip = 7;
                                total = 37.5;
                                wallet = new PosPaymentWalletDetails() {{
                                    status = PosPaymentWalletDetailsStatusEnum.VOIDED;
                                }};;
                            }};, "temporibus", "qui") {{
                raw = false;
                xApideckServiceId = "neque";
            }};            

            PaymentsAddResponse res = sdk.payments.paymentsAdd(req, new PaymentsAddSecurity("fugit") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createPosPaymentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentsAll

List Payments

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentsAllRequest;
import org.openapis.openapi.models.operations.PaymentsAllResponse;
import org.openapis.openapi.models.operations.PaymentsAllSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PaymentsAllRequest req = new PaymentsAllRequest("magni", "odio") {{
                cursor = "sunt";
                fields = "ullam";
                limit = 722081L;
                raw = false;
                xApideckServiceId = "hic";
            }};            

            PaymentsAllResponse res = sdk.payments.paymentsAll(req, new PaymentsAllSecurity("voluptatem") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getPosPaymentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentsDelete

Delete Payment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentsDeleteRequest;
import org.openapis.openapi.models.operations.PaymentsDeleteResponse;
import org.openapis.openapi.models.operations.PaymentsDeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PaymentsDeleteRequest req = new PaymentsDeleteRequest("cumque", "soluta", "nobis") {{
                raw = false;
                xApideckServiceId = "et";
            }};            

            PaymentsDeleteResponse res = sdk.payments.paymentsDelete(req, new PaymentsDeleteSecurity("saepe") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deletePosPaymentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentsOne

Get Payment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentsOneRequest;
import org.openapis.openapi.models.operations.PaymentsOneResponse;
import org.openapis.openapi.models.operations.PaymentsOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PaymentsOneRequest req = new PaymentsOneRequest("ipsum", "veritatis", "nobis") {{
                fields = "quos";
                raw = false;
                xApideckServiceId = "tempore";
            }};            

            PaymentsOneResponse res = sdk.payments.paymentsOne(req, new PaymentsOneSecurity("cupiditate") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getPosPaymentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentsUpdate

Update Payment

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentsUpdateRequest;
import org.openapis.openapi.models.operations.PaymentsUpdateResponse;
import org.openapis.openapi.models.operations.PaymentsUpdateSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.AddressTypeEnum;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.PaymentCardCardBrandEnum;
import org.openapis.openapi.models.shared.PaymentCardCardTypeEnum;
import org.openapis.openapi.models.shared.PaymentCardInput;
import org.openapis.openapi.models.shared.PaymentCardPrepaidTypeEnum;
import org.openapis.openapi.models.shared.PosBankAccount;
import org.openapis.openapi.models.shared.PosBankAccountAchDetails;
import org.openapis.openapi.models.shared.PosPaymentCardDetailsInput;
import org.openapis.openapi.models.shared.PosPaymentCashDetails;
import org.openapis.openapi.models.shared.PosPaymentExternalDetails;
import org.openapis.openapi.models.shared.PosPaymentExternalDetailsTypeEnum;
import org.openapis.openapi.models.shared.PosPaymentInput;
import org.openapis.openapi.models.shared.PosPaymentProcessingFees;
import org.openapis.openapi.models.shared.PosPaymentProcessingFeesTypeEnum;
import org.openapis.openapi.models.shared.PosPaymentSourceEnum;
import org.openapis.openapi.models.shared.PosPaymentStatusEnum;
import org.openapis.openapi.models.shared.PosPaymentWalletDetails;
import org.openapis.openapi.models.shared.PosPaymentWalletDetailsStatusEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceChargeInput;
import org.openapis.openapi.models.shared.ServiceChargeTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PaymentsUpdateRequest req = new PaymentsUpdateRequest(                new PosPaymentInput(27.5, CurrencyEnum.USD, "12345", "12345", "12345", "12345") {{
                                appFee = 3;
                                approved = 37.5;
                                bankAccount = new PosBankAccount() {{
                                    accountOwnershipType = "aperiam";
                                    achDetails = new PosBankAccountAchDetails() {{
                                        accountNumberSuffix = "delectus";
                                        accountType = "dolorem";
                                        routingNumber = "dolore";
                                    }};;
                                    bankName = "labore";
                                    country = "US";
                                    fingerprint = "adipisci";
                                    statementDescription = "dolorum";
                                    transferType = "architecto";
                                }};;
                                cardDetails = new PosPaymentCardDetailsInput() {{
                                    card = new PaymentCardInput() {{
                                        billingAddress = new Address() {{
                                            city = "San Francisco";
                                            contactName = "Elon Musk";
                                            country = "US";
                                            county = "Santa Clara";
                                            email = "elon@musk.com";
                                            fax = "122-111-1111";
                                            id = "123";
                                            latitude = "40.759211";
                                            line1 = "Main street";
                                            line2 = "apt #";
                                            line3 = "Suite #";
                                            line4 = "delivery instructions";
                                            longitude = "-73.984638";
                                            name = "HQ US";
                                            phoneNumber = "111-111-1111";
                                            postalCode = "94104";
                                            rowVersion = "1-12345";
                                            salutation = "Mr";
                                            state = "CA";
                                            streetNumber = "25";
                                            string = "25 Spring Street, Blackburn, VIC 3130";
                                            type = AddressTypeEnum.PRIMARY;
                                            website = "https://elonmusk.com";
                                        }};;
                                        bin = "41111";
                                        cardBrand = PaymentCardCardBrandEnum.VISA;
                                        cardType = PaymentCardCardTypeEnum.CREDIT;
                                        cardholderName = "John Doe";
                                        customerId = "12345";
                                        enabled = true;
                                        expMonth = 1L;
                                        expYear = 2022L;
                                        fingerprint = " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.";
                                        last4 = "The last 4 digits of the card number.";
                                        merchantId = "12345";
                                        prepaidType = PaymentCardPrepaidTypeEnum.PREPAID;
                                        referenceId = "card-001";
                                        version = "230320320320";
                                    }};;
                                }};;
                                cash = new PosPaymentCashDetails() {{
                                    amount = "aut";
                                    chargeBackAmount = "quas";
                                }};;
                                changeBackCashAmount = 20;
                                deviceId = "12345";
                                employeeId = "12345";
                                externalDetails = new PosPaymentExternalDetails("itaque", PosPaymentExternalDetailsTypeEnum.CHECK) {{
                                    sourceFeeAmount = 2.5;
                                    sourceId = "est";
                                }};;
                                externalPaymentId = "12345";
                                idempotencyKey = "random_string";
                                locationId = "12345";
                                merchantId = "12345";
                                processingFees = new org.openapis.openapi.models.shared.PosPaymentProcessingFees[]{{
                                    add(new PosPaymentProcessingFees() {{
                                        amount = 1.05;
                                        effectiveAt = OffsetDateTime.parse("2020-09-30T07:43:32.000Z");
                                        processingType = PosPaymentProcessingFeesTypeEnum.ADJUSTMENT;
                                    }}),
                                    add(new PosPaymentProcessingFees() {{
                                        amount = 1.05;
                                        effectiveAt = OffsetDateTime.parse("2020-09-30T07:43:32.000Z");
                                        processingType = PosPaymentProcessingFeesTypeEnum.ADJUSTMENT;
                                    }}),
                                    add(new PosPaymentProcessingFees() {{
                                        amount = 1.05;
                                        effectiveAt = OffsetDateTime.parse("2020-09-30T07:43:32.000Z");
                                        processingType = PosPaymentProcessingFeesTypeEnum.INITIAL;
                                    }}),
                                    add(new PosPaymentProcessingFees() {{
                                        amount = 1.05;
                                        effectiveAt = OffsetDateTime.parse("2020-09-30T07:43:32.000Z");
                                        processingType = PosPaymentProcessingFeesTypeEnum.ADJUSTMENT;
                                    }}),
                                }};
                                refunded = 37.5;
                                serviceCharges = new org.openapis.openapi.models.shared.ServiceChargeInput[]{{
                                    add(new ServiceChargeInput() {{
                                        active = true;
                                        amount = 27500;
                                        currency = CurrencyEnum.USD;
                                        name = "Charge for delivery";
                                        percentage = 12.5;
                                        type = ServiceChargeTypeEnum.AUTO_GRATUITY;
                                    }}),
                                    add(new ServiceChargeInput() {{
                                        active = true;
                                        amount = 27500;
                                        currency = CurrencyEnum.USD;
                                        name = "Charge for delivery";
                                        percentage = 12.5;
                                        type = ServiceChargeTypeEnum.AUTO_GRATUITY;
                                    }}),
                                    add(new ServiceChargeInput() {{
                                        active = true;
                                        amount = 27500;
                                        currency = CurrencyEnum.USD;
                                        name = "Charge for delivery";
                                        percentage = 12.5;
                                        type = ServiceChargeTypeEnum.CUSTOM;
                                    }}),
                                }};
                                source = PosPaymentSourceEnum.EXTERNAL;
                                status = PosPaymentStatusEnum.APPROVED;
                                tax = 20;
                                tip = 7;
                                total = 37.5;
                                wallet = new PosPaymentWalletDetails() {{
                                    status = PosPaymentWalletDetailsStatusEnum.VOIDED;
                                }};;
                            }};, "occaecati", "voluptatibus", "quisquam") {{
                raw = false;
                xApideckServiceId = "vero";
            }};            

            PaymentsUpdateResponse res = sdk.payments.paymentsUpdate(req, new PaymentsUpdateSecurity("omnis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updatePosPaymentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
