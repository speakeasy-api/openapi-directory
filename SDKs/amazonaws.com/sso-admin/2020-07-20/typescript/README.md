# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/sso-admin/2020-07-20/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/sso-admin/2020-07-20/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  AttachCustomerManagedPolicyReferenceToPermissionSetRequest,
  AttachCustomerManagedPolicyReferenceToPermissionSetResponse,
  AttachCustomerManagedPolicyReferenceToPermissionSetXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AttachCustomerManagedPolicyReferenceToPermissionSetRequest = {
  attachCustomerManagedPolicyReferenceToPermissionSetRequest: {
    customerManagedPolicyReference: {
      name: "corrupti",
      path: "provident",
    },
    instanceArn: "distinctio",
    permissionSetArn: "quibusdam",
  },
  xAmzAlgorithm: "unde",
  xAmzContentSha256: "nulla",
  xAmzCredential: "corrupti",
  xAmzDate: "illum",
  xAmzSecurityToken: "vel",
  xAmzSignature: "error",
  xAmzSignedHeaders: "deserunt",
  xAmzTarget: AttachCustomerManagedPolicyReferenceToPermissionSetXAmzTargetEnum.SWBExternalServiceAttachCustomerManagedPolicyReferenceToPermissionSet,
};

sdk.attachCustomerManagedPolicyReferenceToPermissionSet(req).then((res: AttachCustomerManagedPolicyReferenceToPermissionSetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `attachCustomerManagedPolicyReferenceToPermissionSet` - Attaches the specified customer managed policy to the specified <a>PermissionSet</a>.
* `attachManagedPolicyToPermissionSet` - <p>Attaches an AWS managed policy ARN to a permission set.</p> <note> <p>If the permission set is already referenced by one or more account assignments, you will need to call <code> <a>ProvisionPermissionSet</a> </code> after this operation. Calling <code>ProvisionPermissionSet</code> applies the corresponding IAM policy updates to all assigned accounts.</p> </note>
* `createAccountAssignment` - <p>Assigns access to a principal for a specified AWS account using a specified permission set.</p> <note> <p>The term <i>principal</i> here refers to a user or group that is defined in IAM Identity Center.</p> </note> <note> <p>As part of a successful <code>CreateAccountAssignment</code> call, the specified permission set will automatically be provisioned to the account in the form of an IAM policy. That policy is attached to the IAM role created in IAM Identity Center. If the permission set is subsequently updated, the corresponding IAM policies attached to roles in your accounts will not be updated automatically. In this case, you must call <code> <a>ProvisionPermissionSet</a> </code> to make these updates.</p> </note> <note> <p> After a successful response, call <code>DescribeAccountAssignmentCreationStatus</code> to describe the status of an assignment creation request. </p> </note>
* `createInstanceAccessControlAttributeConfiguration` - <p>Enables the attributes-based access control (ABAC) feature for the specified IAM Identity Center instance. You can also specify new attributes to add to your ABAC configuration during the enabling process. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.</p> <note> <p>After a successful response, call <code>DescribeInstanceAccessControlAttributeConfiguration</code> to validate that <code>InstanceAccessControlAttributeConfiguration</code> was created.</p> </note>
* `createPermissionSet` - <p>Creates a permission set within a specified IAM Identity Center instance.</p> <note> <p>To grant users and groups access to AWS account resources, use <code> <a>CreateAccountAssignment</a> </code>.</p> </note>
* `deleteAccountAssignment` - <p>Deletes a principal's access from a specified AWS account using a specified permission set.</p> <note> <p>After a successful response, call <code>DescribeAccountAssignmentCreationStatus</code> to describe the status of an assignment deletion request.</p> </note>
* `deleteInlinePolicyFromPermissionSet` - Deletes the inline policy from a specified permission set.
* `deleteInstanceAccessControlAttributeConfiguration` - Disables the attributes-based access control (ABAC) feature for the specified IAM Identity Center instance and deletes all of the attribute mappings that have been configured. Once deleted, any attributes that are received from an identity source and any custom attributes you have previously configured will not be passed. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.
* `deletePermissionSet` - Deletes the specified permission set.
* `deletePermissionsBoundaryFromPermissionSet` - Deletes the permissions boundary from a specified <a>PermissionSet</a>.
* `describeAccountAssignmentCreationStatus` - Describes the status of the assignment creation request.
* `describeAccountAssignmentDeletionStatus` - Describes the status of the assignment deletion request.
* `describeInstanceAccessControlAttributeConfiguration` - Returns the list of IAM Identity Center identity store attributes that have been configured to work with attributes-based access control (ABAC) for the specified IAM Identity Center instance. This will not return attributes configured and sent by an external identity provider. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.
* `describePermissionSet` - Gets the details of the permission set.
* `describePermissionSetProvisioningStatus` - Describes the status for the given permission set provisioning request.
* `detachCustomerManagedPolicyReferenceFromPermissionSet` - Detaches the specified customer managed policy from the specified <a>PermissionSet</a>.
* `detachManagedPolicyFromPermissionSet` - Detaches the attached AWS managed policy ARN from the specified permission set.
* `getInlinePolicyForPermissionSet` - Obtains the inline policy assigned to the permission set.
* `getPermissionsBoundaryForPermissionSet` - Obtains the permissions boundary for a specified <a>PermissionSet</a>.
* `listAccountAssignmentCreationStatus` - Lists the status of the AWS account assignment creation requests for a specified IAM Identity Center instance.
* `listAccountAssignmentDeletionStatus` - Lists the status of the AWS account assignment deletion requests for a specified IAM Identity Center instance.
* `listAccountAssignments` - Lists the assignee of the specified AWS account with the specified permission set.
* `listAccountsForProvisionedPermissionSet` - Lists all the AWS accounts where the specified permission set is provisioned.
* `listCustomerManagedPolicyReferencesInPermissionSet` - Lists all customer managed policies attached to a specified <a>PermissionSet</a>.
* `listInstances` - Lists the IAM Identity Center instances that the caller has access to.
* `listManagedPoliciesInPermissionSet` - Lists the AWS managed policy that is attached to a specified permission set.
* `listPermissionSetProvisioningStatus` - Lists the status of the permission set provisioning requests for a specified IAM Identity Center instance.
* `listPermissionSets` - Lists the <a>PermissionSet</a>s in an IAM Identity Center instance.
* `listPermissionSetsProvisionedToAccount` - Lists all the permission sets that are provisioned to a specified AWS account.
* `listTagsForResource` - Lists the tags that are attached to a specified resource.
* `provisionPermissionSet` - The process by which a specified permission set is provisioned to the specified target.
* `putInlinePolicyToPermissionSet` - <p>Attaches an inline policy to a permission set.</p> <note> <p>If the permission set is already referenced by one or more account assignments, you will need to call <code> <a>ProvisionPermissionSet</a> </code> after this action to apply the corresponding IAM policy updates to all assigned accounts.</p> </note>
* `putPermissionsBoundaryToPermissionSet` - Attaches an AWS managed or customer managed policy to the specified <a>PermissionSet</a> as a permissions boundary.
* `tagResource` - Associates a set of tags with a specified resource.
* `untagResource` - Disassociates a set of tags from a specified resource.
* `updateInstanceAccessControlAttributeConfiguration` - Updates the IAM Identity Center identity store attributes that you can use with the IAM Identity Center instance for attributes-based access control (ABAC). When using an external identity provider as an identity source, you can pass attributes through the SAML assertion as an alternative to configuring attributes from the IAM Identity Center identity store. If a SAML assertion passes any of these attributes, IAM Identity Center replaces the attribute value with the value from the IAM Identity Center identity store. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.
* `updatePermissionSet` - Updates an existing permission set.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

