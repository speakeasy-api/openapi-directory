# SDK

## Overview

<fullname>AWS CodeStar Connections</fullname> <p>This AWS CodeStar Connections API Reference provides descriptions and usage examples of the operations and data types for the AWS CodeStar Connections API. You can use the connections API to work with connections and installations.</p> <p> <i>Connections</i> are configurations that you use to connect AWS resources to external code repositories. Each connection is a resource that can be given to services such as CodePipeline to connect to a third-party repository such as Bitbucket. For example, you can add the connection in CodePipeline so that it triggers your pipeline when a code change is made to your third-party code repository. Each connection is named and associated with a unique ARN that is used to reference the connection.</p> <p>When you create a connection, the console initiates a third-party connection handshake. <i>Installations</i> are the apps that are used to conduct this handshake. For example, the installation for the Bitbucket provider type is the Bitbucket app. When you create a connection, you can choose an existing installation or create one.</p> <p>When you want to create a connection to an installed provider type such as GitHub Enterprise Server, you create a <i>host</i> for your connections.</p> <p>You can work with connections by calling:</p> <ul> <li> <p> <a>CreateConnection</a>, which creates a uniquely named connection that can be referenced by services such as CodePipeline.</p> </li> <li> <p> <a>DeleteConnection</a>, which deletes the specified connection.</p> </li> <li> <p> <a>GetConnection</a>, which returns information about the connection, including the connection status.</p> </li> <li> <p> <a>ListConnections</a>, which lists the connections associated with your account.</p> </li> </ul> <p>You can work with hosts by calling:</p> <ul> <li> <p> <a>CreateHost</a>, which creates a host that represents the infrastructure where your provider is installed.</p> </li> <li> <p> <a>DeleteHost</a>, which deletes the specified host.</p> </li> <li> <p> <a>GetHost</a>, which returns information about the host, including the setup status.</p> </li> <li> <p> <a>ListHosts</a>, which lists the hosts associated with your account.</p> </li> </ul> <p>You can work with tags in AWS CodeStar Connections by calling the following:</p> <ul> <li> <p> <a>ListTagsForResource</a>, which gets information about AWS tags for a specified Amazon Resource Name (ARN) in AWS CodeStar Connections.</p> </li> <li> <p> <a>TagResource</a>, which adds or updates tags for a resource in AWS CodeStar Connections.</p> </li> <li> <p> <a>UntagResource</a>, which removes tags for a resource in AWS CodeStar Connections.</p> </li> </ul> <p>For information about how to use AWS CodeStar Connections, see the <a href="https://docs.aws.amazon.com/dtconsole/latest/userguide/welcome-connections.html">Developer Tools User Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/codestar-connections/>
### Available Operations

