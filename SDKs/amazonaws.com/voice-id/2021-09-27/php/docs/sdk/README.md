# SDK

## Overview

Amazon Connect Voice ID provides real-time caller authentication and fraud risk detection, which make voice interactions in contact centers more secure and efficient.

Amazon Web Services documentation
<https://docs.aws.amazon.com/voiceid/>
### Available Operations

* [associateFraudster](#associatefraudster) - Associates the fraudsters with the watchlist specified in the same domain. 
* [createDomain](#createdomain) - Creates a domain that contains all Amazon Connect Voice ID data, such as speakers, fraudsters, customer audio, and voiceprints. Every domain is created with a default watchlist that fraudsters can be a part of.
* [createWatchlist](#createwatchlist) - Creates a watchlist that fraudsters can be a part of.
* [deleteDomain](#deletedomain) - Deletes the specified domain from Voice ID.
* [deleteFraudster](#deletefraudster) - Deletes the specified fraudster from Voice ID. This action disassociates the fraudster from any watchlists it is a part of.
* [deleteSpeaker](#deletespeaker) - Deletes the specified speaker from Voice ID.
* [deleteWatchlist](#deletewatchlist) - Deletes the specified watchlist from Voice ID. This API throws an exception when there are fraudsters in the watchlist that you are trying to delete. You must delete the fraudsters, and then delete the watchlist. Every domain has a default watchlist which cannot be deleted. 
* [describeDomain](#describedomain) - Describes the specified domain.
* [describeFraudster](#describefraudster) - Describes the specified fraudster.
* [describeFraudsterRegistrationJob](#describefraudsterregistrationjob) - Describes the specified fraudster registration job.
* [describeSpeaker](#describespeaker) - Describes the specified speaker.
* [describeSpeakerEnrollmentJob](#describespeakerenrollmentjob) - Describes the specified speaker enrollment job.
* [describeWatchlist](#describewatchlist) - Describes the specified watchlist.
* [disassociateFraudster](#disassociatefraudster) - Disassociates the fraudsters from the watchlist specified. Voice ID always expects a fraudster to be a part of at least one watchlist. If you try to disassociate a fraudster from its only watchlist, a <code>ValidationException</code> is thrown. 
* [evaluateSession](#evaluatesession) - Evaluates a specified session based on audio data accumulated during a streaming Amazon Connect Voice ID call.
* [listDomains](#listdomains) - Lists all the domains in the Amazon Web Services account. 
* [listFraudsterRegistrationJobs](#listfraudsterregistrationjobs) - Lists all the fraudster registration jobs in the domain with the given <code>JobStatus</code>. If <code>JobStatus</code> is not provided, this lists all fraudster registration jobs in the given domain. 
* [listFraudsters](#listfraudsters) - Lists all fraudsters in a specified watchlist or domain.
* [listSpeakerEnrollmentJobs](#listspeakerenrollmentjobs) - Lists all the speaker enrollment jobs in the domain with the specified <code>JobStatus</code>. If <code>JobStatus</code> is not provided, this lists all jobs with all possible speaker enrollment job statuses.
* [listSpeakers](#listspeakers) - Lists all speakers in a specified domain.
* [listTagsForResource](#listtagsforresource) - Lists all tags associated with a specified Voice ID resource.
* [listWatchlists](#listwatchlists) - Lists all watchlists in a specified domain.
* [optOutSpeaker](#optoutspeaker) - Opts out a speaker from Voice ID. A speaker can be opted out regardless of whether or not they already exist in Voice ID. If they don't yet exist, a new speaker is created in an opted out state. If they already exist, their existing status is overridden and they are opted out. Enrollment and evaluation authentication requests are rejected for opted out speakers, and opted out speakers have no voice embeddings stored in Voice ID.
* [startFraudsterRegistrationJob](#startfraudsterregistrationjob) - Starts a new batch fraudster registration job using provided details.
* [startSpeakerEnrollmentJob](#startspeakerenrollmentjob) - Starts a new batch speaker enrollment job using specified details.
* [tagResource](#tagresource) - Tags a Voice ID resource with the provided list of tags.
* [untagResource](#untagresource) - Removes specified tags from a specified Amazon Connect Voice ID resource.
* [updateDomain](#updatedomain) - Updates the specified domain. This API has clobber behavior, and clears and replaces all attributes. If an optional field, such as 'Description' is not provided, it is removed from the domain.
* [updateWatchlist](#updatewatchlist) - Updates the specified watchlist. Every domain has a default watchlist which cannot be updated. 

## associateFraudster

Associates the fraudsters with the watchlist specified in the same domain. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateFraudsterRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateFraudsterRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateFraudsterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateFraudsterRequest();
    $request->associateFraudsterRequest = new AssociateFraudsterRequest();
    $request->associateFraudsterRequest->domainId = 'deserunt';
    $request->associateFraudsterRequest->fraudsterId = 'suscipit';
    $request->associateFraudsterRequest->watchlistId = 'iure';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = AssociateFraudsterXAmzTargetEnum::VOICE_ID_ASSOCIATE_FRAUDSTER;

    $response = $sdk->sdk->associateFraudster($request);

    if ($response->associateFraudsterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDomain

Creates a domain that contains all Amazon Connect Voice ID data, such as speakers, fraudsters, customer audio, and voiceprints. Every domain is created with a default watchlist that fraudsters can be a part of.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServerSideEncryptionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomainXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDomainRequest();
    $request->createDomainRequest = new CreateDomainRequest();
    $request->createDomainRequest->clientToken = 'minus';
    $request->createDomainRequest->description = 'placeat';
    $request->createDomainRequest->name = 'voluptatum';
    $request->createDomainRequest->serverSideEncryptionConfiguration = new ServerSideEncryptionConfiguration();
    $request->createDomainRequest->serverSideEncryptionConfiguration->kmsKeyId = 'iusto';
    $request->createDomainRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = CreateDomainXAmzTargetEnum::VOICE_ID_CREATE_DOMAIN;

    $response = $sdk->sdk->createDomain($request);

    if ($response->createDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWatchlist

Creates a watchlist that fraudsters can be a part of.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateWatchlistRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateWatchlistRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateWatchlistXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWatchlistRequest();
    $request->createWatchlistRequest = new CreateWatchlistRequest();
    $request->createWatchlistRequest->clientToken = 'perferendis';
    $request->createWatchlistRequest->description = 'ipsam';
    $request->createWatchlistRequest->domainId = 'repellendus';
    $request->createWatchlistRequest->name = 'sapiente';
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'quod';
    $request->xAmzTarget = CreateWatchlistXAmzTargetEnum::VOICE_ID_CREATE_WATCHLIST;

    $response = $sdk->sdk->createWatchlist($request);

    if ($response->createWatchlistResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDomain

Deletes the specified domain from Voice ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDomainXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDomainRequest();
    $request->deleteDomainRequest = new DeleteDomainRequest();
    $request->deleteDomainRequest->domainId = 'quod';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'officia';
    $request->xAmzTarget = DeleteDomainXAmzTargetEnum::VOICE_ID_DELETE_DOMAIN;

    $response = $sdk->sdk->deleteDomain($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFraudster

Deletes the specified fraudster from Voice ID. This action disassociates the fraudster from any watchlists it is a part of.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFraudsterRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteFraudsterRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFraudsterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFraudsterRequest();
    $request->deleteFraudsterRequest = new DeleteFraudsterRequest();
    $request->deleteFraudsterRequest->domainId = 'occaecati';
    $request->deleteFraudsterRequest->fraudsterId = 'fugit';
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'optio';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'beatae';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = DeleteFraudsterXAmzTargetEnum::VOICE_ID_DELETE_FRAUDSTER;

    $response = $sdk->sdk->deleteFraudster($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSpeaker

Deletes the specified speaker from Voice ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSpeakerRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteSpeakerRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSpeakerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSpeakerRequest();
    $request->deleteSpeakerRequest = new DeleteSpeakerRequest();
    $request->deleteSpeakerRequest->domainId = 'modi';
    $request->deleteSpeakerRequest->speakerId = 'qui';
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = DeleteSpeakerXAmzTargetEnum::VOICE_ID_DELETE_SPEAKER;

    $response = $sdk->sdk->deleteSpeaker($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWatchlist

Deletes the specified watchlist from Voice ID. This API throws an exception when there are fraudsters in the watchlist that you are trying to delete. You must delete the fraudsters, and then delete the watchlist. Every domain has a default watchlist which cannot be deleted. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWatchlistRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteWatchlistRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWatchlistXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWatchlistRequest();
    $request->deleteWatchlistRequest = new DeleteWatchlistRequest();
    $request->deleteWatchlistRequest->domainId = 'ad';
    $request->deleteWatchlistRequest->watchlistId = 'natus';
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'laboriosam';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = DeleteWatchlistXAmzTargetEnum::VOICE_ID_DELETE_WATCHLIST;

    $response = $sdk->sdk->deleteWatchlist($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDomain

Describes the specified domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDomainXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDomainRequest();
    $request->describeDomainRequest = new DescribeDomainRequest();
    $request->describeDomainRequest->domainId = 'fuga';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'architecto';
    $request->xAmzTarget = DescribeDomainXAmzTargetEnum::VOICE_ID_DESCRIBE_DOMAIN;

    $response = $sdk->sdk->describeDomain($request);

    if ($response->describeDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeFraudster

Describes the specified fraudster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFraudsterRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeFraudsterRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFraudsterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeFraudsterRequest();
    $request->describeFraudsterRequest = new DescribeFraudsterRequest();
    $request->describeFraudsterRequest->domainId = 'ipsa';
    $request->describeFraudsterRequest->fraudsterId = 'reiciendis';
    $request->xAmzAlgorithm = 'est';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'explicabo';
    $request->xAmzTarget = DescribeFraudsterXAmzTargetEnum::VOICE_ID_DESCRIBE_FRAUDSTER;

    $response = $sdk->sdk->describeFraudster($request);

    if ($response->describeFraudsterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeFraudsterRegistrationJob

Describes the specified fraudster registration job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFraudsterRegistrationJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeFraudsterRegistrationJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFraudsterRegistrationJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeFraudsterRegistrationJobRequest();
    $request->describeFraudsterRegistrationJobRequest = new DescribeFraudsterRegistrationJobRequest();
    $request->describeFraudsterRegistrationJobRequest->domainId = 'nobis';
    $request->describeFraudsterRegistrationJobRequest->jobId = 'enim';
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'culpa';
    $request->xAmzTarget = DescribeFraudsterRegistrationJobXAmzTargetEnum::VOICE_ID_DESCRIBE_FRAUDSTER_REGISTRATION_JOB;

    $response = $sdk->sdk->describeFraudsterRegistrationJob($request);

    if ($response->describeFraudsterRegistrationJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSpeaker

Describes the specified speaker.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSpeakerRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeSpeakerRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSpeakerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeSpeakerRequest();
    $request->describeSpeakerRequest = new DescribeSpeakerRequest();
    $request->describeSpeakerRequest->domainId = 'doloribus';
    $request->describeSpeakerRequest->speakerId = 'sapiente';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'repellat';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->xAmzTarget = DescribeSpeakerXAmzTargetEnum::VOICE_ID_DESCRIBE_SPEAKER;

    $response = $sdk->sdk->describeSpeaker($request);

    if ($response->describeSpeakerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSpeakerEnrollmentJob

Describes the specified speaker enrollment job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSpeakerEnrollmentJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeSpeakerEnrollmentJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSpeakerEnrollmentJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeSpeakerEnrollmentJobRequest();
    $request->describeSpeakerEnrollmentJobRequest = new DescribeSpeakerEnrollmentJobRequest();
    $request->describeSpeakerEnrollmentJobRequest->domainId = 'occaecati';
    $request->describeSpeakerEnrollmentJobRequest->jobId = 'numquam';
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'velit';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'quia';
    $request->xAmzSignedHeaders = 'quis';
    $request->xAmzTarget = DescribeSpeakerEnrollmentJobXAmzTargetEnum::VOICE_ID_DESCRIBE_SPEAKER_ENROLLMENT_JOB;

    $response = $sdk->sdk->describeSpeakerEnrollmentJob($request);

    if ($response->describeSpeakerEnrollmentJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeWatchlist

Describes the specified watchlist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWatchlistRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeWatchlistRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWatchlistXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeWatchlistRequest();
    $request->describeWatchlistRequest = new DescribeWatchlistRequest();
    $request->describeWatchlistRequest->domainId = 'vitae';
    $request->describeWatchlistRequest->watchlistId = 'laborum';
    $request->xAmzAlgorithm = 'animi';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'sequi';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = DescribeWatchlistXAmzTargetEnum::VOICE_ID_DESCRIBE_WATCHLIST;

    $response = $sdk->sdk->describeWatchlist($request);

    if ($response->describeWatchlistResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateFraudster

Disassociates the fraudsters from the watchlist specified. Voice ID always expects a fraudster to be a part of at least one watchlist. If you try to disassociate a fraudster from its only watchlist, a <code>ValidationException</code> is thrown. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateFraudsterRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateFraudsterRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateFraudsterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateFraudsterRequest();
    $request->disassociateFraudsterRequest = new DisassociateFraudsterRequest();
    $request->disassociateFraudsterRequest->domainId = 'id';
    $request->disassociateFraudsterRequest->fraudsterId = 'possimus';
    $request->disassociateFraudsterRequest->watchlistId = 'aut';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->xAmzTarget = DisassociateFraudsterXAmzTargetEnum::VOICE_ID_DISASSOCIATE_FRAUDSTER;

    $response = $sdk->sdk->disassociateFraudster($request);

    if ($response->disassociateFraudsterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## evaluateSession

Evaluates a specified session based on audio data accumulated during a streaming Amazon Connect Voice ID call.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EvaluateSessionRequest;
use \OpenAPI\OpenAPI\Models\Shared\EvaluateSessionRequest;
use \OpenAPI\OpenAPI\Models\Operations\EvaluateSessionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EvaluateSessionRequest();
    $request->evaluateSessionRequest = new EvaluateSessionRequest();
    $request->evaluateSessionRequest->domainId = 'vero';
    $request->evaluateSessionRequest->sessionNameOrId = 'nihil';
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = EvaluateSessionXAmzTargetEnum::VOICE_ID_EVALUATE_SESSION;

    $response = $sdk->sdk->evaluateSession($request);

    if ($response->evaluateSessionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDomains

Lists all the domains in the Amazon Web Services account. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDomainsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDomainsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDomainsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDomainsRequest();
    $request->listDomainsRequest = new ListDomainsRequest();
    $request->listDomainsRequest->maxResults = 39187;
    $request->listDomainsRequest->nextToken = 'reprehenderit';
    $request->maxResults = 'ut';
    $request->nextToken = 'maiores';
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'harum';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = ListDomainsXAmzTargetEnum::VOICE_ID_LIST_DOMAINS;

    $response = $sdk->sdk->listDomains($request);

    if ($response->listDomainsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFraudsterRegistrationJobs

Lists all the fraudster registration jobs in the domain with the given <code>JobStatus</code>. If <code>JobStatus</code> is not provided, this lists all fraudster registration jobs in the given domain. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFraudsterRegistrationJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListFraudsterRegistrationJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\FraudsterRegistrationJobStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListFraudsterRegistrationJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFraudsterRegistrationJobsRequest();
    $request->listFraudsterRegistrationJobsRequest = new ListFraudsterRegistrationJobsRequest();
    $request->listFraudsterRegistrationJobsRequest->domainId = 'accusamus';
    $request->listFraudsterRegistrationJobsRequest->jobStatus = FraudsterRegistrationJobStatusEnum::COMPLETED;
    $request->listFraudsterRegistrationJobsRequest->maxResults = 918236;
    $request->listFraudsterRegistrationJobsRequest->nextToken = 'quae';
    $request->maxResults = 'ipsum';
    $request->nextToken = 'quidem';
    $request->xAmzAlgorithm = 'molestias';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'rem';
    $request->xAmzSignedHeaders = 'voluptates';
    $request->xAmzTarget = ListFraudsterRegistrationJobsXAmzTargetEnum::VOICE_ID_LIST_FRAUDSTER_REGISTRATION_JOBS;

    $response = $sdk->sdk->listFraudsterRegistrationJobs($request);

    if ($response->listFraudsterRegistrationJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFraudsters

Lists all fraudsters in a specified watchlist or domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFraudstersRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListFraudstersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListFraudstersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFraudstersRequest();
    $request->listFraudstersRequest = new ListFraudstersRequest();
    $request->listFraudstersRequest->domainId = 'quasi';
    $request->listFraudstersRequest->maxResults = 921158;
    $request->listFraudstersRequest->nextToken = 'sint';
    $request->listFraudstersRequest->watchlistId = 'veritatis';
    $request->maxResults = 'itaque';
    $request->nextToken = 'incidunt';
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'consequatur';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'distinctio';
    $request->xAmzTarget = ListFraudstersXAmzTargetEnum::VOICE_ID_LIST_FRAUDSTERS;

    $response = $sdk->sdk->listFraudsters($request);

    if ($response->listFraudstersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSpeakerEnrollmentJobs

Lists all the speaker enrollment jobs in the domain with the specified <code>JobStatus</code>. If <code>JobStatus</code> is not provided, this lists all jobs with all possible speaker enrollment job statuses.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSpeakerEnrollmentJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListSpeakerEnrollmentJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SpeakerEnrollmentJobStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListSpeakerEnrollmentJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSpeakerEnrollmentJobsRequest();
    $request->listSpeakerEnrollmentJobsRequest = new ListSpeakerEnrollmentJobsRequest();
    $request->listSpeakerEnrollmentJobsRequest->domainId = 'quibusdam';
    $request->listSpeakerEnrollmentJobsRequest->jobStatus = SpeakerEnrollmentJobStatusEnum::IN_PROGRESS;
    $request->listSpeakerEnrollmentJobsRequest->maxResults = 264730;
    $request->listSpeakerEnrollmentJobsRequest->nextToken = 'qui';
    $request->maxResults = 'aliquid';
    $request->nextToken = 'cupiditate';
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'magni';
    $request->xAmzDate = 'assumenda';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'alias';
    $request->xAmzSignedHeaders = 'fugit';
    $request->xAmzTarget = ListSpeakerEnrollmentJobsXAmzTargetEnum::VOICE_ID_LIST_SPEAKER_ENROLLMENT_JOBS;

    $response = $sdk->sdk->listSpeakerEnrollmentJobs($request);

    if ($response->listSpeakerEnrollmentJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSpeakers

Lists all speakers in a specified domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSpeakersRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListSpeakersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSpeakersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSpeakersRequest();
    $request->listSpeakersRequest = new ListSpeakersRequest();
    $request->listSpeakersRequest->domainId = 'dolorum';
    $request->listSpeakersRequest->maxResults = 569618;
    $request->listSpeakersRequest->nextToken = 'tempora';
    $request->maxResults = 'facilis';
    $request->nextToken = 'tempore';
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'eligendi';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->xAmzTarget = ListSpeakersXAmzTargetEnum::VOICE_ID_LIST_SPEAKERS;

    $response = $sdk->sdk->listSpeakers($request);

    if ($response->listSpeakersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists all tags associated with a specified Voice ID resource.

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
    $request->listTagsForResourceRequest->resourceArn = 'provident';
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'a';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::VOICE_ID_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWatchlists

Lists all watchlists in a specified domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListWatchlistsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListWatchlistsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListWatchlistsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWatchlistsRequest();
    $request->listWatchlistsRequest = new ListWatchlistsRequest();
    $request->listWatchlistsRequest->domainId = 'in';
    $request->listWatchlistsRequest->maxResults = 449198;
    $request->listWatchlistsRequest->nextToken = 'illum';
    $request->maxResults = 'maiores';
    $request->nextToken = 'rerum';
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'facere';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'laborum';
    $request->xAmzTarget = ListWatchlistsXAmzTargetEnum::VOICE_ID_LIST_WATCHLISTS;

    $response = $sdk->sdk->listWatchlists($request);

    if ($response->listWatchlistsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## optOutSpeaker

Opts out a speaker from Voice ID. A speaker can be opted out regardless of whether or not they already exist in Voice ID. If they don't yet exist, a new speaker is created in an opted out state. If they already exist, their existing status is overridden and they are opted out. Enrollment and evaluation authentication requests are rejected for opted out speakers, and opted out speakers have no voice embeddings stored in Voice ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\OptOutSpeakerRequest;
use \OpenAPI\OpenAPI\Models\Shared\OptOutSpeakerRequest;
use \OpenAPI\OpenAPI\Models\Operations\OptOutSpeakerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OptOutSpeakerRequest();
    $request->optOutSpeakerRequest = new OptOutSpeakerRequest();
    $request->optOutSpeakerRequest->domainId = 'accusamus';
    $request->optOutSpeakerRequest->speakerId = 'non';
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'nam';
    $request->xAmzTarget = OptOutSpeakerXAmzTargetEnum::VOICE_ID_OPT_OUT_SPEAKER;

    $response = $sdk->sdk->optOutSpeaker($request);

    if ($response->optOutSpeakerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startFraudsterRegistrationJob

Starts a new batch fraudster registration job using provided details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartFraudsterRegistrationJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartFraudsterRegistrationJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\InputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\OutputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\RegistrationConfig;
use \OpenAPI\OpenAPI\Models\Shared\DuplicateRegistrationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\StartFraudsterRegistrationJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartFraudsterRegistrationJobRequest();
    $request->startFraudsterRegistrationJobRequest = new StartFraudsterRegistrationJobRequest();
    $request->startFraudsterRegistrationJobRequest->clientToken = 'id';
    $request->startFraudsterRegistrationJobRequest->dataAccessRoleArn = 'blanditiis';
    $request->startFraudsterRegistrationJobRequest->domainId = 'deleniti';
    $request->startFraudsterRegistrationJobRequest->inputDataConfig = new InputDataConfig();
    $request->startFraudsterRegistrationJobRequest->inputDataConfig->s3Uri = 'sapiente';
    $request->startFraudsterRegistrationJobRequest->jobName = 'amet';
    $request->startFraudsterRegistrationJobRequest->outputDataConfig = new OutputDataConfig();
    $request->startFraudsterRegistrationJobRequest->outputDataConfig->kmsKeyId = 'deserunt';
    $request->startFraudsterRegistrationJobRequest->outputDataConfig->s3Uri = 'nisi';
    $request->startFraudsterRegistrationJobRequest->registrationConfig = new RegistrationConfig();
    $request->startFraudsterRegistrationJobRequest->registrationConfig->duplicateRegistrationAction = DuplicateRegistrationActionEnum::SKIP;
    $request->startFraudsterRegistrationJobRequest->registrationConfig->fraudsterSimilarityThreshold = 618809;
    $request->startFraudsterRegistrationJobRequest->registrationConfig->watchlistIds = [
        'molestiae',
        'perferendis',
        'nihil',
    ];
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = StartFraudsterRegistrationJobXAmzTargetEnum::VOICE_ID_START_FRAUDSTER_REGISTRATION_JOB;

    $response = $sdk->sdk->startFraudsterRegistrationJob($request);

    if ($response->startFraudsterRegistrationJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startSpeakerEnrollmentJob

Starts a new batch speaker enrollment job using specified details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartSpeakerEnrollmentJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartSpeakerEnrollmentJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\EnrollmentConfig;
use \OpenAPI\OpenAPI\Models\Shared\ExistingEnrollmentActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnrollmentJobFraudDetectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\FraudDetectionActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\InputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\OutputDataConfig;
use \OpenAPI\OpenAPI\Models\Operations\StartSpeakerEnrollmentJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartSpeakerEnrollmentJobRequest();
    $request->startSpeakerEnrollmentJobRequest = new StartSpeakerEnrollmentJobRequest();
    $request->startSpeakerEnrollmentJobRequest->clientToken = 'nobis';
    $request->startSpeakerEnrollmentJobRequest->dataAccessRoleArn = 'eum';
    $request->startSpeakerEnrollmentJobRequest->domainId = 'vero';
    $request->startSpeakerEnrollmentJobRequest->enrollmentConfig = new EnrollmentConfig();
    $request->startSpeakerEnrollmentJobRequest->enrollmentConfig->existingEnrollmentAction = ExistingEnrollmentActionEnum::SKIP;
    $request->startSpeakerEnrollmentJobRequest->enrollmentConfig->fraudDetectionConfig = new EnrollmentJobFraudDetectionConfig();
    $request->startSpeakerEnrollmentJobRequest->enrollmentConfig->fraudDetectionConfig->fraudDetectionAction = FraudDetectionActionEnum::IGNORE;
    $request->startSpeakerEnrollmentJobRequest->enrollmentConfig->fraudDetectionConfig->riskThreshold = 298282;
    $request->startSpeakerEnrollmentJobRequest->enrollmentConfig->fraudDetectionConfig->watchlistIds = [
        'excepturi',
    ];
    $request->startSpeakerEnrollmentJobRequest->inputDataConfig = new InputDataConfig();
    $request->startSpeakerEnrollmentJobRequest->inputDataConfig->s3Uri = 'ullam';
    $request->startSpeakerEnrollmentJobRequest->jobName = 'provident';
    $request->startSpeakerEnrollmentJobRequest->outputDataConfig = new OutputDataConfig();
    $request->startSpeakerEnrollmentJobRequest->outputDataConfig->kmsKeyId = 'quos';
    $request->startSpeakerEnrollmentJobRequest->outputDataConfig->s3Uri = 'sint';
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzTarget = StartSpeakerEnrollmentJobXAmzTargetEnum::VOICE_ID_START_SPEAKER_ENROLLMENT_JOB;

    $response = $sdk->sdk->startSpeakerEnrollmentJob($request);

    if ($response->startSpeakerEnrollmentJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Tags a Voice ID resource with the provided list of tags.

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
    $request->tagResourceRequest->resourceArn = 'necessitatibus';
    $request->tagResourceRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'eius';
    $request->xAmzSignedHeaders = 'maxime';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::VOICE_ID_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes specified tags from a specified Amazon Connect Voice ID resource.

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
    $request->untagResourceRequest->resourceArn = 'deleniti';
    $request->untagResourceRequest->tagKeys = [
        'in',
        'architecto',
        'architecto',
    ];
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'expedita';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'repellat';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'sed';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::VOICE_ID_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDomain

Updates the specified domain. This API has clobber behavior, and clears and replaces all attributes. If an optional field, such as 'Description' is not provided, it is removed from the domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServerSideEncryptionConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDomainXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDomainRequest();
    $request->updateDomainRequest = new UpdateDomainRequest();
    $request->updateDomainRequest->description = 'saepe';
    $request->updateDomainRequest->domainId = 'pariatur';
    $request->updateDomainRequest->name = 'accusantium';
    $request->updateDomainRequest->serverSideEncryptionConfiguration = new ServerSideEncryptionConfiguration();
    $request->updateDomainRequest->serverSideEncryptionConfiguration->kmsKeyId = 'consequuntur';
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'magni';
    $request->xAmzDate = 'sunt';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->xAmzTarget = UpdateDomainXAmzTargetEnum::VOICE_ID_UPDATE_DOMAIN;

    $response = $sdk->sdk->updateDomain($request);

    if ($response->updateDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWatchlist

Updates the specified watchlist. Every domain has a default watchlist which cannot be updated. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWatchlistRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateWatchlistRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWatchlistXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWatchlistRequest();
    $request->updateWatchlistRequest = new UpdateWatchlistRequest();
    $request->updateWatchlistRequest->description = 'maxime';
    $request->updateWatchlistRequest->domainId = 'ea';
    $request->updateWatchlistRequest->name = 'excepturi';
    $request->updateWatchlistRequest->watchlistId = 'odit';
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->xAmzTarget = UpdateWatchlistXAmzTargetEnum::VOICE_ID_UPDATE_WATCHLIST;

    $response = $sdk->sdk->updateWatchlist($request);

    if ($response->updateWatchlistResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
