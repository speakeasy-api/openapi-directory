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
import org.openapis.openapi.models.operations.DeleteRiddleRequest;
import org.openapis.openapi.models.operations.DeleteRiddleResponse;
import org.openapis.openapi.models.operations.DeleteRiddleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRiddleRequest req = new DeleteRiddleRequest("corrupti");            

            DeleteRiddleResponse res = sdk.privateRiddles.deleteRiddle(req, new DeleteRiddleSecurity("provident") {{
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


### [privateRiddles](docs/privateriddles/README.md)

* [deleteRiddle](docs/privateriddles/README.md#deleteriddle) - Create a random Riddle entry.
* [getRiddle](docs/privateriddles/README.md#getriddle) - Get a Riddle entry for a given id. Retrieves a riddle question and answer based on the id.
* [postRiddle](docs/privateriddles/README.md#postriddle) - Create a random Riddle entry. Same as 'PUT' but can be used when some of the client libraries don't support 'PUT'.
* [putRiddle](docs/privateriddles/README.md#putriddle) - Create a random Riddle entry.

### [randomRiddle](docs/randomriddle/README.md)

* [getRiddleRandom](docs/randomriddle/README.md#getriddlerandom) - Get a random riddle for a given category(optional)
* [getRiddleSearch](docs/randomriddle/README.md#getriddlesearch) - Search for random riddle which has the text in the query, for a given category(optional).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
