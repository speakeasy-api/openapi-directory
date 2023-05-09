# SDK

## Overview

Amazon Inspector is a vulnerability discovery service that automates continuous scanning for security vulnerabilities within your Amazon EC2 and Amazon ECR environments.

Amazon Web Services documentation
<https://docs.aws.amazon.com/inspector2/>
### Available Operations

* [AssociateMember](#associatemember) - Associates an Amazon Web Services account with an Amazon Inspector delegated administrator.
* [BatchGetAccountStatus](#batchgetaccountstatus) - Retrieves the Amazon Inspector status of multiple Amazon Web Services accounts within your environment.
* [BatchGetFreeTrialInfo](#batchgetfreetrialinfo) - Gets free trial status for multiple Amazon Web Services accounts.
* [CancelFindingsReport](#cancelfindingsreport) - Cancels the given findings report.
* [CreateFilter](#createfilter) - Creates a filter resource using specified filter criteria.
* [CreateFindingsReport](#createfindingsreport) - Creates a finding report.
* [DeleteFilter](#deletefilter) - Deletes a filter resource.
* [DescribeOrganizationConfiguration](#describeorganizationconfiguration) - Describe Amazon Inspector configuration settings for an Amazon Web Services organization.
* [Disable](#disable) - Disables Amazon Inspector scans for one or more Amazon Web Services accounts. Disabling all scan types in an account disables the Amazon Inspector service.
* [DisableDelegatedAdminAccount](#disabledelegatedadminaccount) - Disables the Amazon Inspector delegated administrator for your organization.
* [DisassociateMember](#disassociatemember) - Disassociates a member account from an Amazon Inspector delegated administrator.
* [Enable](#enable) - Enables Amazon Inspector scans for one or more Amazon Web Services accounts.
* [EnableDelegatedAdminAccount](#enabledelegatedadminaccount) - Enables the Amazon Inspector delegated administrator for your Organizations organization.
* [GetConfiguration](#getconfiguration) - Retrieves setting configurations for Inspector scans.
* [GetDelegatedAdminAccount](#getdelegatedadminaccount) - Retrieves information about the Amazon Inspector delegated administrator for your organization.
* [GetFindingsReportStatus](#getfindingsreportstatus) - Gets the status of a findings report.
* [GetMember](#getmember) - Gets member information for your organization.
* [ListAccountPermissions](#listaccountpermissions) - Lists the permissions an account has to configure Amazon Inspector.
* [ListCoverage](#listcoverage) - Lists coverage details for you environment.
* [ListCoverageStatistics](#listcoveragestatistics) - Lists Amazon Inspector coverage statistics for your environment.
* [ListDelegatedAdminAccounts](#listdelegatedadminaccounts) - Lists information about the Amazon Inspector delegated administrator of your organization.
* [ListFilters](#listfilters) - Lists the filters associated with your account.
* [ListFindingAggregations](#listfindingaggregations) - Lists aggregated finding data for your environment based on specific criteria.
* [ListFindings](#listfindings) - Lists findings for your environment.
* [ListMembers](#listmembers) - List members associated with the Amazon Inspector delegated administrator for your organization.
* [ListTagsForResource](#listtagsforresource) - Lists all tags attached to a given resource.
* [ListUsageTotals](#listusagetotals) - Lists the Amazon Inspector usage totals over the last 30 days.
* [TagResource](#tagresource) - Adds tags to a resource.
* [UntagResource](#untagresource) - Removes tags from a resource.
* [UpdateConfiguration](#updateconfiguration) - Updates setting configurations for your Amazon Inspector account. When you use this API as an Amazon Inspector delegated administrator this updates the setting for all accounts you manage. Member accounts in an organization cannot update this setting.
* [UpdateFilter](#updatefilter) - Specifies the action that is to be applied to the findings that match the filter.
* [UpdateOrganizationConfiguration](#updateorganizationconfiguration) - Updates the configurations for your Amazon Inspector organization.

## AssociateMember

Associates an Amazon Web Services account with an Amazon Inspector delegated administrator.

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
    res, err := s.SDK.AssociateMember(ctx, operations.AssociateMemberRequest{
        RequestBody: operations.AssociateMemberRequestBody{
            AccountID: "vel",
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateMemberResponse != nil {
        // handle response
    }
}
```

## BatchGetAccountStatus

Retrieves the Amazon Inspector status of multiple Amazon Web Services accounts within your environment.

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
    res, err := s.SDK.BatchGetAccountStatus(ctx, operations.BatchGetAccountStatusRequest{
        RequestBody: operations.BatchGetAccountStatusRequestBody{
            AccountIds: []string{
                "tempora",
                "suscipit",
                "molestiae",
                "minus",
            },
        },
        XAmzAlgorithm: sdk.String("placeat"),
        XAmzContentSha256: sdk.String("voluptatum"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("temporibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetAccountStatusResponse != nil {
        // handle response
    }
}
```

## BatchGetFreeTrialInfo

Gets free trial status for multiple Amazon Web Services accounts.

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
    res, err := s.SDK.BatchGetFreeTrialInfo(ctx, operations.BatchGetFreeTrialInfoRequest{
        RequestBody: operations.BatchGetFreeTrialInfoRequestBody{
            AccountIds: []string{
                "quis",
            },
        },
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("repellendus"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("quo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetFreeTrialInfoResponse != nil {
        // handle response
    }
}
```

## CancelFindingsReport

Cancels the given findings report.

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
    res, err := s.SDK.CancelFindingsReport(ctx, operations.CancelFindingsReportRequest{
        RequestBody: operations.CancelFindingsReportRequestBody{
            ReportID: "odit",
        },
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("at"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("quod"),
        XAmzSignedHeaders: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelFindingsReportResponse != nil {
        // handle response
    }
}
```

## CreateFilter

Creates a filter resource using specified filter criteria.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateFilter(ctx, operations.CreateFilterRequest{
        RequestBody: operations.CreateFilterRequestBody{
            Action: operations.CreateFilterRequestBodyActionEnumSuppress,
            Description: sdk.String("porro"),
            FilterCriteria: operations.CreateFilterRequestBodyFilterCriteria{
                AwsAccountID: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "nam",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "occaecati",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "deleniti",
                    },
                },
                ComponentID: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "totam",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "commodi",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "modi",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "impedit",
                    },
                },
                ComponentType: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "ipsum",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "aspernatur",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "ad",
                    },
                },
                Ec2InstanceImageID: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "iste",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "natus",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "hic",
                    },
                },
                Ec2InstanceSubnetID: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "in",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "iste",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "saepe",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "architecto",
                    },
                },
                Ec2InstanceVpcID: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "est",
                    },
                },
                EcrImageArchitecture: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "dolores",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "corporis",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "nobis",
                    },
                },
                EcrImageHash: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "nemo",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "excepturi",
                    },
                },
                EcrImagePushedAt: []shared.DateFilter{
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2022-05-14T11:45:33.094Z"),
                        StartInclusive: types.MustTimeFromString("2020-02-15T22:48:47.492Z"),
                    },
                },
                EcrImageRegistry: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "dolorem",
                    },
                },
                EcrImageRepositoryName: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "repellat",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "occaecati",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "commodi",
                    },
                },
                EcrImageTags: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "velit",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "quia",
                    },
                },
                ExploitAvailable: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "laborum",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "enim",
                    },
                },
                FindingArn: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "sequi",
                    },
                },
                FindingStatus: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "id",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "aut",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "error",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "laborum",
                    },
                },
                FindingType: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "voluptatibus",
                    },
                },
                FirstObservedAt: []shared.DateFilter{
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2022-06-28T23:41:25.321Z"),
                        StartInclusive: types.MustTimeFromString("2022-10-31T23:49:03.388Z"),
                    },
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2022-02-05T15:41:25.512Z"),
                        StartInclusive: types.MustTimeFromString("2022-12-17T09:48:56.551Z"),
                    },
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2022-07-23T18:36:43.822Z"),
                        StartInclusive: types.MustTimeFromString("2022-01-08T10:49:12.847Z"),
                    },
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2022-08-22T19:15:58.586Z"),
                        StartInclusive: types.MustTimeFromString("2022-07-09T11:22:20.922Z"),
                    },
                },
                FixAvailable: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "enim",
                    },
                },
                InspectorScore: []shared.NumberFilter{
                    shared.NumberFilter{
                        LowerInclusive: sdk.Float64(4142.63),
                        UpperInclusive: sdk.Float64(9182.36),
                    },
                    shared.NumberFilter{
                        LowerInclusive: sdk.Float64(641.47),
                        UpperInclusive: sdk.Float64(2168.22),
                    },
                    shared.NumberFilter{
                        LowerInclusive: sdk.Float64(6924.72),
                        UpperInclusive: sdk.Float64(5651.89),
                    },
                    shared.NumberFilter{
                        LowerInclusive: sdk.Float64(5666.02),
                        UpperInclusive: sdk.Float64(8651.03),
                    },
                },
                LambdaFunctionExecutionRoleArn: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "rem",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "quasi",
                    },
                },
                LambdaFunctionLastModifiedAt: []shared.DateFilter{
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2022-11-01T07:52:08.326Z"),
                        StartInclusive: types.MustTimeFromString("2022-03-02T21:33:21.372Z"),
                    },
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2022-12-28T14:02:06.064Z"),
                        StartInclusive: types.MustTimeFromString("2021-04-26T02:10:00.226Z"),
                    },
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2022-05-09T18:45:16.013Z"),
                        StartInclusive: types.MustTimeFromString("2021-04-26T18:54:54.344Z"),
                    },
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2022-09-26T08:57:48.803Z"),
                        StartInclusive: types.MustTimeFromString("2022-08-08T19:05:24.174Z"),
                    },
                },
                LambdaFunctionLayers: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "perferendis",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "assumenda",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "alias",
                    },
                },
                LambdaFunctionName: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "excepturi",
                    },
                },
                LambdaFunctionRuntime: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "tempore",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "delectus",
                    },
                },
                LastObservedAt: []shared.DateFilter{
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2022-03-31T00:30:19.135Z"),
                        StartInclusive: types.MustTimeFromString("2022-03-17T20:21:28.792Z"),
                    },
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2021-03-17T21:24:26.606Z"),
                        StartInclusive: types.MustTimeFromString("2021-09-21T14:06:09.271Z"),
                    },
                },
                NetworkProtocol: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "a",
                    },
                },
                PortRange: []shared.PortRangeFilter{
                    shared.PortRangeFilter{
                        BeginInclusive: sdk.Int64(447125),
                        EndInclusive: sdk.Int64(449198),
                    },
                    shared.PortRangeFilter{
                        BeginInclusive: sdk.Int64(846409),
                        EndInclusive: sdk.Int64(978571),
                    },
                    shared.PortRangeFilter{
                        BeginInclusive: sdk.Int64(699479),
                        EndInclusive: sdk.Int64(116202),
                    },
                },
                RelatedVulnerabilities: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "facere",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "aliquid",
                    },
                },
                ResourceID: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "non",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "enim",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "delectus",
                    },
                },
                ResourceTags: []shared.MapFilter{
                    shared.MapFilter{
                        Comparison: shared.MapComparisonEnumEquals,
                        Key: "provident",
                        Value: sdk.String("nam"),
                    },
                    shared.MapFilter{
                        Comparison: shared.MapComparisonEnumEquals,
                        Key: "id",
                        Value: sdk.String("blanditiis"),
                    },
                    shared.MapFilter{
                        Comparison: shared.MapComparisonEnumEquals,
                        Key: "deleniti",
                        Value: sdk.String("sapiente"),
                    },
                },
                ResourceType: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "nisi",
                    },
                },
                Severity: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "omnis",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "perferendis",
                    },
                },
                Title: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "distinctio",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "labore",
                    },
                },
                UpdatedAt: []shared.DateFilter{
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2022-05-20T10:11:05.115Z"),
                        StartInclusive: types.MustTimeFromString("2022-02-21T23:58:20.071Z"),
                    },
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2022-08-05T15:44:28.456Z"),
                        StartInclusive: types.MustTimeFromString("2022-09-14T03:02:47.808Z"),
                    },
                },
                VendorSeverity: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "ullam",
                    },
                },
                VulnerabilityID: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "sint",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "mollitia",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "mollitia",
                    },
                },
                VulnerabilitySource: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "dolor",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "odit",
                    },
                },
                VulnerablePackages: []shared.PackageFilter{
                    shared.PackageFilter{
                        Architecture: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumEquals,
                            Value: "iure",
                        },
                        Epoch: &shared.NumberFilter{
                            LowerInclusive: sdk.Float64(9840.43),
                            UpperInclusive: sdk.Float64(8919.24),
                        },
                        Name: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumEquals,
                            Value: "maxime",
                        },
                        Release: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "facilis",
                        },
                        SourceLambdaLayerArn: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "architecto",
                        },
                        SourceLayerHash: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumEquals,
                            Value: "repudiandae",
                        },
                        Version: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "expedita",
                        },
                    },
                    shared.PackageFilter{
                        Architecture: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "repellat",
                        },
                        Epoch: &shared.NumberFilter{
                            LowerInclusive: sdk.Float64(8411.4),
                            UpperInclusive: sdk.Float64(1494.48),
                        },
                        Name: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumNotEquals,
                            Value: "pariatur",
                        },
                        Release: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumEquals,
                            Value: "consequuntur",
                        },
                        SourceLambdaLayerArn: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "natus",
                        },
                        SourceLayerHash: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumEquals,
                            Value: "sunt",
                        },
                        Version: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumNotEquals,
                            Value: "illum",
                        },
                    },
                },
            },
            Name: "Simon Jenkins",
            Reason: sdk.String("ea"),
            Tags: map[string]string{
                "ab": "maiores",
            },
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("autem"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("eaque"),
        XAmzSignedHeaders: sdk.String("pariatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFilterResponse != nil {
        // handle response
    }
}
```

## CreateFindingsReport

Creates a finding report.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateFindingsReport(ctx, operations.CreateFindingsReportRequest{
        RequestBody: operations.CreateFindingsReportRequestBody{
            FilterCriteria: &operations.CreateFindingsReportRequestBodyFilterCriteria{
                AwsAccountID: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "perferendis",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "amet",
                    },
                },
                ComponentID: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "corporis",
                    },
                },
                ComponentType: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "nobis",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "quis",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "dignissimos",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "quis",
                    },
                },
                Ec2InstanceImageID: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "perferendis",
                    },
                },
                Ec2InstanceSubnetID: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "quam",
                    },
                },
                Ec2InstanceVpcID: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "nostrum",
                    },
                },
                EcrImageArchitecture: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "omnis",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "perspiciatis",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "porro",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "blanditiis",
                    },
                },
                EcrImageHash: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "occaecati",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "adipisci",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "earum",
                    },
                },
                EcrImagePushedAt: []shared.DateFilter{
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2021-08-23T06:19:56.211Z"),
                        StartInclusive: types.MustTimeFromString("2021-04-10T01:47:20.724Z"),
                    },
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2021-07-01T21:12:31.408Z"),
                        StartInclusive: types.MustTimeFromString("2021-01-26T22:08:21.462Z"),
                    },
                },
                EcrImageRegistry: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "aliquid",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "dolorem",
                    },
                },
                EcrImageRepositoryName: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "ipsum",
                    },
                },
                EcrImageTags: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "cum",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "dignissimos",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "amet",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "numquam",
                    },
                },
                ExploitAvailable: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "ipsa",
                    },
                },
                FindingArn: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "quaerat",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "quidem",
                    },
                },
                FindingStatus: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "natus",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "atque",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "fugiat",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "soluta",
                    },
                },
                FindingType: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "voluptate",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "deleniti",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "necessitatibus",
                    },
                },
                FirstObservedAt: []shared.DateFilter{
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2021-08-04T21:36:49.552Z"),
                        StartInclusive: types.MustTimeFromString("2022-07-18T13:18:42.293Z"),
                    },
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2021-03-10T07:33:18.208Z"),
                        StartInclusive: types.MustTimeFromString("2022-11-11T21:56:55.945Z"),
                    },
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2022-10-09T08:02:18.659Z"),
                        StartInclusive: types.MustTimeFromString("2020-05-10T15:56:07.975Z"),
                    },
                },
                FixAvailable: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "suscipit",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "provident",
                    },
                },
                InspectorScore: []shared.NumberFilter{
                    shared.NumberFilter{
                        LowerInclusive: sdk.Float64(8310.49),
                        UpperInclusive: sdk.Float64(5197.11),
                    },
                    shared.NumberFilter{
                        LowerInclusive: sdk.Float64(6289.82),
                        UpperInclusive: sdk.Float64(0.55),
                    },
                },
                LambdaFunctionExecutionRoleArn: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "tempora",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "quod",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "qui",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "a",
                    },
                },
                LambdaFunctionLastModifiedAt: []shared.DateFilter{
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2022-01-13T02:40:51.157Z"),
                        StartInclusive: types.MustTimeFromString("2022-03-19T02:38:33.395Z"),
                    },
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2022-04-24T18:16:06.669Z"),
                        StartInclusive: types.MustTimeFromString("2021-03-29T09:11:09.370Z"),
                    },
                },
                LambdaFunctionLayers: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "dolorem",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "totam",
                    },
                },
                LambdaFunctionName: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "expedita",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "sed",
                    },
                },
                LambdaFunctionRuntime: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "voluptas",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "quam",
                    },
                },
                LastObservedAt: []shared.DateFilter{
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2022-10-24T22:37:32.805Z"),
                        StartInclusive: types.MustTimeFromString("2021-05-21T11:11:37.334Z"),
                    },
                },
                NetworkProtocol: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "dicta",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "totam",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "aspernatur",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "distinctio",
                    },
                },
                PortRange: []shared.PortRangeFilter{
                    shared.PortRangeFilter{
                        BeginInclusive: sdk.Int64(396060),
                        EndInclusive: sdk.Int64(463150),
                    },
                    shared.PortRangeFilter{
                        BeginInclusive: sdk.Int64(565421),
                        EndInclusive: sdk.Int64(840429),
                    },
                    shared.PortRangeFilter{
                        BeginInclusive: sdk.Int64(183280),
                        EndInclusive: sdk.Int64(204865),
                    },
                },
                RelatedVulnerabilities: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "odio",
                    },
                },
                ResourceID: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "nam",
                    },
                },
                ResourceTags: []shared.MapFilter{
                    shared.MapFilter{
                        Comparison: shared.MapComparisonEnumEquals,
                        Key: "voluptatem",
                        Value: sdk.String("cumque"),
                    },
                    shared.MapFilter{
                        Comparison: shared.MapComparisonEnumEquals,
                        Key: "soluta",
                        Value: sdk.String("nobis"),
                    },
                    shared.MapFilter{
                        Comparison: shared.MapComparisonEnumEquals,
                        Key: "et",
                        Value: sdk.String("saepe"),
                    },
                    shared.MapFilter{
                        Comparison: shared.MapComparisonEnumEquals,
                        Key: "ipsum",
                        Value: sdk.String("veritatis"),
                    },
                },
                ResourceType: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "tempore",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "aperiam",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "dolorem",
                    },
                },
                Severity: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "adipisci",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "architecto",
                    },
                },
                Title: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "quas",
                    },
                },
                UpdatedAt: []shared.DateFilter{
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2022-05-01T11:31:51.593Z"),
                        StartInclusive: types.MustTimeFromString("2020-08-24T06:10:53.249Z"),
                    },
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2022-02-26T12:07:57.580Z"),
                        StartInclusive: types.MustTimeFromString("2021-10-29T22:05:37.347Z"),
                    },
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2022-12-08T15:45:05.802Z"),
                        StartInclusive: types.MustTimeFromString("2022-01-11T11:48:15.910Z"),
                    },
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2021-01-17T10:17:06.805Z"),
                        StartInclusive: types.MustTimeFromString("2020-05-16T05:26:31.901Z"),
                    },
                },
                VendorSeverity: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "ipsum",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "voluptate",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "vero",
                    },
                },
                VulnerabilityID: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "hic",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "quod",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "similique",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "vero",
                    },
                },
                VulnerabilitySource: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "quibusdam",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "sequi",
                    },
                },
                VulnerablePackages: []shared.PackageFilter{
                    shared.PackageFilter{
                        Architecture: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumNotEquals,
                            Value: "aut",
                        },
                        Epoch: &shared.NumberFilter{
                            LowerInclusive: sdk.Float64(9742.59),
                            UpperInclusive: sdk.Float64(3472.33),
                        },
                        Name: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumNotEquals,
                            Value: "fugit",
                        },
                        Release: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumNotEquals,
                            Value: "maiores",
                        },
                        SourceLambdaLayerArn: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumNotEquals,
                            Value: "iusto",
                        },
                        SourceLayerHash: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumNotEquals,
                            Value: "ducimus",
                        },
                        Version: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumEquals,
                            Value: "officia",
                        },
                    },
                    shared.PackageFilter{
                        Architecture: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumEquals,
                            Value: "ipsam",
                        },
                        Epoch: &shared.NumberFilter{
                            LowerInclusive: sdk.Float64(4104.92),
                            UpperInclusive: sdk.Float64(1369),
                        },
                        Name: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "possimus",
                        },
                        Release: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumEquals,
                            Value: "ratione",
                        },
                        SourceLambdaLayerArn: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "laudantium",
                        },
                        SourceLayerHash: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumEquals,
                            Value: "dolor",
                        },
                        Version: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumNotEquals,
                            Value: "quasi",
                        },
                    },
                    shared.PackageFilter{
                        Architecture: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "nulla",
                        },
                        Epoch: &shared.NumberFilter{
                            LowerInclusive: sdk.Float64(5692.11),
                            UpperInclusive: sdk.Float64(9729.2),
                        },
                        Name: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "sapiente",
                        },
                        Release: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumNotEquals,
                            Value: "saepe",
                        },
                        SourceLambdaLayerArn: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "impedit",
                        },
                        SourceLayerHash: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "veniam",
                        },
                        Version: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "inventore",
                        },
                    },
                },
            },
            ReportFormat: operations.CreateFindingsReportRequestBodyReportFormatEnumCsv,
            S3Destination: operations.CreateFindingsReportRequestBodyS3Destination{
                BucketName: sdk.String("ea"),
                KeyPrefix: sdk.String("quo"),
                KmsKeyArn: sdk.String("consectetur"),
            },
        },
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("eaque"),
        XAmzSecurityToken: sdk.String("a"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("aut"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFindingsReportResponse != nil {
        // handle response
    }
}
```

