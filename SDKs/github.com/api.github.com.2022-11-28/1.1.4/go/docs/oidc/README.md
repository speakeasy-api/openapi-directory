# Oidc

## Overview

Endpoints to manage GitHub OIDC configuration using the REST API.

### Available Operations

* [OidcGetOidcCustomSubTemplateForOrg](#oidcgetoidccustomsubtemplatefororg) - Get the customization template for an OIDC subject claim for an organization
* [OidcUpdateOidcCustomSubTemplateForOrg](#oidcupdateoidccustomsubtemplatefororg) - Set the customization template for an OIDC subject claim for an organization

## OidcGetOidcCustomSubTemplateForOrg

Gets the customization template for an OpenID Connect (OIDC) subject claim.
You must authenticate using an access token with the `read:org` scope to use this endpoint.
GitHub Apps must have the `organization_administration:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/actions/oidc#get-the-customization-template-for-an-oidc-subject-claim-for-an-organization>

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
    res, err := s.Oidc.OidcGetOidcCustomSubTemplateForOrg(ctx, operations.OidcGetOidcCustomSubTemplateForOrgRequest{
        Org: "sequi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OidcCustomSub != nil {
        // handle response
    }
}
```

## OidcUpdateOidcCustomSubTemplateForOrg

Creates or updates the customization template for an OpenID Connect (OIDC) subject claim.
You must authenticate using an access token with the `write:org` scope to use this endpoint.
GitHub Apps must have the `admin:org` permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/actions/oidc#set-the-customization-template-for-an-oidc-subject-claim-for-an-organization>

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Oidc.OidcUpdateOidcCustomSubTemplateForOrg(ctx, operations.OidcUpdateOidcCustomSubTemplateForOrgRequest{
        OidcCustomSub: shared.OidcCustomSub{
            IncludeClaimKeys: []string{
                "cum",
                "dicta",
                "earum",
                "veniam",
            },
        },
        Org: "animi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyObject != nil {
        // handle response
    }
}
```
