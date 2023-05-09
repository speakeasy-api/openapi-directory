# partyCoordinatedExpenditures

## Overview

Schedule F, it shows all special expenditures a national or state party committee makes in connection with the general election campaigns of federal candidates.

### Available Operations

* [getSchedulesScheduleF](#getschedulesschedulef) - 
Schedule F, it shows all special expenditures a national or state party committee
makes in connection with the general election campaigns of federal candidates.

These coordinated party expenditures do not count against the contribution limits but are subject to other limits,
these limits are detailed in Chapter 7 of the FEC Campaign Guide for Political Party Committees.

* [getSchedulesScheduleFSubId](#getschedulesschedulefsubid) - 
Schedule F, it shows all special expenditures a national or state party committee
makes in connection with the general election campaigns of federal candidates.

These coordinated party expenditures do not count against the contribution limits but are subject to other limits,
these limits are detailed in Chapter 7 of the FEC Campaign Guide for Political Party Committees.


## getSchedulesScheduleF


Schedule F, it shows all special expenditures a national or state party committee
makes in connection with the general election campaigns of federal candidates.

These coordinated party expenditures do not count against the contribution limits but are subject to other limits,
these limits are detailed in Chapter 7 of the FEC Campaign Guide for Political Party Committees.


### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchedulesScheduleFRequest;
import org.openapis.openapi.models.operations.GetSchedulesScheduleFResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate", "similique", "minima") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSchedulesScheduleFRequest req = new GetSchedulesScheduleFRequest("libero") {{
                candidateId = new String[]{{
                    add("sit"),
                    add("modi"),
                }};
                committeeId = new String[]{{
                    add("nesciunt"),
                    add("mollitia"),
                }};
                cycle = new Integer[]{{
                    add(853246),
                    add(345138),
                }};
                imageNumber = new String[]{{
                    add("veniam"),
                    add("reiciendis"),
                }};
                lineNumber = "ab";
                maxAmount = "modi";
                maxDate = LocalDate.parse("2022-12-27");
                maxImageNumber = "eveniet";
                minAmount = "odio";
                minDate = LocalDate.parse("2022-09-29");
                minImageNumber = "dolorum";
                page = 823718;
                payeeName = new String[]{{
                    add("consectetur"),
                    add("nesciunt"),
                }};
                perPage = 310629;
                sort = "itaque";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetSchedulesScheduleFResponse res = sdk.partyCoordinatedExpenditures.getSchedulesScheduleF(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSchedulesScheduleFSubId


Schedule F, it shows all special expenditures a national or state party committee
makes in connection with the general election campaigns of federal candidates.

These coordinated party expenditures do not count against the contribution limits but are subject to other limits,
these limits are detailed in Chapter 7 of the FEC Campaign Guide for Political Party Committees.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchedulesScheduleFSubIdRequest;
import org.openapis.openapi.models.operations.GetSchedulesScheduleFSubIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus", "sunt", "distinctio") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSchedulesScheduleFSubIdRequest req = new GetSchedulesScheduleFSubIdRequest("iusto", "quas") {{
                page = 91728;
                perPage = 704948;
            }};            

            GetSchedulesScheduleFSubIdResponse res = sdk.partyCoordinatedExpenditures.getSchedulesScheduleFSubId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
