<!-- Start SDK Example Usage -->
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
    res, err := s.AddInstanceFleet(ctx, operations.AddInstanceFleetRequest{
        AddInstanceFleetInput: shared.AddInstanceFleetInput{
            ClusterID: "corrupti",
            InstanceFleet: shared.InstanceFleetConfig{
                InstanceFleetType: shared.InstanceFleetTypeEnumCore,
                InstanceTypeConfigs: []shared.InstanceTypeConfig{
                    shared.InstanceTypeConfig{
                        BidPrice: sdk.String("quibusdam"),
                        BidPriceAsPercentageOfOnDemandPrice: sdk.Float64(6027.63),
                        Configurations: []shared.Configuration{
                            shared.Configuration{
                                Classification: sdk.String("corrupti"),
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                    shared.Configuration{},
                                    shared.Configuration{},
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "error": "deserunt",
                                    "suscipit": "iure",
                                },
                            },
                            shared.Configuration{
                                Classification: sdk.String("magnam"),
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
                                Classification: sdk.String("suscipit"),
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
                            shared.Configuration{
                                Classification: sdk.String("quis"),
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "perferendis": "ipsam",
                                    "repellendus": "sapiente",
                                    "quo": "odit",
                                },
                            },
                        },
                        CustomAmiID: sdk.String("at"),
                        EbsConfiguration: &shared.EbsConfiguration{
                            EbsBlockDeviceConfigs: []shared.EbsBlockDeviceConfig{
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: sdk.Int64(978619),
                                        SizeInGB: 473608,
                                        Throughput: sdk.Int64(799159),
                                        VolumeType: "quod",
                                    },
                                    VolumesPerInstance: sdk.Int64(461479),
                                },
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: sdk.Int64(520478),
                                        SizeInGB: 780529,
                                        Throughput: sdk.Int64(678880),
                                        VolumeType: "dicta",
                                    },
                                    VolumesPerInstance: sdk.Int64(720633),
                                },
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: sdk.Int64(639921),
                                        SizeInGB: 582020,
                                        Throughput: sdk.Int64(143353),
                                        VolumeType: "deleniti",
                                    },
                                    VolumesPerInstance: sdk.Int64(944669),
                                },
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: sdk.Int64(758616),
                                        SizeInGB: 521848,
                                        Throughput: sdk.Int64(105907),
                                        VolumeType: "commodi",
                                    },
                                    VolumesPerInstance: sdk.Int64(473600),
                                },
                            },
                            EbsOptimized: sdk.Bool(false),
                        },
                        InstanceType: "modi",
                        WeightedCapacity: sdk.Int64(186332),
                    },
                    shared.InstanceTypeConfig{
                        BidPrice: sdk.String("impedit"),
                        BidPriceAsPercentageOfOnDemandPrice: sdk.Float64(7369.18),
                        Configurations: []shared.Configuration{
                            shared.Configuration{
                                Classification: sdk.String("ipsum"),
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                    shared.Configuration{},
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "perferendis": "ad",
                                },
                            },
                            shared.Configuration{
                                Classification: sdk.String("natus"),
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "dolor": "natus",
                                    "laboriosam": "hic",
                                    "saepe": "fuga",
                                },
                            },
                        },
                        CustomAmiID: sdk.String("in"),
                        EbsConfiguration: &shared.EbsConfiguration{
                            EbsBlockDeviceConfigs: []shared.EbsBlockDeviceConfig{
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: sdk.Int64(613064),
                                        SizeInGB: 437032,
                                        Throughput: sdk.Int64(902349),
                                        VolumeType: "quidem",
                                    },
                                    VolumesPerInstance: sdk.Int64(99280),
                                },
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: sdk.Int64(60225),
                                        SizeInGB: 969810,
                                        Throughput: sdk.Int64(666767),
                                        VolumeType: "mollitia",
                                    },
                                    VolumesPerInstance: sdk.Int64(670638),
                                },
                            },
                            EbsOptimized: sdk.Bool(false),
                        },
                        InstanceType: "dolores",
                        WeightedCapacity: sdk.Int64(210382),
                    },
                    shared.InstanceTypeConfig{
                        BidPrice: sdk.String("corporis"),
                        BidPriceAsPercentageOfOnDemandPrice: sdk.Float64(1289.26),
                        Configurations: []shared.Configuration{
                            shared.Configuration{
                                Classification: sdk.String("enim"),
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                    shared.Configuration{},
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "minima": "excepturi",
                                    "accusantium": "iure",
                                },
                            },
                            shared.Configuration{
                                Classification: sdk.String("culpa"),
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                    shared.Configuration{},
                                    shared.Configuration{},
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "architecto": "mollitia",
                                    "dolorem": "culpa",
                                    "consequuntur": "repellat",
                                    "mollitia": "occaecati",
                                },
                            },
                            shared.Configuration{
                                Classification: sdk.String("numquam"),
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "molestiae": "velit",
                                    "error": "quia",
                                },
                            },
                            shared.Configuration{
                                Classification: sdk.String("quis"),
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "animi": "enim",
                                    "odit": "quo",
                                    "sequi": "tenetur",
                                },
                            },
                        },
                        CustomAmiID: sdk.String("ipsam"),
                        EbsConfiguration: &shared.EbsConfiguration{
                            EbsBlockDeviceConfigs: []shared.EbsBlockDeviceConfig{
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: sdk.Int64(820994),
                                        SizeInGB: 13571,
                                        Throughput: sdk.Int64(97101),
                                        VolumeType: "error",
                                    },
                                    VolumesPerInstance: sdk.Int64(837945),
                                },
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: sdk.Int64(673660),
                                        SizeInGB: 96098,
                                        Throughput: sdk.Int64(971945),
                                        VolumeType: "voluptatibus",
                                    },
                                    VolumesPerInstance: sdk.Int64(878194),
                                },
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: sdk.Int64(468651),
                                        SizeInGB: 509624,
                                        Throughput: sdk.Int64(976762),
                                        VolumeType: "ipsa",
                                    },
                                    VolumesPerInstance: sdk.Int64(604846),
                                },
                            },
                            EbsOptimized: sdk.Bool(false),
                        },
                        InstanceType: "voluptate",
                        WeightedCapacity: sdk.Int64(739264),
                    },
                },
                LaunchSpecifications: &shared.InstanceFleetProvisioningSpecifications{
                    OnDemandSpecification: &shared.OnDemandProvisioningSpecification{
                        AllocationStrategy: shared.OnDemandProvisioningAllocationStrategyEnumLowestPrice,
                        CapacityReservationOptions: &shared.OnDemandCapacityReservationOptions{
                            CapacityReservationPreference: shared.OnDemandCapacityReservationPreferenceEnumOpen.ToPointer(),
                            CapacityReservationResourceGroupArn: sdk.String("doloremque"),
                            UsageStrategy: shared.OnDemandCapacityReservationUsageStrategyEnumUseCapacityReservationsFirst.ToPointer(),
                        },
                    },
                    SpotSpecification: &shared.SpotProvisioningSpecification{
                        AllocationStrategy: shared.SpotProvisioningAllocationStrategyEnumCapacityOptimized.ToPointer(),
                        BlockDurationMinutes: sdk.Int64(441711),
                        TimeoutAction: shared.SpotProvisioningTimeoutActionEnumSwitchToOnDemand,
                        TimeoutDurationMinutes: 979587,
                    },
                },
                Name: sdk.String("Stacy Gulgowski MD"),
                ResizeSpecifications: &shared.InstanceFleetResizingSpecifications{
                    OnDemandResizeSpecification: &shared.OnDemandResizingSpecification{
                        TimeoutDurationMinutes: 317983,
                    },
                    SpotResizeSpecification: &shared.SpotResizingSpecification{
                        TimeoutDurationMinutes: 880476,
                    },
                },
                TargetOnDemandCapacity: sdk.Int64(414263),
                TargetSpotCapacity: sdk.Int64(918236),
            },
        },
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("molestias"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("modi"),
        XAmzTarget: operations.AddInstanceFleetXAmzTargetEnumElasticMapReduceAddInstanceFleet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddInstanceFleetOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->