# SDK

## Overview

<p>Contact Lens for Amazon Connect enables you to analyze conversations between customer and agents, by using speech transcription, natural language processing, and intelligent search capabilities. It performs sentiment analysis, detects issues, and enables you to automatically categorize contacts.</p> <p>Contact Lens for Amazon Connect provides both real-time and post-call analytics of customer-agent conversations. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/analyze-conversations.html">Analyze conversations using Contact Lens</a> in the <i>Amazon Connect Administrator Guide</i>. </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/contact-lens/>
### Available Operations

* [listRealtimeContactAnalysisSegments](#listrealtimecontactanalysissegments) - Provides a list of analysis segments for a real-time analysis session.

## listRealtimeContactAnalysisSegments

Provides a list of analysis segments for a real-time analysis session.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRealtimeContactAnalysisSegmentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListRealtimeContactAnalysisSegmentsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRealtimeContactAnalysisSegmentsRequest();
    $request->maxResults = 'magnam';
    $request->nextToken = 'debitis';
    $request->requestBody = new ListRealtimeContactAnalysisSegmentsRequestBody();
    $request->requestBody->contactId = 'ipsa';
    $request->requestBody->instanceId = 'delectus';
    $request->requestBody->maxResults = 272656;
    $request->requestBody->nextToken = 'suscipit';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'placeat';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'nisi';

    $response = $sdk->sdk->listRealtimeContactAnalysisSegments($request);

    if ($response->listRealtimeContactAnalysisSegmentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
