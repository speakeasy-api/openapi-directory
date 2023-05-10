# dnsRecords

## Overview

Manage the dns records for a domain name.<p>The interface allows you to manage following records: A, CNAME, MX, SRV, ALIAS and TXT.

### Available Operations

* [deleteDnsDomainNameRecordsRecordId](#deletednsdomainnamerecordsrecordid) - Delete a record
* [getDnsDomainNameRecords](#getdnsdomainnamerecords) - Get records
* [getDnsDomainNameRecordsRecordId](#getdnsdomainnamerecordsrecordid) - Get specific record
* [postDnsDomainNameRecords](#postdnsdomainnamerecords) - Create a record
* [putDnsDomainNameRecordsRecordId](#putdnsdomainnamerecordsrecordid) - Edit a record

## deleteDnsDomainNameRecordsRecordId

Delete a record

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDnsDomainNameRecordsRecordIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDnsDomainNameRecordsRecordIdRequest();
    $request->domainNamePathParameter = 'iure';
    $request->domainNameQueryParameter = 'magnam';
    $request->recordIdPathParameter = 'debitis';
    $request->recordIdQueryParameter = 'ipsa';

    $response = $sdk->dnsRecords->deleteDnsDomainNameRecordsRecordId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDnsDomainNameRecords

Get records

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDnsDomainNameRecordsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDnsDomainNameRecordsRequest();
    $request->domainNamePathParameter = 'delectus';
    $request->domainNameQueryParameter = 'tempora';
    $request->recordName = 'suscipit';
    $request->service = 'molestiae';
    $request->skip = 791725;
    $request->take = 812169;
    $request->type = 'voluptatum';

    $response = $sdk->dnsRecords->getDnsDomainNameRecords($request);

    if ($response->dnsRecords !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDnsDomainNameRecordsRecordId

Get specific record

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDnsDomainNameRecordsRecordIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDnsDomainNameRecordsRecordIdRequest();
    $request->domainNamePathParameter = 'iusto';
    $request->domainNameQueryParameter = 'excepturi';
    $request->recordIdPathParameter = 'nisi';
    $request->recordIdQueryParameter = 'recusandae';

    $response = $sdk->dnsRecords->getDnsDomainNameRecordsRecordId($request);

    if ($response->dnsRecord !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDnsDomainNameRecords

Create a record

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostDnsDomainNameRecordsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DnsRecord;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostDnsDomainNameRecordsRequest();
    $request->dnsRecord = new DnsRecord();
    $request->dnsRecord->content = 'temporibus';
    $request->dnsRecord->id = '151a05df-c2dd-4f7c-878c-a1ba928fc816';
    $request->dnsRecord->port = 473600;
    $request->dnsRecord->priority = 264555;
    $request->dnsRecord->protocol = 'qui';
    $request->dnsRecord->recordName = 'impedit';
    $request->dnsRecord->service = 'cum';
    $request->dnsRecord->target = 'esse';
    $request->dnsRecord->ttl = 216550;
    $request->dnsRecord->type = 'excepturi';
    $request->dnsRecord->weight = 135218;
    $request->domainNamePathParameter = 'perferendis';
    $request->domainNameQueryParameter = 'ad';

    $response = $sdk->dnsRecords->postDnsDomainNameRecords($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putDnsDomainNameRecordsRecordId

Edit a record

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutDnsDomainNameRecordsRecordIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\DnsRecord;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutDnsDomainNameRecordsRecordIdRequest();
    $request->dnsRecord = new DnsRecord();
    $request->dnsRecord->content = 'natus';
    $request->dnsRecord->id = '29396fea-7596-4eb1-8faa-a2352c595590';
    $request->dnsRecord->port = 438601;
    $request->dnsRecord->priority = 634274;
    $request->dnsRecord->protocol = 'doloribus';
    $request->dnsRecord->recordName = 'sapiente';
    $request->dnsRecord->service = 'architecto';
    $request->dnsRecord->target = 'mollitia';
    $request->dnsRecord->ttl = 208876;
    $request->dnsRecord->type = 'culpa';
    $request->dnsRecord->weight = 161309;
    $request->domainNamePathParameter = 'repellat';
    $request->domainNameQueryParameter = 'mollitia';
    $request->recordIdPathParameter = 'occaecati';
    $request->recordIdQueryParameter = 'numquam';

    $response = $sdk->dnsRecords->putDnsDomainNameRecordsRecordId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
