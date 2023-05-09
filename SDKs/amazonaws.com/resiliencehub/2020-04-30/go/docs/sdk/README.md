# SDK

## Overview

Resilience Hub helps you proactively prepare and protect your Amazon Web Services applications from disruptions. It offers continual resiliency assessment and validation that integrates into your software development lifecycle. This enables you to uncover resiliency weaknesses, ensure recovery time objective (RTO) and recovery point objective (RPO) targets for your applications are met, and resolve issues before they are released into production. 

Amazon Web Services documentation
<https://docs.aws.amazon.com/resiliencehub/>
### Available Operations

* [AddDraftAppVersionResourceMappings](#adddraftappversionresourcemappings) - Adds the resource mapping for the draft application version. You can also update an existing resource mapping to a new physical resource.
* [CreateApp](#createapp) - <p>Creates an Resilience Hub application. An Resilience Hub application is a collection of Amazon Web Services resources structured to prevent and recover Amazon Web Services application disruptions. To describe a Resilience Hub application, you provide an application name, resources from one or more–up to 20–CloudFormation stacks, and an appropriate resiliency policy.</p> <p>After you create an Resilience Hub application, you publish it so that you can run a resiliency assessment on it. You can then use recommendations from the assessment to improve resiliency by running another assessment, comparing results, and then iterating the process until you achieve your goals for recovery time objective (RTO) and recovery point objective (RPO).</p>
* [CreateAppVersionAppComponent](#createappversionappcomponent) - <p>Creates a new Application Component in the Resilience Hub application.</p> <note> <p>This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </note>
* [CreateAppVersionResource](#createappversionresource) - <p>Adds a resource to the Resilience Hub application and assigns it to the specified Application Components. If you specify a new Application Component, Resilience Hub will automatically create the Application Component.</p> <note> <ul> <li> <p>This action has no effect outside Resilience Hub.</p> </li> <li> <p>This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> <li> <p>To update application version with new <code>physicalResourceID</code>, you must call <code>ResolveAppVersionResources</code> API.</p> </li> </ul> </note>
* [CreateRecommendationTemplate](#createrecommendationtemplate) - Creates a new recommendation template for the Resilience Hub application.
* [CreateResiliencyPolicy](#createresiliencypolicy) - Creates a resiliency policy for an application.
* [DeleteApp](#deleteapp) - Deletes an Resilience Hub application. This is a destructive action that can't be undone.
* [DeleteAppAssessment](#deleteappassessment) - Deletes an Resilience Hub application assessment. This is a destructive action that can't be undone.
* [DeleteAppInputSource](#deleteappinputsource) - Deletes the input source and all of its imported resources from the Resilience Hub application.
* [DeleteAppVersionAppComponent](#deleteappversionappcomponent) - <p>Deletes an Application Component from the Resilience Hub application.</p> <note> <ul> <li> <p>This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> <li> <p>You will not be able to delete an Application Component if it has resources associated with it.</p> </li> </ul> </note>
* [DeleteAppVersionResource](#deleteappversionresource) - <p>Deletes a resource from the Resilience Hub application.</p> <note> <ul> <li> <p>You can only delete a manually added resource. To exclude non-manually added resources, use the <code>UpdateAppVersionResource</code> API.</p> </li> <li> <p>This action has no effect outside Resilience Hub.</p> </li> <li> <p>This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> </ul> </note>
* [DeleteRecommendationTemplate](#deleterecommendationtemplate) - Deletes a recommendation template. This is a destructive action that can't be undone.
* [DeleteResiliencyPolicy](#deleteresiliencypolicy) - Deletes a resiliency policy. This is a destructive action that can't be undone.
* [DescribeApp](#describeapp) - Describes an Resilience Hub application.
* [DescribeAppAssessment](#describeappassessment) - Describes an assessment for an Resilience Hub application.
* [DescribeAppVersion](#describeappversion) - Describes the Resilience Hub application version.
* [DescribeAppVersionAppComponent](#describeappversionappcomponent) - Describes an Application Component in the Resilience Hub application.
* [DescribeAppVersionResource](#describeappversionresource) - <p>Describes a resource of the Resilience Hub application.</p> <note> <p>This API accepts only one of the following parameters to descibe the resource:</p> <ul> <li> <p> <code>resourceName</code> </p> </li> <li> <p> <code>logicalResourceId</code> </p> </li> <li> <p> <code>physicalResourceId</code> (Along with <code>physicalResourceId</code>, you can also provide <code>awsAccountId</code>, and <code>awsRegion</code>)</p> </li> </ul> </note>
* [DescribeAppVersionResourcesResolutionStatus](#describeappversionresourcesresolutionstatus) - Returns the resolution status for the specified resolution identifier for an application version. If <code>resolutionId</code> is not specified, the current resolution status is returned.
* [DescribeAppVersionTemplate](#describeappversiontemplate) - Describes details about an Resilience Hub application.
* [DescribeDraftAppVersionResourcesImportStatus](#describedraftappversionresourcesimportstatus) - <p>Describes the status of importing resources to an application version.</p> <note> <p>If you get a 404 error with <code>ResourceImportStatusNotFoundAppMetadataException</code>, you must call <code>importResourcesToDraftAppVersion</code> after creating the application and before calling <code>describeDraftAppVersionResourcesImportStatus</code> to obtain the status.</p> </note>
* [DescribeResiliencyPolicy](#describeresiliencypolicy) - Describes a specified resiliency policy for an Resilience Hub application. The returned policy object includes creation time, data location constraints, the Amazon Resource Name (ARN) for the policy, tags, tier, and more.
* [ImportResourcesToDraftAppVersion](#importresourcestodraftappversion) - Imports resources to Resilience Hub application draft version from different input sources. For more information about the input sources supported by Resilience Hub, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/discover-structure.html">Discover the structure and describe your Resilience Hub application</a>.
* [ListAlarmRecommendations](#listalarmrecommendations) - Lists the alarm recommendations for an Resilience Hub application.
* [ListAppAssessments](#listappassessments) - Lists the assessments for an Resilience Hub application. You can use request parameters to refine the results for the response object.
* [ListAppComponentCompliances](#listappcomponentcompliances) - Lists the compliances for an Resilience Hub Application Component.
* [ListAppComponentRecommendations](#listappcomponentrecommendations) - Lists the recommendations for an Resilience Hub Application Component.
* [ListAppInputSources](#listappinputsources) - Lists all the input sources of the Resilience Hub application. For more information about the input sources supported by Resilience Hub, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/discover-structure.html">Discover the structure and describe your Resilience Hub application</a>.
* [ListAppVersionAppComponents](#listappversionappcomponents) - Lists all the Application Components in the Resilience Hub application.
* [ListAppVersionResourceMappings](#listappversionresourcemappings) - Lists how the resources in an application version are mapped/sourced from. Mappings can be physical resource identifiers, CloudFormation stacks, resource-groups, or an application registry app.
* [ListAppVersionResources](#listappversionresources) - Lists all the resources in an Resilience Hub application.
* [ListAppVersions](#listappversions) - Lists the different versions for the Resilience Hub applications.
* [ListApps](#listapps) - <p>Lists your Resilience Hub applications.</p> <note> <p>You can filter applications using only one filter at a time or without using any filter. If you try to filter applications using multiple filters, you will get the following error:</p> <p> <code>An error occurred (ValidationException) when calling the ListApps operation: Only one filter is supported for this operation.</code> </p> </note>
* [ListRecommendationTemplates](#listrecommendationtemplates) - Lists the recommendation templates for the Resilience Hub applications.
* [ListResiliencyPolicies](#listresiliencypolicies) - Lists the resiliency policies for the Resilience Hub applications.
* [ListSopRecommendations](#listsoprecommendations) - Lists the standard operating procedure (SOP) recommendations for the Resilience Hub applications.
* [ListSuggestedResiliencyPolicies](#listsuggestedresiliencypolicies) - Lists the suggested resiliency policies for the Resilience Hub applications.
* [ListTagsForResource](#listtagsforresource) - Lists the tags for your resources in your Resilience Hub applications.
* [ListTestRecommendations](#listtestrecommendations) - Lists the test recommendations for the Resilience Hub application.
* [ListUnsupportedAppVersionResources](#listunsupportedappversionresources) - Lists the resources that are not currently supported in Resilience Hub. An unsupported resource is a resource that exists in the object that was used to create an app, but is not supported by Resilience Hub.
* [PublishAppVersion](#publishappversion) - Publishes a new version of a specific Resilience Hub application.
* [PutDraftAppVersionTemplate](#putdraftappversiontemplate) - Adds or updates the app template for an Resilience Hub application draft version.
* [RemoveDraftAppVersionResourceMappings](#removedraftappversionresourcemappings) - Removes resource mappings from a draft application version.
* [ResolveAppVersionResources](#resolveappversionresources) - Resolves the resources for an application version.
* [StartAppAssessment](#startappassessment) - Creates a new application assessment for an application.
* [TagResource](#tagresource) - Applies one or more tags to a resource.
* [UntagResource](#untagresource) - Removes one or more tags from a resource.
* [UpdateApp](#updateapp) - Updates an application.
* [UpdateAppVersion](#updateappversion) - <p>Updates the Resilience Hub application version.</p> <note> <p>This API updates the Resilience Hub application draft version. To use this information for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </note>
* [UpdateAppVersionAppComponent](#updateappversionappcomponent) - <p>Updates an existing Application Component in the Resilience Hub application.</p> <note> <p>This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </note>
* [UpdateAppVersionResource](#updateappversionresource) - <p>Updates the resource details in the Resilience Hub application.</p> <note> <ul> <li> <p>This action has no effect outside Resilience Hub.</p> </li> <li> <p>This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> <li> <p>To update application version with new <code>physicalResourceID</code>, you must call <code>ResolveAppVersionResources</code> API.</p> </li> </ul> </note>
* [UpdateResiliencyPolicy](#updateresiliencypolicy) - Updates a resiliency policy.

## AddDraftAppVersionResourceMappings

Adds the resource mapping for the draft application version. You can also update an existing resource mapping to a new physical resource.

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
    res, err := s.SDK.AddDraftAppVersionResourceMappings(ctx, operations.AddDraftAppVersionResourceMappingsRequest{
        RequestBody: operations.AddDraftAppVersionResourceMappingsRequestBody{
            AppArn: "quod",
            ResourceMappings: []shared.ResourceMapping{
                shared.ResourceMapping{
                    AppRegistryAppName: sdk.String("esse"),
                    EksSourceName: sdk.String("totam"),
                    LogicalStackName: sdk.String("porro"),
                    MappingType: shared.ResourceMappingTypeEnumTerraform,
                    PhysicalResourceID: shared.PhysicalResourceID{
                        AwsAccountID: sdk.String("dicta"),
                        AwsRegion: sdk.String("nam"),
                        Identifier: "officia",
                        Type: shared.PhysicalIdentifierTypeEnumNative,
                    },
                    ResourceGroupName: sdk.String("fugit"),
                    ResourceName: sdk.String("deleniti"),
                    TerraformSourceName: sdk.String("hic"),
                },
                shared.ResourceMapping{
                    AppRegistryAppName: sdk.String("optio"),
                    EksSourceName: sdk.String("totam"),
                    LogicalStackName: sdk.String("beatae"),
                    MappingType: shared.ResourceMappingTypeEnumAppRegistryApp,
                    PhysicalResourceID: shared.PhysicalResourceID{
                        AwsAccountID: sdk.String("molestiae"),
                        AwsRegion: sdk.String("modi"),
                        Identifier: "qui",
                        Type: shared.PhysicalIdentifierTypeEnumNative,
                    },
                    ResourceGroupName: sdk.String("cum"),
                    ResourceName: sdk.String("esse"),
                    TerraformSourceName: sdk.String("ipsum"),
                },
                shared.ResourceMapping{
                    AppRegistryAppName: sdk.String("excepturi"),
                    EksSourceName: sdk.String("aspernatur"),
                    LogicalStackName: sdk.String("perferendis"),
                    MappingType: shared.ResourceMappingTypeEnumResource,
                    PhysicalResourceID: shared.PhysicalResourceID{
                        AwsAccountID: sdk.String("natus"),
                        AwsRegion: sdk.String("sed"),
                        Identifier: "iste",
                        Type: shared.PhysicalIdentifierTypeEnumArn,
                    },
                    ResourceGroupName: sdk.String("natus"),
                    ResourceName: sdk.String("laboriosam"),
                    TerraformSourceName: sdk.String("hic"),
                },
                shared.ResourceMapping{
                    AppRegistryAppName: sdk.String("saepe"),
                    EksSourceName: sdk.String("fuga"),
                    LogicalStackName: sdk.String("in"),
                    MappingType: shared.ResourceMappingTypeEnumAppRegistryApp,
                    PhysicalResourceID: shared.PhysicalResourceID{
                        AwsAccountID: sdk.String("iste"),
                        AwsRegion: sdk.String("iure"),
                        Identifier: "saepe",
                        Type: shared.PhysicalIdentifierTypeEnumNative,
                    },
                    ResourceGroupName: sdk.String("architecto"),
                    ResourceName: sdk.String("ipsa"),
                    TerraformSourceName: sdk.String("reiciendis"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("explicabo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddDraftAppVersionResourceMappingsResponse != nil {
        // handle response
    }
}
```

## CreateApp

<p>Creates an Resilience Hub application. An Resilience Hub application is a collection of Amazon Web Services resources structured to prevent and recover Amazon Web Services application disruptions. To describe a Resilience Hub application, you provide an application name, resources from one or more–up to 20–CloudFormation stacks, and an appropriate resiliency policy.</p> <p>After you create an Resilience Hub application, you publish it so that you can run a resiliency assessment on it. You can then use recommendations from the assessment to improve resiliency by running another assessment, comparing results, and then iterating the process until you achieve your goals for recovery time objective (RTO) and recovery point objective (RPO).</p>

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
    res, err := s.SDK.CreateApp(ctx, operations.CreateAppRequest{
        RequestBody: operations.CreateAppRequestBody{
            AssessmentSchedule: operations.CreateAppRequestBodyAssessmentScheduleEnumDaily.ToPointer(),
            ClientToken: sdk.String("enim"),
            Description: sdk.String("omnis"),
            Name: "Ms. Cathy Marks",
            PolicyArn: sdk.String("doloribus"),
            Tags: map[string]string{
                "architecto": "mollitia",
                "dolorem": "culpa",
                "consequuntur": "repellat",
                "mollitia": "occaecati",
            },
        },
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

    if res.CreateAppResponse != nil {
        // handle response
    }
}
```

## CreateAppVersionAppComponent

<p>Creates a new Application Component in the Resilience Hub application.</p> <note> <p>This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </note>

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
    res, err := s.SDK.CreateAppVersionAppComponent(ctx, operations.CreateAppVersionAppComponentRequest{
        RequestBody: operations.CreateAppVersionAppComponentRequestBody{
            AdditionalInfo: map[string][]string{
                "vitae": []string{
                    "animi",
                    "enim",
                    "odit",
                },
                "quo": []string{
                    "tenetur",
                },
            },
            AppArn: "ipsam",
            ClientToken: sdk.String("id"),
            ID: sdk.String("d019da1f-fe78-4f09-bb00-74f15471b5e6"),
            Name: "Eric Emmerich",
            Type: "excepturi",
        },
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("rem"),
        XAmzSecurityToken: sdk.String("voluptates"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAppVersionAppComponentResponse != nil {
        // handle response
    }
}
```

## CreateAppVersionResource

<p>Adds a resource to the Resilience Hub application and assigns it to the specified Application Components. If you specify a new Application Component, Resilience Hub will automatically create the Application Component.</p> <note> <ul> <li> <p>This action has no effect outside Resilience Hub.</p> </li> <li> <p>This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> <li> <p>To update application version with new <code>physicalResourceID</code>, you must call <code>ResolveAppVersionResources</code> API.</p> </li> </ul> </note>

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
    res, err := s.SDK.CreateAppVersionResource(ctx, operations.CreateAppVersionResourceRequest{
        RequestBody: operations.CreateAppVersionResourceRequestBody{
            AdditionalInfo: map[string][]string{
                "veritatis": []string{
                    "incidunt",
                    "enim",
                    "consequatur",
                    "est",
                },
                "quibusdam": []string{
                    "deserunt",
                },
                "distinctio": []string{
                    "labore",
                    "modi",
                    "qui",
                    "aliquid",
                },
            },
            AppArn: "cupiditate",
            AppComponents: []string{
                "perferendis",
                "magni",
                "assumenda",
            },
            AwsAccountID: sdk.String("ipsam"),
            AwsRegion: sdk.String("alias"),
            ClientToken: sdk.String("fugit"),
            LogicalResourceID: operations.CreateAppVersionResourceRequestBodyLogicalResourceID{
                EksSourceName: sdk.String("dolorum"),
                Identifier: sdk.String("excepturi"),
                LogicalStackName: sdk.String("tempora"),
                ResourceGroupName: sdk.String("facilis"),
                TerraformSourceName: sdk.String("tempore"),
            },
            PhysicalResourceID: "labore",
            ResourceName: "delectus",
            ResourceType: "eum",
        },
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("eligendi"),
        XAmzCredential: sdk.String("sint"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("sint"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAppVersionResourceResponse != nil {
        // handle response
    }
}
```

## CreateRecommendationTemplate

Creates a new recommendation template for the Resilience Hub application.

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
    res, err := s.SDK.CreateRecommendationTemplate(ctx, operations.CreateRecommendationTemplateRequest{
        RequestBody: operations.CreateRecommendationTemplateRequestBody{
            AssessmentArn: "officia",
            BucketName: sdk.String("dolor"),
            ClientToken: sdk.String("debitis"),
            Format: operations.CreateRecommendationTemplateRequestBodyFormatEnumCfnJSON.ToPointer(),
            Name: "Arnold Kirlin",
            RecommendationIds: []string{
                "dicta",
                "magnam",
                "cumque",
            },
            RecommendationTypes: []shared.RenderRecommendationTypeEnum{
                shared.RenderRecommendationTypeEnumSop,
                shared.RenderRecommendationTypeEnumSop,
                shared.RenderRecommendationTypeEnumTest,
                shared.RenderRecommendationTypeEnumTest,
            },
            Tags: map[string]string{
                "occaecati": "enim",
            },
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("blanditiis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRecommendationTemplateResponse != nil {
        // handle response
    }
}
```

## CreateResiliencyPolicy

Creates a resiliency policy for an application.

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
    res, err := s.SDK.CreateResiliencyPolicy(ctx, operations.CreateResiliencyPolicyRequest{
        RequestBody: operations.CreateResiliencyPolicyRequestBody{
            ClientToken: sdk.String("deleniti"),
            DataLocationConstraint: operations.CreateResiliencyPolicyRequestBodyDataLocationConstraintEnumSameCountry.ToPointer(),
            Policy: map[string]shared.FailurePolicy{
                "deserunt": shared.FailurePolicy{
                    RpoInSecs: 394869,
                    RtoInSecs: 423855,
                },
            },
            PolicyDescription: sdk.String("natus"),
            PolicyName: "omnis",
            Tags: map[string]string{
                "perferendis": "nihil",
                "magnam": "distinctio",
            },
            Tier: operations.CreateResiliencyPolicyRequestBodyTierEnumCoreServices,
        },
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("vero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateResiliencyPolicyResponse != nil {
        // handle response
    }
}
```

## DeleteApp

Deletes an Resilience Hub application. This is a destructive action that can't be undone.

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
    res, err := s.SDK.DeleteApp(ctx, operations.DeleteAppRequest{
        RequestBody: operations.DeleteAppRequestBody{
            AppArn: "aspernatur",
            ClientToken: sdk.String("architecto"),
            ForceDelete: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("sint"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAppResponse != nil {
        // handle response
    }
}
```

## DeleteAppAssessment

Deletes an Resilience Hub application assessment. This is a destructive action that can't be undone.

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
    res, err := s.SDK.DeleteAppAssessment(ctx, operations.DeleteAppAssessmentRequest{
        RequestBody: operations.DeleteAppAssessmentRequestBody{
            AssessmentArn: "accusantium",
            ClientToken: sdk.String("mollitia"),
        },
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

    if res.DeleteAppAssessmentResponse != nil {
        // handle response
    }
}
```

## DeleteAppInputSource

Deletes the input source and all of its imported resources from the Resilience Hub application.

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
    res, err := s.SDK.DeleteAppInputSource(ctx, operations.DeleteAppInputSourceRequest{
        RequestBody: operations.DeleteAppInputSourceRequestBody{
            AppArn: "nemo",
            ClientToken: sdk.String("quasi"),
            EksSourceClusterNamespace: &operations.DeleteAppInputSourceRequestBodyEksSourceClusterNamespace{
                EksClusterArn: sdk.String("iure"),
                Namespace: sdk.String("doloribus"),
            },
            SourceArn: sdk.String("debitis"),
            TerraformSource: &operations.DeleteAppInputSourceRequestBodyTerraformSource{
                S3StateFileURL: sdk.String("eius"),
            },
        },
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAppInputSourceResponse != nil {
        // handle response
    }
}
```

## DeleteAppVersionAppComponent

<p>Deletes an Application Component from the Resilience Hub application.</p> <note> <ul> <li> <p>This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> <li> <p>You will not be able to delete an Application Component if it has resources associated with it.</p> </li> </ul> </note>

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
    res, err := s.SDK.DeleteAppVersionAppComponent(ctx, operations.DeleteAppVersionAppComponentRequest{
        RequestBody: operations.DeleteAppVersionAppComponentRequestBody{
            AppArn: "ullam",
            ClientToken: sdk.String("expedita"),
            ID: "7fd2ed02-8921-4cdd-8692-601fb576b0d5",
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

    if res.DeleteAppVersionAppComponentResponse != nil {
        // handle response
    }
}
```

## DeleteAppVersionResource

<p>Deletes a resource from the Resilience Hub application.</p> <note> <ul> <li> <p>You can only delete a manually added resource. To exclude non-manually added resources, use the <code>UpdateAppVersionResource</code> API.</p> </li> <li> <p>This action has no effect outside Resilience Hub.</p> </li> <li> <p>This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> </ul> </note>

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
    res, err := s.SDK.DeleteAppVersionResource(ctx, operations.DeleteAppVersionResourceRequest{
        RequestBody: operations.DeleteAppVersionResourceRequestBody{
            AppArn: "hic",
            AwsAccountID: sdk.String("libero"),
            AwsRegion: sdk.String("nobis"),
            ClientToken: sdk.String("dolores"),
            LogicalResourceID: &operations.DeleteAppVersionResourceRequestBodyLogicalResourceID{
                EksSourceName: sdk.String("quis"),
                Identifier: sdk.String("totam"),
                LogicalStackName: sdk.String("dignissimos"),
                ResourceGroupName: sdk.String("eaque"),
                TerraformSourceName: sdk.String("quis"),
            },
            PhysicalResourceID: sdk.String("nesciunt"),
            ResourceName: sdk.String("eos"),
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("quam"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("nostrum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAppVersionResourceResponse != nil {
        // handle response
    }
}
```

## DeleteRecommendationTemplate

Deletes a recommendation template. This is a destructive action that can't be undone.

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
    res, err := s.SDK.DeleteRecommendationTemplate(ctx, operations.DeleteRecommendationTemplateRequest{
        RequestBody: operations.DeleteRecommendationTemplateRequestBody{
            ClientToken: sdk.String("hic"),
            RecommendationTemplateArn: "recusandae",
        },
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("perspiciatis"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("porro"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("blanditiis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteRecommendationTemplateResponse != nil {
        // handle response
    }
}
```

## DeleteResiliencyPolicy

Deletes a resiliency policy. This is a destructive action that can't be undone.

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
    res, err := s.SDK.DeleteResiliencyPolicy(ctx, operations.DeleteResiliencyPolicyRequest{
        RequestBody: operations.DeleteResiliencyPolicyRequestBody{
            ClientToken: sdk.String("error"),
            PolicyArn: "eaque",
        },
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

    if res.DeleteResiliencyPolicyResponse != nil {
        // handle response
    }
}
```

## DescribeApp

Describes an Resilience Hub application.

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
    res, err := s.SDK.DescribeApp(ctx, operations.DescribeAppRequest{
        RequestBody: operations.DescribeAppRequestBody{
            AppArn: "dolorum",
        },
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("quaerat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAppResponse != nil {
        // handle response
    }
}
```

## DescribeAppAssessment

Describes an assessment for an Resilience Hub application.

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
    res, err := s.SDK.DescribeAppAssessment(ctx, operations.DescribeAppAssessmentRequest{
        RequestBody: operations.DescribeAppAssessmentRequestBody{
            AssessmentArn: "quos",
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("hic"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAppAssessmentResponse != nil {
        // handle response
    }
}
```

## DescribeAppVersion

Describes the Resilience Hub application version.

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
    res, err := s.SDK.DescribeAppVersion(ctx, operations.DescribeAppVersionRequest{
        RequestBody: operations.DescribeAppVersionRequestBody{
            AppArn: "excepturi",
            AppVersion: "cum",
        },
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("veritatis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAppVersionResponse != nil {
        // handle response
    }
}
```

## DescribeAppVersionAppComponent

Describes an Application Component in the Resilience Hub application.

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
    res, err := s.SDK.DescribeAppVersionAppComponent(ctx, operations.DescribeAppVersionAppComponentRequest{
        RequestBody: operations.DescribeAppVersionAppComponentRequestBody{
            AppArn: "ipsa",
            AppVersion: "ipsa",
            ID: "674ebf69-280d-41ba-b7a8-9ebf737ae420",
        },
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("optio"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("ad"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("deserunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAppVersionAppComponentResponse != nil {
        // handle response
    }
}
```

## DescribeAppVersionResource

<p>Describes a resource of the Resilience Hub application.</p> <note> <p>This API accepts only one of the following parameters to descibe the resource:</p> <ul> <li> <p> <code>resourceName</code> </p> </li> <li> <p> <code>logicalResourceId</code> </p> </li> <li> <p> <code>physicalResourceId</code> (Along with <code>physicalResourceId</code>, you can also provide <code>awsAccountId</code>, and <code>awsRegion</code>)</p> </li> </ul> </note>

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
    res, err := s.SDK.DescribeAppVersionResource(ctx, operations.DescribeAppVersionResourceRequest{
        RequestBody: operations.DescribeAppVersionResourceRequestBody{
            AppArn: "provident",
            AppVersion: "minima",
            AwsAccountID: sdk.String("repellendus"),
            AwsRegion: sdk.String("totam"),
            LogicalResourceID: &operations.DescribeAppVersionResourceRequestBodyLogicalResourceID{
                EksSourceName: sdk.String("similique"),
                Identifier: sdk.String("alias"),
                LogicalStackName: sdk.String("at"),
                ResourceGroupName: sdk.String("quaerat"),
                TerraformSourceName: sdk.String("tempora"),
            },
            PhysicalResourceID: sdk.String("vel"),
            ResourceName: sdk.String("quod"),
        },
        XAmzAlgorithm: sdk.String("officiis"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("a"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("harum"),
        XAmzSignedHeaders: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAppVersionResourceResponse != nil {
        // handle response
    }
}
```

## DescribeAppVersionResourcesResolutionStatus

Returns the resolution status for the specified resolution identifier for an application version. If <code>resolutionId</code> is not specified, the current resolution status is returned.

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
    res, err := s.SDK.DescribeAppVersionResourcesResolutionStatus(ctx, operations.DescribeAppVersionResourcesResolutionStatusRequest{
        RequestBody: operations.DescribeAppVersionResourcesResolutionStatusRequestBody{
            AppArn: "ipsum",
            AppVersion: "quisquam",
            ResolutionID: sdk.String("tenetur"),
        },
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("tempore"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAppVersionResourcesResolutionStatusResponse != nil {
        // handle response
    }
}
```

## DescribeAppVersionTemplate

Describes details about an Resilience Hub application.

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
    res, err := s.SDK.DescribeAppVersionTemplate(ctx, operations.DescribeAppVersionTemplateRequest{
        RequestBody: operations.DescribeAppVersionTemplateRequestBody{
            AppArn: "totam",
            AppVersion: "nihil",
        },
        XAmzAlgorithm: sdk.String("sit"),
        XAmzContentSha256: sdk.String("expedita"),
        XAmzCredential: sdk.String("neque"),
        XAmzDate: sdk.String("sed"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("voluptas"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAppVersionTemplateResponse != nil {
        // handle response
    }
}
```

## DescribeDraftAppVersionResourcesImportStatus

<p>Describes the status of importing resources to an application version.</p> <note> <p>If you get a 404 error with <code>ResourceImportStatusNotFoundAppMetadataException</code>, you must call <code>importResourcesToDraftAppVersion</code> after creating the application and before calling <code>describeDraftAppVersionResourcesImportStatus</code> to obtain the status.</p> </note>

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
    res, err := s.SDK.DescribeDraftAppVersionResourcesImportStatus(ctx, operations.DescribeDraftAppVersionResourcesImportStatusRequest{
        RequestBody: operations.DescribeDraftAppVersionResourcesImportStatusRequestBody{
            AppArn: "deserunt",
        },
        XAmzAlgorithm: sdk.String("quam"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("cupiditate"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("pariatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDraftAppVersionResourcesImportStatusResponse != nil {
        // handle response
    }
}
```

## DescribeResiliencyPolicy

Describes a specified resiliency policy for an Resilience Hub application. The returned policy object includes creation time, data location constraints, the Amazon Resource Name (ARN) for the policy, tags, tier, and more.

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
    res, err := s.SDK.DescribeResiliencyPolicy(ctx, operations.DescribeResiliencyPolicyRequest{
        RequestBody: operations.DescribeResiliencyPolicyRequestBody{
            PolicyArn: "soluta",
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("dolores"),
        XAmzSignedHeaders: sdk.String("distinctio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeResiliencyPolicyResponse != nil {
        // handle response
    }
}
```

## ImportResourcesToDraftAppVersion

Imports resources to Resilience Hub application draft version from different input sources. For more information about the input sources supported by Resilience Hub, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/discover-structure.html">Discover the structure and describe your Resilience Hub application</a>.

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
    res, err := s.SDK.ImportResourcesToDraftAppVersion(ctx, operations.ImportResourcesToDraftAppVersionRequest{
        RequestBody: operations.ImportResourcesToDraftAppVersionRequestBody{
            AppArn: "facilis",
            EksSources: []shared.EksSource{
                shared.EksSource{
                    EksClusterArn: "quam",
                    Namespaces: []string{
                        "temporibus",
                        "qui",
                        "neque",
                    },
                },
                shared.EksSource{
                    EksClusterArn: "fugit",
                    Namespaces: []string{
                        "odio",
                    },
                },
            },
            ImportStrategy: operations.ImportResourcesToDraftAppVersionRequestBodyImportStrategyEnumAddOnly.ToPointer(),
            SourceArns: []string{
                "nam",
                "hic",
            },
            TerraformSources: []shared.TerraformSource{
                shared.TerraformSource{
                    S3StateFileURL: "cumque",
                },
            },
        },
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("et"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("nobis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportResourcesToDraftAppVersionResponse != nil {
        // handle response
    }
}
```

## ListAlarmRecommendations

Lists the alarm recommendations for an Resilience Hub application.

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
    res, err := s.SDK.ListAlarmRecommendations(ctx, operations.ListAlarmRecommendationsRequest{
        RequestBody: operations.ListAlarmRecommendationsRequestBody{
            AssessmentArn: "quos",
            MaxResults: sdk.Int64(731694),
            NextToken: sdk.String("cupiditate"),
        },
        XAmzAlgorithm: sdk.String("aperiam"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        MaxResults: sdk.String("architecto"),
        NextToken: sdk.String("quae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAlarmRecommendationsResponse != nil {
        // handle response
    }
}
```

## ListAppAssessments

Lists the assessments for an Resilience Hub application. You can use request parameters to refine the results for the response object.

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
    res, err := s.SDK.ListAppAssessments(ctx, operations.ListAppAssessmentsRequest{
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("itaque"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("porro"),
        AppArn: sdk.String("doloribus"),
        AssessmentName: sdk.String("ut"),
        AssessmentStatus: []shared.AssessmentStatusEnum{
            shared.AssessmentStatusEnumFailed,
            shared.AssessmentStatusEnumPending,
            shared.AssessmentStatusEnumPending,
        },
        ComplianceStatus: operations.ListAppAssessmentsComplianceStatusEnumPolicyMet.ToPointer(),
        Invoker: operations.ListAppAssessmentsInvokerEnumUser.ToPointer(),
        MaxResults: sdk.Int64(580447),
        NextToken: sdk.String("voluptatibus"),
        ReverseOrder: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAppAssessmentsResponse != nil {
        // handle response
    }
}
```

## ListAppComponentCompliances

Lists the compliances for an Resilience Hub Application Component.

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
    res, err := s.SDK.ListAppComponentCompliances(ctx, operations.ListAppComponentCompliancesRequest{
        RequestBody: operations.ListAppComponentCompliancesRequestBody{
            AssessmentArn: "quisquam",
            MaxResults: sdk.Int64(876506),
            NextToken: sdk.String("omnis"),
        },
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("consectetur"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("tenetur"),
        MaxResults: sdk.String("dignissimos"),
        NextToken: sdk.String("hic"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAppComponentCompliancesResponse != nil {
        // handle response
    }
}
```

## ListAppComponentRecommendations

Lists the recommendations for an Resilience Hub Application Component.

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
    res, err := s.SDK.ListAppComponentRecommendations(ctx, operations.ListAppComponentRecommendationsRequest{
        RequestBody: operations.ListAppComponentRecommendationsRequestBody{
            AssessmentArn: "distinctio",
            MaxResults: sdk.Int64(799203),
            NextToken: sdk.String("odio"),
        },
        XAmzAlgorithm: sdk.String("similique"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("ducimus"),
        XAmzSecurityToken: sdk.String("dolore"),
        XAmzSignature: sdk.String("quibusdam"),
        XAmzSignedHeaders: sdk.String("illum"),
        MaxResults: sdk.String("sequi"),
        NextToken: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAppComponentRecommendationsResponse != nil {
        // handle response
    }
}
```

## ListAppInputSources

Lists all the input sources of the Resilience Hub application. For more information about the input sources supported by Resilience Hub, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/discover-structure.html">Discover the structure and describe your Resilience Hub application</a>.

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
    res, err := s.SDK.ListAppInputSources(ctx, operations.ListAppInputSourcesRequest{
        RequestBody: operations.ListAppInputSourcesRequestBody{
            AppArn: "impedit",
            AppVersion: "aut",
            MaxResults: sdk.Int64(974259),
            NextToken: sdk.String("exercitationem"),
        },
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("porro"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("doloribus"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("eligendi"),
        MaxResults: sdk.String("ducimus"),
        NextToken: sdk.String("alias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAppInputSourcesResponse != nil {
        // handle response
    }
}
```

## ListAppVersionAppComponents

Lists all the Application Components in the Resilience Hub application.

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
    res, err := s.SDK.ListAppVersionAppComponents(ctx, operations.ListAppVersionAppComponentsRequest{
        RequestBody: operations.ListAppVersionAppComponentsRequestBody{
            AppArn: "officia",
            AppVersion: "tempora",
            MaxResults: sdk.Int64(368584),
            NextToken: sdk.String("ea"),
        },
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("possimus"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("ratione"),
        XAmzSignature: sdk.String("ex"),
        XAmzSignedHeaders: sdk.String("laudantium"),
        MaxResults: sdk.String("dicta"),
        NextToken: sdk.String("dolor"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAppVersionAppComponentsResponse != nil {
        // handle response
    }
}
```

## ListAppVersionResourceMappings

Lists how the resources in an application version are mapped/sourced from. Mappings can be physical resource identifiers, CloudFormation stacks, resource-groups, or an application registry app.

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
    res, err := s.SDK.ListAppVersionResourceMappings(ctx, operations.ListAppVersionResourceMappingsRequest{
        RequestBody: operations.ListAppVersionResourceMappingsRequestBody{
            AppArn: "maiores",
            AppVersion: "quasi",
            MaxResults: sdk.Int64(406120),
            NextToken: sdk.String("nulla"),
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("nostrum"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("ea"),
        MaxResults: sdk.String("impedit"),
        NextToken: sdk.String("corporis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAppVersionResourceMappingsResponse != nil {
        // handle response
    }
}
```

## ListAppVersionResources

Lists all the resources in an Resilience Hub application.

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
    res, err := s.SDK.ListAppVersionResources(ctx, operations.ListAppVersionResourcesRequest{
        RequestBody: operations.ListAppVersionResourcesRequestBody{
            AppArn: "veniam",
            AppVersion: "aliquid",
            MaxResults: sdk.Int64(81101),
            NextToken: sdk.String("magnam"),
            ResolutionID: sdk.String("ea"),
        },
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("consectetur"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("eaque"),
        XAmzSignedHeaders: sdk.String("a"),
        MaxResults: sdk.String("libero"),
        NextToken: sdk.String("aut"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAppVersionResourcesResponse != nil {
        // handle response
    }
}
```

## ListAppVersions

Lists the different versions for the Resilience Hub applications.

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
    res, err := s.SDK.ListAppVersions(ctx, operations.ListAppVersionsRequest{
        RequestBody: operations.ListAppVersionsRequestBody{
            AppArn: "aut",
            MaxResults: sdk.Int64(533466),
            NextToken: sdk.String("impedit"),
        },
        XAmzAlgorithm: sdk.String("aliquam"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("inventore"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("et"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        MaxResults: sdk.String("laborum"),
        NextToken: sdk.String("placeat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAppVersionsResponse != nil {
        // handle response
    }
}
```

## ListApps

<p>Lists your Resilience Hub applications.</p> <note> <p>You can filter applications using only one filter at a time or without using any filter. If you try to filter applications using multiple filters, you will get the following error:</p> <p> <code>An error occurred (ValidationException) when calling the ListApps operation: Only one filter is supported for this operation.</code> </p> </note>

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
    res, err := s.SDK.ListApps(ctx, operations.ListAppsRequest{
        XAmzAlgorithm: sdk.String("velit"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("autem"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("quas"),
        XAmzSignature: sdk.String("assumenda"),
        XAmzSignedHeaders: sdk.String("nulla"),
        AppArn: sdk.String("voluptas"),
        MaxResults: sdk.Int64(727044),
        Name: sdk.String("Anita Gerhold"),
        NextToken: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAppsResponse != nil {
        // handle response
    }
}
```

## ListRecommendationTemplates

Lists the recommendation templates for the Resilience Hub applications.

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
    res, err := s.SDK.ListRecommendationTemplates(ctx, operations.ListRecommendationTemplatesRequest{
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("rem"),
        AssessmentArn: "fuga",
        MaxResults: sdk.Int64(442015),
        Name: sdk.String("Nicolas Graham"),
        NextToken: sdk.String("assumenda"),
        RecommendationTemplateArn: sdk.String("eos"),
        ReverseOrder: sdk.Bool(false),
        Status: []shared.RecommendationTemplateStatusEnum{
            shared.RecommendationTemplateStatusEnumSuccess,
            shared.RecommendationTemplateStatusEnumPending,
            shared.RecommendationTemplateStatusEnumPending,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRecommendationTemplatesResponse != nil {
        // handle response
    }
}
```

## ListResiliencyPolicies

Lists the resiliency policies for the Resilience Hub applications.

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
    res, err := s.SDK.ListResiliencyPolicies(ctx, operations.ListResiliencyPoliciesRequest{
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("neque"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("fuga"),
        MaxResults: sdk.Int64(259422),
        NextToken: sdk.String("eos"),
        PolicyName: sdk.String("voluptas"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListResiliencyPoliciesResponse != nil {
        // handle response
    }
}
```

## ListSopRecommendations

Lists the standard operating procedure (SOP) recommendations for the Resilience Hub applications.

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
    res, err := s.SDK.ListSopRecommendations(ctx, operations.ListSopRecommendationsRequest{
        RequestBody: operations.ListSopRecommendationsRequestBody{
            AssessmentArn: "ab",
            MaxResults: sdk.Int64(587600),
            NextToken: sdk.String("consequatur"),
        },
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("esse"),
        MaxResults: sdk.String("recusandae"),
        NextToken: sdk.String("aperiam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSopRecommendationsResponse != nil {
        // handle response
    }
}
```

## ListSuggestedResiliencyPolicies

Lists the suggested resiliency policies for the Resilience Hub applications.

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
    res, err := s.SDK.ListSuggestedResiliencyPolicies(ctx, operations.ListSuggestedResiliencyPoliciesRequest{
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("inventore"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        MaxResults: sdk.Int64(306810),
        NextToken: sdk.String("odio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSuggestedResiliencyPoliciesResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists the tags for your resources in your Resilience Hub applications.

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
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("accusantium"),
        ResourceArn: "porro",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListTestRecommendations

Lists the test recommendations for the Resilience Hub application.

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
    res, err := s.SDK.ListTestRecommendations(ctx, operations.ListTestRecommendationsRequest{
        RequestBody: operations.ListTestRecommendationsRequestBody{
            AssessmentArn: "eum",
            MaxResults: sdk.Int64(556429),
            NextToken: sdk.String("praesentium"),
        },
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("fuga"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("atque"),
        MaxResults: sdk.String("explicabo"),
        NextToken: sdk.String("minima"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTestRecommendationsResponse != nil {
        // handle response
    }
}
```

## ListUnsupportedAppVersionResources

Lists the resources that are not currently supported in Resilience Hub. An unsupported resource is a resource that exists in the object that was used to create an app, but is not supported by Resilience Hub.

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
    res, err := s.SDK.ListUnsupportedAppVersionResources(ctx, operations.ListUnsupportedAppVersionResourcesRequest{
        RequestBody: operations.ListUnsupportedAppVersionResourcesRequestBody{
            AppArn: "nisi",
            AppVersion: "fugit",
            MaxResults: sdk.Int64(956406),
            NextToken: sdk.String("consequuntur"),
            ResolutionID: sdk.String("ratione"),
        },
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("eveniet"),
        MaxResults: sdk.String("accusamus"),
        NextToken: sdk.String("veritatis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUnsupportedAppVersionResourcesResponse != nil {
        // handle response
    }
}
```

## PublishAppVersion

Publishes a new version of a specific Resilience Hub application.

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
    res, err := s.SDK.PublishAppVersion(ctx, operations.PublishAppVersionRequest{
        RequestBody: operations.PublishAppVersionRequestBody{
            AppArn: "esse",
        },
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("vel"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublishAppVersionResponse != nil {
        // handle response
    }
}
```

## PutDraftAppVersionTemplate

Adds or updates the app template for an Resilience Hub application draft version.

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
    res, err := s.SDK.PutDraftAppVersionTemplate(ctx, operations.PutDraftAppVersionTemplateRequest{
        RequestBody: operations.PutDraftAppVersionTemplateRequestBody{
            AppArn: "harum",
            AppTemplateBody: "molestiae",
        },
        XAmzAlgorithm: sdk.String("rerum"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("eligendi"),
        XAmzSignature: sdk.String("sit"),
        XAmzSignedHeaders: sdk.String("culpa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutDraftAppVersionTemplateResponse != nil {
        // handle response
    }
}
```

## RemoveDraftAppVersionResourceMappings

Removes resource mappings from a draft application version.

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
    res, err := s.SDK.RemoveDraftAppVersionResourceMappings(ctx, operations.RemoveDraftAppVersionResourceMappingsRequest{
        RequestBody: operations.RemoveDraftAppVersionResourceMappingsRequestBody{
            AppArn: "tempore",
            AppRegistryAppNames: []string{
                "cumque",
            },
            EksSourceNames: []string{
                "consequatur",
            },
            LogicalStackNames: []string{
                "quaerat",
                "sapiente",
                "consectetur",
                "esse",
            },
            ResourceGroupNames: []string{
                "provident",
                "a",
                "nulla",
            },
            ResourceNames: []string{
                "esse",
                "quasi",
                "a",
            },
            TerraformSourceNames: []string{
                "sint",
                "pariatur",
                "possimus",
            },
        },
        XAmzAlgorithm: sdk.String("quia"),
        XAmzContentSha256: sdk.String("eveniet"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("facere"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("quasi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveDraftAppVersionResourceMappingsResponse != nil {
        // handle response
    }
}
```

## ResolveAppVersionResources

Resolves the resources for an application version.

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
    res, err := s.SDK.ResolveAppVersionResources(ctx, operations.ResolveAppVersionResourcesRequest{
        RequestBody: operations.ResolveAppVersionResourcesRequestBody{
            AppArn: "similique",
            AppVersion: "culpa",
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("tenetur"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("earum"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("eius"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResolveAppVersionResourcesResponse != nil {
        // handle response
    }
}
```

## StartAppAssessment

Creates a new application assessment for an application.

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
    res, err := s.SDK.StartAppAssessment(ctx, operations.StartAppAssessmentRequest{
        RequestBody: operations.StartAppAssessmentRequestBody{
            AppArn: "libero",
            AppVersion: "illum",
            AssessmentName: "soluta",
            ClientToken: sdk.String("accusantium"),
            Tags: map[string]string{
                "sapiente": "dicta",
                "ullam": "reprehenderit",
            },
        },
        XAmzAlgorithm: sdk.String("ullam"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("voluptatum"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("quibusdam"),
        XAmzSignedHeaders: sdk.String("ex"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartAppAssessmentResponse != nil {
        // handle response
    }
}
```

## TagResource

Applies one or more tags to a resource.

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
                "itaque": "dolorum",
                "architecto": "omnis",
                "tenetur": "quasi",
            },
        },
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("consectetur"),
        ResourceArn: "adipisci",
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

Removes one or more tags from a resource.

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
        XAmzAlgorithm: sdk.String("iste"),
        XAmzContentSha256: sdk.String("temporibus"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("rem"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("laudantium"),
        XAmzSignedHeaders: sdk.String("eum"),
        ResourceArn: "mollitia",
        TagKeys: []string{
            "corrupti",
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

## UpdateApp

Updates an application.

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
    res, err := s.SDK.UpdateApp(ctx, operations.UpdateAppRequest{
        RequestBody: operations.UpdateAppRequestBody{
            AppArn: "non",
            AssessmentSchedule: operations.UpdateAppRequestBodyAssessmentScheduleEnumDisabled.ToPointer(),
            ClearResiliencyPolicyArn: sdk.Bool(false),
            Description: sdk.String("dolor"),
            PolicyArn: sdk.String("occaecati"),
        },
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAppResponse != nil {
        // handle response
    }
}
```

## UpdateAppVersion

<p>Updates the Resilience Hub application version.</p> <note> <p>This API updates the Resilience Hub application draft version. To use this information for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </note>

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
    res, err := s.SDK.UpdateAppVersion(ctx, operations.UpdateAppVersionRequest{
        RequestBody: operations.UpdateAppVersionRequestBody{
            AdditionalInfo: map[string][]string{
                "natus": []string{
                    "voluptatibus",
                },
                "voluptas": []string{
                    "aperiam",
                    "ea",
                    "quaerat",
                    "consequuntur",
                },
                "repellendus": []string{
                    "maxime",
                    "dignissimos",
                    "officia",
                },
                "asperiores": []string{
                    "quae",
                    "quaerat",
                },
            },
            AppArn: "porro",
        },
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("ab"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("suscipit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAppVersionResponse != nil {
        // handle response
    }
}
```

## UpdateAppVersionAppComponent

<p>Updates an existing Application Component in the Resilience Hub application.</p> <note> <p>This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </note>

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
    res, err := s.SDK.UpdateAppVersionAppComponent(ctx, operations.UpdateAppVersionAppComponentRequest{
        RequestBody: operations.UpdateAppVersionAppComponentRequestBody{
            AdditionalInfo: map[string][]string{
                "culpa": []string{
                    "recusandae",
                    "totam",
                    "fugiat",
                },
            },
            AppArn: "vel",
            ID: "7864dbb6-75fd-45e6-8b37-5ed4f6fbee41",
            Name: sdk.String("Chad Franey IV"),
            Type: sdk.String("a"),
        },
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("consectetur"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("harum"),
        XAmzSecurityToken: sdk.String("laboriosam"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("voluptates"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAppVersionAppComponentResponse != nil {
        // handle response
    }
}
```

## UpdateAppVersionResource

<p>Updates the resource details in the Resilience Hub application.</p> <note> <ul> <li> <p>This action has no effect outside Resilience Hub.</p> </li> <li> <p>This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> <li> <p>To update application version with new <code>physicalResourceID</code>, you must call <code>ResolveAppVersionResources</code> API.</p> </li> </ul> </note>

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
    res, err := s.SDK.UpdateAppVersionResource(ctx, operations.UpdateAppVersionResourceRequest{
        RequestBody: operations.UpdateAppVersionResourceRequestBody{
            AdditionalInfo: map[string][]string{
                "vitae": []string{
                    "similique",
                    "tempora",
                    "aspernatur",
                    "voluptas",
                },
                "voluptas": []string{
                    "minima",
                    "nobis",
                },
                "dolorum": []string{
                    "minus",
                },
            },
            AppArn: "dolores",
            AppComponents: []string{
                "in",
                "dolore",
                "aliquam",
            },
            AwsAccountID: sdk.String("officiis"),
            AwsRegion: sdk.String("temporibus"),
            Excluded: sdk.Bool(false),
            LogicalResourceID: &operations.UpdateAppVersionResourceRequestBodyLogicalResourceID{
                EksSourceName: sdk.String("ullam"),
                Identifier: sdk.String("adipisci"),
                LogicalStackName: sdk.String("cum"),
                ResourceGroupName: sdk.String("blanditiis"),
                TerraformSourceName: sdk.String("quas"),
            },
            PhysicalResourceID: sdk.String("hic"),
            ResourceName: sdk.String("nesciunt"),
            ResourceType: sdk.String("culpa"),
        },
        XAmzAlgorithm: sdk.String("corrupti"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("exercitationem"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("sit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAppVersionResourceResponse != nil {
        // handle response
    }
}
```

## UpdateResiliencyPolicy

Updates a resiliency policy.

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
    res, err := s.SDK.UpdateResiliencyPolicy(ctx, operations.UpdateResiliencyPolicyRequest{
        RequestBody: operations.UpdateResiliencyPolicyRequestBody{
            DataLocationConstraint: operations.UpdateResiliencyPolicyRequestBodyDataLocationConstraintEnumSameCountry.ToPointer(),
            Policy: map[string]shared.FailurePolicy{
                "reiciendis": shared.FailurePolicy{
                    RpoInSecs: 131852,
                    RtoInSecs: 994401,
                },
            },
            PolicyArn: "facilis",
            PolicyDescription: sdk.String("voluptate"),
            PolicyName: sdk.String("expedita"),
            Tier: operations.UpdateResiliencyPolicyRequestBodyTierEnumMissionCritical.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("iste"),
        XAmzContentSha256: sdk.String("dolore"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("sed"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("quidem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateResiliencyPolicyResponse != nil {
        // handle response
    }
}
```
