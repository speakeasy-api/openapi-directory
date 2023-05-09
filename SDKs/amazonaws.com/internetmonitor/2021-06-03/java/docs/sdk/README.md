# SDK

## Overview

<p>Amazon CloudWatch Internet Monitor provides visibility into how internet issues impact the performance and availability between your applications hosted on Amazon Web Services and your end users. It reduces the time it takes for you to diagnose internet issues from days to minutes. Internet Monitor uses the connectivity data that Amazon Web Services captures from its global networking footprint to calculate a baseline of performance and availability for internet traffic. This is the same data that Amazon Web Services uses to monitor internet uptime and availability. With those measurements as a baseline, Internet Monitor raises awareness for you when there are significant problems for your end users in the different geographic locations where your application runs.</p> <p>Internet Monitor publishes internet measurements to CloudWatch Logs and CloudWatch Metrics, to easily support using CloudWatch tools with health information for geographies and networks specific to your application. Internet Monitor sends health events to Amazon EventBridge so that you can set up notifications. If an issue is caused by the Amazon Web Services network, you also automatically receive an Amazon Web Services Health Dashboard notification with the steps that Amazon Web Services is taking to mitigate the problem.</p> <p>To use Internet Monitor, you create a <i>monitor</i> and associate your application's resources with it, VPCs, CloudFront distributions, or WorkSpaces directories, to enable Internet Monitor to know where your application's internet traffic is. Internet Monitor then provides internet measurements from Amazon Web Services that are specific to the locations and networks that communicate with your application.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-InternetMonitor.html">Using Amazon CloudWatch Internet Monitor</a> in the <i>Amazon CloudWatch User Guide</i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/internetmonitor/>
### Available Operations

