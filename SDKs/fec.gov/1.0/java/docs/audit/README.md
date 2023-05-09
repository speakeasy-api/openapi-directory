# audit

## Overview

The agency’s monitoring process may detect potential violations through a review of a committee’s reports or through a Commission audit. By law, all enforcement cases must remain confidential until they’re closed. 

 The Commission is required by law to audit Presidential campaigns that accept public funds. In addition, the Commission audits a committee when it appears not to have met the threshold requirements for substantial compliance with the Federal Election Campaign Act. The audit determines whether the committee complied with limitations, prohibitions and disclosure requirements. 

 These endpoints contain Final Audit Reports approved by the Commission since inception.

### Available Operations

* [getAuditCase](#getauditcase) - 
This endpoint contains Final Audit Reports approved by the Commission since inception.
The search can be based on information about the audited committee (Name, FEC ID Number, Type, 
Election Cycle) or the issues covered in the report.

* [getAuditCategory](#getauditcategory) - 
This lists the options for the categories and subcategories available in the /audit-search/ endpoint.

* [getAuditPrimaryCategory](#getauditprimarycategory) - 
This lists the options for the primary categories available in the /audit-search/ endpoint.

* [getNamesAuditCandidates](#getnamesauditcandidates) - 
Search for candidates or committees by name. If you're looking for information on a
particular person or group, using a name to find the `candidate_id` or `committee_id` on
this endpoint can be a helpful first step.

* [getNamesAuditCommittees](#getnamesauditcommittees) - 
Search for candidates or committees by name. If you're looking for information on a
particular person or group, using a name to find the `candidate_id` or `committee_id` on
this endpoint can be a helpful first step.


## getAuditCase


This endpoint contains Final Audit Reports approved by the Commission since inception.
The search can be based on information about the audited committee (Name, FEC ID Number, Type, 
Election Cycle) or the issues covered in the report.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAuditCaseRequest;
import org.openapis.openapi.models.operations.GetAuditCaseResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores", "molestiae", "quod") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAuditCaseRequest req = new GetAuditCaseRequest("quod") {{
                auditCaseId = new String[]{{
                    add("totam"),
                    add("porro"),
                }};
                auditId = new Integer[]{{
                    add(118274),
                    add(720633),
                    add(639921),
                }};
                candidateId = new String[]{{
                    add("fugit"),
                    add("deleniti"),
                    add("hic"),
                }};
                committeeDesignation = "optio";
                committeeId = new String[]{{
                    add("beatae"),
                    add("commodi"),
                    add("molestiae"),
                }};
                committeeType = new String[]{{
                    add("qui"),
                    add("impedit"),
                }};
                cycle = new Integer[]{{
                    add(456150),
                    add(216550),
                    add(568434),
                }};
                maxElectionCycle = 135218;
                minElectionCycle = 18789;
                page = 324141;
                perPage = 617636;
                primaryCategoryId = "sed";
                q = new String[]{{
                    add("dolor"),
                    add("natus"),
                    add("laboriosam"),
                }};
                qq = new String[]{{
                    add("saepe"),
                    add("fuga"),
                    add("in"),
                    add("corporis"),
                }};
                sort = new String[]{{
                    add("iure"),
                    add("saepe"),
                    add("quidem"),
                }};
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
                subCategoryId = "architecto";
            }};            

            GetAuditCaseResponse res = sdk.audit.getAuditCase(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAuditCategory


This lists the options for the categories and subcategories available in the /audit-search/ endpoint.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAuditCategoryRequest;
import org.openapis.openapi.models.operations.GetAuditCategoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa", "reiciendis", "est") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAuditCategoryRequest req = new GetAuditCategoryRequest("mollitia") {{
                page = 670638;
                perPage = 170909;
                primaryCategoryId = new String[]{{
                    add("corporis"),
                }};
                primaryCategoryName = new String[]{{
                    add("nobis"),
                }};
                sort = "enim";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetAuditCategoryResponse res = sdk.audit.getAuditCategory(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAuditPrimaryCategory


This lists the options for the primary categories available in the /audit-search/ endpoint.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAuditPrimaryCategoryRequest;
import org.openapis.openapi.models.operations.GetAuditPrimaryCategoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis", "nemo", "minima") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAuditPrimaryCategoryRequest req = new GetAuditPrimaryCategoryRequest("excepturi") {{
                page = 38425;
                perPage = 438601;
                primaryCategoryId = new String[]{{
                    add("doloribus"),
                    add("sapiente"),
                    add("architecto"),
                }};
                primaryCategoryName = new String[]{{
                    add("dolorem"),
                    add("culpa"),
                    add("consequuntur"),
                }};
                sort = "repellat";
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
            }};            

            GetAuditPrimaryCategoryResponse res = sdk.audit.getAuditPrimaryCategory(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNamesAuditCandidates


Search for candidates or committees by name. If you're looking for information on a
particular person or group, using a name to find the `candidate_id` or `committee_id` on
this endpoint can be a helpful first step.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNamesAuditCandidatesRequest;
import org.openapis.openapi.models.operations.GetNamesAuditCandidatesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia", "occaecati", "numquam") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNamesAuditCandidatesRequest req = new GetNamesAuditCandidatesRequest("commodi",                 new String[]{{
                                add("molestiae"),
                                add("velit"),
                            }});            

            GetNamesAuditCandidatesResponse res = sdk.audit.getNamesAuditCandidates(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNamesAuditCommittees


Search for candidates or committees by name. If you're looking for information on a
particular person or group, using a name to find the `candidate_id` or `committee_id` on
this endpoint can be a helpful first step.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNamesAuditCommitteesRequest;
import org.openapis.openapi.models.operations.GetNamesAuditCommitteesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error", "quia", "quis") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNamesAuditCommitteesRequest req = new GetNamesAuditCommitteesRequest("vitae",                 new String[]{{
                                add("animi"),
                                add("enim"),
                                add("odit"),
                            }});            

            GetNamesAuditCommitteesResponse res = sdk.audit.getNamesAuditCommittees(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
