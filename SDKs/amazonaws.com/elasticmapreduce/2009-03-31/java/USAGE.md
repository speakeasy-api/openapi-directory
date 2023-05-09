<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddInstanceFleetRequest;
import org.openapis.openapi.models.operations.AddInstanceFleetResponse;
import org.openapis.openapi.models.operations.AddInstanceFleetXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddInstanceFleetInput;
import org.openapis.openapi.models.shared.Configuration;
import org.openapis.openapi.models.shared.EbsBlockDeviceConfig;
import org.openapis.openapi.models.shared.EbsConfiguration;
import org.openapis.openapi.models.shared.InstanceFleetConfig;
import org.openapis.openapi.models.shared.InstanceFleetProvisioningSpecifications;
import org.openapis.openapi.models.shared.InstanceFleetResizingSpecifications;
import org.openapis.openapi.models.shared.InstanceFleetTypeEnum;
import org.openapis.openapi.models.shared.InstanceTypeConfig;
import org.openapis.openapi.models.shared.OnDemandCapacityReservationOptions;
import org.openapis.openapi.models.shared.OnDemandCapacityReservationPreferenceEnum;
import org.openapis.openapi.models.shared.OnDemandCapacityReservationUsageStrategyEnum;
import org.openapis.openapi.models.shared.OnDemandProvisioningAllocationStrategyEnum;
import org.openapis.openapi.models.shared.OnDemandProvisioningSpecification;
import org.openapis.openapi.models.shared.OnDemandResizingSpecification;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SpotProvisioningAllocationStrategyEnum;
import org.openapis.openapi.models.shared.SpotProvisioningSpecification;
import org.openapis.openapi.models.shared.SpotProvisioningTimeoutActionEnum;
import org.openapis.openapi.models.shared.SpotResizingSpecification;
import org.openapis.openapi.models.shared.VolumeSpecification;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddInstanceFleetRequest req = new AddInstanceFleetRequest(                new AddInstanceFleetInput("provident",                 new InstanceFleetConfig(InstanceFleetTypeEnum.TASK) {{
                                                instanceTypeConfigs = new org.openapis.openapi.models.shared.InstanceTypeConfig[]{{
                                                    add(new InstanceTypeConfig("aspernatur") {{
                                                        bidPrice = "unde";
                                                        bidPriceAsPercentageOfOnDemandPrice = 8579.46;
                                                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                            add(new Configuration() {{
                                                                classification = "illum";
                                                                configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                                    add(new Configuration() {{}}),
                                                                    add(new Configuration() {{}}),
                                                                }};
                                                                properties = new java.util.HashMap<String, String>() {{
                                                                    put("deserunt", "suscipit");
                                                                    put("iure", "magnam");
                                                                    put("debitis", "ipsa");
                                                                }};
                                                            }}),
                                                            add(new Configuration() {{
                                                                classification = "delectus";
                                                                configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                                    add(new Configuration() {{}}),
                                                                    add(new Configuration() {{}}),
                                                                }};
                                                                properties = new java.util.HashMap<String, String>() {{
                                                                    put("molestiae", "minus");
                                                                    put("placeat", "voluptatum");
                                                                }};
                                                            }}),
                                                            add(new Configuration() {{
                                                                classification = "iusto";
                                                                configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                                    add(new Configuration() {{}}),
                                                                    add(new Configuration() {{}}),
                                                                    add(new Configuration() {{}}),
                                                                }};
                                                                properties = new java.util.HashMap<String, String>() {{
                                                                    put("recusandae", "temporibus");
                                                                    put("ab", "quis");
                                                                }};
                                                            }}),
                                                        }};
                                                        customAmiId = "veritatis";
                                                        ebsConfiguration = new EbsConfiguration() {{
                                                            ebsBlockDeviceConfigs = new org.openapis.openapi.models.shared.EbsBlockDeviceConfig[]{{
                                                                add(new EbsBlockDeviceConfig(                new VolumeSpecification(870088L, "maiores") {{
                                                                                    iops = 473608L;
                                                                                    throughput = 799159L;
                                                                                }};) {{
                                                                    volumeSpecification = new VolumeSpecification(778157L, "odit") {{
                                                                        iops = 20218L;
                                                                        sizeInGB = 368241L;
                                                                        throughput = 832620L;
                                                                        volumeType = "sapiente";
                                                                    }};
                                                                    volumesPerInstance = 870013L;
                                                                }}),
                                                                add(new EbsBlockDeviceConfig(                new VolumeSpecification(639921L, "occaecati") {{
                                                                                    iops = 143353L;
                                                                                    throughput = 537373L;
                                                                                }};) {{
                                                                    volumeSpecification = new VolumeSpecification(678880L, "dicta") {{
                                                                        iops = 800911L;
                                                                        sizeInGB = 461479L;
                                                                        throughput = 520478L;
                                                                        volumeType = "porro";
                                                                    }};
                                                                    volumesPerInstance = 720633L;
                                                                }}),
                                                                add(new EbsBlockDeviceConfig(                new VolumeSpecification(186332L, "impedit") {{
                                                                                    iops = 736918L;
                                                                                    throughput = 456150L;
                                                                                }};) {{
                                                                    volumeSpecification = new VolumeSpecification(414662L, "molestiae") {{
                                                                        iops = 944669L;
                                                                        sizeInGB = 758616L;
                                                                        throughput = 521848L;
                                                                        volumeType = "beatae";
                                                                    }};
                                                                    volumesPerInstance = 264555L;
                                                                }}),
                                                            }};
                                                            ebsOptimized = false;
                                                        }};
                                                        instanceType = "ipsum";
                                                        weightedCapacity = 568434L;
                                                    }}),
                                                    add(new InstanceTypeConfig("aut") {{
                                                        bidPrice = "perferendis";
                                                        bidPriceAsPercentageOfOnDemandPrice = 3241.41;
                                                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                            add(new Configuration() {{
                                                                classification = "sed";
                                                                configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                                    add(new Configuration() {{}}),
                                                                    add(new Configuration() {{}}),
                                                                    add(new Configuration() {{}}),
                                                                }};
                                                                properties = new java.util.HashMap<String, String>() {{
                                                                    put("natus", "laboriosam");
                                                                }};
                                                            }}),
                                                            add(new Configuration() {{
                                                                classification = "hic";
                                                                configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                                    add(new Configuration() {{}}),
                                                                    add(new Configuration() {{}}),
                                                                    add(new Configuration() {{}}),
                                                                    add(new Configuration() {{}}),
                                                                }};
                                                                properties = new java.util.HashMap<String, String>() {{
                                                                    put("in", "corporis");
                                                                    put("iste", "iure");
                                                                    put("saepe", "quidem");
                                                                }};
                                                            }}),
                                                            add(new Configuration() {{
                                                                classification = "architecto";
                                                                configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                                    add(new Configuration() {{}}),
                                                                }};
                                                                properties = new java.util.HashMap<String, String>() {{
                                                                    put("est", "mollitia");
                                                                    put("laborum", "dolores");
                                                                    put("dolorem", "corporis");
                                                                    put("explicabo", "nobis");
                                                                }};
                                                            }}),
                                                        }};
                                                        customAmiId = "enim";
                                                        ebsConfiguration = new EbsConfiguration() {{
                                                            ebsBlockDeviceConfigs = new org.openapis.openapi.models.shared.EbsBlockDeviceConfig[]{{
                                                                add(new EbsBlockDeviceConfig(                new VolumeSpecification(958950L, "architecto") {{
                                                                                    iops = 652790L;
                                                                                    throughput = 208876L;
                                                                                }};) {{
                                                                    volumeSpecification = new VolumeSpecification(438601L, "culpa") {{
                                                                        iops = 363711L;
                                                                        sizeInGB = 325047L;
                                                                        throughput = 570197L;
                                                                        volumeType = "accusantium";
                                                                    }};
                                                                    volumesPerInstance = 988374L;
                                                                }}),
                                                                add(new EbsBlockDeviceConfig(                new VolumeSpecification(466311L, "molestiae") {{
                                                                                    iops = 244425L;
                                                                                    throughput = 623510L;
                                                                                }};) {{
                                                                    volumeSpecification = new VolumeSpecification(581850L, "numquam") {{
                                                                        iops = 635059L;
                                                                        sizeInGB = 161309L;
                                                                        throughput = 995300L;
                                                                        volumeType = "mollitia";
                                                                    }};
                                                                    volumesPerInstance = 414369L;
                                                                }}),
                                                                add(new EbsBlockDeviceConfig(                new VolumeSpecification(778346L, "sequi") {{
                                                                                    iops = 949572L;
                                                                                    throughput = 368725L;
                                                                                }};) {{
                                                                    volumeSpecification = new VolumeSpecification(656330L, "enim") {{
                                                                        iops = 158969L;
                                                                        sizeInGB = 338007L;
                                                                        throughput = 110375L;
                                                                        volumeType = "laborum";
                                                                    }};
                                                                    volumesPerInstance = 138183L;
                                                                }}),
                                                            }};
                                                            ebsOptimized = false;
                                                        }};
                                                        instanceType = "id";
                                                        weightedCapacity = 820994L;
                                                    }}),
                                                    add(new InstanceTypeConfig("tempore") {{
                                                        bidPrice = "quasi";
                                                        bidPriceAsPercentageOfOnDemandPrice = 6228.46;
                                                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                            add(new Configuration() {{
                                                                classification = "laborum";
                                                                configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                                    add(new Configuration() {{}}),
                                                                }};
                                                                properties = new java.util.HashMap<String, String>() {{
                                                                    put("voluptatibus", "vero");
                                                                    put("nihil", "praesentium");
                                                                    put("voluptatibus", "ipsa");
                                                                    put("omnis", "voluptate");
                                                                }};
                                                            }}),
                                                            add(new Configuration() {{
                                                                classification = "cum";
                                                                configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                                    add(new Configuration() {{}}),
                                                                }};
                                                                properties = new java.util.HashMap<String, String>() {{
                                                                    put("reprehenderit", "ut");
                                                                }};
                                                            }}),
                                                            add(new Configuration() {{
                                                                classification = "maiores";
                                                                configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                                    add(new Configuration() {{}}),
                                                                }};
                                                                properties = new java.util.HashMap<String, String>() {{
                                                                    put("dolore", "iusto");
                                                                    put("dicta", "harum");
                                                                }};
                                                            }}),
                                                            add(new Configuration() {{
                                                                classification = "enim";
                                                                configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                                    add(new Configuration() {{}}),
                                                                    add(new Configuration() {{}}),
                                                                    add(new Configuration() {{}}),
                                                                    add(new Configuration() {{}}),
                                                                }};
                                                                properties = new java.util.HashMap<String, String>() {{
                                                                    put("repudiandae", "quae");
                                                                    put("ipsum", "quidem");
                                                                }};
                                                            }}),
                                                        }};
                                                        customAmiId = "molestias";
                                                        ebsConfiguration = new EbsConfiguration() {{
                                                            ebsBlockDeviceConfigs = new org.openapis.openapi.models.shared.EbsBlockDeviceConfig[]{{
                                                                add(new EbsBlockDeviceConfig(                new VolumeSpecification(575947L, "veritatis") {{
                                                                                    iops = 929297L;
                                                                                    throughput = 277718L;
                                                                                }};) {{
                                                                    volumeSpecification = new VolumeSpecification(916723L, "quasi") {{
                                                                        iops = 865103L;
                                                                        sizeInGB = 265389L;
                                                                        throughput = 508969L;
                                                                        volumeType = "rem";
                                                                    }};
                                                                    volumesPerInstance = 921158L;
                                                                }}),
                                                                add(new EbsBlockDeviceConfig(                new VolumeSpecification(841386L, "labore") {{
                                                                                    iops = 264730L;
                                                                                    throughput = 183191L;
                                                                                }};) {{
                                                                    volumeSpecification = new VolumeSpecification(131797L, "deserunt") {{
                                                                        iops = 318569L;
                                                                        sizeInGB = 9356L;
                                                                        throughput = 667411L;
                                                                        volumeType = "quibusdam";
                                                                    }};
                                                                    volumesPerInstance = 716327L;
                                                                }}),
                                                                add(new EbsBlockDeviceConfig(                new VolumeSpecification(4695L, "fugit") {{
                                                                                    iops = 677817L;
                                                                                    throughput = 569618L;
                                                                                }};) {{
                                                                    volumeSpecification = new VolumeSpecification(164940L, "assumenda") {{
                                                                        iops = 397821L;
                                                                        sizeInGB = 586513L;
                                                                        throughput = 552822L;
                                                                        volumeType = "perferendis";
                                                                    }};
                                                                    volumesPerInstance = 369808L;
                                                                }}),
                                                            }};
                                                            ebsOptimized = false;
                                                        }};
                                                        instanceType = "tempora";
                                                        weightedCapacity = 703737L;
                                                    }}),
                                                    add(new InstanceTypeConfig("mollitia") {{
                                                        bidPrice = "labore";
                                                        bidPriceAsPercentageOfOnDemandPrice = 9621.89;
                                                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                            add(new Configuration() {{
                                                                classification = "non";
                                                                configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                                    add(new Configuration() {{}}),
                                                                    add(new Configuration() {{}}),
                                                                    add(new Configuration() {{}}),
                                                                    add(new Configuration() {{}}),
                                                                }};
                                                                properties = new java.util.HashMap<String, String>() {{
                                                                    put("aliquid", "provident");
                                                                    put("necessitatibus", "sint");
                                                                    put("officia", "dolor");
                                                                }};
                                                            }}),
                                                            add(new Configuration() {{
                                                                classification = "debitis";
                                                                configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                                    add(new Configuration() {{}}),
                                                                    add(new Configuration() {{}}),
                                                                    add(new Configuration() {{}}),
                                                                    add(new Configuration() {{}}),
                                                                }};
                                                                properties = new java.util.HashMap<String, String>() {{
                                                                    put("in", "in");
                                                                    put("illum", "maiores");
                                                                    put("rerum", "dicta");
                                                                }};
                                                            }}),
                                                        }};
                                                        customAmiId = "magnam";
                                                        ebsConfiguration = new EbsConfiguration() {{
                                                            ebsBlockDeviceConfigs = new org.openapis.openapi.models.shared.EbsBlockDeviceConfig[]{{
                                                                add(new EbsBlockDeviceConfig(                new VolumeSpecification(313218L, "accusamus") {{
                                                                                    iops = 965417L;
                                                                                    throughput = 692532L;
                                                                                }};) {{
                                                                    volumeSpecification = new VolumeSpecification(881104L, "non") {{
                                                                        iops = 813798L;
                                                                        sizeInGB = 411820L;
                                                                        throughput = 396506L;
                                                                        volumeType = "laborum";
                                                                    }};
                                                                    volumesPerInstance = 581273L;
                                                                }}),
                                                                add(new EbsBlockDeviceConfig(                new VolumeSpecification(643990L, "nisi") {{
                                                                                    iops = 423855L;
                                                                                    throughput = 618809L;
                                                                                }};) {{
                                                                    volumeSpecification = new VolumeSpecification(533206L, "sapiente") {{
                                                                        iops = 588465L;
                                                                        sizeInGB = 725255L;
                                                                        throughput = 659669L;
                                                                        volumeType = "blanditiis";
                                                                    }};
                                                                    volumesPerInstance = 230533L;
                                                                }}),
                                                                add(new EbsBlockDeviceConfig(                new VolumeSpecification(287991L, "labore") {{
                                                                                    iops = 383462L;
                                                                                    throughput = 618016L;
                                                                                }};) {{
                                                                    volumeSpecification = new VolumeSpecification(301575L, "distinctio") {{
                                                                        iops = 606393L;
                                                                        sizeInGB = 474867L;
                                                                        throughput = 19193L;
                                                                        volumeType = "nihil";
                                                                    }};
                                                                    volumesPerInstance = 660174L;
                                                                }}),
                                                                add(new EbsBlockDeviceConfig(                new VolumeSpecification(569965L, "ullam") {{
                                                                                    iops = 590873L;
                                                                                    throughput = 551816L;
                                                                                }};) {{
                                                                    volumeSpecification = new VolumeSpecification(102863L, "magnam") {{
                                                                        iops = 749170L;
                                                                        sizeInGB = 428769L;
                                                                        throughput = 878453L;
                                                                        volumeType = "aspernatur";
                                                                    }};
                                                                    volumesPerInstance = 92373L;
                                                                }}),
                                                            }};
                                                            ebsOptimized = false;
                                                        }};
                                                        instanceType = "sint";
                                                        weightedCapacity = 33625L;
                                                    }}),
                                                }};
                                                launchSpecifications = new InstanceFleetProvisioningSpecifications() {{
                                                    onDemandSpecification = new OnDemandProvisioningSpecification(OnDemandProvisioningAllocationStrategyEnum.LOWEST_PRICE) {{
                                                        capacityReservationOptions = new OnDemandCapacityReservationOptions() {{
                                                            capacityReservationPreference = OnDemandCapacityReservationPreferenceEnum.NONE;
                                                            capacityReservationResourceGroupArn = "mollitia";
                                                            usageStrategy = OnDemandCapacityReservationUsageStrategyEnum.USE_CAPACITY_RESERVATIONS_FIRST;
                                                        }};;
                                                    }};;
                                                    spotSpecification = new SpotProvisioningSpecification(SpotProvisioningTimeoutActionEnum.SWITCH_TO_ON_DEMAND, 431418L) {{
                                                        allocationStrategy = SpotProvisioningAllocationStrategyEnum.CAPACITY_OPTIMIZED;
                                                        blockDurationMinutes = 221262L;
                                                    }};;
                                                }};;
                                                name = "Ms. Fred Hilll";
                                                resizeSpecifications = new InstanceFleetResizingSpecifications() {{
                                                    onDemandResizeSpecification = new OnDemandResizingSpecification(891924L);;
                                                    spotResizeSpecification = new SpotResizingSpecification(260341L);;
                                                }};;
                                                targetOnDemandCapacity = 806194L;
                                                targetSpotCapacity = 537023L;
                                            }};);, AddInstanceFleetXAmzTargetEnum.ELASTIC_MAP_REDUCE_ADD_INSTANCE_FLEET) {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "in";
                xAmzCredential = "architecto";
                xAmzDate = "architecto";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "expedita";
            }};            

            AddInstanceFleetResponse res = sdk.addInstanceFleet(req);

            if (res.addInstanceFleetOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->