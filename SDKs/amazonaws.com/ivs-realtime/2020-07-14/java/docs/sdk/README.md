# SDK

## Overview

<p> <b>Introduction</b> </p> <p>The Amazon Interactive Video Service (IVS) stage API is REST compatible, using a standard HTTP API and an AWS EventBridge event stream for responses. JSON is used for both requests and responses, including errors. </p> <p>Terminology: The IVS stage API sometimes is referred to as the IVS RealTime API.</p> <p> <b>Resources</b> </p> <p>The following resources contain information about your IVS live stream (see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/getting-started.html">Getting Started with Amazon IVS</a>):</p> <ul> <li> <p> <b>Stage</b> — A stage is a virtual space where multiple participants can exchange audio and video in real time.</p> </li> </ul> <p> <b>Tagging</b> </p> <p>A <i>tag</i> is a metadata label that you assign to an AWS resource. A tag comprises a <i>key</i> and a <i>value</i>, both set by you. For example, you might set a tag as <code>topic:nature</code> to label a particular video category. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS stages has no service-specific constraints beyond what is documented there.</p> <p>Tags can help you identify and organize your AWS resources. For example, you can use the same tag for different resources to indicate that they are related. You can also use tags to manage access (see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Access Tags</a>).</p> <p>The Amazon IVS stage API has these tag-related endpoints: <a>TagResource</a>, <a>UntagResource</a>, and <a>ListTagsForResource</a>. The following resource supports tagging: Stage.</p> <p>At most 50 tags can be applied to a resource.</p> <p> <b>Stages Endpoints</b> </p> <ul> <li> <p> <a>CreateParticipantToken</a> — Creates an additional token for a specified stage. This can be done after stage creation or when tokens expire.</p> </li> <li> <p> <a>CreateStage</a> — Creates a new stage (and optionally participant tokens).</p> </li> <li> <p> <a>DeleteStage</a> — Shuts down and deletes the specified stage (disconnecting all participants).</p> </li> <li> <p> <a>DisconnectParticipant</a> — Disconnects a specified participant and revokes the participant permanently from a specified stage.</p> </li> <li> <p> <a>GetStage</a> — Gets information for the specified stage.</p> </li> <li> <p> <a>ListStages</a> — Gets summary information about all stages in your account, in the AWS region where the API request is processed.</p> </li> <li> <p> <a>UpdateStage</a> — Updates a stage’s configuration.</p> </li> </ul> <p> <b>Tags Endpoints</b> </p> <ul> <li> <p> <a>ListTagsForResource</a> — Gets information about AWS tags for the specified ARN.</p> </li> <li> <p> <a>TagResource</a> — Adds or updates tags for the AWS resource with the specified ARN.</p> </li> <li> <p> <a>UntagResource</a> — Removes tags from the resource with the specified ARN.</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/ivsrealtime/>
### Available Operations

* [createParticipantToken](#createparticipanttoken) - <p>Creates an additional token for a specified stage. This can be done after stage creation or when tokens expire. Tokens always are scoped to the stage for which they are created.</p> <p>Encryption keys are owned by Amazon IVS and never used directly by your application.</p>
* [createStage](#createstage) - Creates a new stage (and optionally participant tokens).
* [deleteStage](#deletestage) - Shuts down and deletes the specified stage (disconnecting all participants).
* [disconnectParticipant](#disconnectparticipant) - Disconnects a specified participant and revokes the participant permanently from a specified stage.
* [getStage](#getstage) - Gets information for the specified stage.
* [listStages](#liststages) - Gets summary information about all stages in your account, in the AWS region where the API request is processed.
* [listTagsForResource](#listtagsforresource) - Gets information about AWS tags for the specified ARN.
* [tagResource](#tagresource) - Adds or updates tags for the AWS resource with the specified ARN.
* [untagResource](#untagresource) - Removes tags from the resource with the specified ARN.
* [updateStage](#updatestage) - Updates a stage’s configuration.

## createParticipantToken

<p>Creates an additional token for a specified stage. This can be done after stage creation or when tokens expire. Tokens always are scoped to the stage for which they are created.</p> <p>Encryption keys are owned by Amazon IVS and never used directly by your application.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateParticipantTokenRequest;
import org.openapis.openapi.models.operations.CreateParticipantTokenRequestBody;
import org.openapis.openapi.models.operations.CreateParticipantTokenResponse;
import org.openapis.openapi.models.shared.ParticipantTokenCapabilityEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateParticipantTokenRequest req = new CreateParticipantTokenRequest(                new CreateParticipantTokenRequestBody("iusto") {{
                                attributes = new java.util.HashMap<String, String>() {{
                                    put("nisi", "recusandae");
                                    put("temporibus", "ab");
                                    put("quis", "veritatis");
                                }};
                                capabilities = new org.openapis.openapi.models.shared.ParticipantTokenCapabilityEnum[]{{
                                    add(ParticipantTokenCapabilityEnum.PUBLISH),
                                    add(ParticipantTokenCapabilityEnum.PUBLISH),
                                    add(ParticipantTokenCapabilityEnum.SUBSCRIBE),
                                }};
                                duration = 957156L;
                                userId = "quo";
                            }};) {{
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "at";
                xAmzCredential = "at";
                xAmzDate = "maiores";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "quod";
            }};            

            CreateParticipantTokenResponse res = sdk.sdk.createParticipantToken(req);

            if (res.createParticipantTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createStage

Creates a new stage (and optionally participant tokens).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateStageRequest;
import org.openapis.openapi.models.operations.CreateStageRequestBody;
import org.openapis.openapi.models.operations.CreateStageResponse;
import org.openapis.openapi.models.shared.ParticipantTokenCapabilityEnum;
import org.openapis.openapi.models.shared.ParticipantTokenConfiguration;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateStageRequest req = new CreateStageRequest(                new CreateStageRequestBody() {{
                                name = "Miss Lowell Parisian";
                                participantTokenConfigurations = new org.openapis.openapi.models.shared.ParticipantTokenConfiguration[]{{
                                    add(new ParticipantTokenConfiguration() {{
                                        attributes = new java.util.HashMap<String, String>() {{
                                            put("deleniti", "hic");
                                        }};
                                        capabilities = new org.openapis.openapi.models.shared.ParticipantTokenCapabilityEnum[]{{
                                            add(ParticipantTokenCapabilityEnum.SUBSCRIBE),
                                            add(ParticipantTokenCapabilityEnum.PUBLISH),
                                            add(ParticipantTokenCapabilityEnum.PUBLISH),
                                            add(ParticipantTokenCapabilityEnum.PUBLISH),
                                        }};
                                        duration = 264555L;
                                        userId = "qui";
                                    }}),
                                    add(new ParticipantTokenConfiguration() {{
                                        attributes = new java.util.HashMap<String, String>() {{
                                            put("cum", "esse");
                                            put("ipsum", "excepturi");
                                            put("aspernatur", "perferendis");
                                            put("ad", "natus");
                                        }};
                                        capabilities = new org.openapis.openapi.models.shared.ParticipantTokenCapabilityEnum[]{{
                                            add(ParticipantTokenCapabilityEnum.SUBSCRIBE),
                                        }};
                                        duration = 222321L;
                                        userId = "natus";
                                    }}),
                                    add(new ParticipantTokenConfiguration() {{
                                        attributes = new java.util.HashMap<String, String>() {{
                                            put("hic", "saepe");
                                            put("fuga", "in");
                                        }};
                                        capabilities = new org.openapis.openapi.models.shared.ParticipantTokenCapabilityEnum[]{{
                                            add(ParticipantTokenCapabilityEnum.SUBSCRIBE),
                                            add(ParticipantTokenCapabilityEnum.PUBLISH),
                                        }};
                                        duration = 902349L;
                                        userId = "quidem";
                                    }}),
                                }};
                                tags = new java.util.HashMap<String, String>() {{
                                    put("ipsa", "reiciendis");
                                }};
                            }};) {{
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "laborum";
                xAmzDate = "dolores";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "explicabo";
            }};            

            CreateStageResponse res = sdk.sdk.createStage(req);

            if (res.createStageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteStage

Shuts down and deletes the specified stage (disconnecting all participants).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteStageRequest;
import org.openapis.openapi.models.operations.DeleteStageRequestBody;
import org.openapis.openapi.models.operations.DeleteStageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteStageRequest req = new DeleteStageRequest(                new DeleteStageRequestBody("enim");) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "minima";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "culpa";
            }};            

            DeleteStageResponse res = sdk.sdk.deleteStage(req);

            if (res.deleteStageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disconnectParticipant

Disconnects a specified participant and revokes the participant permanently from a specified stage.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisconnectParticipantRequest;
import org.openapis.openapi.models.operations.DisconnectParticipantRequestBody;
import org.openapis.openapi.models.operations.DisconnectParticipantResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisconnectParticipantRequest req = new DisconnectParticipantRequest(                new DisconnectParticipantRequestBody("sapiente", "architecto") {{
                                reason = "mollitia";
                            }};) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "consequuntur";
                xAmzDate = "repellat";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "numquam";
            }};            

            DisconnectParticipantResponse res = sdk.sdk.disconnectParticipant(req);

            if (res.disconnectParticipantResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStage

Gets information for the specified stage.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStageRequest;
import org.openapis.openapi.models.operations.GetStageRequestBody;
import org.openapis.openapi.models.operations.GetStageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetStageRequest req = new GetStageRequest(                new GetStageRequestBody("quam");) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "velit";
                xAmzCredential = "error";
                xAmzDate = "quia";
                xAmzSecurityToken = "quis";
                xAmzSignature = "vitae";
                xAmzSignedHeaders = "laborum";
            }};            

            GetStageResponse res = sdk.sdk.getStage(req);

            if (res.getStageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listStages

Gets summary information about all stages in your account, in the AWS region where the API request is processed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListStagesRequest;
import org.openapis.openapi.models.operations.ListStagesRequestBody;
import org.openapis.openapi.models.operations.ListStagesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("animi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListStagesRequest req = new ListStagesRequest(                new ListStagesRequestBody() {{
                                maxResults = 317202L;
                                nextToken = "odit";
                            }};) {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "sequi";
                xAmzCredential = "tenetur";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "id";
                xAmzSignature = "possimus";
                xAmzSignedHeaders = "aut";
                maxResults = "quasi";
                nextToken = "error";
            }};            

            ListStagesResponse res = sdk.sdk.listStages(req);

            if (res.listStagesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Gets information about AWS tags for the specified ARN.

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
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("laborum") {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "voluptatibus";
                xAmzDate = "vero";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "voluptatibus";
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

## tagResource

Adds or updates tags for the AWS resource with the specified ARN.

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
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("voluptate", "cum");
                                                put("perferendis", "doloremque");
                                                put("reprehenderit", "ut");
                                            }});, "maiores") {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "dolore";
                xAmzDate = "iusto";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "harum";
                xAmzSignedHeaders = "enim";
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

Removes tags from the resource with the specified ARN.

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
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("commodi",                 new String[]{{
                                add("quae"),
                                add("ipsum"),
                                add("quidem"),
                                add("molestias"),
                            }}) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "modi";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "rem";
                xAmzSignature = "voluptates";
                xAmzSignedHeaders = "quasi";
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

## updateStage

Updates a stage’s configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateStageRequest;
import org.openapis.openapi.models.operations.UpdateStageRequestBody;
import org.openapis.openapi.models.operations.UpdateStageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateStageRequest req = new UpdateStageRequest(                new UpdateStageRequestBody("sint") {{
                                name = "Patti Gottlieb MD";
                            }};) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "deserunt";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "modi";
            }};            

            UpdateStageResponse res = sdk.sdk.updateStage(req);

            if (res.updateStageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
