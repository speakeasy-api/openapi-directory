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
use \OpenAPI\OpenAPI\Models\Operations\BatchGetSchemaRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetSchemaRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetSchemaRequest();
    $request->requestBody = new BatchGetSchemaRequestBody();
    $request->requestBody->names = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->xAmzAlgorithm = 'unde';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->collaborationIdentifier = 'suscipit';

    $response = $sdk->batchGetSchema($request);

    if ($response->batchGetSchemaOutput !== null) {
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

* [batchGetSchema](docs/sdk/README.md#batchgetschema) - Retrieves multiple schemas by their identifiers.
* [createCollaboration](docs/sdk/README.md#createcollaboration) - Creates a new collaboration.
* [createConfiguredTable](docs/sdk/README.md#createconfiguredtable) - Creates a new configured table resource.
* [createConfiguredTableAnalysisRule](docs/sdk/README.md#createconfiguredtableanalysisrule) - Creates a new analysis rule for a configured table. Currently, only one analysis rule can be created for a given configured table.
* [createConfiguredTableAssociation](docs/sdk/README.md#createconfiguredtableassociation) - Creates a configured table association. A configured table association links a configured table with a collaboration.
* [createMembership](docs/sdk/README.md#createmembership) - Creates a membership for a specific collaboration identifier and joins the collaboration.
* [deleteCollaboration](docs/sdk/README.md#deletecollaboration) - Deletes a collaboration. It can only be called by the collaboration owner.
* [deleteConfiguredTable](docs/sdk/README.md#deleteconfiguredtable) - Deletes a configured table.
* [deleteConfiguredTableAnalysisRule](docs/sdk/README.md#deleteconfiguredtableanalysisrule) - Deletes a configured table analysis rule.
* [deleteConfiguredTableAssociation](docs/sdk/README.md#deleteconfiguredtableassociation) - Deletes a configured table association.
* [deleteMember](docs/sdk/README.md#deletemember) - Removes the specified member from a collaboration. The removed member is placed in the Removed status and can't interact with the collaboration. The removed member's data is inaccessible to active members of the collaboration.
* [deleteMembership](docs/sdk/README.md#deletemembership) - Deletes a specified membership. All resources under a membership must be deleted.
* [getCollaboration](docs/sdk/README.md#getcollaboration) - Returns metadata about a collaboration.
* [getConfiguredTable](docs/sdk/README.md#getconfiguredtable) - Retrieves a configured table.
* [getConfiguredTableAnalysisRule](docs/sdk/README.md#getconfiguredtableanalysisrule) - Retrieves a configured table analysis rule.
* [getConfiguredTableAssociation](docs/sdk/README.md#getconfiguredtableassociation) - Retrieves a configured table association.
* [getMembership](docs/sdk/README.md#getmembership) - Retrieves a specified membership for an identifier.
* [getProtectedQuery](docs/sdk/README.md#getprotectedquery) - Returns query processing metadata.
* [getSchema](docs/sdk/README.md#getschema) - Retrieves the schema for a relation within a collaboration.
* [getSchemaAnalysisRule](docs/sdk/README.md#getschemaanalysisrule) - Retrieves a schema analysis rule.
* [listCollaborations](docs/sdk/README.md#listcollaborations) - Lists collaborations the caller owns, is active in, or has been invited to.
* [listConfiguredTableAssociations](docs/sdk/README.md#listconfiguredtableassociations) - Lists configured table associations for a membership.
* [listConfiguredTables](docs/sdk/README.md#listconfiguredtables) - Lists configured tables.
* [listMembers](docs/sdk/README.md#listmembers) - Lists all members within a collaboration.
* [listMemberships](docs/sdk/README.md#listmemberships) - Lists all memberships resources within the caller's account.
* [listProtectedQueries](docs/sdk/README.md#listprotectedqueries) - Lists protected queries, sorted by the most recent query.
* [listSchemas](docs/sdk/README.md#listschemas) - Lists the schemas for relations within a collaboration.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists all of the tags that have been added to a resource.
* [startProtectedQuery](docs/sdk/README.md#startprotectedquery) - Creates a protected query that is started by AWS Clean Rooms.
* [tagResource](docs/sdk/README.md#tagresource) - Tags a resource.
* [untagResource](docs/sdk/README.md#untagresource) - Removes a tag or list of tags from a resource.
* [updateCollaboration](docs/sdk/README.md#updatecollaboration) - Updates collaboration metadata and can only be called by the collaboration owner.
* [updateConfiguredTable](docs/sdk/README.md#updateconfiguredtable) - Updates a configured table.
* [updateConfiguredTableAnalysisRule](docs/sdk/README.md#updateconfiguredtableanalysisrule) - Updates a configured table analysis rule.
* [updateConfiguredTableAssociation](docs/sdk/README.md#updateconfiguredtableassociation) - Updates a configured table association.
* [updateMembership](docs/sdk/README.md#updatemembership) - Updates a membership.
* [updateProtectedQuery](docs/sdk/README.md#updateprotectedquery) - Updates the processing of a currently running query.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
