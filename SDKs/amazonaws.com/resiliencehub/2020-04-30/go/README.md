# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/resiliencehub/2020-04-30/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.AddDraftAppVersionResourceMappingsRequest{
        Headers: operations.AddDraftAppVersionResourceMappingsHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.AddDraftAppVersionResourceMappingsRequestBody{
            AppArn: "nulla",
            ResourceMappings: []shared.ResourceMapping{
                shared.ResourceMapping{
                    AppRegistryAppName: "fuga",
                    LogicalStackName: "facilis",
                    MappingType: "Resource",
                    PhysicalResourceID: shared.PhysicalResourceID{
                        AwsAccountID: "iusto",
                        AwsRegion: "ullam",
                        Identifier: "saepe",
                        Type: "Arn",
                    },
                    ResourceGroupName: "sapiente",
                    ResourceName: "enim",
                    TerraformSourceName: "eum",
                },
                shared.ResourceMapping{
                    AppRegistryAppName: "voluptatum",
                    LogicalStackName: "autem",
                    MappingType: "Terraform",
                    PhysicalResourceID: shared.PhysicalResourceID{
                        AwsAccountID: "non",
                        AwsRegion: "deleniti",
                        Identifier: "similique",
                        Type: "Arn",
                    },
                    ResourceGroupName: "molestiae",
                    ResourceName: "quo",
                    TerraformSourceName: "quasi",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.AddDraftAppVersionResourceMappings(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddDraftAppVersionResourceMappingsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `AddDraftAppVersionResourceMappings` - Adds the resource mapping for the draft application version. You can also update an existing resource mapping to a new physical resource.
* `CreateApp` - <p>Creates an AWS Resilience Hub application. An AWS Resilience Hub application is a collection of Amazon Web Services resources structured to prevent and recover Amazon Web Services application disruptions. To describe a AWS Resilience Hub application, you provide an application name, resources from one or more–up to five–CloudFormation stacks, and an appropriate resiliency policy.</p> <p>After you create an AWS Resilience Hub application, you publish it so that you can run a resiliency assessment on it. You can then use recommendations from the assessment to improve resiliency by running another assessment, comparing results, and then iterating the process until you achieve your goals for recovery time objective (RTO) and recovery point objective (RPO).</p>
* `CreateAppVersionAppComponent` - <p>Creates a new Application Component in the AWS Resilience Hub application.</p> <note> <p>This API updates the AWS Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the AWS Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </note>
* `CreateAppVersionResource` - <p>Adds a resource to the AWS Resilience Hub applicationand assigns it to the specified Application Components. If you specify a new Application Component, AWS Resilience Hub will automatically create the Application Component.</p> <note> <ul> <li> <p>This action has no effect outside AWS Resilience Hub.</p> </li> <li> <p>This API updates the AWS Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the AWS Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> <li> <p>To update application version with new <code>physicalResourceID</code>, you must call <code>ResolveAppVersionResources</code> API.</p> </li> </ul> </note>
* `CreateRecommendationTemplate` - Creates a new recommendation template for the AWS Resilience Hub application.
* `CreateResiliencyPolicy` - Creates a resiliency policy for an application.
* `DeleteApp` - Deletes an AWS Resilience Hub application. This is a destructive action that can't be undone.
* `DeleteAppAssessment` - Deletes an AWS Resilience Hub application assessment. This is a destructive action that can't be undone.
* `DeleteAppInputSource` - Deletes the input source and all of its imported resources from the AWS Resilience Hub application.
* `DeleteAppVersionAppComponent` - <p>Deletes an Application Component from the AWS Resilience Hub application.</p> <note> <ul> <li> <p>This API updates the AWS Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the AWS Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> <li> <p>You will not be able to delete an Application Component if it has resources associated with it.</p> </li> </ul> </note>
* `DeleteAppVersionResource` - <p>Deletes a resource from the AWS Resilience Hub application.</p> <note> <ul> <li> <p>You can only delete a manually added resource. To exclude non-manually added resources, use the <code>UpdateAppVersionResource</code> API.</p> </li> <li> <p>This action has no effect outside AWS Resilience Hub.</p> </li> <li> <p>This API updates the AWS Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the AWS Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> </ul> </note>
* `DeleteRecommendationTemplate` - Deletes a recommendation template. This is a destructive action that can't be undone.
* `DeleteResiliencyPolicy` - Deletes a resiliency policy. This is a destructive action that can't be undone.
* `DescribeApp` - Describes an AWS Resilience Hub application.
* `DescribeAppAssessment` - Describes an assessment for an AWS Resilience Hub application.
* `DescribeAppVersion` - Describes the AWS Resilience Hub application version.
* `DescribeAppVersionAppComponent` - Describes an Application Component in the AWS Resilience Hub application.
* `DescribeAppVersionResource` - <p>Describes a resource of the AWS Resilience Hub application.</p> <note> <p>This API accepts only one of the following parameters to descibe the resource:</p> <ul> <li> <p> <code>resourceName</code> </p> </li> <li> <p> <code>logicalResourceId</code> </p> </li> <li> <p> <code>physicalResourceId</code> (Along with <code>physicalResourceId</code>, you can also provide <code>awsAccountId</code>, and <code>awsRegion</code>)</p> </li> </ul> </note>
* `DescribeAppVersionResourcesResolutionStatus` - Returns the resolution status for the specified resolution identifier for an application version. If <code>resolutionId</code> is not specified, the current resolution status is returned.
* `DescribeAppVersionTemplate` - Describes details about an AWS Resilience Hub application.
* `DescribeDraftAppVersionResourcesImportStatus` - <p>Describes the status of importing resources to an application version.</p> <note> <p>If you get a 404 error with <code>ResourceImportStatusNotFoundAppMetadataException</code>, you must call <code>importResourcesToDraftAppVersion</code> after creating the application and before calling <code>describeDraftAppVersionResourcesImportStatus</code> to obtain the status.</p> </note>
* `DescribeResiliencyPolicy` - Describes a specified resiliency policy for an AWS Resilience Hub application. The returned policy object includes creation time, data location constraints, the Amazon Resource Name (ARN) for the policy, tags, tier, and more.
* `ImportResourcesToDraftAppVersion` - Imports resources to AWS Resilience Hub application draft version from different input sources. For more information about the input sources supported by AWS Resilience Hub, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/discover-structure.html">Discover the structure and describe your Resilience Hub application</a>.
* `ListAlarmRecommendations` - Lists the alarm recommendations for an AWS Resilience Hub application.
* `ListAppAssessments` - Lists the assessments for an AWS Resilience Hub application. You can use request parameters to refine the results for the response object.
* `ListAppComponentCompliances` - Lists the compliances for an AWS Resilience Hub Application Component.
* `ListAppComponentRecommendations` - Lists the recommendations for an AWS Resilience Hub Application Component.
* `ListAppInputSources` - Lists all the input sources of the AWS Resilience Hub application. For more information about the input sources supported by AWS Resilience Hub, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/discover-structure.html">Discover the structure and describe your Resilience Hub application</a>.
* `ListAppVersionAppComponents` - Lists all the Application Components in the AWS Resilience Hub application.
* `ListAppVersionResourceMappings` - Lists how the resources in an application version are mapped/sourced from. Mappings can be physical resource identifiers, CloudFormation stacks, resource-groups, or an application registry app.
* `ListAppVersionResources` - Lists all the resources in an AWS Resilience Hub application.
* `ListAppVersions` - Lists the different versions for the AWS Resilience Hub applications.
* `ListApps` - <p>Lists your AWS Resilience Hub applications.</p> <note> <p>You can filter applications using only one filter at a time or without using any filter. If you try to filter applications using multiple filters, you will get the following error:</p> <p> <code>An error occurred (ValidationException) when calling the ListApps operation: Only one filter is supported for this operation.</code> </p> </note>
* `ListRecommendationTemplates` - Lists the recommendation templates for the AWS Resilience Hub applications.
* `ListResiliencyPolicies` - Lists the resiliency policies for the AWS Resilience Hub applications.
* `ListSopRecommendations` - Lists the standard operating procedure (SOP) recommendations for the AWS Resilience Hub applications.
* `ListSuggestedResiliencyPolicies` - Lists the suggested resiliency policies for the AWS Resilience Hub applications.
* `ListTagsForResource` - Lists the tags for your resources in your AWS Resilience Hub applications.
* `ListTestRecommendations` - Lists the test recommendations for the AWS Resilience Hub application.
* `ListUnsupportedAppVersionResources` - Lists the resources that are not currently supported in AWS Resilience Hub. An unsupported resource is a resource that exists in the object that was used to create an app, but is not supported by AWS Resilience Hub.
* `PublishAppVersion` - Publishes a new version of a specific AWS Resilience Hub application.
* `PutDraftAppVersionTemplate` - Adds or updates the app template for an AWS Resilience Hub application draft version.
* `RemoveDraftAppVersionResourceMappings` - Removes resource mappings from a draft application version.
* `ResolveAppVersionResources` - Resolves the resources for an application version.
* `StartAppAssessment` - Creates a new application assessment for an application.
* `TagResource` - Applies one or more tags to a resource.
* `UntagResource` - Removes one or more tags from a resource.
* `UpdateApp` - Updates an application.
* `UpdateAppVersion` - <p>Updates the AWS Resilience Hub application version.</p> <note> <p>This API updates the AWS Resilience Hub application draft version. To use this information for running resiliency assessments, you must publish the AWS Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </note>
* `UpdateAppVersionAppComponent` - <p>Updates an existing Application Component in the AWS Resilience Hub application.</p> <note> <p>This API updates the AWS Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the AWS Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </note>
* `UpdateAppVersionResource` - <p>Updates the resource details in the AWS Resilience Hub application.</p> <note> <ul> <li> <p>This action has no effect outside AWS Resilience Hub.</p> </li> <li> <p>This API updates the AWS Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the AWS Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> <li> <p>To update application version with new <code>physicalResourceID</code>, you must call <code>ResolveAppVersionResources</code> API.</p> </li> </ul> </note>
* `UpdateResiliencyPolicy` - Updates a resiliency policy.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
