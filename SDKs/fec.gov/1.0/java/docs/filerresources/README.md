# filerResources

## Overview

Useful tools for those who file with the FEC. 

 Look up RAD analyst with telephone extension by committee_id.

### Available Operations

* [getRadAnalyst](#getradanalyst) - 
Use this endpoint to look up the RAD Analyst for a committee.

The mission of the Reports Analysis Division (RAD) is to ensure that
campaigns and political committees file timely and accurate reports that fully disclose
their financial activities.  RAD is responsible for reviewing statements and financial
reports filed by political committees participating in federal elections, providing
assistance and guidance to the committees to properly file their reports, and for taking
appropriate action to ensure compliance with the Federal Election Campaign Act (FECA).

* [getStateElectionOffice](#getstateelectionoffice) - 
State laws and procedures govern elections for state or local offices as well as
how candidates appear on election ballots.
Contact the appropriate state election office for more information.


## getRadAnalyst


Use this endpoint to look up the RAD Analyst for a committee.

The mission of the Reports Analysis Division (RAD) is to ensure that
campaigns and political committees file timely and accurate reports that fully disclose
their financial activities.  RAD is responsible for reviewing statements and financial
reports filed by political committees participating in federal elections, providing
assistance and guidance to the committees to properly file their reports, and for taking
appropriate action to ensure compliance with the Federal Election Campaign Act (FECA).


### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRadAnalystRequest;
import org.openapis.openapi.models.operations.GetRadAnalystResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident", "possimus", "animi") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRadAnalystRequest req = new GetRadAnalystRequest("ex") {{
                analystId = new Integer[]{{
                    add(37565),
                    add(999278),
                }};
                analystShortId = new Integer[]{{
                    add(351893),
                    add(448143),
                    add(721407),
                    add(937636),
                }};
                committeeId = new String[]{{
                    add("laborum"),
                    add("placeat"),
                    add("modi"),
                }};
                email = new String[]{{
                    add("molestias"),
                    add("officiis"),
                    add("sapiente"),
                    add("cumque"),
                }};
                maxAssignmentUpdateDate = LocalDate.parse("2022-04-21");
                minAssignmentUpdateDate = LocalDate.parse("2022-08-31");
                name = new String[]{{
                    add("fugit"),
                }};
                page = 765271;
                perPage = 62636;
                sort = "perferendis";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
                telephoneExt = new Integer[]{{
                    add(137251),
                }};
                title = new String[]{{
                    add("eius"),
                    add("rem"),
                }};
            }};            

            GetRadAnalystResponse res = sdk.filerResources.getRadAnalyst(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStateElectionOffice


State laws and procedures govern elections for state or local offices as well as
how candidates appear on election ballots.
Contact the appropriate state election office for more information.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStateElectionOfficeRequest;
import org.openapis.openapi.models.operations.GetStateElectionOfficeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at", "impedit", "eos") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetStateElectionOfficeRequest req = new GetStateElectionOfficeRequest("sapiente", "eum") {{
                page = 117320;
                perPage = 325118;
                sort = "beatae";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetStateElectionOfficeResponse res = sdk.filerResources.getStateElectionOffice(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
