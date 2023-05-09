# balanceAccounts

### Available Operations

* [getBalanceAccountsId](#getbalanceaccountsid) - Get a balance account
* [getBalanceAccountsIdPaymentInstruments](#getbalanceaccountsidpaymentinstruments) - Get all payment instruments for a balance account
* [patchBalanceAccountsId](#patchbalanceaccountsid) - Update a balance account
* [postBalanceAccounts](#postbalanceaccounts) - Create a balance account

## getBalanceAccountsId

Returns a balance account and its balances for the default currency and other currencies with a non-zero balance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBalanceAccountsIdRequest;
import org.openapis.openapi.models.operations.GetBalanceAccountsIdResponse;
import org.openapis.openapi.models.operations.GetBalanceAccountsIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBalanceAccountsIdRequest req = new GetBalanceAccountsIdRequest("deserunt");            

            GetBalanceAccountsIdResponse res = sdk.balanceAccounts.getBalanceAccountsId(req, new GetBalanceAccountsIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.balanceAccount != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBalanceAccountsIdPaymentInstruments

Returns a paginated list of the payment instruments associated with a balance account. 

To fetch multiple pages, use the query parameters.For example, to limit the page to 3 payment instruments and to skip the first 6, use `/balanceAccounts/{id}/paymentInstruments?limit=3&offset=6`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBalanceAccountsIdPaymentInstrumentsRequest;
import org.openapis.openapi.models.operations.GetBalanceAccountsIdPaymentInstrumentsResponse;
import org.openapis.openapi.models.operations.GetBalanceAccountsIdPaymentInstrumentsSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBalanceAccountsIdPaymentInstrumentsRequest req = new GetBalanceAccountsIdPaymentInstrumentsRequest("distinctio") {{
                limit = 841386;
                offset = 289406;
            }};            

            GetBalanceAccountsIdPaymentInstrumentsResponse res = sdk.balanceAccounts.getBalanceAccountsIdPaymentInstruments(req, new GetBalanceAccountsIdPaymentInstrumentsSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.paginatedPaymentInstrumentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchBalanceAccountsId

Updates a balance account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchBalanceAccountsIdRequest;
import org.openapis.openapi.models.operations.PatchBalanceAccountsIdResponse;
import org.openapis.openapi.models.operations.PatchBalanceAccountsIdSecurity;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.BalanceAccountUpdateRequestInput;
import org.openapis.openapi.models.shared.BalanceAccountUpdateRequestStatusEnum;
import org.openapis.openapi.models.shared.CronSweepSchedule;
import org.openapis.openapi.models.shared.CronSweepScheduleTypeEnum;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.SweepConfigurationInput;
import org.openapis.openapi.models.shared.SweepConfigurationStatusEnum;
import org.openapis.openapi.models.shared.SweepConfigurationTypeEnum;
import org.openapis.openapi.models.shared.SweepSchedule;
import org.openapis.openapi.models.shared.SweepScheduleTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchBalanceAccountsIdRequest req = new PatchBalanceAccountsIdRequest("modi") {{
                balanceAccountUpdateRequestInput = new BalanceAccountUpdateRequestInput() {{
                    accountHolderId = "qui";
                    defaultCurrencyCode = "aliquid";
                    description = "cupiditate";
                    reference = "quos";
                    status = BalanceAccountUpdateRequestStatusEnum.ACTIVE;
                    sweepConfigurations = new java.util.HashMap<String, org.openapis.openapi.models.shared.SweepConfigurationInput>() {{
                        put("assumenda", new SweepConfigurationInput(                new SweepSchedule() {{
                                            type = SweepScheduleTypeEnum.BALANCE;
                                        }}) {{
                            balanceAccountId = "ipsam";
                            merchantAccount = "alias";
                            schedule = new CronSweepSchedule("tempora") {{
                                cronExpression = "dolorum";
                                type = CronSweepScheduleTypeEnum.MONTHLY;
                            }};
                            status = SweepConfigurationStatusEnum.INACTIVE;
                            sweepAmount = new Amount("delectus", 433288L) {{
                                currency = "tempore";
                                value = 288476L;
                            }};
                            targetAmount = new Amount("sint", 396098L) {{
                                currency = "non";
                                value = 756107L;
                            }};
                            transferInstrumentId = "provident";
                            triggerAmount = new Amount("officia", 223081L) {{
                                currency = "necessitatibus";
                                value = 572252L;
                            }};
                            type = SweepConfigurationTypeEnum.PUSH;
                        }});
                    }};
                    timeZone = "in";
                }};;
            }};            

            PatchBalanceAccountsIdResponse res = sdk.balanceAccounts.patchBalanceAccountsId(req, new PatchBalanceAccountsIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.balanceAccount != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postBalanceAccounts

Creates a balance account that holds the funds of the associated account holder.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostBalanceAccountsResponse;
import org.openapis.openapi.models.operations.PostBalanceAccountsSecurity;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.BalanceAccountInfoInput;
import org.openapis.openapi.models.shared.CronSweepSchedule;
import org.openapis.openapi.models.shared.CronSweepScheduleTypeEnum;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.SweepConfigurationInput;
import org.openapis.openapi.models.shared.SweepConfigurationStatusEnum;
import org.openapis.openapi.models.shared.SweepConfigurationTypeEnum;
import org.openapis.openapi.models.shared.SweepSchedule;
import org.openapis.openapi.models.shared.SweepScheduleTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BalanceAccountInfoInput req = new BalanceAccountInfoInput("in") {{
                defaultCurrencyCode = "illum";
                description = "maiores";
                reference = "rerum";
                sweepConfigurations = new java.util.HashMap<String, org.openapis.openapi.models.shared.SweepConfigurationInput>() {{
                    put("magnam", new SweepConfigurationInput(                new CronSweepSchedule("molestiae") {{
                                        cronExpression = "natus";
                                        type = CronSweepScheduleTypeEnum.BALANCE;
                                    }}) {{
                        balanceAccountId = "cumque";
                        merchantAccount = "facere";
                        schedule = new CronSweepSchedule("accusamus") {{
                            cronExpression = "aliquid";
                            type = CronSweepScheduleTypeEnum.BALANCE;
                        }};
                        status = SweepConfigurationStatusEnum.ACTIVE;
                        sweepAmount = new Amount("accusamus", 965417L) {{
                            currency = "occaecati";
                            value = 313218L;
                        }};
                        targetAmount = new Amount("nam", 659669L) {{
                            currency = "quidem";
                            value = 588465L;
                        }};
                        transferInstrumentId = "blanditiis";
                        triggerAmount = new Amount("amet", 643990L) {{
                            currency = "deleniti";
                            value = 956084L;
                        }};
                        type = SweepConfigurationTypeEnum.PULL;
                    }});
                }};
                timeZone = "perferendis";
            }};            

            PostBalanceAccountsResponse res = sdk.balanceAccounts.postBalanceAccounts(req, new PostBalanceAccountsSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.balanceAccount != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
