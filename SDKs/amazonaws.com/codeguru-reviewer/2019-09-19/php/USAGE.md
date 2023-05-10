<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateRepositoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateRepositoryRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AssociateRepositoryRequestBodyKMSKeyDetails;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionOptionEnum;
use \OpenAPI\OpenAPI\Models\Operations\AssociateRepositoryRequestBodyRepository;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartySourceRepository;
use \OpenAPI\OpenAPI\Models\Shared\CodeCommitRepository;
use \OpenAPI\OpenAPI\Models\Shared\S3Repository;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateRepositoryRequest();
    $request->requestBody = new AssociateRepositoryRequestBody();
    $request->requestBody->clientRequestToken = 'corrupti';
    $request->requestBody->kmsKeyDetails = new AssociateRepositoryRequestBodyKMSKeyDetails();
    $request->requestBody->kmsKeyDetails->encryptionOption = EncryptionOptionEnum::CUSTOMER_MANAGED_CMK;
    $request->requestBody->kmsKeyDetails->kmsKeyId = 'distinctio';
    $request->requestBody->repository = new AssociateRepositoryRequestBodyRepository();
    $request->requestBody->repository->bitbucket = new ThirdPartySourceRepository();
    $request->requestBody->repository->bitbucket->connectionArn = 'quibusdam';
    $request->requestBody->repository->bitbucket->name = 'Ismael Little';
    $request->requestBody->repository->bitbucket->owner = 'error';
    $request->requestBody->repository->codeCommit = new CodeCommitRepository();
    $request->requestBody->repository->codeCommit->name = 'Rick Kertzmann';
    $request->requestBody->repository->gitHubEnterpriseServer = new ThirdPartySourceRepository();
    $request->requestBody->repository->gitHubEnterpriseServer->connectionArn = 'ipsa';
    $request->requestBody->repository->gitHubEnterpriseServer->name = 'Ricky Hoppe';
    $request->requestBody->repository->gitHubEnterpriseServer->owner = 'placeat';
    $request->requestBody->repository->s3Bucket = new S3Repository();
    $request->requestBody->repository->s3Bucket->bucketName = 'voluptatum';
    $request->requestBody->repository->s3Bucket->name = 'Miriam Huel';
    $request->requestBody->tags = [
        'quis' => 'veritatis',
    ];
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'repellendus';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'odit';

    $response = $sdk->associateRepository($request);

    if ($response->associateRepositoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->