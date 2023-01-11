# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createApp` - Creates an application. An application consists of one or more server groups. Each server group contain one or more servers.
* `createReplicationJob` - Creates a replication job. The replication job schedules periodic replication runs to replicate your server to AWS. Each replication run creates an Amazon Machine Image (AMI).
* `deleteApp` - Deletes the specified application. Optionally deletes the launched stack associated with the application and all AWS SMS replication jobs for servers in the application.
* `deleteAppLaunchConfiguration` - Deletes the launch configuration for the specified application.
* `deleteAppReplicationConfiguration` - Deletes the replication configuration for the specified application.
* `deleteAppValidationConfiguration` - Deletes the validation configuration for the specified application.
* `deleteReplicationJob` - <p>Deletes the specified replication job.</p> <p>After you delete a replication job, there are no further replication runs. AWS deletes the contents of the Amazon S3 bucket used to store AWS SMS artifacts. The AMIs created by the replication runs are not deleted.</p>
* `deleteServerCatalog` - Deletes all servers from your server catalog.
* `disassociateConnector` - <p>Disassociates the specified connector from AWS SMS.</p> <p>After you disassociate a connector, it is no longer available to support replication jobs.</p>
* `generateChangeSet` - Generates a target change set for a currently launched stack and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.
* `generateTemplate` - Generates an AWS CloudFormation template based on the current launch configuration and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.
* `getApp` - Retrieve information about the specified application.
* `getAppLaunchConfiguration` - Retrieves the application launch configuration associated with the specified application.
* `getAppReplicationConfiguration` - Retrieves the application replication configuration associated with the specified application.
* `getAppValidationConfiguration` - Retrieves information about a configuration for validating an application.
* `getAppValidationOutput` - Retrieves output from validating an application.
* `getConnectors` - Describes the connectors registered with the AWS SMS.
* `getReplicationJobs` - Describes the specified replication job or all of your replication jobs.
* `getReplicationRuns` - Describes the replication runs for the specified replication job.
* `getServers` - <p>Describes the servers in your server catalog.</p> <p>Before you can describe your servers, you must import them using <a>ImportServerCatalog</a>.</p>
* `importAppCatalog` - Allows application import from AWS Migration Hub.
* `importServerCatalog` - <p>Gathers a complete list of on-premises servers. Connectors must be installed and monitoring all servers to import.</p> <p>This call returns immediately, but might take additional time to retrieve all the servers.</p>
* `launchApp` - Launches the specified application as a stack in AWS CloudFormation.
* `listApps` - Retrieves summaries for all applications.
* `notifyAppValidationOutput` - Provides information to AWS SMS about whether application validation is successful.
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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
