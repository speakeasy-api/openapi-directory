# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AddDraftAppVersionResourceMappingsHeaders;
import org.openapis.openapi.models.operations.AddDraftAppVersionResourceMappingsRequestBody;
import org.openapis.openapi.models.operations.AddDraftAppVersionResourceMappingsRequest;
import org.openapis.openapi.models.operations.AddDraftAppVersionResourceMappingsResponse;
import org.openapis.openapi.models.shared.ResourceMapping;
import org.openapis.openapi.models.shared.PhysicalResourceId;
import org.openapis.openapi.models.shared.PhysicalIdentifierTypeEnum;
import org.openapis.openapi.models.shared.ResourceMappingTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            AddDraftAppVersionResourceMappingsRequest req = new AddDraftAppVersionResourceMappingsRequest() {{
                headers = new AddDraftAppVersionResourceMappingsHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new AddDraftAppVersionResourceMappingsRequestBody() {{
                    appArn = "illum";
                    resourceMappings = new org.openapis.openapi.models.shared.ResourceMapping[]{{
                        add(new ResourceMapping() {{
                            appRegistryAppName = "error";
                            eksSourceName = "deserunt";
                            logicalStackName = "suscipit";
                            mappingType = "AppRegistryApp";
                            physicalResourceId = new PhysicalResourceId() {{
                                awsAccountId = "magnam";
                                awsRegion = "debitis";
                                identifier = "ipsa";
                                type = "Native";
                            }};
                            resourceGroupName = "tempora";
                            resourceName = "suscipit";
                            terraformSourceName = "molestiae";
                        }}),
                        add(new ResourceMapping() {{
                            appRegistryAppName = "minus";
                            eksSourceName = "placeat";
                            logicalStackName = "voluptatum";
                            mappingType = "AppRegistryApp";
                            physicalResourceId = new PhysicalResourceId() {{
                                awsAccountId = "excepturi";
                                awsRegion = "nisi";
                                identifier = "recusandae";
                                type = "Native";
                            }};
                            resourceGroupName = "ab";
                            resourceName = "quis";
                            terraformSourceName = "veritatis";
                        }}),
                    }};
                }};
            }};            

            AddDraftAppVersionResourceMappingsResponse res = sdk.addDraftAppVersionResourceMappings(req);

            if (res.addDraftAppVersionResourceMappingsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `addDraftAppVersionResourceMappings` - Adds the resource mapping for the draft application version. You can also update an existing resource mapping to a new physical resource.
* `createApp` - <p>Creates an Resilience Hub application. An Resilience Hub application is a collection of Amazon Web Services resources structured to prevent and recover Amazon Web Services application disruptions. To describe a Resilience Hub application, you provide an application name, resources from one or more–up to five–CloudFormation stacks, and an appropriate resiliency policy.</p> <p>After you create an Resilience Hub application, you publish it so that you can run a resiliency assessment on it. You can then use recommendations from the assessment to improve resiliency by running another assessment, comparing results, and then iterating the process until you achieve your goals for recovery time objective (RTO) and recovery point objective (RPO).</p>
* `createAppVersionAppComponent` - <p>Creates a new Application Component in the Resilience Hub application.</p> <note> <p>This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </note>
* `createAppVersionResource` - <p>Adds a resource to the Resilience Hub application and assigns it to the specified Application Components. If you specify a new Application Component, Resilience Hub will automatically create the Application Component.</p> <note> <ul> <li> <p>This action has no effect outside Resilience Hub.</p> </li> <li> <p>This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> <li> <p>To update application version with new <code>physicalResourceID</code>, you must call <code>ResolveAppVersionResources</code> API.</p> </li> </ul> </note>
* `createRecommendationTemplate` - Creates a new recommendation template for the Resilience Hub application.
* `createResiliencyPolicy` - Creates a resiliency policy for an application.
* `deleteApp` - Deletes an Resilience Hub application. This is a destructive action that can't be undone.
* `deleteAppAssessment` - Deletes an Resilience Hub application assessment. This is a destructive action that can't be undone.
* `deleteAppInputSource` - Deletes the input source and all of its imported resources from the Resilience Hub application.
* `deleteAppVersionAppComponent` - <p>Deletes an Application Component from the Resilience Hub application.</p> <note> <ul> <li> <p>This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> <li> <p>You will not be able to delete an Application Component if it has resources associated with it.</p> </li> </ul> </note>
* `deleteAppVersionResource` - <p>Deletes a resource from the Resilience Hub application.</p> <note> <ul> <li> <p>You can only delete a manually added resource. To exclude non-manually added resources, use the <code>UpdateAppVersionResource</code> API.</p> </li> <li> <p>This action has no effect outside Resilience Hub.</p> </li> <li> <p>This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> </ul> </note>
* `deleteRecommendationTemplate` - Deletes a recommendation template. This is a destructive action that can't be undone.
* `deleteResiliencyPolicy` - Deletes a resiliency policy. This is a destructive action that can't be undone.
* `describeApp` - Describes an Resilience Hub application.
* `describeAppAssessment` - Describes an assessment for an Resilience Hub application.
* `describeAppVersion` - Describes the Resilience Hub application version.
* `describeAppVersionAppComponent` - Describes an Application Component in the Resilience Hub application.
* `describeAppVersionResource` - <p>Describes a resource of the Resilience Hub application.</p> <note> <p>This API accepts only one of the following parameters to descibe the resource:</p> <ul> <li> <p> <code>resourceName</code> </p> </li> <li> <p> <code>logicalResourceId</code> </p> </li> <li> <p> <code>physicalResourceId</code> (Along with <code>physicalResourceId</code>, you can also provide <code>awsAccountId</code>, and <code>awsRegion</code>)</p> </li> </ul> </note>
* `describeAppVersionResourcesResolutionStatus` - Returns the resolution status for the specified resolution identifier for an application version. If <code>resolutionId</code> is not specified, the current resolution status is returned.
* `describeAppVersionTemplate` - Describes details about an Resilience Hub application.
* `describeDraftAppVersionResourcesImportStatus` - <p>Describes the status of importing resources to an application version.</p> <note> <p>If you get a 404 error with <code>ResourceImportStatusNotFoundAppMetadataException</code>, you must call <code>importResourcesToDraftAppVersion</code> after creating the application and before calling <code>describeDraftAppVersionResourcesImportStatus</code> to obtain the status.</p> </note>
* `describeResiliencyPolicy` - Describes a specified resiliency policy for an Resilience Hub application. The returned policy object includes creation time, data location constraints, the Amazon Resource Name (ARN) for the policy, tags, tier, and more.
* `importResourcesToDraftAppVersion` - Imports resources to Resilience Hub application draft version from different input sources. For more information about the input sources supported by Resilience Hub, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/discover-structure.html">Discover the structure and describe your Resilience Hub application</a>.
* `listAlarmRecommendations` - Lists the alarm recommendations for an Resilience Hub application.
* `listAppAssessments` - Lists the assessments for an Resilience Hub application. You can use request parameters to refine the results for the response object.
* `listAppComponentCompliances` - Lists the compliances for an Resilience Hub Application Component.
* `listAppComponentRecommendations` - Lists the recommendations for an Resilience Hub Application Component.
* `listAppInputSources` - Lists all the input sources of the Resilience Hub application. For more information about the input sources supported by Resilience Hub, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/discover-structure.html">Discover the structure and describe your Resilience Hub application</a>.
* `listAppVersionAppComponents` - Lists all the Application Components in the Resilience Hub application.
* `listAppVersionResourceMappings` - Lists how the resources in an application version are mapped/sourced from. Mappings can be physical resource identifiers, CloudFormation stacks, resource-groups, or an application registry app.
* `listAppVersionResources` - Lists all the resources in an Resilience Hub application.
* `listAppVersions` - Lists the different versions for the Resilience Hub applications.
* `listApps` - <p>Lists your Resilience Hub applications.</p> <note> <p>You can filter applications using only one filter at a time or without using any filter. If you try to filter applications using multiple filters, you will get the following error:</p> <p> <code>An error occurred (ValidationException) when calling the ListApps operation: Only one filter is supported for this operation.</code> </p> </note>
* `listRecommendationTemplates` - Lists the recommendation templates for the Resilience Hub applications.
* `listResiliencyPolicies` - Lists the resiliency policies for the Resilience Hub applications.
* `listSopRecommendations` - Lists the standard operating procedure (SOP) recommendations for the Resilience Hub applications.
* `listSuggestedResiliencyPolicies` - Lists the suggested resiliency policies for the Resilience Hub applications.
* `listTagsForResource` - Lists the tags for your resources in your Resilience Hub applications.
* `listTestRecommendations` - Lists the test recommendations for the Resilience Hub application.
* `listUnsupportedAppVersionResources` - Lists the resources that are not currently supported in Resilience Hub. An unsupported resource is a resource that exists in the object that was used to create an app, but is not supported by Resilience Hub.
* `publishAppVersion` - Publishes a new version of a specific Resilience Hub application.
* `putDraftAppVersionTemplate` - Adds or updates the app template for an Resilience Hub application draft version.
* `removeDraftAppVersionResourceMappings` - Removes resource mappings from a draft application version.
* `resolveAppVersionResources` - Resolves the resources for an application version.
* `startAppAssessment` - Creates a new application assessment for an application.
* `tagResource` - Applies one or more tags to a resource.
* `untagResource` - Removes one or more tags from a resource.
* `updateApp` - Updates an application.
* `updateAppVersion` - <p>Updates the Resilience Hub application version.</p> <note> <p>This API updates the Resilience Hub application draft version. To use this information for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </note>
* `updateAppVersionAppComponent` - <p>Updates an existing Application Component in the Resilience Hub application.</p> <note> <p>This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </note>
* `updateAppVersionResource` - <p>Updates the resource details in the Resilience Hub application.</p> <note> <ul> <li> <p>This action has no effect outside Resilience Hub.</p> </li> <li> <p>This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> <li> <p>To update application version with new <code>physicalResourceID</code>, you must call <code>ResolveAppVersionResources</code> API.</p> </li> </ul> </note>
* `updateResiliencyPolicy` - Updates a resiliency policy.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
