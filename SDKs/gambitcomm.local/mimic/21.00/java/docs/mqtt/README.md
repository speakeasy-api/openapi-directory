# mqtt

### Available Operations

* [protocolMqttClientGetProtstate](#protocolmqttclientgetprotstate) - Show the agent's MQTT TCP connection state
* [protocolMqttClientGetState](#protocolmqttclientgetstate) - Show the agent's MQTT state
* [protocolMqttClientMessageCard](#protocolmqttclientmessagecard) - Show the agent's current messages' cardinality
* [protocolMqttClientMessageGet](#protocolmqttclientmessageget) - Show the agent's message attributes
* [protocolMqttClientMessageSet](#protocolmqttclientmessageset) - Set the agent's message attributes
* [protocolMqttClientResubscribe](#protocolmqttclientresubscribe) - Restart receiving messages from a subcription of the agent
* [protocolMqttClientRuntimeAbort](#protocolmqttclientruntimeabort) - Abort agent's MQTT TCP session without sending DISCONNECT command
* [protocolMqttClientRuntimeConnect](#protocolmqttclientruntimeconnect) - Start agent's MQTT TCP session
* [protocolMqttClientRuntimeDisconnect](#protocolmqttclientruntimedisconnect) - Disconnect agent's MQTT TCP session by sending DISCONNECT command
* [protocolMqttClientSetBroker](#protocolmqttclientsetbroker) - Set the agent's MQTT TCP connection target broker
* [protocolMqttClientSetCleansession](#protocolmqttclientsetcleansession) - Set the agent's MQTT session
* [protocolMqttClientSetClientid](#protocolmqttclientsetclientid) - Set the agent's MQTT client ID
* [protocolMqttClientSetKeepalive](#protocolmqttclientsetkeepalive) - Set the agent's MQTT TCP keepalive
* [protocolMqttClientSetOnDisconnect](#protocolmqttclientsetondisconnect) - Set the agent's MQTT disconnection action
* [protocolMqttClientSetPassword](#protocolmqttclientsetpassword) - Set the agent's MQTT client password
* [protocolMqttClientSetPort](#protocolmqttclientsetport) - Set the agent's MQTT TCP connection target port
* [protocolMqttClientSetUsername](#protocolmqttclientsetusername) - Set the agent's MQTT client username
* [protocolMqttClientSetWillmsg](#protocolmqttclientsetwillmsg) - Set the agent's MQTT client's will
* [protocolMqttClientSetWillqos](#protocolmqttclientsetwillqos) - Set the agent's MQTT will message's QOS field
* [protocolMqttClientSetWillretain](#protocolmqttclientsetwillretain) - Set the agent's MQTT retained will
* [protocolMqttClientSetWilltopic](#protocolmqttclientsetwilltopic) - Set the agent's MQTT client will's topic
* [protocolMqttClientSubscribeCard](#protocolmqttclientsubscribecard) - Show the agent's current subscriptions' cardinality
* [protocolMqttClientSubscribeGet](#protocolmqttclientsubscribeget) - Show the agent's subscription attributes
* [protocolMqttClientSubscribeSet](#protocolmqttclientsubscribeset) - Set the agent's subscribe attributes
* [protocolMqttClientUnsubscribe](#protocolmqttclientunsubscribe) - Stops receiving messages from a subcription of the agent
* [protocolMqttGetArgs](#protocolmqttgetargs) - Show the agent's MQTT argument structure
* [protocolMqttGetConfig](#protocolmqttgetconfig) - Show the agent's MQTT configuration
* [protocolMqttGetStatistics](#protocolmqttgetstatistics) - Show the agent's MQTT statistics
* [protocolMqttGetStatsHdr](#protocolmqttgetstatshdr) - Show the MQTT statistics headers
* [protocolMqttGetTrace](#protocolmqttgettrace) - Show the agent's MQTT traffic tracing
* [protocolMqttSetConfig](#protocolmqttsetconfig) - Set the agent's MQTT configuration
* [protocolMqttSetTrace](#protocolmqttsettrace) - Set the agent's MQTT traffic tracing

## protocolMqttClientGetProtstate

0 - stopped, 2 - disconnected, 3 - connecting, 4 - connected, 5 - waiting for CONNACK, 6 - waiting for SUBACK, 7 - CONNACK received, in steady state

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolMqttClientGetProtstateRequest;
import org.openapis.openapi.models.operations.ProtocolMqttClientGetProtstateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis", "cupiditate") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolMqttClientGetProtstateRequest req = new ProtocolMqttClientGetProtstateRequest(181631);            

            ProtocolMqttClientGetProtstateResponse res = sdk.mqtt.protocolMqttClientGetProtstate(req);

            if (res.protocolMqttClientGetProtstate200ApplicationJSONInt32Integers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolMqttClientGetState

0 means stopped, 1 means running

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolMqttClientGetStateRequest;
import org.openapis.openapi.models.operations.ProtocolMqttClientGetStateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae", "laudantium") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolMqttClientGetStateRequest req = new ProtocolMqttClientGetStateRequest(485628);            

            ProtocolMqttClientGetStateResponse res = sdk.mqtt.protocolMqttClientGetState(req);

            if (res.protocolMqttClientGetState200ApplicationJSONInt32Integers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolMqttClientMessageCard

0 or more

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolMqttClientMessageCardRequest;
import org.openapis.openapi.models.operations.ProtocolMqttClientMessageCardResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati", "voluptatibus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolMqttClientMessageCardRequest req = new ProtocolMqttClientMessageCardRequest(787542);            

            ProtocolMqttClientMessageCardResponse res = sdk.mqtt.protocolMqttClientMessageCard(req);

            if (res.protocolMqttClientMessageCard200ApplicationJSONInt32Integers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolMqttClientMessageGet

Attribute can be topic, interval, count, sent , pre, post, properties(list of PUBLISH properties), properties.i (i-th PUBLISH property), properties.PROP-NAME (PUBLISH property with name PROP-NAME)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolMqttClientMessageGetRequest;
import org.openapis.openapi.models.operations.ProtocolMqttClientMessageGetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero", "omnis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolMqttClientMessageGetRequest req = new ProtocolMqttClientMessageGetRequest(338159, "ipsum", 961571);            

            ProtocolMqttClientMessageGetResponse res = sdk.mqtt.protocolMqttClientMessageGet(req);

            if (res.protocolMqttClientMessageGet200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolMqttClientMessageSet

Attribute can not be sent or properties . Use set/{msgNum}/count/{value} together with get/{msgNum}/count to throttle the outgoing MQTT message to the broker.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolMqttClientMessageSetRequest;
import org.openapis.openapi.models.operations.ProtocolMqttClientMessageSetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate", "consectetur") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolMqttClientMessageSetRequest req = new ProtocolMqttClientMessageSetRequest(878870, "tenetur", 492268, "hic");            

            ProtocolMqttClientMessageSetResponse res = sdk.mqtt.protocolMqttClientMessageSet(req);

            if (res.protocolMqttClientMessageSet200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolMqttClientResubscribe

Restarts a subscription

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolMqttClientResubscribeRequest;
import org.openapis.openapi.models.operations.ProtocolMqttClientResubscribeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio", "quod") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolMqttClientResubscribeRequest req = new ProtocolMqttClientResubscribeRequest(486160, 630448);            

            ProtocolMqttClientResubscribeResponse res = sdk.mqtt.protocolMqttClientResubscribe(req);

            if (res.protocolMqttClientResubscribe200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolMqttClientRuntimeAbort

Abort a connection

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolMqttClientRuntimeAbortRequest;
import org.openapis.openapi.models.operations.ProtocolMqttClientRuntimeAbortResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis", "vero") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolMqttClientRuntimeAbortRequest req = new ProtocolMqttClientRuntimeAbortRequest(498140);            

            ProtocolMqttClientRuntimeAbortResponse res = sdk.mqtt.protocolMqttClientRuntimeAbort(req);

            if (res.protocolMqttClientRuntimeAbort200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolMqttClientRuntimeConnect

Start a connection

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolMqttClientRuntimeConnectRequest;
import org.openapis.openapi.models.operations.ProtocolMqttClientRuntimeConnectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore", "quibusdam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolMqttClientRuntimeConnectRequest req = new ProtocolMqttClientRuntimeConnectRequest(848944);            

            ProtocolMqttClientRuntimeConnectResponse res = sdk.mqtt.protocolMqttClientRuntimeConnect(req);

            if (res.protocolMqttClientRuntimeConnect200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolMqttClientRuntimeDisconnect

Graceful disconnect

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolMqttClientRuntimeDisconnectRequest;
import org.openapis.openapi.models.operations.ProtocolMqttClientRuntimeDisconnectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi", "natus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolMqttClientRuntimeDisconnectRequest req = new ProtocolMqttClientRuntimeDisconnectRequest(773326);            

            ProtocolMqttClientRuntimeDisconnectResponse res = sdk.mqtt.protocolMqttClientRuntimeDisconnect(req);

            if (res.protocolMqttClientRuntimeDisconnect200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolMqttClientSetBroker

Broker IP address

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolMqttClientSetBrokerRequest;
import org.openapis.openapi.models.operations.ProtocolMqttClientSetBrokerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut", "voluptatibus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolMqttClientSetBrokerRequest req = new ProtocolMqttClientSetBrokerRequest(347233, "nulla");            

            ProtocolMqttClientSetBrokerResponse res = sdk.mqtt.protocolMqttClientSetBroker(req);

            if (res.protocolMqttClientSetBroker200ApplicationJSONInt32Integers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolMqttClientSetCleansession

1 for clean session , 0 not

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolMqttClientSetCleansessionRequest;
import org.openapis.openapi.models.operations.ProtocolMqttClientSetCleansessionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit", "porro") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolMqttClientSetCleansessionRequest req = new ProtocolMqttClientSetCleansessionRequest(981830, 985033);            

            ProtocolMqttClientSetCleansessionResponse res = sdk.mqtt.protocolMqttClientSetCleansession(req);

            if (res.protocolMqttClientSetCleansession200ApplicationJSONInt32Integers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolMqttClientSetClientid

MQTT client ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolMqttClientSetClientidRequest;
import org.openapis.openapi.models.operations.ProtocolMqttClientSetClientidResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto", "eligendi") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolMqttClientSetClientidRequest req = new ProtocolMqttClientSetClientidRequest(497391, "alias");            

            ProtocolMqttClientSetClientidResponse res = sdk.mqtt.protocolMqttClientSetClientid(req);

            if (res.protocolMqttClientSetClientid200ApplicationJSONInt32Integers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolMqttClientSetKeepalive

Keep alive the TCP connection

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolMqttClientSetKeepaliveRequest;
import org.openapis.openapi.models.operations.ProtocolMqttClientSetKeepaliveResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia", "tempora") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolMqttClientSetKeepaliveRequest req = new ProtocolMqttClientSetKeepaliveRequest(368584, 410492);            

            ProtocolMqttClientSetKeepaliveResponse res = sdk.mqtt.protocolMqttClientSetKeepalive(req);

            if (res.protocolMqttClientSetKeepalive200ApplicationJSONInt32Integers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolMqttClientSetOnDisconnect

Action to take when MQTT session is disconnected

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolMqttClientSetOnDisconnectRequest;
import org.openapis.openapi.models.operations.ProtocolMqttClientSetOnDisconnectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur", "vel") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolMqttClientSetOnDisconnectRequest req = new ProtocolMqttClientSetOnDisconnectRequest("possimus", 297842);            

            ProtocolMqttClientSetOnDisconnectResponse res = sdk.mqtt.protocolMqttClientSetOnDisconnect(req);

            if (res.protocolMqttClientSetOnDisconnect200ApplicationJSONInt32Integers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolMqttClientSetPassword

Client password

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolMqttClientSetPasswordRequest;
import org.openapis.openapi.models.operations.ProtocolMqttClientSetPasswordResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ratione", "ex") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolMqttClientSetPasswordRequest req = new ProtocolMqttClientSetPasswordRequest(511319, "dicta");            

            ProtocolMqttClientSetPasswordResponse res = sdk.mqtt.protocolMqttClientSetPassword(req);

            if (res.protocolMqttClientSetPassword200ApplicationJSONInt32Integers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolMqttClientSetPort

target TCP port

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolMqttClientSetPortRequest;
import org.openapis.openapi.models.operations.ProtocolMqttClientSetPortResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor", "maiores") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolMqttClientSetPortRequest req = new ProtocolMqttClientSetPortRequest(97844, "ex");            

            ProtocolMqttClientSetPortResponse res = sdk.mqtt.protocolMqttClientSetPort(req);

            if (res.protocolMqttClientSetPort200ApplicationJSONInt32Integers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolMqttClientSetUsername

Client username

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolMqttClientSetUsernameRequest;
import org.openapis.openapi.models.operations.ProtocolMqttClientSetUsernameResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla", "excepturi") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolMqttClientSetUsernameRequest req = new ProtocolMqttClientSetUsernameRequest(972920, "nostrum");            

            ProtocolMqttClientSetUsernameResponse res = sdk.mqtt.protocolMqttClientSetUsername(req);

            if (res.protocolMqttClientSetUsername200ApplicationJSONInt32Integers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolMqttClientSetWillmsg

Will message

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolMqttClientSetWillmsgRequest;
import org.openapis.openapi.models.operations.ProtocolMqttClientSetWillmsgResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente", "quisquam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolMqttClientSetWillmsgRequest req = new ProtocolMqttClientSetWillmsgRequest(906556, "ea");            

            ProtocolMqttClientSetWillmsgResponse res = sdk.mqtt.protocolMqttClientSetWillmsg(req);

            if (res.protocolMqttClientSetWillmsg200ApplicationJSONInt32Integers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolMqttClientSetWillqos

QOS field

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolMqttClientSetWillqosRequest;
import org.openapis.openapi.models.operations.ProtocolMqttClientSetWillqosResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit", "corporis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolMqttClientSetWillqosRequest req = new ProtocolMqttClientSetWillqosRequest(333145, "aliquid");            

            ProtocolMqttClientSetWillqosResponse res = sdk.mqtt.protocolMqttClientSetWillqos(req);

            if (res.protocolMqttClientSetWillqos200ApplicationJSONInt32Integers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolMqttClientSetWillretain

Retaining will

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolMqttClientSetWillretainRequest;
import org.openapis.openapi.models.operations.ProtocolMqttClientSetWillretainResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("inventore", "magnam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolMqttClientSetWillretainRequest req = new ProtocolMqttClientSetWillretainRequest(407241, "quo");            

            ProtocolMqttClientSetWillretainResponse res = sdk.mqtt.protocolMqttClientSetWillretain(req);

            if (res.protocolMqttClientSetWillretain200ApplicationJSONInt32Integers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolMqttClientSetWilltopic

Will topic for the will message

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolMqttClientSetWilltopicRequest;
import org.openapis.openapi.models.operations.ProtocolMqttClientSetWilltopicResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur", "recusandae") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolMqttClientSetWilltopicRequest req = new ProtocolMqttClientSetWilltopicRequest(132487, "minima");            

            ProtocolMqttClientSetWilltopicResponse res = sdk.mqtt.protocolMqttClientSetWilltopic(req);

            if (res.protocolMqttClientSetWilltopic200ApplicationJSONInt32Integers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolMqttClientSubscribeCard

0 or more

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolMqttClientSubscribeCardRequest;
import org.openapis.openapi.models.operations.ProtocolMqttClientSubscribeCardResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque", "a") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolMqttClientSubscribeCardRequest req = new ProtocolMqttClientSubscribeCardRequest(725595);            

            ProtocolMqttClientSubscribeCardResponse res = sdk.mqtt.protocolMqttClientSubscribeCard(req);

            if (res.protocolMqttClientSubscribeCard200ApplicationJSONInt32Integers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolMqttClientSubscribeGet

Attribute can be topic, properties(list of SUBSCRIBE properties), properties.i (i-th SUBSCRIBE property), properties.PROP-NAME (SUBSCRIBE property with name PROP-NAME)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolMqttClientSubscribeGetRequest;
import org.openapis.openapi.models.operations.ProtocolMqttClientSubscribeGetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut", "aut") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolMqttClientSubscribeGetRequest req = new ProtocolMqttClientSubscribeGetRequest(533466, "impedit", 304582);            

            ProtocolMqttClientSubscribeGetResponse res = sdk.mqtt.protocolMqttClientSubscribeGet(req);

            if (res.protocolMqttClientSubscribeGet200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolMqttClientSubscribeSet

Attribute can not be properties .

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolMqttClientSubscribeSetRequest;
import org.openapis.openapi.models.operations.ProtocolMqttClientSubscribeSetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit", "accusamus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolMqttClientSubscribeSetRequest req = new ProtocolMqttClientSubscribeSetRequest(79522, "non", 89603, "dolorum");            

            ProtocolMqttClientSubscribeSetResponse res = sdk.mqtt.protocolMqttClientSubscribeSet(req);

            if (res.protocolMqttClientSubscribeSet200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolMqttClientUnsubscribe

Stops a subscription

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolMqttClientUnsubscribeRequest;
import org.openapis.openapi.models.operations.ProtocolMqttClientUnsubscribeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum", "placeat") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolMqttClientUnsubscribeRequest req = new ProtocolMqttClientUnsubscribeRequest(245367, 432148);            

            ProtocolMqttClientUnsubscribeResponse res = sdk.mqtt.protocolMqttClientUnsubscribe(req);

            if (res.protocolMqttClientUnsubscribe200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolMqttGetArgs

Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolMqttGetArgsRequest;
import org.openapis.openapi.models.operations.ProtocolMqttGetArgsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("autem", "nobis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolMqttGetArgsRequest req = new ProtocolMqttGetArgsRequest(557369);            

            ProtocolMqttGetArgsResponse res = sdk.mqtt.protocolMqttGetArgs(req);

            if (res.protocolMqttGetArgs200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolMqttGetConfig

Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolMqttGetConfigRequest;
import org.openapis.openapi.models.operations.ProtocolMqttGetConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda", "nulla") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolMqttGetConfigRequest req = new ProtocolMqttGetConfigRequest(379034);            

            ProtocolMqttGetConfigResponse res = sdk.mqtt.protocolMqttGetConfig(req);

            if (res.configMQTT != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolMqttGetStatistics

Statistics of fields indicated in the headers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolMqttGetStatisticsRequest;
import org.openapis.openapi.models.operations.ProtocolMqttGetStatisticsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero", "quasi") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolMqttGetStatisticsRequest req = new ProtocolMqttGetStatisticsRequest(270328);            

            ProtocolMqttGetStatisticsResponse res = sdk.mqtt.protocolMqttGetStatistics(req);

            if (res.protocolMqttGetStatistics200ApplicationJSONInt32Integers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolMqttGetStatsHdr

The headers of statistics fields

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolMqttGetStatsHdrResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam", "explicabo") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolMqttGetStatsHdrResponse res = sdk.mqtt.protocolMqttGetStatsHdr();

            if (res.protocolMqttGetStatsHdr200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolMqttGetTrace

Trace 1 means enabled, 0 means not

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolMqttGetTraceRequest;
import org.openapis.openapi.models.operations.ProtocolMqttGetTraceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident", "ipsa") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolMqttGetTraceRequest req = new ProtocolMqttGetTraceRequest(476477);            

            ProtocolMqttGetTraceResponse res = sdk.mqtt.protocolMqttGetTrace(req);

            if (res.configMQTT != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolMqttSetConfig

Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolMqttSetConfigRequest;
import org.openapis.openapi.models.operations.ProtocolMqttSetConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam", "odio") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolMqttSetConfigRequest req = new ProtocolMqttSetConfigRequest(262118, "esse", "esse");            

            ProtocolMqttSetConfigResponse res = sdk.mqtt.protocolMqttSetConfig(req);

            if (res.protocolMqttSetConfig200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolMqttSetTrace

1 to enable, 0 to disable

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolMqttSetTraceRequest;
import org.openapis.openapi.models.operations.ProtocolMqttSetTraceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem", "fuga") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolMqttSetTraceRequest req = new ProtocolMqttSetTraceRequest(442015, "quidem");            

            ProtocolMqttSetTraceResponse res = sdk.mqtt.protocolMqttSetTrace(req);

            if (res.protocolMqttSetTrace200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
