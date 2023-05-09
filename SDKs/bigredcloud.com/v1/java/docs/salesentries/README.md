# salesEntries

### Available Operations

* [salesEntriesDelete](#salesentriesdelete) - Removes an existing Sales Entry.
* [salesEntriesGet](#salesentriesget) - Returns a list of company's Sales Entries. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* [salesEntriesPost](#salesentriespost) - Creates a new Sales Entry.
* [salesEntriesProcessBatch](#salesentriesprocessbatch) - Processes a batch of Sales Entries.
* [salesEntriesPut](#salesentriesput) - Updates an existing Sales Entry.
* [getV1SalesEntriesId](#getv1salesentriesid) - Returns information about a single Sales Entry.

## salesEntriesDelete

Removes an existing Sales Entry.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SalesEntriesDeleteRequest;
import org.openapis.openapi.models.operations.SalesEntriesDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SalesEntriesDeleteRequest req = new SalesEntriesDeleteRequest(643199L, "aliquid");            

            SalesEntriesDeleteResponse res = sdk.salesEntries.salesEntriesDelete(req);

            if (res.salesEntriesDelete200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## salesEntriesGet

Returns a list of company's Sales Entries. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SalesEntriesGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SalesEntriesGetResponse res = sdk.salesEntries.salesEntriesGet();

            if (res.pageResultSalesEntryQueryDto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## salesEntriesPost

Creates a new Sales Entry.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SalesEntriesPostResponse;
import org.openapis.openapi.models.shared.AcEntryDto;
import org.openapis.openapi.models.shared.AcudfValueDto;
import org.openapis.openapi.models.shared.SalesEntryDto;
import org.openapis.openapi.models.shared.VatEntryDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SalesEntryDto req = new SalesEntryDto() {{
                acCode = "excepturi";
                acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                    add(new AcEntryDto() {{
                        accountCode = "tempora";
                        analysisCategoryId = 821904L;
                        description = "dolor";
                        id = 700529L;
                        value = 1535.82;
                    }}),
                }};
                bookTranTypeId = 883078L;
                customFields = new org.openapis.openapi.models.shared.AcudfValueDto[]{{
                    add(new AcudfValueDto() {{
                        description = "delectus";
                        id = 792719L;
                        userDefinedFieldId = 774748L;
                        value = "quos";
                    }}),
                    add(new AcudfValueDto() {{
                        description = "asperiores";
                        id = 532326L;
                        userDefinedFieldId = 614770L;
                        value = "corporis";
                    }}),
                    add(new AcudfValueDto() {{
                        description = "accusantium";
                        id = 75850L;
                        userDefinedFieldId = 14251L;
                        value = "doloribus";
                    }}),
                    add(new AcudfValueDto() {{
                        description = "nostrum";
                        id = 869848L;
                        userDefinedFieldId = 823472L;
                        value = "neque";
                    }}),
                }};
                customerId = 866135L;
                detailCollection = new String[]{{
                    add("sapiente"),
                    add("mollitia"),
                }};
                details = "quae";
                entryDate = OffsetDateTime.parse("2022-11-29T11:06:49.831Z");
                id = 251200L;
                netGoods = 9132.84;
                netServices = 3240.52;
                note = "aliquam";
                procDate = OffsetDateTime.parse("2021-04-30T00:05:27.455Z");
                reference = "consequuntur";
                timestamp = "maiores";
                total = 815.81;
                totalNet = 4004.48;
                totalVAT = 5131.85;
                unpaid = 6658.72;
                vatEntries = new org.openapis.openapi.models.shared.VatEntryDto[]{{
                    add(new VatEntryDto() {{
                        amount = 4008.79;
                        id = 232316L;
                        percentage = 7681.95;
                        vatRateId = 525917L;
                    }}),
                }};
                vatTypeId = 527715L;
            }};            

            SalesEntriesPostResponse res = sdk.salesEntries.salesEntriesPost(req);

            if (res.salesEntriesPost200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## salesEntriesProcessBatch

Processes a batch of Sales Entries.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SalesEntriesProcessBatchResponse;
import org.openapis.openapi.models.shared.AcEntryDto;
import org.openapis.openapi.models.shared.AcudfValueDto;
import org.openapis.openapi.models.shared.BatchItemSalesEntryDto;
import org.openapis.openapi.models.shared.BatchItemSalesEntryDtoOpCodeEnum;
import org.openapis.openapi.models.shared.SalesEntryDto;
import org.openapis.openapi.models.shared.VatEntryDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new org.openapis.openapi.models.shared.BatchItemSalesEntryDto[]{{
                add(new BatchItemSalesEntryDto() {{
                    item = new SalesEntryDto() {{
                        acCode = "adipisci";
                        acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                            add(new AcEntryDto() {{
                                accountCode = "tempora";
                                analysisCategoryId = 503449L;
                                description = "numquam";
                                id = 196374L;
                                value = 5323.2;
                            }}),
                            add(new AcEntryDto() {{
                                accountCode = "sit";
                                analysisCategoryId = 703189L;
                                description = "veritatis";
                                id = 949280L;
                                value = 4198.58;
                            }}),
                            add(new AcEntryDto() {{
                                accountCode = "quidem";
                                analysisCategoryId = 517121L;
                                description = "porro";
                                id = 646491L;
                                value = 1689.26;
                            }}),
                            add(new AcEntryDto() {{
                                accountCode = "nihil";
                                analysisCategoryId = 374062L;
                                description = "animi";
                                id = 413780L;
                                value = 7.16;
                            }}),
                        }};
                        bookTranTypeId = 686380L;
                        customFields = new org.openapis.openapi.models.shared.AcudfValueDto[]{{
                            add(new AcudfValueDto() {{
                                description = "dolore";
                                id = 802734L;
                                userDefinedFieldId = 303292L;
                                value = "iste";
                            }}),
                        }};
                        customerId = 355889L;
                        detailCollection = new String[]{{
                            add("placeat"),
                            add("voluptas"),
                            add("occaecati"),
                            add("unde"),
                        }};
                        details = "illo";
                        entryDate = OffsetDateTime.parse("2022-12-03T10:33:50.198Z");
                        id = 725316L;
                        netGoods = 3712.87;
                        netServices = 976.59;
                        note = "cumque";
                        procDate = OffsetDateTime.parse("2022-04-24T15:07:59.283Z");
                        reference = "facere";
                        timestamp = "facilis";
                        total = 1053.72;
                        totalNet = 7672.1;
                        totalVAT = 9645.11;
                        unpaid = 2871.52;
                        vatEntries = new org.openapis.openapi.models.shared.VatEntryDto[]{{
                            add(new VatEntryDto() {{
                                amount = 5482.56;
                                id = 523995L;
                                percentage = 5433.53;
                                vatRateId = 886118L;
                            }}),
                            add(new VatEntryDto() {{
                                amount = 7396.33;
                                id = 863330L;
                                percentage = 9568.71;
                                vatRateId = 775427L;
                            }}),
                            add(new VatEntryDto() {{
                                amount = 2779.9;
                                id = 797293L;
                                percentage = 7932.82;
                                vatRateId = 781491L;
                            }}),
                        }};
                        vatTypeId = 659971L;
                    }};
                    opCode = BatchItemSalesEntryDtoOpCodeEnum.TWO;
                }}),
                add(new BatchItemSalesEntryDto() {{
                    item = new SalesEntryDto() {{
                        acCode = "occaecati";
                        acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                            add(new AcEntryDto() {{
                                accountCode = "quo";
                                analysisCategoryId = 457150L;
                                description = "hic";
                                id = 802216L;
                                value = 366.91;
                            }}),
                            add(new AcEntryDto() {{
                                accountCode = "soluta";
                                analysisCategoryId = 147400L;
                                description = "pariatur";
                                id = 756287L;
                                value = 9274.9;
                            }}),
                            add(new AcEntryDto() {{
                                accountCode = "veritatis";
                                analysisCategoryId = 13637L;
                                description = "laudantium";
                                id = 480421L;
                                value = 2198.6;
                            }}),
                        }};
                        bookTranTypeId = 917152L;
                        customFields = new org.openapis.openapi.models.shared.AcudfValueDto[]{{
                            add(new AcudfValueDto() {{
                                description = "magni";
                                id = 701841L;
                                userDefinedFieldId = 39222L;
                                value = "voluptatem";
                            }}),
                            add(new AcudfValueDto() {{
                                description = "eum";
                                id = 873320L;
                                userDefinedFieldId = 431253L;
                                value = "reprehenderit";
                            }}),
                        }};
                        customerId = 531195L;
                        detailCollection = new String[]{{
                            add("nihil"),
                            add("atque"),
                            add("rerum"),
                        }};
                        details = "deserunt";
                        entryDate = OffsetDateTime.parse("2022-04-24T06:06:44.704Z");
                        id = 542340L;
                        netGoods = 1011.07;
                        netServices = 6672.13;
                        note = "enim";
                        procDate = OffsetDateTime.parse("2022-08-31T06:08:59.133Z");
                        reference = "quae";
                        timestamp = "quas";
                        total = 8112.59;
                        totalNet = 3180.28;
                        totalVAT = 2864.53;
                        unpaid = 9580.68;
                        vatEntries = new org.openapis.openapi.models.shared.VatEntryDto[]{{
                            add(new VatEntryDto() {{
                                amount = 9657.35;
                                id = 642234L;
                                percentage = 6201.26;
                                vatRateId = 763869L;
                            }}),
                            add(new VatEntryDto() {{
                                amount = 6174.97;
                                id = 312511L;
                                percentage = 9853.79;
                                vatRateId = 156098L;
                            }}),
                            add(new VatEntryDto() {{
                                amount = 8872.84;
                                id = 651467L;
                                percentage = 7650.7;
                                vatRateId = 337081L;
                            }}),
                            add(new VatEntryDto() {{
                                amount = 3135.9;
                                id = 430235L;
                                percentage = 3655.39;
                                vatRateId = 849337L;
                            }}),
                        }};
                        vatTypeId = 201266L;
                    }};
                    opCode = BatchItemSalesEntryDtoOpCodeEnum.ONE;
                }}),
            }}            

            SalesEntriesProcessBatchResponse res = sdk.salesEntries.salesEntriesProcessBatch(req);

            if (res.salesEntriesProcessBatch200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## salesEntriesPut

Updates an existing Sales Entry.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SalesEntriesPutRequest;
import org.openapis.openapi.models.operations.SalesEntriesPutResponse;
import org.openapis.openapi.models.shared.AcEntryDto;
import org.openapis.openapi.models.shared.AcudfValueDto;
import org.openapis.openapi.models.shared.SalesEntryDto;
import org.openapis.openapi.models.shared.VatEntryDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SalesEntriesPutRequest req = new SalesEntriesPutRequest(                new SalesEntryDto() {{
                                acCode = "odio";
                                acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                                    add(new AcEntryDto() {{
                                        accountCode = "asperiores";
                                        analysisCategoryId = 924293L;
                                        description = "voluptates";
                                        id = 506250L;
                                        value = 1183.49;
                                    }}),
                                    add(new AcEntryDto() {{
                                        accountCode = "fugit";
                                        analysisCategoryId = 25190L;
                                        description = "aliquid";
                                        id = 898638L;
                                        value = 1489.75;
                                    }}),
                                    add(new AcEntryDto() {{
                                        accountCode = "deleniti";
                                        analysisCategoryId = 122744L;
                                        description = "nesciunt";
                                        id = 963913L;
                                        value = 6736.53;
                                    }}),
                                    add(new AcEntryDto() {{
                                        accountCode = "aliquam";
                                        analysisCategoryId = 644223L;
                                        description = "modi";
                                        id = 122085L;
                                        value = 7710.92;
                                    }}),
                                }};
                                bookTranTypeId = 259600L;
                                customFields = new org.openapis.openapi.models.shared.AcudfValueDto[]{{
                                    add(new AcudfValueDto() {{
                                        description = "ipsa";
                                        id = 872991L;
                                        userDefinedFieldId = 209860L;
                                        value = "repellat";
                                    }}),
                                    add(new AcudfValueDto() {{
                                        description = "aspernatur";
                                        id = 80284L;
                                        userDefinedFieldId = 193236L;
                                        value = "fugit";
                                    }}),
                                    add(new AcudfValueDto() {{
                                        description = "fuga";
                                        id = 943103L;
                                        userDefinedFieldId = 49499L;
                                        value = "dolorem";
                                    }}),
                                }};
                                customerId = 101854L;
                                detailCollection = new String[]{{
                                    add("aspernatur"),
                                }};
                                details = "nulla";
                                entryDate = OffsetDateTime.parse("2022-12-05T03:29:31.142Z");
                                id = 298750L;
                                netGoods = 9618.42;
                                netServices = 2550.64;
                                note = "optio";
                                procDate = OffsetDateTime.parse("2021-10-15T03:46:52.888Z");
                                reference = "repellat";
                                timestamp = "quae";
                                total = 5339.78;
                                totalNet = 7116.15;
                                totalVAT = 9442.03;
                                unpaid = 5698.34;
                                vatEntries = new org.openapis.openapi.models.shared.VatEntryDto[]{{
                                    add(new VatEntryDto() {{
                                        amount = 1513.85;
                                        id = 106682L;
                                        percentage = 6273.41;
                                        vatRateId = 408774L;
                                    }}),
                                    add(new VatEntryDto() {{
                                        amount = 6573.01;
                                        id = 296128L;
                                        percentage = 9454.19;
                                        vatRateId = 493407L;
                                    }}),
                                }};
                                vatTypeId = 457835L;
                            }};, 657044L);            

            SalesEntriesPutResponse res = sdk.salesEntries.salesEntriesPut(req);

            if (res.salesEntriesPut200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV1SalesEntriesId

Returns information about a single Sales Entry.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV1SalesEntriesIdRequest;
import org.openapis.openapi.models.operations.GetV1SalesEntriesIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV1SalesEntriesIdRequest req = new GetV1SalesEntriesIdRequest(512488L);            

            GetV1SalesEntriesIdResponse res = sdk.salesEntries.getV1SalesEntriesId(req);

            if (res.salesEntryDto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
