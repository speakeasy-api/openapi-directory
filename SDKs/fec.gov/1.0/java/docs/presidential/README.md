# presidential

## Overview

Data supporting fec.gov's presidential map. 

 For more information about the presidential map data available to download from fec.gov, please visit: https://www.fec.gov/campaign-finance-data/presidential-map-data/

### Available Operations

* [getPresidentialContributionsByCandidate](#getpresidentialcontributionsbycandidate) - 
Net receipts per candidate.

Filter with `contributor_state='US'` for national totals

* [getPresidentialContributionsBySize](#getpresidentialcontributionsbysize) - 
Contribution receipts by size per candidate.

Filter by candidate_id, election_year and/or size

* [getPresidentialContributionsByState](#getpresidentialcontributionsbystate) - 
Contribution receipts by state per candidate.

Filter by candidate_id and/or election_year

* [getPresidentialCoverageEndDate](#getpresidentialcoverageenddate) - 
Coverage end date per candidate.

Filter by candidate_id and/or election_year

* [getPresidentialFinancialSummary](#getpresidentialfinancialsummary) - 
Financial summary per candidate.

Filter by candidate_id and/or election_year


## getPresidentialContributionsByCandidate


Net receipts per candidate.

Filter with `contributor_state='US'` for national totals


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPresidentialContributionsByCandidateRequest;
import org.openapis.openapi.models.operations.GetPresidentialContributionsByCandidateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet", "autem", "fuga") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPresidentialContributionsByCandidateRequest req = new GetPresidentialContributionsByCandidateRequest("alias") {{
                contributorState = new String[]{{
                    add("aut"),
                    add("quos"),
                    add("laudantium"),
                }};
                electionYear = new Integer[]{{
                    add(83291),
                    add(60778),
                    add(51075),
                    add(904827),
                }};
                page = 965517;
                perPage = 651228;
                sort = "nulla";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetPresidentialContributionsByCandidateResponse res = sdk.presidential.getPresidentialContributionsByCandidate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPresidentialContributionsBySize


Contribution receipts by size per candidate.

Filter by candidate_id, election_year and/or size


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPresidentialContributionsBySizeRequest;
import org.openapis.openapi.models.operations.GetPresidentialContributionsBySizeResponse;
import org.openapis.openapi.models.operations.GetPresidentialContributionsBySizeSizeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia", "sed", "voluptatem") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPresidentialContributionsBySizeRequest req = new GetPresidentialContributionsBySizeRequest("alias") {{
                candidateId = new String[]{{
                    add("hic"),
                    add("voluptatem"),
                    add("incidunt"),
                    add("qui"),
                }};
                electionYear = new Integer[]{{
                    add(895912),
                }};
                page = 691508;
                perPage = 126727;
                size = new org.openapis.openapi.models.operations.GetPresidentialContributionsBySizeSizeEnum[]{{
                    add(GetPresidentialContributionsBySizeSizeEnum.TWO_HUNDRED),
                }};
                sort = "modi";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetPresidentialContributionsBySizeResponse res = sdk.presidential.getPresidentialContributionsBySize(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPresidentialContributionsByState


Contribution receipts by state per candidate.

Filter by candidate_id and/or election_year


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPresidentialContributionsByStateRequest;
import org.openapis.openapi.models.operations.GetPresidentialContributionsByStateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio", "voluptatibus", "molestias") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPresidentialContributionsByStateRequest req = new GetPresidentialContributionsByStateRequest("officia") {{
                candidateId = new String[]{{
                    add("totam"),
                    add("sequi"),
                    add("aliquid"),
                }};
                electionYear = new Integer[]{{
                    add(774501),
                    add(498388),
                }};
                page = 140957;
                perPage = 243623;
                sort = "reiciendis";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetPresidentialContributionsByStateResponse res = sdk.presidential.getPresidentialContributionsByState(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPresidentialCoverageEndDate


Coverage end date per candidate.

Filter by candidate_id and/or election_year


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPresidentialCoverageEndDateRequest;
import org.openapis.openapi.models.operations.GetPresidentialCoverageEndDateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat", "nulla", "laborum") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPresidentialCoverageEndDateRequest req = new GetPresidentialCoverageEndDateRequest("natus") {{
                candidateId = new String[]{{
                    add("doloremque"),
                    add("nisi"),
                    add("rerum"),
                    add("recusandae"),
                }};
                electionYear = new Integer[]{{
                    add(251627),
                    add(524577),
                    add(157884),
                    add(354225),
                }};
                page = 786860;
                perPage = 120277;
                sort = "voluptatibus";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetPresidentialCoverageEndDateResponse res = sdk.presidential.getPresidentialCoverageEndDate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPresidentialFinancialSummary


Financial summary per candidate.

Filter by candidate_id and/or election_year


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPresidentialFinancialSummaryRequest;
import org.openapis.openapi.models.operations.GetPresidentialFinancialSummaryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi", "quae", "officiis") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPresidentialFinancialSummaryRequest req = new GetPresidentialFinancialSummaryRequest("architecto") {{
                candidateId = new String[]{{
                    add("enim"),
                }};
                electionYear = new Integer[]{{
                    add(525951),
                    add(17060),
                    add(704271),
                    add(967055),
                }};
                page = 955551;
                perPage = 615058;
                sort = "dicta";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetPresidentialFinancialSummaryResponse res = sdk.presidential.getPresidentialFinancialSummary(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