## DeleteFilter

Deletes a filter resource.

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
    res, err := s.SDK.DeleteFilter(ctx, operations.DeleteFilterRequest{
        RequestBody: operations.DeleteFilterRequestBody{
            Arn: "aut",
        },
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("aliquam"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("inventore"),
        XAmzSignedHeaders: sdk.String("non"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteFilterResponse != nil {
        // handle response
    }
}
```

## DescribeOrganizationConfiguration

Describe Amazon Inspector configuration settings for an Amazon Web Services organization.

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
    res, err := s.SDK.DescribeOrganizationConfiguration(ctx, operations.DescribeOrganizationConfigurationRequest{
        XAmzAlgorithm: sdk.String("et"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("placeat"),
        XAmzSecurityToken: sdk.String("velit"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("autem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeOrganizationConfigurationResponse != nil {
        // handle response
    }
}
```

## Disable

Disables Amazon Inspector scans for one or more Amazon Web Services accounts. Disabling all scan types in an account disables the Amazon Inspector service.

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
    res, err := s.SDK.Disable(ctx, operations.DisableRequest{
        RequestBody: operations.DisableRequestBody{
            AccountIds: []string{
                "quas",
                "assumenda",
                "nulla",
                "voluptas",
            },
            ResourceTypes: []shared.ResourceScanTypeEnum{
                shared.ResourceScanTypeEnumEc2,
                shared.ResourceScanTypeEnumEc2,
                shared.ResourceScanTypeEnumEc2,
            },
        },
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("eius"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisableResponse != nil {
        // handle response
    }
}
```

## DisableDelegatedAdminAccount

Disables the Amazon Inspector delegated administrator for your organization.

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
    res, err := s.SDK.DisableDelegatedAdminAccount(ctx, operations.DisableDelegatedAdminAccountRequest{
        RequestBody: operations.DisableDelegatedAdminAccountRequestBody{
            DelegatedAdminAccountID: "esse",
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("rem"),
        XAmzCredential: sdk.String("fuga"),
        XAmzDate: sdk.String("reprehenderit"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("fugiat"),
        XAmzSignedHeaders: sdk.String("ut"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisableDelegatedAdminAccountResponse != nil {
        // handle response
    }
}
```

## DisassociateMember

Disassociates a member account from an Amazon Inspector delegated administrator.

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
    res, err := s.SDK.DisassociateMember(ctx, operations.DisassociateMemberRequest{
        RequestBody: operations.DisassociateMemberRequestBody{
            AccountID: "eum",
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("assumenda"),
        XAmzCredential: sdk.String("eos"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateMemberResponse != nil {
        // handle response
    }
}
```

## Enable

Enables Amazon Inspector scans for one or more Amazon Web Services accounts.

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
    res, err := s.SDK.Enable(ctx, operations.EnableRequest{
        RequestBody: operations.EnableRequestBody{
            AccountIds: []string{
                "quidem",
                "neque",
                "quo",
            },
            ClientToken: sdk.String("illum"),
            ResourceTypes: []shared.ResourceScanTypeEnum{
                shared.ResourceScanTypeEnumLambda,
                shared.ResourceScanTypeEnumEc2,
                shared.ResourceScanTypeEnumEc2,
                shared.ResourceScanTypeEnumEcr,
            },
        },
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("cupiditate"),
        XAmzCredential: sdk.String("consequatur"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnableResponse != nil {
        // handle response
    }
}
```

## EnableDelegatedAdminAccount

Enables the Amazon Inspector delegated administrator for your Organizations organization.

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
    res, err := s.SDK.EnableDelegatedAdminAccount(ctx, operations.EnableDelegatedAdminAccountRequest{
        RequestBody: operations.EnableDelegatedAdminAccountRequestBody{
            ClientToken: sdk.String("sequi"),
            DelegatedAdminAccountID: "quo",
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("aperiam"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("inventore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnableDelegatedAdminAccountResponse != nil {
        // handle response
    }
}
```

## GetConfiguration

Retrieves setting configurations for Inspector scans.

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
    res, err := s.SDK.GetConfiguration(ctx, operations.GetConfigurationRequest{
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("aliquam"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("commodi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConfigurationResponse != nil {
        // handle response
    }
}
```

## GetDelegatedAdminAccount

Retrieves information about the Amazon Inspector delegated administrator for your organization.

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
    res, err := s.SDK.GetDelegatedAdminAccount(ctx, operations.GetDelegatedAdminAccountRequest{
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("porro"),
        XAmzSignedHeaders: sdk.String("eum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDelegatedAdminAccountResponse != nil {
        // handle response
    }
}
```

## GetFindingsReportStatus

Gets the status of a findings report.

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
    res, err := s.SDK.GetFindingsReportStatus(ctx, operations.GetFindingsReportStatusRequest{
        RequestBody: operations.GetFindingsReportStatusRequestBody{
            ReportID: sdk.String("quas"),
        },
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("incidunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFindingsReportStatusResponse != nil {
        // handle response
    }
}
```

## GetMember

Gets member information for your organization.

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
    res, err := s.SDK.GetMember(ctx, operations.GetMemberRequest{
        RequestBody: operations.GetMemberRequestBody{
            AccountID: "atque",
        },
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("nisi"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("ratione"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMemberResponse != nil {
        // handle response
    }
}
```

## ListAccountPermissions

Lists the permissions an account has to configure Amazon Inspector.

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
    res, err := s.SDK.ListAccountPermissions(ctx, operations.ListAccountPermissionsRequest{
        RequestBody: operations.ListAccountPermissionsRequestBody{
            MaxResults: sdk.Int64(129412),
            NextToken: sdk.String("saepe"),
            Service: operations.ListAccountPermissionsRequestBodyServiceEnumEcr.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("atque"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("eveniet"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("esse"),
        MaxResults: sdk.String("quod"),
        NextToken: sdk.String("nam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAccountPermissionsResponse != nil {
        // handle response
    }
}
```

## ListCoverage

Lists coverage details for you environment.

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
    res, err := s.SDK.ListCoverage(ctx, operations.ListCoverageRequest{
        RequestBody: operations.ListCoverageRequestBody{
            FilterCriteria: &operations.ListCoverageRequestBodyFilterCriteria{
                AccountID: []shared.CoverageStringFilter{
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumEquals,
                        Value: "quasi",
                    },
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumNotEquals,
                        Value: "vel",
                    },
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumNotEquals,
                        Value: "molestiae",
                    },
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumNotEquals,
                        Value: "occaecati",
                    },
                },
                Ec2InstanceTags: []shared.CoverageMapFilter{
                    shared.CoverageMapFilter{
                        Comparison: shared.CoverageMapComparisonEnumEquals,
                        Key: "distinctio",
                        Value: sdk.String("eligendi"),
                    },
                    shared.CoverageMapFilter{
                        Comparison: shared.CoverageMapComparisonEnumEquals,
                        Key: "sit",
                        Value: sdk.String("culpa"),
                    },
                },
                EcrImageTags: []shared.CoverageStringFilter{
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumEquals,
                        Value: "cumque",
                    },
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumEquals,
                        Value: "consequatur",
                    },
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumNotEquals,
                        Value: "quaerat",
                    },
                },
                EcrRepositoryName: []shared.CoverageStringFilter{
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumEquals,
                        Value: "esse",
                    },
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumNotEquals,
                        Value: "provident",
                    },
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumNotEquals,
                        Value: "nulla",
                    },
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumNotEquals,
                        Value: "esse",
                    },
                },
                LambdaFunctionName: []shared.CoverageStringFilter{
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumNotEquals,
                        Value: "error",
                    },
                },
                LambdaFunctionRuntime: []shared.CoverageStringFilter{
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumNotEquals,
                        Value: "possimus",
                    },
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumEquals,
                        Value: "eveniet",
                    },
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumNotEquals,
                        Value: "facere",
                    },
                },
                LambdaFunctionTags: []shared.CoverageMapFilter{
                    shared.CoverageMapFilter{
                        Comparison: shared.CoverageMapComparisonEnumEquals,
                        Key: "consequuntur",
                        Value: sdk.String("quasi"),
                    },
                },
                ResourceID: []shared.CoverageStringFilter{
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumNotEquals,
                        Value: "aliquid",
                    },
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumNotEquals,
                        Value: "quae",
                    },
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumNotEquals,
                        Value: "vel",
                    },
                },
                ResourceType: []shared.CoverageStringFilter{
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumEquals,
                        Value: "libero",
                    },
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumNotEquals,
                        Value: "soluta",
                    },
                },
                ScanStatusCode: []shared.CoverageStringFilter{
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumEquals,
                        Value: "sapiente",
                    },
                },
                ScanStatusReason: []shared.CoverageStringFilter{
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumEquals,
                        Value: "reprehenderit",
                    },
                },
                ScanType: []shared.CoverageStringFilter{
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumEquals,
                        Value: "aut",
                    },
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumNotEquals,
                        Value: "qui",
                    },
                },
            },
            MaxResults: sdk.Int64(845358),
            NextToken: sdk.String("ex"),
        },
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("itaque"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("quasi"),
        MaxResults: sdk.String("at"),
        NextToken: sdk.String("et"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCoverageResponse != nil {
        // handle response
    }
}
```

## ListCoverageStatistics

Lists Amazon Inspector coverage statistics for your environment.

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
    res, err := s.SDK.ListCoverageStatistics(ctx, operations.ListCoverageStatisticsRequest{
        RequestBody: operations.ListCoverageStatisticsRequestBody{
            FilterCriteria: &operations.ListCoverageStatisticsRequestBodyFilterCriteria{
                AccountID: []shared.CoverageStringFilter{
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumEquals,
                        Value: "minima",
                    },
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumEquals,
                        Value: "consectetur",
                    },
                },
                Ec2InstanceTags: []shared.CoverageMapFilter{
                    shared.CoverageMapFilter{
                        Comparison: shared.CoverageMapComparisonEnumEquals,
                        Key: "iste",
                        Value: sdk.String("temporibus"),
                    },
                },
                EcrImageTags: []shared.CoverageStringFilter{
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumNotEquals,
                        Value: "aut",
                    },
                },
                EcrRepositoryName: []shared.CoverageStringFilter{
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumEquals,
                        Value: "mollitia",
                    },
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumEquals,
                        Value: "corrupti",
                    },
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumEquals,
                        Value: "voluptatem",
                    },
                },
                LambdaFunctionName: []shared.CoverageStringFilter{
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumNotEquals,
                        Value: "numquam",
                    },
                },
                LambdaFunctionRuntime: []shared.CoverageStringFilter{
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumEquals,
                        Value: "voluptas",
                    },
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumEquals,
                        Value: "dignissimos",
                    },
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumEquals,
                        Value: "maiores",
                    },
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumNotEquals,
                        Value: "velit",
                    },
                },
                LambdaFunctionTags: []shared.CoverageMapFilter{
                    shared.CoverageMapFilter{
                        Comparison: shared.CoverageMapComparisonEnumEquals,
                        Key: "voluptas",
                        Value: sdk.String("asperiores"),
                    },
                    shared.CoverageMapFilter{
                        Comparison: shared.CoverageMapComparisonEnumEquals,
                        Key: "aperiam",
                        Value: sdk.String("ea"),
                    },
                    shared.CoverageMapFilter{
                        Comparison: shared.CoverageMapComparisonEnumEquals,
                        Key: "quaerat",
                        Value: sdk.String("consequuntur"),
                    },
                    shared.CoverageMapFilter{
                        Comparison: shared.CoverageMapComparisonEnumEquals,
                        Key: "repellendus",
                        Value: sdk.String("officia"),
                    },
                },
                ResourceID: []shared.CoverageStringFilter{
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumEquals,
                        Value: "officia",
                    },
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumNotEquals,
                        Value: "nemo",
                    },
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumEquals,
                        Value: "quaerat",
                    },
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumNotEquals,
                        Value: "quod",
                    },
                },
                ResourceType: []shared.CoverageStringFilter{
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumEquals,
                        Value: "adipisci",
                    },
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumNotEquals,
                        Value: "id",
                    },
                },
                ScanStatusCode: []shared.CoverageStringFilter{
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumEquals,
                        Value: "culpa",
                    },
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumNotEquals,
                        Value: "recusandae",
                    },
                },
                ScanStatusReason: []shared.CoverageStringFilter{
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumNotEquals,
                        Value: "vel",
                    },
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumEquals,
                        Value: "quos",
                    },
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumEquals,
                        Value: "labore",
                    },
                },
                ScanType: []shared.CoverageStringFilter{
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumNotEquals,
                        Value: "cum",
                    },
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumEquals,
                        Value: "in",
                    },
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumEquals,
                        Value: "reiciendis",
                    },
                    shared.CoverageStringFilter{
                        Comparison: shared.CoverageStringComparisonEnumNotEquals,
                        Value: "nemo",
                    },
                },
            },
            GroupBy: operations.ListCoverageStatisticsRequestBodyGroupByEnumEcrRepositoryName.ToPointer(),
            NextToken: sdk.String("aliquid"),
        },
        XAmzAlgorithm: sdk.String("aperiam"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("exercitationem"),
        XAmzSignature: sdk.String("earum"),
        XAmzSignedHeaders: sdk.String("facere"),
        NextToken: sdk.String("numquam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCoverageStatisticsResponse != nil {
        // handle response
    }
}
```

## ListDelegatedAdminAccounts

Lists information about the Amazon Inspector delegated administrator of your organization.

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
    res, err := s.SDK.ListDelegatedAdminAccounts(ctx, operations.ListDelegatedAdminAccountsRequest{
        RequestBody: operations.ListDelegatedAdminAccountsRequestBody{
            MaxResults: sdk.Int64(985492),
            NextToken: sdk.String("suscipit"),
        },
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("dolore"),
        XAmzSignature: sdk.String("sunt"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        MaxResults: sdk.String("adipisci"),
        NextToken: sdk.String("non"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDelegatedAdminAccountsResponse != nil {
        // handle response
    }
}
```

## ListFilters

Lists the filters associated with your account.

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
    res, err := s.SDK.ListFilters(ctx, operations.ListFiltersRequest{
        RequestBody: operations.ListFiltersRequestBody{
            Action: operations.ListFiltersRequestBodyActionEnumNone.ToPointer(),
            Arns: []string{
                "dignissimos",
            },
            MaxResults: sdk.Int64(950953),
            NextToken: sdk.String("debitis"),
        },
        XAmzAlgorithm: sdk.String("consectetur"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("harum"),
        XAmzDate: sdk.String("laboriosam"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("voluptates"),
        XAmzSignedHeaders: sdk.String("libero"),
        MaxResults: sdk.String("vitae"),
        NextToken: sdk.String("accusamus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFiltersResponse != nil {
        // handle response
    }
}
```

## ListFindingAggregations

Lists aggregated finding data for your environment based on specific criteria.

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
    res, err := s.SDK.ListFindingAggregations(ctx, operations.ListFindingAggregationsRequest{
        RequestBody: operations.ListFindingAggregationsRequestBody{
            AccountIds: []shared.StringFilter{
                shared.StringFilter{
                    Comparison: shared.StringComparisonEnumEquals,
                    Value: "aspernatur",
                },
                shared.StringFilter{
                    Comparison: shared.StringComparisonEnumPrefix,
                    Value: "voluptas",
                },
                shared.StringFilter{
                    Comparison: shared.StringComparisonEnumPrefix,
                    Value: "minima",
                },
            },
            AggregationRequest: &operations.ListFindingAggregationsRequestBodyAggregationRequest{
                AccountAggregation: &shared.AccountAggregation{
                    FindingType: shared.AggregationFindingTypeEnumPackageVulnerability.ToPointer(),
                    ResourceType: shared.AggregationResourceTypeEnumAwsLambdaFunction.ToPointer(),
                    SortBy: shared.AccountSortByEnumCritical.ToPointer(),
                    SortOrder: shared.SortOrderEnumDesc.ToPointer(),
                },
                AmiAggregation: &shared.AmiAggregation{
                    Amis: []shared.StringFilter{
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "in",
                        },
                    },
                    SortBy: shared.AmiSortByEnumHigh.ToPointer(),
                    SortOrder: shared.SortOrderEnumAsc.ToPointer(),
                },
                AwsEcrContainerAggregation: &shared.AwsEcrContainerAggregation{
                    Architectures: []shared.StringFilter{
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumNotEquals,
                            Value: "ullam",
                        },
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumEquals,
                            Value: "cum",
                        },
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "quas",
                        },
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumNotEquals,
                            Value: "nesciunt",
                        },
                    },
                    ImageShas: []shared.StringFilter{
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "pariatur",
                        },
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "hic",
                        },
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "nobis",
                        },
                    },
                    ImageTags: []shared.StringFilter{
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumNotEquals,
                            Value: "sed",
                        },
                    },
                    Repositories: []shared.StringFilter{
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumEquals,
                            Value: "asperiores",
                        },
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumNotEquals,
                            Value: "voluptate",
                        },
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumNotEquals,
                            Value: "ab",
                        },
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "dolore",
                        },
                    },
                    ResourceIds: []shared.StringFilter{
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumEquals,
                            Value: "in",
                        },
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "quidem",
                        },
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumEquals,
                            Value: "voluptas",
                        },
                    },
                    SortBy: shared.AwsEcrContainerSortByEnumHigh.ToPointer(),
                    SortOrder: shared.SortOrderEnumAsc.ToPointer(),
                },
                Ec2InstanceAggregation: &shared.Ec2InstanceAggregation{
                    Amis: []shared.StringFilter{
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumNotEquals,
                            Value: "debitis",
                        },
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumEquals,
                            Value: "reiciendis",
                        },
                    },
                    InstanceIds: []shared.StringFilter{
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "maiores",
                        },
                    },
                    InstanceTags: []shared.MapFilter{
                        shared.MapFilter{
                            Comparison: shared.MapComparisonEnumEquals,
                            Key: "sed",
                            Value: sdk.String("provident"),
                        },
                        shared.MapFilter{
                            Comparison: shared.MapComparisonEnumEquals,
                            Key: "eius",
                            Value: sdk.String("necessitatibus"),
                        },
                    },
                    OperatingSystems: []shared.StringFilter{
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "occaecati",
                        },
                    },
                    SortBy: shared.Ec2InstanceSortByEnumHigh.ToPointer(),
                    SortOrder: shared.SortOrderEnumDesc.ToPointer(),
                },
                FindingTypeAggregation: &shared.FindingTypeAggregation{
                    FindingType: shared.AggregationFindingTypeEnumNetworkReachability.ToPointer(),
                    ResourceType: shared.AggregationResourceTypeEnumAwsEc2Instance.ToPointer(),
                    SortBy: shared.FindingTypeSortByEnumHigh.ToPointer(),
                    SortOrder: shared.SortOrderEnumDesc.ToPointer(),
                },
                ImageLayerAggregation: &shared.ImageLayerAggregation{
                    LayerHashes: []shared.StringFilter{
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumEquals,
                            Value: "non",
                        },
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumNotEquals,
                            Value: "praesentium",
                        },
                    },
                    Repositories: []shared.StringFilter{
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumEquals,
                            Value: "incidunt",
                        },
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "debitis",
                        },
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "sit",
                        },
                    },
                    ResourceIds: []shared.StringFilter{
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "veniam",
                        },
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumEquals,
                            Value: "recusandae",
                        },
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumNotEquals,
                            Value: "nulla",
                        },
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumEquals,
                            Value: "aperiam",
                        },
                    },
                    SortBy: shared.ImageLayerSortByEnumAll.ToPointer(),
                    SortOrder: shared.SortOrderEnumAsc.ToPointer(),
                },
                LambdaFunctionAggregation: &shared.LambdaFunctionAggregation{
                    FunctionNames: []shared.StringFilter{
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "officiis",
                        },
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumEquals,
                            Value: "laudantium",
                        },
                    },
                    FunctionTags: []shared.MapFilter{
                        shared.MapFilter{
                            Comparison: shared.MapComparisonEnumEquals,
                            Key: "praesentium",
                            Value: sdk.String("cum"),
                        },
                        shared.MapFilter{
                            Comparison: shared.MapComparisonEnumEquals,
                            Key: "laboriosam",
                            Value: sdk.String("dolorum"),
                        },
                    },
                    ResourceIds: []shared.StringFilter{
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "hic",
                        },
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumNotEquals,
                            Value: "debitis",
                        },
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumEquals,
                            Value: "dolorum",
                        },
                    },
                    Runtimes: []shared.StringFilter{
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "dolorum",
                        },
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "accusamus",
                        },
                    },
                    SortBy: shared.LambdaFunctionSortByEnumCritical.ToPointer(),
                    SortOrder: shared.SortOrderEnumDesc.ToPointer(),
                },
                LambdaLayerAggregation: &shared.LambdaLayerAggregation{
                    FunctionNames: []shared.StringFilter{
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumEquals,
                            Value: "fugiat",
                        },
                    },
                    LayerArns: []shared.StringFilter{
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "expedita",
                        },
                    },
                    ResourceIds: []shared.StringFilter{
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumEquals,
                            Value: "esse",
                        },
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "sit",
                        },
                    },
                    SortBy: shared.LambdaLayerSortByEnumHigh.ToPointer(),
                    SortOrder: shared.SortOrderEnumDesc.ToPointer(),
                },
                PackageAggregation: &shared.PackageAggregation{
                    PackageNames: []shared.StringFilter{
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "et",
                        },
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "ex",
                        },
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumEquals,
                            Value: "sit",
                        },
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "nostrum",
                        },
                    },
                    SortBy: shared.PackageSortByEnumAll.ToPointer(),
                    SortOrder: shared.SortOrderEnumDesc.ToPointer(),
                },
                RepositoryAggregation: &shared.RepositoryAggregation{
                    Repositories: []shared.StringFilter{
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumEquals,
                            Value: "reiciendis",
                        },
                    },
                    SortBy: shared.RepositorySortByEnumCritical.ToPointer(),
                    SortOrder: shared.SortOrderEnumDesc.ToPointer(),
                },
                TitleAggregation: &shared.TitleAggregation{
                    ResourceType: shared.AggregationResourceTypeEnumAwsEc2Instance.ToPointer(),
                    SortBy: shared.TitleSortByEnumCritical.ToPointer(),
                    SortOrder: shared.SortOrderEnumDesc.ToPointer(),
                    Titles: []shared.StringFilter{
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumNotEquals,
                            Value: "atque",
                        },
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumNotEquals,
                            Value: "nam",
                        },
                    },
                    VulnerabilityIds: []shared.StringFilter{
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "alias",
                        },
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumEquals,
                            Value: "deserunt",
                        },
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "unde",
                        },
                        shared.StringFilter{
                            Comparison: shared.StringComparisonEnumNotEquals,
                            Value: "provident",
                        },
                    },
                },
            },
            AggregationType: operations.ListFindingAggregationsRequestBodyAggregationTypeEnumAwsLambdaFunction,
            MaxResults: sdk.Int64(962771),
            NextToken: sdk.String("voluptates"),
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("reprehenderit"),
        XAmzSecurityToken: sdk.String("facere"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("praesentium"),
        MaxResults: sdk.String("mollitia"),
        NextToken: sdk.String("veniam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFindingAggregationsResponse != nil {
        // handle response
    }
}
```

## ListFindings

Lists findings for your environment.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListFindings(ctx, operations.ListFindingsRequest{
        RequestBody: operations.ListFindingsRequestBody{
            FilterCriteria: &operations.ListFindingsRequestBodyFilterCriteria{
                AwsAccountID: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "repudiandae",
                    },
                },
                ComponentID: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "reprehenderit",
                    },
                },
                ComponentType: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "suscipit",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "maxime",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "esse",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "assumenda",
                    },
                },
                Ec2InstanceImageID: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "error",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "officiis",
                    },
                },
                Ec2InstanceSubnetID: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "minima",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "ex",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "corrupti",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "error",
                    },
                },
                Ec2InstanceVpcID: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "repudiandae",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "atque",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "recusandae",
                    },
                },
                EcrImageArchitecture: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "labore",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "doloremque",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "dicta",
                    },
                },
                EcrImageHash: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "dolores",
                    },
                },
                EcrImagePushedAt: []shared.DateFilter{
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2022-10-03T00:21:18.046Z"),
                        StartInclusive: types.MustTimeFromString("2021-04-24T18:03:33.752Z"),
                    },
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2022-02-04T04:20:12.809Z"),
                        StartInclusive: types.MustTimeFromString("2022-06-03T06:15:48.130Z"),
                    },
                },
                EcrImageRegistry: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "in",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "eveniet",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "consequuntur",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "id",
                    },
                },
                EcrImageRepositoryName: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "error",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "corporis",
                    },
                },
                EcrImageTags: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "non",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "doloremque",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "ipsa",
                    },
                },
                ExploitAvailable: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "molestiae",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "qui",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "iure",
                    },
                },
                FindingArn: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "laborum",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "voluptatum",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "aliquam",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "repellat",
                    },
                },
                FindingStatus: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "perspiciatis",
                    },
                },
                FindingType: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "voluptas",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "maiores",
                    },
                },
                FirstObservedAt: []shared.DateFilter{
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2022-05-03T16:31:59.395Z"),
                        StartInclusive: types.MustTimeFromString("2022-09-16T00:03:17.363Z"),
                    },
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2022-08-07T17:37:00.643Z"),
                        StartInclusive: types.MustTimeFromString("2022-01-28T02:50:56.968Z"),
                    },
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2022-05-20T05:55:02.076Z"),
                        StartInclusive: types.MustTimeFromString("2022-08-06T19:48:35.360Z"),
                    },
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2022-05-14T22:22:36.102Z"),
                        StartInclusive: types.MustTimeFromString("2022-02-09T21:52:52.867Z"),
                    },
                },
                FixAvailable: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "nemo",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "esse",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "quis",
                    },
                },
                InspectorScore: []shared.NumberFilter{
                    shared.NumberFilter{
                        LowerInclusive: sdk.Float64(9704.94),
                        UpperInclusive: sdk.Float64(5927.8),
                    },
                    shared.NumberFilter{
                        LowerInclusive: sdk.Float64(1334.39),
                        UpperInclusive: sdk.Float64(3545.06),
                    },
                },
                LambdaFunctionExecutionRoleArn: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "nostrum",
                    },
                },
                LambdaFunctionLastModifiedAt: []shared.DateFilter{
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2021-05-11T03:29:26.448Z"),
                        StartInclusive: types.MustTimeFromString("2022-03-12T23:31:34.509Z"),
                    },
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2022-12-18T06:55:47.674Z"),
                        StartInclusive: types.MustTimeFromString("2020-01-18T19:52:50.985Z"),
                    },
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2022-07-21T10:16:07.152Z"),
                        StartInclusive: types.MustTimeFromString("2021-02-15T12:37:51.202Z"),
                    },
                },
                LambdaFunctionLayers: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "placeat",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "voluptatibus",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "officiis",
                    },
                },
                LambdaFunctionName: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "vitae",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "tempora",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "inventore",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "cumque",
                    },
                },
                LambdaFunctionRuntime: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "velit",
                    },
                },
                LastObservedAt: []shared.DateFilter{
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2022-09-27T20:53:33.627Z"),
                        StartInclusive: types.MustTimeFromString("2021-04-05T02:38:00.020Z"),
                    },
                },
                NetworkProtocol: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "sapiente",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "dicta",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "beatae",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "provident",
                    },
                },
                PortRange: []shared.PortRangeFilter{
                    shared.PortRangeFilter{
                        BeginInclusive: sdk.Int64(745398),
                        EndInclusive: sdk.Int64(940782),
                    },
                    shared.PortRangeFilter{
                        BeginInclusive: sdk.Int64(848151),
                        EndInclusive: sdk.Int64(52508),
                    },
                    shared.PortRangeFilter{
                        BeginInclusive: sdk.Int64(935833),
                        EndInclusive: sdk.Int64(596211),
                    },
                    shared.PortRangeFilter{
                        BeginInclusive: sdk.Int64(983427),
                        EndInclusive: sdk.Int64(891801),
                    },
                },
                RelatedVulnerabilities: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "suscipit",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "fugit",
                    },
                },
                ResourceID: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "ratione",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "necessitatibus",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "consequatur",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "et",
                    },
                },
                ResourceTags: []shared.MapFilter{
                    shared.MapFilter{
                        Comparison: shared.MapComparisonEnumEquals,
                        Key: "natus",
                        Value: sdk.String("occaecati"),
                    },
                    shared.MapFilter{
                        Comparison: shared.MapComparisonEnumEquals,
                        Key: "suscipit",
                        Value: sdk.String("adipisci"),
                    },
                },
                ResourceType: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "doloribus",
                    },
                },
                Severity: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "ipsa",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "nihil",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "dicta",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "esse",
                    },
                },
                Title: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "reiciendis",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "architecto",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "doloremque",
                    },
                },
                UpdatedAt: []shared.DateFilter{
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2022-09-23T23:49:53.776Z"),
                        StartInclusive: types.MustTimeFromString("2022-08-06T14:46:31.435Z"),
                    },
                },
                VendorSeverity: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "ipsa",
                    },
                },
                VulnerabilityID: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "nostrum",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "expedita",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "officia",
                    },
                },
                VulnerabilitySource: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "perferendis",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "voluptas",
                    },
                },
                VulnerablePackages: []shared.PackageFilter{
                    shared.PackageFilter{
                        Architecture: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "ab",
                        },
                        Epoch: &shared.NumberFilter{
                            LowerInclusive: sdk.Float64(6253.58),
                            UpperInclusive: sdk.Float64(8224.07),
                        },
                        Name: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumNotEquals,
                            Value: "mollitia",
                        },
                        Release: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumNotEquals,
                            Value: "libero",
                        },
                        SourceLambdaLayerArn: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumEquals,
                            Value: "deleniti",
                        },
                        SourceLayerHash: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumEquals,
                            Value: "vitae",
                        },
                        Version: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumNotEquals,
                            Value: "ex",
                        },
                    },
                    shared.PackageFilter{
                        Architecture: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumNotEquals,
                            Value: "ex",
                        },
                        Epoch: &shared.NumberFilter{
                            LowerInclusive: sdk.Float64(2811.53),
                            UpperInclusive: sdk.Float64(3210.43),
                        },
                        Name: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumNotEquals,
                            Value: "voluptatem",
                        },
                        Release: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "cum",
                        },
                        SourceLambdaLayerArn: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "beatae",
                        },
                        SourceLayerHash: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "omnis",
                        },
                        Version: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumEquals,
                            Value: "rerum",
                        },
                    },
                    shared.PackageFilter{
                        Architecture: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "culpa",
                        },
                        Epoch: &shared.NumberFilter{
                            LowerInclusive: sdk.Float64(296.34),
                            UpperInclusive: sdk.Float64(9591.43),
                        },
                        Name: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumNotEquals,
                            Value: "architecto",
                        },
                        Release: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumNotEquals,
                            Value: "pariatur",
                        },
                        SourceLambdaLayerArn: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumNotEquals,
                            Value: "voluptatem",
                        },
                        SourceLayerHash: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumEquals,
                            Value: "deleniti",
                        },
                        Version: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumNotEquals,
                            Value: "ex",
                        },
                    },
                },
            },
            MaxResults: sdk.Int64(958308),
            NextToken: sdk.String("rem"),
            SortCriteria: &operations.ListFindingsRequestBodySortCriteria{
                Field: shared.SortFieldEnumVulnerabilityID.ToPointer(),
                SortOrder: shared.SortOrderEnumAsc.ToPointer(),
            },
        },
        XAmzAlgorithm: sdk.String("asperiores"),
        XAmzContentSha256: sdk.String("ratione"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("impedit"),
        MaxResults: sdk.String("quibusdam"),
        NextToken: sdk.String("nam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFindingsResponse != nil {
        // handle response
    }
}
```

