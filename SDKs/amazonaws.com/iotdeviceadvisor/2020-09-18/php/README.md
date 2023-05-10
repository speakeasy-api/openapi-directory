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
use \OpenAPI\OpenAPI\Models\Operations\CreateSuiteDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSuiteDefinitionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DeviceUnderTest;
use \OpenAPI\OpenAPI\Models\Shared\ProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSuiteDefinitionRequest();
    $request->requestBody = new CreateSuiteDefinitionRequestBody();
    $request->requestBody->suiteDefinitionConfiguration = new CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration();
    $request->requestBody->suiteDefinitionConfiguration->devicePermissionRoleArn = 'corrupti';
    $request->requestBody->suiteDefinitionConfiguration->devices = [
        new DeviceUnderTest(),
        new DeviceUnderTest(),
        new DeviceUnderTest(),
    ];
    $request->requestBody->suiteDefinitionConfiguration->intendedForQualification = false;
    $request->requestBody->suiteDefinitionConfiguration->isLongDurationTest = false;
    $request->requestBody->suiteDefinitionConfiguration->protocol = ProtocolEnum::MQTT_V5;
    $request->requestBody->suiteDefinitionConfiguration->rootGroup = 'quibusdam';
    $request->requestBody->suiteDefinitionConfiguration->suiteDefinitionName = 'unde';
    $request->requestBody->tags = [
        'corrupti' => 'illum',
        'vel' => 'error',
        'deserunt' => 'suscipit',
        'iure' => 'magnam',
    ];
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'minus';

    $response = $sdk->createSuiteDefinition($request);

    if ($response->createSuiteDefinitionResponse !== null) {
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

* [createSuiteDefinition](docs/sdk/README.md#createsuitedefinition) - <p>Creates a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateSuiteDefinition</a> action.</p>
* [deleteSuiteDefinition](docs/sdk/README.md#deletesuitedefinition) - <p>Deletes a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteSuiteDefinition</a> action.</p>
* [getEndpoint](docs/sdk/README.md#getendpoint) - Gets information about an Device Advisor endpoint.
* [getSuiteDefinition](docs/sdk/README.md#getsuitedefinition) - <p>Gets information about a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteDefinition</a> action.</p>
* [getSuiteRun](docs/sdk/README.md#getsuiterun) - <p>Gets information about a Device Advisor test suite run.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteRun</a> action.</p>
* [getSuiteRunReport](docs/sdk/README.md#getsuiterunreport) - <p>Gets a report download link for a successful Device Advisor qualifying test suite run.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteRunReport</a> action.</p>
* [listSuiteDefinitions](docs/sdk/README.md#listsuitedefinitions) - <p>Lists the Device Advisor test suites you have created.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSuiteDefinitions</a> action.</p>
* [listSuiteRuns](docs/sdk/README.md#listsuiteruns) - <p>Lists runs of the specified Device Advisor test suite. You can list all runs of the test suite, or the runs of a specific version of the test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSuiteRuns</a> action.</p>
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - <p>Lists the tags attached to an IoT Device Advisor resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTagsForResource</a> action.</p>
* [startSuiteRun](docs/sdk/README.md#startsuiterun) - <p>Starts a Device Advisor test suite run.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartSuiteRun</a> action.</p>
* [stopSuiteRun](docs/sdk/README.md#stopsuiterun) - <p>Stops a Device Advisor test suite run that is currently running.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StopSuiteRun</a> action.</p>
* [tagResource](docs/sdk/README.md#tagresource) - <p>Adds to and modifies existing tags of an IoT Device Advisor resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TagResource</a> action.</p>
* [untagResource](docs/sdk/README.md#untagresource) - <p>Removes tags from an IoT Device Advisor resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UntagResource</a> action.</p>
* [updateSuiteDefinition](docs/sdk/README.md#updatesuitedefinition) - <p>Updates a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateSuiteDefinition</a> action.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
