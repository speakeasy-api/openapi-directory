# artifactRules

## Overview

Rules can be configured on a per-artifact basis, allowing for different approaches
to content evolution for each artifact.  These rules override any global rules
that have been configured. This section contains the operations used to manage a
single artifact's rules.

### Available Operations

* [createArtifactRule](#createartifactrule) - Create artifact rule
* [deleteArtifactRule](#deleteartifactrule) - Delete artifact rule
* [deleteArtifactRules](#deleteartifactrules) - Delete artifact rules
* [getArtifactRuleConfig](#getartifactruleconfig) - Get artifact rule configuration
* [listArtifactRules](#listartifactrules) - List artifact rules
* [testUpdateArtifact](#testupdateartifact) - Test update artifact
* [updateArtifactRuleConfig](#updateartifactruleconfig) - Update artifact rule configuration

## createArtifactRule

Adds a rule to the list of rules that get applied to the artifact when adding new
versions.  All configured rules must pass to successfully add a new artifact version.

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* Rule (named in the request body) is unknown (HTTP error `400`)
* A server error occurred (HTTP error `500`)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateArtifactRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\Rule;
use \OpenAPI\OpenAPI\Models\Shared\RuleTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateArtifactRuleRequest();
    $request->rule = new Rule();
    $request->rule->config = 'molestiae';
    $request->rule->type = RuleTypeEnum::VALIDITY;
    $request->artifactId = '"example-artifact"';
    $request->groupId = '"my-group"';

    $response = $sdk->artifactRules->createArtifactRule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteArtifactRule

Deletes a rule from the artifact.  This results in the rule no longer applying for
this artifact.  If this is the only rule configured for the artifact, this is the 
same as deleting **all** rules, and the globally configured rules now apply to
this artifact.

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* No rule with this name/type is configured for this artifact (HTTP error `404`)
* Invalid rule type (HTTP error `400`)
* A server error occurred (HTTP error `500`)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteArtifactRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteArtifactRuleRuleEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteArtifactRuleRequest();
    $request->artifactId = '"example-artifact"';
    $request->groupId = '"my-group"';
    $request->rule = DeleteArtifactRuleRuleEnum::COMPATIBILITY;

    $response = $sdk->artifactRules->deleteArtifactRule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteArtifactRules

Deletes all of the rules configured for the artifact.  After this is done, the global
rules apply to the artifact again.

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteArtifactRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteArtifactRulesRequest();
    $request->artifactId = '"example-artifact"';
    $request->groupId = '"my-group"';

    $response = $sdk->artifactRules->deleteArtifactRules($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getArtifactRuleConfig

Returns information about a single rule configured for an artifact.  This is useful
when you want to know what the current configuration settings are for a specific rule.

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* No rule with this name/type is configured for this artifact (HTTP error `404`)
* Invalid rule type (HTTP error `400`)
* A server error occurred (HTTP error `500`)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetArtifactRuleConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetArtifactRuleConfigRuleEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetArtifactRuleConfigRequest();
    $request->artifactId = '"example-artifact"';
    $request->groupId = '"my-group"';
    $request->rule = GetArtifactRuleConfigRuleEnum::COMPATIBILITY;

    $response = $sdk->artifactRules->getArtifactRuleConfig($request);

    if ($response->rule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listArtifactRules

Returns a list of all rules configured for the artifact.  The set of rules determines
how the content of an artifact can evolve over time.  If no rules are configured for
an artifact, the set of globally configured rules are used.  If no global rules 
are defined, there are no restrictions on content evolution.

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListArtifactRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListArtifactRulesRequest();
    $request->artifactId = '"example-artifact"';
    $request->groupId = '"my-group"';

    $response = $sdk->artifactRules->listArtifactRules($request);

    if ($response->ruleTypes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testUpdateArtifact

Tests whether an update to the artifact's content *would* succeed for the provided content.
Ultimately, this applies any rules configured for the artifact against the given content
to determine whether the rules would pass or fail, but without actually updating the artifact
content.

The body of the request should be the raw content of the artifact.  This is typically in 
JSON format for *most* of the supported types, but may be in another format for a few 
(for example, `PROTOBUF`).

The update could fail for a number of reasons including:

* Provided content (request body) was empty (HTTP error `400`)
* No artifact with the `artifactId` exists (HTTP error `404`)
* The new content violates one of the rules configured for the artifact (HTTP error `409`)
* The provided artifact type is not recognized (HTTP error `404`)
* A server error occurred (HTTP error `500`)

When successful, this operation simply returns a *No Content* response.  This response
indicates that the content is valid against the configured content rules for the 
artifact (or the global rules if no artifact rules are enabled).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestUpdateArtifactRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestUpdateArtifactRequest();
    $request->requestBody = 'voluptatum';
    $request->artifactId = '"example-artifact"';
    $request->groupId = '"my-group"';

    $response = $sdk->artifactRules->testUpdateArtifact($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateArtifactRuleConfig

Updates the configuration of a single rule for the artifact.  The configuration data
is specific to each rule type, so the configuration of the `COMPATIBILITY` rule 
is in a different format from the configuration of the `VALIDITY` rule.

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* No rule with this name/type is configured for this artifact (HTTP error `404`)
* Invalid rule type (HTTP error `400`)
* A server error occurred (HTTP error `500`)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateArtifactRuleConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\Rule;
use \OpenAPI\OpenAPI\Models\Shared\RuleTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateArtifactRuleConfigRuleEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateArtifactRuleConfigRequest();
    $request->rule1 = new Rule();
    $request->rule1->config = 'iusto';
    $request->rule1->type = RuleTypeEnum::VALIDITY;
    $request->artifactId = '"example-artifact"';
    $request->groupId = '"my-group"';
    $request->rulePathParameter = UpdateArtifactRuleConfigRuleEnum::COMPATIBILITY;

    $response = $sdk->artifactRules->updateArtifactRuleConfig($request);

    if ($response->rule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
