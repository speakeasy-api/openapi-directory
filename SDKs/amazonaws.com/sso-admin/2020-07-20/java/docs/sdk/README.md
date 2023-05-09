# SDK

## Overview

<p>AWS IAM Identity Center (successor to AWS Single Sign-On) helps you securely create, or connect, your workforce identities and manage their access centrally across AWS accounts and applications. IAM Identity Center is the recommended approach for workforce authentication and authorization in AWS, for organizations of any size and type.</p> <note> <p>Although AWS Single Sign-On was renamed, the <code>sso</code> and <code>identitystore</code> API namespaces will continue to retain their original name for backward compatibility purposes. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html#renamed">IAM Identity Center rename</a>.</p> </note> <p>This reference guide provides information on single sign-on operations which could be used for access management of AWS accounts. For information about IAM Identity Center features, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">IAM Identity Center User Guide</a>.</p> <p>Many operations in the IAM Identity Center APIs rely on identifiers for users and groups, known as principals. For more information about how to work with principals and principal IDs in IAM Identity Center, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/welcome.html">Identity Store API Reference</a>.</p> <note> <p>AWS provides SDKs that consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .Net, iOS, Android, and more). The SDKs provide a convenient way to create programmatic access to IAM Identity Center and other AWS services. For more information about the AWS SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p> </note>

Amazon Web Services documentation
<https://docs.aws.amazon.com/sso/>
### Available Operations

