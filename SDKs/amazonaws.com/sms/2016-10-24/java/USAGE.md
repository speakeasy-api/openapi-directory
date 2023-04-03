<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateAppXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateAppRequest;
import org.openapis.openapi.models.operations.CreateAppResponse;
import org.openapis.openapi.models.shared.CreateAppRequest;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.ServerGroup;
import org.openapis.openapi.models.shared.Server;
import org.openapis.openapi.models.shared.VmServer;
import org.openapis.openapi.models.shared.VmServerAddress;
import org.openapis.openapi.models.shared.VmManagerTypeEnum;
import org.openapis.openapi.models.shared.ServerTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAppRequest req = new CreateAppRequest() {{
                createAppRequest = new CreateAppRequest() {{
                    clientToken = "corrupti";
                    description = "provident";
                    name = "distinctio";
                    roleName = "quibusdam";
                    serverGroups = new org.openapis.openapi.models.shared.ServerGroup[]{{
                        add(new ServerGroup() {{
                            name = "nulla";
                            serverGroupId = "corrupti";
                            serverList = new org.openapis.openapi.models.shared.Server[]{{
                                add(new Server() {{
                                    replicationJobId = "vel";
                                    replicationJobTerminated = false;
                                    serverId = "error";
                                    serverType = "VIRTUAL_MACHINE";
                                    vmServer = new VmServer() {{
                                        vmManagerName = "deserunt";
                                        vmManagerType = "SCVMM";
                                        vmName = "iure";
                                        vmPath = "magnam";
                                        vmServerAddress = new VmServerAddress() {{
                                            vmId = "debitis";
                                            vmManagerId = "ipsa";
                                        }};
                                    }};
                                }}),
                                add(new Server() {{
                                    replicationJobId = "delectus";
                                    replicationJobTerminated = false;
                                    serverId = "tempora";
                                    serverType = "VIRTUAL_MACHINE";
                                    vmServer = new VmServer() {{
                                        vmManagerName = "suscipit";
                                        vmManagerType = "SCVMM";
                                        vmName = "minus";
                                        vmPath = "placeat";
                                        vmServerAddress = new VmServerAddress() {{
                                            vmId = "voluptatum";
                                            vmManagerId = "iusto";
                                        }};
                                    }};
                                }}),
                                add(new Server() {{
                                    replicationJobId = "excepturi";
                                    replicationJobTerminated = false;
                                    serverId = "nisi";
                                    serverType = "VIRTUAL_MACHINE";
                                    vmServer = new VmServer() {{
                                        vmManagerName = "recusandae";
                                        vmManagerType = "HYPERV-MANAGER";
                                        vmName = "ab";
                                        vmPath = "quis";
                                        vmServerAddress = new VmServerAddress() {{
                                            vmId = "veritatis";
                                            vmManagerId = "deserunt";
                                        }};
                                    }};
                                }}),
                                add(new Server() {{
                                    replicationJobId = "perferendis";
                                    replicationJobTerminated = false;
                                    serverId = "ipsam";
                                    serverType = "VIRTUAL_MACHINE";
                                    vmServer = new VmServer() {{
                                        vmManagerName = "repellendus";
                                        vmManagerType = "HYPERV-MANAGER";
                                        vmName = "quo";
                                        vmPath = "odit";
                                        vmServerAddress = new VmServerAddress() {{
                                            vmId = "at";
                                            vmManagerId = "at";
                                        }};
                                    }};
                                }}),
                            }};
                        }}),
                        add(new ServerGroup() {{
                            name = "maiores";
                            serverGroupId = "molestiae";
                            serverList = new org.openapis.openapi.models.shared.Server[]{{
                                add(new Server() {{
                                    replicationJobId = "quod";
                                    replicationJobTerminated = false;
                                    serverId = "esse";
                                    serverType = "VIRTUAL_MACHINE";
                                    vmServer = new VmServer() {{
                                        vmManagerName = "totam";
                                        vmManagerType = "HYPERV-MANAGER";
                                        vmName = "dolorum";
                                        vmPath = "dicta";
                                        vmServerAddress = new VmServerAddress() {{
                                            vmId = "nam";
                                            vmManagerId = "officia";
                                        }};
                                    }};
                                }}),
                                add(new Server() {{
                                    replicationJobId = "occaecati";
                                    replicationJobTerminated = false;
                                    serverId = "fugit";
                                    serverType = "VIRTUAL_MACHINE";
                                    vmServer = new VmServer() {{
                                        vmManagerName = "deleniti";
                                        vmManagerType = "HYPERV-MANAGER";
                                        vmName = "optio";
                                        vmPath = "totam";
                                        vmServerAddress = new VmServerAddress() {{
                                            vmId = "beatae";
                                            vmManagerId = "commodi";
                                        }};
                                    }};
                                }}),
                                add(new Server() {{
                                    replicationJobId = "molestiae";
                                    replicationJobTerminated = false;
                                    serverId = "modi";
                                    serverType = "VIRTUAL_MACHINE";
                                    vmServer = new VmServer() {{
                                        vmManagerName = "qui";
                                        vmManagerType = "HYPERV-MANAGER";
                                        vmName = "cum";
                                        vmPath = "esse";
                                        vmServerAddress = new VmServerAddress() {{
                                            vmId = "ipsum";
                                            vmManagerId = "excepturi";
                                        }};
                                    }};
                                }}),
                                add(new Server() {{
                                    replicationJobId = "aspernatur";
                                    replicationJobTerminated = false;
                                    serverId = "perferendis";
                                    serverType = "VIRTUAL_MACHINE";
                                    vmServer = new VmServer() {{
                                        vmManagerName = "ad";
                                        vmManagerType = "SCVMM";
                                        vmName = "sed";
                                        vmPath = "iste";
                                        vmServerAddress = new VmServerAddress() {{
                                            vmId = "dolor";
                                            vmManagerId = "natus";
                                        }};
                                    }};
                                }}),
                            }};
                        }}),
                        add(new ServerGroup() {{
                            name = "laboriosam";
                            serverGroupId = "hic";
                            serverList = new org.openapis.openapi.models.shared.Server[]{{
                                add(new Server() {{
                                    replicationJobId = "fuga";
                                    replicationJobTerminated = false;
                                    serverId = "in";
                                    serverType = "VIRTUAL_MACHINE";
                                    vmServer = new VmServer() {{
                                        vmManagerName = "corporis";
                                        vmManagerType = "SCVMM";
                                        vmName = "iure";
                                        vmPath = "saepe";
                                        vmServerAddress = new VmServerAddress() {{
                                            vmId = "quidem";
                                            vmManagerId = "architecto";
                                        }};
                                    }};
                                }}),
                                add(new Server() {{
                                    replicationJobId = "ipsa";
                                    replicationJobTerminated = false;
                                    serverId = "reiciendis";
                                    serverType = "VIRTUAL_MACHINE";
                                    vmServer = new VmServer() {{
                                        vmManagerName = "est";
                                        vmManagerType = "SCVMM";
                                        vmName = "laborum";
                                        vmPath = "dolores";
                                        vmServerAddress = new VmServerAddress() {{
                                            vmId = "dolorem";
                                            vmManagerId = "corporis";
                                        }};
                                    }};
                                }}),
                                add(new Server() {{
                                    replicationJobId = "explicabo";
                                    replicationJobTerminated = false;
                                    serverId = "nobis";
                                    serverType = "VIRTUAL_MACHINE";
                                    vmServer = new VmServer() {{
                                        vmManagerName = "enim";
                                        vmManagerType = "SCVMM";
                                        vmName = "nemo";
                                        vmPath = "minima";
                                        vmServerAddress = new VmServerAddress() {{
                                            vmId = "excepturi";
                                            vmManagerId = "accusantium";
                                        }};
                                    }};
                                }}),
                                add(new Server() {{
                                    replicationJobId = "iure";
                                    replicationJobTerminated = false;
                                    serverId = "culpa";
                                    serverType = "VIRTUAL_MACHINE";
                                    vmServer = new VmServer() {{
                                        vmManagerName = "doloribus";
                                        vmManagerType = "HYPERV-MANAGER";
                                        vmName = "architecto";
                                        vmPath = "mollitia";
                                        vmServerAddress = new VmServerAddress() {{
                                            vmId = "dolorem";
                                            vmManagerId = "culpa";
                                        }};
                                    }};
                                }}),
                            }};
                        }}),
                    }};
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "repellat";
                            value = "mollitia";
                        }}),
                    }};
                }};
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "commodi";
                xAmzDate = "quam";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "error";
                xAmzTarget = "AWSServerMigrationService_V2016_10_24.CreateApp";
            }}            

            CreateAppResponse res = sdk.createApp(req);

            if (res.createAppResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->