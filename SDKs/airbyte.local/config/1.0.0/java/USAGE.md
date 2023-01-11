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
                    bearerAuth = new SchemeBearerAuth() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            CreateConnectionRequest req = new CreateConnectionRequest() {{
                request = new ConnectionCreate() {{
                    destinationId = "sed";
                    name = "officiis";
                    namespaceDefinition = "destination";
                    namespaceFormat = "consectetur";
                    operationIds = new String[]() {{
                        add("odio"),
                    }};
                    prefix = "qui";
                    resourceRequirements = new ResourceRequirements() {{
                        cpuLimit = "recusandae";
                        cpuRequest = "at";
                        memoryLimit = "ipsum";
                        memoryRequest = "eveniet";
                    }};
                    schedule = new ConnectionSchedule() {{
                        timeUnit = "months";
                        units = 7338728586234333996;
                    }};
                    sourceId = "inventore";
                    status = "deprecated";
                    syncCatalog = new AirbyteCatalog() {{
                        streams = new openapisdk.models.shared.AirbyteStreamAndConfiguration[]() {{
                            add(new AirbyteStreamAndConfiguration() {{
                                config = new AirbyteStreamConfiguration() {{
                                    aliasName = "aut";
                                    cursorField = new String[]() {{
                                        add("tempore"),
                                    }};
                                    destinationSyncMode = "append";
                                    primaryKey = new String[][]() {{
                                        add(new String[]() {{
                                            add("beatae"),
                                            add("veritatis"),
                                        }}),
                                        add(new String[]() {{
                                            add("et"),
                                            add("omnis"),
                                            add("ipsum"),
                                        }}),
                                        add(new String[]() {{
                                            add("dolores"),
                                        }}),
                                    }};
                                    selected = true;
                                    syncMode = "full_refresh";
                                }};
                                stream = new AirbyteStream() {{
                                    defaultCursorField = new String[]() {{
                                        add("mollitia"),
                                        add("voluptas"),
                                        add("quam"),
                                    }};
                                    jsonSchema = new java.util.HashMap<String, Object>() {{
                                        put("qui", "qui");
                                    }};
                                    name = "unde";
                                    namespace = "in";
                                    sourceDefinedCursor = false;
                                    sourceDefinedPrimaryKey = new String[][]() {{
                                        add(new String[]() {{
                                            add("itaque"),
                                            add("ab"),
                                            add("neque"),
                                        }}),
                                    }};
                                    supportedSyncModes = new openapisdk.models.shared.SyncModeEnum[]() {{
                                        add("full_refresh"),
                                        add("full_refresh"),
                                        add("full_refresh"),
                                    }};
                                }};
                            }}),
                            add(new AirbyteStreamAndConfiguration() {{
                                config = new AirbyteStreamConfiguration() {{
                                    aliasName = "architecto";
                                    cursorField = new String[]() {{
                                        add("velit"),
                                    }};
                                    destinationSyncMode = "overwrite";
                                    primaryKey = new String[][]() {{
                                        add(new String[]() {{
                                            add("voluptates"),
                                            add("magni"),
                                        }}),
                                    }};
                                    selected = false;
                                    syncMode = "incremental";
                                }};
                                stream = new AirbyteStream() {{
                                    defaultCursorField = new String[]() {{
                                        add("earum"),
                                    }};
                                    jsonSchema = new java.util.HashMap<String, Object>() {{
                                        put("omnis", "ut");
                                    }};
                                    name = "consequatur";
                                    namespace = "dolor";
                                    sourceDefinedCursor = true;
                                    sourceDefinedPrimaryKey = new String[][]() {{
                                        add(new String[]() {{
                                            add("consectetur"),
                                        }}),
                                    }};
                                    supportedSyncModes = new openapisdk.models.shared.SyncModeEnum[]() {{
                                        add("incremental"),
                                    }};
                                }};
                            }}),
                            add(new AirbyteStreamAndConfiguration() {{
                                config = new AirbyteStreamConfiguration() {{
                                    aliasName = "laboriosam";
                                    cursorField = new String[]() {{
                                        add("a"),
                                        add("soluta"),
                                        add("aut"),
                                    }};
                                    destinationSyncMode = "append_dedup";
                                    primaryKey = new String[][]() {{
                                        add(new String[]() {{
                                            add("autem"),
                                        }}),
                                        add(new String[]() {{
                                            add("expedita"),
                                        }}),
                                        add(new String[]() {{
                                            add("perferendis"),
                                        }}),
                                    }};
                                    selected = false;
                                    syncMode = "incremental";
                                }};
                                stream = new AirbyteStream() {{
                                    defaultCursorField = new String[]() {{
                                        add("explicabo"),
                                        add("ea"),
                                        add("maxime"),
                                    }};
                                    jsonSchema = new java.util.HashMap<String, Object>() {{
                                        put("perferendis", "et");
                                    }};
                                    name = "rerum";
                                    namespace = "reiciendis";
                                    sourceDefinedCursor = false;
                                    sourceDefinedPrimaryKey = new String[][]() {{
                                        add(new String[]() {{
                                            add("necessitatibus"),
                                        }}),
                                        add(new String[]() {{
                                            add("quis"),
                                            add("eum"),
                                        }}),
                                    }};
                                    supportedSyncModes = new openapisdk.models.shared.SyncModeEnum[]() {{
                                        add("incremental"),
                                    }};
                                }};
                            }}),
                        }};
                    }};
                }};
            }};

            CreateConnectionResponse res = sdk.connection.createConnection(req);

            if (res.connectionRead.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->