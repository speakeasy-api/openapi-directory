# SDK

## Overview

<fullname>Certificate Manager</fullname> <p>You can use Certificate Manager (ACM) to manage SSL/TLS certificates for your Amazon Web Services-based websites and applications. For more information about using ACM, see the <a href="https://docs.aws.amazon.com/acm/latest/userguide/">Certificate Manager User Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/acm/>
### Available Operations

* [addTagsToCertificate](#addtagstocertificate) - <p>Adds one or more tags to an ACM certificate. Tags are labels that you can use to identify and organize your Amazon Web Services resources. Each tag consists of a <code>key</code> and an optional <code>value</code>. You specify the certificate on input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair. </p> <p>You can apply a tag to just one certificate if you want to identify a specific characteristic of that certificate, or you can apply the same tag to multiple certificates if you want to filter for a common relationship among those certificates. Similarly, you can apply the same tag to multiple resources if you want to specify a relationship among those resources. For example, you can add the same tag to an ACM certificate and an Elastic Load Balancing load balancer to indicate that they are both used by the same website. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/tags.html">Tagging ACM certificates</a>. </p> <p>To remove one or more tags, use the <a>RemoveTagsFromCertificate</a> action. To view all of the tags that have been applied to the certificate, use the <a>ListTagsForCertificate</a> action. </p>
* [deleteCertificate](#deletecertificate) - <p>Deletes a certificate and its associated private key. If this action succeeds, the certificate no longer appears in the list that can be displayed by calling the <a>ListCertificates</a> action or be retrieved by calling the <a>GetCertificate</a> action. The certificate will not be available for use by Amazon Web Services services integrated with ACM. </p> <note> <p>You cannot delete an ACM certificate that is being used by another Amazon Web Services service. To delete a certificate that is in use, the certificate association must first be removed.</p> </note>
* [describeCertificate](#describecertificate) - <p>Returns detailed metadata about the specified ACM certificate.</p> <p>If you have just created a certificate using the <code>RequestCertificate</code> action, there is a delay of several seconds before you can retrieve information about it.</p>
* [exportCertificate](#exportcertificate) - <p>Exports a private certificate issued by a private certificate authority (CA) for use anywhere. The exported file contains the certificate, the certificate chain, and the encrypted private 2048-bit RSA key associated with the public key that is embedded in the certificate. For security, you must assign a passphrase for the private key when exporting it. </p> <p>For information about exporting and formatting a certificate using the ACM console or CLI, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-export-private.html">Export a Private Certificate</a>.</p>
* [getAccountConfiguration](#getaccountconfiguration) - Returns the account configuration options associated with an Amazon Web Services account.
* [getCertificate](#getcertificate) - Retrieves an Amazon-issued certificate and its certificate chain. The chain consists of the certificate of the issuing CA and the intermediate certificates of any other subordinate CAs. All of the certificates are base64 encoded. You can use <a href="https://wiki.openssl.org/index.php/Command_Line_Utilities">OpenSSL</a> to decode the certificates and inspect individual fields.
* [importCertificate](#importcertificate) - <p>Imports a certificate into Certificate Manager (ACM) to use with services that are integrated with ACM. Note that <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-services.html">integrated services</a> allow only certificate types and keys they support to be associated with their resources. Further, their support differs depending on whether the certificate is imported into IAM or into ACM. For more information, see the documentation for each service. For more information about importing certificates into ACM, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html">Importing Certificates</a> in the <i>Certificate Manager User Guide</i>. </p> <note> <p>ACM does not provide <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for certificates that you import.</p> </note> <p>Note the following guidelines when importing third party certificates:</p> <ul> <li> <p>You must enter the private key that matches the certificate you are importing.</p> </li> <li> <p>The private key must be unencrypted. You cannot import a private key that is protected by a password or a passphrase.</p> </li> <li> <p>The private key must be no larger than 5 KB (5,120 bytes).</p> </li> <li> <p>If the certificate you are importing is not self-signed, you must enter its certificate chain.</p> </li> <li> <p>If a certificate chain is included, the issuer must be the subject of one of the certificates in the chain.</p> </li> <li> <p>The certificate, private key, and certificate chain must be PEM-encoded.</p> </li> <li> <p>The current time must be between the <code>Not Before</code> and <code>Not After</code> certificate fields.</p> </li> <li> <p>The <code>Issuer</code> field must not be empty.</p> </li> <li> <p>The OCSP authority URL, if present, must not exceed 1000 characters.</p> </li> <li> <p>To import a new certificate, omit the <code>CertificateArn</code> argument. Include this argument only when you want to replace a previously imported certificate.</p> </li> <li> <p>When you import a certificate by using the CLI, you must specify the certificate, the certificate chain, and the private key by their file names preceded by <code>fileb://</code>. For example, you can specify a certificate saved in the <code>C:\temp</code> folder as <code>fileb://C:\temp\certificate_to_import.pem</code>. If you are making an HTTP or HTTPS Query request, include these arguments as BLOBs. </p> </li> <li> <p>When you import a certificate by using an SDK, you must specify the certificate, the certificate chain, and the private key files in the manner required by the programming language you're using. </p> </li> <li> <p>The cryptographic algorithm of an imported certificate must match the algorithm of the signing CA. For example, if the signing CA key type is RSA, then the certificate key type must also be RSA.</p> </li> </ul> <p>This operation returns the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the imported certificate.</p>
* [listCertificates](#listcertificates) - Retrieves a list of certificate ARNs and domain names. You can request that only certificates that match a specific status be listed. You can also filter by specific attributes of the certificate. Default filtering returns only <code>RSA_2048</code> certificates. For more information, see <a>Filters</a>.
* [listTagsForCertificate](#listtagsforcertificate) - Lists the tags that have been applied to the ACM certificate. Use the certificate's Amazon Resource Name (ARN) to specify the certificate. To add a tag to an ACM certificate, use the <a>AddTagsToCertificate</a> action. To delete a tag, use the <a>RemoveTagsFromCertificate</a> action. 
* [putAccountConfiguration](#putaccountconfiguration) - <p>Adds or modifies account-level configurations in ACM. </p> <p>The supported configuration option is <code>DaysBeforeExpiry</code>. This option specifies the number of days prior to certificate expiration when ACM starts generating <code>EventBridge</code> events. ACM sends one event per day per certificate until the certificate expires. By default, accounts receive events starting 45 days before certificate expiration.</p>
* [removeTagsFromCertificate](#removetagsfromcertificate) - <p>Remove one or more tags from an ACM certificate. A tag consists of a key-value pair. If you do not specify the value portion of the tag when calling this function, the tag will be removed regardless of value. If you specify a value, the tag is removed only if it is associated with the specified value. </p> <p>To add tags to a certificate, use the <a>AddTagsToCertificate</a> action. To view all of the tags that have been applied to a specific ACM certificate, use the <a>ListTagsForCertificate</a> action. </p>
* [renewCertificate](#renewcertificate) - Renews an eligible ACM certificate. At this time, only exported private certificates can be renewed with this operation. In order to renew your Amazon Web Services Private CA certificates with ACM, you must first <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaPermissions.html">grant the ACM service principal permission to do so</a>. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/manual-renewal.html">Testing Managed Renewal</a> in the ACM User Guide.
* [requestCertificate](#requestcertificate) - <p>Requests an ACM certificate for use with other Amazon Web Services services. To request an ACM certificate, you must specify a fully qualified domain name (FQDN) in the <code>DomainName</code> parameter. You can also specify additional FQDNs in the <code>SubjectAlternativeNames</code> parameter. </p> <p>If you are requesting a private certificate, domain validation is not required. If you are requesting a public certificate, each domain name that you specify must be validated to verify that you own or control the domain. You can use <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-dns.html">DNS validation</a> or <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-email.html">email validation</a>. We recommend that you use DNS validation. ACM issues public certificates after receiving approval from the domain owner. </p> <note> <p>ACM behavior differs from the <a href="https://datatracker.ietf.org/doc/html/rfc6125#appendix-B.2">RFC 6125</a> specification of the certificate validation process. ACM first checks for a Subject Alternative Name, and, if it finds one, ignores the common name (CN).</p> </note> <p>After successful completion of the <code>RequestCertificate</code> action, there is a delay of several seconds before you can retrieve information about the new certificate.</p>
* [resendValidationEmail](#resendvalidationemail) - Resends the email that requests domain ownership validation. The domain owner or an authorized representative must approve the ACM certificate before it can be issued. The certificate can be approved by clicking a link in the mail to navigate to the Amazon certificate approval website and then clicking <b>I Approve</b>. However, the validation email can be blocked by spam filters. Therefore, if you do not receive the original mail, you can request that the mail be resent within 72 hours of requesting the ACM certificate. If more than 72 hours have elapsed since your original request or since your last attempt to resend validation mail, you must request a new certificate. For more information about setting up your contact email addresses, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/setup-email.html">Configure Email for your Domain</a>. 
* [updateCertificateOptions](#updatecertificateoptions) - Updates a certificate. Currently, you can use this function to specify whether to opt in to or out of recording your certificate in a certificate transparency log. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-bestpractices.html#best-practices-transparency"> Opting Out of Certificate Transparency Logging</a>. 

## addTagsToCertificate

<p>Adds one or more tags to an ACM certificate. Tags are labels that you can use to identify and organize your Amazon Web Services resources. Each tag consists of a <code>key</code> and an optional <code>value</code>. You specify the certificate on input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair. </p> <p>You can apply a tag to just one certificate if you want to identify a specific characteristic of that certificate, or you can apply the same tag to multiple certificates if you want to filter for a common relationship among those certificates. Similarly, you can apply the same tag to multiple resources if you want to specify a relationship among those resources. For example, you can add the same tag to an ACM certificate and an Elastic Load Balancing load balancer to indicate that they are both used by the same website. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/tags.html">Tagging ACM certificates</a>. </p> <p>To remove one or more tags, use the <a>RemoveTagsFromCertificate</a> action. To view all of the tags that have been applied to the certificate, use the <a>ListTagsForCertificate</a> action. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddTagsToCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddTagsToCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\AddTagsToCertificateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddTagsToCertificateRequest();
    $request->addTagsToCertificateRequest = new AddTagsToCertificateRequest();
    $request->addTagsToCertificateRequest->certificateArn = 'error';
    $request->addTagsToCertificateRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzTarget = AddTagsToCertificateXAmzTargetEnum::CERTIFICATE_MANAGER_ADD_TAGS_TO_CERTIFICATE;

    $response = $sdk->sdk->addTagsToCertificate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCertificate

<p>Deletes a certificate and its associated private key. If this action succeeds, the certificate no longer appears in the list that can be displayed by calling the <a>ListCertificates</a> action or be retrieved by calling the <a>GetCertificate</a> action. The certificate will not be available for use by Amazon Web Services services integrated with ACM. </p> <note> <p>You cannot delete an ACM certificate that is being used by another Amazon Web Services service. To delete a certificate that is in use, the certificate association must first be removed.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCertificateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCertificateRequest();
    $request->deleteCertificateRequest = new DeleteCertificateRequest();
    $request->deleteCertificateRequest->certificateArn = 'suscipit';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'placeat';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'nisi';
    $request->xAmzTarget = DeleteCertificateXAmzTargetEnum::CERTIFICATE_MANAGER_DELETE_CERTIFICATE;

    $response = $sdk->sdk->deleteCertificate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeCertificate

<p>Returns detailed metadata about the specified ACM certificate.</p> <p>If you have just created a certificate using the <code>RequestCertificate</code> action, there is a delay of several seconds before you can retrieve information about it.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCertificateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeCertificateRequest();
    $request->describeCertificateRequest = new DescribeCertificateRequest();
    $request->describeCertificateRequest->certificateArn = 'recusandae';
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = DescribeCertificateXAmzTargetEnum::CERTIFICATE_MANAGER_DESCRIBE_CERTIFICATE;

    $response = $sdk->sdk->describeCertificate($request);

    if ($response->describeCertificateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportCertificate

<p>Exports a private certificate issued by a private certificate authority (CA) for use anywhere. The exported file contains the certificate, the certificate chain, and the encrypted private 2048-bit RSA key associated with the public key that is embedded in the certificate. For security, you must assign a passphrase for the private key when exporting it. </p> <p>For information about exporting and formatting a certificate using the ACM console or CLI, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-export-private.html">Export a Private Certificate</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ExportCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExportCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportCertificateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportCertificateRequest();
    $request->exportCertificateRequest = new ExportCertificateRequest();
    $request->exportCertificateRequest->certificateArn = 'repellendus';
    $request->exportCertificateRequest->passphrase = 'sapiente';
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'quod';
    $request->xAmzTarget = ExportCertificateXAmzTargetEnum::CERTIFICATE_MANAGER_EXPORT_CERTIFICATE;

    $response = $sdk->sdk->exportCertificate($request);

    if ($response->exportCertificateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountConfiguration

Returns the account configuration options associated with an Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountConfigurationRequest();
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'nam';
    $request->xAmzTarget = GetAccountConfigurationXAmzTargetEnum::CERTIFICATE_MANAGER_GET_ACCOUNT_CONFIGURATION;

    $response = $sdk->sdk->getAccountConfiguration($request);

    if ($response->getAccountConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCertificate

Retrieves an Amazon-issued certificate and its certificate chain. The chain consists of the certificate of the issuing CA and the intermediate certificates of any other subordinate CAs. All of the certificates are base64 encoded. You can use <a href="https://wiki.openssl.org/index.php/Command_Line_Utilities">OpenSSL</a> to decode the certificates and inspect individual fields.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCertificateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCertificateRequest();
    $request->getCertificateRequest = new GetCertificateRequest();
    $request->getCertificateRequest->certificateArn = 'officia';
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'optio';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'beatae';
    $request->xAmzTarget = GetCertificateXAmzTargetEnum::CERTIFICATE_MANAGER_GET_CERTIFICATE;

    $response = $sdk->sdk->getCertificate($request);

    if ($response->getCertificateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importCertificate

<p>Imports a certificate into Certificate Manager (ACM) to use with services that are integrated with ACM. Note that <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-services.html">integrated services</a> allow only certificate types and keys they support to be associated with their resources. Further, their support differs depending on whether the certificate is imported into IAM or into ACM. For more information, see the documentation for each service. For more information about importing certificates into ACM, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html">Importing Certificates</a> in the <i>Certificate Manager User Guide</i>. </p> <note> <p>ACM does not provide <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for certificates that you import.</p> </note> <p>Note the following guidelines when importing third party certificates:</p> <ul> <li> <p>You must enter the private key that matches the certificate you are importing.</p> </li> <li> <p>The private key must be unencrypted. You cannot import a private key that is protected by a password or a passphrase.</p> </li> <li> <p>The private key must be no larger than 5 KB (5,120 bytes).</p> </li> <li> <p>If the certificate you are importing is not self-signed, you must enter its certificate chain.</p> </li> <li> <p>If a certificate chain is included, the issuer must be the subject of one of the certificates in the chain.</p> </li> <li> <p>The certificate, private key, and certificate chain must be PEM-encoded.</p> </li> <li> <p>The current time must be between the <code>Not Before</code> and <code>Not After</code> certificate fields.</p> </li> <li> <p>The <code>Issuer</code> field must not be empty.</p> </li> <li> <p>The OCSP authority URL, if present, must not exceed 1000 characters.</p> </li> <li> <p>To import a new certificate, omit the <code>CertificateArn</code> argument. Include this argument only when you want to replace a previously imported certificate.</p> </li> <li> <p>When you import a certificate by using the CLI, you must specify the certificate, the certificate chain, and the private key by their file names preceded by <code>fileb://</code>. For example, you can specify a certificate saved in the <code>C:\temp</code> folder as <code>fileb://C:\temp\certificate_to_import.pem</code>. If you are making an HTTP or HTTPS Query request, include these arguments as BLOBs. </p> </li> <li> <p>When you import a certificate by using an SDK, you must specify the certificate, the certificate chain, and the private key files in the manner required by the programming language you're using. </p> </li> <li> <p>The cryptographic algorithm of an imported certificate must match the algorithm of the signing CA. For example, if the signing CA key type is RSA, then the certificate key type must also be RSA.</p> </li> </ul> <p>This operation returns the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the imported certificate.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ImportCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImportCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\ImportCertificateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportCertificateRequest();
    $request->importCertificateRequest = new ImportCertificateRequest();
    $request->importCertificateRequest->certificate = 'commodi';
    $request->importCertificateRequest->certificateArn = 'molestiae';
    $request->importCertificateRequest->certificateChain = 'modi';
    $request->importCertificateRequest->privateKey = 'qui';
    $request->importCertificateRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'ad';
    $request->xAmzTarget = ImportCertificateXAmzTargetEnum::CERTIFICATE_MANAGER_IMPORT_CERTIFICATE;

    $response = $sdk->sdk->importCertificate($request);

    if ($response->importCertificateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCertificates

Retrieves a list of certificate ARNs and domain names. You can request that only certificates that match a specific status be listed. You can also filter by specific attributes of the certificate. Default filtering returns only <code>RSA_2048</code> certificates. For more information, see <a>Filters</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCertificatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListCertificatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\CertificateStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Filters;
use \OpenAPI\OpenAPI\Models\Shared\ExtendedKeyUsageNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\KeyAlgorithmEnum;
use \OpenAPI\OpenAPI\Models\Shared\KeyUsageNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListCertificatesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCertificatesRequest();
    $request->listCertificatesRequest = new ListCertificatesRequest();
    $request->listCertificatesRequest->certificateStatuses = [
        CertificateStatusEnum::ISSUED,
        CertificateStatusEnum::VALIDATION_TIMED_OUT,
        CertificateStatusEnum::ISSUED,
    ];
    $request->listCertificatesRequest->includes = new Filters();
    $request->listCertificatesRequest->includes->extendedKeyUsage = [
        ExtendedKeyUsageNameEnum::TIME_STAMPING,
        ExtendedKeyUsageNameEnum::CUSTOM,
        ExtendedKeyUsageNameEnum::NONE,
    ];
    $request->listCertificatesRequest->includes->keyTypes = [
        KeyAlgorithmEnum::RSA4096,
        KeyAlgorithmEnum::RSA3072,
        KeyAlgorithmEnum::EC_PRIME256V1,
    ];
    $request->listCertificatesRequest->includes->keyUsage = [
        KeyUsageNameEnum::ANY,
        KeyUsageNameEnum::ENCIPHER_ONLY,
    ];
    $request->listCertificatesRequest->maxItems = 99280;
    $request->listCertificatesRequest->nextToken = 'ipsa';
    $request->listCertificatesRequest->sortBy = SortByEnum::CREATED_AT;
    $request->listCertificatesRequest->sortOrder = SortOrderEnum::DESCENDING;
    $request->maxItems = 'est';
    $request->nextToken = 'mollitia';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = ListCertificatesXAmzTargetEnum::CERTIFICATE_MANAGER_LIST_CERTIFICATES;

    $response = $sdk->sdk->listCertificates($request);

    if ($response->listCertificatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForCertificate

Lists the tags that have been applied to the ACM certificate. Use the certificate's Amazon Resource Name (ARN) to specify the certificate. To add a tag to an ACM certificate, use the <a>AddTagsToCertificate</a> action. To delete a tag, use the <a>RemoveTagsFromCertificate</a> action. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForCertificateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForCertificateRequest();
    $request->listTagsForCertificateRequest = new ListTagsForCertificateRequest();
    $request->listTagsForCertificateRequest->certificateArn = 'omnis';
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'doloribus';
    $request->xAmzTarget = ListTagsForCertificateXAmzTargetEnum::CERTIFICATE_MANAGER_LIST_TAGS_FOR_CERTIFICATE;

    $response = $sdk->sdk->listTagsForCertificate($request);

    if ($response->listTagsForCertificateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putAccountConfiguration

<p>Adds or modifies account-level configurations in ACM. </p> <p>The supported configuration option is <code>DaysBeforeExpiry</code>. This option specifies the number of days prior to certificate expiration when ACM starts generating <code>EventBridge</code> events. ACM sends one event per day per certificate until the certificate expires. By default, accounts receive events starting 45 days before certificate expiration.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutAccountConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutAccountConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExpiryEventsConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\PutAccountConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutAccountConfigurationRequest();
    $request->putAccountConfigurationRequest = new PutAccountConfigurationRequest();
    $request->putAccountConfigurationRequest->expiryEvents = new ExpiryEventsConfiguration();
    $request->putAccountConfigurationRequest->expiryEvents->daysBeforeExpiry = 958950;
    $request->putAccountConfigurationRequest->idempotencyToken = 'architecto';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'repellat';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->xAmzTarget = PutAccountConfigurationXAmzTargetEnum::CERTIFICATE_MANAGER_PUT_ACCOUNT_CONFIGURATION;

    $response = $sdk->sdk->putAccountConfiguration($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeTagsFromCertificate

<p>Remove one or more tags from an ACM certificate. A tag consists of a key-value pair. If you do not specify the value portion of the tag when calling this function, the tag will be removed regardless of value. If you specify a value, the tag is removed only if it is associated with the specified value. </p> <p>To add tags to a certificate, use the <a>AddTagsToCertificate</a> action. To view all of the tags that have been applied to a specific ACM certificate, use the <a>ListTagsForCertificate</a> action. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveTagsFromCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\RemoveTagsFromCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\RemoveTagsFromCertificateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveTagsFromCertificateRequest();
    $request->removeTagsFromCertificateRequest = new RemoveTagsFromCertificateRequest();
    $request->removeTagsFromCertificateRequest->certificateArn = 'numquam';
    $request->removeTagsFromCertificateRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'quam';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'quia';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'vitae';
    $request->xAmzTarget = RemoveTagsFromCertificateXAmzTargetEnum::CERTIFICATE_MANAGER_REMOVE_TAGS_FROM_CERTIFICATE;

    $response = $sdk->sdk->removeTagsFromCertificate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## renewCertificate

Renews an eligible ACM certificate. At this time, only exported private certificates can be renewed with this operation. In order to renew your Amazon Web Services Private CA certificates with ACM, you must first <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaPermissions.html">grant the ACM service principal permission to do so</a>. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/manual-renewal.html">Testing Managed Renewal</a> in the ACM User Guide.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RenewCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\RenewCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\RenewCertificateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RenewCertificateRequest();
    $request->renewCertificateRequest = new RenewCertificateRequest();
    $request->renewCertificateRequest->certificateArn = 'laborum';
    $request->xAmzAlgorithm = 'animi';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'sequi';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = RenewCertificateXAmzTargetEnum::CERTIFICATE_MANAGER_RENEW_CERTIFICATE;

    $response = $sdk->sdk->renewCertificate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## requestCertificate

<p>Requests an ACM certificate for use with other Amazon Web Services services. To request an ACM certificate, you must specify a fully qualified domain name (FQDN) in the <code>DomainName</code> parameter. You can also specify additional FQDNs in the <code>SubjectAlternativeNames</code> parameter. </p> <p>If you are requesting a private certificate, domain validation is not required. If you are requesting a public certificate, each domain name that you specify must be validated to verify that you own or control the domain. You can use <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-dns.html">DNS validation</a> or <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-email.html">email validation</a>. We recommend that you use DNS validation. ACM issues public certificates after receiving approval from the domain owner. </p> <note> <p>ACM behavior differs from the <a href="https://datatracker.ietf.org/doc/html/rfc6125#appendix-B.2">RFC 6125</a> specification of the certificate validation process. ACM first checks for a Subject Alternative Name, and, if it finds one, ignores the common name (CN).</p> </note> <p>After successful completion of the <code>RequestCertificate</code> action, there is a delay of several seconds before you can retrieve information about the new certificate.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RequestCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\RequestCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\DomainValidationOption;
use \OpenAPI\OpenAPI\Models\Shared\KeyAlgorithmEnum;
use \OpenAPI\OpenAPI\Models\Shared\CertificateOptions;
use \OpenAPI\OpenAPI\Models\Shared\CertificateTransparencyLoggingPreferenceEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\ValidationMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\RequestCertificateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RequestCertificateRequest();
    $request->requestCertificateRequest = new RequestCertificateRequest();
    $request->requestCertificateRequest->certificateAuthorityArn = 'id';
    $request->requestCertificateRequest->domainName = 'possimus';
    $request->requestCertificateRequest->domainValidationOptions = [
        new DomainValidationOption(),
    ];
    $request->requestCertificateRequest->idempotencyToken = 'quasi';
    $request->requestCertificateRequest->keyAlgorithm = KeyAlgorithmEnum::EC_PRIME256V1;
    $request->requestCertificateRequest->options = new CertificateOptions();
    $request->requestCertificateRequest->options->certificateTransparencyLoggingPreference = CertificateTransparencyLoggingPreferenceEnum::DISABLED;
    $request->requestCertificateRequest->subjectAlternativeNames = [
        'quasi',
        'reiciendis',
        'voluptatibus',
    ];
    $request->requestCertificateRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->requestCertificateRequest->validationMethod = ValidationMethodEnum::EMAIL;
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = RequestCertificateXAmzTargetEnum::CERTIFICATE_MANAGER_REQUEST_CERTIFICATE;

    $response = $sdk->sdk->requestCertificate($request);

    if ($response->requestCertificateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resendValidationEmail

Resends the email that requests domain ownership validation. The domain owner or an authorized representative must approve the ACM certificate before it can be issued. The certificate can be approved by clicking a link in the mail to navigate to the Amazon certificate approval website and then clicking <b>I Approve</b>. However, the validation email can be blocked by spam filters. Therefore, if you do not receive the original mail, you can request that the mail be resent within 72 hours of requesting the ACM certificate. If more than 72 hours have elapsed since your original request or since your last attempt to resend validation mail, you must request a new certificate. For more information about setting up your contact email addresses, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/setup-email.html">Configure Email for your Domain</a>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ResendValidationEmailRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResendValidationEmailRequest;
use \OpenAPI\OpenAPI\Models\Operations\ResendValidationEmailXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResendValidationEmailRequest();
    $request->resendValidationEmailRequest = new ResendValidationEmailRequest();
    $request->resendValidationEmailRequest->certificateArn = 'doloremque';
    $request->resendValidationEmailRequest->domain = 'reprehenderit';
    $request->resendValidationEmailRequest->validationDomain = 'ut';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'dolore';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'harum';
    $request->xAmzTarget = ResendValidationEmailXAmzTargetEnum::CERTIFICATE_MANAGER_RESEND_VALIDATION_EMAIL;

    $response = $sdk->sdk->resendValidationEmail($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCertificateOptions

Updates a certificate. Currently, you can use this function to specify whether to opt in to or out of recording your certificate in a certificate transparency log. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-bestpractices.html#best-practices-transparency"> Opting Out of Certificate Transparency Logging</a>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCertificateOptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCertificateOptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CertificateOptions;
use \OpenAPI\OpenAPI\Models\Shared\CertificateTransparencyLoggingPreferenceEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCertificateOptionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCertificateOptionsRequest();
    $request->updateCertificateOptionsRequest = new UpdateCertificateOptionsRequest();
    $request->updateCertificateOptionsRequest->certificateArn = 'enim';
    $request->updateCertificateOptionsRequest->options = new CertificateOptions();
    $request->updateCertificateOptionsRequest->options->certificateTransparencyLoggingPreference = CertificateTransparencyLoggingPreferenceEnum::DISABLED;
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'molestias';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = UpdateCertificateOptionsXAmzTargetEnum::CERTIFICATE_MANAGER_UPDATE_CERTIFICATE_OPTIONS;

    $response = $sdk->sdk->updateCertificateOptions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
