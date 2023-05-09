# SDK

## Overview

<fullname>AWS CodeStar Connections</fullname> <p>This AWS CodeStar Connections API Reference provides descriptions and usage examples of the operations and data types for the AWS CodeStar Connections API. You can use the connections API to work with connections and installations.</p> <p> <i>Connections</i> are configurations that you use to connect AWS resources to external code repositories. Each connection is a resource that can be given to services such as CodePipeline to connect to a third-party repository such as Bitbucket. For example, you can add the connection in CodePipeline so that it triggers your pipeline when a code change is made to your third-party code repository. Each connection is named and associated with a unique ARN that is used to reference the connection.</p> <p>When you create a connection, the console initiates a third-party connection handshake. <i>Installations</i> are the apps that are used to conduct this handshake. For example, the installation for the Bitbucket provider type is the Bitbucket app. When you create a connection, you can choose an existing installation or create one.</p> <p>When you want to create a connection to an installed provider type such as GitHub Enterprise Server, you create a <i>host</i> for your connections.</p> <p>You can work with connections by calling:</p> <ul> <li> <p> <a>CreateConnection</a>, which creates a uniquely named connection that can be referenced by services such as CodePipeline.</p> </li> <li> <p> <a>DeleteConnection</a>, which deletes the specified connection.</p> </li> <li> <p> <a>GetConnection</a>, which returns information about the connection, including the connection status.</p> </li> <li> <p> <a>ListConnections</a>, which lists the connections associated with your account.</p> </li> </ul> <p>You can work with hosts by calling:</p> <ul> <li> <p> <a>CreateHost</a>, which creates a host that represents the infrastructure where your provider is installed.</p> </li> <li> <p> <a>DeleteHost</a>, which deletes the specified host.</p> </li> <li> <p> <a>GetHost</a>, which returns information about the host, including the setup status.</p> </li> <li> <p> <a>ListHosts</a>, which lists the hosts associated with your account.</p> </li> </ul> <p>You can work with tags in AWS CodeStar Connections by calling the following:</p> <ul> <li> <p> <a>ListTagsForResource</a>, which gets information about AWS tags for a specified Amazon Resource Name (ARN) in AWS CodeStar Connections.</p> </li> <li> <p> <a>TagResource</a>, which adds or updates tags for a resource in AWS CodeStar Connections.</p> </li> <li> <p> <a>UntagResource</a>, which removes tags for a resource in AWS CodeStar Connections.</p> </li> </ul> <p>For information about how to use AWS CodeStar Connections, see the <a href="https://docs.aws.amazon.com/dtconsole/latest/userguide/welcome-connections.html">Developer Tools User Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/codestar-connections/>
### Available Operations

