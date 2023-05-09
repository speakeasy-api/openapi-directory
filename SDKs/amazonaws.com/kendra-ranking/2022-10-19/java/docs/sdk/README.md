# SDK

## Overview

Amazon Kendra Intelligent Ranking uses Amazon Kendra semantic search capabilities to intelligently re-rank a search service's results.

Amazon Web Services documentation
<https://docs.aws.amazon.com/kendra-ranking/>
### Available Operations

* [createRescoreExecutionPlan](#createrescoreexecutionplan) - <p>Creates a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. You set the number of capacity units that you require for Amazon Kendra Intelligent Ranking to rescore or re-rank a search service's results.</p> <p>For an example of using the <code>CreateRescoreExecutionPlan</code> API, including using the Python and Java SDKs, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/search-service-rerank.html">Semantically ranking a search service's results</a>.</p>
* [deleteRescoreExecutionPlan](#deleterescoreexecutionplan) - Deletes a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API.
* [describeRescoreExecutionPlan](#describerescoreexecutionplan) - Gets information about a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API.
* [listRescoreExecutionPlans](#listrescoreexecutionplans) - Lists your rescore execution plans. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API.
* [listTagsForResource](#listtagsforresource) - Gets a list of tags associated with a specified resource. A rescore execution plan is an example of a resource that can have tags associated with it.
* [rescore](#rescore) - Rescores or re-ranks search results from a search service such as OpenSearch (self managed). You use the semantic search capabilities of Amazon Kendra Intelligent Ranking to improve the search service's results.
* [tagResource](#tagresource) - Adds a specified tag to a specified rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. If the tag already exists, the existing value is replaced with the new value.
* [untagResource](#untagresource) - Removes a tag from a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> operation.
* [updateRescoreExecutionPlan](#updaterescoreexecutionplan) - Updates a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. You can update the number of capacity units you require for Amazon Kendra Intelligent Ranking to rescore or re-rank a search service's results.

## createRescoreExecutionPlan

<p>Creates a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. You set the number of capacity units that you require for Amazon Kendra Intelligent Ranking to rescore or re-rank a search service's results.</p> <p>For an example of using the <code>CreateRescoreExecutionPlan</code> API, including using the Python and Java SDKs, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/search-service-rerank.html">Semantically ranking a search service's results</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRescoreExecutionPlanRequest;
import org.openapis.openapi.models.operations.CreateRescoreExecutionPlanResponse;
import org.openapis.openapi.models.operations.CreateRescoreExecutionPlanXAmzTargetEnum;
import org.openapis.openapi.models.shared.CapacityUnitsConfiguration;
import org.openapis.openapi.models.shared.CreateRescoreExecutionPlanRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateRescoreExecutionPlanRequest req = new CreateRescoreExecutionPlanRequest(                new CreateRescoreExecutionPlanRequest("veritatis") {{
                                capacityUnits = new CapacityUnitsConfiguration(648172L);;
                                clientToken = "perferendis";
                                description = "ipsam";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("odit", "at") {{
                                        key = "sapiente";
                                        value = "quo";
                                    }}),
                                    add(new Tag("molestiae", "quod") {{
                                        key = "at";
                                        value = "maiores";
                                    }}),
                                    add(new Tag("totam", "porro") {{
                                        key = "quod";
                                        value = "esse";
                                    }}),
                                    add(new Tag("nam", "officia") {{
                                        key = "dolorum";
                                        value = "dicta";
                                    }}),
                                }};
                            }};, CreateRescoreExecutionPlanXAmzTargetEnum.AWS_KENDRA_RERANKING_FRONTEND_SERVICE_CREATE_RESCORE_EXECUTION_PLAN) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "deleniti";
                xAmzDate = "hic";
                xAmzSecurityToken = "optio";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "beatae";
            }};            

            CreateRescoreExecutionPlanResponse res = sdk.sdk.createRescoreExecutionPlan(req);

            if (res.createRescoreExecutionPlanResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRescoreExecutionPlan

Deletes a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRescoreExecutionPlanRequest;
import org.openapis.openapi.models.operations.DeleteRescoreExecutionPlanResponse;
import org.openapis.openapi.models.operations.DeleteRescoreExecutionPlanXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteRescoreExecutionPlanRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRescoreExecutionPlanRequest req = new DeleteRescoreExecutionPlanRequest(                new DeleteRescoreExecutionPlanRequest("molestiae");, DeleteRescoreExecutionPlanXAmzTargetEnum.AWS_KENDRA_RERANKING_FRONTEND_SERVICE_DELETE_RESCORE_EXECUTION_PLAN) {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "qui";
                xAmzCredential = "impedit";
                xAmzDate = "cum";
                xAmzSecurityToken = "esse";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "excepturi";
            }};            

            DeleteRescoreExecutionPlanResponse res = sdk.sdk.deleteRescoreExecutionPlan(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeRescoreExecutionPlan

Gets information about a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeRescoreExecutionPlanRequest;
import org.openapis.openapi.models.operations.DescribeRescoreExecutionPlanResponse;
import org.openapis.openapi.models.operations.DescribeRescoreExecutionPlanXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeRescoreExecutionPlanRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeRescoreExecutionPlanRequest req = new DescribeRescoreExecutionPlanRequest(                new DescribeRescoreExecutionPlanRequest("perferendis");, DescribeRescoreExecutionPlanXAmzTargetEnum.AWS_KENDRA_RERANKING_FRONTEND_SERVICE_DESCRIBE_RESCORE_EXECUTION_PLAN) {{
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "natus";
                xAmzCredential = "sed";
                xAmzDate = "iste";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "laboriosam";
            }};            

            DescribeRescoreExecutionPlanResponse res = sdk.sdk.describeRescoreExecutionPlan(req);

            if (res.describeRescoreExecutionPlanResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRescoreExecutionPlans

Lists your rescore execution plans. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRescoreExecutionPlansRequest;
import org.openapis.openapi.models.operations.ListRescoreExecutionPlansResponse;
import org.openapis.openapi.models.operations.ListRescoreExecutionPlansXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListRescoreExecutionPlansRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRescoreExecutionPlansRequest req = new ListRescoreExecutionPlansRequest(                new ListRescoreExecutionPlansRequest() {{
                                maxResults = 902599L;
                                nextToken = "fuga";
                            }};, ListRescoreExecutionPlansXAmzTargetEnum.AWS_KENDRA_RERANKING_FRONTEND_SERVICE_LIST_RESCORE_EXECUTION_PLANS) {{
                maxResults = "in";
                nextToken = "corporis";
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "iure";
                xAmzCredential = "saepe";
                xAmzDate = "quidem";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "reiciendis";
            }};            

            ListRescoreExecutionPlansResponse res = sdk.sdk.listRescoreExecutionPlans(req);

            if (res.listRescoreExecutionPlansResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Gets a list of tags associated with a specified resource. A rescore execution plan is an example of a resource that can have tags associated with it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("mollitia");, ListTagsForResourceXAmzTargetEnum.AWS_KENDRA_RERANKING_FRONTEND_SERVICE_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "dolorem";
                xAmzDate = "corporis";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "enim";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## rescore

Rescores or re-ranks search results from a search service such as OpenSearch (self managed). You use the semantic search capabilities of Amazon Kendra Intelligent Ranking to improve the search service's results.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RescoreRequest;
import org.openapis.openapi.models.operations.RescoreResponse;
import org.openapis.openapi.models.operations.RescoreXAmzTargetEnum;
import org.openapis.openapi.models.shared.Document;
import org.openapis.openapi.models.shared.RescoreRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RescoreRequest req = new RescoreRequest(                new RescoreRequest(                new org.openapis.openapi.models.shared.Document[]{{
                                                add(new Document("vero", 4686.51) {{
                                                    body = "minima";
                                                    groupId = "excepturi";
                                                    id = "07aff1a3-a2fa-4946-b739-251aa52c3f5a";
                                                    originalScore = 8209.94;
                                                    title = "Mr.";
                                                    tokenizedBody = new String[]{{
                                                        add("error"),
                                                    }};
                                                    tokenizedTitle = new String[]{{
                                                        add("laborum"),
                                                        add("quasi"),
                                                        add("reiciendis"),
                                                        add("voluptatibus"),
                                                    }};
                                                }}),
                                                add(new Document("labore", 2647.3) {{
                                                    body = "praesentium";
                                                    groupId = "voluptatibus";
                                                    id = "097b0074-f154-471b-9e6e-13b99d488e1e";
                                                    originalScore = 5759.47;
                                                    title = "Mr.";
                                                    tokenizedBody = new String[]{{
                                                        add("incidunt"),
                                                        add("enim"),
                                                        add("consequatur"),
                                                        add("est"),
                                                    }};
                                                    tokenizedTitle = new String[]{{
                                                        add("explicabo"),
                                                        add("deserunt"),
                                                        add("distinctio"),
                                                        add("quibusdam"),
                                                    }};
                                                }}),
                                            }}, "qui", "aliquid");, RescoreXAmzTargetEnum.AWS_KENDRA_RERANKING_FRONTEND_SERVICE_RESCORE) {{
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "quos";
                xAmzCredential = "perferendis";
                xAmzDate = "magni";
                xAmzSecurityToken = "assumenda";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "alias";
            }};            

            RescoreResponse res = sdk.sdk.rescore(req);

            if (res.rescoreResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds a specified tag to a specified rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. If the tag already exists, the existing value is replaced with the new value.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("dolorum",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("tempore", "labore") {{
                                                    key = "tempora";
                                                    value = "facilis";
                                                }}),
                                                add(new Tag("non", "eligendi") {{
                                                    key = "delectus";
                                                    value = "eum";
                                                }}),
                                                add(new Tag("provident", "necessitatibus") {{
                                                    key = "sint";
                                                    value = "aliquid";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.AWS_KENDRA_RERANKING_FRONTEND_SERVICE_TAG_RESOURCE) {{
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "officia";
                xAmzCredential = "dolor";
                xAmzDate = "debitis";
                xAmzSecurityToken = "a";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "in";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes a tag from a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("illum",                 new String[]{{
                                                add("rerum"),
                                                add("dicta"),
                                                add("magnam"),
                                                add("cumque"),
                                            }});, UntagResourceXAmzTargetEnum.AWS_KENDRA_RERANKING_FRONTEND_SERVICE_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "facere";
                xAmzContentSha256 = "ea";
                xAmzCredential = "aliquid";
                xAmzDate = "laborum";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "non";
                xAmzSignedHeaders = "occaecati";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRescoreExecutionPlan

Updates a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. You can update the number of capacity units you require for Amazon Kendra Intelligent Ranking to rescore or re-rank a search service's results.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRescoreExecutionPlanRequest;
import org.openapis.openapi.models.operations.UpdateRescoreExecutionPlanResponse;
import org.openapis.openapi.models.operations.UpdateRescoreExecutionPlanXAmzTargetEnum;
import org.openapis.openapi.models.shared.CapacityUnitsConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateRescoreExecutionPlanRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateRescoreExecutionPlanRequest req = new UpdateRescoreExecutionPlanRequest(                new UpdateRescoreExecutionPlanRequest("accusamus") {{
                                capacityUnits = new CapacityUnitsConfiguration(965417L);;
                                description = "quidem";
                                name = "Marco Olson";
                            }};, UpdateRescoreExecutionPlanXAmzTargetEnum.AWS_KENDRA_RERANKING_FRONTEND_SERVICE_UPDATE_RESCORE_EXECUTION_PLAN) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "amet";
                xAmzCredential = "deserunt";
                xAmzDate = "nisi";
                xAmzSecurityToken = "vel";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "omnis";
            }};            

            UpdateRescoreExecutionPlanResponse res = sdk.sdk.updateRescoreExecutionPlan(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
