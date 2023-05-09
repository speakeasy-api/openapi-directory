# SDK

## Overview

<fullname>AWS CodeStar</fullname> <p>This is the API reference for AWS CodeStar. This reference provides descriptions of the operations and data types for the AWS CodeStar API along with usage examples.</p> <p>You can use the AWS CodeStar API to work with:</p> <p>Projects and their resources, by calling the following:</p> <ul> <li> <p> <code>DeleteProject</code>, which deletes a project.</p> </li> <li> <p> <code>DescribeProject</code>, which lists the attributes of a project.</p> </li> <li> <p> <code>ListProjects</code>, which lists all projects associated with your AWS account.</p> </li> <li> <p> <code>ListResources</code>, which lists the resources associated with a project.</p> </li> <li> <p> <code>ListTagsForProject</code>, which lists the tags associated with a project.</p> </li> <li> <p> <code>TagProject</code>, which adds tags to a project.</p> </li> <li> <p> <code>UntagProject</code>, which removes tags from a project.</p> </li> <li> <p> <code>UpdateProject</code>, which updates the attributes of a project.</p> </li> </ul> <p>Teams and team members, by calling the following:</p> <ul> <li> <p> <code>AssociateTeamMember</code>, which adds an IAM user to the team for a project.</p> </li> <li> <p> <code>DisassociateTeamMember</code>, which removes an IAM user from the team for a project.</p> </li> <li> <p> <code>ListTeamMembers</code>, which lists all the IAM users in the team for a project, including their roles and attributes.</p> </li> <li> <p> <code>UpdateTeamMember</code>, which updates a team member's attributes in a project.</p> </li> </ul> <p>Users, by calling the following:</p> <ul> <li> <p> <code>CreateUserProfile</code>, which creates a user profile that contains data associated with the user across all projects.</p> </li> <li> <p> <code>DeleteUserProfile</code>, which deletes all user profile information across all projects.</p> </li> <li> <p> <code>DescribeUserProfile</code>, which describes the profile of a user.</p> </li> <li> <p> <code>ListUserProfiles</code>, which lists all user profiles.</p> </li> <li> <p> <code>UpdateUserProfile</code>, which updates the profile for a user.</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/codestar/>
### Available Operations

