# purchases

### Available Operations

* [purchasesDelete](#purchasesdelete) - Removes an existing Purchase.
* [purchasesGet](#purchasesget) - Returns a list of company's Purchases. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* [purchasesPost](#purchasespost) - Creates a new Purchase.
* [purchasesProcessBatch](#purchasesprocessbatch) - Processes a batch of Purchases.
* [purchasesPut](#purchasesput) - Updates an existing Purchase.
* [getV1PurchasesId](#getv1purchasesid) - Returns information about a single Purchases.

## purchasesDelete

Removes an existing Purchase.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PurchasesDeleteRequest;
import org.openapis.openapi.models.operations.PurchasesDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PurchasesDeleteRequest req = new PurchasesDeleteRequest(388319L, "recusandae");            

            PurchasesDeleteResponse res = sdk.purchases.purchasesDelete(req);

            if (res.purchasesDelete200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## purchasesGet

Returns a list of company's Purchases. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PurchasesGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PurchasesGetResponse res = sdk.purchases.purchasesGet();

            if (res.pageResultPurchaseQueryDto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## purchasesPost

Creates a new Purchase.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PurchasesPostResponse;
import org.openapis.openapi.models.shared.AcEntryDto;
import org.openapis.openapi.models.shared.AcudfValueDto;
import org.openapis.openapi.models.shared.PurchaseDto;
import org.openapis.openapi.models.shared.VatEntryDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.PurchaseDto req = new PurchaseDto() {{
                acCode = "consequuntur";
                acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                    add(new AcEntryDto() {{
                        accountCode = "exercitationem";
                        analysisCategoryId = 895692L;
                        description = "quasi";
                        id = 392569L;
                        value = 8711.03;
                    }}),
                }};
                bookTranTypeId = 878373L;
                customFields = new org.openapis.openapi.models.shared.AcudfValueDto[]{{
                    add(new AcudfValueDto() {{
                        description = "harum";
                        id = 192718L;
                        userDefinedFieldId = 987349L;
                        value = "repudiandae";
                    }}),
                    add(new AcudfValueDto() {{
                        description = "optio";
                        id = 579681L;
                        userDefinedFieldId = 364544L;
                        value = "voluptate";
                    }}),
                    add(new AcudfValueDto() {{
                        description = "blanditiis";
                        id = 642352L;
                        userDefinedFieldId = 376389L;
                        value = "numquam";
                    }}),
                }};
                detailCollection = new String[]{{
                    add("quos"),
                    add("eius"),
                }};
                entryDate = OffsetDateTime.parse("2022-07-03T23:18:00.213Z");
                id = 200516L;
                isDiscrepancyAccepted = false;
                netGoods = 6817.4;
                netServices = 5140.54;
                note = "incidunt";
                postponedAccounting = false;
                procDate = OffsetDateTime.parse("2022-06-23T14:25:57.973Z");
                reference = "fugiat";
                supplierId = 117380L;
                timestamp = "nisi";
                total = 1598.45;
                totalNet = 2330.78;
                totalVAT = 468.06;
                unallocated = 5854.32;
                unpaid = 9707.32;
                vatEntries = new org.openapis.openapi.models.shared.VatEntryDto[]{{
                    add(new VatEntryDto() {{
                        amount = 38.6;
                        id = 608989L;
                        percentage = 1785.8;
                        vatRateId = 579011L;
                    }}),
                    add(new VatEntryDto() {{
                        amount = 6128.67;
                        id = 170099L;
                        percentage = 813.69;
                        vatRateId = 686362L;
                    }}),
                    add(new VatEntryDto() {{
                        amount = 8818.97;
                        id = 976802L;
                        percentage = 7196.2;
                        vatRateId = 608593L;
                    }}),
                }};
                vatTypeId = 966390L;
            }};            

            PurchasesPostResponse res = sdk.purchases.purchasesPost(req);

            if (res.purchasesPost200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## purchasesProcessBatch

Processes a batch of Purchases.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PurchasesProcessBatchResponse;
import org.openapis.openapi.models.shared.AcEntryDto;
import org.openapis.openapi.models.shared.AcudfValueDto;
import org.openapis.openapi.models.shared.BatchItemPurchaseDto;
import org.openapis.openapi.models.shared.BatchItemPurchaseDtoOpCodeEnum;
import org.openapis.openapi.models.shared.PurchaseDto;
import org.openapis.openapi.models.shared.VatEntryDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new org.openapis.openapi.models.shared.BatchItemPurchaseDto[]{{
                add(new BatchItemPurchaseDto() {{
                    item = new PurchaseDto() {{
                        acCode = "praesentium";
                        acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                            add(new AcEntryDto() {{
                                accountCode = "magnam";
                                analysisCategoryId = 836364L;
                                description = "quos";
                                id = 415280L;
                                value = 9308.19;
                            }}),
                            add(new AcEntryDto() {{
                                accountCode = "commodi";
                                analysisCategoryId = 520761L;
                                description = "earum";
                                id = 267207L;
                                value = 7221.84;
                            }}),
                            add(new AcEntryDto() {{
                                accountCode = "vero";
                                analysisCategoryId = 32901L;
                                description = "ipsam";
                                id = 425946L;
                                value = 13.83;
                            }}),
                            add(new AcEntryDto() {{
                                accountCode = "quasi";
                                analysisCategoryId = 247685L;
                                description = "maiores";
                                id = 318233L;
                                value = 5752.13;
                            }}),
                        }};
                        bookTranTypeId = 858778L;
                        customFields = new org.openapis.openapi.models.shared.AcudfValueDto[]{{
                            add(new AcudfValueDto() {{
                                description = "esse";
                                id = 364463L;
                                userDefinedFieldId = 444587L;
                                value = "est";
                            }}),
                            add(new AcudfValueDto() {{
                                description = "quis";
                                id = 571844L;
                                userDefinedFieldId = 880679L;
                                value = "impedit";
                            }}),
                            add(new AcudfValueDto() {{
                                description = "hic";
                                id = 900103L;
                                userDefinedFieldId = 991891L;
                                value = "ex";
                            }}),
                        }};
                        detailCollection = new String[]{{
                            add("debitis"),
                            add("delectus"),
                        }};
                        entryDate = OffsetDateTime.parse("2022-03-17T23:08:05.815Z");
                        id = 685478L;
                        isDiscrepancyAccepted = false;
                        netGoods = 6756.89;
                        netServices = 2310.7;
                        note = "velit";
                        postponedAccounting = false;
                        procDate = OffsetDateTime.parse("2022-07-26T23:40:06.851Z");
                        reference = "impedit";
                        supplierId = 166047L;
                        timestamp = "soluta";
                        total = 9227.57;
                        totalNet = 7214.3;
                        totalVAT = 2940.76;
                        unallocated = 4828.92;
                        unpaid = 4530.94;
                        vatEntries = new org.openapis.openapi.models.shared.VatEntryDto[]{{
                            add(new VatEntryDto() {{
                                amount = 4939.58;
                                id = 205566L;
                                percentage = 7781.72;
                                vatRateId = 535468L;
                            }}),
                        }};
                        vatTypeId = 844235L;
                    }};
                    opCode = BatchItemPurchaseDtoOpCodeEnum.TWO;
                }}),
                add(new BatchItemPurchaseDto() {{
                    item = new PurchaseDto() {{
                        acCode = "odit";
                        acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                            add(new AcEntryDto() {{
                                accountCode = "vel";
                                analysisCategoryId = 300824L;
                                description = "quibusdam";
                                id = 78969L;
                                value = 8180.34;
                            }}),
                            add(new AcEntryDto() {{
                                accountCode = "libero";
                                analysisCategoryId = 102413L;
                                description = "voluptatibus";
                                id = 156383L;
                                value = 7820.9;
                            }}),
                            add(new AcEntryDto() {{
                                accountCode = "aliquam";
                                analysisCategoryId = 247045L;
                                description = "illo";
                                id = 36561L;
                                value = 4246.63;
                            }}),
                            add(new AcEntryDto() {{
                                accountCode = "ea";
                                analysisCategoryId = 107617L;
                                description = "vero";
                                id = 568218L;
                                value = 4319.94;
                            }}),
                        }};
                        bookTranTypeId = 246557L;
                        customFields = new org.openapis.openapi.models.shared.AcudfValueDto[]{{
                            add(new AcudfValueDto() {{
                                description = "perspiciatis";
                                id = 935302L;
                                userDefinedFieldId = 117525L;
                                value = "impedit";
                            }}),
                            add(new AcudfValueDto() {{
                                description = "voluptatibus";
                                id = 610987L;
                                userDefinedFieldId = 932562L;
                                value = "alias";
                            }}),
                        }};
                        detailCollection = new String[]{{
                            add("itaque"),
                            add("velit"),
                        }};
                        entryDate = OffsetDateTime.parse("2022-07-02T05:01:22.981Z");
                        id = 224467L;
                        isDiscrepancyAccepted = false;
                        netGoods = 4833.94;
                        netServices = 247.53;
                        note = "doloremque";
                        postponedAccounting = false;
                        procDate = OffsetDateTime.parse("2022-05-12T12:10:59.574Z");
                        reference = "recusandae";
                        supplierId = 408303L;
                        timestamp = "quidem";
                        total = 3774.06;
                        totalNet = 7051.48;
                        totalVAT = 8093.65;
                        unallocated = 5960.65;
                        unpaid = 7090.36;
                        vatEntries = new org.openapis.openapi.models.shared.VatEntryDto[]{{
                            add(new VatEntryDto() {{
                                amount = 9543.34;
                                id = 455579L;
                                percentage = 3519.36;
                                vatRateId = 600193L;
                            }}),
                            add(new VatEntryDto() {{
                                amount = 8975.43;
                                id = 654082L;
                                percentage = 7699.67;
                                vatRateId = 373040L;
                            }}),
                            add(new VatEntryDto() {{
                                amount = 3574.25;
                                id = 668234L;
                                percentage = 6216.66;
                                vatRateId = 456885L;
                            }}),
                        }};
                        vatTypeId = 288570L;
                    }};
                    opCode = BatchItemPurchaseDtoOpCodeEnum.ONE;
                }}),
            }}            

            PurchasesProcessBatchResponse res = sdk.purchases.purchasesProcessBatch(req);

            if (res.purchasesProcessBatch200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## purchasesPut

Updates an existing Purchase.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PurchasesPutRequest;
import org.openapis.openapi.models.operations.PurchasesPutResponse;
import org.openapis.openapi.models.shared.AcEntryDto;
import org.openapis.openapi.models.shared.AcudfValueDto;
import org.openapis.openapi.models.shared.PurchaseDto;
import org.openapis.openapi.models.shared.VatEntryDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PurchasesPutRequest req = new PurchasesPutRequest(                new PurchaseDto() {{
                                acCode = "vero";
                                acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                                    add(new AcEntryDto() {{
                                        accountCode = "vitae";
                                        analysisCategoryId = 81371L;
                                        description = "dolorem";
                                        id = 322017L;
                                        value = 1830.33;
                                    }}),
                                }};
                                bookTranTypeId = 611328L;
                                customFields = new org.openapis.openapi.models.shared.AcudfValueDto[]{{
                                    add(new AcudfValueDto() {{
                                        description = "nemo";
                                        id = 745233L;
                                        userDefinedFieldId = 726227L;
                                        value = "rem";
                                    }}),
                                    add(new AcudfValueDto() {{
                                        description = "dolorum";
                                        id = 487676L;
                                        userDefinedFieldId = 144691L;
                                        value = "alias";
                                    }}),
                                }};
                                detailCollection = new String[]{{
                                    add("vel"),
                                }};
                                entryDate = OffsetDateTime.parse("2022-12-08T19:16:07.063Z");
                                id = 264333L;
                                isDiscrepancyAccepted = false;
                                netGoods = 2082.53;
                                netServices = 3483.57;
                                note = "itaque";
                                postponedAccounting = false;
                                procDate = OffsetDateTime.parse("2022-10-14T09:06:41.387Z");
                                reference = "unde";
                                supplierId = 858338L;
                                timestamp = "distinctio";
                                total = 8028.94;
                                totalNet = 1572.22;
                                totalVAT = 1591.46;
                                unallocated = 3421.37;
                                unpaid = 6057.12;
                                vatEntries = new org.openapis.openapi.models.shared.VatEntryDto[]{{
                                    add(new VatEntryDto() {{
                                        amount = 1156.61;
                                        id = 663318L;
                                        percentage = 7278.88;
                                        vatRateId = 854460L;
                                    }}),
                                    add(new VatEntryDto() {{
                                        amount = 6374.62;
                                        id = 554603L;
                                        percentage = 8119.39;
                                        vatRateId = 25756L;
                                    }}),
                                    add(new VatEntryDto() {{
                                        amount = 4793.85;
                                        id = 57320L;
                                        percentage = 9148.64;
                                        vatRateId = 80061L;
                                    }}),
                                }};
                                vatTypeId = 49348L;
                            }};, 517137L);            

            PurchasesPutResponse res = sdk.purchases.purchasesPut(req);

            if (res.purchasesPut200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV1PurchasesId

Returns information about a single Purchases.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV1PurchasesIdRequest;
import org.openapis.openapi.models.operations.GetV1PurchasesIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV1PurchasesIdRequest req = new GetV1PurchasesIdRequest(292888L);            

            GetV1PurchasesIdResponse res = sdk.purchases.getV1PurchasesId(req);

            if (res.purchaseDto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
