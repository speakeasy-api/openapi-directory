import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://sso.{region}.amazonaws.com", "https://sso.{region}.amazonaws.com", "http://sso.{region}.amazonaws.com.cn", "https://sso.{region}.amazonaws.com.cn"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * <p>AWS IAM Identity Center (successor to AWS Single Sign-On) helps you securely create, or connect, your workforce identities and manage their access centrally across AWS accounts and applications. IAM Identity Center is the recommended approach for workforce authentication and authorization in AWS, for organizations of any size and type.</p> <note> <p>Although AWS Single Sign-On was renamed, the <code>sso</code> and <code>identitystore</code> API namespaces will continue to retain their original name for backward compatibility purposes. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html#renamed">IAM Identity Center rename</a>.</p> </note> <p>This reference guide provides information on single sign-on operations which could be used for access management of AWS accounts. For information about IAM Identity Center features, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">IAM Identity Center User Guide</a>.</p> <p>Many operations in the IAM Identity Center APIs rely on identifiers for users and groups, known as principals. For more information about how to work with principals and principal IDs in IAM Identity Center, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/welcome.html">Identity Store API Reference</a>.</p> <note> <p>AWS provides SDKs that consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .Net, iOS, Android, and more). The SDKs provide a convenient way to create programmatic access to IAM Identity Center and other AWS services. For more information about the AWS SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p> </note>
 *
 * @see {@link https://docs.aws.amazon.com/sso/} - Amazon Web Services documentation
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Attaches the specified customer managed policy to the specified <a>PermissionSet</a>.
     */
    attachCustomerManagedPolicyReferenceToPermissionSet(req: operations.AttachCustomerManagedPolicyReferenceToPermissionSetRequest, config?: AxiosRequestConfig): Promise<operations.AttachCustomerManagedPolicyReferenceToPermissionSetResponse>;
    /**
     * <p>Attaches an AWS managed policy ARN to a permission set.</p> <note> <p>If the permission set is already referenced by one or more account assignments, you will need to call <code> <a>ProvisionPermissionSet</a> </code> after this operation. Calling <code>ProvisionPermissionSet</code> applies the corresponding IAM policy updates to all assigned accounts.</p> </note>
     */
    attachManagedPolicyToPermissionSet(req: operations.AttachManagedPolicyToPermissionSetRequest, config?: AxiosRequestConfig): Promise<operations.AttachManagedPolicyToPermissionSetResponse>;
    /**
     * <p>Assigns access to a principal for a specified AWS account using a specified permission set.</p> <note> <p>The term <i>principal</i> here refers to a user or group that is defined in IAM Identity Center.</p> </note> <note> <p>As part of a successful <code>CreateAccountAssignment</code> call, the specified permission set will automatically be provisioned to the account in the form of an IAM policy. That policy is attached to the IAM role created in IAM Identity Center. If the permission set is subsequently updated, the corresponding IAM policies attached to roles in your accounts will not be updated automatically. In this case, you must call <code> <a>ProvisionPermissionSet</a> </code> to make these updates.</p> </note> <note> <p> After a successful response, call <code>DescribeAccountAssignmentCreationStatus</code> to describe the status of an assignment creation request. </p> </note>
     */
    createAccountAssignment(req: operations.CreateAccountAssignmentRequest, config?: AxiosRequestConfig): Promise<operations.CreateAccountAssignmentResponse>;
    /**
     * <p>Enables the attributes-based access control (ABAC) feature for the specified IAM Identity Center instance. You can also specify new attributes to add to your ABAC configuration during the enabling process. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.</p> <note> <p>After a successful response, call <code>DescribeInstanceAccessControlAttributeConfiguration</code> to validate that <code>InstanceAccessControlAttributeConfiguration</code> was created.</p> </note>
     */
    createInstanceAccessControlAttributeConfiguration(req: operations.CreateInstanceAccessControlAttributeConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.CreateInstanceAccessControlAttributeConfigurationResponse>;
    /**
     * <p>Creates a permission set within a specified IAM Identity Center instance.</p> <note> <p>To grant users and groups access to AWS account resources, use <code> <a>CreateAccountAssignment</a> </code>.</p> </note>
     */
    createPermissionSet(req: operations.CreatePermissionSetRequest, config?: AxiosRequestConfig): Promise<operations.CreatePermissionSetResponse>;
    /**
     * <p>Deletes a principal's access from a specified AWS account using a specified permission set.</p> <note> <p>After a successful response, call <code>DescribeAccountAssignmentCreationStatus</code> to describe the status of an assignment deletion request.</p> </note>
     */
    deleteAccountAssignment(req: operations.DeleteAccountAssignmentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAccountAssignmentResponse>;
    /**
     * Deletes the inline policy from a specified permission set.
     */
    deleteInlinePolicyFromPermissionSet(req: operations.DeleteInlinePolicyFromPermissionSetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteInlinePolicyFromPermissionSetResponse>;
    /**
     * Disables the attributes-based access control (ABAC) feature for the specified IAM Identity Center instance and deletes all of the attribute mappings that have been configured. Once deleted, any attributes that are received from an identity source and any custom attributes you have previously configured will not be passed. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.
     */
    deleteInstanceAccessControlAttributeConfiguration(req: operations.DeleteInstanceAccessControlAttributeConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteInstanceAccessControlAttributeConfigurationResponse>;
    /**
     * Deletes the specified permission set.
     */
    deletePermissionSet(req: operations.DeletePermissionSetRequest, config?: AxiosRequestConfig): Promise<operations.DeletePermissionSetResponse>;
    /**
     * Deletes the permissions boundary from a specified <a>PermissionSet</a>.
     */
    deletePermissionsBoundaryFromPermissionSet(req: operations.DeletePermissionsBoundaryFromPermissionSetRequest, config?: AxiosRequestConfig): Promise<operations.DeletePermissionsBoundaryFromPermissionSetResponse>;
    /**
     * Describes the status of the assignment creation request.
     */
    describeAccountAssignmentCreationStatus(req: operations.DescribeAccountAssignmentCreationStatusRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAccountAssignmentCreationStatusResponse>;
    /**
     * Describes the status of the assignment deletion request.
     */
    describeAccountAssignmentDeletionStatus(req: operations.DescribeAccountAssignmentDeletionStatusRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAccountAssignmentDeletionStatusResponse>;
    /**
     * Returns the list of IAM Identity Center identity store attributes that have been configured to work with attributes-based access control (ABAC) for the specified IAM Identity Center instance. This will not return attributes configured and sent by an external identity provider. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.
     */
    describeInstanceAccessControlAttributeConfiguration(req: operations.DescribeInstanceAccessControlAttributeConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeInstanceAccessControlAttributeConfigurationResponse>;
    /**
     * Gets the details of the permission set.
     */
    describePermissionSet(req: operations.DescribePermissionSetRequest, config?: AxiosRequestConfig): Promise<operations.DescribePermissionSetResponse>;
    /**
     * Describes the status for the given permission set provisioning request.
     */
    describePermissionSetProvisioningStatus(req: operations.DescribePermissionSetProvisioningStatusRequest, config?: AxiosRequestConfig): Promise<operations.DescribePermissionSetProvisioningStatusResponse>;
    /**
     * Detaches the specified customer managed policy from the specified <a>PermissionSet</a>.
     */
    detachCustomerManagedPolicyReferenceFromPermissionSet(req: operations.DetachCustomerManagedPolicyReferenceFromPermissionSetRequest, config?: AxiosRequestConfig): Promise<operations.DetachCustomerManagedPolicyReferenceFromPermissionSetResponse>;
    /**
     * Detaches the attached AWS managed policy ARN from the specified permission set.
     */
    detachManagedPolicyFromPermissionSet(req: operations.DetachManagedPolicyFromPermissionSetRequest, config?: AxiosRequestConfig): Promise<operations.DetachManagedPolicyFromPermissionSetResponse>;
    /**
     * Obtains the inline policy assigned to the permission set.
     */
    getInlinePolicyForPermissionSet(req: operations.GetInlinePolicyForPermissionSetRequest, config?: AxiosRequestConfig): Promise<operations.GetInlinePolicyForPermissionSetResponse>;
    /**
     * Obtains the permissions boundary for a specified <a>PermissionSet</a>.
     */
    getPermissionsBoundaryForPermissionSet(req: operations.GetPermissionsBoundaryForPermissionSetRequest, config?: AxiosRequestConfig): Promise<operations.GetPermissionsBoundaryForPermissionSetResponse>;
    /**
     * Lists the status of the AWS account assignment creation requests for a specified IAM Identity Center instance.
     */
    listAccountAssignmentCreationStatus(req: operations.ListAccountAssignmentCreationStatusRequest, config?: AxiosRequestConfig): Promise<operations.ListAccountAssignmentCreationStatusResponse>;
    /**
     * Lists the status of the AWS account assignment deletion requests for a specified IAM Identity Center instance.
     */
    listAccountAssignmentDeletionStatus(req: operations.ListAccountAssignmentDeletionStatusRequest, config?: AxiosRequestConfig): Promise<operations.ListAccountAssignmentDeletionStatusResponse>;
    /**
     * Lists the assignee of the specified AWS account with the specified permission set.
     */
    listAccountAssignments(req: operations.ListAccountAssignmentsRequest, config?: AxiosRequestConfig): Promise<operations.ListAccountAssignmentsResponse>;
    /**
     * Lists all the AWS accounts where the specified permission set is provisioned.
     */
    listAccountsForProvisionedPermissionSet(req: operations.ListAccountsForProvisionedPermissionSetRequest, config?: AxiosRequestConfig): Promise<operations.ListAccountsForProvisionedPermissionSetResponse>;
    /**
     * Lists all customer managed policies attached to a specified <a>PermissionSet</a>.
     */
    listCustomerManagedPolicyReferencesInPermissionSet(req: operations.ListCustomerManagedPolicyReferencesInPermissionSetRequest, config?: AxiosRequestConfig): Promise<operations.ListCustomerManagedPolicyReferencesInPermissionSetResponse>;
    /**
     * Lists the IAM Identity Center instances that the caller has access to.
     */
    listInstances(req: operations.ListInstancesRequest, config?: AxiosRequestConfig): Promise<operations.ListInstancesResponse>;
    /**
     * Lists the AWS managed policy that is attached to a specified permission set.
     */
    listManagedPoliciesInPermissionSet(req: operations.ListManagedPoliciesInPermissionSetRequest, config?: AxiosRequestConfig): Promise<operations.ListManagedPoliciesInPermissionSetResponse>;
    /**
     * Lists the status of the permission set provisioning requests for a specified IAM Identity Center instance.
     */
    listPermissionSetProvisioningStatus(req: operations.ListPermissionSetProvisioningStatusRequest, config?: AxiosRequestConfig): Promise<operations.ListPermissionSetProvisioningStatusResponse>;
    /**
     * Lists the <a>PermissionSet</a>s in an IAM Identity Center instance.
     */
    listPermissionSets(req: operations.ListPermissionSetsRequest, config?: AxiosRequestConfig): Promise<operations.ListPermissionSetsResponse>;
    /**
     * Lists all the permission sets that are provisioned to a specified AWS account.
     */
    listPermissionSetsProvisionedToAccount(req: operations.ListPermissionSetsProvisionedToAccountRequest, config?: AxiosRequestConfig): Promise<operations.ListPermissionSetsProvisionedToAccountResponse>;
    /**
     * Lists the tags that are attached to a specified resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * The process by which a specified permission set is provisioned to the specified target.
     */
    provisionPermissionSet(req: operations.ProvisionPermissionSetRequest, config?: AxiosRequestConfig): Promise<operations.ProvisionPermissionSetResponse>;
    /**
     * <p>Attaches an inline policy to a permission set.</p> <note> <p>If the permission set is already referenced by one or more account assignments, you will need to call <code> <a>ProvisionPermissionSet</a> </code> after this action to apply the corresponding IAM policy updates to all assigned accounts.</p> </note>
     */
    putInlinePolicyToPermissionSet(req: operations.PutInlinePolicyToPermissionSetRequest, config?: AxiosRequestConfig): Promise<operations.PutInlinePolicyToPermissionSetResponse>;
    /**
     * Attaches an AWS managed or customer managed policy to the specified <a>PermissionSet</a> as a permissions boundary.
     */
    putPermissionsBoundaryToPermissionSet(req: operations.PutPermissionsBoundaryToPermissionSetRequest, config?: AxiosRequestConfig): Promise<operations.PutPermissionsBoundaryToPermissionSetResponse>;
    /**
     * Associates a set of tags with a specified resource.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Disassociates a set of tags from a specified resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates the IAM Identity Center identity store attributes that you can use with the IAM Identity Center instance for attributes-based access control (ABAC). When using an external identity provider as an identity source, you can pass attributes through the SAML assertion as an alternative to configuring attributes from the IAM Identity Center identity store. If a SAML assertion passes any of these attributes, IAM Identity Center replaces the attribute value with the value from the IAM Identity Center identity store. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.
     */
    updateInstanceAccessControlAttributeConfiguration(req: operations.UpdateInstanceAccessControlAttributeConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateInstanceAccessControlAttributeConfigurationResponse>;
    /**
     * Updates an existing permission set.
     */
    updatePermissionSet(req: operations.UpdatePermissionSetRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePermissionSetResponse>;
}
