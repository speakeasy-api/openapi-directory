# cashPayments

### Available Operations

* [cashPaymentsDelete](#cashpaymentsdelete) - Removes an existing Cash Payment.
* [cashPaymentsGet](#cashpaymentsget) - Returns a list of company's Cash Payments. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* [cashPaymentsPost](#cashpaymentspost) - Creates a new Cash Payment.
* [cashPaymentsProcessBatch](#cashpaymentsprocessbatch) - Processes a batch of Cash Payments.
* [cashPaymentsPut](#cashpaymentsput) - Updates an existing Cash Payment.
* [getV1CashPaymentsId](#getv1cashpaymentsid) - Returns information about a single Cash Payment.

## cashPaymentsDelete

Removes an existing Cash Payment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CashPaymentsDeleteRequest;
import org.openapis.openapi.models.operations.CashPaymentsDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CashPaymentsDeleteRequest req = new CashPaymentsDeleteRequest(38425L, "iure");            

            CashPaymentsDeleteResponse res = sdk.cashPayments.cashPaymentsDelete(req);

            if (res.cashPaymentsDelete200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cashPaymentsGet

Returns a list of company's Cash Payments. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CashPaymentsGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CashPaymentsGetResponse res = sdk.cashPayments.cashPaymentsGet();

            if (res.pageResultCashPaymentQueryDto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cashPaymentsPost

Creates a new Cash Payment.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CashPaymentsPostResponse;
import org.openapis.openapi.models.shared.AcEntryDto;
import org.openapis.openapi.models.shared.AcudfValueDto;
import org.openapis.openapi.models.shared.CashPaymentDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CashPaymentDto req = new CashPaymentDto() {{
                acCode = "culpa";
                acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                    add(new AcEntryDto() {{
                        accountCode = "sapiente";
                        analysisCategoryId = 102044L;
                        description = "mollitia";
                        id = 208876L;
                        value = 6350.59;
                    }}),
                    add(new AcEntryDto() {{
                        accountCode = "consequuntur";
                        analysisCategoryId = 995300L;
                        description = "mollitia";
                        id = 581850L;
                        value = 2532.91;
                    }}),
                    add(new AcEntryDto() {{
                        accountCode = "commodi";
                        analysisCategoryId = 466311L;
                        description = "molestiae";
                        id = 244425L;
                        value = 6235.1;
                    }}),
                    add(new AcEntryDto() {{
                        accountCode = "quia";
                        analysisCategoryId = 338007L;
                        description = "vitae";
                        id = 674752L;
                        value = 6563.3;
                    }}),
                }};
                bankAccountCode = "enim";
                bankAccountId = 138183L;
                bookTranTypeId = 778346L;
                customFields = new org.openapis.openapi.models.shared.AcudfValueDto[]{{
                    add(new AcudfValueDto() {{
                        description = "tenetur";
                        id = 368725L;
                        userDefinedFieldId = 662527L;
                        value = "possimus";
                    }}),
                }};
                detailCollection = new String[]{{
                    add("quasi"),
                }};
                discount = 6228.46;
                entryDate = OffsetDateTime.parse("2020-12-24T08:13:29.299Z");
                id = 96098L;
                ledger = 9719.45;
                lodgement = 9764.6;
                note = "vero";
                plaidTransactionId = "nihil";
                procDate = OffsetDateTime.parse("2021-01-17T23:08:44.457Z");
                supplierId = 55714L;
                timestamp = "omnis";
                total = 4511.59;
            }};            

            CashPaymentsPostResponse res = sdk.cashPayments.cashPaymentsPost(req);

            if (res.cashPaymentsPost200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cashPaymentsProcessBatch

Processes a batch of Cash Payments.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CashPaymentsProcessBatchResponse;
import org.openapis.openapi.models.shared.AcEntryDto;
import org.openapis.openapi.models.shared.AcudfValueDto;
import org.openapis.openapi.models.shared.BatchItemCashPaymentDto;
import org.openapis.openapi.models.shared.BatchItemCashPaymentDtoOpCodeEnum;
import org.openapis.openapi.models.shared.CashPaymentDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new org.openapis.openapi.models.shared.BatchItemCashPaymentDto[]{{
                add(new BatchItemCashPaymentDto() {{
                    item = new CashPaymentDto() {{
                        acCode = "perferendis";
                        acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                            add(new AcEntryDto() {{
                                accountCode = "reprehenderit";
                                analysisCategoryId = 282807L;
                                description = "maiores";
                                id = 120196L;
                                value = 3594.44;
                            }}),
                        }};
                        bankAccountCode = "dolore";
                        bankAccountId = 480894L;
                        bookTranTypeId = 118727L;
                        customFields = new org.openapis.openapi.models.shared.AcudfValueDto[]{{
                            add(new AcudfValueDto() {{
                                description = "enim";
                                id = 880476L;
                                userDefinedFieldId = 414263L;
                                value = "repudiandae";
                            }}),
                            add(new AcudfValueDto() {{
                                description = "quae";
                                id = 216822L;
                                userDefinedFieldId = 692472L;
                                value = "molestias";
                            }}),
                            add(new AcudfValueDto() {{
                                description = "excepturi";
                                id = 865103L;
                                userDefinedFieldId = 265389L;
                                value = "praesentium";
                            }}),
                        }};
                        detailCollection = new String[]{{
                            add("voluptates"),
                            add("quasi"),
                            add("repudiandae"),
                        }};
                        discount = 5759.47;
                        entryDate = OffsetDateTime.parse("2022-01-26T19:21:55.034Z");
                        id = 277718L;
                        ledger = 3185.69;
                        lodgement = 93.56;
                        note = "est";
                        plaidTransactionId = "quibusdam";
                        procDate = OffsetDateTime.parse("2022-05-09T18:45:16.013Z");
                        supplierId = 716327L;
                        timestamp = "quibusdam";
                        total = 2894.06;
                    }};
                    opCode = BatchItemCashPaymentDtoOpCodeEnum.ONE;
                }}),
                add(new BatchItemCashPaymentDto() {{
                    item = new CashPaymentDto() {{
                        acCode = "qui";
                        acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                            add(new AcEntryDto() {{
                                accountCode = "cupiditate";
                                analysisCategoryId = 552822L;
                                description = "perferendis";
                                id = 164940L;
                                value = 8289.4;
                            }}),
                            add(new AcEntryDto() {{
                                accountCode = "ipsam";
                                analysisCategoryId = 4695L;
                                description = "fugit";
                                id = 677817L;
                                value = 5696.18;
                            }}),
                        }};
                        bankAccountCode = "tempora";
                        bankAccountId = 703737L;
                        bookTranTypeId = 735194L;
                        customFields = new org.openapis.openapi.models.shared.AcudfValueDto[]{{
                            add(new AcudfValueDto() {{
                                description = "delectus";
                                id = 433288L;
                                userDefinedFieldId = 248753L;
                                value = "eligendi";
                            }}),
                            add(new AcudfValueDto() {{
                                description = "sint";
                                id = 396098L;
                                userDefinedFieldId = 592042L;
                                value = "necessitatibus";
                            }}),
                        }};
                        detailCollection = new String[]{{
                            add("officia"),
                            add("dolor"),
                            add("debitis"),
                        }};
                        discount = 9527.49;
                        entryDate = OffsetDateTime.parse("2022-02-08T14:21:47.573Z");
                        id = 449198L;
                        ledger = 8464.09;
                        lodgement = 9785.71;
                        note = "rerum";
                        plaidTransactionId = "dicta";
                        procDate = OffsetDateTime.parse("2022-03-27T00:52:20.281Z");
                        supplierId = 813798L;
                        timestamp = "ea";
                        total = 3965.06;
                    }};
                    opCode = BatchItemCashPaymentDtoOpCodeEnum.THREE;
                }}),
                add(new BatchItemCashPaymentDto() {{
                    item = new CashPaymentDto() {{
                        acCode = "accusamus";
                        acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                            add(new AcEntryDto() {{
                                accountCode = "occaecati";
                                analysisCategoryId = 313218L;
                                description = "accusamus";
                                id = 965417L;
                                value = 6925.32;
                            }}),
                        }};
                        bankAccountCode = "provident";
                        bankAccountId = 725255L;
                        bookTranTypeId = 659669L;
                        customFields = new org.openapis.openapi.models.shared.AcudfValueDto[]{{
                            add(new AcudfValueDto() {{
                                description = "deleniti";
                                id = 956084L;
                                userDefinedFieldId = 230533L;
                                value = "deserunt";
                            }}),
                            add(new AcudfValueDto() {{
                                description = "nisi";
                                id = 423855L;
                                userDefinedFieldId = 618809L;
                                value = "omnis";
                            }}),
                            add(new AcudfValueDto() {{
                                description = "molestiae";
                                id = 19193L;
                                userDefinedFieldId = 470132L;
                                value = "magnam";
                            }}),
                        }};
                        detailCollection = new String[]{{
                            add("id"),
                            add("labore"),
                            add("labore"),
                        }};
                        discount = 3834.62;
                        entryDate = OffsetDateTime.parse("2021-07-03T02:32:39.849Z");
                        id = 428769L;
                        ledger = 8784.53;
                        lodgement = 1354.74;
                        note = "architecto";
                        plaidTransactionId = "magnam";
                        procDate = OffsetDateTime.parse("2022-06-06T23:06:26.119Z");
                        supplierId = 354047L;
                        timestamp = "provident";
                        total = 5518.16;
                    }};
                    opCode = BatchItemCashPaymentDtoOpCodeEnum.TWO;
                }}),
            }}            

            CashPaymentsProcessBatchResponse res = sdk.cashPayments.cashPaymentsProcessBatch(req);

            if (res.cashPaymentsProcessBatch200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cashPaymentsPut

Updates an existing Cash Payment.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CashPaymentsPutRequest;
import org.openapis.openapi.models.operations.CashPaymentsPutResponse;
import org.openapis.openapi.models.shared.AcEntryDto;
import org.openapis.openapi.models.shared.AcudfValueDto;
import org.openapis.openapi.models.shared.CashPaymentDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CashPaymentsPutRequest req = new CashPaymentsPutRequest(                new CashPaymentDto() {{
                                acCode = "accusantium";
                                acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                                    add(new AcEntryDto() {{
                                        accountCode = "reiciendis";
                                        analysisCategoryId = 652103L;
                                        description = "ad";
                                        id = 431418L;
                                        value = 2212.62;
                                    }}),
                                    add(new AcEntryDto() {{
                                        accountCode = "necessitatibus";
                                        analysisCategoryId = 141264L;
                                        description = "nemo";
                                        id = 97260L;
                                        value = 4358.65;
                                    }}),
                                    add(new AcEntryDto() {{
                                        accountCode = "doloribus";
                                        analysisCategoryId = 891924L;
                                        description = "eius";
                                        id = 806194L;
                                        value = 5370.23;
                                    }}),
                                }};
                                bankAccountCode = "facilis";
                                bankAccountId = 447926L;
                                bookTranTypeId = 100226L;
                                customFields = new org.openapis.openapi.models.shared.AcudfValueDto[]{{
                                    add(new AcudfValueDto() {{
                                        description = "repudiandae";
                                        id = 352312L;
                                        userDefinedFieldId = 714242L;
                                        value = "nihil";
                                    }}),
                                }};
                                detailCollection = new String[]{{
                                    add("quibusdam"),
                                    add("sed"),
                                    add("saepe"),
                                    add("pariatur"),
                                }};
                                discount = 375.59;
                                entryDate = OffsetDateTime.parse("2022-06-29T11:09:23.468Z");
                                id = 615560L;
                                ledger = 1668.47;
                                lodgement = 1238.2;
                                note = "quo";
                                plaidTransactionId = "illum";
                                procDate = OffsetDateTime.parse("2020-07-30T23:39:27.609Z");
                                supplierId = 411397L;
                                timestamp = "excepturi";
                                total = 1399.72;
                            }};, 407183L);            

            CashPaymentsPutResponse res = sdk.cashPayments.cashPaymentsPut(req);

            if (res.cashPaymentsPut200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV1CashPaymentsId

Returns information about a single Cash Payment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV1CashPaymentsIdRequest;
import org.openapis.openapi.models.operations.GetV1CashPaymentsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV1CashPaymentsIdRequest req = new GetV1CashPaymentsIdRequest(33222L);            

            GetV1CashPaymentsIdResponse res = sdk.cashPayments.getV1CashPaymentsId(req);

            if (res.cashPaymentDto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
