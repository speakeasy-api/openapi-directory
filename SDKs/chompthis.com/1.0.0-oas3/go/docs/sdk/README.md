# SDK

## Overview

## Important
An **[API key](https://chompthis.com/api/)** is required for access to this API. Get yours at **[https://chompthis.com/api](https://chompthis.com/api/)**.

### Getting Started
  * **[Subscribe](https://chompthis.com/api/#pricing)** to the API.
  * Scroll down and click the "**Authorize**" button.
  * Enter your API key into the "**value**" input, click the "**Authorize**" button, then click the "**Close**" button.
  * Scroll down to the section titled "**default**" and click on the API endpoint you wish to use.
  * Click the "**Try it out**" button.
  * Enter the information the endpoint requires.
  * Click the "**Execute**" button.

### Example 
  * Branded food response object: **[View example &raquo;](https://raw.githubusercontent.com/chompfoods/examples/master/branded-food-response-object.json)**
  * Ingredient response object: **[View example &raquo;](https://raw.githubusercontent.com/chompfoods/examples/master/ingredient-response-object.json)**
  * Error response object: **[View example &raquo;](https://raw.githubusercontent.com/chompfoods/examples/master/error-response-object.json)**

### How Do I Find My API Key?
  * Your API key was sent to the email address you used to create your subscription.
  * You will also find your API key in the **[Client Center](https://chompthis.com/api/manage.php)**.
  * Read **[this article](https://desk.zoho.com/portal/chompthis/kb/articles/how-do-i-find-my-api-key)** for more information.

### Helpful Links
  * **Help & Support**
    * [Knowledge Base &raquo;](https://desk.zoho.com/portal/chompthis/kb/chomp)
    * [Support &raquo;](https://chompthis.com/api/ticket-new.php)
    * [Client Center &raquo;](https://chompthis.com/api/manage.php)
  * **Pricing**
    * [Subscription Options &raquo;](https://chompthis.com/api/)
    * [Cost Calculator &raquo;](https://chompthis.com/api/cost-calculator.php)
  * **Guidelines**
    * [Terms & License &raquo;](https://chompthis.com/api/terms.php)
    * [Attribution &raquo;](https://chompthis.com/api/docs/attribution.php)


### Available Operations

* [GetFoodBrandedBarcodePhp](#getfoodbrandedbarcodephp) - Get a branded food item using a barcode
* [GetFoodBrandedNamePhp](#getfoodbrandednamephp) - Get a branded food item by name
* [GetFoodBrandedSearchPhp](#getfoodbrandedsearchphp) - Get data for branded food items using various search parameters
* [GetFoodIngredientSearchPhp](#getfoodingredientsearchphp) - Get raw/generic food ingredient item(s)

## GetFoodBrandedBarcodePhp

## Get data for a branded food using the food's UPC/EAN barcode.

**Example** 
> ```https://chompthis.com/api/v2/food/branded/barcode.php?api_key=API_KEY&code=CODE```

**Tips**
  * Read our **[Knowledge Base article](https://desk.zoho.com/portal/chompthis/kb/articles/im-having-trouble-getting-matches-for-barcodes-what-can-id-do)** for helpful tips and tricks.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetFoodBrandedBarcodePhp(ctx, operations.GetFoodBrandedBarcodePhpRequest{
        Code: "provident",
    }, operations.GetFoodBrandedBarcodePhpSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BrandedFoodObject != nil {
        // handle response
    }
}
```

## GetFoodBrandedNamePhp

## Search for branded food items by name.

**Example**
> ```https://chompthis.com/api/v2/food/branded/name.php?api_key=API_KEY&name=NAME```

**Tips**
  * Get started by using our **[food lookup tool](https://chompthis.com/api/lookup.php)**.

> This API endpoint is only available to Standard and Premium API subscribers. Please consider upgrading your subscription if you are subscribed to the Limited plan. **[Read this](https://desk.zoho.com/portal/chompthis/kb/articles/can-i-upgrade-downgrade-my-subscription)** if you aren't sure how to upgrade your subscription.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetFoodBrandedNamePhp(ctx, operations.GetFoodBrandedNamePhpRequest{
        Limit: operations.GetFoodBrandedNamePhpLimitEnumEight.ToPointer(),
        Name: "Stuart Stiedemann",
        Page: sdk.Int64(423655),
    }, operations.GetFoodBrandedNamePhpSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BrandedFoodObject != nil {
        // handle response
    }
}
```

## GetFoodBrandedSearchPhp

## Search for branded food items using various parameters.

**Example**
> ```https://chompthis.com/api/v2/food/branded/search.php?api_key=API_KEY&brand=BRAND&country=COUNTRY&page=1```

**Tips** 
  * Get started by using the **[Query Builder](https://chompthis.com/api/build.php)**.

> This API endpoint is only available to Standard and Premium API subscribers. Please consider upgrading your subscription if you are subscribed to the Limited plan. **[Read this](https://desk.zoho.com/portal/chompthis/kb/articles/can-i-upgrade-downgrade-my-subscription)** if you aren't sure how to upgrade your subscription.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetFoodBrandedSearchPhp(ctx, operations.GetFoodBrandedSearchPhpRequest{
        Allergen: sdk.String("error"),
        Brand: sdk.String("deserunt"),
        Category: sdk.String("suscipit"),
        Country: sdk.String("Jamaica"),
        Diet: operations.GetFoodBrandedSearchPhpDietEnumVegan.ToPointer(),
        Ingredient: sdk.String("debitis"),
        Keyword: sdk.String("ipsa"),
        Limit: operations.GetFoodBrandedSearchPhpLimitEnumTen.ToPointer(),
        Mineral: sdk.String("tempora"),
        Nutrient: sdk.String("suscipit"),
        Page: sdk.Int64(477665),
        PalmOil: sdk.String("minus"),
        Trace: sdk.String("placeat"),
        Vitamin: sdk.String("voluptatum"),
    }, operations.GetFoodBrandedSearchPhpSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BrandedFoodObject != nil {
        // handle response
    }
}
```

## GetFoodIngredientSearchPhp

## Get data for a specific ingredient or a specific set of ingredients.

**Example #1: Single Ingredient**
> ```https://chompthis.com/api/v2/ingredient/search.php?api_key=API_KEY&find=raw broccoli```

**Example #2: Set of Ingredients**
> ```https://chompthis.com/api/v2/ingredient/search.php?api_key=API_KEY&find=raw broccoli,mashed potatoes,chicken drumstick```

**Tips**
  * Expose ingredient endpoints by using our **[food lookup tool](https://chompthis.com/api/lookup.php)**.

> This API endpoint is only available to Standard and Premium API subscribers. Please consider upgrading your subscription if you are subscribed to the Limited plan. **[Read this](https://desk.zoho.com/portal/chompthis/kb/articles/can-i-upgrade-downgrade-my-subscription)** if you aren't sure how to upgrade your subscription.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetFoodIngredientSearchPhp(ctx, operations.GetFoodIngredientSearchPhpRequest{
        Find: "iusto",
        Limit: operations.GetFoodIngredientSearchPhpLimitEnumTwo.ToPointer(),
    }, operations.GetFoodIngredientSearchPhpSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IngredientObject != nil {
        // handle response
    }
}
```
