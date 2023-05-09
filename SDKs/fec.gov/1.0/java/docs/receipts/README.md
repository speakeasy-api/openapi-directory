# receipts

## Overview

This collection of endpoints includes Schedule A records reported by a committee. Schedule A records describe itemized receipts, including contributions from individuals. If you are interested in contributions from individuals, use the /schedules/schedule_a/ endpoint. For a more complete description of all Schedule A records visit [About receipts data](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/about-receipts-data/). If you are interested in our "is_individual" methodology visit our [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology/). 

 

 

 Schedule A is also available as a database dump file that is updated weekly on Sunday. The database dump files are here: https://www.fec.gov/files/bulk-downloads/index.html?prefix=bulk-downloads/data-dump/schedules/. The instructions are here: https://www.fec.gov/files//bulk-downloads/data-dump/schedules/README.txt. We cannot provide help with restoring the database dump files, but you can refer to this community led [group](https://groups.google.com/forum/#!forum/fec-data) for discussion.

### Available Operations

* [getSchedulesScheduleA](#getschedulesschedulea) - 
This description is for both ​`/schedules​/schedule_a​/` and ​ `/schedules​/schedule_a​/{sub_id}​/`.

This endpoint provides itemized receipts. Schedule A records describe itemized receipts, including contributions from individuals. If you are interested in contributions from an individual, use the `/schedules/schedule_a/` endpoint. For a more complete description of all Schedule A records visit [About receipts data](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/about-receipts-data/). If you are interested in our "is_individual" methodology visit our [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology/). 
​The `/schedules​/schedule_a​/` endpoint is not paginated by page number. This endpoint uses keyset pagination to improve query performance and these indices are required to properly page through this large dataset. To request the next page, you should append the values found in the `last_indexes` object from pagination to the URL of your last request as additional parameters. 
For example, when sorting by `contribution_receipt_date`, you might receive a page of results with the two scenarios of following pagination information:

case #1:
```
pagination: {
    pages: 2152643,
    per_page: 20,
    count: 43052850,
    last_indexes: {
        last_index: "230880619",
        last_contribution_receipt_date: "2014-01-01"
    }
}
```
<br/>
case #2 (results which include contribution_receipt_date = NULL):

```
pagination: {
    pages: 2152644,
    per_page: 20,
    count: 43052850,
    last_indexes: {
        last_index: "230880639",
        sort_null_only: True
    }
}
```
To fetch the next page of sorted results, append `last_index=230880619` and `last_contribution_receipt_date=2014-01-01` to the URL and when reaching `contribution_receipt_date=NULL`, append `last_index=230880639` and `sort_null_only=True`. We strongly advise paging through these results using sort indices. The default sort is acending by `contribution_receipt_date` (`deprecated`, will be descending). If you do not page using sort indices, some transactions may be unintentionally filtered out.

Calls to ​`/schedules​/schedule_a​/` may return many records. For large result sets, the record counts found in the pagination object are approximate; you will need to page through the records until no records are returned.

To avoid throwing the "out of range" exception on the last page, one recommandation is to use total count and `per_page` to control the traverse loop of results.

​The `/schedules​/schedule_a​/{sub_id}​/` endpoint returns a single transaction, but it does include a pagination object class. Please ignore the information in that object class.


* [getSchedulesScheduleAByEmployer](#getschedulesscheduleabyemployer) - 
This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s employer name. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.

* [getSchedulesScheduleAByOccupation](#getschedulesscheduleabyoccupation) - 
This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s occupation. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.

* [getSchedulesScheduleABySize](#getschedulesscheduleabysize) - 
This endpoint provides individual contributions received by a committee, aggregated by size:

```
 - $200 and under
 - $200.01 - $499.99
 - $500 - $999.99
 - $1000 - $1999.99
 - $2000 +
```

The $200.00 and under category includes contributions of $200 or less combined with unitemized individual contributions.

* [getSchedulesScheduleABySizeByCandidate](#getschedulesscheduleabysizebycandidate) - 
This endpoint provides itemized individual contributions received by a committee, aggregated by size of contribution and candidate. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.

* [getSchedulesScheduleAByState](#getschedulesscheduleabystate) - 
This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s state. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.

* [getSchedulesScheduleAByStateByCandidate](#getschedulesscheduleabystatebycandidate) - 
This endpoint provides itemized individual contributions received by a committee, aggregated by contributor’s state and candidate. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.

* [getSchedulesScheduleAByStateByCandidateTotals](#getschedulesscheduleabystatebycandidatetotals) - 
Itemized individual contributions aggregated by contributor’s state, candidate, committee type and cycle. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.


* [getSchedulesScheduleAByStateTotals](#getschedulesscheduleabystatetotals) - 
This endpoint provides itemized individual contributions received by a committee, aggregated by contributor’s state, committee type and cycle. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.

* [getSchedulesScheduleAByZip](#getschedulesscheduleabyzip) - 
This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s ZIP code. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.

* [getSchedulesScheduleAEfile](#getschedulesscheduleaefile) - 
Efiling endpoints provide real-time campaign finance data received from electronic filers. Efiling endpoints only contain the most recent four months of data and don't contain the processed and coded data that you can find on other endpoints.

* [getSchedulesScheduleASubId](#getschedulesscheduleasubid) - 
This description is for both ​`/schedules​/schedule_a​/` and ​ `/schedules​/schedule_a​/{sub_id}​/`.

This endpoint provides itemized receipts. Schedule A records describe itemized receipts, including contributions from individuals. If you are interested in contributions from an individual, use the `/schedules/schedule_a/` endpoint. For a more complete description of all Schedule A records visit [About receipts data](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/about-receipts-data/). If you are interested in our "is_individual" methodology visit our [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology/). 
​The `/schedules​/schedule_a​/` endpoint is not paginated by page number. This endpoint uses keyset pagination to improve query performance and these indices are required to properly page through this large dataset. To request the next page, you should append the values found in the `last_indexes` object from pagination to the URL of your last request as additional parameters. 
For example, when sorting by `contribution_receipt_date`, you might receive a page of results with the two scenarios of following pagination information:

case #1:
```
pagination: {
    pages: 2152643,
    per_page: 20,
    count: 43052850,
    last_indexes: {
        last_index: "230880619",
        last_contribution_receipt_date: "2014-01-01"
    }
}
```
<br/>
case #2 (results which include contribution_receipt_date = NULL):

```
pagination: {
    pages: 2152644,
    per_page: 20,
    count: 43052850,
    last_indexes: {
        last_index: "230880639",
        sort_null_only: True
    }
}
```
To fetch the next page of sorted results, append `last_index=230880619` and `last_contribution_receipt_date=2014-01-01` to the URL and when reaching `contribution_receipt_date=NULL`, append `last_index=230880639` and `sort_null_only=True`. We strongly advise paging through these results using sort indices. The default sort is acending by `contribution_receipt_date` (`deprecated`, will be descending). If you do not page using sort indices, some transactions may be unintentionally filtered out.

Calls to ​`/schedules​/schedule_a​/` may return many records. For large result sets, the record counts found in the pagination object are approximate; you will need to page through the records until no records are returned.

To avoid throwing the "out of range" exception on the last page, one recommandation is to use total count and `per_page` to control the traverse loop of results.

​The `/schedules​/schedule_a​/{sub_id}​/` endpoint returns a single transaction, but it does include a pagination object class. Please ignore the information in that object class.



## getSchedulesScheduleA


This description is for both ​`/schedules​/schedule_a​/` and ​ `/schedules​/schedule_a​/{sub_id}​/`.

This endpoint provides itemized receipts. Schedule A records describe itemized receipts, including contributions from individuals. If you are interested in contributions from an individual, use the `/schedules/schedule_a/` endpoint. For a more complete description of all Schedule A records visit [About receipts data](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/about-receipts-data/). If you are interested in our "is_individual" methodology visit our [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology/). 
​The `/schedules​/schedule_a​/` endpoint is not paginated by page number. This endpoint uses keyset pagination to improve query performance and these indices are required to properly page through this large dataset. To request the next page, you should append the values found in the `last_indexes` object from pagination to the URL of your last request as additional parameters. 
For example, when sorting by `contribution_receipt_date`, you might receive a page of results with the two scenarios of following pagination information:

case #1:
```
pagination: {
    pages: 2152643,
    per_page: 20,
    count: 43052850,
    last_indexes: {
        last_index: "230880619",
        last_contribution_receipt_date: "2014-01-01"
    }
}
```
<br/>
case #2 (results which include contribution_receipt_date = NULL):

```
pagination: {
    pages: 2152644,
    per_page: 20,
    count: 43052850,
    last_indexes: {
        last_index: "230880639",
        sort_null_only: True
    }
}
```
To fetch the next page of sorted results, append `last_index=230880619` and `last_contribution_receipt_date=2014-01-01` to the URL and when reaching `contribution_receipt_date=NULL`, append `last_index=230880639` and `sort_null_only=True`. We strongly advise paging through these results using sort indices. The default sort is acending by `contribution_receipt_date` (`deprecated`, will be descending). If you do not page using sort indices, some transactions may be unintentionally filtered out.

Calls to ​`/schedules​/schedule_a​/` may return many records. For large result sets, the record counts found in the pagination object are approximate; you will need to page through the records until no records are returned.

To avoid throwing the "out of range" exception on the last page, one recommandation is to use total count and `per_page` to control the traverse loop of results.

​The `/schedules​/schedule_a​/{sub_id}​/` endpoint returns a single transaction, but it does include a pagination object class. Please ignore the information in that object class.



### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchedulesScheduleAContributorTypeEnum;
import org.openapis.openapi.models.operations.GetSchedulesScheduleARecipientCommitteeDesignationEnum;
import org.openapis.openapi.models.operations.GetSchedulesScheduleARecipientCommitteeOrgTypeEnum;
import org.openapis.openapi.models.operations.GetSchedulesScheduleARecipientCommitteeTypeEnum;
import org.openapis.openapi.models.operations.GetSchedulesScheduleARequest;
import org.openapis.openapi.models.operations.GetSchedulesScheduleAResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos", "ullam", "dolore") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSchedulesScheduleARequest req = new GetSchedulesScheduleARequest("modi") {{
                committeeId = new String[]{{
                    add("maxime"),
                    add("modi"),
                    add("consequuntur"),
                    add("assumenda"),
                }};
                contributorCity = new String[]{{
                    add("doloribus"),
                    add("impedit"),
                    add("porro"),
                    add("accusamus"),
                }};
                contributorEmployer = new String[]{{
                    add("reiciendis"),
                    add("ab"),
                    add("sint"),
                }};
                contributorId = new String[]{{
                    add("esse"),
                    add("iure"),
                }};
                contributorName = new String[]{{
                    add("nesciunt"),
                    add("debitis"),
                }};
                contributorOccupation = new String[]{{
                    add("neque"),
                    add("corporis"),
                }};
                contributorState = new String[]{{
                    add("consequuntur"),
                    add("officia"),
                }};
                contributorType = new org.openapis.openapi.models.operations.GetSchedulesScheduleAContributorTypeEnum[]{{
                    add(GetSchedulesScheduleAContributorTypeEnum.COMMITTEE),
                    add(GetSchedulesScheduleAContributorTypeEnum.INDIVIDUAL),
                }};
                contributorZip = new String[]{{
                    add("rem"),
                }};
                imageNumber = new String[]{{
                    add("accusantium"),
                    add("veniam"),
                    add("saepe"),
                    add("neque"),
                }};
                isIndividual = false;
                lastContributionReceiptAmount = 8163.65;
                lastContributionReceiptDate = LocalDate.parse("2022-06-13");
                lastIndex = 984773;
                lineNumber = "fugiat";
                maxAmount = "est";
                maxDate = LocalDate.parse("2022-04-07");
                maxImageNumber = "vitae";
                maxLoadDate = LocalDate.parse("2022-05-15");
                minAmount = "illo";
                minDate = LocalDate.parse("2021-11-29");
                minImageNumber = "doloribus";
                minLoadDate = LocalDate.parse("2021-03-11");
                perPage = 275425;
                recipientCommitteeDesignation = new org.openapis.openapi.models.operations.GetSchedulesScheduleARecipientCommitteeDesignationEnum[]{{
                    add(GetSchedulesScheduleARecipientCommitteeDesignationEnum.J),
                }};
                recipientCommitteeOrgType = new org.openapis.openapi.models.operations.GetSchedulesScheduleARecipientCommitteeOrgTypeEnum[]{{
                    add(GetSchedulesScheduleARecipientCommitteeOrgTypeEnum.V),
                    add(GetSchedulesScheduleARecipientCommitteeOrgTypeEnum.UNKNOWN),
                    add(GetSchedulesScheduleARecipientCommitteeOrgTypeEnum.T),
                }};
                recipientCommitteeType = new org.openapis.openapi.models.operations.GetSchedulesScheduleARecipientCommitteeTypeEnum[]{{
                    add(GetSchedulesScheduleARecipientCommitteeTypeEnum.O),
                }};
                sort = "sapiente";
                sortHideNull = false;
                sortNullOnly = false;
                twoYearTransactionPeriod = new Integer[]{{
                    add(330440),
                }};
            }};            

            GetSchedulesScheduleAResponse res = sdk.receipts.getSchedulesScheduleA(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSchedulesScheduleAByEmployer


This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s employer name. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchedulesScheduleAByEmployerRequest;
import org.openapis.openapi.models.operations.GetSchedulesScheduleAByEmployerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis", "officia", "sint") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSchedulesScheduleAByEmployerRequest req = new GetSchedulesScheduleAByEmployerRequest("ut") {{
                committeeId = new String[]{{
                    add("tenetur"),
                    add("adipisci"),
                }};
                cycle = new Integer[]{{
                    add(448386),
                    add(329651),
                    add(403147),
                }};
                employer = new String[]{{
                    add("ab"),
                    add("beatae"),
                    add("hic"),
                    add("nisi"),
                }};
                page = 786954;
                perPage = 221218;
                sort = "ducimus";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetSchedulesScheduleAByEmployerResponse res = sdk.receipts.getSchedulesScheduleAByEmployer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSchedulesScheduleAByOccupation


This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s occupation. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchedulesScheduleAByOccupationRequest;
import org.openapis.openapi.models.operations.GetSchedulesScheduleAByOccupationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga", "minima", "architecto") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSchedulesScheduleAByOccupationRequest req = new GetSchedulesScheduleAByOccupationRequest("qui") {{
                committeeId = new String[]{{
                    add("magni"),
                    add("incidunt"),
                }};
                cycle = new Integer[]{{
                    add(506343),
                }};
                occupation = new String[]{{
                    add("exercitationem"),
                }};
                page = 709701;
                perPage = 706411;
                sort = "impedit";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetSchedulesScheduleAByOccupationResponse res = sdk.receipts.getSchedulesScheduleAByOccupation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSchedulesScheduleABySize


This endpoint provides individual contributions received by a committee, aggregated by size:

```
 - $200 and under
 - $200.01 - $499.99
 - $500 - $999.99
 - $1000 - $1999.99
 - $2000 +
```

The $200.00 and under category includes contributions of $200 or less combined with unitemized individual contributions.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchedulesScheduleABySizeRequest;
import org.openapis.openapi.models.operations.GetSchedulesScheduleABySizeResponse;
import org.openapis.openapi.models.operations.GetSchedulesScheduleABySizeSizeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit", "nemo", "culpa") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSchedulesScheduleABySizeRequest req = new GetSchedulesScheduleABySizeRequest("consequuntur") {{
                committeeId = new String[]{{
                    add("deserunt"),
                }};
                cycle = new Integer[]{{
                    add(332831),
                    add(800256),
                }};
                page = 932250;
                perPage = 955569;
                size = new org.openapis.openapi.models.operations.GetSchedulesScheduleABySizeSizeEnum[]{{
                    add(GetSchedulesScheduleABySizeSizeEnum.TWO_HUNDRED),
                    add(GetSchedulesScheduleABySizeSizeEnum.TWO_THOUSAND),
                    add(GetSchedulesScheduleABySizeSizeEnum.TWO_THOUSAND),
                    add(GetSchedulesScheduleABySizeSizeEnum.TWO_THOUSAND),
                }};
                sort = "architecto";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetSchedulesScheduleABySizeResponse res = sdk.receipts.getSchedulesScheduleABySize(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSchedulesScheduleABySizeByCandidate


This endpoint provides itemized individual contributions received by a committee, aggregated by size of contribution and candidate. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchedulesScheduleABySizeByCandidateRequest;
import org.openapis.openapi.models.operations.GetSchedulesScheduleABySizeByCandidateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias", "culpa", "ipsa") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSchedulesScheduleABySizeByCandidateRequest req = new GetSchedulesScheduleABySizeByCandidateRequest("nobis",                 new String[]{{
                                add("quia"),
                                add("dicta"),
                                add("vel"),
                                add("perspiciatis"),
                            }},                 new Integer[]{{
                                add(354821),
                                add(103578),
                                add(33771),
                                add(18096),
                            }}) {{
                electionFull = false;
                page = 82876;
                perPage = 590585;
                sort = "cumque";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetSchedulesScheduleABySizeByCandidateResponse res = sdk.receipts.getSchedulesScheduleABySizeByCandidate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSchedulesScheduleAByState


This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s state. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchedulesScheduleAByStateRequest;
import org.openapis.openapi.models.operations.GetSchedulesScheduleAByStateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure", "quibusdam", "quod") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSchedulesScheduleAByStateRequest req = new GetSchedulesScheduleAByStateRequest("nemo") {{
                committeeId = new String[]{{
                    add("velit"),
                    add("magnam"),
                    add("dignissimos"),
                    add("laboriosam"),
                }};
                cycle = new Integer[]{{
                    add(486272),
                }};
                hideNull = false;
                page = 616941;
                perPage = 588152;
                sort = "cum";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
                state = new String[]{{
                    add("facilis"),
                    add("quidem"),
                    add("itaque"),
                    add("laboriosam"),
                }};
            }};            

            GetSchedulesScheduleAByStateResponse res = sdk.receipts.getSchedulesScheduleAByState(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSchedulesScheduleAByStateByCandidate


This endpoint provides itemized individual contributions received by a committee, aggregated by contributor’s state and candidate. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchedulesScheduleAByStateByCandidateRequest;
import org.openapis.openapi.models.operations.GetSchedulesScheduleAByStateByCandidateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde", "modi", "perspiciatis") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSchedulesScheduleAByStateByCandidateRequest req = new GetSchedulesScheduleAByStateByCandidateRequest("hic",                 new String[]{{
                                add("aspernatur"),
                                add("libero"),
                                add("nam"),
                            }},                 new Integer[]{{
                                add(925395),
                                add(797254),
                            }}) {{
                electionFull = false;
                page = 664666;
                perPage = 904440;
                sort = "autem";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetSchedulesScheduleAByStateByCandidateResponse res = sdk.receipts.getSchedulesScheduleAByStateByCandidate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSchedulesScheduleAByStateByCandidateTotals


Itemized individual contributions aggregated by contributor’s state, candidate, committee type and cycle. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.



### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchedulesScheduleAByStateByCandidateTotalsRequest;
import org.openapis.openapi.models.operations.GetSchedulesScheduleAByStateByCandidateTotalsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo", "nesciunt", "illum") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSchedulesScheduleAByStateByCandidateTotalsRequest req = new GetSchedulesScheduleAByStateByCandidateTotalsRequest("nemo",                 new String[]{{
                                add("facilis"),
                                add("non"),
                                add("mollitia"),
                                add("assumenda"),
                            }},                 new Integer[]{{
                                add(718981),
                                add(866861),
                                add(323365),
                                add(816151),
                            }}) {{
                electionFull = false;
                page = 674683;
                perPage = 911451;
                sort = "laborum";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetSchedulesScheduleAByStateByCandidateTotalsResponse res = sdk.receipts.getSchedulesScheduleAByStateByCandidateTotals(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSchedulesScheduleAByStateTotals


This endpoint provides itemized individual contributions received by a committee, aggregated by contributor’s state, committee type and cycle. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchedulesScheduleAByStateTotalsRequest;
import org.openapis.openapi.models.operations.GetSchedulesScheduleAByStateTotalsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt", "maxime", "ipsam") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSchedulesScheduleAByStateTotalsRequest req = new GetSchedulesScheduleAByStateTotalsRequest("alias") {{
                committeeType = new String[]{{
                    add("deserunt"),
                    add("molestias"),
                }};
                cycle = new Integer[]{{
                    add(668218),
                    add(577413),
                    add(286716),
                }};
                page = 777378;
                perPage = 19462;
                sort = "fugit";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
                state = new String[]{{
                    add("magnam"),
                    add("quaerat"),
                }};
            }};            

            GetSchedulesScheduleAByStateTotalsResponse res = sdk.receipts.getSchedulesScheduleAByStateTotals(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSchedulesScheduleAByZip


This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s ZIP code. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchedulesScheduleAByZipRequest;
import org.openapis.openapi.models.operations.GetSchedulesScheduleAByZipResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi", "hic", "nostrum") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSchedulesScheduleAByZipRequest req = new GetSchedulesScheduleAByZipRequest("officiis") {{
                committeeId = new String[]{{
                    add("nulla"),
                    add("error"),
                    add("mollitia"),
                }};
                cycle = new Integer[]{{
                    add(344289),
                    add(460909),
                }};
                page = 548849;
                perPage = 684799;
                sort = "facere";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
                state = new String[]{{
                    add("quasi"),
                    add("deserunt"),
                    add("quod"),
                    add("laboriosam"),
                }};
                zip = new String[]{{
                    add("voluptatem"),
                }};
            }};            

            GetSchedulesScheduleAByZipResponse res = sdk.receipts.getSchedulesScheduleAByZip(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSchedulesScheduleAEfile


Efiling endpoints provide real-time campaign finance data received from electronic filers. Efiling endpoints only contain the most recent four months of data and don't contain the processed and coded data that you can find on other endpoints.


### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchedulesScheduleAEfileRequest;
import org.openapis.openapi.models.operations.GetSchedulesScheduleAEfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facere", "necessitatibus", "maxime") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSchedulesScheduleAEfileRequest req = new GetSchedulesScheduleAEfileRequest("consequatur") {{
                committeeId = new String[]{{
                    add("architecto"),
                }};
                contributorCity = new String[]{{
                    add("porro"),
                    add("blanditiis"),
                    add("quae"),
                }};
                contributorEmployer = new String[]{{
                    add("officiis"),
                }};
                contributorName = new String[]{{
                    add("necessitatibus"),
                }};
                contributorOccupation = new String[]{{
                    add("ipsa"),
                    add("excepturi"),
                    add("a"),
                    add("maiores"),
                }};
                contributorState = new String[]{{
                    add("maiores"),
                    add("alias"),
                    add("asperiores"),
                }};
                imageNumber = new String[]{{
                    add("dicta"),
                    add("suscipit"),
                    add("earum"),
                }};
                lineNumber = "doloribus";
                maxAmount = "velit";
                maxDate = LocalDate.parse("2022-07-17");
                maxImageNumber = "in";
                minAmount = "eligendi";
                minDate = LocalDate.parse("2022-10-18");
                minImageNumber = "vero";
                page = 566312;
                perPage = 37534;
                sort = "qui";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetSchedulesScheduleAEfileResponse res = sdk.receipts.getSchedulesScheduleAEfile(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSchedulesScheduleASubId


This description is for both ​`/schedules​/schedule_a​/` and ​ `/schedules​/schedule_a​/{sub_id}​/`.

This endpoint provides itemized receipts. Schedule A records describe itemized receipts, including contributions from individuals. If you are interested in contributions from an individual, use the `/schedules/schedule_a/` endpoint. For a more complete description of all Schedule A records visit [About receipts data](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/about-receipts-data/). If you are interested in our "is_individual" methodology visit our [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology/). 
​The `/schedules​/schedule_a​/` endpoint is not paginated by page number. This endpoint uses keyset pagination to improve query performance and these indices are required to properly page through this large dataset. To request the next page, you should append the values found in the `last_indexes` object from pagination to the URL of your last request as additional parameters. 
For example, when sorting by `contribution_receipt_date`, you might receive a page of results with the two scenarios of following pagination information:

case #1:
```
pagination: {
    pages: 2152643,
    per_page: 20,
    count: 43052850,
    last_indexes: {
        last_index: "230880619",
        last_contribution_receipt_date: "2014-01-01"
    }
}
```
<br/>
case #2 (results which include contribution_receipt_date = NULL):

```
pagination: {
    pages: 2152644,
    per_page: 20,
    count: 43052850,
    last_indexes: {
        last_index: "230880639",
        sort_null_only: True
    }
}
```
To fetch the next page of sorted results, append `last_index=230880619` and `last_contribution_receipt_date=2014-01-01` to the URL and when reaching `contribution_receipt_date=NULL`, append `last_index=230880639` and `sort_null_only=True`. We strongly advise paging through these results using sort indices. The default sort is acending by `contribution_receipt_date` (`deprecated`, will be descending). If you do not page using sort indices, some transactions may be unintentionally filtered out.

Calls to ​`/schedules​/schedule_a​/` may return many records. For large result sets, the record counts found in the pagination object are approximate; you will need to page through the records until no records are returned.

To avoid throwing the "out of range" exception on the last page, one recommandation is to use total count and `per_page` to control the traverse loop of results.

​The `/schedules​/schedule_a​/{sub_id}​/` endpoint returns a single transaction, but it does include a pagination object class. Please ignore the information in that object class.



### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchedulesScheduleASubIdContributorTypeEnum;
import org.openapis.openapi.models.operations.GetSchedulesScheduleASubIdRecipientCommitteeDesignationEnum;
import org.openapis.openapi.models.operations.GetSchedulesScheduleASubIdRecipientCommitteeOrgTypeEnum;
import org.openapis.openapi.models.operations.GetSchedulesScheduleASubIdRecipientCommitteeTypeEnum;
import org.openapis.openapi.models.operations.GetSchedulesScheduleASubIdRequest;
import org.openapis.openapi.models.operations.GetSchedulesScheduleASubIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit", "beatae", "incidunt") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSchedulesScheduleASubIdRequest req = new GetSchedulesScheduleASubIdRequest("dicta", "odit") {{
                committeeId = new String[]{{
                    add("rerum"),
                    add("alias"),
                }};
                contributorCity = new String[]{{
                    add("vel"),
                    add("accusantium"),
                    add("id"),
                }};
                contributorEmployer = new String[]{{
                    add("ex"),
                    add("quas"),
                }};
                contributorId = new String[]{{
                    add("ullam"),
                }};
                contributorName = new String[]{{
                    add("similique"),
                }};
                contributorOccupation = new String[]{{
                    add("quam"),
                    add("magni"),
                }};
                contributorState = new String[]{{
                    add("delectus"),
                    add("omnis"),
                    add("sed"),
                }};
                contributorType = new org.openapis.openapi.models.operations.GetSchedulesScheduleASubIdContributorTypeEnum[]{{
                    add(GetSchedulesScheduleASubIdContributorTypeEnum.COMMITTEE),
                }};
                contributorZip = new String[]{{
                    add("cupiditate"),
                    add("aliquam"),
                }};
                imageNumber = new String[]{{
                    add("maiores"),
                    add("laudantium"),
                    add("velit"),
                }};
                isIndividual = false;
                lastContributionReceiptAmount = 9717.64;
                lastContributionReceiptDate = LocalDate.parse("2022-08-21");
                lastIndex = 57470;
                lineNumber = "quisquam";
                maxAmount = "tenetur";
                maxDate = LocalDate.parse("2022-01-18");
                maxImageNumber = "aliquid";
                maxLoadDate = LocalDate.parse("2020-02-19");
                minAmount = "nobis";
                minDate = LocalDate.parse("2022-12-07");
                minImageNumber = "dicta";
                minLoadDate = LocalDate.parse("2021-09-30");
                perPage = 908734;
                recipientCommitteeDesignation = new org.openapis.openapi.models.operations.GetSchedulesScheduleASubIdRecipientCommitteeDesignationEnum[]{{
                    add(GetSchedulesScheduleASubIdRecipientCommitteeDesignationEnum.B),
                    add(GetSchedulesScheduleASubIdRecipientCommitteeDesignationEnum.U),
                    add(GetSchedulesScheduleASubIdRecipientCommitteeDesignationEnum.A),
                    add(GetSchedulesScheduleASubIdRecipientCommitteeDesignationEnum.D),
                }};
                recipientCommitteeOrgType = new org.openapis.openapi.models.operations.GetSchedulesScheduleASubIdRecipientCommitteeOrgTypeEnum[]{{
                    add(GetSchedulesScheduleASubIdRecipientCommitteeOrgTypeEnum.C),
                }};
                recipientCommitteeType = new org.openapis.openapi.models.operations.GetSchedulesScheduleASubIdRecipientCommitteeTypeEnum[]{{
                    add(GetSchedulesScheduleASubIdRecipientCommitteeTypeEnum.V),
                }};
                sort = "asperiores";
                sortHideNull = false;
                sortNullOnly = false;
                twoYearTransactionPeriod = new Integer[]{{
                    add(500021),
                    add(573610),
                }};
            }};            

            GetSchedulesScheduleASubIdResponse res = sdk.receipts.getSchedulesScheduleASubId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
