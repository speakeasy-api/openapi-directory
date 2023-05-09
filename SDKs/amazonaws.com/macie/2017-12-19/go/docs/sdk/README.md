# SDK

## Overview

<fullname>Amazon Macie Classic</fullname> <p>Amazon Macie Classic has been discontinued and is no longer available.</p> <p>A new Amazon Macie is now available with significant design improvements and additional features, at a lower price and in most Amazon Web Services Regions. We encourage you to take advantage of the new and improved features, and benefit from the reduced cost. To learn about features and pricing for the new Macie, see <a href="http://aws.amazon.com/macie/">Amazon Macie</a>. To learn how to use the new Macie, see the <a href="https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html">Amazon Macie User Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/macie/>
### Available Operations

* [AssociateMemberAccount](#associatememberaccount) - (Discontinued) Associates a specified Amazon Web Services account with Amazon Macie Classic as a member account.
* [AssociateS3Resources](#associates3resources) - (Discontinued) Associates specified S3 resources with Amazon Macie Classic for monitoring and data classification. If <code>memberAccountId</code> isn't specified, the action associates specified S3 resources with Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action associates specified S3 resources with Macie Classic for the specified member account.
* [DisassociateMemberAccount](#disassociatememberaccount) - (Discontinued) Removes the specified member account from Amazon Macie Classic.
* [DisassociateS3Resources](#disassociates3resources) - (Discontinued) Removes specified S3 resources from being monitored by Amazon Macie Classic. If <code>memberAccountId</code> isn't specified, the action removes specified S3 resources from Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action removes specified S3 resources from Macie Classic for the specified member account.
* [ListMemberAccounts](#listmemberaccounts) - (Discontinued) Lists all Amazon Macie Classic member accounts for the current Macie Classic administrator account.
* [ListS3Resources](#lists3resources) - (Discontinued) Lists all the S3 resources associated with Amazon Macie Classic. If <code>memberAccountId</code> isn't specified, the action lists the S3 resources associated with Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action lists the S3 resources associated with Macie Classic for the specified member account. 
* [UpdateS3Resources](#updates3resources) - (Discontinued) Updates the classification types for the specified S3 resources. If <code>memberAccountId</code> isn't specified, the action updates the classification types of the S3 resources associated with Amazon Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action updates the classification types of the S3 resources associated with Macie Classic for the specified member account.

## AssociateMemberAccount

(Discontinued) Associates a specified Amazon Web Services account with Amazon Macie Classic as a member account.

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
    res, err := s.SDK.AssociateMemberAccount(ctx, operations.AssociateMemberAccountRequest{
        AssociateMemberAccountRequest: shared.AssociateMemberAccountRequest{
            MemberAccountID: "vel",
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        XAmzTarget: operations.AssociateMemberAccountXAmzTargetEnumMacieServiceAssociateMemberAccount,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AssociateS3Resources

(Discontinued) Associates specified S3 resources with Amazon Macie Classic for monitoring and data classification. If <code>memberAccountId</code> isn't specified, the action associates specified S3 resources with Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action associates specified S3 resources with Macie Classic for the specified member account.

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
    res, err := s.SDK.AssociateS3Resources(ctx, operations.AssociateS3ResourcesRequest{
        AssociateS3ResourcesRequest: shared.AssociateS3ResourcesRequest{
            MemberAccountID: sdk.String("delectus"),
            S3Resources: []shared.S3ResourceClassification{
                shared.S3ResourceClassification{
                    BucketName: "suscipit",
                    ClassificationType: shared.ClassificationType{
                        Continuous: shared.S3ContinuousClassificationTypeEnumFull,
                        OneTime: shared.S3OneTimeClassificationTypeEnumFull,
                    },
                    Prefix: sdk.String("minus"),
                },
                shared.S3ResourceClassification{
                    BucketName: "placeat",
                    ClassificationType: shared.ClassificationType{
                        Continuous: shared.S3ContinuousClassificationTypeEnumFull,
                        OneTime: shared.S3OneTimeClassificationTypeEnumNone,
                    },
                    Prefix: sdk.String("iusto"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("temporibus"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("veritatis"),
        XAmzTarget: operations.AssociateS3ResourcesXAmzTargetEnumMacieServiceAssociateS3Resources,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateS3ResourcesResult != nil {
        // handle response
    }
}
```

## DisassociateMemberAccount

(Discontinued) Removes the specified member account from Amazon Macie Classic.

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
    res, err := s.SDK.DisassociateMemberAccount(ctx, operations.DisassociateMemberAccountRequest{
        DisassociateMemberAccountRequest: shared.DisassociateMemberAccountRequest{
            MemberAccountID: "deserunt",
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("at"),
        XAmzTarget: operations.DisassociateMemberAccountXAmzTargetEnumMacieServiceDisassociateMemberAccount,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DisassociateS3Resources

(Discontinued) Removes specified S3 resources from being monitored by Amazon Macie Classic. If <code>memberAccountId</code> isn't specified, the action removes specified S3 resources from Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action removes specified S3 resources from Macie Classic for the specified member account.

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
    res, err := s.SDK.DisassociateS3Resources(ctx, operations.DisassociateS3ResourcesRequest{
        DisassociateS3ResourcesRequest: shared.DisassociateS3ResourcesRequest{
            AssociatedS3Resources: []shared.S3Resource{
                shared.S3Resource{
                    BucketName: "maiores",
                    Prefix: sdk.String("molestiae"),
                },
                shared.S3Resource{
                    BucketName: "quod",
                    Prefix: sdk.String("quod"),
                },
                shared.S3Resource{
                    BucketName: "esse",
                    Prefix: sdk.String("totam"),
                },
                shared.S3Resource{
                    BucketName: "porro",
                    Prefix: sdk.String("dolorum"),
                },
            },
            MemberAccountID: sdk.String("dicta"),
        },
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("optio"),
        XAmzTarget: operations.DisassociateS3ResourcesXAmzTargetEnumMacieServiceDisassociateS3Resources,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateS3ResourcesResult != nil {
        // handle response
    }
}
```

## ListMemberAccounts

(Discontinued) Lists all Amazon Macie Classic member accounts for the current Macie Classic administrator account.

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
    res, err := s.SDK.ListMemberAccounts(ctx, operations.ListMemberAccountsRequest{
        ListMemberAccountsRequest: shared.ListMemberAccountsRequest{
            MaxResults: sdk.Int64(521848),
            NextToken: sdk.String("beatae"),
        },
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("impedit"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("esse"),
        XAmzTarget: operations.ListMemberAccountsXAmzTargetEnumMacieServiceListMemberAccounts,
        MaxResults: sdk.String("ipsum"),
        NextToken: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMemberAccountsResult != nil {
        // handle response
    }
}
```

## ListS3Resources

(Discontinued) Lists all the S3 resources associated with Amazon Macie Classic. If <code>memberAccountId</code> isn't specified, the action lists the S3 resources associated with Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action lists the S3 resources associated with Macie Classic for the specified member account. 

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
    res, err := s.SDK.ListS3Resources(ctx, operations.ListS3ResourcesRequest{
        ListS3ResourcesRequest: shared.ListS3ResourcesRequest{
            MaxResults: sdk.Int64(135218),
            MemberAccountID: sdk.String("perferendis"),
            NextToken: sdk.String("ad"),
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("laboriosam"),
        XAmzSignedHeaders: sdk.String("hic"),
        XAmzTarget: operations.ListS3ResourcesXAmzTargetEnumMacieServiceListS3Resources,
        MaxResults: sdk.String("saepe"),
        NextToken: sdk.String("fuga"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListS3ResourcesResult != nil {
        // handle response
    }
}
```

## UpdateS3Resources

(Discontinued) Updates the classification types for the specified S3 resources. If <code>memberAccountId</code> isn't specified, the action updates the classification types of the S3 resources associated with Amazon Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action updates the classification types of the S3 resources associated with Macie Classic for the specified member account.

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
    res, err := s.SDK.UpdateS3Resources(ctx, operations.UpdateS3ResourcesRequest{
        UpdateS3ResourcesRequest: shared.UpdateS3ResourcesRequest{
            MemberAccountID: sdk.String("in"),
            S3ResourcesUpdate: []shared.S3ResourceClassificationUpdate{
                shared.S3ResourceClassificationUpdate{
                    BucketName: "iste",
                    ClassificationTypeUpdate: shared.ClassificationTypeUpdate{
                        Continuous: shared.S3ContinuousClassificationTypeEnumFull.ToPointer(),
                        OneTime: shared.S3OneTimeClassificationTypeEnumFull.ToPointer(),
                    },
                    Prefix: sdk.String("saepe"),
                },
                shared.S3ResourceClassificationUpdate{
                    BucketName: "quidem",
                    ClassificationTypeUpdate: shared.ClassificationTypeUpdate{
                        Continuous: shared.S3ContinuousClassificationTypeEnumFull.ToPointer(),
                        OneTime: shared.S3OneTimeClassificationTypeEnumFull.ToPointer(),
                    },
                    Prefix: sdk.String("ipsa"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("corporis"),
        XAmzTarget: operations.UpdateS3ResourcesXAmzTargetEnumMacieServiceUpdateS3Resources,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateS3ResourcesResult != nil {
        // handle response
    }
}
```
