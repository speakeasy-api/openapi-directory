<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            CreateAppRequest req = new CreateAppRequest() {{
                headers = new CreateAppHeaders() {{
                    xAmzAlgorithm = "doloremque";
                    xAmzContentSha256 = "eius";
                    xAmzCredential = "ut";
                    xAmzDate = "omnis";
                    xAmzSecurityToken = "qui";
                    xAmzSignature = "voluptate";
                    xAmzSignedHeaders = "quia";
                    xAmzTarget = "AWSServerMigrationService_V2016_10_24.CreateApp";
                }};
                request = new CreateAppRequest() {{
                    clientToken = "voluptates";
                    description = "voluptatem";
                    name = "iusto";
                    roleName = "laudantium";
                    serverGroups = new openapisdk.models.shared.ServerGroup[]() {{
                        add(new ServerGroup() {{
                            name = "ea";
                            serverGroupId = "qui";
                            serverList = new openapisdk.models.shared.Server[]() {{
                                add(new Server() {{
                                    replicationJobId = "sapiente";
                                    replicationJobTerminated = false;
                                    serverId = "consequatur";
                                    serverType = "VIRTUAL_MACHINE";
                                    vmServer = new VmServer() {{
                                        vmManagerName = "dolores";
                                        vmManagerType = "VSPHERE";
                                        vmName = "et";
                                        vmPath = "harum";
                                        vmServerAddress = new VmServerAddress() {{
                                            vmId = "iusto";
                                            vmManagerId = "corporis";
                                        }};
                                    }};
                                }}),
                                add(new Server() {{
                                    replicationJobId = "deleniti";
                                    replicationJobTerminated = true;
                                    serverId = "tempore";
                                    serverType = "VIRTUAL_MACHINE";
                                    vmServer = new VmServer() {{
                                        vmManagerName = "amet";
                                        vmManagerType = "VSPHERE";
                                        vmName = "quia";
                                        vmPath = "nihil";
                                        vmServerAddress = new VmServerAddress() {{
                                            vmId = "voluptas";
                                            vmManagerId = "quidem";
                                        }};
                                    }};
                                }}),
                            }};
                        }}),
                        add(new ServerGroup() {{
                            name = "quia";
                            serverGroupId = "voluptas";
                            serverList = new openapisdk.models.shared.Server[]() {{
                                add(new Server() {{
                                    replicationJobId = "earum";
                                    replicationJobTerminated = true;
                                    serverId = "est";
                                    serverType = "VIRTUAL_MACHINE";
                                    vmServer = new VmServer() {{
                                        vmManagerName = "soluta";
                                        vmManagerType = "SCVMM";
                                        vmName = "explicabo";
                                        vmPath = "corporis";
                                        vmServerAddress = new VmServerAddress() {{
                                            vmId = "quia";
                                            vmManagerId = "sunt";
                                        }};
                                    }};
                                }}),
                                add(new Server() {{
                                    replicationJobId = "necessitatibus";
                                    replicationJobTerminated = true;
                                    serverId = "voluptatem";
                                    serverType = "VIRTUAL_MACHINE";
                                    vmServer = new VmServer() {{
                                        vmManagerName = "quia";
                                        vmManagerType = "VSPHERE";
                                        vmName = "possimus";
                                        vmPath = "in";
                                        vmServerAddress = new VmServerAddress() {{
                                            vmId = "totam";
                                            vmManagerId = "excepturi";
                                        }};
                                    }};
                                }}),
                                add(new Server() {{
                                    replicationJobId = "rerum";
                                    replicationJobTerminated = false;
                                    serverId = "facilis";
                                    serverType = "VIRTUAL_MACHINE";
                                    vmServer = new VmServer() {{
                                        vmManagerName = "odio";
                                        vmManagerType = "VSPHERE";
                                        vmName = "aut";
                                        vmPath = "consectetur";
                                        vmServerAddress = new VmServerAddress() {{
                                            vmId = "nihil";
                                            vmManagerId = "similique";
                                        }};
                                    }};
                                }}),
                            }};
                        }}),
                        add(new ServerGroup() {{
                            name = "magnam";
                            serverGroupId = "mollitia";
                            serverList = new openapisdk.models.shared.Server[]() {{
                                add(new Server() {{
                                    replicationJobId = "magnam";
                                    replicationJobTerminated = false;
                                    serverId = "et";
                                    serverType = "VIRTUAL_MACHINE";
                                    vmServer = new VmServer() {{
                                        vmManagerName = "nisi";
                                        vmManagerType = "SCVMM";
                                        vmName = "quis";
                                        vmPath = "consequatur";
                                        vmServerAddress = new VmServerAddress() {{
                                            vmId = "qui";
                                            vmManagerId = "aut";
                                        }};
                                    }};
                                }}),
                                add(new Server() {{
                                    replicationJobId = "modi";
                                    replicationJobTerminated = false;
                                    serverId = "quia";
                                    serverType = "VIRTUAL_MACHINE";
                                    vmServer = new VmServer() {{
                                        vmManagerName = "eligendi";
                                        vmManagerType = "HYPERV-MANAGER";
                                        vmName = "perspiciatis";
                                        vmPath = "molestiae";
                                        vmServerAddress = new VmServerAddress() {{
                                            vmId = "voluptatem";
                                            vmManagerId = "autem";
                                        }};
                                    }};
                                }}),
                                add(new Server() {{
                                    replicationJobId = "sit";
                                    replicationJobTerminated = false;
                                    serverId = "molestias";
                                    serverType = "VIRTUAL_MACHINE";
                                    vmServer = new VmServer() {{
                                        vmManagerName = "voluptates";
                                        vmManagerType = "VSPHERE";
                                        vmName = "numquam";
                                        vmPath = "magni";
                                        vmServerAddress = new VmServerAddress() {{
                                            vmId = "veritatis";
                                            vmManagerId = "itaque";
                                        }};
                                    }};
                                }}),
                            }};
                        }}),
                    }};
                    tags = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "vitae";
                            value = "quo";
                        }}),
                        add(new Tag() {{
                            key = "corrupti";
                            value = "iusto";
                        }}),
                        add(new Tag() {{
                            key = "dolores";
                            value = "nobis";
                        }}),
                    }};
                }};
            }};

            CreateAppResponse res = sdk.createApp(req);

            if (res.createAppResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->