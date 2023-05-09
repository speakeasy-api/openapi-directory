# SDK

## Overview

<p>Amazon CloudWatch Internet Monitor provides visibility into how internet issues impact the performance and availability between your applications hosted on Amazon Web Services and your end users. It reduces the time it takes for you to diagnose internet issues from days to minutes. Internet Monitor uses the connectivity data that Amazon Web Services captures from its global networking footprint to calculate a baseline of performance and availability for internet traffic. This is the same data that Amazon Web Services uses to monitor internet uptime and availability. With those measurements as a baseline, Internet Monitor raises awareness for you when there are significant problems for your end users in the different geographic locations where your application runs.</p> <p>Internet Monitor publishes internet measurements to CloudWatch Logs and CloudWatch Metrics, to easily support using CloudWatch tools with health information for geographies and networks specific to your application. Internet Monitor sends health events to Amazon EventBridge so that you can set up notifications. If an issue is caused by the Amazon Web Services network, you also automatically receive an Amazon Web Services Health Dashboard notification with the steps that Amazon Web Services is taking to mitigate the problem.</p> <p>To use Internet Monitor, you create a <i>monitor</i> and associate your application's resources with it, VPCs, CloudFront distributions, or WorkSpaces directories, to enable Internet Monitor to know where your application's internet traffic is. Internet Monitor then provides internet measurements from Amazon Web Services that are specific to the locations and networks that communicate with your application.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-InternetMonitor.html">Using Amazon CloudWatch Internet Monitor</a> in the <i>Amazon CloudWatch User Guide</i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/internetmonitor/>
### Available Operations

