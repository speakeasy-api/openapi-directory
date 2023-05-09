# SDK

## Overview

An AWS Elemental MediaStore container is a namespace that holds folders and objects. You use a container endpoint to create, read, and delete objects. 

Amazon Web Services documentation
<https://docs.aws.amazon.com/mediastore/>
### Available Operations

* [CreateContainer](#createcontainer) - Creates a storage container to hold objects. A container is similar to a bucket in the Amazon S3 service.
* [DeleteContainer](#deletecontainer) - Deletes the specified container. Before you make a <code>DeleteContainer</code> request, delete any objects in the container or in any folders in the container. You can delete only empty containers. 
* [DeleteContainerPolicy](#deletecontainerpolicy) - Deletes the access policy that is associated with the specified container.
* [DeleteCorsPolicy](#deletecorspolicy) - <p>Deletes the cross-origin resource sharing (CORS) configuration information that is set for the container.</p> <p>To use this operation, you must have permission to perform the <code>MediaStore:DeleteCorsPolicy</code> action. The container owner has this permission by default and can grant this permission to others.</p>
* [DeleteLifecyclePolicy](#deletelifecyclepolicy) - Removes an object lifecycle policy from a container. It takes up to 20 minutes for the change to take effect.
* [DeleteMetricPolicy](#deletemetricpolicy) - Deletes the metric policy that is associated with the specified container. If there is no metric policy associated with the container, MediaStore doesn't send metrics to CloudWatch.
* [DescribeContainer](#describecontainer) - Retrieves the properties of the requested container. This request is commonly used to retrieve the endpoint of a container. An endpoint is a value assigned by the service when a new container is created. A container's endpoint does not change after it has been assigned. The <code>DescribeContainer</code> request returns a single <code>Container</code> object based on <code>ContainerName</code>. To return all <code>Container</code> objects that are associated with a specified AWS account, use <a>ListContainers</a>.
* [GetContainerPolicy](#getcontainerpolicy) - Retrieves the access policy for the specified container. For information about the data that is included in an access policy, see the <a href="https://aws.amazon.com/documentation/iam/">AWS Identity and Access Management User Guide</a>.
* [GetCorsPolicy](#getcorspolicy) - <p>Returns the cross-origin resource sharing (CORS) configuration information that is set for the container.</p> <p>To use this operation, you must have permission to perform the <code>MediaStore:GetCorsPolicy</code> action. By default, the container owner has this permission and can grant it to others.</p>
* [GetLifecyclePolicy](#getlifecyclepolicy) - Retrieves the object lifecycle policy that is assigned to a container.
* [GetMetricPolicy](#getmetricpolicy) - Returns the metric policy for the specified container. 
* [ListContainers](#listcontainers) - <p>Lists the properties of all containers in AWS Elemental MediaStore. </p> <p>You can query to receive all the containers in one response. Or you can include the <code>MaxResults</code> parameter to receive a limited number of containers in each response. In this case, the response includes a token. To get the next set of containers, send the command again, this time with the <code>NextToken</code> parameter (with the returned token as its value). The next set of responses appears, with a token if there are still more containers to receive. </p> <p>See also <a>DescribeContainer</a>, which gets the properties of one container. </p>
* [ListTagsForResource](#listtagsforresource) - Returns a list of the tags assigned to the specified container. 
* [PutContainerPolicy](#putcontainerpolicy) - <p>Creates an access policy for the specified container to restrict the users and clients that can access it. For information about the data that is included in an access policy, see the <a href="https://aws.amazon.com/documentation/iam/">AWS Identity and Access Management User Guide</a>.</p> <p>For this release of the REST API, you can create only one policy for a container. If you enter <code>PutContainerPolicy</code> twice, the second command modifies the existing policy. </p>
* [PutCorsPolicy](#putcorspolicy) - <p>Sets the cross-origin resource sharing (CORS) configuration on a container so that the container can service cross-origin requests. For example, you might want to enable a request whose origin is http://www.example.com to access your AWS Elemental MediaStore container at my.example.container.com by using the browser's XMLHttpRequest capability.</p> <p>To enable CORS on a container, you attach a CORS policy to the container. In the CORS policy, you configure rules that identify origins and the HTTP methods that can be executed on your container. The policy can contain up to 398,000 characters. You can add up to 100 rules to a CORS policy. If more than one rule applies, the service uses the first applicable rule listed.</p> <p>To learn more about CORS, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/cors-policy.html">Cross-Origin Resource Sharing (CORS) in AWS Elemental MediaStore</a>.</p>
* [PutLifecyclePolicy](#putlifecyclepolicy) - <p>Writes an object lifecycle policy to a container. If the container already has an object lifecycle policy, the service replaces the existing policy with the new policy. It takes up to 20 minutes for the change to take effect.</p> <p>For information about how to construct an object lifecycle policy, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/policies-object-lifecycle-components.html">Components of an Object Lifecycle Policy</a>.</p>
* [PutMetricPolicy](#putmetricpolicy) - The metric policy that you want to add to the container. A metric policy allows AWS Elemental MediaStore to send metrics to Amazon CloudWatch. It takes up to 20 minutes for the new policy to take effect.
* [StartAccessLogging](#startaccesslogging) - Starts access logging on the specified container. When you enable access logging on a container, MediaStore delivers access logs for objects stored in that container to Amazon CloudWatch Logs.
* [StopAccessLogging](#stopaccesslogging) - Stops access logging on the specified container. When you stop access logging on a container, MediaStore stops sending access logs to Amazon CloudWatch Logs. These access logs are not saved and are not retrievable.
* [TagResource](#tagresource) - Adds tags to the specified AWS Elemental MediaStore container. Tags are key:value pairs that you can associate with AWS resources. For example, the tag key might be "customer" and the tag value might be "companyA." You can specify one or more tags to add to each container. You can add up to 50 tags to each container. For more information about tagging, including naming and usage conventions, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/tagging.html">Tagging Resources in MediaStore</a>.
* [UntagResource](#untagresource) - Removes tags from the specified container. You can specify one or more tags to remove. 

## CreateContainer

Creates a storage container to hold objects. A container is similar to a bucket in the Amazon S3 service.

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
    res, err := s.SDK.CreateContainer(ctx, operations.CreateContainerRequest{
        CreateContainerInput: shared.CreateContainerInput{
            ContainerName: "ipsa",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "tempora",
                    Value: sdk.String("suscipit"),
                },
                shared.Tag{
                    Key: "molestiae",
                    Value: sdk.String("minus"),
                },
                shared.Tag{
                    Key: "placeat",
                    Value: sdk.String("voluptatum"),
                },
                shared.Tag{
                    Key: "iusto",
                    Value: sdk.String("excepturi"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.CreateContainerXAmzTargetEnumMediaStore20170901CreateContainer,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateContainerOutput != nil {
        // handle response
    }
}
```

## DeleteContainer

Deletes the specified container. Before you make a <code>DeleteContainer</code> request, delete any objects in the container or in any folders in the container. You can delete only empty containers. 

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
    res, err := s.SDK.DeleteContainer(ctx, operations.DeleteContainerRequest{
        DeleteContainerInput: shared.DeleteContainerInput{
            ContainerName: "perferendis",
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("repellendus"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("at"),
        XAmzTarget: operations.DeleteContainerXAmzTargetEnumMediaStore20170901DeleteContainer,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteContainerOutput != nil {
        // handle response
    }
}
```

## DeleteContainerPolicy

Deletes the access policy that is associated with the specified container.

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
    res, err := s.SDK.DeleteContainerPolicy(ctx, operations.DeleteContainerPolicyRequest{
        DeleteContainerPolicyInput: shared.DeleteContainerPolicyInput{
            ContainerName: "maiores",
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("porro"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.DeleteContainerPolicyXAmzTargetEnumMediaStore20170901DeleteContainerPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteContainerPolicyOutput != nil {
        // handle response
    }
}
```

## DeleteCorsPolicy

<p>Deletes the cross-origin resource sharing (CORS) configuration information that is set for the container.</p> <p>To use this operation, you must have permission to perform the <code>MediaStore:DeleteCorsPolicy</code> action. The container owner has this permission by default and can grant this permission to others.</p>

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
    res, err := s.SDK.DeleteCorsPolicy(ctx, operations.DeleteCorsPolicyRequest{
        DeleteCorsPolicyInput: shared.DeleteCorsPolicyInput{
            ContainerName: "dicta",
        },
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("optio"),
        XAmzTarget: operations.DeleteCorsPolicyXAmzTargetEnumMediaStore20170901DeleteCorsPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteCorsPolicyOutput != nil {
        // handle response
    }
}
```

## DeleteLifecyclePolicy

Removes an object lifecycle policy from a container. It takes up to 20 minutes for the change to take effect.

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
    res, err := s.SDK.DeleteLifecyclePolicy(ctx, operations.DeleteLifecyclePolicyRequest{
        DeleteLifecyclePolicyInput: shared.DeleteLifecyclePolicyInput{
            ContainerName: "totam",
        },
        XAmzAlgorithm: sdk.String("beatae"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("cum"),
        XAmzTarget: operations.DeleteLifecyclePolicyXAmzTargetEnumMediaStore20170901DeleteLifecyclePolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteLifecyclePolicyOutput != nil {
        // handle response
    }
}
```

## DeleteMetricPolicy

Deletes the metric policy that is associated with the specified container. If there is no metric policy associated with the container, MediaStore doesn't send metrics to CloudWatch.

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
    res, err := s.SDK.DeleteMetricPolicy(ctx, operations.DeleteMetricPolicyRequest{
        DeleteMetricPolicyInput: shared.DeleteMetricPolicyInput{
            ContainerName: "esse",
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("sed"),
        XAmzTarget: operations.DeleteMetricPolicyXAmzTargetEnumMediaStore20170901DeleteMetricPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteMetricPolicyOutput != nil {
        // handle response
    }
}
```

## DescribeContainer

Retrieves the properties of the requested container. This request is commonly used to retrieve the endpoint of a container. An endpoint is a value assigned by the service when a new container is created. A container's endpoint does not change after it has been assigned. The <code>DescribeContainer</code> request returns a single <code>Container</code> object based on <code>ContainerName</code>. To return all <code>Container</code> objects that are associated with a specified AWS account, use <a>ListContainers</a>.

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
    res, err := s.SDK.DescribeContainer(ctx, operations.DescribeContainerRequest{
        DescribeContainerInput: shared.DescribeContainerInput{
            ContainerName: sdk.String("iste"),
        },
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("laboriosam"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("in"),
        XAmzTarget: operations.DescribeContainerXAmzTargetEnumMediaStore20170901DescribeContainer,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeContainerOutput != nil {
        // handle response
    }
}
```

## GetContainerPolicy

Retrieves the access policy for the specified container. For information about the data that is included in an access policy, see the <a href="https://aws.amazon.com/documentation/iam/">AWS Identity and Access Management User Guide</a>.

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
    res, err := s.SDK.GetContainerPolicy(ctx, operations.GetContainerPolicyRequest{
        GetContainerPolicyInput: shared.GetContainerPolicyInput{
            ContainerName: "corporis",
        },
        XAmzAlgorithm: sdk.String("iste"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        XAmzTarget: operations.GetContainerPolicyXAmzTargetEnumMediaStore20170901GetContainerPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetContainerPolicyOutput != nil {
        // handle response
    }
}
```

## GetCorsPolicy

<p>Returns the cross-origin resource sharing (CORS) configuration information that is set for the container.</p> <p>To use this operation, you must have permission to perform the <code>MediaStore:GetCorsPolicy</code> action. By default, the container owner has this permission and can grant it to others.</p>

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
    res, err := s.SDK.GetCorsPolicy(ctx, operations.GetCorsPolicyRequest{
        GetCorsPolicyInput: shared.GetCorsPolicyInput{
            ContainerName: "est",
        },
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("nobis"),
        XAmzTarget: operations.GetCorsPolicyXAmzTargetEnumMediaStore20170901GetCorsPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCorsPolicyOutput != nil {
        // handle response
    }
}
```

## GetLifecyclePolicy

Retrieves the object lifecycle policy that is assigned to a container.

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
    res, err := s.SDK.GetLifecyclePolicy(ctx, operations.GetLifecyclePolicyRequest{
        GetLifecyclePolicyInput: shared.GetLifecyclePolicyInput{
            ContainerName: "enim",
        },
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("culpa"),
        XAmzTarget: operations.GetLifecyclePolicyXAmzTargetEnumMediaStore20170901GetLifecyclePolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLifecyclePolicyOutput != nil {
        // handle response
    }
}
```

## GetMetricPolicy

Returns the metric policy for the specified container. 

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
    res, err := s.SDK.GetMetricPolicy(ctx, operations.GetMetricPolicyRequest{
        GetMetricPolicyInput: shared.GetMetricPolicyInput{
            ContainerName: "doloribus",
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("repellat"),
        XAmzTarget: operations.GetMetricPolicyXAmzTargetEnumMediaStore20170901GetMetricPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMetricPolicyOutput != nil {
        // handle response
    }
}
```

## ListContainers

<p>Lists the properties of all containers in AWS Elemental MediaStore. </p> <p>You can query to receive all the containers in one response. Or you can include the <code>MaxResults</code> parameter to receive a limited number of containers in each response. In this case, the response includes a token. To get the next set of containers, send the command again, this time with the <code>NextToken</code> parameter (with the returned token as its value). The next set of responses appears, with a token if there are still more containers to receive. </p> <p>See also <a>DescribeContainer</a>, which gets the properties of one container. </p>

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
    res, err := s.SDK.ListContainers(ctx, operations.ListContainersRequest{
        ListContainersInput: shared.ListContainersInput{
            MaxResults: sdk.Int64(653108),
            NextToken: sdk.String("occaecati"),
        },
        MaxResults: sdk.String("numquam"),
        NextToken: sdk.String("commodi"),
        XAmzAlgorithm: sdk.String("quam"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("quia"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("vitae"),
        XAmzTarget: operations.ListContainersXAmzTargetEnumMediaStore20170901ListContainers,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListContainersOutput != nil {
        // handle response
    }
}
```

## ListTagsForResource

Returns a list of the tags assigned to the specified container. 

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
            Resource: "laborum",
        },
        XAmzAlgorithm: sdk.String("animi"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("ipsam"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumMediaStore20170901ListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceOutput != nil {
        // handle response
    }
}
```

## PutContainerPolicy

<p>Creates an access policy for the specified container to restrict the users and clients that can access it. For information about the data that is included in an access policy, see the <a href="https://aws.amazon.com/documentation/iam/">AWS Identity and Access Management User Guide</a>.</p> <p>For this release of the REST API, you can create only one policy for a container. If you enter <code>PutContainerPolicy</code> twice, the second command modifies the existing policy. </p>

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
    res, err := s.SDK.PutContainerPolicy(ctx, operations.PutContainerPolicyRequest{
        PutContainerPolicyInput: shared.PutContainerPolicyInput{
            ContainerName: "id",
            Policy: "possimus",
        },
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("temporibus"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        XAmzTarget: operations.PutContainerPolicyXAmzTargetEnumMediaStore20170901PutContainerPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutContainerPolicyOutput != nil {
        // handle response
    }
}
```

## PutCorsPolicy

<p>Sets the cross-origin resource sharing (CORS) configuration on a container so that the container can service cross-origin requests. For example, you might want to enable a request whose origin is http://www.example.com to access your AWS Elemental MediaStore container at my.example.container.com by using the browser's XMLHttpRequest capability.</p> <p>To enable CORS on a container, you attach a CORS policy to the container. In the CORS policy, you configure rules that identify origins and the HTTP methods that can be executed on your container. The policy can contain up to 398,000 characters. You can add up to 100 rules to a CORS policy. If more than one rule applies, the service uses the first applicable rule listed.</p> <p>To learn more about CORS, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/cors-policy.html">Cross-Origin Resource Sharing (CORS) in AWS Elemental MediaStore</a>.</p>

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
    res, err := s.SDK.PutCorsPolicy(ctx, operations.PutCorsPolicyRequest{
        PutCorsPolicyInput: shared.PutCorsPolicyInput{
            ContainerName: "voluptatibus",
            CorsPolicy: []shared.CorsRule{
                shared.CorsRule{
                    AllowedHeaders: []string{
                        "praesentium",
                        "voluptatibus",
                    },
                    AllowedMethods: []shared.MethodNameEnum{
                        shared.MethodNameEnumDelete,
                    },
                    AllowedOrigins: []string{
                        "cum",
                        "perferendis",
                    },
                    ExposeHeaders: []string{
                        "reprehenderit",
                    },
                    MaxAgeSeconds: sdk.Int64(282807),
                },
                shared.CorsRule{
                    AllowedHeaders: []string{
                        "dicta",
                        "corporis",
                        "dolore",
                        "iusto",
                    },
                    AllowedMethods: []shared.MethodNameEnum{
                        shared.MethodNameEnumDelete,
                    },
                    AllowedOrigins: []string{
                        "accusamus",
                        "commodi",
                    },
                    ExposeHeaders: []string{
                        "quae",
                        "ipsum",
                        "quidem",
                        "molestias",
                    },
                    MaxAgeSeconds: sdk.Int64(566602),
                },
                shared.CorsRule{
                    AllowedHeaders: []string{
                        "modi",
                        "praesentium",
                        "rem",
                        "voluptates",
                    },
                    AllowedMethods: []shared.MethodNameEnum{
                        shared.MethodNameEnumHead,
                    },
                    AllowedOrigins: []string{
                        "veritatis",
                        "itaque",
                        "incidunt",
                    },
                    ExposeHeaders: []string{
                        "consequatur",
                        "est",
                    },
                    MaxAgeSeconds: sdk.Int64(842342),
                },
                shared.CorsRule{
                    AllowedHeaders: []string{
                        "deserunt",
                    },
                    AllowedMethods: []shared.MethodNameEnum{
                        shared.MethodNameEnumHead,
                        shared.MethodNameEnumGet,
                        shared.MethodNameEnumGet,
                    },
                    AllowedOrigins: []string{
                        "aliquid",
                    },
                    ExposeHeaders: []string{
                        "quos",
                        "perferendis",
                        "magni",
                    },
                    MaxAgeSeconds: sdk.Int64(828940),
                },
            },
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("facilis"),
        XAmzTarget: operations.PutCorsPolicyXAmzTargetEnumMediaStore20170901PutCorsPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutCorsPolicyOutput != nil {
        // handle response
    }
}
```

## PutLifecyclePolicy

<p>Writes an object lifecycle policy to a container. If the container already has an object lifecycle policy, the service replaces the existing policy with the new policy. It takes up to 20 minutes for the change to take effect.</p> <p>For information about how to construct an object lifecycle policy, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/policies-object-lifecycle-components.html">Components of an Object Lifecycle Policy</a>.</p>

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
    res, err := s.SDK.PutLifecyclePolicy(ctx, operations.PutLifecyclePolicyRequest{
        PutLifecyclePolicyInput: shared.PutLifecyclePolicyInput{
            ContainerName: "tempore",
            LifecyclePolicy: "labore",
        },
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("eligendi"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.PutLifecyclePolicyXAmzTargetEnumMediaStore20170901PutLifecyclePolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutLifecyclePolicyOutput != nil {
        // handle response
    }
}
```

## PutMetricPolicy

The metric policy that you want to add to the container. A metric policy allows AWS Elemental MediaStore to send metrics to Amazon CloudWatch. It takes up to 20 minutes for the new policy to take effect.

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
    res, err := s.SDK.PutMetricPolicy(ctx, operations.PutMetricPolicyRequest{
        PutMetricPolicyInput: shared.PutMetricPolicyInput{
            ContainerName: "necessitatibus",
            MetricPolicy: shared.MetricPolicy{
                ContainerLevelMetrics: shared.ContainerLevelMetricsEnumDisabled,
                MetricPolicyRules: []shared.MetricPolicyRule{
                    shared.MetricPolicyRule{
                        ObjectGroup: "dolor",
                        ObjectGroupName: "debitis",
                    },
                    shared.MetricPolicyRule{
                        ObjectGroup: "a",
                        ObjectGroupName: "dolorum",
                    },
                    shared.MetricPolicyRule{
                        ObjectGroup: "in",
                        ObjectGroupName: "in",
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("cumque"),
        XAmzSignedHeaders: sdk.String("facere"),
        XAmzTarget: operations.PutMetricPolicyXAmzTargetEnumMediaStore20170901PutMetricPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutMetricPolicyOutput != nil {
        // handle response
    }
}
```

## StartAccessLogging

Starts access logging on the specified container. When you enable access logging on a container, MediaStore delivers access logs for objects stored in that container to Amazon CloudWatch Logs.

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
    res, err := s.SDK.StartAccessLogging(ctx, operations.StartAccessLoggingRequest{
        StartAccessLoggingInput: shared.StartAccessLoggingInput{
            ContainerName: "ea",
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("non"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        XAmzTarget: operations.StartAccessLoggingXAmzTargetEnumMediaStore20170901StartAccessLogging,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartAccessLoggingOutput != nil {
        // handle response
    }
}
```

## StopAccessLogging

Stops access logging on the specified container. When you stop access logging on a container, MediaStore stops sending access logs to Amazon CloudWatch Logs. These access logs are not saved and are not retrievable.

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
    res, err := s.SDK.StopAccessLogging(ctx, operations.StopAccessLoggingRequest{
        StopAccessLoggingInput: shared.StopAccessLoggingInput{
            ContainerName: "delectus",
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("blanditiis"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        XAmzTarget: operations.StopAccessLoggingXAmzTargetEnumMediaStore20170901StopAccessLogging,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopAccessLoggingOutput != nil {
        // handle response
    }
}
```

## TagResource

Adds tags to the specified AWS Elemental MediaStore container. Tags are key:value pairs that you can associate with AWS resources. For example, the tag key might be "customer" and the tag value might be "companyA." You can specify one or more tags to add to each container. You can add up to 50 tags to each container. For more information about tagging, including naming and usage conventions, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/tagging.html">Tagging Resources in MediaStore</a>.

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
            Resource: "amet",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "nisi",
                    Value: sdk.String("vel"),
                },
                shared.Tag{
                    Key: "natus",
                    Value: sdk.String("omnis"),
                },
                shared.Tag{
                    Key: "molestiae",
                    Value: sdk.String("perferendis"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("suscipit"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumMediaStore20170901TagResource,
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

Removes tags from the specified container. You can specify one or more tags to remove. 

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
            Resource: "natus",
            TagKeys: []string{
                "eum",
                "vero",
                "aspernatur",
            },
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("et"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("quos"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumMediaStore20170901UntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceOutput != nil {
        // handle response
    }
}
```