* [createMonitor](#createmonitor) - <p>Creates a monitor in Amazon CloudWatch Internet Monitor. A monitor is built based on information from the application resources that you add: Amazon Virtual Private Clouds (VPCs), Amazon CloudFront distributions, and WorkSpaces directories. Internet Monitor then publishes internet measurements from Amazon Web Services that are specific to the <i>city-networks</i>, that is, the locations and ASNs (typically internet service providers or ISPs), where clients access your application. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-InternetMonitor.html">Using Amazon CloudWatch Internet Monitor</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>When you create a monitor, you set a maximum limit for the number of city-networks where client traffic is monitored. The city-network maximum that you choose is the limit, but you only pay for the number of city-networks that are actually monitored. You can change the maximum at any time by updating your monitor. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMCityNetworksMaximum.html">Choosing a city-network maximum value</a> in the <i>Amazon CloudWatch User Guide</i>.</p>
* [deleteMonitor](#deletemonitor) - Deletes a monitor in Amazon CloudWatch Internet Monitor. 
* [getHealthEvent](#gethealthevent) - <p>Gets information the Amazon CloudWatch Internet Monitor has created and stored about a health event for a specified monitor. This information includes the impacted locations, and all of the information related to the event by location.</p> <p>The information returned includes the performance, availability, and round-trip time impact, information about the network providers, the event type, and so on.</p> <p>Information rolled up at the global traffic level is also returned, including the impact type and total traffic impact.</p>
* [getMonitor](#getmonitor) - Gets information about a monitor in Amazon CloudWatch Internet Monitor based on a monitor name. The information returned includes the Amazon Resource Name (ARN), create time, modified time, resources included in the monitor, and status information.
* [listHealthEvents](#listhealthevents) - <p>Lists all health events for a monitor in Amazon CloudWatch Internet Monitor. Returns all information for health events including the client location information the network cause and status, event start and end time, percentage of total traffic impacted, and status.</p> <note> <p>Health events that have start times during the time frame that is requested are not included in the list of health events.</p> </note>
* [listMonitors](#listmonitors) - Lists all of your monitors for Amazon CloudWatch Internet Monitor and their statuses, along with the Amazon Resource Name (ARN) and name of each monitor.
* [listTagsForResource](#listtagsforresource) - Lists the tags for a resource. Tags are supported only for monitors in Amazon CloudWatch Internet Monitor.
* [tagResource](#tagresource) - <p>Adds a tag to a resource. Tags are supported only for monitors in Amazon CloudWatch Internet Monitor. You can add a maximum of 50 tags in Internet Monitor.</p> <p>A minimum of one tag is required for this call. It returns an error if you use the <code>TagResource</code> request with 0 tags.</p>
* [untagResource](#untagresource) - Removes a tag from a resource.
* [updateMonitor](#updatemonitor) - <p>Updates a monitor. You can update a monitor to change the maximum number of city-networks (locations and ASNs or internet service providers), to add or remove resources, or to change the status of the monitor. Note that you can't change the name of a monitor.</p> <p>The city-network maximum that you choose is the limit, but you only pay for the number of city-networks that are actually monitored. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMCityNetworksMaximum.html">Choosing a city-network maximum value</a> in the <i>Amazon CloudWatch User Guide</i>.</p>

## createMonitor

<p>Creates a monitor in Amazon CloudWatch Internet Monitor. A monitor is built based on information from the application resources that you add: Amazon Virtual Private Clouds (VPCs), Amazon CloudFront distributions, and WorkSpaces directories. Internet Monitor then publishes internet measurements from Amazon Web Services that are specific to the <i>city-networks</i>, that is, the locations and ASNs (typically internet service providers or ISPs), where clients access your application. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-InternetMonitor.html">Using Amazon CloudWatch Internet Monitor</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>When you create a monitor, you set a maximum limit for the number of city-networks where client traffic is monitored. The city-network maximum that you choose is the limit, but you only pay for the number of city-networks that are actually monitored. You can change the maximum at any time by updating your monitor. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMCityNetworksMaximum.html">Choosing a city-network maximum value</a> in the <i>Amazon CloudWatch User Guide</i>.</p>

### Example Usage

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
                .setSecurity(new Security("nisi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateMonitorRequest req = new CreateMonitorRequest(                new CreateMonitorRequestBody("recusandae") {{
                                clientToken = "temporibus";
                                internetMeasurementsLogDelivery = new CreateMonitorRequestBodyInternetMeasurementsLogDelivery() {{
                                    s3Config = new S3Config() {{
                                        bucketName = "ab";
                                        bucketPrefix = "quis";
                                        logDeliveryStatus = LogDeliveryStatusEnum.ENABLED;
                                    }};;
                                }};;
                                maxCityNetworksToMonitor = 648172L;
                                resources = new String[]{{
                                    add("ipsam"),
                                }};
                                tags = new java.util.HashMap<String, String>() {{
                                    put("sapiente", "quo");
                                    put("odit", "at");
                                    put("at", "maiores");
                                    put("molestiae", "quod");
                                }};
                                trafficPercentageToMonitor = 800911L;
                            }};) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "totam";
                xAmzCredential = "porro";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "officia";
            }};            

            CreateMonitorResponse res = sdk.sdk.createMonitor(req);

            if (res.createMonitorOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteMonitor

Deletes a monitor in Amazon CloudWatch Internet Monitor. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMonitorRequest;
import org.openapis.openapi.models.operations.DeleteMonitorResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteMonitorRequest req = new DeleteMonitorRequest("fugit") {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "hic";
                xAmzCredential = "optio";
                xAmzDate = "totam";
                xAmzSecurityToken = "beatae";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "molestiae";
            }};            

            DeleteMonitorResponse res = sdk.sdk.deleteMonitor(req);

            if (res.deleteMonitorOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getHealthEvent

<p>Gets information the Amazon CloudWatch Internet Monitor has created and stored about a health event for a specified monitor. This information includes the impacted locations, and all of the information related to the event by location.</p> <p>The information returned includes the performance, availability, and round-trip time impact, information about the network providers, the event type, and so on.</p> <p>Information rolled up at the global traffic level is also returned, including the impact type and total traffic impact.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHealthEventRequest;
import org.openapis.openapi.models.operations.GetHealthEventResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetHealthEventRequest req = new GetHealthEventRequest("qui", "impedit") {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "esse";
                xAmzCredential = "ipsum";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "ad";
            }};            

            GetHealthEventResponse res = sdk.sdk.getHealthEvent(req);

            if (res.getHealthEventOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMonitor

Gets information about a monitor in Amazon CloudWatch Internet Monitor based on a monitor name. The information returned includes the Amazon Resource Name (ARN), create time, modified time, resources included in the monitor, and status information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMonitorRequest;
import org.openapis.openapi.models.operations.GetMonitorResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMonitorRequest req = new GetMonitorRequest("sed") {{
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "natus";
                xAmzDate = "laboriosam";
                xAmzSecurityToken = "hic";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "fuga";
            }};            

            GetMonitorResponse res = sdk.sdk.getMonitor(req);

            if (res.getMonitorOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listHealthEvents

<p>Lists all health events for a monitor in Amazon CloudWatch Internet Monitor. Returns all information for health events including the client location information the network cause and status, event start and end time, percentage of total traffic impacted, and status.</p> <note> <p>Health events that have start times during the time frame that is requested are not included in the list of health events.</p> </note>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListHealthEventsEventStatusEnum;
import org.openapis.openapi.models.operations.ListHealthEventsRequest;
import org.openapis.openapi.models.operations.ListHealthEventsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListHealthEventsRequest req = new ListHealthEventsRequest("corporis") {{
                endTime = OffsetDateTime.parse("2022-02-15T23:12:00.119Z");
                eventStatus = ListHealthEventsEventStatusEnum.RESOLVED;
                maxResults = 697631L;
                nextToken = "architecto";
                startTime = OffsetDateTime.parse("2022-01-12T00:28:21.182Z");
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "laborum";
                xAmzDate = "dolores";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "explicabo";
            }};            

            ListHealthEventsResponse res = sdk.sdk.listHealthEvents(req);

            if (res.listHealthEventsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMonitors

Lists all of your monitors for Amazon CloudWatch Internet Monitor and their statuses, along with the Amazon Resource Name (ARN) and name of each monitor.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMonitorsRequest;
import org.openapis.openapi.models.operations.ListMonitorsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListMonitorsRequest req = new ListMonitorsRequest() {{
                maxResults = 315428L;
                monitorStatus = "omnis";
                nextToken = "nemo";
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "accusantium";
                xAmzDate = "iure";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "doloribus";
                xAmzSignedHeaders = "sapiente";
            }};            

            ListMonitorsResponse res = sdk.sdk.listMonitors(req);

            if (res.listMonitorsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists the tags for a resource. Tags are supported only for monitors in Amazon CloudWatch Internet Monitor.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("mollitia") {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "consequuntur";
                xAmzDate = "repellat";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "numquam";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

<p>Adds a tag to a resource. Tags are supported only for monitors in Amazon CloudWatch Internet Monitor. You can add a maximum of 50 tags in Internet Monitor.</p> <p>A minimum of one tag is required for this call. It returns an error if you use the <code>TagResource</code> request with 0 tags.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("molestiae", "velit");
                                                put("error", "quia");
                                            }});, "quis") {{
                xAmzAlgorithm = "vitae";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "animi";
                xAmzDate = "enim";
                xAmzSecurityToken = "odit";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "sequi";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes a tag from a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("ipsam",                 new String[]{{
                                add("possimus"),
                                add("aut"),
                                add("quasi"),
                            }}) {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "temporibus";
                xAmzCredential = "laborum";
                xAmzDate = "quasi";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "vero";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMonitor

<p>Updates a monitor. You can update a monitor to change the maximum number of city-networks (locations and ASNs or internet service providers), to add or remove resources, or to change the status of the monitor. Note that you can't change the name of a monitor.</p> <p>The city-network maximum that you choose is the limit, but you only pay for the number of city-networks that are actually monitored. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMCityNetworksMaximum.html">Choosing a city-network maximum value</a> in the <i>Amazon CloudWatch User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMonitorRequest;
import org.openapis.openapi.models.operations.UpdateMonitorRequestBody;
import org.openapis.openapi.models.operations.UpdateMonitorRequestBodyInternetMeasurementsLogDelivery;
import org.openapis.openapi.models.operations.UpdateMonitorRequestBodyStatusEnum;
import org.openapis.openapi.models.operations.UpdateMonitorResponse;
import org.openapis.openapi.models.shared.LogDeliveryStatusEnum;
import org.openapis.openapi.models.shared.S3Config;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateMonitorRequest req = new UpdateMonitorRequest("praesentium",                 new UpdateMonitorRequestBody() {{
                                clientToken = "voluptatibus";
                                internetMeasurementsLogDelivery = new UpdateMonitorRequestBodyInternetMeasurementsLogDelivery() {{
                                    s3Config = new S3Config() {{
                                        bucketName = "ipsa";
                                        bucketPrefix = "omnis";
                                        logDeliveryStatus = LogDeliveryStatusEnum.ENABLED;
                                    }};;
                                }};;
                                maxCityNetworksToMonitor = 739264L;
                                resourcesToAdd = new String[]{{
                                    add("doloremque"),
                                }};
                                resourcesToRemove = new String[]{{
                                    add("ut"),
                                    add("maiores"),
                                }};
                                status = UpdateMonitorRequestBodyStatusEnum.PENDING;
                                trafficPercentageToMonitor = 359444L;
                            }};) {{
                xAmzAlgorithm = "dolore";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "dicta";
                xAmzDate = "harum";
                xAmzSecurityToken = "enim";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "commodi";
            }};            

            UpdateMonitorResponse res = sdk.sdk.updateMonitor(req);

            if (res.updateMonitorOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
