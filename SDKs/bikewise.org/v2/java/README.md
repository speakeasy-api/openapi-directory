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
import org.openapis.openapi.models.operations.GETVersionIncidentsFormatIncidentTypeEnum;
import org.openapis.openapi.models.operations.GETVersionIncidentsFormatRequest;
import org.openapis.openapi.models.operations.GETVersionIncidentsFormatResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETVersionIncidentsFormatRequest req = new GETVersionIncidentsFormatRequest() {{
                incidentType = GETVersionIncidentsFormatIncidentTypeEnum.UNCONFIRMED;
                occurredAfter = 592845;
                occurredBefore = 715190;
                page = 844266;
                perPage = 602763;
                proximity = "nulla";
                proximitySquare = 544883;
                query = "illum";
            }};            

            GETVersionIncidentsFormatResponse res = sdk.incidents.getVersionIncidentsFormat(req);

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


### [incidents](docs/incidents/README.md)

* [getVersionIncidentsFormat](docs/incidents/README.md#getversionincidentsformat) - Paginated incidents matching parameters
* [getVersionIncidentsIdFormat](docs/incidents/README.md#getversionincidentsidformat)

### [locations](docs/locations/README.md)

* [getVersionLocationsFormat](docs/locations/README.md#getversionlocationsformat) - Unpaginated geojson response
* [getVersionLocationsMarkersFormat](docs/locations/README.md#getversionlocationsmarkersformat) - Unpaginated geojson response with simplestyled markers
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
