# SDK

## Overview

<p/>

Amazon Web Services documentation
<https://docs.aws.amazon.com/gamesparks/>
### Available Operations

* [createGame](#creategame) -  Creates a new game with an empty configuration. After creating your game, you can update the configuration using <code>UpdateGameConfiguration</code> or <code>ImportGameConfiguration</code>. 
* [createSnapshot](#createsnapshot) - Creates a snapshot of the game configuration.
* [createStage](#createstage) - Creates a new stage for stage-by-stage game development and deployment.
* [deleteGame](#deletegame) - Deletes a game.
* [deleteStage](#deletestage) - Deletes a stage from a game, along with the associated game runtime.
* [disconnectPlayer](#disconnectplayer) - <p>Disconnects a player from the game runtime.</p> <p> If a player has multiple connections, this operation attempts to close all of them. </p>
* [exportSnapshot](#exportsnapshot) - Exports a game configuration snapshot.
* [getExtension](#getextension) - Gets details about a specified extension.
* [getExtensionVersion](#getextensionversion) - Gets details about a specified extension version.
* [getGame](#getgame) - Gets details about a game.
* [getGameConfiguration](#getgameconfiguration) - Gets the configuration of the game.
* [getGeneratedCodeJob](#getgeneratedcodejob) - Gets details about a job that is generating code for a snapshot.
* [getPlayerConnectionStatus](#getplayerconnectionstatus) - <p>Gets the status of a player's connection to the game runtime.</p> <p> It's possible for a single player to have multiple connections to the game runtime. If a player is not connected, this operation returns an empty list. </p>
* [getSnapshot](#getsnapshot) - Gets a copy of the game configuration in a snapshot.
* [getStage](#getstage) - Gets information about a stage.
* [getStageDeployment](#getstagedeployment) - Gets information about a stage deployment.
* [importGameConfiguration](#importgameconfiguration) - <p>Imports a game configuration.</p> <p> This operation replaces the current configuration of the game with the provided input. This is not a reversible operation. If you want to preserve the previous configuration, use <code>CreateSnapshot</code> to make a new snapshot before importing. </p>
* [listExtensionVersions](#listextensionversions) - <p>Gets a paginated list of available versions for the extension.</p> <p> Each time an API change is made to an extension, the version is incremented. The list retrieved by this operation shows the versions that are currently available. </p>
* [listExtensions](#listextensions) - <p>Gets a paginated list of available extensions.</p> <p> Extensions provide features that games can use from scripts. </p>
* [listGames](#listgames) - Gets a paginated list of games.
* [listGeneratedCodeJobs](#listgeneratedcodejobs) - Gets a paginated list of code generation jobs for a snapshot.
* [listSnapshots](#listsnapshots) - Gets a paginated list of snapshot summaries from the game.
* [listStageDeployments](#liststagedeployments) - Gets a paginated list of stage deployment summaries from the game.
* [listStages](#liststages) - Gets a paginated list of stage summaries from the game.
* [listTagsForResource](#listtagsforresource) - Lists the tags associated with a GameSparks resource.
* [startGeneratedCodeJob](#startgeneratedcodejob) -  Starts an asynchronous process that generates client code for system-defined and custom messages. The resulting code is collected as a .zip file and uploaded to a pre-signed Amazon S3 URL. 
* [startStageDeployment](#startstagedeployment) - <p>Deploys a snapshot to the stage and creates a new game runtime.</p> <p> After you call this operation, you can check the deployment status by using <code>GetStageDeployment</code>. </p> <p> If there are any players connected to the previous game runtime, then both runtimes persist. Existing connections to the previous runtime are maintained. When players disconnect and reconnect, they connect to the new runtime. After there are no connections to the previous game runtime, it is deleted. </p>
* [tagResource](#tagresource) - Adds tags to a GameSparks resource.
* [untagResource](#untagresource) - Removes tags from a GameSparks resource.
* [updateGame](#updategame) - Updates details of the game.
* [updateGameConfiguration](#updategameconfiguration) - Updates one or more sections of the game configuration.
* [updateSnapshot](#updatesnapshot) - Updates the metadata of a GameSparks snapshot.
* [updateStage](#updatestage) - Updates the metadata of a stage.

## createGame

 Creates a new game with an empty configuration. After creating your game, you can update the configuration using <code>UpdateGameConfiguration</code> or <code>ImportGameConfiguration</code>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateGameRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateGameRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateGameRequest();
    $request->requestBody = new CreateGameRequestBody();
    $request->requestBody->clientToken = 'molestiae';
    $request->requestBody->description = 'minus';
    $request->requestBody->gameName = 'placeat';
    $request->requestBody->tags = [
        'iusto' => 'excepturi',
        'nisi' => 'recusandae',
        'temporibus' => 'ab',
    ];
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'sapiente';

    $response = $sdk->sdk->createGame($request);

    if ($response->createGameResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSnapshot

Creates a snapshot of the game configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSnapshotRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSnapshotRequest();
    $request->gameName = 'quo';
    $request->requestBody = new CreateSnapshotRequestBody();
    $request->requestBody->description = 'odit';
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'esse';

    $response = $sdk->sdk->createSnapshot($request);

    if ($response->createSnapshotResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createStage

Creates a new stage for stage-by-stage game development and deployment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateStageRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateStageRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateStageRequest();
    $request->gameName = 'totam';
    $request->requestBody = new CreateStageRequestBody();
    $request->requestBody->clientToken = 'porro';
    $request->requestBody->description = 'dolorum';
    $request->requestBody->role = 'dicta';
    $request->requestBody->stageName = 'nam';
    $request->requestBody->tags = [
        'occaecati' => 'fugit',
        'deleniti' => 'hic',
        'optio' => 'totam',
    ];
    $request->xAmzAlgorithm = 'beatae';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'cum';

    $response = $sdk->sdk->createStage($request);

    if ($response->createStageResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteGame

Deletes a game.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGameRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteGameRequest();
    $request->gameName = 'esse';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'sed';

    $response = $sdk->sdk->deleteGame($request);

    if ($response->deleteGameResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteStage

Deletes a stage from a game, along with the associated game runtime.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteStageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteStageRequest();
    $request->gameName = 'iste';
    $request->stageName = 'dolor';
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'laboriosam';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'fuga';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'corporis';

    $response = $sdk->sdk->deleteStage($request);

    if ($response->deleteStageResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disconnectPlayer

<p>Disconnects a player from the game runtime.</p> <p> If a player has multiple connections, this operation attempts to close all of them. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisconnectPlayerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisconnectPlayerRequest();
    $request->gameName = 'iste';
    $request->playerId = 'iure';
    $request->stageName = 'saepe';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'laborum';

    $response = $sdk->sdk->disconnectPlayer($request);

    if ($response->disconnectPlayerResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportSnapshot

Exports a game configuration snapshot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ExportSnapshotRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportSnapshotRequest();
    $request->gameName = 'dolores';
    $request->snapshotId = 'dolorem';
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'minima';

    $response = $sdk->sdk->exportSnapshot($request);

    if ($response->exportSnapshotResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getExtension

Gets details about a specified extension.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetExtensionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetExtensionRequest();
    $request->name = 'Brian Kessler';
    $request->namespace = 'sapiente';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'repellat';
    $request->xAmzSignedHeaders = 'mollitia';

    $response = $sdk->sdk->getExtension($request);

    if ($response->getExtensionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getExtensionVersion

Gets details about a specified extension version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetExtensionVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetExtensionVersionRequest();
    $request->extensionVersion = 'occaecati';
    $request->name = 'Lucy Konopelski';
    $request->namespace = 'error';
    $request->xAmzAlgorithm = 'quia';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'vitae';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'animi';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'odit';

    $response = $sdk->sdk->getExtensionVersion($request);

    if ($response->getExtensionVersionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGame

Gets details about a game.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGameRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGameRequest();
    $request->gameName = 'quo';
    $request->xAmzAlgorithm = 'sequi';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'possimus';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'quasi';

    $response = $sdk->sdk->getGame($request);

    if ($response->getGameResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGameConfiguration

Gets the configuration of the game.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGameConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGameConfigurationRequest();
    $request->gameName = 'error';
    $request->sections = [
        'laborum',
        'quasi',
        'reiciendis',
        'voluptatibus',
    ];
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'voluptate';

    $response = $sdk->sdk->getGameConfiguration($request);

    if ($response->getGameConfigurationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGeneratedCodeJob

Gets details about a job that is generating code for a snapshot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGeneratedCodeJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGeneratedCodeJobRequest();
    $request->gameName = 'cum';
    $request->jobId = 'perferendis';
    $request->snapshotId = 'doloremque';
    $request->xAmzAlgorithm = 'reprehenderit';
    $request->xAmzContentSha256 = 'ut';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'dolore';
    $request->xAmzSignedHeaders = 'iusto';

    $response = $sdk->sdk->getGeneratedCodeJob($request);

    if ($response->getGeneratedCodeJobResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPlayerConnectionStatus

<p>Gets the status of a player's connection to the game runtime.</p> <p> It's possible for a single player to have multiple connections to the game runtime. If a player is not connected, this operation returns an empty list. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPlayerConnectionStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPlayerConnectionStatusRequest();
    $request->gameName = 'dicta';
    $request->playerId = 'harum';
    $request->stageName = 'enim';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'molestias';

    $response = $sdk->sdk->getPlayerConnectionStatus($request);

    if ($response->getPlayerConnectionStatusResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSnapshot

Gets a copy of the game configuration in a snapshot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSnapshotRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSnapshotRequest();
    $request->gameName = 'excepturi';
    $request->sections = [
        'modi',
        'praesentium',
        'rem',
        'voluptates',
    ];
    $request->snapshotId = 'quasi';
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'consequatur';

    $response = $sdk->sdk->getSnapshot($request);

    if ($response->getSnapshotResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStage

Gets information about a stage.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetStageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStageRequest();
    $request->gameName = 'est';
    $request->stageName = 'quibusdam';
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'qui';

    $response = $sdk->sdk->getStage($request);

    if ($response->getStageResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStageDeployment

Gets information about a stage deployment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetStageDeploymentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStageDeploymentRequest();
    $request->deploymentId = 'aliquid';
    $request->gameName = 'cupiditate';
    $request->stageName = 'quos';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'assumenda';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->getStageDeployment($request);

    if ($response->getStageDeploymentResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importGameConfiguration

<p>Imports a game configuration.</p> <p> This operation replaces the current configuration of the game with the provided input. This is not a reversible operation. If you want to preserve the previous configuration, use <code>CreateSnapshot</code> to make a new snapshot before importing. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ImportGameConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\ImportGameConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ImportGameConfigurationRequestBodyImportSource;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportGameConfigurationRequest();
    $request->gameName = 'excepturi';
    $request->requestBody = new ImportGameConfigurationRequestBody();
    $request->requestBody->importSource = new ImportGameConfigurationRequestBodyImportSource();
    $request->requestBody->importSource->file = 'tempora';
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'tempore';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'eligendi';

    $response = $sdk->sdk->importGameConfiguration($request);

    if ($response->importGameConfigurationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listExtensionVersions

<p>Gets a paginated list of available versions for the extension.</p> <p> Each time an API change is made to an extension, the version is incremented. The list retrieved by this operation shows the versions that are currently available. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListExtensionVersionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListExtensionVersionsRequest();
    $request->maxResults = 576157;
    $request->name = 'Sherri Tremblay';
    $request->namespace = 'dolor';
    $request->nextToken = 'debitis';
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'rerum';

    $response = $sdk->sdk->listExtensionVersions($request);

    if ($response->listExtensionVersionsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listExtensions

<p>Gets a paginated list of available extensions.</p> <p> Extensions provide features that games can use from scripts. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListExtensionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListExtensionsRequest();
    $request->maxResults = 116202;
    $request->nextToken = 'magnam';
    $request->xAmzAlgorithm = 'cumque';
    $request->xAmzContentSha256 = 'facere';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'non';

    $response = $sdk->sdk->listExtensions($request);

    if ($response->listExtensionsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listGames

Gets a paginated list of games.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListGamesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListGamesRequest();
    $request->maxResults = 581273;
    $request->nextToken = 'enim';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'blanditiis';

    $response = $sdk->sdk->listGames($request);

    if ($response->listGamesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listGeneratedCodeJobs

Gets a paginated list of code generation jobs for a snapshot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListGeneratedCodeJobsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListGeneratedCodeJobsRequest();
    $request->gameName = 'deleniti';
    $request->maxResults = 956084;
    $request->nextToken = 'amet';
    $request->snapshotId = 'deserunt';
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'nihil';

    $response = $sdk->sdk->listGeneratedCodeJobs($request);

    if ($response->listGeneratedCodeJobsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSnapshots

Gets a paginated list of snapshot summaries from the game.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSnapshotsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSnapshotsRequest();
    $request->gameName = 'magnam';
    $request->maxResults = 716075;
    $request->nextToken = 'id';
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'vero';

    $response = $sdk->sdk->listSnapshots($request);

    if ($response->listSnapshotsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listStageDeployments

Gets a paginated list of stage deployment summaries from the game.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListStageDeploymentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListStageDeploymentsRequest();
    $request->gameName = 'aspernatur';
    $request->maxResults = 102863;
    $request->nextToken = 'magnam';
    $request->stageName = 'et';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'mollitia';

    $response = $sdk->sdk->listStageDeployments($request);

    if ($response->listStageDeploymentsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listStages

Gets a paginated list of stage summaries from the game.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListStagesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListStagesRequest();
    $request->gameName = 'reiciendis';
    $request->maxResults = 652103;
    $request->nextToken = 'ad';
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'iure';

    $response = $sdk->sdk->listStages($request);

    if ($response->listStagesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists the tags associated with a GameSparks resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->resourceArn = 'doloribus';
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'eius';
    $request->xAmzCredential = 'maxime';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'architecto';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startGeneratedCodeJob

 Starts an asynchronous process that generates client code for system-defined and custom messages. The resulting code is collected as a .zip file and uploaded to a pre-signed Amazon S3 URL. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartGeneratedCodeJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartGeneratedCodeJobRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\StartGeneratedCodeJobRequestBodyGenerator;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartGeneratedCodeJobRequest();
    $request->gameName = 'architecto';
    $request->requestBody = new StartGeneratedCodeJobRequestBody();
    $request->requestBody->generator = new StartGeneratedCodeJobRequestBodyGenerator();
    $request->requestBody->generator->gameSDKVersion = 'repudiandae';
    $request->requestBody->generator->language = 'ullam';
    $request->requestBody->generator->targetPlatform = 'expedita';
    $request->snapshotId = 'nihil';
    $request->xAmzAlgorithm = 'repellat';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'consequuntur';

    $response = $sdk->sdk->startGeneratedCodeJob($request);

    if ($response->startGeneratedCodeJobResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startStageDeployment

<p>Deploys a snapshot to the stage and creates a new game runtime.</p> <p> After you call this operation, you can check the deployment status by using <code>GetStageDeployment</code>. </p> <p> If there are any players connected to the previous game runtime, then both runtimes persist. Existing connections to the previous runtime are maintained. When players disconnect and reconnect, they connect to the new runtime. After there are no connections to the previous game runtime, it is deleted. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartStageDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartStageDeploymentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartStageDeploymentRequest();
    $request->gameName = 'praesentium';
    $request->requestBody = new StartStageDeploymentRequestBody();
    $request->requestBody->clientToken = 'natus';
    $request->requestBody->snapshotId = 'magni';
    $request->stageName = 'sunt';
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'odit';

    $response = $sdk->sdk->startStageDeployment($request);

    if ($response->startStageDeploymentResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds tags to a GameSparks resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tags = [
        'accusantium' => 'ab',
        'maiores' => 'quidem',
    ];
    $request->resourceArn = 'ipsam';
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'autem';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'eaque';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'voluptatibus';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes tags from a GameSparks resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->resourceArn = 'perferendis';
    $request->xAmzAlgorithm = 'fugiat';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'libero';
    $request->tagKeys = [
        'dolores',
        'quis',
        'totam',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateGame

Updates details of the game.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGameRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGameRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateGameRequest();
    $request->gameName = 'dignissimos';
    $request->requestBody = new UpdateGameRequestBody();
    $request->requestBody->description = 'eaque';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'nesciunt';
    $request->xAmzCredential = 'eos';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'quam';

    $response = $sdk->sdk->updateGame($request);

    if ($response->updateGameResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateGameConfiguration

Updates one or more sections of the game configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGameConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGameConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\SectionModification;
use \OpenAPI\OpenAPI\Models\Shared\OperationEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateGameConfigurationRequest();
    $request->gameName = 'dolor';
    $request->requestBody = new UpdateGameConfigurationRequestBody();
    $request->requestBody->modifications = [
        new SectionModification(),
        new SectionModification(),
        new SectionModification(),
        new SectionModification(),
    ];
    $request->xAmzAlgorithm = 'nostrum';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'perspiciatis';
    $request->xAmzSignedHeaders = 'voluptatem';

    $response = $sdk->sdk->updateGameConfiguration($request);

    if ($response->updateGameConfigurationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSnapshot

Updates the metadata of a GameSparks snapshot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSnapshotRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSnapshotRequest();
    $request->gameName = 'porro';
    $request->requestBody = new UpdateSnapshotRequestBody();
    $request->requestBody->description = 'consequuntur';
    $request->snapshotId = 'blanditiis';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'earum';

    $response = $sdk->sdk->updateSnapshot($request);

    if ($response->updateSnapshotResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateStage

Updates the metadata of a stage.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStageRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStageRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateStageRequest();
    $request->gameName = 'modi';
    $request->requestBody = new UpdateStageRequestBody();
    $request->requestBody->description = 'iste';
    $request->requestBody->role = 'dolorum';
    $request->stageName = 'deleniti';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'quos';

    $response = $sdk->sdk->updateStage($request);

    if ($response->updateStageResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
