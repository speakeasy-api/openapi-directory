# SDK

## Overview

<p>AWS IAM Identity Center (successor to AWS Single Sign-On) helps you securely create, or connect, your workforce identities and manage their access centrally across AWS accounts and applications. IAM Identity Center is the recommended approach for workforce authentication and authorization in AWS, for organizations of any size and type.</p> <note> <p>Although AWS Single Sign-On was renamed, the <code>sso</code> and <code>identitystore</code> API namespaces will continue to retain their original name for backward compatibility purposes. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html#renamed">IAM Identity Center rename</a>.</p> </note> <p>This reference guide provides information on single sign-on operations which could be used for access management of AWS accounts. For information about IAM Identity Center features, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">IAM Identity Center User Guide</a>.</p> <p>Many operations in the IAM Identity Center APIs rely on identifiers for users and groups, known as principals. For more information about how to work with principals and principal IDs in IAM Identity Center, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/welcome.html">Identity Store API Reference</a>.</p> <note> <p>AWS provides SDKs that consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .Net, iOS, Android, and more). The SDKs provide a convenient way to create programmatic access to IAM Identity Center and other AWS services. For more information about the AWS SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p> </note>

Amazon Web Services documentation
<https://docs.aws.amazon.com/sso/>
### Available Operations

* [AttachCustomerManagedPolicyReferenceToPermissionSet](#attachcustomermanagedpolicyreferencetopermissionset) - Attaches the specified customer managed policy to the specified <a>PermissionSet</a>.
* [AttachManagedPolicyToPermissionSet](#attachmanagedpolicytopermissionset) - <p>Attaches an AWS managed policy ARN to a permission set.</p> <note> <p>If the permission set is already referenced by one or more account assignments, you will need to call <code> <a>ProvisionPermissionSet</a> </code> after this operation. Calling <code>ProvisionPermissionSet</code> applies the corresponding IAM policy updates to all assigned accounts.</p> </note>
* [CreateAccountAssignment](#createaccountassignment) - <p>Assigns access to a principal for a specified AWS account using a specified permission set.</p> <note> <p>The term <i>principal</i> here refers to a user or group that is defined in IAM Identity Center.</p> </note> <note> <p>As part of a successful <code>CreateAccountAssignment</code> call, the specified permission set will automatically be provisioned to the account in the form of an IAM policy. That policy is attached to the IAM role created in IAM Identity Center. If the permission set is subsequently updated, the corresponding IAM policies attached to roles in your accounts will not be updated automatically. In this case, you must call <code> <a>ProvisionPermissionSet</a> </code> to make these updates.</p> </note> <note> <p> After a successful response, call <code>DescribeAccountAssignmentCreationStatus</code> to describe the status of an assignment creation request. </p> </note>
* [CreateInstanceAccessControlAttributeConfiguration](#createinstanceaccesscontrolattributeconfiguration) - <p>Enables the attributes-based access control (ABAC) feature for the specified IAM Identity Center instance. You can also specify new attributes to add to your ABAC configuration during the enabling process. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.</p> <note> <p>After a successful response, call <code>DescribeInstanceAccessControlAttributeConfiguration</code> to validate that <code>InstanceAccessControlAttributeConfiguration</code> was created.</p> </note>
* [CreatePermissionSet](#createpermissionset) - <p>Creates a permission set within a specified IAM Identity Center instance.</p> <note> <p>To grant users and groups access to AWS account resources, use <code> <a>CreateAccountAssignment</a> </code>.</p> </note>
* [DeleteAccountAssignment](#deleteaccountassignment) - <p>Deletes a principal's access from a specified AWS account using a specified permission set.</p> <note> <p>After a successful response, call <code>DescribeAccountAssignmentCreationStatus</code> to describe the status of an assignment deletion request.</p> </note>
* [DeleteInlinePolicyFromPermissionSet](#deleteinlinepolicyfrompermissionset) - Deletes the inline policy from a specified permission set.
* [DeleteInstanceAccessControlAttributeConfiguration](#deleteinstanceaccesscontrolattributeconfiguration) - Disables the attributes-based access control (ABAC) feature for the specified IAM Identity Center instance and deletes all of the attribute mappings that have been configured. Once deleted, any attributes that are received from an identity source and any custom attributes you have previously configured will not be passed. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.
* [DeletePermissionSet](#deletepermissionset) - Deletes the specified permission set.
* [DeletePermissionsBoundaryFromPermissionSet](#deletepermissionsboundaryfrompermissionset) - Deletes the permissions boundary from a specified <a>PermissionSet</a>.
* [DescribeAccountAssignmentCreationStatus](#describeaccountassignmentcreationstatus) - Describes the status of the assignment creation request.
* [DescribeAccountAssignmentDeletionStatus](#describeaccountassignmentdeletionstatus) - Describes the status of the assignment deletion request.
* [DescribeInstanceAccessControlAttributeConfiguration](#describeinstanceaccesscontrolattributeconfiguration) - Returns the list of IAM Identity Center identity store attributes that have been configured to work with attributes-based access control (ABAC) for the specified IAM Identity Center instance. This will not return attributes configured and sent by an external identity provider. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.
* [DescribePermissionSet](#describepermissionset) - Gets the details of the permission set.
* [DescribePermissionSetProvisioningStatus](#describepermissionsetprovisioningstatus) - Describes the status for the given permission set provisioning request.
* [DetachCustomerManagedPolicyReferenceFromPermissionSet](#detachcustomermanagedpolicyreferencefrompermissionset) - Detaches the specified customer managed policy from the specified <a>PermissionSet</a>.
* [DetachManagedPolicyFromPermissionSet](#detachmanagedpolicyfrompermissionset) - Detaches the attached AWS managed policy ARN from the specified permission set.
* [GetInlinePolicyForPermissionSet](#getinlinepolicyforpermissionset) - Obtains the inline policy assigned to the permission set.
* [GetPermissionsBoundaryForPermissionSet](#getpermissionsboundaryforpermissionset) - Obtains the permissions boundary for a specified <a>PermissionSet</a>.
* [ListAccountAssignmentCreationStatus](#listaccountassignmentcreationstatus) - Lists the status of the AWS account assignment creation requests for a specified IAM Identity Center instance.
* [ListAccountAssignmentDeletionStatus](#listaccountassignmentdeletionstatus) - Lists the status of the AWS account assignment deletion requests for a specified IAM Identity Center instance.
* [ListAccountAssignments](#listaccountassignments) - Lists the assignee of the specified AWS account with the specified permission set.
* [ListAccountsForProvisionedPermissionSet](#listaccountsforprovisionedpermissionset) - Lists all the AWS accounts where the specified permission set is provisioned.
* [ListCustomerManagedPolicyReferencesInPermissionSet](#listcustomermanagedpolicyreferencesinpermissionset) - Lists all customer managed policies attached to a specified <a>PermissionSet</a>.
* [ListInstances](#listinstances) - Lists the IAM Identity Center instances that the caller has access to.
* [ListManagedPoliciesInPermissionSet](#listmanagedpoliciesinpermissionset) - Lists the AWS managed policy that is attached to a specified permission set.
* [ListPermissionSetProvisioningStatus](#listpermissionsetprovisioningstatus) - Lists the status of the permission set provisioning requests for a specified IAM Identity Center instance.
* [ListPermissionSets](#listpermissionsets) - Lists the <a>PermissionSet</a>s in an IAM Identity Center instance.
* [ListPermissionSetsProvisionedToAccount](#listpermissionsetsprovisionedtoaccount) - Lists all the permission sets that are provisioned to a specified AWS account.
* [ListTagsForResource](#listtagsforresource) - Lists the tags that are attached to a specified resource.
* [ProvisionPermissionSet](#provisionpermissionset) - The process by which a specified permission set is provisioned to the specified target.
* [PutInlinePolicyToPermissionSet](#putinlinepolicytopermissionset) - <p>Attaches an inline policy to a permission set.</p> <note> <p>If the permission set is already referenced by one or more account assignments, you will need to call <code> <a>ProvisionPermissionSet</a> </code> after this action to apply the corresponding IAM policy updates to all assigned accounts.</p> </note>
* [PutPermissionsBoundaryToPermissionSet](#putpermissionsboundarytopermissionset) - Attaches an AWS managed or customer managed policy to the specified <a>PermissionSet</a> as a permissions boundary.
* [TagResource](#tagresource) - Associates a set of tags with a specified resource.
* [UntagResource](#untagresource) - Disassociates a set of tags from a specified resource.
* [UpdateInstanceAccessControlAttributeConfiguration](#updateinstanceaccesscontrolattributeconfiguration) - Updates the IAM Identity Center identity store attributes that you can use with the IAM Identity Center instance for attributes-based access control (ABAC). When using an external identity provider as an identity source, you can pass attributes through the SAML assertion as an alternative to configuring attributes from the IAM Identity Center identity store. If a SAML assertion passes any of these attributes, IAM Identity Center replaces the attribute value with the value from the IAM Identity Center identity store. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.
* [UpdatePermissionSet](#updatepermissionset) - Updates an existing permission set.

## AttachCustomerManagedPolicyReferenceToPermissionSet

Attaches the specified customer managed policy to the specified <a>PermissionSet</a>.

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
    res, err := s.SDK.AttachCustomerManagedPolicyReferenceToPermissionSet(ctx, operations.AttachCustomerManagedPolicyReferenceToPermissionSetRequest{
        AttachCustomerManagedPolicyReferenceToPermissionSetRequest: shared.AttachCustomerManagedPolicyReferenceToPermissionSetRequest{
            CustomerManagedPolicyReference: shared.CustomerManagedPolicyReference{
                Name: "Lucia Goldner",
                Path: sdk.String("minus"),
            },
            InstanceArn: "placeat",
            PermissionSetArn: "voluptatum",
        },
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("nisi"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("temporibus"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("quis"),
        XAmzTarget: operations.AttachCustomerManagedPolicyReferenceToPermissionSetXAmzTargetEnumSwbExternalServiceAttachCustomerManagedPolicyReferenceToPermissionSet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AttachCustomerManagedPolicyReferenceToPermissionSetResponse != nil {
        // handle response
    }
}
```

## AttachManagedPolicyToPermissionSet

<p>Attaches an AWS managed policy ARN to a permission set.</p> <note> <p>If the permission set is already referenced by one or more account assignments, you will need to call <code> <a>ProvisionPermissionSet</a> </code> after this operation. Calling <code>ProvisionPermissionSet</code> applies the corresponding IAM policy updates to all assigned accounts.</p> </note>

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
    res, err := s.SDK.AttachManagedPolicyToPermissionSet(ctx, operations.AttachManagedPolicyToPermissionSetRequest{
        AttachManagedPolicyToPermissionSetRequest: shared.AttachManagedPolicyToPermissionSetRequest{
            InstanceArn: "veritatis",
            ManagedPolicyArn: "deserunt",
            PermissionSetArn: "perferendis",
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("repellendus"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("at"),
        XAmzTarget: operations.AttachManagedPolicyToPermissionSetXAmzTargetEnumSwbExternalServiceAttachManagedPolicyToPermissionSet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AttachManagedPolicyToPermissionSetResponse != nil {
        // handle response
    }
}
```

## CreateAccountAssignment

<p>Assigns access to a principal for a specified AWS account using a specified permission set.</p> <note> <p>The term <i>principal</i> here refers to a user or group that is defined in IAM Identity Center.</p> </note> <note> <p>As part of a successful <code>CreateAccountAssignment</code> call, the specified permission set will automatically be provisioned to the account in the form of an IAM policy. That policy is attached to the IAM role created in IAM Identity Center. If the permission set is subsequently updated, the corresponding IAM policies attached to roles in your accounts will not be updated automatically. In this case, you must call <code> <a>ProvisionPermissionSet</a> </code> to make these updates.</p> </note> <note> <p> After a successful response, call <code>DescribeAccountAssignmentCreationStatus</code> to describe the status of an assignment creation request. </p> </note>

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
    res, err := s.SDK.CreateAccountAssignment(ctx, operations.CreateAccountAssignmentRequest{
        CreateAccountAssignmentRequest: shared.CreateAccountAssignmentRequest{
            InstanceArn: "maiores",
            PermissionSetArn: "molestiae",
            PrincipalID: "quod",
            PrincipalType: shared.PrincipalTypeEnumGroup,
            TargetID: "esse",
            TargetType: shared.TargetTypeEnumAwsAccount,
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        XAmzTarget: operations.CreateAccountAssignmentXAmzTargetEnumSwbExternalServiceCreateAccountAssignment,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAccountAssignmentResponse != nil {
        // handle response
    }
}
```

## CreateInstanceAccessControlAttributeConfiguration

<p>Enables the attributes-based access control (ABAC) feature for the specified IAM Identity Center instance. You can also specify new attributes to add to your ABAC configuration during the enabling process. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.</p> <note> <p>After a successful response, call <code>DescribeInstanceAccessControlAttributeConfiguration</code> to validate that <code>InstanceAccessControlAttributeConfiguration</code> was created.</p> </note>

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
    res, err := s.SDK.CreateInstanceAccessControlAttributeConfiguration(ctx, operations.CreateInstanceAccessControlAttributeConfigurationRequest{
        CreateInstanceAccessControlAttributeConfigurationRequest: shared.CreateInstanceAccessControlAttributeConfigurationRequest{
            InstanceAccessControlAttributeConfiguration: shared.InstanceAccessControlAttributeConfiguration{
                AccessControlAttributes: []shared.AccessControlAttribute{
                    shared.AccessControlAttribute{
                        Key: "deleniti",
                        Value: shared.AccessControlAttributeValue{
                            Source: []string{
                                "optio",
                                "totam",
                                "beatae",
                                "commodi",
                            },
                        },
                    },
                },
            },
            InstanceArn: "molestiae",
        },
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        XAmzTarget: operations.CreateInstanceAccessControlAttributeConfigurationXAmzTargetEnumSwbExternalServiceCreateInstanceAccessControlAttributeConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateInstanceAccessControlAttributeConfigurationResponse != nil {
        // handle response
    }
}
```

## CreatePermissionSet

<p>Creates a permission set within a specified IAM Identity Center instance.</p> <note> <p>To grant users and groups access to AWS account resources, use <code> <a>CreateAccountAssignment</a> </code>.</p> </note>

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
    res, err := s.SDK.CreatePermissionSet(ctx, operations.CreatePermissionSetRequest{
        CreatePermissionSetRequest: shared.CreatePermissionSetRequest{
            Description: sdk.String("aspernatur"),
            InstanceArn: "perferendis",
            Name: "Faye Cormier",
            RelayState: sdk.String("natus"),
            SessionDuration: sdk.String("laboriosam"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "saepe",
                    Value: "fuga",
                },
                shared.Tag{
                    Key: "in",
                    Value: "corporis",
                },
                shared.Tag{
                    Key: "iste",
                    Value: "iure",
                },
                shared.Tag{
                    Key: "saepe",
                    Value: "quidem",
                },
            },
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("dolores"),
        XAmzTarget: operations.CreatePermissionSetXAmzTargetEnumSwbExternalServiceCreatePermissionSet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePermissionSetResponse != nil {
        // handle response
    }
}
```

## DeleteAccountAssignment

<p>Deletes a principal's access from a specified AWS account using a specified permission set.</p> <note> <p>After a successful response, call <code>DescribeAccountAssignmentCreationStatus</code> to describe the status of an assignment deletion request.</p> </note>

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
    res, err := s.SDK.DeleteAccountAssignment(ctx, operations.DeleteAccountAssignmentRequest{
        DeleteAccountAssignmentRequest: shared.DeleteAccountAssignmentRequest{
            InstanceArn: "dolorem",
            PermissionSetArn: "corporis",
            PrincipalID: "explicabo",
            PrincipalType: shared.PrincipalTypeEnumGroup,
            TargetID: "enim",
            TargetType: shared.TargetTypeEnumAwsAccount,
        },
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("culpa"),
        XAmzTarget: operations.DeleteAccountAssignmentXAmzTargetEnumSwbExternalServiceDeleteAccountAssignment,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAccountAssignmentResponse != nil {
        // handle response
    }
}
```

## DeleteInlinePolicyFromPermissionSet

Deletes the inline policy from a specified permission set.

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
    res, err := s.SDK.DeleteInlinePolicyFromPermissionSet(ctx, operations.DeleteInlinePolicyFromPermissionSetRequest{
        DeleteInlinePolicyFromPermissionSetRequest: shared.DeleteInlinePolicyFromPermissionSetRequest{
            InstanceArn: "doloribus",
            PermissionSetArn: "sapiente",
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("repellat"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        XAmzTarget: operations.DeleteInlinePolicyFromPermissionSetXAmzTargetEnumSwbExternalServiceDeleteInlinePolicyFromPermissionSet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteInlinePolicyFromPermissionSetResponse != nil {
        // handle response
    }
}
```

## DeleteInstanceAccessControlAttributeConfiguration

Disables the attributes-based access control (ABAC) feature for the specified IAM Identity Center instance and deletes all of the attribute mappings that have been configured. Once deleted, any attributes that are received from an identity source and any custom attributes you have previously configured will not be passed. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.

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
    res, err := s.SDK.DeleteInstanceAccessControlAttributeConfiguration(ctx, operations.DeleteInstanceAccessControlAttributeConfigurationRequest{
        DeleteInstanceAccessControlAttributeConfigurationRequest: shared.DeleteInstanceAccessControlAttributeConfigurationRequest{
            InstanceArn: "occaecati",
        },
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("velit"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("quia"),
        XAmzTarget: operations.DeleteInstanceAccessControlAttributeConfigurationXAmzTargetEnumSwbExternalServiceDeleteInstanceAccessControlAttributeConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteInstanceAccessControlAttributeConfigurationResponse != nil {
        // handle response
    }
}
```

## DeletePermissionSet

Deletes the specified permission set.

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
    res, err := s.SDK.DeletePermissionSet(ctx, operations.DeletePermissionSetRequest{
        DeletePermissionSetRequest: shared.DeletePermissionSetRequest{
            InstanceArn: "quis",
            PermissionSetArn: "vitae",
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("animi"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("sequi"),
        XAmzSignedHeaders: sdk.String("tenetur"),
        XAmzTarget: operations.DeletePermissionSetXAmzTargetEnumSwbExternalServiceDeletePermissionSet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletePermissionSetResponse != nil {
        // handle response
    }
}
```

## DeletePermissionsBoundaryFromPermissionSet

Deletes the permissions boundary from a specified <a>PermissionSet</a>.

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
    res, err := s.SDK.DeletePermissionsBoundaryFromPermissionSet(ctx, operations.DeletePermissionsBoundaryFromPermissionSetRequest{
        DeletePermissionsBoundaryFromPermissionSetRequest: shared.DeletePermissionsBoundaryFromPermissionSetRequest{
            InstanceArn: "ipsam",
            PermissionSetArn: "id",
        },
        XAmzAlgorithm: sdk.String("possimus"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("temporibus"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("quasi"),
        XAmzTarget: operations.DeletePermissionsBoundaryFromPermissionSetXAmzTargetEnumSwbExternalServiceDeletePermissionsBoundaryFromPermissionSet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletePermissionsBoundaryFromPermissionSetResponse != nil {
        // handle response
    }
}
```

## DescribeAccountAssignmentCreationStatus

Describes the status of the assignment creation request.

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
    res, err := s.SDK.DescribeAccountAssignmentCreationStatus(ctx, operations.DescribeAccountAssignmentCreationStatusRequest{
        DescribeAccountAssignmentCreationStatusRequest: shared.DescribeAccountAssignmentCreationStatusRequest{
            AccountAssignmentCreationRequestID: "reiciendis",
            InstanceArn: "voluptatibus",
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("voluptate"),
        XAmzTarget: operations.DescribeAccountAssignmentCreationStatusXAmzTargetEnumSwbExternalServiceDescribeAccountAssignmentCreationStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAccountAssignmentCreationStatusResponse != nil {
        // handle response
    }
}
```

## DescribeAccountAssignmentDeletionStatus

Describes the status of the assignment deletion request.

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
    res, err := s.SDK.DescribeAccountAssignmentDeletionStatus(ctx, operations.DescribeAccountAssignmentDeletionStatusRequest{
        DescribeAccountAssignmentDeletionStatusRequest: shared.DescribeAccountAssignmentDeletionStatusRequest{
            AccountAssignmentDeletionRequestID: "cum",
            InstanceArn: "perferendis",
        },
        XAmzAlgorithm: sdk.String("doloremque"),
        XAmzContentSha256: sdk.String("reprehenderit"),
        XAmzCredential: sdk.String("ut"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("dolore"),
        XAmzTarget: operations.DescribeAccountAssignmentDeletionStatusXAmzTargetEnumSwbExternalServiceDescribeAccountAssignmentDeletionStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAccountAssignmentDeletionStatusResponse != nil {
        // handle response
    }
}
```

## DescribeInstanceAccessControlAttributeConfiguration

Returns the list of IAM Identity Center identity store attributes that have been configured to work with attributes-based access control (ABAC) for the specified IAM Identity Center instance. This will not return attributes configured and sent by an external identity provider. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.

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
    res, err := s.SDK.DescribeInstanceAccessControlAttributeConfiguration(ctx, operations.DescribeInstanceAccessControlAttributeConfigurationRequest{
        DescribeInstanceAccessControlAttributeConfigurationRequest: shared.DescribeInstanceAccessControlAttributeConfigurationRequest{
            InstanceArn: "iusto",
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("harum"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("quae"),
        XAmzTarget: operations.DescribeInstanceAccessControlAttributeConfigurationXAmzTargetEnumSwbExternalServiceDescribeInstanceAccessControlAttributeConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeInstanceAccessControlAttributeConfigurationResponse != nil {
        // handle response
    }
}
```

## DescribePermissionSet

Gets the details of the permission set.

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
    res, err := s.SDK.DescribePermissionSet(ctx, operations.DescribePermissionSetRequest{
        DescribePermissionSetRequest: shared.DescribePermissionSetRequest{
            InstanceArn: "ipsum",
            PermissionSetArn: "quidem",
        },
        XAmzAlgorithm: sdk.String("molestias"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("voluptates"),
        XAmzTarget: operations.DescribePermissionSetXAmzTargetEnumSwbExternalServiceDescribePermissionSet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribePermissionSetResponse != nil {
        // handle response
    }
}
```

## DescribePermissionSetProvisioningStatus

Describes the status for the given permission set provisioning request.

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
    res, err := s.SDK.DescribePermissionSetProvisioningStatus(ctx, operations.DescribePermissionSetProvisioningStatusRequest{
        DescribePermissionSetProvisioningStatusRequest: shared.DescribePermissionSetProvisioningStatusRequest{
            InstanceArn: "quasi",
            ProvisionPermissionSetRequestID: "repudiandae",
        },
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("itaque"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("consequatur"),
        XAmzSignedHeaders: sdk.String("est"),
        XAmzTarget: operations.DescribePermissionSetProvisioningStatusXAmzTargetEnumSwbExternalServiceDescribePermissionSetProvisioningStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribePermissionSetProvisioningStatusResponse != nil {
        // handle response
    }
}
```

## DetachCustomerManagedPolicyReferenceFromPermissionSet

Detaches the specified customer managed policy from the specified <a>PermissionSet</a>.

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
    res, err := s.SDK.DetachCustomerManagedPolicyReferenceFromPermissionSet(ctx, operations.DetachCustomerManagedPolicyReferenceFromPermissionSetRequest{
        DetachCustomerManagedPolicyReferenceFromPermissionSetRequest: shared.DetachCustomerManagedPolicyReferenceFromPermissionSetRequest{
            CustomerManagedPolicyReference: shared.CustomerManagedPolicyReference{
                Name: "Benjamin O'Connell",
                Path: sdk.String("labore"),
            },
            InstanceArn: "modi",
            PermissionSetArn: "qui",
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("cupiditate"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("magni"),
        XAmzSignature: sdk.String("assumenda"),
        XAmzSignedHeaders: sdk.String("ipsam"),
        XAmzTarget: operations.DetachCustomerManagedPolicyReferenceFromPermissionSetXAmzTargetEnumSwbExternalServiceDetachCustomerManagedPolicyReferenceFromPermissionSet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DetachCustomerManagedPolicyReferenceFromPermissionSetResponse != nil {
        // handle response
    }
}
```

## DetachManagedPolicyFromPermissionSet

Detaches the attached AWS managed policy ARN from the specified permission set.

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
    res, err := s.SDK.DetachManagedPolicyFromPermissionSet(ctx, operations.DetachManagedPolicyFromPermissionSetRequest{
        DetachManagedPolicyFromPermissionSetRequest: shared.DetachManagedPolicyFromPermissionSetRequest{
            InstanceArn: "alias",
            ManagedPolicyArn: "fugit",
            PermissionSetArn: "dolorum",
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("tempore"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("eum"),
        XAmzTarget: operations.DetachManagedPolicyFromPermissionSetXAmzTargetEnumSwbExternalServiceDetachManagedPolicyFromPermissionSet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DetachManagedPolicyFromPermissionSetResponse != nil {
        // handle response
    }
}
```

## GetInlinePolicyForPermissionSet

Obtains the inline policy assigned to the permission set.

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
    res, err := s.SDK.GetInlinePolicyForPermissionSet(ctx, operations.GetInlinePolicyForPermissionSetRequest{
        GetInlinePolicyForPermissionSetRequest: shared.GetInlinePolicyForPermissionSetRequest{
            InstanceArn: "non",
            PermissionSetArn: "eligendi",
        },
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("dolor"),
        XAmzTarget: operations.GetInlinePolicyForPermissionSetXAmzTargetEnumSwbExternalServiceGetInlinePolicyForPermissionSet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInlinePolicyForPermissionSetResponse != nil {
        // handle response
    }
}
```

## GetPermissionsBoundaryForPermissionSet

Obtains the permissions boundary for a specified <a>PermissionSet</a>.

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
    res, err := s.SDK.GetPermissionsBoundaryForPermissionSet(ctx, operations.GetPermissionsBoundaryForPermissionSetRequest{
        GetPermissionsBoundaryForPermissionSetRequest: shared.GetPermissionsBoundaryForPermissionSetRequest{
            InstanceArn: "debitis",
            PermissionSetArn: "a",
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("rerum"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.GetPermissionsBoundaryForPermissionSetXAmzTargetEnumSwbExternalServiceGetPermissionsBoundaryForPermissionSet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPermissionsBoundaryForPermissionSetResponse != nil {
        // handle response
    }
}
```

## ListAccountAssignmentCreationStatus

Lists the status of the AWS account assignment creation requests for a specified IAM Identity Center instance.

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
    res, err := s.SDK.ListAccountAssignmentCreationStatus(ctx, operations.ListAccountAssignmentCreationStatusRequest{
        ListAccountAssignmentCreationStatusRequest: shared.ListAccountAssignmentCreationStatusRequest{
            Filter: &shared.OperationStatusFilter{
                Status: shared.StatusValuesEnumInProgress.ToPointer(),
            },
            InstanceArn: "cumque",
            MaxResults: sdk.Int64(813798),
            NextToken: sdk.String("ea"),
        },
        MaxResults: sdk.String("aliquid"),
        NextToken: sdk.String("laborum"),
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("quidem"),
        XAmzTarget: operations.ListAccountAssignmentCreationStatusXAmzTargetEnumSwbExternalServiceListAccountAssignmentCreationStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAccountAssignmentCreationStatusResponse != nil {
        // handle response
    }
}
```

## ListAccountAssignmentDeletionStatus

Lists the status of the AWS account assignment deletion requests for a specified IAM Identity Center instance.

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
    res, err := s.SDK.ListAccountAssignmentDeletionStatus(ctx, operations.ListAccountAssignmentDeletionStatusRequest{
        ListAccountAssignmentDeletionStatusRequest: shared.ListAccountAssignmentDeletionStatusRequest{
            Filter: &shared.OperationStatusFilter{
                Status: shared.StatusValuesEnumFailed.ToPointer(),
            },
            InstanceArn: "nam",
            MaxResults: sdk.Int64(659669),
            NextToken: sdk.String("blanditiis"),
        },
        MaxResults: sdk.String("deleniti"),
        NextToken: sdk.String("sapiente"),
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("nisi"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        XAmzTarget: operations.ListAccountAssignmentDeletionStatusXAmzTargetEnumSwbExternalServiceListAccountAssignmentDeletionStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAccountAssignmentDeletionStatusResponse != nil {
        // handle response
    }
}
```

## ListAccountAssignments

Lists the assignee of the specified AWS account with the specified permission set.

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
    res, err := s.SDK.ListAccountAssignments(ctx, operations.ListAccountAssignmentsRequest{
        ListAccountAssignmentsRequest: shared.ListAccountAssignmentsRequest{
            AccountID: "perferendis",
            InstanceArn: "nihil",
            MaxResults: sdk.Int64(301575),
            NextToken: sdk.String("distinctio"),
            PermissionSetArn: "id",
        },
        MaxResults: sdk.String("labore"),
        NextToken: sdk.String("labore"),
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.ListAccountAssignmentsXAmzTargetEnumSwbExternalServiceListAccountAssignments,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAccountAssignmentsResponse != nil {
        // handle response
    }
}
```

## ListAccountsForProvisionedPermissionSet

Lists all the AWS accounts where the specified permission set is provisioned.

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
    res, err := s.SDK.ListAccountsForProvisionedPermissionSet(ctx, operations.ListAccountsForProvisionedPermissionSetRequest{
        ListAccountsForProvisionedPermissionSetRequest: shared.ListAccountsForProvisionedPermissionSetRequest{
            InstanceArn: "magnam",
            MaxResults: sdk.Int64(92373),
            NextToken: sdk.String("excepturi"),
            PermissionSetArn: "ullam",
            ProvisioningStatus: shared.ProvisioningStatusEnumLatestPermissionSetNotProvisioned.ToPointer(),
        },
        MaxResults: sdk.String("quos"),
        NextToken: sdk.String("sint"),
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("dolor"),
        XAmzTarget: operations.ListAccountsForProvisionedPermissionSetXAmzTargetEnumSwbExternalServiceListAccountsForProvisionedPermissionSet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAccountsForProvisionedPermissionSetResponse != nil {
        // handle response
    }
}
```

## ListCustomerManagedPolicyReferencesInPermissionSet

Lists all customer managed policies attached to a specified <a>PermissionSet</a>.

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
    res, err := s.SDK.ListCustomerManagedPolicyReferencesInPermissionSet(ctx, operations.ListCustomerManagedPolicyReferencesInPermissionSetRequest{
        ListCustomerManagedPolicyReferencesInPermissionSetRequest: shared.ListCustomerManagedPolicyReferencesInPermissionSetRequest{
            InstanceArn: "necessitatibus",
            MaxResults: sdk.Int64(141264),
            NextToken: sdk.String("nemo"),
            PermissionSetArn: "quasi",
        },
        MaxResults: sdk.String("iure"),
        NextToken: sdk.String("doloribus"),
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("maxime"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.ListCustomerManagedPolicyReferencesInPermissionSetXAmzTargetEnumSwbExternalServiceListCustomerManagedPolicyReferencesInPermissionSet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCustomerManagedPolicyReferencesInPermissionSetResponse != nil {
        // handle response
    }
}
```

## ListInstances

Lists the IAM Identity Center instances that the caller has access to.

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
    res, err := s.SDK.ListInstances(ctx, operations.ListInstancesRequest{
        ListInstancesRequest: shared.ListInstancesRequest{
            MaxResults: sdk.Int64(99569),
            NextToken: sdk.String("repudiandae"),
        },
        MaxResults: sdk.String("ullam"),
        NextToken: sdk.String("expedita"),
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("repellat"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("sed"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("accusantium"),
        XAmzTarget: operations.ListInstancesXAmzTargetEnumSwbExternalServiceListInstances,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInstancesResponse != nil {
        // handle response
    }
}
```

## ListManagedPoliciesInPermissionSet

Lists the AWS managed policy that is attached to a specified permission set.

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
    res, err := s.SDK.ListManagedPoliciesInPermissionSet(ctx, operations.ListManagedPoliciesInPermissionSetRequest{
        ListManagedPoliciesInPermissionSetRequest: shared.ListManagedPoliciesInPermissionSetRequest{
            InstanceArn: "consequuntur",
            MaxResults: sdk.Int64(508315),
            NextToken: sdk.String("natus"),
            PermissionSetArn: "magni",
        },
        MaxResults: sdk.String("sunt"),
        NextToken: sdk.String("quo"),
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("maxime"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("ea"),
        XAmzTarget: operations.ListManagedPoliciesInPermissionSetXAmzTargetEnumSwbExternalServiceListManagedPoliciesInPermissionSet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListManagedPoliciesInPermissionSetResponse != nil {
        // handle response
    }
}
```

## ListPermissionSetProvisioningStatus

Lists the status of the permission set provisioning requests for a specified IAM Identity Center instance.

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
    res, err := s.SDK.ListPermissionSetProvisioningStatus(ctx, operations.ListPermissionSetProvisioningStatusRequest{
        ListPermissionSetProvisioningStatusRequest: shared.ListPermissionSetProvisioningStatusRequest{
            Filter: &shared.OperationStatusFilter{
                Status: shared.StatusValuesEnumInProgress.ToPointer(),
            },
            InstanceArn: "ab",
            MaxResults: sdk.Int64(982575),
            NextToken: sdk.String("quidem"),
        },
        MaxResults: sdk.String("ipsam"),
        NextToken: sdk.String("voluptate"),
        XAmzAlgorithm: sdk.String("autem"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        XAmzTarget: operations.ListPermissionSetProvisioningStatusXAmzTargetEnumSwbExternalServiceListPermissionSetProvisioningStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPermissionSetProvisioningStatusResponse != nil {
        // handle response
    }
}
```

## ListPermissionSets

Lists the <a>PermissionSet</a>s in an IAM Identity Center instance.

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
    res, err := s.SDK.ListPermissionSets(ctx, operations.ListPermissionSetsRequest{
        ListPermissionSetsRequest: shared.ListPermissionSetsRequest{
            InstanceArn: "fugiat",
            MaxResults: sdk.Int64(230742),
            NextToken: sdk.String("aut"),
        },
        MaxResults: sdk.String("cumque"),
        NextToken: sdk.String("corporis"),
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("dignissimos"),
        XAmzTarget: operations.ListPermissionSetsXAmzTargetEnumSwbExternalServiceListPermissionSets,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPermissionSetsResponse != nil {
        // handle response
    }
}
```

## ListPermissionSetsProvisionedToAccount

Lists all the permission sets that are provisioned to a specified AWS account.

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
    res, err := s.SDK.ListPermissionSetsProvisionedToAccount(ctx, operations.ListPermissionSetsProvisionedToAccountRequest{
        ListPermissionSetsProvisionedToAccountRequest: shared.ListPermissionSetsProvisionedToAccountRequest{
            AccountID: "eaque",
            InstanceArn: "quis",
            MaxResults: sdk.Int64(199996),
            NextToken: sdk.String("eos"),
            ProvisioningStatus: shared.ProvisioningStatusEnumLatestPermissionSetProvisioned.ToPointer(),
        },
        MaxResults: sdk.String("dolores"),
        NextToken: sdk.String("minus"),
        XAmzAlgorithm: sdk.String("quam"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("nostrum"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("omnis"),
        XAmzTarget: operations.ListPermissionSetsProvisionedToAccountXAmzTargetEnumSwbExternalServiceListPermissionSetsProvisionedToAccount,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPermissionSetsProvisionedToAccountResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists the tags that are attached to a specified resource.

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
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ListTagsForResourceRequest: shared.ListTagsForResourceRequest{
            InstanceArn: "facilis",
            NextToken: sdk.String("perspiciatis"),
            ResourceArn: "voluptatem",
        },
        NextToken: sdk.String("porro"),
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("blanditiis"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("eaque"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("rerum"),
        XAmzSignedHeaders: sdk.String("adipisci"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumSwbExternalServiceListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ProvisionPermissionSet

The process by which a specified permission set is provisioned to the specified target.

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
    res, err := s.SDK.ProvisionPermissionSet(ctx, operations.ProvisionPermissionSetRequest{
        ProvisionPermissionSetRequest: shared.ProvisionPermissionSetRequest{
            InstanceArn: "asperiores",
            PermissionSetArn: "earum",
            TargetID: sdk.String("modi"),
            TargetType: shared.ProvisionTargetTypeEnumAllProvisionedAccounts,
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("delectus"),
        XAmzTarget: operations.ProvisionPermissionSetXAmzTargetEnumSwbExternalServiceProvisionPermissionSet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProvisionPermissionSetResponse != nil {
        // handle response
    }
}
```

## PutInlinePolicyToPermissionSet

<p>Attaches an inline policy to a permission set.</p> <note> <p>If the permission set is already referenced by one or more account assignments, you will need to call <code> <a>ProvisionPermissionSet</a> </code> after this action to apply the corresponding IAM policy updates to all assigned accounts.</p> </note>

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
    res, err := s.SDK.PutInlinePolicyToPermissionSet(ctx, operations.PutInlinePolicyToPermissionSetRequest{
        PutInlinePolicyToPermissionSetRequest: shared.PutInlinePolicyToPermissionSetRequest{
            InlinePolicy: "quaerat",
            InstanceArn: "quos",
            PermissionSetArn: "aliquid",
        },
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        XAmzTarget: operations.PutInlinePolicyToPermissionSetXAmzTargetEnumSwbExternalServicePutInlinePolicyToPermissionSet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutInlinePolicyToPermissionSetResponse != nil {
        // handle response
    }
}
```

## PutPermissionsBoundaryToPermissionSet

Attaches an AWS managed or customer managed policy to the specified <a>PermissionSet</a> as a permissions boundary.

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
    res, err := s.SDK.PutPermissionsBoundaryToPermissionSet(ctx, operations.PutPermissionsBoundaryToPermissionSetRequest{
        PutPermissionsBoundaryToPermissionSetRequest: shared.PutPermissionsBoundaryToPermissionSetRequest{
            InstanceArn: "cum",
            PermissionSetArn: "voluptate",
            PermissionsBoundary: shared.PermissionsBoundary{
                CustomerManagedPolicyReference: &shared.CustomerManagedPolicyReference{
                    Name: "Johanna Farrell",
                    Path: sdk.String("veritatis"),
                },
                ManagedPolicyArn: sdk.String("ipsa"),
            },
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        XAmzTarget: operations.PutPermissionsBoundaryToPermissionSetXAmzTargetEnumSwbExternalServicePutPermissionsBoundaryToPermissionSet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutPermissionsBoundaryToPermissionSetResponse != nil {
        // handle response
    }
}
```

## TagResource

Associates a set of tags with a specified resource.

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
        TagResourceRequest: shared.TagResourceRequest{
            InstanceArn: "voluptas",
            ResourceArn: "natus",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "atque",
                    Value: "sit",
                },
            },
        },
        XAmzAlgorithm: sdk.String("fugiat"),
        XAmzContentSha256: sdk.String("ab"),
        XAmzCredential: sdk.String("soluta"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumSwbExternalServiceTagResource,
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

Disassociates a set of tags from a specified resource.

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
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceRequest: shared.UntagResourceRequest{
            InstanceArn: "deleniti",
            ResourceArn: "omnis",
            TagKeys: []string{
                "distinctio",
                "asperiores",
                "nihil",
                "ipsum",
            },
        },
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("amet"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumSwbExternalServiceUntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateInstanceAccessControlAttributeConfiguration

Updates the IAM Identity Center identity store attributes that you can use with the IAM Identity Center instance for attributes-based access control (ABAC). When using an external identity provider as an identity source, you can pass attributes through the SAML assertion as an alternative to configuring attributes from the IAM Identity Center identity store. If a SAML assertion passes any of these attributes, IAM Identity Center replaces the attribute value with the value from the IAM Identity Center identity store. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.

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
    res, err := s.SDK.UpdateInstanceAccessControlAttributeConfiguration(ctx, operations.UpdateInstanceAccessControlAttributeConfigurationRequest{
        UpdateInstanceAccessControlAttributeConfigurationRequest: shared.UpdateInstanceAccessControlAttributeConfigurationRequest{
            InstanceAccessControlAttributeConfiguration: shared.InstanceAccessControlAttributeConfiguration{
                AccessControlAttributes: []shared.AccessControlAttribute{
                    shared.AccessControlAttribute{
                        Key: "accusamus",
                        Value: shared.AccessControlAttributeValue{
                            Source: []string{
                                "saepe",
                                "suscipit",
                            },
                        },
                    },
                    shared.AccessControlAttribute{
                        Key: "deserunt",
                        Value: shared.AccessControlAttributeValue{
                            Source: []string{
                                "minima",
                                "repellendus",
                                "totam",
                            },
                        },
                    },
                    shared.AccessControlAttribute{
                        Key: "similique",
                        Value: shared.AccessControlAttributeValue{
                            Source: []string{
                                "at",
                            },
                        },
                    },
                    shared.AccessControlAttribute{
                        Key: "quaerat",
                        Value: shared.AccessControlAttributeValue{
                            Source: []string{
                                "vel",
                                "quod",
                            },
                        },
                    },
                },
            },
            InstanceArn: "officiis",
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("harum"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        XAmzTarget: operations.UpdateInstanceAccessControlAttributeConfigurationXAmzTargetEnumSwbExternalServiceUpdateInstanceAccessControlAttributeConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateInstanceAccessControlAttributeConfigurationResponse != nil {
        // handle response
    }
}
```

## UpdatePermissionSet

Updates an existing permission set.

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
    res, err := s.SDK.UpdatePermissionSet(ctx, operations.UpdatePermissionSetRequest{
        UpdatePermissionSetRequest: shared.UpdatePermissionSetRequest{
            Description: sdk.String("quisquam"),
            InstanceArn: "tenetur",
            PermissionSetArn: "amet",
            RelayState: sdk.String("tempore"),
            SessionDuration: sdk.String("accusamus"),
        },
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("sit"),
        XAmzTarget: operations.UpdatePermissionSetXAmzTargetEnumSwbExternalServiceUpdatePermissionSet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePermissionSetResponse != nil {
        // handle response
    }
}
```
