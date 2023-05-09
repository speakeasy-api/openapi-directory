# SDK

## Overview

<p>Amazon Managed Grafana is a fully managed and secure data visualization service that you can use to instantly query, correlate, and visualize operational metrics, logs, and traces from multiple sources. Amazon Managed Grafana makes it easy to deploy, operate, and scale Grafana, a widely deployed data visualization tool that is popular for its extensible data support.</p> <p>With Amazon Managed Grafana, you create logically isolated Grafana servers called <i>workspaces</i>. In a workspace, you can create Grafana dashboards and visualizations to analyze your metrics, logs, and traces without having to build, package, or deploy any hardware to run Grafana servers. </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/grafana/>
### Available Operations

* [AssociateLicense](#associatelicense) - Assigns a Grafana Enterprise license to a workspace. Upgrading to Grafana Enterprise incurs additional fees. For more information, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/upgrade-to-Grafana-Enterprise.html">Upgrade a workspace to Grafana Enterprise</a>.
* [CreateWorkspace](#createworkspace) - <p>Creates a <i>workspace</i>. In a workspace, you can create Grafana dashboards and visualizations to analyze your metrics, logs, and traces. You don't have to build, package, or deploy any hardware to run the Grafana server.</p> <p>Don't use <code>CreateWorkspace</code> to modify an existing workspace. Instead, use <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdateWorkspace.html">UpdateWorkspace</a>.</p>
* [CreateWorkspaceAPIKey](#createworkspaceapikey) - Creates a Grafana API key for the workspace. This key can be used to authenticate requests sent to the workspace's HTTP API. See <a href="https://docs.aws.amazon.com/grafana/latest/userguide/Using-Grafana-APIs.html">https://docs.aws.amazon.com/grafana/latest/userguide/Using-Grafana-APIs.html</a> for available APIs and example requests.
* [DeleteWorkspace](#deleteworkspace) - Deletes an Amazon Managed Grafana workspace.
* [DeleteWorkspaceAPIKey](#deleteworkspaceapikey) - Deletes a Grafana API key for the workspace.
* [DescribeWorkspace](#describeworkspace) - Displays information about one Amazon Managed Grafana workspace.
* [DescribeWorkspaceAuthentication](#describeworkspaceauthentication) - Displays information about the authentication methods used in one Amazon Managed Grafana workspace.
* [DescribeWorkspaceConfiguration](#describeworkspaceconfiguration) - Gets the current configuration string for the given workspace.
* [DisassociateLicense](#disassociatelicense) - Removes the Grafana Enterprise license from a workspace.
* [ListPermissions](#listpermissions) - Lists the users and groups who have the Grafana <code>Admin</code> and <code>Editor</code> roles in this workspace. If you use this operation without specifying <code>userId</code> or <code>groupId</code>, the operation returns the roles of all users and groups. If you specify a <code>userId</code> or a <code>groupId</code>, only the roles for that user or group are returned. If you do this, you can specify only one <code>userId</code> or one <code>groupId</code>.
* [ListTagsForResource](#listtagsforresource) - The <code>ListTagsForResource</code> operation returns the tags that are associated with the Amazon Managed Service for Grafana resource specified by the <code>resourceArn</code>. Currently, the only resource that can be tagged is a workspace. 
* [ListWorkspaces](#listworkspaces) - Returns a list of Amazon Managed Grafana workspaces in the account, with some information about each workspace. For more complete information about one workspace, use <a href="https://docs.aws.amazon.com/AAMG/latest/APIReference/API_DescribeWorkspace.html">DescribeWorkspace</a>.
* [TagResource](#tagresource) - <p>The <code>TagResource</code> operation associates tags with an Amazon Managed Grafana resource. Currently, the only resource that can be tagged is workspaces. </p> <p>If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p>
* [UntagResource](#untagresource) - The <code>UntagResource</code> operation removes the association of the tag with the Amazon Managed Grafana resource. 
* [UpdatePermissions](#updatepermissions) - Updates which users in a workspace have the Grafana <code>Admin</code> or <code>Editor</code> roles.
* [UpdateWorkspace](#updateworkspace) - <p>Modifies an existing Amazon Managed Grafana workspace. If you use this operation and omit any optional parameters, the existing values of those parameters are not changed.</p> <p>To modify the user authentication methods that the workspace uses, such as SAML or IAM Identity Center, use <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdateWorkspaceAuthentication.html">UpdateWorkspaceAuthentication</a>.</p> <p>To modify which users in the workspace have the <code>Admin</code> and <code>Editor</code> Grafana roles, use <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdatePermissions.html">UpdatePermissions</a>.</p>
* [UpdateWorkspaceAuthentication](#updateworkspaceauthentication) - <p>Use this operation to define the identity provider (IdP) that this workspace authenticates users from, using SAML. You can also map SAML assertion attributes to workspace user information and define which groups in the assertion attribute are to have the <code>Admin</code> and <code>Editor</code> roles in the workspace.</p> <note> <p>Changes to the authentication method for a workspace may take a few minutes to take effect.</p> </note>
* [UpdateWorkspaceConfiguration](#updateworkspaceconfiguration) - Updates the configuration string for the given workspace

## AssociateLicense

Assigns a Grafana Enterprise license to a workspace. Upgrading to Grafana Enterprise incurs additional fees. For more information, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/upgrade-to-Grafana-Enterprise.html">Upgrade a workspace to Grafana Enterprise</a>.

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
    res, err := s.SDK.AssociateLicense(ctx, operations.AssociateLicenseRequest{
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        LicenseType: operations.AssociateLicenseLicenseTypeEnumEnterpriseFreeTrial,
        WorkspaceID: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateLicenseResponse != nil {
        // handle response
    }
}
```

## CreateWorkspace

<p>Creates a <i>workspace</i>. In a workspace, you can create Grafana dashboards and visualizations to analyze your metrics, logs, and traces. You don't have to build, package, or deploy any hardware to run the Grafana server.</p> <p>Don't use <code>CreateWorkspace</code> to modify an existing workspace. Instead, use <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdateWorkspace.html">UpdateWorkspace</a>.</p>

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
    res, err := s.SDK.CreateWorkspace(ctx, operations.CreateWorkspaceRequest{
        RequestBody: operations.CreateWorkspaceRequestBody{
            AccountAccessType: operations.CreateWorkspaceRequestBodyAccountAccessTypeEnumCurrentAccount,
            AuthenticationProviders: []shared.AuthenticationProviderTypesEnum{
                shared.AuthenticationProviderTypesEnumSaml,
                shared.AuthenticationProviderTypesEnumSaml,
            },
            ClientToken: sdk.String("voluptatum"),
            Configuration: sdk.String("iusto"),
            NetworkAccessControl: &operations.CreateWorkspaceRequestBodyNetworkAccessControl{
                PrefixListIds: []string{
                    "nisi",
                    "recusandae",
                    "temporibus",
                },
                VpceIds: []string{
                    "quis",
                },
            },
            OrganizationRoleName: sdk.String("veritatis"),
            PermissionType: operations.CreateWorkspaceRequestBodyPermissionTypeEnumServiceManaged,
            StackSetName: sdk.String("perferendis"),
            Tags: map[string]string{
                "repellendus": "sapiente",
                "quo": "odit",
            },
            VpcConfiguration: &operations.CreateWorkspaceRequestBodyVpcConfiguration{
                SecurityGroupIds: []string{
                    "at",
                    "maiores",
                    "molestiae",
                    "quod",
                },
                SubnetIds: []string{
                    "esse",
                    "totam",
                    "porro",
                    "dolorum",
                },
            },
            WorkspaceDataSources: []shared.DataSourceTypeEnum{
                shared.DataSourceTypeEnumAthena,
            },
            WorkspaceDescription: sdk.String("officia"),
            WorkspaceName: sdk.String("occaecati"),
            WorkspaceNotificationDestinations: []shared.NotificationDestinationTypeEnum{
                shared.NotificationDestinationTypeEnumSns,
            },
            WorkspaceOrganizationalUnits: []string{
                "hic",
                "optio",
                "totam",
            },
            WorkspaceRoleArn: sdk.String("beatae"),
        },
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("impedit"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateWorkspaceResponse != nil {
        // handle response
    }
}
```

## CreateWorkspaceAPIKey

Creates a Grafana API key for the workspace. This key can be used to authenticate requests sent to the workspace's HTTP API. See <a href="https://docs.aws.amazon.com/grafana/latest/userguide/Using-Grafana-APIs.html">https://docs.aws.amazon.com/grafana/latest/userguide/Using-Grafana-APIs.html</a> for available APIs and example requests.

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
    res, err := s.SDK.CreateWorkspaceAPIKey(ctx, operations.CreateWorkspaceAPIKeyRequest{
        RequestBody: operations.CreateWorkspaceAPIKeyRequestBody{
            KeyName: "ipsum",
            KeyRole: "excepturi",
            SecondsToLive: 135218,
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("ad"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("sed"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("natus"),
        WorkspaceID: "laboriosam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateWorkspaceAPIKeyResponse != nil {
        // handle response
    }
}
```

## DeleteWorkspace

Deletes an Amazon Managed Grafana workspace.

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
    res, err := s.SDK.DeleteWorkspace(ctx, operations.DeleteWorkspaceRequest{
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("fuga"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("iure"),
        WorkspaceID: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteWorkspaceResponse != nil {
        // handle response
    }
}
```

## DeleteWorkspaceAPIKey

Deletes a Grafana API key for the workspace.

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
    res, err := s.SDK.DeleteWorkspaceAPIKey(ctx, operations.DeleteWorkspaceAPIKeyRequest{
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("laborum"),
        KeyName: "dolores",
        WorkspaceID: "dolorem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteWorkspaceAPIKeyResponse != nil {
        // handle response
    }
}
```

## DescribeWorkspace

Displays information about one Amazon Managed Grafana workspace.

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
    res, err := s.SDK.DescribeWorkspace(ctx, operations.DescribeWorkspaceRequest{
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("minima"),
        WorkspaceID: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeWorkspaceResponse != nil {
        // handle response
    }
}
```

## DescribeWorkspaceAuthentication

Displays information about the authentication methods used in one Amazon Managed Grafana workspace.

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
    res, err := s.SDK.DescribeWorkspaceAuthentication(ctx, operations.DescribeWorkspaceAuthenticationRequest{
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("culpa"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        WorkspaceID: "dolorem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeWorkspaceAuthenticationResponse != nil {
        // handle response
    }
}
```

## DescribeWorkspaceConfiguration

Gets the current configuration string for the given workspace.

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
    res, err := s.SDK.DescribeWorkspaceConfiguration(ctx, operations.DescribeWorkspaceConfigurationRequest{
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("repellat"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("commodi"),
        WorkspaceID: "quam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeWorkspaceConfigurationResponse != nil {
        // handle response
    }
}
```

## DisassociateLicense

Removes the Grafana Enterprise license from a workspace.

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
    res, err := s.SDK.DisassociateLicense(ctx, operations.DisassociateLicenseRequest{
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("velit"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("quia"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("vitae"),
        XAmzSignedHeaders: sdk.String("laborum"),
        LicenseType: operations.DisassociateLicenseLicenseTypeEnumEnterpriseFreeTrial,
        WorkspaceID: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateLicenseResponse != nil {
        // handle response
    }
}
```

## ListPermissions

Lists the users and groups who have the Grafana <code>Admin</code> and <code>Editor</code> roles in this workspace. If you use this operation without specifying <code>userId</code> or <code>groupId</code>, the operation returns the roles of all users and groups. If you specify a <code>userId</code> or a <code>groupId</code>, only the roles for that user or group are returned. If you do this, you can specify only one <code>userId</code> or one <code>groupId</code>.

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
    res, err := s.SDK.ListPermissions(ctx, operations.ListPermissionsRequest{
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("sequi"),
        XAmzDate: sdk.String("tenetur"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("possimus"),
        GroupID: sdk.String("aut"),
        MaxResults: sdk.Int64(97101),
        NextToken: sdk.String("error"),
        UserID: sdk.String("temporibus"),
        UserType: operations.ListPermissionsUserTypeEnumSsoGroup.ToPointer(),
        WorkspaceID: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPermissionsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

The <code>ListTagsForResource</code> operation returns the tags that are associated with the Amazon Managed Service for Grafana resource specified by the <code>resourceArn</code>. Currently, the only resource that can be tagged is a workspace. 

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
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        ResourceArn: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListWorkspaces

Returns a list of Amazon Managed Grafana workspaces in the account, with some information about each workspace. For more complete information about one workspace, use <a href="https://docs.aws.amazon.com/AAMG/latest/APIReference/API_DescribeWorkspace.html">DescribeWorkspace</a>.

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
    res, err := s.SDK.ListWorkspaces(ctx, operations.ListWorkspacesRequest{
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("doloremque"),
        XAmzSecurityToken: sdk.String("reprehenderit"),
        XAmzSignature: sdk.String("ut"),
        XAmzSignedHeaders: sdk.String("maiores"),
        MaxResults: sdk.Int64(120196),
        NextToken: sdk.String("corporis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorkspacesResponse != nil {
        // handle response
    }
}
```

## TagResource

<p>The <code>TagResource</code> operation associates tags with an Amazon Managed Grafana resource. Currently, the only resource that can be tagged is workspaces. </p> <p>If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p>

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
                "iusto": "dicta",
                "harum": "enim",
            },
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("molestias"),
        ResourceArn: "excepturi",
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

The <code>UntagResource</code> operation removes the association of the tag with the Amazon Managed Grafana resource. 

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
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("rem"),
        XAmzSecurityToken: sdk.String("voluptates"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
        ResourceArn: "sint",
        TagKeys: []string{
            "itaque",
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

## UpdatePermissions

Updates which users in a workspace have the Grafana <code>Admin</code> or <code>Editor</code> roles.

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
    res, err := s.SDK.UpdatePermissions(ctx, operations.UpdatePermissionsRequest{
        RequestBody: operations.UpdatePermissionsRequestBody{
            UpdateInstructionBatch: []shared.UpdateInstruction{
                shared.UpdateInstruction{
                    Action: shared.UpdateActionEnumAdd,
                    Role: shared.RoleEnumAdmin,
                    Users: []shared.User{
                        shared.User{
                            ID: "d2abd442-6980-42d5-82a9-4bb4f63c969e",
                            Type: shared.UserTypeEnumSsoGroup,
                        },
                        shared.User{
                            ID: "a3efa77d-fb14-4cd6-aae3-95efb9ba88f3",
                            Type: shared.UserTypeEnumSsoGroup,
                        },
                        shared.User{
                            ID: "66997074-ba44-469b-ae21-41959890afa5",
                            Type: shared.UserTypeEnumSsoUser,
                        },
                    },
                },
                shared.UpdateInstruction{
                    Action: shared.UpdateActionEnumAdd,
                    Role: shared.RoleEnumViewer,
                    Users: []shared.User{
                        shared.User{
                            ID: "516fe4c8-b711-4e5b-bfd2-ed028921cddc",
                            Type: shared.UserTypeEnumSsoUser,
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("odit"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("quidem"),
        WorkspaceID: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePermissionsResponse != nil {
        // handle response
    }
}
```

## UpdateWorkspace

<p>Modifies an existing Amazon Managed Grafana workspace. If you use this operation and omit any optional parameters, the existing values of those parameters are not changed.</p> <p>To modify the user authentication methods that the workspace uses, such as SAML or IAM Identity Center, use <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdateWorkspaceAuthentication.html">UpdateWorkspaceAuthentication</a>.</p> <p>To modify which users in the workspace have the <code>Admin</code> and <code>Editor</code> Grafana roles, use <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdatePermissions.html">UpdatePermissions</a>.</p>

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
    res, err := s.SDK.UpdateWorkspace(ctx, operations.UpdateWorkspaceRequest{
        RequestBody: operations.UpdateWorkspaceRequestBody{
            AccountAccessType: operations.UpdateWorkspaceRequestBodyAccountAccessTypeEnumCurrentAccount.ToPointer(),
            NetworkAccessControl: &operations.UpdateWorkspaceRequestBodyNetworkAccessControl{
                PrefixListIds: []string{
                    "nam",
                    "eaque",
                },
                VpceIds: []string{
                    "nemo",
                    "voluptatibus",
                    "perferendis",
                    "fugiat",
                },
            },
            OrganizationRoleName: sdk.String("amet"),
            PermissionType: operations.UpdateWorkspaceRequestBodyPermissionTypeEnumCustomerManaged.ToPointer(),
            RemoveNetworkAccessConfiguration: sdk.Bool(false),
            RemoveVpcConfiguration: sdk.Bool(false),
            StackSetName: sdk.String("cumque"),
            VpcConfiguration: &operations.UpdateWorkspaceRequestBodyVpcConfiguration{
                SecurityGroupIds: []string{
                    "hic",
                    "libero",
                },
                SubnetIds: []string{
                    "dolores",
                    "quis",
                    "totam",
                },
            },
            WorkspaceDataSources: []shared.DataSourceTypeEnum{
                shared.DataSourceTypeEnumAmazonOpensearchService,
                shared.DataSourceTypeEnumXray,
            },
            WorkspaceDescription: sdk.String("nesciunt"),
            WorkspaceName: sdk.String("eos"),
            WorkspaceNotificationDestinations: []shared.NotificationDestinationTypeEnum{
                shared.NotificationDestinationTypeEnumSns,
            },
            WorkspaceOrganizationalUnits: []string{
                "minus",
            },
            WorkspaceRoleArn: sdk.String("quam"),
        },
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("nostrum"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("facilis"),
        WorkspaceID: "perspiciatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateWorkspaceResponse != nil {
        // handle response
    }
}
```

## UpdateWorkspaceAuthentication

<p>Use this operation to define the identity provider (IdP) that this workspace authenticates users from, using SAML. You can also map SAML assertion attributes to workspace user information and define which groups in the assertion attribute are to have the <code>Admin</code> and <code>Editor</code> roles in the workspace.</p> <note> <p>Changes to the authentication method for a workspace may take a few minutes to take effect.</p> </note>

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
    res, err := s.SDK.UpdateWorkspaceAuthentication(ctx, operations.UpdateWorkspaceAuthenticationRequest{
        RequestBody: operations.UpdateWorkspaceAuthenticationRequestBody{
            AuthenticationProviders: []shared.AuthenticationProviderTypesEnum{
                shared.AuthenticationProviderTypesEnumSaml,
            },
            SamlConfiguration: &operations.UpdateWorkspaceAuthenticationRequestBodySamlConfiguration{
                AllowedOrganizations: []string{
                    "blanditiis",
                },
                AssertionAttributes: &shared.AssertionAttributes{
                    Email: sdk.String("Amber.Mayert99@yahoo.com"),
                    Groups: sdk.String("earum"),
                    Login: sdk.String("modi"),
                    Name: sdk.String("Omar Leuschke"),
                    Org: sdk.String("nobis"),
                    Role: sdk.String("libero"),
                },
                IdpMetadata: &shared.IdpMetadata{
                    URL: sdk.String("delectus"),
                    XML: sdk.String("quaerat"),
                },
                LoginValidityDuration: sdk.Int64(554242),
                RoleValues: &shared.RoleValues{
                    Admin: []string{
                        "dolorem",
                        "dolorem",
                    },
                    Editor: []string{
                        "qui",
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        WorkspaceID: "amet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateWorkspaceAuthenticationResponse != nil {
        // handle response
    }
}
```

## UpdateWorkspaceConfiguration

Updates the configuration string for the given workspace

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
    res, err := s.SDK.UpdateWorkspaceConfiguration(ctx, operations.UpdateWorkspaceConfigurationRequest{
        RequestBody: operations.UpdateWorkspaceConfigurationRequestBody{
            Configuration: "dolorum",
        },
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("quaerat"),
        WorkspaceID: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateWorkspaceConfigurationResponse != nil {
        // handle response
    }
}
```
