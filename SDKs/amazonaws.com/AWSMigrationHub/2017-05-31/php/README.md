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
use \OpenAPI\OpenAPI\Models\Operations\AssociateCreatedArtifactRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateCreatedArtifactRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreatedArtifact;
use \OpenAPI\OpenAPI\Models\Operations\AssociateCreatedArtifactXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateCreatedArtifactRequest();
    $request->associateCreatedArtifactRequest = new AssociateCreatedArtifactRequest();
    $request->associateCreatedArtifactRequest->createdArtifact = new CreatedArtifact();
    $request->associateCreatedArtifactRequest->createdArtifact->description = 'corrupti';
    $request->associateCreatedArtifactRequest->createdArtifact->name = 'Kelvin Sporer';
    $request->associateCreatedArtifactRequest->dryRun = false;
    $request->associateCreatedArtifactRequest->migrationTaskName = 'corrupti';
    $request->associateCreatedArtifactRequest->progressUpdateStream = 'illum';
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'debitis';
    $request->xAmzTarget = AssociateCreatedArtifactXAmzTargetEnum::AWS_MIGRATION_HUB_ASSOCIATE_CREATED_ARTIFACT;

    $response = $sdk->associateCreatedArtifact($request);

    if ($response->associateCreatedArtifactResult !== null) {
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

* [associateCreatedArtifact](docs/sdk/README.md#associatecreatedartifact) - <p>Associates a created artifact of an AWS cloud resource, the target receiving the migration, with the migration task performed by a migration tool. This API has the following traits:</p> <ul> <li> <p>Migration tools can call the <code>AssociateCreatedArtifact</code> operation to indicate which AWS artifact is associated with a migration task.</p> </li> <li> <p>The created artifact name must be provided in ARN (Amazon Resource Name) format which will contain information about type and region; for example: <code>arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b</code>.</p> </li> <li> <p>Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance, or DMS endpoint, etc.</p> </li> </ul>
* [associateDiscoveredResource](docs/sdk/README.md#associatediscoveredresource) - Associates a discovered resource ID from Application Discovery Service with a migration task.
* [createProgressUpdateStream](docs/sdk/README.md#createprogressupdatestream) - Creates a progress update stream which is an AWS resource used for access control as well as a namespace for migration task names that is implicitly linked to your AWS account. It must uniquely identify the migration tool as it is used for all updates made by the tool; however, it does not need to be unique for each AWS account because it is scoped to the AWS account.
* [deleteProgressUpdateStream](docs/sdk/README.md#deleteprogressupdatestream) - <p>Deletes a progress update stream, including all of its tasks, which was previously created as an AWS resource used for access control. This API has the following traits:</p> <ul> <li> <p>The only parameter needed for <code>DeleteProgressUpdateStream</code> is the stream name (same as a <code>CreateProgressUpdateStream</code> call).</p> </li> <li> <p>The call will return, and a background process will asynchronously delete the stream and all of its resources (tasks, associated resources, resource attributes, created artifacts).</p> </li> <li> <p>If the stream takes time to be deleted, it might still show up on a <code>ListProgressUpdateStreams</code> call.</p> </li> <li> <p> <code>CreateProgressUpdateStream</code>, <code>ImportMigrationTask</code>, <code>NotifyMigrationTaskState</code>, and all Associate[*] APIs related to the tasks belonging to the stream will throw "InvalidInputException" if the stream of the same name is in the process of being deleted.</p> </li> <li> <p>Once the stream and all of its resources are deleted, <code>CreateProgressUpdateStream</code> for a stream of the same name will succeed, and that stream will be an entirely new logical resource (without any resources associated with the old stream).</p> </li> </ul>
* [describeApplicationState](docs/sdk/README.md#describeapplicationstate) - Gets the migration status of an application.
* [describeMigrationTask](docs/sdk/README.md#describemigrationtask) - Retrieves a list of all attributes associated with a specific migration task.
* [disassociateCreatedArtifact](docs/sdk/README.md#disassociatecreatedartifact) - <p>Disassociates a created artifact of an AWS resource with a migration task performed by a migration tool that was previously associated. This API has the following traits:</p> <ul> <li> <p>A migration user can call the <code>DisassociateCreatedArtifacts</code> operation to disassociate a created AWS Artifact from a migration task.</p> </li> <li> <p>The created artifact name must be provided in ARN (Amazon Resource Name) format which will contain information about type and region; for example: <code>arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b</code>.</p> </li> <li> <p>Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance, or RDS instance, etc.</p> </li> </ul>
* [disassociateDiscoveredResource](docs/sdk/README.md#disassociatediscoveredresource) - Disassociate an Application Discovery Service discovered resource from a migration task.
* [importMigrationTask](docs/sdk/README.md#importmigrationtask) - <p>Registers a new migration task which represents a server, database, etc., being migrated to AWS by a migration tool.</p> <p>This API is a prerequisite to calling the <code>NotifyMigrationTaskState</code> API as the migration tool must first register the migration task with Migration Hub.</p>
* [listApplicationStates](docs/sdk/README.md#listapplicationstates) - Lists all the migration statuses for your applications. If you use the optional <code>ApplicationIds</code> parameter, only the migration statuses for those applications will be returned.
* [listCreatedArtifacts](docs/sdk/README.md#listcreatedartifacts) - <p>Lists the created artifacts attached to a given migration task in an update stream. This API has the following traits:</p> <ul> <li> <p>Gets the list of the created artifacts while migration is taking place.</p> </li> <li> <p>Shows the artifacts created by the migration tool that was associated by the <code>AssociateCreatedArtifact</code> API. </p> </li> <li> <p>Lists created artifacts in a paginated interface. </p> </li> </ul>
* [listDiscoveredResources](docs/sdk/README.md#listdiscoveredresources) - Lists discovered resources associated with the given <code>MigrationTask</code>.
* [listMigrationTasks](docs/sdk/README.md#listmigrationtasks) - <p>Lists all, or filtered by resource name, migration tasks associated with the user account making this call. This API has the following traits:</p> <ul> <li> <p>Can show a summary list of the most recent migration tasks.</p> </li> <li> <p>Can show a summary list of migration tasks associated with a given discovered resource.</p> </li> <li> <p>Lists migration tasks in a paginated interface.</p> </li> </ul>
* [listProgressUpdateStreams](docs/sdk/README.md#listprogressupdatestreams) - Lists progress update streams associated with the user account making this call.
* [notifyApplicationState](docs/sdk/README.md#notifyapplicationstate) - Sets the migration state of an application. For a given application identified by the value passed to <code>ApplicationId</code>, its status is set or updated by passing one of three values to <code>Status</code>: <code>NOT_STARTED | IN_PROGRESS | COMPLETED</code>.
* [notifyMigrationTaskState](docs/sdk/README.md#notifymigrationtaskstate) - <p>Notifies Migration Hub of the current status, progress, or other detail regarding a migration task. This API has the following traits:</p> <ul> <li> <p>Migration tools will call the <code>NotifyMigrationTaskState</code> API to share the latest progress and status.</p> </li> <li> <p> <code>MigrationTaskName</code> is used for addressing updates to the correct target.</p> </li> <li> <p> <code>ProgressUpdateStream</code> is used for access control and to provide a namespace for each migration tool.</p> </li> </ul>
* [putResourceAttributes](docs/sdk/README.md#putresourceattributes) - <p>Provides identifying details of the resource being migrated so that it can be associated in the Application Discovery Service repository. This association occurs asynchronously after <code>PutResourceAttributes</code> returns.</p> <important> <ul> <li> <p>Keep in mind that subsequent calls to PutResourceAttributes will override previously stored attributes. For example, if it is first called with a MAC address, but later, it is desired to <i>add</i> an IP address, it will then be required to call it with <i>both</i> the IP and MAC addresses to prevent overriding the MAC address.</p> </li> <li> <p>Note the instructions regarding the special use case of the <a href="https://docs.aws.amazon.com/migrationhub/latest/ug/API_PutResourceAttributes.html#migrationhub-PutResourceAttributes-request-ResourceAttributeList"> <code>ResourceAttributeList</code> </a> parameter when specifying any "VM" related value.</p> </li> </ul> </important> <note> <p>Because this is an asynchronous call, it will always return 200, whether an association occurs or not. To confirm if an association was found based on the provided details, call <code>ListDiscoveredResources</code>.</p> </note>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
