# legal

## Overview

Explore relevant statutes, regulations and Commission actions.

### Available Operations

* [getLegalSearch](#getlegalsearch) - 
Search legal documents by document type, or across all document types using keywords, parameter values and ranges.


## getLegalSearch


Search legal documents by document type, or across all document types using keywords, parameter values and ranges.


### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLegalSearchAoCategoryEnum;
import org.openapis.openapi.models.operations.GetLegalSearchAoRequestorTypeEnum;
import org.openapis.openapi.models.operations.GetLegalSearchCaseDocCategoryIDEnum;
import org.openapis.openapi.models.operations.GetLegalSearchMurTypeEnum;
import org.openapis.openapi.models.operations.GetLegalSearchRequest;
import org.openapis.openapi.models.operations.GetLegalSearchResponse;
import org.openapis.openapi.models.operations.GetLegalSearchTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti", "illo", "labore") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLegalSearchRequest req = new GetLegalSearchRequest("assumenda") {{
                afCommitteeId = "aliquam";
                afFdFineAmount = 790463;
                afMaxFdDate = LocalDate.parse("2021-12-21");
                afMaxRtbDate = LocalDate.parse("2022-12-21");
                afMinFdDate = LocalDate.parse("2022-08-04");
                afMinRtbDate = LocalDate.parse("2021-07-30");
                afName = new String[]{{
                    add("provident"),
                    add("repudiandae"),
                    add("rerum"),
                }};
                afReportYear = "dignissimos";
                afRtbFineAmount = 360934;
                aoCategory = new org.openapis.openapi.models.operations.GetLegalSearchAoCategoryEnum[]{{
                    add(GetLegalSearchAoCategoryEnum.W),
                    add(GetLegalSearchAoCategoryEnum.C),
                    add(GetLegalSearchAoCategoryEnum.R),
                    add(GetLegalSearchAoCategoryEnum.V),
                }};
                aoCitationRequireAll = false;
                aoEntityName = new String[]{{
                    add("impedit"),
                    add("commodi"),
                }};
                aoIsPending = false;
                aoMaxIssueDate = LocalDate.parse("2022-12-20");
                aoMaxRequestDate = LocalDate.parse("2022-12-09");
                aoMinIssueDate = LocalDate.parse("2022-02-24");
                aoMinRequestDate = LocalDate.parse("2021-08-11");
                aoName = new String[]{{
                    add("amet"),
                    add("quasi"),
                    add("dicta"),
                }};
                aoNo = new String[]{{
                    add("doloremque"),
                    add("earum"),
                    add("iusto"),
                }};
                aoRegulatoryCitation = new String[]{{
                    add("provident"),
                }};
                aoRequestor = "dolorum";
                aoRequestorType = new org.openapis.openapi.models.operations.GetLegalSearchAoRequestorTypeEnum[]{{
                    add(GetLegalSearchAoRequestorTypeEnum.TEN),
                    add(GetLegalSearchAoRequestorTypeEnum.FIFTEEN),
                    add(GetLegalSearchAoRequestorTypeEnum.ONE),
                    add(GetLegalSearchAoRequestorTypeEnum.SIX),
                }};
                aoStatus = "molestiae";
                aoStatutoryCitation = new String[]{{
                    add("facilis"),
                    add("corrupti"),
                    add("aperiam"),
                    add("sint"),
                }};
                caseCitationRequireAll = false;
                caseDispositions = new String[]{{
                    add("eos"),
                    add("totam"),
                    add("dicta"),
                    add("voluptatem"),
                }};
                caseDocCategoryId = new org.openapis.openapi.models.operations.GetLegalSearchCaseDocCategoryIDEnum[]{{
                    add(GetLegalSearchCaseDocCategoryIDEnum.THREE),
                }};
                caseElectionCycles = 124289;
                caseMaxCloseDate = LocalDate.parse("2022-05-01");
                caseMaxOpenDate = LocalDate.parse("2021-12-02");
                caseMinCloseDate = LocalDate.parse("2022-02-18");
                caseMinOpenDate = LocalDate.parse("2022-03-16");
                caseNo = new String[]{{
                    add("voluptatem"),
                    add("perferendis"),
                }};
                caseRegulatoryCitation = new String[]{{
                    add("ea"),
                    add("aperiam"),
                    add("dignissimos"),
                }};
                caseRespondents = "repellat";
                caseStatutoryCitation = new String[]{{
                    add("porro"),
                }};
                fromHit = 588639;
                hitsReturned = 231382;
                murType = GetLegalSearchMurTypeEnum.CURRENT;
                q = "dignissimos";
                sort = "consectetur";
                type = GetLegalSearchTypeEnum.REGULATIONS;
            }};            

            GetLegalSearchResponse res = sdk.legal.getLegalSearch(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
