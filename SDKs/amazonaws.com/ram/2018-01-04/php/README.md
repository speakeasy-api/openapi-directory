# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `acceptResourceShareInvitation` - Accepts an invitation to a resource share from another Amazon Web Services account. After you accept the invitation, the resources included in the resource share are available to interact with in the relevant Amazon Web Services Management Consoles and tools.
* `associateResourceShare` - Adds the specified list of principals and list of resources to a resource share. Principals that already have access to this resource share immediately receive access to the added resources. Newly added principals immediately receive access to the resources shared in this resource share. 
* `associateResourceSharePermission` - Adds or replaces the RAM permission for a resource type included in a resource share. You can have exactly one permission associated with each resource type in the resource share. You can add a new RAM permission only if there are currently no resources of that resource type currently in the resource share.
* `createResourceShare` - <p>Creates a resource share. You can provide a list of the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> for the resources that you want to share, a list of principals you want to share the resources with, and the permissions to grant those principals.</p> <note> <p>Sharing a resource makes it available for use by principals outside of the Amazon Web Services account that created the resource. Sharing doesn't change any permissions or quotas that apply to the resource in the account that created it.</p> </note>
* `deleteResourceShare` - Deletes the specified resource share. This doesn't delete any of the resources that were associated with the resource share; it only stops the sharing of those resources outside of the Amazon Web Services account that created them.
* `disassociateResourceShare` - Disassociates the specified principals or resources from the specified resource share.
* `disassociateResourceSharePermission` - Disassociates an RAM permission from a resource share. Permission changes take effect immediately. You can remove a RAM permission from a resource share only if there are currently no resources of the relevant resource type currently attached to the resource share.
* `enableSharingWithAwsOrganization` - <p>Enables resource sharing within your organization in Organizations. Calling this operation enables RAM to retrieve information about the organization and its structure. This lets you share resources with all of the accounts in an organization by specifying the organization's ID, or all of the accounts in an organizational unit (OU) by specifying the OU's ID. Until you enable sharing within the organization, you can specify only individual Amazon Web Services accounts, or for supported resource types, IAM users and roles.</p> <p>You must call this operation from an IAM user or role in the organization's management account.</p>
* `getPermission` - Gets the contents of an RAM permission in JSON format.
* `getResourcePolicies` - Retrieves the resource policies for the specified resources that you own and have shared.
* `getResourceShareAssociations` - Retrieves the resource and principal associations for resource shares that you own.
* `getResourceShareInvitations` - Retrieves details about invitations that you have received for resource shares.
* `getResourceShares` - Retrieves details about the resource shares that you own or that are shared with you.
* `listPendingInvitationResources` - Lists the resources in a resource share that is shared with you but for which the invitation is still <code>PENDING</code>. That means that you haven't accepted or rejected the invitation and the invitation hasn't expired.
* `listPermissionVersions` - Lists the available versions of the specified RAM permission.
* `listPermissions` - Retrieves a list of available RAM permissions that you can use for the supported resource types. 
* `listPrincipals` - Lists the principals that you are sharing resources with or that are sharing resources with you.
* `listResourceSharePermissions` - Lists the RAM permissions that are associated with a resource share.
* `listResourceTypes` - Lists the resource types that can be shared by RAM.
* `listResources` - Lists the resources that you added to a resource share or the resources that are shared with you.
* `promoteResourceShareCreatedFromPolicy` - <p>When you attach a resource-based permission policy to a resource, it automatically creates a resource share. However, resource shares created this way are visible only to the resource share owner, and the resource share can't be modified in RAM.</p> <p>You can use this operation to promote the resource share to a full RAM resource share. When you promote a resource share, you can then manage the resource share in RAM and it becomes visible to all of the principals you shared it with.</p>
* `rejectResourceShareInvitation` - Rejects an invitation to a resource share from another Amazon Web Services account.
* `tagResource` - Adds the specified tag keys and values to the specified resource share. The tags are attached only to the resource share, not to the resources that are in the resource share.
* `untagResource` - Removes the specified tag key and value pairs from the specified resource share.
* `updateResourceShare` - Modifies some of the properties of the specified resource share.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
