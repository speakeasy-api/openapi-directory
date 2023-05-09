# Eventlog

## Overview

System events log

### Available Operations

* [RequestAuditNodeInfo](#requestauditnodeinfo) - Request nodes
* [~~RequestAuditNodeUserData~~](#requestauditnodeuserdata) - Request node assigned users with permissions :warning: **Deprecated**
* [RequestLogEventsAsJSON](#requestlogeventsasjson) - Request system events
* [RequestLogOperations](#requestlogoperations) - Request allowed Log Operations

## RequestAuditNodeInfo

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.31.0</h3>

### Description: 
Retrieve a list of all nodes of type room under a certain parent.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read audit log</span> required.

### Postcondition:
List of rooms.

### Further Information:
For rooms on root level, use parent_id = 0.

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`nodeName:cn:searchString_1|nodeIsEncrypted:eq:true`  
Filter by node name containing `searchString_1` **AND** node is encrypted .

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `nodeId` | Node ID filter | `eq` | Node ID equals value. | `positive Integer` |
| `nodeName` | Node name filter | `cn, eq, sw` | Node name contains / equals / starts with value. | `search String` |
| `nodeIsEncrypted` | Encrypted node filter | `eq` |  | `true or false` |

</details>


---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort fields are supported.

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`nodeName:asc`  
Sort by `nodeName` ascending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `nodeId` | Node ID |
| `nodeName` | Node name |

</details>


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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Eventlog.RequestAuditNodeInfo(ctx, operations.RequestAuditNodeInfoRequest{
        XSdsAuthToken: sdk.String("dolorem"),
        Filter: sdk.String("corporis"),
        Limit: sdk.Int(128926),
        Offset: sdk.Int(750686),
        ParentID: sdk.Int64(315428),
        Sort: sdk.String("omnis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuditNodeInfoResponse != nil {
        // handle response
    }
}
```

## ~~RequestAuditNodeUserData~~

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.32.0</h3>

### Description: 
Retrieve a list of all nodes of type room, and the room assignment users with permissions.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read audit log</span> required.

### Postcondition:
List of rooms and their assigned users is returned.

### Further Information:

Output is limited to **500** entries.  
For more results please use filter criteria and the `limit` parameter.

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Except for `userName`, `userFirstName` and  `userLastName` - these are connected via logical disjunction (**OR**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`userName:cn:searchString_1|userFirstName:cn:searchString_2|nodeId:eq:2`  
Filter by user login containing `searchString_1` **OR** first name containing `searchString_2` **AND** node ID equals `2`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `nodeId` | Node ID filter | `eq` | Node ID equals value. | `positive Integer` |
| `nodeName` | Node name filter | `cn, eq` | Node name contains / equals value. | `search String` |
| `nodeParentId` | Node parent ID filter | `eq` | Parent ID equals value. | `positive Integer`<br>Parent ID `0` is the root node. |
| `userId` | User ID filter | `eq` | User ID equals value. | `positive Integer` |
| `userName` | Username (login) filter | `cn, eq` | Username contains / equals value. | `search String` |
| `userFirstName` | User first name filter | `cn, eq` | User first name contains / equals value. | `search String` |
| `userLastName` | User last name filter | `cn, eq` | User last name contains / equals value. | `search String` |
| `permissionsManage` | Filter the users that do (not) have `manage` permissions in this room | `eq` |  | `true or false` |
| `nodeIsEncrypted` | Encrypted node filter | `eq` |  | `true or false` |
| `nodeHasActivitiesLog` | Activities log filter | `eq` |  | `true or false` |

</details>

### Deprecated filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| <del>`nodeHasRecycleBin`</del> | Recycle bin filter<br>**Filter has no effect!** | `eq` |  | `true or false` |

</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort fields are supported.

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`nodeName:asc`  
Sort by `nodeName` ascending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `nodeId` | Node ID |
| `nodeName` | Node name |
| `nodeParentId` | Node parent ID |
| `nodeSize` | Node size |
| `nodeQuota` | Node quota |

</details>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Eventlog.RequestAuditNodeUserData(ctx, operations.RequestAuditNodeUserDataRequest{
        XSdsAuthToken: sdk.String("nemo"),
        XSdsDateFormat: operations.RequestAuditNodeUserDataXSdsDateFormatEnumLocal.ToPointer(),
        Filter: sdk.String("excepturi"),
        Limit: sdk.Int(38425),
        Offset: sdk.Int(438601),
        Sort: sdk.String("culpa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuditNodeResponses != nil {
        // handle response
    }
}
```

## RequestLogEventsAsJSON

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.3.0</h3>

### Description: 
Retrieve eventlog (audit log) events.

### Precondition:
Role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Log Auditor</span> required.

### Postcondition:
List of audit log events is returned.

### Further Information:
Output is limited to **500** entries.  
For more results please use filter criteria and paging (`offset` + `limit`). 

Allowed `Accept-Header`:
* `Accept: application/json`
* `Accept: text/csv`  

---

Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort fields are supported.  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`time:desc`  
Sort by `time` descending (default sort option).

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `time` | Event timestamp |

</details>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Eventlog.RequestLogEventsAsJSON(ctx, operations.RequestLogEventsAsJSONRequest{
        XSdsAuthToken: sdk.String("doloribus"),
        XSdsDateFormat: operations.RequestLogEventsAsJSONXSdsDateFormatEnumLeet.ToPointer(),
        DateEnd: sdk.String("architecto"),
        DateStart: sdk.String("mollitia"),
        Limit: sdk.Int(208876),
        Offset: sdk.Int(635059),
        Sort: sdk.String("consequuntur"),
        Status: operations.RequestLogEventsAsJSONStatusEnumTwo.ToPointer(),
        Type: sdk.Int(653108),
        UserClient: sdk.String("occaecati"),
        UserID: sdk.Int64(253291),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LogEventList != nil {
        // handle response
    }
}
```

## RequestLogOperations

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.3.0</h3>

### Description: 
Retrieve eventlog (audit log) operation IDs and the associated log operation description.

### Precondition:
Role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Log Auditor</span> required.

### Postcondition:
List of available log operations is returned.

### Further Information:
None.

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Eventlog.RequestLogOperations(ctx, operations.RequestLogOperationsRequest{
        XSdsAuthToken: sdk.String("commodi"),
        IsDeprecated: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LogOperationList != nil {
        // handle response
    }
}
```
