# SDK

## Overview

<fullname>Amazon CloudWatch Application Insights</fullname> <p> Amazon CloudWatch Application Insights is a service that helps you detect common problems with your applications. It enables you to pinpoint the source of issues in your applications (built with technologies such as Microsoft IIS, .NET, and Microsoft SQL Server), by providing key insights into detected problems.</p> <p>After you onboard your application, CloudWatch Application Insights identifies, recommends, and sets up metrics and logs. It continuously analyzes and correlates your metrics and logs for unusual behavior to surface actionable problems with your application. For example, if your application is slow and unresponsive and leading to HTTP 500 errors in your Application Load Balancer (ALB), Application Insights informs you that a memory pressure problem with your SQL Server database is occurring. It bases this analysis on impactful metrics and log errors. </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/applicationinsights/>
### Available Operations

* [CreateApplication](#createapplication) - Adds an application that is created from a resource group.
* [CreateComponent](#createcomponent) - Creates a custom component by grouping similar standalone instances to monitor.
* [CreateLogPattern](#createlogpattern) - Adds an log pattern to a <code>LogPatternSet</code>.
* [DeleteApplication](#deleteapplication) - Removes the specified application from monitoring. Does not delete the application.
* [DeleteComponent](#deletecomponent) - Ungroups a custom component. When you ungroup custom components, all applicable monitors that are set up for the component are removed and the instances revert to their standalone status.
* [DeleteLogPattern](#deletelogpattern) - Removes the specified log pattern from a <code>LogPatternSet</code>.
* [DescribeApplication](#describeapplication) - Describes the application.
* [DescribeComponent](#describecomponent) - Describes a component and lists the resources that are grouped together in a component.
* [DescribeComponentConfiguration](#describecomponentconfiguration) - Describes the monitoring configuration of the component.
* [DescribeComponentConfigurationRecommendation](#describecomponentconfigurationrecommendation) - Describes the recommended monitoring configuration of the component.
* [DescribeLogPattern](#describelogpattern) - Describe a specific log pattern from a <code>LogPatternSet</code>.
* [DescribeObservation](#describeobservation) - Describes an anomaly or error with the application.
* [DescribeProblem](#describeproblem) - Describes an application problem.
* [DescribeProblemObservations](#describeproblemobservations) - Describes the anomalies or errors associated with the problem.
* [ListApplications](#listapplications) - Lists the IDs of the applications that you are monitoring. 
* [ListComponents](#listcomponents) - Lists the auto-grouped, standalone, and custom components of the application.
* [ListConfigurationHistory](#listconfigurationhistory) - <p> Lists the INFO, WARN, and ERROR events for periodic configuration updates performed by Application Insights. Examples of events represented are: </p> <ul> <li> <p>INFO: creating a new alarm or updating an alarm threshold.</p> </li> <li> <p>WARN: alarm not created due to insufficient data points used to predict thresholds.</p> </li> <li> <p>ERROR: alarm not created due to permission errors or exceeding quotas. </p> </li> </ul>
* [ListLogPatternSets](#listlogpatternsets) - Lists the log pattern sets in the specific application.
* [ListLogPatterns](#listlogpatterns) - Lists the log patterns in the specific log <code>LogPatternSet</code>.
* [ListProblems](#listproblems) - Lists the problems with your application.
* [ListTagsForResource](#listtagsforresource) - Retrieve a list of the tags (keys and values) that are associated with a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.
* [TagResource](#tagresource) - <p>Add one or more tags (keys and values) to a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Tags can help you categorize and manage application in different ways, such as by purpose, owner, environment, or other criteria. </p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>
* [UntagResource](#untagresource) - Remove one or more tags (keys and values) from a specified application.
* [UpdateApplication](#updateapplication) - Updates the application.
* [UpdateComponent](#updatecomponent) - Updates the custom component name and/or the list of resources that make up the component.
* [UpdateComponentConfiguration](#updatecomponentconfiguration) - Updates the monitoring configurations for the component. The configuration input parameter is an escaped JSON of the configuration and should match the schema of what is returned by <code>DescribeComponentConfigurationRecommendation</code>. 
* [UpdateLogPattern](#updatelogpattern) - Adds a log pattern to a <code>LogPatternSet</code>.

## CreateApplication

Adds an application that is created from a resource group.

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
    res, err := s.SDK.CreateApplication(ctx, operations.CreateApplicationRequest{
        CreateApplicationRequest: shared.CreateApplicationRequest{
            AutoConfigEnabled: sdk.Bool(false),
            AutoCreate: sdk.Bool(false),
            CWEMonitorEnabled: sdk.Bool(false),
            GroupingType: shared.GroupingTypeEnumAccountBased.ToPointer(),
            OpsCenterEnabled: sdk.Bool(false),
            OpsItemSNSTopicArn: sdk.String("delectus"),
            ResourceGroupName: sdk.String("tempora"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "molestiae",
                    Value: "minus",
                },
                shared.Tag{
                    Key: "placeat",
                    Value: "voluptatum",
                },
            },
        },
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("nisi"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("temporibus"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("quis"),
        XAmzTarget: operations.CreateApplicationXAmzTargetEnumEc2WindowsBarleyServiceCreateApplication,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateApplicationResponse != nil {
        // handle response
    }
}
```

## CreateComponent

Creates a custom component by grouping similar standalone instances to monitor.

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
    res, err := s.SDK.CreateComponent(ctx, operations.CreateComponentRequest{
        CreateComponentRequest: shared.CreateComponentRequest{
            ComponentName: "veritatis",
            ResourceGroupName: "deserunt",
            ResourceList: []string{
                "ipsam",
            },
        },
        XAmzAlgorithm: sdk.String("repellendus"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.CreateComponentXAmzTargetEnumEc2WindowsBarleyServiceCreateComponent,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateComponentResponse != nil {
        // handle response
    }
}
```

## CreateLogPattern

Adds an log pattern to a <code>LogPatternSet</code>.

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
    res, err := s.SDK.CreateLogPattern(ctx, operations.CreateLogPatternRequest{
        CreateLogPatternRequest: shared.CreateLogPatternRequest{
            Pattern: "molestiae",
            PatternName: "quod",
            PatternSetName: "quod",
            Rank: 461479,
            ResourceGroupName: "totam",
        },
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("fugit"),
        XAmzTarget: operations.CreateLogPatternXAmzTargetEnumEc2WindowsBarleyServiceCreateLogPattern,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLogPatternResponse != nil {
        // handle response
    }
}
```

## DeleteApplication

Removes the specified application from monitoring. Does not delete the application.

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
    res, err := s.SDK.DeleteApplication(ctx, operations.DeleteApplicationRequest{
        DeleteApplicationRequest: shared.DeleteApplicationRequest{
            ResourceGroupName: "deleniti",
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("optio"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("beatae"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("modi"),
        XAmzTarget: operations.DeleteApplicationXAmzTargetEnumEc2WindowsBarleyServiceDeleteApplication,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteApplicationResponse != nil {
        // handle response
    }
}
```

## DeleteComponent

Ungroups a custom component. When you ungroup custom components, all applicable monitors that are set up for the component are removed and the instances revert to their standalone status.

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
    res, err := s.SDK.DeleteComponent(ctx, operations.DeleteComponentRequest{
        DeleteComponentRequest: shared.DeleteComponentRequest{
            ComponentName: "qui",
            ResourceGroupName: "impedit",
        },
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("ad"),
        XAmzTarget: operations.DeleteComponentXAmzTargetEnumEc2WindowsBarleyServiceDeleteComponent,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteComponentResponse != nil {
        // handle response
    }
}
```

## DeleteLogPattern

Removes the specified log pattern from a <code>LogPatternSet</code>.

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
    res, err := s.SDK.DeleteLogPattern(ctx, operations.DeleteLogPatternRequest{
        DeleteLogPatternRequest: shared.DeleteLogPatternRequest{
            PatternName: "natus",
            PatternSetName: "sed",
            ResourceGroupName: "iste",
        },
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("laboriosam"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("in"),
        XAmzTarget: operations.DeleteLogPatternXAmzTargetEnumEc2WindowsBarleyServiceDeleteLogPattern,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteLogPatternResponse != nil {
        // handle response
    }
}
```

## DescribeApplication

Describes the application.

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
    res, err := s.SDK.DescribeApplication(ctx, operations.DescribeApplicationRequest{
        DescribeApplicationRequest: shared.DescribeApplicationRequest{
            ResourceGroupName: "corporis",
        },
        XAmzAlgorithm: sdk.String("iste"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        XAmzTarget: operations.DescribeApplicationXAmzTargetEnumEc2WindowsBarleyServiceDescribeApplication,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeApplicationResponse != nil {
        // handle response
    }
}
```

## DescribeComponent

Describes a component and lists the resources that are grouped together in a component.

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
    res, err := s.SDK.DescribeComponent(ctx, operations.DescribeComponentRequest{
        DescribeComponentRequest: shared.DescribeComponentRequest{
            ComponentName: "est",
            ResourceGroupName: "mollitia",
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("enim"),
        XAmzTarget: operations.DescribeComponentXAmzTargetEnumEc2WindowsBarleyServiceDescribeComponent,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeComponentResponse != nil {
        // handle response
    }
}
```

## DescribeComponentConfiguration

Describes the monitoring configuration of the component.

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
    res, err := s.SDK.DescribeComponentConfiguration(ctx, operations.DescribeComponentConfigurationRequest{
        DescribeComponentConfigurationRequest: shared.DescribeComponentConfigurationRequest{
            ComponentName: "omnis",
            ResourceGroupName: "nemo",
        },
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("doloribus"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        XAmzTarget: operations.DescribeComponentConfigurationXAmzTargetEnumEc2WindowsBarleyServiceDescribeComponentConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeComponentConfigurationResponse != nil {
        // handle response
    }
}
```

## DescribeComponentConfigurationRecommendation

Describes the recommended monitoring configuration of the component.

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
    res, err := s.SDK.DescribeComponentConfigurationRecommendation(ctx, operations.DescribeComponentConfigurationRecommendationRequest{
        DescribeComponentConfigurationRecommendationRequest: shared.DescribeComponentConfigurationRecommendationRequest{
            ComponentName: "architecto",
            ResourceGroupName: "mollitia",
            Tier: shared.TierEnumDotNetWorker,
        },
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("repellat"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("commodi"),
        XAmzTarget: operations.DescribeComponentConfigurationRecommendationXAmzTargetEnumEc2WindowsBarleyServiceDescribeComponentConfigurationRecommendation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeComponentConfigurationRecommendationResponse != nil {
        // handle response
    }
}
```

## DescribeLogPattern

Describe a specific log pattern from a <code>LogPatternSet</code>.

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
    res, err := s.SDK.DescribeLogPattern(ctx, operations.DescribeLogPatternRequest{
        DescribeLogPatternRequest: shared.DescribeLogPatternRequest{
            PatternName: "quam",
            PatternSetName: "molestiae",
            ResourceGroupName: "velit",
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("quia"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("vitae"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("animi"),
        XAmzSignedHeaders: sdk.String("enim"),
        XAmzTarget: operations.DescribeLogPatternXAmzTargetEnumEc2WindowsBarleyServiceDescribeLogPattern,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeLogPatternResponse != nil {
        // handle response
    }
}
```

## DescribeObservation

Describes an anomaly or error with the application.

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
    res, err := s.SDK.DescribeObservation(ctx, operations.DescribeObservationRequest{
        DescribeObservationRequest: shared.DescribeObservationRequest{
            ObservationID: "odit",
        },
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("sequi"),
        XAmzCredential: sdk.String("tenetur"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("possimus"),
        XAmzSignedHeaders: sdk.String("aut"),
        XAmzTarget: operations.DescribeObservationXAmzTargetEnumEc2WindowsBarleyServiceDescribeObservation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeObservationResponse != nil {
        // handle response
    }
}
```

## DescribeProblem

Describes an application problem.

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
    res, err := s.SDK.DescribeProblem(ctx, operations.DescribeProblemRequest{
        DescribeProblemRequest: shared.DescribeProblemRequest{
            ProblemID: "quasi",
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("temporibus"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("vero"),
        XAmzTarget: operations.DescribeProblemXAmzTargetEnumEc2WindowsBarleyServiceDescribeProblem,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeProblemResponse != nil {
        // handle response
    }
}
```

## DescribeProblemObservations

Describes the anomalies or errors associated with the problem.

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
    res, err := s.SDK.DescribeProblemObservations(ctx, operations.DescribeProblemObservationsRequest{
        DescribeProblemObservationsRequest: shared.DescribeProblemObservationsRequest{
            ProblemID: "nihil",
        },
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        XAmzTarget: operations.DescribeProblemObservationsXAmzTargetEnumEc2WindowsBarleyServiceDescribeProblemObservations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeProblemObservationsResponse != nil {
        // handle response
    }
}
```

## ListApplications

Lists the IDs of the applications that you are monitoring. 

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
    res, err := s.SDK.ListApplications(ctx, operations.ListApplicationsRequest{
        ListApplicationsRequest: shared.ListApplicationsRequest{
            MaxResults: sdk.Int64(39187),
            NextToken: sdk.String("reprehenderit"),
        },
        MaxResults: sdk.String("ut"),
        NextToken: sdk.String("maiores"),
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("harum"),
        XAmzSignedHeaders: sdk.String("enim"),
        XAmzTarget: operations.ListApplicationsXAmzTargetEnumEc2WindowsBarleyServiceListApplications,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListApplicationsResponse != nil {
        // handle response
    }
}
```

## ListComponents

Lists the auto-grouped, standalone, and custom components of the application.

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
    res, err := s.SDK.ListComponents(ctx, operations.ListComponentsRequest{
        ListComponentsRequest: shared.ListComponentsRequest{
            MaxResults: sdk.Int64(880476),
            NextToken: sdk.String("commodi"),
            ResourceGroupName: "repudiandae",
        },
        MaxResults: sdk.String("quae"),
        NextToken: sdk.String("ipsum"),
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("molestias"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("rem"),
        XAmzTarget: operations.ListComponentsXAmzTargetEnumEc2WindowsBarleyServiceListComponents,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListComponentsResponse != nil {
        // handle response
    }
}
```

## ListConfigurationHistory

<p> Lists the INFO, WARN, and ERROR events for periodic configuration updates performed by Application Insights. Examples of events represented are: </p> <ul> <li> <p>INFO: creating a new alarm or updating an alarm threshold.</p> </li> <li> <p>WARN: alarm not created due to insufficient data points used to predict thresholds.</p> </li> <li> <p>ERROR: alarm not created due to permission errors or exceeding quotas. </p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListConfigurationHistory(ctx, operations.ListConfigurationHistoryRequest{
        ListConfigurationHistoryRequest: shared.ListConfigurationHistoryRequest{
            EndTime: types.MustTimeFromString("2022-09-20T03:14:35.704Z"),
            EventStatus: shared.ConfigurationEventStatusEnumError.ToPointer(),
            MaxResults: sdk.Int64(575947),
            NextToken: sdk.String("veritatis"),
            ResourceGroupName: sdk.String("itaque"),
            StartTime: types.MustTimeFromString("2022-09-06T17:20:08.756Z"),
        },
        MaxResults: sdk.String("consequatur"),
        NextToken: sdk.String("est"),
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("quibusdam"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("modi"),
        XAmzTarget: operations.ListConfigurationHistoryXAmzTargetEnumEc2WindowsBarleyServiceListConfigurationHistory,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConfigurationHistoryResponse != nil {
        // handle response
    }
}
```

## ListLogPatternSets

Lists the log pattern sets in the specific application.

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
    res, err := s.SDK.ListLogPatternSets(ctx, operations.ListLogPatternSetsRequest{
        ListLogPatternSetsRequest: shared.ListLogPatternSetsRequest{
            MaxResults: sdk.Int64(183191),
            NextToken: sdk.String("aliquid"),
            ResourceGroupName: "cupiditate",
        },
        MaxResults: sdk.String("quos"),
        NextToken: sdk.String("perferendis"),
        XAmzAlgorithm: sdk.String("magni"),
        XAmzContentSha256: sdk.String("assumenda"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("alias"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        XAmzTarget: operations.ListLogPatternSetsXAmzTargetEnumEc2WindowsBarleyServiceListLogPatternSets,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLogPatternSetsResponse != nil {
        // handle response
    }
}
```

## ListLogPatterns

Lists the log patterns in the specific log <code>LogPatternSet</code>.

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
    res, err := s.SDK.ListLogPatterns(ctx, operations.ListLogPatternsRequest{
        ListLogPatternsRequest: shared.ListLogPatternsRequest{
            MaxResults: sdk.Int64(270008),
            NextToken: sdk.String("facilis"),
            PatternSetName: sdk.String("tempore"),
            ResourceGroupName: "labore",
        },
        MaxResults: sdk.String("delectus"),
        NextToken: sdk.String("eum"),
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("eligendi"),
        XAmzCredential: sdk.String("sint"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("sint"),
        XAmzTarget: operations.ListLogPatternsXAmzTargetEnumEc2WindowsBarleyServiceListLogPatterns,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLogPatternsResponse != nil {
        // handle response
    }
}
```

## ListProblems

Lists the problems with your application.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListProblems(ctx, operations.ListProblemsRequest{
        ListProblemsRequest: shared.ListProblemsRequest{
            ComponentName: sdk.String("officia"),
            EndTime: types.MustTimeFromString("2022-02-09T13:58:59.361Z"),
            MaxResults: sdk.Int64(952749),
            NextToken: sdk.String("dolorum"),
            ResourceGroupName: sdk.String("in"),
            StartTime: types.MustTimeFromString("2022-02-26T01:27:36.152Z"),
        },
        MaxResults: sdk.String("maiores"),
        NextToken: sdk.String("rerum"),
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("facere"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("laborum"),
        XAmzTarget: operations.ListProblemsXAmzTargetEnumEc2WindowsBarleyServiceListProblems,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListProblemsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Retrieve a list of the tags (keys and values) that are associated with a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.

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
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ListTagsForResourceRequest: shared.ListTagsForResourceRequest{
            ResourceARN: "accusamus",
        },
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumEc2WindowsBarleyServiceListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## TagResource

<p>Add one or more tags (keys and values) to a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Tags can help you categorize and manage application in different ways, such as by purpose, owner, environment, or other criteria. </p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>

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
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        TagResourceRequest: shared.TagResourceRequest{
            ResourceARN: "nam",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "blanditiis",
                    Value: "deleniti",
                },
                shared.Tag{
                    Key: "sapiente",
                    Value: "amet",
                },
                shared.Tag{
                    Key: "deserunt",
                    Value: "nisi",
                },
            },
        },
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("magnam"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumEc2WindowsBarleyServiceTagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

Remove one or more tags (keys and values) from a specified application.

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
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceRequest: shared.UntagResourceRequest{
            ResourceARN: "distinctio",
            TagKeys: []string{
                "labore",
                "labore",
                "suscipit",
            },
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("magnam"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumEc2WindowsBarleyServiceUntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateApplication

Updates the application.

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
    res, err := s.SDK.UpdateApplication(ctx, operations.UpdateApplicationRequest{
        UpdateApplicationRequest: shared.UpdateApplicationRequest{
            AutoConfigEnabled: sdk.Bool(false),
            CWEMonitorEnabled: sdk.Bool(false),
            OpsCenterEnabled: sdk.Bool(false),
            OpsItemSNSTopicArn: sdk.String("et"),
            RemoveSNSTopic: sdk.Bool(false),
            ResourceGroupName: "excepturi",
        },
        XAmzAlgorithm: sdk.String("ullam"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        XAmzTarget: operations.UpdateApplicationXAmzTargetEnumEc2WindowsBarleyServiceUpdateApplication,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateApplicationResponse != nil {
        // handle response
    }
}
```

## UpdateComponent

Updates the custom component name and/or the list of resources that make up the component.

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
    res, err := s.SDK.UpdateComponent(ctx, operations.UpdateComponentRequest{
        UpdateComponentRequest: shared.UpdateComponentRequest{
            ComponentName: "mollitia",
            NewComponentName: sdk.String("ad"),
            ResourceGroupName: "eum",
            ResourceList: []string{
                "necessitatibus",
            },
        },
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("doloribus"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("eius"),
        XAmzTarget: operations.UpdateComponentXAmzTargetEnumEc2WindowsBarleyServiceUpdateComponent,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateComponentResponse != nil {
        // handle response
    }
}
```

## UpdateComponentConfiguration

Updates the monitoring configurations for the component. The configuration input parameter is an escaped JSON of the configuration and should match the schema of what is returned by <code>DescribeComponentConfigurationRecommendation</code>. 

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
    res, err := s.SDK.UpdateComponentConfiguration(ctx, operations.UpdateComponentConfigurationRequest{
        UpdateComponentConfigurationRequest: shared.UpdateComponentConfigurationRequest{
            AutoConfigEnabled: sdk.Bool(false),
            ComponentConfiguration: sdk.String("maxime"),
            ComponentName: "deleniti",
            Monitor: sdk.Bool(false),
            ResourceGroupName: "facilis",
            Tier: shared.TierEnumMysql.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("expedita"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("repellat"),
        XAmzTarget: operations.UpdateComponentConfigurationXAmzTargetEnumEc2WindowsBarleyServiceUpdateComponentConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateComponentConfigurationResponse != nil {
        // handle response
    }
}
```

## UpdateLogPattern

Adds a log pattern to a <code>LogPatternSet</code>.

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
    res, err := s.SDK.UpdateLogPattern(ctx, operations.UpdateLogPatternRequest{
        UpdateLogPatternRequest: shared.UpdateLogPatternRequest{
            Pattern: sdk.String("quibusdam"),
            PatternName: "sed",
            PatternSetName: "saepe",
            Rank: sdk.Int64(868126),
            ResourceGroupName: "accusantium",
        },
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("magni"),
        XAmzSecurityToken: sdk.String("sunt"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("illum"),
        XAmzTarget: operations.UpdateLogPatternXAmzTargetEnumEc2WindowsBarleyServiceUpdateLogPattern,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateLogPatternResponse != nil {
        // handle response
    }
}
```
