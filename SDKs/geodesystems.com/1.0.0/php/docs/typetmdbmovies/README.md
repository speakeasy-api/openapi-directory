# typeTmdbmovies

## Overview

Search API for 'Tmdb Movies' entry type

### Available Operations

* [searchTmdbmovies](#searchtmdbmovies) - Search API for 'Tmdb Movies' entry type

## searchTmdbmovies

API to search for entries of type Tmdb Movies

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTmdbmoviesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTmdbmoviesRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-01T18:12:18.719Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-10T21:22:46.079Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-20T22:24:50.011Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-11T21:39:12.842Z');
    $request->description = 'quos';
    $request->filesuffix = 'numquam';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-08T03:54:51.622Z');
    $request->group = 'nam';
    $request->max = 102184;
    $request->maxlatitude = 6981.17;
    $request->maxlongitude = 8269.75;
    $request->minlatitude = 1763.33;
    $request->minlongitude = 2115.18;
    $request->name = 'Mrs. Levi Reichert';
    $request->searchDbTmdbmoviesBudget = 7092.34;
    $request->searchDbTmdbmoviesGenres = 'autem';
    $request->searchDbTmdbmoviesHomepage = 'tempore';
    $request->searchDbTmdbmoviesKeywords = 'recusandae';
    $request->searchDbTmdbmoviesMovieId = 'nostrum';
    $request->searchDbTmdbmoviesOriginalLanguage = 'officia';
    $request->searchDbTmdbmoviesOriginalTitle = 'voluptas';
    $request->searchDbTmdbmoviesOverview = 'laudantium';
    $request->searchDbTmdbmoviesPopularity = 3591.06;
    $request->searchDbTmdbmoviesProductionCompanies = 'excepturi';
    $request->searchDbTmdbmoviesProductionCountries = 'natus';
    $request->searchDbTmdbmoviesReleaseDate = 'deleniti';
    $request->searchDbTmdbmoviesRevenue = 9004.11;
    $request->searchDbTmdbmoviesRuntime = 1367.7;
    $request->searchDbTmdbmoviesSpokenLanguages = 'dolores';
    $request->searchDbTmdbmoviesStatus = 'laborum';
    $request->searchDbTmdbmoviesTagline = 'vero';
    $request->searchDbTmdbmoviesTitle = 'eos';
    $request->searchDbTmdbmoviesVoteAverage = 276.53;
    $request->searchDbTmdbmoviesVoteCount = 8381.76;
    $request->skip = 660339;
    $request->text = 'quae';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-17T15:26:53.853Z');

    $response = $sdk->typeTmdbmovies->searchTmdbmovies($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
