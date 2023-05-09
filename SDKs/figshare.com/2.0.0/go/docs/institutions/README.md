# Institutions

### Available Operations

* [AccountInstitutionCuration](#accountinstitutioncuration) - Institution Curation Review
* [AccountInstitutionCurationComments](#accountinstitutioncurationcomments) - Institution Curation Review Comments
* [AccountInstitutionCurations](#accountinstitutioncurations) - Institution Curation Reviews
* [CustomFieldsList](#customfieldslist) - Private account institution group custom fields
* [CustomFieldsUpload](#customfieldsupload) - Custom fields values files upload
* [InstitutionArticles](#institutionarticles) - Public Licenses
* [InstitutionHrfeedUpload](#institutionhrfeedupload) - Private Institution HRfeed Upload
* [PostAccountInstitutionReviewCurationIDComments](#postaccountinstitutionreviewcurationidcomments) - POST Institution Curation Review Comment
* [PrivateAccountInstitutionUser](#privateaccountinstitutionuser) - Private Account Institution User
* [PrivateCategoriesList](#privatecategorieslist) - Private Account Categories
* [PrivateGroupEmbargoOptionsDetails](#privategroupembargooptionsdetails) - Private Account Institution Group Embargo Options
* [PrivateInstitutionAccountGroupRoleDelete](#privateinstitutionaccountgrouproledelete) - Delete Institution Account Group Role
* [PrivateInstitutionAccountGroupRoles](#privateinstitutionaccountgrouproles) - List Institution Account Group Roles
* [PrivateInstitutionAccountGroupRolesCreate](#privateinstitutionaccountgrouprolescreate) - Add Institution Account Group Roles
* [PrivateInstitutionAccountsCreate](#privateinstitutionaccountscreate) - Create new Institution Account
* [PrivateInstitutionAccountsList](#privateinstitutionaccountslist) - Private Account Institution Accounts
* [PrivateInstitutionAccountsSearch](#privateinstitutionaccountssearch) - Private Account Institution Accounts Search
* [PrivateInstitutionAccountsUpdate](#privateinstitutionaccountsupdate) - Update Institution Account
* [PrivateInstitutionArticles](#privateinstitutionarticles) - Private Institution Articles
* [PrivateInstitutionDetails](#privateinstitutiondetails) - Private Account Institutions
* [PrivateInstitutionEmbargoOptionsDetails](#privateinstitutionembargooptionsdetails) - Private Account Institution embargo options
* [PrivateInstitutionGroupsList](#privateinstitutiongroupslist) - Private Account Institution Groups
* [PrivateInstitutionRolesList](#privateinstitutionroleslist) - Private Account Institution Roles

## AccountInstitutionCuration

Retrieve a certain curation review by its ID

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
    res, err := s.Institutions.AccountInstitutionCuration(ctx, operations.AccountInstitutionCurationRequest{
        CurationID: 847276,
    }, operations.AccountInstitutionCurationSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CurationDetail != nil {
        // handle response
    }
}
```

## AccountInstitutionCurationComments

Retrieve a certain curation review's comments.

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
    res, err := s.Institutions.AccountInstitutionCurationComments(ctx, operations.AccountInstitutionCurationCommentsRequest{
        CurationID: 777408,
        Limit: sdk.Int64(681359),
        Offset: sdk.Int64(259422),
    }, operations.AccountInstitutionCurationCommentsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CurationComment != nil {
        // handle response
    }
}
```

## AccountInstitutionCurations

Retrieve a list of curation reviews for this institution

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
    res, err := s.Institutions.AccountInstitutionCurations(ctx, operations.AccountInstitutionCurationsRequest{
        ArticleID: sdk.Int64(178367),
        GroupID: sdk.Int64(373813),
        Limit: sdk.Int64(69859),
        Offset: sdk.Int64(587600),
        Status: operations.AccountInstitutionCurationsStatusEnumPending.ToPointer(),
    }, operations.AccountInstitutionCurationsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Curation != nil {
        // handle response
    }
}
```

## CustomFieldsList

Returns the custom fields in the group the user belongs to, or the ones in the group specified, if the user has access.

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
    res, err := s.Institutions.CustomFieldsList(ctx, operations.CustomFieldsListRequest{
        GroupID: sdk.Int64(272822),
    }, operations.CustomFieldsListSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShortCustomFields != nil {
        // handle response
    }
}
```

## CustomFieldsUpload

Uploads a CSV containing values for a specific custom field of type <b>dropdown_large_list</b>. More details in the <a href="#custom_fields">Custom Fields section</a>

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
    res, err := s.Institutions.CustomFieldsUpload(ctx, operations.CustomFieldsUploadRequest{
        RequestBody: &operations.CustomFieldsUploadRequestBody{
            ExternalFile: &operations.CustomFieldsUploadRequestBodyExternalFile{
                Content: []byte("debitis"),
                ExternalFile: "ipsam",
            },
        },
        CustomFieldID: 133465,
    }, operations.CustomFieldsUploadSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomFieldsUpload200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## InstitutionArticles

Returns a list of articles belonging to the institution

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
    res, err := s.Institutions.InstitutionArticles(ctx, operations.InstitutionArticlesRequest{
        Filename: "sequi",
        InstitutionStringID: "quo",
        ResourceID: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Articles != nil {
        // handle response
    }
}
```

## InstitutionHrfeedUpload

More info in the <a href="#hr_feed">HR Feed section</a>

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
    res, err := s.Institutions.InstitutionHrfeedUpload(ctx, operations.InstitutionHrfeedUploadRequestBody{
        Hrfeed: &operations.InstitutionHrfeedUploadRequestBodyHrfeed{
            Content: []byte("recusandae"),
            Hrfeed: "aperiam",
        },
    }, operations.InstitutionHrfeedUploadSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseMessage != nil {
        // handle response
    }
}
```

## PostAccountInstitutionReviewCurationIDComments

Add a new comment to the review.

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
    res, err := s.Institutions.PostAccountInstitutionReviewCurationIDComments(ctx, operations.PostAccountInstitutionReviewCurationIDCommentsRequest{
        CurationCommentCreate: shared.CurationCommentCreate{
            Text: "distinctio",
        },
        CurationID: 799796,
    }, operations.PostAccountInstitutionReviewCurationIDCommentsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PrivateAccountInstitutionUser

Retrieve institution user information using the account_id

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
    res, err := s.Institutions.PrivateAccountInstitutionUser(ctx, operations.PrivateAccountInstitutionUserRequest{
        AccountID: 490819,
    }, operations.PrivateAccountInstitutionUserSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```

## PrivateCategoriesList

List institution categories (including parent Categories)

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
    res, err := s.Institutions.PrivateCategoriesList(ctx, operations.PrivateCategoriesListSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Categories != nil {
        // handle response
    }
}
```

## PrivateGroupEmbargoOptionsDetails

Account institution group embargo options details

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
    res, err := s.Institutions.PrivateGroupEmbargoOptionsDetails(ctx, operations.PrivateGroupEmbargoOptionsDetailsRequest{
        GroupID: 76956,
    }, operations.PrivateGroupEmbargoOptionsDetailsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GroupEmbargoOptions != nil {
        // handle response
    }
}
```

## PrivateInstitutionAccountGroupRoleDelete

Delete Institution Account Group Role

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
    res, err := s.Institutions.PrivateInstitutionAccountGroupRoleDelete(ctx, operations.PrivateInstitutionAccountGroupRoleDeleteRequest{
        AccountID: 469498,
        GroupID: 518835,
        RoleID: 882710,
    }, operations.PrivateInstitutionAccountGroupRoleDeleteSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PrivateInstitutionAccountGroupRoles

List Institution Account Group Roles

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
    res, err := s.Institutions.PrivateInstitutionAccountGroupRoles(ctx, operations.PrivateInstitutionAccountGroupRolesRequest{
        AccountID: 306810,
    }, operations.PrivateInstitutionAccountGroupRolesSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountGroupRoles != nil {
        // handle response
    }
}
```

## PrivateInstitutionAccountGroupRolesCreate

Add Institution Account Group Roles

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
    res, err := s.Institutions.PrivateInstitutionAccountGroupRolesCreate(ctx, operations.PrivateInstitutionAccountGroupRolesCreateRequest{
        RequestBody: map[string]interface{}{
            "occaecati": "commodi",
            "sapiente": "dolores",
        },
        AccountID: 645570,
    }, operations.PrivateInstitutionAccountGroupRolesCreateSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PrivateInstitutionAccountsCreate

Create a new Account by sending account information

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Institutions.PrivateInstitutionAccountsCreate(ctx, shared.AccountCreate{
        Email: "johndoe@example.com",
        FirstName: "John",
        GroupID: sdk.Int64(475289),
        InstitutionUserID: sdk.String("johndoe"),
        IsActive: sdk.Bool(false),
        LastName: sdk.String("Doe"),
        Quota: sdk.Int64(1000),
        SymplecticUserID: sdk.String("johndoe"),
    }, operations.PrivateInstitutionAccountsCreateSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PrivateInstitutionAccountsList

Returns the accounts for which the account has administrative privileges (assigned and inherited).

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
    res, err := s.Institutions.PrivateInstitutionAccountsList(ctx, operations.PrivateInstitutionAccountsListRequest{
        Email: sdk.String("Ottilie_Keeling@gmail.com"),
        IDGte: sdk.Int64(159867),
        IDLte: sdk.Int64(536178),
        InstitutionUserID: sdk.String("fugit"),
        IsActive: sdk.Int64(681393),
        Limit: sdk.Int64(649463),
        Offset: sdk.Int64(277596),
        Page: sdk.Int64(539224),
        PageSize: sdk.Int64(128860),
    }, operations.PrivateInstitutionAccountsListSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShortAccounts != nil {
        // handle response
    }
}
```

## PrivateInstitutionAccountsSearch

Returns the accounts for which the account has administrative privileges (assigned and inherited).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Institutions.PrivateInstitutionAccountsSearch(ctx, shared.InstitutionAccountsSearch{
        Email: sdk.String("alan@institution.com"),
        InstitutionUserID: sdk.String("alan"),
        IsActive: sdk.Int64(325685),
        Limit: sdk.Int64(10),
        Offset: sdk.Int64(392676),
        Page: sdk.Int64(1),
        PageSize: sdk.Int64(10),
        SearchFor: sdk.String("figshare"),
    }, operations.PrivateInstitutionAccountsSearchSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShortAccounts != nil {
        // handle response
    }
}
```

## PrivateInstitutionAccountsUpdate

Update Institution Account

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
    res, err := s.Institutions.PrivateInstitutionAccountsUpdate(ctx, operations.PrivateInstitutionAccountsUpdateRequest{
        AccountUpdate: shared.AccountUpdate{
            GroupID: 147014,
            IsActive: false,
        },
        AccountID: 956406,
    }, operations.PrivateInstitutionAccountsUpdateSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PrivateInstitutionArticles

Get Articles from own institution. User must be administrator of the institution

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
    res, err := s.Institutions.PrivateInstitutionArticles(ctx, operations.PrivateInstitutionArticlesRequest{
        ItemType: sdk.Int64(159870),
        Limit: sdk.Int64(187131),
        ModifiedSince: sdk.String("explicabo"),
        Offset: sdk.Int64(903984),
        Order: operations.PrivateInstitutionArticlesOrderEnumShares.ToPointer(),
        OrderDirection: operations.PrivateInstitutionArticlesOrderDirectionEnumDesc.ToPointer(),
        Page: sdk.Int64(92260),
        PageSize: sdk.Int64(456911),
        PublishedSince: sdk.String("eveniet"),
        ResourceDoi: sdk.String("accusamus"),
        Status: sdk.Int64(82971),
    }, operations.PrivateInstitutionArticlesSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Articles != nil {
        // handle response
    }
}
```

## PrivateInstitutionDetails

Account institution details

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
    res, err := s.Institutions.PrivateInstitutionDetails(ctx, operations.PrivateInstitutionDetailsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Institution != nil {
        // handle response
    }
}
```

## PrivateInstitutionEmbargoOptionsDetails

Account institution embargo options details

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
    res, err := s.Institutions.PrivateInstitutionEmbargoOptionsDetails(ctx, operations.PrivateInstitutionEmbargoOptionsDetailsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GroupEmbargoOptions != nil {
        // handle response
    }
}
```

## PrivateInstitutionGroupsList

Returns the groups for which the account has administrative privileges (assigned and inherited).

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
    res, err := s.Institutions.PrivateInstitutionGroupsList(ctx, operations.PrivateInstitutionGroupsListSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Groups != nil {
        // handle response
    }
}
```

## PrivateInstitutionRolesList

Returns the roles available for groups and the institution group.

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
    res, err := s.Institutions.PrivateInstitutionRolesList(ctx, operations.PrivateInstitutionRolesListSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Roles != nil {
        // handle response
    }
}
```
