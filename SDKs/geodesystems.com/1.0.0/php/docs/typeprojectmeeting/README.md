# typeProjectMeeting

## Overview

Search API for 'Meeting' entry type

### Available Operations

* [searchProjectMeeting](#searchprojectmeeting) - Search API for 'Meeting' entry type

## searchProjectMeeting

API to search for entries of type Meeting

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchProjectMeetingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchProjectMeetingRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-03T21:11:03.072Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-30T05:31:52.329Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-24T02:42:20.227Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-24T19:52:17.085Z');
    $request->description = 'recusandae';
    $request->filesuffix = 'cumque';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-26T08:32:32.784Z');
    $request->group = 'iure';
    $request->max = 982927;
    $request->maxlatitude = 6676.46;
    $request->maxlongitude = 1440.58;
    $request->minlatitude = 842.07;
    $request->minlongitude = 8996.52;
    $request->name = 'Keith Hills';
    $request->searchProjectMeetingLocation = 'quidem';
    $request->searchProjectMeetingParticipants = 'non';
    $request->searchProjectMeetingTopic = 'beatae';
    $request->skip = 123495;
    $request->text = 'molestias';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-31T14:45:14.723Z');

    $response = $sdk->typeProjectMeeting->searchProjectMeeting($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
