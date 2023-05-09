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
import org.openapis.openapi.models.shared.LinkedCustomerInput;
import org.openapis.openapi.models.shared.LinkedLedgerAccountInput;
import org.openapis.openapi.models.shared.LinkedSupplierInput;
import org.openapis.openapi.models.shared.PaymentAllocationsAllocationTypeEnum;
import org.openapis.openapi.models.shared.PaymentAllocationsInput;
import org.openapis.openapi.models.shared.PaymentInput;
import org.openapis.openapi.models.shared.PaymentPaymentStatusEnum;
import org.openapis.openapi.models.shared.PaymentPaymentTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PaymentsAddRequest req = new PaymentsAddRequest(                new PaymentInput(49.99, OffsetDateTime.parse("2021-05-01T12:00:00.000Z")) {{
                                account = new LinkedLedgerAccountInput() {{
                                    code = "453";
                                    id = "123456";
                                    nominalCode = "N091";
                                }};;
                                accountsReceivableAccountId = "123456";
                                accountsReceivableAccountType = "Account";
                                allocations = new org.openapis.openapi.models.shared.PaymentAllocationsInput[]{{
                                    add(new PaymentAllocationsInput() {{
                                        amount = 49.99;
                                        id = "123456";
                                        type = PaymentAllocationsAllocationTypeEnum.PRE_PAYMENT;
                                    }}),
                                    add(new PaymentAllocationsInput() {{
                                        amount = 49.99;
                                        id = "123456";
                                        type = PaymentAllocationsAllocationTypeEnum.INVOICE;
                                    }}),
                                    add(new PaymentAllocationsInput() {{
                                        amount = 49.99;
                                        id = "123456";
                                        type = PaymentAllocationsAllocationTypeEnum.INVOICE;
                                    }}),
                                    add(new PaymentAllocationsInput() {{
                                        amount = 49.99;
                                        id = "123456";
                                        type = PaymentAllocationsAllocationTypeEnum.CREDIT_MEMO;
                                    }}),
                                }};
                                currency = CurrencyEnum.USD;
                                currencyRate = 0.69;
                                customer = new LinkedCustomerInput("12345") {{
                                    displayName = "Windsurf Shop";
                                    name = "Windsurf Shop";
                                }};;
                                displayId = "123456";
                                note = "Some notes about this payment";
                                paymentMethod = "Credit Card";
                                paymentMethodId = "123456";
                                paymentMethodReference = "123456";
                                reconciled = true;
                                reference = "123456";
                                rowVersion = "1-12345";
                                status = PaymentPaymentStatusEnum.AUTHORISED;
                                supplier = new LinkedSupplierInput("12345") {{
                                    address = new Address() {{
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
                                    displayName = "Windsurf Shop";
                                }};;
                                type = PaymentPaymentTypeEnum.ACCOUNTS_RECEIVABLE;
                            }};, "natus", "magni") {{
                raw = false;
                xApideckServiceId = "sunt";
            }};            

            PaymentsAddResponse res = sdk.payments.paymentsAdd(req, new PaymentsAddSecurity("quo") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createPaymentResponse != null) {
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

            PaymentsAllRequest req = new PaymentsAllRequest("illum", "pariatur") {{
                cursor = "maxime";
                fields = "ea";
                limit = 569101L;
                passThrough = new java.util.HashMap<String, Object>() {{
                    put("ea", "accusantium");
                }};
                raw = false;
                xApideckServiceId = "ab";
            }};            

            PaymentsAllResponse res = sdk.payments.paymentsAll(req, new PaymentsAllSecurity("maiores") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getPaymentsResponse != null) {
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

            PaymentsDeleteRequest req = new PaymentsDeleteRequest("quidem", "ipsam", "voluptate") {{
                raw = false;
                xApideckServiceId = "autem";
            }};            

            PaymentsDeleteResponse res = sdk.payments.paymentsDelete(req, new PaymentsDeleteSecurity("nam") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deletePaymentResponse != null) {
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

            PaymentsOneRequest req = new PaymentsOneRequest("eaque", "pariatur", "nemo") {{
                fields = "voluptatibus";
                raw = false;
                xApideckServiceId = "perferendis";
            }};            

            PaymentsOneResponse res = sdk.payments.paymentsOne(req, new PaymentsOneSecurity("fugiat") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getPaymentResponse != null) {
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
import org.openapis.openapi.models.shared.LinkedCustomerInput;
import org.openapis.openapi.models.shared.LinkedLedgerAccountInput;
import org.openapis.openapi.models.shared.LinkedSupplierInput;
import org.openapis.openapi.models.shared.PaymentAllocationsAllocationTypeEnum;
import org.openapis.openapi.models.shared.PaymentAllocationsInput;
import org.openapis.openapi.models.shared.PaymentInput;
import org.openapis.openapi.models.shared.PaymentPaymentStatusEnum;
import org.openapis.openapi.models.shared.PaymentPaymentTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PaymentsUpdateRequest req = new PaymentsUpdateRequest(                new PaymentInput(49.99, OffsetDateTime.parse("2021-05-01T12:00:00.000Z")) {{
                                account = new LinkedLedgerAccountInput() {{
                                    code = "453";
                                    id = "123456";
                                    nominalCode = "N091";
                                }};;
                                accountsReceivableAccountId = "123456";
                                accountsReceivableAccountType = "Account";
                                allocations = new org.openapis.openapi.models.shared.PaymentAllocationsInput[]{{
                                    add(new PaymentAllocationsInput() {{
                                        amount = 49.99;
                                        id = "123456";
                                        type = PaymentAllocationsAllocationTypeEnum.INVOICE;
                                    }}),
                                }};
                                currency = CurrencyEnum.USD;
                                currencyRate = 0.69;
                                customer = new LinkedCustomerInput("12345") {{
                                    displayName = "Windsurf Shop";
                                    name = "Windsurf Shop";
                                }};;
                                displayId = "123456";
                                note = "Some notes about this payment";
                                paymentMethod = "Credit Card";
                                paymentMethodId = "123456";
                                paymentMethodReference = "123456";
                                reconciled = true;
                                reference = "123456";
                                rowVersion = "1-12345";
                                status = PaymentPaymentStatusEnum.AUTHORISED;
                                supplier = new LinkedSupplierInput("12345") {{
                                    address = new Address() {{
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
                                    displayName = "Windsurf Shop";
                                }};;
                                type = PaymentPaymentTypeEnum.ACCOUNTS_RECEIVABLE;
                            }};, "cumque", "corporis", "hic") {{
                raw = false;
                xApideckServiceId = "libero";
            }};            

            PaymentsUpdateResponse res = sdk.payments.paymentsUpdate(req, new PaymentsUpdateSecurity("nobis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updatePaymentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
