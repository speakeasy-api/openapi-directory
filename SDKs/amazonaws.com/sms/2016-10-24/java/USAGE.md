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
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "AWSServerMigrationService_V2016_10_24.CreateApp";
                }};
                request = new CreateAppRequest() {{
                    clientToken = "fugit";
                    description = "et";
                    name = "nihil";
                    roleName = "rerum";
                    serverGroups = new openapisdk.models.shared.ServerGroup[]() {{
                        add(new ServerGroup() {{
                            name = "debitis";
                            serverGroupId = "voluptatum";
                            serverList = new openapisdk.models.shared.Server[]() {{
                                add(new Server() {{
                                    replicationJobId = "ut";
                                    replicationJobTerminated = true;
                                    serverId = "et";
                                    serverType = "VIRTUAL_MACHINE";
                                    vmServer = new VmServer() {{
                                        vmManagerName = "iste";
                                        vmManagerType = "VSPHERE";
                                        vmName = "totam";
                                        vmPath = "dolores";
                                        vmServerAddress = new VmServerAddress() {{
                                            vmId = "illum";
                                            vmManagerId = "debitis";
                                        }};
                                    }};
                                }}),
                            }};
                        }}),
                        add(new ServerGroup() {{
                            name = "vel";
                            serverGroupId = "odio";
                            serverList = new openapisdk.models.shared.Server[]() {{
                                add(new Server() {{
                                    replicationJobId = "id";
                                    replicationJobTerminated = true;
                                    serverId = "accusantium";
                                    serverType = "VIRTUAL_MACHINE";
                                    vmServer = new VmServer() {{
                                        vmManagerName = "commodi";
                                        vmManagerType = "HYPERV-MANAGER";
                                        vmName = "est";
                                        vmPath = "aut";
                                        vmServerAddress = new VmServerAddress() {{
                                            vmId = "odit";
                                            vmManagerId = "non";
                                        }};
                                    }};
                                }}),
                                add(new Server() {{
                                    replicationJobId = "voluptas";
                                    replicationJobTerminated = true;
                                    serverId = "aut";
                                    serverType = "VIRTUAL_MACHINE";
                                    vmServer = new VmServer() {{
                                        vmManagerName = "sed";
                                        vmManagerType = "SCVMM";
                                        vmName = "autem";
                                        vmPath = "consectetur";
                                        vmServerAddress = new VmServerAddress() {{
                                            vmId = "nobis";
                                            vmManagerId = "odio";
                                        }};
                                    }};
                                }}),
                            }};
                        }}),
                        add(new ServerGroup() {{
                            name = "qui";
                            serverGroupId = "recusandae";
                            serverList = new openapisdk.models.shared.Server[]() {{
                                add(new Server() {{
                                    replicationJobId = "ipsum";
                                    replicationJobTerminated = true;
                                    serverId = "modi";
                                    serverType = "VIRTUAL_MACHINE";
                                    vmServer = new VmServer() {{
                                        vmManagerName = "inventore";
                                        vmManagerType = "HYPERV-MANAGER";
                                        vmName = "exercitationem";
                                        vmPath = "aut";
                                        vmServerAddress = new VmServerAddress() {{
                                            vmId = "reprehenderit";
                                            vmManagerId = "tempore";
                                        }};
                                    }};
                                }}),
                                add(new Server() {{
                                    replicationJobId = "maiores";
                                    replicationJobTerminated = false;
                                    serverId = "dolor";
                                    serverType = "VIRTUAL_MACHINE";
                                    vmServer = new VmServer() {{
                                        vmManagerName = "veritatis";
                                        vmManagerType = "HYPERV-MANAGER";
                                        vmName = "et";
                                        vmPath = "omnis";
                                        vmServerAddress = new VmServerAddress() {{
                                            vmId = "ipsum";
                                            vmManagerId = "ex";
                                        }};
                                    }};
                                }}),
                            }};
                        }}),
                    }};
                    tags = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "placeat";
                            value = "vel";
                        }}),
                        add(new Tag() {{
                            key = "rerum";
                            value = "mollitia";
                        }}),
                        add(new Tag() {{
                            key = "voluptas";
                            value = "quam";
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