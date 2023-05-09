# bills

### Available Operations

* [billsAdd](#billsadd) - Create Bill
* [billsAll](#billsall) - List Bills
* [billsDelete](#billsdelete) - Delete Bill
* [billsOne](#billsone) - Get Bill
* [billsUpdate](#billsupdate) - Update Bill

## billsAdd

Create Bill

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BillsAddRequest;
import org.openapis.openapi.models.operations.BillsAddResponse;
import org.openapis.openapi.models.operations.BillsAddSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.AddressTypeEnum;
import org.openapis.openapi.models.shared.BillInput;
import org.openapis.openapi.models.shared.BillLineItemInput;
import org.openapis.openapi.models.shared.BillLineItemTypeEnum;
import org.openapis.openapi.models.shared.BillStatusEnum;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.LinkedInvoiceItemInput;
import org.openapis.openapi.models.shared.LinkedLedgerAccountInput;
import org.openapis.openapi.models.shared.LinkedSupplierInput;
import org.openapis.openapi.models.shared.LinkedTaxRateInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BillsAddRequest req = new BillsAddRequest(                new BillInput() {{
                                balance = 27500;
                                billDate = LocalDate.parse("2020-09-30");
                                billNumber = "10001";
                                currency = CurrencyEnum.USD;
                                currencyRate = 0.69;
                                deposit = 7917.25;
                                dueDate = LocalDate.parse("2020-10-30");
                                ledgerAccount = new LinkedLedgerAccountInput() {{
                                    code = "453";
                                    id = "123456";
                                    nominalCode = "N091";
                                }};;
                                lineItems = new org.openapis.openapi.models.shared.BillLineItemInput[]{{
                                    add(new BillLineItemInput() {{
                                        code = "120-C";
                                        departmentId = "1234";
                                        description = "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.";
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
                                        type = BillLineItemTypeEnum.EXPENSE_ACCOUNT;
                                        unitOfMeasure = "pc.";
                                        unitPrice = 27500.5;
                                    }}),
                                    add(new BillLineItemInput() {{
                                        code = "120-C";
                                        departmentId = "1234";
                                        description = "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.";
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
                                        type = BillLineItemTypeEnum.EXPENSE_ACCOUNT;
                                        unitOfMeasure = "pc.";
                                        unitPrice = 27500.5;
                                    }}),
                                    add(new BillLineItemInput() {{
                                        code = "120-C";
                                        departmentId = "1234";
                                        description = "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.";
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
                                        type = BillLineItemTypeEnum.EXPENSE_ACCOUNT;
                                        unitOfMeasure = "pc.";
                                        unitPrice = 27500.5;
                                    }}),
                                    add(new BillLineItemInput() {{
                                        code = "120-C";
                                        departmentId = "1234";
                                        description = "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.";
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
                                        type = BillLineItemTypeEnum.EXPENSE_ACCOUNT;
                                        unitOfMeasure = "pc.";
                                        unitPrice = 27500.5;
                                    }}),
                                }};
                                notes = "Some notes about this bill.";
                                paidDate = LocalDate.parse("2020-10-30");
                                poNumber = "90000117";
                                reference = "123456";
                                rowVersion = "1-12345";
                                status = BillStatusEnum.DRAFT;
                                subTotal = 27500;
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
                                taxCode = "1234";
                                taxInclusive = true;
                                terms = "Net 30 days";
                                total = 27500;
                                totalTax = 2500;
                            }};, "voluptatum", "iusto") {{
                raw = false;
                xApideckServiceId = "excepturi";
            }};            

            BillsAddResponse res = sdk.bills.billsAdd(req, new BillsAddSecurity("nisi") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createBillResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## billsAll

List Bills

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BillsAllRequest;
import org.openapis.openapi.models.operations.BillsAllResponse;
import org.openapis.openapi.models.operations.BillsAllSecurity;
import org.openapis.openapi.models.shared.BillsSort;
import org.openapis.openapi.models.shared.BillsSortByEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortDirectionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BillsAllRequest req = new BillsAllRequest("recusandae", "temporibus") {{
                cursor = "ab";
                fields = "quis";
                limit = 87129L;
                passThrough = new java.util.HashMap<String, Object>() {{
                    put("perferendis", "ipsam");
                    put("repellendus", "sapiente");
                    put("quo", "odit");
                }};
                raw = false;
                sort = new BillsSort() {{
                    by = BillsSortByEnum.UPDATED_AT;
                    direction = SortDirectionEnum.DESC;
                }};;
                xApideckServiceId = "at";
            }};            

            BillsAllResponse res = sdk.bills.billsAll(req, new BillsAllSecurity("maiores") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getBillsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## billsDelete

Delete Bill

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BillsDeleteRequest;
import org.openapis.openapi.models.operations.BillsDeleteResponse;
import org.openapis.openapi.models.operations.BillsDeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BillsDeleteRequest req = new BillsDeleteRequest("molestiae", "quod", "quod") {{
                raw = false;
                xApideckServiceId = "esse";
            }};            

            BillsDeleteResponse res = sdk.bills.billsDelete(req, new BillsDeleteSecurity("totam") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deleteBillResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## billsOne

Get Bill

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BillsOneRequest;
import org.openapis.openapi.models.operations.BillsOneResponse;
import org.openapis.openapi.models.operations.BillsOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BillsOneRequest req = new BillsOneRequest("porro", "dolorum", "dicta") {{
                fields = "nam";
                raw = false;
                xApideckServiceId = "officia";
            }};            

            BillsOneResponse res = sdk.bills.billsOne(req, new BillsOneSecurity("occaecati") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getBillResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## billsUpdate

Update Bill

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BillsUpdateRequest;
import org.openapis.openapi.models.operations.BillsUpdateResponse;
import org.openapis.openapi.models.operations.BillsUpdateSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.AddressTypeEnum;
import org.openapis.openapi.models.shared.BillInput;
import org.openapis.openapi.models.shared.BillLineItemInput;
import org.openapis.openapi.models.shared.BillLineItemTypeEnum;
import org.openapis.openapi.models.shared.BillStatusEnum;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.LinkedInvoiceItemInput;
import org.openapis.openapi.models.shared.LinkedLedgerAccountInput;
import org.openapis.openapi.models.shared.LinkedSupplierInput;
import org.openapis.openapi.models.shared.LinkedTaxRateInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BillsUpdateRequest req = new BillsUpdateRequest(                new BillInput() {{
                                balance = 27500;
                                billDate = LocalDate.parse("2020-09-30");
                                billNumber = "10001";
                                currency = CurrencyEnum.USD;
                                currencyRate = 0.69;
                                deposit = 1433.53;
                                dueDate = LocalDate.parse("2020-10-30");
                                ledgerAccount = new LinkedLedgerAccountInput() {{
                                    code = "453";
                                    id = "123456";
                                    nominalCode = "N091";
                                }};;
                                lineItems = new org.openapis.openapi.models.shared.BillLineItemInput[]{{
                                    add(new BillLineItemInput() {{
                                        code = "120-C";
                                        departmentId = "1234";
                                        description = "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.";
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
                                        type = BillLineItemTypeEnum.EXPENSE_ACCOUNT;
                                        unitOfMeasure = "pc.";
                                        unitPrice = 27500.5;
                                    }}),
                                    add(new BillLineItemInput() {{
                                        code = "120-C";
                                        departmentId = "1234";
                                        description = "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.";
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
                                        type = BillLineItemTypeEnum.EXPENSE_ACCOUNT;
                                        unitOfMeasure = "pc.";
                                        unitPrice = 27500.5;
                                    }}),
                                    add(new BillLineItemInput() {{
                                        code = "120-C";
                                        departmentId = "1234";
                                        description = "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.";
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
                                        type = BillLineItemTypeEnum.EXPENSE_ACCOUNT;
                                        unitOfMeasure = "pc.";
                                        unitPrice = 27500.5;
                                    }}),
                                }};
                                notes = "Some notes about this bill.";
                                paidDate = LocalDate.parse("2020-10-30");
                                poNumber = "90000117";
                                reference = "123456";
                                rowVersion = "1-12345";
                                status = BillStatusEnum.DRAFT;
                                subTotal = 27500;
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
                                taxCode = "1234";
                                taxInclusive = true;
                                terms = "Net 30 days";
                                total = 27500;
                                totalTax = 2500;
                            }};, "hic", "optio", "totam") {{
                raw = false;
                xApideckServiceId = "beatae";
            }};            

            BillsUpdateResponse res = sdk.bills.billsUpdate(req, new BillsUpdateSecurity("commodi") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateBillResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