* [CreateConnection](#createconnection) - Creates a connection that can then be given to other AWS services like CodePipeline so that it can access third-party code repositories. The connection is in pending status until the third-party connection handshake is completed from the console.
* [CreateHost](#createhost) - <p>Creates a resource that represents the infrastructure where a third-party provider is installed. The host is used when you create connections to an installed third-party provider type, such as GitHub Enterprise Server. You create one host for all connections to that provider.</p> <note> <p>A host created through the CLI or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by setting up the host in the console.</p> </note>
* [DeleteConnection](#deleteconnection) - The connection to be deleted.
* [DeleteHost](#deletehost) - <p>The host to be deleted. Before you delete a host, all connections associated to the host must be deleted.</p> <note> <p>A host cannot be deleted if it is in the VPC_CONFIG_INITIALIZING or VPC_CONFIG_DELETING state.</p> </note>
* [GetConnection](#getconnection) - Returns the connection ARN and details such as status, owner, and provider type.
* [GetHost](#gethost) - Returns the host ARN and details such as status, provider type, endpoint, and, if applicable, the VPC configuration.
* [ListConnections](#listconnections) - Lists the connections associated with your account.
* [ListHosts](#listhosts) - Lists the hosts associated with your account.
* [ListTagsForResource](#listtagsforresource) - Gets the set of key-value pairs (metadata) that are used to manage the resource.
* [TagResource](#tagresource) - Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.
* [UntagResource](#untagresource) - Removes tags from an AWS resource.
* [UpdateHost](#updatehost) - Updates a specified host with the provided configurations.

## CreateConnection

Creates a connection that can then be given to other AWS services like CodePipeline so that it can access third-party code repositories. The connection is in pending status until the third-party connection handshake is completed from the console.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateConnection(ctx, operations.CreateConnectionRequest{
        CreateConnectionInput: shared.CreateConnectionInput{
            ConnectionName: "molestiae",
            HostArn: sdk.String("minus"),
            ProviderType: shared.ProviderTypeEnumGitHubEnterpriseServer.ToPointer(),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "iusto",
                    Value: "excepturi",
                },
                shared.Tag{
                    Key: "nisi",
                    Value: "recusandae",
                },
                shared.Tag{
                    Key: "temporibus",
                    Value: "ab",
                },
            },
        },
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        XAmzTarget: operations.CreateConnectionXAmzTargetEnumComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateConnection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateConnectionOutput != nil {
        // handle response
    }
}
```

## CreateHost

<p>Creates a resource that represents the infrastructure where a third-party provider is installed. The host is used when you create connections to an installed third-party provider type, such as GitHub Enterprise Server. You create one host for all connections to that provider.</p> <note> <p>A host created through the CLI or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by setting up the host in the console.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateHost(ctx, operations.CreateHostRequest{
        CreateHostInput: shared.CreateHostInput{
            Name: "Fred Strosin",
            ProviderEndpoint: "molestiae",
            ProviderType: shared.ProviderTypeEnumGitHubEnterpriseServer,
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "esse",
                    Value: "totam",
                },
                shared.Tag{
                    Key: "porro",
                    Value: "dolorum",
                },
                shared.Tag{
                    Key: "dicta",
                    Value: "nam",
                },
                shared.Tag{
                    Key: "officia",
                    Value: "occaecati",
                },
            },
            VpcConfiguration: &shared.VpcConfiguration{
                SecurityGroupIds: []string{
                    "deleniti",
                },
                SubnetIds: []string{
                    "optio",
                    "totam",
                    "beatae",
                    "commodi",
                },
                TLSCertificate: sdk.String("molestiae"),
                VpcID: "modi",
            },
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        XAmzTarget: operations.CreateHostXAmzTargetEnumComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateHost,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateHostOutput != nil {
        // handle response
    }
}
```

## DeleteConnection

The connection to be deleted.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteConnection(ctx, operations.DeleteConnectionRequest{
        DeleteConnectionInput: shared.DeleteConnectionInput{
            ConnectionArn: "perferendis",
        },
        XAmzAlgorithm: sdk.String("ad"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("sed"),
        XAmzDate: sdk.String("iste"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("laboriosam"),
        XAmzTarget: operations.DeleteConnectionXAmzTargetEnumComAmazonawsCodestarConnectionsCodeStarConnections20191201DeleteConnection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteConnectionOutput != nil {
        // handle response
    }
}
```

## DeleteHost

<p>The host to be deleted. Before you delete a host, all connections associated to the host must be deleted.</p> <note> <p>A host cannot be deleted if it is in the VPC_CONFIG_INITIALIZING or VPC_CONFIG_DELETING state.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteHost(ctx, operations.DeleteHostRequest{
        DeleteHostInput: shared.DeleteHostInput{
            HostArn: "hic",
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("fuga"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("saepe"),
        XAmzTarget: operations.DeleteHostXAmzTargetEnumComAmazonawsCodestarConnectionsCodeStarConnections20191201DeleteHost,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteHostOutput != nil {
        // handle response
    }
}
```

## GetConnection

Returns the connection ARN and details such as status, owner, and provider type.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetConnection(ctx, operations.GetConnectionRequest{
        GetConnectionInput: shared.GetConnectionInput{
            ConnectionArn: "quidem",
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("dolores"),
        XAmzTarget: operations.GetConnectionXAmzTargetEnumComAmazonawsCodestarConnectionsCodeStarConnections20191201GetConnection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConnectionOutput != nil {
        // handle response
    }
}
```

## GetHost

Returns the host ARN and details such as status, provider type, endpoint, and, if applicable, the VPC configuration.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetHost(ctx, operations.GetHostRequest{
        GetHostInput: shared.GetHostInput{
            HostArn: "dolorem",
        },
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("minima"),
        XAmzTarget: operations.GetHostXAmzTargetEnumComAmazonawsCodestarConnectionsCodeStarConnections20191201GetHost,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetHostOutput != nil {
        // handle response
    }
}
```

## ListConnections

Lists the connections associated with your account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListConnections(ctx, operations.ListConnectionsRequest{
        ListConnectionsInput: shared.ListConnectionsInput{
            HostArnFilter: sdk.String("excepturi"),
            MaxResults: sdk.Int64(38425),
            NextToken: sdk.String("iure"),
            ProviderTypeFilter: shared.ProviderTypeEnumGitHub.ToPointer(),
        },
        MaxResults: sdk.String("doloribus"),
        NextToken: sdk.String("sapiente"),
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("repellat"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        XAmzTarget: operations.ListConnectionsXAmzTargetEnumComAmazonawsCodestarConnectionsCodeStarConnections20191201ListConnections,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConnectionsOutput != nil {
        // handle response
    }
}
```

## ListHosts

Lists the hosts associated with your account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListHosts(ctx, operations.ListHostsRequest{
        ListHostsInput: shared.ListHostsInput{
            MaxResults: sdk.Int64(581850),
            NextToken: sdk.String("numquam"),
        },
        MaxResults: sdk.String("commodi"),
        NextToken: sdk.String("quam"),
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("velit"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("quia"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("vitae"),
        XAmzSignedHeaders: sdk.String("laborum"),
        XAmzTarget: operations.ListHostsXAmzTargetEnumComAmazonawsCodestarConnectionsCodeStarConnections20191201ListHosts,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListHostsOutput != nil {
        // handle response
    }
}
```

## ListTagsForResource

Gets the set of key-value pairs (metadata) that are used to manage the resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ListTagsForResourceInput: shared.ListTagsForResourceInput{
            ResourceArn: "animi",
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("odit"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("sequi"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("id"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumComAmazonawsCodestarConnectionsCodeStarConnections20191201ListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceOutput != nil {
        // handle response
    }
}
```

## TagResource

Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        TagResourceInput: shared.TagResourceInput{
            ResourceArn: "possimus",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "quasi",
                    Value: "error",
                },
            },
        },
        XAmzAlgorithm: sdk.String("temporibus"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("nihil"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumComAmazonawsCodestarConnectionsCodeStarConnections20191201TagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceOutput != nil {
        // handle response
    }
}
```

## UntagResource

Removes tags from an AWS resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceInput: shared.UntagResourceInput{
            ResourceArn: "praesentium",
            TagKeys: []string{
                "ipsa",
                "omnis",
                "voluptate",
                "cum",
            },
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("doloremque"),
        XAmzCredential: sdk.String("reprehenderit"),
        XAmzDate: sdk.String("ut"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("corporis"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumComAmazonawsCodestarConnectionsCodeStarConnections20191201UntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceOutput != nil {
        // handle response
    }
}
```

## UpdateHost

Updates a specified host with the provided configurations.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateHost(ctx, operations.UpdateHostRequest{
        UpdateHostInput: shared.UpdateHostInput{
            HostArn: "dolore",
            ProviderEndpoint: sdk.String("iusto"),
            VpcConfiguration: &shared.VpcConfiguration{
                SecurityGroupIds: []string{
                    "harum",
                },
                SubnetIds: []string{
                    "accusamus",
                    "commodi",
                },
                TLSCertificate: sdk.String("repudiandae"),
                VpcID: "quae",
            },
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("molestias"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("praesentium"),
        XAmzTarget: operations.UpdateHostXAmzTargetEnumComAmazonawsCodestarConnectionsCodeStarConnections20191201UpdateHost,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateHostOutput != nil {
        // handle response
    }
}
```
