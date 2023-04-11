import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://resiliencehub.{region}.amazonaws.com", "https://resiliencehub.{region}.amazonaws.com", "http://resiliencehub.{region}.amazonaws.com.cn", "https://resiliencehub.{region}.amazonaws.com.cn"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * Resilience Hub helps you proactively prepare and protect your Amazon Web Services applications from disruptions. It offers continual resiliency assessment and validation that integrates into your software development lifecycle. This enables you to uncover resiliency weaknesses, ensure recovery time objective (RTO) and recovery point objective (RPO) targets for your applications are met, and resolve issues before they are released into production.
 *
 * @see {@link https://docs.aws.amazon.com/resiliencehub/} - Amazon Web Services documentation
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Adds the resource mapping for the draft application version. You can also update an existing resource mapping to a new physical resource.
     */
    addDraftAppVersionResourceMappings(req: operations.AddDraftAppVersionResourceMappingsRequest, config?: AxiosRequestConfig): Promise<operations.AddDraftAppVersionResourceMappingsResponse>;
    /**
     * <p>Creates an Resilience Hub application. An Resilience Hub application is a collection of Amazon Web Services resources structured to prevent and recover Amazon Web Services application disruptions. To describe a Resilience Hub application, you provide an application name, resources from one or more–up to five–CloudFormation stacks, and an appropriate resiliency policy.</p> <p>After you create an Resilience Hub application, you publish it so that you can run a resiliency assessment on it. You can then use recommendations from the assessment to improve resiliency by running another assessment, comparing results, and then iterating the process until you achieve your goals for recovery time objective (RTO) and recovery point objective (RPO).</p>
     */
    createApp(req: operations.CreateAppRequest, config?: AxiosRequestConfig): Promise<operations.CreateAppResponse>;
    /**
     * <p>Creates a new Application Component in the Resilience Hub application.</p> <note> <p>This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </note>
     */
    createAppVersionAppComponent(req: operations.CreateAppVersionAppComponentRequest, config?: AxiosRequestConfig): Promise<operations.CreateAppVersionAppComponentResponse>;
    /**
     * <p>Adds a resource to the Resilience Hub application and assigns it to the specified Application Components. If you specify a new Application Component, Resilience Hub will automatically create the Application Component.</p> <note> <ul> <li> <p>This action has no effect outside Resilience Hub.</p> </li> <li> <p>This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> <li> <p>To update application version with new <code>physicalResourceID</code>, you must call <code>ResolveAppVersionResources</code> API.</p> </li> </ul> </note>
     */
    createAppVersionResource(req: operations.CreateAppVersionResourceRequest, config?: AxiosRequestConfig): Promise<operations.CreateAppVersionResourceResponse>;
    /**
     * Creates a new recommendation template for the Resilience Hub application.
     */
    createRecommendationTemplate(req: operations.CreateRecommendationTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreateRecommendationTemplateResponse>;
    /**
     * Creates a resiliency policy for an application.
     */
    createResiliencyPolicy(req: operations.CreateResiliencyPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CreateResiliencyPolicyResponse>;
    /**
     * Deletes an Resilience Hub application. This is a destructive action that can't be undone.
     */
    deleteApp(req: operations.DeleteAppRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppResponse>;
    /**
     * Deletes an Resilience Hub application assessment. This is a destructive action that can't be undone.
     */
    deleteAppAssessment(req: operations.DeleteAppAssessmentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppAssessmentResponse>;
    /**
     * Deletes the input source and all of its imported resources from the Resilience Hub application.
     */
    deleteAppInputSource(req: operations.DeleteAppInputSourceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppInputSourceResponse>;
    /**
     * <p>Deletes an Application Component from the Resilience Hub application.</p> <note> <ul> <li> <p>This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> <li> <p>You will not be able to delete an Application Component if it has resources associated with it.</p> </li> </ul> </note>
     */
    deleteAppVersionAppComponent(req: operations.DeleteAppVersionAppComponentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppVersionAppComponentResponse>;
    /**
     * <p>Deletes a resource from the Resilience Hub application.</p> <note> <ul> <li> <p>You can only delete a manually added resource. To exclude non-manually added resources, use the <code>UpdateAppVersionResource</code> API.</p> </li> <li> <p>This action has no effect outside Resilience Hub.</p> </li> <li> <p>This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> </ul> </note>
     */
    deleteAppVersionResource(req: operations.DeleteAppVersionResourceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppVersionResourceResponse>;
    /**
     * Deletes a recommendation template. This is a destructive action that can't be undone.
     */
    deleteRecommendationTemplate(req: operations.DeleteRecommendationTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRecommendationTemplateResponse>;
    /**
     * Deletes a resiliency policy. This is a destructive action that can't be undone.
     */
    deleteResiliencyPolicy(req: operations.DeleteResiliencyPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteResiliencyPolicyResponse>;
    /**
     * Describes an Resilience Hub application.
     */
    describeApp(req: operations.DescribeAppRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAppResponse>;
    /**
     * Describes an assessment for an Resilience Hub application.
     */
    describeAppAssessment(req: operations.DescribeAppAssessmentRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAppAssessmentResponse>;
    /**
     * Describes the Resilience Hub application version.
     */
    describeAppVersion(req: operations.DescribeAppVersionRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAppVersionResponse>;
    /**
     * Describes an Application Component in the Resilience Hub application.
     */
    describeAppVersionAppComponent(req: operations.DescribeAppVersionAppComponentRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAppVersionAppComponentResponse>;
    /**
     * <p>Describes a resource of the Resilience Hub application.</p> <note> <p>This API accepts only one of the following parameters to descibe the resource:</p> <ul> <li> <p> <code>resourceName</code> </p> </li> <li> <p> <code>logicalResourceId</code> </p> </li> <li> <p> <code>physicalResourceId</code> (Along with <code>physicalResourceId</code>, you can also provide <code>awsAccountId</code>, and <code>awsRegion</code>)</p> </li> </ul> </note>
     */
    describeAppVersionResource(req: operations.DescribeAppVersionResourceRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAppVersionResourceResponse>;
    /**
     * Returns the resolution status for the specified resolution identifier for an application version. If <code>resolutionId</code> is not specified, the current resolution status is returned.
     */
    describeAppVersionResourcesResolutionStatus(req: operations.DescribeAppVersionResourcesResolutionStatusRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAppVersionResourcesResolutionStatusResponse>;
    /**
     * Describes details about an Resilience Hub application.
     */
    describeAppVersionTemplate(req: operations.DescribeAppVersionTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAppVersionTemplateResponse>;
    /**
     * <p>Describes the status of importing resources to an application version.</p> <note> <p>If you get a 404 error with <code>ResourceImportStatusNotFoundAppMetadataException</code>, you must call <code>importResourcesToDraftAppVersion</code> after creating the application and before calling <code>describeDraftAppVersionResourcesImportStatus</code> to obtain the status.</p> </note>
     */
    describeDraftAppVersionResourcesImportStatus(req: operations.DescribeDraftAppVersionResourcesImportStatusRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDraftAppVersionResourcesImportStatusResponse>;
    /**
     * Describes a specified resiliency policy for an Resilience Hub application. The returned policy object includes creation time, data location constraints, the Amazon Resource Name (ARN) for the policy, tags, tier, and more.
     */
    describeResiliencyPolicy(req: operations.DescribeResiliencyPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DescribeResiliencyPolicyResponse>;
    /**
     * Imports resources to Resilience Hub application draft version from different input sources. For more information about the input sources supported by Resilience Hub, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/discover-structure.html">Discover the structure and describe your Resilience Hub application</a>.
     */
    importResourcesToDraftAppVersion(req: operations.ImportResourcesToDraftAppVersionRequest, config?: AxiosRequestConfig): Promise<operations.ImportResourcesToDraftAppVersionResponse>;
    /**
     * Lists the alarm recommendations for an Resilience Hub application.
     */
    listAlarmRecommendations(req: operations.ListAlarmRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.ListAlarmRecommendationsResponse>;
    /**
     * Lists the assessments for an Resilience Hub application. You can use request parameters to refine the results for the response object.
     */
    listAppAssessments(req: operations.ListAppAssessmentsRequest, config?: AxiosRequestConfig): Promise<operations.ListAppAssessmentsResponse>;
    /**
     * Lists the compliances for an Resilience Hub Application Component.
     */
    listAppComponentCompliances(req: operations.ListAppComponentCompliancesRequest, config?: AxiosRequestConfig): Promise<operations.ListAppComponentCompliancesResponse>;
    /**
     * Lists the recommendations for an Resilience Hub Application Component.
     */
    listAppComponentRecommendations(req: operations.ListAppComponentRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.ListAppComponentRecommendationsResponse>;
    /**
     * Lists all the input sources of the Resilience Hub application. For more information about the input sources supported by Resilience Hub, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/discover-structure.html">Discover the structure and describe your Resilience Hub application</a>.
     */
    listAppInputSources(req: operations.ListAppInputSourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListAppInputSourcesResponse>;
    /**
     * Lists all the Application Components in the Resilience Hub application.
     */
    listAppVersionAppComponents(req: operations.ListAppVersionAppComponentsRequest, config?: AxiosRequestConfig): Promise<operations.ListAppVersionAppComponentsResponse>;
    /**
     * Lists how the resources in an application version are mapped/sourced from. Mappings can be physical resource identifiers, CloudFormation stacks, resource-groups, or an application registry app.
     */
    listAppVersionResourceMappings(req: operations.ListAppVersionResourceMappingsRequest, config?: AxiosRequestConfig): Promise<operations.ListAppVersionResourceMappingsResponse>;
    /**
     * Lists all the resources in an Resilience Hub application.
     */
    listAppVersionResources(req: operations.ListAppVersionResourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListAppVersionResourcesResponse>;
    /**
     * Lists the different versions for the Resilience Hub applications.
     */
    listAppVersions(req: operations.ListAppVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ListAppVersionsResponse>;
    /**
     * <p>Lists your Resilience Hub applications.</p> <note> <p>You can filter applications using only one filter at a time or without using any filter. If you try to filter applications using multiple filters, you will get the following error:</p> <p> <code>An error occurred (ValidationException) when calling the ListApps operation: Only one filter is supported for this operation.</code> </p> </note>
     */
    listApps(req: operations.ListAppsRequest, config?: AxiosRequestConfig): Promise<operations.ListAppsResponse>;
    /**
     * Lists the recommendation templates for the Resilience Hub applications.
     */
    listRecommendationTemplates(req: operations.ListRecommendationTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.ListRecommendationTemplatesResponse>;
    /**
     * Lists the resiliency policies for the Resilience Hub applications.
     */
    listResiliencyPolicies(req: operations.ListResiliencyPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.ListResiliencyPoliciesResponse>;
    /**
     * Lists the standard operating procedure (SOP) recommendations for the Resilience Hub applications.
     */
    listSopRecommendations(req: operations.ListSopRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.ListSopRecommendationsResponse>;
    /**
     * Lists the suggested resiliency policies for the Resilience Hub applications.
     */
    listSuggestedResiliencyPolicies(req: operations.ListSuggestedResiliencyPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.ListSuggestedResiliencyPoliciesResponse>;
    /**
     * Lists the tags for your resources in your Resilience Hub applications.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Lists the test recommendations for the Resilience Hub application.
     */
    listTestRecommendations(req: operations.ListTestRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.ListTestRecommendationsResponse>;
    /**
     * Lists the resources that are not currently supported in Resilience Hub. An unsupported resource is a resource that exists in the object that was used to create an app, but is not supported by Resilience Hub.
     */
    listUnsupportedAppVersionResources(req: operations.ListUnsupportedAppVersionResourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListUnsupportedAppVersionResourcesResponse>;
    /**
     * Publishes a new version of a specific Resilience Hub application.
     */
    publishAppVersion(req: operations.PublishAppVersionRequest, config?: AxiosRequestConfig): Promise<operations.PublishAppVersionResponse>;
    /**
     * Adds or updates the app template for an Resilience Hub application draft version.
     */
    putDraftAppVersionTemplate(req: operations.PutDraftAppVersionTemplateRequest, config?: AxiosRequestConfig): Promise<operations.PutDraftAppVersionTemplateResponse>;
    /**
     * Removes resource mappings from a draft application version.
     */
    removeDraftAppVersionResourceMappings(req: operations.RemoveDraftAppVersionResourceMappingsRequest, config?: AxiosRequestConfig): Promise<operations.RemoveDraftAppVersionResourceMappingsResponse>;
    /**
     * Resolves the resources for an application version.
     */
    resolveAppVersionResources(req: operations.ResolveAppVersionResourcesRequest, config?: AxiosRequestConfig): Promise<operations.ResolveAppVersionResourcesResponse>;
    /**
     * Creates a new application assessment for an application.
     */
    startAppAssessment(req: operations.StartAppAssessmentRequest, config?: AxiosRequestConfig): Promise<operations.StartAppAssessmentResponse>;
    /**
     * Applies one or more tags to a resource.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes one or more tags from a resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates an application.
     */
    updateApp(req: operations.UpdateAppRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAppResponse>;
    /**
     * <p>Updates the Resilience Hub application version.</p> <note> <p>This API updates the Resilience Hub application draft version. To use this information for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </note>
     */
    updateAppVersion(req: operations.UpdateAppVersionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAppVersionResponse>;
    /**
     * <p>Updates an existing Application Component in the Resilience Hub application.</p> <note> <p>This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </note>
     */
    updateAppVersionAppComponent(req: operations.UpdateAppVersionAppComponentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAppVersionAppComponentResponse>;
    /**
     * <p>Updates the resource details in the Resilience Hub application.</p> <note> <ul> <li> <p>This action has no effect outside Resilience Hub.</p> </li> <li> <p>This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> <li> <p>To update application version with new <code>physicalResourceID</code>, you must call <code>ResolveAppVersionResources</code> API.</p> </li> </ul> </note>
     */
    updateAppVersionResource(req: operations.UpdateAppVersionResourceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAppVersionResourceResponse>;
    /**
     * Updates a resiliency policy.
     */
    updateResiliencyPolicy(req: operations.UpdateResiliencyPolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateResiliencyPolicyResponse>;
}
