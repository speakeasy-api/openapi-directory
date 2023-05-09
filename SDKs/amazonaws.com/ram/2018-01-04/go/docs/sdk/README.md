# SDK

## Overview

<p>This is the <i>Resource Access Manager API Reference</i>. This documentation provides descriptions and syntax for each of the actions and data types in RAM. RAM is a service that helps you securely share your Amazon Web Services resources to other Amazon Web Services accounts. If you use Organizations to manage your accounts, then you can share your resources with your entire organization or to organizational units (OUs). For supported resource types, you can also share resources with individual Identity and Access Management (IAM) roles and users. </p> <p>To learn more about RAM, see the following resources:</p> <ul> <li> <p> <a href="http://aws.amazon.com/ram">Resource Access Manager product page</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/ram/latest/userguide/">Resource Access Manager User Guide</a> </p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/ram/>
### Available Operations

* [AcceptResourceShareInvitation](#acceptresourceshareinvitation) - Accepts an invitation to a resource share from another Amazon Web Services account. After you accept the invitation, the resources included in the resource share are available to interact with in the relevant Amazon Web Services Management Consoles and tools.
* [AssociateResourceShare](#associateresourceshare) - Adds the specified list of principals and list of resources to a resource share. Principals that already have access to this resource share immediately receive access to the added resources. Newly added principals immediately receive access to the resources shared in this resource share. 
* [AssociateResourceSharePermission](#associateresourcesharepermission) - Adds or replaces the RAM permission for a resource type included in a resource share. You can have exactly one permission associated with each resource type in the resource share. You can add a new RAM permission only if there are currently no resources of that resource type currently in the resource share.
* [CreatePermission](#createpermission) - Creates a customer managed permission for a specified resource type that you can attach to resource shares. It is created in the Amazon Web Services Region in which you call the operation.
* [CreatePermissionVersion](#createpermissionversion) - <p>Creates a new version of the specified customer managed permission. The new version is automatically set as the default version of the customer managed permission. New resource shares automatically use the default permission. Existing resource shares continue to use their original permission versions, but you can use <a>ReplacePermissionAssociations</a> to update them.</p> <p>If the specified customer managed permission already has the maximum of 5 versions, then you must delete one of the existing versions before you can create a new one.</p>
* [CreateResourceShare](#createresourceshare) - <p>Creates a resource share. You can provide a list of the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> for the resources that you want to share, a list of principals you want to share the resources with, and the permissions to grant those principals.</p> <note> <p>Sharing a resource makes it available for use by principals outside of the Amazon Web Services account that created the resource. Sharing doesn't change any permissions or quotas that apply to the resource in the account that created it.</p> </note>
* [DeletePermission](#deletepermission) - Deletes the specified customer managed permission in the Amazon Web Services Region in which you call this operation. You can delete a customer managed permission only if it isn't attached to any resource share. The operation deletes all versions associated with the customer managed permission.
* [DeletePermissionVersion](#deletepermissionversion) - <p>Deletes one version of a customer managed permission. The version you specify must not be attached to any resource share and must not be the default version for the permission.</p> <p>If a customer managed permission has the maximum of 5 versions, then you must delete at least one version before you can create another.</p>
* [DeleteResourceShare](#deleteresourceshare) - <p>Deletes the specified resource share.</p> <important> <p>This doesn't delete any of the resources that were associated with the resource share; it only stops the sharing of those resources through this resource share.</p> </important>
* [DisassociateResourceShare](#disassociateresourceshare) - Removes the specified principals or resources from participating in the specified resource share.
* [DisassociateResourceSharePermission](#disassociateresourcesharepermission) - Removes a managed permission from a resource share. Permission changes take effect immediately. You can remove a managed permission from a resource share only if there are currently no resources of the relevant resource type currently attached to the resource share.
* [EnableSharingWithAwsOrganization](#enablesharingwithawsorganization) - <p>Enables resource sharing within your organization in Organizations. This operation creates a service-linked role called <code>AWSServiceRoleForResourceAccessManager</code> that has the IAM managed policy named AWSResourceAccessManagerServiceRolePolicy attached. This role permits RAM to retrieve information about the organization and its structure. This lets you share resources with all of the accounts in the calling account's organization by specifying the organization ID, or all of the accounts in an organizational unit (OU) by specifying the OU ID. Until you enable sharing within the organization, you can specify only individual Amazon Web Services accounts, or for supported resource types, IAM roles and users.</p> <p>You must call this operation from an IAM role or user in the organization's management account.</p> <p/>
* [GetPermission](#getpermission) - Retrieves the contents of a managed permission in JSON format.
* [GetResourcePolicies](#getresourcepolicies) - Retrieves the resource policies for the specified resources that you own and have shared.
* [GetResourceShareAssociations](#getresourceshareassociations) - Retrieves the lists of resources and principals that associated for resource shares that you own.
* [GetResourceShareInvitations](#getresourceshareinvitations) - Retrieves details about invitations that you have received for resource shares.
* [GetResourceShares](#getresourceshares) - Retrieves details about the resource shares that you own or that are shared with you.
* [ListPendingInvitationResources](#listpendinginvitationresources) - Lists the resources in a resource share that is shared with you but for which the invitation is still <code>PENDING</code>. That means that you haven't accepted or rejected the invitation and the invitation hasn't expired.
* [ListPermissionAssociations](#listpermissionassociations) - Lists information about the managed permission and its associations to any resource shares that use this managed permission. This lets you see which resource shares use which versions of the specified managed permission.
* [ListPermissionVersions](#listpermissionversions) - Lists the available versions of the specified RAM permission.
* [ListPermissions](#listpermissions) - Retrieves a list of available RAM permissions that you can use for the supported resource types. 
* [ListPrincipals](#listprincipals) - Lists the principals that you are sharing resources with or that are sharing resources with you.
* [ListReplacePermissionAssociationsWork](#listreplacepermissionassociationswork) - Retrieves the current status of the asynchronous tasks performed by RAM when you perform the <a>ReplacePermissionAssociationsWork</a> operation.
* [ListResourceSharePermissions](#listresourcesharepermissions) - Lists the RAM permissions that are associated with a resource share.
* [ListResourceTypes](#listresourcetypes) - Lists the resource types that can be shared by RAM.
* [ListResources](#listresources) - Lists the resources that you added to a resource share or the resources that are shared with you.
* [PromotePermissionCreatedFromPolicy](#promotepermissioncreatedfrompolicy) - <p>When you attach a resource-based policy to a resource, RAM automatically creates a resource share of <code>featureSet</code>=<code>CREATED_FROM_POLICY</code> with a managed permission that has the same IAM permissions as the original resource-based policy. However, this type of managed permission is visible to only the resource share owner, and the associated resource share can't be modified by using RAM.</p> <p>This operation creates a separate, fully manageable customer managed permission that has the same IAM permissions as the original resource-based policy. You can associate this customer managed permission to any resource shares.</p> <p>Before you use <a>PromoteResourceShareCreatedFromPolicy</a>, you should first run this operation to ensure that you have an appropriate customer managed permission that can be associated with the promoted resource share.</p> <note> <ul> <li> <p>The original <code>CREATED_FROM_POLICY</code> policy isn't deleted, and resource shares using that original policy aren't automatically updated.</p> </li> <li> <p>You can't modify a <code>CREATED_FROM_POLICY</code> resource share so you can't associate the new customer managed permission by using <code>ReplacePermsissionAssociations</code>. However, if you use <a>PromoteResourceShareCreatedFromPolicy</a>, that operation automatically associates the fully manageable customer managed permission to the newly promoted <code>STANDARD</code> resource share.</p> </li> <li> <p>After you promote a resource share, if the original <code>CREATED_FROM_POLICY</code> managed permission has no other associations to A resource share, then RAM automatically deletes it.</p> </li> </ul> </note>
* [PromoteResourceShareCreatedFromPolicy](#promoteresourcesharecreatedfrompolicy) - <p>When you attach a resource-based policy to a resource, RAM automatically creates a resource share of <code>featureSet</code>=<code>CREATED_FROM_POLICY</code> with a managed permission that has the same IAM permissions as the original resource-based policy. However, this type of managed permission is visible to only the resource share owner, and the associated resource share can't be modified by using RAM.</p> <p>This operation promotes the resource share to a <code>STANDARD</code> resource share that is fully manageable in RAM. When you promote a resource share, you can then manage the resource share in RAM and it becomes visible to all of the principals you shared it with.</p> <important> <p>Before you perform this operation, you should first run <a>PromotePermissionCreatedFromPolicy</a>to ensure that you have an appropriate customer managed permission that can be associated with this resource share after its is promoted. If this operation can't find a managed permission that exactly matches the existing <code>CREATED_FROM_POLICY</code> permission, then this operation fails.</p> </important>
* [RejectResourceShareInvitation](#rejectresourceshareinvitation) - Rejects an invitation to a resource share from another Amazon Web Services account.
* [ReplacePermissionAssociations](#replacepermissionassociations) - <p>Updates all resource shares that use a managed permission to a different managed permission. This operation always applies the default version of the target managed permission. You can optionally specify that the update applies to only resource shares that currently use a specified version. This enables you to update to the latest version, without changing the which managed permission is used.</p> <p>You can use this operation to update all of your resource shares to use the current default version of the permission by specifying the same value for the <code>fromPermissionArn</code> and <code>toPermissionArn</code> parameters.</p> <p>You can use the optional <code>fromPermissionVersion</code> parameter to update only those resources that use a specified version of the managed permission to the new managed permission.</p> <important> <p>To successfully perform this operation, you must have permission to update the resource-based policy on all affected resource types.</p> </important>
* [SetDefaultPermissionVersion](#setdefaultpermissionversion) - Designates the specified version number as the default version for the specified customer managed permission. New resource shares automatically use this new default permission. Existing resource shares continue to use their original permission version, but you can use <a>ReplacePermissionAssociations</a> to update them.
* [TagResource](#tagresource) - <p>Adds the specified tag keys and values to a resource share or managed permission. If you choose a resource share, the tags are attached to only the resource share, not to the resources that are in the resource share.</p> <p>The tags on a managed permission are the same for all versions of the managed permission.</p>
* [UntagResource](#untagresource) - Removes the specified tag key and value pairs from the specified resource share or managed permission.
* [UpdateResourceShare](#updateresourceshare) - Modifies some of the properties of the specified resource share.

## AcceptResourceShareInvitation

Accepts an invitation to a resource share from another Amazon Web Services account. After you accept the invitation, the resources included in the resource share are available to interact with in the relevant Amazon Web Services Management Consoles and tools.

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
    res, err := s.SDK.AcceptResourceShareInvitation(ctx, operations.AcceptResourceShareInvitationRequest{
        RequestBody: operations.AcceptResourceShareInvitationRequestBody{
            ClientToken: sdk.String("error"),
            ResourceShareInvitationArn: "deserunt",
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

    if res.AcceptResourceShareInvitationResponse != nil {
        // handle response
    }
}
```

## AssociateResourceShare

Adds the specified list of principals and list of resources to a resource share. Principals that already have access to this resource share immediately receive access to the added resources. Newly added principals immediately receive access to the resources shared in this resource share. 

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
    res, err := s.SDK.AssociateResourceShare(ctx, operations.AssociateResourceShareRequest{
        RequestBody: operations.AssociateResourceShareRequestBody{
            ClientToken: sdk.String("suscipit"),
            Principals: []string{
                "minus",
                "placeat",
            },
            ResourceArns: []string{
                "iusto",
                "excepturi",
                "nisi",
            },
            ResourceShareArn: "recusandae",
        },
        XAmzAlgorithm: sdk.String("temporibus"),
        XAmzContentSha256: sdk.String("ab"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("ipsam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateResourceShareResponse != nil {
        // handle response
    }
}
```

## AssociateResourceSharePermission

Adds or replaces the RAM permission for a resource type included in a resource share. You can have exactly one permission associated with each resource type in the resource share. You can add a new RAM permission only if there are currently no resources of that resource type currently in the resource share.

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
    res, err := s.SDK.AssociateResourceSharePermission(ctx, operations.AssociateResourceSharePermissionRequest{
        RequestBody: operations.AssociateResourceSharePermissionRequestBody{
            ClientToken: sdk.String("repellendus"),
            PermissionArn: "sapiente",
            PermissionVersion: sdk.Int64(778157),
            Replace: sdk.Bool(false),
            ResourceShareArn: "odit",
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

    if res.AssociateResourceSharePermissionResponse != nil {
        // handle response
    }
}
```

## CreatePermission

Creates a customer managed permission for a specified resource type that you can attach to resource shares. It is created in the Amazon Web Services Region in which you call the operation.

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
    res, err := s.SDK.CreatePermission(ctx, operations.CreatePermissionRequest{
        RequestBody: operations.CreatePermissionRequestBody{
            ClientToken: sdk.String("totam"),
            Name: "Omar Carroll",
            PolicyTemplate: "occaecati",
            ResourceType: "fugit",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("hic"),
                    Value: sdk.String("optio"),
                },
                shared.Tag{
                    Key: sdk.String("totam"),
                    Value: sdk.String("beatae"),
                },
                shared.Tag{
                    Key: sdk.String("commodi"),
                    Value: sdk.String("molestiae"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePermissionResponse != nil {
        // handle response
    }
}
```

## CreatePermissionVersion

<p>Creates a new version of the specified customer managed permission. The new version is automatically set as the default version of the customer managed permission. New resource shares automatically use the default permission. Existing resource shares continue to use their original permission versions, but you can use <a>ReplacePermissionAssociations</a> to update them.</p> <p>If the specified customer managed permission already has the maximum of 5 versions, then you must delete one of the existing versions before you can create a new one.</p>

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
    res, err := s.SDK.CreatePermissionVersion(ctx, operations.CreatePermissionVersionRequest{
        RequestBody: operations.CreatePermissionVersionRequestBody{
            ClientToken: sdk.String("aspernatur"),
            PermissionArn: "perferendis",
            PolicyTemplate: "ad",
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("laboriosam"),
        XAmzSignedHeaders: sdk.String("hic"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePermissionVersionResponse != nil {
        // handle response
    }
}
```

## CreateResourceShare

<p>Creates a resource share. You can provide a list of the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> for the resources that you want to share, a list of principals you want to share the resources with, and the permissions to grant those principals.</p> <note> <p>Sharing a resource makes it available for use by principals outside of the Amazon Web Services account that created the resource. Sharing doesn't change any permissions or quotas that apply to the resource in the account that created it.</p> </note>

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
    res, err := s.SDK.CreateResourceShare(ctx, operations.CreateResourceShareRequest{
        RequestBody: operations.CreateResourceShareRequestBody{
            AllowExternalPrincipals: sdk.Bool(false),
            ClientToken: sdk.String("saepe"),
            Name: "Harvey Hessel",
            PermissionArns: []string{
                "quidem",
                "architecto",
                "ipsa",
                "reiciendis",
            },
            Principals: []string{
                "mollitia",
                "laborum",
                "dolores",
            },
            ResourceArns: []string{
                "corporis",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("nobis"),
                    Value: sdk.String("enim"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("culpa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateResourceShareResponse != nil {
        // handle response
    }
}
```

## DeletePermission

Deletes the specified customer managed permission in the Amazon Web Services Region in which you call this operation. You can delete a customer managed permission only if it isn't attached to any resource share. The operation deletes all versions associated with the customer managed permission.

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
    res, err := s.SDK.DeletePermission(ctx, operations.DeletePermissionRequest{
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
        ClientToken: sdk.String("repellat"),
        PermissionArn: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletePermissionResponse != nil {
        // handle response
    }
}
```

## DeletePermissionVersion

<p>Deletes one version of a customer managed permission. The version you specify must not be attached to any resource share and must not be the default version for the permission.</p> <p>If a customer managed permission has the maximum of 5 versions, then you must delete at least one version before you can create another.</p>

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
    res, err := s.SDK.DeletePermissionVersion(ctx, operations.DeletePermissionVersionRequest{
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("quam"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("error"),
        ClientToken: sdk.String("quia"),
        PermissionArn: "quis",
        PermissionVersion: 110375,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletePermissionVersionResponse != nil {
        // handle response
    }
}
```

## DeleteResourceShare

<p>Deletes the specified resource share.</p> <important> <p>This doesn't delete any of the resources that were associated with the resource share; it only stops the sharing of those resources through this resource share.</p> </important>

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
    res, err := s.SDK.DeleteResourceShare(ctx, operations.DeleteResourceShareRequest{
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("animi"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("sequi"),
        XAmzSignedHeaders: sdk.String("tenetur"),
        ClientToken: sdk.String("ipsam"),
        ResourceShareArn: "id",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteResourceShareResponse != nil {
        // handle response
    }
}
```

## DisassociateResourceShare

Removes the specified principals or resources from participating in the specified resource share.

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
    res, err := s.SDK.DisassociateResourceShare(ctx, operations.DisassociateResourceShareRequest{
        RequestBody: operations.DisassociateResourceShareRequestBody{
            ClientToken: sdk.String("possimus"),
            Principals: []string{
                "quasi",
            },
            ResourceArns: []string{
                "temporibus",
                "laborum",
                "quasi",
            },
            ResourceShareArn: "reiciendis",
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("omnis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateResourceShareResponse != nil {
        // handle response
    }
}
```

## DisassociateResourceSharePermission

Removes a managed permission from a resource share. Permission changes take effect immediately. You can remove a managed permission from a resource share only if there are currently no resources of the relevant resource type currently attached to the resource share.

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
    res, err := s.SDK.DisassociateResourceSharePermission(ctx, operations.DisassociateResourceSharePermissionRequest{
        RequestBody: operations.DisassociateResourceSharePermissionRequestBody{
            ClientToken: sdk.String("voluptate"),
            PermissionArn: "cum",
            ResourceShareArn: "perferendis",
        },
        XAmzAlgorithm: sdk.String("doloremque"),
        XAmzContentSha256: sdk.String("reprehenderit"),
        XAmzCredential: sdk.String("ut"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("dolore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateResourceSharePermissionResponse != nil {
        // handle response
    }
}
```

## EnableSharingWithAwsOrganization

<p>Enables resource sharing within your organization in Organizations. This operation creates a service-linked role called <code>AWSServiceRoleForResourceAccessManager</code> that has the IAM managed policy named AWSResourceAccessManagerServiceRolePolicy attached. This role permits RAM to retrieve information about the organization and its structure. This lets you share resources with all of the accounts in the calling account's organization by specifying the organization ID, or all of the accounts in an organizational unit (OU) by specifying the OU ID. Until you enable sharing within the organization, you can specify only individual Amazon Web Services accounts, or for supported resource types, IAM roles and users.</p> <p>You must call this operation from an IAM role or user in the organization's management account.</p> <p/>

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
    res, err := s.SDK.EnableSharingWithAwsOrganization(ctx, operations.EnableSharingWithAwsOrganizationRequest{
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("harum"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnableSharingWithAwsOrganizationResponse != nil {
        // handle response
    }
}
```

## GetPermission

Retrieves the contents of a managed permission in JSON format.

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
    res, err := s.SDK.GetPermission(ctx, operations.GetPermissionRequest{
        RequestBody: operations.GetPermissionRequestBody{
            PermissionArn: "quae",
            PermissionVersion: sdk.Int64(216822),
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("molestias"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("rem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPermissionResponse != nil {
        // handle response
    }
}
```

## GetResourcePolicies

Retrieves the resource policies for the specified resources that you own and have shared.

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
    res, err := s.SDK.GetResourcePolicies(ctx, operations.GetResourcePoliciesRequest{
        RequestBody: operations.GetResourcePoliciesRequestBody{
            MaxResults: sdk.Int64(916723),
            NextToken: sdk.String("quasi"),
            Principal: sdk.String("repudiandae"),
            ResourceArns: []string{
                "veritatis",
                "itaque",
                "incidunt",
            },
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("est"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        MaxResults: sdk.String("quibusdam"),
        NextToken: sdk.String("labore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetResourcePoliciesResponse != nil {
        // handle response
    }
}
```

## GetResourceShareAssociations

Retrieves the lists of resources and principals that associated for resource shares that you own.

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
    res, err := s.SDK.GetResourceShareAssociations(ctx, operations.GetResourceShareAssociationsRequest{
        RequestBody: operations.GetResourceShareAssociationsRequestBody{
            AssociationStatus: operations.GetResourceShareAssociationsRequestBodyAssociationStatusEnumAssociated.ToPointer(),
            AssociationType: operations.GetResourceShareAssociationsRequestBodyAssociationTypeEnumPrincipal,
            MaxResults: sdk.Int64(397821),
            NextToken: sdk.String("cupiditate"),
            Principal: sdk.String("quos"),
            ResourceArn: sdk.String("perferendis"),
            ResourceShareArns: []string{
                "assumenda",
            },
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("facilis"),
        MaxResults: sdk.String("tempore"),
        NextToken: sdk.String("labore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetResourceShareAssociationsResponse != nil {
        // handle response
    }
}
```

## GetResourceShareInvitations

Retrieves details about invitations that you have received for resource shares.

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
    res, err := s.SDK.GetResourceShareInvitations(ctx, operations.GetResourceShareInvitationsRequest{
        RequestBody: operations.GetResourceShareInvitationsRequestBody{
            MaxResults: sdk.Int64(962189),
            NextToken: sdk.String("eum"),
            ResourceShareArns: []string{
                "eligendi",
            },
            ResourceShareInvitationArns: []string{
                "aliquid",
                "provident",
                "necessitatibus",
            },
        },
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("a"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("in"),
        MaxResults: sdk.String("in"),
        NextToken: sdk.String("illum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetResourceShareInvitationsResponse != nil {
        // handle response
    }
}
```

## GetResourceShares

Retrieves details about the resource shares that you own or that are shared with you.

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
    res, err := s.SDK.GetResourceShares(ctx, operations.GetResourceSharesRequest{
        RequestBody: operations.GetResourceSharesRequestBody{
            MaxResults: sdk.Int64(978571),
            Name: sdk.String("Keith Gulgowski"),
            NextToken: sdk.String("ea"),
            PermissionArn: sdk.String("aliquid"),
            PermissionVersion: sdk.Int64(675439),
            ResourceOwner: operations.GetResourceSharesRequestBodyResourceOwnerEnumOtherAccounts,
            ResourceShareArns: []string{
                "occaecati",
            },
            ResourceShareStatus: operations.GetResourceSharesRequestBodyResourceShareStatusEnumActive.ToPointer(),
            TagFilters: []shared.TagFilter{
                shared.TagFilter{
                    TagKey: sdk.String("delectus"),
                    TagValues: []string{
                        "provident",
                        "nam",
                        "id",
                    },
                },
                shared.TagFilter{
                    TagKey: sdk.String("blanditiis"),
                    TagValues: []string{
                        "sapiente",
                        "amet",
                        "deserunt",
                    },
                },
                shared.TagFilter{
                    TagKey: sdk.String("nisi"),
                    TagValues: []string{
                        "natus",
                        "omnis",
                    },
                },
                shared.TagFilter{
                    TagKey: sdk.String("molestiae"),
                    TagValues: []string{
                        "nihil",
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("id"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("natus"),
        MaxResults: sdk.String("nobis"),
        NextToken: sdk.String("eum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetResourceSharesResponse != nil {
        // handle response
    }
}
```

## ListPendingInvitationResources

Lists the resources in a resource share that is shared with you but for which the invitation is still <code>PENDING</code>. That means that you haven't accepted or rejected the invitation and the invitation hasn't expired.

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
    res, err := s.SDK.ListPendingInvitationResources(ctx, operations.ListPendingInvitationResourcesRequest{
        RequestBody: operations.ListPendingInvitationResourcesRequestBody{
            MaxResults: sdk.Int64(878453),
            NextToken: sdk.String("aspernatur"),
            ResourceRegionScope: operations.ListPendingInvitationResourcesRequestBodyResourceRegionScopeEnumAll.ToPointer(),
            ResourceShareInvitationArn: "magnam",
        },
        XAmzAlgorithm: sdk.String("et"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("accusantium"),
        MaxResults: sdk.String("mollitia"),
        NextToken: sdk.String("reiciendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPendingInvitationResourcesResponse != nil {
        // handle response
    }
}
```

## ListPermissionAssociations

Lists information about the managed permission and its associations to any resource shares that use this managed permission. This lets you see which resource shares use which versions of the specified managed permission.

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
    res, err := s.SDK.ListPermissionAssociations(ctx, operations.ListPermissionAssociationsRequest{
        RequestBody: operations.ListPermissionAssociationsRequestBody{
            AssociationStatus: operations.ListPermissionAssociationsRequestBodyAssociationStatusEnumDisassociating.ToPointer(),
            DefaultVersion: sdk.Bool(false),
            FeatureSet: operations.ListPermissionAssociationsRequestBodyFeatureSetEnumCreatedFromPolicy.ToPointer(),
            MaxResults: sdk.Int64(431418),
            NextToken: sdk.String("dolor"),
            PermissionArn: sdk.String("necessitatibus"),
            PermissionVersion: sdk.Int64(141264),
            ResourceType: sdk.String("nemo"),
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        MaxResults: sdk.String("facilis"),
        NextToken: sdk.String("in"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPermissionAssociationsResponse != nil {
        // handle response
    }
}
```

## ListPermissionVersions

Lists the available versions of the specified RAM permission.

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
    res, err := s.SDK.ListPermissionVersions(ctx, operations.ListPermissionVersionsRequest{
        RequestBody: operations.ListPermissionVersionsRequestBody{
            MaxResults: sdk.Int64(100226),
            NextToken: sdk.String("architecto"),
            PermissionArn: "repudiandae",
        },
        XAmzAlgorithm: sdk.String("ullam"),
        XAmzContentSha256: sdk.String("expedita"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("repellat"),
        XAmzSecurityToken: sdk.String("quibusdam"),
        XAmzSignature: sdk.String("sed"),
        XAmzSignedHeaders: sdk.String("saepe"),
        MaxResults: sdk.String("pariatur"),
        NextToken: sdk.String("accusantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPermissionVersionsResponse != nil {
        // handle response
    }
}
```

## ListPermissions

Retrieves a list of available RAM permissions that you can use for the supported resource types. 

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
        RequestBody: operations.ListPermissionsRequestBody{
            MaxResults: sdk.Int64(162493),
            NextToken: sdk.String("praesentium"),
            PermissionType: operations.ListPermissionsRequestBodyPermissionTypeEnumAwsManaged.ToPointer(),
            ResourceType: sdk.String("magni"),
        },
        XAmzAlgorithm: sdk.String("sunt"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("maxime"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        MaxResults: sdk.String("odit"),
        NextToken: sdk.String("ea"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPermissionsResponse != nil {
        // handle response
    }
}
```

## ListPrincipals

Lists the principals that you are sharing resources with or that are sharing resources with you.

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
    res, err := s.SDK.ListPrincipals(ctx, operations.ListPrincipalsRequest{
        RequestBody: operations.ListPrincipalsRequestBody{
            MaxResults: sdk.Int64(33222),
            NextToken: sdk.String("ab"),
            Principals: []string{
                "quidem",
                "ipsam",
                "voluptate",
                "autem",
            },
            ResourceArn: sdk.String("nam"),
            ResourceOwner: operations.ListPrincipalsRequestBodyResourceOwnerEnumSelf,
            ResourceShareArns: []string{
                "nemo",
                "voluptatibus",
                "perferendis",
                "fugiat",
            },
            ResourceType: sdk.String("amet"),
        },
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("dolores"),
        MaxResults: sdk.String("quis"),
        NextToken: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPrincipalsResponse != nil {
        // handle response
    }
}
```

## ListReplacePermissionAssociationsWork

Retrieves the current status of the asynchronous tasks performed by RAM when you perform the <a>ReplacePermissionAssociationsWork</a> operation.

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
    res, err := s.SDK.ListReplacePermissionAssociationsWork(ctx, operations.ListReplacePermissionAssociationsWorkRequest{
        RequestBody: operations.ListReplacePermissionAssociationsWorkRequestBody{
            MaxResults: sdk.Int64(489549),
            NextToken: sdk.String("eaque"),
            Status: operations.ListReplacePermissionAssociationsWorkRequestBodyStatusEnumCompleted.ToPointer(),
            WorkIds: []string{
                "eos",
            },
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("quam"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("nostrum"),
        MaxResults: sdk.String("hic"),
        NextToken: sdk.String("recusandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListReplacePermissionAssociationsWorkResponse != nil {
        // handle response
    }
}
```

## ListResourceSharePermissions

Lists the RAM permissions that are associated with a resource share.

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
    res, err := s.SDK.ListResourceSharePermissions(ctx, operations.ListResourceSharePermissionsRequest{
        RequestBody: operations.ListResourceSharePermissionsRequestBody{
            MaxResults: sdk.Int64(608253),
            NextToken: sdk.String("facilis"),
            ResourceShareArn: "perspiciatis",
        },
        XAmzAlgorithm: sdk.String("voluptatem"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("blanditiis"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("eaque"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        MaxResults: sdk.String("rerum"),
        NextToken: sdk.String("adipisci"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListResourceSharePermissionsResponse != nil {
        // handle response
    }
}
```

## ListResourceTypes

Lists the resource types that can be shared by RAM.

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
    res, err := s.SDK.ListResourceTypes(ctx, operations.ListResourceTypesRequest{
        RequestBody: operations.ListResourceTypesRequestBody{
            MaxResults: sdk.Int64(992397),
            NextToken: sdk.String("earum"),
            ResourceRegionScope: operations.ListResourceTypesRequestBodyResourceRegionScopeEnumAll.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("iste"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("libero"),
        MaxResults: sdk.String("delectus"),
        NextToken: sdk.String("quaerat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListResourceTypesResponse != nil {
        // handle response
    }
}
```

## ListResources

Lists the resources that you added to a resource share or the resources that are shared with you.

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
    res, err := s.SDK.ListResources(ctx, operations.ListResourcesRequest{
        RequestBody: operations.ListResourcesRequestBody{
            MaxResults: sdk.Int64(554242),
            NextToken: sdk.String("aliquid"),
            Principal: sdk.String("dolorem"),
            ResourceArns: []string{
                "dolor",
            },
            ResourceOwner: operations.ListResourcesRequestBodyResourceOwnerEnumSelf,
            ResourceRegionScope: operations.ListResourcesRequestBodyResourceRegionScopeEnumAll.ToPointer(),
            ResourceShareArns: []string{
                "excepturi",
                "cum",
                "voluptate",
                "dignissimos",
            },
            ResourceType: sdk.String("reiciendis"),
        },
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("iure"),
        MaxResults: sdk.String("odio"),
        NextToken: sdk.String("quaerat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListResourcesResponse != nil {
        // handle response
    }
}
```

## PromotePermissionCreatedFromPolicy

<p>When you attach a resource-based policy to a resource, RAM automatically creates a resource share of <code>featureSet</code>=<code>CREATED_FROM_POLICY</code> with a managed permission that has the same IAM permissions as the original resource-based policy. However, this type of managed permission is visible to only the resource share owner, and the associated resource share can't be modified by using RAM.</p> <p>This operation creates a separate, fully manageable customer managed permission that has the same IAM permissions as the original resource-based policy. You can associate this customer managed permission to any resource shares.</p> <p>Before you use <a>PromoteResourceShareCreatedFromPolicy</a>, you should first run this operation to ensure that you have an appropriate customer managed permission that can be associated with the promoted resource share.</p> <note> <ul> <li> <p>The original <code>CREATED_FROM_POLICY</code> policy isn't deleted, and resource shares using that original policy aren't automatically updated.</p> </li> <li> <p>You can't modify a <code>CREATED_FROM_POLICY</code> resource share so you can't associate the new customer managed permission by using <code>ReplacePermsissionAssociations</code>. However, if you use <a>PromoteResourceShareCreatedFromPolicy</a>, that operation automatically associates the fully manageable customer managed permission to the newly promoted <code>STANDARD</code> resource share.</p> </li> <li> <p>After you promote a resource share, if the original <code>CREATED_FROM_POLICY</code> managed permission has no other associations to A resource share, then RAM automatically deletes it.</p> </li> </ul> </note>

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
    res, err := s.SDK.PromotePermissionCreatedFromPolicy(ctx, operations.PromotePermissionCreatedFromPolicyRequest{
        RequestBody: operations.PromotePermissionCreatedFromPolicyRequestBody{
            ClientToken: sdk.String("accusamus"),
            Name: "Jan Hodkiewicz",
            PermissionArn: "atque",
        },
        XAmzAlgorithm: sdk.String("sit"),
        XAmzContentSha256: sdk.String("fugiat"),
        XAmzCredential: sdk.String("ab"),
        XAmzDate: sdk.String("soluta"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("voluptate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PromotePermissionCreatedFromPolicyResponse != nil {
        // handle response
    }
}
```

## PromoteResourceShareCreatedFromPolicy

<p>When you attach a resource-based policy to a resource, RAM automatically creates a resource share of <code>featureSet</code>=<code>CREATED_FROM_POLICY</code> with a managed permission that has the same IAM permissions as the original resource-based policy. However, this type of managed permission is visible to only the resource share owner, and the associated resource share can't be modified by using RAM.</p> <p>This operation promotes the resource share to a <code>STANDARD</code> resource share that is fully manageable in RAM. When you promote a resource share, you can then manage the resource share in RAM and it becomes visible to all of the principals you shared it with.</p> <important> <p>Before you perform this operation, you should first run <a>PromotePermissionCreatedFromPolicy</a>to ensure that you have an appropriate customer managed permission that can be associated with this resource share after its is promoted. If this operation can't find a managed permission that exactly matches the existing <code>CREATED_FROM_POLICY</code> permission, then this operation fails.</p> </important>

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
    res, err := s.SDK.PromoteResourceShareCreatedFromPolicy(ctx, operations.PromoteResourceShareCreatedFromPolicyRequest{
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("asperiores"),
        XAmzSignedHeaders: sdk.String("nihil"),
        ResourceShareArn: "ipsum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PromoteResourceShareCreatedFromPolicyResponse != nil {
        // handle response
    }
}
```

## RejectResourceShareInvitation

Rejects an invitation to a resource share from another Amazon Web Services account.

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
    res, err := s.SDK.RejectResourceShareInvitation(ctx, operations.RejectResourceShareInvitationRequest{
        RequestBody: operations.RejectResourceShareInvitationRequestBody{
            ClientToken: sdk.String("voluptate"),
            ResourceShareInvitationArn: "id",
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("optio"),
        XAmzSignedHeaders: sdk.String("accusamus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RejectResourceShareInvitationResponse != nil {
        // handle response
    }
}
```

## ReplacePermissionAssociations

<p>Updates all resource shares that use a managed permission to a different managed permission. This operation always applies the default version of the target managed permission. You can optionally specify that the update applies to only resource shares that currently use a specified version. This enables you to update to the latest version, without changing the which managed permission is used.</p> <p>You can use this operation to update all of your resource shares to use the current default version of the permission by specifying the same value for the <code>fromPermissionArn</code> and <code>toPermissionArn</code> parameters.</p> <p>You can use the optional <code>fromPermissionVersion</code> parameter to update only those resources that use a specified version of the managed permission to the new managed permission.</p> <important> <p>To successfully perform this operation, you must have permission to update the resource-based policy on all affected resource types.</p> </important>

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
    res, err := s.SDK.ReplacePermissionAssociations(ctx, operations.ReplacePermissionAssociationsRequest{
        RequestBody: operations.ReplacePermissionAssociationsRequestBody{
            ClientToken: sdk.String("ad"),
            FromPermissionArn: "saepe",
            FromPermissionVersion: sdk.Int64(383464),
            ToPermissionArn: "deserunt",
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("similique"),
        XAmzSignature: sdk.String("alias"),
        XAmzSignedHeaders: sdk.String("at"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReplacePermissionAssociationsResponse != nil {
        // handle response
    }
}
```

## SetDefaultPermissionVersion

Designates the specified version number as the default version for the specified customer managed permission. New resource shares automatically use this new default permission. Existing resource shares continue to use their original permission version, but you can use <a>ReplacePermissionAssociations</a> to update them.

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
    res, err := s.SDK.SetDefaultPermissionVersion(ctx, operations.SetDefaultPermissionVersionRequest{
        RequestBody: operations.SetDefaultPermissionVersionRequestBody{
            ClientToken: sdk.String("quaerat"),
            PermissionArn: "tempora",
            PermissionVersion: 425451,
        },
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("officiis"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("a"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("harum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetDefaultPermissionVersionResponse != nil {
        // handle response
    }
}
```

## TagResource

<p>Adds the specified tag keys and values to a resource share or managed permission. If you choose a resource share, the tags are attached to only the resource share, not to the resources that are in the resource share.</p> <p>The tags on a managed permission are the same for all versions of the managed permission.</p>

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
        RequestBody: operations.TagResourceRequestBody{
            ResourceArn: sdk.String("iusto"),
            ResourceShareArn: sdk.String("ipsum"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("tenetur"),
                    Value: sdk.String("amet"),
                },
                shared.Tag{
                    Key: sdk.String("tempore"),
                    Value: sdk.String("accusamus"),
                },
                shared.Tag{
                    Key: sdk.String("numquam"),
                    Value: sdk.String("enim"),
                },
                shared.Tag{
                    Key: sdk.String("dolorem"),
                    Value: sdk.String("sapiente"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("sit"),
        XAmzDate: sdk.String("expedita"),
        XAmzSecurityToken: sdk.String("neque"),
        XAmzSignature: sdk.String("sed"),
        XAmzSignedHeaders: sdk.String("vel"),
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

Removes the specified tag key and value pairs from the specified resource share or managed permission.

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
        RequestBody: operations.UntagResourceRequestBody{
            ResourceArn: sdk.String("libero"),
            ResourceShareArn: sdk.String("voluptas"),
            TagKeys: []string{
                "quam",
                "ipsum",
                "incidunt",
            },
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("cupiditate"),
        XAmzCredential: sdk.String("maxime"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("soluta"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("laborum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateResourceShare

Modifies some of the properties of the specified resource share.

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
    res, err := s.SDK.UpdateResourceShare(ctx, operations.UpdateResourceShareRequest{
        RequestBody: operations.UpdateResourceShareRequestBody{
            AllowExternalPrincipals: sdk.Bool(false),
            ClientToken: sdk.String("totam"),
            Name: sdk.String("Kelly Daniel"),
            ResourceShareArn: "aliquid",
        },
        XAmzAlgorithm: sdk.String("quam"),
        XAmzContentSha256: sdk.String("molestias"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("neque"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("magni"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateResourceShareResponse != nil {
        // handle response
    }
}
```
