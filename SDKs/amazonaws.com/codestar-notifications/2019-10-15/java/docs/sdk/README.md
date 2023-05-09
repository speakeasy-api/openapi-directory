# SDK

## Overview

<p>This AWS CodeStar Notifications API Reference provides descriptions and usage examples of the operations and data types for the AWS CodeStar Notifications API. You can use the AWS CodeStar Notifications API to work with the following objects:</p> <p>Notification rules, by calling the following: </p> <ul> <li> <p> <a>CreateNotificationRule</a>, which creates a notification rule for a resource in your account. </p> </li> <li> <p> <a>DeleteNotificationRule</a>, which deletes a notification rule. </p> </li> <li> <p> <a>DescribeNotificationRule</a>, which provides information about a notification rule. </p> </li> <li> <p> <a>ListNotificationRules</a>, which lists the notification rules associated with your account. </p> </li> <li> <p> <a>UpdateNotificationRule</a>, which changes the name, events, or targets associated with a notification rule. </p> </li> <li> <p> <a>Subscribe</a>, which subscribes a target to a notification rule. </p> </li> <li> <p> <a>Unsubscribe</a>, which removes a target from a notification rule. </p> </li> </ul> <p>Targets, by calling the following: </p> <ul> <li> <p> <a>DeleteTarget</a>, which removes a notification rule target from a notification rule. </p> </li> <li> <p> <a>ListTargets</a>, which lists the targets associated with a notification rule. </p> </li> </ul> <p>Events, by calling the following: </p> <ul> <li> <p> <a>ListEventTypes</a>, which lists the event types you can include in a notification rule. </p> </li> </ul> <p>Tags, by calling the following: </p> <ul> <li> <p> <a>ListTagsForResource</a>, which lists the tags already associated with a notification rule in your account. </p> </li> <li> <p> <a>TagResource</a>, which associates a tag you provide with a notification rule in your account. </p> </li> <li> <p> <a>UntagResource</a>, which removes a tag from a notification rule in your account. </p> </li> </ul> <p> For information about how to use AWS CodeStar Notifications, see the <a href="https://docs.aws.amazon.com/dtconsole/latest/userguide/what-is-dtconsole.html">Amazon Web Services Developer Tools Console User Guide</a>. </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/codestar-notifications/>
### Available Operations

