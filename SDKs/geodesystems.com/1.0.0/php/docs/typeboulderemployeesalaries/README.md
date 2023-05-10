# typeBoulderEmployeeSalaries

## Overview

Search API for 'Boulder Employee Salaries' entry type

### Available Operations

* [searchBoulderEmployeeSalaries](#searchboulderemployeesalaries) - Search API for 'Boulder Employee Salaries' entry type

## searchBoulderEmployeeSalaries

API to search for entries of type Boulder Employee Salaries

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchBoulderEmployeeSalariesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchBoulderEmployeeSalariesRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-29T20:03:41.130Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-07T16:22:20.061Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-05T13:00:56.741Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-23T23:35:18.899Z');
    $request->description = 'voluptatibus';
    $request->filesuffix = 'tempora';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-18T18:18:32.854Z');
    $request->group = 'reiciendis';
    $request->max = 401713;
    $request->maxlatitude = 254.97;
    $request->maxlongitude = 2484.13;
    $request->minlatitude = 8880.44;
    $request->minlongitude = 5058.66;
    $request->name = 'Alex Gottlieb';
    $request->searchDbBoulderEmployeeSalariesDepartment = 'rem';
    $request->searchDbBoulderEmployeeSalariesEmployeeAnnualBaseSalary = 265.22;
    $request->searchDbBoulderEmployeeSalariesEmployeeFlsaExemptYN = 'nobis';
    $request->searchDbBoulderEmployeeSalariesEmployeeFteInThisPosition = 6256.37;
    $request->searchDbBoulderEmployeeSalariesEmployeeHourlyPayRate = 3335.07;
    $request->searchDbBoulderEmployeeSalariesPayRangeMax = 3295.43;
    $request->searchDbBoulderEmployeeSalariesPayRangeMin = 9241.59;
    $request->searchDbBoulderEmployeeSalariesPositionDescription = 'reiciendis';
    $request->skip = 862319;
    $request->text = 'magni';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-05T23:00:32.306Z');

    $response = $sdk->typeBoulderEmployeeSalaries->searchBoulderEmployeeSalaries($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
