# SDK

## Overview

<fullname>IoT Secure Tunneling</fullname> <p>IoT Secure Tunneling creates remote connections to devices deployed in the field.</p> <p>For more information about how IoT Secure Tunneling works, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/secure-tunneling.html">IoT Secure Tunneling</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/iot/>
### Available Operations

* [closeTunnel](#closetunnel) - <p>Closes a tunnel identified by the unique tunnel id. When a <code>CloseTunnel</code> request is received, we close the WebSocket connections between the client and proxy server so no data can be transmitted.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CloseTunnel</a> action.</p>
* [describeTunnel](#describetunnel) - <p>Gets information about a tunnel identified by the unique tunnel id.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeTunnel</a> action.</p>
* [listTagsForResource](#listtagsforresource) - Lists the tags for the specified resource.
* [listTunnels](#listtunnels) - <p>List all tunnels for an Amazon Web Services account. Tunnels are listed by creation time in descending order, newer tunnels will be listed before older tunnels.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTunnels</a> action.</p>
* [openTunnel](#opentunnel) - <p>Creates a new tunnel, and returns two client access tokens for clients to use to connect to the IoT Secure Tunneling proxy server.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">OpenTunnel</a> action.</p>
* [rotateTunnelAccessToken](#rotatetunnelaccesstoken) - <p>Revokes the current client access token (CAT) and returns new CAT for clients to use when reconnecting to secure tunneling to access the same tunnel.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RotateTunnelAccessToken</a> action.</p> <note> <p>Rotating the CAT doesn't extend the tunnel duration. For example, say the tunnel duration is 12 hours and the tunnel has already been open for 4 hours. When you rotate the access tokens, the new tokens that are generated can only be used for the remaining 8 hours.</p> </note>
* [tagResource](#tagresource) - A resource tag.
* [untagResource](#untagresource) - Removes a tag from a resource.

## closeTunnel

<p>Closes a tunnel identified by the unique tunnel id. When a <code>CloseTunnel</code> request is received, we close the WebSocket connections between the client and proxy server so no data can be transmitted.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CloseTunnel</a> action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloseTunnelRequest;
import org.openapis.openapi.models.operations.CloseTunnelResponse;
import org.openapis.openapi.models.operations.CloseTunnelXAmzTargetEnum;
import org.openapis.openapi.models.shared.CloseTunnelRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CloseTunnelRequest req = new CloseTunnelRequest(                new CloseTunnelRequest("deserunt") {{
                                delete = false;
                            }};, CloseTunnelXAmzTargetEnum.IO_T_SECURED_TUNNELING_CLOSE_TUNNEL) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }};            

            CloseTunnelResponse res = sdk.sdk.closeTunnel(req);

            if (res.closeTunnelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeTunnel

<p>Gets information about a tunnel identified by the unique tunnel id.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeTunnel</a> action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeTunnelRequest;
import org.openapis.openapi.models.operations.DescribeTunnelResponse;
import org.openapis.openapi.models.operations.DescribeTunnelXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeTunnelRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeTunnelRequest req = new DescribeTunnelRequest(                new DescribeTunnelRequest("molestiae");, DescribeTunnelXAmzTargetEnum.IO_T_SECURED_TUNNELING_DESCRIBE_TUNNEL) {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "voluptatum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "recusandae";
            }};            

            DescribeTunnelResponse res = sdk.sdk.describeTunnel(req);

            if (res.describeTunnelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists the tags for the specified resource.

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
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("ab");, ListTagsForResourceXAmzTargetEnum.IO_T_SECURED_TUNNELING_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "deserunt";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "repellendus";
                xAmzSignedHeaders = "sapiente";
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

## listTunnels

<p>List all tunnels for an Amazon Web Services account. Tunnels are listed by creation time in descending order, newer tunnels will be listed before older tunnels.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTunnels</a> action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTunnelsRequest;
import org.openapis.openapi.models.operations.ListTunnelsResponse;
import org.openapis.openapi.models.operations.ListTunnelsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTunnelsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTunnelsRequest req = new ListTunnelsRequest(                new ListTunnelsRequest() {{
                                maxResults = 140350L;
                                nextToken = "at";
                                thingName = "at";
                            }};, ListTunnelsXAmzTargetEnum.IO_T_SECURED_TUNNELING_LIST_TUNNELS) {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "quod";
                xAmzDate = "quod";
                xAmzSecurityToken = "esse";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "porro";
                maxResults = "dolorum";
                nextToken = "dicta";
            }};            

            ListTunnelsResponse res = sdk.sdk.listTunnels(req);

            if (res.listTunnelsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## openTunnel

<p>Creates a new tunnel, and returns two client access tokens for clients to use to connect to the IoT Secure Tunneling proxy server.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">OpenTunnel</a> action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OpenTunnelRequest;
import org.openapis.openapi.models.operations.OpenTunnelResponse;
import org.openapis.openapi.models.operations.OpenTunnelXAmzTargetEnum;
import org.openapis.openapi.models.shared.DestinationConfig;
import org.openapis.openapi.models.shared.OpenTunnelRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TimeoutConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            OpenTunnelRequest req = new OpenTunnelRequest(                new OpenTunnelRequest() {{
                                description = "officia";
                                destinationConfig = new DestinationConfig(                new String[]{{
                                                    add("fugit"),
                                                    add("deleniti"),
                                                    add("hic"),
                                                }}) {{
                                    thingName = "optio";
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("molestiae", "modi") {{
                                        key = "beatae";
                                        value = "commodi";
                                    }}),
                                    add(new Tag("cum", "esse") {{
                                        key = "qui";
                                        value = "impedit";
                                    }}),
                                    add(new Tag("aspernatur", "perferendis") {{
                                        key = "ipsum";
                                        value = "excepturi";
                                    }}),
                                }};
                                timeoutConfig = new TimeoutConfig() {{
                                    maxLifetimeTimeoutMinutes = 324141L;
                                }};;
                            }};, OpenTunnelXAmzTargetEnum.IO_T_SECURED_TUNNELING_OPEN_TUNNEL) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "sed";
                xAmzCredential = "iste";
                xAmzDate = "dolor";
                xAmzSecurityToken = "natus";
                xAmzSignature = "laboriosam";
                xAmzSignedHeaders = "hic";
            }};            

            OpenTunnelResponse res = sdk.sdk.openTunnel(req);

            if (res.openTunnelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## rotateTunnelAccessToken

<p>Revokes the current client access token (CAT) and returns new CAT for clients to use when reconnecting to secure tunneling to access the same tunnel.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RotateTunnelAccessToken</a> action.</p> <note> <p>Rotating the CAT doesn't extend the tunnel duration. For example, say the tunnel duration is 12 hours and the tunnel has already been open for 4 hours. When you rotate the access tokens, the new tokens that are generated can only be used for the remaining 8 hours.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RotateTunnelAccessTokenRequest;
import org.openapis.openapi.models.operations.RotateTunnelAccessTokenResponse;
import org.openapis.openapi.models.operations.RotateTunnelAccessTokenXAmzTargetEnum;
import org.openapis.openapi.models.shared.ClientModeEnum;
import org.openapis.openapi.models.shared.DestinationConfig;
import org.openapis.openapi.models.shared.RotateTunnelAccessTokenRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RotateTunnelAccessTokenRequest req = new RotateTunnelAccessTokenRequest(                new RotateTunnelAccessTokenRequest(ClientModeEnum.ALL, "in") {{
                                destinationConfig = new DestinationConfig(                new String[]{{
                                                    add("iste"),
                                                    add("iure"),
                                                }}) {{
                                    thingName = "saepe";
                                }};;
                            }};, RotateTunnelAccessTokenXAmzTargetEnum.IO_T_SECURED_TUNNELING_ROTATE_TUNNEL_ACCESS_TOKEN) {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "ipsa";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "est";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "laborum";
            }};            

            RotateTunnelAccessTokenResponse res = sdk.sdk.rotateTunnelAccessToken(req);

            if (res.rotateTunnelAccessTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

A resource tag.

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
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("dolorem",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("enim", "omnis") {{
                                                    key = "explicabo";
                                                    value = "nobis";
                                                }}),
                                                add(new Tag("excepturi", "accusantium") {{
                                                    key = "nemo";
                                                    value = "minima";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.IO_T_SECURED_TUNNELING_TAG_RESOURCE) {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "doloribus";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "dolorem";
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

Removes a tag from a resource.

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
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("consequuntur",                 new String[]{{
                                                add("mollitia"),
                                                add("occaecati"),
                                                add("numquam"),
                                                add("commodi"),
                                            }});, UntagResourceXAmzTargetEnum.IO_T_SECURED_TUNNELING_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "quam";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "velit";
                xAmzDate = "error";
                xAmzSecurityToken = "quia";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "vitae";
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
