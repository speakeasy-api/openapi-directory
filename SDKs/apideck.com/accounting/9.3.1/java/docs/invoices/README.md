# invoices

### Available Operations

* [invoicesAdd](#invoicesadd) - Create Invoice
* [invoicesAll](#invoicesall) - List Invoices
* [invoicesDelete](#invoicesdelete) - Delete Invoice
* [invoicesOne](#invoicesone) - Get Invoice
* [invoicesUpdate](#invoicesupdate) - Update Invoice

## invoicesAdd

Create Invoice

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvoicesAddRequest;
import org.openapis.openapi.models.operations.InvoicesAddResponse;
import org.openapis.openapi.models.operations.InvoicesAddSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.AddressTypeEnum;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.InvoiceInput;
import org.openapis.openapi.models.shared.InvoiceInvoiceTypeEnum;
import org.openapis.openapi.models.shared.InvoiceLineItemInput;
import org.openapis.openapi.models.shared.InvoiceLineItemTypeEnum;
import org.openapis.openapi.models.shared.InvoiceStatusEnum;
import org.openapis.openapi.models.shared.LinkedCustomerInput;
import org.openapis.openapi.models.shared.LinkedInvoiceItemInput;
import org.openapis.openapi.models.shared.LinkedLedgerAccountInput;
import org.openapis.openapi.models.shared.LinkedTaxRateInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InvoicesAddRequest req = new InvoicesAddRequest(                new InvoiceInput() {{
                                balance = 27500;
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
                                currency = CurrencyEnum.USD;
                                currencyRate = 0.69;
                                customer = new LinkedCustomerInput("12345") {{
                                    displayName = "Windsurf Shop";
                                    name = "Windsurf Shop";
                                }};;
                                customerMemo = "Thank you for your business and have a great day!";
                                deposit = 3185.69;
                                discountAmount = 25;
                                discountPercentage = 5.5;
                                dueDate = LocalDate.parse("2020-09-30");
                                invoiceDate = LocalDate.parse("2020-09-30");
                                invoiceSent = true;
                                lineItems = new org.openapis.openapi.models.shared.InvoiceLineItemInput[]{{
                                    add(new InvoiceLineItemInput() {{
                                        code = "120-C";
                                        departmentId = "1234";
                                        description = "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.";
                                        discountAmount = 19.99;
                                        discountPercentage = 0.01;
                                        item = new LinkedInvoiceItemInput() {{
                                            id = "12344";
                                        }};
                                        ledgerAccount = new LinkedLedgerAccountInput() {{
                                            code = "453";
                                            id = "123456";
                                            nominalCode = "N091";
                                        }};
                                        lineNumber = 1L;
                                        locationId = "1234";
                                        quantity = 1;
                                        rowId = "12345";
                                        rowVersion = "1-12345";
                                        taxAmount = 27500;
                                        taxRate = new LinkedTaxRateInput() {{
                                            id = "123456";
                                        }};
                                        totalAmount = 27500;
                                        type = InvoiceLineItemTypeEnum.SALES_ITEM;
                                        unitOfMeasure = "pc.";
                                        unitPrice = 27500.5;
                                    }}),
                                }};
                                number = "OIT00546";
                                poNumber = "90000117";
                                reference = "123456";
                                rowVersion = "1-12345";
                                shippingAddress = new Address() {{
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
                                sourceDocumentUrl = "https://www.invoicesolution.com/invoice/123456";
                                status = InvoiceStatusEnum.DRAFT;
                                subTotal = 27500;
                                taxCode = "1234";
                                taxInclusive = true;
                                templateId = "123456";
                                terms = "Net 30 days";
                                total = 27500;
                                totalTax = 2500;
                                type = InvoiceInvoiceTypeEnum.SERVICE;
                            }};, "est", "quibusdam") {{
                raw = false;
                xApideckServiceId = "explicabo";
            }};            

            InvoicesAddResponse res = sdk.invoices.invoicesAdd(req, new InvoicesAddSecurity("deserunt") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createInvoiceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## invoicesAll

List Invoices

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvoicesAllRequest;
import org.openapis.openapi.models.operations.InvoicesAllResponse;
import org.openapis.openapi.models.operations.InvoicesAllSecurity;
import org.openapis.openapi.models.shared.InvoicesSort;
import org.openapis.openapi.models.shared.InvoicesSortByEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortDirectionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InvoicesAllRequest req = new InvoicesAllRequest("distinctio", "quibusdam") {{
                cursor = "labore";
                fields = "modi";
                limit = 183191L;
                passThrough = new java.util.HashMap<String, Object>() {{
                    put("cupiditate", "quos");
                    put("perferendis", "magni");
                }};
                raw = false;
                sort = new InvoicesSort() {{
                    by = InvoicesSortByEnum.UPDATED_AT;
                    direction = SortDirectionEnum.DESC;
                }};;
                xApideckServiceId = "ipsam";
            }};            

            InvoicesAllResponse res = sdk.invoices.invoicesAll(req, new InvoicesAllSecurity("alias") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getInvoicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## invoicesDelete

Delete Invoice

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvoicesDeleteRequest;
import org.openapis.openapi.models.operations.InvoicesDeleteResponse;
import org.openapis.openapi.models.operations.InvoicesDeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InvoicesDeleteRequest req = new InvoicesDeleteRequest("fugit", "dolorum", "excepturi") {{
                raw = false;
                xApideckServiceId = "tempora";
            }};            

            InvoicesDeleteResponse res = sdk.invoices.invoicesDelete(req, new InvoicesDeleteSecurity("facilis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deleteInvoiceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## invoicesOne

Get Invoice

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvoicesOneRequest;
import org.openapis.openapi.models.operations.InvoicesOneResponse;
import org.openapis.openapi.models.operations.InvoicesOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InvoicesOneRequest req = new InvoicesOneRequest("tempore", "labore", "delectus") {{
                fields = "eum";
                raw = false;
                xApideckServiceId = "non";
            }};            

            InvoicesOneResponse res = sdk.invoices.invoicesOne(req, new InvoicesOneSecurity("eligendi") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getInvoiceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## invoicesUpdate

Update Invoice

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvoicesUpdateRequest;
import org.openapis.openapi.models.operations.InvoicesUpdateResponse;
import org.openapis.openapi.models.operations.InvoicesUpdateSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.AddressTypeEnum;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.InvoiceInput;
import org.openapis.openapi.models.shared.InvoiceInvoiceTypeEnum;
import org.openapis.openapi.models.shared.InvoiceLineItemInput;
import org.openapis.openapi.models.shared.InvoiceLineItemTypeEnum;
import org.openapis.openapi.models.shared.InvoiceStatusEnum;
import org.openapis.openapi.models.shared.LinkedCustomerInput;
import org.openapis.openapi.models.shared.LinkedInvoiceItemInput;
import org.openapis.openapi.models.shared.LinkedLedgerAccountInput;
import org.openapis.openapi.models.shared.LinkedTaxRateInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InvoicesUpdateRequest req = new InvoicesUpdateRequest(                new InvoiceInput() {{
                                balance = 27500;
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
                                currency = CurrencyEnum.USD;
                                currencyRate = 0.69;
                                customer = new LinkedCustomerInput("12345") {{
                                    displayName = "Windsurf Shop";
                                    name = "Windsurf Shop";
                                }};;
                                customerMemo = "Thank you for your business and have a great day!";
                                deposit = 5761.57;
                                discountAmount = 25;
                                discountPercentage = 5.5;
                                dueDate = LocalDate.parse("2020-09-30");
                                invoiceDate = LocalDate.parse("2020-09-30");
                                invoiceSent = true;
                                lineItems = new org.openapis.openapi.models.shared.InvoiceLineItemInput[]{{
                                    add(new InvoiceLineItemInput() {{
                                        code = "120-C";
                                        departmentId = "1234";
                                        description = "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.";
                                        discountAmount = 19.99;
                                        discountPercentage = 0.01;
                                        item = new LinkedInvoiceItemInput() {{
                                            id = "12344";
                                        }};
                                        ledgerAccount = new LinkedLedgerAccountInput() {{
                                            code = "453";
                                            id = "123456";
                                            nominalCode = "N091";
                                        }};
                                        lineNumber = 1L;
                                        locationId = "1234";
                                        quantity = 1;
                                        rowId = "12345";
                                        rowVersion = "1-12345";
                                        taxAmount = 27500;
                                        taxRate = new LinkedTaxRateInput() {{
                                            id = "123456";
                                        }};
                                        totalAmount = 27500;
                                        type = InvoiceLineItemTypeEnum.SALES_ITEM;
                                        unitOfMeasure = "pc.";
                                        unitPrice = 27500.5;
                                    }}),
                                    add(new InvoiceLineItemInput() {{
                                        code = "120-C";
                                        departmentId = "1234";
                                        description = "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.";
                                        discountAmount = 19.99;
                                        discountPercentage = 0.01;
                                        item = new LinkedInvoiceItemInput() {{
                                            id = "12344";
                                        }};
                                        ledgerAccount = new LinkedLedgerAccountInput() {{
                                            code = "453";
                                            id = "123456";
                                            nominalCode = "N091";
                                        }};
                                        lineNumber = 1L;
                                        locationId = "1234";
                                        quantity = 1;
                                        rowId = "12345";
                                        rowVersion = "1-12345";
                                        taxAmount = 27500;
                                        taxRate = new LinkedTaxRateInput() {{
                                            id = "123456";
                                        }};
                                        totalAmount = 27500;
                                        type = InvoiceLineItemTypeEnum.SALES_ITEM;
                                        unitOfMeasure = "pc.";
                                        unitPrice = 27500.5;
                                    }}),
                                }};
                                number = "OIT00546";
                                poNumber = "90000117";
                                reference = "123456";
                                rowVersion = "1-12345";
                                shippingAddress = new Address() {{
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
                                sourceDocumentUrl = "https://www.invoicesolution.com/invoice/123456";
                                status = InvoiceStatusEnum.DRAFT;
                                subTotal = 27500;
                                taxCode = "1234";
                                taxInclusive = true;
                                templateId = "123456";
                                terms = "Net 30 days";
                                total = 27500;
                                totalTax = 2500;
                                type = InvoiceInvoiceTypeEnum.SERVICE;
                            }};, "provident", "necessitatibus", "sint") {{
                raw = false;
                xApideckServiceId = "officia";
            }};            

            InvoicesUpdateResponse res = sdk.invoices.invoicesUpdate(req, new InvoicesUpdateSecurity("dolor") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateInvoiceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
