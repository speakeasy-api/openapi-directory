# Pad

### Available Operations

* [AppendChatMessageUsingGET](#appendchatmessageusingget) - appends a chat message
* [AppendChatMessageUsingPOST](#appendchatmessageusingpost) - appends a chat message
* [CheckTokenUsingGET](#checktokenusingget) - returns ok when the current api token is valid
* [CheckTokenUsingPOST](#checktokenusingpost) - returns ok when the current api token is valid
* [CreateDiffHTMLUsingGET](#creatediffhtmlusingget)
* [CreateDiffHTMLUsingPOST](#creatediffhtmlusingpost)
* [CreatePadUsingGET](#createpadusingget) - creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad
* [CreatePadUsingPOST](#createpadusingpost) - creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad
* [DeletePadUsingGET](#deletepadusingget) - deletes a pad
* [DeletePadUsingPOST](#deletepadusingpost) - deletes a pad
* [GETChatHeadUsingGET](#getchatheadusingget) - returns the chatHead (chat-message) of the pad
* [GetChatHeadUsingPOST](#getchatheadusingpost) - returns the chatHead (chat-message) of the pad
* [GETChatHistoryUsingGET](#getchathistoryusingget) - returns the chat history
* [GetChatHistoryUsingPOST](#getchathistoryusingpost) - returns the chat history
* [GETHTMLUsingGET](#gethtmlusingget) - returns the text of a pad formatted as HTML
* [GetHTMLUsingPOST](#gethtmlusingpost) - returns the text of a pad formatted as HTML
* [GETLastEditedUsingGET](#getlasteditedusingget) - returns the timestamp of the last revision of the pad
* [GetLastEditedUsingPOST](#getlasteditedusingpost) - returns the timestamp of the last revision of the pad
* [GETPublicStatusUsingGET](#getpublicstatususingget) - return true of false
* [GetPublicStatusUsingPOST](#getpublicstatususingpost) - return true of false
* [GETReadOnlyIDUsingGET](#getreadonlyidusingget) - returns the read only link of a pad
* [GetReadOnlyIDUsingPOST](#getreadonlyidusingpost) - returns the read only link of a pad
* [GETRevisionsCountUsingGET](#getrevisionscountusingget) - returns the number of revisions of this pad
* [GetRevisionsCountUsingPOST](#getrevisionscountusingpost) - returns the number of revisions of this pad
* [GETTextUsingGET](#gettextusingget) - returns the text of a pad
* [GetTextUsingPOST](#gettextusingpost) - returns the text of a pad
* [ListAllPadsUsingGET](#listallpadsusingget) - list all the pads
* [ListAllPadsUsingPOST](#listallpadsusingpost) - list all the pads
* [ListAuthorsOfPadUsingGET](#listauthorsofpadusingget) - returns an array of authors who contributed to this pad
* [ListAuthorsOfPadUsingPOST](#listauthorsofpadusingpost) - returns an array of authors who contributed to this pad
* [PadUsersCountUsingGET](#paduserscountusingget) - returns the number of user that are currently editing this pad
* [PadUsersCountUsingPOST](#paduserscountusingpost) - returns the number of user that are currently editing this pad
* [PadUsersUsingGET](#padusersusingget) - returns the list of users that are currently editing this pad
* [PadUsersUsingPOST](#padusersusingpost) - returns the list of users that are currently editing this pad
* [SendClientsMessageUsingGET](#sendclientsmessageusingget) - sends a custom message of type msg to the pad
* [SendClientsMessageUsingPOST](#sendclientsmessageusingpost) - sends a custom message of type msg to the pad
* [SetHTMLUsingGET](#sethtmlusingget) - sets the text of a pad with HTML
* [SetHTMLUsingPOST](#sethtmlusingpost) - sets the text of a pad with HTML
* [SetPublicStatusUsingGET](#setpublicstatususingget) - sets a boolean for the public status of a pad
* [SetPublicStatusUsingPOST](#setpublicstatususingpost) - sets a boolean for the public status of a pad
* [SetTextUsingGET](#settextusingget) - sets the text of a pad
* [SetTextUsingPOST](#settextusingpost) - sets the text of a pad

## AppendChatMessageUsingGET

appends a chat message

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.AppendChatMessageUsingGET(ctx, operations.AppendChatMessageUsingGETRequest{
        AuthorID: sdk.String("reiciendis"),
        PadID: sdk.String("est"),
        Text: sdk.String("mollitia"),
        Time: sdk.String("laborum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppendChatMessageUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AppendChatMessageUsingPOST

appends a chat message

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.AppendChatMessageUsingPOST(ctx, operations.AppendChatMessageUsingPOSTRequest{
        AuthorID: sdk.String("dolores"),
        PadID: sdk.String("dolorem"),
        Text: sdk.String("corporis"),
        Time: sdk.String("explicabo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppendChatMessageUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CheckTokenUsingGET

returns ok when the current api token is valid

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.CheckTokenUsingGET(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckTokenUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CheckTokenUsingPOST

returns ok when the current api token is valid

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.CheckTokenUsingPOST(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckTokenUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateDiffHTMLUsingGET

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.CreateDiffHTMLUsingGET(ctx, operations.CreateDiffHTMLUsingGETRequest{
        EndRev: sdk.String("nobis"),
        PadID: sdk.String("enim"),
        StartRev: sdk.String("omnis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDiffHTMLUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateDiffHTMLUsingPOST

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.CreateDiffHTMLUsingPOST(ctx, operations.CreateDiffHTMLUsingPOSTRequest{
        EndRev: sdk.String("nemo"),
        PadID: sdk.String("minima"),
        StartRev: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDiffHTMLUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreatePadUsingGET

creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.CreatePadUsingGET(ctx, operations.CreatePadUsingGETRequest{
        PadID: sdk.String("accusantium"),
        Text: sdk.String("iure"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePadUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreatePadUsingPOST

creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.CreatePadUsingPOST(ctx, operations.CreatePadUsingPOSTRequest{
        PadID: sdk.String("culpa"),
        Text: sdk.String("doloribus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePadUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeletePadUsingGET

deletes a pad

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.DeletePadUsingGET(ctx, operations.DeletePadUsingGETRequest{
        PadID: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletePadUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeletePadUsingPOST

deletes a pad

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.DeletePadUsingPOST(ctx, operations.DeletePadUsingPOSTRequest{
        PadID: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletePadUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GETChatHeadUsingGET

returns the chatHead (chat-message) of the pad

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.GETChatHeadUsingGET(ctx, operations.GETChatHeadUsingGETRequest{
        PadID: sdk.String("mollitia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GETChatHeadUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetChatHeadUsingPOST

returns the chatHead (chat-message) of the pad

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.GetChatHeadUsingPOST(ctx, operations.GetChatHeadUsingPOSTRequest{
        PadID: sdk.String("dolorem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetChatHeadUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GETChatHistoryUsingGET

returns the chat history

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.GETChatHistoryUsingGET(ctx, operations.GETChatHistoryUsingGETRequest{
        End: sdk.String("culpa"),
        PadID: sdk.String("consequuntur"),
        Start: sdk.String("repellat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GETChatHistoryUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetChatHistoryUsingPOST

returns the chat history

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.GetChatHistoryUsingPOST(ctx, operations.GetChatHistoryUsingPOSTRequest{
        End: sdk.String("mollitia"),
        PadID: sdk.String("occaecati"),
        Start: sdk.String("numquam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetChatHistoryUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GETHTMLUsingGET

returns the text of a pad formatted as HTML

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.GETHTMLUsingGET(ctx, operations.GETHTMLUsingGETRequest{
        PadID: sdk.String("commodi"),
        Rev: sdk.String("quam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GETHTMLUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetHTMLUsingPOST

returns the text of a pad formatted as HTML

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.GetHTMLUsingPOST(ctx, operations.GetHTMLUsingPOSTRequest{
        PadID: sdk.String("molestiae"),
        Rev: sdk.String("velit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetHTMLUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GETLastEditedUsingGET

returns the timestamp of the last revision of the pad

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.GETLastEditedUsingGET(ctx, operations.GETLastEditedUsingGETRequest{
        PadID: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GETLastEditedUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetLastEditedUsingPOST

returns the timestamp of the last revision of the pad

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.GetLastEditedUsingPOST(ctx, operations.GetLastEditedUsingPOSTRequest{
        PadID: sdk.String("quia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLastEditedUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GETPublicStatusUsingGET

return true of false

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.GETPublicStatusUsingGET(ctx, operations.GETPublicStatusUsingGETRequest{
        PadID: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GETPublicStatusUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetPublicStatusUsingPOST

return true of false

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.GetPublicStatusUsingPOST(ctx, operations.GetPublicStatusUsingPOSTRequest{
        PadID: sdk.String("vitae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPublicStatusUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GETReadOnlyIDUsingGET

returns the read only link of a pad

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.GETReadOnlyIDUsingGET(ctx, operations.GETReadOnlyIDUsingGETRequest{
        PadID: sdk.String("laborum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GETReadOnlyIDUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetReadOnlyIDUsingPOST

returns the read only link of a pad

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.GetReadOnlyIDUsingPOST(ctx, operations.GetReadOnlyIDUsingPOSTRequest{
        PadID: sdk.String("animi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetReadOnlyIDUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GETRevisionsCountUsingGET

returns the number of revisions of this pad

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.GETRevisionsCountUsingGET(ctx, operations.GETRevisionsCountUsingGETRequest{
        PadID: sdk.String("enim"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GETRevisionsCountUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetRevisionsCountUsingPOST

returns the number of revisions of this pad

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.GetRevisionsCountUsingPOST(ctx, operations.GetRevisionsCountUsingPOSTRequest{
        PadID: sdk.String("odit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRevisionsCountUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GETTextUsingGET

returns the text of a pad

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.GETTextUsingGET(ctx, operations.GETTextUsingGETRequest{
        PadID: sdk.String("quo"),
        Rev: sdk.String("sequi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GETTextUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetTextUsingPOST

returns the text of a pad

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.GetTextUsingPOST(ctx, operations.GetTextUsingPOSTRequest{
        PadID: sdk.String("tenetur"),
        Rev: sdk.String("ipsam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTextUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListAllPadsUsingGET

list all the pads

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.ListAllPadsUsingGET(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAllPadsUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListAllPadsUsingPOST

list all the pads

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.ListAllPadsUsingPOST(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAllPadsUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListAuthorsOfPadUsingGET

returns an array of authors who contributed to this pad

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.ListAuthorsOfPadUsingGET(ctx, operations.ListAuthorsOfPadUsingGETRequest{
        PadID: sdk.String("id"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAuthorsOfPadUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListAuthorsOfPadUsingPOST

returns an array of authors who contributed to this pad

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.ListAuthorsOfPadUsingPOST(ctx, operations.ListAuthorsOfPadUsingPOSTRequest{
        PadID: sdk.String("possimus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAuthorsOfPadUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PadUsersCountUsingGET

returns the number of user that are currently editing this pad

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.PadUsersCountUsingGET(ctx, operations.PadUsersCountUsingGETRequest{
        PadID: sdk.String("aut"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PadUsersCountUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PadUsersCountUsingPOST

returns the number of user that are currently editing this pad

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.PadUsersCountUsingPOST(ctx, operations.PadUsersCountUsingPOSTRequest{
        PadID: sdk.String("quasi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PadUsersCountUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PadUsersUsingGET

returns the list of users that are currently editing this pad

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.PadUsersUsingGET(ctx, operations.PadUsersUsingGETRequest{
        PadID: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PadUsersUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PadUsersUsingPOST

returns the list of users that are currently editing this pad

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.PadUsersUsingPOST(ctx, operations.PadUsersUsingPOSTRequest{
        PadID: sdk.String("temporibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PadUsersUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SendClientsMessageUsingGET

sends a custom message of type msg to the pad

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.SendClientsMessageUsingGET(ctx, operations.SendClientsMessageUsingGETRequest{
        Msg: sdk.String("laborum"),
        PadID: sdk.String("quasi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SendClientsMessageUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SendClientsMessageUsingPOST

sends a custom message of type msg to the pad

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.SendClientsMessageUsingPOST(ctx, operations.SendClientsMessageUsingPOSTRequest{
        Msg: sdk.String("reiciendis"),
        PadID: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SendClientsMessageUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SetHTMLUsingGET

sets the text of a pad with HTML

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.SetHTMLUsingGET(ctx, operations.SetHTMLUsingGETRequest{
        HTML: sdk.String("vero"),
        PadID: sdk.String("nihil"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetHTMLUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SetHTMLUsingPOST

sets the text of a pad with HTML

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.SetHTMLUsingPOST(ctx, operations.SetHTMLUsingPOSTRequest{
        HTML: sdk.String("praesentium"),
        PadID: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetHTMLUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SetPublicStatusUsingGET

sets a boolean for the public status of a pad

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.SetPublicStatusUsingGET(ctx, operations.SetPublicStatusUsingGETRequest{
        PadID: sdk.String("ipsa"),
        PublicStatus: sdk.String("omnis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetPublicStatusUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SetPublicStatusUsingPOST

sets a boolean for the public status of a pad

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.SetPublicStatusUsingPOST(ctx, operations.SetPublicStatusUsingPOSTRequest{
        PadID: sdk.String("voluptate"),
        PublicStatus: sdk.String("cum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetPublicStatusUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SetTextUsingGET

sets the text of a pad

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.SetTextUsingGET(ctx, operations.SetTextUsingGETRequest{
        PadID: sdk.String("perferendis"),
        Text: sdk.String("doloremque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetTextUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SetTextUsingPOST

sets the text of a pad

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pad.SetTextUsingPOST(ctx, operations.SetTextUsingPOSTRequest{
        PadID: sdk.String("reprehenderit"),
        Text: sdk.String("ut"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetTextUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```
