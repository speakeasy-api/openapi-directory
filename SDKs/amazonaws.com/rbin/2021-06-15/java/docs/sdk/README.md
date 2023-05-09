# SDK

## Overview

<p>This is the <i>Recycle Bin API Reference</i>. This documentation provides descriptions and syntax for each of the actions and data types in Recycle Bin.</p> <p>Recycle Bin is a resource recovery feature that enables you to restore accidentally deleted snapshots and EBS-backed AMIs. When using Recycle Bin, if your resources are deleted, they are retained in the Recycle Bin for a time period that you specify.</p> <p>You can restore a resource from the Recycle Bin at any time before its retention period expires. After you restore a resource from the Recycle Bin, the resource is removed from the Recycle Bin, and you can then use it in the same way you use any other resource of that type in your account. If the retention period expires and the resource is not restored, the resource is permanently deleted from the Recycle Bin and is no longer available for recovery. For more information about Recycle Bin, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-recycle-bin.html"> Recycle Bin</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/rbin/>
### Available Operations

* [createRule](#createrule) - Creates a Recycle Bin retention rule. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-create-rule"> Create Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
* [deleteRule](#deleterule) - Deletes a Recycle Bin retention rule. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-delete-rule"> Delete Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
* [getRule](#getrule) - Gets information about a Recycle Bin retention rule.
* [listRules](#listrules) - Lists the Recycle Bin retention rules in the Region.
* [listTagsForResource](#listtagsforresource) - Lists the tags assigned to a retention rule.
* [lockRule](#lockrule) - Locks a retention rule. A locked retention rule can't be modified or deleted.
* [tagResource](#tagresource) - Assigns tags to the specified retention rule.
* [unlockRule](#unlockrule) - Unlocks a retention rule. After a retention rule is unlocked, it can be modified or deleted only after the unlock delay period expires.
* [untagResource](#untagresource) - Unassigns a tag from a retention rule.
* [updateRule](#updaterule) - Updates an existing Recycle Bin retention rule. You can update a retention rule's description, resource tags, and retention period at any time after creation. You can't update a retention rule's resource type after creation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-update-rule"> Update Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.

## createRule

Creates a Recycle Bin retention rule. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-create-rule"> Create Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRuleRequest;
import org.openapis.openapi.models.operations.CreateRuleRequestBody;
import org.openapis.openapi.models.operations.CreateRuleRequestBodyLockConfiguration;
import org.openapis.openapi.models.operations.CreateRuleRequestBodyResourceTypeEnum;
import org.openapis.openapi.models.operations.CreateRuleRequestBodyRetentionPeriod;
import org.openapis.openapi.models.operations.CreateRuleResponse;
import org.openapis.openapi.models.shared.ResourceTag;
import org.openapis.openapi.models.shared.RetentionPeriodUnitEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.UnlockDelay;
import org.openapis.openapi.models.shared.UnlockDelayUnitEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateRuleRequest req = new CreateRuleRequest(                new CreateRuleRequestBody(CreateRuleRequestBodyResourceTypeEnum.EC2_IMAGE,                 new CreateRuleRequestBodyRetentionPeriod() {{
                                                retentionPeriodUnit = RetentionPeriodUnitEnum.DAYS;
                                                retentionPeriodValue = 778157L;
                                            }};) {{
                                description = "odit";
                                lockConfiguration = new CreateRuleRequestBodyLockConfiguration() {{
                                    unlockDelay = new UnlockDelay(UnlockDelayUnitEnum.DAYS, 870013L);;
                                }};;
                                resourceTags = new org.openapis.openapi.models.shared.ResourceTag[]{{
                                    add(new ResourceTag("quod") {{
                                        resourceTagKey = "maiores";
                                        resourceTagValue = "molestiae";
                                    }}),
                                    add(new ResourceTag("totam") {{
                                        resourceTagKey = "quod";
                                        resourceTagValue = "esse";
                                    }}),
                                    add(new ResourceTag("dicta") {{
                                        resourceTagKey = "porro";
                                        resourceTagValue = "dolorum";
                                    }}),
                                    add(new ResourceTag("occaecati") {{
                                        resourceTagKey = "nam";
                                        resourceTagValue = "officia";
                                    }}),
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("optio", "totam") {{
                                        key = "deleniti";
                                        value = "hic";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "beatae";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "molestiae";
                xAmzDate = "modi";
                xAmzSecurityToken = "qui";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "cum";
            }};            

            CreateRuleResponse res = sdk.sdk.createRule(req);

            if (res.createRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRule

Deletes a Recycle Bin retention rule. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-delete-rule"> Delete Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRuleRequest;
import org.openapis.openapi.models.operations.DeleteRuleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRuleRequest req = new DeleteRuleRequest("ipsum") {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "perferendis";
                xAmzDate = "ad";
                xAmzSecurityToken = "natus";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "iste";
            }};            

            DeleteRuleResponse res = sdk.sdk.deleteRule(req);

            if (res.deleteRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRule

Gets information about a Recycle Bin retention rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRuleRequest;
import org.openapis.openapi.models.operations.GetRuleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRuleRequest req = new GetRuleRequest("natus") {{
                xAmzAlgorithm = "laboriosam";
                xAmzContentSha256 = "hic";
                xAmzCredential = "saepe";
                xAmzDate = "fuga";
                xAmzSecurityToken = "in";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "iste";
            }};            

            GetRuleResponse res = sdk.sdk.getRule(req);

            if (res.getRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRules

Lists the Recycle Bin retention rules in the Region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRulesRequest;
import org.openapis.openapi.models.operations.ListRulesRequestBody;
import org.openapis.openapi.models.operations.ListRulesRequestBodyLockStateEnum;
import org.openapis.openapi.models.operations.ListRulesRequestBodyResourceTypeEnum;
import org.openapis.openapi.models.operations.ListRulesResponse;
import org.openapis.openapi.models.shared.ResourceTag;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRulesRequest req = new ListRulesRequest(                new ListRulesRequestBody(ListRulesRequestBodyResourceTypeEnum.EC2_IMAGE) {{
                                lockState = ListRulesRequestBodyLockStateEnum.UNLOCKED;
                                maxResults = 99280L;
                                nextToken = "ipsa";
                                resourceTags = new org.openapis.openapi.models.shared.ResourceTag[]{{
                                    add(new ResourceTag("laborum") {{
                                        resourceTagKey = "est";
                                        resourceTagValue = "mollitia";
                                    }}),
                                    add(new ResourceTag("corporis") {{
                                        resourceTagKey = "dolores";
                                        resourceTagValue = "dolorem";
                                    }}),
                                    add(new ResourceTag("enim") {{
                                        resourceTagKey = "explicabo";
                                        resourceTagValue = "nobis";
                                    }}),
                                    add(new ResourceTag("minima") {{
                                        resourceTagKey = "omnis";
                                        resourceTagValue = "nemo";
                                    }}),
                                }};
                            }};) {{
                maxResults = "excepturi";
                nextToken = "accusantium";
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "doloribus";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "dolorem";
            }};            

            ListRulesResponse res = sdk.sdk.listRules(req);

            if (res.listRulesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists the tags assigned to a retention rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("consequuntur") {{
                xAmzAlgorithm = "repellat";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "occaecati";
                xAmzDate = "numquam";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "quam";
                xAmzSignedHeaders = "molestiae";
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

## lockRule

Locks a retention rule. A locked retention rule can't be modified or deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LockRuleRequest;
import org.openapis.openapi.models.operations.LockRuleRequestBody;
import org.openapis.openapi.models.operations.LockRuleRequestBodyLockConfiguration;
import org.openapis.openapi.models.operations.LockRuleResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UnlockDelay;
import org.openapis.openapi.models.shared.UnlockDelayUnitEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            LockRuleRequest req = new LockRuleRequest(                new LockRuleRequestBody(                new LockRuleRequestBodyLockConfiguration() {{
                                                unlockDelay = new UnlockDelay(UnlockDelayUnitEnum.DAYS, 623510L);;
                                            }};);, "quia") {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "vitae";
                xAmzCredential = "laborum";
                xAmzDate = "animi";
                xAmzSecurityToken = "enim";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "quo";
            }};            

            LockRuleResponse res = sdk.sdk.lockRule(req);

            if (res.lockRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Assigns tags to the specified retention rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("possimus", "aut") {{
                                                    key = "ipsam";
                                                    value = "id";
                                                }}),
                                                add(new Tag("temporibus", "laborum") {{
                                                    key = "quasi";
                                                    value = "error";
                                                }}),
                                                add(new Tag("voluptatibus", "vero") {{
                                                    key = "quasi";
                                                    value = "reiciendis";
                                                }}),
                                                add(new Tag("voluptatibus", "ipsa") {{
                                                    key = "nihil";
                                                    value = "praesentium";
                                                }}),
                                            }});, "omnis") {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "cum";
                xAmzCredential = "perferendis";
                xAmzDate = "doloremque";
                xAmzSecurityToken = "reprehenderit";
                xAmzSignature = "ut";
                xAmzSignedHeaders = "maiores";
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

## unlockRule

Unlocks a retention rule. After a retention rule is unlocked, it can be modified or deleted only after the unlock delay period expires.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnlockRuleRequest;
import org.openapis.openapi.models.operations.UnlockRuleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UnlockRuleRequest req = new UnlockRuleRequest("corporis") {{
                xAmzAlgorithm = "dolore";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "dicta";
                xAmzDate = "harum";
                xAmzSecurityToken = "enim";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "commodi";
            }};            

            UnlockRuleResponse res = sdk.sdk.unlockRule(req);

            if (res.unlockRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Unassigns a tag from a retention rule.

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
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("quae",                 new String[]{{
                                add("quidem"),
                            }}) {{
                xAmzAlgorithm = "molestias";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "pariatur";
                xAmzDate = "modi";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "rem";
                xAmzSignedHeaders = "voluptates";
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

## updateRule

Updates an existing Recycle Bin retention rule. You can update a retention rule's description, resource tags, and retention period at any time after creation. You can't update a retention rule's resource type after creation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-update-rule"> Update Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRuleRequest;
import org.openapis.openapi.models.operations.UpdateRuleRequestBody;
import org.openapis.openapi.models.operations.UpdateRuleRequestBodyResourceTypeEnum;
import org.openapis.openapi.models.operations.UpdateRuleRequestBodyRetentionPeriod;
import org.openapis.openapi.models.operations.UpdateRuleResponse;
import org.openapis.openapi.models.shared.ResourceTag;
import org.openapis.openapi.models.shared.RetentionPeriodUnitEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateRuleRequest req = new UpdateRuleRequest(                new UpdateRuleRequestBody() {{
                                description = "repudiandae";
                                resourceTags = new org.openapis.openapi.models.shared.ResourceTag[]{{
                                    add(new ResourceTag("incidunt") {{
                                        resourceTagKey = "veritatis";
                                        resourceTagValue = "itaque";
                                    }}),
                                    add(new ResourceTag("est") {{
                                        resourceTagKey = "enim";
                                        resourceTagValue = "consequatur";
                                    }}),
                                    add(new ResourceTag("deserunt") {{
                                        resourceTagKey = "quibusdam";
                                        resourceTagValue = "explicabo";
                                    }}),
                                }};
                                resourceType = UpdateRuleRequestBodyResourceTypeEnum.EC2_IMAGE;
                                retentionPeriod = new UpdateRuleRequestBodyRetentionPeriod() {{
                                    retentionPeriodUnit = RetentionPeriodUnitEnum.DAYS;
                                    retentionPeriodValue = 841386L;
                                }};;
                            }};, "labore") {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "qui";
                xAmzCredential = "aliquid";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "quos";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "magni";
            }};            

            UpdateRuleResponse res = sdk.sdk.updateRule(req);

            if (res.updateRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