* [createNotificationRule](#createnotificationrule) - Creates a notification rule for a resource. The rule specifies the events you want notifications about and the targets (such as Chatbot topics or Chatbot clients configured for Slack) where you want to receive them.
* [deleteNotificationRule](#deletenotificationrule) - Deletes a notification rule for a resource.
* [deleteTarget](#deletetarget) - Deletes a specified target for notifications.
* [describeNotificationRule](#describenotificationrule) - Returns information about a specified notification rule.
* [listEventTypes](#listeventtypes) - Returns information about the event types available for configuring notifications.
* [listNotificationRules](#listnotificationrules) - Returns a list of the notification rules for an Amazon Web Services account.
* [listTagsForResource](#listtagsforresource) - Returns a list of the tags associated with a notification rule.
* [listTargets](#listtargets) - Returns a list of the notification rule targets for an Amazon Web Services account.
* [subscribe](#subscribe) - Creates an association between a notification rule and an Chatbot topic or Chatbot client so that the associated target can receive notifications when the events described in the rule are triggered.
* [tagResource](#tagresource) - Associates a set of provided tags with a notification rule.
* [unsubscribe](#unsubscribe) - Removes an association between a notification rule and an Chatbot topic so that subscribers to that topic stop receiving notifications when the events described in the rule are triggered.
* [untagResource](#untagresource) - Removes the association between one or more provided tags and a notification rule.
* [updateNotificationRule](#updatenotificationrule) - <p>Updates a notification rule for a resource. You can change the events that trigger the notification rule, the status of the rule, and the targets that receive the notifications.</p> <note> <p>To add or remove tags for a notification rule, you must use <a>TagResource</a> and <a>UntagResource</a>.</p> </note>

## createNotificationRule

Creates a notification rule for a resource. The rule specifies the events you want notifications about and the targets (such as Chatbot topics or Chatbot clients configured for Slack) where you want to receive them.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNotificationRuleRequest;
import org.openapis.openapi.models.operations.CreateNotificationRuleRequestBody;
import org.openapis.openapi.models.operations.CreateNotificationRuleRequestBodyDetailTypeEnum;
import org.openapis.openapi.models.operations.CreateNotificationRuleRequestBodyStatusEnum;
import org.openapis.openapi.models.operations.CreateNotificationRuleResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Target;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNotificationRuleRequest req = new CreateNotificationRuleRequest(                new CreateNotificationRuleRequestBody(CreateNotificationRuleRequestBodyDetailTypeEnum.FULL,                 new String[]{{
                                                add("ab"),
                                                add("quis"),
                                                add("veritatis"),
                                                add("deserunt"),
                                            }}, "perferendis", "ipsam",                 new org.openapis.openapi.models.shared.Target[]{{
                                                add(new Target() {{
                                                    targetAddress = "sapiente";
                                                    targetType = "quo";
                                                }}),
                                                add(new Target() {{
                                                    targetAddress = "odit";
                                                    targetType = "at";
                                                }}),
                                                add(new Target() {{
                                                    targetAddress = "at";
                                                    targetType = "maiores";
                                                }}),
                                                add(new Target() {{
                                                    targetAddress = "molestiae";
                                                    targetType = "quod";
                                                }}),
                                            }}) {{
                                clientRequestToken = "quod";
                                status = CreateNotificationRuleRequestBodyStatusEnum.ENABLED;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("porro", "dolorum");
                                    put("dicta", "nam");
                                    put("officia", "occaecati");
                                }};
                            }};) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "hic";
                xAmzDate = "optio";
                xAmzSecurityToken = "totam";
                xAmzSignature = "beatae";
                xAmzSignedHeaders = "commodi";
            }};            

            CreateNotificationRuleResponse res = sdk.sdk.createNotificationRule(req);

            if (res.createNotificationRuleResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNotificationRule

Deletes a notification rule for a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNotificationRuleRequest;
import org.openapis.openapi.models.operations.DeleteNotificationRuleRequestBody;
import org.openapis.openapi.models.operations.DeleteNotificationRuleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNotificationRuleRequest req = new DeleteNotificationRuleRequest(                new DeleteNotificationRuleRequestBody("modi");) {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "cum";
                xAmzDate = "esse";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "aspernatur";
            }};            

            DeleteNotificationRuleResponse res = sdk.sdk.deleteNotificationRule(req);

            if (res.deleteNotificationRuleResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTarget

Deletes a specified target for notifications.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTargetRequest;
import org.openapis.openapi.models.operations.DeleteTargetRequestBody;
import org.openapis.openapi.models.operations.DeleteTargetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteTargetRequest req = new DeleteTargetRequest(                new DeleteTargetRequestBody("ad") {{
                                forceUnsubscribeAll = false;
                            }};) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "sed";
                xAmzCredential = "iste";
                xAmzDate = "dolor";
                xAmzSecurityToken = "natus";
                xAmzSignature = "laboriosam";
                xAmzSignedHeaders = "hic";
            }};            

            DeleteTargetResponse res = sdk.sdk.deleteTarget(req);

            if (res.deleteTargetResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeNotificationRule

Returns information about a specified notification rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeNotificationRuleRequest;
import org.openapis.openapi.models.operations.DescribeNotificationRuleRequestBody;
import org.openapis.openapi.models.operations.DescribeNotificationRuleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeNotificationRuleRequest req = new DescribeNotificationRuleRequest(                new DescribeNotificationRuleRequestBody("fuga");) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "iste";
                xAmzDate = "iure";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "architecto";
            }};            

            DescribeNotificationRuleResponse res = sdk.sdk.describeNotificationRule(req);

            if (res.describeNotificationRuleResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEventTypes

Returns information about the event types available for configuring notifications.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEventTypesRequest;
import org.openapis.openapi.models.operations.ListEventTypesRequestBody;
import org.openapis.openapi.models.operations.ListEventTypesResponse;
import org.openapis.openapi.models.shared.ListEventTypesFilter;
import org.openapis.openapi.models.shared.ListEventTypesFilterNameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEventTypesRequest req = new ListEventTypesRequest(                new ListEventTypesRequestBody() {{
                                filters = new org.openapis.openapi.models.shared.ListEventTypesFilter[]{{
                                    add(new ListEventTypesFilter(ListEventTypesFilterNameEnum.SERVICE_NAME, "dolores") {{
                                        name = ListEventTypesFilterNameEnum.SERVICE_NAME;
                                        value = "mollitia";
                                    }}),
                                    add(new ListEventTypesFilter(ListEventTypesFilterNameEnum.RESOURCE_TYPE, "nobis") {{
                                        name = ListEventTypesFilterNameEnum.RESOURCE_TYPE;
                                        value = "corporis";
                                    }}),
                                    add(new ListEventTypesFilter(ListEventTypesFilterNameEnum.RESOURCE_TYPE, "minima") {{
                                        name = ListEventTypesFilterNameEnum.RESOURCE_TYPE;
                                        value = "omnis";
                                    }}),
                                    add(new ListEventTypesFilter(ListEventTypesFilterNameEnum.RESOURCE_TYPE, "culpa") {{
                                        name = ListEventTypesFilterNameEnum.SERVICE_NAME;
                                        value = "accusantium";
                                    }}),
                                }};
                                maxResults = 988374L;
                                nextToken = "sapiente";
                            }};) {{
                maxResults = "architecto";
                nextToken = "mollitia";
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "consequuntur";
                xAmzDate = "repellat";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "numquam";
            }};            

            ListEventTypesResponse res = sdk.sdk.listEventTypes(req);

            if (res.listEventTypesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listNotificationRules

Returns a list of the notification rules for an Amazon Web Services account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListNotificationRulesRequest;
import org.openapis.openapi.models.operations.ListNotificationRulesRequestBody;
import org.openapis.openapi.models.operations.ListNotificationRulesResponse;
import org.openapis.openapi.models.shared.ListNotificationRulesFilter;
import org.openapis.openapi.models.shared.ListNotificationRulesFilterNameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListNotificationRulesRequest req = new ListNotificationRulesRequest(                new ListNotificationRulesRequestBody() {{
                                filters = new org.openapis.openapi.models.shared.ListNotificationRulesFilter[]{{
                                    add(new ListNotificationRulesFilter(ListNotificationRulesFilterNameEnum.RESOURCE, "quia") {{
                                        name = ListNotificationRulesFilterNameEnum.CREATED_BY;
                                        value = "velit";
                                    }}),
                                    add(new ListNotificationRulesFilter(ListNotificationRulesFilterNameEnum.RESOURCE, "animi") {{
                                        name = ListNotificationRulesFilterNameEnum.CREATED_BY;
                                        value = "vitae";
                                    }}),
                                }};
                                maxResults = 317202L;
                                nextToken = "odit";
                            }};) {{
                maxResults = "quo";
                nextToken = "sequi";
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "id";
                xAmzDate = "possimus";
                xAmzSecurityToken = "aut";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "error";
            }};            

            ListNotificationRulesResponse res = sdk.sdk.listNotificationRules(req);

            if (res.listNotificationRulesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Returns a list of the tags associated with a notification rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceRequestBody;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequestBody("laborum");) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "voluptatibus";
                xAmzDate = "vero";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTargets

Returns a list of the notification rule targets for an Amazon Web Services account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTargetsRequest;
import org.openapis.openapi.models.operations.ListTargetsRequestBody;
import org.openapis.openapi.models.operations.ListTargetsResponse;
import org.openapis.openapi.models.shared.ListTargetsFilter;
import org.openapis.openapi.models.shared.ListTargetsFilterNameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTargetsRequest req = new ListTargetsRequest(                new ListTargetsRequestBody() {{
                                filters = new org.openapis.openapi.models.shared.ListTargetsFilter[]{{
                                    add(new ListTargetsFilter(ListTargetsFilterNameEnum.TARGET_TYPE, "doloremque") {{
                                        name = ListTargetsFilterNameEnum.TARGET_ADDRESS;
                                        value = "cum";
                                    }}),
                                    add(new ListTargetsFilter(ListTargetsFilterNameEnum.TARGET_STATUS, "dicta") {{
                                        name = ListTargetsFilterNameEnum.TARGET_ADDRESS;
                                        value = "ut";
                                    }}),
                                    add(new ListTargetsFilter(ListTargetsFilterNameEnum.TARGET_ADDRESS, "dicta") {{
                                        name = ListTargetsFilterNameEnum.TARGET_ADDRESS;
                                        value = "dolore";
                                    }}),
                                }};
                                maxResults = 688661L;
                                nextToken = "enim";
                            }};) {{
                maxResults = "accusamus";
                nextToken = "commodi";
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "quae";
                xAmzCredential = "ipsum";
                xAmzDate = "quidem";
                xAmzSecurityToken = "molestias";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "pariatur";
            }};            

            ListTargetsResponse res = sdk.sdk.listTargets(req);

            if (res.listTargetsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## subscribe

Creates an association between a notification rule and an Chatbot topic or Chatbot client so that the associated target can receive notifications when the events described in the rule are triggered.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubscribeRequest;
import org.openapis.openapi.models.operations.SubscribeRequestBody;
import org.openapis.openapi.models.operations.SubscribeRequestBodyTarget;
import org.openapis.openapi.models.operations.SubscribeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SubscribeRequest req = new SubscribeRequest(                new SubscribeRequestBody("praesentium",                 new SubscribeRequestBodyTarget() {{
                                                targetAddress = "rem";
                                                targetType = "voluptates";
                                            }};) {{
                                clientRequestToken = "quasi";
                            }};) {{
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "sint";
                xAmzCredential = "veritatis";
                xAmzDate = "itaque";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "consequatur";
            }};            

            SubscribeResponse res = sdk.sdk.subscribe(req);

            if (res.subscribeResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Associates a set of provided tags with a notification rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody("quibusdam",                 new java.util.HashMap<String, String>() {{
                                                put("deserunt", "distinctio");
                                            }});) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "labore";
                xAmzCredential = "modi";
                xAmzDate = "qui";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "cupiditate";
                xAmzSignedHeaders = "quos";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unsubscribe

Removes an association between a notification rule and an Chatbot topic so that subscribers to that topic stop receiving notifications when the events described in the rule are triggered.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnsubscribeRequest;
import org.openapis.openapi.models.operations.UnsubscribeRequestBody;
import org.openapis.openapi.models.operations.UnsubscribeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UnsubscribeRequest req = new UnsubscribeRequest(                new UnsubscribeRequestBody("magni", "assumenda");) {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "alias";
                xAmzCredential = "fugit";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "facilis";
            }};            

            UnsubscribeResponse res = sdk.sdk.unsubscribe(req);

            if (res.unsubscribeResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes the association between one or more provided tags and a notification rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("labore",                 new String[]{{
                                add("eum"),
                                add("non"),
                                add("eligendi"),
                                add("sint"),
                            }}) {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "provident";
                xAmzCredential = "necessitatibus";
                xAmzDate = "sint";
                xAmzSecurityToken = "officia";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "debitis";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNotificationRule

<p>Updates a notification rule for a resource. You can change the events that trigger the notification rule, the status of the rule, and the targets that receive the notifications.</p> <note> <p>To add or remove tags for a notification rule, you must use <a>TagResource</a> and <a>UntagResource</a>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNotificationRuleRequest;
import org.openapis.openapi.models.operations.UpdateNotificationRuleRequestBody;
import org.openapis.openapi.models.operations.UpdateNotificationRuleRequestBodyDetailTypeEnum;
import org.openapis.openapi.models.operations.UpdateNotificationRuleRequestBodyStatusEnum;
import org.openapis.openapi.models.operations.UpdateNotificationRuleResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Target;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNotificationRuleRequest req = new UpdateNotificationRuleRequest(                new UpdateNotificationRuleRequestBody("dolorum") {{
                                detailType = UpdateNotificationRuleRequestBodyDetailTypeEnum.BASIC;
                                eventTypeIds = new String[]{{
                                    add("illum"),
                                    add("maiores"),
                                }};
                                name = "rerum";
                                status = UpdateNotificationRuleRequestBodyStatusEnum.ENABLED;
                                targets = new org.openapis.openapi.models.shared.Target[]{{
                                    add(new Target() {{
                                        targetAddress = "cumque";
                                        targetType = "facere";
                                    }}),
                                    add(new Target() {{
                                        targetAddress = "ea";
                                        targetType = "aliquid";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "non";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "enim";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "delectus";
            }};            

            UpdateNotificationRuleResponse res = sdk.sdk.updateNotificationRule(req);

            if (res.updateNotificationRuleResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
