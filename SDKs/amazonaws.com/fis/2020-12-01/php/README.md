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
use \OpenAPI\OpenAPI\Models\Operations\CreateExperimentTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateExperimentTemplateRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\CreateExperimentTemplateActionInput;
use \OpenAPI\OpenAPI\Models\Operations\CreateExperimentTemplateRequestBodyLogConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ExperimentTemplateCloudWatchLogsLogConfigurationInput;
use \OpenAPI\OpenAPI\Models\Shared\ExperimentTemplateS3LogConfigurationInput;
use \OpenAPI\OpenAPI\Models\Shared\CreateExperimentTemplateStopConditionInput;
use \OpenAPI\OpenAPI\Models\Shared\CreateExperimentTemplateTargetInput;
use \OpenAPI\OpenAPI\Models\Shared\ExperimentTemplateTargetInputFilter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateExperimentTemplateRequest();
    $request->requestBody = new CreateExperimentTemplateRequestBody();
    $request->requestBody->actions = [
        'provident' => new CreateExperimentTemplateActionInput(),
        'distinctio' => new CreateExperimentTemplateActionInput(),
        'quibusdam' => new CreateExperimentTemplateActionInput(),
    ];
    $request->requestBody->clientToken = 'unde';
    $request->requestBody->description = 'nulla';
    $request->requestBody->logConfiguration = new CreateExperimentTemplateRequestBodyLogConfiguration();
    $request->requestBody->logConfiguration->cloudWatchLogsConfiguration = new ExperimentTemplateCloudWatchLogsLogConfigurationInput();
    $request->requestBody->logConfiguration->cloudWatchLogsConfiguration->logGroupArn = 'corrupti';
    $request->requestBody->logConfiguration->logSchemaVersion = 847252;
    $request->requestBody->logConfiguration->s3Configuration = new ExperimentTemplateS3LogConfigurationInput();
    $request->requestBody->logConfiguration->s3Configuration->bucketName = 'vel';
    $request->requestBody->logConfiguration->s3Configuration->prefix = 'error';
    $request->requestBody->roleArn = 'deserunt';
    $request->requestBody->stopConditions = [
        new CreateExperimentTemplateStopConditionInput(),
        new CreateExperimentTemplateStopConditionInput(),
    ];
    $request->requestBody->tags = [
        'magnam' => 'debitis',
        'ipsa' => 'delectus',
    ];
    $request->requestBody->targets = [
        'suscipit' => new CreateExperimentTemplateTargetInput(),
        'molestiae' => new CreateExperimentTemplateTargetInput(),
    ];
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'placeat';
    $request->xAmzCredential = 'voluptatum';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'recusandae';

    $response = $sdk->createExperimentTemplate($request);

    if ($response->createExperimentTemplateResponse !== null) {
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

* [createExperimentTemplate](docs/sdk/README.md#createexperimenttemplate) - <p>Creates an experiment template. </p> <p>An experiment template includes the following components:</p> <ul> <li> <p> <b>Targets</b>: A target can be a specific resource in your Amazon Web Services environment, or one or more resources that match criteria that you specify, for example, resources that have specific tags.</p> </li> <li> <p> <b>Actions</b>: The actions to carry out on the target. You can specify multiple actions, the duration of each action, and when to start each action during an experiment.</p> </li> <li> <p> <b>Stop conditions</b>: If a stop condition is triggered while an experiment is running, the experiment is automatically stopped. You can define a stop condition as a CloudWatch alarm.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/experiment-templates.html">Experiment templates</a> in the <i>Fault Injection Simulator User Guide</i>.</p>
* [deleteExperimentTemplate](docs/sdk/README.md#deleteexperimenttemplate) - Deletes the specified experiment template.
* [getAction](docs/sdk/README.md#getaction) - Gets information about the specified FIS action.
* [getExperiment](docs/sdk/README.md#getexperiment) - Gets information about the specified experiment.
* [getExperimentTemplate](docs/sdk/README.md#getexperimenttemplate) - Gets information about the specified experiment template.
* [getTargetResourceType](docs/sdk/README.md#gettargetresourcetype) - Gets information about the specified resource type.
* [listActions](docs/sdk/README.md#listactions) - Lists the available FIS actions.
* [listExperimentTemplates](docs/sdk/README.md#listexperimenttemplates) - Lists your experiment templates.
* [listExperiments](docs/sdk/README.md#listexperiments) - Lists your experiments.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags for the specified resource.
* [listTargetResourceTypes](docs/sdk/README.md#listtargetresourcetypes) - Lists the target resource types.
* [startExperiment](docs/sdk/README.md#startexperiment) - Starts running an experiment from the specified experiment template.
* [stopExperiment](docs/sdk/README.md#stopexperiment) - Stops the specified experiment.
* [tagResource](docs/sdk/README.md#tagresource) - Applies the specified tags to the specified resource.
* [untagResource](docs/sdk/README.md#untagresource) - Removes the specified tags from the specified resource.
* [updateExperimentTemplate](docs/sdk/README.md#updateexperimenttemplate) - Updates the specified experiment template.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
