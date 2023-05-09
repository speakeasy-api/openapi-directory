# SDK

## Overview

<fullname>Amazon Connect Customer Profiles</fullname> <p>Amazon Connect Customer Profiles is a unified customer profile for your contact center that has pre-built connectors powered by AppFlow that make it easy to combine customer information from third party applications, such as Salesforce (CRM), ServiceNow (ITSM), and your enterprise resource planning (ERP), with contact history from your Amazon Connect contact center. If you're new to Amazon Connect, you might find it helpful to review the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/">Amazon Connect Administrator Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/profile/>
### Available Operations

* [AddProfileKey](#addprofilekey) - <p>Associates a new key value with a specific profile, such as a Contact Record ContactId.</p> <p>A profile object can have a single unique key and any number of additional keys that can be used to identify the profile that it belongs to.</p>
* [CreateDomain](#createdomain) - <p>Creates a domain, which is a container for all customer data, such as customer profile attributes, object types, profile keys, and encryption keys. You can create multiple domains, and each domain can have multiple third-party integrations.</p> <p>Each Amazon Connect instance can be associated with only one domain. Multiple Amazon Connect instances can be associated with one domain.</p> <p>Use this API or <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateDomain.html">UpdateDomain</a> to enable <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">identity resolution</a>: set <code>Matching</code> to true. </p> <p>To prevent cross-service impersonation when you call this API, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cross-service-confused-deputy-prevention.html">Cross-service confused deputy prevention</a> for sample policies that you should apply. </p>
* [CreateIntegrationWorkflow](#createintegrationworkflow) -  Creates an integration workflow. An integration workflow is an async process which ingests historic data and sets up an integration for ongoing updates. The supported Amazon AppFlow sources are Salesforce, ServiceNow, and Marketo. 
* [CreateProfile](#createprofile) - <p>Creates a standard profile.</p> <p>A standard profile represents the following attributes for a customer profile in a domain.</p>
* [DeleteDomain](#deletedomain) - Deletes a specific domain and all of its customer data, such as customer profile attributes and their related objects.
* [DeleteIntegration](#deleteintegration) - Removes an integration from a specific domain.
* [DeleteProfile](#deleteprofile) - Deletes the standard customer profile and all data pertaining to the profile.
* [DeleteProfileKey](#deleteprofilekey) - Removes a searchable key from a customer profile.
* [DeleteProfileObject](#deleteprofileobject) - Removes an object associated with a profile of a given ProfileObjectType.
* [DeleteProfileObjectType](#deleteprofileobjecttype) - Removes a ProfileObjectType from a specific domain as well as removes all the ProfileObjects of that type. It also disables integrations from this specific ProfileObjectType. In addition, it scrubs all of the fields of the standard profile that were populated from this ProfileObjectType.
* [DeleteWorkflow](#deleteworkflow) - Deletes the specified workflow and all its corresponding resources. This is an async process.
* [GetAutoMergingPreview](#getautomergingpreview) - <p>Tests the auto-merging settings of your Identity Resolution Job without merging your data. It randomly selects a sample of matching groups from the existing matching results, and applies the automerging settings that you provided. You can then view the number of profiles in the sample, the number of matches, and the number of profiles identified to be merged. This enables you to evaluate the accuracy of the attributes in your matching list. </p> <p>You can't view which profiles are matched and would be merged.</p> <important> <p>We strongly recommend you use this API to do a dry run of the automerging process before running the Identity Resolution Job. Include <b>at least</b> two matching attributes. If your matching list includes too few attributes (such as only <code>FirstName</code> or only <code>LastName</code>), there may be a large number of matches. This increases the chances of erroneous merges.</p> </important>
* [GetDomain](#getdomain) - Returns information about a specific domain.
* [GetIdentityResolutionJob](#getidentityresolutionjob) - <p>Returns information about an Identity Resolution Job in a specific domain. </p> <p>Identity Resolution Jobs are set up using the Amazon Connect admin console. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/use-identity-resolution.html">Use Identity Resolution to consolidate similar profiles</a>.</p>
* [GetIntegration](#getintegration) - Returns an integration for a domain.
* [GetMatches](#getmatches) - <p>Before calling this API, use <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateDomain.html">CreateDomain</a> or <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateDomain.html">UpdateDomain</a> to enable identity resolution: set <code>Matching</code> to true.</p> <p>GetMatches returns potentially matching profiles, based on the results of the latest run of a machine learning process. </p> <important> <p>The process of matching duplicate profiles. If <code>Matching</code> = <code>true</code>, Amazon Connect Customer Profiles starts a weekly batch process called Identity Resolution Job. If you do not specify a date and time for Identity Resolution Job to run, by default it runs every Saturday at 12AM UTC to detect duplicate profiles in your domains. </p> <p>After the Identity Resolution Job completes, use the <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a> API to return and review the results. Or, if you have configured <code>ExportingConfig</code> in the <code>MatchingRequest</code>, you can download the results from S3.</p> </important> <p>Amazon Connect uses the following profile attributes to identify matches:</p> <ul> <li> <p>PhoneNumber</p> </li> <li> <p>HomePhoneNumber</p> </li> <li> <p>BusinessPhoneNumber</p> </li> <li> <p>MobilePhoneNumber</p> </li> <li> <p>EmailAddress</p> </li> <li> <p>PersonalEmailAddress</p> </li> <li> <p>BusinessEmailAddress</p> </li> <li> <p>FullName</p> </li> </ul> <p>For example, two or more profiles—with spelling mistakes such as <b>John Doe</b> and <b>Jhn Doe</b>, or different casing email addresses such as <b>JOHN_DOE@ANYCOMPANY.COM</b> and <b>johndoe@anycompany.com</b>, or different phone number formats such as <b>555-010-0000</b> and <b>+1-555-010-0000</b>—can be detected as belonging to the same customer <b>John Doe</b> and merged into a unified profile.</p>
* [GetProfileObjectType](#getprofileobjecttype) - Returns the object types for a specific domain.
* [GetProfileObjectTypeTemplate](#getprofileobjecttypetemplate) - <p>Returns the template information for a specific object type.</p> <p>A template is a predefined ProfileObjectType, such as “Salesforce-Account” or “Salesforce-Contact.” When a user sends a ProfileObject, using the PutProfileObject API, with an ObjectTypeName that matches one of the TemplateIds, it uses the mappings from the template.</p>
* [GetWorkflow](#getworkflow) - Get details of specified workflow.
* [GetWorkflowSteps](#getworkflowsteps) - Get granular list of steps in workflow.
* [ListAccountIntegrations](#listaccountintegrations) - Lists all of the integrations associated to a specific URI in the AWS account.
* [ListDomains](#listdomains) - Returns a list of all the domains for an AWS account that have been created.
* [ListIdentityResolutionJobs](#listidentityresolutionjobs) - Lists all of the Identity Resolution Jobs in your domain. The response sorts the list by <code>JobStartTime</code>.
* [ListIntegrations](#listintegrations) - Lists all of the integrations in your domain.
* [ListProfileObjectTypeTemplates](#listprofileobjecttypetemplates) - Lists all of the template information for object types.
* [ListProfileObjectTypes](#listprofileobjecttypes) - Lists all of the templates available within the service.
* [ListProfileObjects](#listprofileobjects) - Returns a list of objects associated with a profile of a given ProfileObjectType.
* [ListTagsForResource](#listtagsforresource) - Displays the tags associated with an Amazon Connect Customer Profiles resource. In Connect Customer Profiles, domains, profile object types, and integrations can be tagged.
* [ListWorkflows](#listworkflows) - Query to list all workflows.
* [MergeProfiles](#mergeprofiles) - <p>Runs an AWS Lambda job that does the following:</p> <ol> <li> <p>All the profileKeys in the <code>ProfileToBeMerged</code> will be moved to the main profile.</p> </li> <li> <p>All the objects in the <code>ProfileToBeMerged</code> will be moved to the main profile.</p> </li> <li> <p>All the <code>ProfileToBeMerged</code> will be deleted at the end.</p> </li> <li> <p>All the profileKeys in the <code>ProfileIdsToBeMerged</code> will be moved to the main profile.</p> </li> <li> <p>Standard fields are merged as follows:</p> <ol> <li> <p>Fields are always "union"-ed if there are no conflicts in standard fields or attributeKeys.</p> </li> <li> <p>When there are conflicting fields:</p> <ol> <li> <p>If no <code>SourceProfileIds</code> entry is specified, the main Profile value is always taken. </p> </li> <li> <p>If a <code>SourceProfileIds</code> entry is specified, the specified profileId is always taken, even if it is a NULL value.</p> </li> </ol> </li> </ol> </li> </ol> <p>You can use MergeProfiles together with <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a>, which returns potentially matching profiles, or use it with the results of another matching system. After profiles have been merged, they cannot be separated (unmerged).</p>
* [PutIntegration](#putintegration) - <p>Adds an integration between the service and a third-party service, which includes Amazon AppFlow and Amazon Connect.</p> <p>An integration can belong to only one domain.</p> <p>To add or remove tags on an existing Integration, see <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_TagResource.html"> TagResource </a>/<a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UntagResource.html"> UntagResource</a>.</p>
* [PutProfileObject](#putprofileobject) - <p>Adds additional objects to customer profiles of a given ObjectType.</p> <p>When adding a specific profile object, like a Contact Record, an inferred profile can get created if it is not mapped to an existing profile. The resulting profile will only have a phone number populated in the standard ProfileObject. Any additional Contact Records with the same phone number will be mapped to the same inferred profile.</p> <p>When a ProfileObject is created and if a ProfileObjectType already exists for the ProfileObject, it will provide data to a standard profile depending on the ProfileObjectType definition.</p> <p>PutProfileObject needs an ObjectType, which can be created using PutProfileObjectType.</p>
* [PutProfileObjectType](#putprofileobjecttype) - <p>Defines a ProfileObjectType.</p> <p>To add or remove tags on an existing ObjectType, see <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_TagResource.html"> TagResource</a>/<a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p>
* [SearchProfiles](#searchprofiles) - <p>Searches for profiles within a specific domain using one or more predefined search keys (e.g., _fullName, _phone, _email, _account, etc.) and/or custom-defined search keys. A search key is a data type pair that consists of a <code>KeyName</code> and <code>Values</code> list.</p> <p>This operation supports searching for profiles with a minimum of 1 key-value(s) pair and up to 5 key-value(s) pairs using either <code>AND</code> or <code>OR</code> logic.</p>
* [TagResource](#tagresource) - <p>Assigns one or more tags (key-value pairs) to the specified Amazon Connect Customer Profiles resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. In Connect Customer Profiles, domains, profile object types, and integrations can be tagged.</p> <p>Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.</p> <p>You can use the TagResource action with a resource that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a resource.</p>
* [UntagResource](#untagresource) - Removes one or more tags from the specified Amazon Connect Customer Profiles resource. In Connect Customer Profiles, domains, profile object types, and integrations can be tagged.
* [UpdateDomain](#updatedomain) - <p>Updates the properties of a domain, including creating or selecting a dead letter queue or an encryption key.</p> <p>After a domain is created, the name can’t be changed.</p> <p>Use this API or <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateDomain.html">CreateDomain</a> to enable <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">identity resolution</a>: set <code>Matching</code> to true. </p> <p>To prevent cross-service impersonation when you call this API, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cross-service-confused-deputy-prevention.html">Cross-service confused deputy prevention</a> for sample policies that you should apply. </p> <p>To add or remove tags on an existing Domain, see <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_TagResource.html">TagResource</a>/<a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p>
* [UpdateProfile](#updateprofile) - <p>Updates the properties of a profile. The ProfileId is required for updating a customer profile.</p> <p>When calling the UpdateProfile API, specifying an empty string value means that any existing value will be removed. Not specifying a string value means that any value already there will be kept.</p>

## AddProfileKey

<p>Associates a new key value with a specific profile, such as a Contact Record ContactId.</p> <p>A profile object can have a single unique key and any number of additional keys that can be used to identify the profile that it belongs to.</p>

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
    res, err := s.SDK.AddProfileKey(ctx, operations.AddProfileKeyRequest{
        DomainName: "ipsa",
        RequestBody: operations.AddProfileKeyRequestBody{
            KeyName: "delectus",
            ProfileID: "tempora",
            Values: []string{
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

    if res.AddProfileKeyResponse != nil {
        // handle response
    }
}
```

## CreateDomain

<p>Creates a domain, which is a container for all customer data, such as customer profile attributes, object types, profile keys, and encryption keys. You can create multiple domains, and each domain can have multiple third-party integrations.</p> <p>Each Amazon Connect instance can be associated with only one domain. Multiple Amazon Connect instances can be associated with one domain.</p> <p>Use this API or <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateDomain.html">UpdateDomain</a> to enable <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">identity resolution</a>: set <code>Matching</code> to true. </p> <p>To prevent cross-service impersonation when you call this API, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cross-service-confused-deputy-prevention.html">Cross-service confused deputy prevention</a> for sample policies that you should apply. </p>

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
    res, err := s.SDK.CreateDomain(ctx, operations.CreateDomainRequest{
        DomainName: "ab",
        RequestBody: operations.CreateDomainRequestBody{
            DeadLetterQueueURL: sdk.String("quis"),
            DefaultEncryptionKey: sdk.String("veritatis"),
            DefaultExpirationDays: 648172,
            Matching: &operations.CreateDomainRequestBodyMatching{
                AutoMerging: &shared.AutoMerging{
                    ConflictResolution: &shared.ConflictResolution{
                        ConflictResolvingModel: shared.ConflictResolvingModelEnumRecency,
                        SourceName: sdk.String("ipsam"),
                    },
                    Consolidation: &shared.Consolidation{
                        MatchingAttributesList: [][]string{
                            []string{
                                "quo",
                                "odit",
                                "at",
                                "at",
                            },
                            []string{
                                "molestiae",
                                "quod",
                                "quod",
                                "esse",
                            },
                            []string{
                                "porro",
                                "dolorum",
                                "dicta",
                            },
                            []string{
                                "officia",
                                "occaecati",
                                "fugit",
                            },
                        },
                    },
                    Enabled: false,
                    MinAllowedConfidenceScoreForMerging: sdk.Float64(5373.73),
                },
                Enabled: sdk.Bool(false),
                ExportingConfig: &shared.ExportingConfig{
                    S3Exporting: &shared.S3ExportingConfig{
                        S3BucketName: "hic",
                        S3KeyName: sdk.String("optio"),
                    },
                },
                JobSchedule: &shared.JobSchedule{
                    DayOfTheWeek: shared.JobScheduleDayOfTheWeekEnumWednesday,
                    Time: "beatae",
                },
            },
            Tags: map[string]string{
                "molestiae": "modi",
                "qui": "impedit",
            },
        },
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("ad"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDomainResponse != nil {
        // handle response
    }
}
```

## CreateIntegrationWorkflow

 Creates an integration workflow. An integration workflow is an async process which ingests historic data and sets up an integration for ongoing updates. The supported Amazon AppFlow sources are Salesforce, ServiceNow, and Marketo. 

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
    res, err := s.SDK.CreateIntegrationWorkflow(ctx, operations.CreateIntegrationWorkflowRequest{
        DomainName: "natus",
        RequestBody: operations.CreateIntegrationWorkflowRequestBody{
            IntegrationConfig: operations.CreateIntegrationWorkflowRequestBodyIntegrationConfig{
                AppflowIntegration: &shared.AppflowIntegration{
                    Batches: []shared.Batch{
                        shared.Batch{
                            EndTime: types.MustTimeFromString("2022-07-22T16:55:44.795Z"),
                            StartTime: types.MustTimeFromString("2022-03-24T20:42:46.563Z"),
                        },
                    },
                    FlowDefinition: shared.FlowDefinition{
                        Description: sdk.String("hic"),
                        FlowName: "saepe",
                        KmsArn: "fuga",
                        SourceFlowConfig: shared.SourceFlowConfig{
                            ConnectorProfileName: sdk.String("in"),
                            ConnectorType: shared.SourceConnectorTypeEnumMarketo,
                            IncrementalPullConfig: &shared.IncrementalPullConfig{
                                DatetimeTypeFieldName: sdk.String("iste"),
                            },
                            SourceConnectorProperties: shared.SourceConnectorProperties{
                                Marketo: &shared.MarketoSourceProperties{
                                    Object: "iure",
                                },
                                S3: &shared.S3SourceProperties{
                                    BucketName: "saepe",
                                    BucketPrefix: sdk.String("quidem"),
                                },
                                Salesforce: &shared.SalesforceSourceProperties{
                                    EnableDynamicFieldUpdate: sdk.Bool(false),
                                    IncludeDeletedRecords: sdk.Bool(false),
                                    Object: "architecto",
                                },
                                ServiceNow: &shared.ServiceNowSourceProperties{
                                    Object: "ipsa",
                                },
                                Zendesk: &shared.ZendeskSourceProperties{
                                    Object: "reiciendis",
                                },
                            },
                        },
                        Tasks: []shared.Task{
                            shared.Task{
                                ConnectorOperator: &shared.ConnectorOperator{
                                    Marketo: shared.MarketoConnectorOperatorEnumMaskLastN.ToPointer(),
                                    S3: shared.S3ConnectorOperatorEnumMaskFirstN.ToPointer(),
                                    Salesforce: shared.SalesforceConnectorOperatorEnumGreaterThan.ToPointer(),
                                    ServiceNow: shared.ServiceNowConnectorOperatorEnumBetween.ToPointer(),
                                    Zendesk: shared.ZendeskConnectorOperatorEnumSubtraction.ToPointer(),
                                },
                                DestinationField: sdk.String("explicabo"),
                                SourceFields: []string{
                                    "enim",
                                    "omnis",
                                    "nemo",
                                    "minima",
                                },
                                TaskProperties: map[string]string{
                                    "accusantium": "iure",
                                    "culpa": "doloribus",
                                    "sapiente": "architecto",
                                },
                                TaskType: shared.TaskTypeEnumMerge,
                            },
                            shared.Task{
                                ConnectorOperator: &shared.ConnectorOperator{
                                    Marketo: shared.MarketoConnectorOperatorEnumBetween.ToPointer(),
                                    S3: shared.S3ConnectorOperatorEnumMaskAll.ToPointer(),
                                    Salesforce: shared.SalesforceConnectorOperatorEnumGreaterThan.ToPointer(),
                                    ServiceNow: shared.ServiceNowConnectorOperatorEnumNoOp.ToPointer(),
                                    Zendesk: shared.ZendeskConnectorOperatorEnumValidateNonNull.ToPointer(),
                                },
                                DestinationField: sdk.String("occaecati"),
                                SourceFields: []string{
                                    "commodi",
                                    "quam",
                                },
                                TaskProperties: map[string]string{
                                    "velit": "error",
                                    "quia": "quis",
                                },
                                TaskType: shared.TaskTypeEnumArithmetic,
                            },
                            shared.Task{
                                ConnectorOperator: &shared.ConnectorOperator{
                                    Marketo: shared.MarketoConnectorOperatorEnumMaskLastN.ToPointer(),
                                    S3: shared.S3ConnectorOperatorEnumMaskFirstN.ToPointer(),
                                    Salesforce: shared.SalesforceConnectorOperatorEnumGreaterThanOrEqualTo.ToPointer(),
                                    ServiceNow: shared.ServiceNowConnectorOperatorEnumLessThan.ToPointer(),
                                    Zendesk: shared.ZendeskConnectorOperatorEnumValidateNonZero.ToPointer(),
                                },
                                DestinationField: sdk.String("sequi"),
                                SourceFields: []string{
                                    "ipsam",
                                    "id",
                                    "possimus",
                                    "aut",
                                },
                                TaskProperties: map[string]string{
                                    "error": "temporibus",
                                },
                                TaskType: shared.TaskTypeEnumMerge,
                            },
                        },
                        TriggerConfig: shared.TriggerConfig{
                            TriggerProperties: &shared.TriggerProperties{
                                Scheduled: &shared.ScheduledTriggerProperties{
                                    DataPullMode: shared.DataPullModeEnumIncremental.ToPointer(),
                                    FirstExecutionFrom: types.MustTimeFromString("2020-01-27T18:38:42.890Z"),
                                    ScheduleEndTime: types.MustTimeFromString("2021-08-05T19:50:46.898Z"),
                                    ScheduleExpression: "praesentium",
                                    ScheduleOffset: sdk.Int64(976762),
                                    ScheduleStartTime: types.MustTimeFromString("2022-05-25T05:33:11.349Z"),
                                    Timezone: sdk.String("voluptate"),
                                },
                            },
                            TriggerType: shared.TriggerTypeEnumOnDemand,
                        },
                    },
                },
            },
            ObjectTypeName: "perferendis",
            RoleArn: "doloremque",
            Tags: map[string]string{
                "ut": "maiores",
                "dicta": "corporis",
            },
            WorkflowType: operations.CreateIntegrationWorkflowRequestBodyWorkflowTypeEnumAppflowIntegration,
        },
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("harum"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("commodi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateIntegrationWorkflowResponse != nil {
        // handle response
    }
}
```

## CreateProfile

<p>Creates a standard profile.</p> <p>A standard profile represents the following attributes for a customer profile in a domain.</p>

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
    res, err := s.SDK.CreateProfile(ctx, operations.CreateProfileRequest{
        DomainName: "repudiandae",
        RequestBody: operations.CreateProfileRequestBody{
            AccountNumber: sdk.String("quae"),
            AdditionalInformation: sdk.String("ipsum"),
            Address: &operations.CreateProfileRequestBodyAddress{
                Address1: sdk.String("quidem"),
                Address2: sdk.String("molestias"),
                Address3: sdk.String("excepturi"),
                Address4: sdk.String("pariatur"),
                City: sdk.String("New Judah"),
                Country: sdk.String("Turkmenistan"),
                County: sdk.String("quasi"),
                PostalCode: sdk.String("50923-0681"),
                Province: sdk.String("deserunt"),
                State: sdk.String("distinctio"),
            },
            Attributes: map[string]string{
                "labore": "modi",
                "qui": "aliquid",
                "cupiditate": "quos",
                "perferendis": "magni",
            },
            BillingAddress: &operations.CreateProfileRequestBodyBillingAddress{
                Address1: sdk.String("assumenda"),
                Address2: sdk.String("ipsam"),
                Address3: sdk.String("alias"),
                Address4: sdk.String("fugit"),
                City: sdk.String("Marksboro"),
                Country: sdk.String("Philippines"),
                County: sdk.String("tempore"),
                PostalCode: sdk.String("94275"),
                Province: sdk.String("aliquid"),
                State: sdk.String("provident"),
            },
            BirthDate: sdk.String("necessitatibus"),
            BusinessEmailAddress: sdk.String("sint"),
            BusinessName: sdk.String("officia"),
            BusinessPhoneNumber: sdk.String("dolor"),
            EmailAddress: sdk.String("debitis"),
            FirstName: sdk.String("Veda"),
            Gender: operations.CreateProfileRequestBodyGenderEnumUnspecified.ToPointer(),
            GenderString: sdk.String("in"),
            HomePhoneNumber: sdk.String("in"),
            LastName: sdk.String("Stamm"),
            MailingAddress: &operations.CreateProfileRequestBodyMailingAddress{
                Address1: sdk.String("maiores"),
                Address2: sdk.String("rerum"),
                Address3: sdk.String("dicta"),
                Address4: sdk.String("magnam"),
                City: sdk.String("Schulistview"),
                Country: sdk.String("Hungary"),
                County: sdk.String("laborum"),
                PostalCode: sdk.String("25389-6576"),
                Province: sdk.String("blanditiis"),
                State: sdk.String("deleniti"),
            },
            MiddleName: sdk.String("sapiente"),
            MobilePhoneNumber: sdk.String("amet"),
            PartyType: operations.CreateProfileRequestBodyPartyTypeEnumBusiness.ToPointer(),
            PartyTypeString: sdk.String("nisi"),
            PersonalEmailAddress: sdk.String("vel"),
            PhoneNumber: sdk.String("natus"),
            ShippingAddress: &operations.CreateProfileRequestBodyShippingAddress{
                Address1: sdk.String("omnis"),
                Address2: sdk.String("molestiae"),
                Address3: sdk.String("perferendis"),
                Address4: sdk.String("nihil"),
                City: sdk.String("Lake Maggie"),
                Country: sdk.String("Finland"),
                County: sdk.String("labore"),
                PostalCode: sdk.String("67481"),
                Province: sdk.String("architecto"),
                State: sdk.String("magnam"),
            },
        },
        XAmzAlgorithm: sdk.String("et"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("accusantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateProfileResponse != nil {
        // handle response
    }
}
```

## DeleteDomain

Deletes a specific domain and all of its customer data, such as customer profile attributes and their related objects.

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
    res, err := s.SDK.DeleteDomain(ctx, operations.DeleteDomainRequest{
        DomainName: "mollitia",
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("ad"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("odit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDomainResponse != nil {
        // handle response
    }
}
```

## DeleteIntegration

Removes an integration from a specific domain.

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
    res, err := s.SDK.DeleteIntegration(ctx, operations.DeleteIntegrationRequest{
        DomainName: "nemo",
        RequestBody: operations.DeleteIntegrationRequestBody{
            URI: "http://infinite-winery.org",
        },
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("maxime"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteIntegrationResponse != nil {
        // handle response
    }
}
```

## DeleteProfile

Deletes the standard customer profile and all data pertaining to the profile.

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
    res, err := s.SDK.DeleteProfile(ctx, operations.DeleteProfileRequest{
        DomainName: "repudiandae",
        RequestBody: operations.DeleteProfileRequestBody{
            ProfileID: "ullam",
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

    if res.DeleteProfileResponse != nil {
        // handle response
    }
}
```

## DeleteProfileKey

Removes a searchable key from a customer profile.

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
    res, err := s.SDK.DeleteProfileKey(ctx, operations.DeleteProfileKeyRequest{
        DomainName: "accusantium",
        RequestBody: operations.DeleteProfileKeyRequestBody{
            KeyName: "consequuntur",
            ProfileID: "praesentium",
            Values: []string{
                "magni",
                "sunt",
                "quo",
            },
        },
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("maxime"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("ea"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteProfileKeyResponse != nil {
        // handle response
    }
}
```

## DeleteProfileObject

Removes an object associated with a profile of a given ProfileObjectType.

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
    res, err := s.SDK.DeleteProfileObject(ctx, operations.DeleteProfileObjectRequest{
        DomainName: "accusantium",
        RequestBody: operations.DeleteProfileObjectRequestBody{
            ObjectTypeName: "ab",
            ProfileID: "maiores",
            ProfileObjectUniqueKey: "quidem",
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("autem"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("eaque"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("nemo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteProfileObjectResponse != nil {
        // handle response
    }
}
```

## DeleteProfileObjectType

Removes a ProfileObjectType from a specific domain as well as removes all the ProfileObjects of that type. It also disables integrations from this specific ProfileObjectType. In addition, it scrubs all of the fields of the standard profile that were populated from this ProfileObjectType.

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
    res, err := s.SDK.DeleteProfileObjectType(ctx, operations.DeleteProfileObjectTypeRequest{
        DomainName: "voluptatibus",
        ObjectTypeName: "perferendis",
        XAmzAlgorithm: sdk.String("fugiat"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("cumque"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("libero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteProfileObjectTypeResponse != nil {
        // handle response
    }
}
```

## DeleteWorkflow

Deletes the specified workflow and all its corresponding resources. This is an async process.

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
    res, err := s.SDK.DeleteWorkflow(ctx, operations.DeleteWorkflowRequest{
        DomainName: "nobis",
        WorkflowID: "dolores",
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("eaque"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("nesciunt"),
        XAmzSignedHeaders: sdk.String("eos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteWorkflowResponse != nil {
        // handle response
    }
}
```

## GetAutoMergingPreview

<p>Tests the auto-merging settings of your Identity Resolution Job without merging your data. It randomly selects a sample of matching groups from the existing matching results, and applies the automerging settings that you provided. You can then view the number of profiles in the sample, the number of matches, and the number of profiles identified to be merged. This enables you to evaluate the accuracy of the attributes in your matching list. </p> <p>You can't view which profiles are matched and would be merged.</p> <important> <p>We strongly recommend you use this API to do a dry run of the automerging process before running the Identity Resolution Job. Include <b>at least</b> two matching attributes. If your matching list includes too few attributes (such as only <code>FirstName</code> or only <code>LastName</code>), there may be a large number of matches. This increases the chances of erroneous merges.</p> </important>

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
    res, err := s.SDK.GetAutoMergingPreview(ctx, operations.GetAutoMergingPreviewRequest{
        DomainName: "perferendis",
        RequestBody: operations.GetAutoMergingPreviewRequestBody{
            ConflictResolution: operations.GetAutoMergingPreviewRequestBodyConflictResolution{
                ConflictResolvingModel: shared.ConflictResolvingModelEnumRecency.ToPointer(),
                SourceName: sdk.String("minus"),
            },
            Consolidation: operations.GetAutoMergingPreviewRequestBodyConsolidation{
                MatchingAttributesList: [][]string{
                    []string{
                        "vero",
                    },
                    []string{
                        "hic",
                        "recusandae",
                    },
                },
            },
            MinAllowedConfidenceScoreForMerging: sdk.Float64(6082.53),
        },
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("perspiciatis"),
        XAmzCredential: sdk.String("voluptatem"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAutoMergingPreviewResponse != nil {
        // handle response
    }
}
```

## GetDomain

Returns information about a specific domain.

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
    res, err := s.SDK.GetDomain(ctx, operations.GetDomainRequest{
        DomainName: "eaque",
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("rerum"),
        XAmzCredential: sdk.String("adipisci"),
        XAmzDate: sdk.String("asperiores"),
        XAmzSecurityToken: sdk.String("earum"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("iste"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDomainResponse != nil {
        // handle response
    }
}
```

## GetIdentityResolutionJob

<p>Returns information about an Identity Resolution Job in a specific domain. </p> <p>Identity Resolution Jobs are set up using the Amazon Connect admin console. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/use-identity-resolution.html">Use Identity Resolution to consolidate similar profiles</a>.</p>

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
    res, err := s.SDK.GetIdentityResolutionJob(ctx, operations.GetIdentityResolutionJobRequest{
        DomainName: "dolorum",
        JobID: "deleniti",
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

    if res.GetIdentityResolutionJobResponse != nil {
        // handle response
    }
}
```

## GetIntegration

Returns an integration for a domain.

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
    res, err := s.SDK.GetIntegration(ctx, operations.GetIntegrationRequest{
        DomainName: "aliquid",
        RequestBody: operations.GetIntegrationRequestBody{
            URI: "http://dopey-crewmate.biz",
        },
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

    if res.GetIntegrationResponse != nil {
        // handle response
    }
}
```

## GetMatches

<p>Before calling this API, use <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateDomain.html">CreateDomain</a> or <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateDomain.html">UpdateDomain</a> to enable identity resolution: set <code>Matching</code> to true.</p> <p>GetMatches returns potentially matching profiles, based on the results of the latest run of a machine learning process. </p> <important> <p>The process of matching duplicate profiles. If <code>Matching</code> = <code>true</code>, Amazon Connect Customer Profiles starts a weekly batch process called Identity Resolution Job. If you do not specify a date and time for Identity Resolution Job to run, by default it runs every Saturday at 12AM UTC to detect duplicate profiles in your domains. </p> <p>After the Identity Resolution Job completes, use the <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a> API to return and review the results. Or, if you have configured <code>ExportingConfig</code> in the <code>MatchingRequest</code>, you can download the results from S3.</p> </important> <p>Amazon Connect uses the following profile attributes to identify matches:</p> <ul> <li> <p>PhoneNumber</p> </li> <li> <p>HomePhoneNumber</p> </li> <li> <p>BusinessPhoneNumber</p> </li> <li> <p>MobilePhoneNumber</p> </li> <li> <p>EmailAddress</p> </li> <li> <p>PersonalEmailAddress</p> </li> <li> <p>BusinessEmailAddress</p> </li> <li> <p>FullName</p> </li> </ul> <p>For example, two or more profiles—with spelling mistakes such as <b>John Doe</b> and <b>Jhn Doe</b>, or different casing email addresses such as <b>JOHN_DOE@ANYCOMPANY.COM</b> and <b>johndoe@anycompany.com</b>, or different phone number formats such as <b>555-010-0000</b> and <b>+1-555-010-0000</b>—can be detected as belonging to the same customer <b>John Doe</b> and merged into a unified profile.</p>

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
    res, err := s.SDK.GetMatches(ctx, operations.GetMatchesRequest{
        DomainName: "amet",
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("odio"),
        MaxResults: sdk.Int64(311796),
        NextToken: sdk.String("accusamus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMatchesResponse != nil {
        // handle response
    }
}
```

## GetProfileObjectType

Returns the object types for a specific domain.

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
    res, err := s.SDK.GetProfileObjectType(ctx, operations.GetProfileObjectTypeRequest{
        DomainName: "quidem",
        ObjectTypeName: "voluptatibus",
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("eos"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("fugiat"),
        XAmzSignedHeaders: sdk.String("ab"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProfileObjectTypeResponse != nil {
        // handle response
    }
}
```

## GetProfileObjectTypeTemplate

<p>Returns the template information for a specific object type.</p> <p>A template is a predefined ProfileObjectType, such as “Salesforce-Account” or “Salesforce-Contact.” When a user sends a ProfileObject, using the PutProfileObject API, with an ObjectTypeName that matches one of the TemplateIds, it uses the mappings from the template.</p>

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
    res, err := s.SDK.GetProfileObjectTypeTemplate(ctx, operations.GetProfileObjectTypeTemplateRequest{
        TemplateID: "soluta",
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProfileObjectTypeTemplateResponse != nil {
        // handle response
    }
}
```

## GetWorkflow

Get details of specified workflow.

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
    res, err := s.SDK.GetWorkflow(ctx, operations.GetWorkflowRequest{
        DomainName: "distinctio",
        WorkflowID: "asperiores",
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetWorkflowResponse != nil {
        // handle response
    }
}
```

## GetWorkflowSteps

Get granular list of steps in workflow.

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
    res, err := s.SDK.GetWorkflowSteps(ctx, operations.GetWorkflowStepsRequest{
        DomainName: "perferendis",
        WorkflowID: "amet",
        XAmzAlgorithm: sdk.String("optio"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("ad"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("provident"),
        MaxResults: sdk.Int64(324683),
        NextToken: sdk.String("repellendus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetWorkflowStepsResponse != nil {
        // handle response
    }
}
```

## ListAccountIntegrations

Lists all of the integrations associated to a specific URI in the AWS account.

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
    res, err := s.SDK.ListAccountIntegrations(ctx, operations.ListAccountIntegrationsRequest{
        RequestBody: operations.ListAccountIntegrationsRequestBody{
            URI: "https://pleasant-atm.org",
        },
        XAmzAlgorithm: sdk.String("quaerat"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("officiis"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        IncludeHidden: sdk.Bool(false),
        MaxResults: sdk.Int64(952792),
        NextToken: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAccountIntegrationsResponse != nil {
        // handle response
    }
}
```

## ListDomains

Returns a list of all the domains for an AWS account that have been created.

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
    res, err := s.SDK.ListDomains(ctx, operations.ListDomainsRequest{
        XAmzAlgorithm: sdk.String("harum"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("tempore"),
        MaxResults: sdk.Int64(880298),
        NextToken: sdk.String("numquam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDomainsResponse != nil {
        // handle response
    }
}
```

## ListIdentityResolutionJobs

Lists all of the Identity Resolution Jobs in your domain. The response sorts the list by <code>JobStartTime</code>.

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
    res, err := s.SDK.ListIdentityResolutionJobs(ctx, operations.ListIdentityResolutionJobsRequest{
        DomainName: "enim",
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("expedita"),
        XAmzSignedHeaders: sdk.String("neque"),
        MaxResults: sdk.Int64(153694),
        NextToken: sdk.String("vel"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListIdentityResolutionJobsResponse != nil {
        // handle response
    }
}
```

## ListIntegrations

Lists all of the integrations in your domain.

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
    res, err := s.SDK.ListIntegrations(ctx, operations.ListIntegrationsRequest{
        DomainName: "libero",
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("cupiditate"),
        IncludeHidden: sdk.Bool(false),
        MaxResults: sdk.Int64(807581),
        NextToken: sdk.String("pariatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListIntegrationsResponse != nil {
        // handle response
    }
}
```

## ListProfileObjectTypeTemplates

Lists all of the template information for object types.

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
    res, err := s.SDK.ListProfileObjectTypeTemplates(ctx, operations.ListProfileObjectTypeTemplatesRequest{
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("dolores"),
        MaxResults: sdk.Int64(716860),
        NextToken: sdk.String("facilis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListProfileObjectTypeTemplatesResponse != nil {
        // handle response
    }
}
```

## ListProfileObjectTypes

Lists all of the templates available within the service.

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
    res, err := s.SDK.ListProfileObjectTypes(ctx, operations.ListProfileObjectTypesRequest{
        DomainName: "aliquid",
        XAmzAlgorithm: sdk.String("quam"),
        XAmzContentSha256: sdk.String("molestias"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("neque"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("magni"),
        MaxResults: sdk.Int64(488056),
        NextToken: sdk.String("sunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListProfileObjectTypesResponse != nil {
        // handle response
    }
}
```

## ListProfileObjects

Returns a list of objects associated with a profile of a given ProfileObjectType.

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
    res, err := s.SDK.ListProfileObjects(ctx, operations.ListProfileObjectsRequest{
        DomainName: "ullam",
        RequestBody: operations.ListProfileObjectsRequestBody{
            ObjectFilter: &operations.ListProfileObjectsRequestBodyObjectFilter{
                KeyName: sdk.String("nam"),
                Values: []string{
                    "voluptatem",
                    "cumque",
                    "soluta",
                    "nobis",
                },
            },
            ObjectTypeName: "et",
            ProfileID: "saepe",
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("tempore"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("aperiam"),
        MaxResults: sdk.Int64(961937),
        NextToken: sdk.String("dolorem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListProfileObjectsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Displays the tags associated with an Amazon Connect Customer Profiles resource. In Connect Customer Profiles, domains, profile object types, and integrations can be tagged.

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
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("adipisci"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("quae"),
        XAmzSignedHeaders: sdk.String("aut"),
        ResourceArn: "quas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListWorkflows

Query to list all workflows.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListWorkflows(ctx, operations.ListWorkflowsRequest{
        DomainName: "itaque",
        RequestBody: operations.ListWorkflowsRequestBody{
            QueryEndDate: types.MustTimeFromString("2022-05-01T11:31:51.593Z"),
            QueryStartDate: types.MustTimeFromString("2020-08-24T06:10:53.249Z"),
            Status: operations.ListWorkflowsRequestBodyStatusEnumCancelled.ToPointer(),
            WorkflowType: operations.ListWorkflowsRequestBodyWorkflowTypeEnumAppflowIntegration.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("ut"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("cupiditate"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("laudantium"),
        XAmzSignedHeaders: sdk.String("odio"),
        MaxResults: sdk.Int64(580447),
        NextToken: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorkflowsResponse != nil {
        // handle response
    }
}
```

## MergeProfiles

<p>Runs an AWS Lambda job that does the following:</p> <ol> <li> <p>All the profileKeys in the <code>ProfileToBeMerged</code> will be moved to the main profile.</p> </li> <li> <p>All the objects in the <code>ProfileToBeMerged</code> will be moved to the main profile.</p> </li> <li> <p>All the <code>ProfileToBeMerged</code> will be deleted at the end.</p> </li> <li> <p>All the profileKeys in the <code>ProfileIdsToBeMerged</code> will be moved to the main profile.</p> </li> <li> <p>Standard fields are merged as follows:</p> <ol> <li> <p>Fields are always "union"-ed if there are no conflicts in standard fields or attributeKeys.</p> </li> <li> <p>When there are conflicting fields:</p> <ol> <li> <p>If no <code>SourceProfileIds</code> entry is specified, the main Profile value is always taken. </p> </li> <li> <p>If a <code>SourceProfileIds</code> entry is specified, the specified profileId is always taken, even if it is a NULL value.</p> </li> </ol> </li> </ol> </li> </ol> <p>You can use MergeProfiles together with <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a>, which returns potentially matching profiles, or use it with the results of another matching system. After profiles have been merged, they cannot be separated (unmerged).</p>

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
    res, err := s.SDK.MergeProfiles(ctx, operations.MergeProfilesRequest{
        DomainName: "quisquam",
        RequestBody: operations.MergeProfilesRequestBody{
            FieldSourceProfileIds: &operations.MergeProfilesRequestBodyFieldSourceProfileIds{
                AccountNumber: sdk.String("vero"),
                AdditionalInformation: sdk.String("omnis"),
                Address: sdk.String("2942 Wiegand Lock"),
                Attributes: map[string]string{
                    "distinctio": "quod",
                    "odio": "similique",
                    "facilis": "vero",
                    "ducimus": "dolore",
                },
                BillingAddress: sdk.String("quibusdam"),
                BirthDate: sdk.String("illum"),
                BusinessEmailAddress: sdk.String("sequi"),
                BusinessName: sdk.String("natus"),
                BusinessPhoneNumber: sdk.String("impedit"),
                EmailAddress: sdk.String("aut"),
                FirstName: sdk.String("Webster"),
                Gender: sdk.String("female"),
                HomePhoneNumber: sdk.String("nulla"),
                LastName: sdk.String("Cormier"),
                MailingAddress: sdk.String("porro"),
                MiddleName: sdk.String("maiores"),
                MobilePhoneNumber: sdk.String("doloribus"),
                PartyType: sdk.String("iusto"),
                PersonalEmailAddress: sdk.String("eligendi"),
                PhoneNumber: sdk.String("ducimus"),
                ShippingAddress: sdk.String("alias"),
            },
            MainProfileID: "officia",
            ProfileIdsToBeMerged: []string{
                "ipsam",
                "ea",
            },
        },
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("possimus"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("ratione"),
        XAmzSignature: sdk.String("ex"),
        XAmzSignedHeaders: sdk.String("laudantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MergeProfilesResponse != nil {
        // handle response
    }
}
```

## PutIntegration

<p>Adds an integration between the service and a third-party service, which includes Amazon AppFlow and Amazon Connect.</p> <p>An integration can belong to only one domain.</p> <p>To add or remove tags on an existing Integration, see <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_TagResource.html"> TagResource </a>/<a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UntagResource.html"> UntagResource</a>.</p>

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
    res, err := s.SDK.PutIntegration(ctx, operations.PutIntegrationRequest{
        DomainName: "dicta",
        RequestBody: operations.PutIntegrationRequestBody{
            FlowDefinition: &operations.PutIntegrationRequestBodyFlowDefinition{
                Description: sdk.String("dolor"),
                FlowName: sdk.String("maiores"),
                KmsArn: sdk.String("quasi"),
                SourceFlowConfig: &shared.SourceFlowConfig{
                    ConnectorProfileName: sdk.String("ex"),
                    ConnectorType: shared.SourceConnectorTypeEnumS3,
                    IncrementalPullConfig: &shared.IncrementalPullConfig{
                        DatetimeTypeFieldName: sdk.String("excepturi"),
                    },
                    SourceConnectorProperties: shared.SourceConnectorProperties{
                        Marketo: &shared.MarketoSourceProperties{
                            Object: "voluptatibus",
                        },
                        S3: &shared.S3SourceProperties{
                            BucketName: "nostrum",
                            BucketPrefix: sdk.String("sapiente"),
                        },
                        Salesforce: &shared.SalesforceSourceProperties{
                            EnableDynamicFieldUpdate: sdk.Bool(false),
                            IncludeDeletedRecords: sdk.Bool(false),
                            Object: "quisquam",
                        },
                        ServiceNow: &shared.ServiceNowSourceProperties{
                            Object: "saepe",
                        },
                        Zendesk: &shared.ZendeskSourceProperties{
                            Object: "ea",
                        },
                    },
                },
                Tasks: []shared.Task{
                    shared.Task{
                        ConnectorOperator: &shared.ConnectorOperator{
                            Marketo: shared.MarketoConnectorOperatorEnumMultiplication.ToPointer(),
                            S3: shared.S3ConnectorOperatorEnumEqualTo.ToPointer(),
                            Salesforce: shared.SalesforceConnectorOperatorEnumNotEqualTo.ToPointer(),
                            ServiceNow: shared.ServiceNowConnectorOperatorEnumContains.ToPointer(),
                            Zendesk: shared.ZendeskConnectorOperatorEnumDivision.ToPointer(),
                        },
                        DestinationField: sdk.String("ea"),
                        SourceFields: []string{
                            "consectetur",
                            "recusandae",
                            "aspernatur",
                            "minima",
                        },
                        TaskProperties: map[string]string{
                            "a": "libero",
                        },
                        TaskType: shared.TaskTypeEnumArithmetic,
                    },
                    shared.Task{
                        ConnectorOperator: &shared.ConnectorOperator{
                            Marketo: shared.MarketoConnectorOperatorEnumProjection.ToPointer(),
                            S3: shared.S3ConnectorOperatorEnumDivision.ToPointer(),
                            Salesforce: shared.SalesforceConnectorOperatorEnumValidateNonNull.ToPointer(),
                            ServiceNow: shared.ServiceNowConnectorOperatorEnumGreaterThanOrEqualTo.ToPointer(),
                            Zendesk: shared.ZendeskConnectorOperatorEnumAddition.ToPointer(),
                        },
                        DestinationField: sdk.String("accusamus"),
                        SourceFields: []string{
                            "non",
                        },
                        TaskProperties: map[string]string{
                            "dolorum": "laborum",
                        },
                        TaskType: shared.TaskTypeEnumTruncate,
                    },
                    shared.Task{
                        ConnectorOperator: &shared.ConnectorOperator{
                            Marketo: shared.MarketoConnectorOperatorEnumBetween.ToPointer(),
                            S3: shared.S3ConnectorOperatorEnumAddition.ToPointer(),
                            Salesforce: shared.SalesforceConnectorOperatorEnumNotEqualTo.ToPointer(),
                            ServiceNow: shared.ServiceNowConnectorOperatorEnumMaskLastN.ToPointer(),
                            Zendesk: shared.ZendeskConnectorOperatorEnumMaskFirstN.ToPointer(),
                        },
                        DestinationField: sdk.String("assumenda"),
                        SourceFields: []string{
                            "voluptas",
                            "libero",
                            "quasi",
                            "tempora",
                        },
                        TaskProperties: map[string]string{
                            "explicabo": "provident",
                            "ipsa": "molestiae",
                        },
                        TaskType: shared.TaskTypeEnumMap,
                    },
                    shared.Task{
                        ConnectorOperator: &shared.ConnectorOperator{
                            Marketo: shared.MarketoConnectorOperatorEnumSubtraction.ToPointer(),
                            S3: shared.S3ConnectorOperatorEnumGreaterThanOrEqualTo.ToPointer(),
                            Salesforce: shared.SalesforceConnectorOperatorEnumAddition.ToPointer(),
                            ServiceNow: shared.ServiceNowConnectorOperatorEnumAddition.ToPointer(),
                            Zendesk: shared.ZendeskConnectorOperatorEnumMaskFirstN.ToPointer(),
                        },
                        DestinationField: sdk.String("fuga"),
                        SourceFields: []string{
                            "quidem",
                            "fugiat",
                        },
                        TaskProperties: map[string]string{
                            "eum": "suscipit",
                            "assumenda": "eos",
                        },
                        TaskType: shared.TaskTypeEnumMask,
                    },
                },
                TriggerConfig: &shared.TriggerConfig{
                    TriggerProperties: &shared.TriggerProperties{
                        Scheduled: &shared.ScheduledTriggerProperties{
                            DataPullMode: shared.DataPullModeEnumComplete.ToPointer(),
                            FirstExecutionFrom: types.MustTimeFromString("2022-12-11T06:00:38.230Z"),
                            ScheduleEndTime: types.MustTimeFromString("2021-08-10T04:36:29.661Z"),
                            ScheduleExpression: "neque",
                            ScheduleOffset: sdk.Int64(778696),
                            ScheduleStartTime: types.MustTimeFromString("2020-09-01T17:43:45.536Z"),
                            Timezone: sdk.String("fuga"),
                        },
                    },
                    TriggerType: shared.TriggerTypeEnumScheduled,
                },
            },
            ObjectTypeName: sdk.String("eos"),
            ObjectTypeNames: map[string]string{
                "ab": "cupiditate",
                "consequatur": "tempora",
            },
            Tags: map[string]string{
                "ipsam": "aspernatur",
                "sequi": "quo",
                "esse": "recusandae",
                "aperiam": "distinctio",
            },
            URI: sdk.String("https://linear-behalf.info"),
        },
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

    if res.PutIntegrationResponse != nil {
        // handle response
    }
}
```

## PutProfileObject

<p>Adds additional objects to customer profiles of a given ObjectType.</p> <p>When adding a specific profile object, like a Contact Record, an inferred profile can get created if it is not mapped to an existing profile. The resulting profile will only have a phone number populated in the standard ProfileObject. Any additional Contact Records with the same phone number will be mapped to the same inferred profile.</p> <p>When a ProfileObject is created and if a ProfileObjectType already exists for the ProfileObject, it will provide data to a standard profile depending on the ProfileObjectType definition.</p> <p>PutProfileObject needs an ObjectType, which can be created using PutProfileObjectType.</p>

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
    res, err := s.SDK.PutProfileObject(ctx, operations.PutProfileObjectRequest{
        DomainName: "dolores",
        RequestBody: operations.PutProfileObjectRequestBody{
            Object: "deserunt",
            ObjectTypeName: "molestiae",
        },
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("quas"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("deleniti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutProfileObjectResponse != nil {
        // handle response
    }
}
```

## PutProfileObjectType

<p>Defines a ProfileObjectType.</p> <p>To add or remove tags on an existing ObjectType, see <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_TagResource.html"> TagResource</a>/<a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p>

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
    res, err := s.SDK.PutProfileObjectType(ctx, operations.PutProfileObjectTypeRequest{
        DomainName: "fugit",
        ObjectTypeName: "fuga",
        RequestBody: operations.PutProfileObjectTypeRequestBody{
            AllowProfileCreation: sdk.Bool(false),
            Description: "mollitia",
            EncryptionKey: sdk.String("incidunt"),
            ExpirationDays: sdk.Int64(539224),
            Fields: map[string]shared.ObjectTypeField{
                "minima": shared.ObjectTypeField{
                    ContentType: shared.FieldContentTypeEnumNumber.ToPointer(),
                    Source: sdk.String("fugit"),
                    Target: sdk.String("sapiente"),
                },
            },
            Keys: map[string][]shared.ObjectTypeKey{
                "ratione": []shared.ObjectTypeKey{
                    shared.ObjectTypeKey{
                        FieldNames: []string{
                            "occaecati",
                            "atque",
                            "et",
                            "esse",
                        },
                        StandardIdentifiers: []shared.StandardIdentifierEnum{
                            shared.StandardIdentifierEnumOrder,
                            shared.StandardIdentifierEnumProfile,
                            shared.StandardIdentifierEnumUnique,
                            shared.StandardIdentifierEnumNewOnly,
                        },
                    },
                },
            },
            SourceLastUpdatedTimestampFormat: sdk.String("nam"),
            Tags: map[string]string{
                "aliquid": "quasi",
                "saepe": "vel",
                "harum": "molestiae",
                "rerum": "occaecati",
            },
            TemplateID: sdk.String("minima"),
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("eligendi"),
        XAmzCredential: sdk.String("sit"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("tempore"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("cumque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutProfileObjectTypeResponse != nil {
        // handle response
    }
}
```

## SearchProfiles

<p>Searches for profiles within a specific domain using one or more predefined search keys (e.g., _fullName, _phone, _email, _account, etc.) and/or custom-defined search keys. A search key is a data type pair that consists of a <code>KeyName</code> and <code>Values</code> list.</p> <p>This operation supports searching for profiles with a minimum of 1 key-value(s) pair and up to 5 key-value(s) pairs using either <code>AND</code> or <code>OR</code> logic.</p>

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
    res, err := s.SDK.SearchProfiles(ctx, operations.SearchProfilesRequest{
        DomainName: "consequuntur",
        RequestBody: operations.SearchProfilesRequestBody{
            AdditionalSearchKeys: []shared.AdditionalSearchKey{
                shared.AdditionalSearchKey{
                    KeyName: "minus",
                    Values: []string{
                        "sapiente",
                        "consectetur",
                    },
                },
            },
            KeyName: "esse",
            LogicalOperator: operations.SearchProfilesRequestBodyLogicalOperatorEnumOr.ToPointer(),
            Values: []string{
                "a",
                "nulla",
                "quas",
            },
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("possimus"),
        MaxResults: sdk.Int64(157632),
        NextToken: sdk.String("eveniet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchProfilesResponse != nil {
        // handle response
    }
}
```

## TagResource

<p>Assigns one or more tags (key-value pairs) to the specified Amazon Connect Customer Profiles resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. In Connect Customer Profiles, domains, profile object types, and integrations can be tagged.</p> <p>Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.</p> <p>You can use the TagResource action with a resource that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a resource.</p>

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
                "facere": "veritatis",
                "consequuntur": "quasi",
                "similique": "culpa",
                "aliquid": "tenetur",
            },
        },
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("illum"),
        ResourceArn: "soluta",
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

Removes one or more tags from the specified Amazon Connect Customer Profiles resource. In Connect Customer Profiles, domains, profile object types, and integrations can be tagged.

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
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("aliquam"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("reprehenderit"),
        XAmzSignedHeaders: sdk.String("ullam"),
        ResourceArn: "nisi",
        TagKeys: []string{
            "voluptatum",
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

## UpdateDomain

<p>Updates the properties of a domain, including creating or selecting a dead letter queue or an encryption key.</p> <p>After a domain is created, the name can’t be changed.</p> <p>Use this API or <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateDomain.html">CreateDomain</a> to enable <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">identity resolution</a>: set <code>Matching</code> to true. </p> <p>To prevent cross-service impersonation when you call this API, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cross-service-confused-deputy-prevention.html">Cross-service confused deputy prevention</a> for sample policies that you should apply. </p> <p>To add or remove tags on an existing Domain, see <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_TagResource.html">TagResource</a>/<a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p>

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
    res, err := s.SDK.UpdateDomain(ctx, operations.UpdateDomainRequest{
        DomainName: "qui",
        RequestBody: operations.UpdateDomainRequestBody{
            DeadLetterQueueURL: sdk.String("quibusdam"),
            DefaultEncryptionKey: sdk.String("ex"),
            DefaultExpirationDays: sdk.Int64(536275),
            Matching: &operations.UpdateDomainRequestBodyMatching{
                AutoMerging: &shared.AutoMerging{
                    ConflictResolution: &shared.ConflictResolution{
                        ConflictResolvingModel: shared.ConflictResolvingModelEnumSource,
                        SourceName: sdk.String("dolorum"),
                    },
                    Consolidation: &shared.Consolidation{
                        MatchingAttributesList: [][]string{
                            []string{
                                "tenetur",
                                "quasi",
                                "at",
                            },
                        },
                    },
                    Enabled: false,
                    MinAllowedConfidenceScoreForMerging: sdk.Float64(920.27),
                },
                Enabled: sdk.Bool(false),
                ExportingConfig: &shared.ExportingConfig{
                    S3Exporting: &shared.S3ExportingConfig{
                        S3BucketName: "voluptate",
                        S3KeyName: sdk.String("ipsa"),
                    },
                },
                JobSchedule: &shared.JobSchedule{
                    DayOfTheWeek: shared.JobScheduleDayOfTheWeekEnumTuesday,
                    Time: "veritatis",
                },
            },
            Tags: map[string]string{
                "adipisci": "iste",
            },
        },
        XAmzAlgorithm: sdk.String("temporibus"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("rem"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("mollitia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDomainResponse != nil {
        // handle response
    }
}
```

## UpdateProfile

<p>Updates the properties of a profile. The ProfileId is required for updating a customer profile.</p> <p>When calling the UpdateProfile API, specifying an empty string value means that any existing value will be removed. Not specifying a string value means that any value already there will be kept.</p>

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
    res, err := s.SDK.UpdateProfile(ctx, operations.UpdateProfileRequest{
        DomainName: "ab",
        RequestBody: operations.UpdateProfileRequestBody{
            AccountNumber: sdk.String("corrupti"),
            AdditionalInformation: sdk.String("non"),
            Address: &operations.UpdateProfileRequestBodyAddress{
                Address1: sdk.String("voluptatem"),
                Address2: sdk.String("dolor"),
                Address3: sdk.String("occaecati"),
                Address4: sdk.String("numquam"),
                City: sdk.String("Christiansenbury"),
                Country: sdk.String("Algeria"),
                County: sdk.String("dignissimos"),
                PostalCode: sdk.String("96293"),
                Province: sdk.String("asperiores"),
                State: sdk.String("aperiam"),
            },
            Attributes: map[string]string{
                "quaerat": "consequuntur",
                "repellendus": "officia",
            },
            BillingAddress: &operations.UpdateProfileRequestBodyBillingAddress{
                Address1: sdk.String("maxime"),
                Address2: sdk.String("dignissimos"),
                Address3: sdk.String("officia"),
                Address4: sdk.String("asperiores"),
                City: sdk.String("North Elwyn"),
                Country: sdk.String("Saudi Arabia"),
                County: sdk.String("quod"),
                PostalCode: sdk.String("02663"),
                Province: sdk.String("velit"),
                State: sdk.String("culpa"),
            },
            BirthDate: sdk.String("est"),
            BusinessEmailAddress: sdk.String("recusandae"),
            BusinessName: sdk.String("totam"),
            BusinessPhoneNumber: sdk.String("fugiat"),
            EmailAddress: sdk.String("vel"),
            FirstName: sdk.String("Jesse"),
            Gender: operations.UpdateProfileRequestBodyGenderEnumFemale.ToPointer(),
            GenderString: sdk.String("vel"),
            HomePhoneNumber: sdk.String("labore"),
            LastName: sdk.String("Senger"),
            MailingAddress: &operations.UpdateProfileRequestBodyMailingAddress{
                Address1: sdk.String("facilis"),
                Address2: sdk.String("cum"),
                Address3: sdk.String("commodi"),
                Address4: sdk.String("in"),
                City: sdk.String("Fort Rhoda"),
                Country: sdk.String("Guinea"),
                County: sdk.String("recusandae"),
                PostalCode: sdk.String("07243"),
                Province: sdk.String("earum"),
                State: sdk.String("facere"),
            },
            MiddleName: sdk.String("numquam"),
            MobilePhoneNumber: sdk.String("doloribus"),
            PartyType: operations.UpdateProfileRequestBodyPartyTypeEnumBusiness.ToPointer(),
            PartyTypeString: sdk.String("reiciendis"),
            PersonalEmailAddress: sdk.String("quidem"),
            PhoneNumber: sdk.String("saepe"),
            ProfileID: "necessitatibus",
            ShippingAddress: &operations.UpdateProfileRequestBodyShippingAddress{
                Address1: sdk.String("dolore"),
                Address2: sdk.String("sunt"),
                Address3: sdk.String("asperiores"),
                Address4: sdk.String("adipisci"),
                City: sdk.String("East Benjamin"),
                Country: sdk.String("Lebanon"),
                County: sdk.String("a"),
                PostalCode: sdk.String("23630-9718"),
                Province: sdk.String("similique"),
                State: sdk.String("tempora"),
            },
        },
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("dolorum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateProfileResponse != nil {
        // handle response
    }
}
```
