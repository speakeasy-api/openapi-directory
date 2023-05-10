# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateClusterRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateClusterRequestBodyAuthTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateClusterRequest();
    $request->requestBody = new CreateClusterRequestBody();
    $request->requestBody->adminUserName = 'corrupti';
    $request->requestBody->adminUserPassword = 'provident';
    $request->requestBody->authType = CreateClusterRequestBodyAuthTypeEnum::SECRET_ARN;
    $request->requestBody->clientToken = 'quibusdam';
    $request->requestBody->clusterName = 'unde';
    $request->requestBody->kmsKeyId = 'nulla';
    $request->requestBody->preferredMaintenanceWindow = 'corrupti';
    $request->requestBody->shardCapacity = 847252;
    $request->requestBody->shardCount = 423655;
    $request->requestBody->subnetIds = [
        'deserunt',
        'suscipit',
        'iure',
    ];
    $request->requestBody->tags = [
        'debitis' => 'ipsa',
        'delectus' => 'tempora',
    ];
    $request->requestBody->vpcSecurityGroupIds = [
        'molestiae',
        'minus',
    ];
    $request->xAmzAlgorithm = 'placeat';
    $request->xAmzContentSha256 = 'voluptatum';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'temporibus';

    $response = $sdk->createCluster($request);

    if ($response->createClusterOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createCluster](docs/sdk/README.md#createcluster) - Creates a new Elastic DocumentDB cluster and returns its Cluster structure.
* [createClusterSnapshot](docs/sdk/README.md#createclustersnapshot) - Creates a snapshot of a cluster.
* [deleteCluster](docs/sdk/README.md#deletecluster) - Delete a Elastic DocumentDB cluster.
* [deleteClusterSnapshot](docs/sdk/README.md#deleteclustersnapshot) - Delete a Elastic DocumentDB snapshot.
* [getCluster](docs/sdk/README.md#getcluster) - Returns information about a specific Elastic DocumentDB cluster.
* [getClusterSnapshot](docs/sdk/README.md#getclustersnapshot) - Returns information about a specific Elastic DocumentDB snapshot
* [listClusterSnapshots](docs/sdk/README.md#listclustersnapshots) - Returns information about Elastic DocumentDB snapshots for a specified cluster.
* [listClusters](docs/sdk/README.md#listclusters) - Returns information about provisioned Elastic DocumentDB clusters.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists all tags on a Elastic DocumentDB resource
* [restoreClusterFromSnapshot](docs/sdk/README.md#restoreclusterfromsnapshot) - Restores a Elastic DocumentDB cluster from a snapshot.
* [tagResource](docs/sdk/README.md#tagresource) - Adds metadata tags to a Elastic DocumentDB resource
* [untagResource](docs/sdk/README.md#untagresource) - Removes metadata tags to a Elastic DocumentDB resource
* [updateCluster](docs/sdk/README.md#updatecluster) - Modifies a Elastic DocumentDB cluster. This includes updating admin-username/password, upgrading API version setting up a backup window and maintenance window
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
