# Valuespace

### Available Operations

* [Add](#add) - Add an entry to a table.
* [EvalValue](#evalvalue) - Evaluate the values of the specified instance instance for each specified MIB object object and return it as it would through SNMP requests.
* [GetInfo](#getinfo) - Return the syntactical information for the specified object, such as type, size, range, enumerations, and ACCESS.
* [GetInstances](#getinstances) - Display the MIB object instances for the specified object.
* [GetMib](#getmib) - Return the MIB that defines the specified object.
* [GetName](#getname) - Return the symbolic name of the specified object identifier.
* [GetObjects](#getobjects) - Display the MIB objects below the current position
* [GetOid](#getoid) - Return the numeric OID of the specified object.
* [GetState](#getstate) - Get the state of a MIB object object.
* [GetValue](#getvalue) - Get a variable in the Value Space.
* [GetVariables](#getvariables) - Display the variables for the specified instance instance for the specified MIB object object
* [MsetValue](#msetvalue) - Set multiple variables in the Value Space.
* [MunsetValue](#munsetvalue) - Unset multiple variables in the Value Space
* [Remove](#remove) - Remove an entry from a table.
* [SetState](#setstate) - Set the state of a MIB object object
* [SetValue](#setvalue) - Set a variable in the Value Space.
* [SplitOid](#splitoid) - Split the numerical OID into the object OID and instance OID.
* [UnsetValue](#unsetvalue) - Unset a variable in the Value Space in order to free its memory.

## Add

The object needs to specify the MIB object with the INDEX clause, usually an object whose name ends with Entry.

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
    res, err := s.Valuespace.Add(ctx, operations.AddRequest{
        AgentNum: 878870,
        Instance: "tenetur",
        Object: "dignissimos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Add200ApplicationJSONString != nil {
        // handle response
    }
}
```

## EvalValue

Evaluate the values of the specified instance instance for each specified MIB object object and return it as it would through SNMP requests.

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
    res, err := s.Valuespace.EvalValue(ctx, operations.EvalValueRequest{
        AgentNum: 941378,
        Instance: "distinctio",
        Object: "quod",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EvalValue200ApplicationJSONString != nil {
        // handle response
    }
}
```

## GetInfo

Return the syntactical information for the specified object, such as type, size, range, enumerations, and ACCESS.

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
    res, err := s.Valuespace.GetInfo(ctx, operations.GetInfoRequest{
        AgentNum: 486160,
        Object: "similique",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInfo200ApplicationJSONString != nil {
        // handle response
    }
}
```

## GetInstances

This enables MIB browsing of the MIB on the current agent.

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
    res, err := s.Valuespace.GetInstances(ctx, operations.GetInstancesRequest{
        AgentNum: 708548,
        Object: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInstances200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetMib

This will only return a MIB name if the object is unmistakeably defined in a MIB.

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
    res, err := s.Valuespace.GetMib(ctx, operations.GetMibRequest{
        AgentNum: 498140,
        Object: "dolore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMib200ApplicationJSONString != nil {
        // handle response
    }
}
```

## GetName

Return the symbolic name of the specified object identifier.

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
    res, err := s.Valuespace.GetName(ctx, operations.GetNameRequest{
        Oid: "quibusdam",
        AgentNum: 848944,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetName200ApplicationJSONString != nil {
        // handle response
    }
}
```

## GetObjects

This command is similar to the ls or dir operating system commands to list filesystem directories.

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
    res, err := s.Valuespace.GetObjects(ctx, operations.GetObjectsRequest{
        Oid: "sequi",
        AgentNum: 617877,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetObjects200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetOid

Return the numeric OID of the specified object.

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
    res, err := s.Valuespace.GetOid(ctx, operations.GetOidRequest{
        AgentNum: 773326,
        Object: "aut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOid200ApplicationJSONString != nil {
        // handle response
    }
}
```

## GetState

To disable traversal into a MIB object and any subtree underneath, set the state to 0, else set the state to 1.

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
    res, err := s.Valuespace.GetState(ctx, operations.GetStateRequest{
        AgentNum: 974259,
        Object: "exercitationem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetState200ApplicationJSONString != nil {
        // handle response
    }
}
```

## GetValue

Get a variable in the Value Space.

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
    res, err := s.Valuespace.GetValue(ctx, operations.GetValueRequest{
        AgentNum: 862310,
        Instance: "fugit",
        Object: "porro",
        Variable: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetValue200ApplicationJSONString != nil {
        // handle response
    }
}
```

## GetVariables

This enables variable browsing of the MIB on the current agent.

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
    res, err := s.Valuespace.GetVariables(ctx, operations.GetVariablesRequest{
        AgentNum: 985033,
        Instance: "iusto",
        Object: "eligendi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetVariables200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## MsetValue

This is a performance optimization of the mimic value set command, to be used when many variables are to be set.

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
    res, err := s.Valuespace.MsetValue(ctx, operations.MsetValueRequest{
        RequestBody: [][]string{
            []string{
                "officia",
            },
            []string{
                "ipsam",
                "ea",
            },
        },
        AgentNum: 136900,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MsetValue200ApplicationJSONString != nil {
        // handle response
    }
}
```

## MunsetValue

This is a performance optimization of the mimic value unset command, to be used when many variables are to be unset.

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
    res, err := s.Valuespace.MunsetValue(ctx, operations.MunsetValueRequest{
        RequestBody: [][]string{
            []string{
                "magnam",
                "ratione",
                "ex",
                "laudantium",
            },
            []string{
                "dolor",
            },
        },
        AgentNum: 980700,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MunsetValue200ApplicationJSONString != nil {
        // handle response
    }
}
```

## Remove

The object needs to specify the MIB object with the INDEX clause, usually an object whose name ends with Entry.

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
    res, err := s.Valuespace.Remove(ctx, operations.RemoveRequest{
        AgentNum: 97844,
        Instance: "ex",
        Object: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Remove200ApplicationJSONString != nil {
        // handle response
    }
}
```

## SetState

To disable traversal into a MIB object and any subtree underneath, set the state to 0, else set the state to 1.

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
    res, err := s.Valuespace.SetState(ctx, operations.SetStateRequest{
        AgentNum: 569211,
        Object: "voluptatibus",
        State: 343605,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetState200ApplicationJSONString != nil {
        // handle response
    }
}
```

## SetValue

NOTE to set a binary string value, specify a string starting with \\x followed by pairs of hexadecimal digits, eg. "\\x 01 23 45". This command also assigns SNMP PDU action scripts for GET* and SET requests on a MIB object. The instance parameter must be 0. The following variables enable actions, g - The specified TCL script will be run on GET or GETNEXT requests. It has to exist under the simulation directory. s - The specified script will be run on SET requests. It has to exist under the simulation directory. This command also controls advanced trap generation functionality. The following variables control trap generation r, tu, c - These variables together represent the rate settings for the trap. r and tu is the actual per second rate and c represents the total duration in seconds for which the trap is sent. As soon as the c variable is set, the trap generation begins, for this reason it should be the last variable set for a particular trap. The following variables have to be set before setting the c variable to modify the behavior of the generated trap(s). OBJECT - An object name when used as a variable is looked up during the trap send and the value of that variable is included in the PDU. OBJECT.i - This type of variable will be used to assign an optional instance for the specified object in the traps varbind. The value of this variable identifies the index. e.g. The commands below will send ifIndex.2 with a value of 5 in the linkUp trap PDU. i - This variable is used to specify any extra version specific information to the trap generation code. Here is what it can be used to represent for various SNMP versions SNMPv1 - [community_string][,[enterprise][,agent_addr]] SNMPv2c - community_string SNMPv2 - source_party,destination_party,context SNMPv3 - user_name,context v - This variable lets the user override the version of the PDU being generated. The possible values are - "1", "2c", "2" and "3". o - This variable is used for traps that need extra variables to be added to the PDU along with the ones defined in the MIB as its variables. This lets the user force extra objects (along with instances if needed). All variables to be sent need to be assigned to the o variable. O - To omit any variables which are defined in the MIB you can use the O (capital o) variable. This needs to be set to the list of OIDs of the variable bindings in the order defined in the MIB. ip - The variable ip is used for generating the trap from the N-th IP alias address. a - This variable associates an action script to the trap or INFORM request. The action script specified in the value of this variable has to exist in the simulation directory. It will be executed before each instance of the trap is sent out. I - This optional variable controls the generation of INFORM PDUs. An INFORM is sent only if the variable is non-zero, else a TRAP is generated. R, T, E - This variable associates an action script to the INFORM request. The action script specified in the value of this variable has to exist in the simulation directory. The action script associated with the R variable will be executed on receiving a INFORM RESPONSE, the one associated with the T variable on a timeout (ie. no response), the one associated with the E variable on a report PDU. eid.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine id for the destination specified by IP-ADDRESS and optionally by PORT. eb.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine boots. et.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine time.

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
    res, err := s.Valuespace.SetValue(ctx, operations.SetValueRequest{
        RequestBody: sdk.String("sapiente"),
        AgentNum: 788873,
        Instance: "saepe",
        Object: "ea",
        Variable: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetValue200ApplicationJSONString != nil {
        // handle response
    }
}
```

## SplitOid

This is useful if you have an OID which is a combination of object and instance.

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
    res, err := s.Valuespace.SplitOid(ctx, operations.SplitOidRequest{
        Oid: "corporis",
        AgentNum: 333145,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SplitOid200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## UnsetValue

Only variables that have previously been set can be unset.

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
    res, err := s.Valuespace.UnsetValue(ctx, operations.UnsetValueRequest{
        AgentNum: 399499,
        Instance: "inventore",
        Object: "magnam",
        Variable: "ea",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UnsetValue200ApplicationJSONString != nil {
        // handle response
    }
}
```
