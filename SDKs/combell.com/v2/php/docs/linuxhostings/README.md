# linuxHostings

## Overview

Manage your linux hostings.

### Available Operations

* [addScheduledTasks](#addscheduledtasks) - Add a scheduled task
* [addSshKey](#addsshkey) - Add a SSH key
* [changeApcu](#changeapcu) - Configure PHP APCu setting
* [changeAutoRedirect](#changeautoredirect) - Configure auto redirect
* [changeGzipCompression](#changegzipcompression) - Enable/disable GZIP compression
* [changeLetsEncrypt](#changeletsencrypt) - Configure let's encrypt
* [changePhpMemoryLimit](#changephpmemorylimit) - Configure PHP memory limit
* [changePhpVersion](#changephpversion) - Change the Linux hosting PHP version.
* [configureFtp](#configureftp) - Configure FTP
* [configureHttp2](#configurehttp2) - Configure HTTP/2
* [configureScheduledTask](#configurescheduledtask) - Configure a scheduled task
* [configureSsh](#configuressh) - Configure SSH
* [createHostHeader](#createhostheader) - Create a host header
* [createSubsite](#createsubsite) - Create a subsite
* [deleteScheduledTask](#deletescheduledtask) - Delete a scheduled task
* [deleteSshKey](#deletesshkey) - Delete a SSH key
* [deleteSubsite](#deletesubsite) - Delete a subsite
* [getAvailablePhpVersions](#getavailablephpversions) - Get the available PHP versions.
* [getLinuxHosting](#getlinuxhosting) - Linux hosting detail
* [getLinuxHostings](#getlinuxhostings) - Overview of linux hostings
* [getScheduledTask](#getscheduledtask) - Get scheduled task detail
* [getScheduledTasks](#getscheduledtasks) - Overview of scheduled tasks
* [getSshKeys](#getsshkeys) - Overview of SSH keys

## addScheduledTasks

Add a scheduled task

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AddScheduledTasksRequest;
use \OpenAPI\OpenAPI\Models\Shared\ScheduledTask;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddScheduledTasksRequest();
    $request->scheduledTask = new ScheduledTask();
    $request->scheduledTask->cronExpression = 'illum';
    $request->scheduledTask->enabled = false;
    $request->scheduledTask->id = 'fb14cd66-ae39-45ef-b9ba-88f3a6699707';
    $request->scheduledTask->scriptLocation = 'magnam';
    $request->domainNamePathParameter = 'distinctio';
    $request->domainNameQueryParameter = 'id';

    $response = $sdk->linuxHostings->addScheduledTasks($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addSshKey

Add a SSH key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AddSshKeyRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddSshKeyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddSshKeyRequest();
    $request->addSshKeyRequest = new AddSshKeyRequest();
    $request->addSshKeyRequest->publicKey = 'labore';
    $request->domainNamePathParameter = 'labore';
    $request->domainNameQueryParameter = 'suscipit';

    $response = $sdk->linuxHostings->addSshKey($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## changeApcu

Configure PHP APCu setting

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChangeApcuRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePhpAPcuRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChangeApcuRequest();
    $request->updatePhpAPcuRequest = new UpdatePhpAPcuRequest();
    $request->updatePhpAPcuRequest->apcuSize = 618016;
    $request->updatePhpAPcuRequest->enabled = false;
    $request->domainNamePathParameter = 'nobis';
    $request->domainNameQueryParameter = 'eum';

    $response = $sdk->linuxHostings->changeApcu($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## changeAutoRedirect

Configure auto redirect

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChangeAutoRedirectRequest;
use \OpenAPI\OpenAPI\Models\Shared\AutoRedirectConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChangeAutoRedirectRequest();
    $request->autoRedirectConfig = new AutoRedirectConfig();
    $request->autoRedirectConfig->enabled = false;
    $request->domainNamePathParameter = 'vero';
    $request->domainNameQueryParameter = 'aspernatur';
    $request->hostname = 'buzzing-efficiency.com';

    $response = $sdk->linuxHostings->changeAutoRedirect($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## changeGzipCompression

Enable/disable GZIP compression

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChangeGzipCompressionRequest;
use \OpenAPI\OpenAPI\Models\Shared\GzipConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChangeGzipCompressionRequest();
    $request->gzipConfig = new GzipConfig();
    $request->gzipConfig->enabled = false;
    $request->domainNamePathParameter = 'excepturi';
    $request->domainNameQueryParameter = 'ullam';

    $response = $sdk->linuxHostings->changeGzipCompression($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## changeLetsEncrypt

Configure let's encrypt

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChangeLetsEncryptRequest;
use \OpenAPI\OpenAPI\Models\Shared\LetsEncryptConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChangeLetsEncryptRequest();
    $request->letsEncryptConfig = new LetsEncryptConfig();
    $request->letsEncryptConfig->enabled = false;
    $request->domainNamePathParameter = 'provident';
    $request->domainNameQueryParameter = 'quos';
    $request->hostname = 'noted-antling.name';

    $response = $sdk->linuxHostings->changeLetsEncrypt($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## changePhpMemoryLimit

Configure PHP memory limit

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChangePhpMemoryLimitRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePhpMemoryLimitRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChangePhpMemoryLimitRequest();
    $request->updatePhpMemoryLimitRequest = new UpdatePhpMemoryLimitRequest();
    $request->updatePhpMemoryLimitRequest->memoryLimit = 968962;
    $request->domainNamePathParameter = 'mollitia';
    $request->domainNameQueryParameter = 'ad';

    $response = $sdk->linuxHostings->changePhpMemoryLimit($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## changePhpVersion

Change the Linux hosting PHP version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChangePhpVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\PhpVersion;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChangePhpVersionRequest();
    $request->phpVersion = new PhpVersion();
    $request->phpVersion->version = 'eum';
    $request->domainNamePathParameter = 'dolor';
    $request->domainNameQueryParameter = 'necessitatibus';

    $response = $sdk->linuxHostings->changePhpVersion($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## configureFtp

Configure FTP

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConfigureFtpRequest;
use \OpenAPI\OpenAPI\Models\Shared\FtpConfiguration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfigureFtpRequest();
    $request->ftpConfiguration = new FtpConfiguration();
    $request->ftpConfiguration->enabled = false;
    $request->domainNamePathParameter = 'odit';
    $request->domainNameQueryParameter = 'nemo';

    $response = $sdk->linuxHostings->configureFtp($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## configureHttp2

Configure HTTP/2

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConfigureHttp2Request;
use \OpenAPI\OpenAPI\Models\Shared\Http2Configuration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfigureHttp2Request();
    $request->http2Configuration = new Http2Configuration();
    $request->http2Configuration->enabled = false;
    $request->domainNamePathParameter = 'quasi';
    $request->domainNameQueryParameter = 'iure';
    $request->siteNamePathParameter = 'doloribus';
    $request->siteNameQueryParameter = 'debitis';

    $response = $sdk->linuxHostings->configureHttp2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## configureScheduledTask

Configure a scheduled task

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConfigureScheduledTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\ScheduledTask;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfigureScheduledTaskRequest();
    $request->scheduledTask = new ScheduledTask();
    $request->scheduledTask->cronExpression = 'eius';
    $request->scheduledTask->enabled = false;
    $request->scheduledTask->id = 'c8b711e5-b7fd-42ed-8289-21cddc692601';
    $request->scheduledTask->scriptLocation = 'maiores';
    $request->domainNamePathParameter = 'quidem';
    $request->domainNameQueryParameter = 'ipsam';
    $request->scheduledTaskIdPathParameter = 'voluptate';
    $request->scheduledTaskIdQueryParameter = 'autem';

    $response = $sdk->linuxHostings->configureScheduledTask($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## configureSsh

Configure SSH

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConfigureSshRequest;
use \OpenAPI\OpenAPI\Models\Shared\SshConfiguration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfigureSshRequest();
    $request->sshConfiguration = new SshConfiguration();
    $request->sshConfiguration->enabled = false;
    $request->domainNamePathParameter = 'nam';
    $request->domainNameQueryParameter = 'eaque';

    $response = $sdk->linuxHostings->configureSsh($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createHostHeader

Create a host header

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateHostHeaderRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddHostHeaderRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateHostHeaderRequest();
    $request->addHostHeaderRequest = new AddHostHeaderRequest();
    $request->addHostHeaderRequest->domainName = 'pariatur';
    $request->domainNamePathParameter = 'nemo';
    $request->domainNameQueryParameter = 'voluptatibus';
    $request->siteNamePathParameter = 'perferendis';
    $request->siteNameQueryParameter = 'fugiat';

    $response = $sdk->linuxHostings->createHostHeader($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSubsite

Create a subsite

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSubsiteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddSubsiteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSubsiteRequest();
    $request->addSubsiteRequest = new AddSubsiteRequest();
    $request->addSubsiteRequest->domainName = 'amet';
    $request->addSubsiteRequest->path = 'aut';
    $request->domainNamePathParameter = 'cumque';
    $request->domainNameQueryParameter = 'corporis';

    $response = $sdk->linuxHostings->createSubsite($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteScheduledTask

Delete a scheduled task

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteScheduledTaskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteScheduledTaskRequest();
    $request->domainNamePathParameter = 'hic';
    $request->domainNameQueryParameter = 'libero';
    $request->scheduledTaskIdPathParameter = 'nobis';
    $request->scheduledTaskIdQueryParameter = 'dolores';

    $response = $sdk->linuxHostings->deleteScheduledTask($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSshKey

Delete a SSH key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSshKeyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSshKeyRequest();
    $request->domainNamePathParameter = 'quis';
    $request->domainNameQueryParameter = 'totam';
    $request->fingerprint = 'dignissimos';

    $response = $sdk->linuxHostings->deleteSshKey($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSubsite

Delete a subsite

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSubsiteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSubsiteRequest();
    $request->domainNamePathParameter = 'eaque';
    $request->domainNameQueryParameter = 'quis';
    $request->siteNamePathParameter = 'nesciunt';
    $request->siteNameQueryParameter = 'eos';

    $response = $sdk->linuxHostings->deleteSubsite($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAvailablePhpVersions

Get the available PHP versions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAvailablePhpVersionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAvailablePhpVersionsRequest();
    $request->domainNamePathParameter = 'perferendis';
    $request->domainNameQueryParameter = 'dolores';

    $response = $sdk->linuxHostings->getAvailablePhpVersions($request);

    if ($response->phpVersions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLinuxHosting

Linux hosting detail

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLinuxHostingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLinuxHostingRequest();
    $request->domainNamePathParameter = 'minus';
    $request->domainNameQueryParameter = 'quam';

    $response = $sdk->linuxHostings->getLinuxHosting($request);

    if ($response->linuxHostingDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLinuxHostings

Overview of linux hostings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLinuxHostingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLinuxHostingsRequest();
    $request->skip = 223924;
    $request->take = 874573;

    $response = $sdk->linuxHostings->getLinuxHostings($request);

    if ($response->linuxHostings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getScheduledTask

Get scheduled task detail

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetScheduledTaskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetScheduledTaskRequest();
    $request->domainNamePathParameter = 'nostrum';
    $request->domainNameQueryParameter = 'hic';
    $request->scheduledTaskIdPathParameter = 'recusandae';
    $request->scheduledTaskIdQueryParameter = 'omnis';

    $response = $sdk->linuxHostings->getScheduledTask($request);

    if ($response->scheduledTask !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getScheduledTasks

Manage scheduled tasks which are also manageable via the control panel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetScheduledTasksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetScheduledTasksRequest();
    $request->domainNamePathParameter = 'facilis';
    $request->domainNameQueryParameter = 'perspiciatis';

    $response = $sdk->linuxHostings->getScheduledTasks($request);

    if ($response->scheduledTasks !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSshKeys

Overview of SSH keys

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSshKeysRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSshKeysRequest();
    $request->domainNamePathParameter = 'voluptatem';
    $request->domainNameQueryParameter = 'porro';

    $response = $sdk->linuxHostings->getSshKeys($request);

    if ($response->sshKeys !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
