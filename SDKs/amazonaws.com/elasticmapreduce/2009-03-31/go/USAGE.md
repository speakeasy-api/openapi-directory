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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "ElasticMapReduce.AddInstanceFleet",
        },
        Request: shared.AddInstanceFleetInput{
            ClusterID: "nihil",
            InstanceFleet: shared.InstanceFleetConfig{
                InstanceFleetType: "CORE",
                InstanceTypeConfigs: []shared.InstanceTypeConfig{
                    shared.InstanceTypeConfig{
                        BidPrice: "eum",
                        BidPriceAsPercentageOfOnDemandPrice: 4375.87,
                        Configurations: []shared.Configuration{
                            shared.Configuration{
                                Classification: "saepe",
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "enim": "eum",
                                    "voluptatum": "autem",
                                    "vel": "non",
                                    "deleniti": "similique",
                                },
                            },
                            shared.Configuration{
                                Classification: "reprehenderit",
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                    shared.Configuration{},
                                    shared.Configuration{},
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "quasi": "laboriosam",
                                    "dicta": "est",
                                    "voluptatem": "consequatur",
                                    "fugiat": "a",
                                },
                            },
                        },
                        CustomAmiID: "omnis",
                        EbsConfiguration: &shared.EbsConfiguration{
                            EbsBlockDeviceConfigs: []shared.EbsBlockDeviceConfig{
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: 870013,
                                        SizeInGB: 870088,
                                        Throughput: 978619,
                                        VolumeType: "rem",
                                    },
                                    VolumesPerInstance: 799159,
                                },
                            },
                            EbsOptimized: false,
                        },
                        InstanceType: "et",
                        WeightedCapacity: 461479,
                    },
                    shared.InstanceTypeConfig{
                        BidPrice: "occaecati",
                        BidPriceAsPercentageOfOnDemandPrice: 7805.29,
                        Configurations: []shared.Configuration{
                            shared.Configuration{
                                Classification: "sed",
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                    shared.Configuration{},
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "culpa": "qui",
                                    "sed": "rerum",
                                    "possimus": "occaecati",
                                },
                            },
                            shared.Configuration{
                                Classification: "odit",
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "voluptatem": "amet",
                                    "est": "id",
                                },
                            },
                            shared.Configuration{
                                Classification: "blanditiis",
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "dolores": "sit",
                                    "quia": "et",
                                    "voluptatem": "laborum",
                                },
                            },
                        },
                        CustomAmiID: "modi",
                        EbsConfiguration: &shared.EbsConfiguration{
                            EbsBlockDeviceConfigs: []shared.EbsBlockDeviceConfig{
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: 386489,
                                        SizeInGB: 943749,
                                        Throughput: 902599,
                                        VolumeType: "soluta",
                                    },
                                    VolumesPerInstance: 449950,
                                },
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: 359508,
                                        SizeInGB: 613064,
                                        Throughput: 437032,
                                        VolumeType: "ut",
                                    },
                                    VolumesPerInstance: 697631,
                                },
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: 99280,
                                        SizeInGB: 60225,
                                        Throughput: 969810,
                                        VolumeType: "libero",
                                    },
                                    VolumesPerInstance: 653140,
                                },
                            },
                            EbsOptimized: false,
                        },
                        InstanceType: "libero",
                        WeightedCapacity: 170909,
                    },
                    shared.InstanceTypeConfig{
                        BidPrice: "non",
                        BidPriceAsPercentageOfOnDemandPrice: 3581.52,
                        Configurations: []shared.Configuration{
                            shared.Configuration{
                                Classification: "placeat",
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "commodi": "quia",
                                    "similique": "eaque",
                                    "odio": "harum",
                                },
                            },
                        },
                        CustomAmiID: "doloribus",
                        EbsConfiguration: &shared.EbsConfiguration{
                            EbsBlockDeviceConfigs: []shared.EbsBlockDeviceConfig{
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: 102044,
                                        SizeInGB: 652790,
                                        Throughput: 208876,
                                        VolumeType: "quidem",
                                    },
                                    VolumesPerInstance: 161309,
                                },
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: 995300,
                                        SizeInGB: 653108,
                                        Throughput: 581850,
                                        VolumeType: "aliquam",
                                    },
                                    VolumesPerInstance: 414369,
                                },
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: 466311,
                                        SizeInGB: 474697,
                                        Throughput: 244425,
                                        VolumeType: "fuga",
                                    },
                                    VolumesPerInstance: 158969,
                                },
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: 338007,
                                        SizeInGB: 110375,
                                        Throughput: 674752,
                                        VolumeType: "expedita",
                                    },
                                    VolumesPerInstance: 317202,
                                },
                            },
                            EbsOptimized: false,
                        },
                        InstanceType: "eos",
                        WeightedCapacity: 778346,
                    },
                },
                LaunchSpecifications: &shared.InstanceFleetProvisioningSpecifications{
                    OnDemandSpecification: &shared.OnDemandProvisioningSpecification{
                        AllocationStrategy: "lowest-price",
                        CapacityReservationOptions: &shared.OnDemandCapacityReservationOptions{
                            CapacityReservationPreference: "none",
                            CapacityReservationResourceGroupArn: "consequatur",
                            UsageStrategy: "use-capacity-reservations-first",
                        },
                    },
                    SpotSpecification: &shared.SpotProvisioningSpecification{
                        AllocationStrategy: "capacity-optimized",
                        BlockDurationMinutes: 13571,
                        TimeoutAction: "SWITCH_TO_ON_DEMAND",
                        TimeoutDurationMinutes: 622846,
                    },
                },
                Name: "quo",
                ResizeSpecifications: &shared.InstanceFleetResizingSpecifications{
                    OnDemandResizeSpecification: &shared.OnDemandResizingSpecification{
                        TimeoutDurationMinutes: 673660,
                    },
                    SpotResizeSpecification: &shared.SpotResizingSpecification{
                        TimeoutDurationMinutes: 96098,
                    },
                },
                TargetOnDemandCapacity: 971945,
                TargetSpotCapacity: 976460,
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