## ListMembers

List members associated with the Amazon Inspector delegated administrator for your organization.

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
        RequestBody: operations.ListMembersRequestBody{
            MaxResults: sdk.Int64(373216),
            NextToken: sdk.String("culpa"),
            OnlyAssociated: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("aliquam"),
        XAmzCredential: sdk.String("inventore"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("dolor"),
        MaxResults: sdk.String("consequatur"),
        NextToken: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMembersResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists all tags attached to a given resource.

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
        XAmzAlgorithm: sdk.String("sit"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("quae"),
        XAmzSignedHeaders: sdk.String("dolor"),
        ResourceArn: "fugiat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListUsageTotals

Lists the Amazon Inspector usage totals over the last 30 days.

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
    res, err := s.SDK.ListUsageTotals(ctx, operations.ListUsageTotalsRequest{
        RequestBody: operations.ListUsageTotalsRequestBody{
            AccountIds: []string{
                "consequuntur",
                "ipsa",
            },
            MaxResults: sdk.Int64(559682),
            NextToken: sdk.String("eveniet"),
        },
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("officiis"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("veniam"),
        XAmzSignedHeaders: sdk.String("nesciunt"),
        MaxResults: sdk.String("expedita"),
        NextToken: sdk.String("eum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUsageTotalsResponse != nil {
        // handle response
    }
}
```

## TagResource

Adds tags to a resource.

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
                "voluptatum": "magnam",
                "exercitationem": "ab",
            },
        },
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("autem"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("laboriosam"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("voluptatem"),
        ResourceArn: "exercitationem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

Removes tags from a resource.

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
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("nisi"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("est"),
        XAmzSignedHeaders: sdk.String("harum"),
        ResourceArn: "sequi",
        TagKeys: []string{
            "repudiandae",
            "optio",
            "occaecati",
            "nemo",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateConfiguration

Updates setting configurations for your Amazon Inspector account. When you use this API as an Amazon Inspector delegated administrator this updates the setting for all accounts you manage. Member accounts in an organization cannot update this setting.

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
    res, err := s.SDK.UpdateConfiguration(ctx, operations.UpdateConfigurationRequest{
        RequestBody: operations.UpdateConfigurationRequestBody{
            EcrConfiguration: operations.UpdateConfigurationRequestBodyEcrConfiguration{
                RescanDuration: shared.EcrRescanDurationEnumDays30.ToPointer(),
            },
        },
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("eius"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateConfigurationResponse != nil {
        // handle response
    }
}
```

## UpdateFilter

Specifies the action that is to be applied to the findings that match the filter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateFilter(ctx, operations.UpdateFilterRequest{
        RequestBody: operations.UpdateFilterRequestBody{
            Action: operations.UpdateFilterRequestBodyActionEnumNone.ToPointer(),
            Description: sdk.String("ducimus"),
            FilterArn: "nesciunt",
            FilterCriteria: &operations.UpdateFilterRequestBodyFilterCriteria{
                AwsAccountID: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "incidunt",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "rem",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "dicta",
                    },
                },
                ComponentID: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "consectetur",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "cupiditate",
                    },
                },
                ComponentType: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "alias",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "eos",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "iste",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "inventore",
                    },
                },
                Ec2InstanceImageID: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "voluptatibus",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "omnis",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "minima",
                    },
                },
                Ec2InstanceSubnetID: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "magnam",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "quos",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "itaque",
                    },
                },
                Ec2InstanceVpcID: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "earum",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "nam",
                    },
                },
                EcrImageArchitecture: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "ipsam",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "alias",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "non",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "enim",
                    },
                },
                EcrImageHash: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "deserunt",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "nemo",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "est",
                    },
                },
                EcrImagePushedAt: []shared.DateFilter{
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2021-03-29T02:31:09.447Z"),
                        StartInclusive: types.MustTimeFromString("2020-03-02T04:41:46.760Z"),
                    },
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2020-01-10T21:07:19.729Z"),
                        StartInclusive: types.MustTimeFromString("2022-08-16T11:44:46.779Z"),
                    },
                },
                EcrImageRegistry: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "quae",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "fuga",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "consectetur",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "atque",
                    },
                },
                EcrImageRepositoryName: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "magni",
                    },
                },
                EcrImageTags: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "nam",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "iusto",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "sequi",
                    },
                },
                ExploitAvailable: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "quo",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "quibusdam",
                    },
                },
                FindingArn: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "voluptatibus",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "magnam",
                    },
                },
                FindingStatus: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "facere",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "architecto",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "quia",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "aliquam",
                    },
                },
                FindingType: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "accusantium",
                    },
                },
                FirstObservedAt: []shared.DateFilter{
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2022-11-22T17:16:07.137Z"),
                        StartInclusive: types.MustTimeFromString("2021-04-18T19:14:29.683Z"),
                    },
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2022-10-03T00:09:39.638Z"),
                        StartInclusive: types.MustTimeFromString("2022-05-28T07:14:46.447Z"),
                    },
                },
                FixAvailable: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "impedit",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "iste",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "alias",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "itaque",
                    },
                },
                InspectorScore: []shared.NumberFilter{
                    shared.NumberFilter{
                        LowerInclusive: sdk.Float64(6738.38),
                        UpperInclusive: sdk.Float64(2503.98),
                    },
                },
                LambdaFunctionExecutionRoleArn: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "sit",
                    },
                },
                LambdaFunctionLastModifiedAt: []shared.DateFilter{
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2022-05-12T12:10:59.574Z"),
                        StartInclusive: types.MustTimeFromString("2021-10-10T21:47:57.882Z"),
                    },
                },
                LambdaFunctionLayers: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "facilis",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "perspiciatis",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "deleniti",
                    },
                },
                LambdaFunctionName: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "ullam",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "necessitatibus",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "impedit",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "corporis",
                    },
                },
                LambdaFunctionRuntime: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "esse",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "veritatis",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "consectetur",
                    },
                },
                LastObservedAt: []shared.DateFilter{
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2022-10-15T11:04:29.234Z"),
                        StartInclusive: types.MustTimeFromString("2022-10-26T04:37:41.230Z"),
                    },
                },
                NetworkProtocol: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "nemo",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "libero",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "dolorum",
                    },
                },
                PortRange: []shared.PortRangeFilter{
                    shared.PortRangeFilter{
                        BeginInclusive: sdk.Int64(144691),
                        EndInclusive: sdk.Int64(545),
                    },
                    shared.PortRangeFilter{
                        BeginInclusive: sdk.Int64(168042),
                        EndInclusive: sdk.Int64(425402),
                    },
                },
                RelatedVulnerabilities: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "modi",
                    },
                },
                ResourceID: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "itaque",
                    },
                },
                ResourceTags: []shared.MapFilter{
                    shared.MapFilter{
                        Comparison: shared.MapComparisonEnumEquals,
                        Key: "ipsum",
                        Value: sdk.String("unde"),
                    },
                },
                ResourceType: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "maxime",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "quia",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "omnis",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "dicta",
                    },
                },
                Severity: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "fugiat",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "quos",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "sit",
                    },
                },
                Title: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "voluptates",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "aperiam",
                    },
                },
                UpdatedAt: []shared.DateFilter{
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2022-03-31T09:16:11.300Z"),
                        StartInclusive: types.MustTimeFromString("2022-12-08T10:34:18.161Z"),
                    },
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2022-07-18T07:24:59.490Z"),
                        StartInclusive: types.MustTimeFromString("2022-03-05T22:46:19.288Z"),
                    },
                    shared.DateFilter{
                        EndInclusive: types.MustTimeFromString("2022-05-01T23:00:45.808Z"),
                        StartInclusive: types.MustTimeFromString("2021-05-13T05:17:07.450Z"),
                    },
                },
                VendorSeverity: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "accusamus",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "tempore",
                    },
                },
                VulnerabilityID: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "autem",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "rerum",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumPrefix,
                        Value: "corporis",
                    },
                },
                VulnerabilitySource: []shared.StringFilter{
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "cum",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "alias",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumEquals,
                        Value: "quidem",
                    },
                    shared.StringFilter{
                        Comparison: shared.StringComparisonEnumNotEquals,
                        Value: "repudiandae",
                    },
                },
                VulnerablePackages: []shared.PackageFilter{
                    shared.PackageFilter{
                        Architecture: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumNotEquals,
                            Value: "officiis",
                        },
                        Epoch: &shared.NumberFilter{
                            LowerInclusive: sdk.Float64(1770.05),
                            UpperInclusive: sdk.Float64(8448.54),
                        },
                        Name: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "praesentium",
                        },
                        Release: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumEquals,
                            Value: "explicabo",
                        },
                        SourceLambdaLayerArn: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumPrefix,
                            Value: "error",
                        },
                        SourceLayerHash: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumNotEquals,
                            Value: "adipisci",
                        },
                        Version: &shared.StringFilter{
                            Comparison: shared.StringComparisonEnumNotEquals,
                            Value: "similique",
                        },
                    },
                },
            },
            Name: sdk.String("Miss Alison Hayes"),
            Reason: sdk.String("delectus"),
        },
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("nesciunt"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("officia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateFilterResponse != nil {
        // handle response
    }
}
```

## UpdateOrganizationConfiguration

Updates the configurations for your Amazon Inspector organization.

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
    res, err := s.SDK.UpdateOrganizationConfiguration(ctx, operations.UpdateOrganizationConfigurationRequest{
        RequestBody: operations.UpdateOrganizationConfigurationRequestBody{
            AutoEnable: operations.UpdateOrganizationConfigurationRequestBodyAutoEnable{
                Ec2: sdk.Bool(false),
                Ecr: sdk.Bool(false),
                Lambda: sdk.Bool(false),
            },
        },
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("optio"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("expedita"),
        XAmzSignedHeaders: sdk.String("voluptatum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationConfigurationResponse != nil {
        // handle response
    }
}
```
