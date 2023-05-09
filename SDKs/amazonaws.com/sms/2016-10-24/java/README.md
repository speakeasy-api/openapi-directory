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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createApp](docs/sdk/README.md#createapp) - Creates an application. An application consists of one or more server groups. Each server group contain one or more servers.
* [createReplicationJob](docs/sdk/README.md#createreplicationjob) - Creates a replication job. The replication job schedules periodic replication runs to replicate your server to Amazon Web Services. Each replication run creates an Amazon Machine Image (AMI).
* [deleteApp](docs/sdk/README.md#deleteapp) - Deletes the specified application. Optionally deletes the launched stack associated with the application and all Server Migration Service replication jobs for servers in the application.
* [deleteAppLaunchConfiguration](docs/sdk/README.md#deleteapplaunchconfiguration) - Deletes the launch configuration for the specified application.
* [deleteAppReplicationConfiguration](docs/sdk/README.md#deleteappreplicationconfiguration) - Deletes the replication configuration for the specified application.
* [deleteAppValidationConfiguration](docs/sdk/README.md#deleteappvalidationconfiguration) - Deletes the validation configuration for the specified application.
* [deleteReplicationJob](docs/sdk/README.md#deletereplicationjob) - <p>Deletes the specified replication job.</p> <p>After you delete a replication job, there are no further replication runs. Amazon Web Services deletes the contents of the Amazon S3 bucket used to store Server Migration Service artifacts. The AMIs created by the replication runs are not deleted.</p>
* [deleteServerCatalog](docs/sdk/README.md#deleteservercatalog) - Deletes all servers from your server catalog.
* [disassociateConnector](docs/sdk/README.md#disassociateconnector) - <p>Disassociates the specified connector from Server Migration Service.</p> <p>After you disassociate a connector, it is no longer available to support replication jobs.</p>
* [generateChangeSet](docs/sdk/README.md#generatechangeset) - Generates a target change set for a currently launched stack and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.
* [generateTemplate](docs/sdk/README.md#generatetemplate) - Generates an CloudFormation template based on the current launch configuration and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.
* [getApp](docs/sdk/README.md#getapp) - Retrieve information about the specified application.
* [getAppLaunchConfiguration](docs/sdk/README.md#getapplaunchconfiguration) - Retrieves the application launch configuration associated with the specified application.
* [getAppReplicationConfiguration](docs/sdk/README.md#getappreplicationconfiguration) - Retrieves the application replication configuration associated with the specified application.
* [getAppValidationConfiguration](docs/sdk/README.md#getappvalidationconfiguration) - Retrieves information about a configuration for validating an application.
* [getAppValidationOutput](docs/sdk/README.md#getappvalidationoutput) - Retrieves output from validating an application.
* [getConnectors](docs/sdk/README.md#getconnectors) - Describes the connectors registered with the Server Migration Service.
* [getReplicationJobs](docs/sdk/README.md#getreplicationjobs) - Describes the specified replication job or all of your replication jobs.
* [getReplicationRuns](docs/sdk/README.md#getreplicationruns) - Describes the replication runs for the specified replication job.
* [getServers](docs/sdk/README.md#getservers) - <p>Describes the servers in your server catalog.</p> <p>Before you can describe your servers, you must import them using <a>ImportServerCatalog</a>.</p>
* [importAppCatalog](docs/sdk/README.md#importappcatalog) - Allows application import from Migration Hub.
* [importServerCatalog](docs/sdk/README.md#importservercatalog) - <p>Gathers a complete list of on-premises servers. Connectors must be installed and monitoring all servers to import.</p> <p>This call returns immediately, but might take additional time to retrieve all the servers.</p>
* [launchApp](docs/sdk/README.md#launchapp) - Launches the specified application as a stack in CloudFormation.
* [listApps](docs/sdk/README.md#listapps) - Retrieves summaries for all applications.
* [notifyAppValidationOutput](docs/sdk/README.md#notifyappvalidationoutput) - Provides information to Server Migration Service about whether application validation is successful.
* [putAppLaunchConfiguration](docs/sdk/README.md#putapplaunchconfiguration) - Creates or updates the launch configuration for the specified application.
* [putAppReplicationConfiguration](docs/sdk/README.md#putappreplicationconfiguration) - Creates or updates the replication configuration for the specified application.
* [putAppValidationConfiguration](docs/sdk/README.md#putappvalidationconfiguration) - Creates or updates a validation configuration for the specified application.
* [startAppReplication](docs/sdk/README.md#startappreplication) - Starts replicating the specified application by creating replication jobs for each server in the application.
* [startOnDemandAppReplication](docs/sdk/README.md#startondemandappreplication) - Starts an on-demand replication run for the specified application.
* [startOnDemandReplicationRun](docs/sdk/README.md#startondemandreplicationrun) - <p>Starts an on-demand replication run for the specified replication job. This replication run starts immediately. This replication run is in addition to the ones already scheduled.</p> <p>There is a limit on the number of on-demand replications runs that you can request in a 24-hour period.</p>
* [stopAppReplication](docs/sdk/README.md#stopappreplication) - Stops replicating the specified application by deleting the replication job for each server in the application.
* [terminateApp](docs/sdk/README.md#terminateapp) - Terminates the stack for the specified application.
* [updateApp](docs/sdk/README.md#updateapp) - Updates the specified application.
* [updateReplicationJob](docs/sdk/README.md#updatereplicationjob) - Updates the specified settings for the specified replication job.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
