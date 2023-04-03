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

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createExperimentTemplate` - <p>Creates an experiment template. </p> <p>An experiment template includes the following components:</p> <ul> <li> <p> <b>Targets</b>: A target can be a specific resource in your Amazon Web Services environment, or one or more resources that match criteria that you specify, for example, resources that have specific tags.</p> </li> <li> <p> <b>Actions</b>: The actions to carry out on the target. You can specify multiple actions, the duration of each action, and when to start each action during an experiment.</p> </li> <li> <p> <b>Stop conditions</b>: If a stop condition is triggered while an experiment is running, the experiment is automatically stopped. You can define a stop condition as a CloudWatch alarm.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/experiment-templates.html">Experiment templates</a> in the <i>Fault Injection Simulator User Guide</i>.</p>
* `deleteExperimentTemplate` - Deletes the specified experiment template.
* `getAction` - Gets information about the specified FIS action.
* `getExperiment` - Gets information about the specified experiment.
* `getExperimentTemplate` - Gets information about the specified experiment template.
* `getTargetResourceType` - Gets information about the specified resource type.
* `listActions` - Lists the available FIS actions.
* `listExperimentTemplates` - Lists your experiment templates.
* `listExperiments` - Lists your experiments.
* `listTagsForResource` - Lists the tags for the specified resource.
* `listTargetResourceTypes` - Lists the target resource types.
* `startExperiment` - Starts running an experiment from the specified experiment template.
* `stopExperiment` - Stops the specified experiment.
* `tagResource` - Applies the specified tags to the specified resource.
* `untagResource` - Removes the specified tags from the specified resource.
* `updateExperimentTemplate` - Updates the specified experiment template.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
