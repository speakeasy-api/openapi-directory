<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.AddInstanceFleetRequest{
        Headers: operations.AddInstanceFleetHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "ElasticMapReduce.AddInstanceFleet",
        },
        Request: shared.AddInstanceFleetInput{
            ClusterID: "fugit",
            InstanceFleet: shared.InstanceFleetConfig{
                InstanceFleetType: "MASTER",
                InstanceTypeConfigs: []shared.InstanceTypeConfig{
                    shared.InstanceTypeConfig{
                        BidPrice: "rerum",
                        BidPriceAsPercentageOfOnDemandPrice: 59.099998,
                        Configurations: []shared.Configuration{
                            shared.Configuration{
                                Classification: "et",
                                Configurations: []shared.Configuration{
                                    shared.Configuration{
                                    
                                    },
                                    shared.Configuration{
                                    
                                    },
                                    shared.Configuration{
                                    
                                    },
                                },
                                Properties: map[string]string{
                                    "et": "voluptate",
                                    "iste": "vitae",
                                    "totam": "dolores",
                                },
                            },
                        },
                        CustomAmiID: "illum",
                        EbsConfiguration: &shared.EbsConfiguration{
                            EbsBlockDeviceConfigs: []shared.EbsBlockDeviceConfig{
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: 3706853784096366226,
                                        SizeInGB: 2627038740284806767,
                                        VolumeType: "dolore",
                                    },
                                    VolumesPerInstance: 4035568504096476779,
                                },
                            },
                            EbsOptimized: true,
                        },
                        InstanceType: "accusantium",
                        WeightedCapacity: 1395437218309923052,
                    },
                },
                LaunchSpecifications: &shared.InstanceFleetProvisioningSpecifications{
                    OnDemandSpecification: &shared.OnDemandProvisioningSpecification{
                        AllocationStrategy: "lowest-price",
                        CapacityReservationOptions: &shared.OnDemandCapacityReservationOptions{
                            CapacityReservationPreference: "open",
                            CapacityReservationResourceGroupArn: "est",
                            UsageStrategy: "use-capacity-reservations-first",
                        },
                    },
                    SpotSpecification: &shared.SpotProvisioningSpecification{
                        AllocationStrategy: "capacity-optimized",
                        BlockDurationMinutes: 5001958211167890979,
                        TimeoutAction: "SWITCH_TO_ON_DEMAND",
                        TimeoutDurationMinutes: 4778690082005258714,
                    },
                },
                Name: "aut",
                TargetOnDemandCapacity: 6972732843819909978,
                TargetSpotCapacity: 5558237345453186302,
            },
        },
    }
    
    res, err := s.AddInstanceFleet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddInstanceFleetOutput != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->