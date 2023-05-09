# IntegrationLinks

### Available Operations

* [AddOrUpdateIntegrationLink](#addorupdateintegrationlink) - Add or update Integration link
* [DeleteIntegrationLink](#deleteintegrationlink) - Delete Integration link
* [GetIntegrationLinkDetails](#getintegrationlinkdetails) - Get Integration link
* [JiraAddOrUpdateIntegrationLink](#jiraaddorupdateintegrationlink)
* [PostV1JiraConnect](#postv1jiraconnect)

## AddOrUpdateIntegrationLink

Add or update Integration link

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.IntegrationLinks.AddOrUpdateIntegrationLink(ctx, operations.AddOrUpdateIntegrationLinkRequest{
        AddOrUpdateIntegrationLinkModel: &shared.AddOrUpdateIntegrationLinkModel{
            Description: sdk.String("alias"),
            URL: sdk.String("nisi"),
        },
        EnvironmentID: "e3a43700-0ae6-4b6b-89b8-f759eac55a97",
        IntegrationLinkType: shared.IntegrationLinkTypeEnumTrello,
        Key: "veritatis",
        SettingID: 874400,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IntegrationLinkModel != nil {
        // handle response
    }
}
```

## DeleteIntegrationLink

Delete Integration link

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.IntegrationLinks.DeleteIntegrationLink(ctx, operations.DeleteIntegrationLinkRequest{
        EnvironmentID: "31135296-5bb8-4a72-8261-1435e139dbc2",
        IntegrationLinkType: shared.IntegrationLinkTypeEnumTrello,
        Key: "nostrum",
        SettingID: 605712,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteIntegrationLinkModel != nil {
        // handle response
    }
}
```

## GetIntegrationLinkDetails

Get Integration link

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.IntegrationLinks.GetIntegrationLinkDetails(ctx, operations.GetIntegrationLinkDetailsRequest{
        IntegrationLinkType: shared.IntegrationLinkTypeEnumMonday,
        Key: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IntegrationLinkDetailsModel != nil {
        // handle response
    }
}
```

## JiraAddOrUpdateIntegrationLink

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.IntegrationLinks.JiraAddOrUpdateIntegrationLink(ctx, operations.JiraAddOrUpdateIntegrationLinkRequest{
        AddOrUpdateJiraIntegrationLinkModel: &shared.AddOrUpdateJiraIntegrationLinkModel{
            ClientKey: "id",
            Description: sdk.String("libero"),
            JiraJwtToken: "fugiat",
            URL: sdk.String("officia"),
        },
        EnvironmentID: "8c070e10-84cb-4067-ad1a-d879eeb9665b",
        Key: "laudantium",
        SettingID: 357207,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IntegrationLinkModel != nil {
        // handle response
    }
}
```

## PostV1JiraConnect

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.IntegrationLinks.PostV1JiraConnect(ctx, shared.ConnectRequest{
        ClientKey: "officiis",
        JiraJwtToken: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
