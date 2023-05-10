# SDK

## Overview

<p>Use the Amazon OpenSearch Serverless API to create, configure, and manage OpenSearch Serverless collections and security policies.</p> <p>OpenSearch Serverless is an on-demand, pre-provisioned serverless configuration for Amazon OpenSearch Service. OpenSearch Serverless removes the operational complexities of provisioning, configuring, and tuning your OpenSearch clusters. It enables you to easily search and analyze petabytes of data without having to worry about the underlying infrastructure and data management.</p> <p> To learn more about OpenSearch Serverless, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-overview.html">What is Amazon OpenSearch Serverless?</a> </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/aoss/>
### Available Operations

* [batchGetCollection](#batchgetcollection) - Returns attributes for one or more collections, including the collection endpoint and the OpenSearch Dashboards endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.
* [batchGetVpcEndpoint](#batchgetvpcendpoint) - Returns attributes for one or more VPC endpoints associated with the current account. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.
* [createAccessPolicy](#createaccesspolicy) - Creates a data access policy for OpenSearch Serverless. Access policies limit access to collections and the resources within them, and allow a user to access that data irrespective of the access mechanism or network source. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.
* [createCollection](#createcollection) - Creates a new OpenSearch Serverless collection. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.
* [createSecurityConfig](#createsecurityconfig) - Specifies a security configuration for OpenSearch Serverless. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>. 
* [createSecurityPolicy](#createsecuritypolicy) - Creates a security policy to be used by one or more OpenSearch Serverless collections. Security policies provide access to a collection and its OpenSearch Dashboards endpoint from public networks or specific VPC endpoints. They also allow you to secure a collection with a KMS encryption key. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html">Network access for Amazon OpenSearch Serverless</a> and <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html">Encryption at rest for Amazon OpenSearch Serverless</a>.
* [createVpcEndpoint](#createvpcendpoint) - Creates an OpenSearch Serverless-managed interface VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.
* [deleteAccessPolicy](#deleteaccesspolicy) - Deletes an OpenSearch Serverless access policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.
* [deleteCollection](#deletecollection) - Deletes an OpenSearch Serverless collection. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.
* [deleteSecurityConfig](#deletesecurityconfig) - Deletes a security configuration for OpenSearch Serverless. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.
* [deleteSecurityPolicy](#deletesecuritypolicy) - Deletes an OpenSearch Serverless security policy.
* [deleteVpcEndpoint](#deletevpcendpoint) - Deletes an OpenSearch Serverless-managed interface endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.
* [getAccessPolicy](#getaccesspolicy) - Returns an OpenSearch Serverless access policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.
* [getAccountSettings](#getaccountsettings) - Returns account-level settings related to OpenSearch Serverless.
* [getPoliciesStats](#getpoliciesstats) - Returns statistical information about your OpenSearch Serverless access policies, security configurations, and security policies.
* [getSecurityConfig](#getsecurityconfig) - Returns information about an OpenSearch Serverless security configuration. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.
* [getSecurityPolicy](#getsecuritypolicy) - Returns information about a configured OpenSearch Serverless security policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html">Network access for Amazon OpenSearch Serverless</a> and <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html">Encryption at rest for Amazon OpenSearch Serverless</a>.
* [listAccessPolicies](#listaccesspolicies) - Returns information about a list of OpenSearch Serverless access policies.
* [listCollections](#listcollections) - <p>Lists all OpenSearch Serverless collections. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.</p> <note> <p>Make sure to include an empty request body {} if you don't include any collection filters in the request.</p> </note>
* [listSecurityConfigs](#listsecurityconfigs) - Returns information about configured OpenSearch Serverless security configurations. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.
* [listSecurityPolicies](#listsecuritypolicies) - Returns information about configured OpenSearch Serverless security policies.
* [listTagsForResource](#listtagsforresource) - Returns the tags for an OpenSearch Serverless resource. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/tag-collection.html">Tagging Amazon OpenSearch Serverless collections</a>.
* [listVpcEndpoints](#listvpcendpoints) - Returns the OpenSearch Serverless-managed interface VPC endpoints associated with the current account. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.
* [tagResource](#tagresource) - Associates tags with an OpenSearch Serverless resource. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/tag-collection.html">Tagging Amazon OpenSearch Serverless collections</a>.
* [untagResource](#untagresource) - Removes a tag or set of tags from an OpenSearch Serverless resource. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/tag-collection.html">Tagging Amazon OpenSearch Serverless collections</a>.
* [updateAccessPolicy](#updateaccesspolicy) - Updates an OpenSearch Serverless access policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.
* [updateAccountSettings](#updateaccountsettings) - Update the OpenSearch Serverless settings for the current Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-scaling.html">Managing capacity limits for Amazon OpenSearch Serverless</a>.
* [updateCollection](#updatecollection) - Updates an OpenSearch Serverless collection.
* [updateSecurityConfig](#updatesecurityconfig) - Updates a security configuration for OpenSearch Serverless. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.
* [updateSecurityPolicy](#updatesecuritypolicy) - Updates an OpenSearch Serverless security policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html">Network access for Amazon OpenSearch Serverless</a> and <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html">Encryption at rest for Amazon OpenSearch Serverless</a>.
* [updateVpcEndpoint](#updatevpcendpoint) - Updates an OpenSearch Serverless-managed interface endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.

## batchGetCollection

Returns attributes for one or more collections, including the collection endpoint and the OpenSearch Dashboards endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetCollectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetCollectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetCollectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetCollectionRequest();
    $request->batchGetCollectionRequest = new BatchGetCollectionRequest();
    $request->batchGetCollectionRequest->ids = [
        'delectus',
    ];
    $request->batchGetCollectionRequest->names = [
        'suscipit',
        'molestiae',
    ];
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'placeat';
    $request->xAmzCredential = 'voluptatum';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'recusandae';
    $request->xAmzTarget = BatchGetCollectionXAmzTargetEnum::OPEN_SEARCH_SERVERLESS_BATCH_GET_COLLECTION;

    $response = $sdk->sdk->batchGetCollection($request);

    if ($response->batchGetCollectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetVpcEndpoint

Returns attributes for one or more VPC endpoints associated with the current account. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetVpcEndpointRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetVpcEndpointRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetVpcEndpointXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetVpcEndpointRequest();
    $request->batchGetVpcEndpointRequest = new BatchGetVpcEndpointRequest();
    $request->batchGetVpcEndpointRequest->ids = [
        'ab',
        'quis',
        'veritatis',
        'deserunt',
    ];
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'at';
    $request->xAmzTarget = BatchGetVpcEndpointXAmzTargetEnum::OPEN_SEARCH_SERVERLESS_BATCH_GET_VPC_ENDPOINT;

    $response = $sdk->sdk->batchGetVpcEndpoint($request);

    if ($response->batchGetVpcEndpointResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAccessPolicy

Creates a data access policy for OpenSearch Serverless. Access policies limit access to collections and the resources within them, and allow a user to access that data irrespective of the access mechanism or network source. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccessPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateAccessPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccessPolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccessPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAccessPolicyRequest();
    $request->createAccessPolicyRequest = new CreateAccessPolicyRequest();
    $request->createAccessPolicyRequest->clientToken = 'at';
    $request->createAccessPolicyRequest->description = 'maiores';
    $request->createAccessPolicyRequest->name = 'Bernadette Schmidt';
    $request->createAccessPolicyRequest->policy = 'porro';
    $request->createAccessPolicyRequest->type = AccessPolicyTypeEnum::DATA;
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->xAmzTarget = CreateAccessPolicyXAmzTargetEnum::OPEN_SEARCH_SERVERLESS_CREATE_ACCESS_POLICY;

    $response = $sdk->sdk->createAccessPolicy($request);

    if ($response->createAccessPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCollection

Creates a new OpenSearch Serverless collection. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCollectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateCollectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\CollectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateCollectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCollectionRequest();
    $request->createCollectionRequest = new CreateCollectionRequest();
    $request->createCollectionRequest->clientToken = 'hic';
    $request->createCollectionRequest->description = 'optio';
    $request->createCollectionRequest->name = 'Jack Johns';
    $request->createCollectionRequest->tags = [
        new Tag(),
    ];
    $request->createCollectionRequest->type = CollectionTypeEnum::TIMESERIES;
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'ad';
    $request->xAmzTarget = CreateCollectionXAmzTargetEnum::OPEN_SEARCH_SERVERLESS_CREATE_COLLECTION;

    $response = $sdk->sdk->createCollection($request);

    if ($response->createCollectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSecurityConfig

Specifies a security configuration for OpenSearch Serverless. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSecurityConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateSecurityConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\SamlConfigOptions;
use \OpenAPI\OpenAPI\Models\Shared\SecurityConfigTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateSecurityConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSecurityConfigRequest();
    $request->createSecurityConfigRequest = new CreateSecurityConfigRequest();
    $request->createSecurityConfigRequest->clientToken = 'natus';
    $request->createSecurityConfigRequest->description = 'sed';
    $request->createSecurityConfigRequest->name = 'Curtis Morissette';
    $request->createSecurityConfigRequest->samlOptions = new SamlConfigOptions();
    $request->createSecurityConfigRequest->samlOptions->groupAttribute = 'saepe';
    $request->createSecurityConfigRequest->samlOptions->metadata = 'fuga';
    $request->createSecurityConfigRequest->samlOptions->sessionTimeout = 449950;
    $request->createSecurityConfigRequest->samlOptions->userAttribute = 'corporis';
    $request->createSecurityConfigRequest->type = SecurityConfigTypeEnum::SAML;
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = CreateSecurityConfigXAmzTargetEnum::OPEN_SEARCH_SERVERLESS_CREATE_SECURITY_CONFIG;

    $response = $sdk->sdk->createSecurityConfig($request);

    if ($response->createSecurityConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSecurityPolicy

Creates a security policy to be used by one or more OpenSearch Serverless collections. Security policies provide access to a collection and its OpenSearch Dashboards endpoint from public networks or specific VPC endpoints. They also allow you to secure a collection with a KMS encryption key. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html">Network access for Amazon OpenSearch Serverless</a> and <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html">Encryption at rest for Amazon OpenSearch Serverless</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSecurityPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateSecurityPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateSecurityPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSecurityPolicyRequest();
    $request->createSecurityPolicyRequest = new CreateSecurityPolicyRequest();
    $request->createSecurityPolicyRequest->clientToken = 'est';
    $request->createSecurityPolicyRequest->description = 'mollitia';
    $request->createSecurityPolicyRequest->name = 'Ernest Ebert';
    $request->createSecurityPolicyRequest->policy = 'nobis';
    $request->createSecurityPolicyRequest->type = SecurityPolicyTypeEnum::ENCRYPTION;
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'culpa';
    $request->xAmzTarget = CreateSecurityPolicyXAmzTargetEnum::OPEN_SEARCH_SERVERLESS_CREATE_SECURITY_POLICY;

    $response = $sdk->sdk->createSecurityPolicy($request);

    if ($response->createSecurityPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createVpcEndpoint

Creates an OpenSearch Serverless-managed interface VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateVpcEndpointRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateVpcEndpointRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateVpcEndpointXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateVpcEndpointRequest();
    $request->createVpcEndpointRequest = new CreateVpcEndpointRequest();
    $request->createVpcEndpointRequest->clientToken = 'doloribus';
    $request->createVpcEndpointRequest->name = 'Juan O'Hara';
    $request->createVpcEndpointRequest->securityGroupIds = [
        'repellat',
    ];
    $request->createVpcEndpointRequest->subnetIds = [
        'occaecati',
        'numquam',
        'commodi',
    ];
    $request->createVpcEndpointRequest->vpcId = 'quam';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'quia';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'vitae';
    $request->xAmzSignedHeaders = 'laborum';
    $request->xAmzTarget = CreateVpcEndpointXAmzTargetEnum::OPEN_SEARCH_SERVERLESS_CREATE_VPC_ENDPOINT;

    $response = $sdk->sdk->createVpcEndpoint($request);

    if ($response->createVpcEndpointResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAccessPolicy

Deletes an OpenSearch Serverless access policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAccessPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAccessPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccessPolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAccessPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAccessPolicyRequest();
    $request->deleteAccessPolicyRequest = new DeleteAccessPolicyRequest();
    $request->deleteAccessPolicyRequest->clientToken = 'animi';
    $request->deleteAccessPolicyRequest->name = 'Christina Satterfield';
    $request->deleteAccessPolicyRequest->type = AccessPolicyTypeEnum::DATA;
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'temporibus';
    $request->xAmzTarget = DeleteAccessPolicyXAmzTargetEnum::OPEN_SEARCH_SERVERLESS_DELETE_ACCESS_POLICY;

    $response = $sdk->sdk->deleteAccessPolicy($request);

    if ($response->deleteAccessPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCollection

Deletes an OpenSearch Serverless collection. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCollectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteCollectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCollectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCollectionRequest();
    $request->deleteCollectionRequest = new DeleteCollectionRequest();
    $request->deleteCollectionRequest->clientToken = 'laborum';
    $request->deleteCollectionRequest->id = '1ffe78f0-97b0-4074-b154-71b5e6e13b99';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'rem';
    $request->xAmzSecurityToken = 'voluptates';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'repudiandae';
    $request->xAmzTarget = DeleteCollectionXAmzTargetEnum::OPEN_SEARCH_SERVERLESS_DELETE_COLLECTION;

    $response = $sdk->sdk->deleteCollection($request);

    if ($response->deleteCollectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSecurityConfig

Deletes a security configuration for OpenSearch Serverless. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSecurityConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteSecurityConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSecurityConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSecurityConfigRequest();
    $request->deleteSecurityConfigRequest = new DeleteSecurityConfigRequest();
    $request->deleteSecurityConfigRequest->clientToken = 'sint';
    $request->deleteSecurityConfigRequest->id = '1e450ad2-abd4-4426-9802-d502a94bb4f6';
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'sint';
    $request->xAmzTarget = DeleteSecurityConfigXAmzTargetEnum::OPEN_SEARCH_SERVERLESS_DELETE_SECURITY_CONFIG;

    $response = $sdk->sdk->deleteSecurityConfig($request);

    if ($response->deleteSecurityConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSecurityPolicy

Deletes an OpenSearch Serverless security policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSecurityPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteSecurityPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSecurityPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSecurityPolicyRequest();
    $request->deleteSecurityPolicyRequest = new DeleteSecurityPolicyRequest();
    $request->deleteSecurityPolicyRequest->clientToken = 'officia';
    $request->deleteSecurityPolicyRequest->name = 'Raquel Wilderman';
    $request->deleteSecurityPolicyRequest->type = SecurityPolicyTypeEnum::ENCRYPTION;
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'facere';
    $request->xAmzTarget = DeleteSecurityPolicyXAmzTargetEnum::OPEN_SEARCH_SERVERLESS_DELETE_SECURITY_POLICY;

    $response = $sdk->sdk->deleteSecurityPolicy($request);

    if ($response->deleteSecurityPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteVpcEndpoint

Deletes an OpenSearch Serverless-managed interface endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVpcEndpointRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteVpcEndpointRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVpcEndpointXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteVpcEndpointRequest();
    $request->deleteVpcEndpointRequest = new DeleteVpcEndpointRequest();
    $request->deleteVpcEndpointRequest->clientToken = 'ea';
    $request->deleteVpcEndpointRequest->id = '6ae395ef-b9ba-488f-ba66-997074ba4469';
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'et';
    $request->xAmzTarget = DeleteVpcEndpointXAmzTargetEnum::OPEN_SEARCH_SERVERLESS_DELETE_VPC_ENDPOINT;

    $response = $sdk->sdk->deleteVpcEndpoint($request);

    if ($response->deleteVpcEndpointResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccessPolicy

Returns an OpenSearch Serverless access policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAccessPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetAccessPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccessPolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAccessPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccessPolicyRequest();
    $request->getAccessPolicyRequest = new GetAccessPolicyRequest();
    $request->getAccessPolicyRequest->name = 'Derrick McLaughlin';
    $request->getAccessPolicyRequest->type = AccessPolicyTypeEnum::DATA;
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzTarget = GetAccessPolicyXAmzTargetEnum::OPEN_SEARCH_SERVERLESS_GET_ACCESS_POLICY;

    $response = $sdk->sdk->getAccessPolicy($request);

    if ($response->getAccessPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountSettings

Returns account-level settings related to OpenSearch Serverless.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountSettingsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountSettingsRequest();
    $request->requestBody = [
        'odit' => 'nemo',
        'quasi' => 'iure',
        'doloribus' => 'debitis',
        'eius' => 'maxime',
    ];
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'ullam';
    $request->xAmzTarget = GetAccountSettingsXAmzTargetEnum::OPEN_SEARCH_SERVERLESS_GET_ACCOUNT_SETTINGS;

    $response = $sdk->sdk->getAccountSettings($request);

    if ($response->getAccountSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPoliciesStats

Returns statistical information about your OpenSearch Serverless access policies, security configurations, and security policies.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPoliciesStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPoliciesStatsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPoliciesStatsRequest();
    $request->requestBody = [
        'nihil' => 'repellat',
        'quibusdam' => 'sed',
        'saepe' => 'pariatur',
    ];
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'sunt';
    $request->xAmzSignedHeaders = 'quo';
    $request->xAmzTarget = GetPoliciesStatsXAmzTargetEnum::OPEN_SEARCH_SERVERLESS_GET_POLICIES_STATS;

    $response = $sdk->sdk->getPoliciesStats($request);

    if ($response->getPoliciesStatsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSecurityConfig

Returns information about an OpenSearch Serverless security configuration. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSecurityConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetSecurityConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSecurityConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSecurityConfigRequest();
    $request->getSecurityConfigRequest = new GetSecurityConfigRequest();
    $request->getSecurityConfigRequest->id = 'ddc69260-1fb5-476b-8d5f-0d30c5fbb258';
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'nesciunt';
    $request->xAmzSecurityToken = 'eos';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'dolores';
    $request->xAmzTarget = GetSecurityConfigXAmzTargetEnum::OPEN_SEARCH_SERVERLESS_GET_SECURITY_CONFIG;

    $response = $sdk->sdk->getSecurityConfig($request);

    if ($response->getSecurityConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSecurityPolicy

Returns information about a configured OpenSearch Serverless security policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html">Network access for Amazon OpenSearch Serverless</a> and <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html">Encryption at rest for Amazon OpenSearch Serverless</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSecurityPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetSecurityPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSecurityPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSecurityPolicyRequest();
    $request->getSecurityPolicyRequest = new GetSecurityPolicyRequest();
    $request->getSecurityPolicyRequest->name = 'Darryl Fadel';
    $request->getSecurityPolicyRequest->type = SecurityPolicyTypeEnum::NETWORK;
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'perspiciatis';
    $request->xAmzSecurityToken = 'voluptatem';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->xAmzTarget = GetSecurityPolicyXAmzTargetEnum::OPEN_SEARCH_SERVERLESS_GET_SECURITY_POLICY;

    $response = $sdk->sdk->getSecurityPolicy($request);

    if ($response->getSecurityPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAccessPolicies

Returns information about a list of OpenSearch Serverless access policies.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAccessPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAccessPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccessPolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListAccessPoliciesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAccessPoliciesRequest();
    $request->listAccessPoliciesRequest = new ListAccessPoliciesRequest();
    $request->listAccessPoliciesRequest->maxResults = 500026;
    $request->listAccessPoliciesRequest->nextToken = 'error';
    $request->listAccessPoliciesRequest->resource = [
        'occaecati',
    ];
    $request->listAccessPoliciesRequest->type = AccessPolicyTypeEnum::DATA;
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'asperiores';
    $request->xAmzDate = 'earum';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = ListAccessPoliciesXAmzTargetEnum::OPEN_SEARCH_SERVERLESS_LIST_ACCESS_POLICIES;
    $request->maxResults = 'deleniti';
    $request->nextToken = 'pariatur';

    $response = $sdk->sdk->listAccessPolicies($request);

    if ($response->listAccessPoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCollections

<p>Lists all OpenSearch Serverless collections. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.</p> <note> <p>Make sure to include an empty request body {} if you don't include any collection filters in the request.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCollectionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListCollectionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CollectionFilters;
use \OpenAPI\OpenAPI\Models\Shared\CollectionStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListCollectionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCollectionsRequest();
    $request->listCollectionsRequest = new ListCollectionsRequest();
    $request->listCollectionsRequest->collectionFilters = new CollectionFilters();
    $request->listCollectionsRequest->collectionFilters->name = 'Loren Renner';
    $request->listCollectionsRequest->collectionFilters->status = CollectionStatusEnum::ACTIVE;
    $request->listCollectionsRequest->maxResults = 398221;
    $request->listCollectionsRequest->nextToken = 'dolorem';
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'cum';
    $request->xAmzTarget = ListCollectionsXAmzTargetEnum::OPEN_SEARCH_SERVERLESS_LIST_COLLECTIONS;
    $request->maxResults = 'voluptate';
    $request->nextToken = 'dignissimos';

    $response = $sdk->sdk->listCollections($request);

    if ($response->listCollectionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSecurityConfigs

Returns information about configured OpenSearch Serverless security configurations. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSecurityConfigsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListSecurityConfigsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SecurityConfigTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListSecurityConfigsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSecurityConfigsRequest();
    $request->listSecurityConfigsRequest = new ListSecurityConfigsRequest();
    $request->listSecurityConfigsRequest->maxResults = 970237;
    $request->listSecurityConfigsRequest->nextToken = 'amet';
    $request->listSecurityConfigsRequest->type = SecurityConfigTypeEnum::SAML;
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'odio';
    $request->xAmzTarget = ListSecurityConfigsXAmzTargetEnum::OPEN_SEARCH_SERVERLESS_LIST_SECURITY_CONFIGS;
    $request->maxResults = 'quaerat';
    $request->nextToken = 'accusamus';

    $response = $sdk->sdk->listSecurityConfigs($request);

    if ($response->listSecurityConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSecurityPolicies

Returns information about configured OpenSearch Serverless security policies.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSecurityPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListSecurityPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListSecurityPoliciesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSecurityPoliciesRequest();
    $request->listSecurityPoliciesRequest = new ListSecurityPoliciesRequest();
    $request->listSecurityPoliciesRequest->maxResults = 696344;
    $request->listSecurityPoliciesRequest->nextToken = 'voluptatibus';
    $request->listSecurityPoliciesRequest->resource = [
        'natus',
        'eos',
    ];
    $request->listSecurityPoliciesRequest->type = SecurityPolicyTypeEnum::NETWORK;
    $request->xAmzAlgorithm = 'sit';
    $request->xAmzContentSha256 = 'fugiat';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'soluta';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->xAmzTarget = ListSecurityPoliciesXAmzTargetEnum::OPEN_SEARCH_SERVERLESS_LIST_SECURITY_POLICIES;
    $request->maxResults = 'dolorum';
    $request->nextToken = 'deleniti';

    $response = $sdk->sdk->listSecurityPolicies($request);

    if ($response->listSecurityPoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Returns the tags for an OpenSearch Serverless resource. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/tag-collection.html">Tagging Amazon OpenSearch Serverless collections</a>.

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
    $request->listTagsForResourceRequest->resourceArn = 'omnis';
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'asperiores';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'id';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::OPEN_SEARCH_SERVERLESS_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listVpcEndpoints

Returns the OpenSearch Serverless-managed interface VPC endpoints associated with the current account. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListVpcEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListVpcEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\VpcEndpointFilters;
use \OpenAPI\OpenAPI\Models\Shared\VpcEndpointStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListVpcEndpointsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListVpcEndpointsRequest();
    $request->listVpcEndpointsRequest = new ListVpcEndpointsRequest();
    $request->listVpcEndpointsRequest->maxResults = 906418;
    $request->listVpcEndpointsRequest->nextToken = 'eius';
    $request->listVpcEndpointsRequest->vpcEndpointFilters = new VpcEndpointFilters();
    $request->listVpcEndpointsRequest->vpcEndpointFilters->status = VpcEndpointStatusEnum::PENDING;
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'optio';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->xAmzTarget = ListVpcEndpointsXAmzTargetEnum::OPEN_SEARCH_SERVERLESS_LIST_VPC_ENDPOINTS;
    $request->maxResults = 'deserunt';
    $request->nextToken = 'provident';

    $response = $sdk->sdk->listVpcEndpoints($request);

    if ($response->listVpcEndpointsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Associates tags with an OpenSearch Serverless resource. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/tag-collection.html">Tagging Amazon OpenSearch Serverless collections</a>.

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
    $request->tagResourceRequest->resourceArn = 'minima';
    $request->tagResourceRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'similique';
    $request->xAmzCredential = 'alias';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::OPEN_SEARCH_SERVERLESS_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes a tag or set of tags from an OpenSearch Serverless resource. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/tag-collection.html">Tagging Amazon OpenSearch Serverless collections</a>.

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
    $request->untagResourceRequest->resourceArn = 'quod';
    $request->untagResourceRequest->tagKeys = [
        'qui',
        'dolorum',
        'a',
        'esse',
    ];
    $request->xAmzAlgorithm = 'harum';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'quisquam';
    $request->xAmzSecurityToken = 'tenetur';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'tempore';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::OPEN_SEARCH_SERVERLESS_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAccessPolicy

Updates an OpenSearch Serverless access policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccessPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateAccessPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccessPolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccessPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAccessPolicyRequest();
    $request->updateAccessPolicyRequest = new UpdateAccessPolicyRequest();
    $request->updateAccessPolicyRequest->clientToken = 'accusamus';
    $request->updateAccessPolicyRequest->description = 'numquam';
    $request->updateAccessPolicyRequest->name = 'Florence Will';
    $request->updateAccessPolicyRequest->policy = 'sit';
    $request->updateAccessPolicyRequest->policyVersion = 'expedita';
    $request->updateAccessPolicyRequest->type = AccessPolicyTypeEnum::DATA;
    $request->xAmzAlgorithm = 'neque';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'quam';
    $request->xAmzTarget = UpdateAccessPolicyXAmzTargetEnum::OPEN_SEARCH_SERVERLESS_UPDATE_ACCESS_POLICY;

    $response = $sdk->sdk->updateAccessPolicy($request);

    if ($response->updateAccessPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAccountSettings

Update the OpenSearch Serverless settings for the current Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-scaling.html">Managing capacity limits for Amazon OpenSearch Serverless</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccountSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateAccountSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CapacityLimits;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccountSettingsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAccountSettingsRequest();
    $request->updateAccountSettingsRequest = new UpdateAccountSettingsRequest();
    $request->updateAccountSettingsRequest->capacityLimits = new CapacityLimits();
    $request->updateAccountSettingsRequest->capacityLimits->maxIndexingCapacityInOCU = 214880;
    $request->updateAccountSettingsRequest->capacityLimits->maxSearchCapacityInOCU = 277628;
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'maxime';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'soluta';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'laborum';
    $request->xAmzTarget = UpdateAccountSettingsXAmzTargetEnum::OPEN_SEARCH_SERVERLESS_UPDATE_ACCOUNT_SETTINGS;

    $response = $sdk->sdk->updateAccountSettings($request);

    if ($response->updateAccountSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCollection

Updates an OpenSearch Serverless collection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCollectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCollectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCollectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCollectionRequest();
    $request->updateCollectionRequest = new UpdateCollectionRequest();
    $request->updateCollectionRequest->clientToken = 'totam';
    $request->updateCollectionRequest->description = 'incidunt';
    $request->updateCollectionRequest->id = '22bb679d-2322-4715-bf0c-bb1e31b8b90f';
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'quae';
    $request->xAmzTarget = UpdateCollectionXAmzTargetEnum::OPEN_SEARCH_SERVERLESS_UPDATE_COLLECTION;

    $response = $sdk->sdk->updateCollection($request);

    if ($response->updateCollectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSecurityConfig

Updates a security configuration for OpenSearch Serverless. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSecurityConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateSecurityConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\SamlConfigOptions;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSecurityConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSecurityConfigRequest();
    $request->updateSecurityConfigRequest = new UpdateSecurityConfigRequest();
    $request->updateSecurityConfigRequest->clientToken = 'aut';
    $request->updateSecurityConfigRequest->configVersion = 'quas';
    $request->updateSecurityConfigRequest->description = 'itaque';
    $request->updateSecurityConfigRequest->id = '0adcf4b9-2187-49fc-a953-f73ef7fbc7ab';
    $request->updateSecurityConfigRequest->samlOptions = new SamlConfigOptions();
    $request->updateSecurityConfigRequest->samlOptions->groupAttribute = 'vero';
    $request->updateSecurityConfigRequest->samlOptions->metadata = 'ducimus';
    $request->updateSecurityConfigRequest->samlOptions->sessionTimeout = 293020;
    $request->updateSecurityConfigRequest->samlOptions->userAttribute = 'quibusdam';
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'sequi';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'exercitationem';
    $request->xAmzTarget = UpdateSecurityConfigXAmzTargetEnum::OPEN_SEARCH_SERVERLESS_UPDATE_SECURITY_CONFIG;

    $response = $sdk->sdk->updateSecurityConfig($request);

    if ($response->updateSecurityConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSecurityPolicy

Updates an OpenSearch Serverless security policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html">Network access for Amazon OpenSearch Serverless</a> and <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html">Encryption at rest for Amazon OpenSearch Serverless</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSecurityPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateSecurityPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSecurityPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSecurityPolicyRequest();
    $request->updateSecurityPolicyRequest = new UpdateSecurityPolicyRequest();
    $request->updateSecurityPolicyRequest->clientToken = 'nulla';
    $request->updateSecurityPolicyRequest->description = 'fugit';
    $request->updateSecurityPolicyRequest->name = 'Elijah Wyman';
    $request->updateSecurityPolicyRequest->policy = 'ducimus';
    $request->updateSecurityPolicyRequest->policyVersion = 'alias';
    $request->updateSecurityPolicyRequest->type = SecurityPolicyTypeEnum::NETWORK;
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'possimus';
    $request->xAmzSignedHeaders = 'magnam';
    $request->xAmzTarget = UpdateSecurityPolicyXAmzTargetEnum::OPEN_SEARCH_SERVERLESS_UPDATE_SECURITY_POLICY;

    $response = $sdk->sdk->updateSecurityPolicy($request);

    if ($response->updateSecurityPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateVpcEndpoint

Updates an OpenSearch Serverless-managed interface endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVpcEndpointRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateVpcEndpointRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVpcEndpointXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateVpcEndpointRequest();
    $request->updateVpcEndpointRequest = new UpdateVpcEndpointRequest();
    $request->updateVpcEndpointRequest->addSecurityGroupIds = [
        'ex',
    ];
    $request->updateVpcEndpointRequest->addSubnetIds = [
        'dicta',
        'dolor',
        'maiores',
    ];
    $request->updateVpcEndpointRequest->clientToken = 'quasi';
    $request->updateVpcEndpointRequest->id = '6d9f5fce-6c55-4614-ac3e-250fb008c42e';
    $request->updateVpcEndpointRequest->removeSecurityGroupIds = [
        'non',
    ];
    $request->updateVpcEndpointRequest->removeSubnetIds = [
        'dolorum',
    ];
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'placeat';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'autem';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'quas';
    $request->xAmzTarget = UpdateVpcEndpointXAmzTargetEnum::OPEN_SEARCH_SERVERLESS_UPDATE_VPC_ENDPOINT;

    $response = $sdk->sdk->updateVpcEndpoint($request);

    if ($response->updateVpcEndpointResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
