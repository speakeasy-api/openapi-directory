# SDK

## Overview

<p>Use Amazon CloudWatch Observability Access Manager to create and manage links between source accounts and monitoring accounts by using <i>CloudWatch cross-account observability</i>. With CloudWatch cross-account observability, you can monitor and troubleshoot applications that span multiple accounts within a Region. Seamlessly search, visualize, and analyze your metrics, logs, and traces in any of the linked accounts without account boundaries.</p> <pre><code> &lt;p&gt;Set up one or more Amazon Web Services accounts as &lt;i&gt;monitoring accounts&lt;/i&gt; and link them with multiple &lt;i&gt;source accounts&lt;/i&gt;. A monitoring account is a central Amazon Web Services account that can view and interact with observability data generated from source accounts. A source account is an individual Amazon Web Services account that generates observability data for the resources that reside in it. Source accounts share their observability data with the monitoring account. The shared observability data can include metrics in Amazon CloudWatch, logs in Amazon CloudWatch Logs, and traces in X-Ray.&lt;/p&gt; </code></pre>

Amazon Web Services documentation
<https://docs.aws.amazon.com/oam/>
### Available Operations

* [createLink](#createlink) - <p>Creates a link between a source account and a sink that you have created in a monitoring account.</p> <p>Before you create a link, you must create a sink in the monitoring account and create a sink policy in that account. The sink policy must permit the source account to link to it. You can grant permission to source accounts by granting permission to an entire organization or to individual accounts.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_CreateSink.html">CreateSink</a> and <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_PutSinkPolicy.html">PutSinkPolicy</a>.</p> <p>Each monitoring account can be linked to as many as 100,000 source accounts.</p> <p>Each source account can be linked to as many as five monitoring accounts.</p>
* [createSink](#createsink) - <p>Use this to create a <i>sink</i> in the current account, so that it can be used as a monitoring account in CloudWatch cross-account observability. A sink is a resource that represents an attachment point in a monitoring account. Source accounts can link to the sink to send observability data.</p> <p>After you create a sink, you must create a sink policy that allows source accounts to attach to it. For more information, see <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_PutSinkPolicy.html">PutSinkPolicy</a>.</p> <p>Each account can contain one sink. If you delete a sink, you can then create a new one in that account.</p>
* [deleteLink](#deletelink) - Deletes a link between a monitoring account sink and a source account. You must run this operation in the source account.
* [deleteSink](#deletesink) - Deletes a sink. You must delete all links to a sink before you can delete that sink.
* [getLink](#getlink) - <p>Returns complete information about one link.</p> <p>To use this operation, provide the link ARN. To retrieve a list of link ARNs, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListLinks.html">ListLinks</a>.</p>
* [getSink](#getsink) - <p>Returns complete information about one monitoring account sink.</p> <p>To use this operation, provide the sink ARN. To retrieve a list of sink ARNs, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListSinks.html">ListSinks</a>.</p>
* [getSinkPolicy](#getsinkpolicy) - Returns the current sink policy attached to this sink. The sink policy specifies what accounts can attach to this sink as source accounts, and what types of data they can share.
* [listAttachedLinks](#listattachedlinks) - <p>Returns a list of source account links that are linked to this monitoring account sink.</p> <p>To use this operation, provide the sink ARN. To retrieve a list of sink ARNs, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListSinks.html">ListSinks</a>.</p> <p>To find a list of links for one source account, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListLinks.html">ListLinks</a>.</p>
* [listLinks](#listlinks) - <p>Use this operation in a source account to return a list of links to monitoring account sinks that this source account has.</p> <p>To find a list of links for one monitoring account sink, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListAttachedLinks.html">ListAttachedLinks</a> from within the monitoring account.</p>
* [listSinks](#listsinks) - Use this operation in a monitoring account to return the list of sinks created in that account.
* [listTagsForResource](#listtagsforresource) - Displays the tags associated with a resource. Both sinks and links support tagging.
* [putSinkPolicy](#putsinkpolicy) - <p>Creates or updates the resource policy that grants permissions to source accounts to link to the monitoring account sink. When you create a sink policy, you can grant permissions to all accounts in an organization or to individual accounts.</p> <p>You can also use a sink policy to limit the types of data that is shared. The three types that you can allow or deny are:</p> <ul> <li> <p> <b>Metrics</b> - Specify with <code>AWS::CloudWatch::Metric</code> </p> </li> <li> <p> <b>Log groups</b> - Specify with <code>AWS::Logs::LogGroup</code> </p> </li> <li> <p> <b>Traces</b> - Specify with <code>AWS::XRay::Trace</code> </p> </li> </ul> <p>See the examples in this section to see how to specify permitted source accounts and data types.</p>
* [tagResource](#tagresource) - <p>Assigns one or more tags (key-value pairs) to the specified resource. Both sinks and links can be tagged. </p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key for the alarm, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a resource.</p> <important> <p>Unlike tagging permissions in other Amazon Web Services services, to tag or untag links and sinks you must have the <code>oam:ResourceTag</code> permission. The <code>iam:ResourceTag</code> permission does not allow you to tag and untag links and sinks.</p> </important>
* [untagResource](#untagresource) - <p>Removes one or more tags from the specified resource.</p> <important> <p>Unlike tagging permissions in other Amazon Web Services services, to tag or untag links and sinks you must have the <code>oam:ResourceTag</code> permission. The <code>iam:TagResource</code> permission does not allow you to tag and untag links and sinks.</p> </important>
* [updateLink](#updatelink) - <p>Use this operation to change what types of data are shared from a source account to its linked monitoring account sink. You can't change the sink or change the monitoring account with this operation.</p> <p>To update the list of tags associated with the sink, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_TagResource.html">TagResource</a>.</p>

## createLink

<p>Creates a link between a source account and a sink that you have created in a monitoring account.</p> <p>Before you create a link, you must create a sink in the monitoring account and create a sink policy in that account. The sink policy must permit the source account to link to it. You can grant permission to source accounts by granting permission to an entire organization or to individual accounts.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_CreateSink.html">CreateSink</a> and <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_PutSinkPolicy.html">PutSinkPolicy</a>.</p> <p>Each monitoring account can be linked to as many as 100,000 source accounts.</p> <p>Each source account can be linked to as many as five monitoring accounts.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLinkRequest;
import org.openapis.openapi.models.operations.CreateLinkRequestBody;
import org.openapis.openapi.models.operations.CreateLinkResponse;
import org.openapis.openapi.models.shared.ResourceTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLinkRequest req = new CreateLinkRequest(                new CreateLinkRequestBody("excepturi",                 new org.openapis.openapi.models.shared.ResourceTypeEnum[]{{
                                                add(ResourceTypeEnum.AWSX_RAY_TRACE),
                                                add(ResourceTypeEnum.AWSX_RAY_TRACE),
                                            }}, "ab") {{
                                tags = new java.util.HashMap<String, String>() {{
                                    put("veritatis", "deserunt");
                                    put("perferendis", "ipsam");
                                }};
                            }};) {{
                xAmzAlgorithm = "repellendus";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "quo";
                xAmzDate = "odit";
                xAmzSecurityToken = "at";
                xAmzSignature = "at";
                xAmzSignedHeaders = "maiores";
            }};            

            CreateLinkResponse res = sdk.sdk.createLink(req);

            if (res.createLinkOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSink

<p>Use this to create a <i>sink</i> in the current account, so that it can be used as a monitoring account in CloudWatch cross-account observability. A sink is a resource that represents an attachment point in a monitoring account. Source accounts can link to the sink to send observability data.</p> <p>After you create a sink, you must create a sink policy that allows source accounts to attach to it. For more information, see <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_PutSinkPolicy.html">PutSinkPolicy</a>.</p> <p>Each account can contain one sink. If you delete a sink, you can then create a new one in that account.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSinkRequest;
import org.openapis.openapi.models.operations.CreateSinkRequestBody;
import org.openapis.openapi.models.operations.CreateSinkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSinkRequest req = new CreateSinkRequest(                new CreateSinkRequestBody("quod") {{
                                tags = new java.util.HashMap<String, String>() {{
                                    put("esse", "totam");
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

            CreateSinkResponse res = sdk.sdk.createSink(req);

            if (res.createSinkOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteLink

Deletes a link between a monitoring account sink and a source account. You must run this operation in the source account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLinkRequest;
import org.openapis.openapi.models.operations.DeleteLinkRequestBody;
import org.openapis.openapi.models.operations.DeleteLinkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteLinkRequest req = new DeleteLinkRequest(                new DeleteLinkRequestBody("modi");) {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "cum";
                xAmzDate = "esse";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "aspernatur";
            }};            

            DeleteLinkResponse res = sdk.sdk.deleteLink(req);

            if (res.deleteLinkOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSink

Deletes a sink. You must delete all links to a sink before you can delete that sink.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSinkRequest;
import org.openapis.openapi.models.operations.DeleteSinkRequestBody;
import org.openapis.openapi.models.operations.DeleteSinkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSinkRequest req = new DeleteSinkRequest(                new DeleteSinkRequestBody("ad");) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "sed";
                xAmzCredential = "iste";
                xAmzDate = "dolor";
                xAmzSecurityToken = "natus";
                xAmzSignature = "laboriosam";
                xAmzSignedHeaders = "hic";
            }};            

            DeleteSinkResponse res = sdk.sdk.deleteSink(req);

            if (res.deleteSinkOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLink

<p>Returns complete information about one link.</p> <p>To use this operation, provide the link ARN. To retrieve a list of link ARNs, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListLinks.html">ListLinks</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLinkRequest;
import org.openapis.openapi.models.operations.GetLinkRequestBody;
import org.openapis.openapi.models.operations.GetLinkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLinkRequest req = new GetLinkRequest(                new GetLinkRequestBody("fuga");) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "iste";
                xAmzDate = "iure";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "architecto";
            }};            

            GetLinkResponse res = sdk.sdk.getLink(req);

            if (res.getLinkOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSink

<p>Returns complete information about one monitoring account sink.</p> <p>To use this operation, provide the sink ARN. To retrieve a list of sink ARNs, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListSinks.html">ListSinks</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSinkRequest;
import org.openapis.openapi.models.operations.GetSinkRequestBody;
import org.openapis.openapi.models.operations.GetSinkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSinkRequest req = new GetSinkRequest(                new GetSinkRequestBody("reiciendis");) {{
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "laborum";
                xAmzDate = "dolores";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "explicabo";
            }};            

            GetSinkResponse res = sdk.sdk.getSink(req);

            if (res.getSinkOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSinkPolicy

Returns the current sink policy attached to this sink. The sink policy specifies what accounts can attach to this sink as source accounts, and what types of data they can share.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSinkPolicyRequest;
import org.openapis.openapi.models.operations.GetSinkPolicyRequestBody;
import org.openapis.openapi.models.operations.GetSinkPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSinkPolicyRequest req = new GetSinkPolicyRequest(                new GetSinkPolicyRequestBody("enim");) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "minima";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "culpa";
            }};            

            GetSinkPolicyResponse res = sdk.sdk.getSinkPolicy(req);

            if (res.getSinkPolicyOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAttachedLinks

<p>Returns a list of source account links that are linked to this monitoring account sink.</p> <p>To use this operation, provide the sink ARN. To retrieve a list of sink ARNs, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListSinks.html">ListSinks</a>.</p> <p>To find a list of links for one source account, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListLinks.html">ListLinks</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAttachedLinksRequest;
import org.openapis.openapi.models.operations.ListAttachedLinksRequestBody;
import org.openapis.openapi.models.operations.ListAttachedLinksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAttachedLinksRequest req = new ListAttachedLinksRequest(                new ListAttachedLinksRequestBody("sapiente") {{
                                maxResults = 102044L;
                                nextToken = "mollitia";
                            }};) {{
                maxResults = "dolorem";
                nextToken = "culpa";
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "repellat";
                xAmzCredential = "mollitia";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "quam";
            }};            

            ListAttachedLinksResponse res = sdk.sdk.listAttachedLinks(req);

            if (res.listAttachedLinksOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLinks

<p>Use this operation in a source account to return a list of links to monitoring account sinks that this source account has.</p> <p>To find a list of links for one monitoring account sink, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListAttachedLinks.html">ListAttachedLinks</a> from within the monitoring account.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLinksRequest;
import org.openapis.openapi.models.operations.ListLinksRequestBody;
import org.openapis.openapi.models.operations.ListLinksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListLinksRequest req = new ListLinksRequest(                new ListLinksRequestBody() {{
                                maxResults = 244425L;
                                nextToken = "error";
                            }};) {{
                maxResults = "quia";
                nextToken = "quis";
                xAmzAlgorithm = "vitae";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "animi";
                xAmzDate = "enim";
                xAmzSecurityToken = "odit";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "sequi";
            }};            

            ListLinksResponse res = sdk.sdk.listLinks(req);

            if (res.listLinksOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSinks

Use this operation in a monitoring account to return the list of sinks created in that account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSinksRequest;
import org.openapis.openapi.models.operations.ListSinksRequestBody;
import org.openapis.openapi.models.operations.ListSinksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSinksRequest req = new ListSinksRequest(                new ListSinksRequestBody() {{
                                maxResults = 368725L;
                                nextToken = "id";
                            }};) {{
                maxResults = "possimus";
                nextToken = "aut";
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "error";
                xAmzCredential = "temporibus";
                xAmzDate = "laborum";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            ListSinksResponse res = sdk.sdk.listSinks(req);

            if (res.listSinksOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Displays the tags associated with a resource. Both sinks and links support tagging.

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
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("nihil") {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "ipsa";
                xAmzDate = "omnis";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "perferendis";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSinkPolicy

<p>Creates or updates the resource policy that grants permissions to source accounts to link to the monitoring account sink. When you create a sink policy, you can grant permissions to all accounts in an organization or to individual accounts.</p> <p>You can also use a sink policy to limit the types of data that is shared. The three types that you can allow or deny are:</p> <ul> <li> <p> <b>Metrics</b> - Specify with <code>AWS::CloudWatch::Metric</code> </p> </li> <li> <p> <b>Log groups</b> - Specify with <code>AWS::Logs::LogGroup</code> </p> </li> <li> <p> <b>Traces</b> - Specify with <code>AWS::XRay::Trace</code> </p> </li> </ul> <p>See the examples in this section to see how to specify permitted source accounts and data types.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSinkPolicyRequest;
import org.openapis.openapi.models.operations.PutSinkPolicyRequestBody;
import org.openapis.openapi.models.operations.PutSinkPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloremque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutSinkPolicyRequest req = new PutSinkPolicyRequest(                new PutSinkPolicyRequestBody("reprehenderit", "ut");) {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "corporis";
                xAmzDate = "dolore";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "harum";
            }};            

            PutSinkPolicyResponse res = sdk.sdk.putSinkPolicy(req);

            if (res.putSinkPolicyOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

<p>Assigns one or more tags (key-value pairs) to the specified resource. Both sinks and links can be tagged. </p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key for the alarm, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a resource.</p> <important> <p>Unlike tagging permissions in other Amazon Web Services services, to tag or untag links and sinks you must have the <code>oam:ResourceTag</code> permission. The <code>iam:ResourceTag</code> permission does not allow you to tag and untag links and sinks.</p> </important>

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
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("commodi", "repudiandae");
                                                put("quae", "ipsum");
                                                put("quidem", "molestias");
                                                put("excepturi", "pariatur");
                                            }});, "modi") {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "rem";
                xAmzCredential = "voluptates";
                xAmzDate = "quasi";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "veritatis";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

<p>Removes one or more tags from the specified resource.</p> <important> <p>Unlike tagging permissions in other Amazon Web Services services, to tag or untag links and sinks you must have the <code>oam:ResourceTag</code> permission. The <code>iam:TagResource</code> permission does not allow you to tag and untag links and sinks.</p> </important>

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
                .setSecurity(new Security("itaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("incidunt",                 new String[]{{
                                add("consequatur"),
                                add("est"),
                            }}) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "deserunt";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "modi";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateLink

<p>Use this operation to change what types of data are shared from a source account to its linked monitoring account sink. You can't change the sink or change the monitoring account with this operation.</p> <p>To update the list of tags associated with the sink, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_TagResource.html">TagResource</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateLinkRequest;
import org.openapis.openapi.models.operations.UpdateLinkRequestBody;
import org.openapis.openapi.models.operations.UpdateLinkResponse;
import org.openapis.openapi.models.shared.ResourceTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateLinkRequest req = new UpdateLinkRequest(                new UpdateLinkRequestBody("aliquid",                 new org.openapis.openapi.models.shared.ResourceTypeEnum[]{{
                                                add(ResourceTypeEnum.AWS_LOGS_LOG_GROUP),
                                                add(ResourceTypeEnum.AWS_CLOUD_WATCH_METRIC),
                                                add(ResourceTypeEnum.AWS_CLOUD_WATCH_METRIC),
                                            }});) {{
                xAmzAlgorithm = "assumenda";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "alias";
                xAmzDate = "fugit";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "tempora";
            }};            

            UpdateLinkResponse res = sdk.sdk.updateLink(req);

            if (res.updateLinkOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
