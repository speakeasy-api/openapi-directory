<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETAcceptTransitGatewayMulticastDomainAssociationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETAcceptTransitGatewayMulticastDomainAssociationsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAcceptTransitGatewayMulticastDomainAssociationsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAcceptTransitGatewayMulticastDomainAssociationsRequest();
    $request->action = GETAcceptTransitGatewayMulticastDomainAssociationsActionEnum::ACCEPT_TRANSIT_GATEWAY_MULTICAST_DOMAIN_ASSOCIATIONS;
    $request->dryRun = false;
    $request->subnetIds = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->transitGatewayAttachmentId = 'unde';
    $request->transitGatewayMulticastDomainId = 'nulla';
    $request->version = GETAcceptTransitGatewayMulticastDomainAssociationsVersionEnum::TWO_THOUSAND_AND_SIXTEEN1115;
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'iure';

    $response = $sdk->getAcceptTransitGatewayMulticastDomainAssociations($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->