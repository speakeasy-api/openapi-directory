# communicationCost

## Overview

Reports of communication costs by corporations and membership organizations from the FEC [F7 forms](https://www.fec.gov/pdf/forms/fecform7.pdf).

### Available Operations

* [getCommunicationCosts](#getcommunicationcosts) - 
52 U.S.C. 30118 allows "communications by a corporation to its stockholders and executive or administrative personnel and their families or by a labor organization to its members and their families on any subject," including the express advocacy of the election or defeat of any Federal candidate.  The costs of such communications must be reported to the Federal Election Commission under certain circumstances.

* [getCommunicationCostsAggregates](#getcommunicationcostsaggregates) - Communication cost aggregated by candidate ID and committee ID.
* [getCommunicationCostsByCandidate](#getcommunicationcostsbycandidate) - Communication cost aggregated by candidate ID and committee ID.
* [getCommunicationCostsTotalsByCandidate](#getcommunicationcoststotalsbycandidate) - 
Total communications costs aggregated across committees on supported or opposed candidates by cycle or candidate election year.


## getCommunicationCosts


52 U.S.C. 30118 allows "communications by a corporation to its stockholders and executive or administrative personnel and their families or by a labor organization to its members and their families on any subject," including the express advocacy of the election or defeat of any Federal candidate.  The costs of such communications must be reported to the Federal Election Commission under certain circumstances.


### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommunicationCostsRequest;
import org.openapis.openapi.models.operations.GetCommunicationCostsResponse;
import org.openapis.openapi.models.operations.GetCommunicationCostsSupportOpposeIndicatorEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur", "minima", "eaque") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCommunicationCostsRequest req = new GetCommunicationCostsRequest("a") {{
                candidateId = new String[]{{
                    add("aut"),
                    add("aut"),
                    add("deleniti"),
                }};
                committeeId = new String[]{{
                    add("aliquam"),
                    add("fugit"),
                    add("accusamus"),
                    add("inventore"),
                }};
                imageNumber = new String[]{{
                    add("et"),
                    add("dolorum"),
                }};
                lineNumber = "laborum";
                maxAmount = "placeat";
                maxDate = LocalDate.parse("2022-07-27");
                maxImageNumber = "autem";
                minAmount = "nobis";
                minDate = LocalDate.parse("2021-05-05");
                minImageNumber = "nulla";
                page = 379034;
                perPage = 727044;
                sort = "quasi";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
                supportOpposeIndicator = new org.openapis.openapi.models.operations.GetCommunicationCostsSupportOpposeIndicatorEnum[]{{
                    add(GetCommunicationCostsSupportOpposeIndicatorEnum.S),
                    add(GetCommunicationCostsSupportOpposeIndicatorEnum.S),
                }};
            }};            

            GetCommunicationCostsResponse res = sdk.communicationCost.getCommunicationCosts(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCommunicationCostsAggregates

Communication cost aggregated by candidate ID and committee ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommunicationCostsAggregatesRequest;
import org.openapis.openapi.models.operations.GetCommunicationCostsAggregatesResponse;
import org.openapis.openapi.models.operations.GetCommunicationCostsAggregatesSupportOpposeIndicatorEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident", "ipsa", "molestiae") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCommunicationCostsAggregatesRequest req = new GetCommunicationCostsAggregatesRequest("magnam") {{
                candidateId = new String[]{{
                    add("eius"),
                    add("esse"),
                }};
                committeeId = new String[]{{
                    add("rem"),
                    add("fuga"),
                }};
                cycle = new Integer[]{{
                    add(695626),
                    add(852635),
                }};
                page = 283519;
                perPage = 433439;
                sort = "suscipit";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
                supportOpposeIndicator = GetCommunicationCostsAggregatesSupportOpposeIndicatorEnum.O;
            }};            

            GetCommunicationCostsAggregatesResponse res = sdk.communicationCost.getCommunicationCostsAggregates(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCommunicationCostsByCandidate

Communication cost aggregated by candidate ID and committee ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommunicationCostsByCandidateOfficeEnum;
import org.openapis.openapi.models.operations.GetCommunicationCostsByCandidateRequest;
import org.openapis.openapi.models.operations.GetCommunicationCostsByCandidateResponse;
import org.openapis.openapi.models.operations.GetCommunicationCostsByCandidateSupportOpposeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos", "praesentium", "quisquam") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCommunicationCostsByCandidateRequest req = new GetCommunicationCostsByCandidateRequest("veritatis") {{
                candidateId = new String[]{{
                    add("id"),
                }};
                cycle = new Integer[]{{
                    add(206594),
                    add(778696),
                    add(847276),
                }};
                district = "quo";
                electionFull = false;
                office = GetCommunicationCostsByCandidateOfficeEnum.PRESIDENT;
                page = 259422;
                perPage = 178367;
                sort = "voluptas";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
                state = "ab";
                supportOppose = GetCommunicationCostsByCandidateSupportOpposeEnum.O;
            }};            

            GetCommunicationCostsByCandidateResponse res = sdk.communicationCost.getCommunicationCostsByCandidate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCommunicationCostsTotalsByCandidate


Total communications costs aggregated across committees on supported or opposed candidates by cycle or candidate election year.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommunicationCostsTotalsByCandidateRequest;
import org.openapis.openapi.models.operations.GetCommunicationCostsTotalsByCandidateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur", "tempora", "debitis") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCommunicationCostsTotalsByCandidateRequest req = new GetCommunicationCostsTotalsByCandidateRequest("ipsam") {{
                candidateId = new String[]{{
                    add("sequi"),
                }};
                cycle = new Integer[]{{
                    add(459856),
                    add(925164),
                    add(44612),
                    add(715179),
                }};
                electionFull = false;
                page = 799796;
                perPage = 490819;
                sort = "inventore";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetCommunicationCostsTotalsByCandidateResponse res = sdk.communicationCost.getCommunicationCostsTotalsByCandidate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
