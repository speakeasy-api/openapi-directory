# OrgSettings

## Overview

The Org Settings API endpoints allow you to manage your organization's
settings.


### Available Operations

* [GetV2OrgsNameSettings](#getv2orgsnamesettings) - Get organization settings
* [PutV2OrgsNameSettings](#putv2orgsnamesettings) - Update organization settings

## GetV2OrgsNameSettings

Returns organization settings by name.


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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.OrgSettings.GetV2OrgsNameSettings(ctx, operations.GetV2OrgsNameSettingsRequest{
        Name: "Alison Mann",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgSettings != nil {
        // handle response
    }
}
```

## PutV2OrgsNameSettings

Updates an organization's settings. Some settings are only used when the
organization is on a business plan.

***Only users in the "owners" group of the organization can use this endpoint.***

The following settings are only used on a business plan:
- `restricted_images`


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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.OrgSettings.PutV2OrgsNameSettings(ctx, operations.PutV2OrgsNameSettingsRequest{
        RequestBody: operations.PutV2OrgsNameSettingsRequestBody{
            RestrictedImages: operations.PutV2OrgsNameSettingsRequestBodyRestrictedImages{
                AllowOfficialImages: true,
                AllowVerifiedPublishers: true,
                Enabled: true,
            },
        },
        Name: "Irma Ledner DVM",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgSettings != nil {
        // handle response
    }
}
```
