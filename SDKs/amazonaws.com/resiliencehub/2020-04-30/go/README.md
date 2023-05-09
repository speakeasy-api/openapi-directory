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
    res, err := s.AddDraftAppVersionResourceMappings(ctx, operations.AddDraftAppVersionResourceMappingsRequest{
        RequestBody: operations.AddDraftAppVersionResourceMappingsRequestBody{
            AppArn: "corrupti",
            ResourceMappings: []shared.ResourceMapping{
                shared.ResourceMapping{
                    AppRegistryAppName: sdk.String("distinctio"),
                    EksSourceName: sdk.String("quibusdam"),
                    LogicalStackName: sdk.String("unde"),
                    MappingType: shared.ResourceMappingTypeEnumEks,
                    PhysicalResourceID: shared.PhysicalResourceID{
                        AwsAccountID: sdk.String("corrupti"),
                        AwsRegion: sdk.String("illum"),
                        Identifier: "vel",
                        Type: shared.PhysicalIdentifierTypeEnumNative,
                    },
                    ResourceGroupName: sdk.String("deserunt"),
                    ResourceName: sdk.String("suscipit"),
                    TerraformSourceName: sdk.String("iure"),
                },
                shared.ResourceMapping{
                    AppRegistryAppName: sdk.String("magnam"),
                    EksSourceName: sdk.String("debitis"),
                    LogicalStackName: sdk.String("ipsa"),
                    MappingType: shared.ResourceMappingTypeEnumEks,
                    PhysicalResourceID: shared.PhysicalResourceID{
                        AwsAccountID: sdk.String("tempora"),
                        AwsRegion: sdk.String("suscipit"),
                        Identifier: "molestiae",
                        Type: shared.PhysicalIdentifierTypeEnumNative,
                    },
                    ResourceGroupName: sdk.String("placeat"),
                    ResourceName: sdk.String("voluptatum"),
                    TerraformSourceName: sdk.String("iusto"),
                },
                shared.ResourceMapping{
                    AppRegistryAppName: sdk.String("excepturi"),
                    EksSourceName: sdk.String("nisi"),
                    LogicalStackName: sdk.String("recusandae"),
                    MappingType: shared.ResourceMappingTypeEnumEks,
                    PhysicalResourceID: shared.PhysicalResourceID{
                        AwsAccountID: sdk.String("ab"),
                        AwsRegion: sdk.String("quis"),
                        Identifier: "veritatis",
                        Type: shared.PhysicalIdentifierTypeEnumNative,
                    },
                    ResourceGroupName: sdk.String("perferendis"),
                    ResourceName: sdk.String("ipsam"),
                    TerraformSourceName: sdk.String("repellendus"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("molestiae"),
    })
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

### [SDK](docs/sdk/README.md)

* [AddDraftAppVersionResourceMappings](docs/sdk/README.md#adddraftappversionresourcemappings) - Adds the resource mapping for the draft application version. You can also update an existing resource mapping to a new physical resource.
* [CreateApp](docs/sdk/README.md#createapp) - <p>Creates an Resilience Hub application. An Resilience Hub application is a collection of Amazon Web Services resources structured to prevent and recover Amazon Web Services application disruptions. To describe a Resilience Hub application, you provide an application name, resources from one or more–up to 20–CloudFormation stacks, and an appropriate resiliency policy.</p> <p>After you create an Resilience Hub application, you publish it so that you can run a resiliency assessment on it. You can then use recommendations from the assessment to improve resiliency by running another assessment, comparing results, and then iterating the process until you achieve your goals for recovery time objective (RTO) and recovery point objective (RPO).</p>
* [CreateAppVersionAppComponent](docs/sdk/README.md#createappversionappcomponent) - <p>Creates a new Application Component in the Resilience Hub application.</p> <note> <p>This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </note>
* [CreateAppVersionResource](docs/sdk/README.md#createappversionresource) - <p>Adds a resource to the Resilience Hub application and assigns it to the specified Application Components. If you specify a new Application Component, Resilience Hub will automatically create the Application Component.</p> <note> <ul> <li> <p>This action has no effect outside Resilience Hub.</p> </li> <li> <p>This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> <li> <p>To update application version with new <code>physicalResourceID</code>, you must call <code>ResolveAppVersionResources</code> API.</p> </li> </ul> </note>
* [CreateRecommendationTemplate](docs/sdk/README.md#createrecommendationtemplate) - Creates a new recommendation template for the Resilience Hub application.
* [CreateResiliencyPolicy](docs/sdk/README.md#createresiliencypolicy) - Creates a resiliency policy for an application.
* [DeleteApp](docs/sdk/README.md#deleteapp) - Deletes an Resilience Hub application. This is a destructive action that can't be undone.
* [DeleteAppAssessment](docs/sdk/README.md#deleteappassessment) - Deletes an Resilience Hub application assessment. This is a destructive action that can't be undone.
* [DeleteAppInputSource](docs/sdk/README.md#deleteappinputsource) - Deletes the input source and all of its imported resources from the Resilience Hub application.
* [DeleteAppVersionAppComponent](docs/sdk/README.md#deleteappversionappcomponent) - <p>Deletes an Application Component from the Resilience Hub application.</p> <note> <ul> <li> <p>This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> <li> <p>You will not be able to delete an Application Component if it has resources associated with it.</p> </li> </ul> </note>
* [DeleteAppVersionResource](docs/sdk/README.md#deleteappversionresource) - <p>Deletes a resource from the Resilience Hub application.</p> <note> <ul> <li> <p>You can only delete a manually added resource. To exclude non-manually added resources, use the <code>UpdateAppVersionResource</code> API.</p> </li> <li> <p>This action has no effect outside Resilience Hub.</p> </li> <li> <p>This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> </ul> </note>
* [DeleteRecommendationTemplate](docs/sdk/README.md#deleterecommendationtemplate) - Deletes a recommendation template. This is a destructive action that can't be undone.
* [DeleteResiliencyPolicy](docs/sdk/README.md#deleteresiliencypolicy) - Deletes a resiliency policy. This is a destructive action that can't be undone.
* [DescribeApp](docs/sdk/README.md#describeapp) - Describes an Resilience Hub application.
* [DescribeAppAssessment](docs/sdk/README.md#describeappassessment) - Describes an assessment for an Resilience Hub application.
* [DescribeAppVersion](docs/sdk/README.md#describeappversion) - Describes the Resilience Hub application version.
* [DescribeAppVersionAppComponent](docs/sdk/README.md#describeappversionappcomponent) - Describes an Application Component in the Resilience Hub application.
* [DescribeAppVersionResource](docs/sdk/README.md#describeappversionresource) - <p>Describes a resource of the Resilience Hub application.</p> <note> <p>This API accepts only one of the following parameters to descibe the resource:</p> <ul> <li> <p> <code>resourceName</code> </p> </li> <li> <p> <code>logicalResourceId</code> </p> </li> <li> <p> <code>physicalResourceId</code> (Along with <code>physicalResourceId</code>, you can also provide <code>awsAccountId</code>, and <code>awsRegion</code>)</p> </li> </ul> </note>
* [DescribeAppVersionResourcesResolutionStatus](docs/sdk/README.md#describeappversionresourcesresolutionstatus) - Returns the resolution status for the specified resolution identifier for an application version. If <code>resolutionId</code> is not specified, the current resolution status is returned.
* [DescribeAppVersionTemplate](docs/sdk/README.md#describeappversiontemplate) - Describes details about an Resilience Hub application.
* [DescribeDraftAppVersionResourcesImportStatus](docs/sdk/README.md#describedraftappversionresourcesimportstatus) - <p>Describes the status of importing resources to an application version.</p> <note> <p>If you get a 404 error with <code>ResourceImportStatusNotFoundAppMetadataException</code>, you must call <code>importResourcesToDraftAppVersion</code> after creating the application and before calling <code>describeDraftAppVersionResourcesImportStatus</code> to obtain the status.</p> </note>
* [DescribeResiliencyPolicy](docs/sdk/README.md#describeresiliencypolicy) - Describes a specified resiliency policy for an Resilience Hub application. The returned policy object includes creation time, data location constraints, the Amazon Resource Name (ARN) for the policy, tags, tier, and more.
* [ImportResourcesToDraftAppVersion](docs/sdk/README.md#importresourcestodraftappversion) - Imports resources to Resilience Hub application draft version from different input sources. For more information about the input sources supported by Resilience Hub, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/discover-structure.html">Discover the structure and describe your Resilience Hub application</a>.
* [ListAlarmRecommendations](docs/sdk/README.md#listalarmrecommendations) - Lists the alarm recommendations for an Resilience Hub application.
* [ListAppAssessments](docs/sdk/README.md#listappassessments) - Lists the assessments for an Resilience Hub application. You can use request parameters to refine the results for the response object.
* [ListAppComponentCompliances](docs/sdk/README.md#listappcomponentcompliances) - Lists the compliances for an Resilience Hub Application Component.
* [ListAppComponentRecommendations](docs/sdk/README.md#listappcomponentrecommendations) - Lists the recommendations for an Resilience Hub Application Component.
* [ListAppInputSources](docs/sdk/README.md#listappinputsources) - Lists all the input sources of the Resilience Hub application. For more information about the input sources supported by Resilience Hub, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/discover-structure.html">Discover the structure and describe your Resilience Hub application</a>.
* [ListAppVersionAppComponents](docs/sdk/README.md#listappversionappcomponents) - Lists all the Application Components in the Resilience Hub application.
* [ListAppVersionResourceMappings](docs/sdk/README.md#listappversionresourcemappings) - Lists how the resources in an application version are mapped/sourced from. Mappings can be physical resource identifiers, CloudFormation stacks, resource-groups, or an application registry app.
* [ListAppVersionResources](docs/sdk/README.md#listappversionresources) - Lists all the resources in an Resilience Hub application.
* [ListAppVersions](docs/sdk/README.md#listappversions) - Lists the different versions for the Resilience Hub applications.
* [ListApps](docs/sdk/README.md#listapps) - <p>Lists your Resilience Hub applications.</p> <note> <p>You can filter applications using only one filter at a time or without using any filter. If you try to filter applications using multiple filters, you will get the following error:</p> <p> <code>An error occurred (ValidationException) when calling the ListApps operation: Only one filter is supported for this operation.</code> </p> </note>
* [ListRecommendationTemplates](docs/sdk/README.md#listrecommendationtemplates) - Lists the recommendation templates for the Resilience Hub applications.
* [ListResiliencyPolicies](docs/sdk/README.md#listresiliencypolicies) - Lists the resiliency policies for the Resilience Hub applications.
* [ListSopRecommendations](docs/sdk/README.md#listsoprecommendations) - Lists the standard operating procedure (SOP) recommendations for the Resilience Hub applications.
* [ListSuggestedResiliencyPolicies](docs/sdk/README.md#listsuggestedresiliencypolicies) - Lists the suggested resiliency policies for the Resilience Hub applications.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags for your resources in your Resilience Hub applications.
* [ListTestRecommendations](docs/sdk/README.md#listtestrecommendations) - Lists the test recommendations for the Resilience Hub application.
* [ListUnsupportedAppVersionResources](docs/sdk/README.md#listunsupportedappversionresources) - Lists the resources that are not currently supported in Resilience Hub. An unsupported resource is a resource that exists in the object that was used to create an app, but is not supported by Resilience Hub.
* [PublishAppVersion](docs/sdk/README.md#publishappversion) - Publishes a new version of a specific Resilience Hub application.
* [PutDraftAppVersionTemplate](docs/sdk/README.md#putdraftappversiontemplate) - Adds or updates the app template for an Resilience Hub application draft version.
* [RemoveDraftAppVersionResourceMappings](docs/sdk/README.md#removedraftappversionresourcemappings) - Removes resource mappings from a draft application version.
* [ResolveAppVersionResources](docs/sdk/README.md#resolveappversionresources) - Resolves the resources for an application version.
* [StartAppAssessment](docs/sdk/README.md#startappassessment) - Creates a new application assessment for an application.
* [TagResource](docs/sdk/README.md#tagresource) - Applies one or more tags to a resource.
* [UntagResource](docs/sdk/README.md#untagresource) - Removes one or more tags from a resource.
* [UpdateApp](docs/sdk/README.md#updateapp) - Updates an application.
* [UpdateAppVersion](docs/sdk/README.md#updateappversion) - <p>Updates the Resilience Hub application version.</p> <note> <p>This API updates the Resilience Hub application draft version. To use this information for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </note>
* [UpdateAppVersionAppComponent](docs/sdk/README.md#updateappversionappcomponent) - <p>Updates an existing Application Component in the Resilience Hub application.</p> <note> <p>This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </note>
* [UpdateAppVersionResource](docs/sdk/README.md#updateappversionresource) - <p>Updates the resource details in the Resilience Hub application.</p> <note> <ul> <li> <p>This action has no effect outside Resilience Hub.</p> </li> <li> <p>This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> <li> <p>To update application version with new <code>physicalResourceID</code>, you must call <code>ResolveAppVersionResources</code> API.</p> </li> </ul> </note>
* [UpdateResiliencyPolicy](docs/sdk/README.md#updateresiliencypolicy) - Updates a resiliency policy.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
