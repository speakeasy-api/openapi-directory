# internal

### Available Operations

* [createOrUpdateState](#createorupdatestate) - Create or update the state for a connection.
* [getAttemptNormalizationStatusesForJob](#getattemptnormalizationstatusesforjob) - Get normalization status to determine if we can bypass normalization phase
* [saveStats](#savestats) - For worker to set sync stats of a running attempt.
* [saveSyncConfig](#savesyncconfig) - For worker to save the AttemptSyncConfig for an attempt.
* [setWorkflowInAttempt](#setworkflowinattempt) - For worker to register the workflow id in attempt.
* [writeDiscoverCatalogResult](#writediscovercatalogresult) - Should only called from worker, to write result from discover activity back to DB.

## createOrUpdateState

Create or update the state for a connection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOrUpdateStateResponse;
import org.openapis.openapi.models.shared.ConnectionState;
import org.openapis.openapi.models.shared.ConnectionStateCreateOrUpdate;
import org.openapis.openapi.models.shared.ConnectionStateTypeEnum;
import org.openapis.openapi.models.shared.GlobalState;
import org.openapis.openapi.models.shared.StreamDescriptor;
import org.openapis.openapi.models.shared.StreamState;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ConnectionStateCreateOrUpdate req = new ConnectionStateCreateOrUpdate("78adc1ac-600d-4ec0-81ac-802e2ec09ff8",                 new ConnectionState("f0f816ff-3477-4c13-a902-c14125b0960a", ConnectionStateTypeEnum.STREAM) {{
                                globalState = new GlobalState(                new org.openapis.openapi.models.shared.StreamState[]{{
                                                    add(new StreamState(                new StreamDescriptor("cupiditate") {{
                                                                        namespace = "aliquam";
                                                                    }};) {{
                                                        streamDescriptor = new StreamDescriptor("magni") {{
                                                            name = "Miss Peter Hermiston";
                                                            namespace = "quam";
                                                        }};
                                                        streamState = new java.util.HashMap<String, Object>() {{
                                                            put("delectus", "omnis");
                                                            put("sed", "nesciunt");
                                                            put("maxime", "quis");
                                                        }};
                                                    }}),
                                                    add(new StreamState(                new StreamDescriptor("quas") {{
                                                                        namespace = "molestiae";
                                                                    }};) {{
                                                        streamDescriptor = new StreamDescriptor("nemo") {{
                                                            name = "Elijah Langworth";
                                                            namespace = "amet";
                                                        }};
                                                        streamState = new java.util.HashMap<String, Object>() {{
                                                            put("quisquam", "tenetur");
                                                        }};
                                                    }}),
                                                }}) {{
                                    sharedState = new java.util.HashMap<String, Object>() {{
                                        put("asperiores", "a");
                                        put("nobis", "perspiciatis");
                                    }};
                                }};;
                                state = new java.util.HashMap<String, Object>() {{
                                    put("dicta", "minus");
                                }};
                                streamState = new org.openapis.openapi.models.shared.StreamState[]{{
                                    add(new StreamState(                new StreamDescriptor("blanditiis") {{
                                                        namespace = "sint";
                                                    }};) {{
                                        streamDescriptor = new StreamDescriptor("fugit") {{
                                            name = "Lowell Rippin";
                                            namespace = "voluptates";
                                        }};
                                        streamState = new java.util.HashMap<String, Object>() {{
                                            put("sequi", "eligendi");
                                            put("asperiores", "esse");
                                        }};
                                    }}),
                                    add(new StreamState(                new StreamDescriptor("saepe") {{
                                                        namespace = "eum";
                                                    }};) {{
                                        streamDescriptor = new StreamDescriptor("deserunt") {{
                                            name = "Tommie Okuneva";
                                            namespace = "nulla";
                                        }};
                                        streamState = new java.util.HashMap<String, Object>() {{
                                            put("velit", "officiis");
                                            put("enim", "officia");
                                        }};
                                    }}),
                                }};
                            }};);            

            CreateOrUpdateStateResponse res = sdk.internal.createOrUpdateState(req);

            if (res.connectionState != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAttemptNormalizationStatusesForJob

Get normalization status to determine if we can bypass normalization phase

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAttemptNormalizationStatusesForJobResponse;
import org.openapis.openapi.models.shared.JobIdRequestBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.JobIdRequestBody req = new JobIdRequestBody(922094L);            

            GetAttemptNormalizationStatusesForJobResponse res = sdk.internal.getAttemptNormalizationStatusesForJob(req);

            if (res.attemptNormalizationStatusReadList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## saveStats

For worker to set sync stats of a running attempt.

### Example Usage

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

            org.openapis.openapi.models.shared.SaveStatsRequestBody req = new SaveStatsRequestBody(35742, 637840L,                 new AttemptStats() {{
                                bytesEmitted = 770128L;
                                estimatedBytes = 97896L;
                                estimatedRecords = 502106L;
                                recordsCommitted = 260911L;
                                recordsEmitted = 786189L;
                                stateMessagesEmitted = 177929L;
                            }};) {{
                streamStats = new org.openapis.openapi.models.shared.AttemptStreamStats[]{{
                    add(new AttemptStreamStats(                new AttemptStats() {{
                                        bytesEmitted = 227870L;
                                        estimatedBytes = 473326L;
                                        estimatedRecords = 227156L;
                                        recordsCommitted = 675126L;
                                        recordsEmitted = 266946L;
                                        stateMessagesEmitted = 21358L;
                                    }};, "necessitatibus") {{
                        stats = new AttemptStats() {{
                            bytesEmitted = 620054L;
                            estimatedBytes = 793568L;
                            estimatedRecords = 154389L;
                            recordsCommitted = 300651L;
                            recordsEmitted = 440847L;
                            stateMessagesEmitted = 800799L;
                        }};
                        streamName = "quos";
                        streamNamespace = "corrupti";
                    }}),
                    add(new AttemptStreamStats(                new AttemptStats() {{
                                        bytesEmitted = 330596L;
                                        estimatedBytes = 373106L;
                                        estimatedRecords = 51053L;
                                        recordsCommitted = 350387L;
                                        recordsEmitted = 331269L;
                                        stateMessagesEmitted = 469994L;
                                    }};, "ad") {{
                        stats = new AttemptStats() {{
                            bytesEmitted = 102316L;
                            estimatedBytes = 564627L;
                            estimatedRecords = 292177L;
                            recordsCommitted = 125811L;
                            recordsEmitted = 982991L;
                            stateMessagesEmitted = 205011L;
                        }};
                        streamName = "odit";
                        streamNamespace = "earum";
                    }}),
                    add(new AttemptStreamStats(                new AttemptStats() {{
                                        bytesEmitted = 694728L;
                                        estimatedBytes = 831031L;
                                        estimatedRecords = 17768L;
                                        recordsCommitted = 660536L;
                                        recordsEmitted = 958146L;
                                        stateMessagesEmitted = 152364L;
                                    }};, "possimus") {{
                        stats = new AttemptStats() {{
                            bytesEmitted = 394161L;
                            estimatedBytes = 946808L;
                            estimatedRecords = 338281L;
                            recordsCommitted = 845154L;
                            recordsEmitted = 366480L;
                            stateMessagesEmitted = 382764L;
                        }};
                        streamName = "pariatur";
                        streamNamespace = "sit";
                    }}),
                }};
            }};            

            SaveStatsResponse res = sdk.internal.saveStats(req);

            if (res.internalOperationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## saveSyncConfig

For worker to save the AttemptSyncConfig for an attempt.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SaveSyncConfigResponse;
import org.openapis.openapi.models.shared.AttemptSyncConfig;
import org.openapis.openapi.models.shared.ConnectionState;
import org.openapis.openapi.models.shared.ConnectionStateTypeEnum;
import org.openapis.openapi.models.shared.GlobalState;
import org.openapis.openapi.models.shared.SaveAttemptSyncConfigRequestBody;
import org.openapis.openapi.models.shared.StreamDescriptor;
import org.openapis.openapi.models.shared.StreamState;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SaveAttemptSyncConfigRequestBody req = new SaveAttemptSyncConfigRequestBody(996072, 921060L,                 new AttemptSyncConfig("architecto", "adipisci") {{
                                state = new ConnectionState("db4f62cb-a3f8-4941-aebc-0b80a6924d3b", ConnectionStateTypeEnum.GLOBAL) {{
                                    globalState = new GlobalState(                new org.openapis.openapi.models.shared.StreamState[]{{
                                                        add(new StreamState(                new StreamDescriptor("at") {{
                                                                            namespace = "possimus";
                                                                        }};) {{
                                                            streamDescriptor = new StreamDescriptor("voluptatum") {{
                                                                name = "Van Schiller";
                                                                namespace = "asperiores";
                                                            }};
                                                            streamState = new java.util.HashMap<String, Object>() {{
                                                                put("corporis", "accusantium");
                                                                put("illo", "aut");
                                                                put("doloribus", "nostrum");
                                                            }};
                                                        }}),
                                                        add(new StreamState(                new StreamDescriptor("ad") {{
                                                                            namespace = "aliquam";
                                                                        }};) {{
                                                            streamDescriptor = new StreamDescriptor("quos") {{
                                                                name = "Meredith Kassulke";
                                                                namespace = "quae";
                                                            }};
                                                            streamState = new java.util.HashMap<String, Object>() {{
                                                                put("non", "voluptates");
                                                            }};
                                                        }}),
                                                        add(new StreamState(                new StreamDescriptor("cumque") {{
                                                                            namespace = "rem";
                                                                        }};) {{
                                                            streamDescriptor = new StreamDescriptor("est") {{
                                                                name = "Clifton Crooks III";
                                                                namespace = "laudantium";
                                                            }};
                                                            streamState = new java.util.HashMap<String, Object>() {{
                                                                put("aliquid", "consectetur");
                                                            }};
                                                        }}),
                                                        add(new StreamState(                new StreamDescriptor("rerum") {{
                                                                            namespace = "veritatis";
                                                                        }};) {{
                                                            streamDescriptor = new StreamDescriptor("numquam") {{
                                                                name = "Allan Ferry";
                                                                namespace = "blanditiis";
                                                            }};
                                                            streamState = new java.util.HashMap<String, Object>() {{
                                                                put("voluptatum", "sit");
                                                            }};
                                                        }}),
                                                    }}) {{
                                        sharedState = new java.util.HashMap<String, Object>() {{
                                            put("autem", "quidem");
                                            put("totam", "porro");
                                            put("deserunt", "magni");
                                            put("nihil", "voluptas");
                                        }};
                                    }};;
                                    state = new java.util.HashMap<String, Object>() {{
                                        put("commodi", "alias");
                                        put("fuga", "aut");
                                        put("dolore", "maxime");
                                    }};
                                    streamState = new org.openapis.openapi.models.shared.StreamState[]{{
                                        add(new StreamState(                new StreamDescriptor("libero") {{
                                                            namespace = "ipsam";
                                                        }};) {{
                                            streamDescriptor = new StreamDescriptor("unde") {{
                                                name = "Derrick Roob";
                                                namespace = "occaecati";
                                            }};
                                            streamState = new java.util.HashMap<String, Object>() {{
                                                put("nihil", "inventore");
                                            }};
                                        }}),
                                        add(new StreamState(                new StreamDescriptor("pariatur") {{
                                                            namespace = "sapiente";
                                                        }};) {{
                                            streamDescriptor = new StreamDescriptor("beatae") {{
                                                name = "Blanca Carroll";
                                                namespace = "facilis";
                                            }};
                                            streamState = new java.util.HashMap<String, Object>() {{
                                                put("delectus", "labore");
                                                put("expedita", "corrupti");
                                                put("rem", "atque");
                                                put("officiis", "cum");
                                            }};
                                        }}),
                                    }};
                                }};;
                            }};);            

            SaveSyncConfigResponse res = sdk.internal.saveSyncConfig(req);

            if (res.internalOperationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setWorkflowInAttempt

For worker to register the workflow id in attempt.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetWorkflowInAttemptResponse;
import org.openapis.openapi.models.shared.SetWorkflowInAttemptRequestBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SetWorkflowInAttemptRequestBody req = new SetWorkflowInAttemptRequestBody(775427, 277990L, "quod") {{
                processingTaskQueue = "minus";
            }};            

            SetWorkflowInAttemptResponse res = sdk.internal.setWorkflowInAttempt(req);

            if (res.internalOperationResult != null) {
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
                                                    config = new AirbyteStreamConfiguration(DestinationSyncModeEnum.OVERWRITE, SyncModeEnum.FULL_REFRESH) {{
                                                        aliasName = "id";
                                                        cursorField = new String[]{{
                                                            add("occaecati"),
                                                            add("libero"),
                                                            add("quo"),
                                                        }};
                                                        destinationSyncMode = DestinationSyncModeEnum.OVERWRITE;
                                                        fieldSelectionEnabled = false;
                                                        primaryKey = new String[][]{{
                                                            add(new String[]{{
                                                                add("accusantium"),
                                                                add("soluta"),
                                                                add("fugit"),
                                                                add("pariatur"),
                                                            }}),
                                                            add(new String[]{{
                                                                add("recusandae"),
                                                                add("veritatis"),
                                                                add("aut"),
                                                                add("laudantium"),
                                                            }}),
                                                            add(new String[]{{
                                                                add("dolor"),
                                                                add("voluptates"),
                                                            }}),
                                                            add(new String[]{{
                                                                add("magni"),
                                                                add("rerum"),
                                                            }}),
                                                        }};
                                                        selected = false;
                                                        selectedFields = new org.openapis.openapi.models.shared.SelectedFieldInfo[]{{
                                                            add(new SelectedFieldInfo() {{
                                                                fieldPath = new String[]{{
                                                                    add("eum"),
                                                                }};
                                                            }}),
                                                        }};
                                                        suggested = false;
                                                        syncMode = SyncModeEnum.INCREMENTAL;
                                                    }};
                                                    stream = new AirbyteStream("eum") {{
                                                        defaultCursorField = new String[]{{
                                                            add("blanditiis"),
                                                            add("nihil"),
                                                            add("atque"),
                                                        }};
                                                        jsonSchema = new java.util.HashMap<String, Object>() {{
                                                            put("deserunt", "atque");
                                                            put("nostrum", "atque");
                                                            put("architecto", "est");
                                                        }};
                                                        name = "Ms. Patsy Cummings";
                                                        namespace = "enim";
                                                        sourceDefinedCursor = false;
                                                        sourceDefinedPrimaryKey = new String[][]{{
                                                            add(new String[]{{
                                                                add("saepe"),
                                                                add("delectus"),
                                                                add("officia"),
                                                                add("natus"),
                                                            }}),
                                                            add(new String[]{{
                                                                add("natus"),
                                                                add("quaerat"),
                                                                add("doloribus"),
                                                                add("quia"),
                                                            }}),
                                                        }};
                                                        supportedSyncModes = new org.openapis.openapi.models.shared.SyncModeEnum[]{{
                                                            add(SyncModeEnum.INCREMENTAL),
                                                            add(SyncModeEnum.INCREMENTAL),
                                                            add(SyncModeEnum.FULL_REFRESH),
                                                            add(SyncModeEnum.FULL_REFRESH),
                                                        }};
                                                    }};
                                                }}),
                                                add(new AirbyteStreamAndConfiguration() {{
                                                    config = new AirbyteStreamConfiguration(DestinationSyncModeEnum.APPEND_DEDUP, SyncModeEnum.FULL_REFRESH) {{
                                                        aliasName = "nemo";
                                                        cursorField = new String[]{{
                                                            add("nesciunt"),
                                                            add("sit"),
                                                            add("odio"),
                                                            add("minus"),
                                                        }};
                                                        destinationSyncMode = DestinationSyncModeEnum.APPEND_DEDUP;
                                                        fieldSelectionEnabled = false;
                                                        primaryKey = new String[][]{{
                                                            add(new String[]{{
                                                                add("praesentium"),
                                                                add("dicta"),
                                                                add("fugit"),
                                                                add("sit"),
                                                            }}),
                                                            add(new String[]{{
                                                                add("necessitatibus"),
                                                                add("sed"),
                                                            }}),
                                                            add(new String[]{{
                                                                add("sunt"),
                                                                add("nesciunt"),
                                                                add("delectus"),
                                                            }}),
                                                            add(new String[]{{
                                                                add("aliquam"),
                                                                add("deserunt"),
                                                                add("modi"),
                                                            }}),
                                                        }};
                                                        selected = false;
                                                        selectedFields = new org.openapis.openapi.models.shared.SelectedFieldInfo[]{{
                                                            add(new SelectedFieldInfo() {{
                                                                fieldPath = new String[]{{
                                                                    add("eius"),
                                                                    add("voluptatum"),
                                                                    add("ipsa"),
                                                                    add("at"),
                                                                }};
                                                            }}),
                                                        }};
                                                        suggested = false;
                                                        syncMode = SyncModeEnum.FULL_REFRESH;
                                                    }};
                                                    stream = new AirbyteStream("deleniti") {{
                                                        defaultCursorField = new String[]{{
                                                            add("sequi"),
                                                        }};
                                                        jsonSchema = new java.util.HashMap<String, Object>() {{
                                                            put("fuga", "hic");
                                                        }};
                                                        name = "Mr. Connie Brakus";
                                                        namespace = "enim";
                                                        sourceDefinedCursor = false;
                                                        sourceDefinedPrimaryKey = new String[][]{{
                                                            add(new String[]{{
                                                                add("delectus"),
                                                                add("numquam"),
                                                            }}),
                                                        }};
                                                        supportedSyncModes = new org.openapis.openapi.models.shared.SyncModeEnum[]{{
                                                            add(SyncModeEnum.INCREMENTAL),
                                                            add(SyncModeEnum.FULL_REFRESH),
                                                            add(SyncModeEnum.INCREMENTAL),
                                                            add(SyncModeEnum.FULL_REFRESH),
                                                        }};
                                                    }};
                                                }}),
                                                add(new AirbyteStreamAndConfiguration() {{
                                                    config = new AirbyteStreamConfiguration(DestinationSyncModeEnum.APPEND_DEDUP, SyncModeEnum.FULL_REFRESH) {{
                                                        aliasName = "expedita";
                                                        cursorField = new String[]{{
                                                            add("excepturi"),
                                                            add("aliquid"),
                                                            add("sed"),
                                                            add("beatae"),
                                                        }};
                                                        destinationSyncMode = DestinationSyncModeEnum.OVERWRITE;
                                                        fieldSelectionEnabled = false;
                                                        primaryKey = new String[][]{{
                                                            add(new String[]{{
                                                                add("dolore"),
                                                                add("tenetur"),
                                                                add("dignissimos"),
                                                            }}),
                                                            add(new String[]{{
                                                                add("animi"),
                                                                add("laudantium"),
                                                            }}),
                                                        }};
                                                        selected = false;
                                                        selectedFields = new org.openapis.openapi.models.shared.SelectedFieldInfo[]{{
                                                            add(new SelectedFieldInfo() {{
                                                                fieldPath = new String[]{{
                                                                    add("earum"),
                                                                    add("velit"),
                                                                    add("officiis"),
                                                                    add("eius"),
                                                                }};
                                                            }}),
                                                            add(new SelectedFieldInfo() {{
                                                                fieldPath = new String[]{{
                                                                    add("itaque"),
                                                                    add("dignissimos"),
                                                                    add("ipsam"),
                                                                }};
                                                            }}),
                                                        }};
                                                        suggested = false;
                                                        syncMode = SyncModeEnum.FULL_REFRESH;
                                                    }};
                                                    stream = new AirbyteStream("sequi") {{
                                                        defaultCursorField = new String[]{{
                                                            add("facilis"),
                                                            add("ipsum"),
                                                        }};
                                                        jsonSchema = new java.util.HashMap<String, Object>() {{
                                                            put("quaerat", "architecto");
                                                            put("praesentium", "eveniet");
                                                        }};
                                                        name = "Kristy Renner DDS";
                                                        namespace = "quos";
                                                        sourceDefinedCursor = false;
                                                        sourceDefinedPrimaryKey = new String[][]{{
                                                            add(new String[]{{
                                                                add("iusto"),
                                                                add("enim"),
                                                                add("accusamus"),
                                                            }}),
                                                            add(new String[]{{
                                                                add("voluptates"),
                                                            }}),
                                                            add(new String[]{{
                                                                add("tempora"),
                                                                add("quae"),
                                                                add("omnis"),
                                                            }}),
                                                            add(new String[]{{
                                                                add("rem"),
                                                                add("tenetur"),
                                                                add("deleniti"),
                                                                add("modi"),
                                                            }}),
                                                        }};
                                                        supportedSyncModes = new org.openapis.openapi.models.shared.SyncModeEnum[]{{
                                                            add(SyncModeEnum.FULL_REFRESH),
                                                            add(SyncModeEnum.FULL_REFRESH),
                                                            add(SyncModeEnum.FULL_REFRESH),
                                                            add(SyncModeEnum.INCREMENTAL),
                                                        }};
                                                    }};
                                                }}),
                                                add(new AirbyteStreamAndConfiguration() {{
                                                    config = new AirbyteStreamConfiguration(DestinationSyncModeEnum.APPEND, SyncModeEnum.FULL_REFRESH) {{
                                                        aliasName = "saepe";
                                                        cursorField = new String[]{{
                                                            add("esse"),
                                                        }};
                                                        destinationSyncMode = DestinationSyncModeEnum.APPEND_DEDUP;
                                                        fieldSelectionEnabled = false;
                                                        primaryKey = new String[][]{{
                                                            add(new String[]{{
                                                                add("cumque"),
                                                                add("aliquam"),
                                                                add("dolorum"),
                                                                add("deserunt"),
                                                            }}),
                                                            add(new String[]{{
                                                                add("reiciendis"),
                                                                add("sequi"),
                                                            }}),
                                                            add(new String[]{{
                                                                add("laborum"),
                                                                add("nobis"),
                                                                add("quibusdam"),
                                                                add("omnis"),
                                                            }}),
                                                            add(new String[]{{
                                                                add("ipsam"),
                                                            }}),
                                                        }};
                                                        selected = false;
                                                        selectedFields = new org.openapis.openapi.models.shared.SelectedFieldInfo[]{{
                                                            add(new SelectedFieldInfo() {{
                                                                fieldPath = new String[]{{
                                                                    add("reprehenderit"),
                                                                    add("quia"),
                                                                    add("necessitatibus"),
                                                                }};
                                                            }}),
                                                            add(new SelectedFieldInfo() {{
                                                                fieldPath = new String[]{{
                                                                    add("ad"),
                                                                }};
                                                            }}),
                                                            add(new SelectedFieldInfo() {{
                                                                fieldPath = new String[]{{
                                                                    add("molestiae"),
                                                                    add("quia"),
                                                                }};
                                                            }}),
                                                        }};
                                                        suggested = false;
                                                        syncMode = SyncModeEnum.INCREMENTAL;
                                                    }};
                                                    stream = new AirbyteStream("maiores") {{
                                                        defaultCursorField = new String[]{{
                                                            add("expedita"),
                                                            add("eos"),
                                                        }};
                                                        jsonSchema = new java.util.HashMap<String, Object>() {{
                                                            put("nesciunt", "ipsa");
                                                            put("sint", "dolore");
                                                            put("esse", "accusantium");
                                                            put("distinctio", "sapiente");
                                                        }};
                                                        name = "Monique Hackett";
                                                        namespace = "voluptatum";
                                                        sourceDefinedCursor = false;
                                                        sourceDefinedPrimaryKey = new String[][]{{
                                                            add(new String[]{{
                                                                add("voluptatibus"),
                                                                add("voluptas"),
                                                                add("non"),
                                                                add("ullam"),
                                                            }}),
                                                            add(new String[]{{
                                                                add("voluptas"),
                                                                add("doloribus"),
                                                                add("animi"),
                                                            }}),
                                                        }};
                                                        supportedSyncModes = new org.openapis.openapi.models.shared.SyncModeEnum[]{{
                                                            add(SyncModeEnum.FULL_REFRESH),
                                                            add(SyncModeEnum.FULL_REFRESH),
                                                            add(SyncModeEnum.INCREMENTAL),
                                                            add(SyncModeEnum.INCREMENTAL),
                                                        }};
                                                    }};
                                                }}),
                                            }});) {{
                configurationHash = "laboriosam";
                connectorVersion = "voluptatem";
                sourceId = "c321f023-b75d-4236-bfe1-a0cc8df79f0a";
            }};            

            WriteDiscoverCatalogResultResponse res = sdk.internal.writeDiscoverCatalogResult(req);

            if (res.discoverCatalogResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
