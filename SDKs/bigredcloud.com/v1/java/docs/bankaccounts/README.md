# bankAccounts

### Available Operations

* [bankAccountsDelete](#bankaccountsdelete) - Removes an existing Bank Account.
* [bankAccountsGet](#bankaccountsget) - Returns a list of company's Bank Account. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "acCode" fields.
* [bankAccountsPost](#bankaccountspost) - Creates a new Bank Account.
* [bankAccountsProcessBatch](#bankaccountsprocessbatch) - Processes a batch of Bank Accounts.
* [bankAccountsPut](#bankaccountsput) - Updates an existing Bank Account.
* [getV1BankAccountsId](#getv1bankaccountsid) - Returns information about a single Bank Account.

## bankAccountsDelete

Removes an existing Bank Account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BankAccountsDeleteRequest;
import org.openapis.openapi.models.operations.BankAccountsDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BankAccountsDeleteRequest req = new BankAccountsDeleteRequest(548814L, "provident");            

            BankAccountsDeleteResponse res = sdk.bankAccounts.bankAccountsDelete(req);

            if (res.bankAccountsDelete200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bankAccountsGet

Returns a list of company's Bank Account. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "acCode" fields.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BankAccountsGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BankAccountsGetResponse res = sdk.bankAccounts.bankAccountsGet();

            if (res.pageResultBankAccountQueryDto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bankAccountsPost

Creates a new Bank Account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BankAccountsPostResponse;
import org.openapis.openapi.models.shared.BankAccountDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BankAccountDto req = new BankAccountDto() {{
                acCode = "distinctio";
                accountName = "quibusdam";
                accountNumber = "unde";
                address = new String[]{{
                    add("corrupti"),
                    add("illum"),
                    add("vel"),
                    add("error"),
                }};
                bankFeedSource = 645894;
                businessIdentifierCodes = "suscipit";
                categoryId = 437587L;
                creditorScheme = "magnam";
                details = "debitis";
                id = 56713L;
                internationalBankAccountNumber = "delectus";
                isDefaultBank = false;
                lastChq = "tempora";
                nominalAcCode = "suscipit";
                oBalance = 4776.65;
                sortCode = "minus";
                timestamp = "placeat";
            }};            

            BankAccountsPostResponse res = sdk.bankAccounts.bankAccountsPost(req);

            if (res.bankAccountsPost200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bankAccountsProcessBatch

Processes a batch of Bank Accounts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BankAccountsProcessBatchResponse;
import org.openapis.openapi.models.shared.BankAccountDto;
import org.openapis.openapi.models.shared.BatchItemBankAccountDto;
import org.openapis.openapi.models.shared.BatchItemBankAccountDtoOpCodeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new org.openapis.openapi.models.shared.BatchItemBankAccountDto[]{{
                add(new BatchItemBankAccountDto() {{
                    item = new BankAccountDto() {{
                        acCode = "iusto";
                        accountName = "excepturi";
                        accountNumber = "nisi";
                        address = new String[]{{
                            add("temporibus"),
                            add("ab"),
                            add("quis"),
                            add("veritatis"),
                        }};
                        bankFeedSource = 648172;
                        businessIdentifierCodes = "perferendis";
                        categoryId = 368241L;
                        creditorScheme = "repellendus";
                        details = "sapiente";
                        id = 778157L;
                        internationalBankAccountNumber = "odit";
                        isDefaultBank = false;
                        lastChq = "at";
                        nominalAcCode = "at";
                        oBalance = 9786.19;
                        sortCode = "molestiae";
                        timestamp = "quod";
                    }};
                    opCode = BatchItemBankAccountDtoOpCodeEnum.THREE;
                }}),
                add(new BatchItemBankAccountDto() {{
                    item = new BankAccountDto() {{
                        acCode = "esse";
                        accountName = "totam";
                        accountNumber = "porro";
                        address = new String[]{{
                            add("dicta"),
                            add("nam"),
                            add("officia"),
                        }};
                        bankFeedSource = 582020;
                        businessIdentifierCodes = "fugit";
                        categoryId = 537373L;
                        creditorScheme = "hic";
                        details = "optio";
                        id = 521848L;
                        internationalBankAccountNumber = "beatae";
                        isDefaultBank = false;
                        lastChq = "commodi";
                        nominalAcCode = "molestiae";
                        oBalance = 2645.55;
                        sortCode = "qui";
                        timestamp = "impedit";
                    }};
                    opCode = BatchItemBankAccountDtoOpCodeEnum.THREE;
                }}),
                add(new BatchItemBankAccountDto() {{
                    item = new BankAccountDto() {{
                        acCode = "esse";
                        accountName = "ipsum";
                        accountNumber = "excepturi";
                        address = new String[]{{
                            add("perferendis"),
                        }};
                        bankFeedSource = 324141;
                        businessIdentifierCodes = "natus";
                        categoryId = 149675L;
                        creditorScheme = "iste";
                        details = "dolor";
                        id = 616934L;
                        internationalBankAccountNumber = "laboriosam";
                        isDefaultBank = false;
                        lastChq = "hic";
                        nominalAcCode = "saepe";
                        oBalance = 6818.2;
                        sortCode = "in";
                        timestamp = "corporis";
                    }};
                    opCode = BatchItemBankAccountDtoOpCodeEnum.TWO;
                }}),
            }}            

            BankAccountsProcessBatchResponse res = sdk.bankAccounts.bankAccountsProcessBatch(req);

            if (res.bankAccountsProcessBatch200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bankAccountsPut

Updates an existing Bank Account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BankAccountsPutRequest;
import org.openapis.openapi.models.operations.BankAccountsPutResponse;
import org.openapis.openapi.models.shared.BankAccountDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BankAccountsPutRequest req = new BankAccountsPutRequest(                new BankAccountDto() {{
                                acCode = "iure";
                                accountName = "saepe";
                                accountNumber = "quidem";
                                address = new String[]{{
                                    add("ipsa"),
                                }};
                                bankFeedSource = 969810;
                                businessIdentifierCodes = "est";
                                categoryId = 653140L;
                                creditorScheme = "laborum";
                                details = "dolores";
                                id = 210382L;
                                internationalBankAccountNumber = "corporis";
                                isDefaultBank = false;
                                lastChq = "explicabo";
                                nominalAcCode = "nobis";
                                oBalance = 3154.28;
                                sortCode = "omnis";
                                timestamp = "nemo";
                            }};, 325047L);            

            BankAccountsPutResponse res = sdk.bankAccounts.bankAccountsPut(req);

            if (res.bankAccountsPut200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV1BankAccountsId

Returns information about a single Bank Account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV1BankAccountsIdRequest;
import org.openapis.openapi.models.operations.GetV1BankAccountsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV1BankAccountsIdRequest req = new GetV1BankAccountsIdRequest(570197L);            

            GetV1BankAccountsIdResponse res = sdk.bankAccounts.getV1BankAccountsId(req);

            if (res.bankAccountDto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
