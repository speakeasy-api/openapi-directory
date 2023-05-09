# independentExpenditures

## Overview

Schedule E covers the line item expenditures for independent expenditures. For example, if a super PAC bought ads on TV to oppose a federal candidate, each ad purchase would be recorded here with the expenditure amount, name and id of the candidate, and whether the ad supported or opposed the candidate. 

 An independent expenditure is an expenditure for a communication "expressly advocating the election or defeat of a clearly identified candidate that is not made in cooperation, consultation, or concert with, or at the request or suggestion of, a candidate, a candidate’s authorized committee, or their agents, or a political party or its agents." 

 Aggregates by candidate do not include 24 and 48 hour reports. This ensures we don't double count expenditures and the totals are more accurate. You can still find the information from 24 and 48 hour reports in `/schedule/schedule_e/`.

### Available Operations

* [getSchedulesScheduleE](#getschedulesschedulee) - 
Schedule E covers the line item expenditures for independent expenditures. For example, if a super PAC
bought ads on TV to oppose a federal candidate, each ad purchase would be recorded here with
the expenditure amount, name and id of the candidate, and whether the ad supported or opposed the candidate.

An independent expenditure is an expenditure for a communication "expressly advocating the election or
defeat of a clearly identified candidate that is not made in cooperation, consultation, or concert with,
or at the request or suggestion of, a candidate, a candidate’s authorized committee, or their agents, or
a political party or its agents."

Aggregates by candidate do not include 24 and 48 hour reports. This ensures we don't double count expenditures
and the totals are more accurate. You can still find the information from 24 and 48 hour reports in
`/schedule/schedule_e/`.

Due to the large quantity of Schedule E filings, this endpoint is not paginated by
page number. Instead, you can request the next page of results by adding the values in
the `last_indexes` object from `pagination` to the URL of your last request. For
example, when sorting by `expenditure_amount`, you might receive a page of
results with the following pagination information:

```
 "pagination": {
    "count": 152623,
    "last_indexes": {
      "last_index": "3023037",
      "last_expenditure_amount": -17348.5
    },
    "per_page": 20,
    "pages": 7632
  }
}
```

To fetch the next page of sorted results, append `last_index=3023037` and
`last_expenditure_amount=` to the URL.  We strongly advise paging through
these results by using the sort indices (defaults to sort by disbursement date,
e.g. `last_disbursement_date`), otherwise some resources may be unintentionally
filtered out.  This resource uses keyset pagination to improve query performance
and these indices are required to properly page through this large dataset.

Note: because the Schedule E data includes many records, counts for
large result sets are approximate; you will want to page through the records until no records are returned.

* [getSchedulesScheduleEByCandidate](#getschedulesscheduleebycandidate) - 
Schedule E receipts aggregated by recipient candidate. To avoid double
counting, memoed items are not included.

* [getSchedulesScheduleEEfile](#getschedulesscheduleeefile) - 
Efiling endpoints provide real-time campaign finance data received from electronic filers. Efiling endpoints only contain the most recent four months of data and don't contain the processed and coded data that you can find on other endpoints.

* [getSchedulesScheduleETotalsByCandidate](#getschedulesscheduleetotalsbycandidate) - 
Total independent expenditure on supported or opposed candidates by cycle or candidate election year.


## getSchedulesScheduleE


Schedule E covers the line item expenditures for independent expenditures. For example, if a super PAC
bought ads on TV to oppose a federal candidate, each ad purchase would be recorded here with
the expenditure amount, name and id of the candidate, and whether the ad supported or opposed the candidate.

An independent expenditure is an expenditure for a communication "expressly advocating the election or
defeat of a clearly identified candidate that is not made in cooperation, consultation, or concert with,
or at the request or suggestion of, a candidate, a candidate’s authorized committee, or their agents, or
a political party or its agents."

Aggregates by candidate do not include 24 and 48 hour reports. This ensures we don't double count expenditures
and the totals are more accurate. You can still find the information from 24 and 48 hour reports in
`/schedule/schedule_e/`.

Due to the large quantity of Schedule E filings, this endpoint is not paginated by
page number. Instead, you can request the next page of results by adding the values in
the `last_indexes` object from `pagination` to the URL of your last request. For
example, when sorting by `expenditure_amount`, you might receive a page of
results with the following pagination information:

```
 "pagination": {
    "count": 152623,
    "last_indexes": {
      "last_index": "3023037",
      "last_expenditure_amount": -17348.5
    },
    "per_page": 20,
    "pages": 7632
  }
}
```

To fetch the next page of sorted results, append `last_index=3023037` and
`last_expenditure_amount=` to the URL.  We strongly advise paging through
these results by using the sort indices (defaults to sort by disbursement date,
e.g. `last_disbursement_date`), otherwise some resources may be unintentionally
filtered out.  This resource uses keyset pagination to improve query performance
and these indices are required to properly page through this large dataset.

Note: because the Schedule E data includes many records, counts for
large result sets are approximate; you will want to page through the records until no records are returned.


### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchedulesScheduleECandidateOfficeEnum;
import org.openapis.openapi.models.operations.GetSchedulesScheduleERequest;
import org.openapis.openapi.models.operations.GetSchedulesScheduleEResponse;
import org.openapis.openapi.models.operations.GetSchedulesScheduleESupportOpposeIndicatorEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur", "nemo", "reprehenderit") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSchedulesScheduleERequest req = new GetSchedulesScheduleERequest("aperiam") {{
                candidateId = new String[]{{
                    add("minima"),
                    add("in"),
                }};
                candidateOffice = new org.openapis.openapi.models.operations.GetSchedulesScheduleECandidateOfficeEnum[]{{
                    add(GetSchedulesScheduleECandidateOfficeEnum.S),
                    add(GetSchedulesScheduleECandidateOfficeEnum.UNKNOWN),
                }};
                candidateOfficeDistrict = new String[]{{
                    add("veritatis"),
                    add("ducimus"),
                    add("voluptate"),
                }};
                candidateOfficeState = new String[]{{
                    add("itaque"),
                    add("similique"),
                    add("optio"),
                    add("ex"),
                }};
                candidateParty = new String[]{{
                    add("commodi"),
                    add("officiis"),
                }};
                committeeId = new String[]{{
                    add("quidem"),
                    add("exercitationem"),
                    add("quam"),
                    add("dolorem"),
                }};
                cycle = new Integer[]{{
                    add(59383),
                    add(575534),
                }};
                filingForm = new String[]{{
                    add("sequi"),
                    add("repudiandae"),
                    add("cum"),
                    add("dicta"),
                }};
                imageNumber = new String[]{{
                    add("veniam"),
                    add("animi"),
                    add("dolores"),
                    add("nam"),
                }};
                isNotice = new Boolean[]{{
                    add(false),
                }};
                lastExpenditureAmount = 1644.88;
                lastExpenditureDate = LocalDate.parse("2020-10-03");
                lastIndex = 56877;
                lastOfficeTotalYtd = 4973.57;
                lastSupportOpposeIndicator = "maiores";
                lineNumber = "veritatis";
                maxAmount = "quasi";
                maxDate = LocalDate.parse("2022-02-19");
                maxDisseminationDate = LocalDate.parse("2021-11-13");
                maxFilingDate = LocalDate.parse("2022-04-07");
                maxImageNumber = "aliquam";
                minAmount = "nostrum";
                minDate = LocalDate.parse("2020-09-23");
                minDisseminationDate = LocalDate.parse("2022-05-16");
                minFilingDate = LocalDate.parse("2021-01-11");
                minImageNumber = "quas";
                mostRecent = false;
                payeeName = new String[]{{
                    add("molestias"),
                    add("odio"),
                    add("eaque"),
                }};
                perPage = 901163;
                qSpender = new String[]{{
                    add("quos"),
                }};
                sort = "iste";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
                supportOpposeIndicator = new org.openapis.openapi.models.operations.GetSchedulesScheduleESupportOpposeIndicatorEnum[]{{
                    add(GetSchedulesScheduleESupportOpposeIndicatorEnum.O),
                    add(GetSchedulesScheduleESupportOpposeIndicatorEnum.O),
                    add(GetSchedulesScheduleESupportOpposeIndicatorEnum.S),
                    add(GetSchedulesScheduleESupportOpposeIndicatorEnum.S),
                }};
            }};            

            GetSchedulesScheduleEResponse res = sdk.independentExpenditures.getSchedulesScheduleE(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSchedulesScheduleEByCandidate


Schedule E receipts aggregated by recipient candidate. To avoid double
counting, memoed items are not included.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchedulesScheduleEByCandidateOfficeEnum;
import org.openapis.openapi.models.operations.GetSchedulesScheduleEByCandidateRequest;
import org.openapis.openapi.models.operations.GetSchedulesScheduleEByCandidateResponse;
import org.openapis.openapi.models.operations.GetSchedulesScheduleEByCandidateSupportOpposeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus", "impedit", "cum") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSchedulesScheduleEByCandidateRequest req = new GetSchedulesScheduleEByCandidateRequest("ipsum") {{
                candidateId = new String[]{{
                    add("saepe"),
                }};
                committeeId = new String[]{{
                    add("doloremque"),
                    add("quis"),
                    add("veniam"),
                }};
                cycle = new Integer[]{{
                    add(99733),
                    add(584593),
                    add(475589),
                }};
                district = "eligendi";
                electionFull = false;
                office = GetSchedulesScheduleEByCandidateOfficeEnum.PRESIDENT;
                page = 251464;
                perPage = 298187;
                sort = "itaque";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
                state = "sed";
                supportOppose = GetSchedulesScheduleEByCandidateSupportOpposeEnum.O;
            }};            

            GetSchedulesScheduleEByCandidateResponse res = sdk.independentExpenditures.getSchedulesScheduleEByCandidate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSchedulesScheduleEEfile


Efiling endpoints provide real-time campaign finance data received from electronic filers. Efiling endpoints only contain the most recent four months of data and don't contain the processed and coded data that you can find on other endpoints.


### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchedulesScheduleEEfileCandidateOfficeEnum;
import org.openapis.openapi.models.operations.GetSchedulesScheduleEEfileRequest;
import org.openapis.openapi.models.operations.GetSchedulesScheduleEEfileResponse;
import org.openapis.openapi.models.operations.GetSchedulesScheduleEEfileSupportOpposeIndicatorEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam", "consequuntur", "facere") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSchedulesScheduleEEfileRequest req = new GetSchedulesScheduleEEfileRequest("laudantium") {{
                candidateId = new String[]{{
                    add("pariatur"),
                }};
                candidateOffice = GetSchedulesScheduleEEfileCandidateOfficeEnum.UNKNOWN;
                candidateOfficeDistrict = new String[]{{
                    add("ab"),
                    add("velit"),
                }};
                candidateOfficeState = new String[]{{
                    add("tempore"),
                    add("nisi"),
                    add("voluptatibus"),
                }};
                candidateParty = new String[]{{
                    add("blanditiis"),
                    add("distinctio"),
                }};
                candidateSearch = new String[]{{
                    add("quis"),
                    add("nisi"),
                }};
                committeeId = new String[]{{
                    add("minus"),
                    add("facere"),
                    add("facilis"),
                }};
                filingForm = new String[]{{
                    add("ad"),
                }};
                imageNumber = new String[]{{
                    add("voluptatibus"),
                    add("consequuntur"),
                    add("debitis"),
                    add("labore"),
                }};
                isNotice = false;
                maxDisseminationDate = LocalDate.parse("2022-08-22");
                maxExpenditureAmount = 440777;
                maxExpenditureDate = LocalDate.parse("2022-10-17");
                maxFiledDate = LocalDate.parse("2022-05-03");
                minDisseminationDate = LocalDate.parse("2021-06-29");
                minExpenditureAmount = 853606;
                minExpenditureDate = LocalDate.parse("2021-03-22");
                minFiledDate = LocalDate.parse("2022-10-12");
                mostRecent = false;
                page = 118041;
                payeeName = new String[]{{
                    add("porro"),
                    add("vitae"),
                    add("dignissimos"),
                }};
                perPage = 458970;
                sort = "fugiat";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
                spenderName = new String[]{{
                    add("aspernatur"),
                    add("enim"),
                }};
                supportOpposeIndicator = new org.openapis.openapi.models.operations.GetSchedulesScheduleEEfileSupportOpposeIndicatorEnum[]{{
                    add(GetSchedulesScheduleEEfileSupportOpposeIndicatorEnum.S),
                    add(GetSchedulesScheduleEEfileSupportOpposeIndicatorEnum.S),
                    add(GetSchedulesScheduleEEfileSupportOpposeIndicatorEnum.O),
                    add(GetSchedulesScheduleEEfileSupportOpposeIndicatorEnum.S),
                }};
            }};            

            GetSchedulesScheduleEEfileResponse res = sdk.independentExpenditures.getSchedulesScheduleEEfile(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSchedulesScheduleETotalsByCandidate


Total independent expenditure on supported or opposed candidates by cycle or candidate election year.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchedulesScheduleETotalsByCandidateRequest;
import org.openapis.openapi.models.operations.GetSchedulesScheduleETotalsByCandidateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab", "incidunt", "accusamus") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSchedulesScheduleETotalsByCandidateRequest req = new GetSchedulesScheduleETotalsByCandidateRequest("saepe") {{
                candidateId = new String[]{{
                    add("veniam"),
                    add("eos"),
                    add("reiciendis"),
                }};
                cycle = new Integer[]{{
                    add(444121),
                    add(506312),
                    add(367046),
                    add(999809),
                }};
                electionFull = false;
                page = 789770;
                perPage = 197259;
                sort = "nihil";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetSchedulesScheduleETotalsByCandidateResponse res = sdk.independentExpenditures.getSchedulesScheduleETotalsByCandidate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
