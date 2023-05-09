# creditNotes

### Available Operations

* [creditNotesAdd](#creditnotesadd) - Create Credit Note
* [creditNotesAll](#creditnotesall) - List Credit Notes
* [creditNotesDelete](#creditnotesdelete) - Delete Credit Note
* [creditNotesOne](#creditnotesone) - Get Credit Note
* [creditNotesUpdate](#creditnotesupdate) - Update Credit Note

## creditNotesAdd

Create Credit Note

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreditNotesAddRequest;
import org.openapis.openapi.models.operations.CreditNotesAddResponse;
import org.openapis.openapi.models.operations.CreditNotesAddSecurity;
import org.openapis.openapi.models.shared.CreditNoteAllocationsAllocationTypeEnum;
import org.openapis.openapi.models.shared.CreditNoteAllocationsInput;
import org.openapis.openapi.models.shared.CreditNoteCreditNoteStatusEnum;
import org.openapis.openapi.models.shared.CreditNoteCreditNoteTypeEnum;
import org.openapis.openapi.models.shared.CreditNoteInput;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.InvoiceLineItemInput;
import org.openapis.openapi.models.shared.InvoiceLineItemTypeEnum;
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

            CreditNotesAddRequest req = new CreditNotesAddRequest(                new CreditNoteInput(49.99) {{
                                account = new LinkedLedgerAccountInput() {{
                                    code = "453";
                                    id = "123456";
                                    nominalCode = "N091";
                                }};;
                                allocations = new org.openapis.openapi.models.shared.CreditNoteAllocationsInput[]{{
                                    add(new CreditNoteAllocationsInput() {{
                                        amount = 49.99;
                                        id = "123456";
                                        type = CreditNoteAllocationsAllocationTypeEnum.ORDER;
                                    }}),
                                    add(new CreditNoteAllocationsInput() {{
                                        amount = 49.99;
                                        id = "123456";
                                        type = CreditNoteAllocationsAllocationTypeEnum.CREDIT_MEMO;
                                    }}),
                                }};
                                balance = 27500;
                                currency = CurrencyEnum.USD;
                                currencyRate = 0.69;
                                customer = new LinkedCustomerInput("12345") {{
                                    displayName = "Windsurf Shop";
                                    name = "Windsurf Shop";
                                }};;
                                dateIssued = OffsetDateTime.parse("2021-05-01T12:00:00.000Z");
                                datePaid = OffsetDateTime.parse("2021-05-01T12:00:00.000Z");
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
                                note = "Some notes about this credit note";
                                number = "OIT00546";
                                reference = "123456";
                                remainingCredit = 27500;
                                rowVersion = "1-12345";
                                status = CreditNoteCreditNoteStatusEnum.AUTHORISED;
                                subTotal = 27500;
                                taxCode = "1234";
                                taxInclusive = true;
                                terms = "Some terms about this credit note";
                                totalTax = 2500;
                                type = CreditNoteCreditNoteTypeEnum.ACCOUNTS_RECEIVABLE_CREDIT;
                            }};, "perferendis", "ad") {{
                raw = false;
                xApideckServiceId = "natus";
            }};            

            CreditNotesAddResponse res = sdk.creditNotes.creditNotesAdd(req, new CreditNotesAddSecurity("sed") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createCreditNoteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## creditNotesAll

List Credit Notes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreditNotesAllRequest;
import org.openapis.openapi.models.operations.CreditNotesAllResponse;
import org.openapis.openapi.models.operations.CreditNotesAllSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreditNotesAllRequest req = new CreditNotesAllRequest("iste", "dolor") {{
                cursor = "natus";
                fields = "laboriosam";
                limit = 943749L;
                passThrough = new java.util.HashMap<String, Object>() {{
                    put("fuga", "in");
                    put("corporis", "iste");
                    put("iure", "saepe");
                    put("quidem", "architecto");
                }};
                raw = false;
                xApideckServiceId = "ipsa";
            }};            

            CreditNotesAllResponse res = sdk.creditNotes.creditNotesAll(req, new CreditNotesAllSecurity("reiciendis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getCreditNotesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## creditNotesDelete

Delete Credit Note

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreditNotesDeleteRequest;
import org.openapis.openapi.models.operations.CreditNotesDeleteResponse;
import org.openapis.openapi.models.operations.CreditNotesDeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreditNotesDeleteRequest req = new CreditNotesDeleteRequest("est", "mollitia", "laborum") {{
                raw = false;
                xApideckServiceId = "dolores";
            }};            

            CreditNotesDeleteResponse res = sdk.creditNotes.creditNotesDelete(req, new CreditNotesDeleteSecurity("dolorem") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deleteCreditNoteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## creditNotesOne

Get Credit Note

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreditNotesOneRequest;
import org.openapis.openapi.models.operations.CreditNotesOneResponse;
import org.openapis.openapi.models.operations.CreditNotesOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreditNotesOneRequest req = new CreditNotesOneRequest("corporis", "explicabo", "nobis") {{
                fields = "enim";
                raw = false;
                xApideckServiceId = "omnis";
            }};            

            CreditNotesOneResponse res = sdk.creditNotes.creditNotesOne(req, new CreditNotesOneSecurity("nemo") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getCreditNoteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## creditNotesUpdate

Update Credit Note

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreditNotesUpdateRequest;
import org.openapis.openapi.models.operations.CreditNotesUpdateResponse;
import org.openapis.openapi.models.operations.CreditNotesUpdateSecurity;
import org.openapis.openapi.models.shared.CreditNoteAllocationsAllocationTypeEnum;
import org.openapis.openapi.models.shared.CreditNoteAllocationsInput;
import org.openapis.openapi.models.shared.CreditNoteCreditNoteStatusEnum;
import org.openapis.openapi.models.shared.CreditNoteCreditNoteTypeEnum;
import org.openapis.openapi.models.shared.CreditNoteInput;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.InvoiceLineItemInput;
import org.openapis.openapi.models.shared.InvoiceLineItemTypeEnum;
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

            CreditNotesUpdateRequest req = new CreditNotesUpdateRequest(                new CreditNoteInput(49.99) {{
                                account = new LinkedLedgerAccountInput() {{
                                    code = "453";
                                    id = "123456";
                                    nominalCode = "N091";
                                }};;
                                allocations = new org.openapis.openapi.models.shared.CreditNoteAllocationsInput[]{{
                                    add(new CreditNoteAllocationsInput() {{
                                        amount = 49.99;
                                        id = "123456";
                                        type = CreditNoteAllocationsAllocationTypeEnum.CREDIT_MEMO;
                                    }}),
                                    add(new CreditNoteAllocationsInput() {{
                                        amount = 49.99;
                                        id = "123456";
                                        type = CreditNoteAllocationsAllocationTypeEnum.INVOICE;
                                    }}),
                                }};
                                balance = 27500;
                                currency = CurrencyEnum.USD;
                                currencyRate = 0.69;
                                customer = new LinkedCustomerInput("12345") {{
                                    displayName = "Windsurf Shop";
                                    name = "Windsurf Shop";
                                }};;
                                dateIssued = OffsetDateTime.parse("2021-05-01T12:00:00.000Z");
                                datePaid = OffsetDateTime.parse("2021-05-01T12:00:00.000Z");
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
                                note = "Some notes about this credit note";
                                number = "OIT00546";
                                reference = "123456";
                                remainingCredit = 27500;
                                rowVersion = "1-12345";
                                status = CreditNoteCreditNoteStatusEnum.AUTHORISED;
                                subTotal = 27500;
                                taxCode = "1234";
                                taxInclusive = true;
                                terms = "Some terms about this credit note";
                                totalTax = 2500;
                                type = CreditNoteCreditNoteTypeEnum.ACCOUNTS_RECEIVABLE_CREDIT;
                            }};, "culpa", "doloribus", "sapiente") {{
                raw = false;
                xApideckServiceId = "architecto";
            }};            

            CreditNotesUpdateResponse res = sdk.creditNotes.creditNotesUpdate(req, new CreditNotesUpdateSecurity("mollitia") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateCreditNoteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