* [createConnection](#createconnection) - Creates a connection that can then be given to other AWS services like CodePipeline so that it can access third-party code repositories. The connection is in pending status until the third-party connection handshake is completed from the console.
* [createHost](#createhost) - <p>Creates a resource that represents the infrastructure where a third-party provider is installed. The host is used when you create connections to an installed third-party provider type, such as GitHub Enterprise Server. You create one host for all connections to that provider.</p> <note> <p>A host created through the CLI or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by setting up the host in the console.</p> </note>
* [deleteConnection](#deleteconnection) - The connection to be deleted.
* [deleteHost](#deletehost) - <p>The host to be deleted. Before you delete a host, all connections associated to the host must be deleted.</p> <note> <p>A host cannot be deleted if it is in the VPC_CONFIG_INITIALIZING or VPC_CONFIG_DELETING state.</p> </note>
* [getConnection](#getconnection) - Returns the connection ARN and details such as status, owner, and provider type.
* [getHost](#gethost) - Returns the host ARN and details such as status, provider type, endpoint, and, if applicable, the VPC configuration.
* [listConnections](#listconnections) - Lists the connections associated with your account.
* [listHosts](#listhosts) - Lists the hosts associated with your account.
* [listTagsForResource](#listtagsforresource) - Gets the set of key-value pairs (metadata) that are used to manage the resource.
* [tagResource](#tagresource) - Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.
* [untagResource](#untagresource) - Removes tags from an AWS resource.
* [updateHost](#updatehost) - Updates a specified host with the provided configurations.

## createConnection

Creates a connection that can then be given to other AWS services like CodePipeline so that it can access third-party code repositories. The connection is in pending status until the third-party connection handshake is completed from the console.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateConnectionRequest;
import org.openapis.openapi.models.operations.CreateConnectionResponse;
import org.openapis.openapi.models.operations.CreateConnectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateConnectionInput;
import org.openapis.openapi.models.shared.ProviderTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateConnectionRequest req = new CreateConnectionRequest(                new CreateConnectionInput("nisi") {{
                                hostArn = "recusandae";
                                providerType = ProviderTypeEnum.GIT_HUB_ENTERPRISE_SERVER;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("deserunt", "perferendis") {{
                                        key = "quis";
                                        value = "veritatis";
                                    }}),
                                }};
                            }};, CreateConnectionXAmzTargetEnum.COM_AMAZONAWS_CODESTAR_CONNECTIONS_CODE_STAR_CONNECTIONS20191201_CREATE_CONNECTION) {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "repellendus";
                xAmzCredential = "sapiente";
                xAmzDate = "quo";
                xAmzSecurityToken = "odit";
                xAmzSignature = "at";
                xAmzSignedHeaders = "at";
            }};            

            CreateConnectionResponse res = sdk.sdk.createConnection(req);

            if (res.createConnectionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createHost

<p>Creates a resource that represents the infrastructure where a third-party provider is installed. The host is used when you create connections to an installed third-party provider type, such as GitHub Enterprise Server. You create one host for all connections to that provider.</p> <note> <p>A host created through the CLI or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by setting up the host in the console.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateHostRequest;
import org.openapis.openapi.models.operations.CreateHostResponse;
import org.openapis.openapi.models.operations.CreateHostXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateHostInput;
import org.openapis.openapi.models.shared.ProviderTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.VpcConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateHostRequest req = new CreateHostRequest(                new CreateHostInput("molestiae", "quod", ProviderTypeEnum.GIT_HUB_ENTERPRISE_SERVER) {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("dolorum", "dicta") {{
                                        key = "totam";
                                        value = "porro";
                                    }}),
                                    add(new Tag("occaecati", "fugit") {{
                                        key = "nam";
                                        value = "officia";
                                    }}),
                                }};
                                vpcConfiguration = new VpcConfiguration(                new String[]{{
                                                    add("hic"),
                                                    add("optio"),
                                                    add("totam"),
                                                }},                 new String[]{{
                                                    add("commodi"),
                                                }}, "molestiae") {{
                                    tlsCertificate = "modi";
                                }};;
                            }};, CreateHostXAmzTargetEnum.COM_AMAZONAWS_CODESTAR_CONNECTIONS_CODE_STAR_CONNECTIONS20191201_CREATE_HOST) {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "cum";
                xAmzDate = "esse";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "aspernatur";
            }};            

            CreateHostResponse res = sdk.sdk.createHost(req);

            if (res.createHostOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteConnection

The connection to be deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConnectionRequest;
import org.openapis.openapi.models.operations.DeleteConnectionResponse;
import org.openapis.openapi.models.operations.DeleteConnectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteConnectionInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteConnectionRequest req = new DeleteConnectionRequest(                new DeleteConnectionInput("ad");, DeleteConnectionXAmzTargetEnum.COM_AMAZONAWS_CODESTAR_CONNECTIONS_CODE_STAR_CONNECTIONS20191201_DELETE_CONNECTION) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "sed";
                xAmzCredential = "iste";
                xAmzDate = "dolor";
                xAmzSecurityToken = "natus";
                xAmzSignature = "laboriosam";
                xAmzSignedHeaders = "hic";
            }};            

            DeleteConnectionResponse res = sdk.sdk.deleteConnection(req);

            if (res.deleteConnectionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteHost

<p>The host to be deleted. Before you delete a host, all connections associated to the host must be deleted.</p> <note> <p>A host cannot be deleted if it is in the VPC_CONFIG_INITIALIZING or VPC_CONFIG_DELETING state.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteHostRequest;
import org.openapis.openapi.models.operations.DeleteHostResponse;
import org.openapis.openapi.models.operations.DeleteHostXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteHostInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteHostRequest req = new DeleteHostRequest(                new DeleteHostInput("fuga");, DeleteHostXAmzTargetEnum.COM_AMAZONAWS_CODESTAR_CONNECTIONS_CODE_STAR_CONNECTIONS20191201_DELETE_HOST) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "iste";
                xAmzDate = "iure";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "architecto";
            }};            

            DeleteHostResponse res = sdk.sdk.deleteHost(req);

            if (res.deleteHostOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConnection

Returns the connection ARN and details such as status, owner, and provider type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConnectionRequest;
import org.openapis.openapi.models.operations.GetConnectionResponse;
import org.openapis.openapi.models.operations.GetConnectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetConnectionInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetConnectionRequest req = new GetConnectionRequest(                new GetConnectionInput("reiciendis");, GetConnectionXAmzTargetEnum.COM_AMAZONAWS_CODESTAR_CONNECTIONS_CODE_STAR_CONNECTIONS20191201_GET_CONNECTION) {{
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "laborum";
                xAmzDate = "dolores";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "explicabo";
            }};            

            GetConnectionResponse res = sdk.sdk.getConnection(req);

            if (res.getConnectionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getHost

Returns the host ARN and details such as status, provider type, endpoint, and, if applicable, the VPC configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHostRequest;
import org.openapis.openapi.models.operations.GetHostResponse;
import org.openapis.openapi.models.operations.GetHostXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetHostInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetHostRequest req = new GetHostRequest(                new GetHostInput("enim");, GetHostXAmzTargetEnum.COM_AMAZONAWS_CODESTAR_CONNECTIONS_CODE_STAR_CONNECTIONS20191201_GET_HOST) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "minima";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "culpa";
            }};            

            GetHostResponse res = sdk.sdk.getHost(req);

            if (res.getHostOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listConnections

Lists the connections associated with your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListConnectionsRequest;
import org.openapis.openapi.models.operations.ListConnectionsResponse;
import org.openapis.openapi.models.operations.ListConnectionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListConnectionsInput;
import org.openapis.openapi.models.shared.ProviderTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListConnectionsRequest req = new ListConnectionsRequest(                new ListConnectionsInput() {{
                                hostArnFilter = "sapiente";
                                maxResults = 102044L;
                                nextToken = "mollitia";
                                providerTypeFilter = ProviderTypeEnum.BITBUCKET;
                            }};, ListConnectionsXAmzTargetEnum.COM_AMAZONAWS_CODESTAR_CONNECTIONS_CODE_STAR_CONNECTIONS20191201_LIST_CONNECTIONS) {{
                maxResults = "culpa";
                nextToken = "consequuntur";
                xAmzAlgorithm = "repellat";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "occaecati";
                xAmzDate = "numquam";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "quam";
                xAmzSignedHeaders = "molestiae";
            }};            

            ListConnectionsResponse res = sdk.sdk.listConnections(req);

            if (res.listConnectionsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listHosts

Lists the hosts associated with your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListHostsRequest;
import org.openapis.openapi.models.operations.ListHostsResponse;
import org.openapis.openapi.models.operations.ListHostsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListHostsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListHostsRequest req = new ListHostsRequest(                new ListHostsInput() {{
                                maxResults = 623510L;
                                nextToken = "quia";
                            }};, ListHostsXAmzTargetEnum.COM_AMAZONAWS_CODESTAR_CONNECTIONS_CODE_STAR_CONNECTIONS20191201_LIST_HOSTS) {{
                maxResults = "quis";
                nextToken = "vitae";
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "animi";
                xAmzCredential = "enim";
                xAmzDate = "odit";
                xAmzSecurityToken = "quo";
                xAmzSignature = "sequi";
                xAmzSignedHeaders = "tenetur";
            }};            

            ListHostsResponse res = sdk.sdk.listHosts(req);

            if (res.listHostsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Gets the set of key-value pairs (metadata) that are used to manage the resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceInput("id");, ListTagsForResourceXAmzTargetEnum.COM_AMAZONAWS_CODESTAR_CONNECTIONS_CODE_STAR_CONNECTIONS20191201_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "possimus";
                xAmzContentSha256 = "aut";
                xAmzCredential = "quasi";
                xAmzDate = "error";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "quasi";
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

## tagResource

Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagResourceInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceInput("voluptatibus",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("voluptatibus", "ipsa") {{
                                                    key = "nihil";
                                                    value = "praesentium";
                                                }}),
                                                add(new Tag("cum", "perferendis") {{
                                                    key = "omnis";
                                                    value = "voluptate";
                                                }}),
                                                add(new Tag("ut", "maiores") {{
                                                    key = "doloremque";
                                                    value = "reprehenderit";
                                                }}),
                                                add(new Tag("dolore", "iusto") {{
                                                    key = "dicta";
                                                    value = "corporis";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.COM_AMAZONAWS_CODESTAR_CONNECTIONS_CODE_STAR_CONNECTIONS20191201_TAG_RESOURCE) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "harum";
                xAmzCredential = "enim";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "quae";
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

Removes tags from an AWS resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceInput("quidem",                 new String[]{{
                                                add("excepturi"),
                                                add("pariatur"),
                                                add("modi"),
                                            }});, UntagResourceXAmzTargetEnum.COM_AMAZONAWS_CODESTAR_CONNECTIONS_CODE_STAR_CONNECTIONS20191201_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "rem";
                xAmzCredential = "voluptates";
                xAmzDate = "quasi";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "veritatis";
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

## updateHost

Updates a specified host with the provided configurations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateHostRequest;
import org.openapis.openapi.models.operations.UpdateHostResponse;
import org.openapis.openapi.models.operations.UpdateHostXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateHostInput;
import org.openapis.openapi.models.shared.VpcConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateHostRequest req = new UpdateHostRequest(                new UpdateHostInput("incidunt") {{
                                providerEndpoint = "enim";
                                vpcConfiguration = new VpcConfiguration(                new String[]{{
                                                    add("est"),
                                                }},                 new String[]{{
                                                    add("explicabo"),
                                                    add("deserunt"),
                                                    add("distinctio"),
                                                    add("quibusdam"),
                                                }}, "labore") {{
                                    tlsCertificate = "modi";
                                }};;
                            }};, UpdateHostXAmzTargetEnum.COM_AMAZONAWS_CODESTAR_CONNECTIONS_CODE_STAR_CONNECTIONS20191201_UPDATE_HOST) {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "cupiditate";
                xAmzDate = "quos";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "magni";
                xAmzSignedHeaders = "assumenda";
            }};            

            UpdateHostResponse res = sdk.sdk.updateHost(req);

            if (res.updateHostOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
