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
import org.openapis.openapi.models.operations.CreateMonitorRequest;
import org.openapis.openapi.models.operations.CreateMonitorRequestBody;
import org.openapis.openapi.models.operations.CreateMonitorRequestBodyInternetMeasurementsLogDelivery;
import org.openapis.openapi.models.operations.CreateMonitorResponse;
import org.openapis.openapi.models.shared.LogDeliveryStatusEnum;
import org.openapis.openapi.models.shared.S3Config;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateMonitorRequest req = new CreateMonitorRequest(                new CreateMonitorRequestBody("provident") {{
                                clientToken = "distinctio";
                                internetMeasurementsLogDelivery = new CreateMonitorRequestBodyInternetMeasurementsLogDelivery() {{
                                    s3Config = new S3Config() {{
                                        bucketName = "quibusdam";
                                        bucketPrefix = "unde";
                                        logDeliveryStatus = LogDeliveryStatusEnum.DISABLED;
                                    }};;
                                }};;
                                maxCityNetworksToMonitor = 544883L;
                                resources = new String[]{{
                                    add("vel"),
                                    add("error"),
                                    add("deserunt"),
                                    add("suscipit"),
                                }};
                                tags = new java.util.HashMap<String, String>() {{
                                    put("magnam", "debitis");
                                    put("ipsa", "delectus");
                                }};
                                trafficPercentageToMonitor = 272656L;
                            }};) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "minus";
                xAmzDate = "placeat";
                xAmzSecurityToken = "voluptatum";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "excepturi";
            }};            

            CreateMonitorResponse res = sdk.createMonitor(req);

            if (res.createMonitorOutput != null) {
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

* [createMonitor](docs/sdk/README.md#createmonitor) - <p>Creates a monitor in Amazon CloudWatch Internet Monitor. A monitor is built based on information from the application resources that you add: Amazon Virtual Private Clouds (VPCs), Amazon CloudFront distributions, and WorkSpaces directories. Internet Monitor then publishes internet measurements from Amazon Web Services that are specific to the <i>city-networks</i>, that is, the locations and ASNs (typically internet service providers or ISPs), where clients access your application. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-InternetMonitor.html">Using Amazon CloudWatch Internet Monitor</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>When you create a monitor, you set a maximum limit for the number of city-networks where client traffic is monitored. The city-network maximum that you choose is the limit, but you only pay for the number of city-networks that are actually monitored. You can change the maximum at any time by updating your monitor. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMCityNetworksMaximum.html">Choosing a city-network maximum value</a> in the <i>Amazon CloudWatch User Guide</i>.</p>
* [deleteMonitor](docs/sdk/README.md#deletemonitor) - Deletes a monitor in Amazon CloudWatch Internet Monitor. 
* [getHealthEvent](docs/sdk/README.md#gethealthevent) - <p>Gets information the Amazon CloudWatch Internet Monitor has created and stored about a health event for a specified monitor. This information includes the impacted locations, and all of the information related to the event by location.</p> <p>The information returned includes the performance, availability, and round-trip time impact, information about the network providers, the event type, and so on.</p> <p>Information rolled up at the global traffic level is also returned, including the impact type and total traffic impact.</p>
* [getMonitor](docs/sdk/README.md#getmonitor) - Gets information about a monitor in Amazon CloudWatch Internet Monitor based on a monitor name. The information returned includes the Amazon Resource Name (ARN), create time, modified time, resources included in the monitor, and status information.
* [listHealthEvents](docs/sdk/README.md#listhealthevents) - <p>Lists all health events for a monitor in Amazon CloudWatch Internet Monitor. Returns all information for health events including the client location information the network cause and status, event start and end time, percentage of total traffic impacted, and status.</p> <note> <p>Health events that have start times during the time frame that is requested are not included in the list of health events.</p> </note>
* [listMonitors](docs/sdk/README.md#listmonitors) - Lists all of your monitors for Amazon CloudWatch Internet Monitor and their statuses, along with the Amazon Resource Name (ARN) and name of each monitor.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags for a resource. Tags are supported only for monitors in Amazon CloudWatch Internet Monitor.
* [tagResource](docs/sdk/README.md#tagresource) - <p>Adds a tag to a resource. Tags are supported only for monitors in Amazon CloudWatch Internet Monitor. You can add a maximum of 50 tags in Internet Monitor.</p> <p>A minimum of one tag is required for this call. It returns an error if you use the <code>TagResource</code> request with 0 tags.</p>
* [untagResource](docs/sdk/README.md#untagresource) - Removes a tag from a resource.
* [updateMonitor](docs/sdk/README.md#updatemonitor) - <p>Updates a monitor. You can update a monitor to change the maximum number of city-networks (locations and ASNs or internet service providers), to add or remove resources, or to change the status of the monitor. Note that you can't change the name of a monitor.</p> <p>The city-network maximum that you choose is the limit, but you only pay for the number of city-networks that are actually monitored. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMCityNetworksMaximum.html">Choosing a city-network maximum value</a> in the <i>Amazon CloudWatch User Guide</i>.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
