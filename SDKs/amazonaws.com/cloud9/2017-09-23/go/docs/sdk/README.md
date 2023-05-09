# SDK

## Overview

<fullname>Cloud9</fullname> <p>Cloud9 is a collection of tools that you can use to code, build, run, test, debug, and release software in the cloud.</p> <p>For more information about Cloud9, see the <a href="https://docs.aws.amazon.com/cloud9/latest/user-guide">Cloud9 User Guide</a>.</p> <p>Cloud9 supports these operations:</p> <ul> <li> <p> <code>CreateEnvironmentEC2</code>: Creates an Cloud9 development environment, launches an Amazon EC2 instance, and then connects from the instance to the environment.</p> </li> <li> <p> <code>CreateEnvironmentMembership</code>: Adds an environment member to an environment.</p> </li> <li> <p> <code>DeleteEnvironment</code>: Deletes an environment. If an Amazon EC2 instance is connected to the environment, also terminates the instance.</p> </li> <li> <p> <code>DeleteEnvironmentMembership</code>: Deletes an environment member from an environment.</p> </li> <li> <p> <code>DescribeEnvironmentMemberships</code>: Gets information about environment members for an environment.</p> </li> <li> <p> <code>DescribeEnvironments</code>: Gets information about environments.</p> </li> <li> <p> <code>DescribeEnvironmentStatus</code>: Gets status information for an environment.</p> </li> <li> <p> <code>ListEnvironments</code>: Gets a list of environment identifiers.</p> </li> <li> <p> <code>ListTagsForResource</code>: Gets the tags for an environment.</p> </li> <li> <p> <code>TagResource</code>: Adds tags to an environment.</p> </li> <li> <p> <code>UntagResource</code>: Removes tags from an environment.</p> </li> <li> <p> <code>UpdateEnvironment</code>: Changes the settings of an existing environment.</p> </li> <li> <p> <code>UpdateEnvironmentMembership</code>: Changes the settings of an existing environment member for an environment.</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/cloud9/>
### Available Operations

