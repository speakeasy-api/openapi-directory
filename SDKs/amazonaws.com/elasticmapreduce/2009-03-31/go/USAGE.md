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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.AddInstanceFleetRequest{
        AddInstanceFleetInput: shared.AddInstanceFleetInput{
            ClusterID: "corrupti",
            InstanceFleet: shared.InstanceFleetConfig{
                InstanceFleetType: "CORE",
                InstanceTypeConfigs: []shared.InstanceTypeConfig{
                    shared.InstanceTypeConfig{
                        BidPrice: "quibusdam",
                        BidPriceAsPercentageOfOnDemandPrice: 6027.63,
                        Configurations: []shared.Configuration{
                            shared.Configuration{
                                Classification: "corrupti",
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
                            shared.Configuration{
                                Classification: "quis",
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
                        CustomAmiID: "at",
                        EbsConfiguration: &shared.EbsConfiguration{
                            EbsBlockDeviceConfigs: []shared.EbsBlockDeviceConfig{
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: 978619,
                                        SizeInGB: 473608,
                                        Throughput: 799159,
                                        VolumeType: "quod",
                                    },
                                    VolumesPerInstance: 461479,
                                },
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: 520478,
                                        SizeInGB: 780529,
                                        Throughput: 678880,
                                        VolumeType: "dicta",
                                    },
                                    VolumesPerInstance: 720633,
                                },
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: 639921,
                                        SizeInGB: 582020,
                                        Throughput: 143353,
                                        VolumeType: "deleniti",
                                    },
                                    VolumesPerInstance: 944669,
                                },
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: 758616,
                                        SizeInGB: 521848,
                                        Throughput: 105907,
                                        VolumeType: "commodi",
                                    },
                                    VolumesPerInstance: 473600,
                                },
                            },
                            EbsOptimized: false,
                        },
                        InstanceType: "modi",
                        WeightedCapacity: 186332,
                    },
                    shared.InstanceTypeConfig{
                        BidPrice: "impedit",
                        BidPriceAsPercentageOfOnDemandPrice: 7369.18,
                        Configurations: []shared.Configuration{
                            shared.Configuration{
                                Classification: "ipsum",
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
                                Classification: "natus",
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
                        CustomAmiID: "in",
                        EbsConfiguration: &shared.EbsConfiguration{
                            EbsBlockDeviceConfigs: []shared.EbsBlockDeviceConfig{
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: 613064,
                                        SizeInGB: 437032,
                                        Throughput: 902349,
                                        VolumeType: "quidem",
                                    },
                                    VolumesPerInstance: 99280,
                                },
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: 60225,
                                        SizeInGB: 969810,
                                        Throughput: 666767,
                                        VolumeType: "mollitia",
                                    },
                                    VolumesPerInstance: 670638,
                                },
                            },
                            EbsOptimized: false,
                        },
                        InstanceType: "dolores",
                        WeightedCapacity: 210382,
                    },
                    shared.InstanceTypeConfig{
                        BidPrice: "corporis",
                        BidPriceAsPercentageOfOnDemandPrice: 1289.26,
                        Configurations: []shared.Configuration{
                            shared.Configuration{
                                Classification: "enim",
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
                                Classification: "culpa",
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
                                Classification: "numquam",
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
                                Classification: "quis",
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
                        CustomAmiID: "ipsam",
                        EbsConfiguration: &shared.EbsConfiguration{
                            EbsBlockDeviceConfigs: []shared.EbsBlockDeviceConfig{
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: 820994,
                                        SizeInGB: 13571,
                                        Throughput: 97101,
                                        VolumeType: "error",
                                    },
                                    VolumesPerInstance: 837945,
                                },
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: 673660,
                                        SizeInGB: 96098,
                                        Throughput: 971945,
                                        VolumeType: "voluptatibus",
                                    },
                                    VolumesPerInstance: 878194,
                                },
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: 468651,
                                        SizeInGB: 509624,
                                        Throughput: 976762,
                                        VolumeType: "ipsa",
                                    },
                                    VolumesPerInstance: 604846,
                                },
                            },
                            EbsOptimized: false,
                        },
                        InstanceType: "voluptate",
                        WeightedCapacity: 739264,
                    },
                },
                LaunchSpecifications: &shared.InstanceFleetProvisioningSpecifications{
                    OnDemandSpecification: &shared.OnDemandProvisioningSpecification{
                        AllocationStrategy: "lowest-price",
                        CapacityReservationOptions: &shared.OnDemandCapacityReservationOptions{
                            CapacityReservationPreference: "open",
                            CapacityReservationResourceGroupArn: "doloremque",
                            UsageStrategy: "use-capacity-reservations-first",
                        },
                    },
                    SpotSpecification: &shared.SpotProvisioningSpecification{
                        AllocationStrategy: "capacity-optimized",
                        BlockDurationMinutes: 441711,
                        TimeoutAction: "SWITCH_TO_ON_DEMAND",
                        TimeoutDurationMinutes: 979587,
                    },
                },
                Name: "dicta",
                ResizeSpecifications: &shared.InstanceFleetResizingSpecifications{
                    OnDemandResizeSpecification: &shared.OnDemandResizingSpecification{
                        TimeoutDurationMinutes: 359444,
                    },
                    SpotResizeSpecification: &shared.SpotResizingSpecification{
                        TimeoutDurationMinutes: 296140,
                    },
                },
                TargetOnDemandCapacity: 480894,
                TargetSpotCapacity: 118727,
            },
        },
        XAmzAlgorithm: "harum",
        XAmzContentSha256: "enim",
        XAmzCredential: "accusamus",
        XAmzDate: "commodi",
        XAmzSecurityToken: "repudiandae",
        XAmzSignature: "quae",
        XAmzSignedHeaders: "ipsum",
        XAmzTarget: "ElasticMapReduce.AddInstanceFleet",
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