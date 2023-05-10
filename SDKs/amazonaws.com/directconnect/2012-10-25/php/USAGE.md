<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AcceptDirectConnectGatewayAssociationProposalRequest;
use \OpenAPI\OpenAPI\Models\Shared\AcceptDirectConnectGatewayAssociationProposalRequest;
use \OpenAPI\OpenAPI\Models\Shared\RouteFilterPrefix;
use \OpenAPI\OpenAPI\Models\Operations\AcceptDirectConnectGatewayAssociationProposalXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcceptDirectConnectGatewayAssociationProposalRequest();
    $request->acceptDirectConnectGatewayAssociationProposalRequest = new AcceptDirectConnectGatewayAssociationProposalRequest();
    $request->acceptDirectConnectGatewayAssociationProposalRequest->associatedGatewayOwnerAccount = 'corrupti';
    $request->acceptDirectConnectGatewayAssociationProposalRequest->directConnectGatewayId = 'provident';
    $request->acceptDirectConnectGatewayAssociationProposalRequest->overrideAllowedPrefixesToDirectConnectGateway = [
        new RouteFilterPrefix(),
        new RouteFilterPrefix(),
        new RouteFilterPrefix(),
    ];
    $request->acceptDirectConnectGatewayAssociationProposalRequest->proposalId = 'quibusdam';
    $request->xAmzAlgorithm = 'unde';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = AcceptDirectConnectGatewayAssociationProposalXAmzTargetEnum::OVERTURE_SERVICE_ACCEPT_DIRECT_CONNECT_GATEWAY_ASSOCIATION_PROPOSAL;

    $response = $sdk->acceptDirectConnectGatewayAssociationProposal($request);

    if ($response->acceptDirectConnectGatewayAssociationProposalResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->