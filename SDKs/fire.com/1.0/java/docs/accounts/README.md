# accounts

## Overview

fire.com Accounts are the equivalent of a bank account from bank.

### Available Operations

* [addAccount](#addaccount) - Add a new account
* [getAccountById](#getaccountbyid) - Retrieve the details of a fire.com Account
* [getAccounts](#getaccounts) - List all fire.com Accounts

## addAccount

Creates a new fire.com account.

**Please note there is a charge associated with creating a new account.**


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddAccountNewAccount;
import org.openapis.openapi.models.operations.AddAccountNewAccountCurrencyEnum;
import org.openapis.openapi.models.operations.AddAccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            AddAccountNewAccount req = new AddAccountNewAccount() {{
                acceptFeesAndCharges = false;
                accountName = "Operating Account";
                currency = AddAccountNewAccountCurrencyEnum.EUR;
            }};            

            AddAccountResponse res = sdk.accounts.addAccount(req);

            if (res.account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountById

You can retrieve the details of a fire.com Account by its `ican`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountByIdRequest;
import org.openapis.openapi.models.operations.GetAccountByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetAccountByIdRequest req = new GetAccountByIdRequest(891773L);            

            GetAccountByIdResponse res = sdk.accounts.getAccountById(req);

            if (res.account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccounts

Returns all your fire.com Accounts. Ordered by Alias ascending. Can be paginated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetAccountsResponse res = sdk.accounts.getAccounts();

            if (res.accounts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
