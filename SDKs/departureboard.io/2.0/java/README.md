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
import org.openapis.openapi.models.operations.GetArrivalsAndDeparturesByCRSRequest;
import org.openapis.openapi.models.operations.GetArrivalsAndDeparturesByCRSResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetArrivalsAndDeparturesByCRSRequest req = new GetArrivalsAndDeparturesByCRSRequest("corrupti", "provident") {{
                filterStation = "distinctio";
                filterType = "quibusdam";
                numServices = 602763L;
                serviceDetails = false;
                timeOffset = 857946L;
                timeWindow = 544883L;
            }};            

            GetArrivalsAndDeparturesByCRSResponse res = sdk.departuresAndArrivals.getArrivalsAndDeparturesByCRS(req);

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


### [departuresAndArrivals](docs/departuresandarrivals/README.md)

* [getArrivalsAndDeparturesByCRS](docs/departuresandarrivals/README.md#getarrivalsanddeparturesbycrs) - getArrivalsAndDeparturesByCRS is used to get a list of services arriving to and departing from a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.
* [getArrivalsByCRS](docs/departuresandarrivals/README.md#getarrivalsbycrs) - getArrivalsByCRS is used to get a list of services arriving to a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.
* [getDeparturesByCRS](docs/departuresandarrivals/README.md#getdeparturesbycrs) - getDeparturesByCRS is used to get a list of services departing from a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.

### [fastestAndNextDepartures](docs/fastestandnextdepartures/README.md)

* [getFastestDeparturesByCRS](docs/fastestandnextdepartures/README.md#getfastestdeparturesbycrs) - getFastestDeparturesByCRS is used to get the fastest next service running between two stations. Multiple destinations can be specified. This will typically return a single train service, but will also return a replacement bus or ferry service if in place.
* [getNextDeparturesByCRS](docs/fastestandnextdepartures/README.md#getnextdeparturesbycrs) - getNextDeparturesByCRS is used to get the next service running between two stations. Multiple destinations can be specified. This will typically return a single train service, but will also return a replacement bus or ferry service if in place. This will return the next departures for each of the filterList stations specified. It may not return the fastest next service. To get the fastest next service use the getFastestDeparturesByCRS endpoint.

### [serviceInformation](docs/serviceinformation/README.md)

* [getServiceDetailsByID](docs/serviceinformation/README.md#getservicedetailsbyid) - getServiceDetailsByID is used to get information on a service, by the Service ID. This will typically return a train service, but will also return a bus and ferry services. The Service ID must be provided in the serviceIDUrlSafe format that is provided in the response for Arrival and Departure Boards. A service ID is specific to a station, and can only be looked up for a short time after a train/bus/ferry arrives at, or departs from a station. This is a National Rail limitation.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
