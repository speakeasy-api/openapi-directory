<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AddInstanceFleetXAmzTargetEnum;
import org.openapis.openapi.models.operations.AddInstanceFleetHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            AddInstanceFleetRequest req = new AddInstanceFleetRequest() {{
                headers = new AddInstanceFleetHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "ElasticMapReduce.AddInstanceFleet";
                }};
                request = new AddInstanceFleetInput() {{
                    clusterId = "illum";
                    instanceFleet = new InstanceFleetConfig() {{
                        instanceFleetType = "CORE";
                        instanceTypeConfigs = new org.openapis.openapi.models.shared.InstanceTypeConfig[]{{
                            add(new InstanceTypeConfig() {{
                                bidPrice = "deserunt";
                                bidPriceAsPercentageOfOnDemandPrice = 3843.82;
                                configurations = new org.openapis.openapi.models.shared.Configuration[]{{
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
                                }};
                                customAmiId = "quis";
                                ebsConfiguration = new EbsConfiguration() {{
                                    ebsBlockDeviceConfigs = new org.openapis.openapi.models.shared.EbsBlockDeviceConfig[]{{
                                        add(new EbsBlockDeviceConfig() {{
                                            volumeSpecification = new VolumeSpecification() {{
                                                iops = 648172;
                                                sizeInGB = 20218;
                                                throughput = 368241;
                                                volumeType = "repellendus";
                                            }};
                                            volumesPerInstance = 957156;
                                        }}),
                                    }};
                                    ebsOptimized = false;
                                }};
                                instanceType = "quo";
                                weightedCapacity = 140350;
                            }}),
                            add(new InstanceTypeConfig() {{
                                bidPrice = "at";
                                bidPriceAsPercentageOfOnDemandPrice = 8700.88;
                                configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                    add(new Configuration() {{
                                        classification = "molestiae";
                                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                            add(new Configuration() {{}}),
                                            add(new Configuration() {{}}),
                                            add(new Configuration() {{}}),
                                            add(new Configuration() {{}}),
                                        }};
                                        properties = new java.util.HashMap<String, String>() {{
                                            put("esse", "totam");
                                            put("porro", "dolorum");
                                            put("dicta", "nam");
                                            put("officia", "occaecati");
                                        }};
                                    }}),
                                    add(new Configuration() {{
                                        classification = "fugit";
                                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                            add(new Configuration() {{}}),
                                            add(new Configuration() {{}}),
                                            add(new Configuration() {{}}),
                                        }};
                                        properties = new java.util.HashMap<String, String>() {{
                                            put("optio", "totam");
                                            put("beatae", "commodi");
                                            put("molestiae", "modi");
                                            put("qui", "impedit");
                                        }};
                                    }}),
                                    add(new Configuration() {{
                                        classification = "cum";
                                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                            add(new Configuration() {{}}),
                                            add(new Configuration() {{}}),
                                        }};
                                        properties = new java.util.HashMap<String, String>() {{
                                            put("excepturi", "aspernatur");
                                        }};
                                    }}),
                                    add(new Configuration() {{
                                        classification = "perferendis";
                                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                            add(new Configuration() {{}}),
                                            add(new Configuration() {{}}),
                                        }};
                                        properties = new java.util.HashMap<String, String>() {{
                                            put("sed", "iste");
                                            put("dolor", "natus");
                                            put("laboriosam", "hic");
                                        }};
                                    }}),
                                }};
                                customAmiId = "saepe";
                                ebsConfiguration = new EbsConfiguration() {{
                                    ebsBlockDeviceConfigs = new org.openapis.openapi.models.shared.EbsBlockDeviceConfig[]{{
                                        add(new EbsBlockDeviceConfig() {{
                                            volumeSpecification = new VolumeSpecification() {{
                                                iops = 449950;
                                                sizeInGB = 359508;
                                                throughput = 613064;
                                                volumeType = "iure";
                                            }};
                                            volumesPerInstance = 902349;
                                        }}),
                                        add(new EbsBlockDeviceConfig() {{
                                            volumeSpecification = new VolumeSpecification() {{
                                                iops = 697631;
                                                sizeInGB = 99280;
                                                throughput = 60225;
                                                volumeType = "reiciendis";
                                            }};
                                            volumesPerInstance = 666767;
                                        }}),
                                        add(new EbsBlockDeviceConfig() {{
                                            volumeSpecification = new VolumeSpecification() {{
                                                iops = 653140;
                                                sizeInGB = 670638;
                                                throughput = 170909;
                                                volumeType = "dolorem";
                                            }};
                                            volumesPerInstance = 358152;
                                        }}),
                                    }};
                                    ebsOptimized = false;
                                }};
                                instanceType = "explicabo";
                                weightedCapacity = 750686;
                            }}),
                            add(new InstanceTypeConfig() {{
                                bidPrice = "enim";
                                bidPriceAsPercentageOfOnDemandPrice = 6078.31;
                                configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                    add(new Configuration() {{
                                        classification = "minima";
                                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                            add(new Configuration() {{}}),
                                            add(new Configuration() {{}}),
                                            add(new Configuration() {{}}),
                                        }};
                                        properties = new java.util.HashMap<String, String>() {{
                                            put("iure", "culpa");
                                        }};
                                    }}),
                                    add(new Configuration() {{
                                        classification = "doloribus";
                                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                            add(new Configuration() {{}}),
                                            add(new Configuration() {{}}),
                                            add(new Configuration() {{}}),
                                            add(new Configuration() {{}}),
                                        }};
                                        properties = new java.util.HashMap<String, String>() {{
                                            put("mollitia", "dolorem");
                                        }};
                                    }}),
                                }};
                                customAmiId = "culpa";
                                ebsConfiguration = new EbsConfiguration() {{
                                    ebsBlockDeviceConfigs = new org.openapis.openapi.models.shared.EbsBlockDeviceConfig[]{{
                                        add(new EbsBlockDeviceConfig() {{
                                            volumeSpecification = new VolumeSpecification() {{
                                                iops = 995300;
                                                sizeInGB = 653108;
                                                throughput = 581850;
                                                volumeType = "numquam";
                                            }};
                                            volumesPerInstance = 414369;
                                        }}),
                                    }};
                                    ebsOptimized = false;
                                }};
                                instanceType = "quam";
                                weightedCapacity = 474697;
                            }}),
                        }};
                        launchSpecifications = new InstanceFleetProvisioningSpecifications() {{
                            onDemandSpecification = new OnDemandProvisioningSpecification() {{
                                allocationStrategy = "lowest-price";
                                capacityReservationOptions = new OnDemandCapacityReservationOptions() {{
                                    capacityReservationPreference = "open";
                                    capacityReservationResourceGroupArn = "error";
                                    usageStrategy = "use-capacity-reservations-first";
                                }};
                            }};
                            spotSpecification = new SpotProvisioningSpecification() {{
                                allocationStrategy = "capacity-optimized";
                                blockDurationMinutes = 158969;
                                timeoutAction = "SWITCH_TO_ON_DEMAND";
                                timeoutDurationMinutes = 110375;
                            }};
                        }};
                        name = "laborum";
                        resizeSpecifications = new InstanceFleetResizingSpecifications() {{
                            onDemandResizeSpecification = new OnDemandResizingSpecification() {{
                                timeoutDurationMinutes = 656330;
                            }};
                            spotResizeSpecification = new SpotResizingSpecification() {{
                                timeoutDurationMinutes = 317202;
                            }};
                        }};
                        targetOnDemandCapacity = 138183;
                        targetSpotCapacity = 778346;
                    }};
                }};
            }};            

            AddInstanceFleetResponse res = sdk.addInstanceFleet(req);

            if (res.addInstanceFleetOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->