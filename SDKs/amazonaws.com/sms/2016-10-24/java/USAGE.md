<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAppRequest;
import org.openapis.openapi.models.operations.CreateAppResponse;
import org.openapis.openapi.models.operations.CreateAppXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateAppRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Server;
import org.openapis.openapi.models.shared.ServerGroup;
import org.openapis.openapi.models.shared.ServerTypeEnum;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.VmManagerTypeEnum;
import org.openapis.openapi.models.shared.VmServer;
import org.openapis.openapi.models.shared.VmServerAddress;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAppRequest req = new CreateAppRequest(                new CreateAppRequest() {{
                                clientToken = "provident";
                                description = "distinctio";
                                name = "Stuart Stiedemann";
                                roleName = "vel";
                                serverGroups = new org.openapis.openapi.models.shared.ServerGroup[]{{
                                    add(new ServerGroup() {{
                                        name = "Rick Kertzmann";
                                        serverGroupId = "ipsa";
                                        serverList = new org.openapis.openapi.models.shared.Server[]{{
                                            add(new Server() {{
                                                replicationJobId = "tempora";
                                                replicationJobTerminated = false;
                                                serverId = "suscipit";
                                                serverType = ServerTypeEnum.VIRTUAL_MACHINE;
                                                vmServer = new VmServer() {{
                                                    vmManagerName = "molestiae";
                                                    vmManagerType = VmManagerTypeEnum.HYPERV_MANAGER;
                                                    vmName = "placeat";
                                                    vmPath = "voluptatum";
                                                    vmServerAddress = new VmServerAddress() {{
                                                        vmId = "iusto";
                                                        vmManagerId = "excepturi";
                                                    }};
                                                }};
                                            }}),
                                            add(new Server() {{
                                                replicationJobId = "nisi";
                                                replicationJobTerminated = false;
                                                serverId = "recusandae";
                                                serverType = ServerTypeEnum.VIRTUAL_MACHINE;
                                                vmServer = new VmServer() {{
                                                    vmManagerName = "temporibus";
                                                    vmManagerType = VmManagerTypeEnum.VSPHERE;
                                                    vmName = "quis";
                                                    vmPath = "veritatis";
                                                    vmServerAddress = new VmServerAddress() {{
                                                        vmId = "deserunt";
                                                        vmManagerId = "perferendis";
                                                    }};
                                                }};
                                            }}),
                                            add(new Server() {{
                                                replicationJobId = "ipsam";
                                                replicationJobTerminated = false;
                                                serverId = "repellendus";
                                                serverType = ServerTypeEnum.VIRTUAL_MACHINE;
                                                vmServer = new VmServer() {{
                                                    vmManagerName = "sapiente";
                                                    vmManagerType = VmManagerTypeEnum.HYPERV_MANAGER;
                                                    vmName = "odit";
                                                    vmPath = "at";
                                                    vmServerAddress = new VmServerAddress() {{
                                                        vmId = "at";
                                                        vmManagerId = "maiores";
                                                    }};
                                                }};
                                            }}),
                                            add(new Server() {{
                                                replicationJobId = "molestiae";
                                                replicationJobTerminated = false;
                                                serverId = "quod";
                                                serverType = ServerTypeEnum.VIRTUAL_MACHINE;
                                                vmServer = new VmServer() {{
                                                    vmManagerName = "quod";
                                                    vmManagerType = VmManagerTypeEnum.SCVMM;
                                                    vmName = "totam";
                                                    vmPath = "porro";
                                                    vmServerAddress = new VmServerAddress() {{
                                                        vmId = "dolorum";
                                                        vmManagerId = "dicta";
                                                    }};
                                                }};
                                            }}),
                                        }};
                                    }}),
                                    add(new ServerGroup() {{
                                        name = "Luke McCullough";
                                        serverGroupId = "hic";
                                        serverList = new org.openapis.openapi.models.shared.Server[]{{
                                            add(new Server() {{
                                                replicationJobId = "totam";
                                                replicationJobTerminated = false;
                                                serverId = "beatae";
                                                serverType = ServerTypeEnum.VIRTUAL_MACHINE;
                                                vmServer = new VmServer() {{
                                                    vmManagerName = "commodi";
                                                    vmManagerType = VmManagerTypeEnum.SCVMM;
                                                    vmName = "modi";
                                                    vmPath = "qui";
                                                    vmServerAddress = new VmServerAddress() {{
                                                        vmId = "impedit";
                                                        vmManagerId = "cum";
                                                    }};
                                                }};
                                            }}),
                                            add(new Server() {{
                                                replicationJobId = "esse";
                                                replicationJobTerminated = false;
                                                serverId = "ipsum";
                                                serverType = ServerTypeEnum.VIRTUAL_MACHINE;
                                                vmServer = new VmServer() {{
                                                    vmManagerName = "excepturi";
                                                    vmManagerType = VmManagerTypeEnum.VSPHERE;
                                                    vmName = "perferendis";
                                                    vmPath = "ad";
                                                    vmServerAddress = new VmServerAddress() {{
                                                        vmId = "natus";
                                                        vmManagerId = "sed";
                                                    }};
                                                }};
                                            }}),
                                            add(new Server() {{
                                                replicationJobId = "iste";
                                                replicationJobTerminated = false;
                                                serverId = "dolor";
                                                serverType = ServerTypeEnum.VIRTUAL_MACHINE;
                                                vmServer = new VmServer() {{
                                                    vmManagerName = "natus";
                                                    vmManagerType = VmManagerTypeEnum.SCVMM;
                                                    vmName = "hic";
                                                    vmPath = "saepe";
                                                    vmServerAddress = new VmServerAddress() {{
                                                        vmId = "fuga";
                                                        vmManagerId = "in";
                                                    }};
                                                }};
                                            }}),
                                            add(new Server() {{
                                                replicationJobId = "corporis";
                                                replicationJobTerminated = false;
                                                serverId = "iste";
                                                serverType = ServerTypeEnum.VIRTUAL_MACHINE;
                                                vmServer = new VmServer() {{
                                                    vmManagerName = "iure";
                                                    vmManagerType = VmManagerTypeEnum.HYPERV_MANAGER;
                                                    vmName = "quidem";
                                                    vmPath = "architecto";
                                                    vmServerAddress = new VmServerAddress() {{
                                                        vmId = "ipsa";
                                                        vmManagerId = "reiciendis";
                                                    }};
                                                }};
                                            }}),
                                        }};
                                    }}),
                                    add(new ServerGroup() {{
                                        name = "Shaun Osinski";
                                        serverGroupId = "corporis";
                                        serverList = new org.openapis.openapi.models.shared.Server[]{{
                                            add(new Server() {{
                                                replicationJobId = "nobis";
                                                replicationJobTerminated = false;
                                                serverId = "enim";
                                                serverType = ServerTypeEnum.VIRTUAL_MACHINE;
                                                vmServer = new VmServer() {{
                                                    vmManagerName = "omnis";
                                                    vmManagerType = VmManagerTypeEnum.SCVMM;
                                                    vmName = "minima";
                                                    vmPath = "excepturi";
                                                    vmServerAddress = new VmServerAddress() {{
                                                        vmId = "accusantium";
                                                        vmManagerId = "iure";
                                                    }};
                                                }};
                                            }}),
                                        }};
                                    }}),
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "doloribus";
                                        value = "sapiente";
                                    }}),
                                    add(new Tag() {{
                                        key = "architecto";
                                        value = "mollitia";
                                    }}),
                                    add(new Tag() {{
                                        key = "dolorem";
                                        value = "culpa";
                                    }}),
                                }};
                            }};, CreateAppXAmzTargetEnum.AWS_SERVER_MIGRATION_SERVICE_V20161024_CREATE_APP) {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "repellat";
                xAmzCredential = "mollitia";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "quam";
            }};            

            CreateAppResponse res = sdk.createApp(req);

            if (res.createAppResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->