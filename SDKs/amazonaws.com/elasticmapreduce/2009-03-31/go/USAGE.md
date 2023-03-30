<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.AddInstanceFleetRequest{
        Headers: operations.AddInstanceFleetHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "ElasticMapReduce.AddInstanceFleet",
        },
        Request: shared.AddInstanceFleetInput{
            ClusterID: "illum",
            InstanceFleet: shared.InstanceFleetConfig{
                InstanceFleetType: "CORE",
                InstanceTypeConfigs: []shared.InstanceTypeConfig{
                    shared.InstanceTypeConfig{
                        BidPrice: "deserunt",
                        BidPriceAsPercentageOfOnDemandPrice: 3843.82,
                        Configurations: []shared.Configuration{
                            shared.Configuration{
                                Classification: "magnam",
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                    shared.Configuration{},
                                    shared.Configuration{},
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "delectus": "tempora",
                                },
                            },
                            shared.Configuration{
                                Classification: "suscipit",
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "placeat": "voluptatum",
                                    "iusto": "excepturi",
                                    "nisi": "recusandae",
                                    "temporibus": "ab",
                                },
                            },
                        },
                        CustomAmiID: "quis",
                        EbsConfiguration: &shared.EbsConfiguration{
                            EbsBlockDeviceConfigs: []shared.EbsBlockDeviceConfig{
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: 648172,
                                        SizeInGB: 20218,
                                        Throughput: 368241,
                                        VolumeType: "repellendus",
                                    },
                                    VolumesPerInstance: 957156,
                                },
                            },
                            EbsOptimized: false,
                        },
                        InstanceType: "quo",
                        WeightedCapacity: 140350,
                    },
                    shared.InstanceTypeConfig{
                        BidPrice: "at",
                        BidPriceAsPercentageOfOnDemandPrice: 8700.88,
                        Configurations: []shared.Configuration{
                            shared.Configuration{
                                Classification: "molestiae",
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                    shared.Configuration{},
                                    shared.Configuration{},
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "esse": "totam",
                                    "porro": "dolorum",
                                    "dicta": "nam",
                                    "officia": "occaecati",
                                },
                            },
                            shared.Configuration{
                                Classification: "fugit",
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                    shared.Configuration{},
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "optio": "totam",
                                    "beatae": "commodi",
                                    "molestiae": "modi",
                                    "qui": "impedit",
                                },
                            },
                            shared.Configuration{
                                Classification: "cum",
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "excepturi": "aspernatur",
                                },
                            },
                            shared.Configuration{
                                Classification: "perferendis",
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "sed": "iste",
                                    "dolor": "natus",
                                    "laboriosam": "hic",
                                },
                            },
                        },
                        CustomAmiID: "saepe",
                        EbsConfiguration: &shared.EbsConfiguration{
                            EbsBlockDeviceConfigs: []shared.EbsBlockDeviceConfig{
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: 449950,
                                        SizeInGB: 359508,
                                        Throughput: 613064,
                                        VolumeType: "iure",
                                    },
                                    VolumesPerInstance: 902349,
                                },
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: 697631,
                                        SizeInGB: 99280,
                                        Throughput: 60225,
                                        VolumeType: "reiciendis",
                                    },
                                    VolumesPerInstance: 666767,
                                },
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: 653140,
                                        SizeInGB: 670638,
                                        Throughput: 170909,
                                        VolumeType: "dolorem",
                                    },
                                    VolumesPerInstance: 358152,
                                },
                            },
                            EbsOptimized: false,
                        },
                        InstanceType: "explicabo",
                        WeightedCapacity: 750686,
                    },
                    shared.InstanceTypeConfig{
                        BidPrice: "enim",
                        BidPriceAsPercentageOfOnDemandPrice: 6078.31,
                        Configurations: []shared.Configuration{
                            shared.Configuration{
                                Classification: "minima",
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                    shared.Configuration{},
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "iure": "culpa",
                                },
                            },
                            shared.Configuration{
                                Classification: "doloribus",
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                    shared.Configuration{},
                                    shared.Configuration{},
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "mollitia": "dolorem",
                                },
                            },
                        },
                        CustomAmiID: "culpa",
                        EbsConfiguration: &shared.EbsConfiguration{
                            EbsBlockDeviceConfigs: []shared.EbsBlockDeviceConfig{
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: 995300,
                                        SizeInGB: 653108,
                                        Throughput: 581850,
                                        VolumeType: "numquam",
                                    },
                                    VolumesPerInstance: 414369,
                                },
                            },
                            EbsOptimized: false,
                        },
                        InstanceType: "quam",
                        WeightedCapacity: 474697,
                    },
                },
                LaunchSpecifications: &shared.InstanceFleetProvisioningSpecifications{
                    OnDemandSpecification: &shared.OnDemandProvisioningSpecification{
                        AllocationStrategy: "lowest-price",
                        CapacityReservationOptions: &shared.OnDemandCapacityReservationOptions{
                            CapacityReservationPreference: "open",
                            CapacityReservationResourceGroupArn: "error",
                            UsageStrategy: "use-capacity-reservations-first",
                        },
                    },
                    SpotSpecification: &shared.SpotProvisioningSpecification{
                        AllocationStrategy: "capacity-optimized",
                        BlockDurationMinutes: 158969,
                        TimeoutAction: "SWITCH_TO_ON_DEMAND",
                        TimeoutDurationMinutes: 110375,
                    },
                },
                Name: "laborum",
                ResizeSpecifications: &shared.InstanceFleetResizingSpecifications{
                    OnDemandResizeSpecification: &shared.OnDemandResizingSpecification{
                        TimeoutDurationMinutes: 656330,
                    },
                    SpotResizeSpecification: &shared.SpotResizingSpecification{
                        TimeoutDurationMinutes: 317202,
                    },
                },
                TargetOnDemandCapacity: 138183,
                TargetSpotCapacity: 778346,
            },
        },
    }

    ctx := context.Background()
    res, err := s.AddInstanceFleet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddInstanceFleetOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->