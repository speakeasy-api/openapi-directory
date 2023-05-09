# SNMPv3

### Available Operations

* [ProtocolSnmpv3AccessAdd](#protocolsnmpv3accessadd) - Adds a new access entry with the specified parameters.
* [ProtocolSnmpv3AccessClear](#protocolsnmpv3accessclear) - Clears all access entries.
* [ProtocolSnmpv3AccessDel](#protocolsnmpv3accessdel) - Deletes the specified access entry.
* [ProtocolSnmpv3AccessList](#protocolsnmpv3accesslist) - Returns the current acccess entries as an array of strings.
* [ProtocolSnmpv3GetConfig](#protocolsnmpv3getconfig) - Returns the SNMPv3 configuration.
* [ProtocolSnmpv3GetContextEngineid](#protocolsnmpv3getcontextengineid) - Retrieves the contextEngineID for the agent instance.
* [ProtocolSnmpv3GetEngineboots](#protocolsnmpv3getengineboots) - Retrieves the number of times the agent has been restarted.
* [ProtocolSnmpv3GetEngineid](#protocolsnmpv3getengineid) - For started agents, retrieves the current engineID in use by the snmpv3 module.
* [ProtocolSnmpv3GetEnginetime](#protocolsnmpv3getenginetime) - Retrieves the time in seconds for which the agent has been running.
* [ProtocolSnmpv3GroupAdd](#protocolsnmpv3groupadd) - Adds a new group entry with the specified parameters.
* [ProtocolSnmpv3GroupClear](#protocolsnmpv3groupclear) - Clears all group entries.
* [ProtocolSnmpv3GroupDel](#protocolsnmpv3groupdel) - Deletes the specified group entry.
* [ProtocolSnmpv3GroupList](#protocolsnmpv3grouplist) - Returns the current group entries as an array of strings.
* [ProtocolSnmpv3SetConfig](#protocolsnmpv3setconfig) - Changes the SNMPv3 configuration.
* [ProtocolSnmpv3UserAdd](#protocolsnmpv3useradd) - Adds a new user entry with the specified parameters.
* [ProtocolSnmpv3UserClear](#protocolsnmpv3userclear) - Clears all user entries.
* [ProtocolSnmpv3UserDel](#protocolsnmpv3userdel) - Deletes the specified user entry.
* [ProtocolSnmpv3UserList](#protocolsnmpv3userlist) - Returns the current user entries as a Tcl list.
* [ProtocolSnmpv3UsmSave](#protocolsnmpv3usmsave) - Saves current user settings in the currently loaded USM config file.
* [ProtocolSnmpv3UsmSaveas](#protocolsnmpv3usmsaveas) - Saves current user settings in the specified USM config file.
* [ProtocolSnmpv3VacmSave](#protocolsnmpv3vacmsave) - Saves current group, access, view settings in the currently loaded VACM config file.
* [ProtocolSnmpv3VacmSaveas](#protocolsnmpv3vacmsaveas) - Saves current group, access, view settings in the specified VACM config file.
* [ProtocolSnmpv3ViewAdd](#protocolsnmpv3viewadd) - Adds a new view entry with the specified parameters.
* [ProtocolSnmpv3ViewClear](#protocolsnmpv3viewclear) - Clears all view entries.
* [ProtocolSnmpv3ViewDel](#protocolsnmpv3viewdel) - Deletes the specified view entry.
* [ProtocolSnmpv3ViewList](#protocolsnmpv3viewlist) - Returns the current view entries as an array of strings.

## ProtocolSnmpv3AccessAdd

Adds a new access entry with the specified parameters.

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
    res, err := s.SNMPv3.ProtocolSnmpv3AccessAdd(ctx, operations.ProtocolSnmpv3AccessAddRequest{
        AgentNum: 613966,
        ContextMatch: "dolorum",
        GroupName: "deleniti",
        NotifyView: "pariatur",
        Prefix: "provident",
        ReadView: "nobis",
        SecurityLevel: "libero",
        SecurityModel: "delectus",
        WriteView: "quaerat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSnmpv3AccessAdd200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolSnmpv3AccessClear

Clears all access entries.

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
    res, err := s.SNMPv3.ProtocolSnmpv3AccessClear(ctx, operations.ProtocolSnmpv3AccessClearRequest{
        AgentNum: 554242,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSnmpv3AccessClear200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolSnmpv3AccessDel

Deletes the specified access entry.

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
    res, err := s.SNMPv3.ProtocolSnmpv3AccessDel(ctx, operations.ProtocolSnmpv3AccessDelRequest{
        AccessName: "aliquid",
        AgentNum: 212390,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSnmpv3AccessDel200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolSnmpv3AccessList

Returns the current acccess entries as an array of strings.

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
    res, err := s.SNMPv3.ProtocolSnmpv3AccessList(ctx, operations.ProtocolSnmpv3AccessListRequest{
        AgentNum: 209843,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSnmpv3AccessList200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ProtocolSnmpv3GetConfig

Returns the SNMPv3 configuration.

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
    res, err := s.SNMPv3.ProtocolSnmpv3GetConfig(ctx, operations.ProtocolSnmpv3GetConfigRequest{
        AgentNum: 222443,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigSNMPv3 != nil {
        // handle response
    }
}
```

## ProtocolSnmpv3GetContextEngineid

Retrieves the contextEngineID for the agent instance.

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
    res, err := s.SNMPv3.ProtocolSnmpv3GetContextEngineid(ctx, operations.ProtocolSnmpv3GetContextEngineidRequest{
        AgentNum: 186193,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSnmpv3GetContextEngineid200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolSnmpv3GetEngineboots

Retrieves the number of times the agent has been restarted.

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
    res, err := s.SNMPv3.ProtocolSnmpv3GetEngineboots(ctx, operations.ProtocolSnmpv3GetEnginebootsRequest{
        AgentNum: 218749,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSnmpv3GetEngineboots200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## ProtocolSnmpv3GetEngineid

For stopped agents, this operation is meaningless. If not explicitly set by the user then the autogenerated engineID is returned. The format of the engineID is in the familiar hex format, eg. \x01 23 45 67 89...

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
    res, err := s.SNMPv3.ProtocolSnmpv3GetEngineid(ctx, operations.ProtocolSnmpv3GetEngineidRequest{
        AgentNum: 944373,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSnmpv3GetEngineid200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolSnmpv3GetEnginetime

Retrieves the time in seconds for which the agent has been running.

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
    res, err := s.SNMPv3.ProtocolSnmpv3GetEnginetime(ctx, operations.ProtocolSnmpv3GetEnginetimeRequest{
        AgentNum: 569574,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSnmpv3GetEnginetime200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## ProtocolSnmpv3GroupAdd

Adds a new group entry with the specified parameters.

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
    res, err := s.SNMPv3.ProtocolSnmpv3GroupAdd(ctx, operations.ProtocolSnmpv3GroupAddRequest{
        AgentNum: 739551,
        GroupName: "voluptate",
        SecurityModel: "dignissimos",
        SecurityName: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSnmpv3GroupAdd200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolSnmpv3GroupClear

Clears all group entries.

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
    res, err := s.SNMPv3.ProtocolSnmpv3GroupClear(ctx, operations.ProtocolSnmpv3GroupClearRequest{
        AgentNum: 227414,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSnmpv3GroupClear200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolSnmpv3GroupDel

Deletes the specified group entry.

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
    res, err := s.SNMPv3.ProtocolSnmpv3GroupDel(ctx, operations.ProtocolSnmpv3GroupDelRequest{
        AgentNum: 680545,
        GroupName: "numquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSnmpv3GroupDel200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolSnmpv3GroupList

Returns the current group entries as an array of strings.

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
    res, err := s.SNMPv3.ProtocolSnmpv3GroupList(ctx, operations.ProtocolSnmpv3GroupListRequest{
        AgentNum: 85295,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSnmpv3GroupList200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ProtocolSnmpv3SetConfig

Changes the SNMPv3 configuration.

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
    res, err := s.SNMPv3.ProtocolSnmpv3SetConfig(ctx, operations.ProtocolSnmpv3SetConfigRequest{
        AgentNum: 58029,
        Parameter: "ipsa",
        Value: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSnmpv3SetConfig200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolSnmpv3UserAdd

Adds a new user entry with the specified parameters.

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
    res, err := s.SNMPv3.ProtocolSnmpv3UserAdd(ctx, operations.ProtocolSnmpv3UserAddRequest{
        AgentNum: 487838,
        AuthKey: "quaerat",
        AuthProtocol: "accusamus",
        PrivKey: "quidem",
        PrivProtocol: "voluptatibus",
        SecurityName: "voluptas",
        UserName: "Liam.Daugherty",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSnmpv3UserAdd200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolSnmpv3UserClear

Clears all user entries.

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
    res, err := s.SNMPv3.ProtocolSnmpv3UserClear(ctx, operations.ProtocolSnmpv3UserClearRequest{
        AgentNum: 854614,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSnmpv3UserClear200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolSnmpv3UserDel

Deletes the specified user entry.

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
    res, err := s.SNMPv3.ProtocolSnmpv3UserDel(ctx, operations.ProtocolSnmpv3UserDelRequest{
        AgentNum: 67249,
        UserName: "Natalie.Parisian",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSnmpv3UserDel200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolSnmpv3UserList

Returns the current user entries as a Tcl list.

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
    res, err := s.SNMPv3.ProtocolSnmpv3UserList(ctx, operations.ProtocolSnmpv3UserListRequest{
        AgentNum: 677082,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSnmpv3UserList200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ProtocolSnmpv3UsmSave

Saves current user settings in the currently loaded USM config file.

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
    res, err := s.SNMPv3.ProtocolSnmpv3UsmSave(ctx, operations.ProtocolSnmpv3UsmSaveRequest{
        AgentNum: 536579,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSnmpv3UsmSave200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ProtocolSnmpv3UsmSaveas

Saves current user settings in the specified USM config file.

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
    res, err := s.SNMPv3.ProtocolSnmpv3UsmSaveas(ctx, operations.ProtocolSnmpv3UsmSaveasRequest{
        AgentNum: 607045,
        Filename: "necessitatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSnmpv3UsmSaveas200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ProtocolSnmpv3VacmSave

Saves current group, access, view settings in the currently loaded VACM config file.

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
    res, err := s.SNMPv3.ProtocolSnmpv3VacmSave(ctx, operations.ProtocolSnmpv3VacmSaveRequest{
        AgentNum: 714697,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSnmpv3VacmSave200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ProtocolSnmpv3VacmSaveas

Saves current group, access, view settings in the specified VACM config file.

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
    res, err := s.SNMPv3.ProtocolSnmpv3VacmSaveas(ctx, operations.ProtocolSnmpv3VacmSaveasRequest{
        AgentNum: 990339,
        Filename: "nihil",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSnmpv3VacmSaveas200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ProtocolSnmpv3ViewAdd

Adds a new view entry with the specified parameters.

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
    res, err := s.SNMPv3.ProtocolSnmpv3ViewAdd(ctx, operations.ProtocolSnmpv3ViewAddRequest{
        AgentNum: 216897,
        Mask: "voluptate",
        Subtree: "id",
        ViewName: "saepe",
        ViewType: "eius",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSnmpv3ViewAdd200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolSnmpv3ViewClear

Clears all view entries.

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
    res, err := s.SNMPv3.ProtocolSnmpv3ViewClear(ctx, operations.ProtocolSnmpv3ViewClearRequest{
        AgentNum: 137220,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSnmpv3ViewClear200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolSnmpv3ViewDel

Deletes the specified view entry.

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
    res, err := s.SNMPv3.ProtocolSnmpv3ViewDel(ctx, operations.ProtocolSnmpv3ViewDelRequest{
        AgentNum: 20651,
        ViewName: "amet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSnmpv3ViewDel200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ProtocolSnmpv3ViewList

Returns the current view entries as an array of strings.

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
    res, err := s.SNMPv3.ProtocolSnmpv3ViewList(ctx, operations.ProtocolSnmpv3ViewListRequest{
        AgentNum: 758379,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtocolSnmpv3ViewList200ApplicationJSONStrings != nil {
        // handle response
    }
}
```
