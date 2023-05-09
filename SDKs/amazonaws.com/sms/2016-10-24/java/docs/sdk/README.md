# SDK

## Overview

<important> <p> <b>Product update</b> </p> <p>We recommend <a href="http://aws.amazon.com/application-migration-service">Amazon Web Services Application Migration Service</a> (Amazon Web Services MGN) as the primary migration service for lift-and-shift migrations. If Amazon Web Services MGN is unavailable in a specific Amazon Web Services Region, you can use the Server Migration Service APIs through March 2023.</p> </important> <p>Server Migration Service (Server Migration Service) makes it easier and faster for you to migrate your on-premises workloads to Amazon Web Services. To learn more about Server Migration Service, see the following resources:</p> <ul> <li> <p> <a href="http://aws.amazon.com/server-migration-service/">Server Migration Service product page</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/server-migration-service/latest/userguide/">Server Migration Service User Guide</a> </p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/sms/>
### Available Operations

* [createApp](#createapp) - Creates an application. An application consists of one or more server groups. Each server group contain one or more servers.
* [createReplicationJob](#createreplicationjob) - Creates a replication job. The replication job schedules periodic replication runs to replicate your server to Amazon Web Services. Each replication run creates an Amazon Machine Image (AMI).
* [deleteApp](#deleteapp) - Deletes the specified application. Optionally deletes the launched stack associated with the application and all Server Migration Service replication jobs for servers in the application.
* [deleteAppLaunchConfiguration](#deleteapplaunchconfiguration) - Deletes the launch configuration for the specified application.
* [deleteAppReplicationConfiguration](#deleteappreplicationconfiguration) - Deletes the replication configuration for the specified application.
* [deleteAppValidationConfiguration](#deleteappvalidationconfiguration) - Deletes the validation configuration for the specified application.
* [deleteReplicationJob](#deletereplicationjob) - <p>Deletes the specified replication job.</p> <p>After you delete a replication job, there are no further replication runs. Amazon Web Services deletes the contents of the Amazon S3 bucket used to store Server Migration Service artifacts. The AMIs created by the replication runs are not deleted.</p>
* [deleteServerCatalog](#deleteservercatalog) - Deletes all servers from your server catalog.
* [disassociateConnector](#disassociateconnector) - <p>Disassociates the specified connector from Server Migration Service.</p> <p>After you disassociate a connector, it is no longer available to support replication jobs.</p>
* [generateChangeSet](#generatechangeset) - Generates a target change set for a currently launched stack and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.
* [generateTemplate](#generatetemplate) - Generates an CloudFormation template based on the current launch configuration and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.
* [getApp](#getapp) - Retrieve information about the specified application.
* [getAppLaunchConfiguration](#getapplaunchconfiguration) - Retrieves the application launch configuration associated with the specified application.
* [getAppReplicationConfiguration](#getappreplicationconfiguration) - Retrieves the application replication configuration associated with the specified application.
* [getAppValidationConfiguration](#getappvalidationconfiguration) - Retrieves information about a configuration for validating an application.
* [getAppValidationOutput](#getappvalidationoutput) - Retrieves output from validating an application.
* [getConnectors](#getconnectors) - Describes the connectors registered with the Server Migration Service.
* [getReplicationJobs](#getreplicationjobs) - Describes the specified replication job or all of your replication jobs.
* [getReplicationRuns](#getreplicationruns) - Describes the replication runs for the specified replication job.
* [getServers](#getservers) - <p>Describes the servers in your server catalog.</p> <p>Before you can describe your servers, you must import them using <a>ImportServerCatalog</a>.</p>
* [importAppCatalog](#importappcatalog) - Allows application import from Migration Hub.
* [importServerCatalog](#importservercatalog) - <p>Gathers a complete list of on-premises servers. Connectors must be installed and monitoring all servers to import.</p> <p>This call returns immediately, but might take additional time to retrieve all the servers.</p>
* [launchApp](#launchapp) - Launches the specified application as a stack in CloudFormation.
* [listApps](#listapps) - Retrieves summaries for all applications.
* [notifyAppValidationOutput](#notifyappvalidationoutput) - Provides information to Server Migration Service about whether application validation is successful.
* [putAppLaunchConfiguration](#putapplaunchconfiguration) - Creates or updates the launch configuration for the specified application.
* [putAppReplicationConfiguration](#putappreplicationconfiguration) - Creates or updates the replication configuration for the specified application.
* [putAppValidationConfiguration](#putappvalidationconfiguration) - Creates or updates a validation configuration for the specified application.
* [startAppReplication](#startappreplication) - Starts replicating the specified application by creating replication jobs for each server in the application.
* [startOnDemandAppReplication](#startondemandappreplication) - Starts an on-demand replication run for the specified application.
* [startOnDemandReplicationRun](#startondemandreplicationrun) - <p>Starts an on-demand replication run for the specified replication job. This replication run starts immediately. This replication run is in addition to the ones already scheduled.</p> <p>There is a limit on the number of on-demand replications runs that you can request in a 24-hour period.</p>
* [stopAppReplication](#stopappreplication) - Stops replicating the specified application by deleting the replication job for each server in the application.
* [terminateApp](#terminateapp) - Terminates the stack for the specified application.
* [updateApp](#updateapp) - Updates the specified application.
* [updateReplicationJob](#updatereplicationjob) - Updates the specified settings for the specified replication job.

## createApp

Creates an application. An application consists of one or more server groups. Each server group contain one or more servers.

### Example Usage

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
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAppRequest req = new CreateAppRequest(                new CreateAppRequest() {{
                                clientToken = "velit";
                                description = "error";
                                name = "Beatrice Brown";
                                roleName = "enim";
                                serverGroups = new org.openapis.openapi.models.shared.ServerGroup[]{{
                                    add(new ServerGroup() {{
                                        name = "Jimmy Wiegand";
                                        serverGroupId = "possimus";
                                        serverList = new org.openapis.openapi.models.shared.Server[]{{
                                            add(new Server() {{
                                                replicationJobId = "quasi";
                                                replicationJobTerminated = false;
                                                serverId = "error";
                                                serverType = ServerTypeEnum.VIRTUAL_MACHINE;
                                                vmServer = new VmServer() {{
                                                    vmManagerName = "temporibus";
                                                    vmManagerType = VmManagerTypeEnum.HYPERV_MANAGER;
                                                    vmName = "quasi";
                                                    vmPath = "reiciendis";
                                                    vmServerAddress = new VmServerAddress() {{
                                                        vmId = "voluptatibus";
                                                        vmManagerId = "vero";
                                                    }};
                                                }};
                                            }}),
                                        }};
                                    }}),
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "praesentium";
                                        value = "voluptatibus";
                                    }}),
                                    add(new Tag() {{
                                        key = "ipsa";
                                        value = "omnis";
                                    }}),
                                }};
                            }};, CreateAppXAmzTargetEnum.AWS_SERVER_MIGRATION_SERVICE_V20161024_CREATE_APP) {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "cum";
                xAmzCredential = "perferendis";
                xAmzDate = "doloremque";
                xAmzSecurityToken = "reprehenderit";
                xAmzSignature = "ut";
                xAmzSignedHeaders = "maiores";
            }};            

            CreateAppResponse res = sdk.sdk.createApp(req);

            if (res.createAppResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createReplicationJob

Creates a replication job. The replication job schedules periodic replication runs to replicate your server to Amazon Web Services. Each replication run creates an Amazon Machine Image (AMI).

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateReplicationJobRequest;
import org.openapis.openapi.models.operations.CreateReplicationJobResponse;
import org.openapis.openapi.models.operations.CreateReplicationJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateReplicationJobRequest;
import org.openapis.openapi.models.shared.LicenseTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateReplicationJobRequest req = new CreateReplicationJobRequest(                new CreateReplicationJobRequest(OffsetDateTime.parse("2022-09-14T21:48:41.971Z"), "iusto") {{
                                description = "dicta";
                                encrypted = false;
                                frequency = 688661L;
                                kmsKeyId = "enim";
                                licenseType = LicenseTypeEnum.BYOL;
                                numberOfRecentAmisToKeep = 414263L;
                                roleName = "repudiandae";
                                runOnce = false;
                            }};, CreateReplicationJobXAmzTargetEnum.AWS_SERVER_MIGRATION_SERVICE_V20161024_CREATE_REPLICATION_JOB) {{
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "quidem";
                xAmzDate = "molestias";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "modi";
            }};            

            CreateReplicationJobResponse res = sdk.sdk.createReplicationJob(req);

            if (res.createReplicationJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApp

Deletes the specified application. Optionally deletes the launched stack associated with the application and all Server Migration Service replication jobs for servers in the application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAppRequest;
import org.openapis.openapi.models.operations.DeleteAppResponse;
import org.openapis.openapi.models.operations.DeleteAppXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteAppRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAppRequest req = new DeleteAppRequest(                new DeleteAppRequest() {{
                                appId = "rem";
                                forceStopAppReplication = false;
                                forceTerminateApp = false;
                            }};, DeleteAppXAmzTargetEnum.AWS_SERVER_MIGRATION_SERVICE_V20161024_DELETE_APP) {{
                xAmzAlgorithm = "voluptates";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "repudiandae";
                xAmzDate = "sint";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "itaque";
                xAmzSignedHeaders = "incidunt";
            }};            

            DeleteAppResponse res = sdk.sdk.deleteApp(req);

            if (res.deleteAppResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAppLaunchConfiguration

Deletes the launch configuration for the specified application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAppLaunchConfigurationRequest;
import org.openapis.openapi.models.operations.DeleteAppLaunchConfigurationResponse;
import org.openapis.openapi.models.operations.DeleteAppLaunchConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteAppLaunchConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAppLaunchConfigurationRequest req = new DeleteAppLaunchConfigurationRequest(                new DeleteAppLaunchConfigurationRequest() {{
                                appId = "consequatur";
                            }};, DeleteAppLaunchConfigurationXAmzTargetEnum.AWS_SERVER_MIGRATION_SERVICE_V20161024_DELETE_APP_LAUNCH_CONFIGURATION) {{
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "explicabo";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "labore";
            }};            

            DeleteAppLaunchConfigurationResponse res = sdk.sdk.deleteAppLaunchConfiguration(req);

            if (res.deleteAppLaunchConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAppReplicationConfiguration

Deletes the replication configuration for the specified application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAppReplicationConfigurationRequest;
import org.openapis.openapi.models.operations.DeleteAppReplicationConfigurationResponse;
import org.openapis.openapi.models.operations.DeleteAppReplicationConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteAppReplicationConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAppReplicationConfigurationRequest req = new DeleteAppReplicationConfigurationRequest(                new DeleteAppReplicationConfigurationRequest() {{
                                appId = "qui";
                            }};, DeleteAppReplicationConfigurationXAmzTargetEnum.AWS_SERVER_MIGRATION_SERVICE_V20161024_DELETE_APP_REPLICATION_CONFIGURATION) {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "quos";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "magni";
                xAmzSignature = "assumenda";
                xAmzSignedHeaders = "ipsam";
            }};            

            DeleteAppReplicationConfigurationResponse res = sdk.sdk.deleteAppReplicationConfiguration(req);

            if (res.deleteAppReplicationConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAppValidationConfiguration

Deletes the validation configuration for the specified application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAppValidationConfigurationRequest;
import org.openapis.openapi.models.operations.DeleteAppValidationConfigurationResponse;
import org.openapis.openapi.models.operations.DeleteAppValidationConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteAppValidationConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAppValidationConfigurationRequest req = new DeleteAppValidationConfigurationRequest(                new DeleteAppValidationConfigurationRequest("fugit");, DeleteAppValidationConfigurationXAmzTargetEnum.AWS_SERVER_MIGRATION_SERVICE_V20161024_DELETE_APP_VALIDATION_CONFIGURATION) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "tempora";
                xAmzDate = "facilis";
                xAmzSecurityToken = "tempore";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "delectus";
            }};            

            DeleteAppValidationConfigurationResponse res = sdk.sdk.deleteAppValidationConfiguration(req);

            if (res.deleteAppValidationConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteReplicationJob

<p>Deletes the specified replication job.</p> <p>After you delete a replication job, there are no further replication runs. Amazon Web Services deletes the contents of the Amazon S3 bucket used to store Server Migration Service artifacts. The AMIs created by the replication runs are not deleted.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteReplicationJobRequest;
import org.openapis.openapi.models.operations.DeleteReplicationJobResponse;
import org.openapis.openapi.models.operations.DeleteReplicationJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteReplicationJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteReplicationJobRequest req = new DeleteReplicationJobRequest(                new DeleteReplicationJobRequest("non");, DeleteReplicationJobXAmzTargetEnum.AWS_SERVER_MIGRATION_SERVICE_V20161024_DELETE_REPLICATION_JOB) {{
                xAmzAlgorithm = "eligendi";
                xAmzContentSha256 = "sint";
                xAmzCredential = "aliquid";
                xAmzDate = "provident";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "officia";
            }};            

            DeleteReplicationJobResponse res = sdk.sdk.deleteReplicationJob(req);

            if (res.deleteReplicationJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteServerCatalog

Deletes all servers from your server catalog.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteServerCatalogRequest;
import org.openapis.openapi.models.operations.DeleteServerCatalogResponse;
import org.openapis.openapi.models.operations.DeleteServerCatalogXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteServerCatalogRequest req = new DeleteServerCatalogRequest(                new java.util.HashMap<String, Object>() {{
                                put("a", "dolorum");
                                put("in", "in");
                                put("illum", "maiores");
                                put("rerum", "dicta");
                            }}, DeleteServerCatalogXAmzTargetEnum.AWS_SERVER_MIGRATION_SERVICE_V20161024_DELETE_SERVER_CATALOG) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "cumque";
                xAmzCredential = "facere";
                xAmzDate = "ea";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "accusamus";
            }};            

            DeleteServerCatalogResponse res = sdk.sdk.deleteServerCatalog(req);

            if (res.deleteServerCatalogResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateConnector

<p>Disassociates the specified connector from Server Migration Service.</p> <p>After you disassociate a connector, it is no longer available to support replication jobs.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateConnectorRequest;
import org.openapis.openapi.models.operations.DisassociateConnectorResponse;
import org.openapis.openapi.models.operations.DisassociateConnectorXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateConnectorRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateConnectorRequest req = new DisassociateConnectorRequest(                new DisassociateConnectorRequest("occaecati");, DisassociateConnectorXAmzTargetEnum.AWS_SERVER_MIGRATION_SERVICE_V20161024_DISASSOCIATE_CONNECTOR) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "delectus";
                xAmzDate = "quidem";
                xAmzSecurityToken = "provident";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "id";
            }};            

            DisassociateConnectorResponse res = sdk.sdk.disassociateConnector(req);

            if (res.disassociateConnectorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## generateChangeSet

Generates a target change set for a currently launched stack and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenerateChangeSetRequest;
import org.openapis.openapi.models.operations.GenerateChangeSetResponse;
import org.openapis.openapi.models.operations.GenerateChangeSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.GenerateChangeSetRequest;
import org.openapis.openapi.models.shared.OutputFormatEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GenerateChangeSetRequest req = new GenerateChangeSetRequest(                new GenerateChangeSetRequest() {{
                                appId = "deleniti";
                                changesetFormat = OutputFormatEnum.YAML;
                            }};, GenerateChangeSetXAmzTargetEnum.AWS_SERVER_MIGRATION_SERVICE_V20161024_GENERATE_CHANGE_SET) {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "nisi";
                xAmzDate = "vel";
                xAmzSecurityToken = "natus";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "molestiae";
            }};            

            GenerateChangeSetResponse res = sdk.sdk.generateChangeSet(req);

            if (res.generateChangeSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## generateTemplate

Generates an CloudFormation template based on the current launch configuration and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenerateTemplateRequest;
import org.openapis.openapi.models.operations.GenerateTemplateResponse;
import org.openapis.openapi.models.operations.GenerateTemplateXAmzTargetEnum;
import org.openapis.openapi.models.shared.GenerateTemplateRequest;
import org.openapis.openapi.models.shared.OutputFormatEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GenerateTemplateRequest req = new GenerateTemplateRequest(                new GenerateTemplateRequest() {{
                                appId = "nihil";
                                templateFormat = OutputFormatEnum.JSON;
                            }};, GenerateTemplateXAmzTargetEnum.AWS_SERVER_MIGRATION_SERVICE_V20161024_GENERATE_TEMPLATE) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "id";
                xAmzCredential = "labore";
                xAmzDate = "labore";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "nobis";
            }};            

            GenerateTemplateResponse res = sdk.sdk.generateTemplate(req);

            if (res.generateTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApp

Retrieve information about the specified application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAppRequest;
import org.openapis.openapi.models.operations.GetAppResponse;
import org.openapis.openapi.models.operations.GetAppXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetAppRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAppRequest req = new GetAppRequest(                new GetAppRequest() {{
                                appId = "vero";
                            }};, GetAppXAmzTargetEnum.AWS_SERVER_MIGRATION_SERVICE_V20161024_GET_APP) {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "magnam";
                xAmzDate = "et";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "provident";
            }};            

            GetAppResponse res = sdk.sdk.getApp(req);

            if (res.getAppResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAppLaunchConfiguration

Retrieves the application launch configuration associated with the specified application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAppLaunchConfigurationRequest;
import org.openapis.openapi.models.operations.GetAppLaunchConfigurationResponse;
import org.openapis.openapi.models.operations.GetAppLaunchConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetAppLaunchConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAppLaunchConfigurationRequest req = new GetAppLaunchConfigurationRequest(                new GetAppLaunchConfigurationRequest() {{
                                appId = "sint";
                            }};, GetAppLaunchConfigurationXAmzTargetEnum.AWS_SERVER_MIGRATION_SERVICE_V20161024_GET_APP_LAUNCH_CONFIGURATION) {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "reiciendis";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "ad";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "dolor";
            }};            

            GetAppLaunchConfigurationResponse res = sdk.sdk.getAppLaunchConfiguration(req);

            if (res.getAppLaunchConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAppReplicationConfiguration

Retrieves the application replication configuration associated with the specified application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAppReplicationConfigurationRequest;
import org.openapis.openapi.models.operations.GetAppReplicationConfigurationResponse;
import org.openapis.openapi.models.operations.GetAppReplicationConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetAppReplicationConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAppReplicationConfigurationRequest req = new GetAppReplicationConfigurationRequest(                new GetAppReplicationConfigurationRequest() {{
                                appId = "odit";
                            }};, GetAppReplicationConfigurationXAmzTargetEnum.AWS_SERVER_MIGRATION_SERVICE_V20161024_GET_APP_REPLICATION_CONFIGURATION) {{
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "iure";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "eius";
                xAmzSignedHeaders = "maxime";
            }};            

            GetAppReplicationConfigurationResponse res = sdk.sdk.getAppReplicationConfiguration(req);

            if (res.getAppReplicationConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAppValidationConfiguration

Retrieves information about a configuration for validating an application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAppValidationConfigurationRequest;
import org.openapis.openapi.models.operations.GetAppValidationConfigurationResponse;
import org.openapis.openapi.models.operations.GetAppValidationConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetAppValidationConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAppValidationConfigurationRequest req = new GetAppValidationConfigurationRequest(                new GetAppValidationConfigurationRequest("facilis");, GetAppValidationConfigurationXAmzTargetEnum.AWS_SERVER_MIGRATION_SERVICE_V20161024_GET_APP_VALIDATION_CONFIGURATION) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "architecto";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "expedita";
                xAmzSignedHeaders = "nihil";
            }};            

            GetAppValidationConfigurationResponse res = sdk.sdk.getAppValidationConfiguration(req);

            if (res.getAppValidationConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAppValidationOutput

Retrieves output from validating an application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAppValidationOutputRequest;
import org.openapis.openapi.models.operations.GetAppValidationOutputResponse;
import org.openapis.openapi.models.operations.GetAppValidationOutputXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetAppValidationOutputRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAppValidationOutputRequest req = new GetAppValidationOutputRequest(                new GetAppValidationOutputRequest("quibusdam");, GetAppValidationOutputXAmzTargetEnum.AWS_SERVER_MIGRATION_SERVICE_V20161024_GET_APP_VALIDATION_OUTPUT) {{
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "pariatur";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "natus";
            }};            

            GetAppValidationOutputResponse res = sdk.sdk.getAppValidationOutput(req);

            if (res.getAppValidationOutputResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConnectors

Describes the connectors registered with the Server Migration Service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConnectorsRequest;
import org.openapis.openapi.models.operations.GetConnectorsResponse;
import org.openapis.openapi.models.operations.GetConnectorsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetConnectorsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetConnectorsRequest req = new GetConnectorsRequest(                new GetConnectorsRequest() {{
                                maxResults = 123820L;
                                nextToken = "quo";
                            }};, GetConnectorsXAmzTargetEnum.AWS_SERVER_MIGRATION_SERVICE_V20161024_GET_CONNECTORS) {{
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "maxime";
                xAmzDate = "ea";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "ea";
                maxResults = "accusantium";
                nextToken = "ab";
            }};            

            GetConnectorsResponse res = sdk.sdk.getConnectors(req);

            if (res.getConnectorsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReplicationJobs

Describes the specified replication job or all of your replication jobs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReplicationJobsRequest;
import org.openapis.openapi.models.operations.GetReplicationJobsResponse;
import org.openapis.openapi.models.operations.GetReplicationJobsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetReplicationJobsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetReplicationJobsRequest req = new GetReplicationJobsRequest(                new GetReplicationJobsRequest() {{
                                maxResults = 697429L;
                                nextToken = "ipsam";
                                replicationJobId = "voluptate";
                            }};, GetReplicationJobsXAmzTargetEnum.AWS_SERVER_MIGRATION_SERVICE_V20161024_GET_REPLICATION_JOBS) {{
                xAmzAlgorithm = "autem";
                xAmzContentSha256 = "nam";
                xAmzCredential = "eaque";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "perferendis";
                maxResults = "fugiat";
                nextToken = "amet";
            }};            

            GetReplicationJobsResponse res = sdk.sdk.getReplicationJobs(req);

            if (res.getReplicationJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReplicationRuns

Describes the replication runs for the specified replication job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReplicationRunsRequest;
import org.openapis.openapi.models.operations.GetReplicationRunsResponse;
import org.openapis.openapi.models.operations.GetReplicationRunsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetReplicationRunsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetReplicationRunsRequest req = new GetReplicationRunsRequest(                new GetReplicationRunsRequest("cumque") {{
                                maxResults = 359978L;
                                nextToken = "hic";
                            }};, GetReplicationRunsXAmzTargetEnum.AWS_SERVER_MIGRATION_SERVICE_V20161024_GET_REPLICATION_RUNS) {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "dolores";
                xAmzDate = "quis";
                xAmzSecurityToken = "totam";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "eaque";
                maxResults = "quis";
                nextToken = "nesciunt";
            }};            

            GetReplicationRunsResponse res = sdk.sdk.getReplicationRuns(req);

            if (res.getReplicationRunsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getServers

<p>Describes the servers in your server catalog.</p> <p>Before you can describe your servers, you must import them using <a>ImportServerCatalog</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServersRequest;
import org.openapis.openapi.models.operations.GetServersResponse;
import org.openapis.openapi.models.operations.GetServersXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetServersRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VmServerAddress;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetServersRequest req = new GetServersRequest(                new GetServersRequest() {{
                                maxResults = 18521L;
                                nextToken = "dolores";
                                vmServerAddressList = new org.openapis.openapi.models.shared.VmServerAddress[]{{
                                    add(new VmServerAddress() {{
                                        vmId = "quam";
                                        vmManagerId = "dolor";
                                    }}),
                                    add(new VmServerAddress() {{
                                        vmId = "vero";
                                        vmManagerId = "nostrum";
                                    }}),
                                    add(new VmServerAddress() {{
                                        vmId = "hic";
                                        vmManagerId = "recusandae";
                                    }}),
                                    add(new VmServerAddress() {{
                                        vmId = "omnis";
                                        vmManagerId = "facilis";
                                    }}),
                                }};
                            }};, GetServersXAmzTargetEnum.AWS_SERVER_MIGRATION_SERVICE_V20161024_GET_SERVERS) {{
                xAmzAlgorithm = "perspiciatis";
                xAmzContentSha256 = "voluptatem";
                xAmzCredential = "porro";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "blanditiis";
                xAmzSignature = "error";
                xAmzSignedHeaders = "eaque";
                maxResults = "occaecati";
                nextToken = "rerum";
            }};            

            GetServersResponse res = sdk.sdk.getServers(req);

            if (res.getServersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importAppCatalog

Allows application import from Migration Hub.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportAppCatalogRequest;
import org.openapis.openapi.models.operations.ImportAppCatalogResponse;
import org.openapis.openapi.models.operations.ImportAppCatalogXAmzTargetEnum;
import org.openapis.openapi.models.shared.ImportAppCatalogRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ImportAppCatalogRequest req = new ImportAppCatalogRequest(                new ImportAppCatalogRequest() {{
                                roleName = "asperiores";
                            }};, ImportAppCatalogXAmzTargetEnum.AWS_SERVER_MIGRATION_SERVICE_V20161024_IMPORT_APP_CATALOG) {{
                xAmzAlgorithm = "earum";
                xAmzContentSha256 = "modi";
                xAmzCredential = "iste";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "provident";
            }};            

            ImportAppCatalogResponse res = sdk.sdk.importAppCatalog(req);

            if (res.importAppCatalogResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importServerCatalog

<p>Gathers a complete list of on-premises servers. Connectors must be installed and monitoring all servers to import.</p> <p>This call returns immediately, but might take additional time to retrieve all the servers.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportServerCatalogRequest;
import org.openapis.openapi.models.operations.ImportServerCatalogResponse;
import org.openapis.openapi.models.operations.ImportServerCatalogXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ImportServerCatalogRequest req = new ImportServerCatalogRequest(                new java.util.HashMap<String, Object>() {{
                                put("delectus", "quaerat");
                                put("quos", "aliquid");
                                put("dolorem", "dolorem");
                            }}, ImportServerCatalogXAmzTargetEnum.AWS_SERVER_MIGRATION_SERVICE_V20161024_IMPORT_SERVER_CATALOG) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "qui";
                xAmzCredential = "ipsum";
                xAmzDate = "hic";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "voluptate";
            }};            

            ImportServerCatalogResponse res = sdk.sdk.importServerCatalog(req);

            if (res.importServerCatalogResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## launchApp

Launches the specified application as a stack in CloudFormation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LaunchAppRequest;
import org.openapis.openapi.models.operations.LaunchAppResponse;
import org.openapis.openapi.models.operations.LaunchAppXAmzTargetEnum;
import org.openapis.openapi.models.shared.LaunchAppRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            LaunchAppRequest req = new LaunchAppRequest(                new LaunchAppRequest() {{
                                appId = "reiciendis";
                            }};, LaunchAppXAmzTargetEnum.AWS_SERVER_MIGRATION_SERVICE_V20161024_LAUNCH_APP) {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "numquam";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "iure";
            }};            

            LaunchAppResponse res = sdk.sdk.launchApp(req);

            if (res.launchAppResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listApps

Retrieves summaries for all applications.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAppsRequest;
import org.openapis.openapi.models.operations.ListAppsResponse;
import org.openapis.openapi.models.operations.ListAppsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListAppsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAppsRequest req = new ListAppsRequest(                new ListAppsRequest() {{
                                appIds = new String[]{{
                                    add("accusamus"),
                                    add("quidem"),
                                }};
                                maxResults = 976405L;
                                nextToken = "voluptas";
                            }};, ListAppsXAmzTargetEnum.AWS_SERVER_MIGRATION_SERVICE_V20161024_LIST_APPS) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "eos";
                xAmzCredential = "atque";
                xAmzDate = "sit";
                xAmzSecurityToken = "fugiat";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "soluta";
            }};            

            ListAppsResponse res = sdk.sdk.listApps(req);

            if (res.listAppsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## notifyAppValidationOutput

Provides information to Server Migration Service about whether application validation is successful.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotifyAppValidationOutputRequest;
import org.openapis.openapi.models.operations.NotifyAppValidationOutputResponse;
import org.openapis.openapi.models.operations.NotifyAppValidationOutputXAmzTargetEnum;
import org.openapis.openapi.models.shared.NotificationContext;
import org.openapis.openapi.models.shared.NotifyAppValidationOutputRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ValidationStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            NotifyAppValidationOutputRequest req = new NotifyAppValidationOutputRequest(                new NotifyAppValidationOutputRequest("iusto") {{
                                notificationContext = new NotificationContext() {{
                                    status = ValidationStatusEnum.IN_PROGRESS;
                                    statusMessage = "dolorum";
                                    validationId = "deleniti";
                                }};;
                            }};, NotifyAppValidationOutputXAmzTargetEnum.AWS_SERVER_MIGRATION_SERVICE_V20161024_NOTIFY_APP_VALIDATION_OUTPUT) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "distinctio";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "voluptate";
            }};            

            NotifyAppValidationOutputResponse res = sdk.sdk.notifyAppValidationOutput(req);

            if (res.notifyAppValidationOutputResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putAppLaunchConfiguration

Creates or updates the launch configuration for the specified application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutAppLaunchConfigurationRequest;
import org.openapis.openapi.models.operations.PutAppLaunchConfigurationResponse;
import org.openapis.openapi.models.operations.PutAppLaunchConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutAppLaunchConfigurationRequest;
import org.openapis.openapi.models.shared.S3Location;
import org.openapis.openapi.models.shared.ScriptTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Server;
import org.openapis.openapi.models.shared.ServerGroupLaunchConfiguration;
import org.openapis.openapi.models.shared.ServerLaunchConfiguration;
import org.openapis.openapi.models.shared.ServerTypeEnum;
import org.openapis.openapi.models.shared.UserData;
import org.openapis.openapi.models.shared.VmManagerTypeEnum;
import org.openapis.openapi.models.shared.VmServer;
import org.openapis.openapi.models.shared.VmServerAddress;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutAppLaunchConfigurationRequest req = new PutAppLaunchConfigurationRequest(                new PutAppLaunchConfigurationRequest() {{
                                appId = "saepe";
                                autoLaunch = false;
                                roleName = "eius";
                                serverGroupLaunchConfigurations = new org.openapis.openapi.models.shared.ServerGroupLaunchConfiguration[]{{
                                    add(new ServerGroupLaunchConfiguration() {{
                                        launchOrder = 20651L;
                                        serverGroupId = "amet";
                                        serverLaunchConfigurations = new org.openapis.openapi.models.shared.ServerLaunchConfiguration[]{{
                                            add(new ServerLaunchConfiguration() {{
                                                associatePublicIpAddress = false;
                                                configureScript = new S3Location() {{
                                                    bucket = "accusamus";
                                                    key = "ad";
                                                }};
                                                configureScriptType = ScriptTypeEnum.POWERSHELL_SCRIPT;
                                                ec2KeyName = "suscipit";
                                                iamInstanceProfileName = "deserunt";
                                                instanceType = "provident";
                                                logicalId = "minima";
                                                securityGroup = "repellendus";
                                                server = new Server() {{
                                                    replicationJobId = "totam";
                                                    replicationJobTerminated = false;
                                                    serverId = "similique";
                                                    serverType = ServerTypeEnum.VIRTUAL_MACHINE;
                                                    vmServer = new VmServer() {{
                                                        vmManagerName = "alias";
                                                        vmManagerType = VmManagerTypeEnum.HYPERV_MANAGER;
                                                        vmName = "quaerat";
                                                        vmPath = "tempora";
                                                        vmServerAddress = new VmServerAddress() {{
                                                            vmId = "vel";
                                                            vmManagerId = "quod";
                                                        }};
                                                    }};
                                                }};
                                                subnet = "officiis";
                                                userData = new UserData() {{
                                                    s3Location = new S3Location() {{
                                                        bucket = "qui";
                                                        key = "dolorum";
                                                    }};
                                                }};
                                                vpc = "a";
                                            }}),
                                            add(new ServerLaunchConfiguration() {{
                                                associatePublicIpAddress = false;
                                                configureScript = new S3Location() {{
                                                    bucket = "esse";
                                                    key = "harum";
                                                }};
                                                configureScriptType = ScriptTypeEnum.SHELL_SCRIPT;
                                                ec2KeyName = "ipsum";
                                                iamInstanceProfileName = "quisquam";
                                                instanceType = "tenetur";
                                                logicalId = "amet";
                                                securityGroup = "tempore";
                                                server = new Server() {{
                                                    replicationJobId = "accusamus";
                                                    replicationJobTerminated = false;
                                                    serverId = "numquam";
                                                    serverType = ServerTypeEnum.VIRTUAL_MACHINE;
                                                    vmServer = new VmServer() {{
                                                        vmManagerName = "enim";
                                                        vmManagerType = VmManagerTypeEnum.VSPHERE;
                                                        vmName = "sapiente";
                                                        vmPath = "totam";
                                                        vmServerAddress = new VmServerAddress() {{
                                                            vmId = "nihil";
                                                            vmManagerId = "sit";
                                                        }};
                                                    }};
                                                }};
                                                subnet = "expedita";
                                                userData = new UserData() {{
                                                    s3Location = new S3Location() {{
                                                        bucket = "neque";
                                                        key = "sed";
                                                    }};
                                                }};
                                                vpc = "vel";
                                            }}),
                                            add(new ServerLaunchConfiguration() {{
                                                associatePublicIpAddress = false;
                                                configureScript = new S3Location() {{
                                                    bucket = "libero";
                                                    key = "voluptas";
                                                }};
                                                configureScriptType = ScriptTypeEnum.POWERSHELL_SCRIPT;
                                                ec2KeyName = "quam";
                                                iamInstanceProfileName = "ipsum";
                                                instanceType = "incidunt";
                                                logicalId = "qui";
                                                securityGroup = "cupiditate";
                                                server = new Server() {{
                                                    replicationJobId = "maxime";
                                                    replicationJobTerminated = false;
                                                    serverId = "pariatur";
                                                    serverType = ServerTypeEnum.VIRTUAL_MACHINE;
                                                    vmServer = new VmServer() {{
                                                        vmManagerName = "soluta";
                                                        vmManagerType = VmManagerTypeEnum.VSPHERE;
                                                        vmName = "laborum";
                                                        vmPath = "totam";
                                                        vmServerAddress = new VmServerAddress() {{
                                                            vmId = "incidunt";
                                                            vmManagerId = "aspernatur";
                                                        }};
                                                    }};
                                                }};
                                                subnet = "dolores";
                                                userData = new UserData() {{
                                                    s3Location = new S3Location() {{
                                                        bucket = "distinctio";
                                                        key = "facilis";
                                                    }};
                                                }};
                                                vpc = "aliquid";
                                            }}),
                                            add(new ServerLaunchConfiguration() {{
                                                associatePublicIpAddress = false;
                                                configureScript = new S3Location() {{
                                                    bucket = "quam";
                                                    key = "molestias";
                                                }};
                                                configureScriptType = ScriptTypeEnum.POWERSHELL_SCRIPT;
                                                ec2KeyName = "qui";
                                                iamInstanceProfileName = "neque";
                                                instanceType = "fugit";
                                                logicalId = "magni";
                                                securityGroup = "odio";
                                                server = new Server() {{
                                                    replicationJobId = "sunt";
                                                    replicationJobTerminated = false;
                                                    serverId = "ullam";
                                                    serverType = ServerTypeEnum.VIRTUAL_MACHINE;
                                                    vmServer = new VmServer() {{
                                                        vmManagerName = "nam";
                                                        vmManagerType = VmManagerTypeEnum.HYPERV_MANAGER;
                                                        vmName = "voluptatem";
                                                        vmPath = "cumque";
                                                        vmServerAddress = new VmServerAddress() {{
                                                            vmId = "soluta";
                                                            vmManagerId = "nobis";
                                                        }};
                                                    }};
                                                }};
                                                subnet = "et";
                                                userData = new UserData() {{
                                                    s3Location = new S3Location() {{
                                                        bucket = "saepe";
                                                        key = "ipsum";
                                                    }};
                                                }};
                                                vpc = "veritatis";
                                            }}),
                                        }};
                                    }}),
                                }};
                            }};, PutAppLaunchConfigurationXAmzTargetEnum.AWS_SERVER_MIGRATION_SERVICE_V20161024_PUT_APP_LAUNCH_CONFIGURATION) {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "quos";
                xAmzCredential = "tempore";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "aperiam";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "dolorem";
            }};            

            PutAppLaunchConfigurationResponse res = sdk.sdk.putAppLaunchConfiguration(req);

            if (res.putAppLaunchConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putAppReplicationConfiguration

Creates or updates the replication configuration for the specified application.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutAppReplicationConfigurationRequest;
import org.openapis.openapi.models.operations.PutAppReplicationConfigurationResponse;
import org.openapis.openapi.models.operations.PutAppReplicationConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.LicenseTypeEnum;
import org.openapis.openapi.models.shared.PutAppReplicationConfigurationRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Server;
import org.openapis.openapi.models.shared.ServerGroupReplicationConfiguration;
import org.openapis.openapi.models.shared.ServerReplicationConfiguration;
import org.openapis.openapi.models.shared.ServerReplicationParameters;
import org.openapis.openapi.models.shared.ServerTypeEnum;
import org.openapis.openapi.models.shared.VmManagerTypeEnum;
import org.openapis.openapi.models.shared.VmServer;
import org.openapis.openapi.models.shared.VmServerAddress;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutAppReplicationConfigurationRequest req = new PutAppReplicationConfigurationRequest(                new PutAppReplicationConfigurationRequest() {{
                                appId = "labore";
                                serverGroupReplicationConfigurations = new org.openapis.openapi.models.shared.ServerGroupReplicationConfiguration[]{{
                                    add(new ServerGroupReplicationConfiguration() {{
                                        serverGroupId = "dolorum";
                                        serverReplicationConfigurations = new org.openapis.openapi.models.shared.ServerReplicationConfiguration[]{{
                                            add(new ServerReplicationConfiguration() {{
                                                server = new Server() {{
                                                    replicationJobId = "quae";
                                                    replicationJobTerminated = false;
                                                    serverId = "aut";
                                                    serverType = ServerTypeEnum.VIRTUAL_MACHINE;
                                                    vmServer = new VmServer() {{
                                                        vmManagerName = "quas";
                                                        vmManagerType = VmManagerTypeEnum.HYPERV_MANAGER;
                                                        vmName = "consequatur";
                                                        vmPath = "est";
                                                        vmServerAddress = new VmServerAddress() {{
                                                            vmId = "repellendus";
                                                            vmManagerId = "porro";
                                                        }};
                                                    }};
                                                }};
                                                serverReplicationParameters = new ServerReplicationParameters() {{
                                                    encrypted = false;
                                                    frequency = 984330L;
                                                    kmsKeyId = "ut";
                                                    licenseType = LicenseTypeEnum.BYOL;
                                                    numberOfRecentAmisToKeep = 586410L;
                                                    runOnce = false;
                                                    seedTime = OffsetDateTime.parse("2022-12-08T15:45:05.802Z");
                                                }};
                                            }}),
                                        }};
                                    }}),
                                }};
                            }};, PutAppReplicationConfigurationXAmzTargetEnum.AWS_SERVER_MIGRATION_SERVICE_V20161024_PUT_APP_REPLICATION_CONFIGURATION) {{
                xAmzAlgorithm = "laudantium";
                xAmzContentSha256 = "odio";
                xAmzCredential = "occaecati";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "quisquam";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "omnis";
            }};            

            PutAppReplicationConfigurationResponse res = sdk.sdk.putAppReplicationConfiguration(req);

            if (res.putAppReplicationConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putAppValidationConfiguration

Creates or updates a validation configuration for the specified application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutAppValidationConfigurationRequest;
import org.openapis.openapi.models.operations.PutAppValidationConfigurationResponse;
import org.openapis.openapi.models.operations.PutAppValidationConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.AppValidationConfiguration;
import org.openapis.openapi.models.shared.AppValidationStrategyEnum;
import org.openapis.openapi.models.shared.PutAppValidationConfigurationRequest;
import org.openapis.openapi.models.shared.S3Location;
import org.openapis.openapi.models.shared.SSMValidationParameters;
import org.openapis.openapi.models.shared.ScriptTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Server;
import org.openapis.openapi.models.shared.ServerGroupValidationConfiguration;
import org.openapis.openapi.models.shared.ServerTypeEnum;
import org.openapis.openapi.models.shared.ServerValidationConfiguration;
import org.openapis.openapi.models.shared.ServerValidationStrategyEnum;
import org.openapis.openapi.models.shared.Source;
import org.openapis.openapi.models.shared.UserDataValidationParameters;
import org.openapis.openapi.models.shared.VmManagerTypeEnum;
import org.openapis.openapi.models.shared.VmServer;
import org.openapis.openapi.models.shared.VmServerAddress;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutAppValidationConfigurationRequest req = new PutAppValidationConfigurationRequest(                new PutAppValidationConfigurationRequest("ipsum") {{
                                appValidationConfigurations = new org.openapis.openapi.models.shared.AppValidationConfiguration[]{{
                                    add(new AppValidationConfiguration() {{
                                        appValidationStrategy = AppValidationStrategyEnum.SSM;
                                        name = "Victoria Thiel";
                                        ssmValidationParameters = new SSMValidationParameters() {{
                                            command = "hic";
                                            executionTimeoutSeconds = 715561L;
                                            instanceId = "quod";
                                            outputS3BucketName = "odio";
                                            scriptType = ScriptTypeEnum.POWERSHELL_SCRIPT;
                                            source = new Source() {{
                                                s3Location = new S3Location() {{
                                                    bucket = "facilis";
                                                    key = "vero";
                                                }};
                                            }};
                                        }};
                                        validationId = "ducimus";
                                    }}),
                                    add(new AppValidationConfiguration() {{
                                        appValidationStrategy = AppValidationStrategyEnum.SSM;
                                        name = "Rosemarie Stanton";
                                        ssmValidationParameters = new SSMValidationParameters() {{
                                            command = "impedit";
                                            executionTimeoutSeconds = 13236L;
                                            instanceId = "voluptatibus";
                                            outputS3BucketName = "exercitationem";
                                            scriptType = ScriptTypeEnum.POWERSHELL_SCRIPT;
                                            source = new Source() {{
                                                s3Location = new S3Location() {{
                                                    bucket = "fugit";
                                                    key = "porro";
                                                }};
                                            }};
                                        }};
                                        validationId = "maiores";
                                    }}),
                                    add(new AppValidationConfiguration() {{
                                        appValidationStrategy = AppValidationStrategyEnum.SSM;
                                        name = "Ted Romaguera MD";
                                        ssmValidationParameters = new SSMValidationParameters() {{
                                            command = "tempora";
                                            executionTimeoutSeconds = 368584L;
                                            instanceId = "ea";
                                            outputS3BucketName = "aspernatur";
                                            scriptType = ScriptTypeEnum.SHELL_SCRIPT;
                                            source = new Source() {{
                                                s3Location = new S3Location() {{
                                                    bucket = "possimus";
                                                    key = "magnam";
                                                }};
                                            }};
                                        }};
                                        validationId = "ratione";
                                    }}),
                                    add(new AppValidationConfiguration() {{
                                        appValidationStrategy = AppValidationStrategyEnum.SSM;
                                        name = "Mabel Cartwright";
                                        ssmValidationParameters = new SSMValidationParameters() {{
                                            command = "quasi";
                                            executionTimeoutSeconds = 406120L;
                                            instanceId = "nulla";
                                            outputS3BucketName = "excepturi";
                                            scriptType = ScriptTypeEnum.POWERSHELL_SCRIPT;
                                            source = new Source() {{
                                                s3Location = new S3Location() {{
                                                    bucket = "nostrum";
                                                    key = "sapiente";
                                                }};
                                            }};
                                        }};
                                        validationId = "quisquam";
                                    }}),
                                }};
                                serverGroupValidationConfigurations = new org.openapis.openapi.models.shared.ServerGroupValidationConfiguration[]{{
                                    add(new ServerGroupValidationConfiguration() {{
                                        serverGroupId = "ea";
                                        serverValidationConfigurations = new org.openapis.openapi.models.shared.ServerValidationConfiguration[]{{
                                            add(new ServerValidationConfiguration() {{
                                                name = "Mrs. Sally Jacobi";
                                                server = new Server() {{
                                                    replicationJobId = "quo";
                                                    replicationJobTerminated = false;
                                                    serverId = "consectetur";
                                                    serverType = ServerTypeEnum.VIRTUAL_MACHINE;
                                                    vmServer = new VmServer() {{
                                                        vmManagerName = "recusandae";
                                                        vmManagerType = VmManagerTypeEnum.VSPHERE;
                                                        vmName = "minima";
                                                        vmPath = "eaque";
                                                        vmServerAddress = new VmServerAddress() {{
                                                            vmId = "a";
                                                            vmManagerId = "libero";
                                                        }};
                                                    }};
                                                }};
                                                serverValidationStrategy = ServerValidationStrategyEnum.USERDATA;
                                                userDataValidationParameters = new UserDataValidationParameters() {{
                                                    scriptType = ScriptTypeEnum.SHELL_SCRIPT;
                                                    source = new Source() {{
                                                        s3Location = new S3Location() {{
                                                            bucket = "aut";
                                                            key = "deleniti";
                                                        }};
                                                    }};
                                                }};
                                                validationId = "impedit";
                                            }}),
                                            add(new ServerValidationConfiguration() {{
                                                name = "Mrs. Denise Tillman MD";
                                                server = new Server() {{
                                                    replicationJobId = "laborum";
                                                    replicationJobTerminated = false;
                                                    serverId = "placeat";
                                                    serverType = ServerTypeEnum.VIRTUAL_MACHINE;
                                                    vmServer = new VmServer() {{
                                                        vmManagerName = "velit";
                                                        vmManagerType = VmManagerTypeEnum.SCVMM;
                                                        vmName = "autem";
                                                        vmPath = "nobis";
                                                        vmServerAddress = new VmServerAddress() {{
                                                            vmId = "quas";
                                                            vmManagerId = "assumenda";
                                                        }};
                                                    }};
                                                }};
                                                serverValidationStrategy = ServerValidationStrategyEnum.USERDATA;
                                                userDataValidationParameters = new UserDataValidationParameters() {{
                                                    scriptType = ScriptTypeEnum.POWERSHELL_SCRIPT;
                                                    source = new Source() {{
                                                        s3Location = new S3Location() {{
                                                            bucket = "voluptas";
                                                            key = "libero";
                                                        }};
                                                    }};
                                                }};
                                                validationId = "quasi";
                                            }}),
                                            add(new ServerValidationConfiguration() {{
                                                name = "Carrie Cole IV";
                                                server = new Server() {{
                                                    replicationJobId = "magnam";
                                                    replicationJobTerminated = false;
                                                    serverId = "odio";
                                                    serverType = ServerTypeEnum.VIRTUAL_MACHINE;
                                                    vmServer = new VmServer() {{
                                                        vmManagerName = "eius";
                                                        vmManagerType = VmManagerTypeEnum.SCVMM;
                                                        vmName = "esse";
                                                        vmPath = "rem";
                                                        vmServerAddress = new VmServerAddress() {{
                                                            vmId = "fuga";
                                                            vmManagerId = "reprehenderit";
                                                        }};
                                                    }};
                                                }};
                                                serverValidationStrategy = ServerValidationStrategyEnum.USERDATA;
                                                userDataValidationParameters = new UserDataValidationParameters() {{
                                                    scriptType = ScriptTypeEnum.POWERSHELL_SCRIPT;
                                                    source = new Source() {{
                                                        s3Location = new S3Location() {{
                                                            bucket = "fugiat";
                                                            key = "ut";
                                                        }};
                                                    }};
                                                }};
                                                validationId = "eum";
                                            }}),
                                            add(new ServerValidationConfiguration() {{
                                                name = "Angelina Davis";
                                                server = new Server() {{
                                                    replicationJobId = "veritatis";
                                                    replicationJobTerminated = false;
                                                    serverId = "ipsa";
                                                    serverType = ServerTypeEnum.VIRTUAL_MACHINE;
                                                    vmServer = new VmServer() {{
                                                        vmManagerName = "id";
                                                        vmManagerType = VmManagerTypeEnum.HYPERV_MANAGER;
                                                        vmName = "neque";
                                                        vmPath = "quo";
                                                        vmServerAddress = new VmServerAddress() {{
                                                            vmId = "illum";
                                                            vmManagerId = "quo";
                                                        }};
                                                    }};
                                                }};
                                                serverValidationStrategy = ServerValidationStrategyEnum.USERDATA;
                                                userDataValidationParameters = new UserDataValidationParameters() {{
                                                    scriptType = ScriptTypeEnum.POWERSHELL_SCRIPT;
                                                    source = new Source() {{
                                                        s3Location = new S3Location() {{
                                                            bucket = "eius";
                                                            key = "eos";
                                                        }};
                                                    }};
                                                }};
                                                validationId = "voluptas";
                                            }}),
                                        }};
                                    }}),
                                    add(new ServerGroupValidationConfiguration() {{
                                        serverGroupId = "ab";
                                        serverValidationConfigurations = new org.openapis.openapi.models.shared.ServerValidationConfiguration[]{{
                                            add(new ServerValidationConfiguration() {{
                                                name = "Rhonda Toy";
                                                server = new Server() {{
                                                    replicationJobId = "sequi";
                                                    replicationJobTerminated = false;
                                                    serverId = "quo";
                                                    serverType = ServerTypeEnum.VIRTUAL_MACHINE;
                                                    vmServer = new VmServer() {{
                                                        vmManagerName = "esse";
                                                        vmManagerType = VmManagerTypeEnum.HYPERV_MANAGER;
                                                        vmName = "aperiam";
                                                        vmPath = "distinctio";
                                                        vmServerAddress = new VmServerAddress() {{
                                                            vmId = "quod";
                                                            vmManagerId = "dignissimos";
                                                        }};
                                                    }};
                                                }};
                                                serverValidationStrategy = ServerValidationStrategyEnum.USERDATA;
                                                userDataValidationParameters = new UserDataValidationParameters() {{
                                                    scriptType = ScriptTypeEnum.SHELL_SCRIPT;
                                                    source = new Source() {{
                                                        s3Location = new S3Location() {{
                                                            bucket = "nihil";
                                                            key = "totam";
                                                        }};
                                                    }};
                                                }};
                                                validationId = "accusamus";
                                            }}),
                                            add(new ServerValidationConfiguration() {{
                                                name = "Courtney Mayert";
                                                server = new Server() {{
                                                    replicationJobId = "dolores";
                                                    replicationJobTerminated = false;
                                                    serverId = "deserunt";
                                                    serverType = ServerTypeEnum.VIRTUAL_MACHINE;
                                                    vmServer = new VmServer() {{
                                                        vmManagerName = "molestiae";
                                                        vmManagerType = VmManagerTypeEnum.VSPHERE;
                                                        vmName = "porro";
                                                        vmPath = "eum";
                                                        vmServerAddress = new VmServerAddress() {{
                                                            vmId = "quas";
                                                            vmManagerId = "praesentium";
                                                        }};
                                                    }};
                                                }};
                                                serverValidationStrategy = ServerValidationStrategyEnum.USERDATA;
                                                userDataValidationParameters = new UserDataValidationParameters() {{
                                                    scriptType = ScriptTypeEnum.SHELL_SCRIPT;
                                                    source = new Source() {{
                                                        s3Location = new S3Location() {{
                                                            bucket = "deleniti";
                                                            key = "fugit";
                                                        }};
                                                    }};
                                                }};
                                                validationId = "fuga";
                                            }}),
                                            add(new ServerValidationConfiguration() {{
                                                name = "Randall Lindgren";
                                                server = new Server() {{
                                                    replicationJobId = "nisi";
                                                    replicationJobTerminated = false;
                                                    serverId = "fugit";
                                                    serverType = ServerTypeEnum.VIRTUAL_MACHINE;
                                                    vmServer = new VmServer() {{
                                                        vmManagerName = "sapiente";
                                                        vmManagerType = VmManagerTypeEnum.VSPHERE;
                                                        vmName = "ratione";
                                                        vmPath = "explicabo";
                                                        vmServerAddress = new VmServerAddress() {{
                                                            vmId = "saepe";
                                                            vmManagerId = "occaecati";
                                                        }};
                                                    }};
                                                }};
                                                serverValidationStrategy = ServerValidationStrategyEnum.USERDATA;
                                                userDataValidationParameters = new UserDataValidationParameters() {{
                                                    scriptType = ScriptTypeEnum.POWERSHELL_SCRIPT;
                                                    source = new Source() {{
                                                        s3Location = new S3Location() {{
                                                            bucket = "et";
                                                            key = "esse";
                                                        }};
                                                    }};
                                                }};
                                                validationId = "eveniet";
                                            }}),
                                        }};
                                    }}),
                                    add(new ServerGroupValidationConfiguration() {{
                                        serverGroupId = "accusamus";
                                        serverValidationConfigurations = new org.openapis.openapi.models.shared.ServerValidationConfiguration[]{{
                                            add(new ServerValidationConfiguration() {{
                                                name = "Traci Reilly";
                                                server = new Server() {{
                                                    replicationJobId = "quasi";
                                                    replicationJobTerminated = false;
                                                    serverId = "saepe";
                                                    serverType = ServerTypeEnum.VIRTUAL_MACHINE;
                                                    vmServer = new VmServer() {{
                                                        vmManagerName = "vel";
                                                        vmManagerType = VmManagerTypeEnum.HYPERV_MANAGER;
                                                        vmName = "molestiae";
                                                        vmPath = "rerum";
                                                        vmServerAddress = new VmServerAddress() {{
                                                            vmId = "occaecati";
                                                            vmManagerId = "minima";
                                                        }};
                                                    }};
                                                }};
                                                serverValidationStrategy = ServerValidationStrategyEnum.USERDATA;
                                                userDataValidationParameters = new UserDataValidationParameters() {{
                                                    scriptType = ScriptTypeEnum.POWERSHELL_SCRIPT;
                                                    source = new Source() {{
                                                        s3Location = new S3Location() {{
                                                            bucket = "eligendi";
                                                            key = "sit";
                                                        }};
                                                    }};
                                                }};
                                                validationId = "culpa";
                                            }}),
                                        }};
                                    }}),
                                    add(new ServerGroupValidationConfiguration() {{
                                        serverGroupId = "tempore";
                                        serverValidationConfigurations = new org.openapis.openapi.models.shared.ServerValidationConfiguration[]{{
                                            add(new ServerValidationConfiguration() {{
                                                name = "Carlos Altenwerth";
                                                server = new Server() {{
                                                    replicationJobId = "sapiente";
                                                    replicationJobTerminated = false;
                                                    serverId = "consectetur";
                                                    serverType = ServerTypeEnum.VIRTUAL_MACHINE;
                                                    vmServer = new VmServer() {{
                                                        vmManagerName = "esse";
                                                        vmManagerType = VmManagerTypeEnum.SCVMM;
                                                        vmName = "provident";
                                                        vmPath = "a";
                                                        vmServerAddress = new VmServerAddress() {{
                                                            vmId = "nulla";
                                                            vmManagerId = "quas";
                                                        }};
                                                    }};
                                                }};
                                                serverValidationStrategy = ServerValidationStrategyEnum.USERDATA;
                                                userDataValidationParameters = new UserDataValidationParameters() {{
                                                    scriptType = ScriptTypeEnum.SHELL_SCRIPT;
                                                    source = new Source() {{
                                                        s3Location = new S3Location() {{
                                                            bucket = "quasi";
                                                            key = "a";
                                                        }};
                                                    }};
                                                }};
                                                validationId = "error";
                                            }}),
                                        }};
                                    }}),
                                }};
                            }};, PutAppValidationConfigurationXAmzTargetEnum.AWS_SERVER_MIGRATION_SERVICE_V20161024_PUT_APP_VALIDATION_CONFIGURATION) {{
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "possimus";
                xAmzDate = "quia";
                xAmzSecurityToken = "eveniet";
                xAmzSignature = "asperiores";
                xAmzSignedHeaders = "facere";
            }};            

            PutAppValidationConfigurationResponse res = sdk.sdk.putAppValidationConfiguration(req);

            if (res.putAppValidationConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startAppReplication

Starts replicating the specified application by creating replication jobs for each server in the application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartAppReplicationRequest;
import org.openapis.openapi.models.operations.StartAppReplicationResponse;
import org.openapis.openapi.models.operations.StartAppReplicationXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartAppReplicationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartAppReplicationRequest req = new StartAppReplicationRequest(                new StartAppReplicationRequest() {{
                                appId = "consequuntur";
                            }};, StartAppReplicationXAmzTargetEnum.AWS_SERVER_MIGRATION_SERVICE_V20161024_START_APP_REPLICATION) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "similique";
                xAmzCredential = "culpa";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "earum";
            }};            

            StartAppReplicationResponse res = sdk.sdk.startAppReplication(req);

            if (res.startAppReplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startOnDemandAppReplication

Starts an on-demand replication run for the specified application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartOnDemandAppReplicationRequest;
import org.openapis.openapi.models.operations.StartOnDemandAppReplicationResponse;
import org.openapis.openapi.models.operations.StartOnDemandAppReplicationXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartOnDemandAppReplicationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartOnDemandAppReplicationRequest req = new StartOnDemandAppReplicationRequest(                new StartOnDemandAppReplicationRequest("in") {{
                                description = "eius";
                            }};, StartOnDemandAppReplicationXAmzTargetEnum.AWS_SERVER_MIGRATION_SERVICE_V20161024_START_ON_DEMAND_APP_REPLICATION) {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "illum";
                xAmzCredential = "soluta";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "aliquam";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "dicta";
            }};            

            StartOnDemandAppReplicationResponse res = sdk.sdk.startOnDemandAppReplication(req);

            if (res.startOnDemandAppReplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startOnDemandReplicationRun

<p>Starts an on-demand replication run for the specified replication job. This replication run starts immediately. This replication run is in addition to the ones already scheduled.</p> <p>There is a limit on the number of on-demand replications runs that you can request in a 24-hour period.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartOnDemandReplicationRunRequest;
import org.openapis.openapi.models.operations.StartOnDemandReplicationRunResponse;
import org.openapis.openapi.models.operations.StartOnDemandReplicationRunXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartOnDemandReplicationRunRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartOnDemandReplicationRunRequest req = new StartOnDemandReplicationRunRequest(                new StartOnDemandReplicationRunRequest("reprehenderit") {{
                                description = "ullam";
                            }};, StartOnDemandReplicationRunXAmzTargetEnum.AWS_SERVER_MIGRATION_SERVICE_V20161024_START_ON_DEMAND_REPLICATION_RUN) {{
                xAmzAlgorithm = "nisi";
                xAmzContentSha256 = "aut";
                xAmzCredential = "voluptatum";
                xAmzDate = "qui";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "ex";
                xAmzSignedHeaders = "deleniti";
            }};            

            StartOnDemandReplicationRunResponse res = sdk.sdk.startOnDemandReplicationRun(req);

            if (res.startOnDemandReplicationRunResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopAppReplication

Stops replicating the specified application by deleting the replication job for each server in the application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopAppReplicationRequest;
import org.openapis.openapi.models.operations.StopAppReplicationResponse;
import org.openapis.openapi.models.operations.StopAppReplicationXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopAppReplicationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopAppReplicationRequest req = new StopAppReplicationRequest(                new StopAppReplicationRequest() {{
                                appId = "dolorum";
                            }};, StopAppReplicationXAmzTargetEnum.AWS_SERVER_MIGRATION_SERVICE_V20161024_STOP_APP_REPLICATION) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "tenetur";
                xAmzDate = "quasi";
                xAmzSecurityToken = "at";
                xAmzSignature = "et";
                xAmzSignedHeaders = "voluptate";
            }};            

            StopAppReplicationResponse res = sdk.sdk.stopAppReplication(req);

            if (res.stopAppReplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## terminateApp

Terminates the stack for the specified application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TerminateAppRequest;
import org.openapis.openapi.models.operations.TerminateAppResponse;
import org.openapis.openapi.models.operations.TerminateAppXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TerminateAppRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TerminateAppRequest req = new TerminateAppRequest(                new TerminateAppRequest() {{
                                appId = "minima";
                            }};, TerminateAppXAmzTargetEnum.AWS_SERVER_MIGRATION_SERVICE_V20161024_TERMINATE_APP) {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "consectetur";
                xAmzCredential = "adipisci";
                xAmzDate = "iste";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "rem";
            }};            

            TerminateAppResponse res = sdk.sdk.terminateApp(req);

            if (res.terminateAppResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateApp

Updates the specified application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAppRequest;
import org.openapis.openapi.models.operations.UpdateAppResponse;
import org.openapis.openapi.models.operations.UpdateAppXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Server;
import org.openapis.openapi.models.shared.ServerGroup;
import org.openapis.openapi.models.shared.ServerTypeEnum;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.UpdateAppRequest;
import org.openapis.openapi.models.shared.VmManagerTypeEnum;
import org.openapis.openapi.models.shared.VmServer;
import org.openapis.openapi.models.shared.VmServerAddress;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAppRequest req = new UpdateAppRequest(                new UpdateAppRequest() {{
                                appId = "laudantium";
                                description = "eum";
                                name = "Andrew Little I";
                                roleName = "occaecati";
                                serverGroups = new org.openapis.openapi.models.shared.ServerGroup[]{{
                                    add(new ServerGroup() {{
                                        name = "Ms. Benjamin Hirthe DVM";
                                        serverGroupId = "natus";
                                        serverList = new org.openapis.openapi.models.shared.Server[]{{
                                            add(new Server() {{
                                                replicationJobId = "voluptatibus";
                                                replicationJobTerminated = false;
                                                serverId = "voluptas";
                                                serverType = ServerTypeEnum.VIRTUAL_MACHINE;
                                                vmServer = new VmServer() {{
                                                    vmManagerName = "asperiores";
                                                    vmManagerType = VmManagerTypeEnum.VSPHERE;
                                                    vmName = "ea";
                                                    vmPath = "quaerat";
                                                    vmServerAddress = new VmServerAddress() {{
                                                        vmId = "consequuntur";
                                                        vmManagerId = "repellendus";
                                                    }};
                                                }};
                                            }}),
                                        }};
                                    }}),
                                    add(new ServerGroup() {{
                                        name = "Simon Kuhn";
                                        serverGroupId = "nemo";
                                        serverList = new org.openapis.openapi.models.shared.Server[]{{
                                            add(new Server() {{
                                                replicationJobId = "quaerat";
                                                replicationJobTerminated = false;
                                                serverId = "porro";
                                                serverType = ServerTypeEnum.VIRTUAL_MACHINE;
                                                vmServer = new VmServer() {{
                                                    vmManagerName = "quod";
                                                    vmManagerType = VmManagerTypeEnum.VSPHERE;
                                                    vmName = "ab";
                                                    vmPath = "adipisci";
                                                    vmServerAddress = new VmServerAddress() {{
                                                        vmId = "fuga";
                                                        vmManagerId = "id";
                                                    }};
                                                }};
                                            }}),
                                        }};
                                    }}),
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "velit";
                                        value = "culpa";
                                    }}),
                                    add(new Tag() {{
                                        key = "est";
                                        value = "recusandae";
                                    }}),
                                }};
                            }};, UpdateAppXAmzTargetEnum.AWS_SERVER_MIGRATION_SERVICE_V20161024_UPDATE_APP) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "vel";
                xAmzDate = "ducimus";
                xAmzSecurityToken = "quos";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "labore";
            }};            

            UpdateAppResponse res = sdk.sdk.updateApp(req);

            if (res.updateAppResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateReplicationJob

Updates the specified settings for the specified replication job.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateReplicationJobRequest;
import org.openapis.openapi.models.operations.UpdateReplicationJobResponse;
import org.openapis.openapi.models.operations.UpdateReplicationJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.LicenseTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateReplicationJobRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateReplicationJobRequest req = new UpdateReplicationJobRequest(                new UpdateReplicationJobRequest("facilis") {{
                                description = "cum";
                                encrypted = false;
                                frequency = 414857L;
                                kmsKeyId = "in";
                                licenseType = LicenseTypeEnum.AWS;
                                nextReplicationRunStartTime = OffsetDateTime.parse("2020-07-07T14:53:46.338Z");
                                numberOfRecentAmisToKeep = 363161L;
                                roleName = "recusandae";
                            }};, UpdateReplicationJobXAmzTargetEnum.AWS_SERVER_MIGRATION_SERVICE_V20161024_UPDATE_REPLICATION_JOB) {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "aperiam";
                xAmzCredential = "cum";
                xAmzDate = "consectetur";
                xAmzSecurityToken = "in";
                xAmzSignature = "exercitationem";
                xAmzSignedHeaders = "earum";
            }};            

            UpdateReplicationJobResponse res = sdk.sdk.updateReplicationJob(req);

            if (res.updateReplicationJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
