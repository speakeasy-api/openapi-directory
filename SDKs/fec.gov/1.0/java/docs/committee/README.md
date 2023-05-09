# committee

## Overview

Committees are entities that spend and raise money in an election. Their characteristics and relationships with candidates can change over time. 

 You might want to use filters or search endpoints to find the committee you're looking for. Then you can use other committee endpoints to explore information about the committee that interests you. 

 Financial information is organized by `committee_id`, so finding the committee you're interested in will lead you to more granular financial information. 

 The committee endpoints include all FEC filers, even if they aren't registered as a committee. 

 Officially, committees include the committees and organizations that file with the FEC. Several different types of organizations file financial reports with the FEC: 

 *Campaign committees authorized by particular candidates to raise and spend funds in their campaigns. Non-party committees (e.g., PACs), some of which may be sponsored by corporations, unions, trade or membership groups, etc. Political party committees at the national, state, and local levels. Groups and individuals making only independent expenditures Corporations, unions, and other organizations making internal communications* 

 The committee endpoints primarily use data from FEC registration Form 1 and Form 2.

### Available Operations

* [getCandidateCandidateIdCommittees](#getcandidatecandidateidcommittees) - 
This endpoint is useful for finding detailed information about a particular committee or
filer. Use the `committee_id` to find the most recent information about the committee.

* [getCandidateCandidateIdCommitteesHistory](#getcandidatecandidateidcommitteeshistory) - 
Explore a filer's characteristics over time. This can be particularly useful if the committees change treasurers, designation, or `committee_type`.

* [getCandidateCandidateIdCommitteesHistoryCycle](#getcandidatecandidateidcommitteeshistorycycle) - 
Explore a filer's characteristics over time. This can be particularly useful if the committees change treasurers, designation, or `committee_type`.

* [getCommitteeCommitteeId](#getcommitteecommitteeid) - 
This endpoint is useful for finding detailed information about a particular committee or
filer. Use the `committee_id` to find the most recent information about the committee.

* [getCommitteeCommitteeIdHistory](#getcommitteecommitteeidhistory) - 
Explore a filer's characteristics over time. This can be particularly useful if the committees change treasurers, designation, or `committee_type`.

* [getCommitteeCommitteeIdHistoryCycle](#getcommitteecommitteeidhistorycycle) - 
Explore a filer's characteristics over time. This can be particularly useful if the committees change treasurers, designation, or `committee_type`.

* [getCommittees](#getcommittees) - 
Fetch basic information about committees and filers. Use parameters to filter for
particular characteristics.



## getCandidateCandidateIdCommittees


This endpoint is useful for finding detailed information about a particular committee or
filer. Use the `committee_id` to find the most recent information about the committee.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCandidateCandidateIdCommitteesCommitteeTypeEnum;
import org.openapis.openapi.models.operations.GetCandidateCandidateIdCommitteesDesignationEnum;
import org.openapis.openapi.models.operations.GetCandidateCandidateIdCommitteesFilingFrequencyEnum;
import org.openapis.openapi.models.operations.GetCandidateCandidateIdCommitteesOrganizationTypeEnum;
import org.openapis.openapi.models.operations.GetCandidateCandidateIdCommitteesRequest;
import org.openapis.openapi.models.operations.GetCandidateCandidateIdCommitteesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias", "at", "quaerat") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCandidateCandidateIdCommitteesRequest req = new GetCandidateCandidateIdCommitteesRequest("tempora", "vel") {{
                committeeType = new org.openapis.openapi.models.operations.GetCandidateCandidateIdCommitteesCommitteeTypeEnum[]{{
                    add(GetCandidateCandidateIdCommitteesCommitteeTypeEnum.Y),
                    add(GetCandidateCandidateIdCommitteesCommitteeTypeEnum.E),
                    add(GetCandidateCandidateIdCommitteesCommitteeTypeEnum.U),
                    add(GetCandidateCandidateIdCommitteesCommitteeTypeEnum.Z),
                }};
                cycle = new Integer[]{{
                    add(687488),
                    add(483409),
                }};
                designation = new org.openapis.openapi.models.operations.GetCandidateCandidateIdCommitteesDesignationEnum[]{{
                    add(GetCandidateCandidateIdCommitteesDesignationEnum.B),
                }};
                filingFrequency = new org.openapis.openapi.models.operations.GetCandidateCandidateIdCommitteesFilingFrequencyEnum[]{{
                    add(GetCandidateCandidateIdCommitteesFilingFrequencyEnum.M),
                    add(GetCandidateCandidateIdCommitteesFilingFrequencyEnum.W),
                    add(GetCandidateCandidateIdCommitteesFilingFrequencyEnum.MINUS_A),
                    add(GetCandidateCandidateIdCommitteesFilingFrequencyEnum.M),
                }};
                organizationType = new org.openapis.openapi.models.operations.GetCandidateCandidateIdCommitteesOrganizationTypeEnum[]{{
                    add(GetCandidateCandidateIdCommitteesOrganizationTypeEnum.C),
                    add(GetCandidateCandidateIdCommitteesOrganizationTypeEnum.W),
                }};
                page = 518201;
                perPage = 471752;
                sort = "sit";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
                year = new Integer[]{{
                    add(207470),
                    add(153694),
                    add(424685),
                }};
            }};            

            GetCandidateCandidateIdCommitteesResponse res = sdk.committee.getCandidateCandidateIdCommittees(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCandidateCandidateIdCommitteesHistory


Explore a filer's characteristics over time. This can be particularly useful if the committees change treasurers, designation, or `committee_type`.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCandidateCandidateIdCommitteesHistoryDesignationEnum;
import org.openapis.openapi.models.operations.GetCandidateCandidateIdCommitteesHistoryRequest;
import org.openapis.openapi.models.operations.GetCandidateCandidateIdCommitteesHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero", "voluptas", "deserunt") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCandidateCandidateIdCommitteesHistoryRequest req = new GetCandidateCandidateIdCommitteesHistoryRequest("quam", "ipsum") {{
                designation = new org.openapis.openapi.models.operations.GetCandidateCandidateIdCommitteesHistoryDesignationEnum[]{{
                    add(GetCandidateCandidateIdCommitteesHistoryDesignationEnum.A),
                    add(GetCandidateCandidateIdCommitteesHistoryDesignationEnum.U),
                }};
                electionFull = false;
                page = 807581;
                perPage = 863856;
                sort = "soluta";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetCandidateCandidateIdCommitteesHistoryResponse res = sdk.committee.getCandidateCandidateIdCommitteesHistory(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCandidateCandidateIdCommitteesHistoryCycle


Explore a filer's characteristics over time. This can be particularly useful if the committees change treasurers, designation, or `committee_type`.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCandidateCandidateIdCommitteesHistoryCycleDesignationEnum;
import org.openapis.openapi.models.operations.GetCandidateCandidateIdCommitteesHistoryCycleRequest;
import org.openapis.openapi.models.operations.GetCandidateCandidateIdCommitteesHistoryCycleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta", "laborum", "totam") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCandidateCandidateIdCommitteesHistoryCycleRequest req = new GetCandidateCandidateIdCommitteesHistoryCycleRequest("incidunt", "aspernatur", 174909) {{
                designation = new org.openapis.openapi.models.operations.GetCandidateCandidateIdCommitteesHistoryCycleDesignationEnum[]{{
                    add(GetCandidateCandidateIdCommitteesHistoryCycleDesignationEnum.U),
                    add(GetCandidateCandidateIdCommitteesHistoryCycleDesignationEnum.J),
                    add(GetCandidateCandidateIdCommitteesHistoryCycleDesignationEnum.P),
                }};
                electionFull = false;
                page = 565421;
                perPage = 840429;
                sort = "qui";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetCandidateCandidateIdCommitteesHistoryCycleResponse res = sdk.committee.getCandidateCandidateIdCommitteesHistoryCycle(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCommitteeCommitteeId


This endpoint is useful for finding detailed information about a particular committee or
filer. Use the `committee_id` to find the most recent information about the committee.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommitteeCommitteeIdCommitteeTypeEnum;
import org.openapis.openapi.models.operations.GetCommitteeCommitteeIdDesignationEnum;
import org.openapis.openapi.models.operations.GetCommitteeCommitteeIdFilingFrequencyEnum;
import org.openapis.openapi.models.operations.GetCommitteeCommitteeIdOrganizationTypeEnum;
import org.openapis.openapi.models.operations.GetCommitteeCommitteeIdRequest;
import org.openapis.openapi.models.operations.GetCommitteeCommitteeIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("neque", "fugit", "magni") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCommitteeCommitteeIdRequest req = new GetCommitteeCommitteeIdRequest("odio", "sunt") {{
                committeeType = new org.openapis.openapi.models.operations.GetCommitteeCommitteeIdCommitteeTypeEnum[]{{
                    add(GetCommitteeCommitteeIdCommitteeTypeEnum.V),
                    add(GetCommitteeCommitteeIdCommitteeTypeEnum.Y),
                }};
                cycle = new Integer[]{{
                    add(765326),
                }};
                designation = new org.openapis.openapi.models.operations.GetCommitteeCommitteeIdDesignationEnum[]{{
                    add(GetCommitteeCommitteeIdDesignationEnum.B),
                    add(GetCommitteeCommitteeIdDesignationEnum.UNKNOWN),
                    add(GetCommitteeCommitteeIdDesignationEnum.D),
                }};
                filingFrequency = new org.openapis.openapi.models.operations.GetCommitteeCommitteeIdFilingFrequencyEnum[]{{
                    add(GetCommitteeCommitteeIdFilingFrequencyEnum.UNKNOWN),
                }};
                organizationType = new org.openapis.openapi.models.operations.GetCommitteeCommitteeIdOrganizationTypeEnum[]{{
                    add(GetCommitteeCommitteeIdOrganizationTypeEnum.M),
                    add(GetCommitteeCommitteeIdOrganizationTypeEnum.V),
                    add(GetCommitteeCommitteeIdOrganizationTypeEnum.T),
                }};
                page = 45614;
                perPage = 961937;
                sort = "dolorem";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
                year = new Integer[]{{
                    add(286915),
                    add(240829),
                }};
            }};            

            GetCommitteeCommitteeIdResponse res = sdk.committee.getCommitteeCommitteeId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCommitteeCommitteeIdHistory


Explore a filer's characteristics over time. This can be particularly useful if the committees change treasurers, designation, or `committee_type`.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommitteeCommitteeIdHistoryDesignationEnum;
import org.openapis.openapi.models.operations.GetCommitteeCommitteeIdHistoryRequest;
import org.openapis.openapi.models.operations.GetCommitteeCommitteeIdHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum", "architecto", "quae") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCommitteeCommitteeIdHistoryRequest req = new GetCommitteeCommitteeIdHistoryRequest("aut", "quas") {{
                designation = new org.openapis.openapi.models.operations.GetCommitteeCommitteeIdHistoryDesignationEnum[]{{
                    add(GetCommitteeCommitteeIdHistoryDesignationEnum.UNKNOWN),
                    add(GetCommitteeCommitteeIdHistoryDesignationEnum.U),
                    add(GetCommitteeCommitteeIdHistoryDesignationEnum.B),
                    add(GetCommitteeCommitteeIdHistoryDesignationEnum.B),
                }};
                electionFull = false;
                page = 984330;
                perPage = 281730;
                sort = "facilis";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetCommitteeCommitteeIdHistoryResponse res = sdk.committee.getCommitteeCommitteeIdHistory(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCommitteeCommitteeIdHistoryCycle


Explore a filer's characteristics over time. This can be particularly useful if the committees change treasurers, designation, or `committee_type`.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommitteeCommitteeIdHistoryCycleDesignationEnum;
import org.openapis.openapi.models.operations.GetCommitteeCommitteeIdHistoryCycleRequest;
import org.openapis.openapi.models.operations.GetCommitteeCommitteeIdHistoryCycleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate", "qui", "quae") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCommitteeCommitteeIdHistoryCycleRequest req = new GetCommitteeCommitteeIdHistoryCycleRequest("laudantium", "odio", 580447) {{
                designation = new org.openapis.openapi.models.operations.GetCommitteeCommitteeIdHistoryCycleDesignationEnum[]{{
                    add(GetCommitteeCommitteeIdHistoryCycleDesignationEnum.B),
                    add(GetCommitteeCommitteeIdHistoryCycleDesignationEnum.D),
                    add(GetCommitteeCommitteeIdHistoryCycleDesignationEnum.U),
                    add(GetCommitteeCommitteeIdHistoryCycleDesignationEnum.J),
                }};
                electionFull = false;
                page = 218403;
                perPage = 961571;
                sort = "voluptate";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetCommitteeCommitteeIdHistoryCycleResponse res = sdk.committee.getCommitteeCommitteeIdHistoryCycle(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCommittees


Fetch basic information about committees and filers. Use parameters to filter for
particular characteristics.



### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommitteesCommitteeTypeEnum;
import org.openapis.openapi.models.operations.GetCommitteesDesignationEnum;
import org.openapis.openapi.models.operations.GetCommitteesFilingFrequencyEnum;
import org.openapis.openapi.models.operations.GetCommitteesOrganizationTypeEnum;
import org.openapis.openapi.models.operations.GetCommitteesRequest;
import org.openapis.openapi.models.operations.GetCommitteesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur", "vero", "tenetur") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCommitteesRequest req = new GetCommitteesRequest("dignissimos") {{
                candidateId = new String[]{{
                    add("distinctio"),
                    add("quod"),
                    add("odio"),
                    add("similique"),
                }};
                committeeId = new String[]{{
                    add("vero"),
                    add("ducimus"),
                    add("dolore"),
                }};
                committeeType = new org.openapis.openapi.models.operations.GetCommitteesCommitteeTypeEnum[]{{
                    add(GetCommitteesCommitteeTypeEnum.X),
                    add(GetCommitteesCommitteeTypeEnum.E),
                    add(GetCommitteesCommitteeTypeEnum.S),
                    add(GetCommitteesCommitteeTypeEnum.W),
                }};
                cycle = new Integer[]{{
                    add(974259),
                }};
                designation = new org.openapis.openapi.models.operations.GetCommitteesDesignationEnum[]{{
                    add(GetCommitteesDesignationEnum.D),
                    add(GetCommitteesDesignationEnum.A),
                }};
                filingFrequency = new org.openapis.openapi.models.operations.GetCommitteesFilingFrequencyEnum[]{{
                    add(GetCommitteesFilingFrequencyEnum.MINUS_T),
                    add(GetCommitteesFilingFrequencyEnum.MINUS_T),
                    add(GetCommitteesFilingFrequencyEnum.Q),
                    add(GetCommitteesFilingFrequencyEnum.W),
                }};
                maxFirstF1Date = LocalDate.parse("2022-12-30");
                maxFirstFileDate = LocalDate.parse("2022-06-18");
                maxLastF1Date = LocalDate.parse("2022-08-04");
                minFirstF1Date = LocalDate.parse("2022-07-28");
                minFirstFileDate = LocalDate.parse("2022-02-08");
                minLastF1Date = LocalDate.parse("2022-08-07");
                organizationType = new org.openapis.openapi.models.operations.GetCommitteesOrganizationTypeEnum[]{{
                    add(GetCommitteesOrganizationTypeEnum.UNKNOWN),
                    add(GetCommitteesOrganizationTypeEnum.C),
                    add(GetCommitteesOrganizationTypeEnum.W),
                }};
                page = 97844;
                party = new String[]{{
                    add("nulla"),
                    add("excepturi"),
                }};
                perPage = 972920;
                q = new String[]{{
                    add("sapiente"),
                    add("quisquam"),
                }};
                sort = "saepe";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
                sponsorCandidateId = new String[]{{
                    add("impedit"),
                    add("corporis"),
                }};
                state = new String[]{{
                    add("aliquid"),
                    add("inventore"),
                }};
                treasurerName = new String[]{{
                    add("ea"),
                    add("quo"),
                }};
                year = new Integer[]{{
                    add(926213),
                }};
            }};            

            GetCommitteesResponse res = sdk.committee.getCommittees(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
