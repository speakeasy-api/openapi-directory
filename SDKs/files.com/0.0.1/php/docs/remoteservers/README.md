# remoteServers

## Overview

Operations about remote_servers

### Available Operations

* [deleteRemoteServersId](#deleteremoteserversid) - Delete Remote Server
* [getRemoteServers](#getremoteservers) - List Remote Servers
* [getRemoteServersId](#getremoteserversid) - Show Remote Server
* [getRemoteServersIdConfigurationFile](#getremoteserversidconfigurationfile) - Download configuration file (required for some Remote Server integrations, such as the Files.com Agent)
* [patchRemoteServersId](#patchremoteserversid) - Update Remote Server
* [postRemoteServers](#postremoteservers) - Create Remote Server
* [postRemoteServersIdConfigurationFile](#postremoteserversidconfigurationfile) - Post local changes, check in, and download configuration file (used by some Remote Server integrations, such as the Files.com Agent)

## deleteRemoteServersId

Delete Remote Server

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRemoteServersIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRemoteServersIdRequest();
    $request->id = 696463;

    $response = $sdk->remoteServers->deleteRemoteServersId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRemoteServers

List Remote Servers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRemoteServersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRemoteServersRequest();
    $request->cursor = 'eveniet';
    $request->perPage = 247399;

    $response = $sdk->remoteServers->getRemoteServers($request);

    if ($response->remoteServerEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRemoteServersId

Show Remote Server

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRemoteServersIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRemoteServersIdRequest();
    $request->id = 878493;

    $response = $sdk->remoteServers->getRemoteServersId($request);

    if ($response->remoteServerEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRemoteServersIdConfigurationFile

Download configuration file (required for some Remote Server integrations, such as the Files.com Agent)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRemoteServersIdConfigurationFileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRemoteServersIdConfigurationFileRequest();
    $request->id = 39615;

    $response = $sdk->remoteServers->getRemoteServersIdConfigurationFile($request);

    if ($response->remoteServerConfigurationFileEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchRemoteServersId

Update Remote Server

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchRemoteServersIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatchRemoteServersIdRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PatchRemoteServersIdRequestBodyFilesAgentPermissionSetEnum;
use \OpenAPI\OpenAPI\Models\Operations\PatchRemoteServersIdRequestBodyOneDriveAccountTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PatchRemoteServersIdRequestBodyServerCertificateEnum;
use \OpenAPI\OpenAPI\Models\Operations\PatchRemoteServersIdRequestBodyServerTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PatchRemoteServersIdRequestBodySslEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchRemoteServersIdRequest();
    $request->requestBody = new PatchRemoteServersIdRequestBody();
    $request->requestBody->awsAccessKey = 'example';
    $request->requestBody->awsSecretKey = 'iure';
    $request->requestBody->azureBlobStorageAccessKey = 'ipsa';
    $request->requestBody->azureBlobStorageAccount = 'storage-account-name';
    $request->requestBody->azureBlobStorageContainer = 'container-name';
    $request->requestBody->azureBlobStorageSasToken = 'storage-sas-token';
    $request->requestBody->azureFilesStorageAccessKey = 'totam';
    $request->requestBody->azureFilesStorageAccount = 'storage-account-name';
    $request->requestBody->azureFilesStorageSasToken = 'storage-sas-token';
    $request->requestBody->azureFilesStorageShareName = 'share-name';
    $request->requestBody->backblazeB2ApplicationKey = 'quae';
    $request->requestBody->backblazeB2Bucket = 'my-bucket';
    $request->requestBody->backblazeB2KeyId = 'molestiae';
    $request->requestBody->backblazeB2S3Endpoint = 's3.us-west-001.backblazeb2.com';
    $request->requestBody->enableDedicatedIps = true;
    $request->requestBody->filebaseAccessKey = 'example';
    $request->requestBody->filebaseBucket = 'my-bucket';
    $request->requestBody->filebaseSecretKey = 'eveniet';
    $request->requestBody->filesAgentPermissionSet = PatchRemoteServersIdRequestBodyFilesAgentPermissionSetEnum::READ_WRITE;
    $request->requestBody->filesAgentRoot = 'example';
    $request->requestBody->googleCloudStorageBucket = 'my-bucket';
    $request->requestBody->googleCloudStorageCredentialsJson = 'qui';
    $request->requestBody->googleCloudStorageProjectId = 'my-project';
    $request->requestBody->hostname = 'remote-server.com';
    $request->requestBody->maxConnections = 1;
    $request->requestBody->name = 'My Remote server';
    $request->requestBody->oneDriveAccountType = PatchRemoteServersIdRequestBodyOneDriveAccountTypeEnum::PERSONAL;
    $request->requestBody->password = 'cum';
    $request->requestBody->pinToSiteRegion = true;
    $request->requestBody->port = 1;
    $request->requestBody->privateKey = 'iure';
    $request->requestBody->privateKeyPassphrase = 'necessitatibus';
    $request->requestBody->rackspaceApiKey = 'ratione';
    $request->requestBody->rackspaceContainer = 'my-container';
    $request->requestBody->rackspaceRegion = 'dfw';
    $request->requestBody->rackspaceUsername = 'rackspaceuser';
    $request->requestBody->resetAuthentication = false;
    $request->requestBody->s3Bucket = 'my-bucket';
    $request->requestBody->s3CompatibleAccessKey = 'example';
    $request->requestBody->s3CompatibleBucket = 'my-bucket';
    $request->requestBody->s3CompatibleEndpoint = 'mys3platform.com';
    $request->requestBody->s3CompatibleRegion = 'us-east-1';
    $request->requestBody->s3CompatibleSecretKey = 'laborum';
    $request->requestBody->s3Region = 'us-east-1';
    $request->requestBody->serverCertificate = PatchRemoteServersIdRequestBodyServerCertificateEnum::REQUIRE_MATCH;
    $request->requestBody->serverHostKey = '[public key]';
    $request->requestBody->serverType = PatchRemoteServersIdRequestBodyServerTypeEnum::S3;
    $request->requestBody->ssl = PatchRemoteServersIdRequestBodySslEnum::IF_AVAILABLE;
    $request->requestBody->sslCertificate = 'distinctio';
    $request->requestBody->username = 'user';
    $request->requestBody->wasabiAccessKey = 'example';
    $request->requestBody->wasabiBucket = 'my-bucket';
    $request->requestBody->wasabiRegion = 'us-west-1';
    $request->requestBody->wasabiSecretKey = 'voluptatum';
    $request->id = 523006;

    $response = $sdk->remoteServers->patchRemoteServersId($request);

    if ($response->remoteServerEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRemoteServers

Create Remote Server

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostRemoteServersRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostRemoteServersRequestBodyFilesAgentPermissionSetEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostRemoteServersRequestBodyOneDriveAccountTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostRemoteServersRequestBodyServerCertificateEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostRemoteServersRequestBodyServerTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostRemoteServersRequestBodySslEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostRemoteServersRequestBody();
    $request->awsAccessKey = 'example';
    $request->awsSecretKey = 'aliquam';
    $request->azureBlobStorageAccessKey = 'ad';
    $request->azureBlobStorageAccount = 'storage-account-name';
    $request->azureBlobStorageContainer = 'container-name';
    $request->azureBlobStorageSasToken = 'storage-sas-token';
    $request->azureFilesStorageAccessKey = 'repellat';
    $request->azureFilesStorageAccount = 'storage-account-name';
    $request->azureFilesStorageSasToken = 'storage-sas-token';
    $request->azureFilesStorageShareName = 'share-name';
    $request->backblazeB2ApplicationKey = 'alias';
    $request->backblazeB2Bucket = 'my-bucket';
    $request->backblazeB2KeyId = 'corporis';
    $request->backblazeB2S3Endpoint = 's3.us-west-001.backblazeb2.com';
    $request->enableDedicatedIps = true;
    $request->filebaseAccessKey = 'example';
    $request->filebaseBucket = 'my-bucket';
    $request->filebaseSecretKey = 'perspiciatis';
    $request->filesAgentPermissionSet = PostRemoteServersRequestBodyFilesAgentPermissionSetEnum::READ_WRITE;
    $request->filesAgentRoot = 'example';
    $request->googleCloudStorageBucket = 'my-bucket';
    $request->googleCloudStorageCredentialsJson = 'nihil';
    $request->googleCloudStorageProjectId = 'my-project';
    $request->hostname = 'remote-server.com';
    $request->maxConnections = 1;
    $request->name = 'My Remote server';
    $request->oneDriveAccountType = PostRemoteServersRequestBodyOneDriveAccountTypeEnum::PERSONAL;
    $request->password = 'mollitia';
    $request->pinToSiteRegion = true;
    $request->port = 1;
    $request->privateKey = 'voluptas';
    $request->privateKeyPassphrase = 'alias';
    $request->rackspaceApiKey = 'maiores';
    $request->rackspaceContainer = 'my-container';
    $request->rackspaceRegion = 'dfw';
    $request->rackspaceUsername = 'rackspaceuser';
    $request->resetAuthentication = false;
    $request->s3Bucket = 'my-bucket';
    $request->s3CompatibleAccessKey = 'example';
    $request->s3CompatibleBucket = 'my-bucket';
    $request->s3CompatibleEndpoint = 'mys3platform.com';
    $request->s3CompatibleRegion = 'us-east-1';
    $request->s3CompatibleSecretKey = 'reiciendis';
    $request->s3Region = 'us-east-1';
    $request->serverCertificate = PostRemoteServersRequestBodyServerCertificateEnum::REQUIRE_MATCH;
    $request->serverHostKey = '[public key]';
    $request->serverType = PostRemoteServersRequestBodyServerTypeEnum::S3;
    $request->ssl = PostRemoteServersRequestBodySslEnum::IF_AVAILABLE;
    $request->sslCertificate = 'dolores';
    $request->username = 'user';
    $request->wasabiAccessKey = 'example';
    $request->wasabiBucket = 'my-bucket';
    $request->wasabiRegion = 'us-west-1';
    $request->wasabiSecretKey = 'id';

    $response = $sdk->remoteServers->postRemoteServers($request);

    if ($response->remoteServerEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRemoteServersIdConfigurationFile

Post local changes, check in, and download configuration file (used by some Remote Server integrations, such as the Files.com Agent)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostRemoteServersIdConfigurationFileRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostRemoteServersIdConfigurationFileRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostRemoteServersIdConfigurationFileRequest();
    $request->requestBody = new PostRemoteServersIdConfigurationFileRequestBody();
    $request->requestBody->apiToken = 'example';
    $request->requestBody->configVersion = 'example';
    $request->requestBody->hostname = 'example';
    $request->requestBody->permissionSet = 'full';
    $request->requestBody->port = 1;
    $request->requestBody->privateKey = 'example';
    $request->requestBody->publicKey = 'example';
    $request->requestBody->root = 'example';
    $request->requestBody->serverHostKey = 'example';
    $request->requestBody->status = 'example';
    $request->requestBody->subdomain = 'example';
    $request->id = 327988;

    $response = $sdk->remoteServers->postRemoteServersIdConfigurationFile($request);

    if ($response->remoteServerConfigurationFileEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
