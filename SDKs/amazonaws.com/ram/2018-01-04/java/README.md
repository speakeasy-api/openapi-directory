# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AcceptResourceShareInvitationRequest;
import org.openapis.openapi.models.operations.AcceptResourceShareInvitationRequestBody;
import org.openapis.openapi.models.operations.AcceptResourceShareInvitationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcceptResourceShareInvitationRequest req = new AcceptResourceShareInvitationRequest(                new AcceptResourceShareInvitationRequestBody("provident") {{
                                clientToken = "distinctio";
                            }};) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "illum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "error";
            }};            

            AcceptResourceShareInvitationResponse res = sdk.acceptResourceShareInvitation(req);

            if (res.acceptResourceShareInvitationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [acceptResourceShareInvitation](docs/sdk/README.md#acceptresourceshareinvitation) - Accepts an invitation to a resource share from another Amazon Web Services account. After you accept the invitation, the resources included in the resource share are available to interact with in the relevant Amazon Web Services Management Consoles and tools.
* [associateResourceShare](docs/sdk/README.md#associateresourceshare) - Adds the specified list of principals and list of resources to a resource share. Principals that already have access to this resource share immediately receive access to the added resources. Newly added principals immediately receive access to the resources shared in this resource share. 
* [associateResourceSharePermission](docs/sdk/README.md#associateresourcesharepermission) - Adds or replaces the RAM permission for a resource type included in a resource share. You can have exactly one permission associated with each resource type in the resource share. You can add a new RAM permission only if there are currently no resources of that resource type currently in the resource share.
* [createPermission](docs/sdk/README.md#createpermission) - Creates a customer managed permission for a specified resource type that you can attach to resource shares. It is created in the Amazon Web Services Region in which you call the operation.
* [createPermissionVersion](docs/sdk/README.md#createpermissionversion) - <p>Creates a new version of the specified customer managed permission. The new version is automatically set as the default version of the customer managed permission. New resource shares automatically use the default permission. Existing resource shares continue to use their original permission versions, but you can use <a>ReplacePermissionAssociations</a> to update them.</p> <p>If the specified customer managed permission already has the maximum of 5 versions, then you must delete one of the existing versions before you can create a new one.</p>
* [createResourceShare](docs/sdk/README.md#createresourceshare) - <p>Creates a resource share. You can provide a list of the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> for the resources that you want to share, a list of principals you want to share the resources with, and the permissions to grant those principals.</p> <note> <p>Sharing a resource makes it available for use by principals outside of the Amazon Web Services account that created the resource. Sharing doesn't change any permissions or quotas that apply to the resource in the account that created it.</p> </note>
* [deletePermission](docs/sdk/README.md#deletepermission) - Deletes the specified customer managed permission in the Amazon Web Services Region in which you call this operation. You can delete a customer managed permission only if it isn't attached to any resource share. The operation deletes all versions associated with the customer managed permission.
* [deletePermissionVersion](docs/sdk/README.md#deletepermissionversion) - <p>Deletes one version of a customer managed permission. The version you specify must not be attached to any resource share and must not be the default version for the permission.</p> <p>If a customer managed permission has the maximum of 5 versions, then you must delete at least one version before you can create another.</p>
* [deleteResourceShare](docs/sdk/README.md#deleteresourceshare) - <p>Deletes the specified resource share.</p> <important> <p>This doesn't delete any of the resources that were associated with the resource share; it only stops the sharing of those resources through this resource share.</p> </important>
* [disassociateResourceShare](docs/sdk/README.md#disassociateresourceshare) - Removes the specified principals or resources from participating in the specified resource share.
* [disassociateResourceSharePermission](docs/sdk/README.md#disassociateresourcesharepermission) - Removes a managed permission from a resource share. Permission changes take effect immediately. You can remove a managed permission from a resource share only if there are currently no resources of the relevant resource type currently attached to the resource share.
* [enableSharingWithAwsOrganization](docs/sdk/README.md#enablesharingwithawsorganization) - <p>Enables resource sharing within your organization in Organizations. This operation creates a service-linked role called <code>AWSServiceRoleForResourceAccessManager</code> that has the IAM managed policy named AWSResourceAccessManagerServiceRolePolicy attached. This role permits RAM to retrieve information about the organization and its structure. This lets you share resources with all of the accounts in the calling account's organization by specifying the organization ID, or all of the accounts in an organizational unit (OU) by specifying the OU ID. Until you enable sharing within the organization, you can specify only individual Amazon Web Services accounts, or for supported resource types, IAM roles and users.</p> <p>You must call this operation from an IAM role or user in the organization's management account.</p> <p/>
* [getPermission](docs/sdk/README.md#getpermission) - Retrieves the contents of a managed permission in JSON format.
* [getResourcePolicies](docs/sdk/README.md#getresourcepolicies) - Retrieves the resource policies for the specified resources that you own and have shared.
* [getResourceShareAssociations](docs/sdk/README.md#getresourceshareassociations) - Retrieves the lists of resources and principals that associated for resource shares that you own.
* [getResourceShareInvitations](docs/sdk/README.md#getresourceshareinvitations) - Retrieves details about invitations that you have received for resource shares.
* [getResourceShares](docs/sdk/README.md#getresourceshares) - Retrieves details about the resource shares that you own or that are shared with you.
* [listPendingInvitationResources](docs/sdk/README.md#listpendinginvitationresources) - Lists the resources in a resource share that is shared with you but for which the invitation is still <code>PENDING</code>. That means that you haven't accepted or rejected the invitation and the invitation hasn't expired.
* [listPermissionAssociations](docs/sdk/README.md#listpermissionassociations) - Lists information about the managed permission and its associations to any resource shares that use this managed permission. This lets you see which resource shares use which versions of the specified managed permission.
* [listPermissionVersions](docs/sdk/README.md#listpermissionversions) - Lists the available versions of the specified RAM permission.
* [listPermissions](docs/sdk/README.md#listpermissions) - Retrieves a list of available RAM permissions that you can use for the supported resource types. 
* [listPrincipals](docs/sdk/README.md#listprincipals) - Lists the principals that you are sharing resources with or that are sharing resources with you.
* [listReplacePermissionAssociationsWork](docs/sdk/README.md#listreplacepermissionassociationswork) - Retrieves the current status of the asynchronous tasks performed by RAM when you perform the <a>ReplacePermissionAssociationsWork</a> operation.
* [listResourceSharePermissions](docs/sdk/README.md#listresourcesharepermissions) - Lists the RAM permissions that are associated with a resource share.
* [listResourceTypes](docs/sdk/README.md#listresourcetypes) - Lists the resource types that can be shared by RAM.
* [listResources](docs/sdk/README.md#listresources) - Lists the resources that you added to a resource share or the resources that are shared with you.
* [promotePermissionCreatedFromPolicy](docs/sdk/README.md#promotepermissioncreatedfrompolicy) - <p>When you attach a resource-based policy to a resource, RAM automatically creates a resource share of <code>featureSet</code>=<code>CREATED_FROM_POLICY</code> with a managed permission that has the same IAM permissions as the original resource-based policy. However, this type of managed permission is visible to only the resource share owner, and the associated resource share can't be modified by using RAM.</p> <p>This operation creates a separate, fully manageable customer managed permission that has the same IAM permissions as the original resource-based policy. You can associate this customer managed permission to any resource shares.</p> <p>Before you use <a>PromoteResourceShareCreatedFromPolicy</a>, you should first run this operation to ensure that you have an appropriate customer managed permission that can be associated with the promoted resource share.</p> <note> <ul> <li> <p>The original <code>CREATED_FROM_POLICY</code> policy isn't deleted, and resource shares using that original policy aren't automatically updated.</p> </li> <li> <p>You can't modify a <code>CREATED_FROM_POLICY</code> resource share so you can't associate the new customer managed permission by using <code>ReplacePermsissionAssociations</code>. However, if you use <a>PromoteResourceShareCreatedFromPolicy</a>, that operation automatically associates the fully manageable customer managed permission to the newly promoted <code>STANDARD</code> resource share.</p> </li> <li> <p>After you promote a resource share, if the original <code>CREATED_FROM_POLICY</code> managed permission has no other associations to A resource share, then RAM automatically deletes it.</p> </li> </ul> </note>
* [promoteResourceShareCreatedFromPolicy](docs/sdk/README.md#promoteresourcesharecreatedfrompolicy) - <p>When you attach a resource-based policy to a resource, RAM automatically creates a resource share of <code>featureSet</code>=<code>CREATED_FROM_POLICY</code> with a managed permission that has the same IAM permissions as the original resource-based policy. However, this type of managed permission is visible to only the resource share owner, and the associated resource share can't be modified by using RAM.</p> <p>This operation promotes the resource share to a <code>STANDARD</code> resource share that is fully manageable in RAM. When you promote a resource share, you can then manage the resource share in RAM and it becomes visible to all of the principals you shared it with.</p> <important> <p>Before you perform this operation, you should first run <a>PromotePermissionCreatedFromPolicy</a>to ensure that you have an appropriate customer managed permission that can be associated with this resource share after its is promoted. If this operation can't find a managed permission that exactly matches the existing <code>CREATED_FROM_POLICY</code> permission, then this operation fails.</p> </important>
* [rejectResourceShareInvitation](docs/sdk/README.md#rejectresourceshareinvitation) - Rejects an invitation to a resource share from another Amazon Web Services account.
* [replacePermissionAssociations](docs/sdk/README.md#replacepermissionassociations) - <p>Updates all resource shares that use a managed permission to a different managed permission. This operation always applies the default version of the target managed permission. You can optionally specify that the update applies to only resource shares that currently use a specified version. This enables you to update to the latest version, without changing the which managed permission is used.</p> <p>You can use this operation to update all of your resource shares to use the current default version of the permission by specifying the same value for the <code>fromPermissionArn</code> and <code>toPermissionArn</code> parameters.</p> <p>You can use the optional <code>fromPermissionVersion</code> parameter to update only those resources that use a specified version of the managed permission to the new managed permission.</p> <important> <p>To successfully perform this operation, you must have permission to update the resource-based policy on all affected resource types.</p> </important>
* [setDefaultPermissionVersion](docs/sdk/README.md#setdefaultpermissionversion) - Designates the specified version number as the default version for the specified customer managed permission. New resource shares automatically use this new default permission. Existing resource shares continue to use their original permission version, but you can use <a>ReplacePermissionAssociations</a> to update them.
* [tagResource](docs/sdk/README.md#tagresource) - <p>Adds the specified tag keys and values to a resource share or managed permission. If you choose a resource share, the tags are attached to only the resource share, not to the resources that are in the resource share.</p> <p>The tags on a managed permission are the same for all versions of the managed permission.</p>
* [untagResource](docs/sdk/README.md#untagresource) - Removes the specified tag key and value pairs from the specified resource share or managed permission.
* [updateResourceShare](docs/sdk/README.md#updateresourceshare) - Modifies some of the properties of the specified resource share.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
