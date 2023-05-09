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
import org.openapis.openapi.models.operations.SaveStatsResponse;
import org.openapis.openapi.models.shared.AttemptStats;
import org.openapis.openapi.models.shared.AttemptStreamStats;
import org.openapis.openapi.models.shared.SaveStatsRequestBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SaveStatsRequestBody req = new SaveStatsRequestBody(548814, 592845L,                 new AttemptStats() {{
                                bytesEmitted = 715190L;
                                estimatedBytes = 844266L;
                                estimatedRecords = 602763L;
                                recordsCommitted = 857946L;
                                recordsEmitted = 544883L;
                                stateMessagesEmitted = 847252L;
                            }};) {{
                streamStats = new org.openapis.openapi.models.shared.AttemptStreamStats[]{{
                    add(new AttemptStreamStats(                new AttemptStats() {{
                                        bytesEmitted = 272656L;
                                        estimatedBytes = 383441L;
                                        estimatedRecords = 477665L;
                                        recordsCommitted = 791725L;
                                        recordsEmitted = 812169L;
                                        stateMessagesEmitted = 528895L;
                                    }};, "iusto") {{
                        stats = new AttemptStats() {{
                            bytesEmitted = 623564L;
                            estimatedBytes = 645894L;
                            estimatedRecords = 384382L;
                            recordsCommitted = 437587L;
                            recordsEmitted = 297534L;
                            stateMessagesEmitted = 891773L;
                        }};
                        streamName = "ipsa";
                        streamNamespace = "delectus";
                    }}),
                    add(new AttemptStreamStats(                new AttemptStats() {{
                                        bytesEmitted = 20218L;
                                        estimatedBytes = 368241L;
                                        estimatedRecords = 832620L;
                                        recordsCommitted = 957156L;
                                        recordsEmitted = 778157L;
                                        stateMessagesEmitted = 140350L;
                                    }};, "at") {{
                        stats = new AttemptStats() {{
                            bytesEmitted = 568045L;
                            estimatedBytes = 392785L;
                            estimatedRecords = 925597L;
                            recordsCommitted = 836079L;
                            recordsEmitted = 71036L;
                            stateMessagesEmitted = 337396L;
                        }};
                        streamName = "veritatis";
                        streamNamespace = "deserunt";
                    }}),
                }};
            }};            

            SaveStatsResponse res = sdk.attempt.saveStats(req);

            if (res.internalOperationResult != null) {
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


### [attempt](docs/attempt/README.md)

* [saveStats](docs/attempt/README.md#savestats) - For worker to set sync stats of a running attempt.
* [saveSyncConfig](docs/attempt/README.md#savesyncconfig) - For worker to save the AttemptSyncConfig for an attempt.
* [setWorkflowInAttempt](docs/attempt/README.md#setworkflowinattempt) - For worker to register the workflow id in attempt.

### [connection](docs/connection/README.md)

* [createConnection](docs/connection/README.md#createconnection) - Create a connection between a source and a destination
* [deleteConnection](docs/connection/README.md#deleteconnection) - Delete a connection
* [getConnection](docs/connection/README.md#getconnection) - Get a connection
* [listAllConnectionsForWorkspace](docs/connection/README.md#listallconnectionsforworkspace) - Returns all connections for a workspace, including deleted connections.
* [listConnectionsForWorkspace](docs/connection/README.md#listconnectionsforworkspace) - Returns all connections for a workspace.
* [resetConnection](docs/connection/README.md#resetconnection) - Reset the data for the connection. Deletes data generated by the connection in the destination. Resets any cursors back to initial state.
* [searchConnections](docs/connection/README.md#searchconnections) - Search connections
* [syncConnection](docs/connection/README.md#syncconnection) - Trigger a manual sync of the connection
* [updateConnection](docs/connection/README.md#updateconnection) - Update a connection

### [destination](docs/destination/README.md)

* [checkConnectionToDestination](docs/destination/README.md#checkconnectiontodestination) - Check connection to the destination
* [checkConnectionToDestinationForUpdate](docs/destination/README.md#checkconnectiontodestinationforupdate) - Check connection for a proposed update to a destination
* [cloneDestination](docs/destination/README.md#clonedestination) - Clone destination
* [createDestination](docs/destination/README.md#createdestination) - Create a destination
* [deleteDestination](docs/destination/README.md#deletedestination) - Delete the destination
* [getDestination](docs/destination/README.md#getdestination) - Get configured destination
* [listDestinationsForWorkspace](docs/destination/README.md#listdestinationsforworkspace) - List configured destinations for a workspace
* [searchDestinations](docs/destination/README.md#searchdestinations) - Search destinations
* [updateDestination](docs/destination/README.md#updatedestination) - Update a destination

### [destinationDefinition](docs/destinationdefinition/README.md)

* [createCustomDestinationDefinition](docs/destinationdefinition/README.md#createcustomdestinationdefinition) - Creates a custom destinationDefinition for the given workspace
* [deleteDestinationDefinition](docs/destinationdefinition/README.md#deletedestinationdefinition) - Delete a destination definition
* [getDestinationDefinition](docs/destinationdefinition/README.md#getdestinationdefinition) - Get destinationDefinition
* [getDestinationDefinitionForWorkspace](docs/destinationdefinition/README.md#getdestinationdefinitionforworkspace) - Get a destinationDefinition that is configured for the given workspace
* [grantDestinationDefinitionToWorkspace](docs/destinationdefinition/README.md#grantdestinationdefinitiontoworkspace) - grant a private, non-custom destinationDefinition to a given workspace
* [listDestinationDefinitions](docs/destinationdefinition/README.md#listdestinationdefinitions) - List all the destinationDefinitions the current Airbyte deployment is configured to use
* [listDestinationDefinitionsForWorkspace](docs/destinationdefinition/README.md#listdestinationdefinitionsforworkspace) - List all the destinationDefinitions the given workspace is configured to use
* [listLatestDestinationDefinitions](docs/destinationdefinition/README.md#listlatestdestinationdefinitions) - List the latest destinationDefinitions Airbyte supports
* [listPrivateDestinationDefinitions](docs/destinationdefinition/README.md#listprivatedestinationdefinitions) - List all private, non-custom destinationDefinitions, and for each indicate whether the given workspace has a grant for using the definition. Used by admins to view and modify a given workspace's grants.
* [revokeDestinationDefinitionFromWorkspace](docs/destinationdefinition/README.md#revokedestinationdefinitionfromworkspace) - revoke a grant to a private, non-custom destinationDefinition from a given workspace
* [updateDestinationDefinition](docs/destinationdefinition/README.md#updatedestinationdefinition) - Update destinationDefinition

### [destinationDefinitionSpecification](docs/destinationdefinitionspecification/README.md)

* [getDestinationDefinitionSpecification](docs/destinationdefinitionspecification/README.md#getdestinationdefinitionspecification) - Get specification for a destinationDefinition

### [destinationOauth](docs/destinationoauth/README.md)

* [completeDestinationOAuth](docs/destinationoauth/README.md#completedestinationoauth) - Given a destination def ID generate an access/refresh token etc.
* [getDestinationOAuthConsent](docs/destinationoauth/README.md#getdestinationoauthconsent) - Given a destination connector definition ID, return the URL to the consent screen where to redirect the user to.
* [setInstancewideDestinationOauthParams](docs/destinationoauth/README.md#setinstancewidedestinationoauthparams) - Sets instancewide variables to be used for the oauth flow when creating this destination. When set, these variables will be injected into a connector's configuration before any interaction with the connector image itself. This enables running oauth flows with consistent variables e.g: the company's Google Ads developer_token, client_id, and client_secret without the user having to know about these variables.


### [health](docs/health/README.md)

* [getHealthCheck](docs/health/README.md#gethealthcheck) - Health Check

### [internal](docs/internal/README.md)

* [createOrUpdateState](docs/internal/README.md#createorupdatestate) - Create or update the state for a connection.
* [getAttemptNormalizationStatusesForJob](docs/internal/README.md#getattemptnormalizationstatusesforjob) - Get normalization status to determine if we can bypass normalization phase
* [saveStats](docs/internal/README.md#savestats) - For worker to set sync stats of a running attempt.
* [saveSyncConfig](docs/internal/README.md#savesyncconfig) - For worker to save the AttemptSyncConfig for an attempt.
* [setWorkflowInAttempt](docs/internal/README.md#setworkflowinattempt) - For worker to register the workflow id in attempt.
* [writeDiscoverCatalogResult](docs/internal/README.md#writediscovercatalogresult) - Should only called from worker, to write result from discover activity back to DB.

### [jobs](docs/jobs/README.md)

* [cancelJob](docs/jobs/README.md#canceljob) - Cancels a job
* [getAttemptNormalizationStatusesForJob](docs/jobs/README.md#getattemptnormalizationstatusesforjob) - Get normalization status to determine if we can bypass normalization phase
* [getJobDebugInfo](docs/jobs/README.md#getjobdebuginfo) - Gets all information needed to debug this job
* [getJobInfo](docs/jobs/README.md#getjobinfo) - Get information about a job
* [getJobInfoLight](docs/jobs/README.md#getjobinfolight) - Get information about a job excluding attempt info and logs
* [getLastReplicationJob](docs/jobs/README.md#getlastreplicationjob)
* [listJobsFor](docs/jobs/README.md#listjobsfor) - Returns recent jobs for a connection. Jobs are returned in descending order by createdAt.

### [logs](docs/logs/README.md)

* [getLogs](docs/logs/README.md#getlogs) - Get logs

### [notifications](docs/notifications/README.md)

* [tryNotificationConfig](docs/notifications/README.md#trynotificationconfig) - Try sending a notifications

### [openapi](docs/openapi/README.md)

* [getOpenApiSpec](docs/openapi/README.md#getopenapispec) - Returns the openapi specification

### [operation](docs/operation/README.md)

* [checkOperation](docs/operation/README.md#checkoperation) - Check if an operation to be created is valid
* [createOperation](docs/operation/README.md#createoperation) - Create an operation to be applied as part of a connection pipeline
* [deleteOperation](docs/operation/README.md#deleteoperation) - Delete an operation
* [getOperation](docs/operation/README.md#getoperation) - Returns an operation
* [listOperationsForConnection](docs/operation/README.md#listoperationsforconnection) - Returns all operations for a connection.
* [updateOperation](docs/operation/README.md#updateoperation) - Update an operation

### [scheduler](docs/scheduler/README.md)

* [executeDestinationCheckConnection](docs/scheduler/README.md#executedestinationcheckconnection) - Run check connection for a given destination configuration
* [executeSourceCheckConnection](docs/scheduler/README.md#executesourcecheckconnection) - Run check connection for a given source configuration
* [executeSourceDiscoverSchema](docs/scheduler/README.md#executesourcediscoverschema) - Run discover schema for a given source a source configuration

### [source](docs/source/README.md)

* [checkConnectionToSource](docs/source/README.md#checkconnectiontosource) - Check connection to the source
* [checkConnectionToSourceForUpdate](docs/source/README.md#checkconnectiontosourceforupdate) - Check connection for a proposed update to a source
* [cloneSource](docs/source/README.md#clonesource) - Clone source
* [createSource](docs/source/README.md#createsource) - Create a source
* [deleteSource](docs/source/README.md#deletesource) - Delete a source
* [discoverSchemaForSource](docs/source/README.md#discoverschemaforsource) - Discover the schema catalog of the source
* [getMostRecentSourceActorCatalog](docs/source/README.md#getmostrecentsourceactorcatalog) - Get most recent ActorCatalog for source
* [getSource](docs/source/README.md#getsource) - Get source
* [listSourcesForWorkspace](docs/source/README.md#listsourcesforworkspace) - List sources for workspace
* [searchSources](docs/source/README.md#searchsources) - Search sources
* [updateSource](docs/source/README.md#updatesource) - Update a source
* [writeDiscoverCatalogResult](docs/source/README.md#writediscovercatalogresult) - Should only called from worker, to write result from discover activity back to DB.

### [sourceDefinition](docs/sourcedefinition/README.md)

* [createCustomSourceDefinition](docs/sourcedefinition/README.md#createcustomsourcedefinition) - Creates a custom sourceDefinition for the given workspace
* [deleteSourceDefinition](docs/sourcedefinition/README.md#deletesourcedefinition) - Delete a source definition
* [getSourceDefinition](docs/sourcedefinition/README.md#getsourcedefinition) - Get source
* [getSourceDefinitionForWorkspace](docs/sourcedefinition/README.md#getsourcedefinitionforworkspace) - Get a sourceDefinition that is configured for the given workspace
* [grantSourceDefinitionToWorkspace](docs/sourcedefinition/README.md#grantsourcedefinitiontoworkspace) - grant a private, non-custom sourceDefinition to a given workspace
* [listLatestSourceDefinitions](docs/sourcedefinition/README.md#listlatestsourcedefinitions) - List the latest sourceDefinitions Airbyte supports
* [listPrivateSourceDefinitions](docs/sourcedefinition/README.md#listprivatesourcedefinitions) - List all private, non-custom sourceDefinitions, and for each indicate whether the given workspace has a grant for using the definition. Used by admins to view and modify a given workspace's grants.
* [listSourceDefinitions](docs/sourcedefinition/README.md#listsourcedefinitions) - List all the sourceDefinitions the current Airbyte deployment is configured to use
* [listSourceDefinitionsForWorkspace](docs/sourcedefinition/README.md#listsourcedefinitionsforworkspace) - List all the sourceDefinitions the given workspace is configured to use
* [revokeSourceDefinitionFromWorkspace](docs/sourcedefinition/README.md#revokesourcedefinitionfromworkspace) - revoke a grant to a private, non-custom sourceDefinition from a given workspace
* [updateSourceDefinition](docs/sourcedefinition/README.md#updatesourcedefinition) - Update a sourceDefinition

### [sourceDefinitionSpecification](docs/sourcedefinitionspecification/README.md)

* [getSourceDefinitionSpecification](docs/sourcedefinitionspecification/README.md#getsourcedefinitionspecification) - Get specification for a SourceDefinition.

### [sourceOauth](docs/sourceoauth/README.md)

* [completeSourceOAuth](docs/sourceoauth/README.md#completesourceoauth) - Given a source def ID generate an access/refresh token etc.
* [getSourceOAuthConsent](docs/sourceoauth/README.md#getsourceoauthconsent) - Given a source connector definition ID, return the URL to the consent screen where to redirect the user to.
* [setInstancewideSourceOauthParams](docs/sourceoauth/README.md#setinstancewidesourceoauthparams) - Sets instancewide variables to be used for the oauth flow when creating this source. When set, these variables will be injected into a connector's configuration before any interaction with the connector image itself. This enables running oauth flows with consistent variables e.g: the company's Google Ads developer_token, client_id, and client_secret without the user having to know about these variables.


### [state](docs/state/README.md)

* [createOrUpdateState](docs/state/README.md#createorupdatestate) - Create or update the state for a connection.
* [getState](docs/state/README.md#getstate) - Fetch the current state for a connection.

### [webBackend](docs/webbackend/README.md)

* [getStateType](docs/webbackend/README.md#getstatetype) - Fetch the current state type for a connection.
* [webBackendCheckUpdates](docs/webbackend/README.md#webbackendcheckupdates) - Returns a summary of source and destination definitions that could be updated.
* [webBackendCreateConnection](docs/webbackend/README.md#webbackendcreateconnection) - Create a connection
* [webBackendGetConnection](docs/webbackend/README.md#webbackendgetconnection) - Get a connection
* [webBackendGetWorkspaceState](docs/webbackend/README.md#webbackendgetworkspacestate) - Returns the current state of a workspace
* [webBackendListConnectionsForWorkspace](docs/webbackend/README.md#webbackendlistconnectionsforworkspace) - Returns all non-deleted connections for a workspace.
* [webBackendListGeographies](docs/webbackend/README.md#webbackendlistgeographies) - Returns available geographies can be selected to run data syncs in a particular geography.
The 'auto' entry indicates that the sync will be automatically assigned to a geography according
to the platform default behavior. Entries other than 'auto' are two-letter country codes that
follow the ISO 3166-1 alpha-2 standard.

* [webBackendUpdateConnection](docs/webbackend/README.md#webbackendupdateconnection) - Update a connection

### [workspace](docs/workspace/README.md)

* [createWorkspace](docs/workspace/README.md#createworkspace) - Creates a workspace
* [deleteWorkspace](docs/workspace/README.md#deleteworkspace) - Deletes a workspace
* [getWorkspace](docs/workspace/README.md#getworkspace) - Find workspace by ID
* [getWorkspaceByConnectionId](docs/workspace/README.md#getworkspacebyconnectionid) - Find workspace by connection id
* [getWorkspaceBySlug](docs/workspace/README.md#getworkspacebyslug) - Find workspace by slug
* [listWorkspaces](docs/workspace/README.md#listworkspaces) - List all workspaces registered in the current Airbyte deployment
* [updateWorkspace](docs/workspace/README.md#updateworkspace) - Update workspace state
* [updateWorkspaceFeedback](docs/workspace/README.md#updateworkspacefeedback) - Update workspace feedback state
* [updateWorkspaceName](docs/workspace/README.md#updateworkspacename) - Update workspace name
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
