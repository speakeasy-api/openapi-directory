<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AddInstanceFleetXAmzTargetEnum;
import org.openapis.openapi.models.operations.AddInstanceFleetRequest;
import org.openapis.openapi.models.operations.AddInstanceFleetResponse;
import org.openapis.openapi.models.shared.AddInstanceFleetInput;
import org.openapis.openapi.models.shared.InstanceFleetConfig;
import org.openapis.openapi.models.shared.InstanceFleetResizingSpecifications;
import org.openapis.openapi.models.shared.SpotResizingSpecification;
import org.openapis.openapi.models.shared.OnDemandResizingSpecification;
import org.openapis.openapi.models.shared.InstanceFleetProvisioningSpecifications;
import org.openapis.openapi.models.shared.SpotProvisioningSpecification;
import org.openapis.openapi.models.shared.SpotProvisioningTimeoutActionEnum;
import org.openapis.openapi.models.shared.SpotProvisioningAllocationStrategyEnum;
import org.openapis.openapi.models.shared.OnDemandProvisioningSpecification;
import org.openapis.openapi.models.shared.OnDemandCapacityReservationOptions;
import org.openapis.openapi.models.shared.OnDemandCapacityReservationUsageStrategyEnum;
import org.openapis.openapi.models.shared.OnDemandCapacityReservationPreferenceEnum;
import org.openapis.openapi.models.shared.OnDemandProvisioningAllocationStrategyEnum;
import org.openapis.openapi.models.shared.InstanceTypeConfig;
import org.openapis.openapi.models.shared.EbsConfiguration;
import org.openapis.openapi.models.shared.EbsBlockDeviceConfig;
import org.openapis.openapi.models.shared.VolumeSpecification;
import org.openapis.openapi.models.shared.Configuration;
import org.openapis.openapi.models.shared.InstanceFleetTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddInstanceFleetRequest req = new AddInstanceFleetRequest() {{
                addInstanceFleetInput = new AddInstanceFleetInput() {{
                    clusterId = "corrupti";
                    instanceFleet = new InstanceFleetConfig() {{
                        instanceFleetType = "CORE";
                        instanceTypeConfigs = new org.openapis.openapi.models.shared.InstanceTypeConfig[]{{
                            add(new InstanceTypeConfig() {{
                                bidPrice = "quibusdam";
                                bidPriceAsPercentageOfOnDemandPrice = 6027.63;
                                configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                    add(new Configuration() {{
                                        classification = "corrupti";
                                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                            add(new Configuration() {{}}),
                                            add(new Configuration() {{}}),
                                            add(new Configuration() {{}}),
                                            add(new Configuration() {{}}),
                                        }};
                                        properties = new java.util.HashMap<String, String>() {{
                                            put("error", "deserunt");
                                            put("suscipit", "iure");
                                        }};
                                    }}),
                                    add(new Configuration() {{
                                        classification = "magnam";
                                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                            add(new Configuration() {{}}),
                                            add(new Configuration() {{}}),
                                            add(new Configuration() {{}}),
                                            add(new Configuration() {{}}),
                                        }};
                                        properties = new java.util.HashMap<String, String>() {{
                                            put("delectus", "tempora");
                                        }};
                                    }}),
                                    add(new Configuration() {{
                                        classification = "suscipit";
                                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                            add(new Configuration() {{}}),
                                            add(new Configuration() {{}}),
                                        }};
                                        properties = new java.util.HashMap<String, String>() {{
                                            put("placeat", "voluptatum");
                                            put("iusto", "excepturi");
                                            put("nisi", "recusandae");
                                            put("temporibus", "ab");
                                        }};
                                    }}),
                                    add(new Configuration() {{
                                        classification = "quis";
                                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                            add(new Configuration() {{}}),
                                        }};
                                        properties = new java.util.HashMap<String, String>() {{
                                            put("perferendis", "ipsam");
                                            put("repellendus", "sapiente");
                                            put("quo", "odit");
                                        }};
                                    }}),
                                }};
                                customAmiId = "at";
                                ebsConfiguration = new EbsConfiguration() {{
                                    ebsBlockDeviceConfigs = new org.openapis.openapi.models.shared.EbsBlockDeviceConfig[]{{
                                        add(new EbsBlockDeviceConfig() {{
                                            volumeSpecification = new VolumeSpecification() {{
                                                iops = 978619;
                                                sizeInGB = 473608;
                                                throughput = 799159;
                                                volumeType = "quod";
                                            }};
                                            volumesPerInstance = 461479;
                                        }}),
                                        add(new EbsBlockDeviceConfig() {{
                                            volumeSpecification = new VolumeSpecification() {{
                                                iops = 520478;
                                                sizeInGB = 780529;
                                                throughput = 678880;
                                                volumeType = "dicta";
                                            }};
                                            volumesPerInstance = 720633;
                                        }}),
                                        add(new EbsBlockDeviceConfig() {{
                                            volumeSpecification = new VolumeSpecification() {{
                                                iops = 639921;
                                                sizeInGB = 582020;
                                                throughput = 143353;
                                                volumeType = "deleniti";
                                            }};
                                            volumesPerInstance = 944669;
                                        }}),
                                        add(new EbsBlockDeviceConfig() {{
                                            volumeSpecification = new VolumeSpecification() {{
                                                iops = 758616;
                                                sizeInGB = 521848;
                                                throughput = 105907;
                                                volumeType = "commodi";
                                            }};
                                            volumesPerInstance = 473600;
                                        }}),
                                    }};
                                    ebsOptimized = false;
                                }};
                                instanceType = "modi";
                                weightedCapacity = 186332;
                            }}),
                            add(new InstanceTypeConfig() {{
                                bidPrice = "impedit";
                                bidPriceAsPercentageOfOnDemandPrice = 7369.18;
                                configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                    add(new Configuration() {{
                                        classification = "ipsum";
                                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                            add(new Configuration() {{}}),
                                            add(new Configuration() {{}}),
                                            add(new Configuration() {{}}),
                                        }};
                                        properties = new java.util.HashMap<String, String>() {{
                                            put("perferendis", "ad");
                                        }};
                                    }}),
                                    add(new Configuration() {{
                                        classification = "natus";
                                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                            add(new Configuration() {{}}),
                                        }};
                                        properties = new java.util.HashMap<String, String>() {{
                                            put("dolor", "natus");
                                            put("laboriosam", "hic");
                                            put("saepe", "fuga");
                                        }};
                                    }}),
                                }};
                                customAmiId = "in";
                                ebsConfiguration = new EbsConfiguration() {{
                                    ebsBlockDeviceConfigs = new org.openapis.openapi.models.shared.EbsBlockDeviceConfig[]{{
                                        add(new EbsBlockDeviceConfig() {{
                                            volumeSpecification = new VolumeSpecification() {{
                                                iops = 613064;
                                                sizeInGB = 437032;
                                                throughput = 902349;
                                                volumeType = "quidem";
                                            }};
                                            volumesPerInstance = 99280;
                                        }}),
                                        add(new EbsBlockDeviceConfig() {{
                                            volumeSpecification = new VolumeSpecification() {{
                                                iops = 60225;
                                                sizeInGB = 969810;
                                                throughput = 666767;
                                                volumeType = "mollitia";
                                            }};
                                            volumesPerInstance = 670638;
                                        }}),
                                    }};
                                    ebsOptimized = false;
                                }};
                                instanceType = "dolores";
                                weightedCapacity = 210382;
                            }}),
                            add(new InstanceTypeConfig() {{
                                bidPrice = "corporis";
                                bidPriceAsPercentageOfOnDemandPrice = 1289.26;
                                configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                    add(new Configuration() {{
                                        classification = "enim";
                                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                            add(new Configuration() {{}}),
                                            add(new Configuration() {{}}),
                                            add(new Configuration() {{}}),
                                        }};
                                        properties = new java.util.HashMap<String, String>() {{
                                            put("minima", "excepturi");
                                            put("accusantium", "iure");
                                        }};
                                    }}),
                                    add(new Configuration() {{
                                        classification = "culpa";
                                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                            add(new Configuration() {{}}),
                                            add(new Configuration() {{}}),
                                            add(new Configuration() {{}}),
                                            add(new Configuration() {{}}),
                                        }};
                                        properties = new java.util.HashMap<String, String>() {{
                                            put("architecto", "mollitia");
                                            put("dolorem", "culpa");
                                            put("consequuntur", "repellat");
                                            put("mollitia", "occaecati");
                                        }};
                                    }}),
                                    add(new Configuration() {{
                                        classification = "numquam";
                                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                            add(new Configuration() {{}}),
                                            add(new Configuration() {{}}),
                                        }};
                                        properties = new java.util.HashMap<String, String>() {{
                                            put("molestiae", "velit");
                                            put("error", "quia");
                                        }};
                                    }}),
                                    add(new Configuration() {{
                                        classification = "quis";
                                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                            add(new Configuration() {{}}),
                                        }};
                                        properties = new java.util.HashMap<String, String>() {{
                                            put("animi", "enim");
                                            put("odit", "quo");
                                            put("sequi", "tenetur");
                                        }};
                                    }}),
                                }};
                                customAmiId = "ipsam";
                                ebsConfiguration = new EbsConfiguration() {{
                                    ebsBlockDeviceConfigs = new org.openapis.openapi.models.shared.EbsBlockDeviceConfig[]{{
                                        add(new EbsBlockDeviceConfig() {{
                                            volumeSpecification = new VolumeSpecification() {{
                                                iops = 820994;
                                                sizeInGB = 13571;
                                                throughput = 97101;
                                                volumeType = "error";
                                            }};
                                            volumesPerInstance = 837945;
                                        }}),
                                        add(new EbsBlockDeviceConfig() {{
                                            volumeSpecification = new VolumeSpecification() {{
                                                iops = 673660;
                                                sizeInGB = 96098;
                                                throughput = 971945;
                                                volumeType = "voluptatibus";
                                            }};
                                            volumesPerInstance = 878194;
                                        }}),
                                        add(new EbsBlockDeviceConfig() {{
                                            volumeSpecification = new VolumeSpecification() {{
                                                iops = 468651;
                                                sizeInGB = 509624;
                                                throughput = 976762;
                                                volumeType = "ipsa";
                                            }};
                                            volumesPerInstance = 604846;
                                        }}),
                                    }};
                                    ebsOptimized = false;
                                }};
                                instanceType = "voluptate";
                                weightedCapacity = 739264;
                            }}),
                        }};
                        launchSpecifications = new InstanceFleetProvisioningSpecifications() {{
                            onDemandSpecification = new OnDemandProvisioningSpecification() {{
                                allocationStrategy = "lowest-price";
                                capacityReservationOptions = new OnDemandCapacityReservationOptions() {{
                                    capacityReservationPreference = "open";
                                    capacityReservationResourceGroupArn = "doloremque";
                                    usageStrategy = "use-capacity-reservations-first";
                                }};
                            }};
                            spotSpecification = new SpotProvisioningSpecification() {{
                                allocationStrategy = "capacity-optimized";
                                blockDurationMinutes = 441711;
                                timeoutAction = "SWITCH_TO_ON_DEMAND";
                                timeoutDurationMinutes = 979587;
                            }};
                        }};
                        name = "dicta";
                        resizeSpecifications = new InstanceFleetResizingSpecifications() {{
                            onDemandResizeSpecification = new OnDemandResizingSpecification() {{
                                timeoutDurationMinutes = 359444;
                            }};
                            spotResizeSpecification = new SpotResizingSpecification() {{
                                timeoutDurationMinutes = 296140;
                            }};
                        }};
                        targetOnDemandCapacity = 480894;
                        targetSpotCapacity = 118727;
                    }};
                }};
                xAmzAlgorithm = "harum";
                xAmzContentSha256 = "enim";
                xAmzCredential = "accusamus";
                xAmzDate = "commodi";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "ipsum";
                xAmzTarget = "ElasticMapReduce.AddInstanceFleet";
            }}            

            AddInstanceFleetResponse res = sdk.addInstanceFleet(req);

            if (res.addInstanceFleetOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->