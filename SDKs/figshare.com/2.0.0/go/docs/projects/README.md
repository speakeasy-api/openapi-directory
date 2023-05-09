# Projects

### Available Operations

* [PrivateProjectArticleDelete](#privateprojectarticledelete) - Delete project article
* [PrivateProjectArticleDetails](#privateprojectarticledetails) - Project article details
* [PrivateProjectArticleFile](#privateprojectarticlefile) - Project article file details
* [PrivateProjectArticleFiles](#privateprojectarticlefiles) - Project article list files
* [PrivateProjectArticlesCreate](#privateprojectarticlescreate) - Create project article
* [PrivateProjectArticlesList](#privateprojectarticleslist) - List project articles
* [PrivateProjectCollaboratorDelete](#privateprojectcollaboratordelete) - Remove project collaborator
* [PrivateProjectCollaboratorsInvite](#privateprojectcollaboratorsinvite) - Invite project collaborators
* [PrivateProjectCollaboratorsList](#privateprojectcollaboratorslist) - List project collaborators
* [PrivateProjectCreate](#privateprojectcreate) - Create project
* [PrivateProjectDelete](#privateprojectdelete) - Delete project
* [PrivateProjectDetails](#privateprojectdetails) - View project details
* [PrivateProjectLeave](#privateprojectleave) - Private Project Leave
* [PrivateProjectNote](#privateprojectnote) - Project note details
* [PrivateProjectNoteDelete](#privateprojectnotedelete) - Delete project note
* [PrivateProjectNoteUpdate](#privateprojectnoteupdate) - Update project note
* [PrivateProjectNotesCreate](#privateprojectnotescreate) - Create project note
* [PrivateProjectNotesList](#privateprojectnoteslist) - List project notes
* [PrivateProjectPublish](#privateprojectpublish) - Private Project Publish
* [PrivateProjectUpdate](#privateprojectupdate) - Update project
* [PrivateProjectsList](#privateprojectslist) - Private Projects
* [PrivateProjectsSearch](#privateprojectssearch) - Private Projects search
* [ProjectArticles](#projectarticles) - Public Project Articles
* [ProjectDetails](#projectdetails) - Public Project
* [ProjectsList](#projectslist) - Public Projects
* [ProjectsSearch](#projectssearch) - Public Projects Search

## PrivateProjectArticleDelete

Delete project article

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
    res, err := s.Projects.PrivateProjectArticleDelete(ctx, operations.PrivateProjectArticleDeleteRequest{
        ArticleID: 877131,
        ProjectID: 399025,
    }, operations.PrivateProjectArticleDeleteSecurity{
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

## PrivateProjectArticleDetails

Project article details

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
    res, err := s.Projects.PrivateProjectArticleDetails(ctx, operations.PrivateProjectArticleDetailsRequest{
        ArticleID: 93459,
        ProjectID: 904045,
    }, operations.PrivateProjectArticleDetailsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectArticle != nil {
        // handle response
    }
}
```

## PrivateProjectArticleFile

Project article file details

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
    res, err := s.Projects.PrivateProjectArticleFile(ctx, operations.PrivateProjectArticleFileRequest{
        ArticleID: 426306,
        FileID: 690025,
        ProjectID: 473221,
    }, operations.PrivateProjectArticleFileSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PrivateFile != nil {
        // handle response
    }
}
```

## PrivateProjectArticleFiles

List article files

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
    res, err := s.Projects.PrivateProjectArticleFiles(ctx, operations.PrivateProjectArticleFilesRequest{
        ArticleID: 699622,
        ProjectID: 580197,
    }, operations.PrivateProjectArticleFilesSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PrivateFiles != nil {
        // handle response
    }
}
```

## PrivateProjectArticlesCreate

Create a new Article and associate it with this project

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
    res, err := s.Projects.PrivateProjectArticlesCreate(ctx, operations.PrivateProjectArticlesCreateRequest{
        ArticleProjectCreate: shared.ArticleProjectCreate{
            Authors: []map[string]interface{}{
                map[string]interface{}{
                    "eligendi": "sit",
                    "culpa": "tempore",
                    "adipisci": "cumque",
                },
                map[string]interface{}{
                    "consequatur": "minus",
                },
            },
            Categories: []int64{
                959167,
                232865,
            },
            CategoriesBySourceID: []string{
                "blanditiis",
                "provident",
            },
            CustomFields: map[string]interface{}{
                "nulla": "quas",
                "esse": "quasi",
                "a": "error",
                "sint": "pariatur",
            },
            CustomFieldsList: []shared.CustomArticleFieldAdd{
                shared.CustomArticleFieldAdd{
                    Name: "key",
                    Value: "quia",
                },
                shared.CustomArticleFieldAdd{
                    Name: "key",
                    Value: "eveniet",
                },
                shared.CustomArticleFieldAdd{
                    Name: "key",
                    Value: "asperiores",
                },
                shared.CustomArticleFieldAdd{
                    Name: "key",
                    Value: "facere",
                },
            },
            DefinedType: sdk.String("media"),
            Description: sdk.String("Test description of article"),
            Doi: sdk.String("veritatis"),
            Funding: sdk.String("consequuntur"),
            FundingList: []shared.FundingCreate{
                shared.FundingCreate{
                    ID: sdk.Int64(628899),
                    Title: sdk.String("Miss"),
                },
            },
            Handle: sdk.String("aliquid"),
            Keywords: []string{
                "quae",
                "earum",
                "vel",
                "in",
            },
            License: sdk.Int64(1),
            References: []string{
                "libero",
                "illum",
            },
            ResourceDoi: sdk.String("soluta"),
            ResourceTitle: sdk.String("accusantium"),
            Tags: []string{
                "sapiente",
                "dicta",
            },
            Timeline: &shared.TimelineUpdate{
                FirstOnline: sdk.String("2015-12-31"),
                PublisherAcceptance: sdk.String("2015-12-31"),
                PublisherPublication: sdk.String("2015-12-31"),
            },
            Title: "Test article title",
        },
        Limit: sdk.Int64(355369),
        Offset: sdk.Int64(443879),
        Page: sdk.Int64(356707),
        PageSize: sdk.Int64(391774),
        ProjectID: 16328,
    }, operations.PrivateProjectArticlesCreateSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LocationWarnings != nil {
        // handle response
    }
}
```

## PrivateProjectArticlesList

List project articles

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
    res, err := s.Projects.PrivateProjectArticlesList(ctx, operations.PrivateProjectArticlesListRequest{
        Limit: sdk.Int64(531849),
        Offset: sdk.Int64(185232),
        Page: sdk.Int64(845358),
        PageSize: sdk.Int64(401259),
        ProjectID: 536275,
    }, operations.PrivateProjectArticlesListSecurity{
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

## PrivateProjectCollaboratorDelete

Remove project collaborator

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
    res, err := s.Projects.PrivateProjectCollaboratorDelete(ctx, operations.PrivateProjectCollaboratorDeleteRequest{
        ProjectID: 929292,
        UserID: 680270,
    }, operations.PrivateProjectCollaboratorDeleteSecurity{
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

## PrivateProjectCollaboratorsInvite

Invite users to collaborate on project or view the project

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
    res, err := s.Projects.PrivateProjectCollaboratorsInvite(ctx, operations.PrivateProjectCollaboratorsInviteRequest{
        ProjectCollaboratorInvite: shared.ProjectCollaboratorInvite{
            Comment: sdk.String("hey"),
            Email: sdk.String("user@domain.com"),
            RoleName: shared.ProjectCollaboratorInviteRoleNameEnumViewer,
            UserID: sdk.Int64(100008),
        },
        ProjectID: 99615,
    }, operations.PrivateProjectCollaboratorsInviteSecurity{
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

## PrivateProjectCollaboratorsList

List Project collaborators and invited users

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
    res, err := s.Projects.PrivateProjectCollaboratorsList(ctx, operations.PrivateProjectCollaboratorsListRequest{
        ProjectID: 609178,
    }, operations.PrivateProjectCollaboratorsListSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectCollaborators != nil {
        // handle response
    }
}
```

## PrivateProjectCreate

Create a new project

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
    res, err := s.Projects.PrivateProjectCreate(ctx, shared.ProjectCreate{
        CustomFields: map[string]interface{}{
            "quasi": "at",
            "et": "voluptate",
            "ipsa": "minima",
            "veritatis": "consectetur",
        },
        CustomFieldsList: []shared.CustomArticleFieldAdd{
            shared.CustomArticleFieldAdd{
                Name: "key",
                Value: "iste",
            },
        },
        Description: sdk.String("project description"),
        Funding: sdk.String("temporibus"),
        FundingList: []shared.FundingCreate{
            shared.FundingCreate{
                ID: sdk.Int64(522371),
                Title: sdk.String("Mr."),
            },
        },
        GroupID: sdk.Int64(513075),
        Title: "project title",
    }, operations.PrivateProjectCreateSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateProjectResponse != nil {
        // handle response
    }
}
```

## PrivateProjectDelete

A project can be deleted only if: - it is not public - it does not have public articles.

When an individual project is deleted, all the articles are moved to my data of each owner.

When a group project is deleted, all the articles and files are deleted as well. Only project owner, group admin and above can delete a project.


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
    res, err := s.Projects.PrivateProjectDelete(ctx, operations.PrivateProjectDeleteRequest{
        ProjectID: 428796,
    }, operations.PrivateProjectDeleteSecurity{
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

## PrivateProjectDetails

View a private project

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
    res, err := s.Projects.PrivateProjectDetails(ctx, operations.PrivateProjectDetailsRequest{
        ProjectID: 649832,
    }, operations.PrivateProjectDetailsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectCompletePrivate != nil {
        // handle response
    }
}
```

## PrivateProjectLeave

Please note: project's owner cannot leave the project.

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
    res, err := s.Projects.PrivateProjectLeave(ctx, operations.PrivateProjectLeaveRequest{
        ProjectID: 68074,
    }, operations.PrivateProjectLeaveSecurity{
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

## PrivateProjectNote

Project note details

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
    res, err := s.Projects.PrivateProjectNote(ctx, operations.PrivateProjectNoteRequest{
        NoteID: 544591,
        ProjectID: 251941,
    }, operations.PrivateProjectNoteSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectNotePrivate != nil {
        // handle response
    }
}
```

## PrivateProjectNoteDelete

Delete project note

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
    res, err := s.Projects.PrivateProjectNoteDelete(ctx, operations.PrivateProjectNoteDeleteRequest{
        NoteID: 32465,
        ProjectID: 221161,
    }, operations.PrivateProjectNoteDeleteSecurity{
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

## PrivateProjectNoteUpdate

Update project note

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
    res, err := s.Projects.PrivateProjectNoteUpdate(ctx, operations.PrivateProjectNoteUpdateRequest{
        ProjectNoteCreate: shared.ProjectNoteCreate{
            Text: "note to remember",
        },
        NoteID: 580152,
        ProjectID: 253191,
    }, operations.PrivateProjectNoteUpdateSecurity{
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

## PrivateProjectNotesCreate

Create a new project note

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
    res, err := s.Projects.PrivateProjectNotesCreate(ctx, operations.PrivateProjectNotesCreateRequest{
        ProjectNoteCreate: shared.ProjectNoteCreate{
            Text: "note to remember",
        },
        ProjectID: 771089,
    }, operations.PrivateProjectNotesCreateSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Location != nil {
        // handle response
    }
}
```

## PrivateProjectNotesList

List project notes

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
    res, err := s.Projects.PrivateProjectNotesList(ctx, operations.PrivateProjectNotesListRequest{
        Limit: sdk.Int64(131055),
        Offset: sdk.Int64(376226),
        Page: sdk.Int64(12036),
        PageSize: sdk.Int64(491025),
        ProjectID: 115484,
    }, operations.PrivateProjectNotesListSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectNotes != nil {
        // handle response
    }
}
```

## PrivateProjectPublish

Publish a project. Possible after all items inside it are public

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
    res, err := s.Projects.PrivateProjectPublish(ctx, operations.PrivateProjectPublishRequest{
        ProjectID: 981640,
    }, operations.PrivateProjectPublishSecurity{
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

## PrivateProjectUpdate

Updating an project by passing body parameters; request can also be made with the PATCH method.

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
    res, err := s.Projects.PrivateProjectUpdate(ctx, operations.PrivateProjectUpdateRequest{
        ProjectUpdate: shared.ProjectUpdate{
            CustomFields: map[string]interface{}{
                "velit": "voluptatibus",
                "voluptas": "asperiores",
                "aperiam": "ea",
            },
            CustomFieldsList: []shared.CustomArticleFieldAdd{
                shared.CustomArticleFieldAdd{
                    Name: "key",
                    Value: "consequuntur",
                },
                shared.CustomArticleFieldAdd{
                    Name: "key",
                    Value: "repellendus",
                },
            },
            Description: sdk.String("project description"),
            Funding: sdk.String("officia"),
            FundingList: []shared.FundingCreate{
                shared.FundingCreate{
                    ID: sdk.Int64(490305),
                    Title: sdk.String("Miss"),
                },
                shared.FundingCreate{
                    ID: sdk.Int64(989410),
                    Title: sdk.String("Mrs."),
                },
                shared.FundingCreate{
                    ID: sdk.Int64(65304),
                    Title: sdk.String("Mrs."),
                },
                shared.FundingCreate{
                    ID: sdk.Int64(783235),
                    Title: sdk.String("Dr."),
                },
            },
            Title: sdk.String("project title"),
        },
        ProjectID: 288398,
    }, operations.PrivateProjectUpdateSecurity{
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

## PrivateProjectsList

List private projects

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
    res, err := s.Projects.PrivateProjectsList(ctx, operations.PrivateProjectsListRequest{
        Limit: sdk.Int64(70447),
        Offset: sdk.Int64(241418),
        Order: operations.PrivateProjectsListOrderEnumViews.ToPointer(),
        OrderDirection: operations.PrivateProjectsListOrderDirectionEnumDesc.ToPointer(),
        Page: sdk.Int64(380729),
        PageSize: sdk.Int64(246063),
        Roles: sdk.String("culpa"),
        Storage: operations.PrivateProjectsListStorageEnumIndividual.ToPointer(),
    }, operations.PrivateProjectsListSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectPrivates != nil {
        // handle response
    }
}
```

## PrivateProjectsSearch

Search inside the private projects

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.PrivateProjectsSearch(ctx, shared.ProjectsSearch{
        Group: sdk.Int(2000013),
        Institution: sdk.Int(2000013),
        Limit: sdk.Int64(10),
        ModifiedSince: sdk.String("2017-12-22"),
        Offset: sdk.Int64(926880),
        Order: shared.ProjectsSearchOrderEnumPublishedDate.ToPointer(),
        OrderDirection: shared.ProjectsSearchOrderDirectionEnumDesc.ToPointer(),
        Page: sdk.Int64(1),
        PageSize: sdk.Int64(10),
        PublishedSince: sdk.String("2017-12-22"),
        SearchFor: sdk.String("figshare"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectPrivates != nil {
        // handle response
    }
}
```

## ProjectArticles

List articles in project

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
    res, err := s.Projects.ProjectArticles(ctx, operations.ProjectArticlesRequest{
        ProjectID: 517309,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Articles != nil {
        // handle response
    }
}
```

## ProjectDetails

View a project

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
    res, err := s.Projects.ProjectDetails(ctx, operations.ProjectDetailsRequest{
        ProjectID: 853940,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectComplete != nil {
        // handle response
    }
}
```

## ProjectsList

Returns a list of public projects

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
    res, err := s.Projects.ProjectsList(ctx, operations.ProjectsListRequest{
        XCursor: sdk.String("67864dbb-675f-4d5e-a0b3-75ed4f6fbee4"),
        Group: sdk.Int64(121059),
        Institution: sdk.Int64(992012),
        Limit: sdk.Int64(241545),
        Offset: sdk.Int64(249420),
        Order: operations.ProjectsListOrderEnumPublishedDate.ToPointer(),
        OrderDirection: operations.ProjectsListOrderDirectionEnumAsc.ToPointer(),
        Page: sdk.Int64(489509),
        PageSize: sdk.Int64(950953),
        PublishedSince: sdk.String("debitis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Projects != nil {
        // handle response
    }
}
```

## ProjectsSearch

Returns a list of public articles

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
    res, err := s.Projects.ProjectsSearch(ctx, operations.ProjectsSearchRequest{
        ProjectsSearch: &shared.ProjectsSearch{
            Group: sdk.Int(2000013),
            Institution: sdk.Int(2000013),
            Limit: sdk.Int64(10),
            ModifiedSince: sdk.String("2017-12-22"),
            Offset: sdk.Int64(233420),
            Order: shared.ProjectsSearchOrderEnumPublishedDate.ToPointer(),
            OrderDirection: shared.ProjectsSearchOrderDirectionEnumDesc.ToPointer(),
            Page: sdk.Int64(1),
            PageSize: sdk.Int64(10),
            PublishedSince: sdk.String("2017-12-22"),
            SearchFor: sdk.String("figshare"),
        },
        XCursor: sdk.String("5b60eb1e-a426-4555-ba3c-28744ed53b88"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Projects != nil {
        // handle response
    }
}
```
