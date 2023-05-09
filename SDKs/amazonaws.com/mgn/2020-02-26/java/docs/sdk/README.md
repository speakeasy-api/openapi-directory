# SDK

## Overview

The Application Migration Service service.

Amazon Web Services documentation
<https://docs.aws.amazon.com/mgn/>
### Available Operations

* [archiveApplication](#archiveapplication) - Archive application.
* [archiveWave](#archivewave) - Archive wave.
* [associateApplications](#associateapplications) - Associate applications to wave.
* [associateSourceServers](#associatesourceservers) - Associate source servers to application.
* [changeServerLifeCycleState](#changeserverlifecyclestate) - Allows the user to set the SourceServer.LifeCycle.state property for specific Source Server IDs to one of the following: READY_FOR_TEST or READY_FOR_CUTOVER. This command only works if the Source Server is already launchable (dataReplicationInfo.lagDuration is not null.)
* [createApplication](#createapplication) - Create application.
* [createLaunchConfigurationTemplate](#createlaunchconfigurationtemplate) - Creates a new Launch Configuration Template.
* [createReplicationConfigurationTemplate](#createreplicationconfigurationtemplate) - Creates a new ReplicationConfigurationTemplate.
* [createWave](#createwave) - Create wave.
* [deleteApplication](#deleteapplication) - Delete application.
* [deleteJob](#deletejob) - Deletes a single Job by ID.
* [deleteLaunchConfigurationTemplate](#deletelaunchconfigurationtemplate) - Deletes a single Launch Configuration Template by ID.
* [deleteReplicationConfigurationTemplate](#deletereplicationconfigurationtemplate) - Deletes a single Replication Configuration Template by ID
* [deleteSourceServer](#deletesourceserver) - Deletes a single source server by ID.
* [deleteVcenterClient](#deletevcenterclient) - Deletes a given vCenter client by ID.
* [deleteWave](#deletewave) - Delete wave.
* [describeJobLogItems](#describejoblogitems) - Retrieves detailed job log items with paging.
* [describeJobs](#describejobs) - Returns a list of Jobs. Use the JobsID and fromDate and toData filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are normally created by the StartTest, StartCutover, and TerminateTargetInstances APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.
* [describeLaunchConfigurationTemplates](#describelaunchconfigurationtemplates) - Lists all Launch Configuration Templates, filtered by Launch Configuration Template IDs
* [describeReplicationConfigurationTemplates](#describereplicationconfigurationtemplates) - Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.
* [describeSourceServers](#describesourceservers) - Retrieves all SourceServers or multiple SourceServers by ID.
* [describeVcenterClients](#describevcenterclients) - Returns a list of the installed vCenter clients.
* [disassociateApplications](#disassociateapplications) - Disassociate applications from wave.
* [disassociateSourceServers](#disassociatesourceservers) - Disassociate source servers from application.
* [disconnectFromService](#disconnectfromservice) - Disconnects specific Source Servers from Application Migration Service. Data replication is stopped immediately. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. If the agent on the source server has not been prevented from communicating with the Application Migration Service service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
* [finalizeCutover](#finalizecutover) - Finalizes the cutover immediately for specific Source Servers. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. The AWS Replication Agent will receive a command to uninstall itself (within 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be changed to DISCONNECTED; The SourceServer.lifeCycle.state will be changed to CUTOVER; The totalStorageBytes property fo each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
* [getLaunchConfiguration](#getlaunchconfiguration) - Lists all LaunchConfigurations available, filtered by Source Server IDs.
* [getReplicationConfiguration](#getreplicationconfiguration) - Lists all ReplicationConfigurations, filtered by Source Server ID.
* [initializeService](#initializeservice) - Initialize Application Migration Service.
* [listApplications](#listapplications) - Retrieves all applications or multiple applications by ID.
* [listExportErrors](#listexporterrors) - List export errors.
* [listExports](#listexports) - List exports.
* [listImportErrors](#listimporterrors) - List import errors.
* [listImports](#listimports) - List imports.
* [listSourceServerActions](#listsourceserveractions) - List source server post migration custom actions.
* [listTagsForResource](#listtagsforresource) - List all tags for your Application Migration Service resources.
* [listTemplateActions](#listtemplateactions) - List template post migration custom actions.
* [listWaves](#listwaves) - Retrieves all waves or multiple waves by ID.
* [markAsArchived](#markasarchived) - Archives specific Source Servers by setting the SourceServer.isArchived property to true for specified SourceServers by ID. This command only works for SourceServers with a lifecycle. state which equals DISCONNECTED or CUTOVER.
* [putSourceServerAction](#putsourceserveraction) - Put source server post migration custom action.
* [putTemplateAction](#puttemplateaction) - Put template post migration custom action.
* [removeSourceServerAction](#removesourceserveraction) - Remove source server post migration custom action.
* [removeTemplateAction](#removetemplateaction) - Remove template post migration custom action.
* [retryDataReplication](#retrydatareplication) - Causes the data replication initiation sequence to begin immediately upon next Handshake for specified SourceServer IDs, regardless of when the previous initiation started. This command will not work if the SourceServer is not stalled or is in a DISCONNECTED or STOPPED state.
* [startCutover](#startcutover) - Launches a Cutover Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartCutover and changes the SourceServer.lifeCycle.state property to CUTTING_OVER.
* [startExport](#startexport) - Start export.
* [startImport](#startimport) - Start import.
* [startReplication](#startreplication) - Starts replication for SNAPSHOT_SHIPPING agents.
* [startTest](#starttest) - Launches a Test Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartTest and changes the SourceServer.lifeCycle.state property to TESTING.
* [tagResource](#tagresource) - Adds or overwrites only the specified tags for the specified Application Migration Service resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value.
* [terminateTargetInstances](#terminatetargetinstances) - Starts a job that terminates specific launched EC2 Test and Cutover instances. This command will not work for any Source Server with a lifecycle.state of TESTING, CUTTING_OVER, or CUTOVER.
* [unarchiveApplication](#unarchiveapplication) - Unarchive application.
* [unarchiveWave](#unarchivewave) - Unarchive wave.
* [untagResource](#untagresource) - Deletes the specified set of tags from the specified set of Application Migration Service resources.
* [updateApplication](#updateapplication) - Update application.
* [updateLaunchConfiguration](#updatelaunchconfiguration) - Updates multiple LaunchConfigurations by Source Server ID.
* [updateLaunchConfigurationTemplate](#updatelaunchconfigurationtemplate) - Updates an existing Launch Configuration Template by ID.
* [updateReplicationConfiguration](#updatereplicationconfiguration) - Allows you to update multiple ReplicationConfigurations by Source Server ID.
* [updateReplicationConfigurationTemplate](#updatereplicationconfigurationtemplate) - Updates multiple ReplicationConfigurationTemplates by ID.
* [updateSourceServerReplicationType](#updatesourceserverreplicationtype) - Allows you to change between the AGENT_BASED replication type and the SNAPSHOT_SHIPPING replication type.
* [updateWave](#updatewave) - Update wave.

## archiveApplication

Archive application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArchiveApplicationRequest;
import org.openapis.openapi.models.operations.ArchiveApplicationRequestBody;
import org.openapis.openapi.models.operations.ArchiveApplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ArchiveApplicationRequest req = new ArchiveApplicationRequest(                new ArchiveApplicationRequestBody("deserunt");) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }};            

            ArchiveApplicationResponse res = sdk.sdk.archiveApplication(req);

            if (res.application != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## archiveWave

Archive wave.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArchiveWaveRequest;
import org.openapis.openapi.models.operations.ArchiveWaveRequestBody;
import org.openapis.openapi.models.operations.ArchiveWaveResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ArchiveWaveRequest req = new ArchiveWaveRequest(                new ArchiveWaveRequestBody("molestiae");) {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "voluptatum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "recusandae";
            }};            

            ArchiveWaveResponse res = sdk.sdk.archiveWave(req);

            if (res.wave != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associateApplications

Associate applications to wave.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateApplicationsRequest;
import org.openapis.openapi.models.operations.AssociateApplicationsRequestBody;
import org.openapis.openapi.models.operations.AssociateApplicationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateApplicationsRequest req = new AssociateApplicationsRequest(                new AssociateApplicationsRequestBody(                new String[]{{
                                                add("quis"),
                                            }}, "veritatis");) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "ipsam";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "odit";
            }};            

            AssociateApplicationsResponse res = sdk.sdk.associateApplications(req);

            if (res.associateApplicationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associateSourceServers

Associate source servers to application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateSourceServersRequest;
import org.openapis.openapi.models.operations.AssociateSourceServersRequestBody;
import org.openapis.openapi.models.operations.AssociateSourceServersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateSourceServersRequest req = new AssociateSourceServersRequest(                new AssociateSourceServersRequestBody("at",                 new String[]{{
                                                add("molestiae"),
                                                add("quod"),
                                                add("quod"),
                                                add("esse"),
                                            }});) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "porro";
                xAmzCredential = "dolorum";
                xAmzDate = "dicta";
                xAmzSecurityToken = "nam";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "occaecati";
            }};            

            AssociateSourceServersResponse res = sdk.sdk.associateSourceServers(req);

            if (res.associateSourceServersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## changeServerLifeCycleState

Allows the user to set the SourceServer.LifeCycle.state property for specific Source Server IDs to one of the following: READY_FOR_TEST or READY_FOR_CUTOVER. This command only works if the Source Server is already launchable (dataReplicationInfo.lagDuration is not null.)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChangeServerLifeCycleStateRequest;
import org.openapis.openapi.models.operations.ChangeServerLifeCycleStateRequestBody;
import org.openapis.openapi.models.operations.ChangeServerLifeCycleStateRequestBodyLifeCycle;
import org.openapis.openapi.models.operations.ChangeServerLifeCycleStateResponse;
import org.openapis.openapi.models.shared.ChangeServerLifeCycleStateSourceServerLifecycleStateEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ChangeServerLifeCycleStateRequest req = new ChangeServerLifeCycleStateRequest(                new ChangeServerLifeCycleStateRequestBody(                new ChangeServerLifeCycleStateRequestBodyLifeCycle() {{
                                                state = ChangeServerLifeCycleStateSourceServerLifecycleStateEnum.READY_FOR_CUTOVER;
                                            }};, "hic");) {{
                xAmzAlgorithm = "optio";
                xAmzContentSha256 = "totam";
                xAmzCredential = "beatae";
                xAmzDate = "commodi";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "qui";
            }};            

            ChangeServerLifeCycleStateResponse res = sdk.sdk.changeServerLifeCycleState(req);

            if (res.sourceServer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createApplication

Create application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateApplicationRequest;
import org.openapis.openapi.models.operations.CreateApplicationRequestBody;
import org.openapis.openapi.models.operations.CreateApplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateApplicationRequest req = new CreateApplicationRequest(                new CreateApplicationRequestBody("cum") {{
                                description = "esse";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("excepturi", "aspernatur");
                                }};
                            }};) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "ad";
                xAmzCredential = "natus";
                xAmzDate = "sed";
                xAmzSecurityToken = "iste";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "natus";
            }};            

            CreateApplicationResponse res = sdk.sdk.createApplication(req);

            if (res.application != null) {
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
import org.openapis.openapi.models.operations.CreateLaunchConfigurationTemplateRequestBodyBootModeEnum;
import org.openapis.openapi.models.operations.CreateLaunchConfigurationTemplateRequestBodyLargeVolumeConf;
import org.openapis.openapi.models.operations.CreateLaunchConfigurationTemplateRequestBodyLaunchDispositionEnum;
import org.openapis.openapi.models.operations.CreateLaunchConfigurationTemplateRequestBodyLicensing;
import org.openapis.openapi.models.operations.CreateLaunchConfigurationTemplateRequestBodyPostLaunchActions;
import org.openapis.openapi.models.operations.CreateLaunchConfigurationTemplateRequestBodySmallVolumeConf;
import org.openapis.openapi.models.operations.CreateLaunchConfigurationTemplateRequestBodyTargetInstanceTypeRightSizingMethodEnum;
import org.openapis.openapi.models.operations.CreateLaunchConfigurationTemplateResponse;
import org.openapis.openapi.models.shared.PostLaunchActionsDeploymentTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SsmDocument;
import org.openapis.openapi.models.shared.SsmExternalParameter;
import org.openapis.openapi.models.shared.SsmParameterStoreParameter;
import org.openapis.openapi.models.shared.SsmParameterStoreParameterTypeEnum;
import org.openapis.openapi.models.shared.VolumeTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laboriosam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLaunchConfigurationTemplateRequest req = new CreateLaunchConfigurationTemplateRequest(                new CreateLaunchConfigurationTemplateRequestBody() {{
                                associatePublicIpAddress = false;
                                bootMode = CreateLaunchConfigurationTemplateRequestBodyBootModeEnum.UEFI;
                                copyPrivateIp = false;
                                copyTags = false;
                                enableMapAutoTagging = false;
                                largeVolumeConf = new CreateLaunchConfigurationTemplateRequestBodyLargeVolumeConf() {{
                                    iops = 902599L;
                                    throughput = 681820L;
                                    volumeType = VolumeTypeEnum.GP2;
                                }};;
                                launchDisposition = CreateLaunchConfigurationTemplateRequestBodyLaunchDispositionEnum.STOPPED;
                                licensing = new CreateLaunchConfigurationTemplateRequestBodyLicensing() {{
                                    osByol = false;
                                }};;
                                mapAutoTaggingMpeID = "iste";
                                postLaunchActions = new CreateLaunchConfigurationTemplateRequestBodyPostLaunchActions() {{
                                    cloudWatchLogGroupName = "iure";
                                    deployment = PostLaunchActionsDeploymentTypeEnum.TEST_ONLY;
                                    s3LogBucket = "quidem";
                                    s3OutputKeyPrefix = "architecto";
                                    ssmDocuments = new org.openapis.openapi.models.shared.SsmDocument[]{{
                                        add(new SsmDocument("sequi", "tenetur") {{
                                            actionName = "reiciendis";
                                            externalParameters = new java.util.HashMap<String, org.openapis.openapi.models.shared.SsmExternalParameter>() {{
                                                put("mollitia", new SsmExternalParameter() {{
                                                    dynamicPath = "laborum";
                                                }});
                                                put("dolores", new SsmExternalParameter() {{
                                                    dynamicPath = "dolorem";
                                                }});
                                                put("corporis", new SsmExternalParameter() {{
                                                    dynamicPath = "explicabo";
                                                }});
                                            }};
                                            mustSucceedForCutover = false;
                                            parameters = new java.util.HashMap<String, org.openapis.openapi.models.shared.SsmParameterStoreParameter[]>() {{
                                                put("enim", new org.openapis.openapi.models.shared.SsmParameterStoreParameter[]{{
                                                    add(new SsmParameterStoreParameter("minima", SsmParameterStoreParameterTypeEnum.STRING) {{
                                                        parameterName = "nemo";
                                                        parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                                    }}),
                                                    add(new SsmParameterStoreParameter("accusantium", SsmParameterStoreParameterTypeEnum.STRING) {{
                                                        parameterName = "excepturi";
                                                        parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                                    }}),
                                                    add(new SsmParameterStoreParameter("culpa", SsmParameterStoreParameterTypeEnum.STRING) {{
                                                        parameterName = "iure";
                                                        parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                                    }}),
                                                }});
                                                put("doloribus", new org.openapis.openapi.models.shared.SsmParameterStoreParameter[]{{
                                                    add(new SsmParameterStoreParameter("mollitia", SsmParameterStoreParameterTypeEnum.STRING) {{
                                                        parameterName = "architecto";
                                                        parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                                    }}),
                                                    add(new SsmParameterStoreParameter("culpa", SsmParameterStoreParameterTypeEnum.STRING) {{
                                                        parameterName = "dolorem";
                                                        parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                                    }}),
                                                    add(new SsmParameterStoreParameter("repellat", SsmParameterStoreParameterTypeEnum.STRING) {{
                                                        parameterName = "consequuntur";
                                                        parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                                    }}),
                                                    add(new SsmParameterStoreParameter("occaecati", SsmParameterStoreParameterTypeEnum.STRING) {{
                                                        parameterName = "mollitia";
                                                        parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                                    }}),
                                                }});
                                                put("numquam", new org.openapis.openapi.models.shared.SsmParameterStoreParameter[]{{
                                                    add(new SsmParameterStoreParameter("molestiae", SsmParameterStoreParameterTypeEnum.STRING) {{
                                                        parameterName = "quam";
                                                        parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                                    }}),
                                                    add(new SsmParameterStoreParameter("error", SsmParameterStoreParameterTypeEnum.STRING) {{
                                                        parameterName = "velit";
                                                        parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                                    }}),
                                                }});
                                                put("quia", new org.openapis.openapi.models.shared.SsmParameterStoreParameter[]{{
                                                    add(new SsmParameterStoreParameter("laborum", SsmParameterStoreParameterTypeEnum.STRING) {{
                                                        parameterName = "vitae";
                                                        parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                                    }}),
                                                    add(new SsmParameterStoreParameter("enim", SsmParameterStoreParameterTypeEnum.STRING) {{
                                                        parameterName = "animi";
                                                        parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                                    }}),
                                                }});
                                            }};
                                            ssmDocumentName = "odit";
                                            timeoutSeconds = 778346L;
                                        }}),
                                    }};
                                }};;
                                smallVolumeConf = new CreateLaunchConfigurationTemplateRequestBodySmallVolumeConf() {{
                                    iops = 368725L;
                                    throughput = 662527L;
                                    volumeType = VolumeTypeEnum.SC1;
                                }};;
                                smallVolumeMaxSize = 13571L;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("error", "temporibus");
                                }};
                                targetInstanceTypeRightSizingMethod = CreateLaunchConfigurationTemplateRequestBodyTargetInstanceTypeRightSizingMethodEnum.BASIC;
                            }};) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "voluptatibus";
                xAmzDate = "vero";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            CreateLaunchConfigurationTemplateResponse res = sdk.sdk.createLaunchConfigurationTemplate(req);

            if (res.launchConfigurationTemplate != null) {
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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateReplicationConfigurationTemplateRequest req = new CreateReplicationConfigurationTemplateRequest(                new CreateReplicationConfigurationTemplateRequestBody(false, 604846L, false, CreateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum.PRIVATE_IP, CreateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum.GP3, CreateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum.DEFAULT_, "doloremque",                 new String[]{{
                                                add("ut"),
                                                add("maiores"),
                                            }}, "dicta",                 new java.util.HashMap<String, String>() {{
                                                put("dolore", "iusto");
                                                put("dicta", "harum");
                                            }}, false) {{
                                ebsEncryptionKeyArn = "enim";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("commodi", "repudiandae");
                                    put("quae", "ipsum");
                                    put("quidem", "molestias");
                                    put("excepturi", "pariatur");
                                }};
                            }};) {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "rem";
                xAmzDate = "voluptates";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "sint";
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

## createWave

Create wave.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWaveRequest;
import org.openapis.openapi.models.operations.CreateWaveRequestBody;
import org.openapis.openapi.models.operations.CreateWaveResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateWaveRequest req = new CreateWaveRequest(                new CreateWaveRequestBody("itaque") {{
                                description = "incidunt";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("consequatur", "est");
                                    put("quibusdam", "explicabo");
                                }};
                            }};) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "quibusdam";
                xAmzDate = "labore";
                xAmzSecurityToken = "modi";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "aliquid";
            }};            

            CreateWaveResponse res = sdk.sdk.createWave(req);

            if (res.wave != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApplication

Delete application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApplicationRequest;
import org.openapis.openapi.models.operations.DeleteApplicationRequestBody;
import org.openapis.openapi.models.operations.DeleteApplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteApplicationRequest req = new DeleteApplicationRequest(                new DeleteApplicationRequestBody("quos");) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "magni";
                xAmzCredential = "assumenda";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "alias";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "dolorum";
            }};            

            DeleteApplicationResponse res = sdk.sdk.deleteApplication(req);

            if (res.deleteApplicationResponse != null) {
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
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteJobRequest req = new DeleteJobRequest(                new DeleteJobRequestBody("tempora");) {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "tempore";
                xAmzCredential = "labore";
                xAmzDate = "delectus";
                xAmzSecurityToken = "eum";
                xAmzSignature = "non";
                xAmzSignedHeaders = "eligendi";
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
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteLaunchConfigurationTemplateRequest req = new DeleteLaunchConfigurationTemplateRequest(                new DeleteLaunchConfigurationTemplateRequestBody("aliquid");) {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "sint";
                xAmzDate = "officia";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "a";
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
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteReplicationConfigurationTemplateRequest req = new DeleteReplicationConfigurationTemplateRequest(                new DeleteReplicationConfigurationTemplateRequestBody("in");) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "illum";
                xAmzCredential = "maiores";
                xAmzDate = "rerum";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "cumque";
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

Deletes a single source server by ID.

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
                .setSecurity(new Security("facere") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSourceServerRequest req = new DeleteSourceServerRequest(                new DeleteSourceServerRequestBody("ea");) {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "accusamus";
                xAmzDate = "non";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "accusamus";
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

## deleteVcenterClient

Deletes a given vCenter client by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteVcenterClientRequest;
import org.openapis.openapi.models.operations.DeleteVcenterClientRequestBody;
import org.openapis.openapi.models.operations.DeleteVcenterClientResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteVcenterClientRequest req = new DeleteVcenterClientRequest(                new DeleteVcenterClientRequestBody("quidem");) {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "nam";
                xAmzCredential = "id";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "amet";
            }};            

            DeleteVcenterClientResponse res = sdk.sdk.deleteVcenterClient(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWave

Delete wave.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWaveRequest;
import org.openapis.openapi.models.operations.DeleteWaveRequestBody;
import org.openapis.openapi.models.operations.DeleteWaveResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteWaveRequest req = new DeleteWaveRequest(                new DeleteWaveRequestBody("nisi");) {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "natus";
                xAmzCredential = "omnis";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "magnam";
            }};            

            DeleteWaveResponse res = sdk.sdk.deleteWave(req);

            if (res.deleteWaveResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeJobLogItems

Retrieves detailed job log items with paging.

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
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeJobLogItemsRequest req = new DescribeJobLogItemsRequest(                new DescribeJobLogItemsRequestBody("id") {{
                                maxResults = 287991L;
                                nextToken = "labore";
                            }};) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "natus";
                xAmzCredential = "nobis";
                xAmzDate = "eum";
                xAmzSecurityToken = "vero";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "architecto";
                maxResults = "magnam";
                nextToken = "et";
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

Returns a list of Jobs. Use the JobsID and fromDate and toData filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are normally created by the StartTest, StartCutover, and TerminateTargetInstances APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.

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
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeJobsRequest req = new DescribeJobsRequest(                new DescribeJobsRequestBody() {{
                                filters = new DescribeJobsRequestBodyFilters() {{
                                    fromDate = "ullam";
                                    jobIDs = new String[]{{
                                        add("quos"),
                                        add("sint"),
                                        add("accusantium"),
                                    }};
                                    toDate = "mollitia";
                                }};;
                                maxResults = 968962L;
                                nextToken = "mollitia";
                            }};) {{
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "eum";
                xAmzCredential = "dolor";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "odit";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "quasi";
                maxResults = "iure";
                nextToken = "doloribus";
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
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeLaunchConfigurationTemplatesRequest req = new DescribeLaunchConfigurationTemplatesRequest(                new DescribeLaunchConfigurationTemplatesRequestBody() {{
                                launchConfigurationTemplateIDs = new String[]{{
                                    add("maxime"),
                                    add("deleniti"),
                                }};
                                maxResults = 703889L;
                                nextToken = "in";
                            }};) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "repudiandae";
                xAmzDate = "ullam";
                xAmzSecurityToken = "expedita";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "repellat";
                maxResults = "quibusdam";
                nextToken = "sed";
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
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeReplicationConfigurationTemplatesRequest req = new DescribeReplicationConfigurationTemplatesRequest(                new DescribeReplicationConfigurationTemplatesRequestBody() {{
                                maxResults = 868126L;
                                nextToken = "accusantium";
                                replicationConfigurationTemplateIDs = new String[]{{
                                    add("praesentium"),
                                }};
                            }};) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "magni";
                xAmzCredential = "sunt";
                xAmzDate = "quo";
                xAmzSecurityToken = "illum";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "maxime";
                maxResults = "ea";
                nextToken = "excepturi";
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

Retrieves all SourceServers or multiple SourceServers by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeSourceServersRequest;
import org.openapis.openapi.models.operations.DescribeSourceServersRequestBody;
import org.openapis.openapi.models.operations.DescribeSourceServersRequestBodyFilters;
import org.openapis.openapi.models.operations.DescribeSourceServersResponse;
import org.openapis.openapi.models.shared.LifeCycleStateEnum;
import org.openapis.openapi.models.shared.ReplicationTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeSourceServersRequest req = new DescribeSourceServersRequest(                new DescribeSourceServersRequestBody() {{
                                filters = new DescribeSourceServersRequestBodyFilters() {{
                                    applicationIDs = new String[]{{
                                        add("accusantium"),
                                        add("ab"),
                                    }};
                                    isArchived = false;
                                    lifeCycleStates = new org.openapis.openapi.models.shared.LifeCycleStateEnum[]{{
                                        add(LifeCycleStateEnum.CUTOVER),
                                        add(LifeCycleStateEnum.TESTING),
                                        add(LifeCycleStateEnum.READY_FOR_CUTOVER),
                                        add(LifeCycleStateEnum.READY_FOR_CUTOVER),
                                    }};
                                    replicationTypes = new org.openapis.openapi.models.shared.ReplicationTypeEnum[]{{
                                        add(ReplicationTypeEnum.AGENT_BASED),
                                        add(ReplicationTypeEnum.SNAPSHOT_SHIPPING),
                                        add(ReplicationTypeEnum.AGENT_BASED),
                                    }};
                                    sourceServerIDs = new String[]{{
                                        add("perferendis"),
                                        add("fugiat"),
                                        add("amet"),
                                        add("aut"),
                                    }};
                                }};;
                                maxResults = 764912L;
                                nextToken = "corporis";
                            }};) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "libero";
                xAmzCredential = "nobis";
                xAmzDate = "dolores";
                xAmzSecurityToken = "quis";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "dignissimos";
                maxResults = "eaque";
                nextToken = "quis";
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

## describeVcenterClients

Returns a list of the installed vCenter clients.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeVcenterClientsRequest;
import org.openapis.openapi.models.operations.DescribeVcenterClientsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nesciunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeVcenterClientsRequest req = new DescribeVcenterClientsRequest() {{
                xAmzAlgorithm = "eos";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "dolores";
                xAmzDate = "minus";
                xAmzSecurityToken = "quam";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "vero";
                maxResults = 345352L;
                nextToken = "hic";
            }};            

            DescribeVcenterClientsResponse res = sdk.sdk.describeVcenterClients(req);

            if (res.describeVcenterClientsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateApplications

Disassociate applications from wave.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateApplicationsRequest;
import org.openapis.openapi.models.operations.DisassociateApplicationsRequestBody;
import org.openapis.openapi.models.operations.DisassociateApplicationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateApplicationsRequest req = new DisassociateApplicationsRequest(                new DisassociateApplicationsRequestBody(                new String[]{{
                                                add("facilis"),
                                                add("perspiciatis"),
                                                add("voluptatem"),
                                            }}, "porro");) {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "error";
                xAmzDate = "eaque";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "rerum";
                xAmzSignedHeaders = "adipisci";
            }};            

            DisassociateApplicationsResponse res = sdk.sdk.disassociateApplications(req);

            if (res.disassociateApplicationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateSourceServers

Disassociate source servers from application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateSourceServersRequest;
import org.openapis.openapi.models.operations.DisassociateSourceServersRequestBody;
import org.openapis.openapi.models.operations.DisassociateSourceServersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateSourceServersRequest req = new DisassociateSourceServersRequest(                new DisassociateSourceServersRequestBody("earum",                 new String[]{{
                                                add("iste"),
                                                add("dolorum"),
                                            }});) {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "provident";
                xAmzDate = "nobis";
                xAmzSecurityToken = "libero";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "quaerat";
            }};            

            DisassociateSourceServersResponse res = sdk.sdk.disassociateSourceServers(req);

            if (res.disassociateSourceServersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disconnectFromService

Disconnects specific Source Servers from Application Migration Service. Data replication is stopped immediately. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. If the agent on the source server has not been prevented from communicating with the Application Migration Service service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisconnectFromServiceRequest;
import org.openapis.openapi.models.operations.DisconnectFromServiceRequestBody;
import org.openapis.openapi.models.operations.DisconnectFromServiceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisconnectFromServiceRequest req = new DisconnectFromServiceRequest(                new DisconnectFromServiceRequestBody("aliquid");) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "dolor";
                xAmzDate = "qui";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "excepturi";
            }};            

            DisconnectFromServiceResponse res = sdk.sdk.disconnectFromService(req);

            if (res.sourceServer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## finalizeCutover

Finalizes the cutover immediately for specific Source Servers. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. The AWS Replication Agent will receive a command to uninstall itself (within 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be changed to DISCONNECTED; The SourceServer.lifeCycle.state will be changed to CUTOVER; The totalStorageBytes property fo each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FinalizeCutoverRequest;
import org.openapis.openapi.models.operations.FinalizeCutoverRequestBody;
import org.openapis.openapi.models.operations.FinalizeCutoverResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            FinalizeCutoverRequest req = new FinalizeCutoverRequest(                new FinalizeCutoverRequestBody("voluptate");) {{
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "amet";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "ipsa";
            }};            

            FinalizeCutoverResponse res = sdk.sdk.finalizeCutover(req);

            if (res.sourceServer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLaunchConfiguration

Lists all LaunchConfigurations available, filtered by Source Server IDs.

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
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLaunchConfigurationRequest req = new GetLaunchConfigurationRequest(                new GetLaunchConfigurationRequestBody("iure");) {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "accusamus";
                xAmzDate = "quidem";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "natus";
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

Lists all ReplicationConfigurations, filtered by Source Server ID.

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
                .setSecurity(new Security("eos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetReplicationConfigurationRequest req = new GetReplicationConfigurationRequest(                new GetReplicationConfigurationRequestBody("atque");) {{
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "ab";
                xAmzDate = "soluta";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "voluptate";
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

Initialize Application Migration Service.

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
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            InitializeServiceRequest req = new InitializeServiceRequest() {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "necessitatibus";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "asperiores";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "ipsum";
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

## listApplications

Retrieves all applications or multiple applications by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListApplicationsRequest;
import org.openapis.openapi.models.operations.ListApplicationsRequestBody;
import org.openapis.openapi.models.operations.ListApplicationsRequestBodyFilters;
import org.openapis.openapi.models.operations.ListApplicationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListApplicationsRequest req = new ListApplicationsRequest(                new ListApplicationsRequestBody() {{
                                filters = new ListApplicationsRequestBodyFilters() {{
                                    applicationIDs = new String[]{{
                                        add("saepe"),
                                        add("eius"),
                                        add("aspernatur"),
                                    }};
                                    isArchived = false;
                                    waveIDs = new String[]{{
                                        add("amet"),
                                    }};
                                }};;
                                maxResults = 758379L;
                                nextToken = "accusamus";
                            }};) {{
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "suscipit";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "provident";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "repellendus";
                maxResults = "totam";
                nextToken = "similique";
            }};            

            ListApplicationsResponse res = sdk.sdk.listApplications(req);

            if (res.listApplicationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listExportErrors

List export errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListExportErrorsRequest;
import org.openapis.openapi.models.operations.ListExportErrorsRequestBody;
import org.openapis.openapi.models.operations.ListExportErrorsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListExportErrorsRequest req = new ListExportErrorsRequest(                new ListExportErrorsRequestBody("at") {{
                                maxResults = 311860L;
                                nextToken = "tempora";
                            }};) {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "quod";
                xAmzCredential = "officiis";
                xAmzDate = "qui";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "a";
                xAmzSignedHeaders = "esse";
                maxResults = "harum";
                nextToken = "iusto";
            }};            

            ListExportErrorsResponse res = sdk.sdk.listExportErrors(req);

            if (res.listExportErrorsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listExports

List exports.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListExportsRequest;
import org.openapis.openapi.models.operations.ListExportsRequestBody;
import org.openapis.openapi.models.operations.ListExportsRequestBodyFilters;
import org.openapis.openapi.models.operations.ListExportsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListExportsRequest req = new ListExportsRequest(                new ListExportsRequestBody() {{
                                filters = new ListExportsRequestBodyFilters() {{
                                    exportIDs = new String[]{{
                                        add("tenetur"),
                                        add("amet"),
                                        add("tempore"),
                                        add("accusamus"),
                                    }};
                                }};;
                                maxResults = 253941L;
                                nextToken = "enim";
                            }};) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "totam";
                xAmzDate = "nihil";
                xAmzSecurityToken = "sit";
                xAmzSignature = "expedita";
                xAmzSignedHeaders = "neque";
                maxResults = "sed";
                nextToken = "vel";
            }};            

            ListExportsResponse res = sdk.sdk.listExports(req);

            if (res.listExportsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listImportErrors

List import errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListImportErrorsRequest;
import org.openapis.openapi.models.operations.ListImportErrorsRequestBody;
import org.openapis.openapi.models.operations.ListImportErrorsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListImportErrorsRequest req = new ListImportErrorsRequest(                new ListImportErrorsRequestBody("voluptas") {{
                                maxResults = 646265L;
                                nextToken = "quam";
                            }};) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "qui";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "soluta";
                maxResults = "dicta";
                nextToken = "laborum";
            }};            

            ListImportErrorsResponse res = sdk.sdk.listImportErrors(req);

            if (res.listImportErrorsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listImports

List imports.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListImportsRequest;
import org.openapis.openapi.models.operations.ListImportsRequestBody;
import org.openapis.openapi.models.operations.ListImportsRequestBodyFilters;
import org.openapis.openapi.models.operations.ListImportsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListImportsRequest req = new ListImportsRequest(                new ListImportsRequestBody() {{
                                filters = new ListImportsRequestBodyFilters() {{
                                    importIDs = new String[]{{
                                        add("aspernatur"),
                                        add("dolores"),
                                    }};
                                }};;
                                maxResults = 716860L;
                                nextToken = "facilis";
                            }};) {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "quam";
                xAmzCredential = "molestias";
                xAmzDate = "temporibus";
                xAmzSecurityToken = "qui";
                xAmzSignature = "neque";
                xAmzSignedHeaders = "fugit";
                maxResults = "magni";
                nextToken = "odio";
            }};            

            ListImportsResponse res = sdk.sdk.listImports(req);

            if (res.listImportsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSourceServerActions

List source server post migration custom actions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSourceServerActionsRequest;
import org.openapis.openapi.models.operations.ListSourceServerActionsRequestBody;
import org.openapis.openapi.models.operations.ListSourceServerActionsRequestBodyFilters;
import org.openapis.openapi.models.operations.ListSourceServerActionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSourceServerActionsRequest req = new ListSourceServerActionsRequest(                new ListSourceServerActionsRequestBody("ullam") {{
                                filters = new ListSourceServerActionsRequestBodyFilters() {{
                                    actionIDs = new String[]{{
                                        add("hic"),
                                        add("voluptatem"),
                                        add("cumque"),
                                    }};
                                }};;
                                maxResults = 746994L;
                                nextToken = "nobis";
                            }};) {{
                xAmzAlgorithm = "et";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "ipsum";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "tempore";
                maxResults = "cupiditate";
                nextToken = "aperiam";
            }};            

            ListSourceServerActionsResponse res = sdk.sdk.listSourceServerActions(req);

            if (res.listSourceServerActionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

List all tags for your Application Migration Service resources.

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
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("dolorem") {{
                xAmzAlgorithm = "dolore";
                xAmzContentSha256 = "labore";
                xAmzCredential = "adipisci";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "aut";
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

## listTemplateActions

List template post migration custom actions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTemplateActionsRequest;
import org.openapis.openapi.models.operations.ListTemplateActionsRequestBody;
import org.openapis.openapi.models.operations.ListTemplateActionsRequestBodyFilters;
import org.openapis.openapi.models.operations.ListTemplateActionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTemplateActionsRequest req = new ListTemplateActionsRequest(                new ListTemplateActionsRequestBody("itaque") {{
                                filters = new ListTemplateActionsRequestBodyFilters() {{
                                    actionIDs = new String[]{{
                                        add("est"),
                                    }};
                                }};;
                                maxResults = 833038L;
                                nextToken = "porro";
                            }};) {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "ut";
                xAmzCredential = "facilis";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "qui";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "laudantium";
                maxResults = "odio";
                nextToken = "occaecati";
            }};            

            ListTemplateActionsResponse res = sdk.sdk.listTemplateActions(req);

            if (res.listTemplateActionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWaves

Retrieves all waves or multiple waves by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWavesRequest;
import org.openapis.openapi.models.operations.ListWavesRequestBody;
import org.openapis.openapi.models.operations.ListWavesRequestBodyFilters;
import org.openapis.openapi.models.operations.ListWavesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListWavesRequest req = new ListWavesRequest(                new ListWavesRequestBody() {{
                                filters = new ListWavesRequestBodyFilters() {{
                                    isArchived = false;
                                    waveIDs = new String[]{{
                                        add("vero"),
                                        add("omnis"),
                                        add("quis"),
                                        add("ipsum"),
                                    }};
                                }};;
                                maxResults = 961571L;
                                nextToken = "voluptate";
                            }};) {{
                xAmzAlgorithm = "consectetur";
                xAmzContentSha256 = "vero";
                xAmzCredential = "tenetur";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "hic";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "quod";
                maxResults = "odio";
                nextToken = "similique";
            }};            

            ListWavesResponse res = sdk.sdk.listWaves(req);

            if (res.listWavesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## markAsArchived

Archives specific Source Servers by setting the SourceServer.isArchived property to true for specified SourceServers by ID. This command only works for SourceServers with a lifecycle. state which equals DISCONNECTED or CUTOVER.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MarkAsArchivedRequest;
import org.openapis.openapi.models.operations.MarkAsArchivedRequestBody;
import org.openapis.openapi.models.operations.MarkAsArchivedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            MarkAsArchivedRequest req = new MarkAsArchivedRequest(                new MarkAsArchivedRequestBody("vero");) {{
                xAmzAlgorithm = "ducimus";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "quibusdam";
                xAmzDate = "illum";
                xAmzSecurityToken = "sequi";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "impedit";
            }};            

            MarkAsArchivedResponse res = sdk.sdk.markAsArchived(req);

            if (res.sourceServer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSourceServerAction

Put source server post migration custom action.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSourceServerActionRequest;
import org.openapis.openapi.models.operations.PutSourceServerActionRequestBody;
import org.openapis.openapi.models.operations.PutSourceServerActionRequestBodyCategoryEnum;
import org.openapis.openapi.models.operations.PutSourceServerActionResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SsmExternalParameter;
import org.openapis.openapi.models.shared.SsmParameterStoreParameter;
import org.openapis.openapi.models.shared.SsmParameterStoreParameterTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutSourceServerActionRequest req = new PutSourceServerActionRequest(                new PutSourceServerActionRequestBody("voluptatibus", "exercitationem", "nulla", 148141L, "porro") {{
                                active = false;
                                category = PutSourceServerActionRequestBodyCategoryEnum.OTHER;
                                description = "doloribus";
                                documentVersion = "iusto";
                                externalParameters = new java.util.HashMap<String, org.openapis.openapi.models.shared.SsmExternalParameter>() {{
                                    put("ducimus", new SsmExternalParameter() {{
                                        dynamicPath = "alias";
                                    }});
                                    put("officia", new SsmExternalParameter() {{
                                        dynamicPath = "tempora";
                                    }});
                                    put("ipsam", new SsmExternalParameter() {{
                                        dynamicPath = "ea";
                                    }});
                                    put("aspernatur", new SsmExternalParameter() {{
                                        dynamicPath = "vel";
                                    }});
                                }};
                                mustSucceedForCutover = false;
                                parameters = new java.util.HashMap<String, org.openapis.openapi.models.shared.SsmParameterStoreParameter[]>() {{
                                    put("magnam", new org.openapis.openapi.models.shared.SsmParameterStoreParameter[]{{
                                        add(new SsmParameterStoreParameter("laudantium", SsmParameterStoreParameterTypeEnum.STRING) {{
                                            parameterName = "ex";
                                            parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                        }}),
                                    }});
                                    put("dicta", new org.openapis.openapi.models.shared.SsmParameterStoreParameter[]{{
                                        add(new SsmParameterStoreParameter("quasi", SsmParameterStoreParameterTypeEnum.STRING) {{
                                            parameterName = "maiores";
                                            parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                        }}),
                                    }});
                                    put("ex", new org.openapis.openapi.models.shared.SsmParameterStoreParameter[]{{
                                        add(new SsmParameterStoreParameter("voluptatibus", SsmParameterStoreParameterTypeEnum.STRING) {{
                                            parameterName = "excepturi";
                                            parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                        }}),
                                        add(new SsmParameterStoreParameter("sapiente", SsmParameterStoreParameterTypeEnum.STRING) {{
                                            parameterName = "nostrum";
                                            parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                        }}),
                                        add(new SsmParameterStoreParameter("saepe", SsmParameterStoreParameterTypeEnum.STRING) {{
                                            parameterName = "quisquam";
                                            parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                        }}),
                                        add(new SsmParameterStoreParameter("impedit", SsmParameterStoreParameterTypeEnum.STRING) {{
                                            parameterName = "ea";
                                            parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                        }}),
                                    }});
                                    put("corporis", new org.openapis.openapi.models.shared.SsmParameterStoreParameter[]{{
                                        add(new SsmParameterStoreParameter("inventore", SsmParameterStoreParameterTypeEnum.STRING) {{
                                            parameterName = "aliquid";
                                            parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                        }}),
                                        add(new SsmParameterStoreParameter("ea", SsmParameterStoreParameterTypeEnum.STRING) {{
                                            parameterName = "magnam";
                                            parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                        }}),
                                    }});
                                }};
                                timeoutSeconds = 775220L;
                            }};) {{
                xAmzAlgorithm = "consectetur";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "aspernatur";
                xAmzDate = "minima";
                xAmzSecurityToken = "eaque";
                xAmzSignature = "a";
                xAmzSignedHeaders = "libero";
            }};            

            PutSourceServerActionResponse res = sdk.sdk.putSourceServerAction(req);

            if (res.sourceServerActionDocument != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putTemplateAction

Put template post migration custom action.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutTemplateActionRequest;
import org.openapis.openapi.models.operations.PutTemplateActionRequestBody;
import org.openapis.openapi.models.operations.PutTemplateActionRequestBodyCategoryEnum;
import org.openapis.openapi.models.operations.PutTemplateActionResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SsmExternalParameter;
import org.openapis.openapi.models.shared.SsmParameterStoreParameter;
import org.openapis.openapi.models.shared.SsmParameterStoreParameterTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutTemplateActionRequest req = new PutTemplateActionRequest(                new PutTemplateActionRequestBody("aut", "deleniti", "impedit", "aliquam", 146946L) {{
                                active = false;
                                category = PutTemplateActionRequestBodyCategoryEnum.BACKUP;
                                description = "inventore";
                                documentVersion = "non";
                                externalParameters = new java.util.HashMap<String, org.openapis.openapi.models.shared.SsmExternalParameter>() {{
                                    put("dolorum", new SsmExternalParameter() {{
                                        dynamicPath = "laborum";
                                    }});
                                }};
                                mustSucceedForCutover = false;
                                operatingSystem = "placeat";
                                parameters = new java.util.HashMap<String, org.openapis.openapi.models.shared.SsmParameterStoreParameter[]>() {{
                                    put("eum", new org.openapis.openapi.models.shared.SsmParameterStoreParameter[]{{
                                        add(new SsmParameterStoreParameter("quas", SsmParameterStoreParameterTypeEnum.STRING) {{
                                            parameterName = "nobis";
                                            parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                        }}),
                                        add(new SsmParameterStoreParameter("nulla", SsmParameterStoreParameterTypeEnum.STRING) {{
                                            parameterName = "assumenda";
                                            parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                        }}),
                                    }});
                                }};
                                timeoutSeconds = 379034L;
                            }};) {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "tempora";
                xAmzDate = "numquam";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "ipsa";
            }};            

            PutTemplateActionResponse res = sdk.sdk.putTemplateAction(req);

            if (res.templateActionDocument != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeSourceServerAction

Remove source server post migration custom action.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveSourceServerActionRequest;
import org.openapis.openapi.models.operations.RemoveSourceServerActionRequestBody;
import org.openapis.openapi.models.operations.RemoveSourceServerActionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveSourceServerActionRequest req = new RemoveSourceServerActionRequest(                new RemoveSourceServerActionRequestBody("magnam", "odio");) {{
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "esse";
                xAmzCredential = "esse";
                xAmzDate = "rem";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "reprehenderit";
                xAmzSignedHeaders = "quidem";
            }};            

            RemoveSourceServerActionResponse res = sdk.sdk.removeSourceServerAction(req);

            if (res.removeSourceServerActionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeTemplateAction

Remove template post migration custom action.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveTemplateActionRequest;
import org.openapis.openapi.models.operations.RemoveTemplateActionRequestBody;
import org.openapis.openapi.models.operations.RemoveTemplateActionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveTemplateActionRequest req = new RemoveTemplateActionRequest(                new RemoveTemplateActionRequestBody("ut", "eum");) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "assumenda";
                xAmzCredential = "eos";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "quisquam";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "ipsa";
            }};            

            RemoveTemplateActionResponse res = sdk.sdk.removeTemplateAction(req);

            if (res.removeTemplateActionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retryDataReplication

Causes the data replication initiation sequence to begin immediately upon next Handshake for specified SourceServer IDs, regardless of when the previous initiation started. This command will not work if the SourceServer is not stalled or is in a DISCONNECTED or STOPPED state.

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
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RetryDataReplicationRequest req = new RetryDataReplicationRequest(                new RetryDataReplicationRequestBody("quidem");) {{
                xAmzAlgorithm = "neque";
                xAmzContentSha256 = "quo";
                xAmzCredential = "illum";
                xAmzDate = "quo";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "eius";
                xAmzSignedHeaders = "eos";
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

## startCutover

Launches a Cutover Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartCutover and changes the SourceServer.lifeCycle.state property to CUTTING_OVER.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartCutoverRequest;
import org.openapis.openapi.models.operations.StartCutoverRequestBody;
import org.openapis.openapi.models.operations.StartCutoverResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartCutoverRequest req = new StartCutoverRequest(                new StartCutoverRequestBody(                new String[]{{
                                                add("cupiditate"),
                                            }}) {{
                                tags = new java.util.HashMap<String, String>() {{
                                    put("tempora", "debitis");
                                }};
                            }};) {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "sequi";
                xAmzDate = "quo";
                xAmzSecurityToken = "esse";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "aperiam";
            }};            

            StartCutoverResponse res = sdk.sdk.startCutover(req);

            if (res.startCutoverResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startExport

Start export.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartExportRequest;
import org.openapis.openapi.models.operations.StartExportRequestBody;
import org.openapis.openapi.models.operations.StartExportResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartExportRequest req = new StartExportRequest(                new StartExportRequestBody("quod", "dignissimos") {{
                                s3BucketOwner = "inventore";
                            }};) {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "totam";
                xAmzCredential = "accusamus";
                xAmzDate = "aliquam";
                xAmzSecurityToken = "odio";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "commodi";
            }};            

            StartExportResponse res = sdk.sdk.startExport(req);

            if (res.startExportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startImport

Start import.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartImportRequest;
import org.openapis.openapi.models.operations.StartImportRequestBody;
import org.openapis.openapi.models.operations.StartImportRequestBodyS3BucketSource;
import org.openapis.openapi.models.operations.StartImportResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartImportRequest req = new StartImportRequest(                new StartImportRequestBody(                new StartImportRequestBodyS3BucketSource() {{
                                                s3Bucket = "dolores";
                                                s3BucketOwner = "deserunt";
                                                s3Key = "molestiae";
                                            }};) {{
                                clientToken = "accusantium";
                            }};) {{
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "eum";
                xAmzCredential = "quas";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "fugit";
            }};            

            StartImportResponse res = sdk.sdk.startImport(req);

            if (res.startImportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startReplication

Starts replication for SNAPSHOT_SHIPPING agents.

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
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartReplicationRequest req = new StartReplicationRequest(                new StartReplicationRequestBody("mollitia");) {{
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "atque";
                xAmzCredential = "explicabo";
                xAmzDate = "minima";
                xAmzSecurityToken = "nisi";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "sapiente";
            }};            

            StartReplicationResponse res = sdk.sdk.startReplication(req);

            if (res.sourceServer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startTest

Launches a Test Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartTest and changes the SourceServer.lifeCycle.state property to TESTING.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartTestRequest;
import org.openapis.openapi.models.operations.StartTestRequestBody;
import org.openapis.openapi.models.operations.StartTestResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartTestRequest req = new StartTestRequest(                new StartTestRequestBody(                new String[]{{
                                                add("explicabo"),
                                            }}) {{
                                tags = new java.util.HashMap<String, String>() {{
                                    put("occaecati", "atque");
                                    put("et", "esse");
                                    put("eveniet", "accusamus");
                                    put("veritatis", "esse");
                                }};
                            }};) {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "nam";
                xAmzCredential = "vero";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "vel";
            }};            

            StartTestResponse res = sdk.sdk.startTest(req);

            if (res.startTestResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds or overwrites only the specified tags for the specified Application Migration Service resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value.

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
                .setSecurity(new Security("harum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("rerum", "occaecati");
                                                put("minima", "distinctio");
                                            }});, "eligendi") {{
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "tempore";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "consequatur";
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

## terminateTargetInstances

Starts a job that terminates specific launched EC2 Test and Cutover instances. This command will not work for any Source Server with a lifecycle.state of TESTING, CUTTING_OVER, or CUTOVER.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TerminateTargetInstancesRequest;
import org.openapis.openapi.models.operations.TerminateTargetInstancesRequestBody;
import org.openapis.openapi.models.operations.TerminateTargetInstancesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TerminateTargetInstancesRequest req = new TerminateTargetInstancesRequest(                new TerminateTargetInstancesRequestBody(                new String[]{{
                                                add("sapiente"),
                                                add("consectetur"),
                                            }}) {{
                                tags = new java.util.HashMap<String, String>() {{
                                    put("blanditiis", "provident");
                                    put("a", "nulla");
                                }};
                            }};) {{
                xAmzAlgorithm = "quas";
                xAmzContentSha256 = "esse";
                xAmzCredential = "quasi";
                xAmzDate = "a";
                xAmzSecurityToken = "error";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "pariatur";
            }};            

            TerminateTargetInstancesResponse res = sdk.sdk.terminateTargetInstances(req);

            if (res.terminateTargetInstancesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unarchiveApplication

Unarchive application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnarchiveApplicationRequest;
import org.openapis.openapi.models.operations.UnarchiveApplicationRequestBody;
import org.openapis.openapi.models.operations.UnarchiveApplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UnarchiveApplicationRequest req = new UnarchiveApplicationRequest(                new UnarchiveApplicationRequestBody("quia");) {{
                xAmzAlgorithm = "eveniet";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "facere";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "similique";
            }};            

            UnarchiveApplicationResponse res = sdk.sdk.unarchiveApplication(req);

            if (res.application != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unarchiveWave

Unarchive wave.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnarchiveWaveRequest;
import org.openapis.openapi.models.operations.UnarchiveWaveRequestBody;
import org.openapis.openapi.models.operations.UnarchiveWaveResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UnarchiveWaveRequest req = new UnarchiveWaveRequest(                new UnarchiveWaveRequestBody("aliquid");) {{
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "quae";
                xAmzCredential = "earum";
                xAmzDate = "vel";
                xAmzSecurityToken = "in";
                xAmzSignature = "eius";
                xAmzSignedHeaders = "libero";
            }};            

            UnarchiveWaveResponse res = sdk.sdk.unarchiveWave(req);

            if (res.wave != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Deletes the specified set of tags from the specified set of Application Migration Service resources.

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
                .setSecurity(new Security("illum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("soluta",                 new String[]{{
                                add("aliquam"),
                            }}) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "ullam";
                xAmzDate = "reprehenderit";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "aut";
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

## updateApplication

Update application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateApplicationRequest;
import org.openapis.openapi.models.operations.UpdateApplicationRequestBody;
import org.openapis.openapi.models.operations.UpdateApplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateApplicationRequest req = new UpdateApplicationRequest(                new UpdateApplicationRequestBody("qui") {{
                                description = "quibusdam";
                                name = "Cassandra Ward V";
                            }};) {{
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "at";
                xAmzDate = "et";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "minima";
            }};            

            UpdateApplicationResponse res = sdk.sdk.updateApplication(req);

            if (res.application != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateLaunchConfiguration

Updates multiple LaunchConfigurations by Source Server ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateLaunchConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateLaunchConfigurationRequestBody;
import org.openapis.openapi.models.operations.UpdateLaunchConfigurationRequestBodyBootModeEnum;
import org.openapis.openapi.models.operations.UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum;
import org.openapis.openapi.models.operations.UpdateLaunchConfigurationRequestBodyLicensing;
import org.openapis.openapi.models.operations.UpdateLaunchConfigurationRequestBodyPostLaunchActions;
import org.openapis.openapi.models.operations.UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum;
import org.openapis.openapi.models.operations.UpdateLaunchConfigurationResponse;
import org.openapis.openapi.models.shared.PostLaunchActionsDeploymentTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SsmDocument;
import org.openapis.openapi.models.shared.SsmExternalParameter;
import org.openapis.openapi.models.shared.SsmParameterStoreParameter;
import org.openapis.openapi.models.shared.SsmParameterStoreParameterTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateLaunchConfigurationRequest req = new UpdateLaunchConfigurationRequest(                new UpdateLaunchConfigurationRequestBody("consectetur") {{
                                bootMode = UpdateLaunchConfigurationRequestBodyBootModeEnum.LEGACY_BIOS;
                                copyPrivateIp = false;
                                copyTags = false;
                                enableMapAutoTagging = false;
                                launchDisposition = UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum.STARTED;
                                licensing = new UpdateLaunchConfigurationRequestBodyLicensing() {{
                                    osByol = false;
                                }};;
                                mapAutoTaggingMpeID = "temporibus";
                                name = "Patsy Armstrong";
                                postLaunchActions = new UpdateLaunchConfigurationRequestBodyPostLaunchActions() {{
                                    cloudWatchLogGroupName = "mollitia";
                                    deployment = PostLaunchActionsDeploymentTypeEnum.TEST_AND_CUTOVER;
                                    s3LogBucket = "corrupti";
                                    s3OutputKeyPrefix = "non";
                                    ssmDocuments = new org.openapis.openapi.models.shared.SsmDocument[]{{
                                        add(new SsmDocument("repellendus", "officia") {{
                                            actionName = "dolor";
                                            externalParameters = new java.util.HashMap<String, org.openapis.openapi.models.shared.SsmExternalParameter>() {{
                                                put("numquam", new SsmExternalParameter() {{
                                                    dynamicPath = "impedit";
                                                }});
                                                put("explicabo", new SsmExternalParameter() {{
                                                    dynamicPath = "voluptas";
                                                }});
                                                put("aut", new SsmExternalParameter() {{
                                                    dynamicPath = "dignissimos";
                                                }});
                                            }};
                                            mustSucceedForCutover = false;
                                            parameters = new java.util.HashMap<String, org.openapis.openapi.models.shared.SsmParameterStoreParameter[]>() {{
                                                put("maiores", new org.openapis.openapi.models.shared.SsmParameterStoreParameter[]{{
                                                    add(new SsmParameterStoreParameter("voluptatibus", SsmParameterStoreParameterTypeEnum.STRING) {{
                                                        parameterName = "velit";
                                                        parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                                    }}),
                                                    add(new SsmParameterStoreParameter("asperiores", SsmParameterStoreParameterTypeEnum.STRING) {{
                                                        parameterName = "voluptas";
                                                        parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                                    }}),
                                                    add(new SsmParameterStoreParameter("ea", SsmParameterStoreParameterTypeEnum.STRING) {{
                                                        parameterName = "aperiam";
                                                        parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                                    }}),
                                                }});
                                            }};
                                            ssmDocumentName = "quaerat";
                                            timeoutSeconds = 162954L;
                                        }}),
                                    }};
                                }};;
                                targetInstanceTypeRightSizingMethod = UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum.BASIC;
                            }};) {{
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "officia";
                xAmzCredential = "asperiores";
                xAmzDate = "nemo";
                xAmzSecurityToken = "quae";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "porro";
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
import org.openapis.openapi.models.operations.UpdateLaunchConfigurationTemplateRequestBodyBootModeEnum;
import org.openapis.openapi.models.operations.UpdateLaunchConfigurationTemplateRequestBodyLargeVolumeConf;
import org.openapis.openapi.models.operations.UpdateLaunchConfigurationTemplateRequestBodyLaunchDispositionEnum;
import org.openapis.openapi.models.operations.UpdateLaunchConfigurationTemplateRequestBodyLicensing;
import org.openapis.openapi.models.operations.UpdateLaunchConfigurationTemplateRequestBodyPostLaunchActions;
import org.openapis.openapi.models.operations.UpdateLaunchConfigurationTemplateRequestBodySmallVolumeConf;
import org.openapis.openapi.models.operations.UpdateLaunchConfigurationTemplateRequestBodyTargetInstanceTypeRightSizingMethodEnum;
import org.openapis.openapi.models.operations.UpdateLaunchConfigurationTemplateResponse;
import org.openapis.openapi.models.shared.PostLaunchActionsDeploymentTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SsmDocument;
import org.openapis.openapi.models.shared.SsmExternalParameter;
import org.openapis.openapi.models.shared.SsmParameterStoreParameter;
import org.openapis.openapi.models.shared.SsmParameterStoreParameterTypeEnum;
import org.openapis.openapi.models.shared.VolumeTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateLaunchConfigurationTemplateRequest req = new UpdateLaunchConfigurationTemplateRequest(                new UpdateLaunchConfigurationTemplateRequestBody("labore") {{
                                associatePublicIpAddress = false;
                                bootMode = UpdateLaunchConfigurationTemplateRequestBodyBootModeEnum.LEGACY_BIOS;
                                copyPrivateIp = false;
                                copyTags = false;
                                enableMapAutoTagging = false;
                                largeVolumeConf = new UpdateLaunchConfigurationTemplateRequestBodyLargeVolumeConf() {{
                                    iops = 241418L;
                                    throughput = 683573L;
                                    volumeType = VolumeTypeEnum.ST1;
                                }};;
                                launchDisposition = UpdateLaunchConfigurationTemplateRequestBodyLaunchDispositionEnum.STOPPED;
                                licensing = new UpdateLaunchConfigurationTemplateRequestBodyLicensing() {{
                                    osByol = false;
                                }};;
                                mapAutoTaggingMpeID = "velit";
                                postLaunchActions = new UpdateLaunchConfigurationTemplateRequestBodyPostLaunchActions() {{
                                    cloudWatchLogGroupName = "culpa";
                                    deployment = PostLaunchActionsDeploymentTypeEnum.CUTOVER_ONLY;
                                    s3LogBucket = "recusandae";
                                    s3OutputKeyPrefix = "totam";
                                    ssmDocuments = new org.openapis.openapi.models.shared.SsmDocument[]{{
                                        add(new SsmDocument("amet", "beatae") {{
                                            actionName = "vel";
                                            externalParameters = new java.util.HashMap<String, org.openapis.openapi.models.shared.SsmExternalParameter>() {{
                                                put("quos", new SsmExternalParameter() {{
                                                    dynamicPath = "vel";
                                                }});
                                                put("labore", new SsmExternalParameter() {{
                                                    dynamicPath = "possimus";
                                                }});
                                            }};
                                            mustSucceedForCutover = false;
                                            parameters = new java.util.HashMap<String, org.openapis.openapi.models.shared.SsmParameterStoreParameter[]>() {{
                                                put("cum", new org.openapis.openapi.models.shared.SsmParameterStoreParameter[]{{
                                                    add(new SsmParameterStoreParameter("corporis", SsmParameterStoreParameterTypeEnum.STRING) {{
                                                        parameterName = "in";
                                                        parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                                    }}),
                                                    add(new SsmParameterStoreParameter("assumenda", SsmParameterStoreParameterTypeEnum.STRING) {{
                                                        parameterName = "reiciendis";
                                                        parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                                    }}),
                                                }});
                                                put("nemo", new org.openapis.openapi.models.shared.SsmParameterStoreParameter[]{{
                                                    add(new SsmParameterStoreParameter("aperiam", SsmParameterStoreParameterTypeEnum.STRING) {{
                                                        parameterName = "aliquid";
                                                        parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                                    }}),
                                                    add(new SsmParameterStoreParameter("consectetur", SsmParameterStoreParameterTypeEnum.STRING) {{
                                                        parameterName = "cum";
                                                        parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                                    }}),
                                                    add(new SsmParameterStoreParameter("exercitationem", SsmParameterStoreParameterTypeEnum.STRING) {{
                                                        parameterName = "in";
                                                        parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                                    }}),
                                                    add(new SsmParameterStoreParameter("facere", SsmParameterStoreParameterTypeEnum.STRING) {{
                                                        parameterName = "earum";
                                                        parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                                    }}),
                                                }});
                                                put("numquam", new org.openapis.openapi.models.shared.SsmParameterStoreParameter[]{{
                                                    add(new SsmParameterStoreParameter("reiciendis", SsmParameterStoreParameterTypeEnum.STRING) {{
                                                        parameterName = "suscipit";
                                                        parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                                    }}),
                                                    add(new SsmParameterStoreParameter("saepe", SsmParameterStoreParameterTypeEnum.STRING) {{
                                                        parameterName = "quidem";
                                                        parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                                    }}),
                                                    add(new SsmParameterStoreParameter("dolore", SsmParameterStoreParameterTypeEnum.STRING) {{
                                                        parameterName = "necessitatibus";
                                                        parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                                    }}),
                                                    add(new SsmParameterStoreParameter("asperiores", SsmParameterStoreParameterTypeEnum.STRING) {{
                                                        parameterName = "sunt";
                                                        parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                                    }}),
                                                }});
                                            }};
                                            ssmDocumentName = "adipisci";
                                            timeoutSeconds = 249420L;
                                        }}),
                                        add(new SsmDocument("adipisci", "minus") {{
                                            actionName = "dignissimos";
                                            externalParameters = new java.util.HashMap<String, org.openapis.openapi.models.shared.SsmExternalParameter>() {{
                                                put("debitis", new SsmExternalParameter() {{
                                                    dynamicPath = "consectetur";
                                                }});
                                                put("corporis", new SsmExternalParameter() {{
                                                    dynamicPath = "harum";
                                                }});
                                                put("laboriosam", new SsmExternalParameter() {{
                                                    dynamicPath = "ipsa";
                                                }});
                                                put("voluptates", new SsmExternalParameter() {{
                                                    dynamicPath = "libero";
                                                }});
                                            }};
                                            mustSucceedForCutover = false;
                                            parameters = new java.util.HashMap<String, org.openapis.openapi.models.shared.SsmParameterStoreParameter[]>() {{
                                                put("accusamus", new org.openapis.openapi.models.shared.SsmParameterStoreParameter[]{{
                                                    add(new SsmParameterStoreParameter("aspernatur", SsmParameterStoreParameterTypeEnum.STRING) {{
                                                        parameterName = "tempora";
                                                        parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                                    }}),
                                                    add(new SsmParameterStoreParameter("voluptas", SsmParameterStoreParameterTypeEnum.STRING) {{
                                                        parameterName = "voluptas";
                                                        parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                                    }}),
                                                    add(new SsmParameterStoreParameter("minima", SsmParameterStoreParameterTypeEnum.STRING) {{
                                                        parameterName = "voluptas";
                                                        parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                                    }}),
                                                }});
                                            }};
                                            ssmDocumentName = "nobis";
                                            timeoutSeconds = 680116L;
                                        }}),
                                        add(new SsmDocument("exercitationem", "nobis") {{
                                            actionName = "dolores";
                                            externalParameters = new java.util.HashMap<String, org.openapis.openapi.models.shared.SsmExternalParameter>() {{
                                                put("in", new SsmExternalParameter() {{
                                                    dynamicPath = "dolore";
                                                }});
                                                put("aliquam", new SsmExternalParameter() {{
                                                    dynamicPath = "officiis";
                                                }});
                                                put("temporibus", new SsmExternalParameter() {{
                                                    dynamicPath = "ullam";
                                                }});
                                            }};
                                            mustSucceedForCutover = false;
                                            parameters = new java.util.HashMap<String, org.openapis.openapi.models.shared.SsmParameterStoreParameter[]>() {{
                                                put("cum", new org.openapis.openapi.models.shared.SsmParameterStoreParameter[]{{
                                                    add(new SsmParameterStoreParameter("hic", SsmParameterStoreParameterTypeEnum.STRING) {{
                                                        parameterName = "quas";
                                                        parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                                    }}),
                                                    add(new SsmParameterStoreParameter("culpa", SsmParameterStoreParameterTypeEnum.STRING) {{
                                                        parameterName = "nesciunt";
                                                        parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                                    }}),
                                                    add(new SsmParameterStoreParameter("pariatur", SsmParameterStoreParameterTypeEnum.STRING) {{
                                                        parameterName = "corrupti";
                                                        parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                                    }}),
                                                }});
                                            }};
                                            ssmDocumentName = "totam";
                                            timeoutSeconds = 940210L;
                                        }}),
                                        add(new SsmDocument("incidunt", "sed") {{
                                            actionName = "sit";
                                            externalParameters = new java.util.HashMap<String, org.openapis.openapi.models.shared.SsmExternalParameter>() {{
                                                put("sed", new SsmExternalParameter() {{
                                                    dynamicPath = "reiciendis";
                                                }});
                                                put("explicabo", new SsmExternalParameter() {{
                                                    dynamicPath = "asperiores";
                                                }});
                                                put("facilis", new SsmExternalParameter() {{
                                                    dynamicPath = "voluptate";
                                                }});
                                            }};
                                            mustSucceedForCutover = false;
                                            parameters = new java.util.HashMap<String, org.openapis.openapi.models.shared.SsmParameterStoreParameter[]>() {{
                                                put("ab", new org.openapis.openapi.models.shared.SsmParameterStoreParameter[]{{
                                                    add(new SsmParameterStoreParameter("laborum", SsmParameterStoreParameterTypeEnum.STRING) {{
                                                        parameterName = "dolore";
                                                        parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                                    }}),
                                                    add(new SsmParameterStoreParameter("in", SsmParameterStoreParameterTypeEnum.STRING) {{
                                                        parameterName = "sed";
                                                        parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                                    }}),
                                                    add(new SsmParameterStoreParameter("quidem", SsmParameterStoreParameterTypeEnum.STRING) {{
                                                        parameterName = "commodi";
                                                        parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                                    }}),
                                                }});
                                                put("explicabo", new org.openapis.openapi.models.shared.SsmParameterStoreParameter[]{{
                                                    add(new SsmParameterStoreParameter("architecto", SsmParameterStoreParameterTypeEnum.STRING) {{
                                                        parameterName = "unde";
                                                        parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                                    }}),
                                                    add(new SsmParameterStoreParameter("sapiente", SsmParameterStoreParameterTypeEnum.STRING) {{
                                                        parameterName = "suscipit";
                                                        parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                                    }}),
                                                }});
                                                put("debitis", new org.openapis.openapi.models.shared.SsmParameterStoreParameter[]{{
                                                    add(new SsmParameterStoreParameter("perferendis", SsmParameterStoreParameterTypeEnum.STRING) {{
                                                        parameterName = "reiciendis";
                                                        parameterType = SsmParameterStoreParameterTypeEnum.STRING;
                                                    }}),
                                                }});
                                            }};
                                            ssmDocumentName = "corrupti";
                                            timeoutSeconds = 979574L;
                                        }}),
                                    }};
                                }};;
                                smallVolumeConf = new UpdateLaunchConfigurationTemplateRequestBodySmallVolumeConf() {{
                                    iops = 592231L;
                                    throughput = 258702L;
                                    volumeType = VolumeTypeEnum.STANDARD;
                                }};;
                                smallVolumeMaxSize = 215529L;
                                targetInstanceTypeRightSizingMethod = UpdateLaunchConfigurationTemplateRequestBodyTargetInstanceTypeRightSizingMethodEnum.NONE;
                            }};) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "quos";
                xAmzCredential = "voluptatibus";
                xAmzDate = "tempora";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "reiciendis";
            }};            

            UpdateLaunchConfigurationTemplateResponse res = sdk.sdk.updateLaunchConfigurationTemplate(req);

            if (res.launchConfigurationTemplate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateReplicationConfiguration

Allows you to update multiple ReplicationConfigurations by Source Server ID.

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
import org.openapis.openapi.models.shared.ReplicationConfigurationReplicatedDisk;
import org.openapis.openapi.models.shared.ReplicationConfigurationReplicatedDiskStagingDiskTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateReplicationConfigurationRequest req = new UpdateReplicationConfigurationRequest(                new UpdateReplicationConfigurationRequestBody("sit") {{
                                associateDefaultSecurityGroup = false;
                                bandwidthThrottling = 248413L;
                                createPublicIP = false;
                                dataPlaneRouting = UpdateReplicationConfigurationRequestBodyDataPlaneRoutingEnum.PUBLIC_IP;
                                defaultLargeStagingDiskType = UpdateReplicationConfigurationRequestBodyDefaultLargeStagingDiskTypeEnum.ST1;
                                ebsEncryption = UpdateReplicationConfigurationRequestBodyEbsEncryptionEnum.CUSTOM;
                                ebsEncryptionKeyArn = "quaerat";
                                name = "Brittany Tremblay DDS";
                                replicatedDisks = new org.openapis.openapi.models.shared.ReplicationConfigurationReplicatedDisk[]{{
                                    add(new ReplicationConfigurationReplicatedDisk() {{
                                        deviceName = "veniam";
                                        iops = 329543L;
                                        isBootDisk = false;
                                        stagingDiskType = ReplicationConfigurationReplicatedDiskStagingDiskTypeEnum.IO2;
                                        throughput = 967122L;
                                    }}),
                                    add(new ReplicationConfigurationReplicatedDisk() {{
                                        deviceName = "nulla";
                                        iops = 168576L;
                                        isBootDisk = false;
                                        stagingDiskType = ReplicationConfigurationReplicatedDiskStagingDiskTypeEnum.AUTO;
                                        throughput = 901483L;
                                    }}),
                                    add(new ReplicationConfigurationReplicatedDisk() {{
                                        deviceName = "numquam";
                                        iops = 329935L;
                                        isBootDisk = false;
                                        stagingDiskType = ReplicationConfigurationReplicatedDiskStagingDiskTypeEnum.SC1;
                                        throughput = 889234L;
                                    }}),
                                }};
                                replicationServerInstanceType = "beatae";
                                replicationServersSecurityGroupsIDs = new String[]{{
                                    add("exercitationem"),
                                    add("praesentium"),
                                    add("cum"),
                                }};
                                stagingAreaSubnetId = "laboriosam";
                                stagingAreaTags = new java.util.HashMap<String, String>() {{
                                    put("voluptatum", "error");
                                    put("hic", "expedita");
                                    put("debitis", "neque");
                                }};
                                useDedicatedReplicationServer = false;
                            }};) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "nostrum";
                xAmzCredential = "officia";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "tempora";
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

Updates multiple ReplicationConfigurationTemplates by ID.

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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateReplicationConfigurationTemplateRequest req = new UpdateReplicationConfigurationTemplateRequest(                new UpdateReplicationConfigurationTemplateRequestBody("fugit") {{
                                arn = "ut";
                                associateDefaultSecurityGroup = false;
                                bandwidthThrottling = 856303L;
                                createPublicIP = false;
                                dataPlaneRouting = UpdateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum.PRIVATE_IP;
                                defaultLargeStagingDiskType = UpdateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum.ST1;
                                ebsEncryption = UpdateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum.CUSTOM;
                                ebsEncryptionKeyArn = "magnam";
                                replicationServerInstanceType = "consequatur";
                                replicationServersSecurityGroupsIDs = new String[]{{
                                    add("ipsam"),
                                    add("sit"),
                                }};
                                stagingAreaSubnetId = "voluptatum";
                                stagingAreaTags = new java.util.HashMap<String, String>() {{
                                    put("repudiandae", "corporis");
                                    put("et", "blanditiis");
                                    put("ex", "sed");
                                }};
                                useDedicatedReplicationServer = false;
                            }};) {{
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "vel";
                xAmzCredential = "nostrum";
                xAmzDate = "saepe";
                xAmzSecurityToken = "error";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "incidunt";
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

## updateSourceServerReplicationType

Allows you to change between the AGENT_BASED replication type and the SNAPSHOT_SHIPPING replication type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSourceServerReplicationTypeRequest;
import org.openapis.openapi.models.operations.UpdateSourceServerReplicationTypeRequestBody;
import org.openapis.openapi.models.operations.UpdateSourceServerReplicationTypeRequestBodyReplicationTypeEnum;
import org.openapis.openapi.models.operations.UpdateSourceServerReplicationTypeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSourceServerReplicationTypeRequest req = new UpdateSourceServerReplicationTypeRequest(                new UpdateSourceServerReplicationTypeRequestBody(UpdateSourceServerReplicationTypeRequestBodyReplicationTypeEnum.AGENT_BASED, "harum");) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "occaecati";
                xAmzDate = "labore";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "atque";
                xAmzSignedHeaders = "laborum";
            }};            

            UpdateSourceServerReplicationTypeResponse res = sdk.sdk.updateSourceServerReplicationType(req);

            if (res.sourceServer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWave

Update wave.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWaveRequest;
import org.openapis.openapi.models.operations.UpdateWaveRequestBody;
import org.openapis.openapi.models.operations.UpdateWaveResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateWaveRequest req = new UpdateWaveRequest(                new UpdateWaveRequestBody("tenetur") {{
                                description = "laboriosam";
                                name = "Grace O'Connell";
                            }};) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "provident";
                xAmzCredential = "repellendus";
                xAmzDate = "delectus";
                xAmzSecurityToken = "voluptates";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "est";
            }};            

            UpdateWaveResponse res = sdk.sdk.updateWave(req);

            if (res.wave != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
