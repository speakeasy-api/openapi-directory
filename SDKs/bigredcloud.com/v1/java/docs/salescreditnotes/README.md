# salesCreditNotes

### Available Operations

* [salesCreditNotesDelete](#salescreditnotesdelete) - Removes an existing Sales Credit Note.
* [salesCreditNotesGet](#salescreditnotesget) - Returns a list of company's Sales Credit Notes. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* [salesCreditNotesPost](#salescreditnotespost) - Creates a new Sales Credit Note.
* [salesCreditNotesProcessBatch](#salescreditnotesprocessbatch) - Processes a batch of Sales Credit Notes.
* [salesCreditNotesPut](#salescreditnotesput) - Updates an existing Sales Credit Note.
* [getV1SalesCreditNotesId](#getv1salescreditnotesid) - Returns information about a single Sales Credit Note.

## salesCreditNotesDelete

Removes an existing Sales Credit Note.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SalesCreditNotesDeleteRequest;
import org.openapis.openapi.models.operations.SalesCreditNotesDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SalesCreditNotesDeleteRequest req = new SalesCreditNotesDeleteRequest(279172L, "recusandae");            

            SalesCreditNotesDeleteResponse res = sdk.salesCreditNotes.salesCreditNotesDelete(req);

            if (res.salesCreditNotesDelete200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## salesCreditNotesGet

Returns a list of company's Sales Credit Notes. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SalesCreditNotesGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SalesCreditNotesGetResponse res = sdk.salesCreditNotes.salesCreditNotesGet();

            if (res.pageResultSalesCreditNoteQueryDto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## salesCreditNotesPost

Creates a new Sales Credit Note.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SalesCreditNotesPostResponse;
import org.openapis.openapi.models.shared.AcEntryDto;
import org.openapis.openapi.models.shared.AcudfValueDto;
import org.openapis.openapi.models.shared.ProductTranDto;
import org.openapis.openapi.models.shared.SalesInvoiceCreditNoteDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SalesInvoiceCreditNoteDto req = new SalesInvoiceCreditNoteDto() {{
                acCode = "quod";
                bookTranTypeId = 664666L;
                customFields = new org.openapis.openapi.models.shared.AcudfValueDto[]{{
                    add(new AcudfValueDto() {{
                        description = "autem";
                        id = 779409L;
                        userDefinedFieldId = 198991L;
                        value = "illum";
                    }}),
                    add(new AcudfValueDto() {{
                        description = "nemo";
                        id = 848722L;
                        userDefinedFieldId = 706872L;
                        value = "non";
                    }}),
                    add(new AcudfValueDto() {{
                        description = "mollitia";
                        id = 827051L;
                        userDefinedFieldId = 927977L;
                        value = "distinctio";
                    }}),
                    add(new AcudfValueDto() {{
                        description = "pariatur";
                        id = 323365L;
                        userDefinedFieldId = 816151L;
                        value = "laborum";
                    }}),
                }};
                customerId = 911451L;
                deliveryTo = new String[]{{
                    add("incidunt"),
                    add("maxime"),
                    add("ipsam"),
                }};
                details = "alias";
                entryDate = OffsetDateTime.parse("2022-05-09T18:26:29.549Z");
                id = 560451L;
                loType = "laborum";
                netGoods = 6682.18;
                netServices = 5774.13;
                note = "labore";
                ourReference = "quo";
                procDate = OffsetDateTime.parse("2022-11-09T14:41:22.235Z");
                productTrans = new org.openapis.openapi.models.shared.ProductTranDto[]{{
                    add(new ProductTranDto(93.75) {{
                        acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                            add(new AcEntryDto() {{
                                accountCode = "quaerat";
                                analysisCategoryId = 755868L;
                                description = "hic";
                                id = 342921L;
                                value = 8882.65;
                            }}),
                            add(new AcEntryDto() {{
                                accountCode = "unde";
                                analysisCategoryId = 860311L;
                                description = "error";
                                id = 653000L;
                                value = 2986.13;
                            }}),
                        }};
                        amount = 3442.89;
                        amountNet = 4609.09;
                        id = 548849L;
                        percentage = 6847.99;
                        productCode = "facere";
                        productId = 773659L;
                        quantity = 986.1;
                        tranNotes = new String[]{{
                            add("quod"),
                            add("laboriosam"),
                            add("doloremque"),
                        }};
                        unitPrice = 315.74;
                        vat = 8164.21;
                        vatAnalysisTypeId = 901008L;
                        vatRateId = 807564L;
                    }}),
                    add(new ProductTranDto(9382.57) {{
                        acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                            add(new AcEntryDto() {{
                                accountCode = "architecto";
                                analysisCategoryId = 627161L;
                                description = "porro";
                                id = 502453L;
                                value = 608.92;
                            }}),
                        }};
                        amount = 1698.19;
                        amountNet = 8857.97;
                        id = 148379L;
                        percentage = 8981.11;
                        productCode = "impedit";
                        productId = 55981L;
                        quantity = 5676.93;
                        tranNotes = new String[]{{
                            add("maiores"),
                            add("laudantium"),
                            add("maiores"),
                            add("alias"),
                        }};
                        unitPrice = 9926.67;
                        vat = 5233.65;
                        vatAnalysisTypeId = 118615L;
                        vatRateId = 380595L;
                    }}),
                }};
                quoteId = 985360L;
                reference = "velit";
                saleRepCode = "eius";
                saleRepId = 458212L;
                timestamp = "in";
                total = 7574.07;
                totalNet = 946.97;
                totalVAT = 2036.21;
                unpaid = 8766.49;
                vatTypeId = 566312L;
                yourReference = "accusantium";
            }};            

            SalesCreditNotesPostResponse res = sdk.salesCreditNotes.salesCreditNotesPost(req);

            if (res.salesCreditNotesPost200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## salesCreditNotesProcessBatch

Processes a batch of Sales Credit Notes.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SalesCreditNotesProcessBatchResponse;
import org.openapis.openapi.models.shared.AcEntryDto;
import org.openapis.openapi.models.shared.AcudfValueDto;
import org.openapis.openapi.models.shared.BatchItemSalesInvoiceCreditNoteDto;
import org.openapis.openapi.models.shared.BatchItemSalesInvoiceCreditNoteDtoOpCodeEnum;
import org.openapis.openapi.models.shared.ProductTranDto;
import org.openapis.openapi.models.shared.SalesInvoiceCreditNoteDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new org.openapis.openapi.models.shared.BatchItemSalesInvoiceCreditNoteDto[]{{
                add(new BatchItemSalesInvoiceCreditNoteDto() {{
                    item = new SalesInvoiceCreditNoteDto() {{
                        acCode = "impedit";
                        bookTranTypeId = 104736L;
                        customFields = new org.openapis.openapi.models.shared.AcudfValueDto[]{{
                            add(new AcudfValueDto() {{
                                description = "dicta";
                                id = 139133L;
                                userDefinedFieldId = 357639L;
                                value = "rerum";
                            }}),
                            add(new AcudfValueDto() {{
                                description = "alias";
                                id = 624498L;
                                userDefinedFieldId = 424854L;
                                value = "accusantium";
                            }}),
                        }};
                        customerId = 664197L;
                        deliveryTo = new String[]{{
                            add("ex"),
                            add("quas"),
                        }};
                        details = "veritatis";
                        entryDate = OffsetDateTime.parse("2022-12-09T02:50:43.097Z");
                        id = 631719L;
                        loType = "incidunt";
                        netGoods = 4625.83;
                        netServices = 1693.12;
                        note = "deserunt";
                        ourReference = "delectus";
                        procDate = OffsetDateTime.parse("2022-09-12T14:26:46.203Z");
                        productTrans = new org.openapis.openapi.models.shared.ProductTranDto[]{{
                            add(new ProductTranDto(4598.75) {{
                                acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                                    add(new AcEntryDto() {{
                                        accountCode = "quis";
                                        analysisCategoryId = 586108L;
                                        description = "aliquam";
                                        id = 569287L;
                                        value = 9804.1;
                                    }}),
                                    add(new AcEntryDto() {{
                                        accountCode = "laudantium";
                                        analysisCategoryId = 243904L;
                                        description = "reiciendis";
                                        id = 230305L;
                                        value = 3638.45;
                                    }}),
                                    add(new AcEntryDto() {{
                                        accountCode = "ipsa";
                                        analysisCategoryId = 787916L;
                                        description = "tenetur";
                                        id = 555294L;
                                        value = 4760.03;
                                    }}),
                                    add(new AcEntryDto() {{
                                        accountCode = "aliquid";
                                        analysisCategoryId = 989033L;
                                        description = "a";
                                        id = 749702L;
                                        value = 5983.16;
                                    }}),
                                }};
                                amount = 342.45;
                                amountNet = 1189.17;
                                id = 795546L;
                                percentage = 4175.39;
                                productCode = "eveniet";
                                productId = 781582L;
                                quantity = 7357.4;
                                tranNotes = new String[]{{
                                    add("modi"),
                                    add("voluptates"),
                                    add("fugit"),
                                }};
                                unitPrice = 2593.77;
                                vat = 1940.58;
                                vatAnalysisTypeId = 758194L;
                                vatRateId = 992887L;
                            }}),
                        }};
                        quoteId = 500021L;
                        reference = "sint";
                        saleRepCode = "repellat";
                        saleRepId = 955047L;
                        timestamp = "animi";
                        total = 9792.87;
                        totalNet = 9304.29;
                        totalVAT = 8615.91;
                        unpaid = 6434.19;
                        vatTypeId = 359097L;
                        yourReference = "velit";
                    }};
                    opCode = BatchItemSalesInvoiceCreditNoteDtoOpCodeEnum.THREE;
                }}),
            }}            

            SalesCreditNotesProcessBatchResponse res = sdk.salesCreditNotes.salesCreditNotesProcessBatch(req);

            if (res.salesCreditNotesProcessBatch200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## salesCreditNotesPut

Updates an existing Sales Credit Note.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SalesCreditNotesPutRequest;
import org.openapis.openapi.models.operations.SalesCreditNotesPutResponse;
import org.openapis.openapi.models.shared.AcEntryDto;
import org.openapis.openapi.models.shared.AcudfValueDto;
import org.openapis.openapi.models.shared.ProductTranDto;
import org.openapis.openapi.models.shared.SalesInvoiceCreditNoteDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SalesCreditNotesPutRequest req = new SalesCreditNotesPutRequest(                new SalesInvoiceCreditNoteDto() {{
                                acCode = "enim";
                                bookTranTypeId = 638609L;
                                customFields = new org.openapis.openapi.models.shared.AcudfValueDto[]{{
                                    add(new AcudfValueDto() {{
                                        description = "eum";
                                        id = 922094L;
                                        userDefinedFieldId = 35742L;
                                        value = "officia";
                                    }}),
                                    add(new AcudfValueDto() {{
                                        description = "impedit";
                                        id = 97896L;
                                        userDefinedFieldId = 502106L;
                                        value = "eius";
                                    }}),
                                    add(new AcudfValueDto() {{
                                        description = "quisquam";
                                        id = 177929L;
                                        userDefinedFieldId = 748023L;
                                        value = "natus";
                                    }}),
                                    add(new AcudfValueDto() {{
                                        description = "minus";
                                        id = 154389L;
                                        userDefinedFieldId = 300651L;
                                        value = "reprehenderit";
                                    }}),
                                }};
                                customerId = 800799L;
                                deliveryTo = new String[]{{
                                    add("corrupti"),
                                    add("amet"),
                                    add("molestiae"),
                                }};
                                details = "amet";
                                entryDate = OffsetDateTime.parse("2022-06-20T03:06:33.282Z");
                                id = 21358L;
                                loType = "necessitatibus";
                                netGoods = 1023.16;
                                netServices = 5646.27;
                                note = "dolore";
                                ourReference = "sunt";
                                procDate = OffsetDateTime.parse("2022-05-21T12:17:59.359Z");
                                productTrans = new org.openapis.openapi.models.shared.ProductTranDto[]{{
                                    add(new ProductTranDto(2425.31) {{
                                        acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                                            add(new AcEntryDto() {{
                                                accountCode = "veniam";
                                                analysisCategoryId = 373106L;
                                                description = "eaque";
                                                id = 350387L;
                                                value = 3312.69;
                                            }}),
                                            add(new AcEntryDto() {{
                                                accountCode = "nihil";
                                                analysisCategoryId = 320326L;
                                                description = "nisi";
                                                id = 946808L;
                                                value = 3382.81;
                                            }}),
                                            add(new AcEntryDto() {{
                                                accountCode = "quibusdam";
                                                analysisCategoryId = 366480L;
                                                description = "suscipit";
                                                id = 866459L;
                                                value = 247.69;
                                            }}),
                                            add(new AcEntryDto() {{
                                                accountCode = "quidem";
                                                analysisCategoryId = 831031L;
                                                description = "perferendis";
                                                id = 660536L;
                                                value = 9581.46;
                                            }}),
                                        }};
                                        amount = 1523.64;
                                        amountNet = 8235.72;
                                        id = 996072L;
                                        percentage = 9210.6;
                                        productCode = "architecto";
                                        productId = 240696L;
                                        quantity = 8671.15;
                                        tranNotes = new String[]{{
                                            add("dolore"),
                                            add("voluptatibus"),
                                            add("iure"),
                                        }};
                                        unitPrice = 1270.87;
                                        vat = 7954.57;
                                        vatAnalysisTypeId = 746688L;
                                        vatRateId = 677509L;
                                    }}),
                                }};
                                quoteId = 937865L;
                                reference = "praesentium";
                                saleRepCode = "error";
                                saleRepId = 252473L;
                                timestamp = "quasi";
                                total = 6490.32;
                                totalNet = 8843.61;
                                totalVAT = 6875.89;
                                unpaid = 7691.56;
                                vatTypeId = 42615L;
                                yourReference = "expedita";
                            }};, 549237L);            

            SalesCreditNotesPutResponse res = sdk.salesCreditNotes.salesCreditNotesPut(req);

            if (res.salesCreditNotesPut200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV1SalesCreditNotesId

Returns information about a single Sales Credit Note.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV1SalesCreditNotesIdRequest;
import org.openapis.openapi.models.operations.GetV1SalesCreditNotesIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV1SalesCreditNotesIdRequest req = new GetV1SalesCreditNotesIdRequest(53733L);            

            GetV1SalesCreditNotesIdResponse res = sdk.salesCreditNotes.getV1SalesCreditNotesId(req);

            if (res.salesInvoiceCreditNoteDto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
