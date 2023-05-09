# SDK

## Overview

<p>Welcome to the <i>AWS Clean Rooms API Reference</i>.</p> <p>AWS Clean Rooms is an AWS service that helps multiple parties to join their data together in a secure collaboration workspace. In the collaboration, members who can query and receive results can get insights into the collective datasets without either party getting access to the other party's raw data.</p> <p>To learn more about AWS Clean Rooms concepts, procedures, and best practices, see the <a href="https://docs.aws.amazon.com/clean-rooms/latest/userguide/what-is.html">AWS Clean Rooms User Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/cleanrooms/>
### Available Operations

* [BatchGetSchema](#batchgetschema) - Retrieves multiple schemas by their identifiers.
* [CreateCollaboration](#createcollaboration) - Creates a new collaboration.
* [CreateConfiguredTable](#createconfiguredtable) - Creates a new configured table resource.
* [CreateConfiguredTableAnalysisRule](#createconfiguredtableanalysisrule) - Creates a new analysis rule for a configured table. Currently, only one analysis rule can be created for a given configured table.
* [CreateConfiguredTableAssociation](#createconfiguredtableassociation) - Creates a configured table association. A configured table association links a configured table with a collaboration.
* [CreateMembership](#createmembership) - Creates a membership for a specific collaboration identifier and joins the collaboration.
* [DeleteCollaboration](#deletecollaboration) - Deletes a collaboration. It can only be called by the collaboration owner.
* [DeleteConfiguredTable](#deleteconfiguredtable) - Deletes a configured table.
* [DeleteConfiguredTableAnalysisRule](#deleteconfiguredtableanalysisrule) - Deletes a configured table analysis rule.
* [DeleteConfiguredTableAssociation](#deleteconfiguredtableassociation) - Deletes a configured table association.
* [DeleteMember](#deletemember) - Removes the specified member from a collaboration. The removed member is placed in the Removed status and can't interact with the collaboration. The removed member's data is inaccessible to active members of the collaboration.
* [DeleteMembership](#deletemembership) - Deletes a specified membership. All resources under a membership must be deleted.
* [GetCollaboration](#getcollaboration) - Returns metadata about a collaboration.
* [GetConfiguredTable](#getconfiguredtable) - Retrieves a configured table.
* [GetConfiguredTableAnalysisRule](#getconfiguredtableanalysisrule) - Retrieves a configured table analysis rule.
* [GetConfiguredTableAssociation](#getconfiguredtableassociation) - Retrieves a configured table association.
* [GetMembership](#getmembership) - Retrieves a specified membership for an identifier.
* [GetProtectedQuery](#getprotectedquery) - Returns query processing metadata.
* [GetSchema](#getschema) - Retrieves the schema for a relation within a collaboration.
* [GetSchemaAnalysisRule](#getschemaanalysisrule) - Retrieves a schema analysis rule.
* [ListCollaborations](#listcollaborations) - Lists collaborations the caller owns, is active in, or has been invited to.
* [ListConfiguredTableAssociations](#listconfiguredtableassociations) - Lists configured table associations for a membership.
* [ListConfiguredTables](#listconfiguredtables) - Lists configured tables.
* [ListMembers](#listmembers) - Lists all members within a collaboration.
* [ListMemberships](#listmemberships) - Lists all memberships resources within the caller's account.
* [ListProtectedQueries](#listprotectedqueries) - Lists protected queries, sorted by the most recent query.
* [ListSchemas](#listschemas) - Lists the schemas for relations within a collaboration.
* [ListTagsForResource](#listtagsforresource) - Lists all of the tags that have been added to a resource.
* [StartProtectedQuery](#startprotectedquery) - Creates a protected query that is started by AWS Clean Rooms.
* [TagResource](#tagresource) - Tags a resource.
* [UntagResource](#untagresource) - Removes a tag or list of tags from a resource.
* [UpdateCollaboration](#updatecollaboration) - Updates collaboration metadata and can only be called by the collaboration owner.
* [UpdateConfiguredTable](#updateconfiguredtable) - Updates a configured table.
* [UpdateConfiguredTableAnalysisRule](#updateconfiguredtableanalysisrule) - Updates a configured table analysis rule.
* [UpdateConfiguredTableAssociation](#updateconfiguredtableassociation) - Updates a configured table association.
* [UpdateMembership](#updatemembership) - Updates a membership.
* [UpdateProtectedQuery](#updateprotectedquery) - Updates the processing of a currently running query.

## BatchGetSchema

Retrieves multiple schemas by their identifiers.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchGetSchema(ctx, operations.BatchGetSchemaRequest{
        RequestBody: operations.BatchGetSchemaRequestBody{
            Names: []string{
                "magnam",
                "debitis",
            },
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("placeat"),
        CollaborationIdentifier: "voluptatum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetSchemaOutput != nil {
        // handle response
    }
}
```

## CreateCollaboration

Creates a new collaboration.

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
    res, err := s.SDK.CreateCollaboration(ctx, operations.CreateCollaborationRequest{
        RequestBody: operations.CreateCollaborationRequestBody{
            CreatorDisplayName: "iusto",
            CreatorMemberAbilities: []shared.MemberAbilityEnum{
                shared.MemberAbilityEnumCanQuery,
                shared.MemberAbilityEnumCanReceiveResults,
                shared.MemberAbilityEnumCanReceiveResults,
            },
            DataEncryptionMetadata: &operations.CreateCollaborationRequestBodyDataEncryptionMetadata{
                AllowCleartext: sdk.Bool(false),
                AllowDuplicates: sdk.Bool(false),
                AllowJoinsOnColumnsWithDifferentNames: sdk.Bool(false),
                PreserveNulls: sdk.Bool(false),
            },
            Description: "ab",
            Members: []shared.MemberSpecification{
                shared.MemberSpecification{
                    AccountID: "veritatis",
                    DisplayName: "deserunt",
                    MemberAbilities: []shared.MemberAbilityEnum{
                        shared.MemberAbilityEnumCanQuery,
                    },
                },
                shared.MemberSpecification{
                    AccountID: "repellendus",
                    DisplayName: "sapiente",
                    MemberAbilities: []shared.MemberAbilityEnum{
                        shared.MemberAbilityEnumCanQuery,
                        shared.MemberAbilityEnumCanReceiveResults,
                        shared.MemberAbilityEnumCanReceiveResults,
                        shared.MemberAbilityEnumCanReceiveResults,
                    },
                },
            },
            Name: "Bernadette Schmidt",
            QueryLogStatus: operations.CreateCollaborationRequestBodyQueryLogStatusEnumDisabled,
            Tags: map[string]string{
                "dicta": "nam",
                "officia": "occaecati",
                "fugit": "deleniti",
            },
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("optio"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("beatae"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("modi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCollaborationOutput != nil {
        // handle response
    }
}
```

## CreateConfiguredTable

Creates a new configured table resource.

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
    res, err := s.SDK.CreateConfiguredTable(ctx, operations.CreateConfiguredTableRequest{
        RequestBody: operations.CreateConfiguredTableRequestBody{
            AllowedColumns: []string{
                "impedit",
            },
            AnalysisMethod: operations.CreateConfiguredTableRequestBodyAnalysisMethodEnumDirectQuery,
            Description: sdk.String("cum"),
            Name: "Edna Mante II",
            TableReference: operations.CreateConfiguredTableRequestBodyTableReference{
                Glue: &shared.GlueTableReference{
                    DatabaseName: "natus",
                    TableName: "sed",
                },
            },
            Tags: map[string]string{
                "dolor": "natus",
                "laboriosam": "hic",
                "saepe": "fuga",
            },
        },
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateConfiguredTableOutput != nil {
        // handle response
    }
}
```

## CreateConfiguredTableAnalysisRule

Creates a new analysis rule for a configured table. Currently, only one analysis rule can be created for a given configured table.

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
    res, err := s.SDK.CreateConfiguredTableAnalysisRule(ctx, operations.CreateConfiguredTableAnalysisRuleRequest{
        RequestBody: operations.CreateConfiguredTableAnalysisRuleRequestBody{
            AnalysisRulePolicy: operations.CreateConfiguredTableAnalysisRuleRequestBodyAnalysisRulePolicy{
                V1: &shared.ConfiguredTableAnalysisRulePolicyV1{
                    Aggregation: &shared.AnalysisRuleAggregation{
                        AggregateColumns: []shared.AggregateColumn{
                            shared.AggregateColumn{
                                ColumnNames: []string{
                                    "est",
                                    "mollitia",
                                    "laborum",
                                    "dolores",
                                },
                                Function: shared.AggregateFunctionNameEnumSumDistinct,
                            },
                        },
                        DimensionColumns: []string{
                            "explicabo",
                            "nobis",
                        },
                        JoinColumns: []string{
                            "omnis",
                            "nemo",
                        },
                        JoinRequired: shared.JoinRequiredOptionEnumQueryRunner.ToPointer(),
                        OutputConstraints: []shared.AggregationConstraint{
                            shared.AggregationConstraint{
                                ColumnName: "excepturi",
                                Minimum: 38425,
                                Type: shared.AggregationTypeEnumCountDistinct,
                            },
                            shared.AggregationConstraint{
                                ColumnName: "iure",
                                Minimum: 634274,
                                Type: shared.AggregationTypeEnumCountDistinct,
                            },
                        },
                        ScalarFunctions: []shared.ScalarFunctionsEnum{
                            shared.ScalarFunctionsEnumCoalesce,
                            shared.ScalarFunctionsEnumAbs,
                            shared.ScalarFunctionsEnumCast,
                            shared.ScalarFunctionsEnumCeiling,
                        },
                    },
                    List: &shared.AnalysisRuleList{
                        JoinColumns: []string{
                            "consequuntur",
                            "repellat",
                            "mollitia",
                        },
                        ListColumns: []string{
                            "numquam",
                            "commodi",
                            "quam",
                        },
                    },
                },
            },
            AnalysisRuleType: operations.CreateConfiguredTableAnalysisRuleRequestBodyAnalysisRuleTypeEnumAggregation,
        },
        XAmzAlgorithm: sdk.String("velit"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("quia"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("vitae"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("animi"),
        ConfiguredTableIdentifier: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateConfiguredTableAnalysisRuleOutput != nil {
        // handle response
    }
}
```

## CreateConfiguredTableAssociation

Creates a configured table association. A configured table association links a configured table with a collaboration.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateConfiguredTableAssociation(ctx, operations.CreateConfiguredTableAssociationRequest{
        RequestBody: operations.CreateConfiguredTableAssociationRequestBody{
            ConfiguredTableIdentifier: "odit",
            Description: sdk.String("quo"),
            Name: "Mandy Hills",
            RoleArn: "aut",
            Tags: map[string]string{
                "error": "temporibus",
            },
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("praesentium"),
        MembershipIdentifier: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateConfiguredTableAssociationOutput != nil {
        // handle response
    }
}
```

## CreateMembership

Creates a membership for a specific collaboration identifier and joins the collaboration.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateMembership(ctx, operations.CreateMembershipRequest{
        RequestBody: operations.CreateMembershipRequestBody{
            CollaborationIdentifier: "ipsa",
            QueryLogStatus: operations.CreateMembershipRequestBodyQueryLogStatusEnumDisabled,
            Tags: map[string]string{
                "cum": "perferendis",
                "doloremque": "reprehenderit",
            },
        },
        XAmzAlgorithm: sdk.String("ut"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("dolore"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateMembershipOutput != nil {
        // handle response
    }
}
```

## DeleteCollaboration

Deletes a collaboration. It can only be called by the collaboration owner.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteCollaboration(ctx, operations.DeleteCollaborationRequest{
        XAmzAlgorithm: sdk.String("harum"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("repudiandae"),
        XAmzSignature: sdk.String("quae"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        CollaborationIdentifier: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteCollaborationOutput != nil {
        // handle response
    }
}
```

## DeleteConfiguredTable

Deletes a configured table.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteConfiguredTable(ctx, operations.DeleteConfiguredTableRequest{
        XAmzAlgorithm: sdk.String("molestias"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("voluptates"),
        ConfiguredTableIdentifier: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteConfiguredTableOutput != nil {
        // handle response
    }
}
```

## DeleteConfiguredTableAnalysisRule

Deletes a configured table analysis rule.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteConfiguredTableAnalysisRule(ctx, operations.DeleteConfiguredTableAnalysisRuleRequest{
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("itaque"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("consequatur"),
        AnalysisRuleType: operations.DeleteConfiguredTableAnalysisRuleAnalysisRuleTypeEnumList,
        ConfiguredTableIdentifier: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteConfiguredTableAnalysisRuleOutput != nil {
        // handle response
    }
}
```

## DeleteConfiguredTableAssociation

Deletes a configured table association.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteConfiguredTableAssociation(ctx, operations.DeleteConfiguredTableAssociationRequest{
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("qui"),
        ConfiguredTableAssociationIdentifier: "aliquid",
        MembershipIdentifier: "cupiditate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteConfiguredTableAssociationOutput != nil {
        // handle response
    }
}
```

## DeleteMember

Removes the specified member from a collaboration. The removed member is placed in the Removed status and can't interact with the collaboration. The removed member's data is inaccessible to active members of the collaboration.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteMember(ctx, operations.DeleteMemberRequest{
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("magni"),
        XAmzDate: sdk.String("assumenda"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("alias"),
        XAmzSignedHeaders: sdk.String("fugit"),
        AccountID: "dolorum",
        CollaborationIdentifier: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteMemberOutput != nil {
        // handle response
    }
}
```

## DeleteMembership

Deletes a specified membership. All resources under a membership must be deleted.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteMembership(ctx, operations.DeleteMembershipRequest{
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("non"),
        MembershipIdentifier: "eligendi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteMembershipOutput != nil {
        // handle response
    }
}
```

## GetCollaboration

Returns metadata about a collaboration.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetCollaboration(ctx, operations.GetCollaborationRequest{
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("dolor"),
        CollaborationIdentifier: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCollaborationOutput != nil {
        // handle response
    }
}
```

## GetConfiguredTable

Retrieves a configured table.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetConfiguredTable(ctx, operations.GetConfiguredTableRequest{
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("rerum"),
        ConfiguredTableIdentifier: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConfiguredTableOutput != nil {
        // handle response
    }
}
```

## GetConfiguredTableAnalysisRule

Retrieves a configured table analysis rule.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetConfiguredTableAnalysisRule(ctx, operations.GetConfiguredTableAnalysisRuleRequest{
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("facere"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        AnalysisRuleType: operations.GetConfiguredTableAnalysisRuleAnalysisRuleTypeEnumAggregation,
        ConfiguredTableIdentifier: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConfiguredTableAnalysisRuleOutput != nil {
        // handle response
    }
}
```

## GetConfiguredTableAssociation

Retrieves a configured table association.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetConfiguredTableAssociation(ctx, operations.GetConfiguredTableAssociationRequest{
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("id"),
        ConfiguredTableAssociationIdentifier: "blanditiis",
        MembershipIdentifier: "deleniti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConfiguredTableAssociationOutput != nil {
        // handle response
    }
}
```

## GetMembership

Retrieves a specified membership for an identifier.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetMembership(ctx, operations.GetMembershipRequest{
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("nisi"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("omnis"),
        MembershipIdentifier: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMembershipOutput != nil {
        // handle response
    }
}
```

## GetProtectedQuery

Returns query processing metadata.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetProtectedQuery(ctx, operations.GetProtectedQueryRequest{
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("labore"),
        MembershipIdentifier: "suscipit",
        ProtectedQueryIdentifier: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProtectedQueryOutput != nil {
        // handle response
    }
}
```

## GetSchema

Retrieves the schema for a relation within a collaboration.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSchema(ctx, operations.GetSchemaRequest{
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("et"),
        CollaborationIdentifier: "excepturi",
        Name: "Ramona Lueilwitz MD",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSchemaOutput != nil {
        // handle response
    }
}
```

## GetSchemaAnalysisRule

Retrieves a schema analysis rule.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSchemaAnalysisRule(ctx, operations.GetSchemaAnalysisRuleRequest{
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("ad"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("odit"),
        CollaborationIdentifier: "nemo",
        Name: "Vera Wyman",
        Type: operations.GetSchemaAnalysisRuleTypeEnumList,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSchemaAnalysisRuleOutput != nil {
        // handle response
    }
}
```

## ListCollaborations

Lists collaborations the caller owns, is active in, or has been invited to.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListCollaborations(ctx, operations.ListCollaborationsRequest{
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("ullam"),
        MaxResults: sdk.Int64(714242),
        MemberStatus: operations.ListCollaborationsMemberStatusEnumInvited.ToPointer(),
        NextToken: sdk.String("repellat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCollaborationsOutput != nil {
        // handle response
    }
}
```

## ListConfiguredTableAssociations

Lists configured table associations for a membership.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListConfiguredTableAssociations(ctx, operations.ListConfiguredTableAssociationsRequest{
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("praesentium"),
        MaxResults: sdk.Int64(615560),
        MembershipIdentifier: "magni",
        NextToken: sdk.String("sunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConfiguredTableAssociationsOutput != nil {
        // handle response
    }
}
```

## ListConfiguredTables

Lists configured tables.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListConfiguredTables(ctx, operations.ListConfiguredTablesRequest{
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("odit"),
        MaxResults: sdk.Int64(407183),
        NextToken: sdk.String("accusantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConfiguredTablesOutput != nil {
        // handle response
    }
}
```

## ListMembers

Lists all members within a collaboration.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListMembers(ctx, operations.ListMembersRequest{
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("autem"),
        XAmzSignedHeaders: sdk.String("nam"),
        CollaborationIdentifier: "eaque",
        MaxResults: sdk.Int64(866383),
        NextToken: sdk.String("nemo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMembersOutput != nil {
        // handle response
    }
}
```

## ListMemberships

Lists all memberships resources within the caller's account.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListMemberships(ctx, operations.ListMembershipsRequest{
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("fugiat"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("cumque"),
        XAmzSignedHeaders: sdk.String("corporis"),
        MaxResults: sdk.Int64(944124),
        NextToken: sdk.String("libero"),
        Status: operations.ListMembershipsStatusEnumCollaborationDeleted.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMembershipsOutput != nil {
        // handle response
    }
}
```

## ListProtectedQueries

Lists protected queries, sorted by the most recent query.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListProtectedQueries(ctx, operations.ListProtectedQueriesRequest{
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("eaque"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("nesciunt"),
        MaxResults: sdk.Int64(179490),
        MembershipIdentifier: "perferendis",
        NextToken: sdk.String("dolores"),
        Status: operations.ListProtectedQueriesStatusEnumSuccess.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListProtectedQueriesOutput != nil {
        // handle response
    }
}
```

## ListSchemas

Lists the schemas for relations within a collaboration.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListSchemas(ctx, operations.ListSchemasRequest{
        XAmzAlgorithm: sdk.String("quam"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("nostrum"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("omnis"),
        CollaborationIdentifier: "facilis",
        MaxResults: sdk.Int64(596656),
        NextToken: sdk.String("voluptatem"),
        SchemaType: operations.ListSchemasSchemaTypeEnumTable.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSchemasOutput != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists all of the tags that have been added to a resource.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("eaque"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("rerum"),
        ResourceArn: "adipisci",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceOutput != nil {
        // handle response
    }
}
```

## StartProtectedQuery

Creates a protected query that is started by AWS Clean Rooms.

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
    res, err := s.SDK.StartProtectedQuery(ctx, operations.StartProtectedQueryRequest{
        RequestBody: operations.StartProtectedQueryRequestBody{
            ResultConfiguration: operations.StartProtectedQueryRequestBodyResultConfiguration{
                OutputConfiguration: &shared.ProtectedQueryOutputConfiguration{
                    S3: &shared.ProtectedQueryS3OutputConfiguration{
                        Bucket: "asperiores",
                        KeyPrefix: sdk.String("earum"),
                        ResultFormat: shared.ResultFormatEnumCsv,
                    },
                },
            },
            SQLParameters: operations.StartProtectedQueryRequestBodySQLParameters{
                QueryString: sdk.String("iste"),
            },
            Type: operations.StartProtectedQueryRequestBodyTypeEnumSQL,
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("delectus"),
        MembershipIdentifier: "quaerat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartProtectedQueryOutput != nil {
        // handle response
    }
}
```

## TagResource

Tags a resource.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            Tags: map[string]string{
                "aliquid": "dolorem",
                "dolorem": "dolor",
                "qui": "ipsum",
            },
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("amet"),
        ResourceArn: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceOutput != nil {
        // handle response
    }
}
```

## UntagResource

Removes a tag or list of tags from a resource.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("quaerat"),
        ResourceArn: "accusamus",
        TagKeys: []string{
            "voluptatibus",
            "voluptas",
            "natus",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceOutput != nil {
        // handle response
    }
}
```

## UpdateCollaboration

Updates collaboration metadata and can only be called by the collaboration owner.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateCollaboration(ctx, operations.UpdateCollaborationRequest{
        RequestBody: operations.UpdateCollaborationRequestBody{
            Description: sdk.String("eos"),
            Name: sdk.String("Miss Paul Steuber"),
        },
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        CollaborationIdentifier: "asperiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateCollaborationOutput != nil {
        // handle response
    }
}
```

## UpdateConfiguredTable

Updates a configured table.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateConfiguredTable(ctx, operations.UpdateConfiguredTableRequest{
        RequestBody: operations.UpdateConfiguredTableRequestBody{
            Description: sdk.String("nihil"),
            Name: sdk.String("Tamara Ondricka"),
        },
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("optio"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("ad"),
        XAmzSignedHeaders: sdk.String("saepe"),
        ConfiguredTableIdentifier: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateConfiguredTableOutput != nil {
        // handle response
    }
}
```

## UpdateConfiguredTableAnalysisRule

Updates a configured table analysis rule.

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
    res, err := s.SDK.UpdateConfiguredTableAnalysisRule(ctx, operations.UpdateConfiguredTableAnalysisRuleRequest{
        RequestBody: operations.UpdateConfiguredTableAnalysisRuleRequestBody{
            AnalysisRulePolicy: operations.UpdateConfiguredTableAnalysisRuleRequestBodyAnalysisRulePolicy{
                V1: &shared.ConfiguredTableAnalysisRulePolicyV1{
                    Aggregation: &shared.AnalysisRuleAggregation{
                        AggregateColumns: []shared.AggregateColumn{
                            shared.AggregateColumn{
                                ColumnNames: []string{
                                    "minima",
                                    "repellendus",
                                    "totam",
                                },
                                Function: shared.AggregateFunctionNameEnumCountDistinct,
                            },
                            shared.AggregateColumn{
                                ColumnNames: []string{
                                    "at",
                                },
                                Function: shared.AggregateFunctionNameEnumSumDistinct,
                            },
                            shared.AggregateColumn{
                                ColumnNames: []string{
                                    "vel",
                                    "quod",
                                },
                                Function: shared.AggregateFunctionNameEnumAvg,
                            },
                        },
                        DimensionColumns: []string{
                            "dolorum",
                        },
                        JoinColumns: []string{
                            "esse",
                            "harum",
                            "iusto",
                            "ipsum",
                        },
                        JoinRequired: shared.JoinRequiredOptionEnumQueryRunner.ToPointer(),
                        OutputConstraints: []shared.AggregationConstraint{
                            shared.AggregationConstraint{
                                ColumnName: "tenetur",
                                Minimum: 229442,
                                Type: shared.AggregationTypeEnumCountDistinct,
                            },
                            shared.AggregationConstraint{
                                ColumnName: "tempore",
                                Minimum: 880298,
                                Type: shared.AggregationTypeEnumCountDistinct,
                            },
                            shared.AggregationConstraint{
                                ColumnName: "numquam",
                                Minimum: 313692,
                                Type: shared.AggregationTypeEnumCountDistinct,
                            },
                            shared.AggregationConstraint{
                                ColumnName: "dolorem",
                                Minimum: 957451,
                                Type: shared.AggregationTypeEnumCountDistinct,
                            },
                        },
                        ScalarFunctions: []shared.ScalarFunctionsEnum{
                            shared.ScalarFunctionsEnumRound,
                            shared.ScalarFunctionsEnumTrunc,
                            shared.ScalarFunctionsEnumLower,
                        },
                    },
                    List: &shared.AnalysisRuleList{
                        JoinColumns: []string{
                            "sed",
                        },
                        ListColumns: []string{
                            "libero",
                            "voluptas",
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("quam"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("maxime"),
        AnalysisRuleType: operations.UpdateConfiguredTableAnalysisRuleAnalysisRuleTypeEnumList,
        ConfiguredTableIdentifier: "soluta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateConfiguredTableAnalysisRuleOutput != nil {
        // handle response
    }
}
```

## UpdateConfiguredTableAssociation

Updates a configured table association.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateConfiguredTableAssociation(ctx, operations.UpdateConfiguredTableAssociationRequest{
        RequestBody: operations.UpdateConfiguredTableAssociationRequestBody{
            Description: sdk.String("dicta"),
            RoleArn: sdk.String("laborum"),
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        ConfiguredTableAssociationIdentifier: "quam",
        MembershipIdentifier: "molestias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateConfiguredTableAssociationOutput != nil {
        // handle response
    }
}
```

## UpdateMembership

Updates a membership.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateMembership(ctx, operations.UpdateMembershipRequest{
        RequestBody: operations.UpdateMembershipRequestBody{
            QueryLogStatus: operations.UpdateMembershipRequestBodyQueryLogStatusEnumDisabled.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("neque"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("magni"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("sunt"),
        XAmzSignedHeaders: sdk.String("ullam"),
        MembershipIdentifier: "nam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateMembershipOutput != nil {
        // handle response
    }
}
```

## UpdateProtectedQuery

Updates the processing of a currently running query.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateProtectedQuery(ctx, operations.UpdateProtectedQueryRequest{
        RequestBody: operations.UpdateProtectedQueryRequestBody{
            TargetStatus: operations.UpdateProtectedQueryRequestBodyTargetStatusEnumCancelled,
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("voluptatem"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("soluta"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("et"),
        XAmzSignedHeaders: sdk.String("saepe"),
        MembershipIdentifier: "ipsum",
        ProtectedQueryIdentifier: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateProtectedQueryOutput != nil {
        // handle response
    }
}
```
