# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/ram/2018-01-04/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.AcceptResourceShareInvitationRequest{
        Headers: operations.AcceptResourceShareInvitationHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.AcceptResourceShareInvitationRequestBody{
            ClientToken: "illum",
            ResourceShareInvitationArn: "vel",
        },
    }

    ctx := context.Background()
    res, err := s.AcceptResourceShareInvitation(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptResourceShareInvitationResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `AcceptResourceShareInvitation` - Accepts an invitation to a resource share from another Amazon Web Services account. After you accept the invitation, the resources included in the resource share are available to interact with in the relevant Amazon Web Services Management Consoles and tools.
* `AssociateResourceShare` - Adds the specified list of principals and list of resources to a resource share. Principals that already have access to this resource share immediately receive access to the added resources. Newly added principals immediately receive access to the resources shared in this resource share. 
* `AssociateResourceSharePermission` - Adds or replaces the RAM permission for a resource type included in a resource share. You can have exactly one permission associated with each resource type in the resource share. You can add a new RAM permission only if there are currently no resources of that resource type currently in the resource share.
* `CreateResourceShare` - <p>Creates a resource share. You can provide a list of the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> for the resources that you want to share, a list of principals you want to share the resources with, and the permissions to grant those principals.</p> <note> <p>Sharing a resource makes it available for use by principals outside of the Amazon Web Services account that created the resource. Sharing doesn't change any permissions or quotas that apply to the resource in the account that created it.</p> </note>
* `DeleteResourceShare` - Deletes the specified resource share. This doesn't delete any of the resources that were associated with the resource share; it only stops the sharing of those resources outside of the Amazon Web Services account that created them.
* `DisassociateResourceShare` - Disassociates the specified principals or resources from the specified resource share.
* `DisassociateResourceSharePermission` - Disassociates an RAM permission from a resource share. Permission changes take effect immediately. You can remove a RAM permission from a resource share only if there are currently no resources of the relevant resource type currently attached to the resource share.
* `EnableSharingWithAwsOrganization` - <p>Enables resource sharing within your organization in Organizations. Calling this operation enables RAM to retrieve information about the organization and its structure. This lets you share resources with all of the accounts in an organization by specifying the organization's ID, or all of the accounts in an organizational unit (OU) by specifying the OU's ID. Until you enable sharing within the organization, you can specify only individual Amazon Web Services accounts, or for supported resource types, IAM users and roles.</p> <p>You must call this operation from an IAM user or role in the organization's management account.</p>
* `GetPermission` - Gets the contents of an RAM permission in JSON format.
* `GetResourcePolicies` - Retrieves the resource policies for the specified resources that you own and have shared.
* `GetResourceShareAssociations` - Retrieves the resource and principal associations for resource shares that you own.
* `GetResourceShareInvitations` - Retrieves details about invitations that you have received for resource shares.
* `GetResourceShares` - Retrieves details about the resource shares that you own or that are shared with you.
* `ListPendingInvitationResources` - Lists the resources in a resource share that is shared with you but for which the invitation is still <code>PENDING</code>. That means that you haven't accepted or rejected the invitation and the invitation hasn't expired.
* `ListPermissionVersions` - Lists the available versions of the specified RAM permission.
* `ListPermissions` - Retrieves a list of available RAM permissions that you can use for the supported resource types. 
* `ListPrincipals` - Lists the principals that you are sharing resources with or that are sharing resources with you.
* `ListResourceSharePermissions` - Lists the RAM permissions that are associated with a resource share.
* `ListResourceTypes` - Lists the resource types that can be shared by RAM.
* `ListResources` - Lists the resources that you added to a resource share or the resources that are shared with you.
* `PromoteResourceShareCreatedFromPolicy` - <p>When you attach a resource-based permission policy to a resource, it automatically creates a resource share. However, resource shares created this way are visible only to the resource share owner, and the resource share can't be modified in RAM.</p> <p>You can use this operation to promote the resource share to a full RAM resource share. When you promote a resource share, you can then manage the resource share in RAM and it becomes visible to all of the principals you shared it with.</p>
* `RejectResourceShareInvitation` - Rejects an invitation to a resource share from another Amazon Web Services account.
* `TagResource` - Adds the specified tag keys and values to the specified resource share. The tags are attached only to the resource share, not to the resources that are in the resource share.
* `UntagResource` - Removes the specified tag key and value pairs from the specified resource share.
* `UpdateResourceShare` - Modifies some of the properties of the specified resource share.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
