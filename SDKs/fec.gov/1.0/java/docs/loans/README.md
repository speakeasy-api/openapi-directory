# loans

## Overview

Schedule C shows all loans, endorsements and loan guarantees a committee receives or makes.

### Available Operations

* [getSchedulesScheduleC](#getschedulesschedulec) - 
Schedule C shows all loans, endorsements and loan guarantees a committee
receives or makes.

The committee continues to report the loan until it is repaid.

* [getSchedulesScheduleCSubId](#getschedulesschedulecsubid) - 
Schedule C shows all loans, endorsements and loan guarantees a committee
receives or makes.

The committee continues to report the loan until it is repaid.


## getSchedulesScheduleC


Schedule C shows all loans, endorsements and loan guarantees a committee
receives or makes.

The committee continues to report the loan until it is repaid.


### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchedulesScheduleCRequest;
import org.openapis.openapi.models.operations.GetSchedulesScheduleCResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus", "temporibus", "officia") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSchedulesScheduleCRequest req = new GetSchedulesScheduleCRequest("amet") {{
                candidateName = new String[]{{
                    add("aspernatur"),
                    add("quo"),
                    add("itaque"),
                    add("illum"),
                }};
                committeeId = new String[]{{
                    add("dignissimos"),
                    add("vero"),
                    add("qui"),
                }};
                imageNumber = new String[]{{
                    add("repellat"),
                }};
                lastIndex = 128696;
                lineNumber = "explicabo";
                loanSourceName = new String[]{{
                    add("nihil"),
                    add("non"),
                }};
                maxAmount = "ab";
                maxImageNumber = "illo";
                maxIncurredDate = LocalDate.parse("2021-01-25");
                maxPaymentToDate = 964925;
                minAmount = "non";
                minImageNumber = "distinctio";
                minIncurredDate = LocalDate.parse("2022-08-26");
                minPaymentToDate = 288300;
                page = 254382;
                perPage = 921193;
                sort = "modi";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetSchedulesScheduleCResponse res = sdk.loans.getSchedulesScheduleC(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSchedulesScheduleCSubId


Schedule C shows all loans, endorsements and loan guarantees a committee
receives or makes.

The committee continues to report the loan until it is repaid.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchedulesScheduleCSubIdRequest;
import org.openapis.openapi.models.operations.GetSchedulesScheduleCSubIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in", "explicabo", "accusamus") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSchedulesScheduleCSubIdRequest req = new GetSchedulesScheduleCSubIdRequest("rem", "aperiam") {{
                page = 141817;
                perPage = 535802;
                sort = "enim";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetSchedulesScheduleCSubIdResponse res = sdk.loans.getSchedulesScheduleCSubId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
