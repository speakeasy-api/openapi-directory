# SDK

## Overview

Provides APIs for creating and managing SageMaker geospatial resources.

Amazon Web Services documentation
<https://docs.aws.amazon.com/sagemaker-geospatial/>
### Available Operations

* [DeleteEarthObservationJob](#deleteearthobservationjob) - Use this operation to delete an Earth Observation job.
* [DeleteVectorEnrichmentJob](#deletevectorenrichmentjob) - Use this operation to delete a Vector Enrichment job.
* [ExportEarthObservationJob](#exportearthobservationjob) - Use this operation to export results of an Earth Observation job and optionally source images used as input to the EOJ to an Amazon S3 location.
* [ExportVectorEnrichmentJob](#exportvectorenrichmentjob) - Use this operation to copy results of a Vector Enrichment job to an Amazon S3 location.
* [GetEarthObservationJob](#getearthobservationjob) - Get the details for a previously initiated Earth Observation job.
* [GetRasterDataCollection](#getrasterdatacollection) - Use this operation to get details of a specific raster data collection.
* [GetTile](#gettile) - Gets a web mercator tile for the given Earth Observation job.
* [GetVectorEnrichmentJob](#getvectorenrichmentjob) - Retrieves details of a Vector Enrichment Job for a given job Amazon Resource Name (ARN).
* [ListEarthObservationJobs](#listearthobservationjobs) - Use this operation to get a list of the Earth Observation jobs associated with the calling Amazon Web Services account.
* [ListRasterDataCollections](#listrasterdatacollections) - Use this operation to get raster data collections.
* [ListTagsForResource](#listtagsforresource) - Lists the tags attached to the resource.
* [ListVectorEnrichmentJobs](#listvectorenrichmentjobs) - Retrieves a list of vector enrichment jobs.
* [SearchRasterDataCollection](#searchrasterdatacollection) - Allows you run image query on a specific raster data collection to get a list of the satellite imagery matching the selected filters.
* [StartEarthObservationJob](#startearthobservationjob) - Use this operation to create an Earth observation job.
* [StartVectorEnrichmentJob](#startvectorenrichmentjob) - Creates a Vector Enrichment job for the supplied job type. Currently, there are two supported job types: reverse geocoding and map matching.
* [StopEarthObservationJob](#stopearthobservationjob) - Use this operation to stop an existing earth observation job.
* [StopVectorEnrichmentJob](#stopvectorenrichmentjob) - Stops the Vector Enrichment job for a given job ARN.
* [TagResource](#tagresource) - The resource you want to tag.
* [UntagResource](#untagresource) - The resource you want to untag.

## DeleteEarthObservationJob

Use this operation to delete an Earth Observation job.

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
    res, err := s.SDK.DeleteEarthObservationJob(ctx, operations.DeleteEarthObservationJobRequest{
        Arn: "vel",
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteEarthObservationJobOutput != nil {
        // handle response
    }
}
```

## DeleteVectorEnrichmentJob

Use this operation to delete a Vector Enrichment job.

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
    res, err := s.SDK.DeleteVectorEnrichmentJob(ctx, operations.DeleteVectorEnrichmentJobRequest{
        Arn: "delectus",
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("placeat"),
        XAmzSignature: sdk.String("voluptatum"),
        XAmzSignedHeaders: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteVectorEnrichmentJobOutput != nil {
        // handle response
    }
}
```

## ExportEarthObservationJob

Use this operation to export results of an Earth Observation job and optionally source images used as input to the EOJ to an Amazon S3 location.

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
    res, err := s.SDK.ExportEarthObservationJob(ctx, operations.ExportEarthObservationJobRequest{
        RequestBody: operations.ExportEarthObservationJobRequestBody{
            Arn: "excepturi",
            ClientToken: sdk.String("nisi"),
            ExecutionRoleArn: "recusandae",
            ExportSourceImages: sdk.Bool(false),
            OutputConfig: operations.ExportEarthObservationJobRequestBodyOutputConfig{
                S3Data: &shared.ExportS3DataInput{
                    KmsKeyID: sdk.String("temporibus"),
                    S3URI: "ab",
                },
            },
        },
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportEarthObservationJobOutput != nil {
        // handle response
    }
}
```

## ExportVectorEnrichmentJob

Use this operation to copy results of a Vector Enrichment job to an Amazon S3 location.

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
    res, err := s.SDK.ExportVectorEnrichmentJob(ctx, operations.ExportVectorEnrichmentJobRequest{
        RequestBody: operations.ExportVectorEnrichmentJobRequestBody{
            Arn: "quo",
            ClientToken: sdk.String("odit"),
            ExecutionRoleArn: "at",
            OutputConfig: operations.ExportVectorEnrichmentJobRequestBodyOutputConfig{
                S3Data: &shared.VectorEnrichmentJobS3Data{
                    KmsKeyID: sdk.String("at"),
                    S3URI: "maiores",
                },
            },
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("porro"),
        XAmzSignedHeaders: sdk.String("dolorum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportVectorEnrichmentJobOutput != nil {
        // handle response
    }
}
```

## GetEarthObservationJob

Get the details for a previously initiated Earth Observation job.

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
    res, err := s.SDK.GetEarthObservationJob(ctx, operations.GetEarthObservationJobRequest{
        Arn: "dicta",
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("optio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEarthObservationJobOutput != nil {
        // handle response
    }
}
```

## GetRasterDataCollection

Use this operation to get details of a specific raster data collection.

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
    res, err := s.SDK.GetRasterDataCollection(ctx, operations.GetRasterDataCollectionRequest{
        Arn: "totam",
        XAmzAlgorithm: sdk.String("beatae"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("cum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRasterDataCollectionOutput != nil {
        // handle response
    }
}
```

## GetTile

Gets a web mercator tile for the given Earth Observation job.

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
    res, err := s.SDK.GetTile(ctx, operations.GetTileRequest{
        Arn: "esse",
        ExecutionRoleArn: sdk.String("ipsum"),
        ImageAssets: []string{
            "aspernatur",
            "perferendis",
            "ad",
        },
        ImageMask: sdk.Bool(false),
        OutputDataType: operations.GetTileOutputDataTypeEnumFloat64.ToPointer(),
        OutputFormat: sdk.String("sed"),
        PropertyFilters: sdk.String("iste"),
        Target: operations.GetTileTargetEnumInput,
        TimeRangeFilter: sdk.String("natus"),
        XAmzAlgorithm: sdk.String("laboriosam"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("fuga"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("iste"),
        X: 437032,
        Y: 902349,
        Z: 697631,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTileOutput != nil {
        // handle response
    }
}
```

## GetVectorEnrichmentJob

Retrieves details of a Vector Enrichment Job for a given job Amazon Resource Name (ARN).

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
    res, err := s.SDK.GetVectorEnrichmentJob(ctx, operations.GetVectorEnrichmentJobRequest{
        Arn: "architecto",
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("est"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("dolores"),
        XAmzSignedHeaders: sdk.String("dolorem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetVectorEnrichmentJobOutput != nil {
        // handle response
    }
}
```

## ListEarthObservationJobs

Use this operation to get a list of the Earth Observation jobs associated with the calling Amazon Web Services account.

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
    res, err := s.SDK.ListEarthObservationJobs(ctx, operations.ListEarthObservationJobsRequest{
        MaxResults: sdk.String("corporis"),
        NextToken: sdk.String("explicabo"),
        RequestBody: operations.ListEarthObservationJobsRequestBody{
            MaxResults: sdk.Int64(750686),
            NextToken: sdk.String("enim"),
            SortBy: sdk.String("omnis"),
            SortOrder: operations.ListEarthObservationJobsRequestBodySortOrderEnumAscending.ToPointer(),
            StatusEquals: operations.ListEarthObservationJobsRequestBodyStatusEqualsEnumStopping.ToPointer(),
        },
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

    if res.ListEarthObservationJobOutput != nil {
        // handle response
    }
}
```

## ListRasterDataCollections

Use this operation to get raster data collections.

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
    res, err := s.SDK.ListRasterDataCollections(ctx, operations.ListRasterDataCollectionsRequest{
        MaxResults: sdk.Int64(652790),
        NextToken: sdk.String("dolorem"),
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("repellat"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("commodi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRasterDataCollectionsOutput != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists the tags attached to the resource.

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
        ResourceArn: "quam",
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("velit"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("quia"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("vitae"),
        XAmzSignedHeaders: sdk.String("laborum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListVectorEnrichmentJobs

Retrieves a list of vector enrichment jobs.

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
    res, err := s.SDK.ListVectorEnrichmentJobs(ctx, operations.ListVectorEnrichmentJobsRequest{
        MaxResults: sdk.String("animi"),
        NextToken: sdk.String("enim"),
        RequestBody: operations.ListVectorEnrichmentJobsRequestBody{
            MaxResults: sdk.Int64(138183),
            NextToken: sdk.String("quo"),
            SortBy: sdk.String("sequi"),
            SortOrder: operations.ListVectorEnrichmentJobsRequestBodySortOrderEnumDescending.ToPointer(),
            StatusEquals: sdk.String("ipsam"),
        },
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("possimus"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("temporibus"),
        XAmzSignedHeaders: sdk.String("laborum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVectorEnrichmentJobOutput != nil {
        // handle response
    }
}
```

## SearchRasterDataCollection

Allows you run image query on a specific raster data collection to get a list of the satellite imagery matching the selected filters.

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
    res, err := s.SDK.SearchRasterDataCollection(ctx, operations.SearchRasterDataCollectionRequest{
        NextToken: sdk.String("quasi"),
        RequestBody: operations.SearchRasterDataCollectionRequestBody{
            Arn: "reiciendis",
            NextToken: sdk.String("voluptatibus"),
            RasterDataCollectionQuery: operations.SearchRasterDataCollectionRequestBodyRasterDataCollectionQuery{
                AreaOfInterest: &shared.AreaOfInterest{
                    AreaOfInterestGeometry: &shared.AreaOfInterestGeometry{
                        MultiPolygonGeometry: &shared.MultiPolygonGeometryInput{
                            Coordinates: [][][][]float64{
                                [][][]float64{
                                    [][]float64{
                                        []float64{
                                            557.14,
                                            6048.46,
                                            4511.59,
                                            7392.64,
                                        },
                                        []float64{
                                            391.87,
                                        },
                                        []float64{
                                            2828.07,
                                            9795.87,
                                        },
                                    },
                                    [][]float64{
                                        []float64{
                                            2961.4,
                                            4808.94,
                                        },
                                    },
                                },
                                [][][]float64{
                                    [][]float64{
                                        []float64{
                                            8804.76,
                                            4142.63,
                                        },
                                        []float64{
                                            641.47,
                                            2168.22,
                                            6924.72,
                                            5651.89,
                                        },
                                        []float64{
                                            8651.03,
                                            2653.89,
                                            5089.69,
                                        },
                                    },
                                },
                                [][][]float64{
                                    [][]float64{
                                        []float64{
                                            9211.58,
                                        },
                                        []float64{
                                            831.12,
                                            9292.97,
                                            2777.18,
                                        },
                                        []float64{
                                            93.56,
                                            6674.11,
                                        },
                                        []float64{
                                            1317.97,
                                            6471.74,
                                            7163.27,
                                            8413.86,
                                        },
                                    },
                                    [][]float64{
                                        []float64{
                                            1831.91,
                                            3978.21,
                                        },
                                        []float64{
                                            5528.22,
                                            201.07,
                                            1649.4,
                                        },
                                    },
                                    [][]float64{
                                        []float64{
                                            46.95,
                                            1464.41,
                                        },
                                        []float64{
                                            5696.18,
                                            2700.08,
                                            7037.37,
                                        },
                                        []float64{
                                            2884.76,
                                            9621.89,
                                            4332.88,
                                        },
                                        []float64{
                                            7561.07,
                                        },
                                    },
                                },
                                [][][]float64{
                                    [][]float64{
                                        []float64{
                                            8960.39,
                                            5722.52,
                                            6389.21,
                                        },
                                        []float64{
                                            8915.55,
                                        },
                                    },
                                    [][]float64{
                                        []float64{
                                            4471.25,
                                            4491.98,
                                            8464.09,
                                        },
                                        []float64{
                                            6994.79,
                                            1162.02,
                                            2974.37,
                                            7670.24,
                                        },
                                        []float64{
                                            4118.2,
                                            3965.06,
                                            6754.39,
                                            8811.04,
                                        },
                                        []float64{
                                            5812.73,
                                        },
                                    },
                                    [][]float64{
                                        []float64{
                                            9654.17,
                                            6925.32,
                                            5884.65,
                                            7252.55,
                                        },
                                        []float64{
                                            5013.24,
                                            5332.06,
                                            9560.84,
                                        },
                                    },
                                },
                            },
                        },
                        PolygonGeometry: &shared.PolygonGeometryInput{
                            Coordinates: [][][]float64{
                                [][]float64{
                                    []float64{
                                        4238.55,
                                        6188.09,
                                    },
                                    []float64{
                                        4748.67,
                                        191.93,
                                        4701.32,
                                    },
                                    []float64{
                                        7160.75,
                                        6601.74,
                                    },
                                },
                            },
                        },
                    },
                },
                BandFilter: []string{
                    "labore",
                    "suscipit",
                },
                PropertyFilters: &shared.PropertyFilters{
                    LogicalOperator: shared.LogicalOperatorEnumAnd.ToPointer(),
                    Properties: []shared.PropertyFilter{
                        shared.PropertyFilter{
                            Property: shared.Property{
                                EoCloudCover: &shared.EoCloudCoverInput{
                                    LowerBound: 7491.7,
                                    UpperBound: 4287.69,
                                },
                                LandsatCloudCoverLand: &shared.LandsatCloudCoverLandInput{
                                    LowerBound: 8784.53,
                                    UpperBound: 1354.74,
                                },
                                Platform: &shared.PlatformInput{
                                    ComparisonOperator: shared.ComparisonOperatorEnumEquals.ToPointer(),
                                    Value: "magnam",
                                },
                                ViewOffNadir: &shared.ViewOffNadirInput{
                                    LowerBound: 923.73,
                                    UpperBound: 5699.65,
                                },
                                ViewSunAzimuth: &shared.ViewSunAzimuthInput{
                                    LowerBound: 3540.47,
                                    UpperBound: 5908.73,
                                },
                                ViewSunElevation: &shared.ViewSunElevationInput{
                                    LowerBound: 5518.16,
                                    UpperBound: 5743.25,
                                },
                            },
                        },
                        shared.PropertyFilter{
                            Property: shared.Property{
                                EoCloudCover: &shared.EoCloudCoverInput{
                                    LowerBound: 336.25,
                                    UpperBound: 6532.01,
                                },
                                LandsatCloudCoverLand: &shared.LandsatCloudCoverLandInput{
                                    LowerBound: 9689.62,
                                    UpperBound: 6521.03,
                                },
                                Platform: &shared.PlatformInput{
                                    ComparisonOperator: shared.ComparisonOperatorEnumEquals.ToPointer(),
                                    Value: "eum",
                                },
                                ViewOffNadir: &shared.ViewOffNadirInput{
                                    LowerBound: 2212.62,
                                    UpperBound: 8965.47,
                                },
                                ViewSunAzimuth: &shared.ViewSunAzimuthInput{
                                    LowerBound: 1412.64,
                                    UpperBound: 3675.62,
                                },
                                ViewSunElevation: &shared.ViewSunElevationInput{
                                    LowerBound: 972.6,
                                    UpperBound: 4358.65,
                                },
                            },
                        },
                        shared.PropertyFilter{
                            Property: shared.Property{
                                EoCloudCover: &shared.EoCloudCoverInput{
                                    LowerBound: 9840.43,
                                    UpperBound: 8919.24,
                                },
                                LandsatCloudCoverLand: &shared.LandsatCloudCoverLandInput{
                                    LowerBound: 2603.41,
                                    UpperBound: 8061.94,
                                },
                                Platform: &shared.PlatformInput{
                                    ComparisonOperator: shared.ComparisonOperatorEnumNotEquals.ToPointer(),
                                    Value: "facilis",
                                },
                                ViewOffNadir: &shared.ViewOffNadirInput{
                                    LowerBound: 4479.26,
                                    UpperBound: 1002.26,
                                },
                                ViewSunAzimuth: &shared.ViewSunAzimuthInput{
                                    LowerBound: 995.69,
                                    UpperBound: 9194.83,
                                },
                                ViewSunElevation: &shared.ViewSunElevationInput{
                                    LowerBound: 3523.12,
                                    UpperBound: 7142.42,
                                },
                            },
                        },
                    },
                },
                TimeRangeFilter: &shared.TimeRangeFilterInput{
                    EndTime: types.MustTimeFromString("2022-01-01T10:06:00.916Z"),
                    StartTime: types.MustTimeFromString("2022-07-21T08:29:53.942Z"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("magni"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchRasterDataCollectionOutput != nil {
        // handle response
    }
}
```

## StartEarthObservationJob

Use this operation to create an Earth observation job.

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
    res, err := s.SDK.StartEarthObservationJob(ctx, operations.StartEarthObservationJobRequest{
        RequestBody: operations.StartEarthObservationJobRequestBody{
            ClientToken: sdk.String("sunt"),
            ExecutionRoleArn: sdk.String("quo"),
            InputConfig: operations.StartEarthObservationJobRequestBodyInputConfig{
                DataSourceConfig: &shared.EojDataSourceConfigInput{
                    S3Data: &shared.S3DataInput{
                        KmsKeyID: sdk.String("illum"),
                        MetadataProvider: shared.MetadataProviderEnumPlanetOrder,
                        S3URI: "pariatur",
                    },
                },
                PreviousEarthObservationJobArn: sdk.String("maxime"),
                RasterDataCollectionQuery: &shared.RasterDataCollectionQueryInput{
                    AreaOfInterest: &shared.AreaOfInterest{
                        AreaOfInterestGeometry: &shared.AreaOfInterestGeometry{
                            MultiPolygonGeometry: &shared.MultiPolygonGeometryInput{
                                Coordinates: [][][][]float64{
                                    [][][]float64{
                                        [][]float64{
                                            []float64{
                                                332.22,
                                                691.67,
                                            },
                                        },
                                        [][]float64{
                                            []float64{
                                                3732.91,
                                                4535.43,
                                                4200.75,
                                            },
                                            []float64{
                                                505.88,
                                                8663.83,
                                                3654.96,
                                            },
                                            []float64{
                                                166.27,
                                                8558.04,
                                                2307.42,
                                                117.14,
                                            },
                                            []float64{
                                                3599.78,
                                                9441.24,
                                                7299.91,
                                                7499.99,
                                            },
                                        },
                                        [][]float64{
                                            []float64{
                                                5210.37,
                                                4895.49,
                                            },
                                        },
                                    },
                                    [][][]float64{
                                        [][]float64{
                                            []float64{
                                                1794.9,
                                            },
                                            []float64{
                                                1709.86,
                                            },
                                        },
                                    },
                                },
                            },
                            PolygonGeometry: &shared.PolygonGeometryInput{
                                Coordinates: [][][]float64{
                                    [][]float64{
                                        []float64{
                                            8745.73,
                                        },
                                        []float64{
                                            9441.2,
                                            9280.82,
                                        },
                                    },
                                    [][]float64{
                                        []float64{
                                            5966.56,
                                            318.38,
                                            7836.45,
                                        },
                                        []float64{
                                            5000.26,
                                        },
                                        []float64{
                                            503.7,
                                            5772.29,
                                            6990.98,
                                        },
                                    },
                                    [][]float64{
                                        []float64{
                                            9342.14,
                                            2672.62,
                                            6139.66,
                                            6790.91,
                                        },
                                    },
                                    [][]float64{
                                        []float64{
                                            5899.1,
                                            7508.44,
                                            7301.22,
                                            9644.9,
                                        },
                                        []float64{
                                            5542.42,
                                            3982.21,
                                        },
                                        []float64{
                                            2098.43,
                                        },
                                    },
                                },
                            },
                        },
                    },
                    PropertyFilters: &shared.PropertyFilters{
                        LogicalOperator: shared.LogicalOperatorEnumAnd.ToPointer(),
                        Properties: []shared.PropertyFilter{
                            shared.PropertyFilter{
                                Property: shared.Property{
                                    EoCloudCover: &shared.EoCloudCoverInput{
                                        LowerBound: 1861.93,
                                        UpperBound: 2187.49,
                                    },
                                    LandsatCloudCoverLand: &shared.LandsatCloudCoverLandInput{
                                        LowerBound: 9443.73,
                                        UpperBound: 5695.74,
                                    },
                                    Platform: &shared.PlatformInput{
                                        ComparisonOperator: shared.ComparisonOperatorEnumStartsWith.ToPointer(),
                                        Value: "voluptate",
                                    },
                                    ViewOffNadir: &shared.ViewOffNadirInput{
                                        LowerBound: 4904.59,
                                        UpperBound: 9702.37,
                                    },
                                    ViewSunAzimuth: &shared.ViewSunAzimuthInput{
                                        LowerBound: 2274.14,
                                        UpperBound: 6805.45,
                                    },
                                    ViewSunElevation: &shared.ViewSunElevationInput{
                                        LowerBound: 2543.56,
                                        UpperBound: 852.95,
                                    },
                                },
                            },
                        },
                    },
                    RasterDataCollectionArn: "ipsa",
                    TimeRangeFilter: shared.TimeRangeFilterInput{
                        EndTime: types.MustTimeFromString("2022-07-26T10:30:36.625Z"),
                        StartTime: types.MustTimeFromString("2022-09-09T04:40:04.540Z"),
                    },
                },
            },
            JobConfig: operations.StartEarthObservationJobRequestBodyJobConfig{
                BandMathConfig: &shared.BandMathConfigInput{
                    CustomIndices: &shared.CustomIndicesInput{
                        Operations: []shared.Operation{
                            shared.Operation{
                                Equation: "quidem",
                                Name: "Hector Mosciski",
                                OutputType: shared.OutputTypeEnumInt32.ToPointer(),
                            },
                            shared.Operation{
                                Equation: "fugiat",
                                Name: "Latoya Parisian",
                                OutputType: shared.OutputTypeEnumFloat64.ToPointer(),
                            },
                            shared.Operation{
                                Equation: "deleniti",
                                Name: "Terence Rau",
                                OutputType: shared.OutputTypeEnumFloat32.ToPointer(),
                            },
                            shared.Operation{
                                Equation: "voluptate",
                                Name: "Elbert Gislason I",
                                OutputType: shared.OutputTypeEnumFloat64.ToPointer(),
                            },
                        },
                    },
                    PredefinedIndices: []string{
                        "ad",
                        "saepe",
                        "suscipit",
                        "deserunt",
                    },
                },
                CloudMaskingConfig: map[string]interface{}{
                    "minima": "repellendus",
                    "totam": "similique",
                    "alias": "at",
                },
                CloudRemovalConfig: &shared.CloudRemovalConfigInput{
                    AlgorithmName: shared.AlgorithmNameCloudRemovalEnumInterpolation.ToPointer(),
                    InterpolationValue: sdk.String("quaerat"),
                    TargetBands: []string{
                        "vel",
                        "quod",
                    },
                },
                GeoMosaicConfig: &shared.GeoMosaicConfigInput{
                    AlgorithmName: shared.AlgorithmNameGeoMosaicEnumQ3.ToPointer(),
                    TargetBands: []string{
                        "dolorum",
                    },
                },
                LandCoverSegmentationConfig: map[string]interface{}{
                    "esse": "harum",
                    "iusto": "ipsum",
                    "quisquam": "tenetur",
                    "amet": "tempore",
                },
                ResamplingConfig: &shared.ResamplingConfigInput{
                    AlgorithmName: shared.AlgorithmNameResamplingEnumQ3.ToPointer(),
                    OutputResolution: shared.OutputResolutionResamplingInput{
                        UserDefined: shared.UserDefined{
                            Unit: shared.UnitEnumMeters,
                            Value: 2539.41,
                        },
                    },
                    TargetBands: []string{
                        "dolorem",
                        "sapiente",
                    },
                },
                StackConfig: &shared.StackConfigInput{
                    OutputResolution: &shared.OutputResolutionStackInput{
                        Predefined: shared.PredefinedResolutionEnumLowest.ToPointer(),
                        UserDefined: &shared.UserDefined{
                            Unit: shared.UnitEnumMeters,
                            Value: 4717.52,
                        },
                    },
                    TargetBands: []string{
                        "expedita",
                    },
                },
                TemporalStatisticsConfig: &shared.TemporalStatisticsConfigInput{
                    GroupBy: shared.GroupByEnumAll.ToPointer(),
                    Statistics: []shared.TemporalStatisticsEnum{
                        shared.TemporalStatisticsEnumMedian,
                    },
                    TargetBands: []string{
                        "voluptas",
                        "deserunt",
                        "quam",
                    },
                },
                ZonalStatisticsConfig: &shared.ZonalStatisticsConfigInput{
                    Statistics: []shared.ZonalStatisticsEnum{
                        shared.ZonalStatisticsEnumMedian,
                    },
                    TargetBands: []string{
                        "cupiditate",
                    },
                    ZoneS3Path: "maxime",
                    ZoneS3PathKmsKeyID: sdk.String("pariatur"),
                },
            },
            KmsKeyID: sdk.String("soluta"),
            Name: "Kayla Larson",
            Tags: map[string]string{
                "distinctio": "facilis",
            },
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("quam"),
        XAmzCredential: sdk.String("molestias"),
        XAmzDate: sdk.String("temporibus"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("neque"),
        XAmzSignedHeaders: sdk.String("fugit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartEarthObservationJobOutput != nil {
        // handle response
    }
}
```

## StartVectorEnrichmentJob

Creates a Vector Enrichment job for the supplied job type. Currently, there are two supported job types: reverse geocoding and map matching.

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
    res, err := s.SDK.StartVectorEnrichmentJob(ctx, operations.StartVectorEnrichmentJobRequest{
        RequestBody: operations.StartVectorEnrichmentJobRequestBody{
            ClientToken: sdk.String("magni"),
            ExecutionRoleArn: "odio",
            InputConfig: operations.StartVectorEnrichmentJobRequestBodyInputConfig{
                DataSourceConfig: &shared.VectorEnrichmentJobDataSourceConfigInput{
                    S3Data: &shared.VectorEnrichmentJobS3Data{
                        KmsKeyID: sdk.String("sunt"),
                        S3URI: "ullam",
                    },
                },
                DocumentType: shared.VectorEnrichmentJobDocumentTypeEnumCsv.ToPointer(),
            },
            JobConfig: operations.StartVectorEnrichmentJobRequestBodyJobConfig{
                MapMatchingConfig: &shared.MapMatchingConfig{
                    IDAttributeName: "nam",
                    TimestampAttributeName: "hic",
                    XAttributeName: "voluptatem",
                    YAttributeName: "cumque",
                },
                ReverseGeocodingConfig: &shared.ReverseGeocodingConfig{
                    XAttributeName: "soluta",
                    YAttributeName: "nobis",
                },
            },
            KmsKeyID: sdk.String("et"),
            Name: "Dale Boehm",
            Tags: map[string]string{
                "cupiditate": "aperiam",
                "delectus": "dolorem",
                "dolore": "labore",
            },
        },
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("quas"),
        XAmzSignedHeaders: sdk.String("itaque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartVectorEnrichmentJobOutput != nil {
        // handle response
    }
}
```

## StopEarthObservationJob

Use this operation to stop an existing earth observation job.

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
    res, err := s.SDK.StopEarthObservationJob(ctx, operations.StopEarthObservationJobRequest{
        RequestBody: operations.StopEarthObservationJobRequestBody{
            Arn: "consequatur",
        },
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("repellendus"),
        XAmzCredential: sdk.String("porro"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("ut"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("cupiditate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopEarthObservationJobOutput != nil {
        // handle response
    }
}
```

## StopVectorEnrichmentJob

Stops the Vector Enrichment job for a given job ARN.

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
    res, err := s.SDK.StopVectorEnrichmentJob(ctx, operations.StopVectorEnrichmentJobRequest{
        RequestBody: operations.StopVectorEnrichmentJobRequestBody{
            Arn: "qui",
        },
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("laudantium"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("quisquam"),
        XAmzSignedHeaders: sdk.String("vero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopVectorEnrichmentJobOutput != nil {
        // handle response
    }
}
```

## TagResource

The resource you want to tag.

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
                "quis": "ipsum",
                "delectus": "voluptate",
                "consectetur": "vero",
            },
        },
        ResourceArn: "tenetur",
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("similique"),
        XAmzSignedHeaders: sdk.String("facilis"),
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

The resource you want to untag.

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
        ResourceArn: "vero",
        XAmzAlgorithm: sdk.String("ducimus"),
        XAmzContentSha256: sdk.String("dolore"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("impedit"),
        TagKeys: []string{
            "voluptatibus",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```
