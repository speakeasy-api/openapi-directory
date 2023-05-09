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

* [getFoodBrandedBarcodePhp](#getfoodbrandedbarcodephp) - Get a branded food item using a barcode
* [getFoodBrandedNamePhp](#getfoodbrandednamephp) - Get a branded food item by name
* [getFoodBrandedSearchPhp](#getfoodbrandedsearchphp) - Get data for branded food items using various search parameters
* [getFoodIngredientSearchPhp](#getfoodingredientsearchphp) - Get raw/generic food ingredient item(s)

## getFoodBrandedBarcodePhp

## Get data for a branded food using the food's UPC/EAN barcode.

**Example** 
> ```https://chompthis.com/api/v2/food/branded/barcode.php?api_key=API_KEY&code=CODE```

**Tips**
  * Read our **[Knowledge Base article](https://desk.zoho.com/portal/chompthis/kb/articles/im-having-trouble-getting-matches-for-barcodes-what-can-id-do)** for helpful tips and tricks.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFoodBrandedBarcodePhpRequest;
import org.openapis.openapi.models.operations.GetFoodBrandedBarcodePhpResponse;
import org.openapis.openapi.models.operations.GetFoodBrandedBarcodePhpSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFoodBrandedBarcodePhpRequest req = new GetFoodBrandedBarcodePhpRequest("distinctio");            

            GetFoodBrandedBarcodePhpResponse res = sdk.sdk.getFoodBrandedBarcodePhp(req, new GetFoodBrandedBarcodePhpSecurity("quibusdam") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.brandedFoodObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFoodBrandedNamePhp

## Search for branded food items by name.

**Example**
> ```https://chompthis.com/api/v2/food/branded/name.php?api_key=API_KEY&name=NAME```

**Tips**
  * Get started by using our **[food lookup tool](https://chompthis.com/api/lookup.php)**.

> This API endpoint is only available to Standard and Premium API subscribers. Please consider upgrading your subscription if you are subscribed to the Limited plan. **[Read this](https://desk.zoho.com/portal/chompthis/kb/articles/can-i-upgrade-downgrade-my-subscription)** if you aren't sure how to upgrade your subscription.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFoodBrandedNamePhpLimitEnum;
import org.openapis.openapi.models.operations.GetFoodBrandedNamePhpRequest;
import org.openapis.openapi.models.operations.GetFoodBrandedNamePhpResponse;
import org.openapis.openapi.models.operations.GetFoodBrandedNamePhpSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFoodBrandedNamePhpRequest req = new GetFoodBrandedNamePhpRequest("unde") {{
                limit = GetFoodBrandedNamePhpLimitEnum.NINE;
                page = 544883L;
            }};            

            GetFoodBrandedNamePhpResponse res = sdk.sdk.getFoodBrandedNamePhp(req, new GetFoodBrandedNamePhpSecurity("illum") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.brandedFoodObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFoodBrandedSearchPhp

## Search for branded food items using various parameters.

**Example**
> ```https://chompthis.com/api/v2/food/branded/search.php?api_key=API_KEY&brand=BRAND&country=COUNTRY&page=1```

**Tips** 
  * Get started by using the **[Query Builder](https://chompthis.com/api/build.php)**.

> This API endpoint is only available to Standard and Premium API subscribers. Please consider upgrading your subscription if you are subscribed to the Limited plan. **[Read this](https://desk.zoho.com/portal/chompthis/kb/articles/can-i-upgrade-downgrade-my-subscription)** if you aren't sure how to upgrade your subscription.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFoodBrandedSearchPhpDietEnum;
import org.openapis.openapi.models.operations.GetFoodBrandedSearchPhpLimitEnum;
import org.openapis.openapi.models.operations.GetFoodBrandedSearchPhpRequest;
import org.openapis.openapi.models.operations.GetFoodBrandedSearchPhpResponse;
import org.openapis.openapi.models.operations.GetFoodBrandedSearchPhpSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFoodBrandedSearchPhpRequest req = new GetFoodBrandedSearchPhpRequest() {{
                allergen = "vel";
                brand = "error";
                category = "deserunt";
                country = "Holy See (Vatican City State)";
                diet = GetFoodBrandedSearchPhpDietEnum.VEGETARIAN;
                ingredient = "magnam";
                keyword = "debitis";
                limit = GetFoodBrandedSearchPhpLimitEnum.ONE;
                mineral = "delectus";
                nutrient = "tempora";
                page = 383441L;
                palmOil = "molestiae";
                trace = "minus";
                vitamin = "placeat";
            }};            

            GetFoodBrandedSearchPhpResponse res = sdk.sdk.getFoodBrandedSearchPhp(req, new GetFoodBrandedSearchPhpSecurity("voluptatum") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.brandedFoodObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFoodIngredientSearchPhp

## Get data for a specific ingredient or a specific set of ingredients.

**Example #1: Single Ingredient**
> ```https://chompthis.com/api/v2/ingredient/search.php?api_key=API_KEY&find=raw broccoli```

**Example #2: Set of Ingredients**
> ```https://chompthis.com/api/v2/ingredient/search.php?api_key=API_KEY&find=raw broccoli,mashed potatoes,chicken drumstick```

**Tips**
  * Expose ingredient endpoints by using our **[food lookup tool](https://chompthis.com/api/lookup.php)**.

> This API endpoint is only available to Standard and Premium API subscribers. Please consider upgrading your subscription if you are subscribed to the Limited plan. **[Read this](https://desk.zoho.com/portal/chompthis/kb/articles/can-i-upgrade-downgrade-my-subscription)** if you aren't sure how to upgrade your subscription.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFoodIngredientSearchPhpLimitEnum;
import org.openapis.openapi.models.operations.GetFoodIngredientSearchPhpRequest;
import org.openapis.openapi.models.operations.GetFoodIngredientSearchPhpResponse;
import org.openapis.openapi.models.operations.GetFoodIngredientSearchPhpSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFoodIngredientSearchPhpRequest req = new GetFoodIngredientSearchPhpRequest("iusto") {{
                limit = GetFoodIngredientSearchPhpLimitEnum.TWO;
            }};            

            GetFoodIngredientSearchPhpResponse res = sdk.sdk.getFoodIngredientSearchPhp(req, new GetFoodIngredientSearchPhpSecurity("nisi") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.ingredientObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
