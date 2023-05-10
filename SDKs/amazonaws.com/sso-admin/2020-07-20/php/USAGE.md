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