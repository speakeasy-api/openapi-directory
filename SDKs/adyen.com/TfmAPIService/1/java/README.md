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

import org.openapis.openapi.models.operations.PostAssignTerminalsSecurity;
import org.openapis.openapi.models.operations.PostAssignTerminalsRequest;
import org.openapis.openapi.models.operations.PostAssignTerminalsResponse;
import org.openapis.openapi.models.shared.AssignTerminalsRequest;
import org.openapis.openapi.models.shared.SchemeAPIKeyAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAssignTerminalsRequest req = new PostAssignTerminalsRequest() {{
                security = new PostAssignTerminalsSecurity() {{
                    apiKeyAuth = new SchemeAPIKeyAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new AssignTerminalsRequest() {{
                    companyAccount = "corrupti";
                    merchantAccount = "provident";
                    merchantInventory = false;
                    store = "distinctio";
                    terminals = new String[]{{
                        add("unde"),
                        add("nulla"),
                        add("corrupti"),
                        add("illum"),
                    }};
                }};
            }};            

            PostAssignTerminalsResponse res = sdk.general.postAssignTerminals(req);

            if (res.assignTerminalsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### general

* `postAssignTerminals` - Assign terminals
* `postFindTerminal` - Get the account or store of a terminal
* `postGetStoresUnderAccount` - Get the stores of an account
* `postGetTerminalDetails` - Get the details of a terminal
* `postGetTerminalsUnderAccount` - Get the list of terminals
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
