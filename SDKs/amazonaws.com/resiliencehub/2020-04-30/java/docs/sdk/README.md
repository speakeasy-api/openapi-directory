# SDK

## Overview

Resilience Hub helps you proactively prepare and protect your Amazon Web Services applications from disruptions. It offers continual resiliency assessment and validation that integrates into your software development lifecycle. This enables you to uncover resiliency weaknesses, ensure recovery time objective (RTO) and recovery point objective (RPO) targets for your applications are met, and resolve issues before they are released into production. 

Amazon Web Services documentation
<https://docs.aws.amazon.com/resiliencehub/>
### Available Operations

* [addDraftAppVersionResourceMappings](#adddraftappversionresourcemappings) - Adds the resource mapping for the draft application version. You can also update an existing resource mapping to a new physical resource.
* [createApp](#createapp) - <p>Creates an Resilience Hub application. An Resilience Hub application is a collection of Amazon Web Services resources structured to prevent and recover Amazon Web Services application disruptions. To describe a Resilience Hub application, you provide an application name, resources from one or more–up to 20–CloudFormation stacks, and an appropriate resiliency policy.</p> <p>After you create an Resilience Hub application, you publish it so that you can run a resiliency assessment on it. You can then use recommendations from the assessment to improve resiliency by running another assessment, comparing results, and then iterating the process until you achieve your goals for recovery time objective (RTO) and recovery point objective (RPO).</p>
* [createAppVersionAppComponent](#createappversionappcomponent) - <p>Creates a new Application Component in the Resilience Hub application.</p> <note> <p>This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </note>
* [createAppVersionResource](#createappversionresource) - <p>Adds a resource to the Resilience Hub application and assigns it to the specified Application Components. If you specify a new Application Component, Resilience Hub will automatically create the Application Component.</p> <note> <ul> <li> <p>This action has no effect outside Resilience Hub.</p> </li> <li> <p>This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> <li> <p>To update application version with new <code>physicalResourceID</code>, you must call <code>ResolveAppVersionResources</code> API.</p> </li> </ul> </note>
* [createRecommendationTemplate](#createrecommendationtemplate) - Creates a new recommendation template for the Resilience Hub application.
* [createResiliencyPolicy](#createresiliencypolicy) - Creates a resiliency policy for an application.
* [deleteApp](#deleteapp) - Deletes an Resilience Hub application. This is a destructive action that can't be undone.
* [deleteAppAssessment](#deleteappassessment) - Deletes an Resilience Hub application assessment. This is a destructive action that can't be undone.
* [deleteAppInputSource](#deleteappinputsource) - Deletes the input source and all of its imported resources from the Resilience Hub application.
* [deleteAppVersionAppComponent](#deleteappversionappcomponent) - <p>Deletes an Application Component from the Resilience Hub application.</p> <note> <ul> <li> <p>This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> <li> <p>You will not be able to delete an Application Component if it has resources associated with it.</p> </li> </ul> </note>
* [deleteAppVersionResource](#deleteappversionresource) - <p>Deletes a resource from the Resilience Hub application.</p> <note> <ul> <li> <p>You can only delete a manually added resource. To exclude non-manually added resources, use the <code>UpdateAppVersionResource</code> API.</p> </li> <li> <p>This action has no effect outside Resilience Hub.</p> </li> <li> <p>This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> </ul> </note>
* [deleteRecommendationTemplate](#deleterecommendationtemplate) - Deletes a recommendation template. This is a destructive action that can't be undone.
* [deleteResiliencyPolicy](#deleteresiliencypolicy) - Deletes a resiliency policy. This is a destructive action that can't be undone.
* [describeApp](#describeapp) - Describes an Resilience Hub application.
* [describeAppAssessment](#describeappassessment) - Describes an assessment for an Resilience Hub application.
* [describeAppVersion](#describeappversion) - Describes the Resilience Hub application version.
* [describeAppVersionAppComponent](#describeappversionappcomponent) - Describes an Application Component in the Resilience Hub application.
* [describeAppVersionResource](#describeappversionresource) - <p>Describes a resource of the Resilience Hub application.</p> <note> <p>This API accepts only one of the following parameters to descibe the resource:</p> <ul> <li> <p> <code>resourceName</code> </p> </li> <li> <p> <code>logicalResourceId</code> </p> </li> <li> <p> <code>physicalResourceId</code> (Along with <code>physicalResourceId</code>, you can also provide <code>awsAccountId</code>, and <code>awsRegion</code>)</p> </li> </ul> </note>
* [describeAppVersionResourcesResolutionStatus](#describeappversionresourcesresolutionstatus) - Returns the resolution status for the specified resolution identifier for an application version. If <code>resolutionId</code> is not specified, the current resolution status is returned.
* [describeAppVersionTemplate](#describeappversiontemplate) - Describes details about an Resilience Hub application.
* [describeDraftAppVersionResourcesImportStatus](#describedraftappversionresourcesimportstatus) - <p>Describes the status of importing resources to an application version.</p> <note> <p>If you get a 404 error with <code>ResourceImportStatusNotFoundAppMetadataException</code>, you must call <code>importResourcesToDraftAppVersion</code> after creating the application and before calling <code>describeDraftAppVersionResourcesImportStatus</code> to obtain the status.</p> </note>
* [describeResiliencyPolicy](#describeresiliencypolicy) - Describes a specified resiliency policy for an Resilience Hub application. The returned policy object includes creation time, data location constraints, the Amazon Resource Name (ARN) for the policy, tags, tier, and more.
* [importResourcesToDraftAppVersion](#importresourcestodraftappversion) - Imports resources to Resilience Hub application draft version from different input sources. For more information about the input sources supported by Resilience Hub, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/discover-structure.html">Discover the structure and describe your Resilience Hub application</a>.
* [listAlarmRecommendations](#listalarmrecommendations) - Lists the alarm recommendations for an Resilience Hub application.
* [listAppAssessments](#listappassessments) - Lists the assessments for an Resilience Hub application. You can use request parameters to refine the results for the response object.
* [listAppComponentCompliances](#listappcomponentcompliances) - Lists the compliances for an Resilience Hub Application Component.
* [listAppComponentRecommendations](#listappcomponentrecommendations) - Lists the recommendations for an Resilience Hub Application Component.
* [listAppInputSources](#listappinputsources) - Lists all the input sources of the Resilience Hub application. For more information about the input sources supported by Resilience Hub, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/discover-structure.html">Discover the structure and describe your Resilience Hub application</a>.
* [listAppVersionAppComponents](#listappversionappcomponents) - Lists all the Application Components in the Resilience Hub application.
* [listAppVersionResourceMappings](#listappversionresourcemappings) - Lists how the resources in an application version are mapped/sourced from. Mappings can be physical resource identifiers, CloudFormation stacks, resource-groups, or an application registry app.
* [listAppVersionResources](#listappversionresources) - Lists all the resources in an Resilience Hub application.
* [listAppVersions](#listappversions) - Lists the different versions for the Resilience Hub applications.
* [listApps](#listapps) - <p>Lists your Resilience Hub applications.</p> <note> <p>You can filter applications using only one filter at a time or without using any filter. If you try to filter applications using multiple filters, you will get the following error:</p> <p> <code>An error occurred (ValidationException) when calling the ListApps operation: Only one filter is supported for this operation.</code> </p> </note>
* [listRecommendationTemplates](#listrecommendationtemplates) - Lists the recommendation templates for the Resilience Hub applications.
* [listResiliencyPolicies](#listresiliencypolicies) - Lists the resiliency policies for the Resilience Hub applications.
* [listSopRecommendations](#listsoprecommendations) - Lists the standard operating procedure (SOP) recommendations for the Resilience Hub applications.
* [listSuggestedResiliencyPolicies](#listsuggestedresiliencypolicies) - Lists the suggested resiliency policies for the Resilience Hub applications.
* [listTagsForResource](#listtagsforresource) - Lists the tags for your resources in your Resilience Hub applications.
* [listTestRecommendations](#listtestrecommendations) - Lists the test recommendations for the Resilience Hub application.
* [listUnsupportedAppVersionResources](#listunsupportedappversionresources) - Lists the resources that are not currently supported in Resilience Hub. An unsupported resource is a resource that exists in the object that was used to create an app, but is not supported by Resilience Hub.
* [publishAppVersion](#publishappversion) - Publishes a new version of a specific Resilience Hub application.
* [putDraftAppVersionTemplate](#putdraftappversiontemplate) - Adds or updates the app template for an Resilience Hub application draft version.
* [removeDraftAppVersionResourceMappings](#removedraftappversionresourcemappings) - Removes resource mappings from a draft application version.
* [resolveAppVersionResources](#resolveappversionresources) - Resolves the resources for an application version.
* [startAppAssessment](#startappassessment) - Creates a new application assessment for an application.
* [tagResource](#tagresource) - Applies one or more tags to a resource.
* [untagResource](#untagresource) - Removes one or more tags from a resource.
* [updateApp](#updateapp) - Updates an application.
* [updateAppVersion](#updateappversion) - <p>Updates the Resilience Hub application version.</p> <note> <p>This API updates the Resilience Hub application draft version. To use this information for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </note>
* [updateAppVersionAppComponent](#updateappversionappcomponent) - <p>Updates an existing Application Component in the Resilience Hub application.</p> <note> <p>This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </note>
* [updateAppVersionResource](#updateappversionresource) - <p>Updates the resource details in the Resilience Hub application.</p> <note> <ul> <li> <p>This action has no effect outside Resilience Hub.</p> </li> <li> <p>This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> <li> <p>To update application version with new <code>physicalResourceID</code>, you must call <code>ResolveAppVersionResources</code> API.</p> </li> </ul> </note>
* [updateResiliencyPolicy](#updateresiliencypolicy) - Updates a resiliency policy.

## addDraftAppVersionResourceMappings

Adds the resource mapping for the draft application version. You can also update an existing resource mapping to a new physical resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddDraftAppVersionResourceMappingsRequest;
import org.openapis.openapi.models.operations.AddDraftAppVersionResourceMappingsRequestBody;
import org.openapis.openapi.models.operations.AddDraftAppVersionResourceMappingsResponse;
import org.openapis.openapi.models.shared.PhysicalIdentifierTypeEnum;
import org.openapis.openapi.models.shared.PhysicalResourceId;
import org.openapis.openapi.models.shared.ResourceMapping;
import org.openapis.openapi.models.shared.ResourceMappingTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddDraftAppVersionResourceMappingsRequest req = new AddDraftAppVersionResourceMappingsRequest(                new AddDraftAppVersionResourceMappingsRequestBody("ipsum",                 new org.openapis.openapi.models.shared.ResourceMapping[]{{
                                                add(new ResourceMapping(ResourceMappingTypeEnum.APP_REGISTRY_APP,                 new PhysicalResourceId("iste", PhysicalIdentifierTypeEnum.ARN) {{
                                                                    awsAccountId = "saepe";
                                                                    awsRegion = "quidem";
                                                                }};) {{
                                                    appRegistryAppName = "aspernatur";
                                                    eksSourceName = "perferendis";
                                                    logicalStackName = "ad";
                                                    mappingType = ResourceMappingTypeEnum.RESOURCE_GROUP;
                                                    physicalResourceId = new PhysicalResourceId("laboriosam", PhysicalIdentifierTypeEnum.NATIVE_) {{
                                                        awsAccountId = "sed";
                                                        awsRegion = "iste";
                                                        identifier = "dolor";
                                                        type = PhysicalIdentifierTypeEnum.NATIVE_;
                                                    }};
                                                    resourceGroupName = "saepe";
                                                    resourceName = "fuga";
                                                    terraformSourceName = "in";
                                                }}),
                                                add(new ResourceMapping(ResourceMappingTypeEnum.APP_REGISTRY_APP,                 new PhysicalResourceId("minima", PhysicalIdentifierTypeEnum.NATIVE_) {{
                                                                    awsAccountId = "accusantium";
                                                                    awsRegion = "iure";
                                                                }};) {{
                                                    appRegistryAppName = "architecto";
                                                    eksSourceName = "ipsa";
                                                    logicalStackName = "reiciendis";
                                                    mappingType = ResourceMappingTypeEnum.TERRAFORM;
                                                    physicalResourceId = new PhysicalResourceId("corporis", PhysicalIdentifierTypeEnum.ARN) {{
                                                        awsAccountId = "mollitia";
                                                        awsRegion = "laborum";
                                                        identifier = "dolores";
                                                        type = PhysicalIdentifierTypeEnum.ARN;
                                                    }};
                                                    resourceGroupName = "nobis";
                                                    resourceName = "enim";
                                                    terraformSourceName = "omnis";
                                                }}),
                                                add(new ResourceMapping(ResourceMappingTypeEnum.APP_REGISTRY_APP,                 new PhysicalResourceId("molestiae", PhysicalIdentifierTypeEnum.ARN) {{
                                                                    awsAccountId = "error";
                                                                    awsRegion = "quia";
                                                                }};) {{
                                                    appRegistryAppName = "culpa";
                                                    eksSourceName = "doloribus";
                                                    logicalStackName = "sapiente";
                                                    mappingType = ResourceMappingTypeEnum.CFN_STACK;
                                                    physicalResourceId = new PhysicalResourceId("repellat", PhysicalIdentifierTypeEnum.NATIVE_) {{
                                                        awsAccountId = "mollitia";
                                                        awsRegion = "dolorem";
                                                        identifier = "culpa";
                                                        type = PhysicalIdentifierTypeEnum.ARN;
                                                    }};
                                                    resourceGroupName = "occaecati";
                                                    resourceName = "numquam";
                                                    terraformSourceName = "commodi";
                                                }}),
                                            }});) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "vitae";
                xAmzCredential = "laborum";
                xAmzDate = "animi";
                xAmzSecurityToken = "enim";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "quo";
            }};            

            AddDraftAppVersionResourceMappingsResponse res = sdk.sdk.addDraftAppVersionResourceMappings(req);

            if (res.addDraftAppVersionResourceMappingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createApp

<p>Creates an Resilience Hub application. An Resilience Hub application is a collection of Amazon Web Services resources structured to prevent and recover Amazon Web Services application disruptions. To describe a Resilience Hub application, you provide an application name, resources from one or more–up to 20–CloudFormation stacks, and an appropriate resiliency policy.</p> <p>After you create an Resilience Hub application, you publish it so that you can run a resiliency assessment on it. You can then use recommendations from the assessment to improve resiliency by running another assessment, comparing results, and then iterating the process until you achieve your goals for recovery time objective (RTO) and recovery point objective (RPO).</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAppRequest;
import org.openapis.openapi.models.operations.CreateAppRequestBody;
import org.openapis.openapi.models.operations.CreateAppRequestBodyAssessmentScheduleEnum;
import org.openapis.openapi.models.operations.CreateAppResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAppRequest req = new CreateAppRequest(                new CreateAppRequestBody("tenetur") {{
                                assessmentSchedule = CreateAppRequestBodyAssessmentScheduleEnum.DISABLED;
                                clientToken = "id";
                                description = "possimus";
                                policyArn = "aut";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("error", "temporibus");
                                }};
                            }};) {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "reiciendis";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "vero";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "praesentium";
            }};            

            CreateAppResponse res = sdk.sdk.createApp(req);

            if (res.createAppResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAppVersionAppComponent

<p>Creates a new Application Component in the Resilience Hub application.</p> <note> <p>This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAppVersionAppComponentRequest;
import org.openapis.openapi.models.operations.CreateAppVersionAppComponentRequestBody;
import org.openapis.openapi.models.operations.CreateAppVersionAppComponentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAppVersionAppComponentRequest req = new CreateAppVersionAppComponentRequest(                new CreateAppVersionAppComponentRequestBody("ipsa", "omnis", "voluptate") {{
                                additionalInfo = new java.util.HashMap<String, String[]>() {{
                                    put("perferendis", new String[]{{
                                        add("reprehenderit"),
                                    }});
                                    put("ut", new String[]{{
                                        add("dicta"),
                                        add("corporis"),
                                        add("dolore"),
                                        add("iusto"),
                                    }});
                                    put("dicta", new String[]{{
                                        add("enim"),
                                        add("accusamus"),
                                        add("commodi"),
                                    }});
                                }};
                                clientToken = "repudiandae";
                                id = "13b99d48-8e1e-491e-850a-d2abd4426980";
                            }};) {{
                xAmzAlgorithm = "magni";
                xAmzContentSha256 = "assumenda";
                xAmzCredential = "ipsam";
                xAmzDate = "alias";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "excepturi";
            }};            

            CreateAppVersionAppComponentResponse res = sdk.sdk.createAppVersionAppComponent(req);

            if (res.createAppVersionAppComponentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAppVersionResource

<p>Adds a resource to the Resilience Hub application and assigns it to the specified Application Components. If you specify a new Application Component, Resilience Hub will automatically create the Application Component.</p> <note> <ul> <li> <p>This action has no effect outside Resilience Hub.</p> </li> <li> <p>This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> <li> <p>To update application version with new <code>physicalResourceID</code>, you must call <code>ResolveAppVersionResources</code> API.</p> </li> </ul> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAppVersionResourceRequest;
import org.openapis.openapi.models.operations.CreateAppVersionResourceRequestBody;
import org.openapis.openapi.models.operations.CreateAppVersionResourceRequestBodyLogicalResourceId;
import org.openapis.openapi.models.operations.CreateAppVersionResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAppVersionResourceRequest req = new CreateAppVersionResourceRequest(                new CreateAppVersionResourceRequestBody("facilis",                 new String[]{{
                                                add("labore"),
                                                add("delectus"),
                                                add("eum"),
                                            }},                 new CreateAppVersionResourceRequestBodyLogicalResourceId() {{
                                                eksSourceName = "non";
                                                identifier = "eligendi";
                                                logicalStackName = "sint";
                                                resourceGroupName = "aliquid";
                                                terraformSourceName = "provident";
                                            }};, "necessitatibus", "sint", "officia") {{
                                additionalInfo = new java.util.HashMap<String, String[]>() {{
                                    put("debitis", new String[]{{
                                        add("dolorum"),
                                        add("in"),
                                        add("in"),
                                        add("illum"),
                                    }});
                                }};
                                awsAccountId = "maiores";
                                awsRegion = "rerum";
                                clientToken = "dicta";
                            }};) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "cumque";
                xAmzCredential = "facere";
                xAmzDate = "ea";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "accusamus";
            }};            

            CreateAppVersionResourceResponse res = sdk.sdk.createAppVersionResource(req);

            if (res.createAppVersionResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRecommendationTemplate

Creates a new recommendation template for the Resilience Hub application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRecommendationTemplateRequest;
import org.openapis.openapi.models.operations.CreateRecommendationTemplateRequestBody;
import org.openapis.openapi.models.operations.CreateRecommendationTemplateRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.CreateRecommendationTemplateResponse;
import org.openapis.openapi.models.shared.RenderRecommendationTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateRecommendationTemplateRequest req = new CreateRecommendationTemplateRequest(                new CreateRecommendationTemplateRequestBody("occaecati", "enim") {{
                                bucketName = "accusamus";
                                clientToken = "delectus";
                                format = CreateRecommendationTemplateRequestBodyFormatEnum.CFN_JSON;
                                recommendationIds = new String[]{{
                                    add("nam"),
                                    add("id"),
                                    add("blanditiis"),
                                }};
                                recommendationTypes = new org.openapis.openapi.models.shared.RenderRecommendationTypeEnum[]{{
                                    add(RenderRecommendationTypeEnum.TEST),
                                    add(RenderRecommendationTypeEnum.ALARM),
                                    add(RenderRecommendationTypeEnum.SOP),
                                }};
                                tags = new java.util.HashMap<String, String>() {{
                                    put("vel", "natus");
                                    put("omnis", "molestiae");
                                }};
                            }};) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "magnam";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "id";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "labore";
            }};            

            CreateRecommendationTemplateResponse res = sdk.sdk.createRecommendationTemplate(req);

            if (res.createRecommendationTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createResiliencyPolicy

Creates a resiliency policy for an application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateResiliencyPolicyRequest;
import org.openapis.openapi.models.operations.CreateResiliencyPolicyRequestBody;
import org.openapis.openapi.models.operations.CreateResiliencyPolicyRequestBodyDataLocationConstraintEnum;
import org.openapis.openapi.models.operations.CreateResiliencyPolicyRequestBodyTierEnum;
import org.openapis.openapi.models.operations.CreateResiliencyPolicyResponse;
import org.openapis.openapi.models.shared.FailurePolicy;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateResiliencyPolicyRequest req = new CreateResiliencyPolicyRequest(                new CreateResiliencyPolicyRequestBody(                new java.util.HashMap<String, org.openapis.openapi.models.shared.FailurePolicy>() {{
                                                put("nobis", new FailurePolicy(135474L, 102863L) {{
                                                    rpoInSecs = 428769L;
                                                    rtoInSecs = 878453L;
                                                }});
                                                put("magnam", new FailurePolicy(354047L, 590873L) {{
                                                    rpoInSecs = 92373L;
                                                    rtoInSecs = 569965L;
                                                }});
                                                put("quos", new FailurePolicy(653201L, 968962L) {{
                                                    rpoInSecs = 574325L;
                                                    rtoInSecs = 33625L;
                                                }});
                                            }}, "mollitia", CreateResiliencyPolicyRequestBodyTierEnum.CRITICAL) {{
                                clientToken = "eum";
                                dataLocationConstraint = CreateResiliencyPolicyRequestBodyDataLocationConstraintEnum.ANY_LOCATION;
                                policyDescription = "necessitatibus";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("nemo", "quasi");
                                }};
                            }};) {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "doloribus";
                xAmzCredential = "debitis";
                xAmzDate = "eius";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "facilis";
            }};            

            CreateResiliencyPolicyResponse res = sdk.sdk.createResiliencyPolicy(req);

            if (res.createResiliencyPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApp

Deletes an Resilience Hub application. This is a destructive action that can't be undone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAppRequest;
import org.openapis.openapi.models.operations.DeleteAppRequestBody;
import org.openapis.openapi.models.operations.DeleteAppResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAppRequest req = new DeleteAppRequest(                new DeleteAppRequestBody("architecto") {{
                                clientToken = "architecto";
                                forceDelete = false;
                            }};) {{
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "expedita";
                xAmzDate = "nihil";
                xAmzSecurityToken = "repellat";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "sed";
            }};            

            DeleteAppResponse res = sdk.sdk.deleteApp(req);

            if (res.deleteAppResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAppAssessment

Deletes an Resilience Hub application assessment. This is a destructive action that can't be undone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAppAssessmentRequest;
import org.openapis.openapi.models.operations.DeleteAppAssessmentRequestBody;
import org.openapis.openapi.models.operations.DeleteAppAssessmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAppAssessmentRequest req = new DeleteAppAssessmentRequest(                new DeleteAppAssessmentRequestBody("pariatur") {{
                                clientToken = "accusantium";
                            }};) {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "natus";
                xAmzDate = "magni";
                xAmzSecurityToken = "sunt";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "illum";
            }};            

            DeleteAppAssessmentResponse res = sdk.sdk.deleteAppAssessment(req);

            if (res.deleteAppAssessmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAppInputSource

Deletes the input source and all of its imported resources from the Resilience Hub application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAppInputSourceRequest;
import org.openapis.openapi.models.operations.DeleteAppInputSourceRequestBody;
import org.openapis.openapi.models.operations.DeleteAppInputSourceRequestBodyEksSourceClusterNamespace;
import org.openapis.openapi.models.operations.DeleteAppInputSourceRequestBodyTerraformSource;
import org.openapis.openapi.models.operations.DeleteAppInputSourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAppInputSourceRequest req = new DeleteAppInputSourceRequest(                new DeleteAppInputSourceRequestBody("maxime") {{
                                clientToken = "ea";
                                eksSourceClusterNamespace = new DeleteAppInputSourceRequestBodyEksSourceClusterNamespace() {{
                                    eksClusterArn = "excepturi";
                                    namespace = "odit";
                                }};;
                                sourceArn = "ea";
                                terraformSource = new DeleteAppInputSourceRequestBodyTerraformSource() {{
                                    s3StateFileUrl = "accusantium";
                                }};;
                            }};) {{
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "quidem";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "autem";
                xAmzSignedHeaders = "nam";
            }};            

            DeleteAppInputSourceResponse res = sdk.sdk.deleteAppInputSource(req);

            if (res.deleteAppInputSourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAppVersionAppComponent

<p>Deletes an Application Component from the Resilience Hub application.</p> <note> <ul> <li> <p>This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> <li> <p>You will not be able to delete an Application Component if it has resources associated with it.</p> </li> </ul> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAppVersionAppComponentRequest;
import org.openapis.openapi.models.operations.DeleteAppVersionAppComponentRequestBody;
import org.openapis.openapi.models.operations.DeleteAppVersionAppComponentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAppVersionAppComponentRequest req = new DeleteAppVersionAppComponentRequest(                new DeleteAppVersionAppComponentRequestBody("pariatur", "nemo") {{
                                clientToken = "voluptatibus";
                            }};) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "amet";
                xAmzDate = "aut";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "hic";
            }};            

            DeleteAppVersionAppComponentResponse res = sdk.sdk.deleteAppVersionAppComponent(req);

            if (res.deleteAppVersionAppComponentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAppVersionResource

<p>Deletes a resource from the Resilience Hub application.</p> <note> <ul> <li> <p>You can only delete a manually added resource. To exclude non-manually added resources, use the <code>UpdateAppVersionResource</code> API.</p> </li> <li> <p>This action has no effect outside Resilience Hub.</p> </li> <li> <p>This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> </ul> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAppVersionResourceRequest;
import org.openapis.openapi.models.operations.DeleteAppVersionResourceRequestBody;
import org.openapis.openapi.models.operations.DeleteAppVersionResourceRequestBodyLogicalResourceId;
import org.openapis.openapi.models.operations.DeleteAppVersionResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAppVersionResourceRequest req = new DeleteAppVersionResourceRequest(                new DeleteAppVersionResourceRequestBody("nobis") {{
                                awsAccountId = "dolores";
                                awsRegion = "quis";
                                clientToken = "totam";
                                logicalResourceId = new DeleteAppVersionResourceRequestBodyLogicalResourceId() {{
                                    eksSourceName = "dignissimos";
                                    identifier = "eaque";
                                    logicalStackName = "quis";
                                    resourceGroupName = "nesciunt";
                                    terraformSourceName = "eos";
                                }};;
                                physicalResourceId = "perferendis";
                                resourceName = "dolores";
                            }};) {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "quam";
                xAmzCredential = "dolor";
                xAmzDate = "vero";
                xAmzSecurityToken = "nostrum";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "recusandae";
            }};            

            DeleteAppVersionResourceResponse res = sdk.sdk.deleteAppVersionResource(req);

            if (res.deleteAppVersionResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRecommendationTemplate

Deletes a recommendation template. This is a destructive action that can't be undone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRecommendationTemplateRequest;
import org.openapis.openapi.models.operations.DeleteRecommendationTemplateRequestBody;
import org.openapis.openapi.models.operations.DeleteRecommendationTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRecommendationTemplateRequest req = new DeleteRecommendationTemplateRequest(                new DeleteRecommendationTemplateRequestBody("facilis") {{
                                clientToken = "perspiciatis";
                            }};) {{
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "porro";
                xAmzCredential = "consequuntur";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "error";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "occaecati";
            }};            

            DeleteRecommendationTemplateResponse res = sdk.sdk.deleteRecommendationTemplate(req);

            if (res.deleteRecommendationTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteResiliencyPolicy

Deletes a resiliency policy. This is a destructive action that can't be undone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteResiliencyPolicyRequest;
import org.openapis.openapi.models.operations.DeleteResiliencyPolicyRequestBody;
import org.openapis.openapi.models.operations.DeleteResiliencyPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteResiliencyPolicyRequest req = new DeleteResiliencyPolicyRequest(                new DeleteResiliencyPolicyRequestBody("adipisci") {{
                                clientToken = "asperiores";
                            }};) {{
                xAmzAlgorithm = "earum";
                xAmzContentSha256 = "modi";
                xAmzCredential = "iste";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "provident";
            }};            

            DeleteResiliencyPolicyResponse res = sdk.sdk.deleteResiliencyPolicy(req);

            if (res.deleteResiliencyPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeApp

Describes an Resilience Hub application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAppRequest;
import org.openapis.openapi.models.operations.DescribeAppRequestBody;
import org.openapis.openapi.models.operations.DescribeAppResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAppRequest req = new DescribeAppRequest(                new DescribeAppRequestBody("libero");) {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "quos";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "dolor";
            }};            

            DescribeAppResponse res = sdk.sdk.describeApp(req);

            if (res.describeAppResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAppAssessment

Describes an assessment for an Resilience Hub application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAppAssessmentRequest;
import org.openapis.openapi.models.operations.DescribeAppAssessmentRequestBody;
import org.openapis.openapi.models.operations.DescribeAppAssessmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAppAssessmentRequest req = new DescribeAppAssessmentRequest(                new DescribeAppAssessmentRequestBody("ipsum");) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "cum";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "amet";
            }};            

            DescribeAppAssessmentResponse res = sdk.sdk.describeAppAssessment(req);

            if (res.describeAppAssessmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAppVersion

Describes the Resilience Hub application version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAppVersionRequest;
import org.openapis.openapi.models.operations.DescribeAppVersionRequestBody;
import org.openapis.openapi.models.operations.DescribeAppVersionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAppVersionRequest req = new DescribeAppVersionRequest(                new DescribeAppVersionRequestBody("numquam", "veritatis");) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "iure";
                xAmzDate = "odio";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "quidem";
            }};            

            DescribeAppVersionResponse res = sdk.sdk.describeAppVersion(req);

            if (res.describeAppVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAppVersionAppComponent

Describes an Application Component in the Resilience Hub application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAppVersionAppComponentRequest;
import org.openapis.openapi.models.operations.DescribeAppVersionAppComponentRequestBody;
import org.openapis.openapi.models.operations.DescribeAppVersionAppComponentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAppVersionAppComponentRequest req = new DescribeAppVersionAppComponentRequest(                new DescribeAppVersionAppComponentRequestBody("voluptas", "natus", "eos");) {{
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "sit";
                xAmzCredential = "fugiat";
                xAmzDate = "ab";
                xAmzSecurityToken = "soluta";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "iusto";
            }};            

            DescribeAppVersionAppComponentResponse res = sdk.sdk.describeAppVersionAppComponent(req);

            if (res.describeAppVersionAppComponentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAppVersionResource

<p>Describes a resource of the Resilience Hub application.</p> <note> <p>This API accepts only one of the following parameters to descibe the resource:</p> <ul> <li> <p> <code>resourceName</code> </p> </li> <li> <p> <code>logicalResourceId</code> </p> </li> <li> <p> <code>physicalResourceId</code> (Along with <code>physicalResourceId</code>, you can also provide <code>awsAccountId</code>, and <code>awsRegion</code>)</p> </li> </ul> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAppVersionResourceRequest;
import org.openapis.openapi.models.operations.DescribeAppVersionResourceRequestBody;
import org.openapis.openapi.models.operations.DescribeAppVersionResourceRequestBodyLogicalResourceId;
import org.openapis.openapi.models.operations.DescribeAppVersionResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAppVersionResourceRequest req = new DescribeAppVersionResourceRequest(                new DescribeAppVersionResourceRequestBody("dolorum", "deleniti") {{
                                awsAccountId = "omnis";
                                awsRegion = "necessitatibus";
                                logicalResourceId = new DescribeAppVersionResourceRequestBodyLogicalResourceId() {{
                                    eksSourceName = "distinctio";
                                    identifier = "asperiores";
                                    logicalStackName = "nihil";
                                    resourceGroupName = "ipsum";
                                    terraformSourceName = "voluptate";
                                }};;
                                physicalResourceId = "id";
                                resourceName = "saepe";
                            }};) {{
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "perferendis";
                xAmzDate = "amet";
                xAmzSecurityToken = "optio";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "ad";
            }};            

            DescribeAppVersionResourceResponse res = sdk.sdk.describeAppVersionResource(req);

            if (res.describeAppVersionResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAppVersionResourcesResolutionStatus

Returns the resolution status for the specified resolution identifier for an application version. If <code>resolutionId</code> is not specified, the current resolution status is returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAppVersionResourcesResolutionStatusRequest;
import org.openapis.openapi.models.operations.DescribeAppVersionResourcesResolutionStatusRequestBody;
import org.openapis.openapi.models.operations.DescribeAppVersionResourcesResolutionStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAppVersionResourcesResolutionStatusRequest req = new DescribeAppVersionResourcesResolutionStatusRequest(                new DescribeAppVersionResourcesResolutionStatusRequestBody("suscipit", "deserunt") {{
                                resolutionId = "provident";
                            }};) {{
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "repellendus";
                xAmzCredential = "totam";
                xAmzDate = "similique";
                xAmzSecurityToken = "alias";
                xAmzSignature = "at";
                xAmzSignedHeaders = "quaerat";
            }};            

            DescribeAppVersionResourcesResolutionStatusResponse res = sdk.sdk.describeAppVersionResourcesResolutionStatus(req);

            if (res.describeAppVersionResourcesResolutionStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAppVersionTemplate

Describes details about an Resilience Hub application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAppVersionTemplateRequest;
import org.openapis.openapi.models.operations.DescribeAppVersionTemplateRequestBody;
import org.openapis.openapi.models.operations.DescribeAppVersionTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAppVersionTemplateRequest req = new DescribeAppVersionTemplateRequest(                new DescribeAppVersionTemplateRequestBody("vel", "quod");) {{
                xAmzAlgorithm = "officiis";
                xAmzContentSha256 = "qui";
                xAmzCredential = "dolorum";
                xAmzDate = "a";
                xAmzSecurityToken = "esse";
                xAmzSignature = "harum";
                xAmzSignedHeaders = "iusto";
            }};            

            DescribeAppVersionTemplateResponse res = sdk.sdk.describeAppVersionTemplate(req);

            if (res.describeAppVersionTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDraftAppVersionResourcesImportStatus

<p>Describes the status of importing resources to an application version.</p> <note> <p>If you get a 404 error with <code>ResourceImportStatusNotFoundAppMetadataException</code>, you must call <code>importResourcesToDraftAppVersion</code> after creating the application and before calling <code>describeDraftAppVersionResourcesImportStatus</code> to obtain the status.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDraftAppVersionResourcesImportStatusRequest;
import org.openapis.openapi.models.operations.DescribeDraftAppVersionResourcesImportStatusRequestBody;
import org.openapis.openapi.models.operations.DescribeDraftAppVersionResourcesImportStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDraftAppVersionResourcesImportStatusRequest req = new DescribeDraftAppVersionResourcesImportStatusRequest(                new DescribeDraftAppVersionResourcesImportStatusRequestBody("quisquam");) {{
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "amet";
                xAmzCredential = "tempore";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "dolorem";
            }};            

            DescribeDraftAppVersionResourcesImportStatusResponse res = sdk.sdk.describeDraftAppVersionResourcesImportStatus(req);

            if (res.describeDraftAppVersionResourcesImportStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeResiliencyPolicy

Describes a specified resiliency policy for an Resilience Hub application. The returned policy object includes creation time, data location constraints, the Amazon Resource Name (ARN) for the policy, tags, tier, and more.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeResiliencyPolicyRequest;
import org.openapis.openapi.models.operations.DescribeResiliencyPolicyRequestBody;
import org.openapis.openapi.models.operations.DescribeResiliencyPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeResiliencyPolicyRequest req = new DescribeResiliencyPolicyRequest(                new DescribeResiliencyPolicyRequestBody("totam");) {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "sit";
                xAmzCredential = "expedita";
                xAmzDate = "neque";
                xAmzSecurityToken = "sed";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "libero";
            }};            

            DescribeResiliencyPolicyResponse res = sdk.sdk.describeResiliencyPolicy(req);

            if (res.describeResiliencyPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importResourcesToDraftAppVersion

Imports resources to Resilience Hub application draft version from different input sources. For more information about the input sources supported by Resilience Hub, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/discover-structure.html">Discover the structure and describe your Resilience Hub application</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportResourcesToDraftAppVersionRequest;
import org.openapis.openapi.models.operations.ImportResourcesToDraftAppVersionRequestBody;
import org.openapis.openapi.models.operations.ImportResourcesToDraftAppVersionRequestBodyImportStrategyEnum;
import org.openapis.openapi.models.operations.ImportResourcesToDraftAppVersionResponse;
import org.openapis.openapi.models.shared.EksSource;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TerraformSource;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ImportResourcesToDraftAppVersionRequest req = new ImportResourcesToDraftAppVersionRequest(                new ImportResourcesToDraftAppVersionRequestBody("deserunt") {{
                                eksSources = new org.openapis.openapi.models.shared.EksSource[]{{
                                    add(new EksSource("maxime",                 new String[]{{
                                                        add("soluta"),
                                                        add("dicta"),
                                                        add("laborum"),
                                                        add("totam"),
                                                    }}) {{
                                        eksClusterArn = "ipsum";
                                        namespaces = new String[]{{
                                            add("qui"),
                                            add("cupiditate"),
                                        }};
                                    }}),
                                    add(new EksSource("distinctio",                 new String[]{{
                                                        add("aliquid"),
                                                        add("quam"),
                                                        add("molestias"),
                                                    }}) {{
                                        eksClusterArn = "incidunt";
                                        namespaces = new String[]{{
                                            add("dolores"),
                                        }};
                                    }}),
                                }};
                                importStrategy = ImportResourcesToDraftAppVersionRequestBodyImportStrategyEnum.REPLACE_ALL;
                                sourceArns = new String[]{{
                                    add("neque"),
                                }};
                                terraformSources = new org.openapis.openapi.models.shared.TerraformSource[]{{
                                    add(new TerraformSource("odio") {{
                                        s3StateFileUrl = "magni";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "sunt";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "nam";
                xAmzDate = "hic";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "soluta";
            }};            

            ImportResourcesToDraftAppVersionResponse res = sdk.sdk.importResourcesToDraftAppVersion(req);

            if (res.importResourcesToDraftAppVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAlarmRecommendations

Lists the alarm recommendations for an Resilience Hub application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAlarmRecommendationsRequest;
import org.openapis.openapi.models.operations.ListAlarmRecommendationsRequestBody;
import org.openapis.openapi.models.operations.ListAlarmRecommendationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAlarmRecommendationsRequest req = new ListAlarmRecommendationsRequest(                new ListAlarmRecommendationsRequestBody("et") {{
                                maxResults = 903720L;
                                nextToken = "ipsum";
                            }};) {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "quos";
                xAmzDate = "tempore";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "aperiam";
                xAmzSignedHeaders = "delectus";
                maxResults = "dolorem";
                nextToken = "dolore";
            }};            

            ListAlarmRecommendationsResponse res = sdk.sdk.listAlarmRecommendations(req);

            if (res.listAlarmRecommendationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAppAssessments

Lists the assessments for an Resilience Hub application. You can use request parameters to refine the results for the response object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAppAssessmentsComplianceStatusEnum;
import org.openapis.openapi.models.operations.ListAppAssessmentsInvokerEnum;
import org.openapis.openapi.models.operations.ListAppAssessmentsRequest;
import org.openapis.openapi.models.operations.ListAppAssessmentsResponse;
import org.openapis.openapi.models.shared.AssessmentStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAppAssessmentsRequest req = new ListAppAssessmentsRequest() {{
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "architecto";
                xAmzDate = "quae";
                xAmzSecurityToken = "aut";
                xAmzSignature = "quas";
                xAmzSignedHeaders = "itaque";
                appArn = "consequatur";
                assessmentName = "est";
                assessmentStatus = new org.openapis.openapi.models.shared.AssessmentStatusEnum[]{{
                    add(AssessmentStatusEnum.SUCCESS),
                    add(AssessmentStatusEnum.SUCCESS),
                    add(AssessmentStatusEnum.IN_PROGRESS),
                    add(AssessmentStatusEnum.FAILED),
                }};
                complianceStatus = ListAppAssessmentsComplianceStatusEnum.POLICY_MET;
                invoker = ListAppAssessmentsInvokerEnum.USER;
                maxResults = 63955L;
                nextToken = "laudantium";
                reverseOrder = false;
            }};            

            ListAppAssessmentsResponse res = sdk.sdk.listAppAssessments(req);

            if (res.listAppAssessmentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAppComponentCompliances

Lists the compliances for an Resilience Hub Application Component.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAppComponentCompliancesRequest;
import org.openapis.openapi.models.operations.ListAppComponentCompliancesRequestBody;
import org.openapis.openapi.models.operations.ListAppComponentCompliancesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAppComponentCompliancesRequest req = new ListAppComponentCompliancesRequest(                new ListAppComponentCompliancesRequestBody("occaecati") {{
                                maxResults = 977496L;
                                nextToken = "quisquam";
                            }};) {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "quis";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "consectetur";
                maxResults = "vero";
                nextToken = "tenetur";
            }};            

            ListAppComponentCompliancesResponse res = sdk.sdk.listAppComponentCompliances(req);

            if (res.listAppComponentCompliancesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAppComponentRecommendations

Lists the recommendations for an Resilience Hub Application Component.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAppComponentRecommendationsRequest;
import org.openapis.openapi.models.operations.ListAppComponentRecommendationsRequestBody;
import org.openapis.openapi.models.operations.ListAppComponentRecommendationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAppComponentRecommendationsRequest req = new ListAppComponentRecommendationsRequest(                new ListAppComponentRecommendationsRequestBody("hic") {{
                                maxResults = 715561L;
                                nextToken = "quod";
                            }};) {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "similique";
                xAmzCredential = "facilis";
                xAmzDate = "vero";
                xAmzSecurityToken = "ducimus";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "quibusdam";
                maxResults = "illum";
                nextToken = "sequi";
            }};            

            ListAppComponentRecommendationsResponse res = sdk.sdk.listAppComponentRecommendations(req);

            if (res.listAppComponentRecommendationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAppInputSources

Lists all the input sources of the Resilience Hub application. For more information about the input sources supported by Resilience Hub, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/discover-structure.html">Discover the structure and describe your Resilience Hub application</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAppInputSourcesRequest;
import org.openapis.openapi.models.operations.ListAppInputSourcesRequestBody;
import org.openapis.openapi.models.operations.ListAppInputSourcesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAppInputSourcesRequest req = new ListAppInputSourcesRequest(                new ListAppInputSourcesRequestBody("impedit", "aut") {{
                                maxResults = 974259L;
                                nextToken = "exercitationem";
                            }};) {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "porro";
                xAmzDate = "maiores";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "eligendi";
                maxResults = "ducimus";
                nextToken = "alias";
            }};            

            ListAppInputSourcesResponse res = sdk.sdk.listAppInputSources(req);

            if (res.listAppInputSourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAppVersionAppComponents

Lists all the Application Components in the Resilience Hub application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAppVersionAppComponentsRequest;
import org.openapis.openapi.models.operations.ListAppVersionAppComponentsRequestBody;
import org.openapis.openapi.models.operations.ListAppVersionAppComponentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAppVersionAppComponentsRequest req = new ListAppVersionAppComponentsRequest(                new ListAppVersionAppComponentsRequestBody("tempora", "ipsam") {{
                                maxResults = 410492L;
                                nextToken = "aspernatur";
                            }};) {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "possimus";
                xAmzCredential = "magnam";
                xAmzDate = "ratione";
                xAmzSecurityToken = "ex";
                xAmzSignature = "laudantium";
                xAmzSignedHeaders = "dicta";
                maxResults = "dolor";
                nextToken = "maiores";
            }};            

            ListAppVersionAppComponentsResponse res = sdk.sdk.listAppVersionAppComponents(req);

            if (res.listAppVersionAppComponentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAppVersionResourceMappings

Lists how the resources in an application version are mapped/sourced from. Mappings can be physical resource identifiers, CloudFormation stacks, resource-groups, or an application registry app.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAppVersionResourceMappingsRequest;
import org.openapis.openapi.models.operations.ListAppVersionResourceMappingsRequestBody;
import org.openapis.openapi.models.operations.ListAppVersionResourceMappingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAppVersionResourceMappingsRequest req = new ListAppVersionResourceMappingsRequest(                new ListAppVersionResourceMappingsRequestBody("ex", "nulla") {{
                                maxResults = 569211L;
                                nextToken = "voluptatibus";
                            }};) {{
                xAmzAlgorithm = "nostrum";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "quisquam";
                xAmzDate = "saepe";
                xAmzSecurityToken = "ea";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "corporis";
                maxResults = "veniam";
                nextToken = "aliquid";
            }};            

            ListAppVersionResourceMappingsResponse res = sdk.sdk.listAppVersionResourceMappings(req);

            if (res.listAppVersionResourceMappingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAppVersionResources

Lists all the resources in an Resilience Hub application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAppVersionResourcesRequest;
import org.openapis.openapi.models.operations.ListAppVersionResourcesRequestBody;
import org.openapis.openapi.models.operations.ListAppVersionResourcesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("inventore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAppVersionResourcesRequest req = new ListAppVersionResourcesRequest(                new ListAppVersionResourcesRequestBody("magnam", "ea") {{
                                maxResults = 775220L;
                                nextToken = "consectetur";
                                resolutionId = "recusandae";
                            }};) {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "minima";
                xAmzCredential = "eaque";
                xAmzDate = "a";
                xAmzSecurityToken = "libero";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "aut";
                maxResults = "deleniti";
                nextToken = "impedit";
            }};            

            ListAppVersionResourcesResponse res = sdk.sdk.listAppVersionResources(req);

            if (res.listAppVersionResourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAppVersions

Lists the different versions for the Resilience Hub applications.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAppVersionsRequest;
import org.openapis.openapi.models.operations.ListAppVersionsRequestBody;
import org.openapis.openapi.models.operations.ListAppVersionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAppVersionsRequest req = new ListAppVersionsRequest(                new ListAppVersionsRequestBody("fugit") {{
                                maxResults = 882860L;
                                nextToken = "inventore";
                            }};) {{
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "et";
                xAmzCredential = "dolorum";
                xAmzDate = "laborum";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "eum";
                maxResults = "autem";
                nextToken = "nobis";
            }};            

            ListAppVersionsResponse res = sdk.sdk.listAppVersions(req);

            if (res.listAppVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listApps

<p>Lists your Resilience Hub applications.</p> <note> <p>You can filter applications using only one filter at a time or without using any filter. If you try to filter applications using multiple filters, you will get the following error:</p> <p> <code>An error occurred (ValidationException) when calling the ListApps operation: Only one filter is supported for this operation.</code> </p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAppsRequest;
import org.openapis.openapi.models.operations.ListAppsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAppsRequest req = new ListAppsRequest() {{
                xAmzAlgorithm = "assumenda";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "voluptas";
                xAmzDate = "libero";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "numquam";
                appArn = "explicabo";
                maxResults = 591935L;
                name = "Minnie Gutkowski";
                nextToken = "esse";
            }};            

            ListAppsResponse res = sdk.sdk.listApps(req);

            if (res.listAppsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRecommendationTemplates

Lists the recommendation templates for the Resilience Hub applications.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRecommendationTemplatesRequest;
import org.openapis.openapi.models.operations.ListRecommendationTemplatesResponse;
import org.openapis.openapi.models.shared.RecommendationTemplateStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRecommendationTemplatesRequest req = new ListRecommendationTemplatesRequest("rem") {{
                xAmzAlgorithm = "fuga";
                xAmzContentSha256 = "reprehenderit";
                xAmzCredential = "quidem";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "ut";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "suscipit";
                maxResults = 826871L;
                name = "Mr. Irma Schaefer";
                nextToken = "quidem";
                recommendationTemplateArn = "neque";
                reverseOrder = false;
                status = new org.openapis.openapi.models.shared.RecommendationTemplateStatusEnum[]{{
                    add(RecommendationTemplateStatusEnum.SUCCESS),
                    add(RecommendationTemplateStatusEnum.SUCCESS),
                    add(RecommendationTemplateStatusEnum.FAILED),
                    add(RecommendationTemplateStatusEnum.IN_PROGRESS),
                }};
            }};            

            ListRecommendationTemplatesResponse res = sdk.sdk.listRecommendationTemplates(req);

            if (res.listRecommendationTemplatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listResiliencyPolicies

Lists the resiliency policies for the Resilience Hub applications.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListResiliencyPoliciesRequest;
import org.openapis.openapi.models.operations.ListResiliencyPoliciesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListResiliencyPoliciesRequest req = new ListResiliencyPoliciesRequest() {{
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "ab";
                xAmzCredential = "cupiditate";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "ipsam";
                maxResults = 133465L;
                nextToken = "sequi";
                policyName = "quo";
            }};            

            ListResiliencyPoliciesResponse res = sdk.sdk.listResiliencyPolicies(req);

            if (res.listResiliencyPoliciesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSopRecommendations

Lists the standard operating procedure (SOP) recommendations for the Resilience Hub applications.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSopRecommendationsRequest;
import org.openapis.openapi.models.operations.ListSopRecommendationsRequestBody;
import org.openapis.openapi.models.operations.ListSopRecommendationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSopRecommendationsRequest req = new ListSopRecommendationsRequest(                new ListSopRecommendationsRequestBody("recusandae") {{
                                maxResults = 44612L;
                                nextToken = "distinctio";
                            }};) {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "inventore";
                xAmzDate = "nihil";
                xAmzSecurityToken = "totam";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "aliquam";
                maxResults = "odio";
                nextToken = "occaecati";
            }};            

            ListSopRecommendationsResponse res = sdk.sdk.listSopRecommendations(req);

            if (res.listSopRecommendationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSuggestedResiliencyPolicies

Lists the suggested resiliency policies for the Resilience Hub applications.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSuggestedResiliencyPoliciesRequest;
import org.openapis.openapi.models.operations.ListSuggestedResiliencyPoliciesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSuggestedResiliencyPoliciesRequest req = new ListSuggestedResiliencyPoliciesRequest() {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "deserunt";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "eum";
                maxResults = 556429L;
                nextToken = "praesentium";
            }};            

            ListSuggestedResiliencyPoliciesResponse res = sdk.sdk.listSuggestedResiliencyPolicies(req);

            if (res.listSuggestedResiliencyPoliciesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists the tags for your resources in your Resilience Hub applications.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("deleniti") {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "mollitia";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "atque";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "minima";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTestRecommendations

Lists the test recommendations for the Resilience Hub application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTestRecommendationsRequest;
import org.openapis.openapi.models.operations.ListTestRecommendationsRequestBody;
import org.openapis.openapi.models.operations.ListTestRecommendationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTestRecommendationsRequest req = new ListTestRecommendationsRequest(                new ListTestRecommendationsRequestBody("fugit") {{
                                maxResults = 956406L;
                                nextToken = "consequuntur";
                            }};) {{
                xAmzAlgorithm = "ratione";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "saepe";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "atque";
                xAmzSignature = "et";
                xAmzSignedHeaders = "esse";
                maxResults = "eveniet";
                nextToken = "accusamus";
            }};            

            ListTestRecommendationsResponse res = sdk.sdk.listTestRecommendations(req);

            if (res.listTestRecommendationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUnsupportedAppVersionResources

Lists the resources that are not currently supported in Resilience Hub. An unsupported resource is a resource that exists in the object that was used to create an app, but is not supported by Resilience Hub.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUnsupportedAppVersionResourcesRequest;
import org.openapis.openapi.models.operations.ListUnsupportedAppVersionResourcesRequestBody;
import org.openapis.openapi.models.operations.ListUnsupportedAppVersionResourcesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListUnsupportedAppVersionResourcesRequest req = new ListUnsupportedAppVersionResourcesRequest(                new ListUnsupportedAppVersionResourcesRequestBody("esse", "quod") {{
                                maxResults = 724168L;
                                nextToken = "vero";
                                resolutionId = "aliquid";
                            }};) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "vel";
                xAmzDate = "harum";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "rerum";
                xAmzSignedHeaders = "occaecati";
                maxResults = "minima";
                nextToken = "distinctio";
            }};            

            ListUnsupportedAppVersionResourcesResponse res = sdk.sdk.listUnsupportedAppVersionResources(req);

            if (res.listUnsupportedAppVersionResourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## publishAppVersion

Publishes a new version of a specific Resilience Hub application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PublishAppVersionRequest;
import org.openapis.openapi.models.operations.PublishAppVersionRequestBody;
import org.openapis.openapi.models.operations.PublishAppVersionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PublishAppVersionRequest req = new PublishAppVersionRequest(                new PublishAppVersionRequestBody("sit");) {{
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "tempore";
                xAmzCredential = "adipisci";
                xAmzDate = "cumque";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "minus";
            }};            

            PublishAppVersionResponse res = sdk.sdk.publishAppVersion(req);

            if (res.publishAppVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putDraftAppVersionTemplate

Adds or updates the app template for an Resilience Hub application draft version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutDraftAppVersionTemplateRequest;
import org.openapis.openapi.models.operations.PutDraftAppVersionTemplateRequestBody;
import org.openapis.openapi.models.operations.PutDraftAppVersionTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutDraftAppVersionTemplateRequest req = new PutDraftAppVersionTemplateRequest(                new PutDraftAppVersionTemplateRequestBody("sapiente", "consectetur");) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "provident";
                xAmzDate = "a";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "quas";
                xAmzSignedHeaders = "esse";
            }};            

            PutDraftAppVersionTemplateResponse res = sdk.sdk.putDraftAppVersionTemplate(req);

            if (res.putDraftAppVersionTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeDraftAppVersionResourceMappings

Removes resource mappings from a draft application version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveDraftAppVersionResourceMappingsRequest;
import org.openapis.openapi.models.operations.RemoveDraftAppVersionResourceMappingsRequestBody;
import org.openapis.openapi.models.operations.RemoveDraftAppVersionResourceMappingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveDraftAppVersionResourceMappingsRequest req = new RemoveDraftAppVersionResourceMappingsRequest(                new RemoveDraftAppVersionResourceMappingsRequestBody("a") {{
                                appRegistryAppNames = new String[]{{
                                    add("sint"),
                                    add("pariatur"),
                                    add("possimus"),
                                }};
                                eksSourceNames = new String[]{{
                                    add("eveniet"),
                                }};
                                logicalStackNames = new String[]{{
                                    add("facere"),
                                    add("veritatis"),
                                    add("consequuntur"),
                                    add("quasi"),
                                }};
                                resourceGroupNames = new String[]{{
                                    add("culpa"),
                                    add("aliquid"),
                                    add("tenetur"),
                                }};
                                resourceNames = new String[]{{
                                    add("earum"),
                                }};
                                terraformSourceNames = new String[]{{
                                    add("in"),
                                    add("eius"),
                                }};
                            }};) {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "illum";
                xAmzCredential = "soluta";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "aliquam";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "dicta";
            }};            

            RemoveDraftAppVersionResourceMappingsResponse res = sdk.sdk.removeDraftAppVersionResourceMappings(req);

            if (res.removeDraftAppVersionResourceMappingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resolveAppVersionResources

Resolves the resources for an application version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResolveAppVersionResourcesRequest;
import org.openapis.openapi.models.operations.ResolveAppVersionResourcesRequestBody;
import org.openapis.openapi.models.operations.ResolveAppVersionResourcesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ResolveAppVersionResourcesRequest req = new ResolveAppVersionResourcesRequest(                new ResolveAppVersionResourcesRequestBody("reprehenderit", "ullam");) {{
                xAmzAlgorithm = "nisi";
                xAmzContentSha256 = "aut";
                xAmzCredential = "voluptatum";
                xAmzDate = "qui";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "ex";
                xAmzSignedHeaders = "deleniti";
            }};            

            ResolveAppVersionResourcesResponse res = sdk.sdk.resolveAppVersionResources(req);

            if (res.resolveAppVersionResourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startAppAssessment

Creates a new application assessment for an application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartAppAssessmentRequest;
import org.openapis.openapi.models.operations.StartAppAssessmentRequestBody;
import org.openapis.openapi.models.operations.StartAppAssessmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartAppAssessmentRequest req = new StartAppAssessmentRequest(                new StartAppAssessmentRequestBody("dolorum", "architecto", "omnis") {{
                                clientToken = "tenetur";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("at", "et");
                                }};
                            }};) {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "minima";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "consectetur";
                xAmzSignature = "adipisci";
                xAmzSignedHeaders = "iste";
            }};            

            StartAppAssessmentResponse res = sdk.sdk.startAppAssessment(req);

            if (res.startAppAssessmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Applies one or more tags to a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("rem", "aut");
                                            }});, "laudantium") {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "ab";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "non";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "dolor";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes one or more tags from a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("numquam",                 new String[]{{
                                add("explicabo"),
                                add("voluptas"),
                                add("aut"),
                                add("dignissimos"),
                            }}) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "natus";
                xAmzDate = "velit";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "asperiores";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateApp

Updates an application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAppRequest;
import org.openapis.openapi.models.operations.UpdateAppRequestBody;
import org.openapis.openapi.models.operations.UpdateAppRequestBodyAssessmentScheduleEnum;
import org.openapis.openapi.models.operations.UpdateAppResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aperiam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAppRequest req = new UpdateAppRequest(                new UpdateAppRequestBody("ea") {{
                                assessmentSchedule = UpdateAppRequestBodyAssessmentScheduleEnum.DISABLED;
                                clearResiliencyPolicyArn = false;
                                description = "consequuntur";
                                policyArn = "repellendus";
                            }};) {{
                xAmzAlgorithm = "officia";
                xAmzContentSha256 = "maxime";
                xAmzCredential = "dignissimos";
                xAmzDate = "officia";
                xAmzSecurityToken = "asperiores";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "quae";
            }};            

            UpdateAppResponse res = sdk.sdk.updateApp(req);

            if (res.updateAppResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAppVersion

<p>Updates the Resilience Hub application version.</p> <note> <p>This API updates the Resilience Hub application draft version. To use this information for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAppVersionRequest;
import org.openapis.openapi.models.operations.UpdateAppVersionRequestBody;
import org.openapis.openapi.models.operations.UpdateAppVersionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAppVersionRequest req = new UpdateAppVersionRequest(                new UpdateAppVersionRequestBody("porro") {{
                                additionalInfo = new java.util.HashMap<String, String[]>() {{
                                    put("labore", new String[]{{
                                        add("adipisci"),
                                    }});
                                    put("fuga", new String[]{{
                                        add("suscipit"),
                                        add("velit"),
                                        add("culpa"),
                                    }});
                                    put("est", new String[]{{
                                        add("totam"),
                                        add("fugiat"),
                                        add("vel"),
                                        add("ducimus"),
                                    }});
                                    put("quos", new String[]{{
                                        add("labore"),
                                        add("possimus"),
                                    }});
                                }};
                            }};) {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "cum";
                xAmzCredential = "commodi";
                xAmzDate = "in";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "assumenda";
            }};            

            UpdateAppVersionResponse res = sdk.sdk.updateAppVersion(req);

            if (res.updateAppVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAppVersionAppComponent

<p>Updates an existing Application Component in the Resilience Hub application.</p> <note> <p>This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAppVersionAppComponentRequest;
import org.openapis.openapi.models.operations.UpdateAppVersionAppComponentRequestBody;
import org.openapis.openapi.models.operations.UpdateAppVersionAppComponentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAppVersionAppComponentRequest req = new UpdateAppVersionAppComponentRequest(                new UpdateAppVersionAppComponentRequestBody("recusandae", "aliquid") {{
                                additionalInfo = new java.util.HashMap<String, String[]>() {{
                                    put("cum", new String[]{{
                                        add("in"),
                                    }});
                                }};
                                name = "Lila Schultz";
                                type = "suscipit";
                            }};) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "saepe";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "sunt";
                xAmzSignedHeaders = "asperiores";
            }};            

            UpdateAppVersionAppComponentResponse res = sdk.sdk.updateAppVersionAppComponent(req);

            if (res.updateAppVersionAppComponentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAppVersionResource

<p>Updates the resource details in the Resilience Hub application.</p> <note> <ul> <li> <p>This action has no effect outside Resilience Hub.</p> </li> <li> <p>This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> <li> <p>To update application version with new <code>physicalResourceID</code>, you must call <code>ResolveAppVersionResources</code> API.</p> </li> </ul> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAppVersionResourceRequest;
import org.openapis.openapi.models.operations.UpdateAppVersionResourceRequestBody;
import org.openapis.openapi.models.operations.UpdateAppVersionResourceRequestBodyLogicalResourceId;
import org.openapis.openapi.models.operations.UpdateAppVersionResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAppVersionResourceRequest req = new UpdateAppVersionResourceRequest(                new UpdateAppVersionResourceRequestBody("non") {{
                                additionalInfo = new java.util.HashMap<String, String[]>() {{
                                    put("beatae", new String[]{{
                                        add("a"),
                                        add("debitis"),
                                    }});
                                }};
                                appComponents = new String[]{{
                                    add("corporis"),
                                }};
                                awsAccountId = "harum";
                                awsRegion = "laboriosam";
                                excluded = false;
                                logicalResourceId = new UpdateAppVersionResourceRequestBodyLogicalResourceId() {{
                                    eksSourceName = "ipsa";
                                    identifier = "voluptates";
                                    logicalStackName = "libero";
                                    resourceGroupName = "vitae";
                                    terraformSourceName = "accusamus";
                                }};;
                                physicalResourceId = "similique";
                                resourceName = "tempora";
                                resourceType = "aspernatur";
                            }};) {{
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "voluptas";
                xAmzDate = "minima";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "adipisci";
            }};            

            UpdateAppVersionResourceResponse res = sdk.sdk.updateAppVersionResource(req);

            if (res.updateAppVersionResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateResiliencyPolicy

Updates a resiliency policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateResiliencyPolicyRequest;
import org.openapis.openapi.models.operations.UpdateResiliencyPolicyRequestBody;
import org.openapis.openapi.models.operations.UpdateResiliencyPolicyRequestBodyDataLocationConstraintEnum;
import org.openapis.openapi.models.operations.UpdateResiliencyPolicyRequestBodyTierEnum;
import org.openapis.openapi.models.operations.UpdateResiliencyPolicyResponse;
import org.openapis.openapi.models.shared.FailurePolicy;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateResiliencyPolicyRequest req = new UpdateResiliencyPolicyRequest(                new UpdateResiliencyPolicyRequestBody("dolores") {{
                                dataLocationConstraint = UpdateResiliencyPolicyRequestBodyDataLocationConstraintEnum.SAME_CONTINENT;
                                policy = new java.util.HashMap<String, org.openapis.openapi.models.shared.FailurePolicy>() {{
                                    put("dolore", new FailurePolicy(839189L, 351870L) {{
                                        rpoInSecs = 304468L;
                                        rtoInSecs = 885963L;
                                    }});
                                    put("adipisci", new FailurePolicy(555361L, 942584L) {{
                                        rpoInSecs = 738391L;
                                        rtoInSecs = 502389L;
                                    }});
                                }};
                                policyDescription = "nesciunt";
                                policyName = "culpa";
                                tier = UpdateResiliencyPolicyRequestBodyTierEnum.IMPORTANT;
                            }};) {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "totam";
                xAmzCredential = "hic";
                xAmzDate = "exercitationem";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "sit";
                xAmzSignedHeaders = "rerum";
            }};            

            UpdateResiliencyPolicyResponse res = sdk.sdk.updateResiliencyPolicy(req);

            if (res.updateResiliencyPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
