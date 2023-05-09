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
import org.openapis.openapi.models.operations.PostAssignTerminalsResponse;
import org.openapis.openapi.models.operations.PostAssignTerminalsSecurity;
import org.openapis.openapi.models.shared.AssignTerminalsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.AssignTerminalsRequest req = new AssignTerminalsRequest("corrupti",                 new String[]{{
                                add("distinctio"),
                                add("quibusdam"),
                                add("unde"),
                            }}) {{
                merchantAccount = "nulla";
                merchantInventory = false;
                store = "corrupti";
            }};            

            PostAssignTerminalsResponse res = sdk.general.postAssignTerminals(req, new PostAssignTerminalsSecurity("illum") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.assignTerminalsResponse != null) {
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


### [general](docs/general/README.md)

* [postAssignTerminals](docs/general/README.md#postassignterminals) - Assign terminals
* [postFindTerminal](docs/general/README.md#postfindterminal) - Get the account or store of a terminal
* [postGetStoresUnderAccount](docs/general/README.md#postgetstoresunderaccount) - Get the stores of an account
* [postGetTerminalDetails](docs/general/README.md#postgetterminaldetails) - Get the details of a terminal
* [postGetTerminalsUnderAccount](docs/general/README.md#postgetterminalsunderaccount) - Get the list of terminals
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
