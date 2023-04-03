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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.AddDraftAppVersionResourceMappingsRequest{
        RequestBody: operations.AddDraftAppVersionResourceMappingsRequestBody{
            AppArn: "corrupti",
            ResourceMappings: []shared.ResourceMapping{
                shared.ResourceMapping{
                    AppRegistryAppName: "distinctio",
                    EksSourceName: "quibusdam",
                    LogicalStackName: "unde",
                    MappingType: "EKS",
                    PhysicalResourceID: shared.PhysicalResourceID{
                        AwsAccountID: "corrupti",
                        AwsRegion: "illum",
                        Identifier: "vel",
                        Type: "Native",
                    },
                    ResourceGroupName: "deserunt",
                    ResourceName: "suscipit",
                    TerraformSourceName: "iure",
                },
                shared.ResourceMapping{
                    AppRegistryAppName: "magnam",
                    EksSourceName: "debitis",
                    LogicalStackName: "ipsa",
                    MappingType: "EKS",
                    PhysicalResourceID: shared.PhysicalResourceID{
                        AwsAccountID: "tempora",
                        AwsRegion: "suscipit",
                        Identifier: "molestiae",
                        Type: "Native",
                    },
                    ResourceGroupName: "placeat",
                    ResourceName: "voluptatum",
                    TerraformSourceName: "iusto",
                },
                shared.ResourceMapping{
                    AppRegistryAppName: "excepturi",
                    EksSourceName: "nisi",
                    LogicalStackName: "recusandae",
                    MappingType: "EKS",
                    PhysicalResourceID: shared.PhysicalResourceID{
                        AwsAccountID: "ab",
                        AwsRegion: "quis",
                        Identifier: "veritatis",
                        Type: "Native",
                    },
                    ResourceGroupName: "perferendis",
                    ResourceName: "ipsam",
                    TerraformSourceName: "repellendus",
                },
            },
        },
        XAmzAlgorithm: "sapiente",
        XAmzContentSha256: "quo",
        XAmzCredential: "odit",
        XAmzDate: "at",
        XAmzSecurityToken: "at",
        XAmzSignature: "maiores",
        XAmzSignedHeaders: "molestiae",
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
## Available Resources and Operations

### SDK SDK

* `AddDraftAppVersionResourceMappings` - Adds the resource mapping for the draft application version. You can also update an existing resource mapping to a new physical resource.
* `CreateApp` - <p>Creates an Resilience Hub application. An Resilience Hub application is a collection of Amazon Web Services resources structured to prevent and recover Amazon Web Services application disruptions. To describe a Resilience Hub application, you provide an application name, resources from one or more–up to five–CloudFormation stacks, and an appropriate resiliency policy.</p> <p>After you create an Resilience Hub application, you publish it so that you can run a resiliency assessment on it. You can then use recommendations from the assessment to improve resiliency by running another assessment, comparing results, and then iterating the process until you achieve your goals for recovery time objective (RTO) and recovery point objective (RPO).</p>
* `CreateAppVersionAppComponent` - <p>Creates a new Application Component in the Resilience Hub application.</p> <note> <p>This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </note>
* `CreateAppVersionResource` - <p>Adds a resource to the Resilience Hub application and assigns it to the specified Application Components. If you specify a new Application Component, Resilience Hub will automatically create the Application Component.</p> <note> <ul> <li> <p>This action has no effect outside Resilience Hub.</p> </li> <li> <p>This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> <li> <p>To update application version with new <code>physicalResourceID</code>, you must call <code>ResolveAppVersionResources</code> API.</p> </li> </ul> </note>
* `CreateRecommendationTemplate` - Creates a new recommendation template for the Resilience Hub application.
* `CreateResiliencyPolicy` - Creates a resiliency policy for an application.
* `DeleteApp` - Deletes an Resilience Hub application. This is a destructive action that can't be undone.
* `DeleteAppAssessment` - Deletes an Resilience Hub application assessment. This is a destructive action that can't be undone.
* `DeleteAppInputSource` - Deletes the input source and all of its imported resources from the Resilience Hub application.
* `DeleteAppVersionAppComponent` - <p>Deletes an Application Component from the Resilience Hub application.</p> <note> <ul> <li> <p>This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> <li> <p>You will not be able to delete an Application Component if it has resources associated with it.</p> </li> </ul> </note>
* `DeleteAppVersionResource` - <p>Deletes a resource from the Resilience Hub application.</p> <note> <ul> <li> <p>You can only delete a manually added resource. To exclude non-manually added resources, use the <code>UpdateAppVersionResource</code> API.</p> </li> <li> <p>This action has no effect outside Resilience Hub.</p> </li> <li> <p>This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> </ul> </note>
* `DeleteRecommendationTemplate` - Deletes a recommendation template. This is a destructive action that can't be undone.
* `DeleteResiliencyPolicy` - Deletes a resiliency policy. This is a destructive action that can't be undone.
* `DescribeApp` - Describes an Resilience Hub application.
* `DescribeAppAssessment` - Describes an assessment for an Resilience Hub application.
* `DescribeAppVersion` - Describes the Resilience Hub application version.
* `DescribeAppVersionAppComponent` - Describes an Application Component in the Resilience Hub application.
* `DescribeAppVersionResource` - <p>Describes a resource of the Resilience Hub application.</p> <note> <p>This API accepts only one of the following parameters to descibe the resource:</p> <ul> <li> <p> <code>resourceName</code> </p> </li> <li> <p> <code>logicalResourceId</code> </p> </li> <li> <p> <code>physicalResourceId</code> (Along with <code>physicalResourceId</code>, you can also provide <code>awsAccountId</code>, and <code>awsRegion</code>)</p> </li> </ul> </note>
* `DescribeAppVersionResourcesResolutionStatus` - Returns the resolution status for the specified resolution identifier for an application version. If <code>resolutionId</code> is not specified, the current resolution status is returned.
* `DescribeAppVersionTemplate` - Describes details about an Resilience Hub application.
* `DescribeDraftAppVersionResourcesImportStatus` - <p>Describes the status of importing resources to an application version.</p> <note> <p>If you get a 404 error with <code>ResourceImportStatusNotFoundAppMetadataException</code>, you must call <code>importResourcesToDraftAppVersion</code> after creating the application and before calling <code>describeDraftAppVersionResourcesImportStatus</code> to obtain the status.</p> </note>
* `DescribeResiliencyPolicy` - Describes a specified resiliency policy for an Resilience Hub application. The returned policy object includes creation time, data location constraints, the Amazon Resource Name (ARN) for the policy, tags, tier, and more.
* `ImportResourcesToDraftAppVersion` - Imports resources to Resilience Hub application draft version from different input sources. For more information about the input sources supported by Resilience Hub, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/discover-structure.html">Discover the structure and describe your Resilience Hub application</a>.
* `ListAlarmRecommendations` - Lists the alarm recommendations for an Resilience Hub application.
* `ListAppAssessments` - Lists the assessments for an Resilience Hub application. You can use request parameters to refine the results for the response object.
* `ListAppComponentCompliances` - Lists the compliances for an Resilience Hub Application Component.
* `ListAppComponentRecommendations` - Lists the recommendations for an Resilience Hub Application Component.
* `ListAppInputSources` - Lists all the input sources of the Resilience Hub application. For more information about the input sources supported by Resilience Hub, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/discover-structure.html">Discover the structure and describe your Resilience Hub application</a>.
* `ListAppVersionAppComponents` - Lists all the Application Components in the Resilience Hub application.
* `ListAppVersionResourceMappings` - Lists how the resources in an application version are mapped/sourced from. Mappings can be physical resource identifiers, CloudFormation stacks, resource-groups, or an application registry app.
* `ListAppVersionResources` - Lists all the resources in an Resilience Hub application.
* `ListAppVersions` - Lists the different versions for the Resilience Hub applications.
* `ListApps` - <p>Lists your Resilience Hub applications.</p> <note> <p>You can filter applications using only one filter at a time or without using any filter. If you try to filter applications using multiple filters, you will get the following error:</p> <p> <code>An error occurred (ValidationException) when calling the ListApps operation: Only one filter is supported for this operation.</code> </p> </note>
* `ListRecommendationTemplates` - Lists the recommendation templates for the Resilience Hub applications.
* `ListResiliencyPolicies` - Lists the resiliency policies for the Resilience Hub applications.
* `ListSopRecommendations` - Lists the standard operating procedure (SOP) recommendations for the Resilience Hub applications.
* `ListSuggestedResiliencyPolicies` - Lists the suggested resiliency policies for the Resilience Hub applications.
* `ListTagsForResource` - Lists the tags for your resources in your Resilience Hub applications.
* `ListTestRecommendations` - Lists the test recommendations for the Resilience Hub application.
* `ListUnsupportedAppVersionResources` - Lists the resources that are not currently supported in Resilience Hub. An unsupported resource is a resource that exists in the object that was used to create an app, but is not supported by Resilience Hub.
* `PublishAppVersion` - Publishes a new version of a specific Resilience Hub application.
* `PutDraftAppVersionTemplate` - Adds or updates the app template for an Resilience Hub application draft version.
* `RemoveDraftAppVersionResourceMappings` - Removes resource mappings from a draft application version.
* `ResolveAppVersionResources` - Resolves the resources for an application version.
* `StartAppAssessment` - Creates a new application assessment for an application.
* `TagResource` - Applies one or more tags to a resource.
* `UntagResource` - Removes one or more tags from a resource.
* `UpdateApp` - Updates an application.
* `UpdateAppVersion` - <p>Updates the Resilience Hub application version.</p> <note> <p>This API updates the Resilience Hub application draft version. To use this information for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </note>
* `UpdateAppVersionAppComponent` - <p>Updates an existing Application Component in the Resilience Hub application.</p> <note> <p>This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </note>
* `UpdateAppVersionResource` - <p>Updates the resource details in the Resilience Hub application.</p> <note> <ul> <li> <p>This action has no effect outside Resilience Hub.</p> </li> <li> <p>This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> <li> <p>To update application version with new <code>physicalResourceID</code>, you must call <code>ResolveAppVersionResources</code> API.</p> </li> </ul> </note>
* `UpdateResiliencyPolicy` - Updates a resiliency policy.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
