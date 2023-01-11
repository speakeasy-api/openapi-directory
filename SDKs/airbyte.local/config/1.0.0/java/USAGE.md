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
                    destinationId = "sit";
                    name = "voluptas";
                    namespaceDefinition = "destination";
                    namespaceFormat = "expedita";
                    operationIds = new String[]() {{
                        add("dolor"),
                        add("expedita"),
                        add("voluptas"),
                    }};
                    prefix = "fugit";
                    resourceRequirements = new ResourceRequirements() {{
                        cpuLimit = "et";
                        cpuRequest = "nihil";
                        memoryLimit = "rerum";
                        memoryRequest = "dicta";
                    }};
                    schedule = new ConnectionSchedule() {{
                        timeUnit = "weeks";
                        units = 5617773211005988520;
                    }};
                    sourceId = "et";
                    status = "deprecated";
                    syncCatalog = new AirbyteCatalog() {{
                        streams = new openapisdk.models.shared.AirbyteStreamAndConfiguration[]() {{
                            add(new AirbyteStreamAndConfiguration() {{
                                config = new AirbyteStreamConfiguration() {{
                                    aliasName = "et";
                                    cursorField = new String[]() {{
                                        add("iste"),
                                    }};
                                    destinationSyncMode = "append";
                                    primaryKey = new String[][]() {{
                                        add(new String[]() {{
                                            add("illum"),
                                        }}),
                                        add(new String[]() {{
                                            add("vel"),
                                        }}),
                                        add(new String[]() {{
                                            add("dolore"),
                                        }}),
                                    }};
                                    selected = false;
                                    syncMode = "incremental";
                                }};
                                stream = new AirbyteStream() {{
                                    defaultCursorField = new String[]() {{
                                        add("totam"),
                                        add("commodi"),
                                        add("quis"),
                                    }};
                                    jsonSchema = new java.util.HashMap<String, Object>() {{
                                        put("aut", "odit");
                                        put("non", "voluptas");
                                    }};
                                    name = "omnis";
                                    namespace = "aut";
                                    sourceDefinedCursor = true;
                                    sourceDefinedPrimaryKey = new String[][]() {{
                                        add(new String[]() {{
                                            add("autem"),
                                            add("consectetur"),
                                        }}),
                                        add(new String[]() {{
                                            add("odio"),
                                        }}),
                                        add(new String[]() {{
                                            add("recusandae"),
                                        }}),
                                    }};
                                    supportedSyncModes = new openapisdk.models.shared.SyncModeEnum[]() {{
                                        add("full_refresh"),
                                        add("full_refresh"),
                                    }};
                                }};
                            }}),
                            add(new AirbyteStreamAndConfiguration() {{
                                config = new AirbyteStreamConfiguration() {{
                                    aliasName = "modi";
                                    cursorField = new String[]() {{
                                        add("inventore"),
                                    }};
                                    destinationSyncMode = "append_dedup";
                                    primaryKey = new String[][]() {{
                                        add(new String[]() {{
                                            add("reprehenderit"),
                                            add("tempore"),
                                            add("maiores"),
                                        }}),
                                        add(new String[]() {{
                                            add("dolor"),
                                            add("beatae"),
                                            add("veritatis"),
                                        }}),
                                        add(new String[]() {{
                                            add("et"),
                                            add("omnis"),
                                            add("ipsum"),
                                        }}),
                                    }};
                                    selected = true;
                                    syncMode = "full_refresh";
                                }};
                                stream = new AirbyteStream() {{
                                    defaultCursorField = new String[]() {{
                                        add("vel"),
                                    }};
                                    jsonSchema = new java.util.HashMap<String, Object>() {{
                                        put("mollitia", "voluptas");
                                        put("quam", "reprehenderit");
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