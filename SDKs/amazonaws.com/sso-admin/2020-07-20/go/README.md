# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/sso-admin/2020-07-20/go
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

    req := operations.AttachCustomerManagedPolicyReferenceToPermissionSetRequest{
        Headers: operations.AttachCustomerManagedPolicyReferenceToPermissionSetHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "SWBExternalService.AttachCustomerManagedPolicyReferenceToPermissionSet",
        },
        Request: shared.AttachCustomerManagedPolicyReferenceToPermissionSetRequest{
            CustomerManagedPolicyReference: shared.CustomerManagedPolicyReference{
                Name: "illum",
                Path: "vel",
            },
            InstanceArn: "error",
            PermissionSetArn: "deserunt",
        },
    }

    ctx := context.Background()
    res, err := s.AttachCustomerManagedPolicyReferenceToPermissionSet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AttachCustomerManagedPolicyReferenceToPermissionSetResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `AttachCustomerManagedPolicyReferenceToPermissionSet` - Attaches the specified customer managed policy to the specified <a>PermissionSet</a>.
* `AttachManagedPolicyToPermissionSet` - <p>Attaches an AWS managed policy ARN to a permission set.</p> <note> <p>If the permission set is already referenced by one or more account assignments, you will need to call <code> <a>ProvisionPermissionSet</a> </code> after this operation. Calling <code>ProvisionPermissionSet</code> applies the corresponding IAM policy updates to all assigned accounts.</p> </note>
* `CreateAccountAssignment` - <p>Assigns access to a principal for a specified AWS account using a specified permission set.</p> <note> <p>The term <i>principal</i> here refers to a user or group that is defined in IAM Identity Center.</p> </note> <note> <p>As part of a successful <code>CreateAccountAssignment</code> call, the specified permission set will automatically be provisioned to the account in the form of an IAM policy. That policy is attached to the IAM role created in IAM Identity Center. If the permission set is subsequently updated, the corresponding IAM policies attached to roles in your accounts will not be updated automatically. In this case, you must call <code> <a>ProvisionPermissionSet</a> </code> to make these updates.</p> </note> <note> <p> After a successful response, call <code>DescribeAccountAssignmentCreationStatus</code> to describe the status of an assignment creation request. </p> </note>
* `CreateInstanceAccessControlAttributeConfiguration` - <p>Enables the attributes-based access control (ABAC) feature for the specified IAM Identity Center instance. You can also specify new attributes to add to your ABAC configuration during the enabling process. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.</p> <note> <p>After a successful response, call <code>DescribeInstanceAccessControlAttributeConfiguration</code> to validate that <code>InstanceAccessControlAttributeConfiguration</code> was created.</p> </note>
* `CreatePermissionSet` - <p>Creates a permission set within a specified IAM Identity Center instance.</p> <note> <p>To grant users and groups access to AWS account resources, use <code> <a>CreateAccountAssignment</a> </code>.</p> </note>
* `DeleteAccountAssignment` - <p>Deletes a principal's access from a specified AWS account using a specified permission set.</p> <note> <p>After a successful response, call <code>DescribeAccountAssignmentCreationStatus</code> to describe the status of an assignment deletion request.</p> </note>
* `DeleteInlinePolicyFromPermissionSet` - Deletes the inline policy from a specified permission set.
* `DeleteInstanceAccessControlAttributeConfiguration` - Disables the attributes-based access control (ABAC) feature for the specified IAM Identity Center instance and deletes all of the attribute mappings that have been configured. Once deleted, any attributes that are received from an identity source and any custom attributes you have previously configured will not be passed. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.
* `DeletePermissionSet` - Deletes the specified permission set.
* `DeletePermissionsBoundaryFromPermissionSet` - Deletes the permissions boundary from a specified <a>PermissionSet</a>.
* `DescribeAccountAssignmentCreationStatus` - Describes the status of the assignment creation request.
* `DescribeAccountAssignmentDeletionStatus` - Describes the status of the assignment deletion request.
* `DescribeInstanceAccessControlAttributeConfiguration` - Returns the list of IAM Identity Center identity store attributes that have been configured to work with attributes-based access control (ABAC) for the specified IAM Identity Center instance. This will not return attributes configured and sent by an external identity provider. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.
* `DescribePermissionSet` - Gets the details of the permission set.
* `DescribePermissionSetProvisioningStatus` - Describes the status for the given permission set provisioning request.
* `DetachCustomerManagedPolicyReferenceFromPermissionSet` - Detaches the specified customer managed policy from the specified <a>PermissionSet</a>.
* `DetachManagedPolicyFromPermissionSet` - Detaches the attached AWS managed policy ARN from the specified permission set.
* `GetInlinePolicyForPermissionSet` - Obtains the inline policy assigned to the permission set.
* `GetPermissionsBoundaryForPermissionSet` - Obtains the permissions boundary for a specified <a>PermissionSet</a>.
* `ListAccountAssignmentCreationStatus` - Lists the status of the AWS account assignment creation requests for a specified IAM Identity Center instance.
* `ListAccountAssignmentDeletionStatus` - Lists the status of the AWS account assignment deletion requests for a specified IAM Identity Center instance.
* `ListAccountAssignments` - Lists the assignee of the specified AWS account with the specified permission set.
* `ListAccountsForProvisionedPermissionSet` - Lists all the AWS accounts where the specified permission set is provisioned.
* `ListCustomerManagedPolicyReferencesInPermissionSet` - Lists all customer managed policies attached to a specified <a>PermissionSet</a>.
* `ListInstances` - Lists the IAM Identity Center instances that the caller has access to.
* `ListManagedPoliciesInPermissionSet` - Lists the AWS managed policy that is attached to a specified permission set.
* `ListPermissionSetProvisioningStatus` - Lists the status of the permission set provisioning requests for a specified IAM Identity Center instance.
* `ListPermissionSets` - Lists the <a>PermissionSet</a>s in an IAM Identity Center instance.
* `ListPermissionSetsProvisionedToAccount` - Lists all the permission sets that are provisioned to a specified AWS account.
* `ListTagsForResource` - Lists the tags that are attached to a specified resource.
* `ProvisionPermissionSet` - The process by which a specified permission set is provisioned to the specified target.
* `PutInlinePolicyToPermissionSet` - <p>Attaches an inline policy to a permission set.</p> <note> <p>If the permission set is already referenced by one or more account assignments, you will need to call <code> <a>ProvisionPermissionSet</a> </code> after this action to apply the corresponding IAM policy updates to all assigned accounts.</p> </note>
* `PutPermissionsBoundaryToPermissionSet` - Attaches an AWS managed or customer managed policy to the specified <a>PermissionSet</a> as a permissions boundary.
* `TagResource` - Associates a set of tags with a specified resource.
* `UntagResource` - Disassociates a set of tags from a specified resource.
* `UpdateInstanceAccessControlAttributeConfiguration` - Updates the IAM Identity Center identity store attributes that you can use with the IAM Identity Center instance for attributes-based access control (ABAC). When using an external identity provider as an identity source, you can pass attributes through the SAML assertion as an alternative to configuring attributes from the IAM Identity Center identity store. If a SAML assertion passes any of these attributes, IAM Identity Center replaces the attribute value with the value from the IAM Identity Center identity store. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.
* `UpdatePermissionSet` - Updates an existing permission set.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
