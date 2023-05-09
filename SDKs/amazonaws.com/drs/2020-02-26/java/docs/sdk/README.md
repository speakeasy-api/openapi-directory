# SDK

## Overview

AWS Elastic Disaster Recovery Service.

Amazon Web Services documentation
<https://docs.aws.amazon.com/drs/>
### Available Operations

* [createExtendedSourceServer](#createextendedsourceserver) - Create an extended source server in the target Account based on the source server in staging account.
* [createLaunchConfigurationTemplate](#createlaunchconfigurationtemplate) - Creates a new Launch Configuration Template.
* [createReplicationConfigurationTemplate](#createreplicationconfigurationtemplate) - Creates a new ReplicationConfigurationTemplate.
* [deleteJob](#deletejob) - Deletes a single Job by ID.
* [deleteLaunchConfigurationTemplate](#deletelaunchconfigurationtemplate) - Deletes a single Launch Configuration Template by ID.
* [deleteRecoveryInstance](#deleterecoveryinstance) - Deletes a single Recovery Instance by ID. This deletes the Recovery Instance resource from Elastic Disaster Recovery. The Recovery Instance must be disconnected first in order to delete it.
* [deleteReplicationConfigurationTemplate](#deletereplicationconfigurationtemplate) - Deletes a single Replication Configuration Template by ID
* [deleteSourceServer](#deletesourceserver) - Deletes a single Source Server by ID. The Source Server must be disconnected first.
* [describeJobLogItems](#describejoblogitems) - Retrieves a detailed Job log with pagination.
* [describeJobs](#describejobs) - Returns a list of Jobs. Use the JobsID and fromDate and toDate filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are created by the StartRecovery, TerminateRecoveryInstances and StartFailbackLaunch APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.
* [describeLaunchConfigurationTemplates](#describelaunchconfigurationtemplates) - Lists all Launch Configuration Templates, filtered by Launch Configuration Template IDs
* [describeRecoveryInstances](#describerecoveryinstances) - Lists all Recovery Instances or multiple Recovery Instances by ID.
* [describeRecoverySnapshots](#describerecoverysnapshots) - Lists all Recovery Snapshots for a single Source Server.
* [describeReplicationConfigurationTemplates](#describereplicationconfigurationtemplates) - Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.
* [describeSourceServers](#describesourceservers) - Lists all Source Servers or multiple Source Servers filtered by ID.
* [disconnectRecoveryInstance](#disconnectrecoveryinstance) - Disconnect a Recovery Instance from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Recovery Instance will be terminated / deleted within 90 minutes. If the agent on the Recovery Instance has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the Recovery Instance will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
* [disconnectSourceServer](#disconnectsourceserver) - Disconnects a specific Source Server from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Source Server will be terminated / deleted within 90 minutes. You cannot disconnect a Source Server if it has a Recovery Instance. If the agent on the Source Server has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
* [getFailbackReplicationConfiguration](#getfailbackreplicationconfiguration) - Lists all Failback ReplicationConfigurations, filtered by Recovery Instance ID.
* [getLaunchConfiguration](#getlaunchconfiguration) - Gets a LaunchConfiguration, filtered by Source Server IDs.
* [getReplicationConfiguration](#getreplicationconfiguration) - Gets a ReplicationConfiguration, filtered by Source Server ID.
* [initializeService](#initializeservice) - Initialize Elastic Disaster Recovery.
* [listExtensibleSourceServers](#listextensiblesourceservers) - Returns a list of source servers on a staging account that are extensible, which means that: a. The source server is not already extended into this Account. b. The source server on the Account we’re reading from is not an extension of another source server. 
* [listStagingAccounts](#liststagingaccounts) - Returns an array of staging accounts for existing extended source servers.
* [listTagsForResource](#listtagsforresource) - List all tags for your Elastic Disaster Recovery resources.
* [~~retryDataReplication~~](#retrydatareplication) - WARNING: RetryDataReplication is deprecated. Causes the data replication initiation sequence to begin immediately upon next Handshake for the specified Source Server ID, regardless of when the previous initiation started. This command will work only if the Source Server is stalled or is in a DISCONNECTED or STOPPED state.  :warning: **Deprecated**
* [reverseReplication](#reversereplication) - Start replication to origin / target region - applies only to protected instances that originated in EC2. For recovery instances on target region - starts replication back to origin region. For failback instances on origin region - starts replication to target region to re-protect them. 
* [startFailbackLaunch](#startfailbacklaunch) - Initiates a Job for launching the machine that is being failed back to from the specified Recovery Instance. This will run conversion on the failback client and will reboot your machine, thus completing the failback process.
* [startRecovery](#startrecovery) - Launches Recovery Instances for the specified Source Servers. For each Source Server you may choose a point in time snapshot to launch from, or use an on demand snapshot.
* [startReplication](#startreplication) - Starts replication for a stopped Source Server. This action would make the Source Server protected again and restart billing for it.
* [stopFailback](#stopfailback) - Stops the failback process for a specified Recovery Instance. This changes the Failback State of the Recovery Instance back to FAILBACK_NOT_STARTED.
* [stopReplication](#stopreplication) - Stops replication for a Source Server. This action would make the Source Server unprotected, delete its existing snapshots and stop billing for it.
* [tagResource](#tagresource) - Adds or overwrites only the specified tags for the specified Elastic Disaster Recovery resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value.
* [terminateRecoveryInstances](#terminaterecoveryinstances) - Initiates a Job for terminating the EC2 resources associated with the specified Recovery Instances, and then will delete the Recovery Instances from the Elastic Disaster Recovery service.
* [untagResource](#untagresource) - Deletes the specified set of tags from the specified set of Elastic Disaster Recovery resources.
* [updateFailbackReplicationConfiguration](#updatefailbackreplicationconfiguration) - Allows you to update the failback replication configuration of a Recovery Instance by ID.
* [updateLaunchConfiguration](#updatelaunchconfiguration) - Updates a LaunchConfiguration by Source Server ID.
* [updateLaunchConfigurationTemplate](#updatelaunchconfigurationtemplate) - Updates an existing Launch Configuration Template by ID.
* [updateReplicationConfiguration](#updatereplicationconfiguration) - Allows you to update a ReplicationConfiguration by Source Server ID.
* [updateReplicationConfigurationTemplate](#updatereplicationconfigurationtemplate) - Updates a ReplicationConfigurationTemplate by ID.

## createExtendedSourceServer

Create an extended source server in the target Account based on the source server in staging account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateExtendedSourceServerRequest;
import org.openapis.openapi.models.operations.CreateExtendedSourceServerRequestBody;
import org.openapis.openapi.models.operations.CreateExtendedSourceServerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateExtendedSourceServerRequest req = new CreateExtendedSourceServerRequest(                new CreateExtendedSourceServerRequestBody("tempora") {{
                                tags = new java.util.HashMap<String, String>() {{
                                    put("molestiae", "minus");
                                    put("placeat", "voluptatum");
                                }};
                            }};) {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "nisi";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "quis";
            }};            

            CreateExtendedSourceServerResponse res = sdk.sdk.createExtendedSourceServer(req);

            if (res.createExtendedSourceServerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLaunchConfigurationTemplate

Creates a new Launch Configuration Template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLaunchConfigurationTemplateRequest;
import org.openapis.openapi.models.operations.CreateLaunchConfigurationTemplateRequestBody;
import org.openapis.openapi.models.operations.CreateLaunchConfigurationTemplateRequestBodyLaunchDispositionEnum;
import org.openapis.openapi.models.operations.CreateLaunchConfigurationTemplateRequestBodyLicensing;
import org.openapis.openapi.models.operations.CreateLaunchConfigurationTemplateRequestBodyTargetInstanceTypeRightSizingMethodEnum;
import org.openapis.openapi.models.operations.CreateLaunchConfigurationTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLaunchConfigurationTemplateRequest req = new CreateLaunchConfigurationTemplateRequest(                new CreateLaunchConfigurationTemplateRequestBody() {{
                                copyPrivateIp = false;
                                copyTags = false;
                                launchDisposition = CreateLaunchConfigurationTemplateRequestBodyLaunchDispositionEnum.STARTED;
                                licensing = new CreateLaunchConfigurationTemplateRequestBodyLicensing() {{
                                    osByol = false;
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("ipsam", "repellendus");
                                }};
                                targetInstanceTypeRightSizingMethod = CreateLaunchConfigurationTemplateRequestBodyTargetInstanceTypeRightSizingMethodEnum.BASIC;
                            }};) {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "odit";
                xAmzCredential = "at";
                xAmzDate = "at";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "quod";
            }};            

            CreateLaunchConfigurationTemplateResponse res = sdk.sdk.createLaunchConfigurationTemplate(req);

            if (res.createLaunchConfigurationTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createReplicationConfigurationTemplate

Creates a new ReplicationConfigurationTemplate.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateReplicationConfigurationTemplateRequest;
import org.openapis.openapi.models.operations.CreateReplicationConfigurationTemplateRequestBody;
import org.openapis.openapi.models.operations.CreateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum;
import org.openapis.openapi.models.operations.CreateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum;
import org.openapis.openapi.models.operations.CreateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum;
import org.openapis.openapi.models.operations.CreateReplicationConfigurationTemplateResponse;
import org.openapis.openapi.models.shared.PITPolicyRule;
import org.openapis.openapi.models.shared.PITPolicyRuleUnitsEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateReplicationConfigurationTemplateRequest req = new CreateReplicationConfigurationTemplateRequest(                new CreateReplicationConfigurationTemplateRequestBody(false, 461479L, false, CreateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum.PUBLIC_IP, CreateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum.AUTO, CreateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum.CUSTOM,                 new org.openapis.openapi.models.shared.PITPolicyRule[]{{
                                                add(new PITPolicyRule(537373L, 944669L, PITPolicyRuleUnitsEnum.DAY) {{
                                                    enabled = false;
                                                    interval = 720633L;
                                                    retentionDuration = 639921L;
                                                    ruleID = 582020L;
                                                    units = PITPolicyRuleUnitsEnum.MINUTE;
                                                }}),
                                            }}, "totam",                 new String[]{{
                                                add("commodi"),
                                            }}, "molestiae",                 new java.util.HashMap<String, String>() {{
                                                put("qui", "impedit");
                                                put("cum", "esse");
                                            }}, false) {{
                                autoReplicateNewDisks = false;
                                ebsEncryptionKeyArn = "ipsum";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("aspernatur", "perferendis");
                                    put("ad", "natus");
                                    put("sed", "iste");
                                }};
                            }};) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "natus";
                xAmzCredential = "laboriosam";
                xAmzDate = "hic";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "in";
            }};            

            CreateReplicationConfigurationTemplateResponse res = sdk.sdk.createReplicationConfigurationTemplate(req);

            if (res.replicationConfigurationTemplate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteJob

Deletes a single Job by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteJobRequest;
import org.openapis.openapi.models.operations.DeleteJobRequestBody;
import org.openapis.openapi.models.operations.DeleteJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteJobRequest req = new DeleteJobRequest(                new DeleteJobRequestBody("iste");) {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "quidem";
                xAmzDate = "architecto";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "est";
            }};            

            DeleteJobResponse res = sdk.sdk.deleteJob(req);

            if (res.deleteJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteLaunchConfigurationTemplate

Deletes a single Launch Configuration Template by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLaunchConfigurationTemplateRequest;
import org.openapis.openapi.models.operations.DeleteLaunchConfigurationTemplateRequestBody;
import org.openapis.openapi.models.operations.DeleteLaunchConfigurationTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteLaunchConfigurationTemplateRequest req = new DeleteLaunchConfigurationTemplateRequest(                new DeleteLaunchConfigurationTemplateRequestBody("laborum");) {{
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "corporis";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "omnis";
            }};            

            DeleteLaunchConfigurationTemplateResponse res = sdk.sdk.deleteLaunchConfigurationTemplate(req);

            if (res.deleteLaunchConfigurationTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRecoveryInstance

Deletes a single Recovery Instance by ID. This deletes the Recovery Instance resource from Elastic Disaster Recovery. The Recovery Instance must be disconnected first in order to delete it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRecoveryInstanceRequest;
import org.openapis.openapi.models.operations.DeleteRecoveryInstanceRequestBody;
import org.openapis.openapi.models.operations.DeleteRecoveryInstanceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRecoveryInstanceRequest req = new DeleteRecoveryInstanceRequest(                new DeleteRecoveryInstanceRequestBody("minima");) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "iure";
                xAmzDate = "culpa";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "architecto";
            }};            

            DeleteRecoveryInstanceResponse res = sdk.sdk.deleteRecoveryInstance(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteReplicationConfigurationTemplate

Deletes a single Replication Configuration Template by ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteReplicationConfigurationTemplateRequest;
import org.openapis.openapi.models.operations.DeleteReplicationConfigurationTemplateRequestBody;
import org.openapis.openapi.models.operations.DeleteReplicationConfigurationTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteReplicationConfigurationTemplateRequest req = new DeleteReplicationConfigurationTemplateRequest(                new DeleteReplicationConfigurationTemplateRequestBody("dolorem");) {{
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "repellat";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "commodi";
            }};            

            DeleteReplicationConfigurationTemplateResponse res = sdk.sdk.deleteReplicationConfigurationTemplate(req);

            if (res.deleteReplicationConfigurationTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSourceServer

Deletes a single Source Server by ID. The Source Server must be disconnected first.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSourceServerRequest;
import org.openapis.openapi.models.operations.DeleteSourceServerRequestBody;
import org.openapis.openapi.models.operations.DeleteSourceServerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSourceServerRequest req = new DeleteSourceServerRequest(                new DeleteSourceServerRequestBody("molestiae");) {{
                xAmzAlgorithm = "velit";
                xAmzContentSha256 = "error";
                xAmzCredential = "quia";
                xAmzDate = "quis";
                xAmzSecurityToken = "vitae";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "animi";
            }};            

            DeleteSourceServerResponse res = sdk.sdk.deleteSourceServer(req);

            if (res.deleteSourceServerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeJobLogItems

Retrieves a detailed Job log with pagination.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeJobLogItemsRequest;
import org.openapis.openapi.models.operations.DescribeJobLogItemsRequestBody;
import org.openapis.openapi.models.operations.DescribeJobLogItemsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeJobLogItemsRequest req = new DescribeJobLogItemsRequest(                new DescribeJobLogItemsRequestBody("odit") {{
                                maxResults = 778346L;
                                nextToken = "sequi";
                            }};) {{
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "id";
                xAmzDate = "possimus";
                xAmzSecurityToken = "aut";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "error";
                maxResults = "temporibus";
                nextToken = "laborum";
            }};            

            DescribeJobLogItemsResponse res = sdk.sdk.describeJobLogItems(req);

            if (res.describeJobLogItemsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeJobs

Returns a list of Jobs. Use the JobsID and fromDate and toDate filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are created by the StartRecovery, TerminateRecoveryInstances and StartFailbackLaunch APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeJobsRequest;
import org.openapis.openapi.models.operations.DescribeJobsRequestBody;
import org.openapis.openapi.models.operations.DescribeJobsRequestBodyFilters;
import org.openapis.openapi.models.operations.DescribeJobsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeJobsRequest req = new DescribeJobsRequest(                new DescribeJobsRequestBody() {{
                                filters = new DescribeJobsRequestBodyFilters() {{
                                    fromDate = "reiciendis";
                                    jobIDs = new String[]{{
                                        add("vero"),
                                        add("nihil"),
                                        add("praesentium"),
                                        add("voluptatibus"),
                                    }};
                                    toDate = "ipsa";
                                }};;
                                maxResults = 604846L;
                                nextToken = "voluptate";
                            }};) {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "doloremque";
                xAmzDate = "reprehenderit";
                xAmzSecurityToken = "ut";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "dicta";
                maxResults = "corporis";
                nextToken = "dolore";
            }};            

            DescribeJobsResponse res = sdk.sdk.describeJobs(req);

            if (res.describeJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeLaunchConfigurationTemplates

Lists all Launch Configuration Templates, filtered by Launch Configuration Template IDs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeLaunchConfigurationTemplatesRequest;
import org.openapis.openapi.models.operations.DescribeLaunchConfigurationTemplatesRequestBody;
import org.openapis.openapi.models.operations.DescribeLaunchConfigurationTemplatesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeLaunchConfigurationTemplatesRequest req = new DescribeLaunchConfigurationTemplatesRequest(                new DescribeLaunchConfigurationTemplatesRequestBody() {{
                                launchConfigurationTemplateIDs = new String[]{{
                                    add("harum"),
                                }};
                                maxResults = 317983L;
                                nextToken = "accusamus";
                            }};) {{
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "quae";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "molestias";
                xAmzSignedHeaders = "excepturi";
                maxResults = "pariatur";
                nextToken = "modi";
            }};            

            DescribeLaunchConfigurationTemplatesResponse res = sdk.sdk.describeLaunchConfigurationTemplates(req);

            if (res.describeLaunchConfigurationTemplatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeRecoveryInstances

Lists all Recovery Instances or multiple Recovery Instances by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeRecoveryInstancesRequest;
import org.openapis.openapi.models.operations.DescribeRecoveryInstancesRequestBody;
import org.openapis.openapi.models.operations.DescribeRecoveryInstancesRequestBodyFilters;
import org.openapis.openapi.models.operations.DescribeRecoveryInstancesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeRecoveryInstancesRequest req = new DescribeRecoveryInstancesRequest(                new DescribeRecoveryInstancesRequestBody() {{
                                filters = new DescribeRecoveryInstancesRequestBodyFilters() {{
                                    recoveryInstanceIDs = new String[]{{
                                        add("voluptates"),
                                        add("quasi"),
                                        add("repudiandae"),
                                    }};
                                    sourceServerIDs = new String[]{{
                                        add("veritatis"),
                                        add("itaque"),
                                        add("incidunt"),
                                    }};
                                }};;
                                maxResults = 318569L;
                                nextToken = "consequatur";
                            }};) {{
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "explicabo";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "labore";
                maxResults = "modi";
                nextToken = "qui";
            }};            

            DescribeRecoveryInstancesResponse res = sdk.sdk.describeRecoveryInstances(req);

            if (res.describeRecoveryInstancesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeRecoverySnapshots

Lists all Recovery Snapshots for a single Source Server.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeRecoverySnapshotsRequest;
import org.openapis.openapi.models.operations.DescribeRecoverySnapshotsRequestBody;
import org.openapis.openapi.models.operations.DescribeRecoverySnapshotsRequestBodyFilters;
import org.openapis.openapi.models.operations.DescribeRecoverySnapshotsRequestBodyOrderEnum;
import org.openapis.openapi.models.operations.DescribeRecoverySnapshotsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeRecoverySnapshotsRequest req = new DescribeRecoverySnapshotsRequest(                new DescribeRecoverySnapshotsRequestBody("cupiditate") {{
                                filters = new DescribeRecoverySnapshotsRequestBodyFilters() {{
                                    fromDateTime = "quos";
                                    toDateTime = "perferendis";
                                }};;
                                maxResults = 164940L;
                                nextToken = "assumenda";
                                order = DescribeRecoverySnapshotsRequestBodyOrderEnum.ASC;
                            }};) {{
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "dolorum";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "tempore";
                maxResults = "labore";
                nextToken = "delectus";
            }};            

            DescribeRecoverySnapshotsResponse res = sdk.sdk.describeRecoverySnapshots(req);

            if (res.describeRecoverySnapshotsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeReplicationConfigurationTemplates

Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeReplicationConfigurationTemplatesRequest;
import org.openapis.openapi.models.operations.DescribeReplicationConfigurationTemplatesRequestBody;
import org.openapis.openapi.models.operations.DescribeReplicationConfigurationTemplatesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeReplicationConfigurationTemplatesRequest req = new DescribeReplicationConfigurationTemplatesRequest(                new DescribeReplicationConfigurationTemplatesRequestBody() {{
                                maxResults = 248753L;
                                nextToken = "eligendi";
                                replicationConfigurationTemplateIDs = new String[]{{
                                    add("aliquid"),
                                    add("provident"),
                                    add("necessitatibus"),
                                }};
                            }};) {{
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "officia";
                xAmzCredential = "dolor";
                xAmzDate = "debitis";
                xAmzSecurityToken = "a";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "in";
                maxResults = "in";
                nextToken = "illum";
            }};            

            DescribeReplicationConfigurationTemplatesResponse res = sdk.sdk.describeReplicationConfigurationTemplates(req);

            if (res.describeReplicationConfigurationTemplatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeSourceServers

Lists all Source Servers or multiple Source Servers filtered by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeSourceServersRequest;
import org.openapis.openapi.models.operations.DescribeSourceServersRequestBody;
import org.openapis.openapi.models.operations.DescribeSourceServersRequestBodyFilters;
import org.openapis.openapi.models.operations.DescribeSourceServersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeSourceServersRequest req = new DescribeSourceServersRequest(                new DescribeSourceServersRequestBody() {{
                                filters = new DescribeSourceServersRequestBodyFilters() {{
                                    hardwareId = "rerum";
                                    sourceServerIDs = new String[]{{
                                        add("magnam"),
                                    }};
                                    stagingAccountIDs = new String[]{{
                                        add("facere"),
                                        add("ea"),
                                        add("aliquid"),
                                        add("laborum"),
                                    }};
                                }};;
                                maxResults = 881104L;
                                nextToken = "non";
                            }};) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "enim";
                xAmzCredential = "accusamus";
                xAmzDate = "delectus";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "nam";
                maxResults = "id";
                nextToken = "blanditiis";
            }};            

            DescribeSourceServersResponse res = sdk.sdk.describeSourceServers(req);

            if (res.describeSourceServersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disconnectRecoveryInstance

Disconnect a Recovery Instance from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Recovery Instance will be terminated / deleted within 90 minutes. If the agent on the Recovery Instance has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the Recovery Instance will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisconnectRecoveryInstanceRequest;
import org.openapis.openapi.models.operations.DisconnectRecoveryInstanceRequestBody;
import org.openapis.openapi.models.operations.DisconnectRecoveryInstanceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisconnectRecoveryInstanceRequest req = new DisconnectRecoveryInstanceRequest(                new DisconnectRecoveryInstanceRequestBody("sapiente");) {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "nisi";
                xAmzDate = "vel";
                xAmzSecurityToken = "natus";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "molestiae";
            }};            

            DisconnectRecoveryInstanceResponse res = sdk.sdk.disconnectRecoveryInstance(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disconnectSourceServer

Disconnects a specific Source Server from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Source Server will be terminated / deleted within 90 minutes. You cannot disconnect a Source Server if it has a Recovery Instance. If the agent on the Source Server has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisconnectSourceServerRequest;
import org.openapis.openapi.models.operations.DisconnectSourceServerRequestBody;
import org.openapis.openapi.models.operations.DisconnectSourceServerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisconnectSourceServerRequest req = new DisconnectSourceServerRequest(                new DisconnectSourceServerRequestBody("nihil");) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "id";
                xAmzDate = "labore";
                xAmzSecurityToken = "labore";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "natus";
            }};            

            DisconnectSourceServerResponse res = sdk.sdk.disconnectSourceServer(req);

            if (res.sourceServer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFailbackReplicationConfiguration

Lists all Failback ReplicationConfigurations, filtered by Recovery Instance ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFailbackReplicationConfigurationRequest;
import org.openapis.openapi.models.operations.GetFailbackReplicationConfigurationRequestBody;
import org.openapis.openapi.models.operations.GetFailbackReplicationConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFailbackReplicationConfigurationRequest req = new GetFailbackReplicationConfigurationRequest(                new GetFailbackReplicationConfigurationRequestBody("eum");) {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "architecto";
                xAmzDate = "magnam";
                xAmzSecurityToken = "et";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "ullam";
            }};            

            GetFailbackReplicationConfigurationResponse res = sdk.sdk.getFailbackReplicationConfiguration(req);

            if (res.getFailbackReplicationConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLaunchConfiguration

Gets a LaunchConfiguration, filtered by Source Server IDs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLaunchConfigurationRequest;
import org.openapis.openapi.models.operations.GetLaunchConfigurationRequestBody;
import org.openapis.openapi.models.operations.GetLaunchConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLaunchConfigurationRequest req = new GetLaunchConfigurationRequest(                new GetLaunchConfigurationRequestBody("quos");) {{
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "mollitia";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "eum";
            }};            

            GetLaunchConfigurationResponse res = sdk.sdk.getLaunchConfiguration(req);

            if (res.launchConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReplicationConfiguration

Gets a ReplicationConfiguration, filtered by Source Server ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReplicationConfigurationRequest;
import org.openapis.openapi.models.operations.GetReplicationConfigurationRequestBody;
import org.openapis.openapi.models.operations.GetReplicationConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetReplicationConfigurationRequest req = new GetReplicationConfigurationRequest(                new GetReplicationConfigurationRequestBody("necessitatibus");) {{
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "quasi";
                xAmzDate = "iure";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "eius";
            }};            

            GetReplicationConfigurationResponse res = sdk.sdk.getReplicationConfiguration(req);

            if (res.replicationConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## initializeService

Initialize Elastic Disaster Recovery.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InitializeServiceRequest;
import org.openapis.openapi.models.operations.InitializeServiceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            InitializeServiceRequest req = new InitializeServiceRequest() {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "in";
                xAmzDate = "architecto";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "ullam";
            }};            

            InitializeServiceResponse res = sdk.sdk.initializeService(req);

            if (res.initializeServiceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listExtensibleSourceServers

Returns a list of source servers on a staging account that are extensible, which means that: a. The source server is not already extended into this Account. b. The source server on the Account we’re reading from is not an extension of another source server. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListExtensibleSourceServersRequest;
import org.openapis.openapi.models.operations.ListExtensibleSourceServersRequestBody;
import org.openapis.openapi.models.operations.ListExtensibleSourceServersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListExtensibleSourceServersRequest req = new ListExtensibleSourceServersRequest(                new ListExtensibleSourceServersRequestBody("nihil") {{
                                maxResults = 998848L;
                                nextToken = "quibusdam";
                            }};) {{
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "pariatur";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "natus";
                maxResults = "magni";
                nextToken = "sunt";
            }};            

            ListExtensibleSourceServersResponse res = sdk.sdk.listExtensibleSourceServers(req);

            if (res.listExtensibleSourceServersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listStagingAccounts

Returns an array of staging accounts for existing extended source servers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListStagingAccountsRequest;
import org.openapis.openapi.models.operations.ListStagingAccountsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListStagingAccountsRequest req = new ListStagingAccountsRequest() {{
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "maxime";
                xAmzDate = "ea";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "ea";
                maxResults = 33222L;
                nextToken = "ab";
            }};            

            ListStagingAccountsResponse res = sdk.sdk.listStagingAccounts(req);

            if (res.listStagingAccountsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

List all tags for your Elastic Disaster Recovery resources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("quidem") {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "autem";
                xAmzDate = "nam";
                xAmzSecurityToken = "eaque";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "nemo";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~retryDataReplication~~

WARNING: RetryDataReplication is deprecated. Causes the data replication initiation sequence to begin immediately upon next Handshake for the specified Source Server ID, regardless of when the previous initiation started. This command will work only if the Source Server is stalled or is in a DISCONNECTED or STOPPED state. 

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetryDataReplicationRequest;
import org.openapis.openapi.models.operations.RetryDataReplicationRequestBody;
import org.openapis.openapi.models.operations.RetryDataReplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RetryDataReplicationRequest req = new RetryDataReplicationRequest(                new RetryDataReplicationRequestBody("perferendis");) {{
                xAmzAlgorithm = "fugiat";
                xAmzContentSha256 = "amet";
                xAmzCredential = "aut";
                xAmzDate = "cumque";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "libero";
            }};            

            RetryDataReplicationResponse res = sdk.sdk.retryDataReplication(req);

            if (res.sourceServer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reverseReplication

Start replication to origin / target region - applies only to protected instances that originated in EC2. For recovery instances on target region - starts replication back to origin region. For failback instances on origin region - starts replication to target region to re-protect them. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReverseReplicationRequest;
import org.openapis.openapi.models.operations.ReverseReplicationRequestBody;
import org.openapis.openapi.models.operations.ReverseReplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ReverseReplicationRequest req = new ReverseReplicationRequest(                new ReverseReplicationRequestBody("dolores");) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "totam";
                xAmzCredential = "dignissimos";
                xAmzDate = "eaque";
                xAmzSecurityToken = "quis";
                xAmzSignature = "nesciunt";
                xAmzSignedHeaders = "eos";
            }};            

            ReverseReplicationResponse res = sdk.sdk.reverseReplication(req);

            if (res.reverseReplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startFailbackLaunch

Initiates a Job for launching the machine that is being failed back to from the specified Recovery Instance. This will run conversion on the failback client and will reboot your machine, thus completing the failback process.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartFailbackLaunchRequest;
import org.openapis.openapi.models.operations.StartFailbackLaunchRequestBody;
import org.openapis.openapi.models.operations.StartFailbackLaunchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartFailbackLaunchRequest req = new StartFailbackLaunchRequest(                new StartFailbackLaunchRequestBody(                new String[]{{
                                                add("minus"),
                                            }}) {{
                                tags = new java.util.HashMap<String, String>() {{
                                    put("dolor", "vero");
                                    put("nostrum", "hic");
                                }};
                            }};) {{
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "facilis";
                xAmzDate = "perspiciatis";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "consequuntur";
            }};            

            StartFailbackLaunchResponse res = sdk.sdk.startFailbackLaunch(req);

            if (res.startFailbackLaunchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startRecovery

Launches Recovery Instances for the specified Source Servers. For each Source Server you may choose a point in time snapshot to launch from, or use an on demand snapshot.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartRecoveryRequest;
import org.openapis.openapi.models.operations.StartRecoveryRequestBody;
import org.openapis.openapi.models.operations.StartRecoveryResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartRecoveryRequestSourceServer;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartRecoveryRequest req = new StartRecoveryRequest(                new StartRecoveryRequestBody(                new org.openapis.openapi.models.shared.StartRecoveryRequestSourceServer[]{{
                                                add(new StartRecoveryRequestSourceServer("rerum") {{
                                                    recoverySnapshotID = "eaque";
                                                    sourceServerID = "occaecati";
                                                }}),
                                                add(new StartRecoveryRequestSourceServer("earum") {{
                                                    recoverySnapshotID = "adipisci";
                                                    sourceServerID = "asperiores";
                                                }}),
                                                add(new StartRecoveryRequestSourceServer("dolorum") {{
                                                    recoverySnapshotID = "modi";
                                                    sourceServerID = "iste";
                                                }}),
                                            }}) {{
                                isDrill = false;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("pariatur", "provident");
                                    put("nobis", "libero");
                                    put("delectus", "quaerat");
                                }};
                            }};) {{
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "dolorem";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "ipsum";
            }};            

            StartRecoveryResponse res = sdk.sdk.startRecovery(req);

            if (res.startRecoveryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startReplication

Starts replication for a stopped Source Server. This action would make the Source Server protected again and restart billing for it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartReplicationRequest;
import org.openapis.openapi.models.operations.StartReplicationRequestBody;
import org.openapis.openapi.models.operations.StartReplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartReplicationRequest req = new StartReplicationRequest(                new StartReplicationRequestBody("excepturi");) {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "dignissimos";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "amet";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "numquam";
            }};            

            StartReplicationResponse res = sdk.sdk.startReplication(req);

            if (res.startReplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopFailback

Stops the failback process for a specified Recovery Instance. This changes the Failback State of the Recovery Instance back to FAILBACK_NOT_STARTED.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopFailbackRequest;
import org.openapis.openapi.models.operations.StopFailbackRequestBody;
import org.openapis.openapi.models.operations.StopFailbackResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopFailbackRequest req = new StopFailbackRequest(                new StopFailbackRequestBody("ipsa");) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "iure";
                xAmzCredential = "odio";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            StopFailbackResponse res = sdk.sdk.stopFailback(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopReplication

Stops replication for a Source Server. This action would make the Source Server unprotected, delete its existing snapshots and stop billing for it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopReplicationRequest;
import org.openapis.openapi.models.operations.StopReplicationRequestBody;
import org.openapis.openapi.models.operations.StopReplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopReplicationRequest req = new StopReplicationRequest(                new StopReplicationRequestBody("natus");) {{
                xAmzAlgorithm = "eos";
                xAmzContentSha256 = "atque";
                xAmzCredential = "sit";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "ab";
                xAmzSignature = "soluta";
                xAmzSignedHeaders = "dolorum";
            }};            

            StopReplicationResponse res = sdk.sdk.stopReplication(req);

            if (res.stopReplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds or overwrites only the specified tags for the specified Elastic Disaster Recovery resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("dolorum", "deleniti");
                                                put("omnis", "necessitatibus");
                                            }});, "distinctio") {{
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "ipsum";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "id";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "eius";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## terminateRecoveryInstances

Initiates a Job for terminating the EC2 resources associated with the specified Recovery Instances, and then will delete the Recovery Instances from the Elastic Disaster Recovery service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TerminateRecoveryInstancesRequest;
import org.openapis.openapi.models.operations.TerminateRecoveryInstancesRequestBody;
import org.openapis.openapi.models.operations.TerminateRecoveryInstancesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TerminateRecoveryInstancesRequest req = new TerminateRecoveryInstancesRequest(                new TerminateRecoveryInstancesRequestBody(                new String[]{{
                                                add("amet"),
                                            }});) {{
                xAmzAlgorithm = "optio";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "ad";
                xAmzDate = "saepe";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "provident";
            }};            

            TerminateRecoveryInstancesResponse res = sdk.sdk.terminateRecoveryInstances(req);

            if (res.terminateRecoveryInstancesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Deletes the specified set of tags from the specified set of Elastic Disaster Recovery resources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("repellendus",                 new String[]{{
                                add("similique"),
                                add("alias"),
                                add("at"),
                            }}) {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "vel";
                xAmzDate = "quod";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "dolorum";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFailbackReplicationConfiguration

Allows you to update the failback replication configuration of a Recovery Instance by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFailbackReplicationConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateFailbackReplicationConfigurationRequestBody;
import org.openapis.openapi.models.operations.UpdateFailbackReplicationConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateFailbackReplicationConfigurationRequest req = new UpdateFailbackReplicationConfigurationRequest(                new UpdateFailbackReplicationConfigurationRequestBody("esse") {{
                                bandwidthThrottling = 687488L;
                                name = "Tracy Schamberger";
                                usePrivateIP = false;
                            }};) {{
                xAmzAlgorithm = "tempore";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "numquam";
                xAmzDate = "enim";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "totam";
            }};            

            UpdateFailbackReplicationConfigurationResponse res = sdk.sdk.updateFailbackReplicationConfiguration(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateLaunchConfiguration

Updates a LaunchConfiguration by Source Server ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateLaunchConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateLaunchConfigurationRequestBody;
import org.openapis.openapi.models.operations.UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum;
import org.openapis.openapi.models.operations.UpdateLaunchConfigurationRequestBodyLicensing;
import org.openapis.openapi.models.operations.UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum;
import org.openapis.openapi.models.operations.UpdateLaunchConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateLaunchConfigurationRequest req = new UpdateLaunchConfigurationRequest(                new UpdateLaunchConfigurationRequestBody("sit") {{
                                copyPrivateIp = false;
                                copyTags = false;
                                launchDisposition = UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum.STARTED;
                                licensing = new UpdateLaunchConfigurationRequestBodyLicensing() {{
                                    osByol = false;
                                }};;
                                name = "Jane Kassulke";
                                targetInstanceTypeRightSizingMethod = UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum.BASIC;
                            }};) {{
                xAmzAlgorithm = "quam";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "incidunt";
                xAmzDate = "qui";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "pariatur";
            }};            

            UpdateLaunchConfigurationResponse res = sdk.sdk.updateLaunchConfiguration(req);

            if (res.launchConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateLaunchConfigurationTemplate

Updates an existing Launch Configuration Template by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateLaunchConfigurationTemplateRequest;
import org.openapis.openapi.models.operations.UpdateLaunchConfigurationTemplateRequestBody;
import org.openapis.openapi.models.operations.UpdateLaunchConfigurationTemplateRequestBodyLaunchDispositionEnum;
import org.openapis.openapi.models.operations.UpdateLaunchConfigurationTemplateRequestBodyLicensing;
import org.openapis.openapi.models.operations.UpdateLaunchConfigurationTemplateRequestBodyTargetInstanceTypeRightSizingMethodEnum;
import org.openapis.openapi.models.operations.UpdateLaunchConfigurationTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateLaunchConfigurationTemplateRequest req = new UpdateLaunchConfigurationTemplateRequest(                new UpdateLaunchConfigurationTemplateRequestBody("dicta") {{
                                copyPrivateIp = false;
                                copyTags = false;
                                launchDisposition = UpdateLaunchConfigurationTemplateRequestBodyLaunchDispositionEnum.STARTED;
                                licensing = new UpdateLaunchConfigurationTemplateRequestBodyLicensing() {{
                                    osByol = false;
                                }};;
                                targetInstanceTypeRightSizingMethod = UpdateLaunchConfigurationTemplateRequestBodyTargetInstanceTypeRightSizingMethodEnum.BASIC;
                            }};) {{
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "dolores";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "quam";
            }};            

            UpdateLaunchConfigurationTemplateResponse res = sdk.sdk.updateLaunchConfigurationTemplate(req);

            if (res.updateLaunchConfigurationTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateReplicationConfiguration

Allows you to update a ReplicationConfiguration by Source Server ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateReplicationConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateReplicationConfigurationRequestBody;
import org.openapis.openapi.models.operations.UpdateReplicationConfigurationRequestBodyDataPlaneRoutingEnum;
import org.openapis.openapi.models.operations.UpdateReplicationConfigurationRequestBodyDefaultLargeStagingDiskTypeEnum;
import org.openapis.openapi.models.operations.UpdateReplicationConfigurationRequestBodyEbsEncryptionEnum;
import org.openapis.openapi.models.operations.UpdateReplicationConfigurationResponse;
import org.openapis.openapi.models.shared.PITPolicyRule;
import org.openapis.openapi.models.shared.PITPolicyRuleUnitsEnum;
import org.openapis.openapi.models.shared.ReplicationConfigurationReplicatedDisk;
import org.openapis.openapi.models.shared.ReplicationConfigurationReplicatedDiskStagingDiskTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateReplicationConfigurationRequest req = new UpdateReplicationConfigurationRequest(                new UpdateReplicationConfigurationRequestBody("temporibus") {{
                                associateDefaultSecurityGroup = false;
                                autoReplicateNewDisks = false;
                                bandwidthThrottling = 183280L;
                                createPublicIP = false;
                                dataPlaneRouting = UpdateReplicationConfigurationRequestBodyDataPlaneRoutingEnum.PRIVATE_IP;
                                defaultLargeStagingDiskType = UpdateReplicationConfigurationRequestBodyDefaultLargeStagingDiskTypeEnum.GP2;
                                ebsEncryption = UpdateReplicationConfigurationRequestBodyEbsEncryptionEnum.DEFAULT_;
                                ebsEncryptionKeyArn = "odio";
                                name = "Marion Reichert DDS";
                                pitPolicy = new org.openapis.openapi.models.shared.PITPolicyRule[]{{
                                    add(new PITPolicyRule(83422L, 749255L, PITPolicyRuleUnitsEnum.HOUR) {{
                                        enabled = false;
                                        interval = 748664L;
                                        retentionDuration = 92596L;
                                        ruleID = 903720L;
                                        units = PITPolicyRuleUnitsEnum.MINUTE;
                                    }}),
                                    add(new PITPolicyRule(209157L, 292147L, PITPolicyRuleUnitsEnum.MINUTE) {{
                                        enabled = false;
                                        interval = 731694L;
                                        retentionDuration = 584476L;
                                        ruleID = 45614L;
                                        units = PITPolicyRuleUnitsEnum.DAY;
                                    }}),
                                    add(new PITPolicyRule(16429L, 555649L, PITPolicyRuleUnitsEnum.DAY) {{
                                        enabled = false;
                                        interval = 240829L;
                                        retentionDuration = 677263L;
                                        ruleID = 100294L;
                                        units = PITPolicyRuleUnitsEnum.MINUTE;
                                    }}),
                                }};
                                replicatedDisks = new org.openapis.openapi.models.shared.ReplicationConfigurationReplicatedDisk[]{{
                                    add(new ReplicationConfigurationReplicatedDisk() {{
                                        deviceName = "est";
                                        iops = 833038L;
                                        isBootDisk = false;
                                        optimizedStagingDiskType = ReplicationConfigurationReplicatedDiskStagingDiskTypeEnum.ST1;
                                        stagingDiskType = ReplicationConfigurationReplicatedDiskStagingDiskTypeEnum.STANDARD;
                                        throughput = 281730L;
                                    }}),
                                }};
                                replicationServerInstanceType = "facilis";
                                replicationServersSecurityGroupsIDs = new String[]{{
                                    add("qui"),
                                    add("quae"),
                                    add("laudantium"),
                                }};
                                stagingAreaSubnetId = "odio";
                                stagingAreaTags = new java.util.HashMap<String, String>() {{
                                    put("voluptatibus", "quisquam");
                                    put("vero", "omnis");
                                    put("quis", "ipsum");
                                }};
                                useDedicatedReplicationServer = false;
                            }};) {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "consectetur";
                xAmzDate = "vero";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "hic";
            }};            

            UpdateReplicationConfigurationResponse res = sdk.sdk.updateReplicationConfiguration(req);

            if (res.replicationConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateReplicationConfigurationTemplate

Updates a ReplicationConfigurationTemplate by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateReplicationConfigurationTemplateRequest;
import org.openapis.openapi.models.operations.UpdateReplicationConfigurationTemplateRequestBody;
import org.openapis.openapi.models.operations.UpdateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum;
import org.openapis.openapi.models.operations.UpdateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum;
import org.openapis.openapi.models.operations.UpdateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum;
import org.openapis.openapi.models.operations.UpdateReplicationConfigurationTemplateResponse;
import org.openapis.openapi.models.shared.PITPolicyRule;
import org.openapis.openapi.models.shared.PITPolicyRuleUnitsEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateReplicationConfigurationTemplateRequest req = new UpdateReplicationConfigurationTemplateRequest(                new UpdateReplicationConfigurationTemplateRequestBody("quod") {{
                                arn = "odio";
                                associateDefaultSecurityGroup = false;
                                autoReplicateNewDisks = false;
                                bandwidthThrottling = 630448L;
                                createPublicIP = false;
                                dataPlaneRouting = UpdateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum.PUBLIC_IP;
                                defaultLargeStagingDiskType = UpdateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum.AUTO;
                                ebsEncryption = UpdateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum.DEFAULT_;
                                ebsEncryptionKeyArn = "dolore";
                                pitPolicy = new org.openapis.openapi.models.shared.PITPolicyRule[]{{
                                    add(new PITPolicyRule(13236L, 974259L, PITPolicyRuleUnitsEnum.HOUR) {{
                                        enabled = false;
                                        interval = 848944L;
                                        retentionDuration = 194342L;
                                        ruleID = 617877L;
                                        units = PITPolicyRuleUnitsEnum.DAY;
                                    }}),
                                    add(new PITPolicyRule(985033L, 478370L, PITPolicyRuleUnitsEnum.DAY) {{
                                        enabled = false;
                                        interval = 862310L;
                                        retentionDuration = 148141L;
                                        ruleID = 780427L;
                                        units = PITPolicyRuleUnitsEnum.DAY;
                                    }}),
                                    add(new PITPolicyRule(368584L, 410492L, PITPolicyRuleUnitsEnum.MINUTE) {{
                                        enabled = false;
                                        interval = 497391L;
                                        retentionDuration = 4048L;
                                        ruleID = 639473L;
                                        units = PITPolicyRuleUnitsEnum.MINUTE;
                                    }}),
                                    add(new PITPolicyRule(401132L, 511319L, PITPolicyRuleUnitsEnum.MINUTE) {{
                                        enabled = false;
                                        interval = 428224L;
                                        retentionDuration = 822118L;
                                        ruleID = 297842L;
                                        units = PITPolicyRuleUnitsEnum.MINUTE;
                                    }}),
                                }};
                                replicationServerInstanceType = "dolor";
                                replicationServersSecurityGroupsIDs = new String[]{{
                                    add("quasi"),
                                    add("ex"),
                                    add("nulla"),
                                    add("excepturi"),
                                }};
                                stagingAreaSubnetId = "voluptatibus";
                                stagingAreaTags = new java.util.HashMap<String, String>() {{
                                    put("sapiente", "quisquam");
                                    put("saepe", "ea");
                                }};
                                useDedicatedReplicationServer = false;
                            }};) {{
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "veniam";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "inventore";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "ea";
            }};            

            UpdateReplicationConfigurationTemplateResponse res = sdk.sdk.updateReplicationConfigurationTemplate(req);

            if (res.replicationConfigurationTemplate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
