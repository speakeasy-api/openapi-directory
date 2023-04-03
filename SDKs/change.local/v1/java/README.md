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

import org.openapis.openapi.models.operations.GetApiV1DonationsCarbonCalculateSecurity;
import org.openapis.openapi.models.operations.GetApiV1DonationsCarbonCalculateTransportationMethodEnum;
import org.openapis.openapi.models.operations.GetApiV1DonationsCarbonCalculateRequest;
import org.openapis.openapi.models.operations.GetApiV1DonationsCarbonCalculateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1DonationsCarbonCalculateRequest req = new GetApiV1DonationsCarbonCalculateRequest() {{
                destinationAddress = 5488.14;
                distanceMi = 5928.45;
                originAddress = 7151.9;
                transportationMethod = "sea";
                weightLb = 6027.63;
            }}            

            GetApiV1DonationsCarbonCalculateResponse res = sdk.getApiV1DonationsCarbonCalculate(req, new GetApiV1DonationsCarbonCalculateSecurity() {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `getApiV1DonationsCarbonCalculate` - Calculate shipping carbon offset
* `getApiV1DonationsCarbonStats` - Retrieve carbon offset stats
* `getApiV1DonationsCryptoCalculate` - Calculate crypto carbon offset
* `getApiV1DonationsIndex` - List your donations
* `getApiV1DonationsShow` - Retrieve a donation
* `getApiV1NonprofitsList` - Search a nonprofit
* `getApiV1NonprofitsShow` - Show a nonprofit
* `postApiV1DonationsCreate` - Create a donation
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
