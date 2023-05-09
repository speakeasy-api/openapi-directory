# financial

## Overview

Fetch key information about a committee's Form 3, Form 3X, Form 13, or Form 3P financial reports. 

 Most committees are required to summarize their financial activity in each filing; those summaries are included in these files. Generally, committees file reports on a quarterly or monthly basis, but some must also submit a report 12 days before primary elections. Therefore, during the primary season, the period covered by this file may be different for different committees. These totals also incorporate any changes made by committees, if any report covering the period is amended. 

 Information is made available on the API as soon as it's processed. Keep in mind, complex paper filings take longer to process. 

 The financial endpoints use data from FEC [form 5](https://www.fec.gov/pdf/forms/fecfrm5.pdf), for independent expenditors; or the summary and detailed summary pages of the FEC [Form 3](https://www.fec.gov/pdf/forms/fecfrm3.pdf), for House and Senate committees; [Form 3X](https://www.fec.gov/pdf/forms/fecfrm3x.pdf), for PACs and parties; [Form 13](https://www.fec.gov/pdf/forms/fecfrm13.pdf) for inaugural committees; and [Form 3P](https://www.fec.gov/pdf/forms/fecfrm3p.pdf), for presidential committees.

### Available Operations

* [getCommitteeCommitteeIdReports](#getcommitteecommitteeidreports) - 
Each report represents the summary information from Form 3, Form 3X and Form 3P.
These reports have key statistics that illuminate the financial status of a given committee.
Things like cash on hand, debts owed by committee, total receipts, and total disbursements
are especially helpful for understanding a committee's financial dealings.

By default, this endpoint includes both amended and final versions of each report. To restrict
to only the final versions of each report, use `is_amended=false`; to retrieve only reports that
have been amended, use `is_amended=true`.

Several different reporting structures exist, depending on the type of organization that
submits financial information. To see an example of these reporting requirements,
look at the summary and detailed summary pages of Form 3, Form 3X, and Form 3P.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.

* [getCommitteeCommitteeIdTotals](#getcommitteecommitteeidtotals) - 
This endpoint provides information about a committee's Form 3, Form 3X, or Form 3P financial reports,
which are aggregated by two-year period. We refer to two-year periods as a `cycle`.

The cycle is named after the even-numbered year and includes the year before it. To obtain
totals from 2013 and 2014, you would use 2014. In odd-numbered years, the current cycle
is the next year — for example, in 2015, the current cycle is 2016.

For presidential and Senate candidates, multiple two-year cycles exist between elections.


* [getElections](#getelections) - 
Look at the top-level financial information for all candidates running for the same
office.

Choose a 2-year cycle, and `house`, `senate` or `presidential`.

If you are looking for a Senate seat, you will need to select the state using a two-letter
abbreviation.

House races require state and a two-digit district number.

Since this endpoint reflects financial information, it will only have candidates once they file
financial reporting forms. Query the `/candidates` endpoint to retrieve an-up-to-date list of all the
candidates that filed to run for a particular seat.

* [getElectionsSearch](#getelectionssearch) - 
List elections by cycle, office, state, and district.

* [getElectionsSummary](#getelectionssummary) - 
List elections by cycle, office, state, and district.

* [getReportsEntityType](#getreportsentitytype) - 
Each report represents the summary information from Form 3, Form 3X and Form 3P.
These reports have key statistics that illuminate the financial status of a given committee.
Things like cash on hand, debts owed by committee, total receipts, and total disbursements
are especially helpful for understanding a committee's financial dealings.

By default, this endpoint includes both amended and final versions of each report. To restrict
to only the final versions of each report, use `is_amended=false`; to retrieve only reports that
have been amended, use `is_amended=true`.

Several different reporting structures exist, depending on the type of organization that
submits financial information. To see an example of these reporting requirements,
look at the summary and detailed summary pages of Form 3, Form 3X, and Form 3P.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.

* [getTotalsByEntity](#gettotalsbyentity) - 
Provides cumulative receipt totals by entity type, over a two year cycle. Totals are adjusted to avoid double counting.

This is [the sql](https://github.com/fecgov/openFEC/blob/develop/data/migrations/V41__large_aggregates.sql) that creates these calculations.

* [getTotalsInauguralCommitteesByContributor](#gettotalsinauguralcommitteesbycontributor) - 
This endpoint provides information about an inaugural committee's Form 13 report of donations accepted.
The data is aggregated by the contributor and the two-year period. We refer to two-year periods as a `cycle`.


* [getTotalsEntityType](#gettotalsentitytype) - 
This endpoint provides information about a committee's Form 3, Form 3X, or Form 3P financial reports,
which are aggregated by two-year period. We refer to two-year periods as a `cycle`.

The cycle is named after the even-numbered year and includes the year before it. To obtain
totals from 2013 and 2014, you would use 2014. In odd-numbered years, the current cycle
is the next year — for example, in 2015, the current cycle is 2016.

For presidential and Senate candidates, multiple two-year cycles exist between elections.



## getCommitteeCommitteeIdReports


Each report represents the summary information from Form 3, Form 3X and Form 3P.
These reports have key statistics that illuminate the financial status of a given committee.
Things like cash on hand, debts owed by committee, total receipts, and total disbursements
are especially helpful for understanding a committee's financial dealings.

By default, this endpoint includes both amended and final versions of each report. To restrict
to only the final versions of each report, use `is_amended=false`; to retrieve only reports that
have been amended, use `is_amended=true`.

Several different reporting structures exist, depending on the type of organization that
submits financial information. To see an example of these reporting requirements,
look at the summary and detailed summary pages of Form 3, Form 3X, and Form 3P.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommitteeCommitteeIdReportsRequest;
import org.openapis.openapi.models.operations.GetCommitteeCommitteeIdReportsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque", "ipsum", "impedit") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCommitteeCommitteeIdReportsRequest req = new GetCommitteeCommitteeIdReportsRequest("magni", "soluta") {{
                beginningImageNumber = new String[]{{
                    add("nam"),
                    add("dolore"),
                    add("iusto"),
                    add("voluptate"),
                }};
                candidateId = "sequi";
                cycle = new Integer[]{{
                    add(205566),
                    add(778172),
                }};
                isAmended = false;
                maxCashOnHandEndPeriodAmount = "deleniti";
                maxDebtsOwedExpenditures = "quibusdam";
                maxDisbursementsAmount = "iure";
                maxIndependentExpenditures = "odit";
                maxPartyCoordinatedExpenditures = "voluptatibus";
                maxReceiptsAmount = "vel";
                maxTotalContributions = "magnam";
                minCashOnHandEndPeriodAmount = "quibusdam";
                minDebtsOwedAmount = "inventore";
                minDisbursementsAmount = "facere";
                minIndependentExpenditures = "libero";
                minPartyCoordinatedExpenditures = "architecto";
                minReceiptsAmount = "voluptatibus";
                minTotalContributions = "quia";
                page = 782090;
                perPage = 304198;
                reportType = new String[]{{
                    add("illo"),
                }};
                sort = new String[]{{
                    add("vel"),
                }};
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
                type = new String[]{{
                    add("beatae"),
                    add("vero"),
                }};
                year = new Integer[]{{
                    add(431994),
                    add(246557),
                    add(284086),
                }};
            }};            

            GetCommitteeCommitteeIdReportsResponse res = sdk.financial.getCommitteeCommitteeIdReports(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCommitteeCommitteeIdTotals


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
import org.openapis.openapi.models.operations.GetCommitteeCommitteeIdTotalsRequest;
import org.openapis.openapi.models.operations.GetCommitteeCommitteeIdTotalsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perspiciatis", "earum", "dicta") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCommitteeCommitteeIdTotalsRequest req = new GetCommitteeCommitteeIdTotalsRequest("impedit", "voluptatibus") {{
                cycle = new Integer[]{{
                    add(932562),
                    add(2677),
                    add(391797),
                }};
                page = 931505;
                perPage = 242178;
                sort = "laborum";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetCommitteeCommitteeIdTotalsResponse res = sdk.financial.getCommitteeCommitteeIdTotals(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getElections


Look at the top-level financial information for all candidates running for the same
office.

Choose a 2-year cycle, and `house`, `senate` or `presidential`.

If you are looking for a Senate seat, you will need to select the state using a two-letter
abbreviation.

House races require state and a two-digit district number.

Since this endpoint reflects financial information, it will only have candidates once they file
financial reporting forms. Query the `/candidates` endpoint to retrieve an-up-to-date list of all the
candidates that filed to run for a particular seat.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetElectionsOfficeEnum;
import org.openapis.openapi.models.operations.GetElectionsRequest;
import org.openapis.openapi.models.operations.GetElectionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non", "dolor", "iusto") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetElectionsRequest req = new GetElectionsRequest("sit", 39992, GetElectionsOfficeEnum.HOUSE) {{
                district = "officia";
                electionFull = false;
                page = 927403;
                perPage = 408303;
                sort = "quidem";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
                state = "voluptas";
            }};            

            GetElectionsResponse res = sdk.financial.getElections(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getElectionsSearch


List elections by cycle, office, state, and district.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetElectionsSearchOfficeEnum;
import org.openapis.openapi.models.operations.GetElectionsSearchRequest;
import org.openapis.openapi.models.operations.GetElectionsSearchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis", "placeat", "perspiciatis") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetElectionsSearchRequest req = new GetElectionsSearchRequest("expedita") {{
                cycle = new Integer[]{{
                    add(954334),
                    add(455579),
                    add(351936),
                }};
                district = new String[]{{
                    add("necessitatibus"),
                    add("animi"),
                    add("impedit"),
                }};
                office = new org.openapis.openapi.models.operations.GetElectionsSearchOfficeEnum[]{{
                    add(GetElectionsSearchOfficeEnum.SENATE),
                    add(GetElectionsSearchOfficeEnum.PRESIDENT),
                }};
                page = 621666;
                perPage = 456885;
                sort = new String[]{{
                    add("veritatis"),
                    add("vero"),
                }};
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
                state = new String[]{{
                    add("vitae"),
                }};
                zip = new Integer[]{{
                    add(212434),
                }};
            }};            

            GetElectionsSearchResponse res = sdk.financial.getElectionsSearch(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getElectionsSummary


List elections by cycle, office, state, and district.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetElectionsSummaryOfficeEnum;
import org.openapis.openapi.models.operations.GetElectionsSummaryRequest;
import org.openapis.openapi.models.operations.GetElectionsSummaryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad", "qui", "iste") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetElectionsSummaryRequest req = new GetElectionsSummaryRequest("ex", 367626, GetElectionsSummaryOfficeEnum.PRESIDENT) {{
                district = "libero";
                electionFull = false;
                state = "rem";
            }};            

            GetElectionsSummaryResponse res = sdk.financial.getElectionsSummary(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReportsEntityType


Each report represents the summary information from Form 3, Form 3X and Form 3P.
These reports have key statistics that illuminate the financial status of a given committee.
Things like cash on hand, debts owed by committee, total receipts, and total disbursements
are especially helpful for understanding a committee's financial dealings.

By default, this endpoint includes both amended and final versions of each report. To restrict
to only the final versions of each report, use `is_amended=false`; to retrieve only reports that
have been amended, use `is_amended=true`.

Several different reporting structures exist, depending on the type of organization that
submits financial information. To see an example of these reporting requirements,
look at the summary and detailed summary pages of Form 3, Form 3X, and Form 3P.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.


### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReportsEntityTypeAmendmentIndicatorEnum;
import org.openapis.openapi.models.operations.GetReportsEntityTypeEntityTypeEnum;
import org.openapis.openapi.models.operations.GetReportsEntityTypeFilerTypeEnum;
import org.openapis.openapi.models.operations.GetReportsEntityTypeRequest;
import org.openapis.openapi.models.operations.GetReportsEntityTypeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum", "odio", "fugit") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetReportsEntityTypeRequest req = new GetReportsEntityTypeRequest("alias", GetReportsEntityTypeEntityTypeEnum.PRESIDENTIAL) {{
                amendmentIndicator = new org.openapis.openapi.models.operations.GetReportsEntityTypeAmendmentIndicatorEnum[]{{
                    add(GetReportsEntityTypeAmendmentIndicatorEnum.UNKNOWN),
                    add(GetReportsEntityTypeAmendmentIndicatorEnum.UNKNOWN),
                }};
                beginningImageNumber = new String[]{{
                    add("neque"),
                    add("exercitationem"),
                }};
                candidateId = "itaque";
                committeeId = new String[]{{
                    add("ipsum"),
                }};
                committeeType = new String[]{{
                    add("nulla"),
                    add("distinctio"),
                    add("maxime"),
                }};
                cycle = new Integer[]{{
                    add(159146),
                }};
                filerType = GetReportsEntityTypeFilerTypeEnum.E_FILE;
                isAmended = false;
                maxCashOnHandEndPeriodAmount = "omnis";
                maxDebtsOwedExpenditures = "libero";
                maxDisbursementsAmount = "dicta";
                maxIndependentExpenditures = "id";
                maxPartyCoordinatedExpenditures = "libero";
                maxReceiptDate = LocalDate.parse("2021-02-01");
                maxReceiptsAmount = "quos";
                maxTotalContributions = "placeat";
                minCashOnHandEndPeriodAmount = "sit";
                minDebtsOwedAmount = "iusto";
                minDisbursementsAmount = "ipsa";
                minIndependentExpenditures = "voluptates";
                minPartyCoordinatedExpenditures = "inventore";
                minReceiptDate = LocalDate.parse("2022-06-26");
                minReceiptsAmount = "dolore";
                minTotalContributions = "eligendi";
                mostRecent = false;
                page = 715053;
                perPage = 32273;
                qFiler = new String[]{{
                    add("esse"),
                    add("dolores"),
                }};
                qSpender = new String[]{{
                    add("beatae"),
                    add("est"),
                    add("facere"),
                    add("corrupti"),
                }};
                reportType = new String[]{{
                    add("provident"),
                    add("accusamus"),
                }};
                sort = new String[]{{
                    add("tempore"),
                    add("sint"),
                    add("ea"),
                    add("autem"),
                }};
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
                year = new Integer[]{{
                    add(702952),
                    add(515638),
                }};
            }};            

            GetReportsEntityTypeResponse res = sdk.financial.getReportsEntityType(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTotalsByEntity


Provides cumulative receipt totals by entity type, over a two year cycle. Totals are adjusted to avoid double counting.

This is [the sql](https://github.com/fecgov/openFEC/blob/develop/data/migrations/V41__large_aggregates.sql) that creates these calculations.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTotalsByEntityRequest;
import org.openapis.openapi.models.operations.GetTotalsByEntityResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis", "officiis", "voluptatibus") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTotalsByEntityRequest req = new GetTotalsByEntityRequest("cum", 872303) {{
                page = 5152;
                perPage = 156653;
                sort = "quidem";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetTotalsByEntityResponse res = sdk.financial.getTotalsByEntity(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTotalsInauguralCommitteesByContributor


This endpoint provides information about an inaugural committee's Form 13 report of donations accepted.
The data is aggregated by the contributor and the two-year period. We refer to two-year periods as a `cycle`.



### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTotalsInauguralCommitteesByContributorRequest;
import org.openapis.openapi.models.operations.GetTotalsInauguralCommitteesByContributorResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga", "repudiandae", "accusantium") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTotalsInauguralCommitteesByContributorRequest req = new GetTotalsInauguralCommitteesByContributorRequest("expedita") {{
                committeeId = new String[]{{
                    add("eos"),
                    add("quibusdam"),
                    add("odio"),
                    add("praesentium"),
                }};
                contributorName = new String[]{{
                    add("explicabo"),
                }};
                cycle = new Integer[]{{
                    add(621473),
                    add(937117),
                }};
                page = 239337;
                perPage = 923306;
                sort = new String[]{{
                    add("ut"),
                    add("quidem"),
                    add("quis"),
                }};
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetTotalsInauguralCommitteesByContributorResponse res = sdk.financial.getTotalsInauguralCommitteesByContributor(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTotalsEntityType


This endpoint provides information about a committee's Form 3, Form 3X, or Form 3P financial reports,
which are aggregated by two-year period. We refer to two-year periods as a `cycle`.

The cycle is named after the even-numbered year and includes the year before it. To obtain
totals from 2013 and 2014, you would use 2014. In odd-numbered years, the current cycle
is the next year — for example, in 2015, the current cycle is 2016.

For presidential and Senate candidates, multiple two-year cycles exist between elections.



### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTotalsEntityTypeEntityTypeEnum;
import org.openapis.openapi.models.operations.GetTotalsEntityTypeFilingFrequencyEnum;
import org.openapis.openapi.models.operations.GetTotalsEntityTypeOrganizationTypeEnum;
import org.openapis.openapi.models.operations.GetTotalsEntityTypeRequest;
import org.openapis.openapi.models.operations.GetTotalsEntityTypeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae", "unde", "molestiae") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTotalsEntityTypeRequest req = new GetTotalsEntityTypeRequest("delectus", GetTotalsEntityTypeEntityTypeEnum.PAC_PARTY) {{
                committeeDesignation = new String[]{{
                    add("numquam"),
                }};
                committeeId = new String[]{{
                    add("nesciunt"),
                    add("at"),
                }};
                committeeState = new String[]{{
                    add("dignissimos"),
                    add("optio"),
                    add("necessitatibus"),
                }};
                committeeType = new String[]{{
                    add("qui"),
                    add("expedita"),
                }};
                cycle = new Integer[]{{
                    add(587375),
                    add(326269),
                    add(809594),
                }};
                filingFrequency = new org.openapis.openapi.models.operations.GetTotalsEntityTypeFilingFrequencyEnum[]{{
                    add(GetTotalsEntityTypeFilingFrequencyEnum.A),
                    add(GetTotalsEntityTypeFilingFrequencyEnum.Q),
                }};
                maxDisbursements = "minus";
                maxFirstF1Date = LocalDate.parse("2022-09-25");
                maxLastCashOnHandEndPeriod = "corporis";
                maxLastDebtsOwedByCommittee = "magnam";
                maxReceipts = "voluptates";
                minDisbursements = "maiores";
                minFirstF1Date = LocalDate.parse("2022-11-28");
                minLastCashOnHandEndPeriod = "libero";
                minLastDebtsOwedByCommittee = "ratione";
                minReceipts = "labore";
                organizationType = new org.openapis.openapi.models.operations.GetTotalsEntityTypeOrganizationTypeEnum[]{{
                    add(GetTotalsEntityTypeOrganizationTypeEnum.T),
                    add(GetTotalsEntityTypeOrganizationTypeEnum.L),
                    add(GetTotalsEntityTypeOrganizationTypeEnum.V),
                }};
                page = 242099;
                perPage = 795591;
                sort = "fuga";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
                sponsorCandidateId = new String[]{{
                    add("est"),
                    add("impedit"),
                }};
                treasurerName = new String[]{{
                    add("tempore"),
                    add("vero"),
                    add("odit"),
                    add("repellat"),
                }};
            }};            

            GetTotalsEntityTypeResponse res = sdk.financial.getTotalsEntityType(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
