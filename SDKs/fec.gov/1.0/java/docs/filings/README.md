# filings

## Overview

All official records and reports filed by or delivered to the FEC. 

 Note: because the filings data includes many records, counts for large result sets are approximate; you will want to page through the records until no records are returned.

### Available Operations

* [getCandidateCandidateIdFilings](#getcandidatecandidateidfilings) - 
All official records and reports filed by or delivered to the FEC.

Note: because the filings data includes many records, counts for large
result sets are approximate; you will want to page through the records until no records are returned.

* [getCommitteeCommitteeIdFilings](#getcommitteecommitteeidfilings) - 
All official records and reports filed by or delivered to the FEC.

Note: because the filings data includes many records, counts for large
result sets are approximate; you will want to page through the records until no records are returned.

* [getFilings](#getfilings) - 
All official records and reports filed by or delivered to the FEC.

Note: because the filings data includes many records, counts for large
result sets are approximate; you will want to page through the records until no records are returned.

* [getOperationsLog](#getoperationslog) - 
The Operations log contains details of each report loaded into the database. It is primarily
used as status check to determine when all of the data processes, from initial entry through
review are complete.


## getCandidateCandidateIdFilings


All official records and reports filed by or delivered to the FEC.

Note: because the filings data includes many records, counts for large
result sets are approximate; you will want to page through the records until no records are returned.


### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCandidateCandidateIdFilingsAmendmentIndicatorEnum;
import org.openapis.openapi.models.operations.GetCandidateCandidateIdFilingsFilerTypeEnum;
import org.openapis.openapi.models.operations.GetCandidateCandidateIdFilingsOfficeEnum;
import org.openapis.openapi.models.operations.GetCandidateCandidateIdFilingsRequest;
import org.openapis.openapi.models.operations.GetCandidateCandidateIdFilingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate", "provident", "earum") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCandidateCandidateIdFilingsRequest req = new GetCandidateCandidateIdFilingsRequest("soluta", "hic") {{
                amendmentIndicator = new org.openapis.openapi.models.operations.GetCandidateCandidateIdFilingsAmendmentIndicatorEnum[]{{
                    add(GetCandidateCandidateIdFilingsAmendmentIndicatorEnum.UNKNOWN),
                    add(GetCandidateCandidateIdFilingsAmendmentIndicatorEnum.S),
                    add(GetCandidateCandidateIdFilingsAmendmentIndicatorEnum.C),
                    add(GetCandidateCandidateIdFilingsAmendmentIndicatorEnum.S),
                }};
                beginningImageNumber = new String[]{{
                    add("aliquid"),
                    add("porro"),
                    add("suscipit"),
                    add("dolorem"),
                }};
                committeeType = "fugit";
                cycle = new Integer[]{{
                    add(684935),
                    add(189062),
                    add(656762),
                    add(898760),
                }};
                district = new String[]{{
                    add("consequatur"),
                    add("quasi"),
                    add("et"),
                    add("ducimus"),
                }};
                documentType = new String[]{{
                    add("occaecati"),
                    add("suscipit"),
                    add("adipisci"),
                }};
                fileNumber = new Integer[]{{
                    add(169025),
                }};
                filerType = GetCandidateCandidateIdFilingsFilerTypeEnum.PAPER;
                formCategory = new String[]{{
                    add("necessitatibus"),
                    add("ipsa"),
                    add("tempora"),
                    add("nihil"),
                }};
                formType = new String[]{{
                    add("dicta"),
                    add("iusto"),
                }};
                isAmended = false;
                maxReceiptDate = LocalDate.parse("2022-06-29");
                minReceiptDate = LocalDate.parse("2020-02-06");
                mostRecent = false;
                office = new org.openapis.openapi.models.operations.GetCandidateCandidateIdFilingsOfficeEnum[]{{
                    add(GetCandidateCandidateIdFilingsOfficeEnum.UNKNOWN),
                    add(GetCandidateCandidateIdFilingsOfficeEnum.P),
                }};
                page = 39650;
                party = new String[]{{
                    add("odio"),
                }};
                perPage = 271252;
                primaryGeneralIndicator = new String[]{{
                    add("ex"),
                    add("consectetur"),
                }};
                qFiler = new String[]{{
                    add("ipsa"),
                    add("laborum"),
                }};
                reportType = new String[]{{
                    add("nostrum"),
                }};
                reportYear = new Integer[]{{
                    add(713767),
                    add(399667),
                    add(639187),
                    add(381397),
                }};
                requestType = new String[]{{
                    add("perferendis"),
                    add("eum"),
                }};
                sort = new String[]{{
                    add("iste"),
                    add("id"),
                }};
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
                state = new String[]{{
                    add("error"),
                }};
            }};            

            GetCandidateCandidateIdFilingsResponse res = sdk.filings.getCandidateCandidateIdFilings(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCommitteeCommitteeIdFilings


All official records and reports filed by or delivered to the FEC.

Note: because the filings data includes many records, counts for large
result sets are approximate; you will want to page through the records until no records are returned.


### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommitteeCommitteeIdFilingsAmendmentIndicatorEnum;
import org.openapis.openapi.models.operations.GetCommitteeCommitteeIdFilingsFilerTypeEnum;
import org.openapis.openapi.models.operations.GetCommitteeCommitteeIdFilingsOfficeEnum;
import org.openapis.openapi.models.operations.GetCommitteeCommitteeIdFilingsRequest;
import org.openapis.openapi.models.operations.GetCommitteeCommitteeIdFilingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus", "voluptates", "mollitia") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCommitteeCommitteeIdFilingsRequest req = new GetCommitteeCommitteeIdFilingsRequest("laborum", "libero") {{
                amendmentIndicator = new org.openapis.openapi.models.operations.GetCommitteeCommitteeIdFilingsAmendmentIndicatorEnum[]{{
                    add(GetCommitteeCommitteeIdFilingsAmendmentIndicatorEnum.T),
                    add(GetCommitteeCommitteeIdFilingsAmendmentIndicatorEnum.A),
                }};
                beginningImageNumber = new String[]{{
                    add("repellendus"),
                }};
                committeeType = "ex";
                cycle = new Integer[]{{
                    add(405373),
                    add(281153),
                    add(321043),
                    add(713927),
                }};
                district = new String[]{{
                    add("molestias"),
                }};
                documentType = new String[]{{
                    add("aliquid"),
                    add("beatae"),
                    add("voluptatum"),
                }};
                fileNumber = new Integer[]{{
                    add(85233),
                    add(703218),
                    add(665678),
                }};
                filerType = GetCommitteeCommitteeIdFilingsFilerTypeEnum.PAPER;
                formCategory = new String[]{{
                    add("sapiente"),
                }};
                formType = new String[]{{
                    add("architecto"),
                    add("fuga"),
                    add("pariatur"),
                    add("debitis"),
                }};
                isAmended = false;
                maxReceiptDate = LocalDate.parse("2022-12-31");
                minReceiptDate = LocalDate.parse("2021-02-15");
                mostRecent = false;
                office = new org.openapis.openapi.models.operations.GetCommitteeCommitteeIdFilingsOfficeEnum[]{{
                    add(GetCommitteeCommitteeIdFilingsOfficeEnum.P),
                    add(GetCommitteeCommitteeIdFilingsOfficeEnum.S),
                }};
                page = 796320;
                party = new String[]{{
                    add("asperiores"),
                    add("ratione"),
                }};
                perPage = 355225;
                primaryGeneralIndicator = new String[]{{
                    add("illum"),
                }};
                qFiler = new String[]{{
                    add("impedit"),
                    add("quibusdam"),
                    add("nam"),
                }};
                reportType = new String[]{{
                    add("culpa"),
                    add("dolor"),
                }};
                reportYear = new Integer[]{{
                    add(80532),
                    add(537279),
                }};
                requestType = new String[]{{
                    add("tempora"),
                }};
                sort = new String[]{{
                    add("consequatur"),
                }};
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
                state = new String[]{{
                    add("sit"),
                }};
            }};            

            GetCommitteeCommitteeIdFilingsResponse res = sdk.filings.getCommitteeCommitteeIdFilings(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFilings


All official records and reports filed by or delivered to the FEC.

Note: because the filings data includes many records, counts for large
result sets are approximate; you will want to page through the records until no records are returned.


### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFilingsAmendmentIndicatorEnum;
import org.openapis.openapi.models.operations.GetFilingsFilerTypeEnum;
import org.openapis.openapi.models.operations.GetFilingsOfficeEnum;
import org.openapis.openapi.models.operations.GetFilingsRequest;
import org.openapis.openapi.models.operations.GetFilingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi", "fugit", "ab") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFilingsRequest req = new GetFilingsRequest("laudantium") {{
                amendmentIndicator = new org.openapis.openapi.models.operations.GetFilingsAmendmentIndicatorEnum[]{{
                    add(GetFilingsAmendmentIndicatorEnum.N),
                }};
                beginningImageNumber = new String[]{{
                    add("ipsam"),
                    add("consequuntur"),
                    add("ipsa"),
                    add("quas"),
                }};
                candidateId = new String[]{{
                    add("impedit"),
                    add("officiis"),
                    add("esse"),
                    add("necessitatibus"),
                }};
                committeeId = new String[]{{
                    add("veniam"),
                }};
                committeeType = "nesciunt";
                cycle = new Integer[]{{
                    add(432984),
                    add(426943),
                    add(528234),
                }};
                district = new String[]{{
                    add("exercitationem"),
                    add("ab"),
                }};
                documentType = new String[]{{
                    add("autem"),
                    add("nobis"),
                    add("laboriosam"),
                    add("recusandae"),
                }};
                fileNumber = new Integer[]{{
                    add(28952),
                }};
                filerType = GetFilingsFilerTypeEnum.E_FILE;
                formCategory = new String[]{{
                    add("quasi"),
                    add("nisi"),
                    add("at"),
                    add("vero"),
                }};
                formType = new String[]{{
                    add("harum"),
                    add("sequi"),
                    add("doloribus"),
                }};
                isAmended = false;
                maxReceiptDate = LocalDate.parse("2020-09-21");
                minReceiptDate = LocalDate.parse("2022-04-09");
                mostRecent = false;
                office = new org.openapis.openapi.models.operations.GetFilingsOfficeEnum[]{{
                    add(GetFilingsOfficeEnum.S),
                    add(GetFilingsOfficeEnum.S),
                }};
                page = 376389;
                party = new String[]{{
                    add("nemo"),
                    add("quos"),
                }};
                perPage = 260904;
                primaryGeneralIndicator = new String[]{{
                    add("ducimus"),
                }};
                qFiler = new String[]{{
                    add("fuga"),
                }};
                reportType = new String[]{{
                    add("incidunt"),
                    add("quasi"),
                    add("rem"),
                }};
                reportYear = new Integer[]{{
                    add(117380),
                    add(395544),
                    add(159845),
                    add(233078),
                }};
                requestType = new String[]{{
                    add("cupiditate"),
                }};
                sort = new String[]{{
                    add("soluta"),
                    add("alias"),
                    add("omnis"),
                    add("eos"),
                }};
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
                state = new String[]{{
                    add("iste"),
                    add("magni"),
                    add("inventore"),
                }};
            }};            

            GetFilingsResponse res = sdk.filings.getFilings(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOperationsLog


The Operations log contains details of each report loaded into the database. It is primarily
used as status check to determine when all of the data processes, from initial entry through
review are complete.


### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOperationsLogRequest;
import org.openapis.openapi.models.operations.GetOperationsLogResponse;
import org.openapis.openapi.models.operations.GetOperationsLogStatusNumEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga", "accusamus", "voluptatibus") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOperationsLogRequest req = new GetOperationsLogRequest("distinctio") {{
                amendmentIndicator = new String[]{{
                    add("delectus"),
                    add("minima"),
                    add("praesentium"),
                }};
                beginningImageNumber = new String[]{{
                    add("magnam"),
                    add("temporibus"),
                    add("quos"),
                    add("commodi"),
                }};
                candidateCommitteeId = new String[]{{
                    add("commodi"),
                    add("totam"),
                    add("earum"),
                    add("modi"),
                }};
                formType = new String[]{{
                    add("vero"),
                    add("voluptatem"),
                    add("ipsam"),
                }};
                maxCoverageEndDate = LocalDate.parse("2022-12-31");
                maxReceiptDate = LocalDate.parse("2022-10-02");
                maxTransactionDataCompleteDate = LocalDate.parse("2022-01-17");
                minCoverageEndDate = LocalDate.parse("2021-04-14");
                minReceiptDate = LocalDate.parse("2022-01-31");
                minTransactionDataCompleteDate = LocalDate.parse("2022-07-22");
                page = 667715;
                perPage = 336102;
                reportType = new String[]{{
                    add("accusamus"),
                    add("impedit"),
                    add("hic"),
                }};
                reportYear = new Integer[]{{
                    add(991891),
                    add(404306),
                    add(376741),
                    add(895346),
                }};
                sort = new String[]{{
                    add("quae"),
                    add("minus"),
                    add("fuga"),
                    add("laborum"),
                }};
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
                statusNum = new org.openapis.openapi.models.operations.GetOperationsLogStatusNumEnum[]{{
                    add(GetOperationsLogStatusNumEnum.ZERO),
                }};
            }};            

            GetOperationsLogResponse res = sdk.filings.getOperationsLog(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
