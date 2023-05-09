# electioneering

## Overview

An electioneering communication is any broadcast, cable or satellite communication that fulfills each of the following conditions: 

 _The communication refers to a clearly identified federal candidate._ 

 _The communication is publicly distributed by a television station, radio station, cable television system or satellite system for a fee._ 

 _The communication is distributed within 60 days prior to a general election or 30 days prior to a primary election to federal office._

### Available Operations

* [getElectioneering](#getelectioneering) - 
An electioneering communication is any broadcast, cable or satellite communication that fulfills each of the following conditions:

_The communication refers to a clearly identified federal candidate._

_The communication is publicly distributed by a television station, radio station, cable television system or satellite system for a fee._

_The communication is distributed within 60 days prior to a general election or 30 days prior to a primary election to federal office._

* [getElectioneeringAggregates](#getelectioneeringaggregates) - Electioneering communications costs aggregates
* [getElectioneeringByCandidate](#getelectioneeringbycandidate) - Electioneering costs aggregated by candidate
* [getElectioneeringTotalsByCandidate](#getelectioneeringtotalsbycandidate) - 
Total electioneering communications spent on candidates by cycle
or candidate election year


## getElectioneering


An electioneering communication is any broadcast, cable or satellite communication that fulfills each of the following conditions:

_The communication refers to a clearly identified federal candidate._

_The communication is publicly distributed by a television station, radio station, cable television system or satellite system for a fee._

_The communication is distributed within 60 days prior to a general election or 30 days prior to a primary election to federal office._


### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetElectioneeringRequest;
import org.openapis.openapi.models.operations.GetElectioneeringResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur", "fugit", "id") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetElectioneeringRequest req = new GetElectioneeringRequest("quis") {{
                candidateId = new String[]{{
                    add("error"),
                    add("illo"),
                }};
                committeeId = new String[]{{
                    add("quidem"),
                    add("eveniet"),
                }};
                description = "non";
                lastIndex = 878493;
                maxAmount = "doloremque";
                maxDate = LocalDate.parse("2022-12-10");
                minAmount = "totam";
                minDate = LocalDate.parse("2022-07-11");
                page = 907733;
                perPage = 184362;
                reportYear = new Integer[]{{
                    add(434761),
                    add(898063),
                    add(187552),
                }};
                sort = "laborum";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetElectioneeringResponse res = sdk.electioneering.getElectioneering(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getElectioneeringAggregates

Electioneering communications costs aggregates

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetElectioneeringAggregatesRequest;
import org.openapis.openapi.models.operations.GetElectioneeringAggregatesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio", "voluptatum", "rem") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetElectioneeringAggregatesRequest req = new GetElectioneeringAggregatesRequest("aliquam") {{
                candidateId = new String[]{{
                    add("repellat"),
                    add("alias"),
                }};
                committeeId = new String[]{{
                    add("perspiciatis"),
                    add("nihil"),
                }};
                cycle = new Integer[]{{
                    add(378245),
                    add(5189),
                    add(979527),
                }};
                page = 970222;
                perPage = 174658;
                sort = "id";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetElectioneeringAggregatesResponse res = sdk.electioneering.getElectioneeringAggregates(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getElectioneeringByCandidate

Electioneering costs aggregated by candidate

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetElectioneeringByCandidateOfficeEnum;
import org.openapis.openapi.models.operations.GetElectioneeringByCandidateRequest;
import org.openapis.openapi.models.operations.GetElectioneeringByCandidateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima", "dolore", "dolorum") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetElectioneeringByCandidateRequest req = new GetElectioneeringByCandidateRequest("nesciunt") {{
                candidateId = new String[]{{
                    add("recusandae"),
                }};
                cycle = new Integer[]{{
                    add(309251),
                    add(477646),
                    add(403218),
                }};
                district = "ut";
                electionFull = false;
                office = GetElectioneeringByCandidateOfficeEnum.SENATE;
                page = 238413;
                perPage = 890653;
                sort = "laudantium";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
                state = "eum";
            }};            

            GetElectioneeringByCandidateResponse res = sdk.electioneering.getElectioneeringByCandidate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getElectioneeringTotalsByCandidate


Total electioneering communications spent on candidates by cycle
or candidate election year


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetElectioneeringTotalsByCandidateRequest;
import org.openapis.openapi.models.operations.GetElectioneeringTotalsByCandidateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo", "recusandae", "esse") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetElectioneeringTotalsByCandidateRequest req = new GetElectioneeringTotalsByCandidateRequest("provident") {{
                candidateId = new String[]{{
                    add("eum"),
                    add("reiciendis"),
                }};
                cycle = new Integer[]{{
                    add(133439),
                    add(354506),
                    add(96804),
                }};
                electionFull = false;
                page = 657020;
                perPage = 343392;
                sort = "mollitia";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetElectioneeringTotalsByCandidateResponse res = sdk.electioneering.getElectioneeringTotalsByCandidate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
