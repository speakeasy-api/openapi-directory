# accounts

### Available Operations

* [createAccount](#createaccount) - Create a new account
* [getAccount](#getaccount) - Get a specific account
* [getAccounts](#getaccounts) - Overview of accounts

## createAccount

The creation of an account requires some background processing. There is no instant feedback of the creation status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAccountResponse;
import org.openapis.openapi.models.shared.CreateAccount;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateAccount req = new CreateAccount() {{
                ftpPassword = "quibusdam";
                identifier = "unde";
                servicepackId = 857946;
            }};            

            CreateAccountResponse res = sdk.accounts.createAccount(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccount

Get a specific account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountRequest;
import org.openapis.openapi.models.operations.GetAccountResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountRequest req = new GetAccountRequest("corrupti", 847252);            

            GetAccountResponse res = sdk.accounts.getAccount(req);

            if (res.accountDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccounts

Overview of accounts

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountsRequest;
import org.openapis.openapi.models.operations.GetAccountsResponse;
import org.openapis.openapi.models.shared.AssetTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountsRequest req = new GetAccountsRequest() {{
                assetType = AssetTypeEnum.MYSQL;
                identifier = "error";
                skip = 645894;
                take = 384382;
            }};            

            GetAccountsResponse res = sdk.accounts.getAccounts(req);

            if (res.accounts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
