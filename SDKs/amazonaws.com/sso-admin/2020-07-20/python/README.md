# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/sso-admin/2020-07-20/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AttachCustomerManagedPolicyReferenceToPermissionSetRequest(
    attach_customer_managed_policy_reference_to_permission_set_request=shared.AttachCustomerManagedPolicyReferenceToPermissionSetRequest(
        customer_managed_policy_reference=shared.CustomerManagedPolicyReference(
            name="corrupti",
            path="provident",
        ),
        instance_arn="distinctio",
        permission_set_arn="quibusdam",
    ),
    x_amz_algorithm="unde",
    x_amz_content_sha256="nulla",
    x_amz_credential="corrupti",
    x_amz_date="illum",
    x_amz_security_token="vel",
    x_amz_signature="error",
    x_amz_signed_headers="deserunt",
    x_amz_target="SWBExternalService.AttachCustomerManagedPolicyReferenceToPermissionSet",
)
    
res = s.attach_customer_managed_policy_reference_to_permission_set(req)

if res.attach_customer_managed_policy_reference_to_permission_set_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `attach_customer_managed_policy_reference_to_permission_set` - Attaches the specified customer managed policy to the specified <a>PermissionSet</a>.
* `attach_managed_policy_to_permission_set` - <p>Attaches an AWS managed policy ARN to a permission set.</p> <note> <p>If the permission set is already referenced by one or more account assignments, you will need to call <code> <a>ProvisionPermissionSet</a> </code> after this operation. Calling <code>ProvisionPermissionSet</code> applies the corresponding IAM policy updates to all assigned accounts.</p> </note>
* `create_account_assignment` - <p>Assigns access to a principal for a specified AWS account using a specified permission set.</p> <note> <p>The term <i>principal</i> here refers to a user or group that is defined in IAM Identity Center.</p> </note> <note> <p>As part of a successful <code>CreateAccountAssignment</code> call, the specified permission set will automatically be provisioned to the account in the form of an IAM policy. That policy is attached to the IAM role created in IAM Identity Center. If the permission set is subsequently updated, the corresponding IAM policies attached to roles in your accounts will not be updated automatically. In this case, you must call <code> <a>ProvisionPermissionSet</a> </code> to make these updates.</p> </note> <note> <p> After a successful response, call <code>DescribeAccountAssignmentCreationStatus</code> to describe the status of an assignment creation request. </p> </note>
* `create_instance_access_control_attribute_configuration` - <p>Enables the attributes-based access control (ABAC) feature for the specified IAM Identity Center instance. You can also specify new attributes to add to your ABAC configuration during the enabling process. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.</p> <note> <p>After a successful response, call <code>DescribeInstanceAccessControlAttributeConfiguration</code> to validate that <code>InstanceAccessControlAttributeConfiguration</code> was created.</p> </note>
* `create_permission_set` - <p>Creates a permission set within a specified IAM Identity Center instance.</p> <note> <p>To grant users and groups access to AWS account resources, use <code> <a>CreateAccountAssignment</a> </code>.</p> </note>
* `delete_account_assignment` - <p>Deletes a principal's access from a specified AWS account using a specified permission set.</p> <note> <p>After a successful response, call <code>DescribeAccountAssignmentCreationStatus</code> to describe the status of an assignment deletion request.</p> </note>
* `delete_inline_policy_from_permission_set` - Deletes the inline policy from a specified permission set.
* `delete_instance_access_control_attribute_configuration` - Disables the attributes-based access control (ABAC) feature for the specified IAM Identity Center instance and deletes all of the attribute mappings that have been configured. Once deleted, any attributes that are received from an identity source and any custom attributes you have previously configured will not be passed. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.
* `delete_permission_set` - Deletes the specified permission set.
* `delete_permissions_boundary_from_permission_set` - Deletes the permissions boundary from a specified <a>PermissionSet</a>.
* `describe_account_assignment_creation_status` - Describes the status of the assignment creation request.
* `describe_account_assignment_deletion_status` - Describes the status of the assignment deletion request.
* `describe_instance_access_control_attribute_configuration` - Returns the list of IAM Identity Center identity store attributes that have been configured to work with attributes-based access control (ABAC) for the specified IAM Identity Center instance. This will not return attributes configured and sent by an external identity provider. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.
* `describe_permission_set` - Gets the details of the permission set.
* `describe_permission_set_provisioning_status` - Describes the status for the given permission set provisioning request.
* `detach_customer_managed_policy_reference_from_permission_set` - Detaches the specified customer managed policy from the specified <a>PermissionSet</a>.
* `detach_managed_policy_from_permission_set` - Detaches the attached AWS managed policy ARN from the specified permission set.
* `get_inline_policy_for_permission_set` - Obtains the inline policy assigned to the permission set.
* `get_permissions_boundary_for_permission_set` - Obtains the permissions boundary for a specified <a>PermissionSet</a>.
* `list_account_assignment_creation_status` - Lists the status of the AWS account assignment creation requests for a specified IAM Identity Center instance.
* `list_account_assignment_deletion_status` - Lists the status of the AWS account assignment deletion requests for a specified IAM Identity Center instance.
* `list_account_assignments` - Lists the assignee of the specified AWS account with the specified permission set.
* `list_accounts_for_provisioned_permission_set` - Lists all the AWS accounts where the specified permission set is provisioned.
* `list_customer_managed_policy_references_in_permission_set` - Lists all customer managed policies attached to a specified <a>PermissionSet</a>.
* `list_instances` - Lists the IAM Identity Center instances that the caller has access to.
* `list_managed_policies_in_permission_set` - Lists the AWS managed policy that is attached to a specified permission set.
* `list_permission_set_provisioning_status` - Lists the status of the permission set provisioning requests for a specified IAM Identity Center instance.
* `list_permission_sets` - Lists the <a>PermissionSet</a>s in an IAM Identity Center instance.
* `list_permission_sets_provisioned_to_account` - Lists all the permission sets that are provisioned to a specified AWS account.
* `list_tags_for_resource` - Lists the tags that are attached to a specified resource.
* `provision_permission_set` - The process by which a specified permission set is provisioned to the specified target.
* `put_inline_policy_to_permission_set` - <p>Attaches an inline policy to a permission set.</p> <note> <p>If the permission set is already referenced by one or more account assignments, you will need to call <code> <a>ProvisionPermissionSet</a> </code> after this action to apply the corresponding IAM policy updates to all assigned accounts.</p> </note>
* `put_permissions_boundary_to_permission_set` - Attaches an AWS managed or customer managed policy to the specified <a>PermissionSet</a> as a permissions boundary.
* `tag_resource` - Associates a set of tags with a specified resource.
* `untag_resource` - Disassociates a set of tags from a specified resource.
* `update_instance_access_control_attribute_configuration` - Updates the IAM Identity Center identity store attributes that you can use with the IAM Identity Center instance for attributes-based access control (ABAC). When using an external identity provider as an identity source, you can pass attributes through the SAML assertion as an alternative to configuring attributes from the IAM Identity Center identity store. If a SAML assertion passes any of these attributes, IAM Identity Center replaces the attribute value with the value from the IAM Identity Center identity store. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.
* `update_permission_set` - Updates an existing permission set.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
