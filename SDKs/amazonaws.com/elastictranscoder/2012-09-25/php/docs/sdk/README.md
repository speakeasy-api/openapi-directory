# SDK

## Overview

<fullname>AWS Elastic Transcoder Service</fullname> <p>The AWS Elastic Transcoder Service.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/elastictranscoder/>
### Available Operations

* [cancelJob](#canceljob) - <p>The CancelJob operation cancels an unfinished job.</p> <note> <p>You can only cancel a job that has a status of <code>Submitted</code>. To prevent a pipeline from starting to process a job while you're getting the job identifier, use <a>UpdatePipelineStatus</a> to temporarily pause the pipeline.</p> </note>
* [createJob](#createjob) - <p>When you create a job, Elastic Transcoder returns JSON data that includes the values that you specified plus information about the job that is created.</p> <p>If you have specified more than one output for your jobs (for example, one output for the Kindle Fire and another output for the Apple iPhone 4s), you currently must use the Elastic Transcoder API to list the jobs (as opposed to the AWS Console).</p>
* [createPipeline](#createpipeline) - The CreatePipeline operation creates a pipeline with settings that you specify.
* [createPreset](#createpreset) - <p>The CreatePreset operation creates a preset with settings that you specify.</p> <important> <p>Elastic Transcoder checks the CreatePreset settings to ensure that they meet Elastic Transcoder requirements and to determine whether they comply with H.264 standards. If your settings are not valid for Elastic Transcoder, Elastic Transcoder returns an HTTP 400 response (<code>ValidationException</code>) and does not create the preset. If the settings are valid for Elastic Transcoder but aren't strictly compliant with the H.264 standard, Elastic Transcoder creates the preset and returns a warning message in the response. This helps you determine whether your settings comply with the H.264 standard while giving you greater flexibility with respect to the video that Elastic Transcoder produces.</p> </important> <p>Elastic Transcoder uses the H.264 video-compression format. For more information, see the International Telecommunication Union publication <i>Recommendation ITU-T H.264: Advanced video coding for generic audiovisual services</i>.</p>
* [deletePipeline](#deletepipeline) - <p>The DeletePipeline operation removes a pipeline.</p> <p> You can only delete a pipeline that has never been used or that is not currently in use (doesn't contain any active jobs). If the pipeline is currently in use, <code>DeletePipeline</code> returns an error. </p>
* [deletePreset](#deletepreset) - <p>The DeletePreset operation removes a preset that you've added in an AWS region.</p> <note> <p>You can't delete the default presets that are included with Elastic Transcoder.</p> </note>
* [listJobsByPipeline](#listjobsbypipeline) - <p>The ListJobsByPipeline operation gets a list of the jobs currently in a pipeline.</p> <p>Elastic Transcoder returns all of the jobs currently in the specified pipeline. The response body contains one element for each job that satisfies the search criteria.</p>
* [listJobsByStatus](#listjobsbystatus) - The ListJobsByStatus operation gets a list of jobs that have a specified status. The response body contains one element for each job that satisfies the search criteria.
* [listPipelines](#listpipelines) - The ListPipelines operation gets a list of the pipelines associated with the current AWS account.
* [listPresets](#listpresets) - The ListPresets operation gets a list of the default presets included with Elastic Transcoder and the presets that you've added in an AWS region.
* [readJob](#readjob) - The ReadJob operation returns detailed information about a job.
* [readPipeline](#readpipeline) - The ReadPipeline operation gets detailed information about a pipeline.
* [readPreset](#readpreset) - The ReadPreset operation gets detailed information about a preset.
* [~~testRole~~](#testrole) - <p>The TestRole operation tests the IAM role used to create the pipeline.</p> <p>The <code>TestRole</code> action lets you determine whether the IAM role you are using has sufficient permissions to let Elastic Transcoder perform tasks associated with the transcoding process. The action attempts to assume the specified IAM role, checks read access to the input and output buckets, and tries to send a test notification to Amazon SNS topics that you specify.</p> :warning: **Deprecated**
* [updatePipeline](#updatepipeline) - <p> Use the <code>UpdatePipeline</code> operation to update settings for a pipeline.</p> <important> <p>When you change pipeline settings, your changes take effect immediately. Jobs that you have already submitted and that Elastic Transcoder has not started to process are affected in addition to jobs that you submit after you change settings. </p> </important>
* [updatePipelineNotifications](#updatepipelinenotifications) - <p>With the UpdatePipelineNotifications operation, you can update Amazon Simple Notification Service (Amazon SNS) notifications for a pipeline.</p> <p>When you update notifications for a pipeline, Elastic Transcoder returns the values that you specified in the request.</p>
* [updatePipelineStatus](#updatepipelinestatus) - <p>The UpdatePipelineStatus operation pauses or reactivates a pipeline, so that the pipeline stops or restarts the processing of jobs.</p> <p>Changing the pipeline status is useful if you want to cancel one or more jobs. You can't cancel jobs after Elastic Transcoder has started processing them; if you pause the pipeline to which you submitted the jobs, you have more time to get the job IDs for the jobs that you want to cancel, and to send a <a>CancelJob</a> request. </p>

## cancelJob

<p>The CancelJob operation cancels an unfinished job.</p> <note> <p>You can only cancel a job that has a status of <code>Submitted</code>. To prevent a pipeline from starting to process a job while you're getting the job identifier, use <a>UpdatePipelineStatus</a> to temporarily pause the pipeline.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelJobRequest();
    $request->id = 'ddf7cc78-ca1b-4a92-8fc8-16742cb73920';
    $request->xAmzAlgorithm = 'ad';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'laboriosam';

    $response = $sdk->sdk->cancelJob($request);

    if ($response->cancelJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createJob

<p>When you create a job, Elastic Transcoder returns JSON data that includes the values that you specified plus information about the job that is created.</p> <p>If you have specified more than one output for your jobs (for example, one output for the Kindle Fire and another output for the Apple iPhone 4s), you currently must use the Elastic Transcoder API to list the jobs (as opposed to the AWS Console).</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateJobRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateJobRequestBodyInput;
use \OpenAPI\OpenAPI\Models\Shared\DetectedProperties;
use \OpenAPI\OpenAPI\Models\Shared\Encryption;
use \OpenAPI\OpenAPI\Models\Shared\InputCaptions;
use \OpenAPI\OpenAPI\Models\Shared\CaptionSource;
use \OpenAPI\OpenAPI\Models\Shared\TimeSpan;
use \OpenAPI\OpenAPI\Models\Shared\JobInput;
use \OpenAPI\OpenAPI\Models\Operations\CreateJobRequestBodyOutput;
use \OpenAPI\OpenAPI\Models\Shared\JobAlbumArt;
use \OpenAPI\OpenAPI\Models\Shared\Artwork;
use \OpenAPI\OpenAPI\Models\Shared\Captions;
use \OpenAPI\OpenAPI\Models\Shared\CaptionFormat;
use \OpenAPI\OpenAPI\Models\Shared\Clip;
use \OpenAPI\OpenAPI\Models\Shared\JobWatermark;
use \OpenAPI\OpenAPI\Models\Shared\CreateJobOutput;
use \OpenAPI\OpenAPI\Models\Shared\CreateJobPlaylist;
use \OpenAPI\OpenAPI\Models\Shared\HlsContentProtection;
use \OpenAPI\OpenAPI\Models\Shared\PlayReadyDrm;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateJobRequest();
    $request->requestBody = new CreateJobRequestBody();
    $request->requestBody->input = new CreateJobRequestBodyInput();
    $request->requestBody->input->aspectRatio = 'hic';
    $request->requestBody->input->container = 'saepe';
    $request->requestBody->input->detectedProperties = new DetectedProperties();
    $request->requestBody->input->detectedProperties->durationMillis = 681820;
    $request->requestBody->input->detectedProperties->fileSize = 449950;
    $request->requestBody->input->detectedProperties->frameRate = 'corporis';
    $request->requestBody->input->detectedProperties->height = 613064;
    $request->requestBody->input->detectedProperties->width = 437032;
    $request->requestBody->input->encryption = new Encryption();
    $request->requestBody->input->encryption->initializationVector = 'saepe';
    $request->requestBody->input->encryption->key = 'quidem';
    $request->requestBody->input->encryption->keyMd5 = 'architecto';
    $request->requestBody->input->encryption->mode = 'ipsa';
    $request->requestBody->input->frameRate = 'reiciendis';
    $request->requestBody->input->inputCaptions = new InputCaptions();
    $request->requestBody->input->inputCaptions->captionSources = [
        new CaptionSource(),
        new CaptionSource(),
        new CaptionSource(),
    ];
    $request->requestBody->input->inputCaptions->mergePolicy = 'mollitia';
    $request->requestBody->input->interlaced = 'laborum';
    $request->requestBody->input->key = 'dolores';
    $request->requestBody->input->resolution = 'dolorem';
    $request->requestBody->input->timeSpan = new TimeSpan();
    $request->requestBody->input->timeSpan->duration = 'corporis';
    $request->requestBody->input->timeSpan->startTime = 'explicabo';
    $request->requestBody->inputs = [
        new JobInput(),
        new JobInput(),
        new JobInput(),
        new JobInput(),
    ];
    $request->requestBody->output = new CreateJobRequestBodyOutput();
    $request->requestBody->output->albumArt = new JobAlbumArt();
    $request->requestBody->output->albumArt->artwork = [
        new Artwork(),
        new Artwork(),
    ];
    $request->requestBody->output->albumArt->mergePolicy = 'omnis';
    $request->requestBody->output->captions = new Captions();
    $request->requestBody->output->captions->captionFormats = [
        new CaptionFormat(),
        new CaptionFormat(),
    ];
    $request->requestBody->output->captions->captionSources = [
        new CaptionSource(),
        new CaptionSource(),
    ];
    $request->requestBody->output->captions->mergePolicy = 'excepturi';
    $request->requestBody->output->composition = [
        new Clip(),
    ];
    $request->requestBody->output->encryption = new Encryption();
    $request->requestBody->output->encryption->initializationVector = 'iure';
    $request->requestBody->output->encryption->key = 'culpa';
    $request->requestBody->output->encryption->keyMd5 = 'doloribus';
    $request->requestBody->output->encryption->mode = 'sapiente';
    $request->requestBody->output->key = 'architecto';
    $request->requestBody->output->presetId = 'mollitia';
    $request->requestBody->output->rotate = 'dolorem';
    $request->requestBody->output->segmentDuration = 'culpa';
    $request->requestBody->output->thumbnailEncryption = new Encryption();
    $request->requestBody->output->thumbnailEncryption->initializationVector = 'consequuntur';
    $request->requestBody->output->thumbnailEncryption->key = 'repellat';
    $request->requestBody->output->thumbnailEncryption->keyMd5 = 'mollitia';
    $request->requestBody->output->thumbnailEncryption->mode = 'occaecati';
    $request->requestBody->output->thumbnailPattern = 'numquam';
    $request->requestBody->output->watermarks = [
        new JobWatermark(),
        new JobWatermark(),
    ];
    $request->requestBody->outputKeyPrefix = 'quam';
    $request->requestBody->outputs = [
        new CreateJobOutput(),
        new CreateJobOutput(),
    ];
    $request->requestBody->pipelineId = 'velit';
    $request->requestBody->playlists = [
        new CreateJobPlaylist(),
        new CreateJobPlaylist(),
        new CreateJobPlaylist(),
    ];
    $request->requestBody->userMetadata = [
        'quis' => 'vitae',
    ];
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'animi';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'sequi';
    $request->xAmzSignedHeaders = 'tenetur';

    $response = $sdk->sdk->createJob($request);

    if ($response->createJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPipeline

The CreatePipeline operation creates a pipeline with settings that you specify.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePipelineRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreatePipelineRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreatePipelineRequestBodyContentConfig;
use \OpenAPI\OpenAPI\Models\Shared\Permission;
use \OpenAPI\OpenAPI\Models\Operations\CreatePipelineRequestBodyNotifications;
use \OpenAPI\OpenAPI\Models\Operations\CreatePipelineRequestBodyThumbnailConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePipelineRequest();
    $request->requestBody = new CreatePipelineRequestBody();
    $request->requestBody->awsKmsKeyArn = 'ipsam';
    $request->requestBody->contentConfig = new CreatePipelineRequestBodyContentConfig();
    $request->requestBody->contentConfig->bucket = 'id';
    $request->requestBody->contentConfig->permissions = [
        new Permission(),
        new Permission(),
        new Permission(),
        new Permission(),
    ];
    $request->requestBody->contentConfig->storageClass = 'aut';
    $request->requestBody->inputBucket = 'quasi';
    $request->requestBody->name = 'Dr. Jake Pacocha';
    $request->requestBody->notifications = new CreatePipelineRequestBodyNotifications();
    $request->requestBody->notifications->completed = 'vero';
    $request->requestBody->notifications->error = 'nihil';
    $request->requestBody->notifications->progressing = 'praesentium';
    $request->requestBody->notifications->warning = 'voluptatibus';
    $request->requestBody->outputBucket = 'ipsa';
    $request->requestBody->role = 'omnis';
    $request->requestBody->thumbnailConfig = new CreatePipelineRequestBodyThumbnailConfig();
    $request->requestBody->thumbnailConfig->bucket = 'voluptate';
    $request->requestBody->thumbnailConfig->permissions = [
        new Permission(),
        new Permission(),
        new Permission(),
    ];
    $request->requestBody->thumbnailConfig->storageClass = 'perferendis';
    $request->xAmzAlgorithm = 'doloremque';
    $request->xAmzContentSha256 = 'reprehenderit';
    $request->xAmzCredential = 'ut';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'dolore';

    $response = $sdk->sdk->createPipeline($request);

    if ($response->createPipelineResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPreset

<p>The CreatePreset operation creates a preset with settings that you specify.</p> <important> <p>Elastic Transcoder checks the CreatePreset settings to ensure that they meet Elastic Transcoder requirements and to determine whether they comply with H.264 standards. If your settings are not valid for Elastic Transcoder, Elastic Transcoder returns an HTTP 400 response (<code>ValidationException</code>) and does not create the preset. If the settings are valid for Elastic Transcoder but aren't strictly compliant with the H.264 standard, Elastic Transcoder creates the preset and returns a warning message in the response. This helps you determine whether your settings comply with the H.264 standard while giving you greater flexibility with respect to the video that Elastic Transcoder produces.</p> </important> <p>Elastic Transcoder uses the H.264 video-compression format. For more information, see the International Telecommunication Union publication <i>Recommendation ITU-T H.264: Advanced video coding for generic audiovisual services</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePresetRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreatePresetRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreatePresetRequestBodyAudio;
use \OpenAPI\OpenAPI\Models\Shared\AudioCodecOptions;
use \OpenAPI\OpenAPI\Models\Operations\CreatePresetRequestBodyThumbnails;
use \OpenAPI\OpenAPI\Models\Operations\CreatePresetRequestBodyVideo;
use \OpenAPI\OpenAPI\Models\Shared\PresetWatermark;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePresetRequest();
    $request->requestBody = new CreatePresetRequestBody();
    $request->requestBody->audio = new CreatePresetRequestBodyAudio();
    $request->requestBody->audio->audioPackingMode = 'iusto';
    $request->requestBody->audio->bitRate = 'dicta';
    $request->requestBody->audio->channels = 'harum';
    $request->requestBody->audio->codec = 'enim';
    $request->requestBody->audio->codecOptions = new AudioCodecOptions();
    $request->requestBody->audio->codecOptions->bitDepth = 'accusamus';
    $request->requestBody->audio->codecOptions->bitOrder = 'commodi';
    $request->requestBody->audio->codecOptions->profile = 'repudiandae';
    $request->requestBody->audio->codecOptions->signed = 'quae';
    $request->requestBody->audio->sampleRate = 'ipsum';
    $request->requestBody->container = 'quidem';
    $request->requestBody->description = 'molestias';
    $request->requestBody->name = 'Ervin Gleason';
    $request->requestBody->thumbnails = new CreatePresetRequestBodyThumbnails();
    $request->requestBody->thumbnails->aspectRatio = 'voluptates';
    $request->requestBody->thumbnails->format = 'quasi';
    $request->requestBody->thumbnails->interval = 'repudiandae';
    $request->requestBody->thumbnails->maxHeight = 'sint';
    $request->requestBody->thumbnails->maxWidth = 'veritatis';
    $request->requestBody->thumbnails->paddingPolicy = 'itaque';
    $request->requestBody->thumbnails->resolution = 'incidunt';
    $request->requestBody->thumbnails->sizingPolicy = 'enim';
    $request->requestBody->video = new CreatePresetRequestBodyVideo();
    $request->requestBody->video->aspectRatio = 'consequatur';
    $request->requestBody->video->bitRate = 'est';
    $request->requestBody->video->codec = 'quibusdam';
    $request->requestBody->video->codecOptions = [
        'deserunt' => 'distinctio',
    ];
    $request->requestBody->video->displayAspectRatio = 'quibusdam';
    $request->requestBody->video->fixedGOP = 'labore';
    $request->requestBody->video->frameRate = 'modi';
    $request->requestBody->video->keyframesMaxDist = 'qui';
    $request->requestBody->video->maxFrameRate = 'aliquid';
    $request->requestBody->video->maxHeight = 'cupiditate';
    $request->requestBody->video->maxWidth = 'quos';
    $request->requestBody->video->paddingPolicy = 'perferendis';
    $request->requestBody->video->resolution = 'magni';
    $request->requestBody->video->sizingPolicy = 'assumenda';
    $request->requestBody->video->watermarks = [
        new PresetWatermark(),
        new PresetWatermark(),
    ];
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'tempore';

    $response = $sdk->sdk->createPreset($request);

    if ($response->createPresetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePipeline

<p>The DeletePipeline operation removes a pipeline.</p> <p> You can only delete a pipeline that has never been used or that is not currently in use (doesn't contain any active jobs). If the pipeline is currently in use, <code>DeletePipeline</code> returns an error. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePipelineRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePipelineRequest();
    $request->id = '4f63c969-e9a3-4efa-b7df-b14cd66ae395';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'blanditiis';

    $response = $sdk->sdk->deletePipeline($request);

    if ($response->deletePipelineResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePreset

<p>The DeletePreset operation removes a preset that you've added in an AWS region.</p> <note> <p>You can't delete the default presets that are included with Elastic Transcoder.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePresetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePresetRequest();
    $request->id = '8f3a6699-7074-4ba4-869b-6e2141959890';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'ad';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'necessitatibus';

    $response = $sdk->sdk->deletePreset($request);

    if ($response->deletePresetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listJobsByPipeline

<p>The ListJobsByPipeline operation gets a list of the jobs currently in a pipeline.</p> <p>Elastic Transcoder returns all of the jobs currently in the specified pipeline. The response body contains one element for each job that satisfies the search criteria.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListJobsByPipelineRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListJobsByPipelineRequest();
    $request->ascending = 'odit';
    $request->pageToken = 'nemo';
    $request->pipelineId = 'quasi';
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'maxime';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'facilis';

    $response = $sdk->sdk->listJobsByPipeline($request);

    if ($response->listJobsByPipelineResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listJobsByStatus

The ListJobsByStatus operation gets a list of jobs that have a specified status. The response body contains one element for each job that satisfies the search criteria.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListJobsByStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListJobsByStatusRequest();
    $request->ascending = 'in';
    $request->pageToken = 'architecto';
    $request->status = 'architecto';
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'expedita';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'repellat';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'sed';

    $response = $sdk->sdk->listJobsByStatus($request);

    if ($response->listJobsByStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPipelines

The ListPipelines operation gets a list of the pipelines associated with the current AWS account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPipelinesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPipelinesRequest();
    $request->ascending = 'saepe';
    $request->pageToken = 'pariatur';
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'sunt';
    $request->xAmzSignedHeaders = 'quo';

    $response = $sdk->sdk->listPipelines($request);

    if ($response->listPipelinesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPresets

The ListPresets operation gets a list of the default presets included with Elastic Transcoder and the presets that you've added in an AWS region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPresetsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPresetsRequest();
    $request->ascending = 'illum';
    $request->pageToken = 'pariatur';
    $request->xAmzAlgorithm = 'maxime';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'ab';

    $response = $sdk->sdk->listPresets($request);

    if ($response->listPresetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## readJob

The ReadJob operation returns detailed information about a job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ReadJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReadJobRequest();
    $request->id = 'fb576b0d-5f0d-430c-9fbb-2587053202c7';
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'nostrum';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'facilis';

    $response = $sdk->sdk->readJob($request);

    if ($response->readJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## readPipeline

The ReadPipeline operation gets detailed information about a pipeline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ReadPipelineRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReadPipelineRequest();
    $request->id = '90c28909-b3fe-449a-8d9c-bf48633323f9';
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'numquam';

    $response = $sdk->sdk->readPipeline($request);

    if ($response->readPipelineResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## readPreset

The ReadPreset operation gets detailed information about a preset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ReadPresetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReadPresetRequest();
    $request->id = '100674eb-f692-480d-9ba7-7a89ebf737ae';
    $request->xAmzAlgorithm = 'eius';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'optio';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'ad';

    $response = $sdk->sdk->readPreset($request);

    if ($response->readPresetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~testRole~~

<p>The TestRole operation tests the IAM role used to create the pipeline.</p> <p>The <code>TestRole</code> action lets you determine whether the IAM role you are using has sufficient permissions to let Elastic Transcoder perform tasks associated with the transcoding process. The action attempts to assume the specified IAM role, checks read access to the input and output buckets, and tries to send a test notification to Amazon SNS topics that you specify.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TestRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestRoleRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestRoleRequest();
    $request->requestBody = new TestRoleRequestBody();
    $request->requestBody->inputBucket = 'saepe';
    $request->requestBody->outputBucket = 'suscipit';
    $request->requestBody->role = 'deserunt';
    $request->requestBody->topics = [
        'minima',
        'repellendus',
        'totam',
    ];
    $request->xAmzAlgorithm = 'similique';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'quod';

    $response = $sdk->sdk->testRole($request);

    if ($response->testRoleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePipeline

<p> Use the <code>UpdatePipeline</code> operation to update settings for a pipeline.</p> <important> <p>When you change pipeline settings, your changes take effect immediately. Jobs that you have already submitted and that Elastic Transcoder has not started to process are affected in addition to jobs that you submit after you change settings. </p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePipelineRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePipelineRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePipelineRequestBodyContentConfig;
use \OpenAPI\OpenAPI\Models\Shared\Permission;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePipelineRequestBodyNotifications;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePipelineRequestBodyThumbnailConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePipelineRequest();
    $request->id = 'e2af7a73-cf3b-4e45-bf87-0b326b5a7342';
    $request->requestBody = new UpdatePipelineRequestBody();
    $request->requestBody->awsKmsKeyArn = 'cupiditate';
    $request->requestBody->contentConfig = new UpdatePipelineRequestBodyContentConfig();
    $request->requestBody->contentConfig->bucket = 'maxime';
    $request->requestBody->contentConfig->permissions = [
        new Permission(),
        new Permission(),
        new Permission(),
        new Permission(),
    ];
    $request->requestBody->contentConfig->storageClass = 'soluta';
    $request->requestBody->inputBucket = 'dicta';
    $request->requestBody->name = 'Felix Gorczany';
    $request->requestBody->notifications = new UpdatePipelineRequestBodyNotifications();
    $request->requestBody->notifications->completed = 'distinctio';
    $request->requestBody->notifications->error = 'facilis';
    $request->requestBody->notifications->progressing = 'aliquid';
    $request->requestBody->notifications->warning = 'quam';
    $request->requestBody->role = 'molestias';
    $request->requestBody->thumbnailConfig = new UpdatePipelineRequestBodyThumbnailConfig();
    $request->requestBody->thumbnailConfig->bucket = 'temporibus';
    $request->requestBody->thumbnailConfig->permissions = [
        new Permission(),
    ];
    $request->requestBody->thumbnailConfig->storageClass = 'neque';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'sunt';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'hic';

    $response = $sdk->sdk->updatePipeline($request);

    if ($response->updatePipelineResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePipelineNotifications

<p>With the UpdatePipelineNotifications operation, you can update Amazon Simple Notification Service (Amazon SNS) notifications for a pipeline.</p> <p>When you update notifications for a pipeline, Elastic Transcoder returns the values that you specified in the request.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePipelineNotificationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePipelineNotificationsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePipelineNotificationsRequestBodyNotifications;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePipelineNotificationsRequest();
    $request->id = '0cbb1e31-b8b9-40f3-843a-1108e0adcf4b';
    $request->requestBody = new UpdatePipelineNotificationsRequestBody();
    $request->requestBody->notifications = new UpdatePipelineNotificationsRequestBodyNotifications();
    $request->requestBody->notifications->completed = 'cupiditate';
    $request->requestBody->notifications->error = 'qui';
    $request->requestBody->notifications->progressing = 'quae';
    $request->requestBody->notifications->warning = 'laudantium';
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'quisquam';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'quis';

    $response = $sdk->sdk->updatePipelineNotifications($request);

    if ($response->updatePipelineNotificationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePipelineStatus

<p>The UpdatePipelineStatus operation pauses or reactivates a pipeline, so that the pipeline stops or restarts the processing of jobs.</p> <p>Changing the pipeline status is useful if you want to cancel one or more jobs. You can't cancel jobs after Elastic Transcoder has started processing them; if you pause the pipeline to which you submitted the jobs, you have more time to get the job IDs for the jobs that you want to cancel, and to send a <a>CancelJob</a> request. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePipelineStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePipelineStatusRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePipelineStatusRequest();
    $request->id = '3f73ef7f-bc7a-4bd7-8dd3-9c0f5d2cff7c';
    $request->requestBody = new UpdatePipelineStatusRequestBody();
    $request->requestBody->status = 'ducimus';
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->sdk->updatePipelineStatus($request);

    if ($response->updatePipelineStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
