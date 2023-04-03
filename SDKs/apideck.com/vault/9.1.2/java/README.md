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
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.ConnectionSettingsAllSecurity;
import org.openapis.openapi.models.operations.ConnectionSettingsAllRequest;
import org.openapis.openapi.models.operations.ConnectionSettingsAllResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectionSettingsAllRequest req = new ConnectionSettingsAllRequest() {{
                resource = "corrupti";
                serviceId = "provident";
                unifiedApi = "distinctio";
                xApideckAppId = "quibusdam";
                xApideckConsumerId = "unde";
            }}            

            ConnectionSettingsAllResponse res = sdk.connections.connectionSettingsAll(req, new ConnectionSettingsAllSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getConnectionResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### connections

* `connectionSettingsAll` - Get resource settings
* `connectionSettingsUpdate` - Update settings
* `connectionsAdd` - Create connection
* `connectionsAll` - Get all connections
* `connectionsCallback` - Callback
* `connectionsDelete` - Deletes a connection
* `connectionsImport` - Import connection
* `connectionsOne` - Get connection
* `connectionsRevoke` - Revoke connection
* `connectionsToken` - Get Access Token
* `connectionsUpdate` - Update connection

### consumers

* `consumerRequestCountsAll` - Consumer request counts
* `consumersAdd` - Create consumer
* `consumersAll` - Get all consumers
* `consumersDelete` - Delete consumer
* `consumersOne` - Get consumer
* `consumersUpdate` - Update consumer

### logs

* `logsAll` - Get all consumer request logs

### sessions

* `sessionsCreate` - Create Session
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
