# SDK

## Overview

<p>IoT Events monitors your equipment or device fleets for failures or changes in operation, and triggers actions when such events occur. You can use IoT Events Data API commands to send inputs to detectors, list detectors, and view or update a detector's status.</p> <p> For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/what-is-iotevents.html">What is IoT Events?</a> in the <i>IoT Events Developer Guide</i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/iotevents/>
### Available Operations

* [batchAcknowledgeAlarm](#batchacknowledgealarm) - Acknowledges one or more alarms. The alarms change to the <code>ACKNOWLEDGED</code> state after you acknowledge them.
* [batchDeleteDetector](#batchdeletedetector) - Deletes one or more detectors that were created. When a detector is deleted, its state will be cleared and the detector will be removed from the list of detectors. The deleted detector will no longer appear if referenced in the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_ListDetectors.html">ListDetectors</a> API call.
* [batchDisableAlarm](#batchdisablealarm) - Disables one or more alarms. The alarms change to the <code>DISABLED</code> state after you disable them.
* [batchEnableAlarm](#batchenablealarm) - Enables one or more alarms. The alarms change to the <code>NORMAL</code> state after you enable them.
* [batchPutMessage](#batchputmessage) - Sends a set of messages to the IoT Events system. Each message payload is transformed into the input you specify (<code>"inputName"</code>) and ingested into any detectors that monitor that input. If multiple messages are sent, the order in which the messages are processed isn't guaranteed. To guarantee ordering, you must send messages one at a time and wait for a successful response.
* [batchResetAlarm](#batchresetalarm) - Resets one or more alarms. The alarms return to the <code>NORMAL</code> state after you reset them.
* [batchSnoozeAlarm](#batchsnoozealarm) - Changes one or more alarms to the snooze mode. The alarms change to the <code>SNOOZE_DISABLED</code> state after you set them to the snooze mode.
* [batchUpdateDetector](#batchupdatedetector) - Updates the state, variable values, and timer settings of one or more detectors (instances) of a specified detector model.
* [describeAlarm](#describealarm) - Retrieves information about an alarm.
* [describeDetector](#describedetector) - Returns information about the specified detector (instance).
* [listAlarms](#listalarms) - Lists one or more alarms. The operation returns only the metadata associated with each alarm.
* [listDetectors](#listdetectors) - Lists detectors (the instances of a detector model).

## batchAcknowledgeAlarm

Acknowledges one or more alarms. The alarms change to the <code>ACKNOWLEDGED</code> state after you acknowledge them.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchAcknowledgeAlarmRequest;
import org.openapis.openapi.models.operations.BatchAcknowledgeAlarmRequestBody;
import org.openapis.openapi.models.operations.BatchAcknowledgeAlarmResponse;
import org.openapis.openapi.models.shared.AcknowledgeAlarmActionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchAcknowledgeAlarmRequest req = new BatchAcknowledgeAlarmRequest(                new BatchAcknowledgeAlarmRequestBody(                new org.openapis.openapi.models.shared.AcknowledgeAlarmActionRequest[]{{
                                                add(new AcknowledgeAlarmActionRequest("ipsam", "repellendus") {{
                                                    alarmModelName = "quis";
                                                    keyValue = "veritatis";
                                                    note = "deserunt";
                                                    requestId = "perferendis";
                                                }}),
                                            }});) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "quo";
                xAmzCredential = "odit";
                xAmzDate = "at";
                xAmzSecurityToken = "at";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "molestiae";
            }};            

            BatchAcknowledgeAlarmResponse res = sdk.sdk.batchAcknowledgeAlarm(req);

            if (res.batchAcknowledgeAlarmResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchDeleteDetector

Deletes one or more detectors that were created. When a detector is deleted, its state will be cleared and the detector will be removed from the list of detectors. The deleted detector will no longer appear if referenced in the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_ListDetectors.html">ListDetectors</a> API call.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchDeleteDetectorRequest;
import org.openapis.openapi.models.operations.BatchDeleteDetectorRequestBody;
import org.openapis.openapi.models.operations.BatchDeleteDetectorResponse;
import org.openapis.openapi.models.shared.DeleteDetectorRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchDeleteDetectorRequest req = new BatchDeleteDetectorRequest(                new BatchDeleteDetectorRequestBody(                new org.openapis.openapi.models.shared.DeleteDetectorRequest[]{{
                                                add(new DeleteDetectorRequest("dolorum", "dicta") {{
                                                    detectorModelName = "esse";
                                                    keyValue = "totam";
                                                    messageId = "porro";
                                                }}),
                                                add(new DeleteDetectorRequest("fugit", "deleniti") {{
                                                    detectorModelName = "nam";
                                                    keyValue = "officia";
                                                    messageId = "occaecati";
                                                }}),
                                                add(new DeleteDetectorRequest("beatae", "commodi") {{
                                                    detectorModelName = "hic";
                                                    keyValue = "optio";
                                                    messageId = "totam";
                                                }}),
                                                add(new DeleteDetectorRequest("impedit", "cum") {{
                                                    detectorModelName = "molestiae";
                                                    keyValue = "modi";
                                                    messageId = "qui";
                                                }}),
                                            }});) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "excepturi";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "natus";
            }};            

            BatchDeleteDetectorResponse res = sdk.sdk.batchDeleteDetector(req);

            if (res.batchDeleteDetectorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchDisableAlarm

Disables one or more alarms. The alarms change to the <code>DISABLED</code> state after you disable them.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchDisableAlarmRequest;
import org.openapis.openapi.models.operations.BatchDisableAlarmRequestBody;
import org.openapis.openapi.models.operations.BatchDisableAlarmResponse;
import org.openapis.openapi.models.shared.DisableAlarmActionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchDisableAlarmRequest req = new BatchDisableAlarmRequest(                new BatchDisableAlarmRequestBody(                new org.openapis.openapi.models.shared.DisableAlarmActionRequest[]{{
                                                add(new DisableAlarmActionRequest("saepe", "fuga") {{
                                                    alarmModelName = "dolor";
                                                    keyValue = "natus";
                                                    note = "laboriosam";
                                                    requestId = "hic";
                                                }}),
                                                add(new DisableAlarmActionRequest("saepe", "quidem") {{
                                                    alarmModelName = "in";
                                                    keyValue = "corporis";
                                                    note = "iste";
                                                    requestId = "iure";
                                                }}),
                                                add(new DisableAlarmActionRequest("mollitia", "laborum") {{
                                                    alarmModelName = "architecto";
                                                    keyValue = "ipsa";
                                                    note = "reiciendis";
                                                    requestId = "est";
                                                }}),
                                            }});) {{
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "corporis";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "omnis";
            }};            

            BatchDisableAlarmResponse res = sdk.sdk.batchDisableAlarm(req);

            if (res.batchDisableAlarmResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchEnableAlarm

Enables one or more alarms. The alarms change to the <code>NORMAL</code> state after you enable them.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchEnableAlarmRequest;
import org.openapis.openapi.models.operations.BatchEnableAlarmRequestBody;
import org.openapis.openapi.models.operations.BatchEnableAlarmResponse;
import org.openapis.openapi.models.shared.EnableAlarmActionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchEnableAlarmRequest req = new BatchEnableAlarmRequest(                new BatchEnableAlarmRequestBody(                new org.openapis.openapi.models.shared.EnableAlarmActionRequest[]{{
                                                add(new EnableAlarmActionRequest("doloribus", "sapiente") {{
                                                    alarmModelName = "excepturi";
                                                    keyValue = "accusantium";
                                                    note = "iure";
                                                    requestId = "culpa";
                                                }}),
                                                add(new EnableAlarmActionRequest("consequuntur", "repellat") {{
                                                    alarmModelName = "architecto";
                                                    keyValue = "mollitia";
                                                    note = "dolorem";
                                                    requestId = "culpa";
                                                }}),
                                            }});) {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "numquam";
                xAmzDate = "commodi";
                xAmzSecurityToken = "quam";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "velit";
            }};            

            BatchEnableAlarmResponse res = sdk.sdk.batchEnableAlarm(req);

            if (res.batchEnableAlarmResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchPutMessage

Sends a set of messages to the IoT Events system. Each message payload is transformed into the input you specify (<code>"inputName"</code>) and ingested into any detectors that monitor that input. If multiple messages are sent, the order in which the messages are processed isn't guaranteed. To guarantee ordering, you must send messages one at a time and wait for a successful response.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchPutMessageRequest;
import org.openapis.openapi.models.operations.BatchPutMessageRequestBody;
import org.openapis.openapi.models.operations.BatchPutMessageResponse;
import org.openapis.openapi.models.shared.Message;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TimestampValue;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchPutMessageRequest req = new BatchPutMessageRequest(                new BatchPutMessageRequestBody(                new org.openapis.openapi.models.shared.Message[]{{
                                                add(new Message("enim", "odit", "quo") {{
                                                    inputName = "quis";
                                                    messageId = "vitae";
                                                    payload = "laborum";
                                                    timestamp = new TimestampValue() {{
                                                        timeInMillis = 656330L;
                                                    }};
                                                }}),
                                            }});) {{
                xAmzAlgorithm = "sequi";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "ipsam";
                xAmzDate = "id";
                xAmzSecurityToken = "possimus";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "quasi";
            }};            

            BatchPutMessageResponse res = sdk.sdk.batchPutMessage(req);

            if (res.batchPutMessageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchResetAlarm

Resets one or more alarms. The alarms return to the <code>NORMAL</code> state after you reset them.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchResetAlarmRequest;
import org.openapis.openapi.models.operations.BatchResetAlarmRequestBody;
import org.openapis.openapi.models.operations.BatchResetAlarmResponse;
import org.openapis.openapi.models.shared.ResetAlarmActionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchResetAlarmRequest req = new BatchResetAlarmRequest(                new BatchResetAlarmRequestBody(                new org.openapis.openapi.models.shared.ResetAlarmActionRequest[]{{
                                                add(new ResetAlarmActionRequest("vero", "nihil") {{
                                                    alarmModelName = "laborum";
                                                    keyValue = "quasi";
                                                    note = "reiciendis";
                                                    requestId = "voluptatibus";
                                                }}),
                                                add(new ResetAlarmActionRequest("voluptate", "cum") {{
                                                    alarmModelName = "praesentium";
                                                    keyValue = "voluptatibus";
                                                    note = "ipsa";
                                                    requestId = "omnis";
                                                }}),
                                                add(new ResetAlarmActionRequest("maiores", "dicta") {{
                                                    alarmModelName = "perferendis";
                                                    keyValue = "doloremque";
                                                    note = "reprehenderit";
                                                    requestId = "ut";
                                                }}),
                                                add(new ResetAlarmActionRequest("harum", "enim") {{
                                                    alarmModelName = "corporis";
                                                    keyValue = "dolore";
                                                    note = "iusto";
                                                    requestId = "dicta";
                                                }}),
                                            }});) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "repudiandae";
                xAmzDate = "quae";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "molestias";
            }};            

            BatchResetAlarmResponse res = sdk.sdk.batchResetAlarm(req);

            if (res.batchResetAlarmResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchSnoozeAlarm

Changes one or more alarms to the snooze mode. The alarms change to the <code>SNOOZE_DISABLED</code> state after you set them to the snooze mode.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchSnoozeAlarmRequest;
import org.openapis.openapi.models.operations.BatchSnoozeAlarmRequestBody;
import org.openapis.openapi.models.operations.BatchSnoozeAlarmResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SnoozeAlarmActionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchSnoozeAlarmRequest req = new BatchSnoozeAlarmRequest(                new BatchSnoozeAlarmRequestBody(                new org.openapis.openapi.models.shared.SnoozeAlarmActionRequest[]{{
                                                add(new SnoozeAlarmActionRequest("repudiandae", "sint", 83112L) {{
                                                    alarmModelName = "modi";
                                                    keyValue = "praesentium";
                                                    note = "rem";
                                                    requestId = "voluptates";
                                                    snoozeDuration = 93940L;
                                                }}),
                                                add(new SnoozeAlarmActionRequest("quibusdam", "explicabo", 647174L) {{
                                                    alarmModelName = "itaque";
                                                    keyValue = "incidunt";
                                                    note = "enim";
                                                    requestId = "consequatur";
                                                    snoozeDuration = 667411L;
                                                }}),
                                                add(new SnoozeAlarmActionRequest("aliquid", "cupiditate", 552822L) {{
                                                    alarmModelName = "distinctio";
                                                    keyValue = "quibusdam";
                                                    note = "labore";
                                                    requestId = "modi";
                                                    snoozeDuration = 183191L;
                                                }}),
                                                add(new SnoozeAlarmActionRequest("fugit", "dolorum", 569618L) {{
                                                    alarmModelName = "perferendis";
                                                    keyValue = "magni";
                                                    note = "assumenda";
                                                    requestId = "ipsam";
                                                    snoozeDuration = 4695L;
                                                }}),
                                            }});) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "tempore";
                xAmzDate = "labore";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "non";
            }};            

            BatchSnoozeAlarmResponse res = sdk.sdk.batchSnoozeAlarm(req);

            if (res.batchSnoozeAlarmResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchUpdateDetector

Updates the state, variable values, and timer settings of one or more detectors (instances) of a specified detector model.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchUpdateDetectorRequest;
import org.openapis.openapi.models.operations.BatchUpdateDetectorRequestBody;
import org.openapis.openapi.models.operations.BatchUpdateDetectorResponse;
import org.openapis.openapi.models.shared.DetectorStateDefinition;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TimerDefinition;
import org.openapis.openapi.models.shared.UpdateDetectorRequest;
import org.openapis.openapi.models.shared.VariableDefinition;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchUpdateDetectorRequest req = new BatchUpdateDetectorRequest(                new BatchUpdateDetectorRequestBody(                new org.openapis.openapi.models.shared.UpdateDetectorRequest[]{{
                                                add(new UpdateDetectorRequest("saepe", "pariatur",                 new DetectorStateDefinition("accusantium",                 new org.openapis.openapi.models.shared.TimerDefinition[]{{
                                                                                    add(new TimerDefinition("maxime", 411397L) {{
                                                                                        name = "Miss Nick Cummerata";
                                                                                        seconds = 864934L;
                                                                                    }}),
                                                                                }},                 new org.openapis.openapi.models.shared.VariableDefinition[]{{
                                                                                    add(new VariableDefinition("voluptate", "autem") {{
                                                                                        name = "Dr. Rosemary Bartoletti";
                                                                                        value = "ipsam";
                                                                                    }}),
                                                                                    add(new VariableDefinition("fugiat", "amet") {{
                                                                                        name = "Gary Streich";
                                                                                        value = "perferendis";
                                                                                    }}),
                                                                                    add(new VariableDefinition("dolores", "quis") {{
                                                                                        name = "Erma Hessel";
                                                                                        value = "nobis";
                                                                                    }}),
                                                                                }});) {{
                                                    detectorModelName = "aliquid";
                                                    keyValue = "provident";
                                                    messageId = "necessitatibus";
                                                    state = new DetectorStateDefinition("magnam",                 new org.openapis.openapi.models.shared.TimerDefinition[]{{
                                                                        add(new TimerDefinition("mollitia", 968962L) {{
                                                                            name = "Derrick McLaughlin";
                                                                            seconds = 33625L;
                                                                        }}),
                                                                    }},                 new org.openapis.openapi.models.shared.VariableDefinition[]{{
                                                                        add(new VariableDefinition("quasi", "iure") {{
                                                                            name = "Natalie Ernser";
                                                                            value = "nemo";
                                                                        }}),
                                                                        add(new VariableDefinition("in", "architecto") {{
                                                                            name = "Doyle Gibson";
                                                                            value = "facilis";
                                                                        }}),
                                                                        add(new VariableDefinition("quibusdam", "sed") {{
                                                                            name = "Elvira Herman";
                                                                            value = "repellat";
                                                                        }}),
                                                                    }}) {{
                                                        stateName = "sint";
                                                        timers = new org.openapis.openapi.models.shared.TimerDefinition[]{{
                                                            add(new TimerDefinition("illum", 978571L) {{
                                                                name = "Raquel Wilderman";
                                                                seconds = 449198L;
                                                            }}),
                                                            add(new TimerDefinition("aliquid", 675439L) {{
                                                                name = "Keith Gulgowski";
                                                                seconds = 411820L;
                                                            }}),
                                                            add(new TimerDefinition("quidem", 588465L) {{
                                                                name = "Alfred McClure";
                                                                seconds = 965417L;
                                                            }}),
                                                        }};
                                                        variables = new org.openapis.openapi.models.shared.VariableDefinition[]{{
                                                            add(new VariableDefinition("nisi", "vel") {{
                                                                name = "Nelson Lesch";
                                                                value = "deserunt";
                                                            }}),
                                                            add(new VariableDefinition("id", "labore") {{
                                                                name = "Ms. Arturo Krajcik";
                                                                value = "distinctio";
                                                            }}),
                                                            add(new VariableDefinition("aspernatur", "architecto") {{
                                                                name = "Laurie Mosciski";
                                                                value = "vero";
                                                            }}),
                                                        }};
                                                    }};
                                                }}),
                                                add(new UpdateDetectorRequest("alias", "at",                 new DetectorStateDefinition("quaerat",                 new org.openapis.openapi.models.shared.TimerDefinition[]{{
                                                                                    add(new TimerDefinition("esse", 687488L) {{
                                                                                        name = "Bernadette Torp";
                                                                                        seconds = 952792L;
                                                                                    }}),
                                                                                    add(new TimerDefinition("accusamus", 253941L) {{
                                                                                        name = "Tracy Schamberger";
                                                                                        seconds = 730856L;
                                                                                    }}),
                                                                                }},                 new org.openapis.openapi.models.shared.VariableDefinition[]{{
                                                                                    add(new VariableDefinition("sed", "vel") {{
                                                                                        name = "Jeannie Leannon MD";
                                                                                        value = "neque";
                                                                                    }}),
                                                                                    add(new VariableDefinition("qui", "cupiditate") {{
                                                                                        name = "Glen Oberbrunner";
                                                                                        value = "incidunt";
                                                                                    }}),
                                                                                }});) {{
                                                    detectorModelName = "totam";
                                                    keyValue = "dignissimos";
                                                    messageId = "eaque";
                                                    state = new DetectorStateDefinition("excepturi",                 new org.openapis.openapi.models.shared.TimerDefinition[]{{
                                                                        add(new TimerDefinition("veritatis", 58029L) {{
                                                                            name = "Marian Wisozk";
                                                                            seconds = 254356L;
                                                                        }}),
                                                                        add(new TimerDefinition("voluptatibus", 377752L) {{
                                                                            name = "Vera Kuhlman";
                                                                            seconds = 696344L;
                                                                        }}),
                                                                        add(new TimerDefinition("iusto", 453697L) {{
                                                                            name = "Dr. Craig Littel DDS";
                                                                            seconds = 679393L;
                                                                        }}),
                                                                    }},                 new org.openapis.openapi.models.shared.VariableDefinition[]{{
                                                                        add(new VariableDefinition("ipsum", "voluptate") {{
                                                                            name = "Arturo Treutel";
                                                                            value = "nihil";
                                                                        }}),
                                                                        add(new VariableDefinition("accusamus", "ad") {{
                                                                            name = "Elbert Gislason I";
                                                                            value = "optio";
                                                                        }}),
                                                                        add(new VariableDefinition("totam", "similique") {{
                                                                            name = "Sam Oberbrunner";
                                                                            value = "repellendus";
                                                                        }}),
                                                                    }}) {{
                                                        stateName = "quis";
                                                        timers = new org.openapis.openapi.models.shared.TimerDefinition[]{{
                                                            add(new TimerDefinition("vero", 345352L) {{
                                                                name = "Dorothy Dach";
                                                                seconds = 223924L;
                                                            }}),
                                                        }};
                                                        variables = new org.openapis.openapi.models.shared.VariableDefinition[]{{
                                                            add(new VariableDefinition("blanditiis", "error") {{
                                                                name = "Alejandro Purdy DDS";
                                                                value = "consequuntur";
                                                            }}),
                                                            add(new VariableDefinition("modi", "iste") {{
                                                                name = "Violet Price";
                                                                value = "earum";
                                                            }}),
                                                            add(new VariableDefinition("delectus", "quaerat") {{
                                                                name = "Casey Stracke";
                                                                value = "libero";
                                                            }}),
                                                            add(new VariableDefinition("ipsum", "hic") {{
                                                                name = "Gene Effertz";
                                                                value = "qui";
                                                            }}),
                                                        }};
                                                    }};
                                                }}),
                                                add(new UpdateDetectorRequest("illum", "sequi",                 new DetectorStateDefinition("natus",                 new org.openapis.openapi.models.shared.TimerDefinition[]{{
                                                                                    add(new TimerDefinition("maiores", 985033L) {{
                                                                                        name = "Camille Heidenreich";
                                                                                        seconds = 780427L;
                                                                                    }}),
                                                                                    add(new TimerDefinition("ea", 136900L) {{
                                                                                        name = "Miss Vicky Kuphal";
                                                                                        seconds = 368584L;
                                                                                    }}),
                                                                                    add(new TimerDefinition("dicta", 224317L) {{
                                                                                        name = "Elena Gulgowski";
                                                                                        seconds = 511319L;
                                                                                    }}),
                                                                                    add(new TimerDefinition("nostrum", 960835L) {{
                                                                                        name = "Ryan Jaskolski";
                                                                                        seconds = 972920L;
                                                                                    }}),
                                                                                }},                 new org.openapis.openapi.models.shared.VariableDefinition[]{{
                                                                                    add(new VariableDefinition("inventore", "magnam") {{
                                                                                        name = "Nathaniel Ryan";
                                                                                        value = "aliquid";
                                                                                    }}),
                                                                                    add(new VariableDefinition("eaque", "a") {{
                                                                                        name = "Krista Feeney";
                                                                                        value = "minima";
                                                                                    }}),
                                                                                    add(new VariableDefinition("fugit", "accusamus") {{
                                                                                        name = "Richard Anderson";
                                                                                        value = "aliquam";
                                                                                    }}),
                                                                                    add(new VariableDefinition("velit", "eum") {{
                                                                                        name = "Ellen Borer";
                                                                                        value = "placeat";
                                                                                    }}),
                                                                                }});) {{
                                                    detectorModelName = "maxime";
                                                    keyValue = "pariatur";
                                                    messageId = "soluta";
                                                    state = new DetectorStateDefinition("dolore",                 new org.openapis.openapi.models.shared.TimerDefinition[]{{
                                                                        add(new TimerDefinition("consequatur", 669917L) {{
                                                                            name = "Mr. Sonya Bradtke";
                                                                            seconds = 929530L;
                                                                        }}),
                                                                        add(new TimerDefinition("qui", 63955L) {{
                                                                            name = "Sherman Wyman";
                                                                            seconds = 586410L;
                                                                        }}),
                                                                    }},                 new org.openapis.openapi.models.shared.VariableDefinition[]{{
                                                                        add(new VariableDefinition("quis", "ipsum") {{
                                                                            name = "Toni Wolff";
                                                                            value = "omnis";
                                                                        }}),
                                                                        add(new VariableDefinition("hic", "distinctio") {{
                                                                            name = "Karl Feeney";
                                                                            value = "dignissimos";
                                                                        }}),
                                                                        add(new VariableDefinition("dolore", "quibusdam") {{
                                                                            name = "Lonnie Murray";
                                                                            value = "ducimus";
                                                                        }}),
                                                                    }}) {{
                                                        stateName = "dicta";
                                                        timers = new org.openapis.openapi.models.shared.TimerDefinition[]{{
                                                            add(new TimerDefinition("aliquid", 463150L) {{
                                                                name = "Randall Cole";
                                                                seconds = 704474L;
                                                            }}),
                                                            add(new TimerDefinition("odio", 124833L) {{
                                                                name = "Marty Deckow";
                                                                seconds = 164959L;
                                                            }}),
                                                            add(new TimerDefinition("et", 903720L) {{
                                                                name = "Miss Candice Weimann";
                                                                seconds = 748664L;
                                                            }}),
                                                        }};
                                                        variables = new org.openapis.openapi.models.shared.VariableDefinition[]{{
                                                            add(new VariableDefinition("delectus", "dolorem") {{
                                                                name = "Gayle Lueilwitz";
                                                                value = "aperiam";
                                                            }}),
                                                        }};
                                                    }};
                                                }}),
                                            }});) {{
                xAmzAlgorithm = "autem";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "quas";
                xAmzDate = "assumenda";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "libero";
            }};            

            BatchUpdateDetectorResponse res = sdk.sdk.batchUpdateDetector(req);

            if (res.batchUpdateDetectorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAlarm

Retrieves information about an alarm.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAlarmRequest;
import org.openapis.openapi.models.operations.DescribeAlarmResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAlarmRequest req = new DescribeAlarmRequest("tempora") {{
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "provident";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "odio";
                keyValue = "eius";
            }};            

            DescribeAlarmResponse res = sdk.sdk.describeAlarm(req);

            if (res.describeAlarmResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDetector

Returns information about the specified detector (instance).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDetectorRequest;
import org.openapis.openapi.models.operations.DescribeDetectorResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDetectorRequest req = new DescribeDetectorRequest("esse") {{
                xAmzAlgorithm = "rem";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "reprehenderit";
                xAmzDate = "quidem";
                xAmzSecurityToken = "fugiat";
                xAmzSignature = "ut";
                xAmzSignedHeaders = "eum";
                keyValue = "suscipit";
            }};            

            DescribeDetectorResponse res = sdk.sdk.describeDetector(req);

            if (res.describeDetectorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAlarms

Lists one or more alarms. The operation returns only the metadata associated with each alarm.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAlarmsRequest;
import org.openapis.openapi.models.operations.ListAlarmsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAlarmsRequest req = new ListAlarmsRequest("eos") {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "quisquam";
                xAmzCredential = "veritatis";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "id";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "neque";
                maxResults = 778696L;
                nextToken = "illum";
            }};            

            ListAlarmsResponse res = sdk.sdk.listAlarms(req);

            if (res.listAlarmsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDetectors

Lists detectors (the instances of a detector model).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDetectorsRequest;
import org.openapis.openapi.models.operations.ListDetectorsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDetectorsRequest req = new ListDetectorsRequest("fuga") {{
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "eos";
                xAmzCredential = "voluptas";
                xAmzDate = "ab";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "tempora";
                maxResults = 892050L;
                nextToken = "ipsam";
                stateName = "aspernatur";
            }};            

            ListDetectorsResponse res = sdk.sdk.listDetectors(req);

            if (res.listDetectorsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
