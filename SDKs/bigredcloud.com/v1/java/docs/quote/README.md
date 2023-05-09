# quote

### Available Operations

* [quoteClose](#quoteclose) - Close a Quote.
* [quoteDelete](#quotedelete) - Removes an existing Quote.
* [quoteGet](#quoteget) - Returns a list of company's Quotes.
Filtering is forbidden.
Ordering is allowed by "id".
* [quotePost](#quotepost) - Creates a new Quote.
* [quotePostCreateQuoteWithGeneratingReference](#quotepostcreatequotewithgeneratingreference) - Creates a new Quote with auto generating reference.
* [quotePostGenerateSaleInvoice](#quotepostgeneratesaleinvoice) - Generate a sale invoice from a Quote.
When sale invoice is empty, new sale invoice will be generated from Quote.
* [quoteProcessBatch](#quoteprocessbatch) - Processes a batch of Quote.
* [quotePut](#quoteput) - Updates an existing Quote.
* [quoteReopen](#quotereopen) - Reopen a Quote.
* [getV1QuotesId](#getv1quotesid) - Returns information about a single Quote.

## quoteClose

Close a Quote.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QuoteCloseRequest;
import org.openapis.openapi.models.operations.QuoteCloseResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            QuoteCloseRequest req = new QuoteCloseRequest(755106L);            

            QuoteCloseResponse res = sdk.quote.quoteClose(req);

            if (res.quoteClose200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## quoteDelete

Removes an existing Quote.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QuoteDeleteRequest;
import org.openapis.openapi.models.operations.QuoteDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            QuoteDeleteRequest req = new QuoteDeleteRequest(715053L, "voluptatem");            

            QuoteDeleteResponse res = sdk.quote.quoteDelete(req);

            if (res.quoteDelete200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## quoteGet

Returns a list of company's Quotes.
Filtering is forbidden.
Ordering is allowed by "id".

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QuoteGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            QuoteGetResponse res = sdk.quote.quoteGet();

            if (res.pageResultQuoteDto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## quotePost

Creates a new Quote.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QuotePostResponse;
import org.openapis.openapi.models.shared.AcudfValueDto;
import org.openapis.openapi.models.shared.QuoteAcEntriesDto;
import org.openapis.openapi.models.shared.QuoteDto;
import org.openapis.openapi.models.shared.QuoteProductTransDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.QuoteDto req = new QuoteDto() {{
                acCode = "autem";
                closedDate = OffsetDateTime.parse("2022-10-29T20:56:45.429Z");
                comments = "assumenda";
                companyId = 107210L;
                customFields = new org.openapis.openapi.models.shared.AcudfValueDto[]{{
                    add(new AcudfValueDto() {{
                        description = "facere";
                        id = 545918L;
                        userDefinedFieldId = 473143L;
                        value = "provident";
                    }}),
                    add(new AcudfValueDto() {{
                        description = "accusamus";
                        id = 896480L;
                        userDefinedFieldId = 733289L;
                        value = "sint";
                    }}),
                    add(new AcudfValueDto() {{
                        description = "ea";
                        id = 421819L;
                        userDefinedFieldId = 373511L;
                        value = "rerum";
                    }}),
                }};
                customerOwnerId = 515638L;
                customerOwnerName = "corporis";
                ddNumber = "officiis";
                deliveryList = "voluptatibus";
                deliveryTo = new String[]{{
                    add("at"),
                    add("alias"),
                    add("quia"),
                }};
                entryDate = OffsetDateTime.parse("2021-08-19T14:07:01.740Z");
                id = 919508L;
                layoutType = 34070;
                note = "expedita";
                poNumber = "officiis";
                procDate = OffsetDateTime.parse("2022-02-26T15:04:57.243Z");
                productTrans = new org.openapis.openapi.models.shared.QuoteProductTransDto[]{{
                    add(new QuoteProductTransDto() {{
                        acEntries = new org.openapis.openapi.models.shared.QuoteAcEntriesDto[]{{
                            add(new QuoteAcEntriesDto() {{
                                accountCode = "odit";
                                analysisCategoryId = 127688L;
                                companyId = 358995L;
                                id = 621473L;
                                quoteProductTranId = 937117L;
                                value = 2393.37;
                            }}),
                            add(new QuoteAcEntriesDto() {{
                                accountCode = "recusandae";
                                analysisCategoryId = 630871L;
                                companyId = 282837L;
                                id = 693746L;
                                quoteProductTranId = 339631L;
                                value = 1062.55;
                            }}),
                            add(new QuoteAcEntriesDto() {{
                                accountCode = "unde";
                                analysisCategoryId = 476946L;
                                companyId = 963198L;
                                id = 585593L;
                                quoteProductTranId = 147801L;
                                value = 2536.25;
                            }}),
                        }};
                        amount = 2569.16;
                        companyId = 201010L;
                        id = 873557L;
                        percentage = 6378.56;
                        productCode = "dignissimos";
                        productId = 760744L;
                        quantity = 8989.61;
                        tranNotes = new String[]{{
                            add("qui"),
                            add("expedita"),
                        }};
                        unitPrice = 5326.69;
                        vatAmount = 5873.75;
                        vatAnalysisTypeId = 326269L;
                        vatRateId = 809594L;
                    }}),
                    add(new QuoteProductTransDto() {{
                        acEntries = new org.openapis.openapi.models.shared.QuoteAcEntriesDto[]{{
                            add(new QuoteAcEntriesDto() {{
                                accountCode = "neque";
                                analysisCategoryId = 446877L;
                                companyId = 796397L;
                                id = 433077L;
                                quoteProductTranId = 266408L;
                                value = 3573.47;
                            }}),
                            add(new QuoteAcEntriesDto() {{
                                accountCode = "magnam";
                                analysisCategoryId = 914971L;
                                companyId = 978173L;
                                id = 731744L;
                                quoteProductTranId = 46013L;
                                value = 7275.47;
                            }}),
                        }};
                        amount = 1897.53;
                        companyId = 289913L;
                        id = 520875L;
                        percentage = 5777.09;
                        productCode = "voluptas";
                        productId = 779180L;
                        quantity = 2420.99;
                        tranNotes = new String[]{{
                            add("fuga"),
                            add("nostrum"),
                            add("est"),
                            add("impedit"),
                        }};
                        unitPrice = 9637.41;
                        vatAmount = 7358.94;
                        vatAnalysisTypeId = 878601L;
                        vatRateId = 141506L;
                    }}),
                }};
                reference = "repellat";
                saleInvoiceId = 865946L;
                saleRepCode = "nemo";
                saleRepId = 441321L;
                timeStamp = "aperiam";
                total = 4864.1;
                totalNet = 3252.97;
                totalVat = 4483.69;
                vatTypeId = 496915L;
            }};            

            QuotePostResponse res = sdk.quote.quotePost(req);

            if (res.quotePost200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## quotePostCreateQuoteWithGeneratingReference

Creates a new Quote with auto generating reference.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QuotePostCreateQuoteWithGeneratingReferenceResponse;
import org.openapis.openapi.models.shared.AcudfValueDto;
import org.openapis.openapi.models.shared.QuoteAcEntriesDto;
import org.openapis.openapi.models.shared.QuoteDto;
import org.openapis.openapi.models.shared.QuoteProductTransDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.QuoteDto req = new QuoteDto() {{
                acCode = "excepturi";
                closedDate = OffsetDateTime.parse("2022-05-19T06:33:26.102Z");
                comments = "veritatis";
                companyId = 498180L;
                customFields = new org.openapis.openapi.models.shared.AcudfValueDto[]{{
                    add(new AcudfValueDto() {{
                        description = "pariatur";
                        id = 932666L;
                        userDefinedFieldId = 627735L;
                        value = "optio";
                    }}),
                    add(new AcudfValueDto() {{
                        description = "ex";
                        id = 311486L;
                        userDefinedFieldId = 416692L;
                        value = "officiis";
                    }}),
                }};
                customerOwnerId = 810839L;
                customerOwnerName = "quidem";
                ddNumber = "exercitationem";
                deliveryList = "quam";
                deliveryTo = new String[]{{
                    add("modi"),
                }};
                entryDate = OffsetDateTime.parse("2022-06-04T22:19:22.955Z");
                id = 876027L;
                layoutType = 194901;
                note = "repudiandae";
                poNumber = "cum";
                procDate = OffsetDateTime.parse("2022-01-24T00:30:42.322Z");
                productTrans = new org.openapis.openapi.models.shared.QuoteProductTransDto[]{{
                    add(new QuoteProductTransDto() {{
                        acEntries = new org.openapis.openapi.models.shared.QuoteAcEntriesDto[]{{
                            add(new QuoteAcEntriesDto() {{
                                accountCode = "dolores";
                                analysisCategoryId = 724994L;
                                companyId = 115898L;
                                id = 164488L;
                                quoteProductTranId = 899867L;
                                value = 7482.24;
                            }}),
                            add(new QuoteAcEntriesDto() {{
                                accountCode = "ipsa";
                                analysisCategoryId = 497357L;
                                companyId = 980486L;
                                id = 87382L;
                                quoteProductTranId = 96450L;
                                value = 3864.47;
                            }}),
                            add(new QuoteAcEntriesDto() {{
                                accountCode = "pariatur";
                                analysisCategoryId = 729448L;
                                companyId = 566506L;
                                id = 578210L;
                                quoteProductTranId = 367917L;
                                value = 3063.82;
                            }}),
                        }};
                        amount = 3423.42;
                        companyId = 988749L;
                        id = 757364L;
                        percentage = 5740.32;
                        productCode = "enim";
                        productId = 944950L;
                        quantity = 6573.19;
                        tranNotes = new String[]{{
                            add("totam"),
                            add("molestias"),
                            add("odio"),
                        }};
                        unitPrice = 511.7;
                        vatAmount = 9011.63;
                        vatAnalysisTypeId = 104078L;
                        vatRateId = 554645L;
                    }}),
                    add(new QuoteProductTransDto() {{
                        acEntries = new org.openapis.openapi.models.shared.QuoteAcEntriesDto[]{{
                            add(new QuoteAcEntriesDto() {{
                                accountCode = "assumenda";
                                analysisCategoryId = 731634L;
                                companyId = 725574L;
                                id = 244032L;
                                quoteProductTranId = 38557L;
                                value = 9639.76;
                            }}),
                            add(new QuoteAcEntriesDto() {{
                                accountCode = "impedit";
                                analysisCategoryId = 741238L;
                                companyId = 216870L;
                                id = 238011L;
                                quoteProductTranId = 903150L;
                                value = 6444.2;
                            }}),
                            add(new QuoteAcEntriesDto() {{
                                accountCode = "doloremque";
                                analysisCategoryId = 339756L;
                                companyId = 333072L;
                                id = 727481L;
                                quoteProductTranId = 99733L;
                                value = 5845.93;
                            }}),
                        }};
                        amount = 4755.89;
                        companyId = 756654L;
                        id = 820023L;
                        percentage = 2514.64;
                        productCode = "magnam";
                        productId = 932296L;
                        quantity = 1509.35;
                        tranNotes = new String[]{{
                            add("veniam"),
                            add("consequuntur"),
                            add("facere"),
                            add("laudantium"),
                        }};
                        unitPrice = 1403.84;
                        vatAmount = 8634.77;
                        vatAnalysisTypeId = 227362L;
                        vatRateId = 347698L;
                    }}),
                }};
                reference = "ab";
                saleInvoiceId = 242637L;
                saleRepCode = "facilis";
                saleRepId = 731065L;
                timeStamp = "nisi";
                total = 9775.18;
                totalNet = 3108.4;
                totalVat = 5037.48;
                vatTypeId = 718627L;
            }};            

            QuotePostCreateQuoteWithGeneratingReferenceResponse res = sdk.quote.quotePostCreateQuoteWithGeneratingReference(req);

            if (res.quotePostCreateQuoteWithGeneratingReference200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## quotePostGenerateSaleInvoice

Generate a sale invoice from a Quote.
When sale invoice is empty, new sale invoice will be generated from Quote.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QuotePostGenerateSaleInvoiceResponse;
import org.openapis.openapi.models.shared.AcEntryDto;
import org.openapis.openapi.models.shared.AcudfValueDto;
import org.openapis.openapi.models.shared.ProductTranDto;
import org.openapis.openapi.models.shared.QuoteGeneratingInvoiceDto;
import org.openapis.openapi.models.shared.SalesInvoiceCreditNoteDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.QuoteGeneratingInvoiceDto req = new QuoteGeneratingInvoiceDto() {{
                quoteId = 392430L;
                saleInvoice = new SalesInvoiceCreditNoteDto() {{
                    acCode = "quis";
                    bookTranTypeId = 391933L;
                    customFields = new org.openapis.openapi.models.shared.AcudfValueDto[]{{
                        add(new AcudfValueDto() {{
                            description = "minus";
                            id = 815200L;
                            userDefinedFieldId = 706061L;
                            value = "ipsum";
                        }}),
                        add(new AcudfValueDto() {{
                            description = "ad";
                            id = 973819L;
                            userDefinedFieldId = 974589L;
                            value = "consequuntur";
                        }}),
                        add(new AcudfValueDto() {{
                            description = "debitis";
                            id = 290841L;
                            userDefinedFieldId = 700928L;
                            value = "eos";
                        }}),
                    }};
                    customerId = 440777L;
                    deliveryTo = new String[]{{
                        add("neque"),
                        add("iusto"),
                    }};
                    details = "est";
                    entryDate = OffsetDateTime.parse("2021-06-29T15:50:45.661Z");
                    id = 853606L;
                    loType = "unde";
                    netGoods = 8894.48;
                    netServices = 4956.17;
                    note = "dolor";
                    ourReference = "dicta";
                    procDate = OffsetDateTime.parse("2021-06-07T03:31:13.366Z");
                    productTrans = new org.openapis.openapi.models.shared.ProductTranDto[]{{
                        add(new ProductTranDto(5349.08) {{
                            acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                                add(new AcEntryDto() {{
                                    accountCode = "esse";
                                    analysisCategoryId = 854115L;
                                    description = "ad";
                                    id = 134818L;
                                    value = 3165.01;
                                }}),
                                add(new AcEntryDto() {{
                                    accountCode = "delectus";
                                    analysisCategoryId = 482584L;
                                    description = "dignissimos";
                                    id = 729828L;
                                    value = 723.5;
                                }}),
                            }};
                            amount = 691.82;
                            amountNet = 2801.14;
                            id = 879174L;
                            percentage = 9025.81;
                            productCode = "tempore";
                            productId = 334018L;
                            quantity = 1764.99;
                            tranNotes = new String[]{{
                                add("earum"),
                                add("reprehenderit"),
                                add("praesentium"),
                                add("nemo"),
                            }};
                            unitPrice = 9998.09;
                            vat = 7897.7;
                            vatAnalysisTypeId = 197259L;
                            vatRateId = 467119L;
                        }}),
                    }};
                    quoteId = 75566L;
                    reference = "labore";
                    saleRepCode = "assumenda";
                    saleRepId = 304173L;
                    timestamp = "quisquam";
                    total = 5910.65;
                    totalNet = 5149.93;
                    totalVAT = 9217.19;
                    unpaid = 96.83;
                    vatTypeId = 805264L;
                    yourReference = "aspernatur";
                }};;
            }};            

            QuotePostGenerateSaleInvoiceResponse res = sdk.quote.quotePostGenerateSaleInvoice(req);

            if (res.quotePostGenerateSaleInvoice200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## quoteProcessBatch

Processes a batch of Quote.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QuoteProcessBatchResponse;
import org.openapis.openapi.models.shared.AcudfValueDto;
import org.openapis.openapi.models.shared.BatchItemQuoteDto;
import org.openapis.openapi.models.shared.BatchItemQuoteDtoOpCodeEnum;
import org.openapis.openapi.models.shared.QuoteAcEntriesDto;
import org.openapis.openapi.models.shared.QuoteDto;
import org.openapis.openapi.models.shared.QuoteProductTransDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new org.openapis.openapi.models.shared.BatchItemQuoteDto[]{{
                add(new BatchItemQuoteDto() {{
                    item = new QuoteDto() {{
                        acCode = "expedita";
                        closedDate = OffsetDateTime.parse("2021-10-26T16:10:32.283Z");
                        comments = "repudiandae";
                        companyId = 700045L;
                        customFields = new org.openapis.openapi.models.shared.AcudfValueDto[]{{
                            add(new AcudfValueDto() {{
                                description = "corporis";
                                id = 873833L;
                                userDefinedFieldId = 629377L;
                                value = "repellendus";
                            }}),
                            add(new AcudfValueDto() {{
                                description = "iure";
                                id = 213835L;
                                userDefinedFieldId = 413801L;
                                value = "impedit";
                            }}),
                        }};
                        customerOwnerId = 415033L;
                        customerOwnerName = "aut";
                        ddNumber = "voluptatem";
                        deliveryList = "ad";
                        deliveryTo = new String[]{{
                            add("amet"),
                        }};
                        entryDate = OffsetDateTime.parse("2021-06-24T23:38:28.956Z");
                        id = 695526L;
                        layoutType = 736853;
                        note = "amet";
                        poNumber = "quasi";
                        procDate = OffsetDateTime.parse("2022-06-27T01:16:52.839Z");
                        productTrans = new org.openapis.openapi.models.shared.QuoteProductTransDto[]{{
                            add(new QuoteProductTransDto() {{
                                acEntries = new org.openapis.openapi.models.shared.QuoteAcEntriesDto[]{{
                                    add(new QuoteAcEntriesDto() {{
                                        accountCode = "iusto";
                                        analysisCategoryId = 228646L;
                                        companyId = 587967L;
                                        id = 677141L;
                                        quoteProductTranId = 897956L;
                                        value = 5928.8;
                                    }}),
                                    add(new QuoteAcEntriesDto() {{
                                        accountCode = "repudiandae";
                                        analysisCategoryId = 10063L;
                                        companyId = 366244L;
                                        id = 475826L;
                                        quoteProductTranId = 930840L;
                                        value = 7087.71;
                                    }}),
                                    add(new QuoteAcEntriesDto() {{
                                        accountCode = "corrupti";
                                        analysisCategoryId = 43975L;
                                        companyId = 574092L;
                                        id = 879522L;
                                        quoteProductTranId = 178635L;
                                        value = 5200.81;
                                    }}),
                                    add(new QuoteAcEntriesDto() {{
                                        accountCode = "dicta";
                                        analysisCategoryId = 30661L;
                                        companyId = 244376L;
                                        id = 224413L;
                                        quoteProductTranId = 124289L;
                                        value = 9536.76;
                                    }}),
                                }};
                                amount = 2232.91;
                                companyId = 582320L;
                                id = 539813L;
                                percentage = 1074.72;
                                productCode = "at";
                                productId = 287544L;
                                quantity = 7949.88;
                                tranNotes = new String[]{{
                                    add("voluptatem"),
                                    add("perferendis"),
                                }};
                                unitPrice = 6985.58;
                                vatAmount = 4116.15;
                                vatAnalysisTypeId = 46791L;
                                vatRateId = 489459L;
                            }}),
                        }};
                        reference = "repellat";
                        saleInvoiceId = 243678L;
                        saleRepCode = "porro";
                        saleRepId = 588639L;
                        timeStamp = "consectetur";
                        total = 7532.4;
                        totalNet = 4901.1;
                        totalVat = 2358.34;
                        vatTypeId = 744101L;
                    }};
                    opCode = BatchItemQuoteDtoOpCodeEnum.TWO;
                }}),
                add(new BatchItemQuoteDto() {{
                    item = new QuoteDto() {{
                        acCode = "temporibus";
                        closedDate = OffsetDateTime.parse("2022-07-17T22:25:06.067Z");
                        comments = "tenetur";
                        companyId = 133949L;
                        customFields = new org.openapis.openapi.models.shared.AcudfValueDto[]{{
                            add(new AcudfValueDto() {{
                                description = "itaque";
                                id = 848346L;
                                userDefinedFieldId = 670762L;
                                value = "dignissimos";
                            }}),
                            add(new AcudfValueDto() {{
                                description = "vero";
                                id = 185348L;
                                userDefinedFieldId = 232383L;
                                value = "repellat";
                            }}),
                            add(new AcudfValueDto() {{
                                description = "explicabo";
                                id = 129355L;
                                userDefinedFieldId = 350325L;
                                value = "nihil";
                            }}),
                            add(new AcudfValueDto() {{
                                description = "non";
                                id = 68093L;
                                userDefinedFieldId = 72754L;
                                value = "hic";
                            }}),
                        }};
                        customerOwnerId = 644479L;
                        customerOwnerName = "delectus";
                        ddNumber = "non";
                        deliveryList = "distinctio";
                        deliveryTo = new String[]{{
                            add("exercitationem"),
                            add("labore"),
                        }};
                        entryDate = OffsetDateTime.parse("2022-01-29T18:21:22.366Z");
                        id = 265303L;
                        layoutType = 450209;
                        note = "explicabo";
                        poNumber = "accusamus";
                        procDate = OffsetDateTime.parse("2022-11-29T20:49:59.079Z");
                        productTrans = new org.openapis.openapi.models.shared.QuoteProductTransDto[]{{
                            add(new QuoteProductTransDto() {{
                                acEntries = new org.openapis.openapi.models.shared.QuoteAcEntriesDto[]{{
                                    add(new QuoteAcEntriesDto() {{
                                        accountCode = "enim";
                                        analysisCategoryId = 452730L;
                                        companyId = 626707L;
                                        id = 326118L;
                                        quoteProductTranId = 727544L;
                                        value = 3001.89;
                                    }}),
                                    add(new QuoteAcEntriesDto() {{
                                        accountCode = "sit";
                                        analysisCategoryId = 266788L;
                                        companyId = 430116L;
                                        id = 199529L;
                                        quoteProductTranId = 652125L;
                                        value = 4926.32;
                                    }}),
                                    add(new QuoteAcEntriesDto() {{
                                        accountCode = "fugiat";
                                        analysisCategoryId = 345138L;
                                        companyId = 475325L;
                                        id = 330600L;
                                        quoteProductTranId = 969206L;
                                        value = 662.07;
                                    }}),
                                }};
                                amount = 2656.32;
                                companyId = 13865L;
                                id = 13508L;
                                percentage = 9116.57;
                                productCode = "odio";
                                productId = 413758L;
                                quantity = 2561.14;
                                tranNotes = new String[]{{
                                    add("possimus"),
                                    add("voluptate"),
                                    add("consectetur"),
                                }};
                                unitPrice = 2006.37;
                                vatAmount = 3106.29;
                                vatAnalysisTypeId = 929476L;
                                vatRateId = 791228L;
                            }}),
                        }};
                        reference = "sunt";
                        saleInvoiceId = 715143L;
                        saleRepCode = "iusto";
                        saleRepId = 558051L;
                        timeStamp = "et";
                        total = 7049.48;
                        totalNet = 2292.76;
                        totalVat = 4186.37;
                        vatTypeId = 685415L;
                    }};
                    opCode = BatchItemQuoteDtoOpCodeEnum.ONE;
                }}),
                add(new BatchItemQuoteDto() {{
                    item = new QuoteDto() {{
                        acCode = "rem";
                        closedDate = OffsetDateTime.parse("2022-06-14T05:31:20.614Z");
                        comments = "laudantium";
                        companyId = 832239L;
                        customFields = new org.openapis.openapi.models.shared.AcudfValueDto[]{{
                            add(new AcudfValueDto() {{
                                description = "quae";
                                id = 51075L;
                                userDefinedFieldId = 904827L;
                                value = "delectus";
                            }}),
                        }};
                        customerOwnerId = 651228L;
                        customerOwnerName = "nulla";
                        ddNumber = "officia";
                        deliveryList = "sed";
                        deliveryTo = new String[]{{
                            add("alias"),
                        }};
                        entryDate = OffsetDateTime.parse("2020-03-05T20:58:13.087Z");
                        id = 27982L;
                        layoutType = 278325;
                        note = "qui";
                        poNumber = "qui";
                        procDate = OffsetDateTime.parse("2020-12-04T19:10:00.340Z");
                        productTrans = new org.openapis.openapi.models.shared.QuoteProductTransDto[]{{
                            add(new QuoteProductTransDto() {{
                                acEntries = new org.openapis.openapi.models.shared.QuoteAcEntriesDto[]{{
                                    add(new QuoteAcEntriesDto() {{
                                        accountCode = "aliquid";
                                        analysisCategoryId = 264649L;
                                        companyId = 760049L;
                                        id = 975095L;
                                        quoteProductTranId = 562948L;
                                        value = 6394.63;
                                    }}),
                                }};
                                amount = 7304.78;
                                companyId = 520678L;
                                id = 192846L;
                                percentage = 3979.19;
                                productCode = "ea";
                                productId = 774501L;
                                quantity = 4983.88;
                                tranNotes = new String[]{{
                                    add("velit"),
                                }};
                                unitPrice = 9673.38;
                                vatAmount = 9979.18;
                                vatAnalysisTypeId = 861123L;
                                vatRateId = 671116L;
                            }}),
                        }};
                        reference = "natus";
                        saleInvoiceId = 883780L;
                        saleRepCode = "doloremque";
                        saleRepId = 392967L;
                        timeStamp = "rerum";
                        total = 9248.4;
                        totalNet = 9132.85;
                        totalVat = 2516.27;
                        vatTypeId = 524577L;
                    }};
                    opCode = BatchItemQuoteDtoOpCodeEnum.ONE;
                }}),
            }}            

            QuoteProcessBatchResponse res = sdk.quote.quoteProcessBatch(req);

            if (res.quoteProcessBatch200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## quotePut

Updates an existing Quote.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QuotePutRequest;
import org.openapis.openapi.models.operations.QuotePutResponse;
import org.openapis.openapi.models.shared.AcudfValueDto;
import org.openapis.openapi.models.shared.QuoteAcEntriesDto;
import org.openapis.openapi.models.shared.QuoteDto;
import org.openapis.openapi.models.shared.QuoteProductTransDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            QuotePutRequest req = new QuotePutRequest(                new QuoteDto() {{
                                acCode = "ullam";
                                closedDate = OffsetDateTime.parse("2022-08-22T07:06:40.070Z");
                                comments = "voluptatibus";
                                companyId = 754901L;
                                customFields = new org.openapis.openapi.models.shared.AcudfValueDto[]{{
                                    add(new AcudfValueDto() {{
                                        description = "officiis";
                                        id = 100002L;
                                        userDefinedFieldId = 100251L;
                                        value = "enim";
                                    }}),
                                }};
                                customerOwnerId = 758985L;
                                customerOwnerName = "rem";
                                ddNumber = "perferendis";
                                deliveryList = "facilis";
                                deliveryTo = new String[]{{
                                    add("a"),
                                    add("iste"),
                                    add("dicta"),
                                    add("quos"),
                                }};
                                entryDate = OffsetDateTime.parse("2022-09-14T23:28:45.223Z");
                                id = 266284L;
                                layoutType = 929292;
                                note = "maxime";
                                poNumber = "modi";
                                procDate = OffsetDateTime.parse("2022-03-04T17:26:08.366Z");
                                productTrans = new org.openapis.openapi.models.shared.QuoteProductTransDto[]{{
                                    add(new QuoteProductTransDto() {{
                                        acEntries = new org.openapis.openapi.models.shared.QuoteAcEntriesDto[]{{
                                            add(new QuoteAcEntriesDto() {{
                                                accountCode = "impedit";
                                                analysisCategoryId = 783397L;
                                                companyId = 883819L;
                                                id = 518990L;
                                                quoteProductTranId = 969168L;
                                                value = 660.74;
                                            }}),
                                            add(new QuoteAcEntriesDto() {{
                                                accountCode = "sint";
                                                analysisCategoryId = 472414L;
                                                companyId = 458412L;
                                                id = 438256L;
                                                quoteProductTranId = 485031L;
                                                value = 2027.96;
                                            }}),
                                            add(new QuoteAcEntriesDto() {{
                                                accountCode = "debitis";
                                                analysisCategoryId = 423588L;
                                                companyId = 208683L;
                                                id = 357758L;
                                                quoteProductTranId = 375350L;
                                                value = 1636.84;
                                            }}),
                                            add(new QuoteAcEntriesDto() {{
                                                accountCode = "officia";
                                                analysisCategoryId = 441374L;
                                                companyId = 716033L;
                                                id = 262800L;
                                                quoteProductTranId = 56372L;
                                                value = 5220.62;
                                            }}),
                                        }};
                                        amount = 9781.54;
                                        companyId = 35160L;
                                        id = 331452L;
                                        percentage = 9062.32;
                                        productCode = "neque";
                                        productId = 816365L;
                                        quantity = 3071.73;
                                        tranNotes = new String[]{{
                                            add("doloribus"),
                                            add("fugiat"),
                                            add("est"),
                                        }};
                                        unitPrice = 9623.96;
                                        vatAmount = 2452.78;
                                        vatAnalysisTypeId = 110522L;
                                        vatRateId = 201096L;
                                    }}),
                                    add(new QuoteProductTransDto() {{
                                        acEntries = new org.openapis.openapi.models.shared.QuoteAcEntriesDto[]{{
                                            add(new QuoteAcEntriesDto() {{
                                                accountCode = "illo";
                                                analysisCategoryId = 997995L;
                                                companyId = 363214L;
                                                id = 987890L;
                                                quoteProductTranId = 823753L;
                                                value = 6033.23;
                                            }}),
                                            add(new QuoteAcEntriesDto() {{
                                                accountCode = "incidunt";
                                                analysisCategoryId = 128021L;
                                                companyId = 368491L;
                                                id = 583193L;
                                                quoteProductTranId = 761437L;
                                                value = 20.64;
                                            }}),
                                            add(new QuoteAcEntriesDto() {{
                                                accountCode = "quidem";
                                                analysisCategoryId = 198911L;
                                                companyId = 412433L;
                                                id = 956124L;
                                                quoteProductTranId = 164319L;
                                                value = 3304.4;
                                            }}),
                                        }};
                                        amount = 8937.73;
                                        companyId = 638390L;
                                        id = 575062L;
                                        percentage = 2808.59;
                                        productCode = "numquam";
                                        productId = 947822L;
                                        quantity = 2367.9;
                                        tranNotes = new String[]{{
                                            add("in"),
                                            add("minima"),
                                            add("ex"),
                                        }};
                                        unitPrice = 7917.62;
                                        vatAmount = 688.8;
                                        vatAnalysisTypeId = 108165L;
                                        vatRateId = 943143L;
                                    }}),
                                    add(new QuoteProductTransDto() {{
                                        acEntries = new org.openapis.openapi.models.shared.QuoteAcEntriesDto[]{{
                                            add(new QuoteAcEntriesDto() {{
                                                accountCode = "quisquam";
                                                analysisCategoryId = 221218L;
                                                companyId = 496548L;
                                                id = 683727L;
                                                quoteProductTranId = 326903L;
                                                value = 1024.46;
                                            }}),
                                            add(new QuoteAcEntriesDto() {{
                                                accountCode = "qui";
                                                analysisCategoryId = 397026L;
                                                companyId = 166289L;
                                                id = 276650L;
                                                quoteProductTranId = 240490L;
                                                value = 5063.43;
                                            }}),
                                        }};
                                        amount = 2205.28;
                                        companyId = 349898L;
                                        id = 709701L;
                                        percentage = 7064.11;
                                        productCode = "impedit";
                                        productId = 24577L;
                                        quantity = 3634.82;
                                        tranNotes = new String[]{{
                                            add("consequuntur"),
                                            add("amet"),
                                            add("deserunt"),
                                        }};
                                        unitPrice = 2687.09;
                                        vatAmount = 3328.31;
                                        vatAnalysisTypeId = 800256L;
                                        vatRateId = 932250L;
                                    }}),
                                    add(new QuoteProductTransDto() {{
                                        acEntries = new org.openapis.openapi.models.shared.QuoteAcEntriesDto[]{{
                                            add(new QuoteAcEntriesDto() {{
                                                accountCode = "quisquam";
                                                analysisCategoryId = 316550L;
                                                companyId = 987759L;
                                                id = 826806L;
                                                quoteProductTranId = 887363L;
                                                value = 1039.9;
                                            }}),
                                            add(new QuoteAcEntriesDto() {{
                                                accountCode = "alias";
                                                analysisCategoryId = 633982L;
                                                companyId = 60335L;
                                                id = 751033L;
                                                quoteProductTranId = 898193L;
                                                value = 1559.78;
                                            }}),
                                            add(new QuoteAcEntriesDto() {{
                                                accountCode = "dicta";
                                                analysisCategoryId = 426002L;
                                                companyId = 595584L;
                                                id = 892708L;
                                                quoteProductTranId = 354821L;
                                                value = 1035.78;
                                            }}),
                                            add(new QuoteAcEntriesDto() {{
                                                accountCode = "accusantium";
                                                analysisCategoryId = 18096L;
                                                companyId = 82876L;
                                                id = 590585L;
                                                quoteProductTranId = 765833L;
                                                value = 4355.31;
                                            }}),
                                        }};
                                        amount = 8424.02;
                                        companyId = 798690L;
                                        id = 363224L;
                                        percentage = 9234.56;
                                        productCode = "velit";
                                        productId = 299153L;
                                        quantity = 4935.91;
                                        tranNotes = new String[]{{
                                            add("sed"),
                                            add("odio"),
                                        }};
                                        unitPrice = 6169.41;
                                        vatAmount = 5881.52;
                                        vatAnalysisTypeId = 739508L;
                                        vatRateId = 983854L;
                                    }}),
                                }};
                                reference = "facilis";
                                saleInvoiceId = 697330L;
                                saleRepCode = "itaque";
                                saleRepId = 389548L;
                                timeStamp = "unde";
                                total = 2637.67;
                                totalNet = 5951.98;
                                totalVat = 9446.26;
                                vatTypeId = 736985L;
                            }};, 135548L);            

            QuotePutResponse res = sdk.quote.quotePut(req);

            if (res.quotePut200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## quoteReopen

Reopen a Quote.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QuoteReopenRequest;
import org.openapis.openapi.models.operations.QuoteReopenResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            QuoteReopenRequest req = new QuoteReopenRequest(725784L);            

            QuoteReopenResponse res = sdk.quote.quoteReopen(req);

            if (res.quoteReopen200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV1QuotesId

Returns information about a single Quote.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV1QuotesIdRequest;
import org.openapis.openapi.models.operations.GetV1QuotesIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV1QuotesIdRequest req = new GetV1QuotesIdRequest(720266L);            

            GetV1QuotesIdResponse res = sdk.quote.getV1QuotesId(req);

            if (res.quoteDto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