* [AssociateTeamMember](#associateteammember) - Adds an IAM user to the team for an AWS CodeStar project.
* [CreateProject](#createproject) - Creates a project, including project resources. This action creates a project based on a submitted project request. A set of source code files and a toolchain template file can be included with the project request. If these are not provided, an empty project is created.
* [CreateUserProfile](#createuserprofile) - Creates a profile for a user that includes user preferences, such as the display name and email address assocciated with the user, in AWS CodeStar. The user profile is not project-specific. Information in the user profile is displayed wherever the user's information appears to other users in AWS CodeStar.
* [DeleteProject](#deleteproject) - Deletes a project, including project resources. Does not delete users associated with the project, but does delete the IAM roles that allowed access to the project.
* [DeleteUserProfile](#deleteuserprofile) - Deletes a user profile in AWS CodeStar, including all personal preference data associated with that profile, such as display name and email address. It does not delete the history of that user, for example the history of commits made by that user.
* [DescribeProject](#describeproject) - Describes a project and its resources.
* [DescribeUserProfile](#describeuserprofile) - Describes a user in AWS CodeStar and the user attributes across all projects.
* [DisassociateTeamMember](#disassociateteammember) - Removes a user from a project. Removing a user from a project also removes the IAM policies from that user that allowed access to the project and its resources. Disassociating a team member does not remove that user's profile from AWS CodeStar. It does not remove the user from IAM.
* [ListProjects](#listprojects) - Lists all projects in AWS CodeStar associated with your AWS account.
* [ListResources](#listresources) - Lists resources associated with a project in AWS CodeStar.
* [ListTagsForProject](#listtagsforproject) - Gets the tags for a project.
* [ListTeamMembers](#listteammembers) - Lists all team members associated with a project.
* [ListUserProfiles](#listuserprofiles) - Lists all the user profiles configured for your AWS account in AWS CodeStar.
* [TagProject](#tagproject) - Adds tags to a project.
* [UntagProject](#untagproject) - Removes tags from a project.
* [UpdateProject](#updateproject) - Updates a project in AWS CodeStar.
* [UpdateTeamMember](#updateteammember) - Updates a team member's attributes in an AWS CodeStar project. For example, you can change a team member's role in the project, or change whether they have remote access to project resources.
* [UpdateUserProfile](#updateuserprofile) - Updates a user's profile in AWS CodeStar. The user profile is not project-specific. Information in the user profile is displayed wherever the user's information appears to other users in AWS CodeStar. 

## AssociateTeamMember

Adds an IAM user to the team for an AWS CodeStar project.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AssociateTeamMember(ctx, operations.AssociateTeamMemberRequest{
        AssociateTeamMemberRequest: shared.AssociateTeamMemberRequest{
            ClientRequestToken: sdk.String("suscipit"),
            ProjectID: "iure",
            ProjectRole: "magnam",
            RemoteAccessAllowed: sdk.Bool(false),
            UserArn: "debitis",
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("placeat"),
        XAmzTarget: operations.AssociateTeamMemberXAmzTargetEnumCodeStar20170419AssociateTeamMember,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateTeamMemberResult != nil {
        // handle response
    }
}
```

## CreateProject

Creates a project, including project resources. This action creates a project based on a submitted project request. A set of source code files and a toolchain template file can be included with the project request. If these are not provided, an empty project is created.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateProject(ctx, operations.CreateProjectRequest{
        CreateProjectRequest: shared.CreateProjectRequest{
            ClientRequestToken: sdk.String("voluptatum"),
            Description: sdk.String("iusto"),
            ID: "96ed151a-05df-4c2d-9f7c-c78ca1ba928f",
            Name: "optio",
            SourceCode: []shared.Code{
                shared.Code{
                    Destination: shared.CodeDestination{
                        CodeCommit: &shared.CodeCommitCodeDestination{
                            Name: "Lucy Krajcik",
                        },
                        GitHub: &shared.GitHubCodeDestination{
                            Description: sdk.String("impedit"),
                            IssuesEnabled: false,
                            Name: "Cory Emmerich",
                            Owner: "perferendis",
                            PrivateRepository: false,
                            Token: "ad",
                            Type: "natus",
                        },
                    },
                    Source: shared.CodeSource{
                        S3: shared.S3Location{
                            BucketKey: sdk.String("sed"),
                            BucketName: sdk.String("iste"),
                        },
                    },
                },
                shared.Code{
                    Destination: shared.CodeDestination{
                        CodeCommit: &shared.CodeCommitCodeDestination{
                            Name: "Faye Howe",
                        },
                        GitHub: &shared.GitHubCodeDestination{
                            Description: sdk.String("fuga"),
                            IssuesEnabled: false,
                            Name: "Stacy Moore",
                            Owner: "quidem",
                            PrivateRepository: false,
                            Token: "architecto",
                            Type: "ipsa",
                        },
                    },
                    Source: shared.CodeSource{
                        S3: shared.S3Location{
                            BucketKey: sdk.String("reiciendis"),
                            BucketName: sdk.String("est"),
                        },
                    },
                },
                shared.Code{
                    Destination: shared.CodeDestination{
                        CodeCommit: &shared.CodeCommitCodeDestination{
                            Name: "Cameron Dach",
                        },
                        GitHub: &shared.GitHubCodeDestination{
                            Description: sdk.String("explicabo"),
                            IssuesEnabled: false,
                            Name: "Ronnie Mohr",
                            Owner: "excepturi",
                            PrivateRepository: false,
                            Token: "accusantium",
                            Type: "iure",
                        },
                    },
                    Source: shared.CodeSource{
                        S3: shared.S3Location{
                            BucketKey: sdk.String("culpa"),
                            BucketName: sdk.String("doloribus"),
                        },
                    },
                },
            },
            Tags: map[string]string{
                "architecto": "mollitia",
                "dolorem": "culpa",
                "consequuntur": "repellat",
                "mollitia": "occaecati",
            },
            Toolchain: &shared.Toolchain{
                RoleArn: sdk.String("numquam"),
                Source: shared.ToolchainSource{
                    S3: shared.S3Location{
                        BucketKey: sdk.String("commodi"),
                        BucketName: sdk.String("quam"),
                    },
                },
                StackParameters: map[string]string{
                    "velit": "error",
                    "quia": "quis",
                },
            },
        },
        XAmzAlgorithm: sdk.String("vitae"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("animi"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("sequi"),
        XAmzTarget: operations.CreateProjectXAmzTargetEnumCodeStar20170419CreateProject,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateProjectResult != nil {
        // handle response
    }
}
```

## CreateUserProfile

Creates a profile for a user that includes user preferences, such as the display name and email address assocciated with the user, in AWS CodeStar. The user profile is not project-specific. Information in the user profile is displayed wherever the user's information appears to other users in AWS CodeStar.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateUserProfile(ctx, operations.CreateUserProfileRequest{
        CreateUserProfileRequest: shared.CreateUserProfileRequest{
            DisplayName: "tenetur",
            EmailAddress: "ipsam",
            SSHPublicKey: sdk.String("id"),
            UserArn: "possimus",
        },
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("temporibus"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        XAmzTarget: operations.CreateUserProfileXAmzTargetEnumCodeStar20170419CreateUserProfile,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateUserProfileResult != nil {
        // handle response
    }
}
```

## DeleteProject

Deletes a project, including project resources. Does not delete users associated with the project, but does delete the IAM roles that allowed access to the project.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteProject(ctx, operations.DeleteProjectRequest{
        DeleteProjectRequest: shared.DeleteProjectRequest{
            ClientRequestToken: sdk.String("voluptatibus"),
            DeleteStack: sdk.Bool(false),
            ID: "e78f097b-0074-4f15-871b-5e6e13b99d48",
        },
        XAmzAlgorithm: sdk.String("rem"),
        XAmzContentSha256: sdk.String("voluptates"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("repudiandae"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("itaque"),
        XAmzTarget: operations.DeleteProjectXAmzTargetEnumCodeStar20170419DeleteProject,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteProjectResult != nil {
        // handle response
    }
}
```

## DeleteUserProfile

Deletes a user profile in AWS CodeStar, including all personal preference data associated with that profile, such as display name and email address. It does not delete the history of that user, for example the history of commits made by that user.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteUserProfile(ctx, operations.DeleteUserProfileRequest{
        DeleteUserProfileRequest: shared.DeleteUserProfileRequest{
            UserArn: "incidunt",
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("est"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        XAmzTarget: operations.DeleteUserProfileXAmzTargetEnumCodeStar20170419DeleteUserProfile,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteUserProfileResult != nil {
        // handle response
    }
}
```

## DescribeProject

Describes a project and its resources.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeProject(ctx, operations.DescribeProjectRequest{
        DescribeProjectRequest: shared.DescribeProjectRequest{
            ID: "d4426980-2d50-42a9-8bb4-f63c969e9a3e",
        },
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("rerum"),
        XAmzTarget: operations.DescribeProjectXAmzTargetEnumCodeStar20170419DescribeProject,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeProjectResult != nil {
        // handle response
    }
}
```

## DescribeUserProfile

Describes a user in AWS CodeStar and the user attributes across all projects.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeUserProfile(ctx, operations.DescribeUserProfileRequest{
        DescribeUserProfileRequest: shared.DescribeUserProfileRequest{
            UserArn: "dicta",
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("facere"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        XAmzTarget: operations.DescribeUserProfileXAmzTargetEnumCodeStar20170419DescribeUserProfile,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeUserProfileResult != nil {
        // handle response
    }
}
```

## DisassociateTeamMember

Removes a user from a project. Removing a user from a project also removes the IAM policies from that user that allowed access to the project and its resources. Disassociating a team member does not remove that user's profile from AWS CodeStar. It does not remove the user from IAM.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DisassociateTeamMember(ctx, operations.DisassociateTeamMemberRequest{
        DisassociateTeamMemberRequest: shared.DisassociateTeamMemberRequest{
            ProjectID: "non",
            UserArn: "occaecati",
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("id"),
        XAmzTarget: operations.DisassociateTeamMemberXAmzTargetEnumCodeStar20170419DisassociateTeamMember,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateTeamMemberResult != nil {
        // handle response
    }
}
```

## ListProjects

Lists all projects in AWS CodeStar associated with your AWS account.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListProjects(ctx, operations.ListProjectsRequest{
        ListProjectsRequest: shared.ListProjectsRequest{
            MaxResults: sdk.Int64(501324),
            NextToken: sdk.String("deleniti"),
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("nisi"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("omnis"),
        XAmzTarget: operations.ListProjectsXAmzTargetEnumCodeStar20170419ListProjects,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListProjectsResult != nil {
        // handle response
    }
}
```

## ListResources

Lists resources associated with a project in AWS CodeStar.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListResources(ctx, operations.ListResourcesRequest{
        ListResourcesRequest: shared.ListResourcesRequest{
            MaxResults: sdk.Int64(474867),
            NextToken: sdk.String("perferendis"),
            ProjectID: "nihil",
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("id"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("natus"),
        XAmzTarget: operations.ListResourcesXAmzTargetEnumCodeStar20170419ListResources,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListResourcesResult != nil {
        // handle response
    }
}
```

## ListTagsForProject

Gets the tags for a project.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForProject(ctx, operations.ListTagsForProjectRequest{
        ListTagsForProjectRequest: shared.ListTagsForProjectRequest{
            ID: "b6e21419-5989-40af-a563-e2516fe4c8b7",
            MaxResults: sdk.Int64(100226),
            NextToken: sdk.String("architecto"),
        },
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("expedita"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("repellat"),
        XAmzSignature: sdk.String("quibusdam"),
        XAmzSignedHeaders: sdk.String("sed"),
        XAmzTarget: operations.ListTagsForProjectXAmzTargetEnumCodeStar20170419ListTagsForProject,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForProjectResult != nil {
        // handle response
    }
}
```

## ListTeamMembers

Lists all team members associated with a project.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTeamMembers(ctx, operations.ListTeamMembersRequest{
        ListTeamMembersRequest: shared.ListTeamMembersRequest{
            MaxResults: sdk.Int64(904648),
            NextToken: sdk.String("pariatur"),
            ProjectID: "accusantium",
        },
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("magni"),
        XAmzSecurityToken: sdk.String("sunt"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("illum"),
        XAmzTarget: operations.ListTeamMembersXAmzTargetEnumCodeStar20170419ListTeamMembers,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTeamMembersResult != nil {
        // handle response
    }
}
```

## ListUserProfiles

Lists all the user profiles configured for your AWS account in AWS CodeStar.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListUserProfiles(ctx, operations.ListUserProfilesRequest{
        ListUserProfilesRequest: shared.ListUserProfilesRequest{
            MaxResults: sdk.Int64(864934),
            NextToken: sdk.String("maxime"),
        },
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.ListUserProfilesXAmzTargetEnumCodeStar20170419ListUserProfiles,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUserProfilesResult != nil {
        // handle response
    }
}
```

## TagProject

Adds tags to a project.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagProject(ctx, operations.TagProjectRequest{
        TagProjectRequest: shared.TagProjectRequest{
            ID: "b576b0d5-f0d3-40c5-bbb2-587053202c73",
            Tags: map[string]string{
                "nostrum": "hic",
                "recusandae": "omnis",
                "facilis": "perspiciatis",
                "voluptatem": "porro",
            },
        },
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("blanditiis"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("eaque"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("rerum"),
        XAmzSignedHeaders: sdk.String("adipisci"),
        XAmzTarget: operations.TagProjectXAmzTargetEnumCodeStar20170419TagProject,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagProjectResult != nil {
        // handle response
    }
}
```

## UntagProject

Removes tags from a project.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagProject(ctx, operations.UntagProjectRequest{
        UntagProjectRequest: shared.UntagProjectRequest{
            ID: "fe49a8d9-cbf4-4863-b323-f9b77f3a4100",
            Tags: []string{
                "odio",
                "quaerat",
            },
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("eos"),
        XAmzSignedHeaders: sdk.String("atque"),
        XAmzTarget: operations.UntagProjectXAmzTargetEnumCodeStar20170419UntagProject,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagProjectResult != nil {
        // handle response
    }
}
```

## UpdateProject

Updates a project in AWS CodeStar.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateProject(ctx, operations.UpdateProjectRequest{
        UpdateProjectRequest: shared.UpdateProjectRequest{
            Description: sdk.String("sit"),
            ID: "d1ba77a8-9ebf-4737-ae42-03ce5e6a95d8",
            Name: sdk.String("similique"),
        },
        XAmzAlgorithm: sdk.String("alias"),
        XAmzContentSha256: sdk.String("at"),
        XAmzCredential: sdk.String("quaerat"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("quod"),
        XAmzSignedHeaders: sdk.String("officiis"),
        XAmzTarget: operations.UpdateProjectXAmzTargetEnumCodeStar20170419UpdateProject,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateProjectResult != nil {
        // handle response
    }
}
```

## UpdateTeamMember

Updates a team member's attributes in an AWS CodeStar project. For example, you can change a team member's role in the project, or change whether they have remote access to project resources.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateTeamMember(ctx, operations.UpdateTeamMemberRequest{
        UpdateTeamMemberRequest: shared.UpdateTeamMemberRequest{
            ProjectID: "qui",
            ProjectRole: sdk.String("dolorum"),
            RemoteAccessAllowed: sdk.Bool(false),
            UserArn: "a",
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("harum"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("amet"),
        XAmzTarget: operations.UpdateTeamMemberXAmzTargetEnumCodeStar20170419UpdateTeamMember,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTeamMemberResult != nil {
        // handle response
    }
}
```

## UpdateUserProfile

Updates a user's profile in AWS CodeStar. The user profile is not project-specific. Information in the user profile is displayed wherever the user's information appears to other users in AWS CodeStar. 

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateUserProfile(ctx, operations.UpdateUserProfileRequest{
        UpdateUserProfileRequest: shared.UpdateUserProfileRequest{
            DisplayName: sdk.String("tempore"),
            EmailAddress: sdk.String("accusamus"),
            SSHPublicKey: sdk.String("numquam"),
            UserArn: "enim",
        },
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("expedita"),
        XAmzSignedHeaders: sdk.String("neque"),
        XAmzTarget: operations.UpdateUserProfileXAmzTargetEnumCodeStar20170419UpdateUserProfile,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateUserProfileResult != nil {
        // handle response
    }
}
```
