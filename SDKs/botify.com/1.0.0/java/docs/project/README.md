# project

### Available Operations

* [getProjectAnalyses](#getprojectanalyses) - List all analyses for a project
* [getProjectUrlsAggs](#getprojecturlsaggs) - Project Query aggregator
* [getSavedFilter](#getsavedfilter) - Retrieves a specific saved filter's name, ID and filter value
* [getSavedFilters](#getsavedfilters) - List all the project's saved filters (each filter's name, ID and filter value)
* [testUrlRewritingRules](#testurlrewritingrules) - Match and replace parts of a URL based on rules passed in POST data

## getProjectAnalyses

List all analyses for a project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectAnalysesRequest;
import org.openapis.openapi.models.operations.GetProjectAnalysesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    djangoRestToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetProjectAnalysesRequest req = new GetProjectAnalysesRequest("natus", "nobis") {{
                page = 428769L;
                size = 878453L;
            }};            

            GetProjectAnalysesResponse res = sdk.project.getProjectAnalyses(req);

            if (res.getProjectAnalyses200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProjectUrlsAggs

Project Query aggregator. It accepts multiple queries that will be executed on all completed analyses in the project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectUrlsAggsAreaEnum;
import org.openapis.openapi.models.operations.GetProjectUrlsAggsRequest;
import org.openapis.openapi.models.operations.GetProjectUrlsAggsResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UrlsAggsQuery;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    djangoRestToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetProjectUrlsAggsRequest req = new GetProjectUrlsAggsRequest("architecto", "magnam") {{
                requestBody = new org.openapis.openapi.models.shared.UrlsAggsQuery[]{{
                    add(new UrlsAggsQuery() {{
                        aggs = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("provident", "quos");
                                put("sint", "accusantium");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("reiciendis", "mollitia");
                                put("ad", "eum");
                                put("dolor", "necessitatibus");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("nemo", "quasi");
                            }}),
                        }};
                        filters = new java.util.HashMap<String, Object>() {{
                            put("doloribus", "debitis");
                            put("eius", "maxime");
                        }};
                    }}),
                }};
                area = GetProjectUrlsAggsAreaEnum.DISAPPEARED;
                lastAnalysisSlug = "facilis";
                nbAnalyses = 447926;
            }};            

            GetProjectUrlsAggsResponse res = sdk.project.getProjectUrlsAggs(req);

            if (res.default_ != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSavedFilter

Retrieves a specific saved filter's name, ID and filter value

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSavedFilterRequest;
import org.openapis.openapi.models.operations.GetSavedFilterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    djangoRestToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSavedFilterRequest req = new GetSavedFilterRequest("architecto", "repudiandae", "ullam");            

            GetSavedFilterResponse res = sdk.project.getSavedFilter(req);

            if (res.projectSavedFilter != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSavedFilters

List all the project's saved filters (each filter's name, ID and filter value)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSavedFiltersRequest;
import org.openapis.openapi.models.operations.GetSavedFiltersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    djangoRestToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSavedFiltersRequest req = new GetSavedFiltersRequest("nihil", "repellat") {{
                page = 841140L;
                size = 149448L;
            }};            

            GetSavedFiltersResponse res = sdk.project.getSavedFilters(req);

            if (res.getSavedFilters200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testUrlRewritingRules

Match and replace parts of a URL based on rules passed in POST data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestUrlRewritingRulesRequest;
import org.openapis.openapi.models.operations.TestUrlRewritingRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    djangoRestToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            TestUrlRewritingRulesRequest req = new TestUrlRewritingRulesRequest("pariatur", "accusantium");            

            TestUrlRewritingRulesResponse res = sdk.project.testUrlRewritingRules(req);

            if (res.urlRewritingRulesSerializer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
