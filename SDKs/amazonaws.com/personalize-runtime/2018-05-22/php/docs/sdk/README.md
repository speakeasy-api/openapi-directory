# SDK

## Overview

<p/>

Amazon Web Services documentation
<https://docs.aws.amazon.com/personalize-runtime/>
### Available Operations

* [getPersonalizedRanking](#getpersonalizedranking) - <p>Re-ranks a list of recommended items for the given user. The first item in the list is deemed the most likely item to be of interest to the user.</p> <note> <p>The solution backing the campaign must have been created using a recipe of type PERSONALIZED_RANKING.</p> </note>
* [getRecommendations](#getrecommendations) - <p>Returns a list of recommended items. For campaigns, the campaign's Amazon Resource Name (ARN) is required and the required user and item input depends on the recipe type used to create the solution backing the campaign as follows:</p> <ul> <li> <p>USER_PERSONALIZATION - <code>userId</code> required, <code>itemId</code> not used</p> </li> <li> <p>RELATED_ITEMS - <code>itemId</code> required, <code>userId</code> not used</p> </li> </ul> <note> <p>Campaigns that are backed by a solution created using a recipe of type PERSONALIZED_RANKING use the API.</p> </note> <p> For recommenders, the recommender's ARN is required and the required item and user input depends on the use case (domain-based recipe) backing the recommender. For information on use case requirements see <a href="https://docs.aws.amazon.com/personalize/latest/dg/domain-use-cases.html">Choosing recommender use cases</a>. </p>

## getPersonalizedRanking

<p>Re-ranks a list of recommended items for the given user. The first item in the list is deemed the most likely item to be of interest to the user.</p> <note> <p>The solution backing the campaign must have been created using a recipe of type PERSONALIZED_RANKING.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPersonalizedRankingRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPersonalizedRankingRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPersonalizedRankingRequest();
    $request->requestBody = new GetPersonalizedRankingRequestBody();
    $request->requestBody->campaignArn = 'quis';
    $request->requestBody->context = [
        'deserunt' => 'perferendis',
    ];
    $request->requestBody->filterArn = 'ipsam';
    $request->requestBody->filterValues = [
        'sapiente' => 'quo',
        'odit' => 'at',
        'at' => 'maiores',
        'molestiae' => 'quod',
    ];
    $request->requestBody->inputList = [
        'esse',
        'totam',
        'porro',
        'dolorum',
    ];
    $request->requestBody->userId = 'dicta';
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'optio';

    $response = $sdk->sdk->getPersonalizedRanking($request);

    if ($response->getPersonalizedRankingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRecommendations

<p>Returns a list of recommended items. For campaigns, the campaign's Amazon Resource Name (ARN) is required and the required user and item input depends on the recipe type used to create the solution backing the campaign as follows:</p> <ul> <li> <p>USER_PERSONALIZATION - <code>userId</code> required, <code>itemId</code> not used</p> </li> <li> <p>RELATED_ITEMS - <code>itemId</code> required, <code>userId</code> not used</p> </li> </ul> <note> <p>Campaigns that are backed by a solution created using a recipe of type PERSONALIZED_RANKING use the API.</p> </note> <p> For recommenders, the recommender's ARN is required and the required item and user input depends on the use case (domain-based recipe) backing the recommender. For information on use case requirements see <a href="https://docs.aws.amazon.com/personalize/latest/dg/domain-use-cases.html">Choosing recommender use cases</a>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRecommendationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRecommendationsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Promotion;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRecommendationsRequest();
    $request->requestBody = new GetRecommendationsRequestBody();
    $request->requestBody->campaignArn = 'totam';
    $request->requestBody->context = [
        'commodi' => 'molestiae',
    ];
    $request->requestBody->filterArn = 'modi';
    $request->requestBody->filterValues = [
        'impedit' => 'cum',
    ];
    $request->requestBody->itemId = 'esse';
    $request->requestBody->numResults = 216550;
    $request->requestBody->promotions = [
        new Promotion(),
        new Promotion(),
        new Promotion(),
    ];
    $request->requestBody->recommenderArn = 'aspernatur';
    $request->requestBody->userId = 'perferendis';
    $request->xAmzAlgorithm = 'ad';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'laboriosam';

    $response = $sdk->sdk->getRecommendations($request);

    if ($response->getRecommendationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
