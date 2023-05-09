# bankFeedAccounts

## Overview

Bank feed bank accounts

### Available Operations

* [createBankFeed](#createbankfeed) - Create bank feed bank accounts
* [getBankFeeds](#getbankfeeds) - List bank feed bank accounts
* [updateBankFeed](#updatebankfeed) - Update bank feed bank account

## createBankFeed

Put BankFeed BankAccounts for a single data source connected to a single company.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBankFeedRequest;
import org.openapis.openapi.models.operations.CreateBankFeedResponse;
import org.openapis.openapi.models.shared.BankFeedAccount;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateBankFeedRequest req = new CreateBankFeedRequest("8a210b68-6988-11ed-a1eb-0242ac120002", "2e9d2c44-f675-40ba-8049-353bfcb5e171") {{
                requestBody = new org.openapis.openapi.models.shared.BankFeedAccount[]{{
                    add(new BankFeedAccount("aliquid") {{
                        accountName = "voluptates";
                        accountNumber = "quasi";
                        accountType = "repudiandae";
                        balance = 5759.47;
                        currency = "veritatis";
                        feedStartDate = "2022-10-23T00:00:00Z";
                        id = "e450ad2a-bd44-4269-802d-502a94bb4f63";
                        modifiedDate = "2022-10-23T00:00:00Z";
                        sortCode = "eligendi";
                        status = "sint";
                    }}),
                    add(new BankFeedAccount("omnis") {{
                        accountName = "provident";
                        accountNumber = "necessitatibus";
                        accountType = "sint";
                        balance = 6389.21;
                        currency = "dolor";
                        feedStartDate = "2022-10-23T00:00:00Z";
                        id = "efa77dfb-14cd-466a-a395-efb9ba88f3a6";
                        modifiedDate = "2022-10-23T00:00:00Z";
                        sortCode = "vel";
                        status = "natus";
                    }}),
                    add(new BankFeedAccount("deleniti") {{
                        accountName = "molestiae";
                        accountNumber = "perferendis";
                        accountType = "nihil";
                        balance = 3015.75;
                        currency = "distinctio";
                        feedStartDate = "2022-10-23T00:00:00Z";
                        id = "a4469b6e-2141-4959-890a-fa563e2516fe";
                        modifiedDate = "2022-10-23T00:00:00Z";
                        sortCode = "eius";
                        status = "maxime";
                    }}),
                }};
            }};            

            CreateBankFeedResponse res = sdk.bankFeedAccounts.createBankFeed(req);

            if (res.bankFeedAccounts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBankFeeds

Get BankFeed BankAccounts for a single data source connected to a single company.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBankFeedsRequest;
import org.openapis.openapi.models.operations.GetBankFeedsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBankFeedsRequest req = new GetBankFeedsRequest("8a210b68-6988-11ed-a1eb-0242ac120002", "2e9d2c44-f675-40ba-8049-353bfcb5e171");            

            GetBankFeedsResponse res = sdk.bankFeedAccounts.getBankFeeds(req);

            if (res.bankFeedAccounts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateBankFeed

Update a single BankFeed BankAccount for a single data source connected to a single company.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateBankFeedRequest;
import org.openapis.openapi.models.operations.UpdateBankFeedResponse;
import org.openapis.openapi.models.shared.BankFeedAccount;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateBankFeedRequest req = new UpdateBankFeedRequest("8a210b68-6988-11ed-a1eb-0242ac120002", "8a210b68-6988-11ed-a1eb-0242ac120002", "2e9d2c44-f675-40ba-8049-353bfcb5e171") {{
                bankFeedAccount = new BankFeedAccount("architecto") {{
                    accountName = "architecto";
                    accountNumber = "repudiandae";
                    accountType = "ullam";
                    balance = 7142.42;
                    currency = "nihil";
                    feedStartDate = "2022-10-23T00:00:00Z";
                    modifiedDate = "2022-10-23T00:00:00Z";
                    sortCode = "repellat";
                    status = "quibusdam";
                }};;
            }};            

            UpdateBankFeedResponse res = sdk.bankFeedAccounts.updateBankFeed(req);

            if (res.bankFeedAccount != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
