# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFactFodRequest;
import org.openapis.openapi.models.operations.GetFactFodResponse;
import org.openapis.openapi.models.operations.GetFactFodSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFactFodRequest req = new GetFactFodRequest() {{
                category = "corrupti";
            }};            

            GetFactFodResponse res = sdk.factOfTheDay.getFactFod(req, new GetFactFodSecurity("provident") {{
                xFungeneratorsApiSecret = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [factOfTheDay](docs/factoftheday/README.md)

* [getFactFod](docs/factoftheday/README.md#getfactfod) - Get fact of the day for the given category.
* [getFactFodCategories](docs/factoftheday/README.md#getfactfodcategories) - Get the list of supported fact of the day categories.

### [numberFacts](docs/numberfacts/README.md)

* [getFactNumbers](docs/numberfacts/README.md#getfactnumbers) - Get a random fact about a number

### [onThisDay](docs/onthisday/README.md)

* [getFactOnthisdayBorn](docs/onthisday/README.md#getfactonthisdayborn) - Returns a random ( famous/ relatively famous ) person born on a given day and month
* [getFactOnthisdayDied](docs/onthisday/README.md#getfactonthisdaydied) - Returns a random ( famous/ relatively famous ) person died on a given day and month
* [getFactOnthisdayEvent](docs/onthisday/README.md#getfactonthisdayevent) - Returns a random ( famous/ relatively famous ) historic event on a given day and month

### [privateFacts](docs/privatefacts/README.md)

* [deleteFact](docs/privatefacts/README.md#deletefact) - Delete a Fact entry identified by the id.
* [getFact](docs/privatefacts/README.md#getfact) - Get a Fact belonging to the id.
* [putFact](docs/privatefacts/README.md#putfact) - Add a Fact entry to the database (private collection).

### [randomFacts](docs/randomfacts/README.md)

* [getFact](docs/randomfacts/README.md#getfact) - Get a Fact belonging to the id.
* [getFactCategories](docs/randomfacts/README.md#getfactcategories) - Get a random Fact.
* [getFactRandom](docs/randomfacts/README.md#getfactrandom) - Get a random Fact for a given category(optional) and subcategory(optional).
* [getFactSearch](docs/randomfacts/README.md#getfactsearch) - Search for random Fact which has the text in the query, for a given category(optional) and subcategory(optional).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
