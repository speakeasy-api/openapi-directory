# companyCredits

### Available Operations

* [companyCreditsSearchRead](#companycreditssearchread) - Return company credits search result
* [companyCreditsSearchallRead](#companycreditssearchallread) - Return company credits search result

## companyCreditsSearchRead

Return company credits search result

### Response Class (Status 200)

* __{movie_title}__: Used as a key word to search company credits for the movie
* You can use both Amharic or English charset/font to search

For more details on how company credits are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CompanyCreditsSearchReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompanyCreditsSearchReadRequest();
    $request->movieTitle = 'perferendis';

    $response = $sdk->companyCredits->companyCreditsSearchRead($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## companyCreditsSearchallRead

Return company credits search result

### Response Class (Status 200)
__{param}__ argument can be
* company name
* movie title or
* company credit description (such as production, cinematography, etc)

For more details on how company credits are listed [see here][ref].
[ref]: https://etmdb.com/en/company-list/company_name

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CompanyCreditsSearchallReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompanyCreditsSearchallReadRequest();
    $request->param = 'ad';

    $response = $sdk->companyCredits->companyCreditsSearchallRead($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
