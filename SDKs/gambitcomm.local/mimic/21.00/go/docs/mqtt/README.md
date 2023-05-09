# Mqtt

### Available Operations

* [ProtocolMqttClientGetProtstate](#protocolmqttclientgetprotstate) - Show the agent's MQTT TCP connection state
* [ProtocolMqttClientGetState](#protocolmqttclientgetstate) - Show the agent's MQTT state
* [ProtocolMqttClientMessageCard](#protocolmqttclientmessagecard) - Show the agent's current messages' cardinality
* [ProtocolMqttClientMessageGet](#protocolmqttclientmessageget) - Show the agent's message attributes
* [ProtocolMqttClientMessageSet](#protocolmqttclientmessageset) - Set the agent's message attributes
* [ProtocolMqttClientResubscribe](#protocolmqttclientresubscribe) - Restart receiving messages from a subcription of the agent
* [ProtocolMqttClientRuntimeAbort](#protocolmqttclientruntimeabort) - Abort agent's MQTT TCP session without sending DISCONNECT command
* [ProtocolMqttClientRuntimeConnect](#protocolmqttclientruntimeconnect) - Start agent's MQTT TCP session
* [ProtocolMqttClientRuntimeDisconnect](#protocolmqttclientruntimedisconnect) - Disconnect agent's MQTT TCP session by sending DISCONNECT command
* [ProtocolMqttClientSetBroker](#protocolmqttclientsetbroker) - Set the agent's MQTT TCP connection target broker
* [ProtocolMqttClientSetCleansession](#protocolmqttclientsetcleansession) - Set the agent's MQTT session
* [ProtocolMqttClientSetClientid](#protocolmqttclientsetclientid) - Set the agent's MQTT client ID
* [ProtocolMqttClientSetKeepalive](#protocolmqttclientsetkeepalive) - Set the agent's MQTT TCP keepalive
* [ProtocolMqttClientSetOnDisconnect](#protocolmqttclientsetondisconnect) - Set the agent's MQTT disconnection action
* [ProtocolMqttClientSetPassword](#protocolmqttclientsetpassword) - Set the agent's MQTT client password
* [ProtocolMqttClientSetPort](#protocolmqttclientsetport) - Set the agent's MQTT TCP connection target port
* [ProtocolMqttClientSetUsername](#protocolmqttclientsetusername) - Set the agent's MQTT client username
* [ProtocolMqttClientSetWillmsg](#protocolmqttclientsetwillmsg) - Set the agent's MQTT client's will
* [ProtocolMqttClientSetWillqos](#protocolmqttclientsetwillqos) - Set the agent's MQTT will message's QOS field
* [ProtocolMqttClientSetWillretain](#protocolmqttclientsetwillretain) - Set the agent's MQTT retained will
* [ProtocolMqttClientSetWilltopic](#protocolmqttclientsetwilltopic) - Set the agent's MQTT client will's topic
* [ProtocolMqttClientSubscribeCard](#protocolmqttclientsubscribecard) - Show the agent's current subscriptions' cardinality
* [ProtocolMqttClientSubscribeGet](#protocolmqttclientsubscribeget) - Show the agent's subscription attributes
* [ProtocolMqttClientSubscribeSet](#protocolmqttclientsubscribeset) - Set the agent's subscribe attributes
* [ProtocolMqttClientUnsubscribe](#protocolmqttclientunsubscribe) - Stops receiving messages from a subcription of the agent
* [ProtocolMqttGetArgs](#protocolmqttgetargs) - Show the agent's MQTT argument structure
* [ProtocolMqttGetConfig](#protocolmqttgetconfig) - Show the agent's MQTT configuration
* [ProtocolMqttGetStatistics](#protocolmqttgetstatistics) - Show the agent's MQTT statistics
* [ProtocolMqttGetStatsHdr](#protocolmqttgetstatshdr) - Show the MQTT statistics headers
* [ProtocolMqttGetTrace](#protocolmqttgettrace) - Show the agent's MQTT traffic tracing
* [ProtocolMqttSetConfig](#protocolmqttsetconfig) - Set the agent's MQTT configuration
* [ProtocolMqttSetTrace](#protocolmqttsettrace) - Set the agent's MQTT traffic tracing

## ProtocolMqttClientGetProtstate

0 - stopped, 2 - disconnected, 3 - connecting, 4 - connected, 5 - waiting for CONNACK, 6 - waiting for SUBACK, 7 - CONNACK received, in steady state

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Mqtt.ProtocolMqttClientGetProtstate(ctx, operations.ProtocolMqttClientGetProtstateRequest{
        AgentNum: 411820,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolMqttClientGetProtstate200ApplicationJSONInt32Integers != nil {
        // handle response
    }
}
```

## ProtocolMqttClientGetState

0 means stopped, 1 means running

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Mqtt.ProtocolMqttClientGetState(ctx, operations.ProtocolMqttClientGetStateRequest{
        AgentNum: 396506,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolMqttClientGetState200ApplicationJSONInt32Integers != nil {
        // handle response
    }
}
```

## ProtocolMqttClientMessageCard

0 or more

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Mqtt.ProtocolMqttClientMessageCard(ctx, operations.ProtocolMqttClientMessageCardRequest{
        AgentNum: 675439,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolMqttClientMessageCard200ApplicationJSONInt32Integers != nil {
        // handle response
    }
}
```

## ProtocolMqttClientMessageGet

Attribute can be topic, interval, count, sent , pre, post, properties(list of PUBLISH properties), properties.i (i-th PUBLISH property), properties.PROP-NAME (PUBLISH property with name PROP-NAME)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Mqtt.ProtocolMqttClientMessageGet(ctx, operations.ProtocolMqttClientMessageGetRequest{
        AgentNum: 881104,
        Attr: "non",
        MsgNum: 581273,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolMqttClientMessageGet200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ProtocolMqttClientMessageSet

Attribute can not be sent or properties . Use set/{msgNum}/count/{value} together with get/{msgNum}/count to throttle the outgoing MQTT message to the broker.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Mqtt.ProtocolMqttClientMessageSet(ctx, operations.ProtocolMqttClientMessageSetRequest{
        AgentNum: 313218,
        Attr: "accusamus",
        MsgNum: 965417,
        Value: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolMqttClientMessageSet200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ProtocolMqttClientResubscribe

Restarts a subscription

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Mqtt.ProtocolMqttClientResubscribe(ctx, operations.ProtocolMqttClientResubscribeRequest{
        AgentNum: 588465,
        SubNum: 725255,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolMqttClientResubscribe200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolMqttClientRuntimeAbort

Abort a connection

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Mqtt.ProtocolMqttClientRuntimeAbort(ctx, operations.ProtocolMqttClientRuntimeAbortRequest{
        AgentNum: 659669,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolMqttClientRuntimeAbort200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ProtocolMqttClientRuntimeConnect

Start a connection

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Mqtt.ProtocolMqttClientRuntimeConnect(ctx, operations.ProtocolMqttClientRuntimeConnectRequest{
        AgentNum: 501324,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolMqttClientRuntimeConnect200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ProtocolMqttClientRuntimeDisconnect

Graceful disconnect

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Mqtt.ProtocolMqttClientRuntimeDisconnect(ctx, operations.ProtocolMqttClientRuntimeDisconnectRequest{
        AgentNum: 533206,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolMqttClientRuntimeDisconnect200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ProtocolMqttClientSetBroker

Broker IP address

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Mqtt.ProtocolMqttClientSetBroker(ctx, operations.ProtocolMqttClientSetBrokerRequest{
        AgentNum: 956084,
        BrokerAddr: "amet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolMqttClientSetBroker200ApplicationJSONInt32Integers != nil {
        // handle response
    }
}
```

## ProtocolMqttClientSetCleansession

1 for clean session , 0 not

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Mqtt.ProtocolMqttClientSetCleansession(ctx, operations.ProtocolMqttClientSetCleansessionRequest{
        AgentNum: 643990,
        CleanOrNot: 394869,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolMqttClientSetCleansession200ApplicationJSONInt32Integers != nil {
        // handle response
    }
}
```

## ProtocolMqttClientSetClientid

MQTT client ID

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Mqtt.ProtocolMqttClientSetClientid(ctx, operations.ProtocolMqttClientSetClientidRequest{
        AgentNum: 423855,
        ClientID: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolMqttClientSetClientid200ApplicationJSONInt32Integers != nil {
        // handle response
    }
}
```

## ProtocolMqttClientSetKeepalive

Keep alive the TCP connection

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Mqtt.ProtocolMqttClientSetKeepalive(ctx, operations.ProtocolMqttClientSetKeepaliveRequest{
        AgentNum: 606393,
        AliveTime: 474867,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolMqttClientSetKeepalive200ApplicationJSONInt32Integers != nil {
        // handle response
    }
}
```

## ProtocolMqttClientSetOnDisconnect

Action to take when MQTT session is disconnected

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Mqtt.ProtocolMqttClientSetOnDisconnect(ctx, operations.ProtocolMqttClientSetOnDisconnectRequest{
        Action: "perferendis",
        AgentNum: 470132,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolMqttClientSetOnDisconnect200ApplicationJSONInt32Integers != nil {
        // handle response
    }
}
```

## ProtocolMqttClientSetPassword

Client password

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Mqtt.ProtocolMqttClientSetPassword(ctx, operations.ProtocolMqttClientSetPasswordRequest{
        AgentNum: 301575,
        Password: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolMqttClientSetPassword200ApplicationJSONInt32Integers != nil {
        // handle response
    }
}
```

## ProtocolMqttClientSetPort

target TCP port

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Mqtt.ProtocolMqttClientSetPort(ctx, operations.ProtocolMqttClientSetPortRequest{
        AgentNum: 660174,
        Port: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolMqttClientSetPort200ApplicationJSONInt32Integers != nil {
        // handle response
    }
}
```

## ProtocolMqttClientSetUsername

Client username

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Mqtt.ProtocolMqttClientSetUsername(ctx, operations.ProtocolMqttClientSetUsernameRequest{
        AgentNum: 290077,
        Username: "Geraldine.Mosciski87",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolMqttClientSetUsername200ApplicationJSONInt32Integers != nil {
        // handle response
    }
}
```

## ProtocolMqttClientSetWillmsg

Will message

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Mqtt.ProtocolMqttClientSetWillmsg(ctx, operations.ProtocolMqttClientSetWillmsgRequest{
        AgentNum: 135474,
        Msg: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolMqttClientSetWillmsg200ApplicationJSONInt32Integers != nil {
        // handle response
    }
}
```

## ProtocolMqttClientSetWillqos

QOS field

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Mqtt.ProtocolMqttClientSetWillqos(ctx, operations.ProtocolMqttClientSetWillqosRequest{
        AgentNum: 298282,
        Qos: "et",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolMqttClientSetWillqos200ApplicationJSONInt32Integers != nil {
        // handle response
    }
}
```

## ProtocolMqttClientSetWillretain

Retaining will

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Mqtt.ProtocolMqttClientSetWillretain(ctx, operations.ProtocolMqttClientSetWillretainRequest{
        AgentNum: 569965,
        Retain: "ullam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolMqttClientSetWillretain200ApplicationJSONInt32Integers != nil {
        // handle response
    }
}
```

## ProtocolMqttClientSetWilltopic

Will topic for the will message

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Mqtt.ProtocolMqttClientSetWilltopic(ctx, operations.ProtocolMqttClientSetWilltopicRequest{
        AgentNum: 590873,
        Topic: "quos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolMqttClientSetWilltopic200ApplicationJSONInt32Integers != nil {
        // handle response
    }
}
```

## ProtocolMqttClientSubscribeCard

0 or more

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Mqtt.ProtocolMqttClientSubscribeCard(ctx, operations.ProtocolMqttClientSubscribeCardRequest{
        AgentNum: 574325,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolMqttClientSubscribeCard200ApplicationJSONInt32Integers != nil {
        // handle response
    }
}
```

## ProtocolMqttClientSubscribeGet

Attribute can be topic, properties(list of SUBSCRIBE properties), properties.i (i-th SUBSCRIBE property), properties.PROP-NAME (SUBSCRIBE property with name PROP-NAME)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Mqtt.ProtocolMqttClientSubscribeGet(ctx, operations.ProtocolMqttClientSubscribeGetRequest{
        AgentNum: 33625,
        Attr: "mollitia",
        SubNum: 968962,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolMqttClientSubscribeGet200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ProtocolMqttClientSubscribeSet

Attribute can not be properties .

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Mqtt.ProtocolMqttClientSubscribeSet(ctx, operations.ProtocolMqttClientSubscribeSetRequest{
        AgentNum: 652103,
        Attr: "ad",
        SubNum: 431418,
        Value: "dolor",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolMqttClientSubscribeSet200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ProtocolMqttClientUnsubscribe

Stops a subscription

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Mqtt.ProtocolMqttClientUnsubscribe(ctx, operations.ProtocolMqttClientUnsubscribeRequest{
        AgentNum: 896547,
        SubNum: 141264,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolMqttClientUnsubscribe200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolMqttGetArgs

Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Mqtt.ProtocolMqttGetArgs(ctx, operations.ProtocolMqttGetArgsRequest{
        AgentNum: 367562,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolMqttGetArgs200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ProtocolMqttGetConfig

Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Mqtt.ProtocolMqttGetConfig(ctx, operations.ProtocolMqttGetConfigRequest{
        AgentNum: 97260,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigMQTT != nil {
        // handle response
    }
}
```

## ProtocolMqttGetStatistics

Statistics of fields indicated in the headers

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Mqtt.ProtocolMqttGetStatistics(ctx, operations.ProtocolMqttGetStatisticsRequest{
        AgentNum: 435865,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolMqttGetStatistics200ApplicationJSONInt32Integers != nil {
        // handle response
    }
}
```

## ProtocolMqttGetStatsHdr

The headers of statistics fields

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Mqtt.ProtocolMqttGetStatsHdr(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolMqttGetStatsHdr200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ProtocolMqttGetTrace

Trace 1 means enabled, 0 means not

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Mqtt.ProtocolMqttGetTrace(ctx, operations.ProtocolMqttGetTraceRequest{
        AgentNum: 984043,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigMQTT != nil {
        // handle response
    }
}
```

## ProtocolMqttSetConfig

Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Mqtt.ProtocolMqttSetConfig(ctx, operations.ProtocolMqttSetConfigRequest{
        AgentNum: 891924,
        Argument: "eius",
        Value: "maxime",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolMqttSetConfig200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolMqttSetTrace

1 to enable, 0 to disable

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Mqtt.ProtocolMqttSetTrace(ctx, operations.ProtocolMqttSetTraceRequest{
        AgentNum: 537023,
        EnableOrNot: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolMqttSetTrace200ApplicationJSONString != nil {
        // handle response
    }
}
```
