# cashReceipts

### Available Operations

* [cashReceiptsDelete](#cashreceiptsdelete) - Removes an existing Cash Receipt.
* [cashReceiptsGet](#cashreceiptsget) - Returns a list of company's Cash Receipts. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* [cashReceiptsPost](#cashreceiptspost) - Creates a new Cash Receipt.
* [cashReceiptsProcessBatch](#cashreceiptsprocessbatch) - Processes a batch of Cash Receipts.
* [cashReceiptsPut](#cashreceiptsput) - Updates an existing Cash Receipt.
* [getV1CashReceiptsId](#getv1cashreceiptsid) - Returns information about a single Cash Receipt.

## cashReceiptsDelete

Removes an existing Cash Receipt.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CashReceiptsDeleteRequest;
import org.openapis.openapi.models.operations.CashReceiptsDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CashReceiptsDeleteRequest req = new CashReceiptsDeleteRequest(69167L, "maiores");            

            CashReceiptsDeleteResponse res = sdk.cashReceipts.cashReceiptsDelete(req);

            if (res.cashReceiptsDelete200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cashReceiptsGet

Returns a list of company's Cash Receipts. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CashReceiptsGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CashReceiptsGetResponse res = sdk.cashReceipts.cashReceiptsGet();

            if (res.pageResultCashReceiptQueryDto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cashReceiptsPost

Creates a new Cash Receipt.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CashReceiptsPostResponse;
import org.openapis.openapi.models.shared.AcEntryDto;
import org.openapis.openapi.models.shared.AcudfValueDto;
import org.openapis.openapi.models.shared.CashReceiptDto;
import org.openapis.openapi.models.shared.VatEntryDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CashReceiptDto req = new CashReceiptDto() {{
                acCode = "quidem";
                acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                    add(new AcEntryDto() {{
                        accountCode = "voluptate";
                        analysisCategoryId = 420075L;
                        description = "nam";
                        id = 50588L;
                        value = 8663.83;
                    }}),
                    add(new AcEntryDto() {{
                        accountCode = "nemo";
                        analysisCategoryId = 975522L;
                        description = "perferendis";
                        id = 855804L;
                        value = 2307.42;
                    }}),
                }};
                bookTranTypeId = 11714L;
                customFields = new org.openapis.openapi.models.shared.AcudfValueDto[]{{
                    add(new AcudfValueDto() {{
                        description = "corporis";
                        id = 944124L;
                        userDefinedFieldId = 729991L;
                        value = "nobis";
                    }}),
                    add(new AcudfValueDto() {{
                        description = "dolores";
                        id = 339404L;
                        userDefinedFieldId = 521037L;
                        value = "dignissimos";
                    }}),
                    add(new AcudfValueDto() {{
                        description = "eaque";
                        id = 338985L;
                        userDefinedFieldId = 199996L;
                        value = "eos";
                    }}),
                    add(new AcudfValueDto() {{
                        description = "perferendis";
                        id = 170986L;
                        userDefinedFieldId = 793698L;
                        value = "quam";
                    }}),
                }};
                customerId = 223924L;
                detailCollection = new String[]{{
                    add("nostrum"),
                    add("hic"),
                    add("recusandae"),
                    add("omnis"),
                }};
                discount = 7044.15;
                entryDate = OffsetDateTime.parse("2022-12-08T18:10:54.422Z");
                id = 783645L;
                ledger = 1646.94;
                note = "blanditiis";
                plaidTransactionId = "error";
                procDate = OffsetDateTime.parse("2022-06-04T07:28:38.912Z");
                timestamp = "rerum";
                total = 2378.93;
                unallocated = 9923.97;
                vatEntries = new org.openapis.openapi.models.shared.VatEntryDto[]{{
                    add(new VatEntryDto() {{
                        amount = 2672.62;
                        id = 613966L;
                        percentage = 6790.91;
                        vatRateId = 535633L;
                    }}),
                    add(new VatEntryDto() {{
                        amount = 8642.82;
                        id = 589910L;
                        percentage = 7508.44;
                        vatRateId = 730122L;
                    }}),
                    add(new VatEntryDto() {{
                        amount = 9644.9;
                        id = 311945L;
                        percentage = 5542.42;
                        vatRateId = 398221L;
                    }}),
                    add(new VatEntryDto() {{
                        amount = 2123.9;
                        id = 209843L;
                        percentage = 2224.43;
                        vatRateId = 186193L;
                    }}),
                }};
                vatTypeId = 218749L;
            }};            

            CashReceiptsPostResponse res = sdk.cashReceipts.cashReceiptsPost(req);

            if (res.cashReceiptsPost200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cashReceiptsProcessBatch

Processes a batch of Cash Receipts.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CashReceiptsProcessBatchResponse;
import org.openapis.openapi.models.shared.AcEntryDto;
import org.openapis.openapi.models.shared.AcudfValueDto;
import org.openapis.openapi.models.shared.BatchItemCashReceiptDto;
import org.openapis.openapi.models.shared.BatchItemCashReceiptDtoOpCodeEnum;
import org.openapis.openapi.models.shared.CashReceiptDto;
import org.openapis.openapi.models.shared.VatEntryDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new org.openapis.openapi.models.shared.BatchItemCashReceiptDto[]{{
                add(new BatchItemCashReceiptDto() {{
                    item = new CashReceiptDto() {{
                        acCode = "excepturi";
                        acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                            add(new AcEntryDto() {{
                                accountCode = "voluptate";
                                analysisCategoryId = 490459L;
                                description = "reiciendis";
                                id = 227414L;
                                value = 6805.45;
                            }}),
                            add(new AcEntryDto() {{
                                accountCode = "numquam";
                                analysisCategoryId = 85295L;
                                description = "ipsa";
                                id = 56418L;
                                value = 4344.17;
                            }}),
                            add(new AcEntryDto() {{
                                accountCode = "odio";
                                analysisCategoryId = 311796L;
                                description = "accusamus";
                                id = 696344L;
                                value = 9764.05;
                            }}),
                        }};
                        bookTranTypeId = 377752L;
                        customFields = new org.openapis.openapi.models.shared.AcudfValueDto[]{{
                            add(new AcudfValueDto() {{
                                description = "eos";
                                id = 542499L;
                                userDefinedFieldId = 24678L;
                                value = "fugiat";
                            }}),
                            add(new AcudfValueDto() {{
                                description = "ab";
                                id = 743835L;
                                userDefinedFieldId = 679393L;
                                value = "iusto";
                            }}),
                            add(new AcudfValueDto() {{
                                description = "voluptate";
                                id = 677082L;
                                userDefinedFieldId = 536579L;
                                value = "omnis";
                            }}),
                        }};
                        customerId = 896672L;
                        detailCollection = new String[]{{
                            add("asperiores"),
                            add("nihil"),
                            add("ipsum"),
                        }};
                        discount = 4560.15;
                        entryDate = OffsetDateTime.parse("2021-03-10T07:33:18.208Z");
                        id = 263322L;
                        ledger = 1372.2;
                        note = "perferendis";
                        plaidTransactionId = "amet";
                        procDate = OffsetDateTime.parse("2020-05-10T15:56:07.975Z");
                        timestamp = "ad";
                        total = 9044.25;
                        unallocated = 3834.64;
                        vatEntries = new org.openapis.openapi.models.shared.VatEntryDto[]{{
                            add(new VatEntryDto() {{
                                amount = 5883.17;
                                id = 324683L;
                                percentage = 8310.49;
                                vatRateId = 519711L;
                            }}),
                            add(new VatEntryDto() {{
                                amount = 6289.82;
                                id = 55L;
                                percentage = 8726.51;
                                vatRateId = 311860L;
                            }}),
                            add(new VatEntryDto() {{
                                amount = 2735.42;
                                id = 425451L;
                                percentage = 7980.47;
                                vatRateId = 885338L;
                            }}),
                        }};
                        vatTypeId = 185636L;
                    }};
                    opCode = BatchItemCashReceiptDtoOpCodeEnum.THREE;
                }}),
                add(new BatchItemCashReceiptDto() {{
                    item = new CashReceiptDto() {{
                        acCode = "a";
                        acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                            add(new AcEntryDto() {{
                                accountCode = "harum";
                                analysisCategoryId = 483409L;
                                description = "ipsum";
                                id = 788740L;
                                value = 9473.71;
                            }}),
                            add(new AcEntryDto() {{
                                accountCode = "amet";
                                analysisCategoryId = 730856L;
                                description = "accusamus";
                                id = 253941L;
                                value = 3136.92;
                            }}),
                        }};
                        bookTranTypeId = 213312L;
                        customFields = new org.openapis.openapi.models.shared.AcudfValueDto[]{{
                            add(new AcudfValueDto() {{
                                description = "totam";
                                id = 471752L;
                                userDefinedFieldId = 25662L;
                                value = "expedita";
                            }}),
                            add(new AcudfValueDto() {{
                                description = "neque";
                                id = 153694L;
                                userDefinedFieldId = 424685L;
                                value = "libero";
                            }}),
                            add(new AcudfValueDto() {{
                                description = "voluptas";
                                id = 646265L;
                                userDefinedFieldId = 463575L;
                                value = "ipsum";
                            }}),
                            add(new AcudfValueDto() {{
                                description = "incidunt";
                                id = 186458L;
                                userDefinedFieldId = 586784L;
                                value = "maxime";
                            }}),
                        }};
                        customerId = 863856L;
                        detailCollection = new String[]{{
                            add("dicta"),
                            add("laborum"),
                            add("totam"),
                        }};
                        discount = 2768.94;
                        entryDate = OffsetDateTime.parse("2022-10-29T03:47:52.981Z");
                        id = 716860L;
                        ledger = 7044.74;
                        note = "aliquid";
                        plaidTransactionId = "quam";
                        procDate = OffsetDateTime.parse("2021-04-27T11:41:31.258Z");
                        timestamp = "qui";
                        total = 2048.65;
                        unallocated = 1448.47;
                        vatEntries = new org.openapis.openapi.models.shared.VatEntryDto[]{{
                            add(new VatEntryDto() {{
                                amount = 4880.56;
                                id = 124833L;
                                percentage = 3556.13;
                                vatRateId = 722081L;
                            }}),
                        }};
                        vatTypeId = 940432L;
                    }};
                    opCode = BatchItemCashReceiptDtoOpCodeEnum.ONE;
                }}),
                add(new BatchItemCashReceiptDto() {{
                    item = new CashReceiptDto() {{
                        acCode = "cumque";
                        acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                            add(new AcEntryDto() {{
                                accountCode = "nobis";
                                analysisCategoryId = 92596L;
                                description = "saepe";
                                id = 217450L;
                                value = 834.22;
                            }}),
                            add(new AcEntryDto() {{
                                accountCode = "nobis";
                                analysisCategoryId = 552193L;
                                description = "tempore";
                                id = 584476L;
                                value = 456.14;
                            }}),
                            add(new AcEntryDto() {{
                                accountCode = "delectus";
                                analysisCategoryId = 209157L;
                                description = "dolore";
                                id = 286915L;
                                value = 2408.29;
                            }}),
                        }};
                        bookTranTypeId = 677263L;
                        customFields = new org.openapis.openapi.models.shared.AcudfValueDto[]{{
                            add(new AcudfValueDto() {{
                                description = "quae";
                                id = 16429L;
                                userDefinedFieldId = 555649L;
                                value = "itaque";
                            }}),
                        }};
                        customerId = 9240L;
                        detailCollection = new String[]{{
                            add("repellendus"),
                            add("porro"),
                            add("doloribus"),
                        }};
                        discount = 2817.3;
                        entryDate = OffsetDateTime.parse("2021-10-29T22:05:37.347Z");
                        id = 181631L;
                        ledger = 639.55;
                        note = "laudantium";
                        plaidTransactionId = "odio";
                        procDate = OffsetDateTime.parse("2021-01-17T10:17:06.805Z");
                        timestamp = "quisquam";
                        total = 8765.06;
                        unallocated = 6064.76;
                        vatEntries = new org.openapis.openapi.models.shared.VatEntryDto[]{{
                            add(new VatEntryDto() {{
                                amount = 2184.03;
                                id = 961571L;
                                percentage = 4551.69;
                                vatRateId = 231701L;
                            }}),
                            add(new VatEntryDto() {{
                                amount = 8788.7;
                                id = 949319L;
                                percentage = 4922.68;
                                vatRateId = 941378L;
                            }}),
                        }};
                        vatTypeId = 715561L;
                    }};
                    opCode = BatchItemCashReceiptDtoOpCodeEnum.THREE;
                }}),
                add(new BatchItemCashReceiptDto() {{
                    item = new CashReceiptDto() {{
                        acCode = "odio";
                        acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                            add(new AcEntryDto() {{
                                accountCode = "facilis";
                                analysisCategoryId = 874288L;
                                description = "ducimus";
                                id = 293020L;
                                value = 8445.5;
                            }}),
                            add(new AcEntryDto() {{
                                accountCode = "illum";
                                analysisCategoryId = 194342L;
                                description = "natus";
                                id = 773326L;
                                value = 132.36;
                            }}),
                            add(new AcEntryDto() {{
                                accountCode = "voluptatibus";
                                analysisCategoryId = 347233L;
                                description = "nulla";
                                id = 148141L;
                                value = 7804.27;
                            }}),
                        }};
                        bookTranTypeId = 981830L;
                        customFields = new org.openapis.openapi.models.shared.AcudfValueDto[]{{
                            add(new AcudfValueDto() {{
                                description = "iusto";
                                id = 753570L;
                                userDefinedFieldId = 497391L;
                                value = "alias";
                            }}),
                            add(new AcudfValueDto() {{
                                description = "officia";
                                id = 269479L;
                                userDefinedFieldId = 368584L;
                                value = "ea";
                            }}),
                            add(new AcudfValueDto() {{
                                description = "aspernatur";
                                id = 428224L;
                                userDefinedFieldId = 822118L;
                                value = "magnam";
                            }}),
                            add(new AcudfValueDto() {{
                                description = "ratione";
                                id = 401132L;
                                userDefinedFieldId = 511319L;
                                value = "dicta";
                            }}),
                        }};
                        customerId = 224317L;
                        detailCollection = new String[]{{
                            add("quasi"),
                            add("ex"),
                            add("nulla"),
                            add("excepturi"),
                        }};
                        discount = 9729.2;
                        entryDate = OffsetDateTime.parse("2022-01-15T07:05:18.296Z");
                        id = 788873L;
                        ledger = 9065.56;
                        note = "ea";
                        plaidTransactionId = "impedit";
                        procDate = OffsetDateTime.parse("2022-09-01T09:38:53.685Z");
                        timestamp = "aliquid";
                        total = 811.01;
                        unallocated = 3018.31;
                        vatEntries = new org.openapis.openapi.models.shared.VatEntryDto[]{{
                            add(new VatEntryDto() {{
                                amount = 7752.2;
                                id = 232234L;
                                percentage = 9262.13;
                                vatRateId = 132487L;
                            }}),
                            add(new VatEntryDto() {{
                                amount = 3253.1;
                                id = 53427L;
                                percentage = 9528.71;
                                vatRateId = 725595L;
                            }}),
                        }};
                        vatTypeId = 13948L;
                    }};
                    opCode = BatchItemCashReceiptDtoOpCodeEnum.ONE;
                }}),
            }}            

            CashReceiptsProcessBatchResponse res = sdk.cashReceipts.cashReceiptsProcessBatch(req);

            if (res.cashReceiptsProcessBatch200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cashReceiptsPut

Updates an existing Cash Receipt.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CashReceiptsPutRequest;
import org.openapis.openapi.models.operations.CashReceiptsPutResponse;
import org.openapis.openapi.models.shared.AcEntryDto;
import org.openapis.openapi.models.shared.AcudfValueDto;
import org.openapis.openapi.models.shared.CashReceiptDto;
import org.openapis.openapi.models.shared.VatEntryDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CashReceiptsPutRequest req = new CashReceiptsPutRequest(                new CashReceiptDto() {{
                                acCode = "deleniti";
                                acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                                    add(new AcEntryDto() {{
                                        accountCode = "aliquam";
                                        analysisCategoryId = 146946L;
                                        description = "accusamus";
                                        id = 79522L;
                                        value = 2506.22;
                                    }}),
                                    add(new AcEntryDto() {{
                                        accountCode = "et";
                                        analysisCategoryId = 677412L;
                                        description = "laborum";
                                        id = 810424L;
                                        value = 2453.67;
                                    }}),
                                    add(new AcEntryDto() {{
                                        accountCode = "eum";
                                        analysisCategoryId = 420539L;
                                        description = "nobis";
                                        id = 557369L;
                                        value = 8296.03;
                                    }}),
                                    add(new AcEntryDto() {{
                                        accountCode = "nulla";
                                        analysisCategoryId = 379034L;
                                        description = "libero";
                                        id = 96549L;
                                        value = 2703.28;
                                    }}),
                                }};
                                bookTranTypeId = 256139L;
                                customFields = new org.openapis.openapi.models.shared.AcudfValueDto[]{{
                                    add(new AcudfValueDto() {{
                                        description = "provident";
                                        id = 55374L;
                                        userDefinedFieldId = 476477L;
                                        value = "magnam";
                                    }}),
                                }};
                                customerId = 487935L;
                                detailCollection = new String[]{{
                                    add("esse"),
                                    add("esse"),
                                }};
                                discount = 5245.93;
                                entryDate = OffsetDateTime.parse("2022-02-12T07:53:29.219Z");
                                id = 695626L;
                                ledger = 8526.35;
                                note = "ut";
                                plaidTransactionId = "eum";
                                procDate = OffsetDateTime.parse("2022-03-05T04:36:55.913Z");
                                timestamp = "eos";
                                total = 5093.42;
                                unallocated = 7885.46;
                                vatEntries = new org.openapis.openapi.models.shared.VatEntryDto[]{{
                                    add(new VatEntryDto() {{
                                        amount = 568.48;
                                        id = 660040L;
                                        percentage = 6969.97;
                                        vatRateId = 206594L;
                                    }}),
                                }};
                                vatTypeId = 778696L;
                            }};, 847276L);            

            CashReceiptsPutResponse res = sdk.cashReceipts.cashReceiptsPut(req);

            if (res.cashReceiptsPut200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV1CashReceiptsId

Returns information about a single Cash Receipt.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV1CashReceiptsIdRequest;
import org.openapis.openapi.models.operations.GetV1CashReceiptsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV1CashReceiptsIdRequest req = new GetV1CashReceiptsIdRequest(777408L);            

            GetV1CashReceiptsIdResponse res = sdk.cashReceipts.getV1CashReceiptsId(req);

            if (res.cashReceiptDto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
