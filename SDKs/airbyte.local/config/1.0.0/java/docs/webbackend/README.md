# webBackend

## Overview

Endpoints for the Airbyte web application. Those APIs should not be called outside the web application implementation and are not
guaranteeing any backwards compatibility.


### Available Operations

* [getStateType](#getstatetype) - Fetch the current state type for a connection.
* [webBackendCheckUpdates](#webbackendcheckupdates) - Returns a summary of source and destination definitions that could be updated.
* [webBackendCreateConnection](#webbackendcreateconnection) - Create a connection
* [webBackendGetConnection](#webbackendgetconnection) - Get a connection
* [webBackendGetWorkspaceState](#webbackendgetworkspacestate) - Returns the current state of a workspace
* [webBackendListConnectionsForWorkspace](#webbackendlistconnectionsforworkspace) - Returns all non-deleted connections for a workspace.
* [webBackendListGeographies](#webbackendlistgeographies) - Returns available geographies can be selected to run data syncs in a particular geography.
The 'auto' entry indicates that the sync will be automatically assigned to a geography according
to the platform default behavior. Entries other than 'auto' are two-letter country codes that
follow the ISO 3166-1 alpha-2 standard.

* [webBackendUpdateConnection](#webbackendupdateconnection) - Update a connection

## getStateType

Fetch the current state type for a connection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStateTypeResponse;
import org.openapis.openapi.models.shared.ConnectionIdRequestBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ConnectionIdRequestBody req = new ConnectionIdRequestBody("e71f6c48-252d-4777-9e7f-d074009ef8d2");            

            GetStateTypeResponse res = sdk.webBackend.getStateType(req);

            if (res.connectionStateType != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## webBackendCheckUpdates

Returns a summary of source and destination definitions that could be updated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebBackendCheckUpdatesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebBackendCheckUpdatesResponse res = sdk.webBackend.webBackendCheckUpdates();

            if (res.webBackendCheckUpdatesRead != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## webBackendCreateConnection

Create a connection

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebBackendCreateConnectionResponse;
import org.openapis.openapi.models.shared.AirbyteCatalog;
import org.openapis.openapi.models.shared.AirbyteStream;
import org.openapis.openapi.models.shared.AirbyteStreamAndConfiguration;
import org.openapis.openapi.models.shared.AirbyteStreamConfiguration;
import org.openapis.openapi.models.shared.ConnectionSchedule;
import org.openapis.openapi.models.shared.ConnectionScheduleData;
import org.openapis.openapi.models.shared.ConnectionScheduleDataBasicSchedule;
import org.openapis.openapi.models.shared.ConnectionScheduleDataBasicScheduleTimeUnitEnum;
import org.openapis.openapi.models.shared.ConnectionScheduleDataCron;
import org.openapis.openapi.models.shared.ConnectionScheduleTimeUnitEnum;
import org.openapis.openapi.models.shared.ConnectionScheduleTypeEnum;
import org.openapis.openapi.models.shared.ConnectionStatusEnum;
import org.openapis.openapi.models.shared.DestinationSyncModeEnum;
import org.openapis.openapi.models.shared.GeographyEnum;
import org.openapis.openapi.models.shared.NamespaceDefinitionTypeEnum;
import org.openapis.openapi.models.shared.NonBreakingChangesPreferenceEnum;
import org.openapis.openapi.models.shared.OperationCreate;
import org.openapis.openapi.models.shared.OperatorConfiguration;
import org.openapis.openapi.models.shared.OperatorDbt;
import org.openapis.openapi.models.shared.OperatorNormalization;
import org.openapis.openapi.models.shared.OperatorNormalizationOptionEnum;
import org.openapis.openapi.models.shared.OperatorTypeEnum;
import org.openapis.openapi.models.shared.OperatorWebhook;
import org.openapis.openapi.models.shared.OperatorWebhookDbtCloud;
import org.openapis.openapi.models.shared.OperatorWebhookWebhookTypeEnum;
import org.openapis.openapi.models.shared.ResourceRequirements;
import org.openapis.openapi.models.shared.SelectedFieldInfo;
import org.openapis.openapi.models.shared.SyncModeEnum;
import org.openapis.openapi.models.shared.WebBackendConnectionCreate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.WebBackendConnectionCreate req = new WebBackendConnectionCreate("9de1dd70-97b5-4da0-8c57-fa6c78a216e1", "9bafeca6-1914-4981-80b6-4ff8ae170ef0", ConnectionStatusEnum.ACTIVE) {{
                geography = GeographyEnum.EU;
                name = "Josefina Durgan";
                namespaceDefinition = NamespaceDefinitionTypeEnum.SOURCE;
                namespaceFormat = "${SOURCE_NAMESPACE}";
                nonBreakingChangesPreference = NonBreakingChangesPreferenceEnum.DISABLE;
                operationIds = new String[]{{
                    add("86855596-6732-4aa5-9cb6-682cb70f8cfd"),
                    add("5fb6e91b-9a9f-4748-86e2-c3309db0536d"),
                    add("9e75ca00-6f53-492c-91a2-5a8bf92f9742"),
                }};
                operations = new org.openapis.openapi.models.shared.OperationCreate[]{{
                    add(new OperationCreate("labore",                 new OperatorConfiguration(OperatorTypeEnum.WEBHOOK) {{
                                        dbt = new OperatorDbt("eos") {{
                                            dbtArguments = "quibusdam";
                                            dockerImage = "repellat";
                                            gitRepoBranch = "mollitia";
                                        }};;
                                        normalization = new OperatorNormalization() {{
                                            option = OperatorNormalizationOptionEnum.BASIC;
                                        }};;
                                        webhook = new OperatorWebhook() {{
                                            dbtCloud = new OperatorWebhookDbtCloud(309192L, 640518L);;
                                            executionBody = "sunt";
                                            executionUrl = "perspiciatis";
                                            webhookConfigId = "7f6de922-151f-4e17-9209-9853e9f543d8";
                                            webhookType = OperatorWebhookWebhookTypeEnum.DBT_CLOUD;
                                        }};;
                                    }};, "54439ee2-2446-4044-bbc1-54188c2f56e8") {{
                        name = "Al Mills";
                        operatorConfiguration = new OperatorConfiguration(OperatorTypeEnum.NORMALIZATION) {{
                            dbt = new OperatorDbt("praesentium") {{
                                dbtArguments = "hic";
                                dockerImage = "corrupti";
                                gitRepoBranch = "soluta";
                                gitRepoUrl = "earum";
                            }};
                            normalization = new OperatorNormalization() {{
                                option = OperatorNormalizationOptionEnum.BASIC;
                            }};
                            operatorType = OperatorTypeEnum.NORMALIZATION;
                            webhook = new OperatorWebhook() {{
                                dbtCloud = new OperatorWebhookDbtCloud(103760L, 154117L) {{
                                    accountId = 138727L;
                                    jobId = 73197L;
                                }};
                                executionBody = "ad";
                                executionUrl = "velit";
                                webhookConfigId = "59d98387-f7a7-49cd-b2cd-2484da21729f";
                                webhookType = OperatorWebhookWebhookTypeEnum.DBT_CLOUD;
                            }};
                        }};
                        workspaceId = "ac41ef57-25f1-4169-ac1e-41d8a23c23e3";
                    }}),
                    add(new OperationCreate("provident",                 new OperatorConfiguration(OperatorTypeEnum.WEBHOOK) {{
                                        dbt = new OperatorDbt("minus") {{
                                            dbtArguments = "impedit";
                                            dockerImage = "minima";
                                            gitRepoBranch = "cumque";
                                        }};;
                                        normalization = new OperatorNormalization() {{
                                            option = OperatorNormalizationOptionEnum.BASIC;
                                        }};;
                                        webhook = new OperatorWebhook() {{
                                            dbtCloud = new OperatorWebhookDbtCloud(701477L, 506839L);;
                                            executionBody = "vel";
                                            executionUrl = "doloremque";
                                            webhookConfigId = "f8cd580b-a738-410e-8fe4-447297cd3b1d";
                                            webhookType = OperatorWebhookWebhookTypeEnum.DBT_CLOUD;
                                        }};;
                                    }};, "d3bbce24-7b76-484e-bf50-126d71cffbd0") {{
                        name = "Cristina Nader";
                        operatorConfiguration = new OperatorConfiguration(OperatorTypeEnum.WEBHOOK) {{
                            dbt = new OperatorDbt("libero") {{
                                dbtArguments = "dolorem";
                                dockerImage = "odit";
                                gitRepoBranch = "officiis";
                                gitRepoUrl = "mollitia";
                            }};
                            normalization = new OperatorNormalization() {{
                                option = OperatorNormalizationOptionEnum.BASIC;
                            }};
                            operatorType = OperatorTypeEnum.WEBHOOK;
                            webhook = new OperatorWebhook() {{
                                dbtCloud = new OperatorWebhookDbtCloud(487625L, 753680L) {{
                                    accountId = 376942L;
                                    jobId = 93212L;
                                }};
                                executionBody = "nesciunt";
                                executionUrl = "harum";
                                webhookConfigId = "0d51a44b-f01b-4ad8-b06d-46082bfbdc41";
                                webhookType = OperatorWebhookWebhookTypeEnum.DBT_CLOUD;
                            }};
                        }};
                        workspaceId = "f5d4e2ae-4fb5-4cb3-9d17-638f1edb7835";
                    }}),
                    add(new OperationCreate("veniam",                 new OperatorConfiguration(OperatorTypeEnum.WEBHOOK) {{
                                        dbt = new OperatorDbt("doloremque") {{
                                            dbtArguments = "esse";
                                            dockerImage = "aliquid";
                                            gitRepoBranch = "porro";
                                        }};;
                                        normalization = new OperatorNormalization() {{
                                            option = OperatorNormalizationOptionEnum.BASIC;
                                        }};;
                                        webhook = new OperatorWebhook() {{
                                            dbtCloud = new OperatorWebhookDbtCloud(790341L, 475600L);;
                                            executionBody = "mollitia";
                                            executionUrl = "quidem";
                                            webhookConfigId = "f616ea5c-7164-4193-8b90-f2e09d19d2fc";
                                            webhookType = OperatorWebhookWebhookTypeEnum.DBT_CLOUD;
                                        }};;
                                    }};, "2f9e2e10-5944-4b93-9d23-7a72f90849d6") {{
                        name = "Jean Krajcik";
                        operatorConfiguration = new OperatorConfiguration(OperatorTypeEnum.WEBHOOK) {{
                            dbt = new OperatorDbt("unde") {{
                                dbtArguments = "blanditiis";
                                dockerImage = "quaerat";
                                gitRepoBranch = "odit";
                                gitRepoUrl = "ab";
                            }};
                            normalization = new OperatorNormalization() {{
                                option = OperatorNormalizationOptionEnum.BASIC;
                            }};
                            operatorType = OperatorTypeEnum.DBT;
                            webhook = new OperatorWebhook() {{
                                dbtCloud = new OperatorWebhookDbtCloud(282825L, 274622L) {{
                                    accountId = 213405L;
                                    jobId = 697915L;
                                }};
                                executionBody = "quidem";
                                executionUrl = "nulla";
                                webhookConfigId = "3c43159d-33e5-4953-8001-139863aa41e6";
                                webhookType = OperatorWebhookWebhookTypeEnum.DBT_CLOUD;
                            }};
                        }};
                        workspaceId = "31cc2f1f-cb51-4c9a-81ff-be9cbd795ee6";
                    }}),
                }};
                prefix = "id";
                resourceRequirements = new ResourceRequirements() {{
                    cpuLimit = "itaque";
                    cpuRequest = "assumenda";
                    memoryLimit = "quaerat";
                    memoryRequest = "id";
                }};;
                schedule = new ConnectionSchedule(ConnectionScheduleTimeUnitEnum.MONTHS, 759537L);;
                scheduleData = new ConnectionScheduleData() {{
                    basicSchedule = new ConnectionScheduleDataBasicSchedule(ConnectionScheduleDataBasicScheduleTimeUnitEnum.WEEKS, 492922L);;
                    cron = new ConnectionScheduleDataCron("nemo", "neque");;
                }};;
                scheduleType = ConnectionScheduleTypeEnum.BASIC;
                sourceCatalogId = "cd9222c9-ff57-4491-aabf-a2e761f0ca4d";
                syncCatalog = new AirbyteCatalog(                new org.openapis.openapi.models.shared.AirbyteStreamAndConfiguration[]{{
                                    add(new AirbyteStreamAndConfiguration() {{
                                        config = new AirbyteStreamConfiguration(DestinationSyncModeEnum.APPEND, SyncModeEnum.FULL_REFRESH) {{
                                            aliasName = "quis";
                                            cursorField = new String[]{{
                                                add("vero"),
                                                add("reiciendis"),
                                            }};
                                            destinationSyncMode = DestinationSyncModeEnum.APPEND;
                                            fieldSelectionEnabled = false;
                                            primaryKey = new String[][]{{
                                                add(new String[]{{
                                                    add("inventore"),
                                                }}),
                                            }};
                                            selected = false;
                                            selectedFields = new org.openapis.openapi.models.shared.SelectedFieldInfo[]{{
                                                add(new SelectedFieldInfo() {{
                                                    fieldPath = new String[]{{
                                                        add("praesentium"),
                                                        add("perspiciatis"),
                                                    }};
                                                }}),
                                                add(new SelectedFieldInfo() {{
                                                    fieldPath = new String[]{{
                                                        add("hic"),
                                                        add("accusantium"),
                                                        add("minus"),
                                                    }};
                                                }}),
                                                add(new SelectedFieldInfo() {{
                                                    fieldPath = new String[]{{
                                                        add("accusantium"),
                                                    }};
                                                }}),
                                                add(new SelectedFieldInfo() {{
                                                    fieldPath = new String[]{{
                                                        add("quasi"),
                                                    }};
                                                }}),
                                            }};
                                            suggested = false;
                                            syncMode = SyncModeEnum.INCREMENTAL;
                                        }};
                                        stream = new AirbyteStream("consectetur") {{
                                            defaultCursorField = new String[]{{
                                                add("illum"),
                                                add("veniam"),
                                                add("exercitationem"),
                                                add("quod"),
                                            }};
                                            jsonSchema = new java.util.HashMap<String, Object>() {{
                                                put("alias", "nemo");
                                                put("molestias", "modi");
                                                put("similique", "quasi");
                                                put("laudantium", "ut");
                                            }};
                                            name = "Christian Hirthe";
                                            namespace = "voluptate";
                                            sourceDefinedCursor = false;
                                            sourceDefinedPrimaryKey = new String[][]{{
                                                add(new String[]{{
                                                    add("cumque"),
                                                    add("atque"),
                                                    add("explicabo"),
                                                    add("sit"),
                                                }}),
                                            }};
                                            supportedSyncModes = new org.openapis.openapi.models.shared.SyncModeEnum[]{{
                                                add(SyncModeEnum.FULL_REFRESH),
                                                add(SyncModeEnum.FULL_REFRESH),
                                                add(SyncModeEnum.INCREMENTAL),
                                                add(SyncModeEnum.FULL_REFRESH),
                                            }};
                                        }};
                                    }}),
                                    add(new AirbyteStreamAndConfiguration() {{
                                        config = new AirbyteStreamConfiguration(DestinationSyncModeEnum.OVERWRITE, SyncModeEnum.FULL_REFRESH) {{
                                            aliasName = "in";
                                            cursorField = new String[]{{
                                                add("distinctio"),
                                                add("blanditiis"),
                                                add("saepe"),
                                            }};
                                            destinationSyncMode = DestinationSyncModeEnum.APPEND;
                                            fieldSelectionEnabled = false;
                                            primaryKey = new String[][]{{
                                                add(new String[]{{
                                                    add("corrupti"),
                                                    add("quas"),
                                                    add("ullam"),
                                                    add("veritatis"),
                                                }}),
                                                add(new String[]{{
                                                    add("molestiae"),
                                                    add("officiis"),
                                                    add("labore"),
                                                }}),
                                                add(new String[]{{
                                                    add("accusamus"),
                                                    add("consequatur"),
                                                    add("ut"),
                                                    add("laborum"),
                                                }}),
                                                add(new String[]{{
                                                    add("sed"),
                                                    add("corrupti"),
                                                    add("maxime"),
                                                    add("ad"),
                                                }}),
                                            }};
                                            selected = false;
                                            selectedFields = new org.openapis.openapi.models.shared.SelectedFieldInfo[]{{
                                                add(new SelectedFieldInfo() {{
                                                    fieldPath = new String[]{{
                                                        add("pariatur"),
                                                        add("quidem"),
                                                        add("labore"),
                                                        add("commodi"),
                                                    }};
                                                }}),
                                                add(new SelectedFieldInfo() {{
                                                    fieldPath = new String[]{{
                                                        add("similique"),
                                                        add("quasi"),
                                                        add("quo"),
                                                    }};
                                                }}),
                                                add(new SelectedFieldInfo() {{
                                                    fieldPath = new String[]{{
                                                        add("illum"),
                                                        add("ea"),
                                                        add("facere"),
                                                        add("corrupti"),
                                                    }};
                                                }}),
                                                add(new SelectedFieldInfo() {{
                                                    fieldPath = new String[]{{
                                                        add("blanditiis"),
                                                    }};
                                                }}),
                                            }};
                                            suggested = false;
                                            syncMode = SyncModeEnum.INCREMENTAL;
                                        }};
                                        stream = new AirbyteStream("iste") {{
                                            defaultCursorField = new String[]{{
                                                add("nesciunt"),
                                            }};
                                            jsonSchema = new java.util.HashMap<String, Object>() {{
                                                put("error", "inventore");
                                            }};
                                            name = "Phyllis Mitchell";
                                            namespace = "aliquid";
                                            sourceDefinedCursor = false;
                                            sourceDefinedPrimaryKey = new String[][]{{
                                                add(new String[]{{
                                                    add("enim"),
                                                    add("cumque"),
                                                }}),
                                                add(new String[]{{
                                                    add("quibusdam"),
                                                }}),
                                            }};
                                            supportedSyncModes = new org.openapis.openapi.models.shared.SyncModeEnum[]{{
                                                add(SyncModeEnum.FULL_REFRESH),
                                                add(SyncModeEnum.INCREMENTAL),
                                                add(SyncModeEnum.FULL_REFRESH),
                                            }};
                                        }};
                                    }}),
                                }});;
            }};            

            WebBackendCreateConnectionResponse res = sdk.webBackend.webBackendCreateConnection(req);

            if (res.webBackendConnectionRead != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## webBackendGetConnection

Get a connection

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebBackendGetConnectionResponse;
import org.openapis.openapi.models.shared.WebBackendConnectionRequestBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.WebBackendConnectionRequestBody req = new WebBackendConnectionRequestBody("042f569b-7aff-40ea-a216-cbe071bc163e") {{
                withRefreshedCatalog = false;
            }};            

            WebBackendGetConnectionResponse res = sdk.webBackend.webBackendGetConnection(req);

            if (res.webBackendConnectionRead != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## webBackendGetWorkspaceState

Returns the current state of a workspace

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebBackendGetWorkspaceStateResponse;
import org.openapis.openapi.models.shared.WebBackendWorkspaceState;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.WebBackendWorkspaceState req = new WebBackendWorkspaceState("279a3b08-4da9-4925-bd04-f40847a742d8");            

            WebBackendGetWorkspaceStateResponse res = sdk.webBackend.webBackendGetWorkspaceState(req);

            if (res.webBackendWorkspaceStateResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## webBackendListConnectionsForWorkspace

Returns all non-deleted connections for a workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebBackendListConnectionsForWorkspaceResponse;
import org.openapis.openapi.models.shared.WebBackendConnectionListRequestBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.WebBackendConnectionListRequestBody req = new WebBackendConnectionListRequestBody("4496cbde-ecf6-4b99-bc63-562ebfdf55c2") {{
                destinationId = new String[]{{
                    add("4c060b06-a128-4776-8eef-6d0c6d6ed9c7"),
                    add("3dd63457-1509-4a8e-870d-3c5a1f9c242c"),
                    add("7b66a1f3-0c73-4df5-b671-9890f42a4bb4"),
                }};
                sourceId = new String[]{{
                    add("8d85b260-591d-4745-a3c2-059c9c3f567e"),
                }};
            }};            

            WebBackendListConnectionsForWorkspaceResponse res = sdk.webBackend.webBackendListConnectionsForWorkspace(req);

            if (res.webBackendConnectionReadList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## webBackendListGeographies

Returns all available geographies in which a data sync can run.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebBackendListGeographiesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebBackendListGeographiesResponse res = sdk.webBackend.webBackendListGeographies();

            if (res.webBackendGeographiesListResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## webBackendUpdateConnection

Apply a patch-style update to a connection. Only fields present on the update request body will be updated.
Any operations that lack an ID will be created. Then, the newly created operationId will be applied to the
connection along with the rest of the operationIds in the request body.
Apply a patch-style update to a connection. Only fields present on the update request body will be updated.
Note that if a catalog is present in the request body, the connection's entire catalog will be replaced
with the catalog from the request. This means that to modify a single stream, the entire new catalog
containing the updated stream needs to be sent.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebBackendUpdateConnectionResponse;
import org.openapis.openapi.models.shared.AirbyteCatalog;
import org.openapis.openapi.models.shared.AirbyteStream;
import org.openapis.openapi.models.shared.AirbyteStreamAndConfiguration;
import org.openapis.openapi.models.shared.AirbyteStreamConfiguration;
import org.openapis.openapi.models.shared.ConnectionSchedule;
import org.openapis.openapi.models.shared.ConnectionScheduleData;
import org.openapis.openapi.models.shared.ConnectionScheduleDataBasicSchedule;
import org.openapis.openapi.models.shared.ConnectionScheduleDataBasicScheduleTimeUnitEnum;
import org.openapis.openapi.models.shared.ConnectionScheduleDataCron;
import org.openapis.openapi.models.shared.ConnectionScheduleTimeUnitEnum;
import org.openapis.openapi.models.shared.ConnectionScheduleTypeEnum;
import org.openapis.openapi.models.shared.ConnectionStatusEnum;
import org.openapis.openapi.models.shared.DestinationSyncModeEnum;
import org.openapis.openapi.models.shared.GeographyEnum;
import org.openapis.openapi.models.shared.NamespaceDefinitionTypeEnum;
import org.openapis.openapi.models.shared.NonBreakingChangesPreferenceEnum;
import org.openapis.openapi.models.shared.OperatorConfiguration;
import org.openapis.openapi.models.shared.OperatorDbt;
import org.openapis.openapi.models.shared.OperatorNormalization;
import org.openapis.openapi.models.shared.OperatorNormalizationOptionEnum;
import org.openapis.openapi.models.shared.OperatorTypeEnum;
import org.openapis.openapi.models.shared.OperatorWebhook;
import org.openapis.openapi.models.shared.OperatorWebhookDbtCloud;
import org.openapis.openapi.models.shared.OperatorWebhookWebhookTypeEnum;
import org.openapis.openapi.models.shared.ResourceRequirements;
import org.openapis.openapi.models.shared.SelectedFieldInfo;
import org.openapis.openapi.models.shared.SyncModeEnum;
import org.openapis.openapi.models.shared.WebBackendConnectionUpdate;
import org.openapis.openapi.models.shared.WebBackendOperationCreateOrUpdate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.WebBackendConnectionUpdate req = new WebBackendConnectionUpdate("0e252765-b1d6-42fc-9ace-1f01216ce223") {{
                geography = GeographyEnum.US;
                name = "Casey Weimann";
                namespaceDefinition = NamespaceDefinitionTypeEnum.CUSTOMFORMAT;
                namespaceFormat = "${SOURCE_NAMESPACE}";
                nonBreakingChangesPreference = NonBreakingChangesPreferenceEnum.DISABLE;
                notifySchemaChanges = false;
                operations = new org.openapis.openapi.models.shared.WebBackendOperationCreateOrUpdate[]{{
                    add(new WebBackendOperationCreateOrUpdate("officiis",                 new OperatorConfiguration(OperatorTypeEnum.NORMALIZATION) {{
                                        dbt = new OperatorDbt("quas") {{
                                            dbtArguments = "aut";
                                            dockerImage = "autem";
                                            gitRepoBranch = "dolorem";
                                        }};;
                                        normalization = new OperatorNormalization() {{
                                            option = OperatorNormalizationOptionEnum.BASIC;
                                        }};;
                                        webhook = new OperatorWebhook() {{
                                            dbtCloud = new OperatorWebhookDbtCloud(131249L, 699989L);;
                                            executionBody = "iste";
                                            executionUrl = "occaecati";
                                            webhookConfigId = "54b6fa22-0636-4982-8553-cb10006bef49";
                                            webhookType = OperatorWebhookWebhookTypeEnum.DBT_CLOUD;
                                        }};;
                                    }};, "21ec2053-b749-4366-ac8e-e0f2bf19588d") {{
                        name = "Dennis Moen";
                        operationId = "59f439e3-9266-4cbd-95f7-aa2b24113695";
                        operatorConfiguration = new OperatorConfiguration(OperatorTypeEnum.DBT) {{
                            dbt = new OperatorDbt("aliquid") {{
                                dbtArguments = "temporibus";
                                dockerImage = "et";
                                gitRepoBranch = "debitis";
                                gitRepoUrl = "nisi";
                            }};
                            normalization = new OperatorNormalization() {{
                                option = OperatorNormalizationOptionEnum.BASIC;
                            }};
                            operatorType = OperatorTypeEnum.DBT;
                            webhook = new OperatorWebhook() {{
                                dbtCloud = new OperatorWebhookDbtCloud(809200L, 757009L) {{
                                    accountId = 558583L;
                                    jobId = 996338L;
                                }};
                                executionBody = "quaerat";
                                executionUrl = "veniam";
                                webhookConfigId = "96217c29-7767-4633-8254-038bfb5971e9";
                                webhookType = OperatorWebhookWebhookTypeEnum.DBT_CLOUD;
                            }};
                        }};
                        workspaceId = "19055738-9ced-4bac-bfda-39594d66bc2a";
                    }}),
                }};
                prefix = "eius";
                resourceRequirements = new ResourceRequirements() {{
                    cpuLimit = "doloremque";
                    cpuRequest = "vero";
                    memoryLimit = "aut";
                    memoryRequest = "sequi";
                }};;
                schedule = new ConnectionSchedule(ConnectionScheduleTimeUnitEnum.MONTHS, 204466L);;
                scheduleData = new ConnectionScheduleData() {{
                    basicSchedule = new ConnectionScheduleDataBasicSchedule(ConnectionScheduleDataBasicScheduleTimeUnitEnum.MONTHS, 904968L);;
                    cron = new ConnectionScheduleDataCron("nobis", "est");;
                }};;
                scheduleType = ConnectionScheduleTypeEnum.MANUAL;
                skipReset = false;
                sourceCatalogId = "97be3e90-bc40-4df8-a8fd-52405cb331d4";
                status = ConnectionStatusEnum.INACTIVE;
                syncCatalog = new AirbyteCatalog(                new org.openapis.openapi.models.shared.AirbyteStreamAndConfiguration[]{{
                                    add(new AirbyteStreamAndConfiguration() {{
                                        config = new AirbyteStreamConfiguration(DestinationSyncModeEnum.APPEND_DEDUP, SyncModeEnum.INCREMENTAL) {{
                                            aliasName = "reiciendis";
                                            cursorField = new String[]{{
                                                add("doloribus"),
                                                add("et"),
                                            }};
                                            destinationSyncMode = DestinationSyncModeEnum.APPEND;
                                            fieldSelectionEnabled = false;
                                            primaryKey = new String[][]{{
                                                add(new String[]{{
                                                    add("quidem"),
                                                    add("aperiam"),
                                                    add("saepe"),
                                                    add("voluptatem"),
                                                }}),
                                                add(new String[]{{
                                                    add("hic"),
                                                    add("beatae"),
                                                    add("delectus"),
                                                }}),
                                            }};
                                            selected = false;
                                            selectedFields = new org.openapis.openapi.models.shared.SelectedFieldInfo[]{{
                                                add(new SelectedFieldInfo() {{
                                                    fieldPath = new String[]{{
                                                        add("inventore"),
                                                    }};
                                                }}),
                                                add(new SelectedFieldInfo() {{
                                                    fieldPath = new String[]{{
                                                        add("sint"),
                                                        add("dignissimos"),
                                                    }};
                                                }}),
                                                add(new SelectedFieldInfo() {{
                                                    fieldPath = new String[]{{
                                                        add("nulla"),
                                                        add("consequatur"),
                                                        add("similique"),
                                                    }};
                                                }}),
                                            }};
                                            suggested = false;
                                            syncMode = SyncModeEnum.INCREMENTAL;
                                        }};
                                        stream = new AirbyteStream("provident") {{
                                            defaultCursorField = new String[]{{
                                                add("voluptate"),
                                                add("mollitia"),
                                            }};
                                            jsonSchema = new java.util.HashMap<String, Object>() {{
                                                put("tempore", "voluptate");
                                                put("cum", "esse");
                                                put("alias", "consequuntur");
                                                put("architecto", "est");
                                            }};
                                            name = "Anne Beier";
                                            namespace = "rerum";
                                            sourceDefinedCursor = false;
                                            sourceDefinedPrimaryKey = new String[][]{{
                                                add(new String[]{{
                                                    add("repudiandae"),
                                                    add("unde"),
                                                }}),
                                                add(new String[]{{
                                                    add("voluptatibus"),
                                                    add("facilis"),
                                                    add("doloremque"),
                                                }}),
                                            }};
                                            supportedSyncModes = new org.openapis.openapi.models.shared.SyncModeEnum[]{{
                                                add(SyncModeEnum.FULL_REFRESH),
                                                add(SyncModeEnum.FULL_REFRESH),
                                                add(SyncModeEnum.INCREMENTAL),
                                                add(SyncModeEnum.FULL_REFRESH),
                                            }};
                                        }};
                                    }}),
                                }});;
            }};            

            WebBackendUpdateConnectionResponse res = sdk.webBackend.webBackendUpdateConnection(req);

            if (res.webBackendConnectionRead != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
