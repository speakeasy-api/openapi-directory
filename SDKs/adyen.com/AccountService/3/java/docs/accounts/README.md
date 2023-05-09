# accounts

### Available Operations

* [postCloseAccount](#postcloseaccount) - Close an account
* [postCreateAccount](#postcreateaccount) - Create an account
* [postUpdateAccount](#postupdateaccount) - Update an account

## postCloseAccount

Closes an account. If an account is closed, you cannot process transactions, pay out its funds, or reopen it. If payments are made to a closed account, the payments are sent to your liable account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCloseAccountResponse;
import org.openapis.openapi.models.operations.PostCloseAccountSecurity;
import org.openapis.openapi.models.shared.CloseAccountRequest;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CloseAccountRequest req = new CloseAccountRequest("explicabo");            

            PostCloseAccountResponse res = sdk.accounts.postCloseAccount(req, new PostCloseAccountSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.closeAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateAccount

Creates an account under an account holder. An account holder can have [multiple accounts](https://docs.adyen.com/marketplaces-and-platforms/classic/account-holders-and-accounts#create-additional-accounts).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCreateAccountResponse;
import org.openapis.openapi.models.operations.PostCreateAccountSecurity;
import org.openapis.openapi.models.shared.CreateAccountRequest;
import org.openapis.openapi.models.shared.CreateAccountRequestPayoutScheduleEnum;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateAccountRequest req = new CreateAccountRequest("voluptas") {{
                payoutSchedule = CreateAccountRequestPayoutScheduleEnum.BIWEEKLY_ON1_ST_AND15_TH_AT_MIDNIGHT;
                payoutScheduleReason = "dignissimos";
            }};            

            PostCreateAccountResponse res = sdk.accounts.postCreateAccount(req, new PostCreateAccountSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.createAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateAccount

Updates the description or payout schedule of an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUpdateAccountResponse;
import org.openapis.openapi.models.operations.PostUpdateAccountSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.UpdateAccountRequest;
import org.openapis.openapi.models.shared.UpdatePayoutScheduleRequest;
import org.openapis.openapi.models.shared.UpdatePayoutScheduleRequestActionEnum;
import org.openapis.openapi.models.shared.UpdatePayoutScheduleRequestScheduleEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.UpdateAccountRequest req = new UpdateAccountRequest("dicta",                 new UpdatePayoutScheduleRequest(UpdatePayoutScheduleRequestScheduleEnum.WEEKLY_SUN_TO_THU_US) {{
                                action = UpdatePayoutScheduleRequestActionEnum.NOTHING;
                                reason = "velit";
                            }};);            

            PostUpdateAccountResponse res = sdk.accounts.postUpdateAccount(req, new PostUpdateAccountSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.updateAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
