# SDK

## Overview

<p>Welcome to the <i>AWS Clean Rooms API Reference</i>.</p> <p>AWS Clean Rooms is an AWS service that helps multiple parties to join their data together in a secure collaboration workspace. In the collaboration, members who can query and receive results can get insights into the collective datasets without either party getting access to the other party's raw data.</p> <p>To learn more about AWS Clean Rooms concepts, procedures, and best practices, see the <a href="https://docs.aws.amazon.com/clean-rooms/latest/userguide/what-is.html">AWS Clean Rooms User Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/cleanrooms/>
### Available Operations

* [batchGetSchema](#batchgetschema) - Retrieves multiple schemas by their identifiers.
* [createCollaboration](#createcollaboration) - Creates a new collaboration.
* [createConfiguredTable](#createconfiguredtable) - Creates a new configured table resource.
* [createConfiguredTableAnalysisRule](#createconfiguredtableanalysisrule) - Creates a new analysis rule for a configured table. Currently, only one analysis rule can be created for a given configured table.
* [createConfiguredTableAssociation](#createconfiguredtableassociation) - Creates a configured table association. A configured table association links a configured table with a collaboration.
* [createMembership](#createmembership) - Creates a membership for a specific collaboration identifier and joins the collaboration.
* [deleteCollaboration](#deletecollaboration) - Deletes a collaboration. It can only be called by the collaboration owner.
* [deleteConfiguredTable](#deleteconfiguredtable) - Deletes a configured table.
* [deleteConfiguredTableAnalysisRule](#deleteconfiguredtableanalysisrule) - Deletes a configured table analysis rule.
* [deleteConfiguredTableAssociation](#deleteconfiguredtableassociation) - Deletes a configured table association.
* [deleteMember](#deletemember) - Removes the specified member from a collaboration. The removed member is placed in the Removed status and can't interact with the collaboration. The removed member's data is inaccessible to active members of the collaboration.
* [deleteMembership](#deletemembership) - Deletes a specified membership. All resources under a membership must be deleted.
* [getCollaboration](#getcollaboration) - Returns metadata about a collaboration.
* [getConfiguredTable](#getconfiguredtable) - Retrieves a configured table.
* [getConfiguredTableAnalysisRule](#getconfiguredtableanalysisrule) - Retrieves a configured table analysis rule.
* [getConfiguredTableAssociation](#getconfiguredtableassociation) - Retrieves a configured table association.
* [getMembership](#getmembership) - Retrieves a specified membership for an identifier.
* [getProtectedQuery](#getprotectedquery) - Returns query processing metadata.
* [getSchema](#getschema) - Retrieves the schema for a relation within a collaboration.
* [getSchemaAnalysisRule](#getschemaanalysisrule) - Retrieves a schema analysis rule.
* [listCollaborations](#listcollaborations) - Lists collaborations the caller owns, is active in, or has been invited to.
* [listConfiguredTableAssociations](#listconfiguredtableassociations) - Lists configured table associations for a membership.
* [listConfiguredTables](#listconfiguredtables) - Lists configured tables.
* [listMembers](#listmembers) - Lists all members within a collaboration.
* [listMemberships](#listmemberships) - Lists all memberships resources within the caller's account.
* [listProtectedQueries](#listprotectedqueries) - Lists protected queries, sorted by the most recent query.
* [listSchemas](#listschemas) - Lists the schemas for relations within a collaboration.
* [listTagsForResource](#listtagsforresource) - Lists all of the tags that have been added to a resource.
* [startProtectedQuery](#startprotectedquery) - Creates a protected query that is started by AWS Clean Rooms.
* [tagResource](#tagresource) - Tags a resource.
* [untagResource](#untagresource) - Removes a tag or list of tags from a resource.
* [updateCollaboration](#updatecollaboration) - Updates collaboration metadata and can only be called by the collaboration owner.
* [updateConfiguredTable](#updateconfiguredtable) - Updates a configured table.
* [updateConfiguredTableAnalysisRule](#updateconfiguredtableanalysisrule) - Updates a configured table analysis rule.
* [updateConfiguredTableAssociation](#updateconfiguredtableassociation) - Updates a configured table association.
* [updateMembership](#updatemembership) - Updates a membership.
* [updateProtectedQuery](#updateprotectedquery) - Updates the processing of a currently running query.

## batchGetSchema

Retrieves multiple schemas by their identifiers.

### Example Usage

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
        'magnam',
        'debitis',
    ];
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'placeat';
    $request->collaborationIdentifier = 'voluptatum';

    $response = $sdk->sdk->batchGetSchema($request);

    if ($response->batchGetSchemaOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCollaboration

Creates a new collaboration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCollaborationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCollaborationRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\MemberAbilityEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateCollaborationRequestBodyDataEncryptionMetadata;
use \OpenAPI\OpenAPI\Models\Shared\MemberSpecification;
use \OpenAPI\OpenAPI\Models\Operations\CreateCollaborationRequestBodyQueryLogStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCollaborationRequest();
    $request->requestBody = new CreateCollaborationRequestBody();
    $request->requestBody->creatorDisplayName = 'iusto';
    $request->requestBody->creatorMemberAbilities = [
        MemberAbilityEnum::CAN_QUERY,
        MemberAbilityEnum::CAN_RECEIVE_RESULTS,
        MemberAbilityEnum::CAN_RECEIVE_RESULTS,
    ];
    $request->requestBody->dataEncryptionMetadata = new CreateCollaborationRequestBodyDataEncryptionMetadata();
    $request->requestBody->dataEncryptionMetadata->allowCleartext = false;
    $request->requestBody->dataEncryptionMetadata->allowDuplicates = false;
    $request->requestBody->dataEncryptionMetadata->allowJoinsOnColumnsWithDifferentNames = false;
    $request->requestBody->dataEncryptionMetadata->preserveNulls = false;
    $request->requestBody->description = 'ab';
    $request->requestBody->members = [
        new MemberSpecification(),
        new MemberSpecification(),
    ];
    $request->requestBody->name = 'Iris Aufderhar';
    $request->requestBody->queryLogStatus = CreateCollaborationRequestBodyQueryLogStatusEnum::DISABLED;
    $request->requestBody->tags = [
        'odit' => 'at',
        'at' => 'maiores',
        'molestiae' => 'quod',
        'quod' => 'esse',
    ];
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'occaecati';

    $response = $sdk->sdk->createCollaboration($request);

    if ($response->createCollaborationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createConfiguredTable

Creates a new configured table resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateConfiguredTableRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateConfiguredTableRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateConfiguredTableRequestBodyAnalysisMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateConfiguredTableRequestBodyTableReference;
use \OpenAPI\OpenAPI\Models\Shared\GlueTableReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConfiguredTableRequest();
    $request->requestBody = new CreateConfiguredTableRequestBody();
    $request->requestBody->allowedColumns = [
        'deleniti',
    ];
    $request->requestBody->analysisMethod = CreateConfiguredTableRequestBodyAnalysisMethodEnum::DIRECT_QUERY;
    $request->requestBody->description = 'hic';
    $request->requestBody->name = 'Everett Breitenberg';
    $request->requestBody->tableReference = new CreateConfiguredTableRequestBodyTableReference();
    $request->requestBody->tableReference->glue = new GlueTableReference();
    $request->requestBody->tableReference->glue->databaseName = 'modi';
    $request->requestBody->tableReference->glue->tableName = 'qui';
    $request->requestBody->tags = [
        'cum' => 'esse',
        'ipsum' => 'excepturi',
        'aspernatur' => 'perferendis',
        'ad' => 'natus',
    ];
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'laboriosam';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'saepe';

    $response = $sdk->sdk->createConfiguredTable($request);

    if ($response->createConfiguredTableOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createConfiguredTableAnalysisRule

Creates a new analysis rule for a configured table. Currently, only one analysis rule can be created for a given configured table.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateConfiguredTableAnalysisRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateConfiguredTableAnalysisRuleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateConfiguredTableAnalysisRuleRequestBodyAnalysisRulePolicy;
use \OpenAPI\OpenAPI\Models\Shared\ConfiguredTableAnalysisRulePolicyV1;
use \OpenAPI\OpenAPI\Models\Shared\AnalysisRuleAggregation;
use \OpenAPI\OpenAPI\Models\Shared\AggregateColumn;
use \OpenAPI\OpenAPI\Models\Shared\AggregateFunctionNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\JoinRequiredOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AggregationConstraint;
use \OpenAPI\OpenAPI\Models\Shared\AggregationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScalarFunctionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AnalysisRuleList;
use \OpenAPI\OpenAPI\Models\Operations\CreateConfiguredTableAnalysisRuleRequestBodyAnalysisRuleTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConfiguredTableAnalysisRuleRequest();
    $request->requestBody = new CreateConfiguredTableAnalysisRuleRequestBody();
    $request->requestBody->analysisRulePolicy = new CreateConfiguredTableAnalysisRuleRequestBodyAnalysisRulePolicy();
    $request->requestBody->analysisRulePolicy->v1 = new ConfiguredTableAnalysisRulePolicyV1();
    $request->requestBody->analysisRulePolicy->v1->aggregation = new AnalysisRuleAggregation();
    $request->requestBody->analysisRulePolicy->v1->aggregation->aggregateColumns = [
        new AggregateColumn(),
        new AggregateColumn(),
        new AggregateColumn(),
    ];
    $request->requestBody->analysisRulePolicy->v1->aggregation->dimensionColumns = [
        'corporis',
        'iste',
    ];
    $request->requestBody->analysisRulePolicy->v1->aggregation->joinColumns = [
        'saepe',
        'quidem',
    ];
    $request->requestBody->analysisRulePolicy->v1->aggregation->joinRequired = JoinRequiredOptionEnum::QUERY_RUNNER;
    $request->requestBody->analysisRulePolicy->v1->aggregation->outputConstraints = [
        new AggregationConstraint(),
    ];
    $request->requestBody->analysisRulePolicy->v1->aggregation->scalarFunctions = [
        ScalarFunctionsEnum::COALESCE,
    ];
    $request->requestBody->analysisRulePolicy->v1->list = new AnalysisRuleList();
    $request->requestBody->analysisRulePolicy->v1->list->joinColumns = [
        'mollitia',
        'laborum',
        'dolores',
    ];
    $request->requestBody->analysisRulePolicy->v1->list->listColumns = [
        'corporis',
    ];
    $request->requestBody->analysisRuleType = CreateConfiguredTableAnalysisRuleRequestBodyAnalysisRuleTypeEnum::AGGREGATION;
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->configuredTableIdentifier = 'iure';

    $response = $sdk->sdk->createConfiguredTableAnalysisRule($request);

    if ($response->createConfiguredTableAnalysisRuleOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createConfiguredTableAssociation

Creates a configured table association. A configured table association links a configured table with a collaboration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateConfiguredTableAssociationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateConfiguredTableAssociationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConfiguredTableAssociationRequest();
    $request->requestBody = new CreateConfiguredTableAssociationRequestBody();
    $request->requestBody->configuredTableIdentifier = 'culpa';
    $request->requestBody->description = 'doloribus';
    $request->requestBody->name = 'Juan O'Hara';
    $request->requestBody->roleArn = 'consequuntur';
    $request->requestBody->tags = [
        'mollitia' => 'occaecati',
        'numquam' => 'commodi',
        'quam' => 'molestiae',
        'velit' => 'error',
    ];
    $request->xAmzAlgorithm = 'quia';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'vitae';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'animi';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'odit';
    $request->membershipIdentifier = 'quo';

    $response = $sdk->sdk->createConfiguredTableAssociation($request);

    if ($response->createConfiguredTableAssociationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createMembership

Creates a membership for a specific collaboration identifier and joins the collaboration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateMembershipRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateMembershipRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateMembershipRequestBodyQueryLogStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMembershipRequest();
    $request->requestBody = new CreateMembershipRequestBody();
    $request->requestBody->collaborationIdentifier = 'sequi';
    $request->requestBody->queryLogStatus = CreateMembershipRequestBodyQueryLogStatusEnum::DISABLED;
    $request->requestBody->tags = [
        'id' => 'possimus',
        'aut' => 'quasi',
    ];
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'vero';

    $response = $sdk->sdk->createMembership($request);

    if ($response->createMembershipOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCollaboration

Deletes a collaboration. It can only be called by the collaboration owner.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCollaborationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCollaborationRequest();
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'cum';
    $request->collaborationIdentifier = 'perferendis';

    $response = $sdk->sdk->deleteCollaboration($request);

    if ($response->deleteCollaborationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConfiguredTable

Deletes a configured table.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConfiguredTableRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConfiguredTableRequest();
    $request->xAmzAlgorithm = 'doloremque';
    $request->xAmzContentSha256 = 'reprehenderit';
    $request->xAmzCredential = 'ut';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'dolore';
    $request->configuredTableIdentifier = 'iusto';

    $response = $sdk->sdk->deleteConfiguredTable($request);

    if ($response->deleteConfiguredTableOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConfiguredTableAnalysisRule

Deletes a configured table analysis rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConfiguredTableAnalysisRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConfiguredTableAnalysisRuleAnalysisRuleTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConfiguredTableAnalysisRuleRequest();
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'quae';
    $request->analysisRuleType = DeleteConfiguredTableAnalysisRuleAnalysisRuleTypeEnum::AGGREGATION;
    $request->configuredTableIdentifier = 'quidem';

    $response = $sdk->sdk->deleteConfiguredTableAnalysisRule($request);

    if ($response->deleteConfiguredTableAnalysisRuleOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConfiguredTableAssociation

Deletes a configured table association.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConfiguredTableAssociationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConfiguredTableAssociationRequest();
    $request->xAmzAlgorithm = 'molestias';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'rem';
    $request->xAmzSignedHeaders = 'voluptates';
    $request->configuredTableAssociationIdentifier = 'quasi';
    $request->membershipIdentifier = 'repudiandae';

    $response = $sdk->sdk->deleteConfiguredTableAssociation($request);

    if ($response->deleteConfiguredTableAssociationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMember

Removes the specified member from a collaboration. The removed member is placed in the Removed status and can't interact with the collaboration. The removed member's data is inaccessible to active members of the collaboration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMemberRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMemberRequest();
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'itaque';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'consequatur';
    $request->xAmzSignedHeaders = 'est';
    $request->accountId = 'quibusdam';
    $request->collaborationIdentifier = 'explicabo';

    $response = $sdk->sdk->deleteMember($request);

    if ($response->deleteMemberOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMembership

Deletes a specified membership. All resources under a membership must be deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMembershipRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMembershipRequest();
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->membershipIdentifier = 'cupiditate';

    $response = $sdk->sdk->deleteMembership($request);

    if ($response->deleteMembershipOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCollaboration

Returns metadata about a collaboration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCollaborationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCollaborationRequest();
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'magni';
    $request->xAmzDate = 'assumenda';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'alias';
    $request->xAmzSignedHeaders = 'fugit';
    $request->collaborationIdentifier = 'dolorum';

    $response = $sdk->sdk->getCollaboration($request);

    if ($response->getCollaborationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConfiguredTable

Retrieves a configured table.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConfiguredTableRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConfiguredTableRequest();
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'eum';
    $request->configuredTableIdentifier = 'non';

    $response = $sdk->sdk->getConfiguredTable($request);

    if ($response->getConfiguredTableOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConfiguredTableAnalysisRule

Retrieves a configured table analysis rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConfiguredTableAnalysisRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetConfiguredTableAnalysisRuleAnalysisRuleTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConfiguredTableAnalysisRuleRequest();
    $request->xAmzAlgorithm = 'eligendi';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'officia';
    $request->analysisRuleType = GetConfiguredTableAnalysisRuleAnalysisRuleTypeEnum::AGGREGATION;
    $request->configuredTableIdentifier = 'debitis';

    $response = $sdk->sdk->getConfiguredTableAnalysisRule($request);

    if ($response->getConfiguredTableAnalysisRuleOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConfiguredTableAssociation

Retrieves a configured table association.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConfiguredTableAssociationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConfiguredTableAssociationRequest();
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'rerum';
    $request->configuredTableAssociationIdentifier = 'dicta';
    $request->membershipIdentifier = 'magnam';

    $response = $sdk->sdk->getConfiguredTableAssociation($request);

    if ($response->getConfiguredTableAssociationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMembership

Retrieves a specified membership for an identifier.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMembershipRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMembershipRequest();
    $request->xAmzAlgorithm = 'cumque';
    $request->xAmzContentSha256 = 'facere';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'non';
    $request->membershipIdentifier = 'occaecati';

    $response = $sdk->sdk->getMembership($request);

    if ($response->getMembershipOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProtectedQuery

Returns query processing metadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProtectedQueryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProtectedQueryRequest();
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'id';
    $request->membershipIdentifier = 'blanditiis';
    $request->protectedQueryIdentifier = 'deleniti';

    $response = $sdk->sdk->getProtectedQuery($request);

    if ($response->getProtectedQueryOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSchema

Retrieves the schema for a relation within a collaboration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchemaRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchemaRequest();
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'omnis';
    $request->collaborationIdentifier = 'molestiae';
    $request->name = 'Marcia Gutkowski';

    $response = $sdk->sdk->getSchema($request);

    if ($response->getSchemaOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSchemaAnalysisRule

Retrieves a schema analysis rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchemaAnalysisRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSchemaAnalysisRuleTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchemaAnalysisRuleRequest();
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'vero';
    $request->collaborationIdentifier = 'aspernatur';
    $request->name = 'Danielle Bosco';
    $request->type = GetSchemaAnalysisRuleTypeEnum::LIST;

    $response = $sdk->sdk->getSchemaAnalysisRule($request);

    if ($response->getSchemaAnalysisRuleOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCollaborations

Lists collaborations the caller owns, is active in, or has been invited to.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCollaborationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCollaborationsMemberStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCollaborationsRequest();
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'ad';
    $request->maxResults = 431418;
    $request->memberStatus = ListCollaborationsMemberStatusEnum::INVITED;
    $request->nextToken = 'necessitatibus';

    $response = $sdk->sdk->listCollaborations($request);

    if ($response->listCollaborationsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listConfiguredTableAssociations

Lists configured table associations for a membership.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListConfiguredTableAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListConfiguredTableAssociationsRequest();
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'eius';
    $request->maxResults = 806194;
    $request->membershipIdentifier = 'deleniti';
    $request->nextToken = 'facilis';

    $response = $sdk->sdk->listConfiguredTableAssociations($request);

    if ($response->listConfiguredTableAssociationsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listConfiguredTables

Lists configured tables.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListConfiguredTablesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListConfiguredTablesRequest();
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'expedita';
    $request->xAmzSignedHeaders = 'nihil';
    $request->maxResults = 998848;
    $request->nextToken = 'quibusdam';

    $response = $sdk->sdk->listConfiguredTables($request);

    if ($response->listConfiguredTablesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMembers

Lists all members within a collaboration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListMembersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMembersRequest();
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'natus';
    $request->collaborationIdentifier = 'magni';
    $request->maxResults = 123820;
    $request->nextToken = 'quo';

    $response = $sdk->sdk->listMembers($request);

    if ($response->listMembersOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMemberships

Lists all memberships resources within the caller's account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListMembershipsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListMembershipsStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMembershipsRequest();
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'maxime';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'ea';
    $request->maxResults = 33222;
    $request->nextToken = 'ab';
    $request->status = ListMembershipsStatusEnum::COLLABORATION_DELETED;

    $response = $sdk->sdk->listMemberships($request);

    if ($response->listMembershipsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listProtectedQueries

Lists protected queries, sorted by the most recent query.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListProtectedQueriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListProtectedQueriesStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListProtectedQueriesRequest();
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'autem';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->maxResults = 365496;
    $request->membershipIdentifier = 'voluptatibus';
    $request->nextToken = 'perferendis';
    $request->status = ListProtectedQueriesStatusEnum::SUCCESS;

    $response = $sdk->sdk->listProtectedQueries($request);

    if ($response->listProtectedQueriesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSchemas

Lists the schemas for relations within a collaboration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSchemasRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSchemasSchemaTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSchemasRequest();
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'nobis';
    $request->collaborationIdentifier = 'dolores';
    $request->maxResults = 339404;
    $request->nextToken = 'totam';
    $request->schemaType = ListSchemasSchemaTypeEnum::TABLE;

    $response = $sdk->sdk->listSchemas($request);

    if ($response->listSchemasOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists all of the tags that have been added to a resource.

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
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'nesciunt';
    $request->xAmzSecurityToken = 'eos';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'dolores';
    $request->resourceArn = 'minus';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startProtectedQuery

Creates a protected query that is started by AWS Clean Rooms.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartProtectedQueryRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartProtectedQueryRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\StartProtectedQueryRequestBodyResultConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ProtectedQueryOutputConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ProtectedQueryS3OutputConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ResultFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\StartProtectedQueryRequestBodySqlParameters;
use \OpenAPI\OpenAPI\Models\Operations\StartProtectedQueryRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartProtectedQueryRequest();
    $request->requestBody = new StartProtectedQueryRequestBody();
    $request->requestBody->resultConfiguration = new StartProtectedQueryRequestBodyResultConfiguration();
    $request->requestBody->resultConfiguration->outputConfiguration = new ProtectedQueryOutputConfiguration();
    $request->requestBody->resultConfiguration->outputConfiguration->s3 = new ProtectedQueryS3OutputConfiguration();
    $request->requestBody->resultConfiguration->outputConfiguration->s3->bucket = 'quam';
    $request->requestBody->resultConfiguration->outputConfiguration->s3->keyPrefix = 'dolor';
    $request->requestBody->resultConfiguration->outputConfiguration->s3->resultFormat = ResultFormatEnum::PARQUET;
    $request->requestBody->sqlParameters = new StartProtectedQueryRequestBodySqlParameters();
    $request->requestBody->sqlParameters->queryString = 'nostrum';
    $request->requestBody->type = StartProtectedQueryRequestBodyTypeEnum::SQL;
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'perspiciatis';
    $request->xAmzSignature = 'voluptatem';
    $request->xAmzSignedHeaders = 'porro';
    $request->membershipIdentifier = 'consequuntur';

    $response = $sdk->sdk->startProtectedQuery($request);

    if ($response->startProtectedQueryOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Tags a resource.

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
        'error' => 'eaque',
        'occaecati' => 'rerum',
        'adipisci' => 'asperiores',
    ];
    $request->xAmzAlgorithm = 'earum';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'provident';
    $request->resourceArn = 'nobis';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes a tag or list of tags from a resource.

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
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->resourceArn = 'dolor';
    $request->tagKeys = [
        'ipsum',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCollaboration

Updates collaboration metadata and can only be called by the collaboration owner.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCollaborationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCollaborationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCollaborationRequest();
    $request->requestBody = new UpdateCollaborationRequestBody();
    $request->requestBody->description = 'hic';
    $request->requestBody->name = 'Felipe Klein';
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'iure';
    $request->collaborationIdentifier = 'odio';

    $response = $sdk->sdk->updateCollaboration($request);

    if ($response->updateCollaborationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateConfiguredTable

Updates a configured table.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConfiguredTableRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConfiguredTableRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateConfiguredTableRequest();
    $request->requestBody = new UpdateConfiguredTableRequestBody();
    $request->requestBody->description = 'quaerat';
    $request->requestBody->name = 'Rickey Wolf';
    $request->xAmzAlgorithm = 'eos';
    $request->xAmzContentSha256 = 'atque';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'soluta';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->configuredTableIdentifier = 'iusto';

    $response = $sdk->sdk->updateConfiguredTable($request);

    if ($response->updateConfiguredTableOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateConfiguredTableAnalysisRule

Updates a configured table analysis rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConfiguredTableAnalysisRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConfiguredTableAnalysisRuleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConfiguredTableAnalysisRuleRequestBodyAnalysisRulePolicy;
use \OpenAPI\OpenAPI\Models\Shared\ConfiguredTableAnalysisRulePolicyV1;
use \OpenAPI\OpenAPI\Models\Shared\AnalysisRuleAggregation;
use \OpenAPI\OpenAPI\Models\Shared\AggregateColumn;
use \OpenAPI\OpenAPI\Models\Shared\AggregateFunctionNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\JoinRequiredOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AggregationConstraint;
use \OpenAPI\OpenAPI\Models\Shared\AggregationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScalarFunctionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AnalysisRuleList;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConfiguredTableAnalysisRuleAnalysisRuleTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateConfiguredTableAnalysisRuleRequest();
    $request->requestBody = new UpdateConfiguredTableAnalysisRuleRequestBody();
    $request->requestBody->analysisRulePolicy = new UpdateConfiguredTableAnalysisRuleRequestBodyAnalysisRulePolicy();
    $request->requestBody->analysisRulePolicy->v1 = new ConfiguredTableAnalysisRulePolicyV1();
    $request->requestBody->analysisRulePolicy->v1->aggregation = new AnalysisRuleAggregation();
    $request->requestBody->analysisRulePolicy->v1->aggregation->aggregateColumns = [
        new AggregateColumn(),
        new AggregateColumn(),
    ];
    $request->requestBody->analysisRulePolicy->v1->aggregation->dimensionColumns = [
        'deleniti',
        'omnis',
        'necessitatibus',
    ];
    $request->requestBody->analysisRulePolicy->v1->aggregation->joinColumns = [
        'asperiores',
        'nihil',
        'ipsum',
    ];
    $request->requestBody->analysisRulePolicy->v1->aggregation->joinRequired = JoinRequiredOptionEnum::QUERY_RUNNER;
    $request->requestBody->analysisRulePolicy->v1->aggregation->outputConstraints = [
        new AggregationConstraint(),
        new AggregationConstraint(),
    ];
    $request->requestBody->analysisRulePolicy->v1->aggregation->scalarFunctions = [
        ScalarFunctionsEnum::UPPER,
        ScalarFunctionsEnum::FLOOR,
        ScalarFunctionsEnum::ABS,
    ];
    $request->requestBody->analysisRulePolicy->v1->list = new AnalysisRuleList();
    $request->requestBody->analysisRulePolicy->v1->list->joinColumns = [
        'amet',
    ];
    $request->requestBody->analysisRulePolicy->v1->list->listColumns = [
        'accusamus',
        'ad',
        'saepe',
        'suscipit',
    ];
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'repellendus';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'similique';
    $request->xAmzSignedHeaders = 'alias';
    $request->analysisRuleType = UpdateConfiguredTableAnalysisRuleAnalysisRuleTypeEnum::LIST;
    $request->configuredTableIdentifier = 'quaerat';

    $response = $sdk->sdk->updateConfiguredTableAnalysisRule($request);

    if ($response->updateConfiguredTableAnalysisRuleOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateConfiguredTableAssociation

Updates a configured table association.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConfiguredTableAssociationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConfiguredTableAssociationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateConfiguredTableAssociationRequest();
    $request->requestBody = new UpdateConfiguredTableAssociationRequestBody();
    $request->requestBody->description = 'tempora';
    $request->requestBody->roleArn = 'vel';
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'officiis';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'a';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'harum';
    $request->configuredTableAssociationIdentifier = 'iusto';
    $request->membershipIdentifier = 'ipsum';

    $response = $sdk->sdk->updateConfiguredTableAssociation($request);

    if ($response->updateConfiguredTableAssociationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMembership

Updates a membership.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMembershipRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMembershipRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMembershipRequestBodyQueryLogStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMembershipRequest();
    $request->requestBody = new UpdateMembershipRequestBody();
    $request->requestBody->queryLogStatus = UpdateMembershipRequestBodyQueryLogStatusEnum::DISABLED;
    $request->xAmzAlgorithm = 'tenetur';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'tempore';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->membershipIdentifier = 'sapiente';

    $response = $sdk->sdk->updateMembership($request);

    if ($response->updateMembershipOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateProtectedQuery

Updates the processing of a currently running query.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProtectedQueryRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProtectedQueryRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProtectedQueryRequestBodyTargetStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProtectedQueryRequest();
    $request->requestBody = new UpdateProtectedQueryRequestBody();
    $request->requestBody->targetStatus = UpdateProtectedQueryRequestBodyTargetStatusEnum::CANCELLED;
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'expedita';
    $request->xAmzSecurityToken = 'neque';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'vel';
    $request->membershipIdentifier = 'libero';
    $request->protectedQueryIdentifier = 'voluptas';

    $response = $sdk->sdk->updateProtectedQuery($request);

    if ($response->updateProtectedQueryOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
