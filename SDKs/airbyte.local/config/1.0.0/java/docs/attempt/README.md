# attempt

## Overview

Interactions with attempt related resources.

### Available Operations

* [saveStats](#savestats) - For worker to set sync stats of a running attempt.
* [saveSyncConfig](#savesyncconfig) - For worker to save the AttemptSyncConfig for an attempt.
* [setWorkflowInAttempt](#setworkflowinattempt) - For worker to register the workflow id in attempt.

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

            org.openapis.openapi.models.shared.SaveStatsRequestBody req = new SaveStatsRequestBody(870088, 978619L,                 new AttemptStats() {{
                                bytesEmitted = 473608L;
                                estimatedBytes = 799159L;
                                estimatedRecords = 800911L;
                                recordsCommitted = 461479L;
                                recordsEmitted = 520478L;
                                stateMessagesEmitted = 780529L;
                            }};) {{
                streamStats = new org.openapis.openapi.models.shared.AttemptStreamStats[]{{
                    add(new AttemptStreamStats(                new AttemptStats() {{
                                        bytesEmitted = 521848L;
                                        estimatedBytes = 105907L;
                                        estimatedRecords = 414662L;
                                        recordsCommitted = 473600L;
                                        recordsEmitted = 264555L;
                                        stateMessagesEmitted = 186332L;
                                    }};, "impedit") {{
                        stats = new AttemptStats() {{
                            bytesEmitted = 118274L;
                            estimatedBytes = 720633L;
                            estimatedRecords = 639921L;
                            recordsCommitted = 582020L;
                            recordsEmitted = 143353L;
                            stateMessagesEmitted = 537373L;
                        }};
                        streamName = "hic";
                        streamNamespace = "optio";
                    }}),
                    add(new AttemptStreamStats(                new AttemptStats() {{
                                        bytesEmitted = 149675L;
                                        estimatedBytes = 612096L;
                                        estimatedRecords = 222321L;
                                        recordsCommitted = 616934L;
                                        recordsEmitted = 386489L;
                                        stateMessagesEmitted = 943749L;
                                    }};, "saepe") {{
                        stats = new AttemptStats() {{
                            bytesEmitted = 736918L;
                            estimatedBytes = 456150L;
                            estimatedRecords = 216550L;
                            recordsCommitted = 568434L;
                            recordsEmitted = 135218L;
                            stateMessagesEmitted = 18789L;
                        }};
                        streamName = "ad";
                        streamNamespace = "natus";
                    }}),
                    add(new AttemptStreamStats(                new AttemptStats() {{
                                        bytesEmitted = 60225L;
                                        estimatedBytes = 969810L;
                                        estimatedRecords = 666767L;
                                        recordsCommitted = 653140L;
                                        recordsEmitted = 670638L;
                                        stateMessagesEmitted = 170909L;
                                    }};, "dolorem") {{
                        stats = new AttemptStats() {{
                            bytesEmitted = 681820L;
                            estimatedBytes = 449950L;
                            estimatedRecords = 359508L;
                            recordsCommitted = 613064L;
                            recordsEmitted = 437032L;
                            stateMessagesEmitted = 902349L;
                        }};
                        streamName = "quidem";
                        streamNamespace = "architecto";
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

            org.openapis.openapi.models.shared.SaveAttemptSyncConfigRequestBody req = new SaveAttemptSyncConfigRequestBody(358152, 128926L,                 new AttemptSyncConfig("nobis", "enim") {{
                                state = new ConnectionState("955907af-f1a3-4a2f-a946-7739251aa52c", ConnectionStateTypeEnum.GLOBAL) {{
                                    globalState = new GlobalState(                new org.openapis.openapi.models.shared.StreamState[]{{
                                                        add(new StreamState(                new StreamDescriptor("vero") {{
                                                                            namespace = "nihil";
                                                                        }};) {{
                                                            streamDescriptor = new StreamDescriptor("laborum") {{
                                                                name = "Mr. Alberta Schuster";
                                                                namespace = "temporibus";
                                                            }};
                                                            streamState = new java.util.HashMap<String, Object>() {{
                                                                put("reiciendis", "voluptatibus");
                                                            }};
                                                        }}),
                                                        add(new StreamState(                new StreamDescriptor("maiores") {{
                                                                            namespace = "dicta";
                                                                        }};) {{
                                                            streamDescriptor = new StreamDescriptor("perferendis") {{
                                                                name = "Jan Bednar";
                                                                namespace = "cum";
                                                            }};
                                                            streamState = new java.util.HashMap<String, Object>() {{
                                                                put("reprehenderit", "ut");
                                                            }};
                                                        }}),
                                                        add(new StreamState(                new StreamDescriptor("rem") {{
                                                                            namespace = "voluptates";
                                                                        }};) {{
                                                            streamDescriptor = new StreamDescriptor("commodi") {{
                                                                name = "Miss Valerie Kshlerin";
                                                                namespace = "accusamus";
                                                            }};
                                                            streamState = new java.util.HashMap<String, Object>() {{
                                                                put("quae", "ipsum");
                                                                put("quidem", "molestias");
                                                                put("excepturi", "pariatur");
                                                                put("modi", "praesentium");
                                                            }};
                                                        }}),
                                                        add(new StreamState(                new StreamDescriptor("modi") {{
                                                                            namespace = "qui";
                                                                        }};) {{
                                                            streamDescriptor = new StreamDescriptor("consequatur") {{
                                                                name = "Dr. Casey Mayer";
                                                                namespace = "enim";
                                                            }};
                                                            streamState = new java.util.HashMap<String, Object>() {{
                                                                put("quibusdam", "explicabo");
                                                                put("deserunt", "distinctio");
                                                                put("quibusdam", "labore");
                                                            }};
                                                        }}),
                                                    }}) {{
                                        sharedState = new java.util.HashMap<String, Object>() {{
                                            put("cupiditate", "quos");
                                            put("perferendis", "magni");
                                        }};
                                    }};;
                                    state = new java.util.HashMap<String, Object>() {{
                                        put("ipsam", "alias");
                                        put("fugit", "dolorum");
                                        put("excepturi", "tempora");
                                        put("facilis", "tempore");
                                    }};
                                    streamState = new org.openapis.openapi.models.shared.StreamState[]{{
                                        add(new StreamState(                new StreamDescriptor("illum") {{
                                                            namespace = "maiores";
                                                        }};) {{
                                            streamDescriptor = new StreamDescriptor("provident") {{
                                                name = "Andre Franey";
                                                namespace = "aliquid";
                                            }};
                                            streamState = new java.util.HashMap<String, Object>() {{
                                                put("sint", "officia");
                                                put("dolor", "debitis");
                                                put("a", "dolorum");
                                                put("in", "in");
                                            }};
                                        }}),
                                        add(new StreamState(                new StreamDescriptor("quidem") {{
                                                            namespace = "provident";
                                                        }};) {{
                                            streamDescriptor = new StreamDescriptor("aliquid") {{
                                                name = "Keith Gulgowski";
                                                namespace = "ea";
                                            }};
                                            streamState = new java.util.HashMap<String, Object>() {{
                                                put("accusamus", "non");
                                                put("occaecati", "enim");
                                                put("accusamus", "delectus");
                                            }};
                                        }}),
                                    }};
                                }};;
                            }};);            

            SaveSyncConfigResponse res = sdk.attempt.saveSyncConfig(req);

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

            org.openapis.openapi.models.shared.SetWorkflowInAttemptRequestBody req = new SetWorkflowInAttemptRequestBody(725255, 659669L, "blanditiis") {{
                processingTaskQueue = "deleniti";
            }};            

            SetWorkflowInAttemptResponse res = sdk.attempt.setWorkflowInAttempt(req);

            if (res.internalOperationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