* [CreateEnvironmentEc2](#createenvironmentec2) - Creates an Cloud9 development environment, launches an Amazon Elastic Compute Cloud (Amazon EC2) instance, and then connects from the instance to the environment.
* [CreateEnvironmentMembership](#createenvironmentmembership) - Adds an environment member to an Cloud9 development environment.
* [DeleteEnvironment](#deleteenvironment) - Deletes an Cloud9 development environment. If an Amazon EC2 instance is connected to the environment, also terminates the instance.
* [DeleteEnvironmentMembership](#deleteenvironmentmembership) - Deletes an environment member from a development environment.
* [DescribeEnvironmentMemberships](#describeenvironmentmemberships) - Gets information about environment members for an Cloud9 development environment.
* [DescribeEnvironmentStatus](#describeenvironmentstatus) - Gets status information for an Cloud9 development environment.
* [DescribeEnvironments](#describeenvironments) - Gets information about Cloud9 development environments.
* [ListEnvironments](#listenvironments) - Gets a list of Cloud9 development environment identifiers.
* [ListTagsForResource](#listtagsforresource) - Gets a list of the tags associated with an Cloud9 development environment.
* [TagResource](#tagresource) - <p>Adds tags to an Cloud9 development environment.</p> <important> <p>Tags that you add to an Cloud9 environment by using this method will NOT be automatically propagated to underlying resources.</p> </important>
* [UntagResource](#untagresource) - Removes tags from an Cloud9 development environment.
* [UpdateEnvironment](#updateenvironment) - Changes the settings of an existing Cloud9 development environment.
* [UpdateEnvironmentMembership](#updateenvironmentmembership) - Changes the settings of an existing environment member for an Cloud9 development environment.

## CreateEnvironmentEc2

Creates an Cloud9 development environment, launches an Amazon Elastic Compute Cloud (Amazon EC2) instance, and then connects from the instance to the environment.

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
    res, err := s.SDK.CreateEnvironmentEc2(ctx, operations.CreateEnvironmentEc2Request{
        CreateEnvironmentEc2Request: shared.CreateEnvironmentEc2Request{
            AutomaticStopTimeMinutes: sdk.Int64(392785),
            ClientRequestToken: sdk.String("recusandae"),
            ConnectionType: shared.ConnectionTypeEnumConnectSsm.ToPointer(),
            Description: sdk.String("ab"),
            DryRun: sdk.Bool(false),
            ImageID: sdk.String("quis"),
            InstanceType: "veritatis",
            Name: "Christopher Hills",
            OwnerArn: sdk.String("quo"),
            SubnetID: sdk.String("odit"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "at",
                    Value: "maiores",
                },
                shared.Tag{
                    Key: "molestiae",
                    Value: "quod",
                },
                shared.Tag{
                    Key: "quod",
                    Value: "esse",
                },
                shared.Tag{
                    Key: "totam",
                    Value: "porro",
                },
            },
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("officia"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        XAmzTarget: operations.CreateEnvironmentEc2XAmzTargetEnumAwsCloud9WorkspaceManagementServiceCreateEnvironmentEc2,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEnvironmentEc2Result != nil {
        // handle response
    }
}
```

## CreateEnvironmentMembership

Adds an environment member to an Cloud9 development environment.

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
    res, err := s.SDK.CreateEnvironmentMembership(ctx, operations.CreateEnvironmentMembershipRequest{
        CreateEnvironmentMembershipRequest: shared.CreateEnvironmentMembershipRequest{
            EnvironmentID: "hic",
            Permissions: shared.MemberPermissionsEnumReadOnly,
            UserArn: "totam",
        },
        XAmzAlgorithm: sdk.String("beatae"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("cum"),
        XAmzTarget: operations.CreateEnvironmentMembershipXAmzTargetEnumAwsCloud9WorkspaceManagementServiceCreateEnvironmentMembership,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEnvironmentMembershipResult != nil {
        // handle response
    }
}
```

## DeleteEnvironment

Deletes an Cloud9 development environment. If an Amazon EC2 instance is connected to the environment, also terminates the instance.

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
    res, err := s.SDK.DeleteEnvironment(ctx, operations.DeleteEnvironmentRequest{
        DeleteEnvironmentRequest: shared.DeleteEnvironmentRequest{
            EnvironmentID: "esse",
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("sed"),
        XAmzTarget: operations.DeleteEnvironmentXAmzTargetEnumAwsCloud9WorkspaceManagementServiceDeleteEnvironment,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteEnvironmentResult != nil {
        // handle response
    }
}
```

## DeleteEnvironmentMembership

Deletes an environment member from a development environment.

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
    res, err := s.SDK.DeleteEnvironmentMembership(ctx, operations.DeleteEnvironmentMembershipRequest{
        DeleteEnvironmentMembershipRequest: shared.DeleteEnvironmentMembershipRequest{
            EnvironmentID: "iste",
            UserArn: "dolor",
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("laboriosam"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("corporis"),
        XAmzTarget: operations.DeleteEnvironmentMembershipXAmzTargetEnumAwsCloud9WorkspaceManagementServiceDeleteEnvironmentMembership,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteEnvironmentMembershipResult != nil {
        // handle response
    }
}
```

## DescribeEnvironmentMemberships

Gets information about environment members for an Cloud9 development environment.

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
    res, err := s.SDK.DescribeEnvironmentMemberships(ctx, operations.DescribeEnvironmentMembershipsRequest{
        DescribeEnvironmentMembershipsRequest: shared.DescribeEnvironmentMembershipsRequest{
            EnvironmentID: sdk.String("iste"),
            MaxResults: sdk.Int64(437032),
            NextToken: sdk.String("saepe"),
            Permissions: []shared.PermissionsEnum{
                shared.PermissionsEnumOwner,
                shared.PermissionsEnumOwner,
                shared.PermissionsEnumReadOnly,
            },
            UserArn: sdk.String("est"),
        },
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("nobis"),
        XAmzTarget: operations.DescribeEnvironmentMembershipsXAmzTargetEnumAwsCloud9WorkspaceManagementServiceDescribeEnvironmentMemberships,
        MaxResults: sdk.String("enim"),
        NextToken: sdk.String("omnis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEnvironmentMembershipsResult != nil {
        // handle response
    }
}
```

## DescribeEnvironmentStatus

Gets status information for an Cloud9 development environment.

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
    res, err := s.SDK.DescribeEnvironmentStatus(ctx, operations.DescribeEnvironmentStatusRequest{
        DescribeEnvironmentStatusRequest: shared.DescribeEnvironmentStatusRequest{
            EnvironmentID: "nemo",
        },
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("doloribus"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        XAmzTarget: operations.DescribeEnvironmentStatusXAmzTargetEnumAwsCloud9WorkspaceManagementServiceDescribeEnvironmentStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEnvironmentStatusResult != nil {
        // handle response
    }
}
```

## DescribeEnvironments

Gets information about Cloud9 development environments.

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
    res, err := s.SDK.DescribeEnvironments(ctx, operations.DescribeEnvironmentsRequest{
        DescribeEnvironmentsRequest: shared.DescribeEnvironmentsRequest{
            EnvironmentIds: []string{
                "mollitia",
            },
        },
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("culpa"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("repellat"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("numquam"),
        XAmzTarget: operations.DescribeEnvironmentsXAmzTargetEnumAwsCloud9WorkspaceManagementServiceDescribeEnvironments,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEnvironmentsResult != nil {
        // handle response
    }
}
```

## ListEnvironments

Gets a list of Cloud9 development environment identifiers.

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
    res, err := s.SDK.ListEnvironments(ctx, operations.ListEnvironmentsRequest{
        ListEnvironmentsRequest: shared.ListEnvironmentsRequest{
            MaxResults: sdk.Int64(414369),
            NextToken: sdk.String("quam"),
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("velit"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("quia"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("vitae"),
        XAmzSignedHeaders: sdk.String("laborum"),
        XAmzTarget: operations.ListEnvironmentsXAmzTargetEnumAwsCloud9WorkspaceManagementServiceListEnvironments,
        MaxResults: sdk.String("animi"),
        NextToken: sdk.String("enim"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEnvironmentsResult != nil {
        // handle response
    }
}
```

## ListTagsForResource

Gets a list of the tags associated with an Cloud9 development environment.

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
        ListTagsForResourceRequest: shared.ListTagsForResourceRequest{
            ResourceARN: "odit",
        },
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("sequi"),
        XAmzCredential: sdk.String("tenetur"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("possimus"),
        XAmzSignedHeaders: sdk.String("aut"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumAwsCloud9WorkspaceManagementServiceListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## TagResource

<p>Adds tags to an Cloud9 development environment.</p> <important> <p>Tags that you add to an Cloud9 environment by using this method will NOT be automatically propagated to underlying resources.</p> </important>

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
        TagResourceRequest: shared.TagResourceRequest{
            ResourceARN: "quasi",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "temporibus",
                    Value: "laborum",
                },
                shared.Tag{
                    Key: "quasi",
                    Value: "reiciendis",
                },
                shared.Tag{
                    Key: "voluptatibus",
                    Value: "vero",
                },
            },
        },
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("cum"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumAwsCloud9WorkspaceManagementServiceTagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

Removes tags from an Cloud9 development environment.

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
        UntagResourceRequest: shared.UntagResourceRequest{
            ResourceARN: "perferendis",
            TagKeys: []string{
                "reprehenderit",
            },
        },
        XAmzAlgorithm: sdk.String("ut"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("dolore"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumAwsCloud9WorkspaceManagementServiceUntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateEnvironment

Changes the settings of an existing Cloud9 development environment.

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
    res, err := s.SDK.UpdateEnvironment(ctx, operations.UpdateEnvironmentRequest{
        UpdateEnvironmentRequest: shared.UpdateEnvironmentRequest{
            Description: sdk.String("harum"),
            EnvironmentID: "enim",
            ManagedCredentialsAction: shared.ManagedCredentialsActionEnumDisable.ToPointer(),
            Name: sdk.String("Elvira Bergnaum"),
        },
        XAmzAlgorithm: sdk.String("molestias"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("voluptates"),
        XAmzTarget: operations.UpdateEnvironmentXAmzTargetEnumAwsCloud9WorkspaceManagementServiceUpdateEnvironment,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateEnvironmentResult != nil {
        // handle response
    }
}
```

## UpdateEnvironmentMembership

Changes the settings of an existing environment member for an Cloud9 development environment.

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
    res, err := s.SDK.UpdateEnvironmentMembership(ctx, operations.UpdateEnvironmentMembershipRequest{
        UpdateEnvironmentMembershipRequest: shared.UpdateEnvironmentMembershipRequest{
            EnvironmentID: "quasi",
            Permissions: shared.MemberPermissionsEnumReadOnly,
            UserArn: "sint",
        },
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("itaque"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("consequatur"),
        XAmzSignature: sdk.String("est"),
        XAmzSignedHeaders: sdk.String("quibusdam"),
        XAmzTarget: operations.UpdateEnvironmentMembershipXAmzTargetEnumAwsCloud9WorkspaceManagementServiceUpdateEnvironmentMembership,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateEnvironmentMembershipResult != nil {
        // handle response
    }
}
```
