# state

## Overview

Interactions with state related resources.

### Available Operations

* [createOrUpdateState](#createorupdatestate) - Create or update the state for a connection.
* [getState](#getstate) - Fetch the current state for a connection.

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

            org.openapis.openapi.models.shared.ConnectionStateCreateOrUpdate req = new ConnectionStateCreateOrUpdate("32a4da37-cbaa-4f44-92c4-842c9b2ad32d",                 new ConnectionState("afe81a88-f444-4457-bfec-d47353f63c82", ConnectionStateTypeEnum.GLOBAL) {{
                                globalState = new GlobalState(                new org.openapis.openapi.models.shared.StreamState[]{{
                                                    add(new StreamState(                new StreamDescriptor("repellendus") {{
                                                                        namespace = "culpa";
                                                                    }};) {{
                                                        streamDescriptor = new StreamDescriptor("occaecati") {{
                                                            name = "Tanya Mitchell";
                                                            namespace = "ex";
                                                        }};
                                                        streamState = new java.util.HashMap<String, Object>() {{
                                                            put("at", "ad");
                                                            put("asperiores", "nam");
                                                            put("cumque", "sapiente");
                                                            put("quam", "occaecati");
                                                        }};
                                                    }}),
                                                    add(new StreamState(                new StreamDescriptor("vero") {{
                                                                        namespace = "nisi";
                                                                    }};) {{
                                                        streamDescriptor = new StreamDescriptor("eos") {{
                                                            name = "Hilda Paucek";
                                                            namespace = "magni";
                                                        }};
                                                        streamState = new java.util.HashMap<String, Object>() {{
                                                            put("voluptatibus", "omnis");
                                                            put("quis", "quos");
                                                            put("natus", "aliquam");
                                                        }};
                                                    }}),
                                                    add(new StreamState(                new StreamDescriptor("fugiat") {{
                                                                        namespace = "odio";
                                                                    }};) {{
                                                        streamDescriptor = new StreamDescriptor("ullam") {{
                                                            name = "Andre Buckridge";
                                                            namespace = "libero";
                                                        }};
                                                        streamState = new java.util.HashMap<String, Object>() {{
                                                            put("maiores", "iste");
                                                            put("accusamus", "ipsam");
                                                        }};
                                                    }}),
                                                }}) {{
                                    sharedState = new java.util.HashMap<String, Object>() {{
                                        put("inventore", "eligendi");
                                        put("occaecati", "doloribus");
                                    }};
                                }};;
                                state = new java.util.HashMap<String, Object>() {{
                                    put("rem", "a");
                                    put("nihil", "veniam");
                                    put("aut", "magni");
                                    put("rerum", "voluptatibus");
                                }};
                                streamState = new org.openapis.openapi.models.shared.StreamState[]{{
                                    add(new StreamState(                new StreamDescriptor("voluptate") {{
                                                        namespace = "molestias";
                                                    }};) {{
                                        streamDescriptor = new StreamDescriptor("illo") {{
                                            name = "Melvin Greenholt IV";
                                            namespace = "modi";
                                        }};
                                        streamState = new java.util.HashMap<String, Object>() {{
                                            put("et", "molestiae");
                                            put("autem", "dolore");
                                            put("eius", "nostrum");
                                            put("ex", "amet");
                                        }};
                                    }}),
                                    add(new StreamState(                new StreamDescriptor("praesentium") {{
                                                        namespace = "aliquid";
                                                    }};) {{
                                        streamDescriptor = new StreamDescriptor("accusamus") {{
                                            name = "Dale Welch";
                                            namespace = "molestiae";
                                        }};
                                        streamState = new java.util.HashMap<String, Object>() {{
                                            put("inventore", "doloribus");
                                        }};
                                    }}),
                                    add(new StreamState(                new StreamDescriptor("quod") {{
                                                        namespace = "saepe";
                                                    }};) {{
                                        streamDescriptor = new StreamDescriptor("vel") {{
                                            name = "Vanessa Hilll";
                                            namespace = "ipsum";
                                        }};
                                        streamState = new java.util.HashMap<String, Object>() {{
                                            put("maxime", "vel");
                                            put("distinctio", "cupiditate");
                                            put("hic", "quis");
                                            put("deleniti", "iusto");
                                        }};
                                    }}),
                                    add(new StreamState(                new StreamDescriptor("quasi") {{
                                                        namespace = "sed";
                                                    }};) {{
                                        streamDescriptor = new StreamDescriptor("ea") {{
                                            name = "Sara Hegmann";
                                            namespace = "quam";
                                        }};
                                        streamState = new java.util.HashMap<String, Object>() {{
                                            put("architecto", "fuga");
                                            put("totam", "velit");
                                        }};
                                    }}),
                                }};
                            }};);            

            CreateOrUpdateStateResponse res = sdk.state.createOrUpdateState(req);

            if (res.connectionState != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getState

Fetch the current state for a connection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStateResponse;
import org.openapis.openapi.models.shared.ConnectionIdRequestBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ConnectionIdRequestBody req = new ConnectionIdRequestBody("e5047b4c-21cc-4b42-babc-dc91faabdd88");            

            GetStateResponse res = sdk.state.getState(req);

            if (res.connectionState != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
