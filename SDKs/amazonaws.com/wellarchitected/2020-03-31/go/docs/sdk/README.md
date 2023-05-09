# SDK

## Overview

<fullname>Well-Architected Tool</fullname> <p>This is the <i>Well-Architected Tool API Reference</i>. The WA Tool API provides programmatic access to the <a href="http://aws.amazon.com/well-architected-tool">Well-Architected Tool</a> in the <a href="https://console.aws.amazon.com/wellarchitected">Amazon Web Services Management Console</a>. For information about the Well-Architected Tool, see the <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/intro.html">Well-Architected Tool User Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/wellarchitected/>
### Available Operations

* [AssociateLenses](#associatelenses) - <p>Associate a lens to a workload.</p> <p>Up to 10 lenses can be associated with a workload in a single API operation. A maximum of 20 lenses can be associated with a workload.</p> <note> <p> <b>Disclaimer</b> </p> <p>By accessing and/or applying custom lenses created by another Amazon Web Services user or account, you acknowledge that custom lenses created by other users and shared with you are Third Party Content as defined in the Amazon Web Services Customer Agreement. </p> </note>
* [CreateLensShare](#createlensshare) - <p>Create a lens share.</p> <p>The owner of a lens can share it with other Amazon Web Services accounts, users, an organization, and organizational units (OUs) in the same Amazon Web Services Region. Lenses provided by Amazon Web Services (Amazon Web Services Official Content) cannot be shared.</p> <p> Shared access to a lens is not removed until the lens invitation is deleted.</p> <p>If you share a lens with an organization or OU, all accounts in the organization or OU are granted access to the lens.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-sharing.html">Sharing a custom lens</a> in the <i>Well-Architected Tool User Guide</i>.</p> <note> <p> <b>Disclaimer</b> </p> <p>By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</p> </note>
* [CreateLensVersion](#createlensversion) - <p>Create a new lens version.</p> <p>A lens can have up to 100 versions.</p> <p>Use this operation to publish a new lens version after you have imported a lens. The <code>LensAlias</code> is used to identify the lens to be published. The owner of a lens can share the lens with other Amazon Web Services accounts and users in the same Amazon Web Services Region. Only the owner of a lens can delete it. </p>
* [CreateMilestone](#createmilestone) - Create a milestone for an existing workload.
* [CreateWorkload](#createworkload) - <p>Create a new workload.</p> <p>The owner of a workload can share the workload with other Amazon Web Services accounts, users, an organization, and organizational units (OUs) in the same Amazon Web Services Region. Only the owner of a workload can delete it.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/define-workload.html">Defining a Workload</a> in the <i>Well-Architected Tool User Guide</i>.</p> <important> <p>Either <code>AwsRegions</code>, <code>NonAwsRegions</code>, or both must be specified when creating a workload.</p> <p>You also must specify <code>ReviewOwner</code>, even though the parameter is listed as not being required in the following section. </p> </important>
* [CreateWorkloadShare](#createworkloadshare) - <p>Create a workload share.</p> <p>The owner of a workload can share it with other Amazon Web Services accounts and users in the same Amazon Web Services Region. Shared access to a workload is not removed until the workload invitation is deleted.</p> <p>If you share a workload with an organization or OU, all accounts in the organization or OU are granted access to the workload.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/workloads-sharing.html">Sharing a workload</a> in the <i>Well-Architected Tool User Guide</i>.</p>
* [DeleteLens](#deletelens) - <p>Delete an existing lens.</p> <p>Only the owner of a lens can delete it. After the lens is deleted, Amazon Web Services accounts and users that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads. </p> <note> <p> <b>Disclaimer</b> </p> <p>By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</p> </note>
* [DeleteLensShare](#deletelensshare) - <p>Delete a lens share.</p> <p>After the lens share is deleted, Amazon Web Services accounts, users, organizations, and organizational units (OUs) that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads.</p> <note> <p> <b>Disclaimer</b> </p> <p>By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</p> </note>
* [DeleteWorkload](#deleteworkload) - Delete an existing workload.
* [DeleteWorkloadShare](#deleteworkloadshare) - Delete a workload share.
* [DisassociateLenses](#disassociatelenses) - <p>Disassociate a lens from a workload.</p> <p>Up to 10 lenses can be disassociated from a workload in a single API operation.</p> <note> <p>The Amazon Web Services Well-Architected Framework lens (<code>wellarchitected</code>) cannot be removed from a workload.</p> </note>
* [ExportLens](#exportlens) - <p>Export an existing lens.</p> <p>Only the owner of a lens can export it. Lenses provided by Amazon Web Services (Amazon Web Services Official Content) cannot be exported.</p> <p>Lenses are defined in JSON. For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-format-specification.html">JSON format specification</a> in the <i>Well-Architected Tool User Guide</i>.</p> <note> <p> <b>Disclaimer</b> </p> <p>Do not include or gather personal identifiable information (PII) of end users or other identifiable individuals in or via your custom lenses. If your custom lens or those shared with you and used in your account do include or collect PII you are responsible for: ensuring that the included PII is processed in accordance with applicable law, providing adequate privacy notices, and obtaining necessary consents for processing such data.</p> </note>
* [GetAnswer](#getanswer) - Get the answer to a specific question in a workload review.
* [GetConsolidatedReport](#getconsolidatedreport) - <p>Get a consolidated report of your workloads.</p> <p>You can optionally choose to include workloads that have been shared with you.</p>
* [GetLens](#getlens) - Get an existing lens.
* [GetLensReview](#getlensreview) - Get lens review.
* [GetLensReviewReport](#getlensreviewreport) - Get lens review report.
* [GetLensVersionDifference](#getlensversiondifference) - Get lens version differences.
* [GetMilestone](#getmilestone) - Get a milestone for an existing workload.
* [GetWorkload](#getworkload) - Get an existing workload.
* [ImportLens](#importlens) - <p>Import a new custom lens or update an existing custom lens.</p> <p>To update an existing custom lens, specify its ARN as the <code>LensAlias</code>. If no ARN is specified, a new custom lens is created.</p> <p>The new or updated lens will have a status of <code>DRAFT</code>. The lens cannot be applied to workloads or shared with other Amazon Web Services accounts until it's published with <a>CreateLensVersion</a>.</p> <p>Lenses are defined in JSON. For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-format-specification.html">JSON format specification</a> in the <i>Well-Architected Tool User Guide</i>.</p> <p>A custom lens cannot exceed 500 KB in size.</p> <note> <p> <b>Disclaimer</b> </p> <p>Do not include or gather personal identifiable information (PII) of end users or other identifiable individuals in or via your custom lenses. If your custom lens or those shared with you and used in your account do include or collect PII you are responsible for: ensuring that the included PII is processed in accordance with applicable law, providing adequate privacy notices, and obtaining necessary consents for processing such data.</p> </note>
* [ListAnswers](#listanswers) - List of answers for a particular workload and lens.
* [ListCheckDetails](#listcheckdetails) - List of Trusted Advisor check details by account related to the workload.
* [ListCheckSummaries](#listchecksummaries) - List of Trusted Advisor checks summarized for all accounts related to the workload.
* [ListLensReviewImprovements](#listlensreviewimprovements) - List lens review improvements.
* [ListLensReviews](#listlensreviews) - List lens reviews for a particular workload.
* [ListLensShares](#listlensshares) - List the lens shares associated with the lens.
* [ListLenses](#listlenses) - List the available lenses.
* [ListMilestones](#listmilestones) - List all milestones for an existing workload.
* [ListNotifications](#listnotifications) - List lens notifications.
* [ListShareInvitations](#listshareinvitations) - List the workload invitations.
* [ListTagsForResource](#listtagsforresource) - <p>List the tags for a resource.</p> <note> <p>The WorkloadArn parameter can be either a workload ARN or a custom lens ARN.</p> </note>
* [ListWorkloadShares](#listworkloadshares) - List the workload shares associated with the workload.
* [ListWorkloads](#listworkloads) - Paginated list of workloads.
* [TagResource](#tagresource) - <p>Adds one or more tags to the specified resource.</p> <note> <p>The WorkloadArn parameter can be either a workload ARN or a custom lens ARN.</p> </note>
* [UntagResource](#untagresource) - <p>Deletes specified tags from a resource.</p> <note> <p>The WorkloadArn parameter can be either a workload ARN or a custom lens ARN.</p> </note> <p>To specify multiple tags, use separate <b>tagKeys</b> parameters, for example:</p> <p> <code>DELETE /tags/WorkloadArn?tagKeys=key1&amp;tagKeys=key2</code> </p>
* [UpdateAnswer](#updateanswer) - Update the answer to a specific question in a workload review.
* [UpdateGlobalSettings](#updateglobalsettings) - Updates whether the Amazon Web Services account is opted into organization sharing features.
* [UpdateLensReview](#updatelensreview) - Update lens review for a particular workload.
* [UpdateShareInvitation](#updateshareinvitation) - <p>Update a workload or custom lens share invitation.</p> <note> <p>This API operation can be called independently of any resource. Previous documentation implied that a workload ARN must be specified.</p> </note>
* [UpdateWorkload](#updateworkload) - Update an existing workload.
* [UpdateWorkloadShare](#updateworkloadshare) - Update a workload share.
* [UpgradeLensReview](#upgradelensreview) - Upgrade lens review for a particular workload.

## AssociateLenses

<p>Associate a lens to a workload.</p> <p>Up to 10 lenses can be associated with a workload in a single API operation. A maximum of 20 lenses can be associated with a workload.</p> <note> <p> <b>Disclaimer</b> </p> <p>By accessing and/or applying custom lenses created by another Amazon Web Services user or account, you acknowledge that custom lenses created by other users and shared with you are Third Party Content as defined in the Amazon Web Services Customer Agreement. </p> </note>

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
    res, err := s.SDK.AssociateLenses(ctx, operations.AssociateLensesRequest{
        RequestBody: operations.AssociateLensesRequestBody{
            LensAliases: []string{
                "magnam",
                "debitis",
            },
        },
        WorkloadID: "ipsa",
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("minus"),
        XAmzSignature: sdk.String("placeat"),
        XAmzSignedHeaders: sdk.String("voluptatum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateLensShare

<p>Create a lens share.</p> <p>The owner of a lens can share it with other Amazon Web Services accounts, users, an organization, and organizational units (OUs) in the same Amazon Web Services Region. Lenses provided by Amazon Web Services (Amazon Web Services Official Content) cannot be shared.</p> <p> Shared access to a lens is not removed until the lens invitation is deleted.</p> <p>If you share a lens with an organization or OU, all accounts in the organization or OU are granted access to the lens.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-sharing.html">Sharing a custom lens</a> in the <i>Well-Architected Tool User Guide</i>.</p> <note> <p> <b>Disclaimer</b> </p> <p>By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</p> </note>

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
    res, err := s.SDK.CreateLensShare(ctx, operations.CreateLensShareRequest{
        LensAlias: "iusto",
        RequestBody: operations.CreateLensShareRequestBody{
            ClientRequestToken: "excepturi",
            SharedWith: "nisi",
        },
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("temporibus"),
        XAmzCredential: sdk.String("ab"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLensShareOutput != nil {
        // handle response
    }
}
```

## CreateLensVersion

<p>Create a new lens version.</p> <p>A lens can have up to 100 versions.</p> <p>Use this operation to publish a new lens version after you have imported a lens. The <code>LensAlias</code> is used to identify the lens to be published. The owner of a lens can share the lens with other Amazon Web Services accounts and users in the same Amazon Web Services Region. Only the owner of a lens can delete it. </p>

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
    res, err := s.SDK.CreateLensVersion(ctx, operations.CreateLensVersionRequest{
        LensAlias: "ipsam",
        RequestBody: operations.CreateLensVersionRequestBody{
            ClientRequestToken: "repellendus",
            IsMajorVersion: sdk.Bool(false),
            LensVersion: "sapiente",
        },
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("odit"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("quod"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLensVersionOutput != nil {
        // handle response
    }
}
```

## CreateMilestone

Create a milestone for an existing workload.

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
    res, err := s.SDK.CreateMilestone(ctx, operations.CreateMilestoneRequest{
        RequestBody: operations.CreateMilestoneRequestBody{
            ClientRequestToken: "quod",
            MilestoneName: "esse",
        },
        WorkloadID: "totam",
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("fugit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateMilestoneOutput != nil {
        // handle response
    }
}
```

## CreateWorkload

<p>Create a new workload.</p> <p>The owner of a workload can share the workload with other Amazon Web Services accounts, users, an organization, and organizational units (OUs) in the same Amazon Web Services Region. Only the owner of a workload can delete it.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/define-workload.html">Defining a Workload</a> in the <i>Well-Architected Tool User Guide</i>.</p> <important> <p>Either <code>AwsRegions</code>, <code>NonAwsRegions</code>, or both must be specified when creating a workload.</p> <p>You also must specify <code>ReviewOwner</code>, even though the parameter is listed as not being required in the following section. </p> </important>

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
    res, err := s.SDK.CreateWorkload(ctx, operations.CreateWorkloadRequest{
        RequestBody: operations.CreateWorkloadRequestBody{
            AccountIds: []string{
                "hic",
                "optio",
                "totam",
            },
            Applications: []string{
                "commodi",
            },
            ArchitecturalDesign: sdk.String("molestiae"),
            AwsRegions: []string{
                "qui",
                "impedit",
            },
            ClientRequestToken: "cum",
            Description: "esse",
            DiscoveryConfig: &operations.CreateWorkloadRequestBodyDiscoveryConfig{
                TrustedAdvisorIntegrationStatus: shared.TrustedAdvisorIntegrationStatusEnumEnabled.ToPointer(),
            },
            Environment: operations.CreateWorkloadRequestBodyEnvironmentEnumPreproduction,
            Industry: sdk.String("aspernatur"),
            IndustryType: sdk.String("perferendis"),
            Lenses: []string{
                "natus",
                "sed",
            },
            NonAwsRegions: []string{
                "dolor",
                "natus",
                "laboriosam",
            },
            Notes: sdk.String("hic"),
            PillarPriorities: []string{
                "fuga",
                "in",
                "corporis",
                "iste",
            },
            ReviewOwner: sdk.String("iure"),
            Tags: map[string]string{
                "quidem": "architecto",
                "ipsa": "reiciendis",
                "est": "mollitia",
                "laborum": "dolores",
            },
            WorkloadName: "dolorem",
        },
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("minima"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateWorkloadOutput != nil {
        // handle response
    }
}
```

## CreateWorkloadShare

<p>Create a workload share.</p> <p>The owner of a workload can share it with other Amazon Web Services accounts and users in the same Amazon Web Services Region. Shared access to a workload is not removed until the workload invitation is deleted.</p> <p>If you share a workload with an organization or OU, all accounts in the organization or OU are granted access to the workload.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/workloads-sharing.html">Sharing a workload</a> in the <i>Well-Architected Tool User Guide</i>.</p>

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
    res, err := s.SDK.CreateWorkloadShare(ctx, operations.CreateWorkloadShareRequest{
        RequestBody: operations.CreateWorkloadShareRequestBody{
            ClientRequestToken: "excepturi",
            PermissionType: operations.CreateWorkloadShareRequestBodyPermissionTypeEnumReadonly,
            SharedWith: "iure",
        },
        WorkloadID: "culpa",
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateWorkloadShareOutput != nil {
        // handle response
    }
}
```

## DeleteLens

<p>Delete an existing lens.</p> <p>Only the owner of a lens can delete it. After the lens is deleted, Amazon Web Services accounts and users that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads. </p> <note> <p> <b>Disclaimer</b> </p> <p>By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</p> </note>

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
    res, err := s.SDK.DeleteLens(ctx, operations.DeleteLensRequest{
        ClientRequestToken: "repellat",
        LensAlias: "mollitia",
        LensStatus: operations.DeleteLensLensStatusEnumDraft,
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("velit"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("quia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteLensShare

<p>Delete a lens share.</p> <p>After the lens share is deleted, Amazon Web Services accounts, users, organizations, and organizational units (OUs) that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads.</p> <note> <p> <b>Disclaimer</b> </p> <p>By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</p> </note>

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
    res, err := s.SDK.DeleteLensShare(ctx, operations.DeleteLensShareRequest{
        ClientRequestToken: "quis",
        LensAlias: "vitae",
        ShareID: "laborum",
        XAmzAlgorithm: sdk.String("animi"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("ipsam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteWorkload

Delete an existing workload.

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
    res, err := s.SDK.DeleteWorkload(ctx, operations.DeleteWorkloadRequest{
        ClientRequestToken: "id",
        WorkloadID: "possimus",
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("temporibus"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteWorkloadShare

Delete a workload share.

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
    res, err := s.SDK.DeleteWorkloadShare(ctx, operations.DeleteWorkloadShareRequest{
        ClientRequestToken: "voluptatibus",
        ShareID: "vero",
        WorkloadID: "nihil",
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DisassociateLenses

<p>Disassociate a lens from a workload.</p> <p>Up to 10 lenses can be disassociated from a workload in a single API operation.</p> <note> <p>The Amazon Web Services Well-Architected Framework lens (<code>wellarchitected</code>) cannot be removed from a workload.</p> </note>

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
    res, err := s.SDK.DisassociateLenses(ctx, operations.DisassociateLensesRequest{
        RequestBody: operations.DisassociateLensesRequestBody{
            LensAliases: []string{
                "reprehenderit",
            },
        },
        WorkloadID: "ut",
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("harum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ExportLens

<p>Export an existing lens.</p> <p>Only the owner of a lens can export it. Lenses provided by Amazon Web Services (Amazon Web Services Official Content) cannot be exported.</p> <p>Lenses are defined in JSON. For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-format-specification.html">JSON format specification</a> in the <i>Well-Architected Tool User Guide</i>.</p> <note> <p> <b>Disclaimer</b> </p> <p>Do not include or gather personal identifiable information (PII) of end users or other identifiable individuals in or via your custom lenses. If your custom lens or those shared with you and used in your account do include or collect PII you are responsible for: ensuring that the included PII is processed in accordance with applicable law, providing adequate privacy notices, and obtaining necessary consents for processing such data.</p> </note>

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
    res, err := s.SDK.ExportLens(ctx, operations.ExportLensRequest{
        LensAlias: "enim",
        LensVersion: sdk.String("accusamus"),
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("molestias"),
        XAmzSignedHeaders: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportLensOutput != nil {
        // handle response
    }
}
```

## GetAnswer

Get the answer to a specific question in a workload review.

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
    res, err := s.SDK.GetAnswer(ctx, operations.GetAnswerRequest{
        LensAlias: "pariatur",
        MilestoneNumber: sdk.Int64(265389),
        QuestionID: "praesentium",
        WorkloadID: "rem",
        XAmzAlgorithm: sdk.String("voluptates"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("itaque"),
        XAmzSignedHeaders: sdk.String("incidunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAnswerOutput != nil {
        // handle response
    }
}
```

## GetConsolidatedReport

<p>Get a consolidated report of your workloads.</p> <p>You can optionally choose to include workloads that have been shared with you.</p>

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
    res, err := s.SDK.GetConsolidatedReport(ctx, operations.GetConsolidatedReportRequest{
        Format: operations.GetConsolidatedReportFormatEnumPdf,
        IncludeSharedResources: sdk.Bool(false),
        MaxResults: sdk.Int64(9356),
        NextToken: sdk.String("est"),
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("quibusdam"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("modi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConsolidatedReportOutput != nil {
        // handle response
    }
}
```

## GetLens

Get an existing lens.

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
    res, err := s.SDK.GetLens(ctx, operations.GetLensRequest{
        LensAlias: "qui",
        LensVersion: sdk.String("aliquid"),
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("magni"),
        XAmzSecurityToken: sdk.String("assumenda"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("alias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLensOutput != nil {
        // handle response
    }
}
```

## GetLensReview

Get lens review.

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
    res, err := s.SDK.GetLensReview(ctx, operations.GetLensReviewRequest{
        LensAlias: "fugit",
        MilestoneNumber: sdk.Int64(677817),
        WorkloadID: "excepturi",
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("non"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLensReviewOutput != nil {
        // handle response
    }
}
```

## GetLensReviewReport

Get lens review report.

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
    res, err := s.SDK.GetLensReviewReport(ctx, operations.GetLensReviewReportRequest{
        LensAlias: "eligendi",
        MilestoneNumber: sdk.Int64(576157),
        WorkloadID: "aliquid",
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("necessitatibus"),
        XAmzCredential: sdk.String("sint"),
        XAmzDate: sdk.String("officia"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("a"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLensReviewReportOutput != nil {
        // handle response
    }
}
```

## GetLensVersionDifference

Get lens version differences.

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
    res, err := s.SDK.GetLensVersionDifference(ctx, operations.GetLensVersionDifferenceRequest{
        BaseLensVersion: sdk.String("dolorum"),
        LensAlias: "in",
        TargetLensVersion: sdk.String("in"),
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("cumque"),
        XAmzSignedHeaders: sdk.String("facere"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLensVersionDifferenceOutput != nil {
        // handle response
    }
}
```

## GetMilestone

Get a milestone for an existing workload.

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
    res, err := s.SDK.GetMilestone(ctx, operations.GetMilestoneRequest{
        MilestoneNumber: 411820,
        WorkloadID: "aliquid",
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("delectus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMilestoneOutput != nil {
        // handle response
    }
}
```

## GetWorkload

Get an existing workload.

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
    res, err := s.SDK.GetWorkload(ctx, operations.GetWorkloadRequest{
        WorkloadID: "quidem",
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("id"),
        XAmzDate: sdk.String("blanditiis"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("amet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetWorkloadOutput != nil {
        // handle response
    }
}
```

## ImportLens

<p>Import a new custom lens or update an existing custom lens.</p> <p>To update an existing custom lens, specify its ARN as the <code>LensAlias</code>. If no ARN is specified, a new custom lens is created.</p> <p>The new or updated lens will have a status of <code>DRAFT</code>. The lens cannot be applied to workloads or shared with other Amazon Web Services accounts until it's published with <a>CreateLensVersion</a>.</p> <p>Lenses are defined in JSON. For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-format-specification.html">JSON format specification</a> in the <i>Well-Architected Tool User Guide</i>.</p> <p>A custom lens cannot exceed 500 KB in size.</p> <note> <p> <b>Disclaimer</b> </p> <p>Do not include or gather personal identifiable information (PII) of end users or other identifiable individuals in or via your custom lenses. If your custom lens or those shared with you and used in your account do include or collect PII you are responsible for: ensuring that the included PII is processed in accordance with applicable law, providing adequate privacy notices, and obtaining necessary consents for processing such data.</p> </note>

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
    res, err := s.SDK.ImportLens(ctx, operations.ImportLensRequest{
        RequestBody: operations.ImportLensRequestBody{
            ClientRequestToken: "deserunt",
            JSONString: "nisi",
            LensAlias: sdk.String("vel"),
            Tags: map[string]string{
                "omnis": "molestiae",
                "perferendis": "nihil",
                "magnam": "distinctio",
            },
        },
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("eum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportLensOutput != nil {
        // handle response
    }
}
```

## ListAnswers

List of answers for a particular workload and lens.

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
    res, err := s.SDK.ListAnswers(ctx, operations.ListAnswersRequest{
        LensAlias: "vero",
        MaxResults: sdk.Int64(135474),
        MilestoneNumber: sdk.Int64(102863),
        NextToken: sdk.String("magnam"),
        PillarID: sdk.String("et"),
        WorkloadID: "excepturi",
        XAmzAlgorithm: sdk.String("ullam"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAnswersOutput != nil {
        // handle response
    }
}
```

## ListCheckDetails

List of Trusted Advisor check details by account related to the workload.

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
    res, err := s.SDK.ListCheckDetails(ctx, operations.ListCheckDetailsRequest{
        MaxResults: sdk.String("mollitia"),
        NextToken: sdk.String("ad"),
        RequestBody: operations.ListCheckDetailsRequestBody{
            ChoiceID: "eum",
            LensArn: "dolor",
            MaxResults: sdk.Int64(896547),
            NextToken: sdk.String("odit"),
            PillarID: "nemo",
            QuestionID: "quasi",
        },
        WorkloadID: "iure",
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("eius"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("in"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCheckDetailsOutput != nil {
        // handle response
    }
}
```

## ListCheckSummaries

List of Trusted Advisor checks summarized for all accounts related to the workload.

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
    res, err := s.SDK.ListCheckSummaries(ctx, operations.ListCheckSummariesRequest{
        MaxResults: sdk.String("architecto"),
        NextToken: sdk.String("architecto"),
        RequestBody: operations.ListCheckSummariesRequestBody{
            ChoiceID: "repudiandae",
            LensArn: "ullam",
            MaxResults: sdk.Int64(714242),
            NextToken: sdk.String("nihil"),
            PillarID: "repellat",
            QuestionID: "quibusdam",
        },
        WorkloadID: "sed",
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("magni"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCheckSummariesOutput != nil {
        // handle response
    }
}
```

## ListLensReviewImprovements

List lens review improvements.

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
    res, err := s.SDK.ListLensReviewImprovements(ctx, operations.ListLensReviewImprovementsRequest{
        LensAlias: "sunt",
        MaxResults: sdk.Int64(779051),
        MilestoneNumber: sdk.Int64(848009),
        NextToken: sdk.String("pariatur"),
        PillarID: sdk.String("maxime"),
        WorkloadID: "ea",
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("odit"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("quidem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLensReviewImprovementsOutput != nil {
        // handle response
    }
}
```

## ListLensReviews

List lens reviews for a particular workload.

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
    res, err := s.SDK.ListLensReviews(ctx, operations.ListLensReviewsRequest{
        MaxResults: sdk.Int64(373291),
        MilestoneNumber: sdk.Int64(453543),
        NextToken: sdk.String("autem"),
        WorkloadID: "nam",
        XAmzAlgorithm: sdk.String("eaque"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("fugiat"),
        XAmzSignedHeaders: sdk.String("amet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLensReviewsOutput != nil {
        // handle response
    }
}
```

## ListLensShares

List the lens shares associated with the lens.

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
    res, err := s.SDK.ListLensShares(ctx, operations.ListLensSharesRequest{
        LensAlias: "aut",
        MaxResults: sdk.Int64(764912),
        NextToken: sdk.String("corporis"),
        SharedWithPrefix: sdk.String("hic"),
        Status: operations.ListLensSharesStatusEnumAssociating.ToPointer(),
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("eaque"),
        XAmzSignedHeaders: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLensSharesOutput != nil {
        // handle response
    }
}
```

## ListLenses

List the available lenses.

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
    res, err := s.SDK.ListLenses(ctx, operations.ListLensesRequest{
        LensName: sdk.String("nesciunt"),
        LensStatus: operations.ListLensesLensStatusEnumAll.ToPointer(),
        LensType: operations.ListLensesLensTypeEnumAwsOfficial.ToPointer(),
        MaxResults: sdk.Int64(170986),
        NextToken: sdk.String("minus"),
        XAmzAlgorithm: sdk.String("quam"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("nostrum"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("omnis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLensesOutput != nil {
        // handle response
    }
}
```

## ListMilestones

List all milestones for an existing workload.

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
    res, err := s.SDK.ListMilestones(ctx, operations.ListMilestonesRequest{
        MaxResults: sdk.String("facilis"),
        NextToken: sdk.String("perspiciatis"),
        RequestBody: operations.ListMilestonesRequestBody{
            MaxResults: sdk.Int64(31838),
            NextToken: sdk.String("porro"),
        },
        WorkloadID: "consequuntur",
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("asperiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMilestonesOutput != nil {
        // handle response
    }
}
```

## ListNotifications

List lens notifications.

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
    res, err := s.SDK.ListNotifications(ctx, operations.ListNotificationsRequest{
        MaxResults: sdk.String("earum"),
        NextToken: sdk.String("modi"),
        RequestBody: operations.ListNotificationsRequestBody{
            MaxResults: sdk.Int64(613966),
            NextToken: sdk.String("dolorum"),
            WorkloadID: sdk.String("deleniti"),
        },
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("quos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListNotificationsOutput != nil {
        // handle response
    }
}
```

## ListShareInvitations

List the workload invitations.

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
    res, err := s.SDK.ListShareInvitations(ctx, operations.ListShareInvitationsRequest{
        LensNamePrefix: sdk.String("aliquid"),
        MaxResults: sdk.Int64(212390),
        NextToken: sdk.String("dolorem"),
        ShareResourceType: operations.ListShareInvitationsShareResourceTypeEnumWorkload.ToPointer(),
        WorkloadNamePrefix: sdk.String("qui"),
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListShareInvitationsOutput != nil {
        // handle response
    }
}
```

## ListTagsForResource

<p>List the tags for a resource.</p> <note> <p>The WorkloadArn parameter can be either a workload ARN or a custom lens ARN.</p> </note>

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
        WorkloadArn: "amet",
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("odio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceOutput != nil {
        // handle response
    }
}
```

## ListWorkloadShares

List the workload shares associated with the workload.

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
    res, err := s.SDK.ListWorkloadShares(ctx, operations.ListWorkloadSharesRequest{
        MaxResults: sdk.Int64(311796),
        NextToken: sdk.String("accusamus"),
        SharedWithPrefix: sdk.String("quidem"),
        Status: operations.ListWorkloadSharesStatusEnumFailed.ToPointer(),
        WorkloadID: "voluptas",
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("eos"),
        XAmzCredential: sdk.String("atque"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("fugiat"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("soluta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorkloadSharesOutput != nil {
        // handle response
    }
}
```

## ListWorkloads

Paginated list of workloads.

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
    res, err := s.SDK.ListWorkloads(ctx, operations.ListWorkloadsRequest{
        MaxResults: sdk.String("dolorum"),
        NextToken: sdk.String("iusto"),
        RequestBody: operations.ListWorkloadsRequestBody{
            MaxResults: sdk.Int64(453697),
            NextToken: sdk.String("dolorum"),
            WorkloadNamePrefix: sdk.String("deleniti"),
        },
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("necessitatibus"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("asperiores"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("voluptate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorkloadsOutput != nil {
        // handle response
    }
}
```

## TagResource

<p>Adds one or more tags to the specified resource.</p> <note> <p>The WorkloadArn parameter can be either a workload ARN or a custom lens ARN.</p> </note>

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
                "saepe": "eius",
                "aspernatur": "perferendis",
                "amet": "optio",
            },
        },
        WorkloadArn: "accusamus",
        XAmzAlgorithm: sdk.String("ad"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("repellendus"),
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

<p>Deletes specified tags from a resource.</p> <note> <p>The WorkloadArn parameter can be either a workload ARN or a custom lens ARN.</p> </note> <p>To specify multiple tags, use separate <b>tagKeys</b> parameters, for example:</p> <p> <code>DELETE /tags/WorkloadArn?tagKeys=key1&amp;tagKeys=key2</code> </p>

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
        WorkloadArn: "totam",
        XAmzAlgorithm: sdk.String("similique"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("quod"),
        TagKeys: []string{
            "qui",
            "dolorum",
            "a",
            "esse",
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

## UpdateAnswer

Update the answer to a specific question in a workload review.

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
    res, err := s.SDK.UpdateAnswer(ctx, operations.UpdateAnswerRequest{
        LensAlias: "harum",
        QuestionID: "iusto",
        RequestBody: operations.UpdateAnswerRequestBody{
            ChoiceUpdates: map[string]shared.ChoiceUpdate{
                "quisquam": shared.ChoiceUpdate{
                    Notes: sdk.String("tenetur"),
                    Reason: shared.ChoiceReasonEnumBusinessPriorities.ToPointer(),
                    Status: shared.ChoiceStatusEnumUnselected,
                },
            },
            IsApplicable: sdk.Bool(false),
            Notes: sdk.String("accusamus"),
            Reason: operations.UpdateAnswerRequestBodyReasonEnumBusinessPriorities.ToPointer(),
            SelectedChoices: []string{
                "dolorem",
                "sapiente",
            },
        },
        WorkloadID: "totam",
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("sit"),
        XAmzCredential: sdk.String("expedita"),
        XAmzDate: sdk.String("neque"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("libero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAnswerOutput != nil {
        // handle response
    }
}
```

## UpdateGlobalSettings

Updates whether the Amazon Web Services account is opted into organization sharing features.

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
    res, err := s.SDK.UpdateGlobalSettings(ctx, operations.UpdateGlobalSettingsRequest{
        RequestBody: operations.UpdateGlobalSettingsRequestBody{
            OrganizationSharingStatus: operations.UpdateGlobalSettingsRequestBodyOrganizationSharingStatusEnumEnabled.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("quam"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("maxime"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateLensReview

Update lens review for a particular workload.

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
    res, err := s.SDK.UpdateLensReview(ctx, operations.UpdateLensReviewRequest{
        LensAlias: "pariatur",
        RequestBody: operations.UpdateLensReviewRequestBody{
            LensNotes: sdk.String("soluta"),
            PillarNotes: map[string]string{
                "laborum": "totam",
            },
        },
        WorkloadID: "incidunt",
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("quam"),
        XAmzSignedHeaders: sdk.String("molestias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateLensReviewOutput != nil {
        // handle response
    }
}
```

## UpdateShareInvitation

<p>Update a workload or custom lens share invitation.</p> <note> <p>This API operation can be called independently of any resource. Previous documentation implied that a workload ARN must be specified.</p> </note>

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
    res, err := s.SDK.UpdateShareInvitation(ctx, operations.UpdateShareInvitationRequest{
        RequestBody: operations.UpdateShareInvitationRequestBody{
            ShareInvitationAction: operations.UpdateShareInvitationRequestBodyShareInvitationActionEnumReject,
        },
        ShareInvitationID: "qui",
        XAmzAlgorithm: sdk.String("neque"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("magni"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("sunt"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("nam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateShareInvitationOutput != nil {
        // handle response
    }
}
```

## UpdateWorkload

Update an existing workload.

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
    res, err := s.SDK.UpdateWorkload(ctx, operations.UpdateWorkloadRequest{
        RequestBody: operations.UpdateWorkloadRequestBody{
            AccountIds: []string{
                "voluptatem",
                "cumque",
                "soluta",
                "nobis",
            },
            Applications: []string{
                "saepe",
            },
            ArchitecturalDesign: sdk.String("ipsum"),
            AwsRegions: []string{
                "nobis",
            },
            Description: sdk.String("quos"),
            DiscoveryConfig: &operations.UpdateWorkloadRequestBodyDiscoveryConfig{
                TrustedAdvisorIntegrationStatus: shared.TrustedAdvisorIntegrationStatusEnumDisabled.ToPointer(),
            },
            Environment: operations.UpdateWorkloadRequestBodyEnvironmentEnumPreproduction.ToPointer(),
            ImprovementStatus: operations.UpdateWorkloadRequestBodyImprovementStatusEnumNotApplicable.ToPointer(),
            Industry: sdk.String("delectus"),
            IndustryType: sdk.String("dolorem"),
            IsReviewOwnerUpdateAcknowledged: sdk.Bool(false),
            NonAwsRegions: []string{
                "labore",
                "adipisci",
            },
            Notes: sdk.String("dolorum"),
            PillarPriorities: []string{
                "quae",
            },
            ReviewOwner: sdk.String("aut"),
            WorkloadName: sdk.String("quas"),
        },
        WorkloadID: "itaque",
        XAmzAlgorithm: sdk.String("consequatur"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("doloribus"),
        XAmzSignature: sdk.String("ut"),
        XAmzSignedHeaders: sdk.String("facilis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateWorkloadOutput != nil {
        // handle response
    }
}
```

## UpdateWorkloadShare

Update a workload share.

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
    res, err := s.SDK.UpdateWorkloadShare(ctx, operations.UpdateWorkloadShareRequest{
        RequestBody: operations.UpdateWorkloadShareRequestBody{
            PermissionType: operations.UpdateWorkloadShareRequestBodyPermissionTypeEnumContributor,
        },
        ShareID: "qui",
        WorkloadID: "quae",
        XAmzAlgorithm: sdk.String("laudantium"),
        XAmzContentSha256: sdk.String("odio"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("omnis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateWorkloadShareOutput != nil {
        // handle response
    }
}
```

## UpgradeLensReview

Upgrade lens review for a particular workload.

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
    res, err := s.SDK.UpgradeLensReview(ctx, operations.UpgradeLensReviewRequest{
        LensAlias: "quis",
        RequestBody: operations.UpgradeLensReviewRequestBody{
            ClientRequestToken: sdk.String("ipsum"),
            MilestoneName: "delectus",
        },
        WorkloadID: "voluptate",
        XAmzAlgorithm: sdk.String("consectetur"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("tenetur"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("quod"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
