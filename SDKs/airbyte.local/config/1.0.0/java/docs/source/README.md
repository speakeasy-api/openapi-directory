# source

## Overview

Source related resources.

### Available Operations

* [checkConnectionToSource](#checkconnectiontosource) - Check connection to the source
* [checkConnectionToSourceForUpdate](#checkconnectiontosourceforupdate) - Check connection for a proposed update to a source
* [cloneSource](#clonesource) - Clone source
* [createSource](#createsource) - Create a source
* [deleteSource](#deletesource) - Delete a source
* [discoverSchemaForSource](#discoverschemaforsource) - Discover the schema catalog of the source
* [getMostRecentSourceActorCatalog](#getmostrecentsourceactorcatalog) - Get most recent ActorCatalog for source
* [getSource](#getsource) - Get source
* [listSourcesForWorkspace](#listsourcesforworkspace) - List sources for workspace
* [searchSources](#searchsources) - Search sources
* [updateSource](#updatesource) - Update a source
* [writeDiscoverCatalogResult](#writediscovercatalogresult) - Should only called from worker, to write result from discover activity back to DB.

## checkConnectionToSource

Check connection to the source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CheckConnectionToSourceResponse;
import org.openapis.openapi.models.shared.SourceIdRequestBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SourceIdRequestBody req = new SourceIdRequestBody("9af4d357-24cd-4b0f-8d28-1187d56844ed");            

            CheckConnectionToSourceResponse res = sdk.source.checkConnectionToSource(req);

            if (res.checkConnectionRead != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## checkConnectionToSourceForUpdate

Check connection for a proposed update to a source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CheckConnectionToSourceForUpdateResponse;
import org.openapis.openapi.models.shared.SourceUpdate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SourceUpdate req = new SourceUpdate("repudiandae", "quibusdam", "85a9065e-628b-4dfc-a032-b6c879923b7e");            

            CheckConnectionToSourceForUpdateResponse res = sdk.source.checkConnectionToSourceForUpdate(req);

            if (res.checkConnectionRead != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloneSource

Clone source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloneSourceResponse;
import org.openapis.openapi.models.shared.SourceCloneConfiguration;
import org.openapis.openapi.models.shared.SourceCloneRequestBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SourceCloneRequestBody req = new SourceCloneRequestBody("13584f7a-e12c-4689-9f82-ce1157172305") {{
                sourceConfiguration = new SourceCloneConfiguration() {{
                    connectionConfiguration = "amet";
                    name = "Allison Streich";
                }};;
            }};            

            CloneSourceResponse res = sdk.source.cloneSource(req);

            if (res.sourceRead != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSource

Create a source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSourceResponse;
import org.openapis.openapi.models.shared.SourceCreate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SourceCreate req = new SourceCreate("fuga", "totam", "9df975e3-5668-4609-ae9c-3ddc5f111dea", "1026d541-a4d1-490f-ab21-780bccc0dbbd");            

            CreateSourceResponse res = sdk.source.createSource(req);

            if (res.sourceRead != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSource

Delete a source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSourceResponse;
import org.openapis.openapi.models.shared.SourceIdRequestBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SourceIdRequestBody req = new SourceIdRequestBody("db484708-fb4e-4391-a6bc-158c4c4e5459");            

            DeleteSourceResponse res = sdk.source.deleteSource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## discoverSchemaForSource

Discover the schema catalog of the source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DiscoverSchemaForSourceResponse;
import org.openapis.openapi.models.shared.SourceDiscoverSchemaRequestBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SourceDiscoverSchemaRequestBody req = new SourceDiscoverSchemaRequestBody("9ea34226-0e9b-4200-8e78-a1bd8fb7a0a1") {{
                connectionId = "16ce723d-4097-4fa3-8e9a-f725b2912203";
                disableCache = false;
                notifySchemaChange = false;
            }};            

            DiscoverSchemaForSourceResponse res = sdk.source.discoverSchemaForSource(req);

            if (res.sourceDiscoverSchemaRead != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMostRecentSourceActorCatalog

Get most recent ActorCatalog for source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMostRecentSourceActorCatalogResponse;
import org.openapis.openapi.models.shared.SourceIdRequestBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SourceIdRequestBody req = new SourceIdRequestBody("0d83f5ae-b779-49d2-ae8c-1f8493825fdc");            

            GetMostRecentSourceActorCatalogResponse res = sdk.source.getMostRecentSourceActorCatalog(req);

            if (res.actorCatalogWithUpdatedAt != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSource

Get source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSourceResponse;
import org.openapis.openapi.models.shared.SourceIdRequestBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SourceIdRequestBody req = new SourceIdRequestBody("42c876c2-c2df-4b4c-bc1c-76230f841fb1");            

            GetSourceResponse res = sdk.source.getSource(req);

            if (res.sourceRead != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSourcesForWorkspace

List sources for workspace. Does not return deleted sources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSourcesForWorkspaceResponse;
import org.openapis.openapi.models.shared.WorkspaceIdRequestBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.WorkspaceIdRequestBody req = new WorkspaceIdRequestBody("bd23fdb1-4db6-4be5-a685-998e22ae20da");            

            ListSourcesForWorkspaceResponse res = sdk.source.listSourcesForWorkspace(req);

            if (res.sourceReadList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchSources

Search sources

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchSourcesResponse;
import org.openapis.openapi.models.shared.SourceSearch;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SourceSearch req = new SourceSearch() {{
                connectionConfiguration = "quae";
                name = "Josefina Schiller";
                sourceDefinitionId = "271a289c-57e8-454e-9043-9d2224656946";
                sourceId = "2407084f-7ab3-47ce-b022-25194db55410";
                sourceName = "similique";
                workspaceId = "dc669af9-0a26-4c7c-9c98-1f068981d6bb";
            }};            

            SearchSourcesResponse res = sdk.source.searchSources(req);

            if (res.sourceReadList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSource

Update a source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSourceResponse;
import org.openapis.openapi.models.shared.SourceUpdate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SourceUpdate req = new SourceUpdate("amet", "adipisci", "cfaa348c-31bf-4407-ae4f-cf0c42b78f15");            

            UpdateSourceResponse res = sdk.source.updateSource(req);

            if (res.sourceRead != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## writeDiscoverCatalogResult

Should only called from worker, to write result from discover activity back to DB.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WriteDiscoverCatalogResultResponse;
import org.openapis.openapi.models.shared.AirbyteCatalog;
import org.openapis.openapi.models.shared.AirbyteStream;
import org.openapis.openapi.models.shared.AirbyteStreamAndConfiguration;
import org.openapis.openapi.models.shared.AirbyteStreamConfiguration;
import org.openapis.openapi.models.shared.DestinationSyncModeEnum;
import org.openapis.openapi.models.shared.SelectedFieldInfo;
import org.openapis.openapi.models.shared.SourceDiscoverSchemaWriteRequestBody;
import org.openapis.openapi.models.shared.SyncModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SourceDiscoverSchemaWriteRequestBody req = new SourceDiscoverSchemaWriteRequestBody(                new AirbyteCatalog(                new org.openapis.openapi.models.shared.AirbyteStreamAndConfiguration[]{{
                                                add(new AirbyteStreamAndConfiguration() {{
                                                    config = new AirbyteStreamConfiguration(DestinationSyncModeEnum.APPEND, SyncModeEnum.INCREMENTAL) {{
                                                        aliasName = "consequuntur";
                                                        cursorField = new String[]{{
                                                            add("ratione"),
                                                            add("excepturi"),
                                                        }};
                                                        destinationSyncMode = DestinationSyncModeEnum.OVERWRITE;
                                                        fieldSelectionEnabled = false;
                                                        primaryKey = new String[][]{{
                                                            add(new String[]{{
                                                                add("quibusdam"),
                                                            }}),
                                                            add(new String[]{{
                                                                add("ducimus"),
                                                                add("nisi"),
                                                                add("nisi"),
                                                                add("dolor"),
                                                            }}),
                                                            add(new String[]{{
                                                                add("dolore"),
                                                            }}),
                                                        }};
                                                        selected = false;
                                                        selectedFields = new org.openapis.openapi.models.shared.SelectedFieldInfo[]{{
                                                            add(new SelectedFieldInfo() {{
                                                                fieldPath = new String[]{{
                                                                    add("expedita"),
                                                                    add("accusantium"),
                                                                    add("ea"),
                                                                    add("impedit"),
                                                                }};
                                                            }}),
                                                            add(new SelectedFieldInfo() {{
                                                                fieldPath = new String[]{{
                                                                    add("optio"),
                                                                    add("est"),
                                                                    add("inventore"),
                                                                }};
                                                            }}),
                                                            add(new SelectedFieldInfo() {{
                                                                fieldPath = new String[]{{
                                                                    add("repellendus"),
                                                                }};
                                                            }}),
                                                            add(new SelectedFieldInfo() {{
                                                                fieldPath = new String[]{{
                                                                    add("dolores"),
                                                                }};
                                                            }}),
                                                        }};
                                                        suggested = false;
                                                        syncMode = SyncModeEnum.FULL_REFRESH;
                                                    }};
                                                    stream = new AirbyteStream("dolor") {{
                                                        defaultCursorField = new String[]{{
                                                            add("odio"),
                                                        }};
                                                        jsonSchema = new java.util.HashMap<String, Object>() {{
                                                            put("quidem", "deleniti");
                                                        }};
                                                        name = "Vernon Kuhn";
                                                        namespace = "at";
                                                        sourceDefinedCursor = false;
                                                        sourceDefinedPrimaryKey = new String[][]{{
                                                            add(new String[]{{
                                                                add("sint"),
                                                                add("exercitationem"),
                                                                add("cum"),
                                                            }}),
                                                            add(new String[]{{
                                                                add("facilis"),
                                                                add("placeat"),
                                                                add("reiciendis"),
                                                            }}),
                                                            add(new String[]{{
                                                                add("dolore"),
                                                            }}),
                                                            add(new String[]{{
                                                                add("facilis"),
                                                                add("cupiditate"),
                                                                add("nemo"),
                                                                add("natus"),
                                                            }}),
                                                        }};
                                                        supportedSyncModes = new org.openapis.openapi.models.shared.SyncModeEnum[]{{
                                                            add(SyncModeEnum.INCREMENTAL),
                                                            add(SyncModeEnum.FULL_REFRESH),
                                                        }};
                                                    }};
                                                }}),
                                                add(new AirbyteStreamAndConfiguration() {{
                                                    config = new AirbyteStreamConfiguration(DestinationSyncModeEnum.OVERWRITE, SyncModeEnum.INCREMENTAL) {{
                                                        aliasName = "nostrum";
                                                        cursorField = new String[]{{
                                                            add("tenetur"),
                                                        }};
                                                        destinationSyncMode = DestinationSyncModeEnum.OVERWRITE;
                                                        fieldSelectionEnabled = false;
                                                        primaryKey = new String[][]{{
                                                            add(new String[]{{
                                                                add("velit"),
                                                                add("adipisci"),
                                                            }}),
                                                            add(new String[]{{
                                                                add("occaecati"),
                                                                add("numquam"),
                                                                add("fugiat"),
                                                            }}),
                                                        }};
                                                        selected = false;
                                                        selectedFields = new org.openapis.openapi.models.shared.SelectedFieldInfo[]{{
                                                            add(new SelectedFieldInfo() {{
                                                                fieldPath = new String[]{{
                                                                    add("repellendus"),
                                                                    add("saepe"),
                                                                    add("amet"),
                                                                }};
                                                            }}),
                                                            add(new SelectedFieldInfo() {{
                                                                fieldPath = new String[]{{
                                                                    add("vel"),
                                                                    add("necessitatibus"),
                                                                    add("iste"),
                                                                }};
                                                            }}),
                                                        }};
                                                        suggested = false;
                                                        syncMode = SyncModeEnum.FULL_REFRESH;
                                                    }};
                                                    stream = new AirbyteStream("est") {{
                                                        defaultCursorField = new String[]{{
                                                            add("ullam"),
                                                            add("dolorum"),
                                                            add("soluta"),
                                                            add("cum"),
                                                        }};
                                                        jsonSchema = new java.util.HashMap<String, Object>() {{
                                                            put("delectus", "commodi");
                                                            put("commodi", "fugit");
                                                        }};
                                                        name = "Marion Baumbach";
                                                        namespace = "praesentium";
                                                        sourceDefinedCursor = false;
                                                        sourceDefinedPrimaryKey = new String[][]{{
                                                            add(new String[]{{
                                                                add("qui"),
                                                                add("deserunt"),
                                                                add("eligendi"),
                                                            }}),
                                                        }};
                                                        supportedSyncModes = new org.openapis.openapi.models.shared.SyncModeEnum[]{{
                                                            add(SyncModeEnum.INCREMENTAL),
                                                            add(SyncModeEnum.FULL_REFRESH),
                                                        }};
                                                    }};
                                                }}),
                                            }});) {{
                configurationHash = "reiciendis";
                connectorVersion = "possimus";
                sourceId = "2315bba6-5016-44e0-af5b-f6ae591bc8bd";
            }};            

            WriteDiscoverCatalogResultResponse res = sdk.source.writeDiscoverCatalogResult(req);

            if (res.discoverCatalogResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
