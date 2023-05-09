# search

## Overview

Search for candidates, committees by name.

### Available Operations

* [getNamesCandidates](#getnamescandidates) - 
Search for candidates or committees by name. If you're looking for information on a
particular person or group, using a name to find the `candidate_id` or `committee_id` on
this endpoint can be a helpful first step.

* [getNamesCommittees](#getnamescommittees) - 
Search for candidates or committees by name. If you're looking for information on a
particular person or group, using a name to find the `candidate_id` or `committee_id` on
this endpoint can be a helpful first step.


## getNamesCandidates


Search for candidates or committees by name. If you're looking for information on a
particular person or group, using a name to find the `candidate_id` or `committee_id` on
this endpoint can be a helpful first step.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNamesCandidatesRequest;
import org.openapis.openapi.models.operations.GetNamesCandidatesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat", "a", "animi") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNamesCandidatesRequest req = new GetNamesCandidatesRequest("maiores",                 new String[]{{
                                add("nulla"),
                                add("deserunt"),
                                add("corporis"),
                                add("velit"),
                            }});            

            GetNamesCandidatesResponse res = sdk.search.getNamesCandidates(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNamesCommittees


Search for candidates or committees by name. If you're looking for information on a
particular person or group, using a name to find the `candidate_id` or `committee_id` on
this endpoint can be a helpful first step.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNamesCommitteesRequest;
import org.openapis.openapi.models.operations.GetNamesCommitteesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis", "enim", "officia") {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNamesCommitteesRequest req = new GetNamesCommitteesRequest("saepe",                 new String[]{{
                                add("repudiandae"),
                                add("accusantium"),
                            }});            

            GetNamesCommitteesResponse res = sdk.search.getNamesCommittees(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
