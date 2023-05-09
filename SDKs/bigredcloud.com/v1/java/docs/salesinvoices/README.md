# salesInvoices

### Available Operations

* [salesInvoicesDelete](#salesinvoicesdelete) - Removes an existing Sales Invoice.
* [salesInvoicesGet](#salesinvoicesget) - Returns a list of company's Sales Invoices. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* [salesInvoicesPost](#salesinvoicespost) - Creates a new Sales Invoice.
* [salesInvoicesPostCreateSaleInvoiceWithGeneratingReference](#salesinvoicespostcreatesaleinvoicewithgeneratingreference) - Creates a new Sale Invoice with auto generating reference.
* [salesInvoicesProcessBatch](#salesinvoicesprocessbatch) - Processes a batch of Sales Invoices.
* [salesInvoicesPut](#salesinvoicesput) - Updates an existing Sales Invoice.
* [getV1SalesInvoicesId](#getv1salesinvoicesid) - Returns information about a single Sales Invoice.

## salesInvoicesDelete

Removes an existing Sales Invoice.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SalesInvoicesDeleteRequest;
import org.openapis.openapi.models.operations.SalesInvoicesDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SalesInvoicesDeleteRequest req = new SalesInvoicesDeleteRequest(461050L, "eveniet");            

            SalesInvoicesDeleteResponse res = sdk.salesInvoices.salesInvoicesDelete(req);

            if (res.salesInvoicesDelete200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## salesInvoicesGet

Returns a list of company's Sales Invoices. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SalesInvoicesGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SalesInvoicesGetResponse res = sdk.salesInvoices.salesInvoicesGet();

            if (res.pageResultSalesInvoiceQueryDto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## salesInvoicesPost

Creates a new Sales Invoice.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SalesInvoicesPostResponse;
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
                acCode = "earum";
                bookTranTypeId = 246402L;
                customFields = new org.openapis.openapi.models.shared.AcudfValueDto[]{{
                    add(new AcudfValueDto() {{
                        description = "eius";
                        id = 701978L;
                        userDefinedFieldId = 930111L;
                        value = "dignissimos";
                    }}),
                    add(new AcudfValueDto() {{
                        description = "ipsam";
                        id = 131687L;
                        userDefinedFieldId = 771632L;
                        value = "aliquid";
                    }}),
                    add(new AcudfValueDto() {{
                        description = "quis";
                        id = 704402L;
                        userDefinedFieldId = 218128L;
                        value = "ut";
                    }}),
                    add(new AcudfValueDto() {{
                        description = "quaerat";
                        id = 103988L;
                        userDefinedFieldId = 506966L;
                        value = "eveniet";
                    }}),
                }};
                customerId = 221781L;
                deliveryTo = new String[]{{
                    add("libero"),
                    add("iste"),
                    add("illo"),
                }};
                details = "minus";
                entryDate = OffsetDateTime.parse("2021-04-30T23:28:53.180Z");
                id = 576657L;
                loType = "iusto";
                netGoods = 3156.71;
                netServices = 8811.89;
                note = "aperiam";
                ourReference = "voluptates";
                procDate = OffsetDateTime.parse("2022-06-16T18:25:28.288Z");
                productTrans = new org.openapis.openapi.models.shared.ProductTranDto[]{{
                    add(new ProductTranDto(6428.04) {{
                        acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                            add(new AcEntryDto() {{
                                accountCode = "illum";
                                analysisCategoryId = 526584L;
                                description = "tenetur";
                                id = 537946L;
                                value = 2649.58;
                            }}),
                            add(new AcEntryDto() {{
                                accountCode = "earum";
                                analysisCategoryId = 101374L;
                                description = "aliquam";
                                id = 286726L;
                                value = 9834.34;
                            }}),
                            add(new AcEntryDto() {{
                                accountCode = "sequi";
                                analysisCategoryId = 902132L;
                                description = "consequatur";
                                id = 458723L;
                                value = 8913.02;
                            }}),
                        }};
                        amount = 8174.54;
                        amountNet = 7890.16;
                        id = 769047L;
                        percentage = 3028.78;
                        productCode = "dolorum";
                        productId = 644827L;
                        quantity = 3198.34;
                        tranNotes = new String[]{{
                            add("sequi"),
                            add("porro"),
                            add("laborum"),
                            add("nobis"),
                        }};
                        unitPrice = 8429.74;
                        vat = 6076.24;
                        vatAnalysisTypeId = 16252L;
                        vatRateId = 369941L;
                    }}),
                }};
                quoteId = 584640L;
                reference = "reprehenderit";
                saleRepCode = "quia";
                saleRepId = 898088L;
                timestamp = "accusantium";
                total = 3214.73;
                totalNet = 3927.52;
                totalVAT = 4741.85;
                unpaid = 1541.3;
                vatTypeId = 514767L;
                yourReference = "sed";
            }};            

            SalesInvoicesPostResponse res = sdk.salesInvoices.salesInvoicesPost(req);

            if (res.salesInvoicesPost200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## salesInvoicesPostCreateSaleInvoiceWithGeneratingReference

Creates a new Sale Invoice with auto generating reference.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SalesInvoicesPostCreateSaleInvoiceWithGeneratingReferenceResponse;
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
                acCode = "odit";
                bookTranTypeId = 479830L;
                customFields = new org.openapis.openapi.models.shared.AcudfValueDto[]{{
                    add(new AcudfValueDto() {{
                        description = "eos";
                        id = 830477L;
                        userDefinedFieldId = 199879L;
                        value = "ipsa";
                    }}),
                    add(new AcudfValueDto() {{
                        description = "sint";
                        id = 291389L;
                        userDefinedFieldId = 457063L;
                        value = "accusantium";
                    }}),
                    add(new AcudfValueDto() {{
                        description = "distinctio";
                        id = 956545L;
                        userDefinedFieldId = 463050L;
                        value = "est";
                    }}),
                }};
                customerId = 307306L;
                deliveryTo = new String[]{{
                    add("culpa"),
                    add("voluptatum"),
                    add("iusto"),
                    add("quod"),
                }};
                details = "voluptatibus";
                entryDate = OffsetDateTime.parse("2022-10-02T13:33:28.563Z");
                id = 353819L;
                loType = "laborum";
                netGoods = 3782.68;
                netServices = 9873.71;
                note = "animi";
                ourReference = "recusandae";
                procDate = OffsetDateTime.parse("2022-09-30T19:30:44.770Z");
                productTrans = new org.openapis.openapi.models.shared.ProductTranDto[]{{
                    add(new ProductTranDto(5886.62) {{
                        acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                            add(new AcEntryDto() {{
                                accountCode = "maiores";
                                analysisCategoryId = 386538L;
                                description = "voluptatem";
                                id = 759490L;
                                value = 1936.23;
                            }}),
                            add(new AcEntryDto() {{
                                accountCode = "sunt";
                                analysisCategoryId = 112250L;
                                description = "voluptatibus";
                                id = 42364L;
                                value = 1494.98;
                            }}),
                            add(new AcEntryDto() {{
                                accountCode = "amet";
                                analysisCategoryId = 699536L;
                                description = "in";
                                id = 345514L;
                                value = 8369.91;
                            }}),
                        }};
                        amount = 1869.37;
                        amountNet = 2218.24;
                        id = 390854L;
                        percentage = 4939.45;
                        productCode = "reiciendis";
                        productId = 929619L;
                        quantity = 1147.67;
                        tranNotes = new String[]{{
                            add("accusantium"),
                            add("quod"),
                            add("minus"),
                        }};
                        unitPrice = 5509.94;
                        vat = 8199.96;
                        vatAnalysisTypeId = 980467L;
                        vatRateId = 485795L;
                    }}),
                    add(new ProductTranDto(7726.28) {{
                        acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                            add(new AcEntryDto() {{
                                accountCode = "aperiam";
                                analysisCategoryId = 627717L;
                                description = "nesciunt";
                                id = 590998L;
                                value = 4047.74;
                            }}),
                            add(new AcEntryDto() {{
                                accountCode = "repellendus";
                                analysisCategoryId = 601277L;
                                description = "alias";
                                id = 771931L;
                                value = 1967;
                            }}),
                            add(new AcEntryDto() {{
                                accountCode = "commodi";
                                analysisCategoryId = 287141L;
                                description = "expedita";
                                id = 446737L;
                                value = 7898.7;
                            }}),
                            add(new AcEntryDto() {{
                                accountCode = "sunt";
                                analysisCategoryId = 317260L;
                                description = "nulla";
                                id = 979271L;
                                value = 7156.22;
                            }}),
                        }};
                        amount = 6496.57;
                        amountNet = 7709.97;
                        id = 880998L;
                        percentage = 911.2;
                        productCode = "quas";
                        productId = 501462L;
                        quantity = 7416.03;
                        tranNotes = new String[]{{
                            add("impedit"),
                        }};
                        unitPrice = 2740.4;
                        vat = 9082.49;
                        vatAnalysisTypeId = 920548L;
                        vatRateId = 150349L;
                    }}),
                    add(new ProductTranDto(1384.36) {{
                        acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                            add(new AcEntryDto() {{
                                accountCode = "impedit";
                                analysisCategoryId = 428378L;
                                description = "eligendi";
                                id = 923159L;
                                value = 4046.43;
                            }}),
                            add(new AcEntryDto() {{
                                accountCode = "beatae";
                                analysisCategoryId = 86955L;
                                description = "maiores";
                                id = 930877L;
                                value = 8754.52;
                            }}),
                            add(new AcEntryDto() {{
                                accountCode = "quidem";
                                analysisCategoryId = 73826L;
                                description = "quo";
                                id = 490966L;
                                value = 7916.15;
                            }}),
                        }};
                        amount = 7175.6;
                        amountNet = 8233.41;
                        id = 738152L;
                        percentage = 3823.42;
                        productCode = "saepe";
                        productId = 934782L;
                        quantity = 7998.66;
                        tranNotes = new String[]{{
                            add("quaerat"),
                            add("ipsum"),
                        }};
                        unitPrice = 4984.35;
                        vat = 5146.25;
                        vatAnalysisTypeId = 701786L;
                        vatRateId = 643997L;
                    }}),
                    add(new ProductTranDto(8406.41) {{
                        acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                            add(new AcEntryDto() {{
                                accountCode = "sequi";
                                analysisCategoryId = 106806L;
                                description = "iusto";
                                id = 456865L;
                                value = 2982.46;
                            }}),
                            add(new AcEntryDto() {{
                                accountCode = "odio";
                                analysisCategoryId = 862560L;
                                description = "impedit";
                                id = 586277L;
                                value = 724.22;
                            }}),
                        }};
                        amount = 3486.65;
                        amountNet = 6704.3;
                        id = 848833L;
                        percentage = 1479.89;
                        productCode = "maxime";
                        productId = 681115L;
                        quantity = 9983.55;
                        tranNotes = new String[]{{
                            add("illum"),
                            add("quibusdam"),
                        }};
                        unitPrice = 4144.56;
                        vat = 4563.71;
                        vatAnalysisTypeId = 127499L;
                        vatRateId = 233708L;
                    }}),
                }};
                quoteId = 762525L;
                reference = "ipsa";
                saleRepCode = "maiores";
                saleRepId = 350271L;
                timestamp = "culpa";
                total = 9197.38;
                totalNet = 1344.28;
                totalVAT = 9607.67;
                unpaid = 2043.73;
                vatTypeId = 640565L;
                yourReference = "suscipit";
            }};            

            SalesInvoicesPostCreateSaleInvoiceWithGeneratingReferenceResponse res = sdk.salesInvoices.salesInvoicesPostCreateSaleInvoiceWithGeneratingReference(req);

            if (res.salesInvoicesPostCreateSaleInvoiceWithGeneratingReference200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## salesInvoicesProcessBatch

Processes a batch of Sales Invoices.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SalesInvoicesProcessBatchResponse;
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
                        acCode = "ducimus";
                        bookTranTypeId = 42454L;
                        customFields = new org.openapis.openapi.models.shared.AcudfValueDto[]{{
                            add(new AcudfValueDto() {{
                                description = "laudantium";
                                id = 481704L;
                                userDefinedFieldId = 546868L;
                                value = "molestiae";
                            }}),
                        }};
                        customerId = 340101L;
                        deliveryTo = new String[]{{
                            add("ab"),
                            add("quaerat"),
                        }};
                        details = "amet";
                        entryDate = OffsetDateTime.parse("2021-12-05T00:10:54.956Z");
                        id = 666005L;
                        loType = "iure";
                        netGoods = 7876.29;
                        netServices = 5909.27;
                        note = "laudantium";
                        ourReference = "nam";
                        procDate = OffsetDateTime.parse("2022-09-07T01:32:40.422Z");
                        productTrans = new org.openapis.openapi.models.shared.ProductTranDto[]{{
                            add(new ProductTranDto(5881.58) {{
                                acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                                    add(new AcEntryDto() {{
                                        accountCode = "tempora";
                                        analysisCategoryId = 19691L;
                                        description = "corrupti";
                                        id = 40874L;
                                        value = 8541.37;
                                    }}),
                                    add(new AcEntryDto() {{
                                        accountCode = "numquam";
                                        analysisCategoryId = 39202L;
                                        description = "cum";
                                        id = 751298L;
                                        value = 6283.14;
                                    }}),
                                }};
                                amount = 7837.64;
                                amountNet = 7697.89;
                                id = 394724L;
                                percentage = 7689.2;
                                productCode = "soluta";
                                productId = 856568L;
                                quantity = 3892.87;
                                tranNotes = new String[]{{
                                    add("enim"),
                                    add("maiores"),
                                    add("consectetur"),
                                }};
                                unitPrice = 8988.26;
                                vat = 8037.92;
                                vatAnalysisTypeId = 586717L;
                                vatRateId = 29080L;
                            }}),
                            add(new ProductTranDto(4526.53) {{
                                acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                                    add(new AcEntryDto() {{
                                        accountCode = "accusantium";
                                        analysisCategoryId = 301360L;
                                        description = "repellat";
                                        id = 607631L;
                                        value = 1315.76;
                                    }}),
                                }};
                                amount = 4258.17;
                                amountNet = 7403.47;
                                id = 663062L;
                                percentage = 8210.16;
                                productCode = "fugit";
                                productId = 373054L;
                                quantity = 3434.54;
                                tranNotes = new String[]{{
                                    add("voluptatum"),
                                }};
                                unitPrice = 987.59;
                                vat = 6225.66;
                                vatAnalysisTypeId = 748606L;
                                vatRateId = 269600L;
                            }}),
                        }};
                        quoteId = 261170L;
                        reference = "expedita";
                        saleRepCode = "aperiam";
                        saleRepId = 915408L;
                        timestamp = "possimus";
                        total = 1465.83;
                        totalNet = 279.46;
                        totalVAT = 9191.71;
                        unpaid = 3606.35;
                        vatTypeId = 411626L;
                        yourReference = "eos";
                    }};
                    opCode = BatchItemSalesInvoiceCreditNoteDtoOpCodeEnum.ONE;
                }}),
                add(new BatchItemSalesInvoiceCreditNoteDto() {{
                    item = new SalesInvoiceCreditNoteDto() {{
                        acCode = "blanditiis";
                        bookTranTypeId = 943063L;
                        customFields = new org.openapis.openapi.models.shared.AcudfValueDto[]{{
                            add(new AcudfValueDto() {{
                                description = "asperiores";
                                id = 420985L;
                                userDefinedFieldId = 198892L;
                                value = "cupiditate";
                            }}),
                            add(new AcudfValueDto() {{
                                description = "animi";
                                id = 591171L;
                                userDefinedFieldId = 106495L;
                                value = "ipsa";
                            }}),
                            add(new AcudfValueDto() {{
                                description = "mollitia";
                                id = 721138L;
                                userDefinedFieldId = 827314L;
                                value = "quo";
                            }}),
                            add(new AcudfValueDto() {{
                                description = "fuga";
                                id = 733763L;
                                userDefinedFieldId = 417333L;
                                value = "fugit";
                            }}),
                        }};
                        customerId = 383066L;
                        deliveryTo = new String[]{{
                            add("nisi"),
                            add("aliquid"),
                        }};
                        details = "provident";
                        entryDate = OffsetDateTime.parse("2022-02-13T05:28:14.380Z");
                        id = 68292L;
                        loType = "itaque";
                        netGoods = 7903.05;
                        netServices = 535.29;
                        note = "alias";
                        ourReference = "qui";
                        procDate = OffsetDateTime.parse("2022-11-21T00:54:53.039Z");
                        productTrans = new org.openapis.openapi.models.shared.ProductTranDto[]{{
                            add(new ProductTranDto(8756.93) {{
                                acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                                    add(new AcEntryDto() {{
                                        accountCode = "amet";
                                        analysisCategoryId = 346608L;
                                        description = "illum";
                                        id = 506532L;
                                        value = 6016.26;
                                    }}),
                                }};
                                amount = 6294.61;
                                amountNet = 7532.61;
                                id = 732142L;
                                percentage = 2258.09;
                                productCode = "debitis";
                                productId = 751381L;
                                quantity = 9890.89;
                                tranNotes = new String[]{{
                                    add("id"),
                                    add("atque"),
                                    add("quibusdam"),
                                    add("sit"),
                                }};
                                unitPrice = 7780.39;
                                vat = 3299.73;
                                vatAnalysisTypeId = 307532L;
                                vatRateId = 591143L;
                            }}),
                            add(new ProductTranDto(2359.7) {{
                                acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                                    add(new AcEntryDto() {{
                                        accountCode = "doloremque";
                                        analysisCategoryId = 217504L;
                                        description = "alias";
                                        id = 43715L;
                                        value = 2737.32;
                                    }}),
                                    add(new AcEntryDto() {{
                                        accountCode = "perspiciatis";
                                        analysisCategoryId = 462097L;
                                        description = "atque";
                                        id = 638363L;
                                        value = 4064.93;
                                    }}),
                                    add(new AcEntryDto() {{
                                        accountCode = "architecto";
                                        analysisCategoryId = 953564L;
                                        description = "laborum";
                                        id = 84288L;
                                        value = 8018.16;
                                    }}),
                                    add(new AcEntryDto() {{
                                        accountCode = "a";
                                        analysisCategoryId = 185313L;
                                        description = "accusantium";
                                        id = 415125L;
                                        value = 5389.44;
                                    }}),
                                }};
                                amount = 5199.85;
                                amountNet = 9456.37;
                                id = 451807L;
                                percentage = 4617.54;
                                productCode = "quod";
                                productId = 110247L;
                                quantity = 9605.23;
                                tranNotes = new String[]{{
                                    add("quod"),
                                    add("voluptate"),
                                    add("inventore"),
                                    add("facere"),
                                }};
                                unitPrice = 8049.36;
                                vat = 6815.78;
                                vatAnalysisTypeId = 66596L;
                                vatRateId = 405789L;
                            }}),
                            add(new ProductTranDto(928.51) {{
                                acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                                    add(new AcEntryDto() {{
                                        accountCode = "sed";
                                        analysisCategoryId = 657141L;
                                        description = "sequi";
                                        id = 757471L;
                                        value = 5283.15;
                                    }}),
                                    add(new AcEntryDto() {{
                                        accountCode = "perferendis";
                                        analysisCategoryId = 671690L;
                                        description = "omnis";
                                        id = 470321L;
                                        value = 9451.9;
                                    }}),
                                    add(new AcEntryDto() {{
                                        accountCode = "sapiente";
                                        analysisCategoryId = 242013L;
                                        description = "adipisci";
                                        id = 250298L;
                                        value = 7631.4;
                                    }}),
                                    add(new AcEntryDto() {{
                                        accountCode = "illum";
                                        analysisCategoryId = 870183L;
                                        description = "tenetur";
                                        id = 562066L;
                                        value = 3712.95;
                                    }}),
                                }};
                                amount = 4562.22;
                                amountNet = 6757.55;
                                id = 596185L;
                                percentage = 9156.47;
                                productCode = "eum";
                                productId = 95123L;
                                quantity = 5551.94;
                                tranNotes = new String[]{{
                                    add("commodi"),
                                    add("porro"),
                                }};
                                unitPrice = 4004.7;
                                vat = 6484.97;
                                vatAnalysisTypeId = 695347L;
                                vatRateId = 126512L;
                            }}),
                        }};
                        quoteId = 860027L;
                        reference = "magni";
                        saleRepCode = "natus";
                        saleRepId = 851199L;
                        timestamp = "a";
                        total = 7710.78;
                        totalNet = 6018.03;
                        totalVAT = 2814.54;
                        unpaid = 8145.85;
                        vatTypeId = 377269L;
                        yourReference = "doloribus";
                    }};
                    opCode = BatchItemSalesInvoiceCreditNoteDtoOpCodeEnum.THREE;
                }}),
                add(new BatchItemSalesInvoiceCreditNoteDto() {{
                    item = new SalesInvoiceCreditNoteDto() {{
                        acCode = "quisquam";
                        bookTranTypeId = 818078L;
                        customFields = new org.openapis.openapi.models.shared.AcudfValueDto[]{{
                            add(new AcudfValueDto() {{
                                description = "iste";
                                id = 588473L;
                                userDefinedFieldId = 221490L;
                                value = "sint";
                            }}),
                            add(new AcudfValueDto() {{
                                description = "aperiam";
                                id = 49456L;
                                userDefinedFieldId = 431258L;
                                value = "laboriosam";
                            }}),
                        }};
                        customerId = 672627L;
                        deliveryTo = new String[]{{
                            add("assumenda"),
                            add("explicabo"),
                        }};
                        details = "fugiat";
                        entryDate = OffsetDateTime.parse("2022-12-20T00:52:58.130Z");
                        id = 4747L;
                        loType = "velit";
                        netGoods = 3568.05;
                        netServices = 3390.94;
                        note = "velit";
                        ourReference = "ratione";
                        procDate = OffsetDateTime.parse("2021-05-24T19:52:17.085Z");
                        productTrans = new org.openapis.openapi.models.shared.ProductTranDto[]{{
                            add(new ProductTranDto(8436.79) {{
                                acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                                    add(new AcEntryDto() {{
                                        accountCode = "doloremque";
                                        analysisCategoryId = 516833L;
                                        description = "iure";
                                        id = 982927L;
                                        value = 6676.46;
                                    }}),
                                    add(new AcEntryDto() {{
                                        accountCode = "fugit";
                                        analysisCategoryId = 84207L;
                                        description = "necessitatibus";
                                        id = 611970L;
                                        value = 1164.63;
                                    }}),
                                    add(new AcEntryDto() {{
                                        accountCode = "ipsam";
                                        analysisCategoryId = 163181L;
                                        description = "cumque";
                                        id = 696219L;
                                        value = 2476.15;
                                    }}),
                                    add(new AcEntryDto() {{
                                        accountCode = "beatae";
                                        analysisCategoryId = 123495L;
                                        description = "molestias";
                                        id = 107042L;
                                        value = 4202.33;
                                    }}),
                                }};
                                amount = 4947.65;
                                amountNet = 7284.74;
                                id = 562065L;
                                percentage = 9006.76;
                                productCode = "ipsum";
                                productId = 769872L;
                                quantity = 5507.99;
                                tranNotes = new String[]{{
                                    add("distinctio"),
                                    add("voluptatem"),
                                    add("non"),
                                    add("quaerat"),
                                }};
                                unitPrice = 101.64;
                                vat = 5154.33;
                                vatAnalysisTypeId = 831067L;
                                vatRateId = 415953L;
                            }}),
                            add(new ProductTranDto(5231.09) {{
                                acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                                    add(new AcEntryDto() {{
                                        accountCode = "voluptas";
                                        analysisCategoryId = 307874L;
                                        description = "earum";
                                        id = 945431L;
                                        value = 8267.97;
                                    }}),
                                }};
                                amount = 2941.81;
                                amountNet = 3173.74;
                                id = 353904L;
                                percentage = 5981.93;
                                productCode = "alias";
                                productId = 404121L;
                                quantity = 8450.78;
                                tranNotes = new String[]{{
                                    add("quia"),
                                }};
                                unitPrice = 4124.81;
                                vat = 2041.44;
                                vatAnalysisTypeId = 843659L;
                                vatRateId = 255264L;
                            }}),
                            add(new ProductTranDto(3112.47) {{
                                acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                                    add(new AcEntryDto() {{
                                        accountCode = "omnis";
                                        analysisCategoryId = 206451L;
                                        description = "corporis";
                                        id = 797527L;
                                        value = 1758.03;
                                    }}),
                                    add(new AcEntryDto() {{
                                        accountCode = "placeat";
                                        analysisCategoryId = 570039L;
                                        description = "recusandae";
                                        id = 551778L;
                                        value = 1155.61;
                                    }}),
                                    add(new AcEntryDto() {{
                                        accountCode = "sapiente";
                                        analysisCategoryId = 217279L;
                                        description = "consequatur";
                                        id = 742899L;
                                        value = 8981.55;
                                    }}),
                                    add(new AcEntryDto() {{
                                        accountCode = "sequi";
                                        analysisCategoryId = 925847L;
                                        description = "labore";
                                        id = 240624L;
                                        value = 1667.41;
                                    }}),
                                }};
                                amount = 456.77;
                                amountNet = 1726.96;
                                id = 848860L;
                                percentage = 4815.53;
                                productCode = "magni";
                                productId = 109683L;
                                quantity = 3968.84;
                                tranNotes = new String[]{{
                                    add("voluptate"),
                                    add("vel"),
                                }};
                                unitPrice = 3249.99;
                                vat = 245.48;
                                vatAnalysisTypeId = 426527L;
                                vatRateId = 388333L;
                            }}),
                            add(new ProductTranDto(7639.37) {{
                                acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                                    add(new AcEntryDto() {{
                                        accountCode = "rem";
                                        analysisCategoryId = 493579L;
                                        description = "doloremque";
                                        id = 825739L;
                                        value = 5909.69;
                                    }}),
                                }};
                                amount = 8184.22;
                                amountNet = 1528.87;
                                id = 80448L;
                                percentage = 9764.03;
                                productCode = "unde";
                                productId = 645609L;
                                quantity = 8345.87;
                                tranNotes = new String[]{{
                                    add("adipisci"),
                                }};
                                unitPrice = 390.69;
                                vat = 7619.27;
                                vatAnalysisTypeId = 269731L;
                                vatRateId = 890765L;
                            }}),
                        }};
                        quoteId = 806124L;
                        reference = "et";
                        saleRepCode = "beatae";
                        saleRepId = 662068L;
                        timestamp = "consequatur";
                        total = 5515.76;
                        totalNet = 1917.24;
                        totalVAT = 4365.32;
                        unpaid = 2704.77;
                        vatTypeId = 177337L;
                        yourReference = "natus";
                    }};
                    opCode = BatchItemSalesInvoiceCreditNoteDtoOpCodeEnum.ONE;
                }}),
            }}            

            SalesInvoicesProcessBatchResponse res = sdk.salesInvoices.salesInvoicesProcessBatch(req);

            if (res.salesInvoicesProcessBatch200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## salesInvoicesPut

Updates an existing Sales Invoice.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SalesInvoicesPutRequest;
import org.openapis.openapi.models.operations.SalesInvoicesPutResponse;
import org.openapis.openapi.models.shared.AcEntryDto;
import org.openapis.openapi.models.shared.AcudfValueDto;
import org.openapis.openapi.models.shared.ProductTranDto;
import org.openapis.openapi.models.shared.SalesInvoiceCreditNoteDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SalesInvoicesPutRequest req = new SalesInvoicesPutRequest(                new SalesInvoiceCreditNoteDto() {{
                                acCode = "suscipit";
                                bookTranTypeId = 512370L;
                                customFields = new org.openapis.openapi.models.shared.AcudfValueDto[]{{
                                    add(new AcudfValueDto() {{
                                        description = "laudantium";
                                        id = 353075L;
                                        userDefinedFieldId = 14900L;
                                        value = "quia";
                                    }}),
                                    add(new AcudfValueDto() {{
                                        description = "officia";
                                        id = 312690L;
                                        userDefinedFieldId = 361371L;
                                        value = "accusamus";
                                    }}),
                                    add(new AcudfValueDto() {{
                                        description = "iusto";
                                        id = 958533L;
                                        userDefinedFieldId = 459086L;
                                        value = "neque";
                                    }}),
                                }};
                                customerId = 697591L;
                                deliveryTo = new String[]{{
                                    add("praesentium"),
                                    add("tempora"),
                                    add("ipsam"),
                                    add("officiis"),
                                }};
                                details = "sequi";
                                entryDate = OffsetDateTime.parse("2022-12-21T02:14:27.466Z");
                                id = 665960L;
                                loType = "amet";
                                netGoods = 842.11;
                                netServices = 6218.1;
                                note = "voluptatibus";
                                ourReference = "numquam";
                                procDate = OffsetDateTime.parse("2021-08-23T13:16:11.194Z");
                                productTrans = new org.openapis.openapi.models.shared.ProductTranDto[]{{
                                    add(new ProductTranDto(3685.99) {{
                                        acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                                            add(new AcEntryDto() {{
                                                accountCode = "excepturi";
                                                analysisCategoryId = 256567L;
                                                description = "molestiae";
                                                id = 773833L;
                                                value = 6218.83;
                                            }}),
                                            add(new AcEntryDto() {{
                                                accountCode = "animi";
                                                analysisCategoryId = 528742L;
                                                description = "aliquid";
                                                id = 469384L;
                                                value = 7063.28;
                                            }}),
                                            add(new AcEntryDto() {{
                                                accountCode = "optio";
                                                analysisCategoryId = 279673L;
                                                description = "eos";
                                                id = 299379L;
                                                value = 1711.72;
                                            }}),
                                            add(new AcEntryDto() {{
                                                accountCode = "aliquid";
                                                analysisCategoryId = 431843L;
                                                description = "vel";
                                                id = 320748L;
                                                value = 5522.87;
                                            }}),
                                        }};
                                        amount = 741.24;
                                        amountNet = 3833.81;
                                        id = 844471L;
                                        percentage = 8554.84;
                                        productCode = "impedit";
                                        productId = 632939L;
                                        quantity = 5439.22;
                                        tranNotes = new String[]{{
                                            add("maiores"),
                                            add("nemo"),
                                            add("illo"),
                                            add("doloribus"),
                                        }};
                                        unitPrice = 7666.7;
                                        vat = 7113.1;
                                        vatAnalysisTypeId = 266370L;
                                        vatRateId = 768244L;
                                    }}),
                                    add(new ProductTranDto(6117.92) {{
                                        acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                                            add(new AcEntryDto() {{
                                                accountCode = "ipsum";
                                                analysisCategoryId = 879193L;
                                                description = "quisquam";
                                                id = 97922L;
                                                value = 1442.4;
                                            }}),
                                            add(new AcEntryDto() {{
                                                accountCode = "quo";
                                                analysisCategoryId = 840017L;
                                                description = "mollitia";
                                                id = 661578L;
                                                value = 8409.92;
                                            }}),
                                            add(new AcEntryDto() {{
                                                accountCode = "ipsa";
                                                analysisCategoryId = 879208L;
                                                description = "placeat";
                                                id = 464878L;
                                                value = 6277.56;
                                            }}),
                                        }};
                                        amount = 9624.08;
                                        amountNet = 9049.83;
                                        id = 813975L;
                                        percentage = 7487.23;
                                        productCode = "at";
                                        productId = 561121L;
                                        quantity = 128.77;
                                        tranNotes = new String[]{{
                                            add("tenetur"),
                                            add("incidunt"),
                                            add("numquam"),
                                            add("corrupti"),
                                        }};
                                        unitPrice = 6302.37;
                                        vat = 2936.17;
                                        vatAnalysisTypeId = 456599L;
                                        vatRateId = 968205L;
                                    }}),
                                    add(new ProductTranDto(9776.41) {{
                                        acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                                            add(new AcEntryDto() {{
                                                accountCode = "occaecati";
                                                analysisCategoryId = 15738L;
                                                description = "impedit";
                                                id = 325855L;
                                                value = 5515.49;
                                            }}),
                                        }};
                                        amount = 5025.09;
                                        amountNet = 5599.37;
                                        id = 28362L;
                                        percentage = 5917.74;
                                        productCode = "quas";
                                        productId = 218413L;
                                        quantity = 8742.83;
                                        tranNotes = new String[]{{
                                            add("facilis"),
                                            add("maiores"),
                                            add("error"),
                                        }};
                                        unitPrice = 9261.19;
                                        vat = 9559.62;
                                        vatAnalysisTypeId = 234964L;
                                        vatRateId = 958280L;
                                    }}),
                                    add(new ProductTranDto(5124.08) {{
                                        acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                                            add(new AcEntryDto() {{
                                                accountCode = "repellendus";
                                                analysisCategoryId = 607742L;
                                                description = "delectus";
                                                id = 487765L;
                                                value = 9747.03;
                                            }}),
                                            add(new AcEntryDto() {{
                                                accountCode = "aut";
                                                analysisCategoryId = 465732L;
                                                description = "omnis";
                                                id = 626676L;
                                                value = 9890.89;
                                            }}),
                                            add(new AcEntryDto() {{
                                                accountCode = "modi";
                                                analysisCategoryId = 818101L;
                                                description = "neque";
                                                id = 340604L;
                                                value = 4484.07;
                                            }}),
                                            add(new AcEntryDto() {{
                                                accountCode = "sed";
                                                analysisCategoryId = 250621L;
                                                description = "porro";
                                                id = 852610L;
                                                value = 7439.38;
                                            }}),
                                        }};
                                        amount = 584.63;
                                        amountNet = 9670.47;
                                        id = 289153L;
                                        percentage = 8748.43;
                                        productCode = "eos";
                                        productId = 555663L;
                                        quantity = 985.78;
                                        tranNotes = new String[]{{
                                            add("praesentium"),
                                        }};
                                        unitPrice = 4835.01;
                                        vat = 8548;
                                        vatAnalysisTypeId = 313695L;
                                        vatRateId = 435713L;
                                    }}),
                                }};
                                quoteId = 265303L;
                                reference = "magnam";
                                saleRepCode = "accusamus";
                                saleRepId = 861823L;
                                timestamp = "repudiandae";
                                total = 8443.27;
                                totalNet = 5057.99;
                                totalVAT = 3154.65;
                                unpaid = 6581.25;
                                vatTypeId = 599581L;
                                yourReference = "quae";
                            }};, 430181L);            

            SalesInvoicesPutResponse res = sdk.salesInvoices.salesInvoicesPut(req);

            if (res.salesInvoicesPut200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV1SalesInvoicesId

Returns information about a single Sales Invoice.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV1SalesInvoicesIdRequest;
import org.openapis.openapi.models.operations.GetV1SalesInvoicesIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV1SalesInvoicesIdRequest req = new GetV1SalesInvoicesIdRequest(341405L);            

            GetV1SalesInvoicesIdResponse res = sdk.salesInvoices.getV1SalesInvoicesId(req);

            if (res.salesInvoiceCreditNoteDto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
