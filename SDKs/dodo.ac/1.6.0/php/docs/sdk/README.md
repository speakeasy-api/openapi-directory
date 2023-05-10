# SDK

## Overview

The Nookipedia API provides endpoints for retrieving *Animal Crossing* data pulled from the [Nookipedia wiki](https://nookipedia.com/wiki/Main_Page). A couple of the key benefits of using the Nookipedia API is access to data spanning the entire *Animal Crossing* series, as well as information that is constantly updated and expanding as editors work on the wiki.<br><br>Access to the Nookipedia API requires obtaining a key. This is so we can manage our scale and provide better support for our users. To request access to the API, please fill out [this form](https://forms.gle/wLwtXLerKhfDrRLY8).

### Available Operations

* [getNhArt](#getnhart) - All New Horizons artwork
* [getNhArtArtwork](#getnhartartwork) - Single New Horizons artwork
* [getNhBugs](#getnhbugs) - All New Horizons bugs
* [getNhBugsBug](#getnhbugsbug) - Single New Horizons bug
* [getNhClothing](#getnhclothing) - All New Horizons clothing
* [getNhClothingClothing](#getnhclothingclothing) - Single New Horizons clothing
* [getNhEvents](#getnhevents) - All New Horizons events
* [getNhFish](#getnhfish) - All New Horizons fish
* [getNhFishFish](#getnhfishfish) - Single New Horizons fish
* [getNhFossilsAll](#getnhfossilsall) - All New Horizons fossil groups or individual fossil
* [getNhFossilsAllFossil](#getnhfossilsallfossil) - Single New Horizons fossil group with individual fossils
* [getNhFossilsGroups](#getnhfossilsgroups) - All New Horizons fossil groups
* [getNhFossilsGroupsFossilGroup](#getnhfossilsgroupsfossilgroup) - Single New Horizons fossil group
* [getNhFossilsIndividuals](#getnhfossilsindividuals) - All New Horizons fossils
* [getNhFossilsIndividualsFossil](#getnhfossilsindividualsfossil) - Single New Horizons fossil
* [getNhFurniture](#getnhfurniture) - All New Horizons furniture
* [getNhFurnitureFurniture](#getnhfurniturefurniture) - Single New Horizons furniture
* [getNhInterior](#getnhinterior) - All New Horizons interior items
* [getNhInteriorItem](#getnhinterioritem) - Single New Horizons interior item
* [getNhItems](#getnhitems) - Miscellaneous New Horizons items
* [getNhItemsItem](#getnhitemsitem) - Single New Horizons miscellaneous item
* [getNhPhotos](#getnhphotos) - All New Horizons photos and posters
* [getNhPhotosItem](#getnhphotositem) - Single New Horizons photo or poster
* [getNhRecipes](#getnhrecipes) - All New Horizons recipes
* [getNhRecipesItem](#getnhrecipesitem) - Single New Horizons recipe
* [getNhSea](#getnhsea) - All New Horizons sea creatures
* [getNhSeaSeaCreature](#getnhseaseacreature) - Single New Horizons sea creature
* [getNhTools](#getnhtools) - All New Horizons tools
* [getNhToolsTool](#getnhtoolstool) - Single New Horizons tool
* [getVillagers](#getvillagers) - Villagers

## getNhArt

Get a list of all artwork and their details in *Animal Crossing: New Horizons*.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNhArtRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNhArtRequest();
    $request->acceptVersion = 'sapiente';
    $request->xApiKey = 'c2ddf7cc-78ca-41ba-928f-c816742cb739';
    $request->excludedetails = 'aspernatur';
    $request->hasfake = 'perferendis';
    $request->thumbsize = 324141;

    $response = $sdk->sdk->getNhArt($request);

    if ($response->nhArtworks !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNhArtArtwork

Retrieve information about a specific artwork in *Animal Crossing: New Horizons*.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNhArtArtworkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNhArtArtworkRequest();
    $request->acceptVersion = 'natus';
    $request->xApiKey = '29396fea-7596-4eb1-8faa-a2352c595590';
    $request->artwork = 'iure';
    $request->thumbsize = 634274;

    $response = $sdk->sdk->getNhArtArtwork($request);

    if ($response->nhArtwork !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNhBugs

Get a list of all bugs and their details in *Animal Crossing: New Horizons*.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNhBugsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNhBugsRequest();
    $request->acceptVersion = 'doloribus';
    $request->xApiKey = 'f1a3a2fa-9467-4739-a51a-a52c3f5ad019';
    $request->excludedetails = 'temporibus';
    $request->month = 'laborum';
    $request->thumbsize = 96098;

    $response = $sdk->sdk->getNhBugs($request);

    if ($response->nhBugs !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNhBugsBug

Retrieve information about a specific bug in *Animal Crossing: New Horizons*.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNhBugsBugRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNhBugsBugRequest();
    $request->acceptVersion = 'reiciendis';
    $request->xApiKey = 'fe78f097-b007-44f1-9471-b5e6e13b99d4';
    $request->bug = 'praesentium';
    $request->thumbsize = 523248;

    $response = $sdk->sdk->getNhBugsBug($request);

    if ($response->nhBug !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNhClothing

Get a list of all clothing items and their details in *Animal Crossing: New Horizons*.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNhClothingRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNhClothingCategoryEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNhClothingColorEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNhClothingLabelthemeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNhClothingStyleEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNhClothingRequest();
    $request->acceptVersion = 'voluptates';
    $request->xApiKey = '1e91e450-ad2a-4bd4-8269-802d502a94bb';
    $request->category = GetNhClothingCategoryEnum::DRESS_UP;
    $request->color = [
        GetNhClothingColorEnum::GRAY,
        GetNhClothingColorEnum::BLUE,
        GetNhClothingColorEnum::PURPLE,
        GetNhClothingColorEnum::ORANGE,
    ];
    $request->excludedetails = 'aliquid';
    $request->labeltheme = GetNhClothingLabelthemeEnum::PARTY;
    $request->style = [
        GetNhClothingStyleEnum::ELEGANT,
        GetNhClothingStyleEnum::ELEGANT,
        GetNhClothingStyleEnum::COOL,
        GetNhClothingStyleEnum::SIMPLE,
    ];

    $response = $sdk->sdk->getNhClothing($request);

    if ($response->nhClothings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNhClothingClothing

Retrieve information about a specific clothing item in *Animal Crossing: New Horizons*.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNhClothingClothingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNhClothingClothingRequest();
    $request->acceptVersion = 'a';
    $request->xApiKey = 'a77dfb14-cd66-4ae3-95ef-b9ba88f3a669';
    $request->clothing = 'omnis';
    $request->thumbsize = 474867;

    $response = $sdk->sdk->getNhClothingClothing($request);

    if ($response->nhClothing !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNhEvents

Get a list of events and dates in *Animal Crossing: New Horizons*, filterable to specific years, months, or days. Data is available for the current and next year.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNhEventsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNhEventsRequest();
    $request->acceptVersion = 'perferendis';
    $request->xApiKey = '74ba4469-b6e2-4141-9598-90afa563e251';
    $request->date = 'iure';
    $request->day = 984043;
    $request->month = 'debitis';
    $request->year = 'eius';

    $response = $sdk->sdk->getNhEvents($request);

    if ($response->nhEvents !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNhFish

Get a list of all fish and their details in *New Horizons*.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNhFishRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNhFishRequest();
    $request->acceptVersion = 'maxime';
    $request->xApiKey = '8b711e5b-7fd2-4ed0-a892-1cddc692601f';
    $request->excludedetails = 'quidem';
    $request->month = 'ipsam';
    $request->thumbsize = 453543;

    $response = $sdk->sdk->getNhFish($request);

    if ($response->nhFish !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNhFishFish

Retrieve information about a specific fish in *Animal Crossing: New Horizons*.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNhFishFishRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNhFishFishRequest();
    $request->acceptVersion = 'autem';
    $request->xApiKey = 'b0d5f0d3-0c5f-4bb2-9870-53202c73d5fe';
    $request->fish = 'omnis';
    $request->thumbsize = 704415;

    $response = $sdk->sdk->getNhFishFish($request);

    if ($response->nhFish !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNhFossilsAll

Get a list of all the fossil groups with their respective individual fossils in *Animal Crossing: New Horizons*.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNhFossilsAllRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNhFossilsAllRequest();
    $request->acceptVersion = 'perspiciatis';
    $request->xApiKey = '0c28909b-3fe4-49a8-99cb-f48633323f9b';
    $request->thumbsize = 452109;

    $response = $sdk->sdk->getNhFossilsAll($request);

    if ($response->nhFossilGroupWithIndividualFossilsNoMatcheds !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNhFossilsAllFossil

Retrieve information about a specific fossil group with their respective individual fossils in *Animal Crossing: New Horizons*.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNhFossilsAllFossilRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNhFossilsAllFossilRequest();
    $request->acceptVersion = 'dignissimos';
    $request->xApiKey = 'f3a41006-74eb-4f69-a80d-1ba77a89ebf7';
    $request->fossil = 'ipsum';
    $request->thumbsize = 456015;

    $response = $sdk->sdk->getNhFossilsAllFossil($request);

    if ($response->nhFossilGroupWithIndividualFossils !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNhFossilsGroups

Get a list of all the fossil groups in *Animal Crossing: New Horizons*.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNhFossilsGroupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNhFossilsGroupsRequest();
    $request->acceptVersion = 'id';
    $request->xApiKey = 'e4203ce5-e6a9-45d8-a0d4-46ce2af7a73c';
    $request->thumbsize = 947371;

    $response = $sdk->sdk->getNhFossilsGroups($request);

    if ($response->nhFossilGroups !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNhFossilsGroupsFossilGroup

Retrieve information about a specific fossil group in *Animal Crossing: New Horizons*.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNhFossilsGroupsFossilGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNhFossilsGroupsFossilGroupRequest();
    $request->acceptVersion = 'amet';
    $request->xApiKey = 'be453f87-0b32-46b5-a734-29cdb1a8422b';
    $request->fossilGroup = 'facilis';
    $request->thumbsize = 396060;

    $response = $sdk->sdk->getNhFossilsGroupsFossilGroup($request);

    if ($response->nhFossilGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNhFossilsIndividuals

Get a list of all the individual fossils in *Animal Crossing: New Horizons*.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNhFossilsIndividualsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNhFossilsIndividualsRequest();
    $request->acceptVersion = 'quam';
    $request->xApiKey = '9d232271-5bf0-4cbb-9e31-b8b90f3443a1';
    $request->thumbsize = 63038;

    $response = $sdk->sdk->getNhFossilsIndividuals($request);

    if ($response->nhIndividualFossils !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNhFossilsIndividualsFossil

Retrieve information about a specific individual fossil in *Animal Crossing: New Horizons*.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNhFossilsIndividualsFossilRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNhFossilsIndividualsFossilRequest();
    $request->acceptVersion = 'aut';
    $request->xApiKey = '8e0adcf4-b921-4879-bce9-53f73ef7fbc7';
    $request->fossil = 'similique';
    $request->thumbsize = 708548;

    $response = $sdk->sdk->getNhFossilsIndividualsFossil($request);

    if ($response->nhIndividualFossil !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNhFurniture

Get a list of all furniture and their details in *Animal Crossing: New Horizons*.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNhFurnitureRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNhFurnitureCategoryEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNhFurnitureColorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNhFurnitureRequest();
    $request->acceptVersion = 'vero';
    $request->xApiKey = '74dd39c0-f5d2-4cff-bc70-a45626d43681';
    $request->category = GetNhFurnitureCategoryEnum::HOUSEWARES;
    $request->color = [
        GetNhFurnitureColorEnum::BEIGE,
        GetNhFurnitureColorEnum::COLORFUL,
        GetNhFurnitureColorEnum::WHITE,
        GetNhFurnitureColorEnum::GREEN,
    ];
    $request->excludedetails = 'voluptatibus';

    $response = $sdk->sdk->getNhFurniture($request);

    if ($response->nhFurnitures !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNhFurnitureFurniture

Retrieve information about a specific furniture in *Animal Crossing: New Horizons*.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNhFurnitureFurnitureRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNhFurnitureFurnitureRequest();
    $request->acceptVersion = 'nostrum';
    $request->xApiKey = 'fce6c556-146c-43e2-90fb-008c42e141aa';
    $request->furniture = 'placeat';
    $request->thumbsize = 245367;

    $response = $sdk->sdk->getNhFurnitureFurniture($request);

    if ($response->nhFurniture !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNhInterior

Get a list of all interior items (flooring, wallpaper, and rugs) and their details in *Animal Crossing: New Horizons*.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNhInteriorRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNhInteriorColorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNhInteriorRequest();
    $request->acceptVersion = 'eum';
    $request->xApiKey = '6c8dd6b1-4429-4074-b477-8a7bd466d28c';
    $request->color = [
        GetNhInteriorColorEnum::AQUA,
    ];
    $request->excludedetails = 'id';

    $response = $sdk->sdk->getNhInterior($request);

    if ($response->nhInteriors !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNhInteriorItem

Retrieve information about a specific interior item in *Animal Crossing: New Horizons*.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNhInteriorItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNhInteriorItemColorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNhInteriorItemRequest();
    $request->acceptVersion = 'quidem';
    $request->xApiKey = '3cdca425-1904-4e52-bc7e-0bc7178e4796';
    $request->color = [
        GetNhInteriorItemColorEnum::BLACK,
        GetNhInteriorItemColorEnum::PINK,
        GetNhInteriorItemColorEnum::GRAY,
        GetNhInteriorItemColorEnum::AQUA,
    ];
    $request->item = 'porro';
    $request->thumbsize = 430402;

    $response = $sdk->sdk->getNhInteriorItem($request);

    if ($response->nhInterior !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNhItems

Get a list of all miscellaneous items (such as materials, star fragments, fruits, fences, and plants) and their details in *Animal Crossing: New Horizons*.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNhItemsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNhItemsRequest();
    $request->acceptVersion = 'quas';
    $request->xApiKey = '8282aa48-2562-4f22-ae98-17ee17cbe61e';
    $request->excludedetails = 'vel';

    $response = $sdk->sdk->getNhItems($request);

    if ($response->nhItems !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNhItemsItem

Retrieve information about a miscellaneous item (such as materials, star fragments, fruits, fences, and plants) in *Animal Crossing: New Horizons*.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNhItemsItemRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNhItemsItemRequest();
    $request->acceptVersion = 'harum';
    $request->xApiKey = '7b95bc0a-b3c2-40c4-b378-9fd871f99dd2';
    $request->item = 'eveniet';
    $request->thumbsize = 992430;

    $response = $sdk->sdk->getNhItemsItem($request);

    if ($response->nhItem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNhPhotos

Get a list of all character photos+posters and their details in *Animal Crossing: New Horizons*.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNhPhotosRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNhPhotosRequest();
    $request->acceptVersion = 'facere';
    $request->xApiKey = '121aa6f1-e674-4bdb-84f1-5756082d68ea';
    $request->excludedetails = 'architecto';

    $response = $sdk->sdk->getNhPhotos($request);

    if ($response->nhPhotos !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNhPhotosItem

Retrieve information about a character photo or poster in *Animal Crossing: New Horizons*.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNhPhotosItemRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNhPhotosItemRequest();
    $request->acceptVersion = 'omnis';
    $request->xApiKey = 'f1d17051-339d-4080-86a1-840394c26071';
    $request->item = 'maiores';
    $request->thumbsize = 618480;

    $response = $sdk->sdk->getNhPhotosItem($request);

    if ($response->nhPhoto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNhRecipes

Get a list of all recipes and their details in *Animal Crossing: New Horizons*.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNhRecipesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNhRecipesRequest();
    $request->acceptVersion = 'velit';
    $request->xApiKey = 'f5f0642d-ac7a-4f51-9cc4-13aa63aae8d6';
    $request->excludedetails = 'ducimus';
    $request->material = 'quos';
    $request->thumbsize = 427834;

    $response = $sdk->sdk->getNhRecipes($request);

    if ($response->nhRecipes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNhRecipesItem

Retrieve information about a specific recipe in *Animal Crossing: New Horizons*.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNhRecipesItemRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNhRecipesItemRequest();
    $request->acceptVersion = 'labore';
    $request->xApiKey = 'dbb675fd-5e60-4b37-9ed4-f6fbee41f333';
    $request->item = 'beatae';
    $request->thumbsize = 489509;

    $response = $sdk->sdk->getNhRecipesItem($request);

    if ($response->nhRecipe !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNhSea

Get a list of all sea creatures and their details in *Animal Crossing: New Horizons*.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNhSeaRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNhSeaRequest();
    $request->acceptVersion = 'a';
    $request->xApiKey = 'e35b60eb-1ea4-4265-95ba-3c28744ed53b';
    $request->excludedetails = 'blanditiis';
    $request->month = 'quas';
    $request->thumbsize = 942584;

    $response = $sdk->sdk->getNhSea($request);

    if ($response->nhSeaCreatures !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNhSeaSeaCreature

Retrieve information about a specific sea creature in *Animal Crossing: New Horizons*.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNhSeaSeaCreatureRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNhSeaSeaCreatureRequest();
    $request->acceptVersion = 'nesciunt';
    $request->xApiKey = 'a8d8f5c0-b2f2-4fb7-b194-a276b26916fe';
    $request->seaCreature = 'illo';
    $request->thumbsize = 967795;

    $response = $sdk->sdk->getNhSeaSeaCreature($request);

    if ($response->nhSeaCreature !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNhTools

Get a list of all tools and their details in *Animal Crossing: New Horizons*.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNhToolsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNhToolsRequest();
    $request->acceptVersion = 'perferendis';
    $request->xApiKey = '8f4294e3-698f-4447-b603-e8b445e80ca5';
    $request->excludedetails = 'minima';

    $response = $sdk->sdk->getNhTools($request);

    if ($response->nhTools !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNhToolsTool

Retrieve information about a specific tool in *Animal Crossing: New Horizons*.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNhToolsToolRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNhToolsToolRequest();
    $request->acceptVersion = 'recusandae';
    $request->xApiKey = 'fd20e457-e185-48b6-a89f-be3a5aa8e482';
    $request->thumbsize = 282699;
    $request->tool = 'fugiat';

    $response = $sdk->sdk->getNhToolsTool($request);

    if ($response->nhTool !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVillagers

This endpoint retrieves villager information from the entire *Animal Crossing* series, with the option to filter by species, personality, game, and/or birthday. Filters use the AND operator (e.g. asking for villagers who have species `frog` and personality `smug` will return all smug frogs). Note that villagers only include the animals that act as residents. Special characters, such as Tom Nook and Isabelle, are not accessed through this endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVillagersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetVillagersGameEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetVillagersPersonalityEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetVillagersSpeciesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVillagersRequest();
    $request->acceptVersion = 'voluptatem';
    $request->xApiKey = 'ab407508-8e51-4862-865e-904f3b1194b8';
    $request->birthday = 'laborum';
    $request->birthmonth = 'nam';
    $request->excludedetails = 'tenetur';
    $request->game = [
        GetVillagersGameEnum::DNM,
        GetVillagersGameEnum::E_PLUS,
    ];
    $request->name = 'Karl Miller';
    $request->nhdetails = 'repellendus';
    $request->personality = GetVillagersPersonalityEnum::SNOOTY;
    $request->species = GetVillagersSpeciesEnum::SHEEP;
    $request->thumbsize = 16871;

    $response = $sdk->sdk->getVillagers($request);

    if ($response->villagers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
