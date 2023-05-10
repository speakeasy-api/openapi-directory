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
    $request->attachCustomerManagedPolicyReferenceToPermissionSetRequest->customerManagedPolicyReference->name = 'Lucia Goldner';
    $request->attachCustomerManagedPolicyReferenceToPermissionSetRequest->customerManagedPolicyReference->path = 'minus';
    $request->attachCustomerManagedPolicyReferenceToPermissionSetRequest->instanceArn = 'placeat';
    $request->attachCustomerManagedPolicyReferenceToPermissionSetRequest->permissionSetArn = 'voluptatum';
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'quis';
    $request->xAmzTarget = AttachCustomerManagedPolicyReferenceToPermissionSetXAmzTargetEnum::SWB_EXTERNAL_SERVICE_ATTACH_CUSTOMER_MANAGED_POLICY_REFERENCE_TO_PERMISSION_SET;

    $response = $sdk->sdk->attachCustomerManagedPolicyReferenceToPermissionSet($request);

    if ($response->attachCustomerManagedPolicyReferenceToPermissionSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## attachManagedPolicyToPermissionSet

<p>Attaches an AWS managed policy ARN to a permission set.</p> <note> <p>If the permission set is already referenced by one or more account assignments, you will need to call <code> <a>ProvisionPermissionSet</a> </code> after this operation. Calling <code>ProvisionPermissionSet</code> applies the corresponding IAM policy updates to all assigned accounts.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AttachManagedPolicyToPermissionSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AttachManagedPolicyToPermissionSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\AttachManagedPolicyToPermissionSetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AttachManagedPolicyToPermissionSetRequest();
    $request->attachManagedPolicyToPermissionSetRequest = new AttachManagedPolicyToPermissionSetRequest();
    $request->attachManagedPolicyToPermissionSetRequest->instanceArn = 'veritatis';
    $request->attachManagedPolicyToPermissionSetRequest->managedPolicyArn = 'deserunt';
    $request->attachManagedPolicyToPermissionSetRequest->permissionSetArn = 'perferendis';
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'at';
    $request->xAmzTarget = AttachManagedPolicyToPermissionSetXAmzTargetEnum::SWB_EXTERNAL_SERVICE_ATTACH_MANAGED_POLICY_TO_PERMISSION_SET;

    $response = $sdk->sdk->attachManagedPolicyToPermissionSet($request);

    if ($response->attachManagedPolicyToPermissionSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAccountAssignment

<p>Assigns access to a principal for a specified AWS account using a specified permission set.</p> <note> <p>The term <i>principal</i> here refers to a user or group that is defined in IAM Identity Center.</p> </note> <note> <p>As part of a successful <code>CreateAccountAssignment</code> call, the specified permission set will automatically be provisioned to the account in the form of an IAM policy. That policy is attached to the IAM role created in IAM Identity Center. If the permission set is subsequently updated, the corresponding IAM policies attached to roles in your accounts will not be updated automatically. In this case, you must call <code> <a>ProvisionPermissionSet</a> </code> to make these updates.</p> </note> <note> <p> After a successful response, call <code>DescribeAccountAssignmentCreationStatus</code> to describe the status of an assignment creation request. </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccountAssignmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateAccountAssignmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\PrincipalTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccountAssignmentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAccountAssignmentRequest();
    $request->createAccountAssignmentRequest = new CreateAccountAssignmentRequest();
    $request->createAccountAssignmentRequest->instanceArn = 'maiores';
    $request->createAccountAssignmentRequest->permissionSetArn = 'molestiae';
    $request->createAccountAssignmentRequest->principalId = 'quod';
    $request->createAccountAssignmentRequest->principalType = PrincipalTypeEnum::GROUP;
    $request->createAccountAssignmentRequest->targetId = 'esse';
    $request->createAccountAssignmentRequest->targetType = TargetTypeEnum::AWS_ACCOUNT;
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->xAmzTarget = CreateAccountAssignmentXAmzTargetEnum::SWB_EXTERNAL_SERVICE_CREATE_ACCOUNT_ASSIGNMENT;

    $response = $sdk->sdk->createAccountAssignment($request);

    if ($response->createAccountAssignmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createInstanceAccessControlAttributeConfiguration

<p>Enables the attributes-based access control (ABAC) feature for the specified IAM Identity Center instance. You can also specify new attributes to add to your ABAC configuration during the enabling process. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.</p> <note> <p>After a successful response, call <code>DescribeInstanceAccessControlAttributeConfiguration</code> to validate that <code>InstanceAccessControlAttributeConfiguration</code> was created.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateInstanceAccessControlAttributeConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateInstanceAccessControlAttributeConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\InstanceAccessControlAttributeConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AccessControlAttribute;
use \OpenAPI\OpenAPI\Models\Shared\AccessControlAttributeValue;
use \OpenAPI\OpenAPI\Models\Operations\CreateInstanceAccessControlAttributeConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInstanceAccessControlAttributeConfigurationRequest();
    $request->createInstanceAccessControlAttributeConfigurationRequest = new CreateInstanceAccessControlAttributeConfigurationRequest();
    $request->createInstanceAccessControlAttributeConfigurationRequest->instanceAccessControlAttributeConfiguration = new InstanceAccessControlAttributeConfiguration();
    $request->createInstanceAccessControlAttributeConfigurationRequest->instanceAccessControlAttributeConfiguration->accessControlAttributes = [
        new AccessControlAttribute(),
    ];
    $request->createInstanceAccessControlAttributeConfigurationRequest->instanceArn = 'deleniti';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'optio';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'beatae';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'modi';
    $request->xAmzTarget = CreateInstanceAccessControlAttributeConfigurationXAmzTargetEnum::SWB_EXTERNAL_SERVICE_CREATE_INSTANCE_ACCESS_CONTROL_ATTRIBUTE_CONFIGURATION;

    $response = $sdk->sdk->createInstanceAccessControlAttributeConfiguration($request);

    if ($response->createInstanceAccessControlAttributeConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPermissionSet

<p>Creates a permission set within a specified IAM Identity Center instance.</p> <note> <p>To grant users and groups access to AWS account resources, use <code> <a>CreateAccountAssignment</a> </code>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePermissionSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreatePermissionSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreatePermissionSetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePermissionSetRequest();
    $request->createPermissionSetRequest = new CreatePermissionSetRequest();
    $request->createPermissionSetRequest->description = 'qui';
    $request->createPermissionSetRequest->instanceArn = 'impedit';
    $request->createPermissionSetRequest->name = 'Cory Emmerich';
    $request->createPermissionSetRequest->relayState = 'perferendis';
    $request->createPermissionSetRequest->sessionDuration = 'ad';
    $request->createPermissionSetRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'laboriosam';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = CreatePermissionSetXAmzTargetEnum::SWB_EXTERNAL_SERVICE_CREATE_PERMISSION_SET;

    $response = $sdk->sdk->createPermissionSet($request);

    if ($response->createPermissionSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAccountAssignment

<p>Deletes a principal's access from a specified AWS account using a specified permission set.</p> <note> <p>After a successful response, call <code>DescribeAccountAssignmentCreationStatus</code> to describe the status of an assignment deletion request.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAccountAssignmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAccountAssignmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\PrincipalTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAccountAssignmentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAccountAssignmentRequest();
    $request->deleteAccountAssignmentRequest = new DeleteAccountAssignmentRequest();
    $request->deleteAccountAssignmentRequest->instanceArn = 'fuga';
    $request->deleteAccountAssignmentRequest->permissionSetArn = 'in';
    $request->deleteAccountAssignmentRequest->principalId = 'corporis';
    $request->deleteAccountAssignmentRequest->principalType = PrincipalTypeEnum::GROUP;
    $request->deleteAccountAssignmentRequest->targetId = 'iure';
    $request->deleteAccountAssignmentRequest->targetType = TargetTypeEnum::AWS_ACCOUNT;
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->xAmzTarget = DeleteAccountAssignmentXAmzTargetEnum::SWB_EXTERNAL_SERVICE_DELETE_ACCOUNT_ASSIGNMENT;

    $response = $sdk->sdk->deleteAccountAssignment($request);

    if ($response->deleteAccountAssignmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteInlinePolicyFromPermissionSet

Deletes the inline policy from a specified permission set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInlinePolicyFromPermissionSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteInlinePolicyFromPermissionSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInlinePolicyFromPermissionSetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteInlinePolicyFromPermissionSetRequest();
    $request->deleteInlinePolicyFromPermissionSetRequest = new DeleteInlinePolicyFromPermissionSetRequest();
    $request->deleteInlinePolicyFromPermissionSetRequest->instanceArn = 'laborum';
    $request->deleteInlinePolicyFromPermissionSetRequest->permissionSetArn = 'dolores';
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'nemo';
    $request->xAmzTarget = DeleteInlinePolicyFromPermissionSetXAmzTargetEnum::SWB_EXTERNAL_SERVICE_DELETE_INLINE_POLICY_FROM_PERMISSION_SET;

    $response = $sdk->sdk->deleteInlinePolicyFromPermissionSet($request);

    if ($response->deleteInlinePolicyFromPermissionSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteInstanceAccessControlAttributeConfiguration

Disables the attributes-based access control (ABAC) feature for the specified IAM Identity Center instance and deletes all of the attribute mappings that have been configured. Once deleted, any attributes that are received from an identity source and any custom attributes you have previously configured will not be passed. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInstanceAccessControlAttributeConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteInstanceAccessControlAttributeConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInstanceAccessControlAttributeConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteInstanceAccessControlAttributeConfigurationRequest();
    $request->deleteInstanceAccessControlAttributeConfigurationRequest = new DeleteInstanceAccessControlAttributeConfigurationRequest();
    $request->deleteInstanceAccessControlAttributeConfigurationRequest->instanceArn = 'minima';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'architecto';
    $request->xAmzTarget = DeleteInstanceAccessControlAttributeConfigurationXAmzTargetEnum::SWB_EXTERNAL_SERVICE_DELETE_INSTANCE_ACCESS_CONTROL_ATTRIBUTE_CONFIGURATION;

    $response = $sdk->sdk->deleteInstanceAccessControlAttributeConfiguration($request);

    if ($response->deleteInstanceAccessControlAttributeConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePermissionSet

Deletes the specified permission set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePermissionSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeletePermissionSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeletePermissionSetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePermissionSetRequest();
    $request->deletePermissionSetRequest = new DeletePermissionSetRequest();
    $request->deletePermissionSetRequest->instanceArn = 'mollitia';
    $request->deletePermissionSetRequest->permissionSetArn = 'dolorem';
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'repellat';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'commodi';
    $request->xAmzTarget = DeletePermissionSetXAmzTargetEnum::SWB_EXTERNAL_SERVICE_DELETE_PERMISSION_SET;

    $response = $sdk->sdk->deletePermissionSet($request);

    if ($response->deletePermissionSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePermissionsBoundaryFromPermissionSet

Deletes the permissions boundary from a specified <a>PermissionSet</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePermissionsBoundaryFromPermissionSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeletePermissionsBoundaryFromPermissionSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeletePermissionsBoundaryFromPermissionSetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePermissionsBoundaryFromPermissionSetRequest();
    $request->deletePermissionsBoundaryFromPermissionSetRequest = new DeletePermissionsBoundaryFromPermissionSetRequest();
    $request->deletePermissionsBoundaryFromPermissionSetRequest->instanceArn = 'quam';
    $request->deletePermissionsBoundaryFromPermissionSetRequest->permissionSetArn = 'molestiae';
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'quia';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'vitae';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'animi';
    $request->xAmzTarget = DeletePermissionsBoundaryFromPermissionSetXAmzTargetEnum::SWB_EXTERNAL_SERVICE_DELETE_PERMISSIONS_BOUNDARY_FROM_PERMISSION_SET;

    $response = $sdk->sdk->deletePermissionsBoundaryFromPermissionSet($request);

    if ($response->deletePermissionsBoundaryFromPermissionSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAccountAssignmentCreationStatus

Describes the status of the assignment creation request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAccountAssignmentCreationStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeAccountAssignmentCreationStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAccountAssignmentCreationStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAccountAssignmentCreationStatusRequest();
    $request->describeAccountAssignmentCreationStatusRequest = new DescribeAccountAssignmentCreationStatusRequest();
    $request->describeAccountAssignmentCreationStatusRequest->accountAssignmentCreationRequestId = 'enim';
    $request->describeAccountAssignmentCreationStatusRequest->instanceArn = 'odit';
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'sequi';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'possimus';
    $request->xAmzSignedHeaders = 'aut';
    $request->xAmzTarget = DescribeAccountAssignmentCreationStatusXAmzTargetEnum::SWB_EXTERNAL_SERVICE_DESCRIBE_ACCOUNT_ASSIGNMENT_CREATION_STATUS;

    $response = $sdk->sdk->describeAccountAssignmentCreationStatus($request);

    if ($response->describeAccountAssignmentCreationStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAccountAssignmentDeletionStatus

Describes the status of the assignment deletion request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAccountAssignmentDeletionStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeAccountAssignmentDeletionStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAccountAssignmentDeletionStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAccountAssignmentDeletionStatusRequest();
    $request->describeAccountAssignmentDeletionStatusRequest = new DescribeAccountAssignmentDeletionStatusRequest();
    $request->describeAccountAssignmentDeletionStatusRequest->accountAssignmentDeletionRequestId = 'quasi';
    $request->describeAccountAssignmentDeletionStatusRequest->instanceArn = 'error';
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'nihil';
    $request->xAmzTarget = DescribeAccountAssignmentDeletionStatusXAmzTargetEnum::SWB_EXTERNAL_SERVICE_DESCRIBE_ACCOUNT_ASSIGNMENT_DELETION_STATUS;

    $response = $sdk->sdk->describeAccountAssignmentDeletionStatus($request);

    if ($response->describeAccountAssignmentDeletionStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeInstanceAccessControlAttributeConfiguration

Returns the list of IAM Identity Center identity store attributes that have been configured to work with attributes-based access control (ABAC) for the specified IAM Identity Center instance. This will not return attributes configured and sent by an external identity provider. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeInstanceAccessControlAttributeConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeInstanceAccessControlAttributeConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeInstanceAccessControlAttributeConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeInstanceAccessControlAttributeConfigurationRequest();
    $request->describeInstanceAccessControlAttributeConfigurationRequest = new DescribeInstanceAccessControlAttributeConfigurationRequest();
    $request->describeInstanceAccessControlAttributeConfigurationRequest->instanceArn = 'praesentium';
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'doloremque';
    $request->xAmzTarget = DescribeInstanceAccessControlAttributeConfigurationXAmzTargetEnum::SWB_EXTERNAL_SERVICE_DESCRIBE_INSTANCE_ACCESS_CONTROL_ATTRIBUTE_CONFIGURATION;

    $response = $sdk->sdk->describeInstanceAccessControlAttributeConfiguration($request);

    if ($response->describeInstanceAccessControlAttributeConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describePermissionSet

Gets the details of the permission set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribePermissionSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribePermissionSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribePermissionSetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribePermissionSetRequest();
    $request->describePermissionSetRequest = new DescribePermissionSetRequest();
    $request->describePermissionSetRequest->instanceArn = 'reprehenderit';
    $request->describePermissionSetRequest->permissionSetArn = 'ut';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'dolore';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'harum';
    $request->xAmzTarget = DescribePermissionSetXAmzTargetEnum::SWB_EXTERNAL_SERVICE_DESCRIBE_PERMISSION_SET;

    $response = $sdk->sdk->describePermissionSet($request);

    if ($response->describePermissionSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describePermissionSetProvisioningStatus

Describes the status for the given permission set provisioning request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribePermissionSetProvisioningStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribePermissionSetProvisioningStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribePermissionSetProvisioningStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribePermissionSetProvisioningStatusRequest();
    $request->describePermissionSetProvisioningStatusRequest = new DescribePermissionSetProvisioningStatusRequest();
    $request->describePermissionSetProvisioningStatusRequest->instanceArn = 'enim';
    $request->describePermissionSetProvisioningStatusRequest->provisionPermissionSetRequestId = 'accusamus';
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'molestias';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = DescribePermissionSetProvisioningStatusXAmzTargetEnum::SWB_EXTERNAL_SERVICE_DESCRIBE_PERMISSION_SET_PROVISIONING_STATUS;

    $response = $sdk->sdk->describePermissionSetProvisioningStatus($request);

    if ($response->describePermissionSetProvisioningStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## detachCustomerManagedPolicyReferenceFromPermissionSet

Detaches the specified customer managed policy from the specified <a>PermissionSet</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DetachCustomerManagedPolicyReferenceFromPermissionSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DetachCustomerManagedPolicyReferenceFromPermissionSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomerManagedPolicyReference;
use \OpenAPI\OpenAPI\Models\Operations\DetachCustomerManagedPolicyReferenceFromPermissionSetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DetachCustomerManagedPolicyReferenceFromPermissionSetRequest();
    $request->detachCustomerManagedPolicyReferenceFromPermissionSetRequest = new DetachCustomerManagedPolicyReferenceFromPermissionSetRequest();
    $request->detachCustomerManagedPolicyReferenceFromPermissionSetRequest->customerManagedPolicyReference = new CustomerManagedPolicyReference();
    $request->detachCustomerManagedPolicyReferenceFromPermissionSetRequest->customerManagedPolicyReference->name = 'Joel Lang';
    $request->detachCustomerManagedPolicyReferenceFromPermissionSetRequest->customerManagedPolicyReference->path = 'quasi';
    $request->detachCustomerManagedPolicyReferenceFromPermissionSetRequest->instanceArn = 'repudiandae';
    $request->detachCustomerManagedPolicyReferenceFromPermissionSetRequest->permissionSetArn = 'sint';
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'itaque';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'consequatur';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'quibusdam';
    $request->xAmzTarget = DetachCustomerManagedPolicyReferenceFromPermissionSetXAmzTargetEnum::SWB_EXTERNAL_SERVICE_DETACH_CUSTOMER_MANAGED_POLICY_REFERENCE_FROM_PERMISSION_SET;

    $response = $sdk->sdk->detachCustomerManagedPolicyReferenceFromPermissionSet($request);

    if ($response->detachCustomerManagedPolicyReferenceFromPermissionSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## detachManagedPolicyFromPermissionSet

Detaches the attached AWS managed policy ARN from the specified permission set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DetachManagedPolicyFromPermissionSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DetachManagedPolicyFromPermissionSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DetachManagedPolicyFromPermissionSetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DetachManagedPolicyFromPermissionSetRequest();
    $request->detachManagedPolicyFromPermissionSetRequest = new DetachManagedPolicyFromPermissionSetRequest();
    $request->detachManagedPolicyFromPermissionSetRequest->instanceArn = 'explicabo';
    $request->detachManagedPolicyFromPermissionSetRequest->managedPolicyArn = 'deserunt';
    $request->detachManagedPolicyFromPermissionSetRequest->permissionSetArn = 'distinctio';
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'quos';
    $request->xAmzTarget = DetachManagedPolicyFromPermissionSetXAmzTargetEnum::SWB_EXTERNAL_SERVICE_DETACH_MANAGED_POLICY_FROM_PERMISSION_SET;

    $response = $sdk->sdk->detachManagedPolicyFromPermissionSet($request);

    if ($response->detachManagedPolicyFromPermissionSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInlinePolicyForPermissionSet

Obtains the inline policy assigned to the permission set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInlinePolicyForPermissionSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetInlinePolicyForPermissionSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetInlinePolicyForPermissionSetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInlinePolicyForPermissionSetRequest();
    $request->getInlinePolicyForPermissionSetRequest = new GetInlinePolicyForPermissionSetRequest();
    $request->getInlinePolicyForPermissionSetRequest->instanceArn = 'perferendis';
    $request->getInlinePolicyForPermissionSetRequest->permissionSetArn = 'magni';
    $request->xAmzAlgorithm = 'assumenda';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'alias';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzTarget = GetInlinePolicyForPermissionSetXAmzTargetEnum::SWB_EXTERNAL_SERVICE_GET_INLINE_POLICY_FOR_PERMISSION_SET;

    $response = $sdk->sdk->getInlinePolicyForPermissionSet($request);

    if ($response->getInlinePolicyForPermissionSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPermissionsBoundaryForPermissionSet

Obtains the permissions boundary for a specified <a>PermissionSet</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPermissionsBoundaryForPermissionSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetPermissionsBoundaryForPermissionSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPermissionsBoundaryForPermissionSetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPermissionsBoundaryForPermissionSetRequest();
    $request->getPermissionsBoundaryForPermissionSetRequest = new GetPermissionsBoundaryForPermissionSetRequest();
    $request->getPermissionsBoundaryForPermissionSetRequest->instanceArn = 'facilis';
    $request->getPermissionsBoundaryForPermissionSetRequest->permissionSetArn = 'tempore';
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'eligendi';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->xAmzTarget = GetPermissionsBoundaryForPermissionSetXAmzTargetEnum::SWB_EXTERNAL_SERVICE_GET_PERMISSIONS_BOUNDARY_FOR_PERMISSION_SET;

    $response = $sdk->sdk->getPermissionsBoundaryForPermissionSet($request);

    if ($response->getPermissionsBoundaryForPermissionSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAccountAssignmentCreationStatus

Lists the status of the AWS account assignment creation requests for a specified IAM Identity Center instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAccountAssignmentCreationStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAccountAssignmentCreationStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\OperationStatusFilter;
use \OpenAPI\OpenAPI\Models\Shared\StatusValuesEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListAccountAssignmentCreationStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAccountAssignmentCreationStatusRequest();
    $request->listAccountAssignmentCreationStatusRequest = new ListAccountAssignmentCreationStatusRequest();
    $request->listAccountAssignmentCreationStatusRequest->filter = new OperationStatusFilter();
    $request->listAccountAssignmentCreationStatusRequest->filter->status = StatusValuesEnum::FAILED;
    $request->listAccountAssignmentCreationStatusRequest->instanceArn = 'necessitatibus';
    $request->listAccountAssignmentCreationStatusRequest->maxResults = 572252;
    $request->listAccountAssignmentCreationStatusRequest->nextToken = 'officia';
    $request->maxResults = 'dolor';
    $request->nextToken = 'debitis';
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'rerum';
    $request->xAmzTarget = ListAccountAssignmentCreationStatusXAmzTargetEnum::SWB_EXTERNAL_SERVICE_LIST_ACCOUNT_ASSIGNMENT_CREATION_STATUS;

    $response = $sdk->sdk->listAccountAssignmentCreationStatus($request);

    if ($response->listAccountAssignmentCreationStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAccountAssignmentDeletionStatus

Lists the status of the AWS account assignment deletion requests for a specified IAM Identity Center instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAccountAssignmentDeletionStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAccountAssignmentDeletionStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\OperationStatusFilter;
use \OpenAPI\OpenAPI\Models\Shared\StatusValuesEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListAccountAssignmentDeletionStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAccountAssignmentDeletionStatusRequest();
    $request->listAccountAssignmentDeletionStatusRequest = new ListAccountAssignmentDeletionStatusRequest();
    $request->listAccountAssignmentDeletionStatusRequest->filter = new OperationStatusFilter();
    $request->listAccountAssignmentDeletionStatusRequest->filter->status = StatusValuesEnum::IN_PROGRESS;
    $request->listAccountAssignmentDeletionStatusRequest->instanceArn = 'magnam';
    $request->listAccountAssignmentDeletionStatusRequest->maxResults = 767024;
    $request->listAccountAssignmentDeletionStatusRequest->nextToken = 'facere';
    $request->maxResults = 'ea';
    $request->nextToken = 'aliquid';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'delectus';
    $request->xAmzTarget = ListAccountAssignmentDeletionStatusXAmzTargetEnum::SWB_EXTERNAL_SERVICE_LIST_ACCOUNT_ASSIGNMENT_DELETION_STATUS;

    $response = $sdk->sdk->listAccountAssignmentDeletionStatus($request);

    if ($response->listAccountAssignmentDeletionStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAccountAssignments

Lists the assignee of the specified AWS account with the specified permission set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAccountAssignmentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAccountAssignmentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAccountAssignmentsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAccountAssignmentsRequest();
    $request->listAccountAssignmentsRequest = new ListAccountAssignmentsRequest();
    $request->listAccountAssignmentsRequest->accountId = 'quidem';
    $request->listAccountAssignmentsRequest->instanceArn = 'provident';
    $request->listAccountAssignmentsRequest->maxResults = 725255;
    $request->listAccountAssignmentsRequest->nextToken = 'id';
    $request->listAccountAssignmentsRequest->permissionSetArn = 'blanditiis';
    $request->maxResults = 'deleniti';
    $request->nextToken = 'sapiente';
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = ListAccountAssignmentsXAmzTargetEnum::SWB_EXTERNAL_SERVICE_LIST_ACCOUNT_ASSIGNMENTS;

    $response = $sdk->sdk->listAccountAssignments($request);

    if ($response->listAccountAssignmentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAccountsForProvisionedPermissionSet

Lists all the AWS accounts where the specified permission set is provisioned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAccountsForProvisionedPermissionSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAccountsForProvisionedPermissionSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProvisioningStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListAccountsForProvisionedPermissionSetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAccountsForProvisionedPermissionSetRequest();
    $request->listAccountsForProvisionedPermissionSetRequest = new ListAccountsForProvisionedPermissionSetRequest();
    $request->listAccountsForProvisionedPermissionSetRequest->instanceArn = 'perferendis';
    $request->listAccountsForProvisionedPermissionSetRequest->maxResults = 470132;
    $request->listAccountsForProvisionedPermissionSetRequest->nextToken = 'magnam';
    $request->listAccountsForProvisionedPermissionSetRequest->permissionSetArn = 'distinctio';
    $request->listAccountsForProvisionedPermissionSetRequest->provisioningStatus = ProvisioningStatusEnum::LATEST_PERMISSION_SET_NOT_PROVISIONED;
    $request->maxResults = 'labore';
    $request->nextToken = 'labore';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'architecto';
    $request->xAmzTarget = ListAccountsForProvisionedPermissionSetXAmzTargetEnum::SWB_EXTERNAL_SERVICE_LIST_ACCOUNTS_FOR_PROVISIONED_PERMISSION_SET;

    $response = $sdk->sdk->listAccountsForProvisionedPermissionSet($request);

    if ($response->listAccountsForProvisionedPermissionSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCustomerManagedPolicyReferencesInPermissionSet

Lists all customer managed policies attached to a specified <a>PermissionSet</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomerManagedPolicyReferencesInPermissionSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListCustomerManagedPolicyReferencesInPermissionSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomerManagedPolicyReferencesInPermissionSetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCustomerManagedPolicyReferencesInPermissionSetRequest();
    $request->listCustomerManagedPolicyReferencesInPermissionSetRequest = new ListCustomerManagedPolicyReferencesInPermissionSetRequest();
    $request->listCustomerManagedPolicyReferencesInPermissionSetRequest->instanceArn = 'magnam';
    $request->listCustomerManagedPolicyReferencesInPermissionSetRequest->maxResults = 92373;
    $request->listCustomerManagedPolicyReferencesInPermissionSetRequest->nextToken = 'excepturi';
    $request->listCustomerManagedPolicyReferencesInPermissionSetRequest->permissionSetArn = 'ullam';
    $request->maxResults = 'provident';
    $request->nextToken = 'quos';
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'ad';
    $request->xAmzSignedHeaders = 'eum';
    $request->xAmzTarget = ListCustomerManagedPolicyReferencesInPermissionSetXAmzTargetEnum::SWB_EXTERNAL_SERVICE_LIST_CUSTOMER_MANAGED_POLICY_REFERENCES_IN_PERMISSION_SET;

    $response = $sdk->sdk->listCustomerManagedPolicyReferencesInPermissionSet($request);

    if ($response->listCustomerManagedPolicyReferencesInPermissionSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listInstances

Lists the IAM Identity Center instances that the caller has access to.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListInstancesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListInstancesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListInstancesRequest();
    $request->listInstancesRequest = new ListInstancesRequest();
    $request->listInstancesRequest->maxResults = 221262;
    $request->listInstancesRequest->nextToken = 'necessitatibus';
    $request->maxResults = 'odit';
    $request->nextToken = 'nemo';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->xAmzTarget = ListInstancesXAmzTargetEnum::SWB_EXTERNAL_SERVICE_LIST_INSTANCES;

    $response = $sdk->sdk->listInstances($request);

    if ($response->listInstancesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listManagedPoliciesInPermissionSet

Lists the AWS managed policy that is attached to a specified permission set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListManagedPoliciesInPermissionSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListManagedPoliciesInPermissionSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListManagedPoliciesInPermissionSetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListManagedPoliciesInPermissionSetRequest();
    $request->listManagedPoliciesInPermissionSetRequest = new ListManagedPoliciesInPermissionSetRequest();
    $request->listManagedPoliciesInPermissionSetRequest->instanceArn = 'facilis';
    $request->listManagedPoliciesInPermissionSetRequest->maxResults = 447926;
    $request->listManagedPoliciesInPermissionSetRequest->nextToken = 'architecto';
    $request->listManagedPoliciesInPermissionSetRequest->permissionSetArn = 'architecto';
    $request->maxResults = 'repudiandae';
    $request->nextToken = 'ullam';
    $request->xAmzAlgorithm = 'expedita';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'repellat';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->xAmzTarget = ListManagedPoliciesInPermissionSetXAmzTargetEnum::SWB_EXTERNAL_SERVICE_LIST_MANAGED_POLICIES_IN_PERMISSION_SET;

    $response = $sdk->sdk->listManagedPoliciesInPermissionSet($request);

    if ($response->listManagedPoliciesInPermissionSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPermissionSetProvisioningStatus

Lists the status of the permission set provisioning requests for a specified IAM Identity Center instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPermissionSetProvisioningStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListPermissionSetProvisioningStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\OperationStatusFilter;
use \OpenAPI\OpenAPI\Models\Shared\StatusValuesEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListPermissionSetProvisioningStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPermissionSetProvisioningStatusRequest();
    $request->listPermissionSetProvisioningStatusRequest = new ListPermissionSetProvisioningStatusRequest();
    $request->listPermissionSetProvisioningStatusRequest->filter = new OperationStatusFilter();
    $request->listPermissionSetProvisioningStatusRequest->filter->status = StatusValuesEnum::IN_PROGRESS;
    $request->listPermissionSetProvisioningStatusRequest->instanceArn = 'consequuntur';
    $request->listPermissionSetProvisioningStatusRequest->maxResults = 508315;
    $request->listPermissionSetProvisioningStatusRequest->nextToken = 'natus';
    $request->maxResults = 'magni';
    $request->nextToken = 'sunt';
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'odit';
    $request->xAmzTarget = ListPermissionSetProvisioningStatusXAmzTargetEnum::SWB_EXTERNAL_SERVICE_LIST_PERMISSION_SET_PROVISIONING_STATUS;

    $response = $sdk->sdk->listPermissionSetProvisioningStatus($request);

    if ($response->listPermissionSetProvisioningStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPermissionSets

Lists the <a>PermissionSet</a>s in an IAM Identity Center instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPermissionSetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListPermissionSetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListPermissionSetsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPermissionSetsRequest();
    $request->listPermissionSetsRequest = new ListPermissionSetsRequest();
    $request->listPermissionSetsRequest->instanceArn = 'ea';
    $request->listPermissionSetsRequest->maxResults = 33222;
    $request->listPermissionSetsRequest->nextToken = 'ab';
    $request->maxResults = 'maiores';
    $request->nextToken = 'quidem';
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'autem';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'nemo';
    $request->xAmzTarget = ListPermissionSetsXAmzTargetEnum::SWB_EXTERNAL_SERVICE_LIST_PERMISSION_SETS;

    $response = $sdk->sdk->listPermissionSets($request);

    if ($response->listPermissionSetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPermissionSetsProvisionedToAccount

Lists all the permission sets that are provisioned to a specified AWS account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPermissionSetsProvisionedToAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListPermissionSetsProvisionedToAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProvisioningStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListPermissionSetsProvisionedToAccountXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPermissionSetsProvisionedToAccountRequest();
    $request->listPermissionSetsProvisionedToAccountRequest = new ListPermissionSetsProvisionedToAccountRequest();
    $request->listPermissionSetsProvisionedToAccountRequest->accountId = 'voluptatibus';
    $request->listPermissionSetsProvisionedToAccountRequest->instanceArn = 'perferendis';
    $request->listPermissionSetsProvisionedToAccountRequest->maxResults = 855804;
    $request->listPermissionSetsProvisionedToAccountRequest->nextToken = 'amet';
    $request->listPermissionSetsProvisionedToAccountRequest->provisioningStatus = ProvisioningStatusEnum::LATEST_PERMISSION_SET_PROVISIONED;
    $request->maxResults = 'cumque';
    $request->nextToken = 'corporis';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'dignissimos';
    $request->xAmzTarget = ListPermissionSetsProvisionedToAccountXAmzTargetEnum::SWB_EXTERNAL_SERVICE_LIST_PERMISSION_SETS_PROVISIONED_TO_ACCOUNT;

    $response = $sdk->sdk->listPermissionSetsProvisionedToAccount($request);

    if ($response->listPermissionSetsProvisionedToAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists the tags that are attached to a specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest->instanceArn = 'eaque';
    $request->listTagsForResourceRequest->nextToken = 'quis';
    $request->listTagsForResourceRequest->resourceArn = 'nesciunt';
    $request->nextToken = 'eos';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'nostrum';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::SWB_EXTERNAL_SERVICE_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## provisionPermissionSet

The process by which a specified permission set is provisioned to the specified target.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionPermissionSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProvisionPermissionSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProvisionTargetTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionPermissionSetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProvisionPermissionSetRequest();
    $request->provisionPermissionSetRequest = new ProvisionPermissionSetRequest();
    $request->provisionPermissionSetRequest->instanceArn = 'hic';
    $request->provisionPermissionSetRequest->permissionSetArn = 'recusandae';
    $request->provisionPermissionSetRequest->targetId = 'omnis';
    $request->provisionPermissionSetRequest->targetType = ProvisionTargetTypeEnum::ALL_PROVISIONED_ACCOUNTS;
    $request->xAmzAlgorithm = 'perspiciatis';
    $request->xAmzContentSha256 = 'voluptatem';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'eaque';
    $request->xAmzTarget = ProvisionPermissionSetXAmzTargetEnum::SWB_EXTERNAL_SERVICE_PROVISION_PERMISSION_SET;

    $response = $sdk->sdk->provisionPermissionSet($request);

    if ($response->provisionPermissionSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putInlinePolicyToPermissionSet

<p>Attaches an inline policy to a permission set.</p> <note> <p>If the permission set is already referenced by one or more account assignments, you will need to call <code> <a>ProvisionPermissionSet</a> </code> after this action to apply the corresponding IAM policy updates to all assigned accounts.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutInlinePolicyToPermissionSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutInlinePolicyToPermissionSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutInlinePolicyToPermissionSetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutInlinePolicyToPermissionSetRequest();
    $request->putInlinePolicyToPermissionSetRequest = new PutInlinePolicyToPermissionSetRequest();
    $request->putInlinePolicyToPermissionSetRequest->inlinePolicy = 'occaecati';
    $request->putInlinePolicyToPermissionSetRequest->instanceArn = 'rerum';
    $request->putInlinePolicyToPermissionSetRequest->permissionSetArn = 'adipisci';
    $request->xAmzAlgorithm = 'asperiores';
    $request->xAmzContentSha256 = 'earum';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->xAmzTarget = PutInlinePolicyToPermissionSetXAmzTargetEnum::SWB_EXTERNAL_SERVICE_PUT_INLINE_POLICY_TO_PERMISSION_SET;

    $response = $sdk->sdk->putInlinePolicyToPermissionSet($request);

    if ($response->putInlinePolicyToPermissionSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putPermissionsBoundaryToPermissionSet

Attaches an AWS managed or customer managed policy to the specified <a>PermissionSet</a> as a permissions boundary.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutPermissionsBoundaryToPermissionSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutPermissionsBoundaryToPermissionSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\PermissionsBoundary;
use \OpenAPI\OpenAPI\Models\Shared\CustomerManagedPolicyReference;
use \OpenAPI\OpenAPI\Models\Operations\PutPermissionsBoundaryToPermissionSetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutPermissionsBoundaryToPermissionSetRequest();
    $request->putPermissionsBoundaryToPermissionSetRequest = new PutPermissionsBoundaryToPermissionSetRequest();
    $request->putPermissionsBoundaryToPermissionSetRequest->instanceArn = 'provident';
    $request->putPermissionsBoundaryToPermissionSetRequest->permissionSetArn = 'nobis';
    $request->putPermissionsBoundaryToPermissionSetRequest->permissionsBoundary = new PermissionsBoundary();
    $request->putPermissionsBoundaryToPermissionSetRequest->permissionsBoundary->customerManagedPolicyReference = new CustomerManagedPolicyReference();
    $request->putPermissionsBoundaryToPermissionSetRequest->permissionsBoundary->customerManagedPolicyReference->name = 'Toby Hahn';
    $request->putPermissionsBoundaryToPermissionSetRequest->permissionsBoundary->customerManagedPolicyReference->path = 'dolorem';
    $request->putPermissionsBoundaryToPermissionSetRequest->permissionsBoundary->managedPolicyArn = 'dolorem';
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->xAmzTarget = PutPermissionsBoundaryToPermissionSetXAmzTargetEnum::SWB_EXTERNAL_SERVICE_PUT_PERMISSIONS_BOUNDARY_TO_PERMISSION_SET;

    $response = $sdk->sdk->putPermissionsBoundaryToPermissionSet($request);

    if ($response->putPermissionsBoundaryToPermissionSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Associates a set of tags with a specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceRequest = new TagResourceRequest();
    $request->tagResourceRequest->instanceArn = 'dignissimos';
    $request->tagResourceRequest->resourceArn = 'reiciendis';
    $request->tagResourceRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'odio';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::SWB_EXTERNAL_SERVICE_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Disassociates a set of tags from a specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceRequest = new UntagResourceRequest();
    $request->untagResourceRequest->instanceArn = 'quaerat';
    $request->untagResourceRequest->resourceArn = 'accusamus';
    $request->untagResourceRequest->tagKeys = [
        'voluptatibus',
        'voluptas',
        'natus',
    ];
    $request->xAmzAlgorithm = 'eos';
    $request->xAmzContentSha256 = 'atque';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'soluta';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::SWB_EXTERNAL_SERVICE_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateInstanceAccessControlAttributeConfiguration

Updates the IAM Identity Center identity store attributes that you can use with the IAM Identity Center instance for attributes-based access control (ABAC). When using an external identity provider as an identity source, you can pass attributes through the SAML assertion as an alternative to configuring attributes from the IAM Identity Center identity store. If a SAML assertion passes any of these attributes, IAM Identity Center replaces the attribute value with the value from the IAM Identity Center identity store. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInstanceAccessControlAttributeConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateInstanceAccessControlAttributeConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\InstanceAccessControlAttributeConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AccessControlAttribute;
use \OpenAPI\OpenAPI\Models\Shared\AccessControlAttributeValue;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInstanceAccessControlAttributeConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateInstanceAccessControlAttributeConfigurationRequest();
    $request->updateInstanceAccessControlAttributeConfigurationRequest = new UpdateInstanceAccessControlAttributeConfigurationRequest();
    $request->updateInstanceAccessControlAttributeConfigurationRequest->instanceAccessControlAttributeConfiguration = new InstanceAccessControlAttributeConfiguration();
    $request->updateInstanceAccessControlAttributeConfigurationRequest->instanceAccessControlAttributeConfiguration->accessControlAttributes = [
        new AccessControlAttribute(),
        new AccessControlAttribute(),
    ];
    $request->updateInstanceAccessControlAttributeConfigurationRequest->instanceArn = 'voluptate';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'nihil';
    $request->xAmzTarget = UpdateInstanceAccessControlAttributeConfigurationXAmzTargetEnum::SWB_EXTERNAL_SERVICE_UPDATE_INSTANCE_ACCESS_CONTROL_ATTRIBUTE_CONFIGURATION;

    $response = $sdk->sdk->updateInstanceAccessControlAttributeConfiguration($request);

    if ($response->updateInstanceAccessControlAttributeConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePermissionSet

Updates an existing permission set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePermissionSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePermissionSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePermissionSetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePermissionSetRequest();
    $request->updatePermissionSetRequest = new UpdatePermissionSetRequest();
    $request->updatePermissionSetRequest->description = 'ipsum';
    $request->updatePermissionSetRequest->instanceArn = 'voluptate';
    $request->updatePermissionSetRequest->permissionSetArn = 'id';
    $request->updatePermissionSetRequest->relayState = 'saepe';
    $request->updatePermissionSetRequest->sessionDuration = 'eius';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'optio';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'ad';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = UpdatePermissionSetXAmzTargetEnum::SWB_EXTERNAL_SERVICE_UPDATE_PERMISSION_SET;

    $response = $sdk->sdk->updatePermissionSet($request);

    if ($response->updatePermissionSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
