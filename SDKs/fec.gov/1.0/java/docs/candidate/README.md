# candidate

## Overview

Candidate endpoints give you access to information about the people running for office. This information is organized by `candidate_id`. If you're unfamiliar with candidate IDs, using `/candidates/search/` will help you locate a particular candidate. 

 Officially, a candidate is an individual seeking nomination for election to a federal office. People become candidates when they (or agents working on their behalf) raise contributions or make expenditures that exceed $5,000. 

 The candidate endpoints primarily use data from FEC registration [Form 1](https://www.fec.gov/resources/cms-content/documents/fecfrm1.pdf) for committee information and [Form 2](https://www.fec.gov/resources/cms-content/documents/fecfrm2.pdf) for candidate information.

### Available Operations

* [getCandidateCandidateId](#getcandidatecandidateid) - 
This endpoint is useful for finding detailed information about a particular candidate. Use the
`candidate_id` to find the most recent information about that candidate.

* [getCandidateCandidateIdHistory](#getcandidatecandidateidhistory) - 
Find out a candidate's characteristics over time. This is particularly useful if the
candidate runs for the same office in different districts or you want to know more about a candidate's
previous races.

This information is organized by `candidate_id`, so it won't help you find a candidate
who ran for different offices over time; candidates get a new ID for each office.

* [getCandidateCandidateIdHistoryCycle](#getcandidatecandidateidhistorycycle) - 
Find out a candidate's characteristics over time. This is particularly useful if the
candidate runs for the same office in different districts or you want to know more about a candidate's
previous races.

This information is organized by `candidate_id`, so it won't help you find a candidate
who ran for different offices over time; candidates get a new ID for each office.

* [getCandidateCandidateIdTotals](#getcandidatecandidateidtotals) - 
This endpoint provides information about a committee's Form 3, Form 3X, or Form 3P financial reports,
which are aggregated by two-year period. We refer to two-year periods as a `cycle`.

The cycle is named after the even-numbered year and includes the year before it. To obtain
totals from 2013 and 2014, you would use 2014. In odd-numbered years, the current cycle
is the next year — for example, in 2015, the current cycle is 2016.

For presidential and Senate candidates, multiple two-year cycles exist between elections.


* [getCandidates](#getcandidates) - 
Fetch basic information about candidates, and use parameters to filter results to the
candidates you're looking for.

Each result reflects a unique FEC candidate ID. That ID is particular to the candidate for a
particular office sought. If a candidate runs for the same office multiple times, the ID
stays the same. If the same person runs for another office — for example, a House
candidate runs for a Senate office — that candidate will get a unique ID for each office.

* [getCandidatesSearch](#getcandidatessearch) - 
Fetch basic information about candidates and their principal committees.

Each result reflects a unique FEC candidate ID. That ID is assigned to the candidate for a
particular office sought. If a candidate runs for the same office over time, that ID
stays the same. If the same person runs for multiple offices — for example, a House
candidate runs for a Senate office — that candidate will get a unique ID for each office.

The candidate endpoints primarily use data from FEC registration
[Form 1](https://www.fec.gov/pdf/forms/fecfrm1.pdf) for committee information and
[Form 2](https://www.fec.gov/pdf/forms/fecfrm2.pdf) for candidate information.

* [getCandidatesTotals](#getcandidatestotals) - 
Aggregated candidate receipts and disbursements grouped by cycle.

* [getCandidatesTotalsAggregates](#getcandidatestotalsaggregates) -  Candidate total receipts and disbursements aggregated by `aggregate_by`.

* [getCandidatesTotalsByOffice](#getcandidatestotalsbyoffice) -  Aggregated candidate receipts and disbursements grouped by office by cycle.

* [getCandidatesTotalsByOfficeByParty](#getcandidatestotalsbyofficebyparty) -  Aggregated candidate receipts and disbursements grouped by office by party by cycle.

* [getCommitteeCommitteeIdCandidates](#getcommitteecommitteeidcandidates) - 
This endpoint is useful for finding detailed information about a particular candidate. Use the
`candidate_id` to find the most recent information about that candidate.

* [getCommitteeCommitteeIdCandidatesHistory](#getcommitteecommitteeidcandidateshistory) - 
Find out a candidate's characteristics over time. This is particularly useful if the
candidate runs for the same office in different districts or you want to know more about a candidate's
previous races.

This information is organized by `candidate_id`, so it won't help you find a candidate
who ran for different offices over time; candidates get a new ID for each office.

* [getCommitteeCommitteeIdCandidatesHistoryCycle](#getcommitteecommitteeidcandidateshistorycycle) - 
Find out a candidate's characteristics over time. This is particularly useful if the
candidate runs for the same office in different districts or you want to know more about a candidate's
previous races.

This information is organized by `candidate_id`, so it won't help you find a candidate
who ran for different offices over time; candidates get a new ID for each office.


## getCandidateCandidateId


This endpoint is useful for finding detailed information about a particular candidate. Use the
`candidate_id` to find the most recent information about that candidate.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCandidateCandidateIdCandidateStatusEnum;
import org.openapis.openapi.models.operations.GetCandidateCandidateIdIncumbentChallengeEnum;
import org.openapis.openapi.models.operations.GetCandidateCandidateIdOfficeEnum;
import org.openapis.openapi.models.operations.GetCandidateCandidateIdRequest;
import org.openapis.openapi.models.operations.GetCandidateCandidateIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo", "sequi", "tenetur") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCandidateCandidateIdRequest req = new GetCandidateCandidateIdRequest("ipsam", "id") {{
                candidateStatus = new org.openapis.openapi.models.operations.GetCandidateCandidateIdCandidateStatusEnum[]{{
                    add(GetCandidateCandidateIdCandidateStatusEnum.UNKNOWN),
                    add(GetCandidateCandidateIdCandidateStatusEnum.UNKNOWN),
                    add(GetCandidateCandidateIdCandidateStatusEnum.N),
                    add(GetCandidateCandidateIdCandidateStatusEnum.P),
                }};
                cycle = new Integer[]{{
                    add(96098),
                    add(971945),
                    add(976460),
                }};
                district = new String[]{{
                    add("nihil"),
                    add("praesentium"),
                    add("voluptatibus"),
                    add("ipsa"),
                }};
                electionYear = new Integer[]{{
                    add(451159),
                    add(739264),
                    add(19987),
                }};
                federalFundsFlag = false;
                hasRaisedFunds = false;
                incumbentChallenge = new org.openapis.openapi.models.operations.GetCandidateCandidateIdIncumbentChallengeEnum[]{{
                    add(GetCandidateCandidateIdIncumbentChallengeEnum.I),
                }};
                name = new String[]{{
                    add("maiores"),
                    add("dicta"),
                }};
                office = new org.openapis.openapi.models.operations.GetCandidateCandidateIdOfficeEnum[]{{
                    add(GetCandidateCandidateIdOfficeEnum.H),
                    add(GetCandidateCandidateIdOfficeEnum.H),
                }};
                page = 118727;
                party = new String[]{{
                    add("enim"),
                    add("accusamus"),
                    add("commodi"),
                }};
                perPage = 918236;
                sort = "quae";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
                state = new String[]{{
                    add("quidem"),
                }};
                year = "molestias";
            }};            

            GetCandidateCandidateIdResponse res = sdk.candidate.getCandidateCandidateId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCandidateCandidateIdHistory


Find out a candidate's characteristics over time. This is particularly useful if the
candidate runs for the same office in different districts or you want to know more about a candidate's
previous races.

This information is organized by `candidate_id`, so it won't help you find a candidate
who ran for different offices over time; candidates get a new ID for each office.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCandidateCandidateIdHistoryRequest;
import org.openapis.openapi.models.operations.GetCandidateCandidateIdHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi", "pariatur", "modi") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCandidateCandidateIdHistoryRequest req = new GetCandidateCandidateIdHistoryRequest("praesentium", "rem") {{
                electionFull = false;
                page = 916723;
                perPage = 93940;
                sort = "repudiandae";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetCandidateCandidateIdHistoryResponse res = sdk.candidate.getCandidateCandidateIdHistory(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCandidateCandidateIdHistoryCycle


Find out a candidate's characteristics over time. This is particularly useful if the
candidate runs for the same office in different districts or you want to know more about a candidate's
previous races.

This information is organized by `candidate_id`, so it won't help you find a candidate
who ran for different offices over time; candidates get a new ID for each office.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCandidateCandidateIdHistoryCycleRequest;
import org.openapis.openapi.models.operations.GetCandidateCandidateIdHistoryCycleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint", "veritatis", "itaque") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCandidateCandidateIdHistoryCycleRequest req = new GetCandidateCandidateIdHistoryCycleRequest("incidunt", "enim", 9356) {{
                electionFull = false;
                page = 667411;
                perPage = 842342;
                sort = "explicabo";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetCandidateCandidateIdHistoryCycleResponse res = sdk.candidate.getCandidateCandidateIdHistoryCycle(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCandidateCandidateIdTotals


This endpoint provides information about a committee's Form 3, Form 3X, or Form 3P financial reports,
which are aggregated by two-year period. We refer to two-year periods as a `cycle`.

The cycle is named after the even-numbered year and includes the year before it. To obtain
totals from 2013 and 2014, you would use 2014. In odd-numbered years, the current cycle
is the next year — for example, in 2015, the current cycle is 2016.

For presidential and Senate candidates, multiple two-year cycles exist between elections.



### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCandidateCandidateIdTotalsRequest;
import org.openapis.openapi.models.operations.GetCandidateCandidateIdTotalsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt", "distinctio", "quibusdam") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCandidateCandidateIdTotalsRequest req = new GetCandidateCandidateIdTotalsRequest("labore", "modi") {{
                cycle = new Integer[]{{
                    add(397821),
                }};
                electionFull = false;
                page = 586513;
                perPage = 552822;
                sort = "perferendis";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetCandidateCandidateIdTotalsResponse res = sdk.candidate.getCandidateCandidateIdTotals(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCandidates


Fetch basic information about candidates, and use parameters to filter results to the
candidates you're looking for.

Each result reflects a unique FEC candidate ID. That ID is particular to the candidate for a
particular office sought. If a candidate runs for the same office multiple times, the ID
stays the same. If the same person runs for another office — for example, a House
candidate runs for a Senate office — that candidate will get a unique ID for each office.


### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCandidatesCandidateStatusEnum;
import org.openapis.openapi.models.operations.GetCandidatesIncumbentChallengeEnum;
import org.openapis.openapi.models.operations.GetCandidatesOfficeEnum;
import org.openapis.openapi.models.operations.GetCandidatesRequest;
import org.openapis.openapi.models.operations.GetCandidatesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni", "assumenda", "ipsam") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCandidatesRequest req = new GetCandidatesRequest("alias") {{
                candidateId = new String[]{{
                    add("dolorum"),
                }};
                candidateStatus = new org.openapis.openapi.models.operations.GetCandidatesCandidateStatusEnum[]{{
                    add(GetCandidatesCandidateStatusEnum.C),
                    add(GetCandidatesCandidateStatusEnum.N),
                    add(GetCandidatesCandidateStatusEnum.N),
                }};
                cycle = new Integer[]{{
                    add(962189),
                    add(433288),
                }};
                district = new String[]{{
                    add("eligendi"),
                }};
                electionYear = new Integer[]{{
                    add(396098),
                    add(592042),
                    add(896039),
                }};
                federalFundsFlag = false;
                hasRaisedFunds = false;
                incumbentChallenge = new org.openapis.openapi.models.operations.GetCandidatesIncumbentChallengeEnum[]{{
                    add(GetCandidatesIncumbentChallengeEnum.C),
                    add(GetCandidatesIncumbentChallengeEnum.UNKNOWN),
                    add(GetCandidatesIncumbentChallengeEnum.O),
                }};
                isActiveCandidate = false;
                maxFirstFileDate = LocalDate.parse("2020-12-17");
                minFirstFileDate = LocalDate.parse("2022-07-21");
                name = new String[]{{
                    add("maiores"),
                    add("rerum"),
                    add("dicta"),
                    add("magnam"),
                }};
                office = new org.openapis.openapi.models.operations.GetCandidatesOfficeEnum[]{{
                    add(GetCandidatesOfficeEnum.P),
                    add(GetCandidatesOfficeEnum.H),
                    add(GetCandidatesOfficeEnum.H),
                    add(GetCandidatesOfficeEnum.S),
                }};
                page = 881104;
                party = new String[]{{
                    add("occaecati"),
                }};
                perPage = 313218;
                q = new String[]{{
                    add("delectus"),
                    add("quidem"),
                    add("provident"),
                    add("nam"),
                }};
                sort = "id";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
                state = new String[]{{
                    add("deleniti"),
                    add("sapiente"),
                    add("amet"),
                }};
                year = "deserunt";
            }};            

            GetCandidatesResponse res = sdk.candidate.getCandidates(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCandidatesSearch


Fetch basic information about candidates and their principal committees.

Each result reflects a unique FEC candidate ID. That ID is assigned to the candidate for a
particular office sought. If a candidate runs for the same office over time, that ID
stays the same. If the same person runs for multiple offices — for example, a House
candidate runs for a Senate office — that candidate will get a unique ID for each office.

The candidate endpoints primarily use data from FEC registration
[Form 1](https://www.fec.gov/pdf/forms/fecfrm1.pdf) for committee information and
[Form 2](https://www.fec.gov/pdf/forms/fecfrm2.pdf) for candidate information.


### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCandidatesSearchCandidateStatusEnum;
import org.openapis.openapi.models.operations.GetCandidatesSearchIncumbentChallengeEnum;
import org.openapis.openapi.models.operations.GetCandidatesSearchOfficeEnum;
import org.openapis.openapi.models.operations.GetCandidatesSearchRequest;
import org.openapis.openapi.models.operations.GetCandidatesSearchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi", "vel", "natus") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCandidatesSearchRequest req = new GetCandidatesSearchRequest("omnis") {{
                candidateId = new String[]{{
                    add("perferendis"),
                    add("nihil"),
                }};
                candidateStatus = new org.openapis.openapi.models.operations.GetCandidatesSearchCandidateStatusEnum[]{{
                    add(GetCandidatesSearchCandidateStatusEnum.N),
                    add(GetCandidatesSearchCandidateStatusEnum.N),
                }};
                cycle = new Integer[]{{
                    add(290077),
                    add(383462),
                }};
                district = new String[]{{
                    add("nobis"),
                    add("eum"),
                    add("vero"),
                }};
                electionYear = new Integer[]{{
                    add(102863),
                }};
                federalFundsFlag = false;
                hasRaisedFunds = false;
                incumbentChallenge = new org.openapis.openapi.models.operations.GetCandidatesSearchIncumbentChallengeEnum[]{{
                    add(GetCandidatesSearchIncumbentChallengeEnum.UNKNOWN),
                    add(GetCandidatesSearchIncumbentChallengeEnum.C),
                }};
                isActiveCandidate = false;
                maxFirstFileDate = LocalDate.parse("2022-05-30");
                minFirstFileDate = LocalDate.parse("2021-11-07");
                name = new String[]{{
                    add("mollitia"),
                }};
                office = new org.openapis.openapi.models.operations.GetCandidatesSearchOfficeEnum[]{{
                    add(GetCandidatesSearchOfficeEnum.S),
                    add(GetCandidatesSearchOfficeEnum.H),
                    add(GetCandidatesSearchOfficeEnum.H),
                    add(GetCandidatesSearchOfficeEnum.UNKNOWN),
                }};
                page = 896547;
                party = new String[]{{
                    add("nemo"),
                }};
                perPage = 97260;
                q = new String[]{{
                    add("doloribus"),
                    add("debitis"),
                }};
                sort = "eius";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
                state = new String[]{{
                    add("deleniti"),
                    add("facilis"),
                    add("in"),
                    add("architecto"),
                }};
                year = "architecto";
            }};            

            GetCandidatesSearchResponse res = sdk.candidate.getCandidatesSearch(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCandidatesTotals


Aggregated candidate receipts and disbursements grouped by cycle.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCandidatesTotalsOfficeEnum;
import org.openapis.openapi.models.operations.GetCandidatesTotalsRequest;
import org.openapis.openapi.models.operations.GetCandidatesTotalsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae", "ullam", "expedita") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCandidatesTotalsRequest req = new GetCandidatesTotalsRequest("nihil") {{
                candidateId = new String[]{{
                    add("quibusdam"),
                    add("sed"),
                    add("saepe"),
                    add("pariatur"),
                }};
                cycle = new Integer[]{{
                    add(162493),
                }};
                district = new String[]{{
                    add("natus"),
                    add("magni"),
                    add("sunt"),
                }};
                electionFull = false;
                electionYear = new Integer[]{{
                    add(848009),
                    add(864934),
                    add(807319),
                    add(411397),
                }};
                federalFundsFlag = false;
                hasRaisedFunds = false;
                isActiveCandidate = false;
                maxCashOnHandEndPeriod = "excepturi";
                maxDebtsOwedByCommittee = "odit";
                maxDisbursements = "ea";
                maxReceipts = "accusantium";
                minCashOnHandEndPeriod = "ab";
                minDebtsOwedByCommittee = "maiores";
                minDisbursements = "quidem";
                minReceipts = "ipsam";
                office = new org.openapis.openapi.models.operations.GetCandidatesTotalsOfficeEnum[]{{
                    add(GetCandidatesTotalsOfficeEnum.H),
                    add(GetCandidatesTotalsOfficeEnum.S),
                }};
                page = 50588;
                party = new String[]{{
                    add("nemo"),
                    add("voluptatibus"),
                    add("perferendis"),
                    add("fugiat"),
                }};
                perPage = 230742;
                q = new String[]{{
                    add("cumque"),
                }};
                sort = "corporis";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
                state = new String[]{{
                    add("libero"),
                    add("nobis"),
                    add("dolores"),
                    add("quis"),
                }};
            }};            

            GetCandidatesTotalsResponse res = sdk.candidate.getCandidatesTotals(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCandidatesTotalsAggregates

 Candidate total receipts and disbursements aggregated by `aggregate_by`.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCandidatesTotalsAggregatesAggregateByEnum;
import org.openapis.openapi.models.operations.GetCandidatesTotalsAggregatesOfficeEnum;
import org.openapis.openapi.models.operations.GetCandidatesTotalsAggregatesPartyEnum;
import org.openapis.openapi.models.operations.GetCandidatesTotalsAggregatesRequest;
import org.openapis.openapi.models.operations.GetCandidatesTotalsAggregatesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam", "dignissimos", "eaque") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCandidatesTotalsAggregatesRequest req = new GetCandidatesTotalsAggregatesRequest("quis") {{
                aggregateBy = GetCandidatesTotalsAggregatesAggregateByEnum.OFFICE;
                district = new String[]{{
                    add("perferendis"),
                }};
                electionFull = false;
                electionYear = new Integer[]{{
                    add(793698),
                }};
                isActiveCandidate = false;
                maxElectionCycle = 463451;
                minElectionCycle = 223924;
                office = GetCandidatesTotalsAggregatesOfficeEnum.P;
                page = 345352;
                party = GetCandidatesTotalsAggregatesPartyEnum.OTHER;
                perPage = 928082;
                sort = new String[]{{
                    add("facilis"),
                    add("perspiciatis"),
                    add("voluptatem"),
                }};
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
                state = new String[]{{
                    add("consequuntur"),
                    add("blanditiis"),
                    add("error"),
                    add("eaque"),
                }};
            }};            

            GetCandidatesTotalsAggregatesResponse res = sdk.candidate.getCandidatesTotalsAggregates(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCandidatesTotalsByOffice

 Aggregated candidate receipts and disbursements grouped by office by cycle.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCandidatesTotalsByOfficeOfficeEnum;
import org.openapis.openapi.models.operations.GetCandidatesTotalsByOfficeRequest;
import org.openapis.openapi.models.operations.GetCandidatesTotalsByOfficeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati", "rerum", "adipisci") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCandidatesTotalsByOfficeRequest req = new GetCandidatesTotalsByOfficeRequest("asperiores") {{
                electionFull = false;
                electionYear = new Integer[]{{
                    add(267262),
                    add(613966),
                    add(679091),
                    add(535633),
                }};
                isActiveCandidate = false;
                maxElectionCycle = 864282;
                minElectionCycle = 589910;
                office = GetCandidatesTotalsByOfficeOfficeEnum.P;
                page = 730122;
                perPage = 964490;
                sort = "quaerat";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetCandidatesTotalsByOfficeResponse res = sdk.candidate.getCandidatesTotalsByOffice(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCandidatesTotalsByOfficeByParty

 Aggregated candidate receipts and disbursements grouped by office by party by cycle.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCandidatesTotalsByOfficeByPartyOfficeEnum;
import org.openapis.openapi.models.operations.GetCandidatesTotalsByOfficeByPartyRequest;
import org.openapis.openapi.models.operations.GetCandidatesTotalsByOfficeByPartyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos", "aliquid", "dolorem") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCandidatesTotalsByOfficeByPartyRequest req = new GetCandidatesTotalsByOfficeByPartyRequest("dolorem") {{
                electionFull = false;
                electionYear = new Integer[]{{
                    add(186193),
                }};
                isActiveCandidate = false;
                office = GetCandidatesTotalsByOfficeByPartyOfficeEnum.UNKNOWN;
                page = 944373;
                perPage = 569574;
                sort = "cum";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetCandidatesTotalsByOfficeByPartyResponse res = sdk.candidate.getCandidatesTotalsByOfficeByParty(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCommitteeCommitteeIdCandidates


This endpoint is useful for finding detailed information about a particular candidate. Use the
`candidate_id` to find the most recent information about that candidate.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommitteeCommitteeIdCandidatesCandidateStatusEnum;
import org.openapis.openapi.models.operations.GetCommitteeCommitteeIdCandidatesIncumbentChallengeEnum;
import org.openapis.openapi.models.operations.GetCommitteeCommitteeIdCandidatesOfficeEnum;
import org.openapis.openapi.models.operations.GetCommitteeCommitteeIdCandidatesRequest;
import org.openapis.openapi.models.operations.GetCommitteeCommitteeIdCandidatesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate", "dignissimos", "reiciendis") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCommitteeCommitteeIdCandidatesRequest req = new GetCommitteeCommitteeIdCandidatesRequest("amet", "dolorum") {{
                candidateStatus = new org.openapis.openapi.models.operations.GetCommitteeCommitteeIdCandidatesCandidateStatusEnum[]{{
                    add(GetCommitteeCommitteeIdCandidatesCandidateStatusEnum.UNKNOWN),
                    add(GetCommitteeCommitteeIdCandidatesCandidateStatusEnum.UNKNOWN),
                }};
                cycle = new Integer[]{{
                    add(434417),
                }};
                district = new String[]{{
                    add("quaerat"),
                    add("accusamus"),
                }};
                electionYear = new Integer[]{{
                    add(976405),
                    add(377752),
                    add(617658),
                }};
                federalFundsFlag = false;
                hasRaisedFunds = false;
                incumbentChallenge = new org.openapis.openapi.models.operations.GetCommitteeCommitteeIdCandidatesIncumbentChallengeEnum[]{{
                    add(GetCommitteeCommitteeIdCandidatesIncumbentChallengeEnum.C),
                }};
                name = new String[]{{
                    add("fugiat"),
                }};
                office = new org.openapis.openapi.models.operations.GetCommitteeCommitteeIdCandidatesOfficeEnum[]{{
                    add(GetCommitteeCommitteeIdCandidatesOfficeEnum.S),
                }};
                page = 679393;
                party = new String[]{{
                    add("voluptate"),
                    add("dolorum"),
                }};
                perPage = 536579;
                sort = "omnis";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
                state = new String[]{{
                    add("distinctio"),
                    add("asperiores"),
                    add("nihil"),
                    add("ipsum"),
                }};
                year = "voluptate";
            }};            

            GetCommitteeCommitteeIdCandidatesResponse res = sdk.candidate.getCommitteeCommitteeIdCandidates(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCommitteeCommitteeIdCandidatesHistory


Find out a candidate's characteristics over time. This is particularly useful if the
candidate runs for the same office in different districts or you want to know more about a candidate's
previous races.

This information is organized by `candidate_id`, so it won't help you find a candidate
who ran for different offices over time; candidates get a new ID for each office.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommitteeCommitteeIdCandidatesHistoryRequest;
import org.openapis.openapi.models.operations.GetCommitteeCommitteeIdCandidatesHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id", "saepe", "eius") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCommitteeCommitteeIdCandidatesHistoryRequest req = new GetCommitteeCommitteeIdCandidatesHistoryRequest("aspernatur", "perferendis") {{
                electionFull = false;
                page = 229219;
                perPage = 758379;
                sort = "accusamus";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetCommitteeCommitteeIdCandidatesHistoryResponse res = sdk.candidate.getCommitteeCommitteeIdCandidatesHistory(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCommitteeCommitteeIdCandidatesHistoryCycle


Find out a candidate's characteristics over time. This is particularly useful if the
candidate runs for the same office in different districts or you want to know more about a candidate's
previous races.

This information is organized by `candidate_id`, so it won't help you find a candidate
who ran for different offices over time; candidates get a new ID for each office.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommitteeCommitteeIdCandidatesHistoryCycleRequest;
import org.openapis.openapi.models.operations.GetCommitteeCommitteeIdCandidatesHistoryCycleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad", "saepe", "suscipit") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCommitteeCommitteeIdCandidatesHistoryCycleRequest req = new GetCommitteeCommitteeIdCandidatesHistoryCycleRequest("deserunt", "provident", 324683) {{
                electionFull = false;
                page = 831049;
                perPage = 519711;
                sort = "similique";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetCommitteeCommitteeIdCandidatesHistoryCycleResponse res = sdk.candidate.getCommitteeCommitteeIdCandidatesHistoryCycle(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
