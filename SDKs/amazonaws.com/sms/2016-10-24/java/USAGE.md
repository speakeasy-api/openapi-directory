<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateAppXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateAppHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateAppRequest req = new CreateAppRequest() {{
                headers = new CreateAppHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AWSServerMigrationService_V2016_10_24.CreateApp";
                }};
                request = new CreateAppRequest() {{
                    clientToken = "illum";
                    description = "vel";
                    name = "error";
                    roleName = "deserunt";
                    serverGroups = new org.openapis.openapi.models.shared.ServerGroup[]{{
                        add(new ServerGroup() {{
                            name = "iure";
                            serverGroupId = "magnam";
                            serverList = new org.openapis.openapi.models.shared.Server[]{{
                                add(new Server() {{
                                    replicationJobId = "ipsa";
                                    replicationJobTerminated = false;
                                    serverId = "delectus";
                                    serverType = "VIRTUAL_MACHINE";
                                    vmServer = new VmServer() {{
                                        vmManagerName = "tempora";
                                        vmManagerType = "SCVMM";
                                        vmName = "molestiae";
                                        vmPath = "minus";
                                        vmServerAddress = new VmServerAddress() {{
                                            vmId = "placeat";
                                            vmManagerId = "voluptatum";
                                        }};
                                    }};
                                }}),
                                add(new Server() {{
                                    replicationJobId = "iusto";
                                    replicationJobTerminated = false;
                                    serverId = "excepturi";
                                    serverType = "VIRTUAL_MACHINE";
                                    vmServer = new VmServer() {{
                                        vmManagerName = "nisi";
                                        vmManagerType = "HYPERV-MANAGER";
                                        vmName = "temporibus";
                                        vmPath = "ab";
                                        vmServerAddress = new VmServerAddress() {{
                                            vmId = "quis";
                                            vmManagerId = "veritatis";
                                        }};
                                    }};
                                }}),
                                add(new Server() {{
                                    replicationJobId = "deserunt";
                                    replicationJobTerminated = false;
                                    serverId = "perferendis";
                                    serverType = "VIRTUAL_MACHINE";
                                    vmServer = new VmServer() {{
                                        vmManagerName = "ipsam";
                                        vmManagerType = "HYPERV-MANAGER";
                                        vmName = "sapiente";
                                        vmPath = "quo";
                                        vmServerAddress = new VmServerAddress() {{
                                            vmId = "odit";
                                            vmManagerId = "at";
                                        }};
                                    }};
                                }}),
                                add(new Server() {{
                                    replicationJobId = "at";
                                    replicationJobTerminated = false;
                                    serverId = "maiores";
                                    serverType = "VIRTUAL_MACHINE";
                                    vmServer = new VmServer() {{
                                        vmManagerName = "molestiae";
                                        vmManagerType = "HYPERV-MANAGER";
                                        vmName = "quod";
                                        vmPath = "esse";
                                        vmServerAddress = new VmServerAddress() {{
                                            vmId = "totam";
                                            vmManagerId = "porro";
                                        }};
                                    }};
                                }}),
                            }};
                        }}),
                        add(new ServerGroup() {{
                            name = "dolorum";
                            serverGroupId = "dicta";
                            serverList = new org.openapis.openapi.models.shared.Server[]{{
                                add(new Server() {{
                                    replicationJobId = "officia";
                                    replicationJobTerminated = false;
                                    serverId = "occaecati";
                                    serverType = "VIRTUAL_MACHINE";
                                    vmServer = new VmServer() {{
                                        vmManagerName = "fugit";
                                        vmManagerType = "SCVMM";
                                        vmName = "hic";
                                        vmPath = "optio";
                                        vmServerAddress = new VmServerAddress() {{
                                            vmId = "totam";
                                            vmManagerId = "beatae";
                                        }};
                                    }};
                                }}),
                                add(new Server() {{
                                    replicationJobId = "commodi";
                                    replicationJobTerminated = false;
                                    serverId = "molestiae";
                                    serverType = "VIRTUAL_MACHINE";
                                    vmServer = new VmServer() {{
                                        vmManagerName = "modi";
                                        vmManagerType = "VSPHERE";
                                        vmName = "impedit";
                                        vmPath = "cum";
                                        vmServerAddress = new VmServerAddress() {{
                                            vmId = "esse";
                                            vmManagerId = "ipsum";
                                        }};
                                    }};
                                }}),
                                add(new Server() {{
                                    replicationJobId = "excepturi";
                                    replicationJobTerminated = false;
                                    serverId = "aspernatur";
                                    serverType = "VIRTUAL_MACHINE";
                                    vmServer = new VmServer() {{
                                        vmManagerName = "perferendis";
                                        vmManagerType = "VSPHERE";
                                        vmName = "natus";
                                        vmPath = "sed";
                                        vmServerAddress = new VmServerAddress() {{
                                            vmId = "iste";
                                            vmManagerId = "dolor";
                                        }};
                                    }};
                                }}),
                            }};
                        }}),
                    }};
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "laboriosam";
                            value = "hic";
                        }}),
                        add(new Tag() {{
                            key = "saepe";
                            value = "fuga";
                        }}),
                        add(new Tag() {{
                            key = "in";
                            value = "corporis";
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