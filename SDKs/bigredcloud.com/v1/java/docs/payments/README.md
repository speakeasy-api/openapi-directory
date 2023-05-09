# payments

### Available Operations

* [paymentsDelete](#paymentsdelete) - Removes an existing Payment.
* [paymentsGet](#paymentsget) - Returns a list of company's Payments. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* [paymentsPost](#paymentspost) - Creates a new Payment.
* [paymentsProcessBatch](#paymentsprocessbatch) - Processes a batch of Payments.
* [paymentsPut](#paymentsput) - Updates an existing Payment.
* [getV1PaymentsId](#getv1paymentsid) - Returns information about a single Payments.

## paymentsDelete

Removes an existing Payment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentsDeleteRequest;
import org.openapis.openapi.models.operations.PaymentsDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PaymentsDeleteRequest req = new PaymentsDeleteRequest(431785L, "reiciendis");            

            PaymentsDeleteResponse res = sdk.payments.paymentsDelete(req);

            if (res.paymentsDelete200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentsGet

Returns a list of company's Payments. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentsGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PaymentsGetResponse res = sdk.payments.paymentsGet();

            if (res.pageResultPaymentQueryDto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentsPost

Creates a new Payment.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentsPostResponse;
import org.openapis.openapi.models.shared.AcEntryDto;
import org.openapis.openapi.models.shared.AcudfValueDto;
import org.openapis.openapi.models.shared.PaymentDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.PaymentDto req = new PaymentDto() {{
                acCode = "provident";
                acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                    add(new AcEntryDto() {{
                        accountCode = "ullam";
                        analysisCategoryId = 96804L;
                        description = "animi";
                        id = 343392L;
                        value = 6523.09;
                    }}),
                }};
                bankAccountCode = "provident";
                bankAccountId = 821719L;
                bookTranTypeId = 659177L;
                customFields = new org.openapis.openapi.models.shared.AcudfValueDto[]{{
                    add(new AcudfValueDto() {{
                        description = "aliquid";
                        id = 37565L;
                        userDefinedFieldId = 999278L;
                        value = "doloribus";
                    }}),
                    add(new AcudfValueDto() {{
                        description = "ullam";
                        id = 448143L;
                        userDefinedFieldId = 721407L;
                        value = "earum";
                    }}),
                }};
                detailCollection = new String[]{{
                    add("laborum"),
                    add("placeat"),
                    add("modi"),
                }};
                discount = 9762.26;
                entryDate = OffsetDateTime.parse("2021-03-22T10:48:54.502Z");
                id = 956933L;
                note = "cumque";
                plaidTransactionId = "vitae";
                procDate = OffsetDateTime.parse("2022-06-16T06:32:28.803Z");
                reference = "quis";
                supplierId = 82057L;
                timestamp = "fugit";
                total = 7652.71;
                transferBankCode = "quae";
                transferBankId = 21688L;
                unallocated = 2419.01;
            }};            

            PaymentsPostResponse res = sdk.payments.paymentsPost(req);

            if (res.paymentsPost200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentsProcessBatch

Processes a batch of Payments.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentsProcessBatchResponse;
import org.openapis.openapi.models.shared.AcEntryDto;
import org.openapis.openapi.models.shared.AcudfValueDto;
import org.openapis.openapi.models.shared.BatchItemPaymentDto;
import org.openapis.openapi.models.shared.BatchItemPaymentDtoOpCodeEnum;
import org.openapis.openapi.models.shared.PaymentDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new org.openapis.openapi.models.shared.BatchItemPaymentDto[]{{
                add(new BatchItemPaymentDto() {{
                    item = new PaymentDto() {{
                        acCode = "eum";
                        acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                            add(new AcEntryDto() {{
                                accountCode = "rem";
                                analysisCategoryId = 871083L;
                                description = "impedit";
                                id = 179410L;
                                value = 9587.41;
                            }}),
                            add(new AcEntryDto() {{
                                accountCode = "eum";
                                analysisCategoryId = 117320L;
                                description = "minima";
                                id = 107004L;
                                value = 5834.04;
                            }}),
                        }};
                        bankAccountCode = "provident";
                        bankAccountId = 936469L;
                        bookTranTypeId = 745398L;
                        customFields = new org.openapis.openapi.models.shared.AcudfValueDto[]{{
                            add(new AcudfValueDto() {{
                                description = "illum";
                                id = 52508L;
                                userDefinedFieldId = 935833L;
                                value = "perspiciatis";
                            }}),
                            add(new AcudfValueDto() {{
                                description = "maiores";
                                id = 891801L;
                                userDefinedFieldId = 399802L;
                                value = "porro";
                            }}),
                            add(new AcudfValueDto() {{
                                description = "suscipit";
                                id = 211534L;
                                userDefinedFieldId = 147808L;
                                value = "cumque";
                            }}),
                            add(new AcudfValueDto() {{
                                description = "fuga";
                                id = 189062L;
                                userDefinedFieldId = 656762L;
                                value = "necessitatibus";
                            }}),
                        }};
                        detailCollection = new String[]{{
                            add("consequatur"),
                            add("quasi"),
                            add("et"),
                            add("ducimus"),
                        }};
                        discount = 6191.83;
                        entryDate = OffsetDateTime.parse("2022-03-27T19:38:57.457Z");
                        id = 241557L;
                        note = "quasi";
                        plaidTransactionId = "magni";
                        procDate = OffsetDateTime.parse("2020-06-03T18:12:56.279Z");
                        reference = "necessitatibus";
                        supplierId = 58534L;
                        timestamp = "tempora";
                        total = 4706.21;
                        transferBankCode = "molestiae";
                        transferBankId = 115834L;
                        unallocated = 4797.54;
                    }};
                    opCode = BatchItemPaymentDtoOpCodeEnum.TWO;
                }}),
            }}            

            PaymentsProcessBatchResponse res = sdk.payments.paymentsProcessBatch(req);

            if (res.paymentsProcessBatch200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentsPut

Updates an existing Payment.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentsPutRequest;
import org.openapis.openapi.models.operations.PaymentsPutResponse;
import org.openapis.openapi.models.shared.AcEntryDto;
import org.openapis.openapi.models.shared.AcudfValueDto;
import org.openapis.openapi.models.shared.PaymentDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PaymentsPutRequest req = new PaymentsPutRequest(                new PaymentDto() {{
                                acCode = "praesentium";
                                acEntries = new org.openapis.openapi.models.shared.AcEntryDto[]{{
                                    add(new AcEntryDto() {{
                                        accountCode = "reiciendis";
                                        analysisCategoryId = 423706L;
                                        description = "architecto";
                                        id = 857125L;
                                        value = 396.5;
                                    }}),
                                    add(new AcEntryDto() {{
                                        accountCode = "dicta";
                                        analysisCategoryId = 483706L;
                                        description = "tempora";
                                        id = 458259L;
                                        value = 4037.93;
                                    }}),
                                    add(new AcEntryDto() {{
                                        accountCode = "consectetur";
                                        analysisCategoryId = 399812L;
                                        description = "ipsa";
                                        id = 671384L;
                                        value = 1238.44;
                                    }}),
                                    add(new AcEntryDto() {{
                                        accountCode = "nostrum";
                                        analysisCategoryId = 856756L;
                                        description = "expedita";
                                        id = 399667L;
                                        value = 6391.87;
                                    }}),
                                }};
                                bankAccountCode = "suscipit";
                                bankAccountId = 399161L;
                                bookTranTypeId = 21973L;
                                customFields = new org.openapis.openapi.models.shared.AcudfValueDto[]{{
                                    add(new AcudfValueDto() {{
                                        description = "voluptas";
                                        id = 614528L;
                                        userDefinedFieldId = 661607L;
                                        value = "ab";
                                    }}),
                                    add(new AcudfValueDto() {{
                                        description = "error";
                                        id = 822407L;
                                        userDefinedFieldId = 913992L;
                                        value = "mollitia";
                                    }}),
                                }};
                                detailCollection = new String[]{{
                                    add("libero"),
                                    add("ad"),
                                    add("deleniti"),
                                }};
                                discount = 3162.2;
                                entryDate = OffsetDateTime.parse("2022-03-02T20:09:12.443Z");
                                id = 405036L;
                                note = "quo";
                                plaidTransactionId = "ex";
                                procDate = OffsetDateTime.parse("2022-09-05T19:39:47.586Z");
                                reference = "expedita";
                                supplierId = 29950L;
                                timestamp = "molestias";
                                total = 7372.54;
                                transferBankCode = "aliquid";
                                transferBankId = 109784L;
                                unallocated = 5308.6;
                            }};, 606308L);            

            PaymentsPutResponse res = sdk.payments.paymentsPut(req);

            if (res.paymentsPut200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV1PaymentsId

Returns information about a single Payments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV1PaymentsIdRequest;
import org.openapis.openapi.models.operations.GetV1PaymentsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV1PaymentsIdRequest req = new GetV1PaymentsIdRequest(85233L);            

            GetV1PaymentsIdResponse res = sdk.payments.getV1PaymentsId(req);

            if (res.paymentDto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