* [attachCustomerManagedPolicyReferenceToPermissionSet](#attachcustomermanagedpolicyreferencetopermissionset) - Attaches the specified customer managed policy to the specified <a>PermissionSet</a>.
* [attachManagedPolicyToPermissionSet](#attachmanagedpolicytopermissionset) - <p>Attaches an AWS managed policy ARN to a permission set.</p> <note> <p>If the permission set is already referenced by one or more account assignments, you will need to call <code> <a>ProvisionPermissionSet</a> </code> after this operation. Calling <code>ProvisionPermissionSet</code> applies the corresponding IAM policy updates to all assigned accounts.</p> </note>
* [createAccountAssignment](#createaccountassignment) - <p>Assigns access to a principal for a specified AWS account using a specified permission set.</p> <note> <p>The term <i>principal</i> here refers to a user or group that is defined in IAM Identity Center.</p> </note> <note> <p>As part of a successful <code>CreateAccountAssignment</code> call, the specified permission set will automatically be provisioned to the account in the form of an IAM policy. That policy is attached to the IAM role created in IAM Identity Center. If the permission set is subsequently updated, the corresponding IAM policies attached to roles in your accounts will not be updated automatically. In this case, you must call <code> <a>ProvisionPermissionSet</a> </code> to make these updates.</p> </note> <note> <p> After a successful response, call <code>DescribeAccountAssignmentCreationStatus</code> to describe the status of an assignment creation request. </p> </note>
* [createInstanceAccessControlAttributeConfiguration](#createinstanceaccesscontrolattributeconfiguration) - <p>Enables the attributes-based access control (ABAC) feature for the specified IAM Identity Center instance. You can also specify new attributes to add to your ABAC configuration during the enabling process. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.</p> <note> <p>After a successful response, call <code>DescribeInstanceAccessControlAttributeConfiguration</code> to validate that <code>InstanceAccessControlAttributeConfiguration</code> was created.</p> </note>
* [createPermissionSet](#createpermissionset) - <p>Creates a permission set within a specified IAM Identity Center instance.</p> <note> <p>To grant users and groups access to AWS account resources, use <code> <a>CreateAccountAssignment</a> </code>.</p> </note>
* [deleteAccountAssignment](#deleteaccountassignment) - <p>Deletes a principal's access from a specified AWS account using a specified permission set.</p> <note> <p>After a successful response, call <code>DescribeAccountAssignmentCreationStatus</code> to describe the status of an assignment deletion request.</p> </note>
* [deleteInlinePolicyFromPermissionSet](#deleteinlinepolicyfrompermissionset) - Deletes the inline policy from a specified permission set.
* [deleteInstanceAccessControlAttributeConfiguration](#deleteinstanceaccesscontrolattributeconfiguration) - Disables the attributes-based access control (ABAC) feature for the specified IAM Identity Center instance and deletes all of the attribute mappings that have been configured. Once deleted, any attributes that are received from an identity source and any custom attributes you have previously configured will not be passed. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.
* [deletePermissionSet](#deletepermissionset) - Deletes the specified permission set.
* [deletePermissionsBoundaryFromPermissionSet](#deletepermissionsboundaryfrompermissionset) - Deletes the permissions boundary from a specified <a>PermissionSet</a>.
* [describeAccountAssignmentCreationStatus](#describeaccountassignmentcreationstatus) - Describes the status of the assignment creation request.
* [describeAccountAssignmentDeletionStatus](#describeaccountassignmentdeletionstatus) - Describes the status of the assignment deletion request.
* [describeInstanceAccessControlAttributeConfiguration](#describeinstanceaccesscontrolattributeconfiguration) - Returns the list of IAM Identity Center identity store attributes that have been configured to work with attributes-based access control (ABAC) for the specified IAM Identity Center instance. This will not return attributes configured and sent by an external identity provider. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.
* [describePermissionSet](#describepermissionset) - Gets the details of the permission set.
* [describePermissionSetProvisioningStatus](#describepermissionsetprovisioningstatus) - Describes the status for the given permission set provisioning request.
* [detachCustomerManagedPolicyReferenceFromPermissionSet](#detachcustomermanagedpolicyreferencefrompermissionset) - Detaches the specified customer managed policy from the specified <a>PermissionSet</a>.
* [detachManagedPolicyFromPermissionSet](#detachmanagedpolicyfrompermissionset) - Detaches the attached AWS managed policy ARN from the specified permission set.
* [getInlinePolicyForPermissionSet](#getinlinepolicyforpermissionset) - Obtains the inline policy assigned to the permission set.
* [getPermissionsBoundaryForPermissionSet](#getpermissionsboundaryforpermissionset) - Obtains the permissions boundary for a specified <a>PermissionSet</a>.
* [listAccountAssignmentCreationStatus](#listaccountassignmentcreationstatus) - Lists the status of the AWS account assignment creation requests for a specified IAM Identity Center instance.
* [listAccountAssignmentDeletionStatus](#listaccountassignmentdeletionstatus) - Lists the status of the AWS account assignment deletion requests for a specified IAM Identity Center instance.
* [listAccountAssignments](#listaccountassignments) - Lists the assignee of the specified AWS account with the specified permission set.
* [listAccountsForProvisionedPermissionSet](#listaccountsforprovisionedpermissionset) - Lists all the AWS accounts where the specified permission set is provisioned.
* [listCustomerManagedPolicyReferencesInPermissionSet](#listcustomermanagedpolicyreferencesinpermissionset) - Lists all customer managed policies attached to a specified <a>PermissionSet</a>.
* [listInstances](#listinstances) - Lists the IAM Identity Center instances that the caller has access to.
* [listManagedPoliciesInPermissionSet](#listmanagedpoliciesinpermissionset) - Lists the AWS managed policy that is attached to a specified permission set.
* [listPermissionSetProvisioningStatus](#listpermissionsetprovisioningstatus) - Lists the status of the permission set provisioning requests for a specified IAM Identity Center instance.
* [listPermissionSets](#listpermissionsets) - Lists the <a>PermissionSet</a>s in an IAM Identity Center instance.
* [listPermissionSetsProvisionedToAccount](#listpermissionsetsprovisionedtoaccount) - Lists all the permission sets that are provisioned to a specified AWS account.
* [listTagsForResource](#listtagsforresource) - Lists the tags that are attached to a specified resource.
* [provisionPermissionSet](#provisionpermissionset) - The process by which a specified permission set is provisioned to the specified target.
* [putInlinePolicyToPermissionSet](#putinlinepolicytopermissionset) - <p>Attaches an inline policy to a permission set.</p> <note> <p>If the permission set is already referenced by one or more account assignments, you will need to call <code> <a>ProvisionPermissionSet</a> </code> after this action to apply the corresponding IAM policy updates to all assigned accounts.</p> </note>
* [putPermissionsBoundaryToPermissionSet](#putpermissionsboundarytopermissionset) - Attaches an AWS managed or customer managed policy to the specified <a>PermissionSet</a> as a permissions boundary.
* [tagResource](#tagresource) - Associates a set of tags with a specified resource.
* [untagResource](#untagresource) - Disassociates a set of tags from a specified resource.
* [updateInstanceAccessControlAttributeConfiguration](#updateinstanceaccesscontrolattributeconfiguration) - Updates the IAM Identity Center identity store attributes that you can use with the IAM Identity Center instance for attributes-based access control (ABAC). When using an external identity provider as an identity source, you can pass attributes through the SAML assertion as an alternative to configuring attributes from the IAM Identity Center identity store. If a SAML assertion passes any of these attributes, IAM Identity Center replaces the attribute value with the value from the IAM Identity Center identity store. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.
* [updatePermissionSet](#updatepermissionset) - Updates an existing permission set.

## attachCustomerManagedPolicyReferenceToPermissionSet

Attaches the specified customer managed policy to the specified <a>PermissionSet</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AttachCustomerManagedPolicyReferenceToPermissionSetRequest;
import org.openapis.openapi.models.operations.AttachCustomerManagedPolicyReferenceToPermissionSetResponse;
import org.openapis.openapi.models.operations.AttachCustomerManagedPolicyReferenceToPermissionSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.AttachCustomerManagedPolicyReferenceToPermissionSetRequest;
import org.openapis.openapi.models.shared.CustomerManagedPolicyReference;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AttachCustomerManagedPolicyReferenceToPermissionSetRequest req = new AttachCustomerManagedPolicyReferenceToPermissionSetRequest(                new AttachCustomerManagedPolicyReferenceToPermissionSetRequest(                new CustomerManagedPolicyReference("magnam") {{
                                                path = "debitis";
                                            }};, "ipsa", "delectus");, AttachCustomerManagedPolicyReferenceToPermissionSetXAmzTargetEnum.SWB_EXTERNAL_SERVICE_ATTACH_CUSTOMER_MANAGED_POLICY_REFERENCE_TO_PERMISSION_SET) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "molestiae";
                xAmzDate = "minus";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "iusto";
            }};            

            AttachCustomerManagedPolicyReferenceToPermissionSetResponse res = sdk.sdk.attachCustomerManagedPolicyReferenceToPermissionSet(req);

            if (res.attachCustomerManagedPolicyReferenceToPermissionSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## attachManagedPolicyToPermissionSet

<p>Attaches an AWS managed policy ARN to a permission set.</p> <note> <p>If the permission set is already referenced by one or more account assignments, you will need to call <code> <a>ProvisionPermissionSet</a> </code> after this operation. Calling <code>ProvisionPermissionSet</code> applies the corresponding IAM policy updates to all assigned accounts.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AttachManagedPolicyToPermissionSetRequest;
import org.openapis.openapi.models.operations.AttachManagedPolicyToPermissionSetResponse;
import org.openapis.openapi.models.operations.AttachManagedPolicyToPermissionSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.AttachManagedPolicyToPermissionSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AttachManagedPolicyToPermissionSetRequest req = new AttachManagedPolicyToPermissionSetRequest(                new AttachManagedPolicyToPermissionSetRequest("nisi", "recusandae", "temporibus");, AttachManagedPolicyToPermissionSetXAmzTargetEnum.SWB_EXTERNAL_SERVICE_ATTACH_MANAGED_POLICY_TO_PERMISSION_SET) {{
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "quis";
                xAmzCredential = "veritatis";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "repellendus";
            }};            

            AttachManagedPolicyToPermissionSetResponse res = sdk.sdk.attachManagedPolicyToPermissionSet(req);

            if (res.attachManagedPolicyToPermissionSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAccountAssignment

<p>Assigns access to a principal for a specified AWS account using a specified permission set.</p> <note> <p>The term <i>principal</i> here refers to a user or group that is defined in IAM Identity Center.</p> </note> <note> <p>As part of a successful <code>CreateAccountAssignment</code> call, the specified permission set will automatically be provisioned to the account in the form of an IAM policy. That policy is attached to the IAM role created in IAM Identity Center. If the permission set is subsequently updated, the corresponding IAM policies attached to roles in your accounts will not be updated automatically. In this case, you must call <code> <a>ProvisionPermissionSet</a> </code> to make these updates.</p> </note> <note> <p> After a successful response, call <code>DescribeAccountAssignmentCreationStatus</code> to describe the status of an assignment creation request. </p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAccountAssignmentRequest;
import org.openapis.openapi.models.operations.CreateAccountAssignmentResponse;
import org.openapis.openapi.models.operations.CreateAccountAssignmentXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateAccountAssignmentRequest;
import org.openapis.openapi.models.shared.PrincipalTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TargetTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAccountAssignmentRequest req = new CreateAccountAssignmentRequest(                new CreateAccountAssignmentRequest("quo", "odit", "at", PrincipalTypeEnum.GROUP, "maiores", TargetTypeEnum.AWS_ACCOUNT);, CreateAccountAssignmentXAmzTargetEnum.SWB_EXTERNAL_SERVICE_CREATE_ACCOUNT_ASSIGNMENT) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "quod";
                xAmzCredential = "quod";
                xAmzDate = "esse";
                xAmzSecurityToken = "totam";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "dolorum";
            }};            

            CreateAccountAssignmentResponse res = sdk.sdk.createAccountAssignment(req);

            if (res.createAccountAssignmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createInstanceAccessControlAttributeConfiguration

<p>Enables the attributes-based access control (ABAC) feature for the specified IAM Identity Center instance. You can also specify new attributes to add to your ABAC configuration during the enabling process. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.</p> <note> <p>After a successful response, call <code>DescribeInstanceAccessControlAttributeConfiguration</code> to validate that <code>InstanceAccessControlAttributeConfiguration</code> was created.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateInstanceAccessControlAttributeConfigurationRequest;
import org.openapis.openapi.models.operations.CreateInstanceAccessControlAttributeConfigurationResponse;
import org.openapis.openapi.models.operations.CreateInstanceAccessControlAttributeConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.AccessControlAttribute;
import org.openapis.openapi.models.shared.AccessControlAttributeValue;
import org.openapis.openapi.models.shared.CreateInstanceAccessControlAttributeConfigurationRequest;
import org.openapis.openapi.models.shared.InstanceAccessControlAttributeConfiguration;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateInstanceAccessControlAttributeConfigurationRequest req = new CreateInstanceAccessControlAttributeConfigurationRequest(                new CreateInstanceAccessControlAttributeConfigurationRequest(                new InstanceAccessControlAttributeConfiguration(                new org.openapis.openapi.models.shared.AccessControlAttribute[]{{
                                                                add(new AccessControlAttribute("modi",                 new AccessControlAttributeValue(                new String[]{{
                                                                                                    add("impedit"),
                                                                                                }});) {{
                                                                    key = "officia";
                                                                    value = new AccessControlAttributeValue(                new String[]{{
                                                                                        add("totam"),
                                                                                        add("beatae"),
                                                                                        add("commodi"),
                                                                                        add("molestiae"),
                                                                                    }}) {{
                                                                        source = new String[]{{
                                                                            add("fugit"),
                                                                            add("deleniti"),
                                                                            add("hic"),
                                                                        }};
                                                                    }};
                                                                }}),
                                                                add(new AccessControlAttribute("ad",                 new AccessControlAttributeValue(                new String[]{{
                                                                                                    add("sed"),
                                                                                                    add("iste"),
                                                                                                    add("dolor"),
                                                                                                }});) {{
                                                                    key = "cum";
                                                                    value = new AccessControlAttributeValue(                new String[]{{
                                                                                        add("perferendis"),
                                                                                    }}) {{
                                                                        source = new String[]{{
                                                                            add("ipsum"),
                                                                            add("excepturi"),
                                                                        }};
                                                                    }};
                                                                }}),
                                                                add(new AccessControlAttribute("iure",                 new AccessControlAttributeValue(                new String[]{{
                                                                                                    add("quidem"),
                                                                                                    add("architecto"),
                                                                                                    add("ipsa"),
                                                                                                    add("reiciendis"),
                                                                                                }});) {{
                                                                    key = "natus";
                                                                    value = new AccessControlAttributeValue(                new String[]{{
                                                                                        add("in"),
                                                                                        add("corporis"),
                                                                                        add("iste"),
                                                                                    }}) {{
                                                                        source = new String[]{{
                                                                            add("hic"),
                                                                            add("saepe"),
                                                                        }};
                                                                    }};
                                                                }}),
                                                            }});, "est");, CreateInstanceAccessControlAttributeConfigurationXAmzTargetEnum.SWB_EXTERNAL_SERVICE_CREATE_INSTANCE_ACCESS_CONTROL_ATTRIBUTE_CONFIGURATION) {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "dolores";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "nobis";
            }};            

            CreateInstanceAccessControlAttributeConfigurationResponse res = sdk.sdk.createInstanceAccessControlAttributeConfiguration(req);

            if (res.createInstanceAccessControlAttributeConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPermissionSet

<p>Creates a permission set within a specified IAM Identity Center instance.</p> <note> <p>To grant users and groups access to AWS account resources, use <code> <a>CreateAccountAssignment</a> </code>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePermissionSetRequest;
import org.openapis.openapi.models.operations.CreatePermissionSetResponse;
import org.openapis.openapi.models.operations.CreatePermissionSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreatePermissionSetRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePermissionSetRequest req = new CreatePermissionSetRequest(                new CreatePermissionSetRequest("omnis", "nemo") {{
                                description = "minima";
                                relayState = "excepturi";
                                sessionDuration = "accusantium";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("sapiente", "architecto") {{
                                        key = "culpa";
                                        value = "doloribus";
                                    }}),
                                    add(new Tag("culpa", "consequuntur") {{
                                        key = "mollitia";
                                        value = "dolorem";
                                    }}),
                                }};
                            }};, CreatePermissionSetXAmzTargetEnum.SWB_EXTERNAL_SERVICE_CREATE_PERMISSION_SET) {{
                xAmzAlgorithm = "repellat";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "occaecati";
                xAmzDate = "numquam";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "quam";
                xAmzSignedHeaders = "molestiae";
            }};            

            CreatePermissionSetResponse res = sdk.sdk.createPermissionSet(req);

            if (res.createPermissionSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAccountAssignment

<p>Deletes a principal's access from a specified AWS account using a specified permission set.</p> <note> <p>After a successful response, call <code>DescribeAccountAssignmentCreationStatus</code> to describe the status of an assignment deletion request.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAccountAssignmentRequest;
import org.openapis.openapi.models.operations.DeleteAccountAssignmentResponse;
import org.openapis.openapi.models.operations.DeleteAccountAssignmentXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteAccountAssignmentRequest;
import org.openapis.openapi.models.shared.PrincipalTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TargetTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAccountAssignmentRequest req = new DeleteAccountAssignmentRequest(                new DeleteAccountAssignmentRequest("error", "quia", "quis", PrincipalTypeEnum.USER, "laborum", TargetTypeEnum.AWS_ACCOUNT);, DeleteAccountAssignmentXAmzTargetEnum.SWB_EXTERNAL_SERVICE_DELETE_ACCOUNT_ASSIGNMENT) {{
                xAmzAlgorithm = "animi";
                xAmzContentSha256 = "enim";
                xAmzCredential = "odit";
                xAmzDate = "quo";
                xAmzSecurityToken = "sequi";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "ipsam";
            }};            

            DeleteAccountAssignmentResponse res = sdk.sdk.deleteAccountAssignment(req);

            if (res.deleteAccountAssignmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteInlinePolicyFromPermissionSet

Deletes the inline policy from a specified permission set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteInlinePolicyFromPermissionSetRequest;
import org.openapis.openapi.models.operations.DeleteInlinePolicyFromPermissionSetResponse;
import org.openapis.openapi.models.operations.DeleteInlinePolicyFromPermissionSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteInlinePolicyFromPermissionSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteInlinePolicyFromPermissionSetRequest req = new DeleteInlinePolicyFromPermissionSetRequest(                new DeleteInlinePolicyFromPermissionSetRequest("possimus", "aut");, DeleteInlinePolicyFromPermissionSetXAmzTargetEnum.SWB_EXTERNAL_SERVICE_DELETE_INLINE_POLICY_FROM_PERMISSION_SET) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "error";
                xAmzCredential = "temporibus";
                xAmzDate = "laborum";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            DeleteInlinePolicyFromPermissionSetResponse res = sdk.sdk.deleteInlinePolicyFromPermissionSet(req);

            if (res.deleteInlinePolicyFromPermissionSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteInstanceAccessControlAttributeConfiguration

Disables the attributes-based access control (ABAC) feature for the specified IAM Identity Center instance and deletes all of the attribute mappings that have been configured. Once deleted, any attributes that are received from an identity source and any custom attributes you have previously configured will not be passed. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteInstanceAccessControlAttributeConfigurationRequest;
import org.openapis.openapi.models.operations.DeleteInstanceAccessControlAttributeConfigurationResponse;
import org.openapis.openapi.models.operations.DeleteInstanceAccessControlAttributeConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteInstanceAccessControlAttributeConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteInstanceAccessControlAttributeConfigurationRequest req = new DeleteInstanceAccessControlAttributeConfigurationRequest(                new DeleteInstanceAccessControlAttributeConfigurationRequest("nihil");, DeleteInstanceAccessControlAttributeConfigurationXAmzTargetEnum.SWB_EXTERNAL_SERVICE_DELETE_INSTANCE_ACCESS_CONTROL_ATTRIBUTE_CONFIGURATION) {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "ipsa";
                xAmzDate = "omnis";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "perferendis";
            }};            

            DeleteInstanceAccessControlAttributeConfigurationResponse res = sdk.sdk.deleteInstanceAccessControlAttributeConfiguration(req);

            if (res.deleteInstanceAccessControlAttributeConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePermissionSet

Deletes the specified permission set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePermissionSetRequest;
import org.openapis.openapi.models.operations.DeletePermissionSetResponse;
import org.openapis.openapi.models.operations.DeletePermissionSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeletePermissionSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloremque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePermissionSetRequest req = new DeletePermissionSetRequest(                new DeletePermissionSetRequest("reprehenderit", "ut");, DeletePermissionSetXAmzTargetEnum.SWB_EXTERNAL_SERVICE_DELETE_PERMISSION_SET) {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "corporis";
                xAmzDate = "dolore";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "harum";
            }};            

            DeletePermissionSetResponse res = sdk.sdk.deletePermissionSet(req);

            if (res.deletePermissionSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePermissionsBoundaryFromPermissionSet

Deletes the permissions boundary from a specified <a>PermissionSet</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePermissionsBoundaryFromPermissionSetRequest;
import org.openapis.openapi.models.operations.DeletePermissionsBoundaryFromPermissionSetResponse;
import org.openapis.openapi.models.operations.DeletePermissionsBoundaryFromPermissionSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeletePermissionsBoundaryFromPermissionSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePermissionsBoundaryFromPermissionSetRequest req = new DeletePermissionsBoundaryFromPermissionSetRequest(                new DeletePermissionsBoundaryFromPermissionSetRequest("accusamus", "commodi");, DeletePermissionsBoundaryFromPermissionSetXAmzTargetEnum.SWB_EXTERNAL_SERVICE_DELETE_PERMISSIONS_BOUNDARY_FROM_PERMISSION_SET) {{
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "quae";
                xAmzCredential = "ipsum";
                xAmzDate = "quidem";
                xAmzSecurityToken = "molestias";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "pariatur";
            }};            

            DeletePermissionsBoundaryFromPermissionSetResponse res = sdk.sdk.deletePermissionsBoundaryFromPermissionSet(req);

            if (res.deletePermissionsBoundaryFromPermissionSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAccountAssignmentCreationStatus

Describes the status of the assignment creation request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAccountAssignmentCreationStatusRequest;
import org.openapis.openapi.models.operations.DescribeAccountAssignmentCreationStatusResponse;
import org.openapis.openapi.models.operations.DescribeAccountAssignmentCreationStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeAccountAssignmentCreationStatusRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAccountAssignmentCreationStatusRequest req = new DescribeAccountAssignmentCreationStatusRequest(                new DescribeAccountAssignmentCreationStatusRequest("praesentium", "rem");, DescribeAccountAssignmentCreationStatusXAmzTargetEnum.SWB_EXTERNAL_SERVICE_DESCRIBE_ACCOUNT_ASSIGNMENT_CREATION_STATUS) {{
                xAmzAlgorithm = "voluptates";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "repudiandae";
                xAmzDate = "sint";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "itaque";
                xAmzSignedHeaders = "incidunt";
            }};            

            DescribeAccountAssignmentCreationStatusResponse res = sdk.sdk.describeAccountAssignmentCreationStatus(req);

            if (res.describeAccountAssignmentCreationStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAccountAssignmentDeletionStatus

Describes the status of the assignment deletion request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAccountAssignmentDeletionStatusRequest;
import org.openapis.openapi.models.operations.DescribeAccountAssignmentDeletionStatusResponse;
import org.openapis.openapi.models.operations.DescribeAccountAssignmentDeletionStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeAccountAssignmentDeletionStatusRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAccountAssignmentDeletionStatusRequest req = new DescribeAccountAssignmentDeletionStatusRequest(                new DescribeAccountAssignmentDeletionStatusRequest("consequatur", "est");, DescribeAccountAssignmentDeletionStatusXAmzTargetEnum.SWB_EXTERNAL_SERVICE_DESCRIBE_ACCOUNT_ASSIGNMENT_DELETION_STATUS) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "deserunt";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "modi";
            }};            

            DescribeAccountAssignmentDeletionStatusResponse res = sdk.sdk.describeAccountAssignmentDeletionStatus(req);

            if (res.describeAccountAssignmentDeletionStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeInstanceAccessControlAttributeConfiguration

Returns the list of IAM Identity Center identity store attributes that have been configured to work with attributes-based access control (ABAC) for the specified IAM Identity Center instance. This will not return attributes configured and sent by an external identity provider. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeInstanceAccessControlAttributeConfigurationRequest;
import org.openapis.openapi.models.operations.DescribeInstanceAccessControlAttributeConfigurationResponse;
import org.openapis.openapi.models.operations.DescribeInstanceAccessControlAttributeConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeInstanceAccessControlAttributeConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeInstanceAccessControlAttributeConfigurationRequest req = new DescribeInstanceAccessControlAttributeConfigurationRequest(                new DescribeInstanceAccessControlAttributeConfigurationRequest("aliquid");, DescribeInstanceAccessControlAttributeConfigurationXAmzTargetEnum.SWB_EXTERNAL_SERVICE_DESCRIBE_INSTANCE_ACCESS_CONTROL_ATTRIBUTE_CONFIGURATION) {{
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "quos";
                xAmzCredential = "perferendis";
                xAmzDate = "magni";
                xAmzSecurityToken = "assumenda";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "alias";
            }};            

            DescribeInstanceAccessControlAttributeConfigurationResponse res = sdk.sdk.describeInstanceAccessControlAttributeConfiguration(req);

            if (res.describeInstanceAccessControlAttributeConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describePermissionSet

Gets the details of the permission set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribePermissionSetRequest;
import org.openapis.openapi.models.operations.DescribePermissionSetResponse;
import org.openapis.openapi.models.operations.DescribePermissionSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribePermissionSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribePermissionSetRequest req = new DescribePermissionSetRequest(                new DescribePermissionSetRequest("dolorum", "excepturi");, DescribePermissionSetXAmzTargetEnum.SWB_EXTERNAL_SERVICE_DESCRIBE_PERMISSION_SET) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "tempore";
                xAmzDate = "labore";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "non";
            }};            

            DescribePermissionSetResponse res = sdk.sdk.describePermissionSet(req);

            if (res.describePermissionSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describePermissionSetProvisioningStatus

Describes the status for the given permission set provisioning request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribePermissionSetProvisioningStatusRequest;
import org.openapis.openapi.models.operations.DescribePermissionSetProvisioningStatusResponse;
import org.openapis.openapi.models.operations.DescribePermissionSetProvisioningStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribePermissionSetProvisioningStatusRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribePermissionSetProvisioningStatusRequest req = new DescribePermissionSetProvisioningStatusRequest(                new DescribePermissionSetProvisioningStatusRequest("sint", "aliquid");, DescribePermissionSetProvisioningStatusXAmzTargetEnum.SWB_EXTERNAL_SERVICE_DESCRIBE_PERMISSION_SET_PROVISIONING_STATUS) {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "sint";
                xAmzDate = "officia";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "a";
            }};            

            DescribePermissionSetProvisioningStatusResponse res = sdk.sdk.describePermissionSetProvisioningStatus(req);

            if (res.describePermissionSetProvisioningStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## detachCustomerManagedPolicyReferenceFromPermissionSet

Detaches the specified customer managed policy from the specified <a>PermissionSet</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DetachCustomerManagedPolicyReferenceFromPermissionSetRequest;
import org.openapis.openapi.models.operations.DetachCustomerManagedPolicyReferenceFromPermissionSetResponse;
import org.openapis.openapi.models.operations.DetachCustomerManagedPolicyReferenceFromPermissionSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.CustomerManagedPolicyReference;
import org.openapis.openapi.models.shared.DetachCustomerManagedPolicyReferenceFromPermissionSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DetachCustomerManagedPolicyReferenceFromPermissionSetRequest req = new DetachCustomerManagedPolicyReferenceFromPermissionSetRequest(                new DetachCustomerManagedPolicyReferenceFromPermissionSetRequest(                new CustomerManagedPolicyReference("in") {{
                                                path = "in";
                                            }};, "illum", "maiores");, DetachCustomerManagedPolicyReferenceFromPermissionSetXAmzTargetEnum.SWB_EXTERNAL_SERVICE_DETACH_CUSTOMER_MANAGED_POLICY_REFERENCE_FROM_PERMISSION_SET) {{
                xAmzAlgorithm = "rerum";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "magnam";
                xAmzDate = "cumque";
                xAmzSecurityToken = "facere";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "aliquid";
            }};            

            DetachCustomerManagedPolicyReferenceFromPermissionSetResponse res = sdk.sdk.detachCustomerManagedPolicyReferenceFromPermissionSet(req);

            if (res.detachCustomerManagedPolicyReferenceFromPermissionSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## detachManagedPolicyFromPermissionSet

Detaches the attached AWS managed policy ARN from the specified permission set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DetachManagedPolicyFromPermissionSetRequest;
import org.openapis.openapi.models.operations.DetachManagedPolicyFromPermissionSetResponse;
import org.openapis.openapi.models.operations.DetachManagedPolicyFromPermissionSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.DetachManagedPolicyFromPermissionSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DetachManagedPolicyFromPermissionSetRequest req = new DetachManagedPolicyFromPermissionSetRequest(                new DetachManagedPolicyFromPermissionSetRequest("accusamus", "non", "occaecati");, DetachManagedPolicyFromPermissionSetXAmzTargetEnum.SWB_EXTERNAL_SERVICE_DETACH_MANAGED_POLICY_FROM_PERMISSION_SET) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "delectus";
                xAmzDate = "quidem";
                xAmzSecurityToken = "provident";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "id";
            }};            

            DetachManagedPolicyFromPermissionSetResponse res = sdk.sdk.detachManagedPolicyFromPermissionSet(req);

            if (res.detachManagedPolicyFromPermissionSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInlinePolicyForPermissionSet

Obtains the inline policy assigned to the permission set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInlinePolicyForPermissionSetRequest;
import org.openapis.openapi.models.operations.GetInlinePolicyForPermissionSetResponse;
import org.openapis.openapi.models.operations.GetInlinePolicyForPermissionSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetInlinePolicyForPermissionSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetInlinePolicyForPermissionSetRequest req = new GetInlinePolicyForPermissionSetRequest(                new GetInlinePolicyForPermissionSetRequest("deleniti", "sapiente");, GetInlinePolicyForPermissionSetXAmzTargetEnum.SWB_EXTERNAL_SERVICE_GET_INLINE_POLICY_FOR_PERMISSION_SET) {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "nisi";
                xAmzDate = "vel";
                xAmzSecurityToken = "natus";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "molestiae";
            }};            

            GetInlinePolicyForPermissionSetResponse res = sdk.sdk.getInlinePolicyForPermissionSet(req);

            if (res.getInlinePolicyForPermissionSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPermissionsBoundaryForPermissionSet

Obtains the permissions boundary for a specified <a>PermissionSet</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPermissionsBoundaryForPermissionSetRequest;
import org.openapis.openapi.models.operations.GetPermissionsBoundaryForPermissionSetResponse;
import org.openapis.openapi.models.operations.GetPermissionsBoundaryForPermissionSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetPermissionsBoundaryForPermissionSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPermissionsBoundaryForPermissionSetRequest req = new GetPermissionsBoundaryForPermissionSetRequest(                new GetPermissionsBoundaryForPermissionSetRequest("nihil", "magnam");, GetPermissionsBoundaryForPermissionSetXAmzTargetEnum.SWB_EXTERNAL_SERVICE_GET_PERMISSIONS_BOUNDARY_FOR_PERMISSION_SET) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "id";
                xAmzCredential = "labore";
                xAmzDate = "labore";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "nobis";
            }};            

            GetPermissionsBoundaryForPermissionSetResponse res = sdk.sdk.getPermissionsBoundaryForPermissionSet(req);

            if (res.getPermissionsBoundaryForPermissionSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAccountAssignmentCreationStatus

Lists the status of the AWS account assignment creation requests for a specified IAM Identity Center instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAccountAssignmentCreationStatusRequest;
import org.openapis.openapi.models.operations.ListAccountAssignmentCreationStatusResponse;
import org.openapis.openapi.models.operations.ListAccountAssignmentCreationStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListAccountAssignmentCreationStatusRequest;
import org.openapis.openapi.models.shared.OperationStatusFilter;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StatusValuesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAccountAssignmentCreationStatusRequest req = new ListAccountAssignmentCreationStatusRequest(                new ListAccountAssignmentCreationStatusRequest("vero") {{
                                filter = new OperationStatusFilter() {{
                                    status = StatusValuesEnum.IN_PROGRESS;
                                }};;
                                maxResults = 102863L;
                                nextToken = "magnam";
                            }};, ListAccountAssignmentCreationStatusXAmzTargetEnum.SWB_EXTERNAL_SERVICE_LIST_ACCOUNT_ASSIGNMENT_CREATION_STATUS) {{
                maxResults = "et";
                nextToken = "excepturi";
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "provident";
                xAmzCredential = "quos";
                xAmzDate = "sint";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "reiciendis";
            }};            

            ListAccountAssignmentCreationStatusResponse res = sdk.sdk.listAccountAssignmentCreationStatus(req);

            if (res.listAccountAssignmentCreationStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAccountAssignmentDeletionStatus

Lists the status of the AWS account assignment deletion requests for a specified IAM Identity Center instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAccountAssignmentDeletionStatusRequest;
import org.openapis.openapi.models.operations.ListAccountAssignmentDeletionStatusResponse;
import org.openapis.openapi.models.operations.ListAccountAssignmentDeletionStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListAccountAssignmentDeletionStatusRequest;
import org.openapis.openapi.models.shared.OperationStatusFilter;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StatusValuesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAccountAssignmentDeletionStatusRequest req = new ListAccountAssignmentDeletionStatusRequest(                new ListAccountAssignmentDeletionStatusRequest("ad") {{
                                filter = new OperationStatusFilter() {{
                                    status = StatusValuesEnum.FAILED;
                                }};;
                                maxResults = 221262L;
                                nextToken = "necessitatibus";
                            }};, ListAccountAssignmentDeletionStatusXAmzTargetEnum.SWB_EXTERNAL_SERVICE_LIST_ACCOUNT_ASSIGNMENT_DELETION_STATUS) {{
                maxResults = "odit";
                nextToken = "nemo";
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "iure";
                xAmzCredential = "doloribus";
                xAmzDate = "debitis";
                xAmzSecurityToken = "eius";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "deleniti";
            }};            

            ListAccountAssignmentDeletionStatusResponse res = sdk.sdk.listAccountAssignmentDeletionStatus(req);

            if (res.listAccountAssignmentDeletionStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAccountAssignments

Lists the assignee of the specified AWS account with the specified permission set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAccountAssignmentsRequest;
import org.openapis.openapi.models.operations.ListAccountAssignmentsResponse;
import org.openapis.openapi.models.operations.ListAccountAssignmentsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListAccountAssignmentsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAccountAssignmentsRequest req = new ListAccountAssignmentsRequest(                new ListAccountAssignmentsRequest("in", "architecto", "architecto") {{
                                maxResults = 919483L;
                                nextToken = "ullam";
                            }};, ListAccountAssignmentsXAmzTargetEnum.SWB_EXTERNAL_SERVICE_LIST_ACCOUNT_ASSIGNMENTS) {{
                maxResults = "expedita";
                nextToken = "nihil";
                xAmzAlgorithm = "repellat";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "sed";
                xAmzDate = "saepe";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "consequuntur";
            }};            

            ListAccountAssignmentsResponse res = sdk.sdk.listAccountAssignments(req);

            if (res.listAccountAssignmentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAccountsForProvisionedPermissionSet

Lists all the AWS accounts where the specified permission set is provisioned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAccountsForProvisionedPermissionSetRequest;
import org.openapis.openapi.models.operations.ListAccountsForProvisionedPermissionSetResponse;
import org.openapis.openapi.models.operations.ListAccountsForProvisionedPermissionSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListAccountsForProvisionedPermissionSetRequest;
import org.openapis.openapi.models.shared.ProvisioningStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAccountsForProvisionedPermissionSetRequest req = new ListAccountsForProvisionedPermissionSetRequest(                new ListAccountsForProvisionedPermissionSetRequest("natus", "magni") {{
                                maxResults = 123820L;
                                nextToken = "quo";
                                provisioningStatus = ProvisioningStatusEnum.LATEST_PERMISSION_SET_NOT_PROVISIONED;
                            }};, ListAccountsForProvisionedPermissionSetXAmzTargetEnum.SWB_EXTERNAL_SERVICE_LIST_ACCOUNTS_FOR_PROVISIONED_PERMISSION_SET) {{
                maxResults = "pariatur";
                nextToken = "maxime";
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "odit";
                xAmzDate = "ea";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "maiores";
            }};            

            ListAccountsForProvisionedPermissionSetResponse res = sdk.sdk.listAccountsForProvisionedPermissionSet(req);

            if (res.listAccountsForProvisionedPermissionSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCustomerManagedPolicyReferencesInPermissionSet

Lists all customer managed policies attached to a specified <a>PermissionSet</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCustomerManagedPolicyReferencesInPermissionSetRequest;
import org.openapis.openapi.models.operations.ListCustomerManagedPolicyReferencesInPermissionSetResponse;
import org.openapis.openapi.models.operations.ListCustomerManagedPolicyReferencesInPermissionSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListCustomerManagedPolicyReferencesInPermissionSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCustomerManagedPolicyReferencesInPermissionSetRequest req = new ListCustomerManagedPolicyReferencesInPermissionSetRequest(                new ListCustomerManagedPolicyReferencesInPermissionSetRequest("ipsam", "voluptate") {{
                                maxResults = 420075L;
                                nextToken = "nam";
                            }};, ListCustomerManagedPolicyReferencesInPermissionSetXAmzTargetEnum.SWB_EXTERNAL_SERVICE_LIST_CUSTOMER_MANAGED_POLICY_REFERENCES_IN_PERMISSION_SET) {{
                maxResults = "eaque";
                nextToken = "pariatur";
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "perferendis";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "amet";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "cumque";
            }};            

            ListCustomerManagedPolicyReferencesInPermissionSetResponse res = sdk.sdk.listCustomerManagedPolicyReferencesInPermissionSet(req);

            if (res.listCustomerManagedPolicyReferencesInPermissionSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listInstances

Lists the IAM Identity Center instances that the caller has access to.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListInstancesRequest;
import org.openapis.openapi.models.operations.ListInstancesResponse;
import org.openapis.openapi.models.operations.ListInstancesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListInstancesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListInstancesRequest req = new ListInstancesRequest(                new ListInstancesRequest() {{
                                maxResults = 944124L;
                                nextToken = "libero";
                            }};, ListInstancesXAmzTargetEnum.SWB_EXTERNAL_SERVICE_LIST_INSTANCES) {{
                maxResults = "nobis";
                nextToken = "dolores";
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "totam";
                xAmzCredential = "dignissimos";
                xAmzDate = "eaque";
                xAmzSecurityToken = "quis";
                xAmzSignature = "nesciunt";
                xAmzSignedHeaders = "eos";
            }};            

            ListInstancesResponse res = sdk.sdk.listInstances(req);

            if (res.listInstancesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listManagedPoliciesInPermissionSet

Lists the AWS managed policy that is attached to a specified permission set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListManagedPoliciesInPermissionSetRequest;
import org.openapis.openapi.models.operations.ListManagedPoliciesInPermissionSetResponse;
import org.openapis.openapi.models.operations.ListManagedPoliciesInPermissionSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListManagedPoliciesInPermissionSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListManagedPoliciesInPermissionSetRequest req = new ListManagedPoliciesInPermissionSetRequest(                new ListManagedPoliciesInPermissionSetRequest("dolores", "minus") {{
                                maxResults = 463451L;
                                nextToken = "dolor";
                            }};, ListManagedPoliciesInPermissionSetXAmzTargetEnum.SWB_EXTERNAL_SERVICE_LIST_MANAGED_POLICIES_IN_PERMISSION_SET) {{
                maxResults = "vero";
                nextToken = "nostrum";
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "omnis";
                xAmzDate = "facilis";
                xAmzSecurityToken = "perspiciatis";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "porro";
            }};            

            ListManagedPoliciesInPermissionSetResponse res = sdk.sdk.listManagedPoliciesInPermissionSet(req);

            if (res.listManagedPoliciesInPermissionSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPermissionSetProvisioningStatus

Lists the status of the permission set provisioning requests for a specified IAM Identity Center instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPermissionSetProvisioningStatusRequest;
import org.openapis.openapi.models.operations.ListPermissionSetProvisioningStatusResponse;
import org.openapis.openapi.models.operations.ListPermissionSetProvisioningStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListPermissionSetProvisioningStatusRequest;
import org.openapis.openapi.models.shared.OperationStatusFilter;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StatusValuesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPermissionSetProvisioningStatusRequest req = new ListPermissionSetProvisioningStatusRequest(                new ListPermissionSetProvisioningStatusRequest("blanditiis") {{
                                filter = new OperationStatusFilter() {{
                                    status = StatusValuesEnum.FAILED;
                                }};;
                                maxResults = 50370L;
                                nextToken = "occaecati";
                            }};, ListPermissionSetProvisioningStatusXAmzTargetEnum.SWB_EXTERNAL_SERVICE_LIST_PERMISSION_SET_PROVISIONING_STATUS) {{
                maxResults = "rerum";
                nextToken = "adipisci";
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "earum";
                xAmzCredential = "modi";
                xAmzDate = "iste";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "pariatur";
            }};            

            ListPermissionSetProvisioningStatusResponse res = sdk.sdk.listPermissionSetProvisioningStatus(req);

            if (res.listPermissionSetProvisioningStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPermissionSets

Lists the <a>PermissionSet</a>s in an IAM Identity Center instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPermissionSetsRequest;
import org.openapis.openapi.models.operations.ListPermissionSetsResponse;
import org.openapis.openapi.models.operations.ListPermissionSetsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListPermissionSetsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPermissionSetsRequest req = new ListPermissionSetsRequest(                new ListPermissionSetsRequest("nobis") {{
                                maxResults = 730122L;
                                nextToken = "delectus";
                            }};, ListPermissionSetsXAmzTargetEnum.SWB_EXTERNAL_SERVICE_LIST_PERMISSION_SETS) {{
                maxResults = "quaerat";
                nextToken = "quos";
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "dolorem";
                xAmzDate = "dolor";
                xAmzSecurityToken = "qui";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "hic";
            }};            

            ListPermissionSetsResponse res = sdk.sdk.listPermissionSets(req);

            if (res.listPermissionSetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPermissionSetsProvisionedToAccount

Lists all the permission sets that are provisioned to a specified AWS account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPermissionSetsProvisionedToAccountRequest;
import org.openapis.openapi.models.operations.ListPermissionSetsProvisionedToAccountResponse;
import org.openapis.openapi.models.operations.ListPermissionSetsProvisionedToAccountXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListPermissionSetsProvisionedToAccountRequest;
import org.openapis.openapi.models.shared.ProvisioningStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPermissionSetsProvisionedToAccountRequest req = new ListPermissionSetsProvisionedToAccountRequest(                new ListPermissionSetsProvisionedToAccountRequest("cum", "voluptate") {{
                                maxResults = 490459L;
                                nextToken = "reiciendis";
                                provisioningStatus = ProvisioningStatusEnum.LATEST_PERMISSION_SET_PROVISIONED;
                            }};, ListPermissionSetsProvisionedToAccountXAmzTargetEnum.SWB_EXTERNAL_SERVICE_LIST_PERMISSION_SETS_PROVISIONED_TO_ACCOUNT) {{
                maxResults = "dolorum";
                nextToken = "numquam";
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "ipsa";
                xAmzDate = "iure";
                xAmzSecurityToken = "odio";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "accusamus";
            }};            

            ListPermissionSetsProvisionedToAccountResponse res = sdk.sdk.listPermissionSetsProvisionedToAccount(req);

            if (res.listPermissionSetsProvisionedToAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists the tags that are attached to a specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("voluptatibus", "voluptas") {{
                                nextToken = "natus";
                            }};, ListTagsForResourceXAmzTargetEnum.SWB_EXTERNAL_SERVICE_LIST_TAGS_FOR_RESOURCE) {{
                nextToken = "eos";
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "sit";
                xAmzCredential = "fugiat";
                xAmzDate = "ab";
                xAmzSecurityToken = "soluta";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "iusto";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## provisionPermissionSet

The process by which a specified permission set is provisioned to the specified target.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProvisionPermissionSetRequest;
import org.openapis.openapi.models.operations.ProvisionPermissionSetResponse;
import org.openapis.openapi.models.operations.ProvisionPermissionSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.ProvisionPermissionSetRequest;
import org.openapis.openapi.models.shared.ProvisionTargetTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ProvisionPermissionSetRequest req = new ProvisionPermissionSetRequest(                new ProvisionPermissionSetRequest("dolorum", "deleniti", ProvisionTargetTypeEnum.ALL_PROVISIONED_ACCOUNTS) {{
                                targetId = "necessitatibus";
                            }};, ProvisionPermissionSetXAmzTargetEnum.SWB_EXTERNAL_SERVICE_PROVISION_PERMISSION_SET) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "nihil";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "id";
                xAmzSignedHeaders = "saepe";
            }};            

            ProvisionPermissionSetResponse res = sdk.sdk.provisionPermissionSet(req);

            if (res.provisionPermissionSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putInlinePolicyToPermissionSet

<p>Attaches an inline policy to a permission set.</p> <note> <p>If the permission set is already referenced by one or more account assignments, you will need to call <code> <a>ProvisionPermissionSet</a> </code> after this action to apply the corresponding IAM policy updates to all assigned accounts.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutInlinePolicyToPermissionSetRequest;
import org.openapis.openapi.models.operations.PutInlinePolicyToPermissionSetResponse;
import org.openapis.openapi.models.operations.PutInlinePolicyToPermissionSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutInlinePolicyToPermissionSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutInlinePolicyToPermissionSetRequest req = new PutInlinePolicyToPermissionSetRequest(                new PutInlinePolicyToPermissionSetRequest("aspernatur", "perferendis", "amet");, PutInlinePolicyToPermissionSetXAmzTargetEnum.SWB_EXTERNAL_SERVICE_PUT_INLINE_POLICY_TO_PERMISSION_SET) {{
                xAmzAlgorithm = "optio";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "ad";
                xAmzDate = "saepe";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "provident";
            }};            

            PutInlinePolicyToPermissionSetResponse res = sdk.sdk.putInlinePolicyToPermissionSet(req);

            if (res.putInlinePolicyToPermissionSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putPermissionsBoundaryToPermissionSet

Attaches an AWS managed or customer managed policy to the specified <a>PermissionSet</a> as a permissions boundary.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutPermissionsBoundaryToPermissionSetRequest;
import org.openapis.openapi.models.operations.PutPermissionsBoundaryToPermissionSetResponse;
import org.openapis.openapi.models.operations.PutPermissionsBoundaryToPermissionSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.CustomerManagedPolicyReference;
import org.openapis.openapi.models.shared.PermissionsBoundary;
import org.openapis.openapi.models.shared.PutPermissionsBoundaryToPermissionSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutPermissionsBoundaryToPermissionSetRequest req = new PutPermissionsBoundaryToPermissionSetRequest(                new PutPermissionsBoundaryToPermissionSetRequest("repellendus", "totam",                 new PermissionsBoundary() {{
                                                customerManagedPolicyReference = new CustomerManagedPolicyReference("similique") {{
                                                    path = "alias";
                                                }};;
                                                managedPolicyArn = "at";
                                            }};);, PutPermissionsBoundaryToPermissionSetXAmzTargetEnum.SWB_EXTERNAL_SERVICE_PUT_PERMISSIONS_BOUNDARY_TO_PERMISSION_SET) {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "vel";
                xAmzDate = "quod";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "dolorum";
            }};            

            PutPermissionsBoundaryToPermissionSetResponse res = sdk.sdk.putPermissionsBoundaryToPermissionSet(req);

            if (res.putPermissionsBoundaryToPermissionSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Associates a set of tags with a specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("esse", "harum",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("tenetur", "amet") {{
                                                    key = "ipsum";
                                                    value = "quisquam";
                                                }}),
                                                add(new Tag("numquam", "enim") {{
                                                    key = "tempore";
                                                    value = "accusamus";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.SWB_EXTERNAL_SERVICE_TAG_RESOURCE) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "totam";
                xAmzDate = "nihil";
                xAmzSecurityToken = "sit";
                xAmzSignature = "expedita";
                xAmzSignedHeaders = "neque";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Disassociates a set of tags from a specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("vel", "libero",                 new String[]{{
                                                add("deserunt"),
                                                add("quam"),
                                            }});, UntagResourceXAmzTargetEnum.SWB_EXTERNAL_SERVICE_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "qui";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "soluta";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateInstanceAccessControlAttributeConfiguration

Updates the IAM Identity Center identity store attributes that you can use with the IAM Identity Center instance for attributes-based access control (ABAC). When using an external identity provider as an identity source, you can pass attributes through the SAML assertion as an alternative to configuring attributes from the IAM Identity Center identity store. If a SAML assertion passes any of these attributes, IAM Identity Center replaces the attribute value with the value from the IAM Identity Center identity store. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateInstanceAccessControlAttributeConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateInstanceAccessControlAttributeConfigurationResponse;
import org.openapis.openapi.models.operations.UpdateInstanceAccessControlAttributeConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.AccessControlAttribute;
import org.openapis.openapi.models.shared.AccessControlAttributeValue;
import org.openapis.openapi.models.shared.InstanceAccessControlAttributeConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateInstanceAccessControlAttributeConfigurationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateInstanceAccessControlAttributeConfigurationRequest req = new UpdateInstanceAccessControlAttributeConfigurationRequest(                new UpdateInstanceAccessControlAttributeConfigurationRequest(                new InstanceAccessControlAttributeConfiguration(                new org.openapis.openapi.models.shared.AccessControlAttribute[]{{
                                                                add(new AccessControlAttribute("molestias",                 new AccessControlAttributeValue(                new String[]{{
                                                                                                    add("qui"),
                                                                                                    add("neque"),
                                                                                                    add("fugit"),
                                                                                                    add("magni"),
                                                                                                }});) {{
                                                                    key = "totam";
                                                                    value = new AccessControlAttributeValue(                new String[]{{
                                                                                        add("facilis"),
                                                                                        add("aliquid"),
                                                                                        add("quam"),
                                                                                    }}) {{
                                                                        source = new String[]{{
                                                                            add("aspernatur"),
                                                                            add("dolores"),
                                                                        }};
                                                                    }};
                                                                }}),
                                                                add(new AccessControlAttribute("soluta",                 new AccessControlAttributeValue(                new String[]{{
                                                                                                    add("et"),
                                                                                                    add("saepe"),
                                                                                                    add("ipsum"),
                                                                                                }});) {{
                                                                    key = "odio";
                                                                    value = new AccessControlAttributeValue(                new String[]{{
                                                                                        add("hic"),
                                                                                        add("voluptatem"),
                                                                                        add("cumque"),
                                                                                    }}) {{
                                                                        source = new String[]{{
                                                                            add("ullam"),
                                                                        }};
                                                                    }};
                                                                }}),
                                                                add(new AccessControlAttribute("dolorem",                 new AccessControlAttributeValue(                new String[]{{
                                                                                                    add("labore"),
                                                                                                    add("adipisci"),
                                                                                                }});) {{
                                                                    key = "veritatis";
                                                                    value = new AccessControlAttributeValue(                new String[]{{
                                                                                        add("delectus"),
                                                                                    }}) {{
                                                                        source = new String[]{{
                                                                            add("quos"),
                                                                            add("tempore"),
                                                                            add("cupiditate"),
                                                                        }};
                                                                    }};
                                                                }}),
                                                            }});, "dolorum");, UpdateInstanceAccessControlAttributeConfigurationXAmzTargetEnum.SWB_EXTERNAL_SERVICE_UPDATE_INSTANCE_ACCESS_CONTROL_ATTRIBUTE_CONFIGURATION) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "quae";
                xAmzCredential = "aut";
                xAmzDate = "quas";
                xAmzSecurityToken = "itaque";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "est";
            }};            

            UpdateInstanceAccessControlAttributeConfigurationResponse res = sdk.sdk.updateInstanceAccessControlAttributeConfiguration(req);

            if (res.updateInstanceAccessControlAttributeConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePermissionSet

Updates an existing permission set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePermissionSetRequest;
import org.openapis.openapi.models.operations.UpdatePermissionSetResponse;
import org.openapis.openapi.models.operations.UpdatePermissionSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdatePermissionSetRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdatePermissionSetRequest req = new UpdatePermissionSetRequest(                new UpdatePermissionSetRequest("porro", "doloribus") {{
                                description = "ut";
                                relayState = "facilis";
                                sessionDuration = "cupiditate";
                            }};, UpdatePermissionSetXAmzTargetEnum.SWB_EXTERNAL_SERVICE_UPDATE_PERMISSION_SET) {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "quae";
                xAmzCredential = "laudantium";
                xAmzDate = "odio";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "quisquam";
            }};            

            UpdatePermissionSetResponse res = sdk.sdk.updatePermissionSet(req);

            if (res.updatePermissionSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
