# invoiceItems

## Overview

Invoice items are stored from invoice lines to be used later on when creating new invoices.

### Available Operations

* [invoiceItemsAdd](#invoiceitemsadd) - Create Invoice Item
* [invoiceItemsAll](#invoiceitemsall) - List Invoice Items
* [invoiceItemsDelete](#invoiceitemsdelete) - Delete Invoice Item
* [invoiceItemsOne](#invoiceitemsone) - Get Invoice Item
* [invoiceItemsUpdate](#invoiceitemsupdate) - Update Invoice Item

## invoiceItemsAdd

Create Invoice Item

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvoiceItemsAddRequest;
import org.openapis.openapi.models.operations.InvoiceItemsAddResponse;
import org.openapis.openapi.models.operations.InvoiceItemsAddSecurity;
import org.openapis.openapi.models.shared.InvoiceItemInput;
import org.openapis.openapi.models.shared.InvoiceItemPurchaseDetailsInput;
import org.openapis.openapi.models.shared.InvoiceItemSalesDetailsInput;
import org.openapis.openapi.models.shared.InvoiceItemTypeEnum;
import org.openapis.openapi.models.shared.LinkedLedgerAccountInput;
import org.openapis.openapi.models.shared.LinkedTaxRateInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InvoiceItemsAddRequest req = new InvoiceItemsAddRequest(                new InvoiceItemInput() {{
                                active = true;
                                assetAccount = new LinkedLedgerAccountInput() {{
                                    code = "453";
                                    id = "123456";
                                    nominalCode = "N091";
                                }};;
                                code = "120-C";
                                description = "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.";
                                expenseAccount = new LinkedLedgerAccountInput() {{
                                    code = "453";
                                    id = "123456";
                                    nominalCode = "N091";
                                }};;
                                incomeAccount = new LinkedLedgerAccountInput() {{
                                    code = "453";
                                    id = "123456";
                                    nominalCode = "N091";
                                }};;
                                inventoryDate = LocalDate.parse("2020-10-30");
                                name = "Model Y";
                                purchaseDetails = new InvoiceItemPurchaseDetailsInput() {{
                                    taxInclusive = true;
                                    taxRate = new LinkedTaxRateInput() {{
                                        id = "123456";
                                    }};;
                                    unitOfMeasure = "pc.";
                                    unitPrice = 27500.5;
                                }};;
                                purchased = true;
                                quantity = 1;
                                rowVersion = "1-12345";
                                salesDetails = new InvoiceItemSalesDetailsInput() {{
                                    taxInclusive = true;
                                    taxRate = new LinkedTaxRateInput() {{
                                        id = "123456";
                                    }};;
                                    unitOfMeasure = "pc.";
                                    unitPrice = 27500.5;
                                }};;
                                sold = true;
                                taxable = true;
                                tracked = true;
                                type = InvoiceItemTypeEnum.INVENTORY;
                                unitPrice = 27500.5;
                            }};, "cum", "perferendis") {{
                raw = false;
                xApideckServiceId = "doloremque";
            }};            

            InvoiceItemsAddResponse res = sdk.invoiceItems.invoiceItemsAdd(req, new InvoiceItemsAddSecurity("reprehenderit") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createInvoiceItemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## invoiceItemsAll

List Invoice Items

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvoiceItemsAllRequest;
import org.openapis.openapi.models.operations.InvoiceItemsAllResponse;
import org.openapis.openapi.models.operations.InvoiceItemsAllSecurity;
import org.openapis.openapi.models.shared.InvoiceItemsFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InvoiceItemsAllRequest req = new InvoiceItemsAllRequest("ut", "maiores") {{
                cursor = "dicta";
                fields = "corporis";
                filter = new InvoiceItemsFilter() {{
                    name = "Widgets Large";
                }};;
                limit = 296140L;
                passThrough = new java.util.HashMap<String, Object>() {{
                    put("dicta", "harum");
                    put("enim", "accusamus");
                }};
                raw = false;
                xApideckServiceId = "commodi";
            }};            

            InvoiceItemsAllResponse res = sdk.invoiceItems.invoiceItemsAll(req, new InvoiceItemsAllSecurity("repudiandae") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getInvoiceItemsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## invoiceItemsDelete

Delete Invoice Item

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvoiceItemsDeleteRequest;
import org.openapis.openapi.models.operations.InvoiceItemsDeleteResponse;
import org.openapis.openapi.models.operations.InvoiceItemsDeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InvoiceItemsDeleteRequest req = new InvoiceItemsDeleteRequest("quae", "ipsum", "quidem") {{
                raw = false;
                xApideckServiceId = "molestias";
            }};            

            InvoiceItemsDeleteResponse res = sdk.invoiceItems.invoiceItemsDelete(req, new InvoiceItemsDeleteSecurity("excepturi") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deleteTaxRateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## invoiceItemsOne

Get Invoice Item

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvoiceItemsOneRequest;
import org.openapis.openapi.models.operations.InvoiceItemsOneResponse;
import org.openapis.openapi.models.operations.InvoiceItemsOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InvoiceItemsOneRequest req = new InvoiceItemsOneRequest("pariatur", "modi", "praesentium") {{
                fields = "rem";
                raw = false;
                xApideckServiceId = "voluptates";
            }};            

            InvoiceItemsOneResponse res = sdk.invoiceItems.invoiceItemsOne(req, new InvoiceItemsOneSecurity("quasi") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getInvoiceItemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## invoiceItemsUpdate

Update Invoice Item

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvoiceItemsUpdateRequest;
import org.openapis.openapi.models.operations.InvoiceItemsUpdateResponse;
import org.openapis.openapi.models.operations.InvoiceItemsUpdateSecurity;
import org.openapis.openapi.models.shared.InvoiceItemInput;
import org.openapis.openapi.models.shared.InvoiceItemPurchaseDetailsInput;
import org.openapis.openapi.models.shared.InvoiceItemSalesDetailsInput;
import org.openapis.openapi.models.shared.InvoiceItemTypeEnum;
import org.openapis.openapi.models.shared.LinkedLedgerAccountInput;
import org.openapis.openapi.models.shared.LinkedTaxRateInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InvoiceItemsUpdateRequest req = new InvoiceItemsUpdateRequest(                new InvoiceItemInput() {{
                                active = true;
                                assetAccount = new LinkedLedgerAccountInput() {{
                                    code = "453";
                                    id = "123456";
                                    nominalCode = "N091";
                                }};;
                                code = "120-C";
                                description = "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.";
                                expenseAccount = new LinkedLedgerAccountInput() {{
                                    code = "453";
                                    id = "123456";
                                    nominalCode = "N091";
                                }};;
                                incomeAccount = new LinkedLedgerAccountInput() {{
                                    code = "453";
                                    id = "123456";
                                    nominalCode = "N091";
                                }};;
                                inventoryDate = LocalDate.parse("2020-10-30");
                                name = "Model Y";
                                purchaseDetails = new InvoiceItemPurchaseDetailsInput() {{
                                    taxInclusive = true;
                                    taxRate = new LinkedTaxRateInput() {{
                                        id = "123456";
                                    }};;
                                    unitOfMeasure = "pc.";
                                    unitPrice = 27500.5;
                                }};;
                                purchased = true;
                                quantity = 1;
                                rowVersion = "1-12345";
                                salesDetails = new InvoiceItemSalesDetailsInput() {{
                                    taxInclusive = true;
                                    taxRate = new LinkedTaxRateInput() {{
                                        id = "123456";
                                    }};;
                                    unitOfMeasure = "pc.";
                                    unitPrice = 27500.5;
                                }};;
                                sold = true;
                                taxable = true;
                                tracked = true;
                                type = InvoiceItemTypeEnum.INVENTORY;
                                unitPrice = 27500.5;
                            }};, "repudiandae", "sint", "veritatis") {{
                raw = false;
                xApideckServiceId = "itaque";
            }};            

            InvoiceItemsUpdateResponse res = sdk.invoiceItems.invoiceItemsUpdate(req, new InvoiceItemsUpdateSecurity("incidunt") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateInvoiceItemsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
