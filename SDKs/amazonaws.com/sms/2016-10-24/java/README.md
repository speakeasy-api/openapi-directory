# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createApp` - Creates an application. An application consists of one or more server groups. Each server group contain one or more servers.
* `createReplicationJob` - Creates a replication job. The replication job schedules periodic replication runs to replicate your server to Amazon Web Services. Each replication run creates an Amazon Machine Image (AMI).
* `deleteApp` - Deletes the specified application. Optionally deletes the launched stack associated with the application and all Server Migration Service replication jobs for servers in the application.
* `deleteAppLaunchConfiguration` - Deletes the launch configuration for the specified application.
* `deleteAppReplicationConfiguration` - Deletes the replication configuration for the specified application.
* `deleteAppValidationConfiguration` - Deletes the validation configuration for the specified application.
* `deleteReplicationJob` - <p>Deletes the specified replication job.</p> <p>After you delete a replication job, there are no further replication runs. Amazon Web Services deletes the contents of the Amazon S3 bucket used to store Server Migration Service artifacts. The AMIs created by the replication runs are not deleted.</p>
* `deleteServerCatalog` - Deletes all servers from your server catalog.
* `disassociateConnector` - <p>Disassociates the specified connector from Server Migration Service.</p> <p>After you disassociate a connector, it is no longer available to support replication jobs.</p>
* `generateChangeSet` - Generates a target change set for a currently launched stack and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.
* `generateTemplate` - Generates an CloudFormation template based on the current launch configuration and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.
* `getApp` - Retrieve information about the specified application.
* `getAppLaunchConfiguration` - Retrieves the application launch configuration associated with the specified application.
* `getAppReplicationConfiguration` - Retrieves the application replication configuration associated with the specified application.
* `getAppValidationConfiguration` - Retrieves information about a configuration for validating an application.
* `getAppValidationOutput` - Retrieves output from validating an application.
* `getConnectors` - Describes the connectors registered with the Server Migration Service.
* `getReplicationJobs` - Describes the specified replication job or all of your replication jobs.
* `getReplicationRuns` - Describes the replication runs for the specified replication job.
* `getServers` - <p>Describes the servers in your server catalog.</p> <p>Before you can describe your servers, you must import them using <a>ImportServerCatalog</a>.</p>
* `importAppCatalog` - Allows application import from Migration Hub.
* `importServerCatalog` - <p>Gathers a complete list of on-premises servers. Connectors must be installed and monitoring all servers to import.</p> <p>This call returns immediately, but might take additional time to retrieve all the servers.</p>
* `launchApp` - Launches the specified application as a stack in CloudFormation.
* `listApps` - Retrieves summaries for all applications.
* `notifyAppValidationOutput` - Provides information to Server Migration Service about whether application validation is successful.
* `putAppLaunchConfiguration` - Creates or updates the launch configuration for the specified application.
* `putAppReplicationConfiguration` - Creates or updates the replication configuration for the specified application.
* `putAppValidationConfiguration` - Creates or updates a validation configuration for the specified application.
* `startAppReplication` - Starts replicating the specified application by creating replication jobs for each server in the application.
* `startOnDemandAppReplication` - Starts an on-demand replication run for the specified application.
* `startOnDemandReplicationRun` - <p>Starts an on-demand replication run for the specified replication job. This replication run starts immediately. This replication run is in addition to the ones already scheduled.</p> <p>There is a limit on the number of on-demand replications runs that you can request in a 24-hour period.</p>
* `stopAppReplication` - Stops replicating the specified application by deleting the replication job for each server in the application.
* `terminateApp` - Terminates the stack for the specified application.
* `updateApp` - Updates the specified application.
* `updateReplicationJob` - Updates the specified settings for the specified replication job.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
