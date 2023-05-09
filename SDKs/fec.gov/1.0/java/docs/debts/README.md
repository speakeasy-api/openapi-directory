# debts

## Overview

Schedule D, it shows debts and obligations owed to or by the committee that are required to be disclosed.

### Available Operations

* [getSchedulesScheduleD](#getschedulesscheduled) - 
Schedule D, it shows debts and obligations owed to or by the committee that are
required to be disclosed.



* [getSchedulesScheduleDSubId](#getschedulesscheduledsubid) - 
Schedule D, it shows debts and obligations owed to or by the committee that are
required to be disclosed.




## getSchedulesScheduleD


Schedule D, it shows debts and obligations owed to or by the committee that are
required to be disclosed.




### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchedulesScheduleDRequest;
import org.openapis.openapi.models.operations.GetSchedulesScheduleDResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste", "temporibus", "accusantium") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSchedulesScheduleDRequest req = new GetSchedulesScheduleDRequest("rem") {{
                candidateId = new String[]{{
                    add("laudantium"),
                }};
                committeeId = new String[]{{
                    add("mollitia"),
                    add("ab"),
                }};
                creditorDebtorName = new String[]{{
                    add("non"),
                    add("voluptatem"),
                    add("dolor"),
                }};
                imageNumber = new String[]{{
                    add("numquam"),
                    add("impedit"),
                    add("explicabo"),
                }};
                maxAmountIncurred = 3762.26;
                maxAmountOutstandingBeginning = 120.36;
                maxAmountOutstandingClose = 4910.25;
                maxDate = LocalDate.parse("2022-01-07");
                maxImageNumber = "natus";
                maxPaymentPeriod = 2446.51;
                minAmountIncurred = 9742.57;
                minAmountOutstandingBeginning = 3743.23;
                minAmountOutstandingClose = 9903.45;
                minDate = LocalDate.parse("2022-08-04");
                minImageNumber = "quaerat";
                minPaymentPeriod = 1629.54;
                natureOfDebt = "repellendus";
                page = 638762;
                perPage = 807023;
                sort = "dignissimos";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetSchedulesScheduleDResponse res = sdk.debts.getSchedulesScheduleD(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSchedulesScheduleDSubId


Schedule D, it shows debts and obligations owed to or by the committee that are
required to be disclosed.




### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchedulesScheduleDSubIdRequest;
import org.openapis.openapi.models.operations.GetSchedulesScheduleDSubIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia", "asperiores", "nemo") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSchedulesScheduleDSubIdRequest req = new GetSchedulesScheduleDSubIdRequest("quae", "quaerat") {{
                page = 783235;
                perPage = 801836;
                sort = "labore";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetSchedulesScheduleDSubIdResponse res = sdk.debts.getSchedulesScheduleDSubId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
