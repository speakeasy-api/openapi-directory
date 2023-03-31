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

<!-- Start SDK Available Operations -->
## SDK Available Operations

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