* [CreateMonitor](#createmonitor) - <p>Creates a monitor in Amazon CloudWatch Internet Monitor. A monitor is built based on information from the application resources that you add: Amazon Virtual Private Clouds (VPCs), Amazon CloudFront distributions, and WorkSpaces directories. Internet Monitor then publishes internet measurements from Amazon Web Services that are specific to the <i>city-networks</i>, that is, the locations and ASNs (typically internet service providers or ISPs), where clients access your application. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-InternetMonitor.html">Using Amazon CloudWatch Internet Monitor</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>When you create a monitor, you set a maximum limit for the number of city-networks where client traffic is monitored. The city-network maximum that you choose is the limit, but you only pay for the number of city-networks that are actually monitored. You can change the maximum at any time by updating your monitor. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMCityNetworksMaximum.html">Choosing a city-network maximum value</a> in the <i>Amazon CloudWatch User Guide</i>.</p>
* [DeleteMonitor](#deletemonitor) - Deletes a monitor in Amazon CloudWatch Internet Monitor. 
* [GetHealthEvent](#gethealthevent) - <p>Gets information the Amazon CloudWatch Internet Monitor has created and stored about a health event for a specified monitor. This information includes the impacted locations, and all of the information related to the event by location.</p> <p>The information returned includes the performance, availability, and round-trip time impact, information about the network providers, the event type, and so on.</p> <p>Information rolled up at the global traffic level is also returned, including the impact type and total traffic impact.</p>
* [GetMonitor](#getmonitor) - Gets information about a monitor in Amazon CloudWatch Internet Monitor based on a monitor name. The information returned includes the Amazon Resource Name (ARN), create time, modified time, resources included in the monitor, and status information.
* [ListHealthEvents](#listhealthevents) - <p>Lists all health events for a monitor in Amazon CloudWatch Internet Monitor. Returns all information for health events including the client location information the network cause and status, event start and end time, percentage of total traffic impacted, and status.</p> <note> <p>Health events that have start times during the time frame that is requested are not included in the list of health events.</p> </note>
* [ListMonitors](#listmonitors) - Lists all of your monitors for Amazon CloudWatch Internet Monitor and their statuses, along with the Amazon Resource Name (ARN) and name of each monitor.
* [ListTagsForResource](#listtagsforresource) - Lists the tags for a resource. Tags are supported only for monitors in Amazon CloudWatch Internet Monitor.
* [TagResource](#tagresource) - <p>Adds a tag to a resource. Tags are supported only for monitors in Amazon CloudWatch Internet Monitor. You can add a maximum of 50 tags in Internet Monitor.</p> <p>A minimum of one tag is required for this call. It returns an error if you use the <code>TagResource</code> request with 0 tags.</p>
* [UntagResource](#untagresource) - Removes a tag from a resource.
* [UpdateMonitor](#updatemonitor) - <p>Updates a monitor. You can update a monitor to change the maximum number of city-networks (locations and ASNs or internet service providers), to add or remove resources, or to change the status of the monitor. Note that you can't change the name of a monitor.</p> <p>The city-network maximum that you choose is the limit, but you only pay for the number of city-networks that are actually monitored. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMCityNetworksMaximum.html">Choosing a city-network maximum value</a> in the <i>Amazon CloudWatch User Guide</i>.</p>

## CreateMonitor

<p>Creates a monitor in Amazon CloudWatch Internet Monitor. A monitor is built based on information from the application resources that you add: Amazon Virtual Private Clouds (VPCs), Amazon CloudFront distributions, and WorkSpaces directories. Internet Monitor then publishes internet measurements from Amazon Web Services that are specific to the <i>city-networks</i>, that is, the locations and ASNs (typically internet service providers or ISPs), where clients access your application. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-InternetMonitor.html">Using Amazon CloudWatch Internet Monitor</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>When you create a monitor, you set a maximum limit for the number of city-networks where client traffic is monitored. The city-network maximum that you choose is the limit, but you only pay for the number of city-networks that are actually monitored. You can change the maximum at any time by updating your monitor. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMCityNetworksMaximum.html">Choosing a city-network maximum value</a> in the <i>Amazon CloudWatch User Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateMonitor(ctx, operations.CreateMonitorRequest{
        RequestBody: operations.CreateMonitorRequestBody{
            ClientToken: sdk.String("nisi"),
            InternetMeasurementsLogDelivery: &operations.CreateMonitorRequestBodyInternetMeasurementsLogDelivery{
                S3Config: &shared.S3Config{
                    BucketName: sdk.String("recusandae"),
                    BucketPrefix: sdk.String("temporibus"),
                    LogDeliveryStatus: shared.LogDeliveryStatusEnumEnabled.ToPointer(),
                },
            },
            MaxCityNetworksToMonitor: sdk.Int64(337396),
            MonitorName: "veritatis",
            Resources: []string{
                "perferendis",
                "ipsam",
                "repellendus",
            },
            Tags: map[string]string{
                "quo": "odit",
                "at": "at",
                "maiores": "molestiae",
                "quod": "quod",
            },
            TrafficPercentageToMonitor: sdk.Int64(461479),
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("occaecati"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateMonitorOutput != nil {
        // handle response
    }
}
```

## DeleteMonitor

Deletes a monitor in Amazon CloudWatch Internet Monitor. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteMonitor(ctx, operations.DeleteMonitorRequest{
        MonitorName: "fugit",
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("optio"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("beatae"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteMonitorOutput != nil {
        // handle response
    }
}
```

## GetHealthEvent

<p>Gets information the Amazon CloudWatch Internet Monitor has created and stored about a health event for a specified monitor. This information includes the impacted locations, and all of the information related to the event by location.</p> <p>The information returned includes the performance, availability, and round-trip time impact, information about the network providers, the event type, and so on.</p> <p>Information rolled up at the global traffic level is also returned, including the impact type and total traffic impact.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetHealthEvent(ctx, operations.GetHealthEventRequest{
        EventID: "modi",
        MonitorName: "qui",
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetHealthEventOutput != nil {
        // handle response
    }
}
```

## GetMonitor

Gets information about a monitor in Amazon CloudWatch Internet Monitor based on a monitor name. The information returned includes the Amazon Resource Name (ARN), create time, modified time, resources included in the monitor, and status information.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetMonitor(ctx, operations.GetMonitorRequest{
        MonitorName: "ad",
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("laboriosam"),
        XAmzSignedHeaders: sdk.String("hic"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMonitorOutput != nil {
        // handle response
    }
}
```

## ListHealthEvents

<p>Lists all health events for a monitor in Amazon CloudWatch Internet Monitor. Returns all information for health events including the client location information the network cause and status, event start and end time, percentage of total traffic impacted, and status.</p> <note> <p>Health events that have start times during the time frame that is requested are not included in the list of health events.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListHealthEvents(ctx, operations.ListHealthEventsRequest{
        EndTime: types.MustTimeFromString("2020-12-15T09:45:44.943Z"),
        EventStatus: operations.ListHealthEventsEventStatusEnumActive.ToPointer(),
        MaxResults: sdk.Int64(359508),
        MonitorName: "iste",
        NextToken: sdk.String("iure"),
        StartTime: types.MustTimeFromString("2020-11-28T02:15:07.561Z"),
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("dolores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListHealthEventsOutput != nil {
        // handle response
    }
}
```

## ListMonitors

Lists all of your monitors for Amazon CloudWatch Internet Monitor and their statuses, along with the Amazon Resource Name (ARN) and name of each monitor.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListMonitors(ctx, operations.ListMonitorsRequest{
        MaxResults: sdk.Int64(210382),
        MonitorStatus: sdk.String("corporis"),
        NextToken: sdk.String("explicabo"),
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("nemo"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("accusantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMonitorsOutput != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists the tags for a resource. Tags are supported only for monitors in Amazon CloudWatch Internet Monitor.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ResourceArn: "iure",
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("culpa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceOutput != nil {
        // handle response
    }
}
```

## TagResource

<p>Adds a tag to a resource. Tags are supported only for monitors in Amazon CloudWatch Internet Monitor. You can add a maximum of 50 tags in Internet Monitor.</p> <p>A minimum of one tag is required for this call. It returns an error if you use the <code>TagResource</code> request with 0 tags.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            Tags: map[string]string{
                "repellat": "mollitia",
            },
        },
        ResourceArn: "occaecati",
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("velit"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("quia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceOutput != nil {
        // handle response
    }
}
```

## UntagResource

Removes a tag from a resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        ResourceArn: "quis",
        XAmzAlgorithm: sdk.String("vitae"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("animi"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("sequi"),
        TagKeys: []string{
            "ipsam",
            "id",
            "possimus",
            "aut",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceOutput != nil {
        // handle response
    }
}
```

## UpdateMonitor

<p>Updates a monitor. You can update a monitor to change the maximum number of city-networks (locations and ASNs or internet service providers), to add or remove resources, or to change the status of the monitor. Note that you can't change the name of a monitor.</p> <p>The city-network maximum that you choose is the limit, but you only pay for the number of city-networks that are actually monitored. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMCityNetworksMaximum.html">Choosing a city-network maximum value</a> in the <i>Amazon CloudWatch User Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateMonitor(ctx, operations.UpdateMonitorRequest{
        MonitorName: "quasi",
        RequestBody: operations.UpdateMonitorRequestBody{
            ClientToken: sdk.String("error"),
            InternetMeasurementsLogDelivery: &operations.UpdateMonitorRequestBodyInternetMeasurementsLogDelivery{
                S3Config: &shared.S3Config{
                    BucketName: sdk.String("temporibus"),
                    BucketPrefix: sdk.String("laborum"),
                    LogDeliveryStatus: shared.LogDeliveryStatusEnumEnabled.ToPointer(),
                },
            },
            MaxCityNetworksToMonitor: sdk.Int64(971945),
            ResourcesToAdd: []string{
                "vero",
                "nihil",
                "praesentium",
                "voluptatibus",
            },
            ResourcesToRemove: []string{
                "omnis",
            },
            Status: operations.UpdateMonitorRequestBodyStatusEnumActive.ToPointer(),
            TrafficPercentageToMonitor: sdk.Int64(739264),
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("doloremque"),
        XAmzCredential: sdk.String("reprehenderit"),
        XAmzDate: sdk.String("ut"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("corporis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateMonitorOutput != nil {
        // handle response
    }
}
```
