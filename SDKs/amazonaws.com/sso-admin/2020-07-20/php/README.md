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
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AttachCustomerManagedPolicyReferenceToPermissionSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AttachCustomerManagedPolicyReferenceToPermissionSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomerManagedPolicyReference;
use \OpenAPI\OpenAPI\Models\Operations\AttachCustomerManagedPolicyReferenceToPermissionSetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AttachCustomerManagedPolicyReferenceToPermissionSetRequest();
    $request->attachCustomerManagedPolicyReferenceToPermissionSetRequest = new AttachCustomerManagedPolicyReferenceToPermissionSetRequest();
    $request->attachCustomerManagedPolicyReferenceToPermissionSetRequest->customerManagedPolicyReference = new CustomerManagedPolicyReference();
    $request->attachCustomerManagedPolicyReferenceToPermissionSetRequest->customerManagedPolicyReference->name = 'Terrence Rau';
    $request->attachCustomerManagedPolicyReferenceToPermissionSetRequest->customerManagedPolicyReference->path = 'nulla';
    $request->attachCustomerManagedPolicyReferenceToPermissionSetRequest->instanceArn = 'corrupti';
    $request->attachCustomerManagedPolicyReferenceToPermissionSetRequest->permissionSetArn = 'illum';
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'debitis';
    $request->xAmzTarget = AttachCustomerManagedPolicyReferenceToPermissionSetXAmzTargetEnum::SWB_EXTERNAL_SERVICE_ATTACH_CUSTOMER_MANAGED_POLICY_REFERENCE_TO_PERMISSION_SET;

    $response = $sdk->attachCustomerManagedPolicyReferenceToPermissionSet($request);

    if ($response->attachCustomerManagedPolicyReferenceToPermissionSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [attachCustomerManagedPolicyReferenceToPermissionSet](docs/sdk/README.md#attachcustomermanagedpolicyreferencetopermissionset) - Attaches the specified customer managed policy to the specified <a>PermissionSet</a>.
* [attachManagedPolicyToPermissionSet](docs/sdk/README.md#attachmanagedpolicytopermissionset) - <p>Attaches an AWS managed policy ARN to a permission set.</p> <note> <p>If the permission set is already referenced by one or more account assignments, you will need to call <code> <a>ProvisionPermissionSet</a> </code> after this operation. Calling <code>ProvisionPermissionSet</code> applies the corresponding IAM policy updates to all assigned accounts.</p> </note>
* [createAccountAssignment](docs/sdk/README.md#createaccountassignment) - <p>Assigns access to a principal for a specified AWS account using a specified permission set.</p> <note> <p>The term <i>principal</i> here refers to a user or group that is defined in IAM Identity Center.</p> </note> <note> <p>As part of a successful <code>CreateAccountAssignment</code> call, the specified permission set will automatically be provisioned to the account in the form of an IAM policy. That policy is attached to the IAM role created in IAM Identity Center. If the permission set is subsequently updated, the corresponding IAM policies attached to roles in your accounts will not be updated automatically. In this case, you must call <code> <a>ProvisionPermissionSet</a> </code> to make these updates.</p> </note> <note> <p> After a successful response, call <code>DescribeAccountAssignmentCreationStatus</code> to describe the status of an assignment creation request. </p> </note>
* [createInstanceAccessControlAttributeConfiguration](docs/sdk/README.md#createinstanceaccesscontrolattributeconfiguration) - <p>Enables the attributes-based access control (ABAC) feature for the specified IAM Identity Center instance. You can also specify new attributes to add to your ABAC configuration during the enabling process. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.</p> <note> <p>After a successful response, call <code>DescribeInstanceAccessControlAttributeConfiguration</code> to validate that <code>InstanceAccessControlAttributeConfiguration</code> was created.</p> </note>
* [createPermissionSet](docs/sdk/README.md#createpermissionset) - <p>Creates a permission set within a specified IAM Identity Center instance.</p> <note> <p>To grant users and groups access to AWS account resources, use <code> <a>CreateAccountAssignment</a> </code>.</p> </note>
* [deleteAccountAssignment](docs/sdk/README.md#deleteaccountassignment) - <p>Deletes a principal's access from a specified AWS account using a specified permission set.</p> <note> <p>After a successful response, call <code>DescribeAccountAssignmentCreationStatus</code> to describe the status of an assignment deletion request.</p> </note>
* [deleteInlinePolicyFromPermissionSet](docs/sdk/README.md#deleteinlinepolicyfrompermissionset) - Deletes the inline policy from a specified permission set.
* [deleteInstanceAccessControlAttributeConfiguration](docs/sdk/README.md#deleteinstanceaccesscontrolattributeconfiguration) - Disables the attributes-based access control (ABAC) feature for the specified IAM Identity Center instance and deletes all of the attribute mappings that have been configured. Once deleted, any attributes that are received from an identity source and any custom attributes you have previously configured will not be passed. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.
* [deletePermissionSet](docs/sdk/README.md#deletepermissionset) - Deletes the specified permission set.
* [deletePermissionsBoundaryFromPermissionSet](docs/sdk/README.md#deletepermissionsboundaryfrompermissionset) - Deletes the permissions boundary from a specified <a>PermissionSet</a>.
* [describeAccountAssignmentCreationStatus](docs/sdk/README.md#describeaccountassignmentcreationstatus) - Describes the status of the assignment creation request.
* [describeAccountAssignmentDeletionStatus](docs/sdk/README.md#describeaccountassignmentdeletionstatus) - Describes the status of the assignment deletion request.
* [describeInstanceAccessControlAttributeConfiguration](docs/sdk/README.md#describeinstanceaccesscontrolattributeconfiguration) - Returns the list of IAM Identity Center identity store attributes that have been configured to work with attributes-based access control (ABAC) for the specified IAM Identity Center instance. This will not return attributes configured and sent by an external identity provider. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.
* [describePermissionSet](docs/sdk/README.md#describepermissionset) - Gets the details of the permission set.
* [describePermissionSetProvisioningStatus](docs/sdk/README.md#describepermissionsetprovisioningstatus) - Describes the status for the given permission set provisioning request.
* [detachCustomerManagedPolicyReferenceFromPermissionSet](docs/sdk/README.md#detachcustomermanagedpolicyreferencefrompermissionset) - Detaches the specified customer managed policy from the specified <a>PermissionSet</a>.
* [detachManagedPolicyFromPermissionSet](docs/sdk/README.md#detachmanagedpolicyfrompermissionset) - Detaches the attached AWS managed policy ARN from the specified permission set.
* [getInlinePolicyForPermissionSet](docs/sdk/README.md#getinlinepolicyforpermissionset) - Obtains the inline policy assigned to the permission set.
* [getPermissionsBoundaryForPermissionSet](docs/sdk/README.md#getpermissionsboundaryforpermissionset) - Obtains the permissions boundary for a specified <a>PermissionSet</a>.
* [listAccountAssignmentCreationStatus](docs/sdk/README.md#listaccountassignmentcreationstatus) - Lists the status of the AWS account assignment creation requests for a specified IAM Identity Center instance.
* [listAccountAssignmentDeletionStatus](docs/sdk/README.md#listaccountassignmentdeletionstatus) - Lists the status of the AWS account assignment deletion requests for a specified IAM Identity Center instance.
* [listAccountAssignments](docs/sdk/README.md#listaccountassignments) - Lists the assignee of the specified AWS account with the specified permission set.
* [listAccountsForProvisionedPermissionSet](docs/sdk/README.md#listaccountsforprovisionedpermissionset) - Lists all the AWS accounts where the specified permission set is provisioned.
* [listCustomerManagedPolicyReferencesInPermissionSet](docs/sdk/README.md#listcustomermanagedpolicyreferencesinpermissionset) - Lists all customer managed policies attached to a specified <a>PermissionSet</a>.
* [listInstances](docs/sdk/README.md#listinstances) - Lists the IAM Identity Center instances that the caller has access to.
* [listManagedPoliciesInPermissionSet](docs/sdk/README.md#listmanagedpoliciesinpermissionset) - Lists the AWS managed policy that is attached to a specified permission set.
* [listPermissionSetProvisioningStatus](docs/sdk/README.md#listpermissionsetprovisioningstatus) - Lists the status of the permission set provisioning requests for a specified IAM Identity Center instance.
* [listPermissionSets](docs/sdk/README.md#listpermissionsets) - Lists the <a>PermissionSet</a>s in an IAM Identity Center instance.
* [listPermissionSetsProvisionedToAccount](docs/sdk/README.md#listpermissionsetsprovisionedtoaccount) - Lists all the permission sets that are provisioned to a specified AWS account.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags that are attached to a specified resource.
* [provisionPermissionSet](docs/sdk/README.md#provisionpermissionset) - The process by which a specified permission set is provisioned to the specified target.
* [putInlinePolicyToPermissionSet](docs/sdk/README.md#putinlinepolicytopermissionset) - <p>Attaches an inline policy to a permission set.</p> <note> <p>If the permission set is already referenced by one or more account assignments, you will need to call <code> <a>ProvisionPermissionSet</a> </code> after this action to apply the corresponding IAM policy updates to all assigned accounts.</p> </note>
* [putPermissionsBoundaryToPermissionSet](docs/sdk/README.md#putpermissionsboundarytopermissionset) - Attaches an AWS managed or customer managed policy to the specified <a>PermissionSet</a> as a permissions boundary.
* [tagResource](docs/sdk/README.md#tagresource) - Associates a set of tags with a specified resource.
* [untagResource](docs/sdk/README.md#untagresource) - Disassociates a set of tags from a specified resource.
* [updateInstanceAccessControlAttributeConfiguration](docs/sdk/README.md#updateinstanceaccesscontrolattributeconfiguration) - Updates the IAM Identity Center identity store attributes that you can use with the IAM Identity Center instance for attributes-based access control (ABAC). When using an external identity provider as an identity source, you can pass attributes through the SAML assertion as an alternative to configuring attributes from the IAM Identity Center identity store. If a SAML assertion passes any of these attributes, IAM Identity Center replaces the attribute value with the value from the IAM Identity Center identity store. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.
* [updatePermissionSet](docs/sdk/README.md#updatepermissionset) - Updates an existing permission set.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
