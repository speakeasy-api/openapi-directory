# SDK

## Overview

<p><fullname>Migration Hub Strategy Recommendations</fullname> <p>This API reference provides descriptions, syntax, and other details about each of the actions and data types for Migration Hub Strategy Recommendations (Strategy Recommendations). The topic for each action shows the API request parameters and the response. Alternatively, you can use one of the AWS SDKs to access an API that is tailored to the programming language or platform that you're using. For more information, see <a href="http://aws.amazon.com/tools/#SDKs">AWS SDKs</a>.</p></p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/migrationhub-strategy/>
### Available Operations

* [GetApplicationComponentDetails](#getapplicationcomponentdetails) -  Retrieves details about an application component. 
* [GetApplicationComponentStrategies](#getapplicationcomponentstrategies) -  Retrieves a list of all the recommended strategies and tools for an application component running on a server. 
* [GetAssessment](#getassessment) -  Retrieves the status of an on-going assessment. 
* [GetImportFileTask](#getimportfiletask) -  Retrieves the details about a specific import task. 
* [GetLatestAssessmentID](#getlatestassessmentid) - Retrieve the latest ID of a specific assessment task.
* [GetPortfolioPreferences](#getportfoliopreferences) -  Retrieves your migration and modernization preferences. 
* [GetPortfolioSummary](#getportfoliosummary) -  Retrieves overall summary including the number of servers to rehost and the overall number of anti-patterns. 
* [GetRecommendationReportDetails](#getrecommendationreportdetails) -  Retrieves detailed information about the specified recommendation report. 
* [GetServerDetails](#getserverdetails) -  Retrieves detailed information about a specified server. 
* [GetServerStrategies](#getserverstrategies) -  Retrieves recommended strategies and tools for the specified server. 
* [ListApplicationComponents](#listapplicationcomponents) -  Retrieves a list of all the application components (processes). 
* [ListCollectors](#listcollectors) -  Retrieves a list of all the installed collectors. 
* [ListImportFileTask](#listimportfiletask) -  Retrieves a list of all the imports performed. 
* [ListServers](#listservers) -  Returns a list of all the servers. 
* [PutPortfolioPreferences](#putportfoliopreferences) -  Saves the specified migration and modernization preferences. 
* [StartAssessment](#startassessment) -  Starts the assessment of an on-premises environment. 
* [StartImportFileTask](#startimportfiletask) -  Starts a file import. 
* [StartRecommendationReportGeneration](#startrecommendationreportgeneration) -  Starts generating a recommendation report. 
* [StopAssessment](#stopassessment) -  Stops the assessment of an on-premises environment. 
* [UpdateApplicationComponentConfig](#updateapplicationcomponentconfig) -  Updates the configuration of an application component. 
* [UpdateServerConfig](#updateserverconfig) -  Updates the configuration of the specified server. 

## GetApplicationComponentDetails

 Retrieves details about an application component. 

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
    res, err := s.SDK.GetApplicationComponentDetails(ctx, operations.GetApplicationComponentDetailsRequest{
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("debitis"),
        ApplicationComponentID: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetApplicationComponentDetailsResponse != nil {
        // handle response
    }
}
```

## GetApplicationComponentStrategies

 Retrieves a list of all the recommended strategies and tools for an application component running on a server. 

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
    res, err := s.SDK.GetApplicationComponentStrategies(ctx, operations.GetApplicationComponentStrategiesRequest{
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("minus"),
        XAmzSignature: sdk.String("placeat"),
        XAmzSignedHeaders: sdk.String("voluptatum"),
        ApplicationComponentID: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetApplicationComponentStrategiesResponse != nil {
        // handle response
    }
}
```

## GetAssessment

 Retrieves the status of an on-going assessment. 

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
    res, err := s.SDK.GetAssessment(ctx, operations.GetAssessmentRequest{
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("temporibus"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("veritatis"),
        ID: "a05dfc2d-df7c-4c78-8a1b-a928fc816742",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAssessmentResponse != nil {
        // handle response
    }
}
```

## GetImportFileTask

 Retrieves the details about a specific import task. 

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
    res, err := s.SDK.GetImportFileTask(ctx, operations.GetImportFileTaskRequest{
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        ID: "5929396f-ea75-496e-b10f-aaa2352c5955",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetImportFileTaskResponse != nil {
        // handle response
    }
}
```

## GetLatestAssessmentID

Retrieve the latest ID of a specific assessment task.

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
    res, err := s.SDK.GetLatestAssessmentID(ctx, operations.GetLatestAssessmentIDRequest{
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("doloribus"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLatestAssessmentIDResponse != nil {
        // handle response
    }
}
```

## GetPortfolioPreferences

 Retrieves your migration and modernization preferences. 

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
    res, err := s.SDK.GetPortfolioPreferences(ctx, operations.GetPortfolioPreferencesRequest{
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("culpa"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("repellat"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("occaecati"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPortfolioPreferencesResponse != nil {
        // handle response
    }
}
```

## GetPortfolioSummary

 Retrieves overall summary including the number of servers to rehost and the overall number of anti-patterns. 

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
    res, err := s.SDK.GetPortfolioSummary(ctx, operations.GetPortfolioSummaryRequest{
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

    if res.GetPortfolioSummaryResponse != nil {
        // handle response
    }
}
```

## GetRecommendationReportDetails

 Retrieves detailed information about the specified recommendation report. 

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
    res, err := s.SDK.GetRecommendationReportDetails(ctx, operations.GetRecommendationReportDetailsRequest{
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("vitae"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("animi"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("quo"),
        ID: "3f5ad019-da1f-4fe7-8f09-7b0074f15471",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRecommendationReportDetailsResponse != nil {
        // handle response
    }
}
```

## GetServerDetails

 Retrieves detailed information about a specified server. 

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
    res, err := s.SDK.GetServerDetails(ctx, operations.GetServerDetailsRequest{
        XAmzAlgorithm: sdk.String("harum"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("repudiandae"),
        XAmzSignature: sdk.String("quae"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        MaxResults: sdk.Int64(692472),
        NextToken: sdk.String("molestias"),
        ServerID: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetServerDetailsResponse != nil {
        // handle response
    }
}
```

## GetServerStrategies

 Retrieves recommended strategies and tools for the specified server. 

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
    res, err := s.SDK.GetServerStrategies(ctx, operations.GetServerStrategiesRequest{
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("rem"),
        XAmzSecurityToken: sdk.String("voluptates"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
        ServerID: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetServerStrategiesResponse != nil {
        // handle response
    }
}
```

## ListApplicationComponents

 Retrieves a list of all the application components (processes). 

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
    res, err := s.SDK.ListApplicationComponents(ctx, operations.ListApplicationComponentsRequest{
        RequestBody: operations.ListApplicationComponentsRequestBody{
            ApplicationComponentCriteria: operations.ListApplicationComponentsRequestBodyApplicationComponentCriteriaEnumNotDefined.ToPointer(),
            FilterValue: sdk.String("itaque"),
            GroupIDFilter: []shared.Group{
                shared.Group{
                    Name: shared.GroupNameEnumExternalID.ToPointer(),
                    Value: sdk.String("consequatur"),
                },
                shared.Group{
                    Name: shared.GroupNameEnumExternalSourceType.ToPointer(),
                    Value: sdk.String("quibusdam"),
                },
            },
            MaxResults: sdk.Int64(131797),
            NextToken: sdk.String("deserunt"),
            Sort: operations.ListApplicationComponentsRequestBodySortEnumDesc.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("quos"),
        MaxResults: sdk.String("perferendis"),
        NextToken: sdk.String("magni"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListApplicationComponentsResponse != nil {
        // handle response
    }
}
```

## ListCollectors

 Retrieves a list of all the installed collectors. 

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
    res, err := s.SDK.ListCollectors(ctx, operations.ListCollectorsRequest{
        XAmzAlgorithm: sdk.String("assumenda"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("tempora"),
        MaxResults: sdk.Int64(703737),
        NextToken: sdk.String("tempore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCollectorsResponse != nil {
        // handle response
    }
}
```

## ListImportFileTask

 Retrieves a list of all the imports performed. 

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
    res, err := s.SDK.ListImportFileTask(ctx, operations.ListImportFileTaskRequest{
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("non"),
        XAmzSecurityToken: sdk.String("eligendi"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        MaxResults: sdk.Int64(592042),
        NextToken: sdk.String("necessitatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListImportFileTaskResponse != nil {
        // handle response
    }
}
```

## ListServers

 Returns a list of all the servers. 

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
    res, err := s.SDK.ListServers(ctx, operations.ListServersRequest{
        RequestBody: operations.ListServersRequestBody{
            FilterValue: sdk.String("sint"),
            GroupIDFilter: []shared.Group{
                shared.Group{
                    Name: shared.GroupNameEnumExternalID.ToPointer(),
                    Value: sdk.String("debitis"),
                },
                shared.Group{
                    Name: shared.GroupNameEnumExternalSourceType.ToPointer(),
                    Value: sdk.String("dolorum"),
                },
                shared.Group{
                    Name: shared.GroupNameEnumExternalID.ToPointer(),
                    Value: sdk.String("in"),
                },
            },
            MaxResults: sdk.Int64(846409),
            NextToken: sdk.String("maiores"),
            ServerCriteria: operations.ListServersRequestBodyServerCriteriaEnumServerID.ToPointer(),
            Sort: operations.ListServersRequestBodySortEnumAsc.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("facere"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        MaxResults: sdk.String("non"),
        NextToken: sdk.String("occaecati"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServersResponse != nil {
        // handle response
    }
}
```

## PutPortfolioPreferences

 Saves the specified migration and modernization preferences. 

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
    res, err := s.SDK.PutPortfolioPreferences(ctx, operations.PutPortfolioPreferencesRequest{
        RequestBody: operations.PutPortfolioPreferencesRequestBody{
            ApplicationMode: operations.PutPortfolioPreferencesRequestBodyApplicationModeEnumAll.ToPointer(),
            ApplicationPreferences: &operations.PutPortfolioPreferencesRequestBodyApplicationPreferences{
                ManagementPreference: &shared.ManagementPreference{
                    AwsManagedResources: &shared.AwsManagedResources{
                        TargetDestination: []shared.AwsManagedTargetDestinationEnum{
                            shared.AwsManagedTargetDestinationEnumAwsFargate,
                            shared.AwsManagedTargetDestinationEnumAwsFargate,
                            shared.AwsManagedTargetDestinationEnumAwsElasticBeanStalk,
                            shared.AwsManagedTargetDestinationEnumAwsFargate,
                        },
                    },
                    NoPreference: &shared.NoManagementPreference{
                        TargetDestination: []shared.NoPreferenceTargetDestinationEnum{
                            shared.NoPreferenceTargetDestinationEnumAmazonElasticCloudComputeEc2,
                            shared.NoPreferenceTargetDestinationEnumAmazonElasticCloudComputeEc2,
                            shared.NoPreferenceTargetDestinationEnumAmazonElasticKubernetesServiceEks,
                        },
                    },
                    SelfManageResources: &shared.SelfManageResources{
                        TargetDestination: []shared.SelfManageTargetDestinationEnum{
                            shared.SelfManageTargetDestinationEnumAmazonElasticContainerServiceEcs,
                        },
                    },
                },
            },
            DatabasePreferences: &operations.PutPortfolioPreferencesRequestBodyDatabasePreferences{
                DatabaseManagementPreference: shared.DatabaseManagementPreferenceEnumSelfManage.ToPointer(),
                DatabaseMigrationPreference: &shared.DatabaseMigrationPreference{
                    Heterogeneous: &shared.Heterogeneous{
                        TargetDatabaseEngine: []shared.HeterogeneousTargetDatabaseEngineEnum{
                            shared.HeterogeneousTargetDatabaseEngineEnumMariaDb,
                            shared.HeterogeneousTargetDatabaseEngineEnumMariaDb,
                        },
                    },
                    Homogeneous: &shared.Homogeneous{
                        TargetDatabaseEngine: []shared.HomogeneousTargetDatabaseEngineEnum{
                            shared.HomogeneousTargetDatabaseEngineEnumNoneSpecified,
                            shared.HomogeneousTargetDatabaseEngineEnumNoneSpecified,
                        },
                    },
                    NoPreference: &shared.NoDatabaseMigrationPreference{
                        TargetDatabaseEngine: []shared.TargetDatabaseEngineEnum{
                            shared.TargetDatabaseEngineEnumMicrosoftSQLServer,
                        },
                    },
                },
            },
            PrioritizeBusinessGoals: &operations.PutPortfolioPreferencesRequestBodyPrioritizeBusinessGoals{
                BusinessGoals: &shared.BusinessGoals{
                    LicenseCostReduction: sdk.Int64(301575),
                    ModernizeInfrastructureWithCloudNativeTechnologies: sdk.Int64(716075),
                    ReduceOperationalOverheadWithManagedServices: sdk.Int64(660174),
                    SpeedOfMigration: sdk.Int64(287991),
                },
            },
        },
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutPortfolioPreferencesResponse != nil {
        // handle response
    }
}
```

## StartAssessment

 Starts the assessment of an on-premises environment. 

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
    res, err := s.SDK.StartAssessment(ctx, operations.StartAssessmentRequest{
        RequestBody: operations.StartAssessmentRequestBody{
            AssessmentTargets: []shared.AssessmentTarget{
                shared.AssessmentTarget{
                    Condition: shared.ConditionEnumNotEquals,
                    Name: "Miriam Hermann",
                    Values: []string{
                        "accusantium",
                        "mollitia",
                        "reiciendis",
                    },
                },
            },
            S3bucketForAnalysisData: sdk.String("mollitia"),
            S3bucketForReportData: sdk.String("ad"),
        },
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("iure"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartAssessmentResponse != nil {
        // handle response
    }
}
```

## StartImportFileTask

 Starts a file import. 

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
    res, err := s.SDK.StartImportFileTask(ctx, operations.StartImportFileTaskRequest{
        RequestBody: operations.StartImportFileTaskRequestBody{
            S3Bucket: "doloribus",
            DataSourceType: operations.StartImportFileTaskRequestBodyDataSourceTypeEnumImport.ToPointer(),
            GroupID: []shared.Group{
                shared.Group{
                    Name: shared.GroupNameEnumExternalSourceType.ToPointer(),
                    Value: sdk.String("deleniti"),
                },
                shared.Group{
                    Name: shared.GroupNameEnumExternalSourceType.ToPointer(),
                    Value: sdk.String("in"),
                },
            },
            Name: "Diane VonRueden",
            S3bucketForReportData: sdk.String("nihil"),
            S3key: "repellat",
        },
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("praesentium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartImportFileTaskResponse != nil {
        // handle response
    }
}
```

## StartRecommendationReportGeneration

 Starts generating a recommendation report. 

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
    res, err := s.SDK.StartRecommendationReportGeneration(ctx, operations.StartRecommendationReportGenerationRequest{
        RequestBody: operations.StartRecommendationReportGenerationRequestBody{
            GroupIDFilter: []shared.Group{
                shared.Group{
                    Name: shared.GroupNameEnumExternalID.ToPointer(),
                    Value: sdk.String("sunt"),
                },
                shared.Group{
                    Name: shared.GroupNameEnumExternalSourceType.ToPointer(),
                    Value: sdk.String("illum"),
                },
                shared.Group{
                    Name: shared.GroupNameEnumExternalSourceType.ToPointer(),
                    Value: sdk.String("maxime"),
                },
            },
            OutputFormat: operations.StartRecommendationReportGenerationRequestBodyOutputFormatEnumExcel.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("odit"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("quidem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartRecommendationReportGenerationResponse != nil {
        // handle response
    }
}
```

## StopAssessment

 Stops the assessment of an on-premises environment. 

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
    res, err := s.SDK.StopAssessment(ctx, operations.StopAssessmentRequest{
        RequestBody: operations.StopAssessmentRequestBody{
            AssessmentID: "ipsam",
        },
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("autem"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("eaque"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopAssessmentResponse != nil {
        // handle response
    }
}
```

## UpdateApplicationComponentConfig

 Updates the configuration of an application component. 

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
    res, err := s.SDK.UpdateApplicationComponentConfig(ctx, operations.UpdateApplicationComponentConfigRequest{
        RequestBody: operations.UpdateApplicationComponentConfigRequestBody{
            AppType: operations.UpdateApplicationComponentConfigRequestBodyAppTypeEnumDotNetFramework.ToPointer(),
            ApplicationComponentID: "fugiat",
            ConfigureOnly: sdk.Bool(false),
            InclusionStatus: operations.UpdateApplicationComponentConfigRequestBodyInclusionStatusEnumExcludeFromAssessment.ToPointer(),
            SecretsManagerKey: sdk.String("aut"),
            SourceCodeList: []shared.SourceCode{
                shared.SourceCode{
                    Location: sdk.String("corporis"),
                    ProjectName: sdk.String("hic"),
                    SourceVersion: sdk.String("libero"),
                    VersionControl: shared.VersionControlEnumAzureDevopsGit.ToPointer(),
                },
                shared.SourceCode{
                    Location: sdk.String("dolores"),
                    ProjectName: sdk.String("quis"),
                    SourceVersion: sdk.String("totam"),
                    VersionControl: shared.VersionControlEnumGithubEnterprise.ToPointer(),
                },
                shared.SourceCode{
                    Location: sdk.String("eaque"),
                    ProjectName: sdk.String("quis"),
                    SourceVersion: sdk.String("nesciunt"),
                    VersionControl: shared.VersionControlEnumGithub.ToPointer(),
                },
                shared.SourceCode{
                    Location: sdk.String("perferendis"),
                    ProjectName: sdk.String("dolores"),
                    SourceVersion: sdk.String("minus"),
                    VersionControl: shared.VersionControlEnumGithubEnterprise.ToPointer(),
                },
            },
            StrategyOption: &operations.UpdateApplicationComponentConfigRequestBodyStrategyOption{
                IsPreferred: sdk.Bool(false),
                Strategy: shared.StrategyEnumRetirement.ToPointer(),
                TargetDestination: shared.TargetDestinationEnumAmazonRelationalDatabaseService.ToPointer(),
                ToolName: shared.TransformationToolNameEnumWindowsWebApplicationMigrationAssistant.ToPointer(),
            },
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("perspiciatis"),
        XAmzSignature: sdk.String("voluptatem"),
        XAmzSignedHeaders: sdk.String("porro"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateApplicationComponentConfigResponse != nil {
        // handle response
    }
}
```

## UpdateServerConfig

 Updates the configuration of the specified server. 

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
    res, err := s.SDK.UpdateServerConfig(ctx, operations.UpdateServerConfigRequest{
        RequestBody: operations.UpdateServerConfigRequestBody{
            ServerID: "consequuntur",
            StrategyOption: &operations.UpdateServerConfigRequestBodyStrategyOption{
                IsPreferred: sdk.Bool(false),
                Strategy: shared.StrategyEnumReplatform.ToPointer(),
                TargetDestination: shared.TargetDestinationEnumAmazonRelationalDatabaseServiceOnMySQL.ToPointer(),
                ToolName: shared.TransformationToolNameEnumApp2Container.ToPointer(),
            },
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("rerum"),
        XAmzCredential: sdk.String("adipisci"),
        XAmzDate: sdk.String("asperiores"),
        XAmzSecurityToken: sdk.String("earum"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("iste"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateServerConfigResponse != nil {
        // handle response
    }
}
```
