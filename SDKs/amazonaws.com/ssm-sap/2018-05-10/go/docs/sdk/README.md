# SDK

## Overview

This API reference provides descriptions, syntax, and other details about each of the actions and data types for AWS Systems Manager for SAP. The topic for each action shows the API request parameters and responses. 

Amazon Web Services documentation
<https://docs.aws.amazon.com/ssm-sap/>
### Available Operations

* [DeleteResourcePermission](#deleteresourcepermission) - Removes permissions associated with the target database.
* [DeregisterApplication](#deregisterapplication) - Deregister an SAP application with AWS Systems Manager for SAP. This action does not aﬀect the existing setup of your SAP workloads on Amazon EC2.
* [GetApplication](#getapplication) - Gets an application registered with AWS Systems Manager for SAP. It also returns the components of the application.
* [GetComponent](#getcomponent) - Gets the component of an application registered with AWS Systems Manager for SAP.
* [GetDatabase](#getdatabase) - Gets the SAP HANA database of an application registered with AWS Systems Manager for SAP.
* [GetOperation](#getoperation) - Gets the details of an operation by specifying the operation ID.
* [GetResourcePermission](#getresourcepermission) - Gets permissions associated with the target database.
* [ListApplications](#listapplications) - Lists all the applications registered with AWS Systems Manager for SAP.
* [ListComponents](#listcomponents) - Lists all the components registered with AWS Systems Manager for SAP.
* [ListDatabases](#listdatabases) - Lists the SAP HANA databases of an application registered with AWS Systems Manager for SAP.
* [ListOperations](#listoperations) - Lists the operations performed by AWS Systems Manager for SAP.
* [ListTagsForResource](#listtagsforresource) - Lists all tags on an SAP HANA application and/or database registered with AWS Systems Manager for SAP.
* [PutResourcePermission](#putresourcepermission) - Adds permissions to the target database.
* [RegisterApplication](#registerapplication) - <p>Register an SAP application with AWS Systems Manager for SAP. You must meet the following requirements before registering. </p> <p>The SAP application you want to register with AWS Systems Manager for SAP is running on Amazon EC2.</p> <p>AWS Systems Manager Agent must be setup on an Amazon EC2 instance along with the required IAM permissions.</p> <p>Amazon EC2 instance(s) must have access to the secrets created in AWS Secrets Manager to manage SAP applications and components.</p>
* [TagResource](#tagresource) - Creates tag for a resource by specifying the ARN.
* [UntagResource](#untagresource) - Delete the tags for a resource.
* [UpdateApplicationSettings](#updateapplicationsettings) - Updates the settings of an application registered with AWS Systems Manager for SAP.

## DeleteResourcePermission

Removes permissions associated with the target database.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteResourcePermission(ctx, operations.DeleteResourcePermissionRequest{
        RequestBody: operations.DeleteResourcePermissionRequestBody{
            ActionType: operations.DeleteResourcePermissionRequestBodyActionTypeEnumRestore.ToPointer(),
            ResourceArn: "error",
            SourceResourceArn: sdk.String("deserunt"),
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteResourcePermissionOutput != nil {
        // handle response
    }
}
```

## DeregisterApplication

Deregister an SAP application with AWS Systems Manager for SAP. This action does not aﬀect the existing setup of your SAP workloads on Amazon EC2.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeregisterApplication(ctx, operations.DeregisterApplicationRequest{
        RequestBody: operations.DeregisterApplicationRequestBody{
            ApplicationID: "suscipit",
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("minus"),
        XAmzCredential: sdk.String("placeat"),
        XAmzDate: sdk.String("voluptatum"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("nisi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeregisterApplicationOutput != nil {
        // handle response
    }
}
```

## GetApplication

Gets an application registered with AWS Systems Manager for SAP. It also returns the components of the application.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetApplication(ctx, operations.GetApplicationRequest{
        RequestBody: operations.GetApplicationRequestBody{
            AppRegistryArn: sdk.String("recusandae"),
            ApplicationArn: sdk.String("temporibus"),
            ApplicationID: sdk.String("ab"),
        },
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetApplicationOutput != nil {
        // handle response
    }
}
```

## GetComponent

Gets the component of an application registered with AWS Systems Manager for SAP.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetComponent(ctx, operations.GetComponentRequest{
        RequestBody: operations.GetComponentRequestBody{
            ApplicationID: "quo",
            ComponentID: "odit",
        },
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("at"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("quod"),
        XAmzSignedHeaders: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetComponentOutput != nil {
        // handle response
    }
}
```

## GetDatabase

Gets the SAP HANA database of an application registered with AWS Systems Manager for SAP.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetDatabase(ctx, operations.GetDatabaseRequest{
        RequestBody: operations.GetDatabaseRequestBody{
            ApplicationID: sdk.String("totam"),
            ComponentID: sdk.String("porro"),
            DatabaseArn: sdk.String("dolorum"),
            DatabaseID: sdk.String("dicta"),
        },
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("optio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDatabaseOutput != nil {
        // handle response
    }
}
```

## GetOperation

Gets the details of an operation by specifying the operation ID.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetOperation(ctx, operations.GetOperationRequest{
        RequestBody: operations.GetOperationRequestBody{
            OperationID: "totam",
        },
        XAmzAlgorithm: sdk.String("beatae"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("cum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOperationOutput != nil {
        // handle response
    }
}
```

## GetResourcePermission

Gets permissions associated with the target database.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetResourcePermission(ctx, operations.GetResourcePermissionRequest{
        RequestBody: operations.GetResourcePermissionRequestBody{
            ActionType: operations.GetResourcePermissionRequestBodyActionTypeEnumRestore.ToPointer(),
            ResourceArn: "esse",
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("sed"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetResourcePermissionOutput != nil {
        // handle response
    }
}
```

## ListApplications

Lists all the applications registered with AWS Systems Manager for SAP.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListApplications(ctx, operations.ListApplicationsRequest{
        MaxResults: sdk.String("iste"),
        NextToken: sdk.String("dolor"),
        RequestBody: operations.ListApplicationsRequestBody{
            MaxResults: sdk.Int64(616934),
            NextToken: sdk.String("laboriosam"),
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("fuga"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("iure"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListApplicationsOutput != nil {
        // handle response
    }
}
```

## ListComponents

Lists all the components registered with AWS Systems Manager for SAP.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListComponents(ctx, operations.ListComponentsRequest{
        MaxResults: sdk.String("saepe"),
        NextToken: sdk.String("quidem"),
        RequestBody: operations.ListComponentsRequestBody{
            ApplicationID: sdk.String("architecto"),
            MaxResults: sdk.Int64(60225),
            NextToken: sdk.String("reiciendis"),
        },
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("explicabo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListComponentsOutput != nil {
        // handle response
    }
}
```

## ListDatabases

Lists the SAP HANA databases of an application registered with AWS Systems Manager for SAP.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListDatabases(ctx, operations.ListDatabasesRequest{
        MaxResults: sdk.String("nobis"),
        NextToken: sdk.String("enim"),
        RequestBody: operations.ListDatabasesRequestBody{
            ApplicationID: sdk.String("omnis"),
            ComponentID: sdk.String("nemo"),
            MaxResults: sdk.Int64(325047),
            NextToken: sdk.String("excepturi"),
        },
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("culpa"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("mollitia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDatabasesOutput != nil {
        // handle response
    }
}
```

## ListOperations

Lists the operations performed by AWS Systems Manager for SAP.

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
    res, err := s.SDK.ListOperations(ctx, operations.ListOperationsRequest{
        MaxResults: sdk.String("dolorem"),
        NextToken: sdk.String("culpa"),
        RequestBody: operations.ListOperationsRequestBody{
            ApplicationID: "consequuntur",
            Filters: []shared.Filter{
                shared.Filter{
                    Name: "Tracy Fritsch",
                    Operator: shared.FilterOperatorEnumGreaterThanOrEquals,
                    Value: "velit",
                },
                shared.Filter{
                    Name: "Miss Eugene Hauck",
                    Operator: shared.FilterOperatorEnumEquals,
                    Value: "odit",
                },
                shared.Filter{
                    Name: "Jimmy Wiegand",
                    Operator: shared.FilterOperatorEnumLessThanOrEquals,
                    Value: "aut",
                },
                shared.Filter{
                    Name: "Sabrina Smitham DVM",
                    Operator: shared.FilterOperatorEnumLessThanOrEquals,
                    Value: "vero",
                },
            },
            MaxResults: sdk.Int64(468651),
            NextToken: sdk.String("praesentium"),
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("cum"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("doloremque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOperationsOutput != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists all tags on an SAP HANA application and/or database registered with AWS Systems Manager for SAP.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        XAmzAlgorithm: sdk.String("reprehenderit"),
        XAmzContentSha256: sdk.String("ut"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("dolore"),
        XAmzSignedHeaders: sdk.String("iusto"),
        ResourceArn: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## PutResourcePermission

Adds permissions to the target database.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutResourcePermission(ctx, operations.PutResourcePermissionRequest{
        RequestBody: operations.PutResourcePermissionRequestBody{
            ActionType: operations.PutResourcePermissionRequestBodyActionTypeEnumRestore,
            ResourceArn: "harum",
            SourceResourceArn: "enim",
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("molestias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutResourcePermissionOutput != nil {
        // handle response
    }
}
```

## RegisterApplication

<p>Register an SAP application with AWS Systems Manager for SAP. You must meet the following requirements before registering. </p> <p>The SAP application you want to register with AWS Systems Manager for SAP is running on Amazon EC2.</p> <p>AWS Systems Manager Agent must be setup on an Amazon EC2 instance along with the required IAM permissions.</p> <p>Amazon EC2 instance(s) must have access to the secrets created in AWS Secrets Manager to manage SAP applications and components.</p>

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
    res, err := s.SDK.RegisterApplication(ctx, operations.RegisterApplicationRequest{
        RequestBody: operations.RegisterApplicationRequestBody{
            ApplicationID: "excepturi",
            ApplicationType: operations.RegisterApplicationRequestBodyApplicationTypeEnumHana,
            Credentials: []shared.ApplicationCredential{
                shared.ApplicationCredential{
                    CredentialType: shared.CredentialTypeEnumAdmin,
                    DatabaseName: "modi",
                    SecretID: "praesentium",
                },
                shared.ApplicationCredential{
                    CredentialType: shared.CredentialTypeEnumAdmin,
                    DatabaseName: "rem",
                    SecretID: "voluptates",
                },
                shared.ApplicationCredential{
                    CredentialType: shared.CredentialTypeEnumAdmin,
                    DatabaseName: "quasi",
                    SecretID: "repudiandae",
                },
                shared.ApplicationCredential{
                    CredentialType: shared.CredentialTypeEnumAdmin,
                    DatabaseName: "sint",
                    SecretID: "veritatis",
                },
            },
            Instances: []string{
                "incidunt",
                "enim",
                "consequatur",
                "est",
            },
            SapInstanceNumber: sdk.String("quibusdam"),
            Sid: sdk.String("explicabo"),
            Tags: map[string]string{
                "distinctio": "quibusdam",
                "labore": "modi",
                "qui": "aliquid",
            },
        },
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("magni"),
        XAmzSecurityToken: sdk.String("assumenda"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("alias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterApplicationOutput != nil {
        // handle response
    }
}
```

## TagResource

Creates tag for a resource by specifying the ARN.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            Tags: map[string]string{
                "dolorum": "excepturi",
            },
        },
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("non"),
        ResourceArn: "eligendi",
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

Delete the tags for a resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("dolor"),
        ResourceArn: "debitis",
        TagKeys: []string{
            "dolorum",
            "in",
            "in",
            "illum",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateApplicationSettings

Updates the settings of an application registered with AWS Systems Manager for SAP.

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
    res, err := s.SDK.UpdateApplicationSettings(ctx, operations.UpdateApplicationSettingsRequest{
        RequestBody: operations.UpdateApplicationSettingsRequestBody{
            ApplicationID: "maiores",
            CredentialsToAddOrUpdate: []shared.ApplicationCredential{
                shared.ApplicationCredential{
                    CredentialType: shared.CredentialTypeEnumAdmin,
                    DatabaseName: "dicta",
                    SecretID: "magnam",
                },
                shared.ApplicationCredential{
                    CredentialType: shared.CredentialTypeEnumAdmin,
                    DatabaseName: "cumque",
                    SecretID: "facere",
                },
                shared.ApplicationCredential{
                    CredentialType: shared.CredentialTypeEnumAdmin,
                    DatabaseName: "ea",
                    SecretID: "aliquid",
                },
            },
            CredentialsToRemove: []shared.ApplicationCredential{
                shared.ApplicationCredential{
                    CredentialType: shared.CredentialTypeEnumAdmin,
                    DatabaseName: "accusamus",
                    SecretID: "non",
                },
                shared.ApplicationCredential{
                    CredentialType: shared.CredentialTypeEnumAdmin,
                    DatabaseName: "occaecati",
                    SecretID: "enim",
                },
                shared.ApplicationCredential{
                    CredentialType: shared.CredentialTypeEnumAdmin,
                    DatabaseName: "accusamus",
                    SecretID: "delectus",
                },
            },
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("blanditiis"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateApplicationSettingsOutput != nil {
        // handle response
    }
}
```
