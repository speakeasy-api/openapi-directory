# SDK

## Overview

<p>The Identity Store service used by AWS IAM Identity Center (successor to AWS Single Sign-On) provides a single place to retrieve all of your identities (users and groups). For more information, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">IAM Identity Center User Guide</a>.</p> <pre><code> &lt;note&gt; &lt;p&gt;Although AWS Single Sign-On was renamed, the &lt;code&gt;sso&lt;/code&gt; and &lt;code&gt;identitystore&lt;/code&gt; API namespaces will continue to retain their original name for backward compatibility purposes. For more information, see &lt;a href=&quot;https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html#renamed&quot;&gt;IAM Identity Center rename&lt;/a&gt;.&lt;/p&gt; &lt;/note&gt; &lt;p&gt;This reference guide describes the identity store operations that you can call programatically and includes detailed information about data types and errors.&lt;/p&gt; </code></pre>

Amazon Web Services documentation
<https://docs.aws.amazon.com/identitystore/>
### Available Operations

* [CreateGroup](#creategroup) - Creates a group within the specified identity store.
* [CreateGroupMembership](#creategroupmembership) - Creates a relationship between a member and a group. The following identifiers must be specified: <code>GroupId</code>, <code>IdentityStoreId</code>, and <code>MemberId</code>.
* [CreateUser](#createuser) - Creates a user within the specified identity store.
* [DeleteGroup](#deletegroup) - Delete a group within an identity store given <code>GroupId</code>.
* [DeleteGroupMembership](#deletegroupmembership) - Delete a membership within a group given <code>MembershipId</code>.
* [DeleteUser](#deleteuser) - Deletes a user within an identity store given <code>UserId</code>.
* [DescribeGroup](#describegroup) - Retrieves the group metadata and attributes from <code>GroupId</code> in an identity store.
* [DescribeGroupMembership](#describegroupmembership) - Retrieves membership metadata and attributes from <code>MembershipId</code> in an identity store.
* [DescribeUser](#describeuser) - Retrieves the user metadata and attributes from the <code>UserId</code> in an identity store.
* [GetGroupID](#getgroupid) - Retrieves <code>GroupId</code> in an identity store.
* [GetGroupMembershipID](#getgroupmembershipid) - Retrieves the <code>MembershipId</code> in an identity store.
* [GetUserID](#getuserid) - Retrieves the <code>UserId</code> in an identity store.
* [IsMemberInGroups](#ismemberingroups) - Checks the user's membership in all requested groups and returns if the member exists in all queried groups.
* [ListGroupMemberships](#listgroupmemberships) - For the specified group in the specified identity store, returns the list of all <code>GroupMembership</code> objects and returns results in paginated form.
* [ListGroupMembershipsForMember](#listgroupmembershipsformember) - For the specified member in the specified identity store, returns the list of all <code>GroupMembership</code> objects and returns results in paginated form.
* [ListGroups](#listgroups) - Lists all groups in the identity store. Returns a paginated list of complete <code>Group</code> objects. Filtering for a <code>Group</code> by the <code>DisplayName</code> attribute is deprecated. Instead, use the <code>GetGroupId</code> API action.
* [ListUsers](#listusers) - Lists all users in the identity store. Returns a paginated list of complete <code>User</code> objects. Filtering for a <code>User</code> by the <code>UserName</code> attribute is deprecated. Instead, use the <code>GetUserId</code> API action.
* [UpdateGroup](#updategroup) - For the specified group in the specified identity store, updates the group metadata and attributes.
* [UpdateUser](#updateuser) - For the specified user in the specified identity store, updates the user metadata and attributes.

## CreateGroup

Creates a group within the specified identity store.

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
    res, err := s.SDK.CreateGroup(ctx, operations.CreateGroupRequest{
        CreateGroupRequest: shared.CreateGroupRequest{
            Description: sdk.String("deserunt"),
            DisplayName: sdk.String("suscipit"),
            IdentityStoreID: "iure",
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        XAmzTarget: operations.CreateGroupXAmzTargetEnumAwsIdentityStoreCreateGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGroupResponse != nil {
        // handle response
    }
}
```

## CreateGroupMembership

Creates a relationship between a member and a group. The following identifiers must be specified: <code>GroupId</code>, <code>IdentityStoreId</code>, and <code>MemberId</code>.

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
    res, err := s.SDK.CreateGroupMembership(ctx, operations.CreateGroupMembershipRequest{
        CreateGroupMembershipRequest: shared.CreateGroupMembershipRequest{
            GroupID: "minus",
            IdentityStoreID: "placeat",
            MemberID: shared.MemberID{
                UserID: sdk.String("voluptatum"),
            },
        },
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("nisi"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("temporibus"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("quis"),
        XAmzTarget: operations.CreateGroupMembershipXAmzTargetEnumAwsIdentityStoreCreateGroupMembership,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGroupMembershipResponse != nil {
        // handle response
    }
}
```

## CreateUser

Creates a user within the specified identity store.

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
    res, err := s.SDK.CreateUser(ctx, operations.CreateUserRequest{
        CreateUserRequest: shared.CreateUserRequest{
            Addresses: []shared.Address{
                shared.Address{
                    Country: sdk.String("deserunt"),
                    Formatted: sdk.String("perferendis"),
                    Locality: sdk.String("ipsam"),
                    PostalCode: sdk.String("repellendus"),
                    Primary: sdk.Bool(false),
                    Region: sdk.String("sapiente"),
                    StreetAddress: sdk.String("quo"),
                    Type: sdk.String("odit"),
                },
            },
            DisplayName: sdk.String("at"),
            Emails: []shared.Email{
                shared.Email{
                    Primary: sdk.Bool(false),
                    Type: sdk.String("maiores"),
                    Value: sdk.String("molestiae"),
                },
                shared.Email{
                    Primary: sdk.Bool(false),
                    Type: sdk.String("quod"),
                    Value: sdk.String("quod"),
                },
                shared.Email{
                    Primary: sdk.Bool(false),
                    Type: sdk.String("esse"),
                    Value: sdk.String("totam"),
                },
                shared.Email{
                    Primary: sdk.Bool(false),
                    Type: sdk.String("porro"),
                    Value: sdk.String("dolorum"),
                },
            },
            IdentityStoreID: "dicta",
            Locale: sdk.String("nam"),
            Name: &shared.Name{
                FamilyName: sdk.String("officia"),
                Formatted: sdk.String("occaecati"),
                GivenName: sdk.String("fugit"),
                HonorificPrefix: sdk.String("deleniti"),
                HonorificSuffix: sdk.String("hic"),
                MiddleName: sdk.String("optio"),
            },
            NickName: sdk.String("totam"),
            PhoneNumbers: []shared.PhoneNumber{
                shared.PhoneNumber{
                    Primary: sdk.Bool(false),
                    Type: sdk.String("commodi"),
                    Value: sdk.String("molestiae"),
                },
            },
            PreferredLanguage: sdk.String("modi"),
            ProfileURL: sdk.String("qui"),
            Timezone: sdk.String("impedit"),
            Title: sdk.String("cum"),
            UserName: sdk.String("esse"),
            UserType: sdk.String("ipsum"),
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("ad"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("sed"),
        XAmzSignedHeaders: sdk.String("iste"),
        XAmzTarget: operations.CreateUserXAmzTargetEnumAwsIdentityStoreCreateUser,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateUserResponse != nil {
        // handle response
    }
}
```

## DeleteGroup

Delete a group within an identity store given <code>GroupId</code>.

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
    res, err := s.SDK.DeleteGroup(ctx, operations.DeleteGroupRequest{
        DeleteGroupRequest: shared.DeleteGroupRequest{
            GroupID: "dolor",
            IdentityStoreID: "natus",
        },
        XAmzAlgorithm: sdk.String("laboriosam"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("fuga"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("iste"),
        XAmzTarget: operations.DeleteGroupXAmzTargetEnumAwsIdentityStoreDeleteGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteGroupResponse != nil {
        // handle response
    }
}
```

## DeleteGroupMembership

Delete a membership within a group given <code>MembershipId</code>.

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
    res, err := s.SDK.DeleteGroupMembership(ctx, operations.DeleteGroupMembershipRequest{
        DeleteGroupMembershipRequest: shared.DeleteGroupMembershipRequest{
            IdentityStoreID: "iure",
            MembershipID: "saepe",
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("laborum"),
        XAmzTarget: operations.DeleteGroupMembershipXAmzTargetEnumAwsIdentityStoreDeleteGroupMembership,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteGroupMembershipResponse != nil {
        // handle response
    }
}
```

## DeleteUser

Deletes a user within an identity store given <code>UserId</code>.

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
    res, err := s.SDK.DeleteUser(ctx, operations.DeleteUserRequest{
        DeleteUserRequest: shared.DeleteUserRequest{
            IdentityStoreID: "dolores",
            UserID: "dolorem",
        },
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("minima"),
        XAmzTarget: operations.DeleteUserXAmzTargetEnumAwsIdentityStoreDeleteUser,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteUserResponse != nil {
        // handle response
    }
}
```

## DescribeGroup

Retrieves the group metadata and attributes from <code>GroupId</code> in an identity store.

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
    res, err := s.SDK.DescribeGroup(ctx, operations.DescribeGroupRequest{
        DescribeGroupRequest: shared.DescribeGroupRequest{
            GroupID: "excepturi",
            IdentityStoreID: "accusantium",
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("culpa"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        XAmzTarget: operations.DescribeGroupXAmzTargetEnumAwsIdentityStoreDescribeGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeGroupResponse != nil {
        // handle response
    }
}
```

## DescribeGroupMembership

Retrieves membership metadata and attributes from <code>MembershipId</code> in an identity store.

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
    res, err := s.SDK.DescribeGroupMembership(ctx, operations.DescribeGroupMembershipRequest{
        DescribeGroupMembershipRequest: shared.DescribeGroupMembershipRequest{
            IdentityStoreID: "culpa",
            MembershipID: "consequuntur",
        },
        XAmzAlgorithm: sdk.String("repellat"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("quam"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        XAmzTarget: operations.DescribeGroupMembershipXAmzTargetEnumAwsIdentityStoreDescribeGroupMembership,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeGroupMembershipResponse != nil {
        // handle response
    }
}
```

## DescribeUser

Retrieves the user metadata and attributes from the <code>UserId</code> in an identity store.

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
    res, err := s.SDK.DescribeUser(ctx, operations.DescribeUserRequest{
        DescribeUserRequest: shared.DescribeUserRequest{
            IdentityStoreID: "velit",
            UserID: "error",
        },
        XAmzAlgorithm: sdk.String("quia"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("vitae"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("animi"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("odit"),
        XAmzTarget: operations.DescribeUserXAmzTargetEnumAwsIdentityStoreDescribeUser,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeUserResponse != nil {
        // handle response
    }
}
```

## GetGroupID

Retrieves <code>GroupId</code> in an identity store.

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
    res, err := s.SDK.GetGroupID(ctx, operations.GetGroupIDRequest{
        GetGroupIDRequest: shared.GetGroupIDRequest{
            AlternateIdentifier: shared.AlternateIdentifier{
                ExternalID: &shared.ExternalID{
                    ID: "quo",
                    Issuer: "sequi",
                },
                UniqueAttribute: &shared.UniqueAttribute{
                    AttributePath: "tenetur",
                    AttributeValue: map[string]interface{}{
                        "id": "possimus",
                        "aut": "quasi",
                    },
                },
            },
            IdentityStoreID: "error",
        },
        XAmzAlgorithm: sdk.String("temporibus"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("nihil"),
        XAmzTarget: operations.GetGroupIDXAmzTargetEnumAwsIdentityStoreGetGroupID,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetGroupIDResponse != nil {
        // handle response
    }
}
```

## GetGroupMembershipID

Retrieves the <code>MembershipId</code> in an identity store.

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
    res, err := s.SDK.GetGroupMembershipID(ctx, operations.GetGroupMembershipIDRequest{
        GetGroupMembershipIDRequest: shared.GetGroupMembershipIDRequest{
            GroupID: "praesentium",
            IdentityStoreID: "voluptatibus",
            MemberID: shared.MemberID{
                UserID: sdk.String("ipsa"),
            },
        },
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("doloremque"),
        XAmzSignature: sdk.String("reprehenderit"),
        XAmzSignedHeaders: sdk.String("ut"),
        XAmzTarget: operations.GetGroupMembershipIDXAmzTargetEnumAwsIdentityStoreGetGroupMembershipID,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetGroupMembershipIDResponse != nil {
        // handle response
    }
}
```

## GetUserID

Retrieves the <code>UserId</code> in an identity store.

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
    res, err := s.SDK.GetUserID(ctx, operations.GetUserIDRequest{
        GetUserIDRequest: shared.GetUserIDRequest{
            AlternateIdentifier: shared.AlternateIdentifier{
                ExternalID: &shared.ExternalID{
                    ID: "maiores",
                    Issuer: "dicta",
                },
                UniqueAttribute: &shared.UniqueAttribute{
                    AttributePath: "corporis",
                    AttributeValue: map[string]interface{}{
                        "iusto": "dicta",
                        "harum": "enim",
                    },
                },
            },
            IdentityStoreID: "accusamus",
        },
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("molestias"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        XAmzTarget: operations.GetUserIDXAmzTargetEnumAwsIdentityStoreGetUserID,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUserIDResponse != nil {
        // handle response
    }
}
```

## IsMemberInGroups

Checks the user's membership in all requested groups and returns if the member exists in all queried groups.

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
    res, err := s.SDK.IsMemberInGroups(ctx, operations.IsMemberInGroupsRequest{
        IsMemberInGroupsRequest: shared.IsMemberInGroupsRequest{
            GroupIds: []string{
                "modi",
                "praesentium",
                "rem",
                "voluptates",
            },
            IdentityStoreID: "quasi",
            MemberID: shared.MemberID{
                UserID: sdk.String("repudiandae"),
            },
        },
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("itaque"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("consequatur"),
        XAmzSignedHeaders: sdk.String("est"),
        XAmzTarget: operations.IsMemberInGroupsXAmzTargetEnumAwsIdentityStoreIsMemberInGroups,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IsMemberInGroupsResponse != nil {
        // handle response
    }
}
```

## ListGroupMemberships

For the specified group in the specified identity store, returns the list of all <code>GroupMembership</code> objects and returns results in paginated form.

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
    res, err := s.SDK.ListGroupMemberships(ctx, operations.ListGroupMembershipsRequest{
        ListGroupMembershipsRequest: shared.ListGroupMembershipsRequest{
            GroupID: "quibusdam",
            IdentityStoreID: "explicabo",
            MaxResults: sdk.Int64(647174),
            NextToken: sdk.String("distinctio"),
        },
        MaxResults: sdk.String("quibusdam"),
        NextToken: sdk.String("labore"),
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("magni"),
        XAmzTarget: operations.ListGroupMembershipsXAmzTargetEnumAwsIdentityStoreListGroupMemberships,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGroupMembershipsResponse != nil {
        // handle response
    }
}
```

## ListGroupMembershipsForMember

For the specified member in the specified identity store, returns the list of all <code>GroupMembership</code> objects and returns results in paginated form.

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
    res, err := s.SDK.ListGroupMembershipsForMember(ctx, operations.ListGroupMembershipsForMemberRequest{
        ListGroupMembershipsForMemberRequest: shared.ListGroupMembershipsForMemberRequest{
            IdentityStoreID: "assumenda",
            MaxResults: sdk.Int64(369808),
            MemberID: shared.MemberID{
                UserID: sdk.String("alias"),
            },
            NextToken: sdk.String("fugit"),
        },
        MaxResults: sdk.String("dolorum"),
        NextToken: sdk.String("excepturi"),
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("non"),
        XAmzTarget: operations.ListGroupMembershipsForMemberXAmzTargetEnumAwsIdentityStoreListGroupMembershipsForMember,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGroupMembershipsForMemberResponse != nil {
        // handle response
    }
}
```

## ListGroups

Lists all groups in the identity store. Returns a paginated list of complete <code>Group</code> objects. Filtering for a <code>Group</code> by the <code>DisplayName</code> attribute is deprecated. Instead, use the <code>GetGroupId</code> API action.

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
    res, err := s.SDK.ListGroups(ctx, operations.ListGroupsRequest{
        ListGroupsRequest: shared.ListGroupsRequest{
            Filters: []shared.Filter{
                shared.Filter{
                    AttributePath: "sint",
                    AttributeValue: "aliquid",
                },
                shared.Filter{
                    AttributePath: "provident",
                    AttributeValue: "necessitatibus",
                },
                shared.Filter{
                    AttributePath: "sint",
                    AttributeValue: "officia",
                },
                shared.Filter{
                    AttributePath: "dolor",
                    AttributeValue: "debitis",
                },
            },
            IdentityStoreID: "a",
            MaxResults: sdk.Int64(680056),
            NextToken: sdk.String("in"),
        },
        MaxResults: sdk.String("in"),
        NextToken: sdk.String("illum"),
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("rerum"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("cumque"),
        XAmzSignature: sdk.String("facere"),
        XAmzSignedHeaders: sdk.String("ea"),
        XAmzTarget: operations.ListGroupsXAmzTargetEnumAwsIdentityStoreListGroups,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGroupsResponse != nil {
        // handle response
    }
}
```

## ListUsers

Lists all users in the identity store. Returns a paginated list of complete <code>User</code> objects. Filtering for a <code>User</code> by the <code>UserName</code> attribute is deprecated. Instead, use the <code>GetUserId</code> API action.

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
    res, err := s.SDK.ListUsers(ctx, operations.ListUsersRequest{
        ListUsersRequest: shared.ListUsersRequest{
            Filters: []shared.Filter{
                shared.Filter{
                    AttributePath: "laborum",
                    AttributeValue: "accusamus",
                },
                shared.Filter{
                    AttributePath: "non",
                    AttributeValue: "occaecati",
                },
            },
            IdentityStoreID: "enim",
            MaxResults: sdk.Int64(881736),
            NextToken: sdk.String("delectus"),
        },
        MaxResults: sdk.String("quidem"),
        NextToken: sdk.String("provident"),
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.ListUsersXAmzTargetEnumAwsIdentityStoreListUsers,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUsersResponse != nil {
        // handle response
    }
}
```

## UpdateGroup

For the specified group in the specified identity store, updates the group metadata and attributes.

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
    res, err := s.SDK.UpdateGroup(ctx, operations.UpdateGroupRequest{
        UpdateGroupRequest: shared.UpdateGroupRequest{
            GroupID: "nisi",
            IdentityStoreID: "vel",
            Operations: []shared.AttributeOperation{
                shared.AttributeOperation{
                    AttributePath: "omnis",
                    AttributeValue: map[string]interface{}{
                        "perferendis": "nihil",
                        "magnam": "distinctio",
                    },
                },
                shared.AttributeOperation{
                    AttributePath: "id",
                    AttributeValue: map[string]interface{}{
                        "labore": "suscipit",
                        "natus": "nobis",
                    },
                },
                shared.AttributeOperation{
                    AttributePath: "eum",
                    AttributeValue: map[string]interface{}{
                        "aspernatur": "architecto",
                        "magnam": "et",
                        "excepturi": "ullam",
                        "provident": "quos",
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("ad"),
        XAmzSignedHeaders: sdk.String("eum"),
        XAmzTarget: operations.UpdateGroupXAmzTargetEnumAwsIdentityStoreUpdateGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateGroupResponse != nil {
        // handle response
    }
}
```

## UpdateUser

For the specified user in the specified identity store, updates the user metadata and attributes.

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
    res, err := s.SDK.UpdateUser(ctx, operations.UpdateUserRequest{
        UpdateUserRequest: shared.UpdateUserRequest{
            IdentityStoreID: "dolor",
            Operations: []shared.AttributeOperation{
                shared.AttributeOperation{
                    AttributePath: "odit",
                    AttributeValue: map[string]interface{}{
                        "quasi": "iure",
                        "doloribus": "debitis",
                    },
                },
                shared.AttributeOperation{
                    AttributePath: "eius",
                    AttributeValue: map[string]interface{}{
                        "deleniti": "facilis",
                        "in": "architecto",
                        "architecto": "repudiandae",
                        "ullam": "expedita",
                    },
                },
                shared.AttributeOperation{
                    AttributePath: "nihil",
                    AttributeValue: map[string]interface{}{
                        "quibusdam": "sed",
                        "saepe": "pariatur",
                        "accusantium": "consequuntur",
                        "praesentium": "natus",
                    },
                },
                shared.AttributeOperation{
                    AttributePath: "magni",
                    AttributeValue: map[string]interface{}{
                        "quo": "illum",
                    },
                },
            },
            UserID: "pariatur",
        },
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("ab"),
        XAmzTarget: operations.UpdateUserXAmzTargetEnumAwsIdentityStoreUpdateUser,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateUserResponse != nil {
        // handle response
    }
}
```
