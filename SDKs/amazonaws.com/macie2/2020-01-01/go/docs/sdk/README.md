# SDK

## Overview

Amazon Macie

Amazon Web Services documentation
<https://docs.aws.amazon.com/macie2/>
### Available Operations

* [AcceptInvitation](#acceptinvitation) - Accepts an Amazon Macie membership invitation that was received from a specific account.
* [BatchGetCustomDataIdentifiers](#batchgetcustomdataidentifiers) - Retrieves information about one or more custom data identifiers.
* [CreateAllowList](#createallowlist) - Creates and defines the settings for an allow list.
* [CreateClassificationJob](#createclassificationjob) - Creates and defines the settings for a classification job.
* [CreateCustomDataIdentifier](#createcustomdataidentifier) - Creates and defines the criteria and other settings for a custom data identifier.
* [CreateFindingsFilter](#createfindingsfilter) - Creates and defines the criteria and other settings for a findings filter.
* [CreateInvitations](#createinvitations) - Sends an Amazon Macie membership invitation to one or more accounts.
* [CreateMember](#createmember) - Associates an account with an Amazon Macie administrator account.
* [CreateSampleFindings](#createsamplefindings) - Creates sample findings.
* [DeclineInvitations](#declineinvitations) - Declines Amazon Macie membership invitations that were received from specific accounts.
* [DeleteAllowList](#deleteallowlist) - Deletes an allow list.
* [DeleteCustomDataIdentifier](#deletecustomdataidentifier) - Soft deletes a custom data identifier.
* [DeleteFindingsFilter](#deletefindingsfilter) - Deletes a findings filter.
* [DeleteInvitations](#deleteinvitations) - Deletes Amazon Macie membership invitations that were received from specific accounts.
* [DeleteMember](#deletemember) - Deletes the association between an Amazon Macie administrator account and an account.
* [DescribeBuckets](#describebuckets) - Retrieves (queries) statistical data and other information about one or more S3 buckets that Amazon Macie monitors and analyzes for an account.
* [DescribeClassificationJob](#describeclassificationjob) - Retrieves the status and settings for a classification job.
* [DescribeOrganizationConfiguration](#describeorganizationconfiguration) - Retrieves the Amazon Macie configuration settings for an organization in Organizations.
* [DisableMacie](#disablemacie) - Disables Amazon Macie and deletes all settings and resources for a Macie account.
* [DisableOrganizationAdminAccount](#disableorganizationadminaccount) - Disables an account as the delegated Amazon Macie administrator account for an organization in Organizations.
* [DisassociateFromAdministratorAccount](#disassociatefromadministratoraccount) - Disassociates a member account from its Amazon Macie administrator account.
* [DisassociateFromMasterAccount](#disassociatefrommasteraccount) - (Deprecated) Disassociates a member account from its Amazon Macie administrator account. This operation has been replaced by the <link  linkend="DisassociateFromAdministratorAccount">DisassociateFromAdministratorAccount</link> operation.
* [DisassociateMember](#disassociatemember) - Disassociates an Amazon Macie administrator account from a member account.
* [EnableMacie](#enablemacie) - Enables Amazon Macie and specifies the configuration settings for a Macie account.
* [EnableOrganizationAdminAccount](#enableorganizationadminaccount) - Designates an account as the delegated Amazon Macie administrator account for an organization in Organizations.
* [GetAdministratorAccount](#getadministratoraccount) - Retrieves information about the Amazon Macie administrator account for an account.
* [GetAllowList](#getallowlist) - Retrieves the settings and status of an allow list.
* [GetAutomatedDiscoveryConfiguration](#getautomateddiscoveryconfiguration) - Retrieves the configuration settings and status of automated sensitive data discovery for an account.
* [GetBucketStatistics](#getbucketstatistics) - Retrieves (queries) aggregated statistical data about all the S3 buckets that Amazon Macie monitors and analyzes for an account.
* [GetClassificationExportConfiguration](#getclassificationexportconfiguration) - Retrieves the configuration settings for storing data classification results.
* [GetClassificationScope](#getclassificationscope) - Retrieves the classification scope settings for an account.
* [GetCustomDataIdentifier](#getcustomdataidentifier) - Retrieves the criteria and other settings for a custom data identifier.
* [GetFindingStatistics](#getfindingstatistics) -  <p>Retrieves (queries) aggregated statistical data about findings.</p>
* [GetFindings](#getfindings) - Retrieves the details of one or more findings.
* [GetFindingsFilter](#getfindingsfilter) - Retrieves the criteria and other settings for a findings filter.
* [GetFindingsPublicationConfiguration](#getfindingspublicationconfiguration) - Retrieves the configuration settings for publishing findings to Security Hub.
* [GetInvitationsCount](#getinvitationscount) - Retrieves the count of Amazon Macie membership invitations that were received by an account.
* [GetMacieSession](#getmaciesession) - Retrieves the status and configuration settings for an Amazon Macie account.
* [GetMasterAccount](#getmasteraccount) - (Deprecated) Retrieves information about the Amazon Macie administrator account for an account. This operation has been replaced by the <link  linkend="GetAdministratorAccount">GetAdministratorAccount</link> operation.
* [GetMember](#getmember) - Retrieves information about an account that's associated with an Amazon Macie administrator account.
* [GetResourceProfile](#getresourceprofile) - Retrieves (queries) sensitive data discovery statistics and the sensitivity score for an S3 bucket.
* [GetRevealConfiguration](#getrevealconfiguration) - Retrieves the status and configuration settings for retrieving occurrences of sensitive data reported by findings.
* [GetSensitiveDataOccurrences](#getsensitivedataoccurrences) - Retrieves occurrences of sensitive data reported by a finding.
* [GetSensitiveDataOccurrencesAvailability](#getsensitivedataoccurrencesavailability) - Checks whether occurrences of sensitive data can be retrieved for a finding.
* [GetSensitivityInspectionTemplate](#getsensitivityinspectiontemplate) -  <p>Retrieves the settings for the sensitivity inspection template for an account.</p>
* [GetUsageStatistics](#getusagestatistics) - Retrieves (queries) quotas and aggregated usage data for one or more accounts.
* [GetUsageTotals](#getusagetotals) - Retrieves (queries) aggregated usage data for an account.
* [ListAllowLists](#listallowlists) - Retrieves a subset of information about all the allow lists for an account.
* [ListClassificationJobs](#listclassificationjobs) - Retrieves a subset of information about one or more classification jobs.
* [ListClassificationScopes](#listclassificationscopes) - Retrieves a subset of information about the classification scope for an account.
* [ListCustomDataIdentifiers](#listcustomdataidentifiers) - Retrieves a subset of information about all the custom data identifiers for an account.
* [ListFindings](#listfindings) - Retrieves a subset of information about one or more findings.
* [ListFindingsFilters](#listfindingsfilters) - Retrieves a subset of information about all the findings filters for an account.
* [ListInvitations](#listinvitations) - Retrieves information about the Amazon Macie membership invitations that were received by an account.
* [ListManagedDataIdentifiers](#listmanageddataidentifiers) - Retrieves information about all the managed data identifiers that Amazon Macie currently provides.
* [ListMembers](#listmembers) - Retrieves information about the accounts that are associated with an Amazon Macie administrator account.
* [ListOrganizationAdminAccounts](#listorganizationadminaccounts) - Retrieves information about the delegated Amazon Macie administrator account for an organization in Organizations.
* [ListResourceProfileArtifacts](#listresourceprofileartifacts) - Retrieves information about objects that were selected from an S3 bucket for automated sensitive data discovery.
* [ListResourceProfileDetections](#listresourceprofiledetections) - Retrieves information about the types and amount of sensitive data that Amazon Macie found in an S3 bucket.
* [ListSensitivityInspectionTemplates](#listsensitivityinspectiontemplates) -  <p>Retrieves a subset of information about the sensitivity inspection template for an account.</p>
* [ListTagsForResource](#listtagsforresource) - Retrieves the tags (keys and values) that are associated with an Amazon Macie resource.
* [PutClassificationExportConfiguration](#putclassificationexportconfiguration) - Creates or updates the configuration settings for storing data classification results.
* [PutFindingsPublicationConfiguration](#putfindingspublicationconfiguration) - Updates the configuration settings for publishing findings to Security Hub.
* [SearchResources](#searchresources) - Retrieves (queries) statistical data and other information about Amazon Web Services resources that Amazon Macie monitors and analyzes.
* [TagResource](#tagresource) - Adds or updates one or more tags (keys and values) that are associated with an Amazon Macie resource.
* [TestCustomDataIdentifier](#testcustomdataidentifier) - Tests a custom data identifier.
* [UntagResource](#untagresource) - Removes one or more tags (keys and values) from an Amazon Macie resource.
* [UpdateAllowList](#updateallowlist) - Updates the settings for an allow list.
* [UpdateAutomatedDiscoveryConfiguration](#updateautomateddiscoveryconfiguration) - Enables or disables automated sensitive data discovery for an account.
* [UpdateClassificationJob](#updateclassificationjob) - Changes the status of a classification job.
* [UpdateClassificationScope](#updateclassificationscope) - Updates the classification scope settings for an account.
* [UpdateFindingsFilter](#updatefindingsfilter) - Updates the criteria and other settings for a findings filter.
* [UpdateMacieSession](#updatemaciesession) - Suspends or re-enables Amazon Macie, or updates the configuration settings for a Macie account.
* [UpdateMemberSession](#updatemembersession) - Enables an Amazon Macie administrator to suspend or re-enable Macie for a member account.
* [UpdateOrganizationConfiguration](#updateorganizationconfiguration) - Updates the Amazon Macie configuration settings for an organization in Organizations.
* [UpdateResourceProfile](#updateresourceprofile) - Updates the sensitivity score for an S3 bucket.
* [UpdateResourceProfileDetections](#updateresourceprofiledetections) - Updates the sensitivity scoring settings for an S3 bucket.
* [UpdateRevealConfiguration](#updaterevealconfiguration) - Updates the status and configuration settings for retrieving occurrences of sensitive data reported by findings.
* [UpdateSensitivityInspectionTemplate](#updatesensitivityinspectiontemplate) -  <p>Updates the settings for the sensitivity inspection template for an account.</p>

## AcceptInvitation

Accepts an Amazon Macie membership invitation that was received from a specific account.

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
    res, err := s.SDK.AcceptInvitation(ctx, operations.AcceptInvitationRequest{
        RequestBody: operations.AcceptInvitationRequestBody{
            AdministratorAccountID: sdk.String("deserunt"),
            InvitationID: "suscipit",
            MasterAccount: sdk.String("iure"),
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptInvitationResponse != nil {
        // handle response
    }
}
```

## BatchGetCustomDataIdentifiers

Retrieves information about one or more custom data identifiers.

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
    res, err := s.SDK.BatchGetCustomDataIdentifiers(ctx, operations.BatchGetCustomDataIdentifiersRequest{
        RequestBody: operations.BatchGetCustomDataIdentifiersRequestBody{
            Ids: []string{
                "placeat",
                "voluptatum",
                "iusto",
                "excepturi",
            },
        },
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("deserunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetCustomDataIdentifiersResponse != nil {
        // handle response
    }
}
```

## CreateAllowList

Creates and defines the settings for an allow list.

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
    res, err := s.SDK.CreateAllowList(ctx, operations.CreateAllowListRequest{
        RequestBody: operations.CreateAllowListRequestBody{
            ClientToken: "perferendis",
            Criteria: operations.CreateAllowListRequestBodyCriteria{
                Regex: sdk.String("ipsam"),
                S3WordsList: &shared.S3WordsList{
                    BucketName: "repellendus",
                    ObjectKey: "sapiente",
                },
            },
            Description: sdk.String("quo"),
            Name: "Teri Strosin",
            Tags: map[string]string{
                "quod": "esse",
                "totam": "porro",
                "dolorum": "dicta",
                "nam": "officia",
            },
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("optio"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("beatae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAllowListResponse != nil {
        // handle response
    }
}
```

## CreateClassificationJob

Creates and defines the settings for a classification job.

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
    res, err := s.SDK.CreateClassificationJob(ctx, operations.CreateClassificationJobRequest{
        RequestBody: operations.CreateClassificationJobRequestBody{
            AllowListIds: []string{
                "molestiae",
                "modi",
            },
            ClientToken: "qui",
            CustomDataIdentifierIds: []string{
                "cum",
                "esse",
                "ipsum",
                "excepturi",
            },
            Description: sdk.String("aspernatur"),
            InitialRun: sdk.Bool(false),
            JobType: operations.CreateClassificationJobRequestBodyJobTypeEnumOneTime,
            ManagedDataIdentifierIds: []string{
                "natus",
                "sed",
            },
            ManagedDataIdentifierSelector: operations.CreateClassificationJobRequestBodyManagedDataIdentifierSelectorEnumInclude.ToPointer(),
            Name: "Faye Howe",
            S3JobDefinition: operations.CreateClassificationJobRequestBodyS3JobDefinition{
                BucketCriteria: &shared.S3BucketCriteriaForJob{
                    Excludes: &shared.CriteriaBlockForJob{
                        And: []shared.CriteriaForJob{
                            shared.CriteriaForJob{
                                SimpleCriterion: &shared.SimpleCriterionForJob{
                                    Comparator: shared.JobComparatorEnumLt.ToPointer(),
                                    Key: shared.SimpleCriterionKeyForJobEnumS3BucketName.ToPointer(),
                                    Values: []string{
                                        "iure",
                                        "saepe",
                                        "quidem",
                                    },
                                },
                                TagCriterion: &shared.TagCriterionForJob{
                                    Comparator: shared.JobComparatorEnumEq.ToPointer(),
                                    TagValues: []shared.TagCriterionPairForJob{
                                        shared.TagCriterionPairForJob{
                                            Key: sdk.String("reiciendis"),
                                            Value: sdk.String("est"),
                                        },
                                    },
                                },
                            },
                            shared.CriteriaForJob{
                                SimpleCriterion: &shared.SimpleCriterionForJob{
                                    Comparator: shared.JobComparatorEnumNe.ToPointer(),
                                    Key: shared.SimpleCriterionKeyForJobEnumS3BucketEffectivePermission.ToPointer(),
                                    Values: []string{
                                        "dolorem",
                                    },
                                },
                                TagCriterion: &shared.TagCriterionForJob{
                                    Comparator: shared.JobComparatorEnumGte.ToPointer(),
                                    TagValues: []shared.TagCriterionPairForJob{
                                        shared.TagCriterionPairForJob{
                                            Key: sdk.String("nobis"),
                                            Value: sdk.String("enim"),
                                        },
                                    },
                                },
                            },
                            shared.CriteriaForJob{
                                SimpleCriterion: &shared.SimpleCriterionForJob{
                                    Comparator: shared.JobComparatorEnumLte.ToPointer(),
                                    Key: shared.SimpleCriterionKeyForJobEnumS3BucketName.ToPointer(),
                                    Values: []string{
                                        "excepturi",
                                        "accusantium",
                                    },
                                },
                                TagCriterion: &shared.TagCriterionForJob{
                                    Comparator: shared.JobComparatorEnumLt.ToPointer(),
                                    TagValues: []shared.TagCriterionPairForJob{
                                        shared.TagCriterionPairForJob{
                                            Key: sdk.String("doloribus"),
                                            Value: sdk.String("sapiente"),
                                        },
                                        shared.TagCriterionPairForJob{
                                            Key: sdk.String("architecto"),
                                            Value: sdk.String("mollitia"),
                                        },
                                        shared.TagCriterionPairForJob{
                                            Key: sdk.String("dolorem"),
                                            Value: sdk.String("culpa"),
                                        },
                                    },
                                },
                            },
                        },
                    },
                    Includes: &shared.CriteriaBlockForJob{
                        And: []shared.CriteriaForJob{
                            shared.CriteriaForJob{
                                SimpleCriterion: &shared.SimpleCriterionForJob{
                                    Comparator: shared.JobComparatorEnumStartsWith.ToPointer(),
                                    Key: shared.SimpleCriterionKeyForJobEnumS3BucketEffectivePermission.ToPointer(),
                                    Values: []string{
                                        "numquam",
                                        "commodi",
                                        "quam",
                                    },
                                },
                                TagCriterion: &shared.TagCriterionForJob{
                                    Comparator: shared.JobComparatorEnumLt.ToPointer(),
                                    TagValues: []shared.TagCriterionPairForJob{
                                        shared.TagCriterionPairForJob{
                                            Key: sdk.String("error"),
                                            Value: sdk.String("quia"),
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                BucketDefinitions: []shared.S3BucketDefinitionForJob{
                    shared.S3BucketDefinitionForJob{
                        AccountID: "vitae",
                        Buckets: []string{
                            "animi",
                            "enim",
                            "odit",
                        },
                    },
                    shared.S3BucketDefinitionForJob{
                        AccountID: "quo",
                        Buckets: []string{
                            "tenetur",
                        },
                    },
                },
                Scoping: &shared.Scoping{
                    Excludes: &shared.JobScopingBlock{
                        And: []shared.JobScopeTerm{
                            shared.JobScopeTerm{
                                SimpleScopeTerm: &shared.SimpleScopeTerm{
                                    Comparator: shared.JobComparatorEnumNe.ToPointer(),
                                    Key: shared.ScopeFilterKeyEnumObjectKey.ToPointer(),
                                    Values: []string{
                                        "quasi",
                                    },
                                },
                                TagScopeTerm: &shared.TagScopeTerm{
                                    Comparator: shared.JobComparatorEnumLte.ToPointer(),
                                    Key: sdk.String("temporibus"),
                                    TagValues: []shared.TagValuePair{
                                        shared.TagValuePair{
                                            Key: sdk.String("quasi"),
                                            Value: sdk.String("reiciendis"),
                                        },
                                        shared.TagValuePair{
                                            Key: sdk.String("voluptatibus"),
                                            Value: sdk.String("vero"),
                                        },
                                        shared.TagValuePair{
                                            Key: sdk.String("nihil"),
                                            Value: sdk.String("praesentium"),
                                        },
                                    },
                                    Target: shared.TagTargetEnumS3Object.ToPointer(),
                                },
                            },
                            shared.JobScopeTerm{
                                SimpleScopeTerm: &shared.SimpleScopeTerm{
                                    Comparator: shared.JobComparatorEnumStartsWith.ToPointer(),
                                    Key: shared.ScopeFilterKeyEnumObjectExtension.ToPointer(),
                                    Values: []string{
                                        "voluptate",
                                        "cum",
                                        "perferendis",
                                    },
                                },
                                TagScopeTerm: &shared.TagScopeTerm{
                                    Comparator: shared.JobComparatorEnumEq.ToPointer(),
                                    Key: sdk.String("reprehenderit"),
                                    TagValues: []shared.TagValuePair{
                                        shared.TagValuePair{
                                            Key: sdk.String("maiores"),
                                            Value: sdk.String("dicta"),
                                        },
                                        shared.TagValuePair{
                                            Key: sdk.String("corporis"),
                                            Value: sdk.String("dolore"),
                                        },
                                    },
                                    Target: shared.TagTargetEnumS3Object.ToPointer(),
                                },
                            },
                        },
                    },
                    Includes: &shared.JobScopingBlock{
                        And: []shared.JobScopeTerm{
                            shared.JobScopeTerm{
                                SimpleScopeTerm: &shared.SimpleScopeTerm{
                                    Comparator: shared.JobComparatorEnumEq.ToPointer(),
                                    Key: shared.ScopeFilterKeyEnumObjectSize.ToPointer(),
                                    Values: []string{
                                        "accusamus",
                                        "commodi",
                                    },
                                },
                                TagScopeTerm: &shared.TagScopeTerm{
                                    Comparator: shared.JobComparatorEnumStartsWith.ToPointer(),
                                    Key: sdk.String("quae"),
                                    TagValues: []shared.TagValuePair{
                                        shared.TagValuePair{
                                            Key: sdk.String("quidem"),
                                            Value: sdk.String("molestias"),
                                        },
                                    },
                                    Target: shared.TagTargetEnumS3Object.ToPointer(),
                                },
                            },
                            shared.JobScopeTerm{
                                SimpleScopeTerm: &shared.SimpleScopeTerm{
                                    Comparator: shared.JobComparatorEnumLte.ToPointer(),
                                    Key: shared.ScopeFilterKeyEnumObjectKey.ToPointer(),
                                    Values: []string{
                                        "praesentium",
                                        "rem",
                                    },
                                },
                                TagScopeTerm: &shared.TagScopeTerm{
                                    Comparator: shared.JobComparatorEnumStartsWith.ToPointer(),
                                    Key: sdk.String("quasi"),
                                    TagValues: []shared.TagValuePair{
                                        shared.TagValuePair{
                                            Key: sdk.String("sint"),
                                            Value: sdk.String("veritatis"),
                                        },
                                        shared.TagValuePair{
                                            Key: sdk.String("itaque"),
                                            Value: sdk.String("incidunt"),
                                        },
                                        shared.TagValuePair{
                                            Key: sdk.String("enim"),
                                            Value: sdk.String("consequatur"),
                                        },
                                        shared.TagValuePair{
                                            Key: sdk.String("est"),
                                            Value: sdk.String("quibusdam"),
                                        },
                                    },
                                    Target: shared.TagTargetEnumS3Object.ToPointer(),
                                },
                            },
                        },
                    },
                },
            },
            SamplingPercentage: sdk.Int64(131797),
            ScheduleFrequency: &operations.CreateClassificationJobRequestBodyScheduleFrequency{
                DailySchedule: map[string]interface{}{
                    "distinctio": "quibusdam",
                    "labore": "modi",
                    "qui": "aliquid",
                },
                MonthlySchedule: &shared.MonthlySchedule{
                    DayOfMonth: sdk.Int64(586513),
                },
                WeeklySchedule: &shared.WeeklySchedule{
                    DayOfWeek: shared.DayOfWeekEnumWednesday.ToPointer(),
                },
            },
            Tags: map[string]string{
                "magni": "assumenda",
            },
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("facilis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateClassificationJobResponse != nil {
        // handle response
    }
}
```

## CreateCustomDataIdentifier

Creates and defines the criteria and other settings for a custom data identifier.

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
    res, err := s.SDK.CreateCustomDataIdentifier(ctx, operations.CreateCustomDataIdentifierRequest{
        RequestBody: operations.CreateCustomDataIdentifierRequestBody{
            ClientToken: sdk.String("tempore"),
            Description: sdk.String("labore"),
            IgnoreWords: []string{
                "eum",
                "non",
                "eligendi",
                "sint",
            },
            Keywords: []string{
                "provident",
                "necessitatibus",
            },
            MaximumMatchDistance: sdk.Int64(572252),
            Name: "Curtis Toy",
            Regex: "in",
            SeverityLevels: []shared.SeverityLevel{
                shared.SeverityLevel{
                    OccurrencesThreshold: 846409,
                    Severity: shared.DataIdentifierSeverityEnumHigh,
                },
                shared.SeverityLevel{
                    OccurrencesThreshold: 699479,
                    Severity: shared.DataIdentifierSeverityEnumLow,
                },
            },
            Tags: map[string]string{
                "cumque": "facere",
                "ea": "aliquid",
            },
        },
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

    if res.CreateCustomDataIdentifierResponse != nil {
        // handle response
    }
}
```

## CreateFindingsFilter

Creates and defines the criteria and other settings for a findings filter.

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
    res, err := s.SDK.CreateFindingsFilter(ctx, operations.CreateFindingsFilterRequest{
        RequestBody: operations.CreateFindingsFilterRequestBody{
            Action: operations.CreateFindingsFilterRequestBodyActionEnumNoop,
            ClientToken: sdk.String("provident"),
            Description: sdk.String("nam"),
            FindingCriteria: operations.CreateFindingsFilterRequestBodyFindingCriteria{
                Criterion: map[string]shared.CriterionAdditionalProperties{
                    "blanditiis": shared.CriterionAdditionalProperties{
                        Eq: []string{
                            "sapiente",
                            "amet",
                            "deserunt",
                        },
                        EqExactMatch: []string{
                            "vel",
                            "natus",
                        },
                        Gt: sdk.Int64(606393),
                        Gte: sdk.Int64(474867),
                        Lt: sdk.Int64(19193),
                        Lte: sdk.Int64(470132),
                        Neq: []string{
                            "distinctio",
                            "id",
                        },
                    },
                    "labore": shared.CriterionAdditionalProperties{
                        Eq: []string{
                            "suscipit",
                            "natus",
                        },
                        EqExactMatch: []string{
                            "eum",
                            "vero",
                            "aspernatur",
                        },
                        Gt: sdk.Int64(102863),
                        Gte: sdk.Int64(298282),
                        Lt: sdk.Int64(92373),
                        Lte: sdk.Int64(569965),
                        Neq: []string{
                            "provident",
                            "quos",
                        },
                    },
                    "sint": shared.CriterionAdditionalProperties{
                        Eq: []string{
                            "mollitia",
                        },
                        EqExactMatch: []string{
                            "mollitia",
                            "ad",
                            "eum",
                            "dolor",
                        },
                        Gt: sdk.Int64(896547),
                        Gte: sdk.Int64(141264),
                        Lt: sdk.Int64(367562),
                        Lte: sdk.Int64(97260),
                        Neq: []string{
                            "doloribus",
                            "debitis",
                        },
                    },
                },
            },
            Name: "Jasmine Lind",
            Position: sdk.Int64(100226),
            Tags: map[string]string{
                "repudiandae": "ullam",
            },
        },
        XAmzAlgorithm: sdk.String("expedita"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("repellat"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("pariatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFindingsFilterResponse != nil {
        // handle response
    }
}
```

## CreateInvitations

Sends an Amazon Macie membership invitation to one or more accounts.

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
    res, err := s.SDK.CreateInvitations(ctx, operations.CreateInvitationsRequest{
        RequestBody: operations.CreateInvitationsRequestBody{
            AccountIds: []string{
                "consequuntur",
            },
            DisableEmailNotification: sdk.Bool(false),
            Message: sdk.String("praesentium"),
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("magni"),
        XAmzCredential: sdk.String("sunt"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("maxime"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateInvitationsResponse != nil {
        // handle response
    }
}
```

## CreateMember

Associates an account with an Amazon Macie administrator account.

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
    res, err := s.SDK.CreateMember(ctx, operations.CreateMemberRequest{
        RequestBody: operations.CreateMemberRequestBody{
            Account: operations.CreateMemberRequestBodyAccount{
                AccountID: sdk.String("ea"),
                Email: sdk.String("Brook6@yahoo.com"),
            },
            Tags: map[string]string{
                "quidem": "ipsam",
                "voluptate": "autem",
                "nam": "eaque",
                "pariatur": "nemo",
            },
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("fugiat"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("cumque"),
        XAmzSignedHeaders: sdk.String("corporis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateMemberResponse != nil {
        // handle response
    }
}
```

## CreateSampleFindings

Creates sample findings.

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
    res, err := s.SDK.CreateSampleFindings(ctx, operations.CreateSampleFindingsRequest{
        RequestBody: operations.CreateSampleFindingsRequestBody{
            FindingTypes: []shared.FindingTypeEnum{
                shared.FindingTypeEnumPolicyIamUserS3BucketEncryptionDisabled,
                shared.FindingTypeEnumPolicyIamUserS3BucketEncryptionDisabled,
                shared.FindingTypeEnumSensitiveDataS3ObjectFinancial,
                shared.FindingTypeEnumSensitiveDataS3ObjectCredentials,
            },
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("nesciunt"),
        XAmzSignature: sdk.String("eos"),
        XAmzSignedHeaders: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSampleFindingsResponse != nil {
        // handle response
    }
}
```

## DeclineInvitations

Declines Amazon Macie membership invitations that were received from specific accounts.

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
    res, err := s.SDK.DeclineInvitations(ctx, operations.DeclineInvitationsRequest{
        RequestBody: operations.DeclineInvitationsRequestBody{
            AccountIds: []string{
                "minus",
            },
        },
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

    if res.DeclineInvitationsResponse != nil {
        // handle response
    }
}
```

## DeleteAllowList

Deletes an allow list.

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
    res, err := s.SDK.DeleteAllowList(ctx, operations.DeleteAllowListRequest{
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("perspiciatis"),
        XAmzCredential: sdk.String("voluptatem"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("error"),
        ID: "09b3fe49-a8d9-4cbf-8863-3323f9b77f3a",
        IgnoreJobChecks: sdk.String("numquam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAllowListResponse != nil {
        // handle response
    }
}
```

## DeleteCustomDataIdentifier

Soft deletes a custom data identifier.

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
    res, err := s.SDK.DeleteCustomDataIdentifier(ctx, operations.DeleteCustomDataIdentifierRequest{
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        ID: "bf69280d-1ba7-47a8-9ebf-737ae4203ce5",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteCustomDataIdentifierResponse != nil {
        // handle response
    }
}
```

## DeleteFindingsFilter

Deletes a findings filter.

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
    res, err := s.SDK.DeleteFindingsFilter(ctx, operations.DeleteFindingsFilterRequest{
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("totam"),
        ID: "a0d446ce-2af7-4a73-8f3b-e453f870b326",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteFindingsFilterResponse != nil {
        // handle response
    }
}
```

## DeleteInvitations

Deletes Amazon Macie membership invitations that were received from specific accounts.

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
    res, err := s.SDK.DeleteInvitations(ctx, operations.DeleteInvitationsRequest{
        RequestBody: operations.DeleteInvitationsRequestBody{
            AccountIds: []string{
                "voluptas",
                "deserunt",
                "quam",
            },
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("maxime"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("soluta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteInvitationsResponse != nil {
        // handle response
    }
}
```

## DeleteMember

Deletes the association between an Amazon Macie administrator account and an account.

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
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("dolores"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        ID: "b679d232-2715-4bf0-8bb1-e31b8b90f344",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteMemberResponse != nil {
        // handle response
    }
}
```

## DescribeBuckets

Retrieves (queries) statistical data and other information about one or more S3 buckets that Amazon Macie monitors and analyzes for an account.

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
    res, err := s.SDK.DescribeBuckets(ctx, operations.DescribeBucketsRequest{
        RequestBody: operations.DescribeBucketsRequestBody{
            Criteria: map[string]shared.BucketCriteriaAdditionalProperties{
                "dolorum": shared.BucketCriteriaAdditionalProperties{
                    Eq: []string{
                        "quae",
                    },
                    Gt: sdk.Int64(16429),
                    Gte: sdk.Int64(555649),
                    Lt: sdk.Int64(929530),
                    Lte: sdk.Int64(9240),
                    Neq: []string{
                        "repellendus",
                        "porro",
                        "doloribus",
                    },
                    Prefix: sdk.String("ut"),
                },
            },
            MaxResults: sdk.Int64(703495),
            NextToken: sdk.String("cupiditate"),
            SortCriteria: &operations.DescribeBucketsRequestBodySortCriteria{
                AttributeName: sdk.String("qui"),
                OrderBy: shared.OrderByEnumAsc.ToPointer(),
            },
        },
        XAmzAlgorithm: sdk.String("laudantium"),
        XAmzContentSha256: sdk.String("odio"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("omnis"),
        MaxResults: sdk.String("quis"),
        NextToken: sdk.String("ipsum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeBucketsResponse != nil {
        // handle response
    }
}
```

## DescribeClassificationJob

Retrieves the status and settings for a classification job.

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
    res, err := s.SDK.DescribeClassificationJob(ctx, operations.DescribeClassificationJobRequest{
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("hic"),
        JobID: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeClassificationJobResponse != nil {
        // handle response
    }
}
```

## DescribeOrganizationConfiguration

Retrieves the Amazon Macie configuration settings for an organization in Organizations.

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
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("odio"),
        XAmzCredential: sdk.String("similique"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("ducimus"),
        XAmzSignedHeaders: sdk.String("dolore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeOrganizationConfigurationResponse != nil {
        // handle response
    }
}
```

## DisableMacie

Disables Amazon Macie and deletes all settings and resources for a Macie account.

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
    res, err := s.SDK.DisableMacie(ctx, operations.DisableMacieRequest{
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("sequi"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("impedit"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisableMacieResponse != nil {
        // handle response
    }
}
```

## DisableOrganizationAdminAccount

Disables an account as the delegated Amazon Macie administrator account for an organization in Organizations.

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
    res, err := s.SDK.DisableOrganizationAdminAccount(ctx, operations.DisableOrganizationAdminAccountRequest{
        XAmzAlgorithm: sdk.String("exercitationem"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("doloribus"),
        XAmzSignedHeaders: sdk.String("iusto"),
        AdminAccountID: "eligendi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisableOrganizationAdminAccountResponse != nil {
        // handle response
    }
}
```

## DisassociateFromAdministratorAccount

Disassociates a member account from its Amazon Macie administrator account.

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
    res, err := s.SDK.DisassociateFromAdministratorAccount(ctx, operations.DisassociateFromAdministratorAccountRequest{
        XAmzAlgorithm: sdk.String("ducimus"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateFromAdministratorAccountResponse != nil {
        // handle response
    }
}
```

## DisassociateFromMasterAccount

(Deprecated) Disassociates a member account from its Amazon Macie administrator account. This operation has been replaced by the <link  linkend="DisassociateFromAdministratorAccount">DisassociateFromAdministratorAccount</link> operation.

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
    res, err := s.SDK.DisassociateFromMasterAccount(ctx, operations.DisassociateFromMasterAccountRequest{
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("possimus"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("ratione"),
        XAmzSecurityToken: sdk.String("ex"),
        XAmzSignature: sdk.String("laudantium"),
        XAmzSignedHeaders: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateFromMasterAccountResponse != nil {
        // handle response
    }
}
```

## DisassociateMember

Disassociates an Amazon Macie administrator account from a member account.

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
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("ex"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        ID: "5fce6c55-6146-4c3e-a50f-b008c42e141a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateMemberResponse != nil {
        // handle response
    }
}
```

## EnableMacie

Enables Amazon Macie and specifies the configuration settings for a Macie account.

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
    res, err := s.SDK.EnableMacie(ctx, operations.EnableMacieRequest{
        RequestBody: operations.EnableMacieRequestBody{
            ClientToken: sdk.String("laborum"),
            FindingPublishingFrequency: operations.EnableMacieRequestBodyFindingPublishingFrequencyEnumSixHours.ToPointer(),
            Status: operations.EnableMacieRequestBodyStatusEnumPaused.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("autem"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("quas"),
        XAmzSecurityToken: sdk.String("assumenda"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("voluptas"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnableMacieResponse != nil {
        // handle response
    }
}
```

## EnableOrganizationAdminAccount

Designates an account as the delegated Amazon Macie administrator account for an organization in Organizations.

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
    res, err := s.SDK.EnableOrganizationAdminAccount(ctx, operations.EnableOrganizationAdminAccountRequest{
        RequestBody: operations.EnableOrganizationAdminAccountRequestBody{
            AdminAccountID: "libero",
            ClientToken: sdk.String("quasi"),
        },
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnableOrganizationAdminAccountResponse != nil {
        // handle response
    }
}
```

## GetAdministratorAccount

Retrieves information about the Amazon Macie administrator account for an account.

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
    res, err := s.SDK.GetAdministratorAccount(ctx, operations.GetAdministratorAccountRequest{
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("rem"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("reprehenderit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAdministratorAccountResponse != nil {
        // handle response
    }
}
```

## GetAllowList

Retrieves the settings and status of an allow list.

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
    res, err := s.SDK.GetAllowList(ctx, operations.GetAllowListRequest{
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("fugiat"),
        XAmzCredential: sdk.String("ut"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("assumenda"),
        XAmzSignedHeaders: sdk.String("eos"),
        ID: "8c10ab3c-dca4-4251-904e-523c7e0bc717",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAllowListResponse != nil {
        // handle response
    }
}
```

## GetAutomatedDiscoveryConfiguration

Retrieves the configuration settings and status of automated sensitive data discovery for an account.

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
    res, err := s.SDK.GetAutomatedDiscoveryConfiguration(ctx, operations.GetAutomatedDiscoveryConfigurationRequest{
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("aliquam"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAutomatedDiscoveryConfigurationResponse != nil {
        // handle response
    }
}
```

## GetBucketStatistics

Retrieves (queries) aggregated statistical data about all the S3 buckets that Amazon Macie monitors and analyzes for an account.

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
    res, err := s.SDK.GetBucketStatistics(ctx, operations.GetBucketStatisticsRequest{
        RequestBody: operations.GetBucketStatisticsRequestBody{
            AccountID: sdk.String("dolores"),
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("quas"),
        XAmzSignedHeaders: sdk.String("praesentium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBucketStatisticsResponse != nil {
        // handle response
    }
}
```

## GetClassificationExportConfiguration

Retrieves the configuration settings for storing data classification results.

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
    res, err := s.SDK.GetClassificationExportConfiguration(ctx, operations.GetClassificationExportConfigurationRequest{
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("fuga"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("atque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetClassificationExportConfigurationResponse != nil {
        // handle response
    }
}
```

## GetClassificationScope

Retrieves the classification scope settings for an account.

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
    res, err := s.SDK.GetClassificationScope(ctx, operations.GetClassificationScopeRequest{
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("nisi"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("ratione"),
        ID: "2e9817ee-17cb-4e61-a6b7-b95bc0ab3c20",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetClassificationScopeResponse != nil {
        // handle response
    }
}
```

## GetCustomDataIdentifier

Retrieves the criteria and other settings for a custom data identifier.

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
    res, err := s.SDK.GetCustomDataIdentifier(ctx, operations.GetCustomDataIdentifierRequest{
        XAmzAlgorithm: sdk.String("minus"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("consectetur"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("provident"),
        ID: "fd871f99-dd2e-4fd1-a1aa-6f1e674bdb04",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCustomDataIdentifierResponse != nil {
        // handle response
    }
}
```

## GetFindingStatistics

 <p>Retrieves (queries) aggregated statistical data about findings.</p>

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
    res, err := s.SDK.GetFindingStatistics(ctx, operations.GetFindingStatisticsRequest{
        RequestBody: operations.GetFindingStatisticsRequestBody{
            FindingCriteria: &operations.GetFindingStatisticsRequestBodyFindingCriteria{
                Criterion: map[string]shared.CriterionAdditionalProperties{
                    "dicta": shared.CriterionAdditionalProperties{
                        Eq: []string{
                            "reprehenderit",
                            "ullam",
                        },
                        EqExactMatch: []string{
                            "aut",
                            "voluptatum",
                        },
                        Gt: sdk.Int64(185232),
                        Gte: sdk.Int64(845358),
                        Lt: sdk.Int64(401259),
                        Lte: sdk.Int64(536275),
                        Neq: []string{
                            "dolorum",
                            "architecto",
                            "omnis",
                            "tenetur",
                        },
                    },
                    "quasi": shared.CriterionAdditionalProperties{
                        Eq: []string{
                            "et",
                            "voluptate",
                            "ipsa",
                            "minima",
                        },
                        EqExactMatch: []string{
                            "consectetur",
                        },
                        Gt: sdk.Int64(237173),
                        Gte: sdk.Int64(614465),
                        Lt: sdk.Int64(839513),
                        Lte: sdk.Int64(33074),
                        Neq: []string{
                            "aut",
                            "laudantium",
                            "eum",
                        },
                    },
                    "mollitia": shared.CriterionAdditionalProperties{
                        Eq: []string{
                            "corrupti",
                        },
                        EqExactMatch: []string{
                            "voluptatem",
                            "dolor",
                        },
                        Gt: sdk.Int64(580152),
                        Gte: sdk.Int64(253191),
                        Lt: sdk.Int64(771089),
                        Lte: sdk.Int64(131055),
                        Neq: []string{
                            "aut",
                            "dignissimos",
                        },
                    },
                    "dicta": shared.CriterionAdditionalProperties{
                        Eq: []string{
                            "natus",
                            "velit",
                            "voluptatibus",
                            "voluptas",
                        },
                        EqExactMatch: []string{
                            "aperiam",
                            "ea",
                            "quaerat",
                            "consequuntur",
                        },
                        Gt: sdk.Int64(831520),
                        Gte: sdk.Int64(638762),
                        Lt: sdk.Int64(807023),
                        Lte: sdk.Int64(490305),
                        Neq: []string{
                            "asperiores",
                            "nemo",
                            "quae",
                        },
                    },
                },
            },
            GroupBy: operations.GetFindingStatisticsRequestBodyGroupByEnumType,
            Size: sdk.Int64(783235),
            SortCriteria: &operations.GetFindingStatisticsRequestBodySortCriteria{
                AttributeName: shared.FindingStatisticsSortAttributeNameEnumCount.ToPointer(),
                OrderBy: shared.OrderByEnumAsc.ToPointer(),
            },
        },
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("fuga"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("culpa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFindingStatisticsResponse != nil {
        // handle response
    }
}
```

## GetFindings

Retrieves the details of one or more findings.

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
    res, err := s.SDK.GetFindings(ctx, operations.GetFindingsRequest{
        RequestBody: operations.GetFindingsRequestBody{
            FindingIds: []string{
                "recusandae",
                "totam",
                "fugiat",
            },
            SortCriteria: &operations.GetFindingsRequestBodySortCriteria{
                AttributeName: sdk.String("vel"),
                OrderBy: shared.OrderByEnumAsc.ToPointer(),
            },
        },
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("possimus"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("commodi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFindingsResponse != nil {
        // handle response
    }
}
```

## GetFindingsFilter

Retrieves the criteria and other settings for a findings filter.

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
    res, err := s.SDK.GetFindingsFilter(ctx, operations.GetFindingsFilterRequest{
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("assumenda"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        ID: "0b375ed4-f6fb-4ee4-9f33-317fe35b60eb",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFindingsFilterResponse != nil {
        // handle response
    }
}
```

## GetFindingsPublicationConfiguration

Retrieves the configuration settings for publishing findings to Security Hub.

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
    res, err := s.SDK.GetFindingsPublicationConfiguration(ctx, operations.GetFindingsPublicationConfigurationRequest{
        XAmzAlgorithm: sdk.String("vitae"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("similique"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("voluptas"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFindingsPublicationConfigurationResponse != nil {
        // handle response
    }
}
```

## GetInvitationsCount

Retrieves the count of Amazon Macie membership invitations that were received by an account.

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
    res, err := s.SDK.GetInvitationsCount(ctx, operations.GetInvitationsCountRequest{
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("dolores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInvitationsCountResponse != nil {
        // handle response
    }
}
```

## GetMacieSession

Retrieves the status and configuration settings for an Amazon Macie account.

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
    res, err := s.SDK.GetMacieSession(ctx, operations.GetMacieSessionRequest{
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("aliquam"),
        XAmzSecurityToken: sdk.String("officiis"),
        XAmzSignature: sdk.String("temporibus"),
        XAmzSignedHeaders: sdk.String("ullam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMacieSessionResponse != nil {
        // handle response
    }
}
```

## GetMasterAccount

(Deprecated) Retrieves information about the Amazon Macie administrator account for an account. This operation has been replaced by the <link  linkend="GetAdministratorAccount">GetAdministratorAccount</link> operation.

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
    res, err := s.SDK.GetMasterAccount(ctx, operations.GetMasterAccountRequest{
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("quas"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("nesciunt"),
        XAmzSignedHeaders: sdk.String("culpa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMasterAccountResponse != nil {
        // handle response
    }
}
```

## GetMember

Retrieves information about an account that's associated with an Amazon Macie administrator account.

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
        XAmzAlgorithm: sdk.String("corrupti"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("exercitationem"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("sit"),
        ID: "b2f2fb7b-194a-4276-b269-16fe1f08f429",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMemberResponse != nil {
        // handle response
    }
}
```

## GetResourceProfile

Retrieves (queries) sensitive data discovery statistics and the sensitivity score for an S3 bucket.

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
    res, err := s.SDK.GetResourceProfile(ctx, operations.GetResourceProfileRequest{
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("necessitatibus"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        ResourceArn: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetResourceProfileResponse != nil {
        // handle response
    }
}
```

## GetRevealConfiguration

Retrieves the status and configuration settings for retrieving occurrences of sensitive data reported by findings.

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
    res, err := s.SDK.GetRevealConfiguration(ctx, operations.GetRevealConfigurationRequest{
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("ex"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("non"),
        XAmzSignedHeaders: sdk.String("officiis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRevealConfigurationResponse != nil {
        // handle response
    }
}
```

## GetSensitiveDataOccurrences

Retrieves occurrences of sensitive data reported by a finding.

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
    res, err := s.SDK.GetSensitiveDataOccurrences(ctx, operations.GetSensitiveDataOccurrencesRequest{
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("quaerat"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("rem"),
        FindingID: "sit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSensitiveDataOccurrencesResponse != nil {
        // handle response
    }
}
```

## GetSensitiveDataOccurrencesAvailability

Checks whether occurrences of sensitive data can be retrieved for a finding.

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
    res, err := s.SDK.GetSensitiveDataOccurrencesAvailability(ctx, operations.GetSensitiveDataOccurrencesAvailabilityRequest{
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("veniam"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("nulla"),
        FindingID: "magni",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSensitiveDataOccurrencesAvailabilityResponse != nil {
        // handle response
    }
}
```

## GetSensitivityInspectionTemplate

 <p>Retrieves the settings for the sensitivity inspection template for an account.</p>

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
    res, err := s.SDK.GetSensitivityInspectionTemplate(ctx, operations.GetSensitivityInspectionTemplateRequest{
        XAmzAlgorithm: sdk.String("aperiam"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("veniam"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("officiis"),
        XAmzSignedHeaders: sdk.String("beatae"),
        ID: "858b6a89-fbe3-4a5a-a8e4-824d0ab40750",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSensitivityInspectionTemplateResponse != nil {
        // handle response
    }
}
```

## GetUsageStatistics

Retrieves (queries) quotas and aggregated usage data for one or more accounts.

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
    res, err := s.SDK.GetUsageStatistics(ctx, operations.GetUsageStatisticsRequest{
        RequestBody: operations.GetUsageStatisticsRequestBody{
            FilterBy: []shared.UsageStatisticsFilter{
                shared.UsageStatisticsFilter{
                    Comparator: shared.UsageStatisticsFilterComparatorEnumLte.ToPointer(),
                    Key: shared.UsageStatisticsFilterKeyEnumTotal.ToPointer(),
                    Values: []string{
                        "et",
                        "blanditiis",
                    },
                },
                shared.UsageStatisticsFilter{
                    Comparator: shared.UsageStatisticsFilterComparatorEnumLt.ToPointer(),
                    Key: shared.UsageStatisticsFilterKeyEnumAccountID.ToPointer(),
                    Values: []string{
                        "vel",
                    },
                },
                shared.UsageStatisticsFilter{
                    Comparator: shared.UsageStatisticsFilterComparatorEnumLt.ToPointer(),
                    Key: shared.UsageStatisticsFilterKeyEnumTotal.ToPointer(),
                    Values: []string{
                        "consequatur",
                        "incidunt",
                        "reiciendis",
                    },
                },
            },
            MaxResults: sdk.Int64(209750),
            NextToken: sdk.String("harum"),
            SortBy: &operations.GetUsageStatisticsRequestBodySortBy{
                Key: shared.UsageStatisticsSortKeyEnumAccountID.ToPointer(),
                OrderBy: shared.OrderByEnumAsc.ToPointer(),
            },
            TimeRange: operations.GetUsageStatisticsRequestBodyTimeRangeEnumPast30Days.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("atque"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("laboriosam"),
        MaxResults: sdk.String("alias"),
        NextToken: sdk.String("amet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUsageStatisticsResponse != nil {
        // handle response
    }
}
```

## GetUsageTotals

Retrieves (queries) aggregated usage data for an account.

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
    res, err := s.SDK.GetUsageTotals(ctx, operations.GetUsageTotalsRequest{
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("unde"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("delectus"),
        TimeRange: sdk.String("voluptates"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUsageTotalsResponse != nil {
        // handle response
    }
}
```

## ListAllowLists

Retrieves a subset of information about all the allow lists for an account.

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
    res, err := s.SDK.ListAllowLists(ctx, operations.ListAllowListsRequest{
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("reprehenderit"),
        XAmzSecurityToken: sdk.String("facere"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("praesentium"),
        MaxResults: sdk.Int64(648598),
        NextToken: sdk.String("veniam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAllowListsResponse != nil {
        // handle response
    }
}
```

## ListClassificationJobs

Retrieves a subset of information about one or more classification jobs.

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
    res, err := s.SDK.ListClassificationJobs(ctx, operations.ListClassificationJobsRequest{
        RequestBody: operations.ListClassificationJobsRequestBody{
            FilterCriteria: &operations.ListClassificationJobsRequestBodyFilterCriteria{
                Excludes: []shared.ListJobsFilterTerm{
                    shared.ListJobsFilterTerm{
                        Comparator: shared.JobComparatorEnumContains.ToPointer(),
                        Key: shared.ListJobsFilterKeyEnumName.ToPointer(),
                        Values: []string{
                            "atque",
                        },
                    },
                },
                Includes: []shared.ListJobsFilterTerm{
                    shared.ListJobsFilterTerm{
                        Comparator: shared.JobComparatorEnumStartsWith.ToPointer(),
                        Key: shared.ListJobsFilterKeyEnumCreatedAt.ToPointer(),
                        Values: []string{
                            "quidem",
                            "maxime",
                        },
                    },
                    shared.ListJobsFilterTerm{
                        Comparator: shared.JobComparatorEnumEq.ToPointer(),
                        Key: shared.ListJobsFilterKeyEnumJobStatus.ToPointer(),
                        Values: []string{
                            "assumenda",
                        },
                    },
                },
            },
            MaxResults: sdk.Int64(410301),
            NextToken: sdk.String("atque"),
            SortCriteria: &operations.ListClassificationJobsRequestBodySortCriteria{
                AttributeName: shared.ListJobsSortAttributeNameEnumName.ToPointer(),
                OrderBy: shared.OrderByEnumDesc.ToPointer(),
            },
        },
        XAmzAlgorithm: sdk.String("officiis"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("ex"),
        XAmzSignedHeaders: sdk.String("maiores"),
        MaxResults: sdk.String("corrupti"),
        NextToken: sdk.String("at"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListClassificationJobsResponse != nil {
        // handle response
    }
}
```

## ListClassificationScopes

Retrieves a subset of information about the classification scope for an account.

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
    res, err := s.SDK.ListClassificationScopes(ctx, operations.ListClassificationScopesRequest{
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("blanditiis"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("repudiandae"),
        XAmzSecurityToken: sdk.String("atque"),
        XAmzSignature: sdk.String("atque"),
        XAmzSignedHeaders: sdk.String("sunt"),
        Name: sdk.String("Wilbur Simonis"),
        NextToken: sdk.String("doloremque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListClassificationScopesResponse != nil {
        // handle response
    }
}
```

## ListCustomDataIdentifiers

Retrieves a subset of information about all the custom data identifiers for an account.

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
    res, err := s.SDK.ListCustomDataIdentifiers(ctx, operations.ListCustomDataIdentifiersRequest{
        RequestBody: operations.ListCustomDataIdentifiersRequestBody{
            MaxResults: sdk.Int64(919783),
            NextToken: sdk.String("dicta"),
        },
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("beatae"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("laboriosam"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("a"),
        MaxResults: sdk.String("molestias"),
        NextToken: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCustomDataIdentifiersResponse != nil {
        // handle response
    }
}
```

## ListFindings

Retrieves a subset of information about one or more findings.

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
    res, err := s.SDK.ListFindings(ctx, operations.ListFindingsRequest{
        RequestBody: operations.ListFindingsRequestBody{
            FindingCriteria: &operations.ListFindingsRequestBodyFindingCriteria{
                Criterion: map[string]shared.CriterionAdditionalProperties{
                    "consequuntur": shared.CriterionAdditionalProperties{
                        Eq: []string{
                            "officiis",
                            "perspiciatis",
                            "in",
                        },
                        EqExactMatch: []string{
                            "eveniet",
                        },
                        Gt: sdk.Int64(580887),
                        Gte: sdk.Int64(160230),
                        Lt: sdk.Int64(145870),
                        Lte: sdk.Int64(661118),
                        Neq: []string{
                            "reprehenderit",
                            "error",
                        },
                    },
                    "illo": shared.CriterionAdditionalProperties{
                        Eq: []string{
                            "quidem",
                            "eveniet",
                        },
                        EqExactMatch: []string{
                            "vero",
                        },
                        Gt: sdk.Int64(39615),
                        Gte: sdk.Int64(434156),
                        Lt: sdk.Int64(59944),
                        Lte: sdk.Int64(517612),
                        Neq: []string{
                            "molestiae",
                        },
                    },
                    "eveniet": shared.CriterionAdditionalProperties{
                        Eq: []string{
                            "cum",
                        },
                        EqExactMatch: []string{
                            "necessitatibus",
                            "ratione",
                        },
                        Gt: sdk.Int64(672582),
                        Gte: sdk.Int64(715208),
                        Lt: sdk.Int64(528940),
                        Lte: sdk.Int64(523006),
                        Neq: []string{
                            "ad",
                            "repellat",
                        },
                    },
                    "alias": shared.CriterionAdditionalProperties{
                        Eq: []string{
                            "perspiciatis",
                            "nihil",
                        },
                        EqExactMatch: []string{
                            "voluptas",
                            "alias",
                            "maiores",
                        },
                        Gt: sdk.Int64(970222),
                        Gte: sdk.Int64(174658),
                        Lt: sdk.Int64(663866),
                        Lte: sdk.Int64(327988),
                        Neq: []string{
                            "dolorum",
                            "nesciunt",
                        },
                    },
                },
            },
            MaxResults: sdk.Int64(63207),
            NextToken: sdk.String("recusandae"),
            SortCriteria: &operations.ListFindingsRequestBodySortCriteria{
                AttributeName: sdk.String("omnis"),
                OrderBy: shared.OrderByEnumAsc.ToPointer(),
            },
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("ex"),
        XAmzCredential: sdk.String("ut"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("laudantium"),
        MaxResults: sdk.String("eum"),
        NextToken: sdk.String("nemo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFindingsResponse != nil {
        // handle response
    }
}
```

## ListFindingsFilters

Retrieves a subset of information about all the findings filters for an account.

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
    res, err := s.SDK.ListFindingsFilters(ctx, operations.ListFindingsFiltersRequest{
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("provident"),
        MaxResults: sdk.Int64(133439),
        NextToken: sdk.String("ullam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFindingsFiltersResponse != nil {
        // handle response
    }
}
```

## ListInvitations

Retrieves information about the Amazon Macie membership invitations that were received by an account.

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
    res, err := s.SDK.ListInvitations(ctx, operations.ListInvitationsRequest{
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("animi"),
        XAmzCredential: sdk.String("nostrum"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("possimus"),
        XAmzSignedHeaders: sdk.String("animi"),
        MaxResults: sdk.Int64(402767),
        NextToken: sdk.String("aliquid"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInvitationsResponse != nil {
        // handle response
    }
}
```

## ListManagedDataIdentifiers

Retrieves information about all the managed data identifiers that Amazon Macie currently provides.

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
    res, err := s.SDK.ListManagedDataIdentifiers(ctx, operations.ListManagedDataIdentifiersRequest{
        RequestBody: operations.ListManagedDataIdentifiersRequestBody{
            NextToken: sdk.String("accusantium"),
        },
        XAmzAlgorithm: sdk.String("repellat"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("earum"),
        XAmzSignedHeaders: sdk.String("officia"),
        NextToken: sdk.String("laborum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListManagedDataIdentifiersResponse != nil {
        // handle response
    }
}
```

## ListMembers

Retrieves information about the accounts that are associated with an Amazon Macie administrator account.

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
        XAmzAlgorithm: sdk.String("placeat"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("molestias"),
        XAmzSecurityToken: sdk.String("officiis"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("cumque"),
        MaxResults: sdk.Int64(113486),
        NextToken: sdk.String("rerum"),
        OnlyAssociated: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMembersResponse != nil {
        // handle response
    }
}
```

## ListOrganizationAdminAccounts

Retrieves information about the delegated Amazon Macie administrator account for an organization in Organizations.

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
    res, err := s.SDK.ListOrganizationAdminAccounts(ctx, operations.ListOrganizationAdminAccountsRequest{
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("inventore"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("cumque"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("velit"),
        MaxResults: sdk.Int64(137251),
        NextToken: sdk.String("eum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOrganizationAdminAccountsResponse != nil {
        // handle response
    }
}
```

## ListResourceProfileArtifacts

Retrieves information about objects that were selected from an S3 bucket for automated sensitive data discovery.

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
    res, err := s.SDK.ListResourceProfileArtifacts(ctx, operations.ListResourceProfileArtifactsRequest{
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("rem"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("eum"),
        NextToken: sdk.String("dicta"),
        ResourceArn: "minima",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListResourceProfileArtifactsResponse != nil {
        // handle response
    }
}
```

## ListResourceProfileDetections

Retrieves information about the types and amount of sensitive data that Amazon Macie found in an S3 bucket.

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
    res, err := s.SDK.ListResourceProfileDetections(ctx, operations.ListResourceProfileDetectionsRequest{
        XAmzAlgorithm: sdk.String("beatae"),
        XAmzContentSha256: sdk.String("cupiditate"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("earum"),
        XAmzSecurityToken: sdk.String("soluta"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("illum"),
        MaxResults: sdk.Int64(52508),
        NextToken: sdk.String("earum"),
        ResourceArn: "perspiciatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListResourceProfileDetectionsResponse != nil {
        // handle response
    }
}
```

## ListSensitivityInspectionTemplates

 <p>Retrieves a subset of information about the sensitivity inspection template for an account.</p>

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
    res, err := s.SDK.ListSensitivityInspectionTemplates(ctx, operations.ListSensitivityInspectionTemplatesRequest{
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("fugit"),
        MaxResults: sdk.Int64(764995),
        NextToken: sdk.String("fuga"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSensitivityInspectionTemplatesResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Retrieves the tags (keys and values) that are associated with an Amazon Macie resource.

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
        XAmzAlgorithm: sdk.String("ratione"),
        XAmzContentSha256: sdk.String("animi"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("nulla"),
        XAmzSecurityToken: sdk.String("consequatur"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("et"),
        ResourceArn: "ducimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## PutClassificationExportConfiguration

Creates or updates the configuration settings for storing data classification results.

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
    res, err := s.SDK.PutClassificationExportConfiguration(ctx, operations.PutClassificationExportConfigurationRequest{
        RequestBody: operations.PutClassificationExportConfigurationRequestBody{
            Configuration: operations.PutClassificationExportConfigurationRequestBodyConfiguration{
                S3Destination: &shared.S3Destination{
                    BucketName: "natus",
                    KeyPrefix: sdk.String("occaecati"),
                    KmsKeyArn: "suscipit",
                },
            },
        },
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("magni"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutClassificationExportConfigurationResponse != nil {
        // handle response
    }
}
```

## PutFindingsPublicationConfiguration

Updates the configuration settings for publishing findings to Security Hub.

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
    res, err := s.SDK.PutFindingsPublicationConfiguration(ctx, operations.PutFindingsPublicationConfigurationRequest{
        RequestBody: operations.PutFindingsPublicationConfigurationRequestBody{
            ClientToken: sdk.String("tempora"),
            SecurityHubConfiguration: &operations.PutFindingsPublicationConfigurationRequestBodySecurityHubConfiguration{
                PublishClassificationFindings: sdk.Bool(false),
                PublishPolicyFindings: sdk.Bool(false),
            },
        },
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutFindingsPublicationConfigurationResponse != nil {
        // handle response
    }
}
```

## SearchResources

Retrieves (queries) statistical data and other information about Amazon Web Services resources that Amazon Macie monitors and analyzes.

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
    res, err := s.SDK.SearchResources(ctx, operations.SearchResourcesRequest{
        RequestBody: operations.SearchResourcesRequestBody{
            BucketCriteria: &operations.SearchResourcesRequestBodyBucketCriteria{
                Excludes: &shared.SearchResourcesCriteriaBlock{
                    And: []shared.SearchResourcesCriteria{
                        shared.SearchResourcesCriteria{
                            SimpleCriterion: &shared.SearchResourcesSimpleCriterion{
                                Comparator: shared.SearchResourcesComparatorEnumEq.ToPointer(),
                                Key: shared.SearchResourcesSimpleCriterionKeyEnumAccountID.ToPointer(),
                                Values: []string{
                                    "doloremque",
                                    "dicta",
                                    "odio",
                                    "tempora",
                                },
                            },
                            TagCriterion: &shared.SearchResourcesTagCriterion{
                                Comparator: shared.SearchResourcesComparatorEnumEq.ToPointer(),
                                TagValues: []shared.SearchResourcesTagCriterionPair{
                                    shared.SearchResourcesTagCriterionPair{
                                        Key: sdk.String("consectetur"),
                                        Value: sdk.String("aliquid"),
                                    },
                                    shared.SearchResourcesTagCriterionPair{
                                        Key: sdk.String("ipsa"),
                                        Value: sdk.String("laborum"),
                                    },
                                },
                            },
                        },
                        shared.SearchResourcesCriteria{
                            SimpleCriterion: &shared.SearchResourcesSimpleCriterion{
                                Comparator: shared.SearchResourcesComparatorEnumEq.ToPointer(),
                                Key: shared.SearchResourcesSimpleCriterionKeyEnumS3BucketName.ToPointer(),
                                Values: []string{
                                    "expedita",
                                    "aliquid",
                                    "officia",
                                    "suscipit",
                                },
                            },
                            TagCriterion: &shared.SearchResourcesTagCriterion{
                                Comparator: shared.SearchResourcesComparatorEnumEq.ToPointer(),
                                TagValues: []shared.SearchResourcesTagCriterionPair{
                                    shared.SearchResourcesTagCriterionPair{
                                        Key: sdk.String("eum"),
                                        Value: sdk.String("voluptas"),
                                    },
                                },
                            },
                        },
                        shared.SearchResourcesCriteria{
                            SimpleCriterion: &shared.SearchResourcesSimpleCriterion{
                                Comparator: shared.SearchResourcesComparatorEnumNe.ToPointer(),
                                Key: shared.SearchResourcesSimpleCriterionKeyEnumS3BucketEffectivePermission.ToPointer(),
                                Values: []string{
                                    "error",
                                },
                            },
                            TagCriterion: &shared.SearchResourcesTagCriterion{
                                Comparator: shared.SearchResourcesComparatorEnumNe.ToPointer(),
                                TagValues: []shared.SearchResourcesTagCriterionPair{
                                    shared.SearchResourcesTagCriterionPair{
                                        Key: sdk.String("mollitia"),
                                        Value: sdk.String("laborum"),
                                    },
                                    shared.SearchResourcesTagCriterionPair{
                                        Key: sdk.String("libero"),
                                        Value: sdk.String("ad"),
                                    },
                                    shared.SearchResourcesTagCriterionPair{
                                        Key: sdk.String("deleniti"),
                                        Value: sdk.String("enim"),
                                    },
                                    shared.SearchResourcesTagCriterionPair{
                                        Key: sdk.String("vitae"),
                                        Value: sdk.String("repellendus"),
                                    },
                                },
                            },
                        },
                        shared.SearchResourcesCriteria{
                            SimpleCriterion: &shared.SearchResourcesSimpleCriterion{
                                Comparator: shared.SearchResourcesComparatorEnumEq.ToPointer(),
                                Key: shared.SearchResourcesSimpleCriterionKeyEnumS3BucketSharedAccess.ToPointer(),
                                Values: []string{
                                    "ut",
                                    "ad",
                                },
                            },
                            TagCriterion: &shared.SearchResourcesTagCriterion{
                                Comparator: shared.SearchResourcesComparatorEnumNe.ToPointer(),
                                TagValues: []shared.SearchResourcesTagCriterionPair{
                                    shared.SearchResourcesTagCriterionPair{
                                        Key: sdk.String("molestias"),
                                        Value: sdk.String("cum"),
                                    },
                                },
                            },
                        },
                    },
                },
                Includes: &shared.SearchResourcesCriteriaBlock{
                    And: []shared.SearchResourcesCriteria{
                        shared.SearchResourcesCriteria{
                            SimpleCriterion: &shared.SearchResourcesSimpleCriterion{
                                Comparator: shared.SearchResourcesComparatorEnumEq.ToPointer(),
                                Key: shared.SearchResourcesSimpleCriterionKeyEnumS3BucketEffectivePermission.ToPointer(),
                                Values: []string{
                                    "veritatis",
                                    "rerum",
                                    "est",
                                },
                            },
                            TagCriterion: &shared.SearchResourcesTagCriterion{
                                Comparator: shared.SearchResourcesComparatorEnumNe.ToPointer(),
                                TagValues: []shared.SearchResourcesTagCriterionPair{
                                    shared.SearchResourcesTagCriterionPair{
                                        Key: sdk.String("sapiente"),
                                        Value: sdk.String("officiis"),
                                    },
                                },
                            },
                        },
                        shared.SearchResourcesCriteria{
                            SimpleCriterion: &shared.SearchResourcesSimpleCriterion{
                                Comparator: shared.SearchResourcesComparatorEnumEq.ToPointer(),
                                Key: shared.SearchResourcesSimpleCriterionKeyEnumS3BucketEffectivePermission.ToPointer(),
                                Values: []string{
                                    "debitis",
                                    "voluptatem",
                                    "alias",
                                    "deleniti",
                                },
                            },
                            TagCriterion: &shared.SearchResourcesTagCriterion{
                                Comparator: shared.SearchResourcesComparatorEnumNe.ToPointer(),
                                TagValues: []shared.SearchResourcesTagCriterionPair{
                                    shared.SearchResourcesTagCriterionPair{
                                        Key: sdk.String("sapiente"),
                                        Value: sdk.String("rem"),
                                    },
                                    shared.SearchResourcesTagCriterionPair{
                                        Key: sdk.String("minus"),
                                        Value: sdk.String("nemo"),
                                    },
                                },
                            },
                        },
                    },
                },
            },
            MaxResults: sdk.Int64(992074),
            NextToken: sdk.String("ratione"),
            SortCriteria: &operations.SearchResourcesRequestBodySortCriteria{
                AttributeName: shared.SearchResourcesSortAttributeNameEnumResourceName.ToPointer(),
                OrderBy: shared.OrderByEnumAsc.ToPointer(),
            },
        },
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("culpa"),
        MaxResults: sdk.String("dolor"),
        NextToken: sdk.String("aliquam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchResourcesResponse != nil {
        // handle response
    }
}
```

## TagResource

Adds or updates one or more tags (keys and values) that are associated with an Amazon Macie resource.

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
                "deleniti": "veritatis",
            },
        },
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("consequatur"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("fugit"),
        ResourceArn: "ab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## TestCustomDataIdentifier

Tests a custom data identifier.

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
    res, err := s.SDK.TestCustomDataIdentifier(ctx, operations.TestCustomDataIdentifierRequest{
        RequestBody: operations.TestCustomDataIdentifierRequestBody{
            IgnoreWords: []string{
                "quae",
                "dolor",
                "fugiat",
            },
            Keywords: []string{
                "consequuntur",
                "ipsa",
            },
            MaximumMatchDistance: sdk.Int64(559682),
            Regex: "eveniet",
            SampleText: "impedit",
        },
        XAmzAlgorithm: sdk.String("officiis"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("sed"),
        XAmzSecurityToken: sdk.String("veniam"),
        XAmzSignature: sdk.String("nesciunt"),
        XAmzSignedHeaders: sdk.String("expedita"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestCustomDataIdentifierResponse != nil {
        // handle response
    }
}
```

## UntagResource

Removes one or more tags (keys and values) from an Amazon Macie resource.

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
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("voluptatum"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("exercitationem"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("porro"),
        ResourceArn: "autem",
        TagKeys: []string{
            "laboriosam",
            "recusandae",
            "consequuntur",
            "voluptatem",
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

## UpdateAllowList

Updates the settings for an allow list.

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
    res, err := s.SDK.UpdateAllowList(ctx, operations.UpdateAllowListRequest{
        RequestBody: operations.UpdateAllowListRequestBody{
            Criteria: operations.UpdateAllowListRequestBodyCriteria{
                Regex: sdk.String("exercitationem"),
                S3WordsList: &shared.S3WordsList{
                    BucketName: "necessitatibus",
                    ObjectKey: "quasi",
                },
            },
            Description: sdk.String("nisi"),
            Name: "Caleb Orn",
        },
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("optio"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("blanditiis"),
        ID: "a6458427-3a84-418d-9623-09fb0929921a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAllowListResponse != nil {
        // handle response
    }
}
```

## UpdateAutomatedDiscoveryConfiguration

Enables or disables automated sensitive data discovery for an account.

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
    res, err := s.SDK.UpdateAutomatedDiscoveryConfiguration(ctx, operations.UpdateAutomatedDiscoveryConfigurationRequest{
        RequestBody: operations.UpdateAutomatedDiscoveryConfigurationRequestBody{
            Status: operations.UpdateAutomatedDiscoveryConfigurationRequestBodyStatusEnumDisabled,
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("maxime"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAutomatedDiscoveryConfigurationResponse != nil {
        // handle response
    }
}
```

## UpdateClassificationJob

Changes the status of a classification job.

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
    res, err := s.SDK.UpdateClassificationJob(ctx, operations.UpdateClassificationJobRequest{
        RequestBody: operations.UpdateClassificationJobRequestBody{
            JobStatus: operations.UpdateClassificationJobRequestBodyJobStatusEnumPaused,
        },
        XAmzAlgorithm: sdk.String("temporibus"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("itaque"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("earum"),
        JobID: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateClassificationJobResponse != nil {
        // handle response
    }
}
```

## UpdateClassificationScope

Updates the classification scope settings for an account.

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
    res, err := s.SDK.UpdateClassificationScope(ctx, operations.UpdateClassificationScopeRequest{
        RequestBody: operations.UpdateClassificationScopeRequestBody{
            S3: &operations.UpdateClassificationScopeRequestBodyS3{
                Excludes: &shared.S3ClassificationScopeExclusionUpdate{
                    BucketNames: []string{
                        "vero",
                        "voluptatem",
                        "ipsam",
                    },
                    Operation: shared.ClassificationScopeUpdateOperationEnumReplace,
                },
            },
        },
        XAmzAlgorithm: sdk.String("alias"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("nulla"),
        ID: "a757a59e-cfef-466e-b1ca-a3383c2beb47",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateClassificationScopeResponse != nil {
        // handle response
    }
}
```

## UpdateFindingsFilter

Updates the criteria and other settings for a findings filter.

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
    res, err := s.SDK.UpdateFindingsFilter(ctx, operations.UpdateFindingsFilterRequest{
        RequestBody: operations.UpdateFindingsFilterRequestBody{
            Action: operations.UpdateFindingsFilterRequestBodyActionEnumArchive.ToPointer(),
            ClientToken: sdk.String("sequi"),
            Description: sdk.String("dignissimos"),
            FindingCriteria: &operations.UpdateFindingsFilterRequestBodyFindingCriteria{
                Criterion: map[string]shared.CriterionAdditionalProperties{
                    "quo": shared.CriterionAdditionalProperties{
                        Eq: []string{
                            "quibusdam",
                            "iure",
                            "odit",
                        },
                        EqExactMatch: []string{
                            "vel",
                            "magnam",
                            "quibusdam",
                            "inventore",
                        },
                        Gt: sdk.Int64(818034),
                        Gte: sdk.Int64(726878),
                        Lt: sdk.Int64(102413),
                        Lte: sdk.Int64(975425),
                        Neq: []string{
                            "porro",
                        },
                    },
                },
            },
            Name: sdk.String("Ms. Sheila Blanda"),
            Position: sdk.Int64(107617),
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("velit"),
        XAmzSecurityToken: sdk.String("ut"),
        XAmzSignature: sdk.String("perspiciatis"),
        XAmzSignedHeaders: sdk.String("earum"),
        ID: "1cf9e06e-3a43-4700-8ae6-b6bc9b8f759e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateFindingsFilterResponse != nil {
        // handle response
    }
}
```

## UpdateMacieSession

Suspends or re-enables Amazon Macie, or updates the configuration settings for a Macie account.

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
    res, err := s.SDK.UpdateMacieSession(ctx, operations.UpdateMacieSessionRequest{
        RequestBody: operations.UpdateMacieSessionRequestBody{
            FindingPublishingFrequency: operations.UpdateMacieSessionRequestBodyFindingPublishingFrequencyEnumOneHour.ToPointer(),
            Status: operations.UpdateMacieSessionRequestBodyStatusEnumEnabled.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("est"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("veritatis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateMacieSessionResponse != nil {
        // handle response
    }
}
```

## UpdateMemberSession

Enables an Amazon Macie administrator to suspend or re-enable Macie for a member account.

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
    res, err := s.SDK.UpdateMemberSession(ctx, operations.UpdateMemberSessionRequest{
        RequestBody: operations.UpdateMemberSessionRequestBody{
            Status: operations.UpdateMemberSessionRequestBodyStatusEnumEnabled,
        },
        XAmzAlgorithm: sdk.String("consectetur"),
        XAmzContentSha256: sdk.String("vitae"),
        XAmzCredential: sdk.String("inventore"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("iste"),
        ID: "65bb8a72-0261-4143-9e13-9dbc2259b1ab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateMemberSessionResponse != nil {
        // handle response
    }
}
```

## UpdateOrganizationConfiguration

Updates the Amazon Macie configuration settings for an organization in Organizations.

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
            AutoEnable: false,
        },
        XAmzAlgorithm: sdk.String("fugiat"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("placeat"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationConfigurationResponse != nil {
        // handle response
    }
}
```

## UpdateResourceProfile

Updates the sensitivity score for an S3 bucket.

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
    res, err := s.SDK.UpdateResourceProfile(ctx, operations.UpdateResourceProfileRequest{
        RequestBody: operations.UpdateResourceProfileRequestBody{
            SensitivityScoreOverride: sdk.Int64(914864),
        },
        XAmzAlgorithm: sdk.String("inventore"),
        XAmzContentSha256: sdk.String("aperiam"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("eligendi"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("voluptatem"),
        ResourceArn: "autem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateResourceProfileResponse != nil {
        // handle response
    }
}
```

## UpdateResourceProfileDetections

Updates the sensitivity scoring settings for an S3 bucket.

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
    res, err := s.SDK.UpdateResourceProfileDetections(ctx, operations.UpdateResourceProfileDetectionsRequest{
        RequestBody: operations.UpdateResourceProfileDetectionsRequestBody{
            SuppressDataIdentifiers: []shared.SuppressDataIdentifier{
                shared.SuppressDataIdentifier{
                    ID: sdk.String("2d1ad879-eeb9-4665-b85e-fbd02bae0be2"),
                    Type: shared.DataIdentifierTypeEnumManaged.ToPointer(),
                },
                shared.SuppressDataIdentifier{
                    ID: sdk.String("782259e3-ea4b-4519-bf92-443da7ce52b8"),
                    Type: shared.DataIdentifierTypeEnumManaged.ToPointer(),
                },
            },
        },
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("placeat"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("neque"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("eum"),
        ResourceArn: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateResourceProfileDetectionsResponse != nil {
        // handle response
    }
}
```

## UpdateRevealConfiguration

Updates the status and configuration settings for retrieving occurrences of sensitive data reported by findings.

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
    res, err := s.SDK.UpdateRevealConfiguration(ctx, operations.UpdateRevealConfigurationRequest{
        RequestBody: operations.UpdateRevealConfigurationRequestBody{
            Configuration: operations.UpdateRevealConfigurationRequestBodyConfiguration{
                KmsKeyID: sdk.String("corporis"),
                Status: shared.RevealStatusEnumEnabled.ToPointer(),
            },
        },
        XAmzAlgorithm: sdk.String("voluptates"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("aperiam"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("ratione"),
        XAmzSignedHeaders: sdk.String("labore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateRevealConfigurationResponse != nil {
        // handle response
    }
}
```

## UpdateSensitivityInspectionTemplate

 <p>Updates the settings for the sensitivity inspection template for an account.</p>

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
    res, err := s.SDK.UpdateSensitivityInspectionTemplate(ctx, operations.UpdateSensitivityInspectionTemplateRequest{
        RequestBody: operations.UpdateSensitivityInspectionTemplateRequestBody{
            Description: sdk.String("totam"),
            Excludes: &operations.UpdateSensitivityInspectionTemplateRequestBodyExcludes{
                ManagedDataIdentifierIds: []string{
                    "voluptas",
                    "quo",
                    "velit",
                },
            },
            Includes: &operations.UpdateSensitivityInspectionTemplateRequestBodyIncludes{
                AllowListIds: []string{
                    "fuga",
                    "nostrum",
                    "est",
                    "impedit",
                },
                CustomDataIdentifierIds: []string{
                    "tempore",
                    "vero",
                    "odit",
                    "repellat",
                },
                ManagedDataIdentifierIds: []string{
                    "nemo",
                    "reprehenderit",
                    "aperiam",
                    "odio",
                },
            },
        },
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("ducimus"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("veritatis"),
        ID: "77deac64-6ecb-4573-809e-3eb1e5a2b12e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateSensitivityInspectionTemplateResponse != nil {
        // handle response
    }
}
```
