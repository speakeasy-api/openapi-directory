# products

### Available Operations

* [articleCreateArticle](#articlecreatearticle) - Creates a new product
* [articleDeleteArticle](#articledeletearticle) - Deletes a product
* [articleDeleteImage](#articledeleteimage) - Deletes a single image by id
* [articleDeleteImageFromProduct](#articledeleteimagefromproduct) - Deletes a single image from a product
* [articleGetArticle](#articlegetarticle) - Queries a single article by id or by sku
* [articleGetCategory](#articlegetcategory) - GEts a list of all defined categories
* [articleGetCustomField](#articlegetcustomfield) - Queries a single custom field
* [articleGetCustomFields](#articlegetcustomfields) - Queries a list of all custom fields
* [articleGetImage](#articlegetimage) - Returns a single image by id
* [articleGetImageFromProduct](#articlegetimagefromproduct) - Returns a single image by id
* [articleGetImages](#articlegetimages) - Returns a list of all images of the product
* [articleGetList](#articlegetlist) - Get a list of all products
* [articleGetPatchableFields](#articlegetpatchablefields) - Returns a list of fields which can be updated with the patch call
* [articleGetReservedAmount](#articlegetreservedamount) - Queries the reserved amount for a single article by id or by sku
* [articleGetStocks](#articlegetstocks) - Query all defined stock locations
* [articlePatchArticle](#articlepatcharticle) - Updates one or more fields of a product
* [articlePutImageForm](#articleputimageform) - Add or update an existing image of a product
* [articlePutImageJson](#articleputimagejson) - Add or update an existing image of a product
* [articlePutImageRaw](#articleputimageraw) - Add or update an existing image of a product
* [articleUpdateStockCodeForm](#articleupdatestockcodeform) - Update the stock code of an article
* [articleUpdateStockCodeJson](#articleupdatestockcodejson) - Update the stock code of an article
* [articleUpdateStockCodeRaw](#articleupdatestockcoderaw) - Update the stock code of an article
* [articleUpdateStockForm](#articleupdatestockform) - Update the stock qty of an article
* [articleUpdateStockJson](#articleupdatestockjson) - Update the stock qty of an article
* [articleUpdateStockRaw](#articleupdatestockraw) - Update the stock qty of an article
* [searchSearchForm](#searchsearchform) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* [searchSearchJson](#searchsearchjson) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* [searchSearchRaw](#searchsearchraw) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

## articleCreateArticle

Creates a new product

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelArticleAPIModelInput;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesOrderMultiLanguageString;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelBomSubArticleAPIModel;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelArticleCategoryAPIModel;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelArticleAPICustomFieldValueModel;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelArticleAPICustomFieldDefinitionModel;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelArticleAPICustomFieldDefinitionModelTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelArticleSourceAPIModel;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelStockArticleAPIModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BillbeeInterfacesBillbeeAPIModelArticleAPIModelInput();
    $request->basicAttributes = [
        new BillbeeInterfacesOrderMultiLanguageString(),
        new BillbeeInterfacesOrderMultiLanguageString(),
        new BillbeeInterfacesOrderMultiLanguageString(),
        new BillbeeInterfacesOrderMultiLanguageString(),
    ];
    $request->billOfMaterial = [
        new BillbeeInterfacesBillbeeAPIModelBomSubArticleAPIModel(),
        new BillbeeInterfacesBillbeeAPIModelBomSubArticleAPIModel(),
        new BillbeeInterfacesBillbeeAPIModelBomSubArticleAPIModel(),
    ];
    $request->category1 = new BillbeeInterfacesBillbeeAPIModelArticleCategoryAPIModel();
    $request->category1->id = 364544;
    $request->category1->name = 'Vickie Nitzsche';
    $request->category2 = new BillbeeInterfacesBillbeeAPIModelArticleCategoryAPIModel();
    $request->category2->id = 364912;
    $request->category2->name = 'Frederick Cole';
    $request->category3 = new BillbeeInterfacesBillbeeAPIModelArticleCategoryAPIModel();
    $request->category3->id = 681740;
    $request->category3->name = 'Randall Boyle';
    $request->condition = 117380;
    $request->costPrice = 3955.44;
    $request->countryOfOrigin = 'consequuntur';
    $request->customFields = [
        new BillbeeInterfacesBillbeeAPIModelArticleAPICustomFieldValueModel(),
    ];
    $request->deliveryTime = 46806;
    $request->description = [
        new BillbeeInterfacesOrderMultiLanguageString(),
        new BillbeeInterfacesOrderMultiLanguageString(),
        new BillbeeInterfacesOrderMultiLanguageString(),
    ];
    $request->ean = 'reiciendis';
    $request->exportDescription = 'soluta';
    $request->exportDescriptionMultiLanguage = [
        new BillbeeInterfacesOrderMultiLanguageString(),
    ];
    $request->heightCm = 6089.89;
    $request->id = 178580;
    $request->images = [
        new BillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel(),
        new BillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel(),
        new BillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel(),
    ];
    $request->invoiceText = [
        new BillbeeInterfacesOrderMultiLanguageString(),
        new BillbeeInterfacesOrderMultiLanguageString(),
        new BillbeeInterfacesOrderMultiLanguageString(),
    ];
    $request->isCustomizable = false;
    $request->isDeactivated = false;
    $request->isDigital = false;
    $request->lengthCm = 1700.99;
    $request->manufacturer = 'inventore';
    $request->materials = [
        new BillbeeInterfacesOrderMultiLanguageString(),
        new BillbeeInterfacesOrderMultiLanguageString(),
        new BillbeeInterfacesOrderMultiLanguageString(),
    ];
    $request->occasion = 881897;
    $request->price = 9768.02;
    $request->recipient = 719620;
    $request->sku = 'omnis';
    $request->shippingProductId = 966390;
    $request->shortDescription = [
        new BillbeeInterfacesOrderMultiLanguageString(),
        new BillbeeInterfacesOrderMultiLanguageString(),
    ];
    $request->soldAmount = 5076.36;
    $request->soldAmountLast30Days = 8026.92;
    $request->soldSumGross = 3004.03;
    $request->soldSumGrossLast30Days = 8363.64;
    $request->soldSumNet = 5495.01;
    $request->soldSumNetLast30Days = 4152.8;
    $request->sources = [
        new BillbeeInterfacesBillbeeAPIModelArticleSourceAPIModel(),
        new BillbeeInterfacesBillbeeAPIModelArticleSourceAPIModel(),
        new BillbeeInterfacesBillbeeAPIModelArticleSourceAPIModel(),
        new BillbeeInterfacesBillbeeAPIModelArticleSourceAPIModel(),
    ];
    $request->stockCode = 'commodi';
    $request->stockCurrent = 5207.61;
    $request->stockDesired = 9366.18;
    $request->stockReduceItemsPerSale = 2672.07;
    $request->stockWarning = 7221.84;
    $request->stocks = [
        new BillbeeInterfacesBillbeeAPIModelStockArticleAPIModel(),
        new BillbeeInterfacesBillbeeAPIModelStockArticleAPIModel(),
        new BillbeeInterfacesBillbeeAPIModelStockArticleAPIModel(),
        new BillbeeInterfacesBillbeeAPIModelStockArticleAPIModel(),
    ];
    $request->tags = [
        new BillbeeInterfacesOrderMultiLanguageString(),
    ];
    $request->taricNumber = 'ipsam';
    $request->title = [
        new BillbeeInterfacesOrderMultiLanguageString(),
        new BillbeeInterfacesOrderMultiLanguageString(),
    ];
    $request->type = 1383;
    $request->unit = 93894;
    $request->unitsPerItem = 2476.85;
    $request->vat1Rate = 9785.48;
    $request->vat2Rate = 3182.33;
    $request->vatIndex = 575213;
    $request->weight = 858778;
    $request->weightNet = 643678;
    $request->widthCm = 4585.03;

    $response = $sdk->products->articleCreateArticle($request);

    if ($response->articleCreateArticle200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articleDeleteArticle

Deletes a product

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArticleDeleteArticleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArticleDeleteArticleRequest();
    $request->id = 364463;

    $response = $sdk->products->articleDeleteArticle($request);

    if ($response->articleDeleteArticle200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articleDeleteImage

Deletes a single image by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArticleDeleteImageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArticleDeleteImageRequest();
    $request->imageId = 444587;

    $response = $sdk->products->articleDeleteImage($request);

    if ($response->articleDeleteImage200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articleDeleteImageFromProduct

Deletes a single image from a product

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArticleDeleteImageFromProductRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArticleDeleteImageFromProductRequest();
    $request->imageId = 667715;
    $request->productId = 336102;

    $response = $sdk->products->articleDeleteImageFromProduct($request);

    if ($response->articleDeleteImageFromProduct200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articleGetArticle

Queries a single article by id or by sku

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArticleGetArticleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArticleGetArticleRequest();
    $request->id = '9ecfef66-ef1c-4aa3-b83c-2beb477373c8';
    $request->lookupBy = 'quibusdam';

    $response = $sdk->products->articleGetArticle($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelArticleAPIModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articleGetCategory

GEts a list of all defined categories

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->products->articleGetCategory();

    if ($response->articleGetCategory200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articleGetCustomField

Queries a single custom field

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArticleGetCustomFieldRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArticleGetCustomFieldRequest();
    $request->id = 437814;

    $response = $sdk->products->articleGetCustomField($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelArticleAPICustomFieldDefinitionModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articleGetCustomFields

Queries a list of all custom fields

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArticleGetCustomFieldsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArticleGetCustomFieldsRequest();
    $request->page = 139072;
    $request->pageSize = 974990;

    $response = $sdk->products->articleGetCustomFields($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelArticleAPICustomFieldDefinitionModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articleGetImage

Returns a single image by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArticleGetImageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArticleGetImageRequest();
    $request->imageId = 426904;

    $response = $sdk->products->articleGetImage($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articleGetImageFromProduct

Returns a single image by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArticleGetImageFromProductRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArticleGetImageFromProductRequest();
    $request->imageId = 300824;
    $request->productId = 842855;

    $response = $sdk->products->articleGetImageFromProduct($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articleGetImages

Returns a list of all images of the product

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArticleGetImagesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArticleGetImagesRequest();
    $request->productId = 78969;

    $response = $sdk->products->articleGetImages($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articleGetList

Get a list of all products

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArticleGetListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArticleGetListRequest();
    $request->maximumBillBeeArticleId = 818034;
    $request->minCreatedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-18T05:42:38.841Z');
    $request->minimumBillBeeArticleId = 975425;
    $request->page = 156383;
    $request->pageSize = 782090;

    $response = $sdk->products->articleGetList($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelArticleAPIModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articleGetPatchableFields

Returns a list of fields which can be updated with the patch call

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->products->articleGetPatchableFields();

    if ($response->articleGetPatchableFields200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articleGetReservedAmount

Queries the reserved amount for a single article by id or by sku

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArticleGetReservedAmountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArticleGetReservedAmountRequest();
    $request->id = '4310661e-9634-49e1-8f9e-06e3a437000a';
    $request->lookupBy = 'recusandae';
    $request->stockId = 408303;

    $response = $sdk->products->articleGetReservedAmount($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelGetReservedAmountResponseData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articleGetStocks

Query all defined stock locations

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->products->articleGetStocks();

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelStockResponseData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articlePatchArticle

Updates one or more fields of a product

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArticlePatchArticleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArticlePatchArticleRequest();
    $request->requestBody = [
        'voluptas' => 'facilis',
        'placeat' => 'perspiciatis',
        'expedita' => 'deleniti',
    ];
    $request->id = 954334;

    $response = $sdk->products->articlePatchArticle($request);

    if ($response->articlePatchArticle200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articlePutImageForm

Add or update an existing image of a product

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArticlePutImageFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArticlePutImageFormRequest();
    $request->billbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel = new BillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel();
    $request->billbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel->articleId = 455579;
    $request->billbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel->id = 351936;
    $request->billbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel->isDefault = false;
    $request->billbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel->position = 600193;
    $request->billbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel->thumbPathExt = 'necessitatibus';
    $request->billbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel->thumbUrl = 'animi';
    $request->billbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel->url = 'impedit';
    $request->imageId = 373040;
    $request->productId = 357425;

    $response = $sdk->products->articlePutImageForm($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articlePutImageJson

Add or update an existing image of a product

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArticlePutImageJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArticlePutImageJsonRequest();
    $request->billbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel = new BillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel();
    $request->billbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel->articleId = 668234;
    $request->billbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel->id = 621666;
    $request->billbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel->isDefault = false;
    $request->billbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel->position = 456885;
    $request->billbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel->thumbPathExt = 'labore';
    $request->billbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel->thumbUrl = 'veritatis';
    $request->billbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel->url = 'vero';
    $request->imageId = 233173;
    $request->productId = 112427;

    $response = $sdk->products->articlePutImageJson($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articlePutImageRaw

Add or update an existing image of a product

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArticlePutImageRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArticlePutImageRawRequest();
    $request->requestBody = 'inventore';
    $request->imageId = 212434;
    $request->productId = 322017;

    $response = $sdk->products->articlePutImageRaw($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articleUpdateStockCodeForm

Update the stock code of an article

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelUpdateStockCodeAPIModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BillbeeInterfacesBillbeeAPIModelUpdateStockCodeAPIModel();
    $request->billbeeId = 183033;
    $request->sku = 'iste';
    $request->stockCode = 'ex';
    $request->stockId = 367626;

    $response = $sdk->products->articleUpdateStockCodeForm($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelUpdateStockCodeResponseData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articleUpdateStockCodeJson

Update the stock code of an article

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelUpdateStockCodeAPIModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BillbeeInterfacesBillbeeAPIModelUpdateStockCodeAPIModel();
    $request->billbeeId = 745233;
    $request->sku = 'libero';
    $request->stockCode = 'rem';
    $request->stockId = 678060;

    $response = $sdk->products->articleUpdateStockCodeJson($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelUpdateStockCodeResponseData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articleUpdateStockCodeRaw

Update the stock code of an article

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'odio'

    $response = $sdk->products->articleUpdateStockCodeRaw($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelUpdateStockCodeResponseData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articleUpdateStockForm

The article is specified by sku. You have to send the absolute value for the current stock

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelUpdateStockAPIModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BillbeeInterfacesBillbeeAPIModelUpdateStockAPIModel();
    $request->autosubtractReservedAmount = false;
    $request->billbeeId = 144691;
    $request->deltaQuantity = 5.45;
    $request->forceSendStockToShops = false;
    $request->newQuantity = 1680.42;
    $request->oldQuantity = 4254.02;
    $request->reason = 'quae';
    $request->sku = 'quae';
    $request->stockId = 264333;

    $response = $sdk->products->articleUpdateStockForm($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelUpdateStockResponseData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articleUpdateStockJson

The article is specified by sku. You have to send the absolute value for the current stock

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelUpdateStockAPIModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BillbeeInterfacesBillbeeAPIModelUpdateStockAPIModel();
    $request->autosubtractReservedAmount = false;
    $request->billbeeId = 208253;
    $request->deltaQuantity = 3483.57;
    $request->forceSendStockToShops = false;
    $request->newQuantity = 9323.94;
    $request->oldQuantity = 882.48;
    $request->reason = 'ipsum';
    $request->sku = 'unde';
    $request->stockId = 858338;

    $response = $sdk->products->articleUpdateStockJson($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelUpdateStockResponseData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articleUpdateStockRaw

The article is specified by sku. You have to send the absolute value for the current stock

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'distinctio'

    $response = $sdk->products->articleUpdateStockRaw($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelUpdateStockResponseData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchSearchForm

Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiSearchControllerSearchModel;
use \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiSearchControllerSearchModelSearchModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RechnungsdruckWebAppControllersApiSearchControllerSearchModel();
    $request->searchMode = RechnungsdruckWebAppControllersApiSearchControllerSearchModelSearchModeEnum::FOUR;
    $request->term = 'quia';
    $request->type = [
        'nostrum',
    ];

    $response = $sdk->products->searchSearchForm($request);

    if ($response->rechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiSearchControllerSearchResultsModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchSearchJson

Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiSearchControllerSearchModel;
use \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiSearchControllerSearchModelSearchModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RechnungsdruckWebAppControllersApiSearchControllerSearchModel();
    $request->searchMode = RechnungsdruckWebAppControllersApiSearchControllerSearchModelSearchModeEnum::THREE;
    $request->term = 'libero';
    $request->type = [
        'id',
    ];

    $response = $sdk->products->searchSearchJson($request);

    if ($response->rechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiSearchControllerSearchResultsModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchSearchRaw

Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'libero'

    $response = $sdk->products->searchSearchRaw($request);

    if ($response->rechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiSearchControllerSearchResultsModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
