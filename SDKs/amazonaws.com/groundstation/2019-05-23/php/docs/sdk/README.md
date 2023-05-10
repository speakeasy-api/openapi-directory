# SDK

## Overview

Welcome to the AWS Ground Station API Reference. AWS Ground Station is a fully managed service that enables you to control satellite communications, downlink and process satellite data, and scale your satellite operations efficiently and cost-effectively without having to build or manage your own ground station infrastructure.

Amazon Web Services documentation
<https://docs.aws.amazon.com/groundstation/>
### Available Operations

* [cancelContact](#cancelcontact) - Cancels a contact with a specified contact ID.
* [createConfig](#createconfig) - <p>Creates a <code>Config</code> with the specified <code>configData</code> parameters.</p> <p>Only one type of <code>configData</code> can be specified.</p>
* [createDataflowEndpointGroup](#createdataflowendpointgroup) - <p>Creates a <code>DataflowEndpoint</code> group containing the specified list of <code>DataflowEndpoint</code> objects.</p> <p>The <code>name</code> field in each endpoint is used in your mission profile <code>DataflowEndpointConfig</code> to specify which endpoints to use during a contact.</p> <p>When a contact uses multiple <code>DataflowEndpointConfig</code> objects, each <code>Config</code> must match a <code>DataflowEndpoint</code> in the same group.</p>
* [createEphemeris](#createephemeris) - Creates an Ephemeris with the specified <code>EphemerisData</code>.
* [createMissionProfile](#createmissionprofile) - <p>Creates a mission profile.</p> <p> <code>dataflowEdges</code> is a list of lists of strings. Each lower level list of strings has two elements: a <i>from</i> ARN and a <i>to</i> ARN.</p>
* [deleteConfig](#deleteconfig) - Deletes a <code>Config</code>.
* [deleteDataflowEndpointGroup](#deletedataflowendpointgroup) - Deletes a dataflow endpoint group.
* [deleteEphemeris](#deleteephemeris) - Deletes an ephemeris
* [deleteMissionProfile](#deletemissionprofile) - Deletes a mission profile.
* [describeContact](#describecontact) - Describes an existing contact.
* [describeEphemeris](#describeephemeris) - Describes an existing ephemeris.
* [getAgentConfiguration](#getagentconfiguration) - <note> <p> For use by AWS Ground Station Agent and shouldn't be called directly.</p> </note> <p>Gets the latest configuration information for a registered agent.</p>
* [getConfig](#getconfig) - <p>Returns <code>Config</code> information.</p> <p>Only one <code>Config</code> response can be returned.</p>
* [getDataflowEndpointGroup](#getdataflowendpointgroup) - Returns the dataflow endpoint group.
* [getMinuteUsage](#getminuteusage) - Returns the number of minutes used by account.
* [getMissionProfile](#getmissionprofile) - Returns a mission profile.
* [getSatellite](#getsatellite) - Returns a satellite.
* [listConfigs](#listconfigs) - Returns a list of <code>Config</code> objects.
* [listContacts](#listcontacts) - <p>Returns a list of contacts.</p> <p>If <code>statusList</code> contains AVAILABLE, the request must include <code>groundStation</code>, <code>missionprofileArn</code>, and <code>satelliteArn</code>. </p>
* [listDataflowEndpointGroups](#listdataflowendpointgroups) - Returns a list of <code>DataflowEndpoint</code> groups.
* [listEphemerides](#listephemerides) - List existing ephemerides.
* [listGroundStations](#listgroundstations) - Returns a list of ground stations. 
* [listMissionProfiles](#listmissionprofiles) - Returns a list of mission profiles.
* [listSatellites](#listsatellites) - Returns a list of satellites.
* [listTagsForResource](#listtagsforresource) - Returns a list of tags for a specified resource.
* [registerAgent](#registeragent) - <note> <p> For use by AWS Ground Station Agent and shouldn't be called directly.</p> </note> <p> Registers a new agent with AWS Ground Station. </p>
* [reserveContact](#reservecontact) - Reserves a contact using specified parameters.
* [tagResource](#tagresource) - Assigns a tag to a resource.
* [untagResource](#untagresource) - Deassigns a resource tag.
* [updateAgentStatus](#updateagentstatus) - <note> <p> For use by AWS Ground Station Agent and shouldn't be called directly.</p> </note> <p>Update the status of the agent.</p>
* [updateConfig](#updateconfig) - <p>Updates the <code>Config</code> used when scheduling contacts.</p> <p>Updating a <code>Config</code> will not update the execution parameters for existing future contacts scheduled with this <code>Config</code>.</p>
* [updateEphemeris](#updateephemeris) - Updates an existing ephemeris
* [updateMissionProfile](#updatemissionprofile) - <p>Updates a mission profile.</p> <p>Updating a mission profile will not update the execution parameters for existing future contacts.</p>

## cancelContact

Cancels a contact with a specified contact ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelContactRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelContactRequest();
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'debitis';
    $request->contactId = 'ipsa';

    $response = $sdk->sdk->cancelContact($request);

    if ($response->contactIdResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createConfig

<p>Creates a <code>Config</code> with the specified <code>configData</code> parameters.</p> <p>Only one type of <code>configData</code> can be specified.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateConfigRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateConfigRequestBodyConfigData;
use \OpenAPI\OpenAPI\Models\Shared\AntennaDownlinkConfig;
use \OpenAPI\OpenAPI\Models\Shared\SpectrumConfig;
use \OpenAPI\OpenAPI\Models\Shared\FrequencyBandwidth;
use \OpenAPI\OpenAPI\Models\Shared\BandwidthUnitsEnum;
use \OpenAPI\OpenAPI\Models\Shared\Frequency;
use \OpenAPI\OpenAPI\Models\Shared\FrequencyUnitsEnum;
use \OpenAPI\OpenAPI\Models\Shared\PolarizationEnum;
use \OpenAPI\OpenAPI\Models\Shared\AntennaDownlinkDemodDecodeConfig;
use \OpenAPI\OpenAPI\Models\Shared\DecodeConfig;
use \OpenAPI\OpenAPI\Models\Shared\DemodulationConfig;
use \OpenAPI\OpenAPI\Models\Shared\AntennaUplinkConfig;
use \OpenAPI\OpenAPI\Models\Shared\UplinkSpectrumConfig;
use \OpenAPI\OpenAPI\Models\Shared\Eirp;
use \OpenAPI\OpenAPI\Models\Shared\EirpUnitsEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataflowEndpointConfig;
use \OpenAPI\OpenAPI\Models\Shared\S3RecordingConfig;
use \OpenAPI\OpenAPI\Models\Shared\TrackingConfig;
use \OpenAPI\OpenAPI\Models\Shared\CriticalityEnum;
use \OpenAPI\OpenAPI\Models\Shared\UplinkEchoConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConfigRequest();
    $request->requestBody = new CreateConfigRequestBody();
    $request->requestBody->configData = new CreateConfigRequestBodyConfigData();
    $request->requestBody->configData->antennaDownlinkConfig = new AntennaDownlinkConfig();
    $request->requestBody->configData->antennaDownlinkConfig->spectrumConfig = new SpectrumConfig();
    $request->requestBody->configData->antennaDownlinkConfig->spectrumConfig->bandwidth = new FrequencyBandwidth();
    $request->requestBody->configData->antennaDownlinkConfig->spectrumConfig->bandwidth->units = BandwidthUnitsEnum::K_HZ;
    $request->requestBody->configData->antennaDownlinkConfig->spectrumConfig->bandwidth->value = 2726.56;
    $request->requestBody->configData->antennaDownlinkConfig->spectrumConfig->centerFrequency = new Frequency();
    $request->requestBody->configData->antennaDownlinkConfig->spectrumConfig->centerFrequency->units = FrequencyUnitsEnum::M_HZ;
    $request->requestBody->configData->antennaDownlinkConfig->spectrumConfig->centerFrequency->value = 4776.65;
    $request->requestBody->configData->antennaDownlinkConfig->spectrumConfig->polarization = PolarizationEnum::RIGHT_HAND;
    $request->requestBody->configData->antennaDownlinkDemodDecodeConfig = new AntennaDownlinkDemodDecodeConfig();
    $request->requestBody->configData->antennaDownlinkDemodDecodeConfig->decodeConfig = new DecodeConfig();
    $request->requestBody->configData->antennaDownlinkDemodDecodeConfig->decodeConfig->unvalidatedJSON = 'placeat';
    $request->requestBody->configData->antennaDownlinkDemodDecodeConfig->demodulationConfig = new DemodulationConfig();
    $request->requestBody->configData->antennaDownlinkDemodDecodeConfig->demodulationConfig->unvalidatedJSON = 'voluptatum';
    $request->requestBody->configData->antennaDownlinkDemodDecodeConfig->spectrumConfig = new SpectrumConfig();
    $request->requestBody->configData->antennaDownlinkDemodDecodeConfig->spectrumConfig->bandwidth = new FrequencyBandwidth();
    $request->requestBody->configData->antennaDownlinkDemodDecodeConfig->spectrumConfig->bandwidth->units = BandwidthUnitsEnum::M_HZ;
    $request->requestBody->configData->antennaDownlinkDemodDecodeConfig->spectrumConfig->bandwidth->value = 5680.45;
    $request->requestBody->configData->antennaDownlinkDemodDecodeConfig->spectrumConfig->centerFrequency = new Frequency();
    $request->requestBody->configData->antennaDownlinkDemodDecodeConfig->spectrumConfig->centerFrequency->units = FrequencyUnitsEnum::M_HZ;
    $request->requestBody->configData->antennaDownlinkDemodDecodeConfig->spectrumConfig->centerFrequency->value = 9255.97;
    $request->requestBody->configData->antennaDownlinkDemodDecodeConfig->spectrumConfig->polarization = PolarizationEnum::RIGHT_HAND;
    $request->requestBody->configData->antennaUplinkConfig = new AntennaUplinkConfig();
    $request->requestBody->configData->antennaUplinkConfig->spectrumConfig = new UplinkSpectrumConfig();
    $request->requestBody->configData->antennaUplinkConfig->spectrumConfig->centerFrequency = new Frequency();
    $request->requestBody->configData->antennaUplinkConfig->spectrumConfig->centerFrequency->units = FrequencyUnitsEnum::G_HZ;
    $request->requestBody->configData->antennaUplinkConfig->spectrumConfig->centerFrequency->value = 3373.96;
    $request->requestBody->configData->antennaUplinkConfig->spectrumConfig->polarization = PolarizationEnum::LEFT_HAND;
    $request->requestBody->configData->antennaUplinkConfig->targetEirp = new Eirp();
    $request->requestBody->configData->antennaUplinkConfig->targetEirp->units = EirpUnitsEnum::DBW;
    $request->requestBody->configData->antennaUplinkConfig->targetEirp->value = 6481.72;
    $request->requestBody->configData->antennaUplinkConfig->transmitDisabled = false;
    $request->requestBody->configData->dataflowEndpointConfig = new DataflowEndpointConfig();
    $request->requestBody->configData->dataflowEndpointConfig->dataflowEndpointName = 'perferendis';
    $request->requestBody->configData->dataflowEndpointConfig->dataflowEndpointRegion = 'ipsam';
    $request->requestBody->configData->s3RecordingConfig = new S3RecordingConfig();
    $request->requestBody->configData->s3RecordingConfig->bucketArn = 'repellendus';
    $request->requestBody->configData->s3RecordingConfig->prefix = 'sapiente';
    $request->requestBody->configData->s3RecordingConfig->roleArn = 'quo';
    $request->requestBody->configData->trackingConfig = new TrackingConfig();
    $request->requestBody->configData->trackingConfig->autotrack = CriticalityEnum::PREFERRED;
    $request->requestBody->configData->uplinkEchoConfig = new UplinkEchoConfig();
    $request->requestBody->configData->uplinkEchoConfig->antennaUplinkConfigArn = 'at';
    $request->requestBody->configData->uplinkEchoConfig->enabled = false;
    $request->requestBody->name = 'Emilio Krajcik';
    $request->requestBody->tags = [
        'totam' => 'porro',
        'dolorum' => 'dicta',
    ];
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'optio';

    $response = $sdk->sdk->createConfig($request);

    if ($response->configIdResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDataflowEndpointGroup

<p>Creates a <code>DataflowEndpoint</code> group containing the specified list of <code>DataflowEndpoint</code> objects.</p> <p>The <code>name</code> field in each endpoint is used in your mission profile <code>DataflowEndpointConfig</code> to specify which endpoints to use during a contact.</p> <p>When a contact uses multiple <code>DataflowEndpointConfig</code> objects, each <code>Config</code> must match a <code>DataflowEndpoint</code> in the same group.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataflowEndpointGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataflowEndpointGroupRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\EndpointDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsGroundStationAgentEndpoint;
use \OpenAPI\OpenAPI\Models\Shared\AgentStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AuditResultsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionDetails;
use \OpenAPI\OpenAPI\Models\Shared\SocketAddress;
use \OpenAPI\OpenAPI\Models\Shared\RangedConnectionDetails;
use \OpenAPI\OpenAPI\Models\Shared\RangedSocketAddress;
use \OpenAPI\OpenAPI\Models\Shared\IntegerRange;
use \OpenAPI\OpenAPI\Models\Shared\DataflowEndpoint;
use \OpenAPI\OpenAPI\Models\Shared\EndpointStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\CapabilityHealthReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\CapabilityHealthEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityDetails;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDataflowEndpointGroupRequest();
    $request->requestBody = new CreateDataflowEndpointGroupRequestBody();
    $request->requestBody->contactPostPassDurationSeconds = 521848;
    $request->requestBody->contactPrePassDurationSeconds = 105907;
    $request->requestBody->endpointDetails = [
        new EndpointDetails(),
        new EndpointDetails(),
    ];
    $request->requestBody->tags = [
        'modi' => 'qui',
        'impedit' => 'cum',
    ];
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'ad';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->createDataflowEndpointGroup($request);

    if ($response->dataflowEndpointGroupIdResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createEphemeris

Creates an Ephemeris with the specified <code>EphemerisData</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateEphemerisRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateEphemerisRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateEphemerisRequestBodyEphemeris;
use \OpenAPI\OpenAPI\Models\Shared\OEMEphemeris;
use \OpenAPI\OpenAPI\Models\Shared\S3Object;
use \OpenAPI\OpenAPI\Models\Shared\TLEEphemeris;
use \OpenAPI\OpenAPI\Models\Shared\TLEData;
use \OpenAPI\OpenAPI\Models\Shared\TimeRange;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEphemerisRequest();
    $request->requestBody = new CreateEphemerisRequestBody();
    $request->requestBody->enabled = false;
    $request->requestBody->ephemeris = new CreateEphemerisRequestBodyEphemeris();
    $request->requestBody->ephemeris->oem = new OEMEphemeris();
    $request->requestBody->ephemeris->oem->oemData = 'sed';
    $request->requestBody->ephemeris->oem->s3Object = new S3Object();
    $request->requestBody->ephemeris->oem->s3Object->bucket = 'iste';
    $request->requestBody->ephemeris->oem->s3Object->key = 'dolor';
    $request->requestBody->ephemeris->oem->s3Object->version = 'natus';
    $request->requestBody->ephemeris->tle = new TLEEphemeris();
    $request->requestBody->ephemeris->tle->s3Object = new S3Object();
    $request->requestBody->ephemeris->tle->s3Object->bucket = 'laboriosam';
    $request->requestBody->ephemeris->tle->s3Object->key = 'hic';
    $request->requestBody->ephemeris->tle->s3Object->version = 'saepe';
    $request->requestBody->ephemeris->tle->tleData = [
        new TLEData(),
        new TLEData(),
        new TLEData(),
    ];
    $request->requestBody->expirationTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-22T18:42:38.160Z');
    $request->requestBody->kmsKeyArn = 'iste';
    $request->requestBody->name = 'Mr. Kerry Predovic';
    $request->requestBody->priority = 666767;
    $request->requestBody->satelliteId = 'mollitia';
    $request->requestBody->tags = [
        'dolores' => 'dolorem',
        'corporis' => 'explicabo',
        'nobis' => 'enim',
    ];
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'culpa';

    $response = $sdk->sdk->createEphemeris($request);

    if ($response->ephemerisIdResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createMissionProfile

<p>Creates a mission profile.</p> <p> <code>dataflowEdges</code> is a list of lists of strings. Each lower level list of strings has two elements: a <i>from</i> ARN and a <i>to</i> ARN.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateMissionProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateMissionProfileRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateMissionProfileRequestBodyStreamsKmsKey;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMissionProfileRequest();
    $request->requestBody = new CreateMissionProfileRequestBody();
    $request->requestBody->contactPostPassDurationSeconds = 988374;
    $request->requestBody->contactPrePassDurationSeconds = 958950;
    $request->requestBody->dataflowEdges = [
        [
            'dolorem',
            'culpa',
            'consequuntur',
        ],
    ];
    $request->requestBody->minimumViableContactDurationSeconds = 995300;
    $request->requestBody->name = 'Tracy Fritsch';
    $request->requestBody->streamsKmsKey = new CreateMissionProfileRequestBodyStreamsKmsKey();
    $request->requestBody->streamsKmsKey->kmsAliasArn = 'molestiae';
    $request->requestBody->streamsKmsKey->kmsKeyArn = 'velit';
    $request->requestBody->streamsKmsRole = 'error';
    $request->requestBody->tags = [
        'quis' => 'vitae',
    ];
    $request->requestBody->trackingConfigArn = 'laborum';
    $request->xAmzAlgorithm = 'animi';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'sequi';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'ipsam';

    $response = $sdk->sdk->createMissionProfile($request);

    if ($response->missionProfileIdResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConfig

Deletes a <code>Config</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConfigConfigTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConfigRequest();
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'possimus';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'laborum';
    $request->configId = 'quasi';
    $request->configType = DeleteConfigConfigTypeEnum::S3_RECORDING;

    $response = $sdk->sdk->deleteConfig($request);

    if ($response->configIdResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDataflowEndpointGroup

Deletes a dataflow endpoint group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDataflowEndpointGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDataflowEndpointGroupRequest();
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'omnis';
    $request->dataflowEndpointGroupId = 'voluptate';

    $response = $sdk->sdk->deleteDataflowEndpointGroup($request);

    if ($response->dataflowEndpointGroupIdResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEphemeris

Deletes an ephemeris

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEphemerisRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEphemerisRequest();
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'doloremque';
    $request->xAmzDate = 'reprehenderit';
    $request->xAmzSecurityToken = 'ut';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'dicta';
    $request->ephemerisId = 'corporis';

    $response = $sdk->sdk->deleteEphemeris($request);

    if ($response->ephemerisIdResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMissionProfile

Deletes a mission profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMissionProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMissionProfileRequest();
    $request->xAmzAlgorithm = 'dolore';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'harum';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'commodi';
    $request->missionProfileId = 'repudiandae';

    $response = $sdk->sdk->deleteMissionProfile($request);

    if ($response->missionProfileIdResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeContact

Describes an existing contact.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeContactRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeContactRequest();
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'molestias';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'modi';
    $request->contactId = 'praesentium';

    $response = $sdk->sdk->describeContact($request);

    if ($response->describeContactResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEphemeris

Describes an existing ephemeris.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEphemerisRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEphemerisRequest();
    $request->xAmzAlgorithm = 'rem';
    $request->xAmzContentSha256 = 'voluptates';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'itaque';
    $request->ephemerisId = 'incidunt';

    $response = $sdk->sdk->describeEphemeris($request);

    if ($response->describeEphemerisResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAgentConfiguration

<note> <p> For use by AWS Ground Station Agent and shouldn't be called directly.</p> </note> <p>Gets the latest configuration information for a registered agent.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAgentConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAgentConfigurationRequest();
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'consequatur';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'distinctio';
    $request->agentId = 'quibusdam';

    $response = $sdk->sdk->getAgentConfiguration($request);

    if ($response->getAgentConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConfig

<p>Returns <code>Config</code> information.</p> <p>Only one <code>Config</code> response can be returned.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetConfigConfigTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConfigRequest();
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->configId = 'magni';
    $request->configType = GetConfigConfigTypeEnum::UPLINK_ECHO;

    $response = $sdk->sdk->getConfig($request);

    if ($response->getConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDataflowEndpointGroup

Returns the dataflow endpoint group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDataflowEndpointGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDataflowEndpointGroupRequest();
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'facilis';
    $request->dataflowEndpointGroupId = 'tempore';

    $response = $sdk->sdk->getDataflowEndpointGroup($request);

    if ($response->getDataflowEndpointGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMinuteUsage

Returns the number of minutes used by account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMinuteUsageRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMinuteUsageRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMinuteUsageRequest();
    $request->requestBody = new GetMinuteUsageRequestBody();
    $request->requestBody->month = 288476;
    $request->requestBody->year = 962189;
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'eligendi';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'necessitatibus';

    $response = $sdk->sdk->getMinuteUsage($request);

    if ($response->getMinuteUsageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMissionProfile

Returns a mission profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMissionProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMissionProfileRequest();
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'a';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'in';
    $request->missionProfileId = 'in';

    $response = $sdk->sdk->getMissionProfile($request);

    if ($response->getMissionProfileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSatellite

Returns a satellite.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSatelliteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSatelliteRequest();
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'facere';
    $request->satelliteId = 'ea';

    $response = $sdk->sdk->getSatellite($request);

    if ($response->getSatelliteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listConfigs

Returns a list of <code>Config</code> objects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListConfigsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListConfigsRequest();
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->maxResults = 965417;
    $request->nextToken = 'quidem';

    $response = $sdk->sdk->listConfigs($request);

    if ($response->listConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listContacts

<p>Returns a list of contacts.</p> <p>If <code>statusList</code> contains AVAILABLE, the request must include <code>groundStation</code>, <code>missionprofileArn</code>, and <code>satelliteArn</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListContactsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListContactsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ContactStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListContactsRequest();
    $request->requestBody = new ListContactsRequestBody();
    $request->requestBody->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-20T13:32:41.687Z');
    $request->requestBody->groundStation = 'id';
    $request->requestBody->maxResults = 501324;
    $request->requestBody->missionProfileArn = 'deleniti';
    $request->requestBody->nextToken = 'sapiente';
    $request->requestBody->satelliteArn = 'amet';
    $request->requestBody->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-18T17:53:23.400Z');
    $request->requestBody->statusList = [
        ContactStatusEnum::PASS,
        ContactStatusEnum::FAILED_TO_SCHEDULE,
    ];
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'labore';
    $request->maxResults = 'labore';
    $request->nextToken = 'suscipit';

    $response = $sdk->sdk->listContacts($request);

    if ($response->listContactsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDataflowEndpointGroups

Returns a list of <code>DataflowEndpoint</code> groups.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDataflowEndpointGroupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDataflowEndpointGroupsRequest();
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'magnam';
    $request->maxResults = 92373;
    $request->nextToken = 'excepturi';

    $response = $sdk->sdk->listDataflowEndpointGroups($request);

    if ($response->listDataflowEndpointGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEphemerides

List existing ephemerides.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEphemeridesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListEphemeridesRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\EphemerisStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEphemeridesRequest();
    $request->requestBody = new ListEphemeridesRequestBody();
    $request->requestBody->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-30T07:57:16.138Z');
    $request->requestBody->satelliteId = 'quos';
    $request->requestBody->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-07T10:53:17.121Z');
    $request->requestBody->statusList = [
        EphemerisStatusEnum::EXPIRED,
        EphemerisStatusEnum::ENABLED,
        EphemerisStatusEnum::INVALID,
    ];
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'iure';
    $request->maxResults = 984043;
    $request->nextToken = 'debitis';

    $response = $sdk->sdk->listEphemerides($request);

    if ($response->listEphemeridesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listGroundStations

Returns a list of ground stations. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListGroundStationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListGroundStationsRequest();
    $request->xAmzAlgorithm = 'eius';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'architecto';
    $request->maxResults = 919483;
    $request->nextToken = 'ullam';
    $request->satelliteId = 'expedita';

    $response = $sdk->sdk->listGroundStations($request);

    if ($response->listGroundStationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMissionProfiles

Returns a list of mission profiles.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListMissionProfilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMissionProfilesRequest();
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'repellat';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->maxResults = 162493;
    $request->nextToken = 'praesentium';

    $response = $sdk->sdk->listMissionProfiles($request);

    if ($response->listMissionProfilesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSatellites

Returns a list of satellites.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSatellitesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSatellitesRequest();
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'sunt';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'maxime';
    $request->maxResults = 411397;
    $request->nextToken = 'excepturi';

    $response = $sdk->sdk->listSatellites($request);

    if ($response->listSatellitesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Returns a list of tags for a specified resource.

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
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->resourceArn = 'voluptate';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerAgent

<note> <p> For use by AWS Ground Station Agent and shouldn't be called directly.</p> </note> <p> Registers a new agent with AWS Ground Station. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterAgentRequest;
use \OpenAPI\OpenAPI\Models\Operations\RegisterAgentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\RegisterAgentRequestBodyAgentDetails;
use \OpenAPI\OpenAPI\Models\Shared\ComponentVersion;
use \OpenAPI\OpenAPI\Models\Operations\RegisterAgentRequestBodyDiscoveryData;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterAgentRequest();
    $request->requestBody = new RegisterAgentRequestBody();
    $request->requestBody->agentDetails = new RegisterAgentRequestBodyAgentDetails();
    $request->requestBody->agentDetails->agentCpuCores = [
        722056,
        50588,
    ];
    $request->requestBody->agentDetails->agentVersion = 'pariatur';
    $request->requestBody->agentDetails->componentVersions = [
        new ComponentVersion(),
        new ComponentVersion(),
    ];
    $request->requestBody->agentDetails->instanceId = 'voluptatibus';
    $request->requestBody->agentDetails->instanceType = 'perferendis';
    $request->requestBody->agentDetails->reservedCpuCores = [
        230742,
        11714,
        764912,
        359978,
    ];
    $request->requestBody->discoveryData = new RegisterAgentRequestBodyDiscoveryData();
    $request->requestBody->discoveryData->capabilityArns = [
        'libero',
        'nobis',
        'dolores',
        'quis',
    ];
    $request->requestBody->discoveryData->privateIpAddresses = [
        'dignissimos',
        'eaque',
        'quis',
    ];
    $request->requestBody->discoveryData->publicIpAddresses = [
        'eos',
    ];
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'nostrum';

    $response = $sdk->sdk->registerAgent($request);

    if ($response->registerAgentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reserveContact

Reserves a contact using specified parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ReserveContactRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReserveContactRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReserveContactRequest();
    $request->requestBody = new ReserveContactRequestBody();
    $request->requestBody->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-03-20T18:01:24.992Z');
    $request->requestBody->groundStation = 'omnis';
    $request->requestBody->missionProfileArn = 'facilis';
    $request->requestBody->satelliteArn = 'perspiciatis';
    $request->requestBody->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-20T23:16:34.777Z');
    $request->requestBody->tags = [
        'blanditiis' => 'error',
    ];
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'earum';
    $request->xAmzSignedHeaders = 'modi';

    $response = $sdk->sdk->reserveContact($request);

    if ($response->contactIdResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Assigns a tag to a resource.

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
        'dolorum' => 'deleniti',
        'pariatur' => 'provident',
        'nobis' => 'libero',
    ];
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'dolor';
    $request->resourceArn = 'qui';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Deassigns a resource tag.

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
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->resourceArn = 'amet';
    $request->tagKeys = [
        'numquam',
        'veritatis',
        'ipsa',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAgentStatus

<note> <p> For use by AWS Ground Station Agent and shouldn't be called directly.</p> </note> <p>Update the status of the agent.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAgentStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAgentStatusRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAgentStatusRequestBodyAggregateStatus;
use \OpenAPI\OpenAPI\Models\Shared\AgentStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ComponentStatusData;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAgentStatusRequest();
    $request->requestBody = new UpdateAgentStatusRequestBody();
    $request->requestBody->aggregateStatus = new UpdateAgentStatusRequestBodyAggregateStatus();
    $request->requestBody->aggregateStatus->signatureMap = [
        'iure' => false,
    ];
    $request->requestBody->aggregateStatus->status = AgentStatusEnum::FAILED;
    $request->requestBody->componentStatuses = [
        new ComponentStatusData(),
        new ComponentStatusData(),
    ];
    $request->requestBody->taskId = 'accusamus';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'eos';
    $request->xAmzSignature = 'atque';
    $request->xAmzSignedHeaders = 'sit';
    $request->agentId = 'fugiat';

    $response = $sdk->sdk->updateAgentStatus($request);

    if ($response->updateAgentStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateConfig

<p>Updates the <code>Config</code> used when scheduling contacts.</p> <p>Updating a <code>Config</code> will not update the execution parameters for existing future contacts scheduled with this <code>Config</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConfigRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConfigRequestBodyConfigData;
use \OpenAPI\OpenAPI\Models\Shared\AntennaDownlinkConfig;
use \OpenAPI\OpenAPI\Models\Shared\SpectrumConfig;
use \OpenAPI\OpenAPI\Models\Shared\FrequencyBandwidth;
use \OpenAPI\OpenAPI\Models\Shared\BandwidthUnitsEnum;
use \OpenAPI\OpenAPI\Models\Shared\Frequency;
use \OpenAPI\OpenAPI\Models\Shared\FrequencyUnitsEnum;
use \OpenAPI\OpenAPI\Models\Shared\PolarizationEnum;
use \OpenAPI\OpenAPI\Models\Shared\AntennaDownlinkDemodDecodeConfig;
use \OpenAPI\OpenAPI\Models\Shared\DecodeConfig;
use \OpenAPI\OpenAPI\Models\Shared\DemodulationConfig;
use \OpenAPI\OpenAPI\Models\Shared\AntennaUplinkConfig;
use \OpenAPI\OpenAPI\Models\Shared\UplinkSpectrumConfig;
use \OpenAPI\OpenAPI\Models\Shared\Eirp;
use \OpenAPI\OpenAPI\Models\Shared\EirpUnitsEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataflowEndpointConfig;
use \OpenAPI\OpenAPI\Models\Shared\S3RecordingConfig;
use \OpenAPI\OpenAPI\Models\Shared\TrackingConfig;
use \OpenAPI\OpenAPI\Models\Shared\CriticalityEnum;
use \OpenAPI\OpenAPI\Models\Shared\UplinkEchoConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConfigConfigTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateConfigRequest();
    $request->requestBody = new UpdateConfigRequestBody();
    $request->requestBody->configData = new UpdateConfigRequestBodyConfigData();
    $request->requestBody->configData->antennaDownlinkConfig = new AntennaDownlinkConfig();
    $request->requestBody->configData->antennaDownlinkConfig->spectrumConfig = new SpectrumConfig();
    $request->requestBody->configData->antennaDownlinkConfig->spectrumConfig->bandwidth = new FrequencyBandwidth();
    $request->requestBody->configData->antennaDownlinkConfig->spectrumConfig->bandwidth->units = BandwidthUnitsEnum::G_HZ;
    $request->requestBody->configData->antennaDownlinkConfig->spectrumConfig->bandwidth->value = 7438.35;
    $request->requestBody->configData->antennaDownlinkConfig->spectrumConfig->centerFrequency = new Frequency();
    $request->requestBody->configData->antennaDownlinkConfig->spectrumConfig->centerFrequency->units = FrequencyUnitsEnum::K_HZ;
    $request->requestBody->configData->antennaDownlinkConfig->spectrumConfig->centerFrequency->value = 4785.96;
    $request->requestBody->configData->antennaDownlinkConfig->spectrumConfig->polarization = PolarizationEnum::NONE;
    $request->requestBody->configData->antennaDownlinkDemodDecodeConfig = new AntennaDownlinkDemodDecodeConfig();
    $request->requestBody->configData->antennaDownlinkDemodDecodeConfig->decodeConfig = new DecodeConfig();
    $request->requestBody->configData->antennaDownlinkDemodDecodeConfig->decodeConfig->unvalidatedJSON = 'dolorum';
    $request->requestBody->configData->antennaDownlinkDemodDecodeConfig->demodulationConfig = new DemodulationConfig();
    $request->requestBody->configData->antennaDownlinkDemodDecodeConfig->demodulationConfig->unvalidatedJSON = 'deleniti';
    $request->requestBody->configData->antennaDownlinkDemodDecodeConfig->spectrumConfig = new SpectrumConfig();
    $request->requestBody->configData->antennaDownlinkDemodDecodeConfig->spectrumConfig->bandwidth = new FrequencyBandwidth();
    $request->requestBody->configData->antennaDownlinkDemodDecodeConfig->spectrumConfig->bandwidth->units = BandwidthUnitsEnum::M_HZ;
    $request->requestBody->configData->antennaDownlinkDemodDecodeConfig->spectrumConfig->bandwidth->value = 8966.72;
    $request->requestBody->configData->antennaDownlinkDemodDecodeConfig->spectrumConfig->centerFrequency = new Frequency();
    $request->requestBody->configData->antennaDownlinkDemodDecodeConfig->spectrumConfig->centerFrequency->units = FrequencyUnitsEnum::K_HZ;
    $request->requestBody->configData->antennaDownlinkDemodDecodeConfig->spectrumConfig->centerFrequency->value = 9903.39;
    $request->requestBody->configData->antennaDownlinkDemodDecodeConfig->spectrumConfig->polarization = PolarizationEnum::NONE;
    $request->requestBody->configData->antennaUplinkConfig = new AntennaUplinkConfig();
    $request->requestBody->configData->antennaUplinkConfig->spectrumConfig = new UplinkSpectrumConfig();
    $request->requestBody->configData->antennaUplinkConfig->spectrumConfig->centerFrequency = new Frequency();
    $request->requestBody->configData->antennaUplinkConfig->spectrumConfig->centerFrequency->units = FrequencyUnitsEnum::G_HZ;
    $request->requestBody->configData->antennaUplinkConfig->spectrumConfig->centerFrequency->value = 4560.15;
    $request->requestBody->configData->antennaUplinkConfig->spectrumConfig->polarization = PolarizationEnum::NONE;
    $request->requestBody->configData->antennaUplinkConfig->targetEirp = new Eirp();
    $request->requestBody->configData->antennaUplinkConfig->targetEirp->units = EirpUnitsEnum::DBW;
    $request->requestBody->configData->antennaUplinkConfig->targetEirp->value = 9064.18;
    $request->requestBody->configData->antennaUplinkConfig->transmitDisabled = false;
    $request->requestBody->configData->dataflowEndpointConfig = new DataflowEndpointConfig();
    $request->requestBody->configData->dataflowEndpointConfig->dataflowEndpointName = 'eius';
    $request->requestBody->configData->dataflowEndpointConfig->dataflowEndpointRegion = 'aspernatur';
    $request->requestBody->configData->s3RecordingConfig = new S3RecordingConfig();
    $request->requestBody->configData->s3RecordingConfig->bucketArn = 'perferendis';
    $request->requestBody->configData->s3RecordingConfig->prefix = 'amet';
    $request->requestBody->configData->s3RecordingConfig->roleArn = 'optio';
    $request->requestBody->configData->trackingConfig = new TrackingConfig();
    $request->requestBody->configData->trackingConfig->autotrack = CriticalityEnum::REQUIRED;
    $request->requestBody->configData->uplinkEchoConfig = new UplinkEchoConfig();
    $request->requestBody->configData->uplinkEchoConfig->antennaUplinkConfigArn = 'ad';
    $request->requestBody->configData->uplinkEchoConfig->enabled = false;
    $request->requestBody->name = 'Sam Oberbrunner';
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'similique';
    $request->xAmzDate = 'alias';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'tempora';
    $request->configId = 'vel';
    $request->configType = UpdateConfigConfigTypeEnum::UPLINK_ECHO;

    $response = $sdk->sdk->updateConfig($request);

    if ($response->configIdResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateEphemeris

Updates an existing ephemeris

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEphemerisRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEphemerisRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateEphemerisRequest();
    $request->requestBody = new UpdateEphemerisRequestBody();
    $request->requestBody->enabled = false;
    $request->requestBody->name = 'Clarence Parisian';
    $request->requestBody->priority = 687488;
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'quisquam';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'tempore';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->ephemerisId = 'numquam';

    $response = $sdk->sdk->updateEphemeris($request);

    if ($response->ephemerisIdResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMissionProfile

<p>Updates a mission profile.</p> <p>Updating a mission profile will not update the execution parameters for existing future contacts.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMissionProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMissionProfileRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMissionProfileRequestBodyStreamsKmsKey;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMissionProfileRequest();
    $request->requestBody = new UpdateMissionProfileRequestBody();
    $request->requestBody->contactPostPassDurationSeconds = 313692;
    $request->requestBody->contactPrePassDurationSeconds = 213312;
    $request->requestBody->dataflowEdges = [
        [
            'nihil',
            'sit',
            'expedita',
        ],
        [
            'sed',
        ],
        [
            'libero',
            'voluptas',
        ],
        [
            'quam',
            'ipsum',
            'incidunt',
        ],
    ];
    $request->requestBody->minimumViableContactDurationSeconds = 186458;
    $request->requestBody->name = 'Simon Stracke MD';
    $request->requestBody->streamsKmsKey = new UpdateMissionProfileRequestBodyStreamsKmsKey();
    $request->requestBody->streamsKmsKey->kmsAliasArn = 'totam';
    $request->requestBody->streamsKmsKey->kmsKeyArn = 'incidunt';
    $request->requestBody->streamsKmsRole = 'aspernatur';
    $request->requestBody->trackingConfigArn = 'dolores';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'molestias';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'qui';
    $request->missionProfileId = 'neque';

    $response = $sdk->sdk->updateMissionProfile($request);

    if ($response->missionProfileIdResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
