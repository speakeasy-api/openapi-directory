# efiling

## Overview

Efiling endpoints provide real-time campaign finance data received from electronic filers. Efiling endpoints only contain the most recent four months of data and don't contain the processed and coded data that you can find on other endpoints.

### Available Operations

* [getEfileFilings](#getefilefilings) - Basic information about electronic files coming into the FEC, posted as they are received.
* [getEfileReportsHouseSenate](#getefilereportshousesenate) - 
Key financial data reported periodically by committees as they are reported. This feed includes summary
information from the the House F3 reports, the presidential F3p reports and the PAC and party
F3x reports.

Generally, committees file reports on a quarterly or monthly basis, but
some must also submit a report 12 days before primary elections. Therefore, during the primary
season, the period covered by this file may be different for different committees. These totals
also incorporate any changes made by committees, if any report covering the period is amended.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.

* [getEfileReportsPacParty](#getefilereportspacparty) - 
Key financial data reported periodically by committees as they are reported. This feed includes summary
information from the the House F3 reports, the presidential F3p reports and the PAC and party
F3x reports.

Generally, committees file reports on a quarterly or monthly basis, but
some must also submit a report 12 days before primary elections. Therefore, during the primary
season, the period covered by this file may be different for different committees. These totals
also incorporate any changes made by committees, if any report covering the period is amended.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.

* [getEfileReportsPresidential](#getefilereportspresidential) - 
Key financial data reported periodically by committees as they are reported. This feed includes summary
information from the the House F3 reports, the presidential F3p reports and the PAC and party
F3x reports.

Generally, committees file reports on a quarterly or monthly basis, but
some must also submit a report 12 days before primary elections. Therefore, during the primary
season, the period covered by this file may be different for different committees. These totals
also incorporate any changes made by committees, if any report covering the period is amended.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.


## getEfileFilings

Basic information about electronic files coming into the FEC, posted as they are received.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEfileFilingsRequest;
import org.openapis.openapi.models.operations.GetEfileFilingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem", "harum", "dicta") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEfileFilingsRequest req = new GetEfileFilingsRequest("architecto") {{
                committeeId = new String[]{{
                    add("labore"),
                    add("quidem"),
                    add("atque"),
                }};
                fileNumber = new Integer[]{{
                    add(724148),
                    add(948861),
                    add(388867),
                }};
                maxReceiptDate = LocalDate.parse("2022-10-10");
                minReceiptDate = LocalDate.parse("2022-02-02");
                page = 600392;
                perPage = 972083;
                qFiler = new String[]{{
                    add("repellendus"),
                    add("delectus"),
                    add("voluptates"),
                }};
                sort = "perferendis";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetEfileFilingsResponse res = sdk.efiling.getEfileFilings(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEfileReportsHouseSenate


Key financial data reported periodically by committees as they are reported. This feed includes summary
information from the the House F3 reports, the presidential F3p reports and the PAC and party
F3x reports.

Generally, committees file reports on a quarterly or monthly basis, but
some must also submit a report 12 days before primary elections. Therefore, during the primary
season, the period covered by this file may be different for different committees. These totals
also incorporate any changes made by committees, if any report covering the period is amended.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.


### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEfileReportsHouseSenateRequest;
import org.openapis.openapi.models.operations.GetEfileReportsHouseSenateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est", "quidem", "reprehenderit") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEfileReportsHouseSenateRequest req = new GetEfileReportsHouseSenateRequest("facere") {{
                committeeId = new String[]{{
                    add("praesentium"),
                    add("mollitia"),
                    add("veniam"),
                }};
                fileNumber = new Integer[]{{
                    add(790840),
                }};
                maxReceiptDate = LocalDate.parse("2022-09-16");
                minReceiptDate = LocalDate.parse("2022-02-12");
                page = 991142;
                perPage = 519952;
                qFiler = new String[]{{
                    add("quidem"),
                    add("maxime"),
                }};
                sort = "et";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetEfileReportsHouseSenateResponse res = sdk.efiling.getEfileReportsHouseSenate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEfileReportsPacParty


Key financial data reported periodically by committees as they are reported. This feed includes summary
information from the the House F3 reports, the presidential F3p reports and the PAC and party
F3x reports.

Generally, committees file reports on a quarterly or monthly basis, but
some must also submit a report 12 days before primary elections. Therefore, during the primary
season, the period covered by this file may be different for different committees. These totals
also incorporate any changes made by committees, if any report covering the period is amended.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.


### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEfileReportsPacPartyRequest;
import org.openapis.openapi.models.operations.GetEfileReportsPacPartyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse", "amet", "assumenda") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEfileReportsPacPartyRequest req = new GetEfileReportsPacPartyRequest("ea") {{
                committeeId = new String[]{{
                    add("error"),
                    add("officiis"),
                    add("officiis"),
                }};
                fileNumber = new Integer[]{{
                    add(618826),
                    add(328303),
                    add(133461),
                    add(404425),
                }};
                maxReceiptDate = LocalDate.parse("2021-05-14");
                minReceiptDate = LocalDate.parse("2021-02-19");
                page = 502721;
                perPage = 379356;
                qFiler = new String[]{{
                    add("atque"),
                    add("atque"),
                    add("sunt"),
                    add("recusandae"),
                }};
                sort = "dolorum";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetEfileReportsPacPartyResponse res = sdk.efiling.getEfileReportsPacParty(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEfileReportsPresidential


Key financial data reported periodically by committees as they are reported. This feed includes summary
information from the the House F3 reports, the presidential F3p reports and the PAC and party
F3x reports.

Generally, committees file reports on a quarterly or monthly basis, but
some must also submit a report 12 days before primary elections. Therefore, during the primary
season, the period covered by this file may be different for different committees. These totals
also incorporate any changes made by committees, if any report covering the period is amended.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.


### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEfileReportsPresidentialRequest;
import org.openapis.openapi.models.operations.GetEfileReportsPresidentialResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus", "labore", "reiciendis") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEfileReportsPresidentialRequest req = new GetEfileReportsPresidentialRequest("doloremque") {{
                committeeId = new String[]{{
                    add("dicta"),
                    add("accusantium"),
                    add("beatae"),
                    add("dolores"),
                }};
                fileNumber = new Integer[]{{
                    add(389135),
                    add(246535),
                }};
                maxReceiptDate = LocalDate.parse("2021-04-24");
                minReceiptDate = LocalDate.parse("2022-02-04");
                page = 160467;
                perPage = 580107;
                qFiler = new String[]{{
                    add("perspiciatis"),
                    add("in"),
                    add("adipisci"),
                    add("eveniet"),
                }};
                sort = "occaecati";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetEfileReportsPresidentialResponse res = sdk.efiling.getEfileReportsPresidential(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
