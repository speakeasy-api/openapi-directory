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
import org.openapis.openapi.models.operations.CheckDomainRequest;
import org.openapis.openapi.models.operations.CheckDomainResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            CheckDomainRequest req = new CheckDomainRequest("provident");            

            CheckDomainResponse res = sdk.checkDomain(req);

            if (res.checkDomain200ApplicationJSONObject != null) {
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

### [SDK](docs/sdk/README.md)

* [checkDomain](docs/sdk/README.md#checkdomain) - Check domain availability
* [createBatch](docs/sdk/README.md#createbatch) - Create batch. Batch is then being processed until all provided items have been completed. At any time it can be `get` to provide current status with results optionally.
* [deleteBatch](docs/sdk/README.md#deletebatch) - Delete batch
* [domainRank](docs/sdk/README.md#domainrank) - Check domain rank (authority).
* [getBatch](docs/sdk/README.md#getbatch) - Get batch
* [getBatches](docs/sdk/README.md#getbatches) - Get your batches
* [queryDb](docs/sdk/README.md#querydb) - Query domain database
* [whois](docs/sdk/README.md#whois) - WHOIS query for a domain
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
