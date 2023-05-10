<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCertificateAuthorityRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateCertificateAuthorityRequest;
use \OpenAPI\OpenAPI\Models\Shared\CertificateAuthorityConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CsrExtensions;
use \OpenAPI\OpenAPI\Models\Shared\KeyUsage;
use \OpenAPI\OpenAPI\Models\Shared\AccessDescription;
use \OpenAPI\OpenAPI\Models\Shared\GeneralName;
use \OpenAPI\OpenAPI\Models\Shared\Asn1Subject;
use \OpenAPI\OpenAPI\Models\Shared\CustomAttribute;
use \OpenAPI\OpenAPI\Models\Shared\EdiPartyName;
use \OpenAPI\OpenAPI\Models\Shared\OtherName;
use \OpenAPI\OpenAPI\Models\Shared\AccessMethod;
use \OpenAPI\OpenAPI\Models\Shared\AccessMethodTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\KeyAlgorithmEnum;
use \OpenAPI\OpenAPI\Models\Shared\SigningAlgorithmEnum;
use \OpenAPI\OpenAPI\Models\Shared\CertificateAuthorityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\KeyStorageSecurityStandardEnum;
use \OpenAPI\OpenAPI\Models\Shared\RevocationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CrlConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\S3ObjectAclEnum;
use \OpenAPI\OpenAPI\Models\Shared\OcspConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\CertificateAuthorityUsageModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateCertificateAuthorityXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCertificateAuthorityRequest();
    $request->createCertificateAuthorityRequest = new CreateCertificateAuthorityRequest();
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration = new CertificateAuthorityConfiguration();
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->csrExtensions = new CsrExtensions();
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->csrExtensions->keyUsage = new KeyUsage();
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->csrExtensions->keyUsage->crlSign = false;
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->csrExtensions->keyUsage->dataEncipherment = false;
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->csrExtensions->keyUsage->decipherOnly = false;
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->csrExtensions->keyUsage->digitalSignature = false;
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->csrExtensions->keyUsage->encipherOnly = false;
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->csrExtensions->keyUsage->keyAgreement = false;
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->csrExtensions->keyUsage->keyCertSign = false;
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->csrExtensions->keyUsage->keyEncipherment = false;
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->csrExtensions->keyUsage->nonRepudiation = false;
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->csrExtensions->subjectInformationAccess = [
        new AccessDescription(),
        new AccessDescription(),
        new AccessDescription(),
    ];
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->keyAlgorithm = KeyAlgorithmEnum::EC_PRIME256V1;
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->signingAlgorithm = SigningAlgorithmEnum::SHA384_WITHRSA;
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->subject = new Asn1Subject();
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->subject->commonName = 'quibusdam';
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->subject->country = 'Mozambique';
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->subject->customAttributes = [
        new CustomAttribute(),
        new CustomAttribute(),
        new CustomAttribute(),
        new CustomAttribute(),
    ];
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->subject->distinguishedNameQualifier = 'corrupti';
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->subject->generationQualifier = 'illum';
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->subject->givenName = 'vel';
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->subject->initials = 'error';
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->subject->locality = 'deserunt';
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->subject->organization = 'suscipit';
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->subject->organizationalUnit = 'iure';
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->subject->pseudonym = 'magnam';
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->subject->serialNumber = 'debitis';
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->subject->state = 'ipsa';
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->subject->surname = 'delectus';
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->subject->title = 'Mrs.';
    $request->createCertificateAuthorityRequest->certificateAuthorityType = CertificateAuthorityTypeEnum::ROOT;
    $request->createCertificateAuthorityRequest->idempotencyToken = 'molestiae';
    $request->createCertificateAuthorityRequest->keyStorageSecurityStandard = KeyStorageSecurityStandardEnum::FIPS1402_LEVEL3_OR_HIGHER;
    $request->createCertificateAuthorityRequest->revocationConfiguration = new RevocationConfiguration();
    $request->createCertificateAuthorityRequest->revocationConfiguration->crlConfiguration = new CrlConfiguration();
    $request->createCertificateAuthorityRequest->revocationConfiguration->crlConfiguration->customCname = 'placeat';
    $request->createCertificateAuthorityRequest->revocationConfiguration->crlConfiguration->enabled = false;
    $request->createCertificateAuthorityRequest->revocationConfiguration->crlConfiguration->expirationInDays = 528895;
    $request->createCertificateAuthorityRequest->revocationConfiguration->crlConfiguration->s3BucketName = 'iusto';
    $request->createCertificateAuthorityRequest->revocationConfiguration->crlConfiguration->s3ObjectAcl = S3ObjectAclEnum::BUCKET_OWNER_FULL_CONTROL;
    $request->createCertificateAuthorityRequest->revocationConfiguration->ocspConfiguration = new OcspConfiguration();
    $request->createCertificateAuthorityRequest->revocationConfiguration->ocspConfiguration->enabled = false;
    $request->createCertificateAuthorityRequest->revocationConfiguration->ocspConfiguration->ocspCustomCname = 'nisi';
    $request->createCertificateAuthorityRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createCertificateAuthorityRequest->usageMode = CertificateAuthorityUsageModeEnum::SHORT_LIVED_CERTIFICATE;
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'repellendus';
    $request->xAmzTarget = CreateCertificateAuthorityXAmzTargetEnum::ACM_PRIVATE_CA_CREATE_CERTIFICATE_AUTHORITY;

    $response = $sdk->createCertificateAuthority($request);

    if ($response->createCertificateAuthorityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->