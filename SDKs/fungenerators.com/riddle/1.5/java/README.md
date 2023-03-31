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

import org.openapis.openapi.models.operations.DeleteRiddleSecurity;
import org.openapis.openapi.models.operations.DeleteRiddleQueryParams;
import org.openapis.openapi.models.operations.DeleteRiddleRequest;
import org.openapis.openapi.models.operations.DeleteRiddleResponse;
import org.openapis.openapi.models.shared.SchemeXFungeneratorsAPISecret;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRiddleRequest req = new DeleteRiddleRequest() {{
                security = new DeleteRiddleSecurity() {{
                    xFungeneratorsApiSecret = new SchemeXFungeneratorsAPISecret() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new DeleteRiddleQueryParams() {{
                    id = "corrupti";
                }};
            }};            

            DeleteRiddleResponse res = sdk.privateRiddles.deleteRiddle(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### privateRiddles

* `deleteRiddle` - Create a random Riddle entry.
* `getRiddle` - Get a Riddle entry for a given id. Retrieves a riddle question and answer based on the id.
* `postRiddle` - Create a random Riddle entry. Same as 'PUT' but can be used when some of the client libraries don't support 'PUT'.
* `putRiddle` - Create a random Riddle entry.

### randomRiddle

* `getRiddleRandom` - Get a random riddle for a given category(optional)
* `getRiddleSearch` - Search for random riddle which has the text in the query, for a given category(optional).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
