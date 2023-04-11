import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://evidently.{region}.amazonaws.com", "https://evidently.{region}.amazonaws.com", "http://evidently.{region}.amazonaws.com.cn", "https://evidently.{region}.amazonaws.com.cn"];
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
 * <p>You can use Amazon CloudWatch Evidently to safely validate new features by serving them to a specified percentage of your users while you roll out the feature. You can monitor the performance of the new feature to help you decide when to ramp up traffic to your users. This helps you reduce risk and identify unintended consequences before you fully launch the feature.</p> <p>You can also conduct A/B experiments to make feature design decisions based on evidence and data. An experiment can test as many as five variations at once. Evidently collects experiment data and analyzes it using statistical methods. It also provides clear recommendations about which variations perform better. You can test both user-facing features and backend features.</p>
 *
 * @see {@link https://docs.aws.amazon.com/evidently/} - Amazon Web Services documentation
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
     * <p>This operation assigns feature variation to user sessions. For each user session, you pass in an <code>entityID</code> that represents the user. Evidently then checks the evaluation rules and assigns the variation.</p> <p>The first rules that are evaluated are the override rules. If the user's <code>entityID</code> matches an override rule, the user is served the variation specified by that rule.</p> <p>Next, if there is a launch of the feature, the user might be assigned to a variation in the launch. The chance of this depends on the percentage of users that are allocated to that launch. If the user is enrolled in the launch, the variation they are served depends on the allocation of the various feature variations used for the launch.</p> <p>If the user is not assigned to a launch, and there is an ongoing experiment for this feature, the user might be assigned to a variation in the experiment. The chance of this depends on the percentage of users that are allocated to that experiment. If the user is enrolled in the experiment, the variation they are served depends on the allocation of the various feature variations used for the experiment. </p> <p>If the user is not assigned to a launch or experiment, they are served the default variation.</p>
     */
    batchEvaluateFeature(req: operations.BatchEvaluateFeatureRequest, config?: AxiosRequestConfig): Promise<operations.BatchEvaluateFeatureResponse>;
    /**
     * <p>Creates an Evidently <i>experiment</i>. Before you create an experiment, you must create the feature to use for the experiment.</p> <p>An experiment helps you make feature design decisions based on evidence and data. An experiment can test as many as five variations at once. Evidently collects experiment data and analyzes it by statistical methods, and provides clear recommendations about which variations perform better.</p> <p>You can optionally specify a <code>segment</code> to have the experiment consider only certain audience types in the experiment, such as using only user sessions from a certain location or who use a certain internet browser.</p> <p>Don't use this operation to update an existing experiment. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateExperiment.html">UpdateExperiment</a>. </p>
     */
    createExperiment(req: operations.CreateExperimentRequest, config?: AxiosRequestConfig): Promise<operations.CreateExperimentResponse>;
    /**
     * <p>Creates an Evidently <i>feature</i> that you want to launch or test. You can define up to five variations of a feature, and use these variations in your launches and experiments. A feature must be created in a project. For information about creating a project, see <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateProject.html">CreateProject</a>.</p> <p>Don't use this operation to update an existing feature. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateFeature.html">UpdateFeature</a>. </p>
     */
    createFeature(req: operations.CreateFeatureRequest, config?: AxiosRequestConfig): Promise<operations.CreateFeatureResponse>;
    /**
     * <p>Creates a <i>launch</i> of a given feature. Before you create a launch, you must create the feature to use for the launch.</p> <p>You can use a launch to safely validate new features by serving them to a specified percentage of your users while you roll out the feature. You can monitor the performance of the new feature to help you decide when to ramp up traffic to more users. This helps you reduce risk and identify unintended consequences before you fully launch the feature.</p> <p>Don't use this operation to update an existing launch. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateLaunch.html">UpdateLaunch</a>. </p>
     */
    createLaunch(req: operations.CreateLaunchRequest, config?: AxiosRequestConfig): Promise<operations.CreateLaunchResponse>;
    /**
     * <p>Creates a project, which is the logical object in Evidently that can contain features, launches, and experiments. Use projects to group similar features together.</p> <p>To update an existing project, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateProject.html">UpdateProject</a>.</p>
     */
    createProject(req: operations.CreateProjectRequest, config?: AxiosRequestConfig): Promise<operations.CreateProjectResponse>;
    /**
     * <p>Use this operation to define a <i>segment</i> of your audience. A segment is a portion of your audience that share one or more characteristics. Examples could be Chrome browser users, users in Europe, or Firefox browser users in Europe who also fit other criteria that your application collects, such as age.</p> <p>Using a segment in an experiment limits that experiment to evaluate only the users who match the segment criteria. Using one or more segments in a launch allows you to define different traffic splits for the different audience segments.</p> <p>For more information about segment pattern syntax, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html#CloudWatch-Evidently-segments-syntax.html"> Segment rule pattern syntax</a>.</p> <p>The pattern that you define for a segment is matched against the value of <code>evaluationContext</code>, which is passed into Evidently in the <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_EvaluateFeature.html">EvaluateFeature</a> operation, when Evidently assigns a feature variation to a user.</p>
     */
    createSegment(req: operations.CreateSegmentRequest, config?: AxiosRequestConfig): Promise<operations.CreateSegmentResponse>;
    /**
     * <p>Deletes an Evidently experiment. The feature used for the experiment is not deleted.</p> <p>To stop an experiment without deleting it, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_StopExperiment.html">StopExperiment</a>. </p>
     */
    deleteExperiment(req: operations.DeleteExperimentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteExperimentResponse>;
    /**
     * Deletes an Evidently feature.
     */
    deleteFeature(req: operations.DeleteFeatureRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFeatureResponse>;
    /**
     * <p>Deletes an Evidently launch. The feature used for the launch is not deleted.</p> <p>To stop a launch without deleting it, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_StopLaunch.html">StopLaunch</a>. </p>
     */
    deleteLaunch(req: operations.DeleteLaunchRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLaunchResponse>;
    /**
     * Deletes an Evidently project. Before you can delete a project, you must delete all the features that the project contains. To delete a feature, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_DeleteFeature.html">DeleteFeature</a>.
     */
    deleteProject(req: operations.DeleteProjectRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProjectResponse>;
    /**
     * Deletes a segment. You can't delete a segment that is being used in a launch or experiment, even if that launch or experiment is not currently running.
     */
    deleteSegment(req: operations.DeleteSegmentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSegmentResponse>;
    /**
     * <p>This operation assigns a feature variation to one given user session. You pass in an <code>entityID</code> that represents the user. Evidently then checks the evaluation rules and assigns the variation.</p> <p>The first rules that are evaluated are the override rules. If the user's <code>entityID</code> matches an override rule, the user is served the variation specified by that rule.</p> <p>If there is a current launch with this feature that uses segment overrides, and if the user session's <code>evaluationContext</code> matches a segment rule defined in a segment override, the configuration in the segment overrides is used. For more information about segments, see <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateSegment.html">CreateSegment</a> and <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html">Use segments to focus your audience</a>.</p> <p>If there is a launch with no segment overrides, the user might be assigned to a variation in the launch. The chance of this depends on the percentage of users that are allocated to that launch. If the user is enrolled in the launch, the variation they are served depends on the allocation of the various feature variations used for the launch.</p> <p>If the user is not assigned to a launch, and there is an ongoing experiment for this feature, the user might be assigned to a variation in the experiment. The chance of this depends on the percentage of users that are allocated to that experiment.</p> <p>If the experiment uses a segment, then only user sessions with <code>evaluationContext</code> values that match the segment rule are used in the experiment.</p> <p>If the user is enrolled in the experiment, the variation they are served depends on the allocation of the various feature variations used for the experiment. </p> <p>If the user is not assigned to a launch or experiment, they are served the default variation.</p>
     */
    evaluateFeature(req: operations.EvaluateFeatureRequest, config?: AxiosRequestConfig): Promise<operations.EvaluateFeatureResponse>;
    /**
     * Returns the details about one experiment. You must already know the experiment name. To retrieve a list of experiments in your account, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListExperiments.html">ListExperiments</a>.
     */
    getExperiment(req: operations.GetExperimentRequest, config?: AxiosRequestConfig): Promise<operations.GetExperimentResponse>;
    /**
     * <p>Retrieves the results of a running or completed experiment. No results are available until there have been 100 events for each variation and at least 10 minutes have passed since the start of the experiment. To increase the statistical power, Evidently performs an additional offline p-value analysis at the end of the experiment. Offline p-value analysis can detect statistical significance in some cases where the anytime p-values used during the experiment do not find statistical significance.</p> <p>Experiment results are available up to 63 days after the start of the experiment. They are not available after that because of CloudWatch data retention policies.</p>
     */
    getExperimentResults(req: operations.GetExperimentResultsRequest, config?: AxiosRequestConfig): Promise<operations.GetExperimentResultsResponse>;
    /**
     * Returns the details about one feature. You must already know the feature name. To retrieve a list of features in your account, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListFeatures.html">ListFeatures</a>.
     */
    getFeature(req: operations.GetFeatureRequest, config?: AxiosRequestConfig): Promise<operations.GetFeatureResponse>;
    /**
     * Returns the details about one launch. You must already know the launch name. To retrieve a list of launches in your account, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListLaunches.html">ListLaunches</a>.
     */
    getLaunch(req: operations.GetLaunchRequest, config?: AxiosRequestConfig): Promise<operations.GetLaunchResponse>;
    /**
     * Returns the details about one launch. You must already know the project name. To retrieve a list of projects in your account, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListProjects.html">ListProjects</a>.
     */
    getProject(req: operations.GetProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectResponse>;
    /**
     * Returns information about the specified segment. Specify the segment you want to view by specifying its ARN.
     */
    getSegment(req: operations.GetSegmentRequest, config?: AxiosRequestConfig): Promise<operations.GetSegmentResponse>;
    /**
     * Returns configuration details about all the experiments in the specified project.
     */
    listExperiments(req: operations.ListExperimentsRequest, config?: AxiosRequestConfig): Promise<operations.ListExperimentsResponse>;
    /**
     * Returns configuration details about all the features in the specified project.
     */
    listFeatures(req: operations.ListFeaturesRequest, config?: AxiosRequestConfig): Promise<operations.ListFeaturesResponse>;
    /**
     * Returns configuration details about all the launches in the specified project.
     */
    listLaunches(req: operations.ListLaunchesRequest, config?: AxiosRequestConfig): Promise<operations.ListLaunchesResponse>;
    /**
     * Returns configuration details about all the projects in the current Region in your account.
     */
    listProjects(req: operations.ListProjectsRequest, config?: AxiosRequestConfig): Promise<operations.ListProjectsResponse>;
    /**
     * Use this operation to find which experiments or launches are using a specified segment.
     */
    listSegmentReferences(req: operations.ListSegmentReferencesRequest, config?: AxiosRequestConfig): Promise<operations.ListSegmentReferencesResponse>;
    /**
     * Returns a list of audience segments that you have created in your account in this Region.
     */
    listSegments(req: operations.ListSegmentsRequest, config?: AxiosRequestConfig): Promise<operations.ListSegmentsResponse>;
    /**
     * Displays the tags associated with an Evidently resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Sends performance events to Evidently. These events can be used to evaluate a launch or an experiment.
     */
    putProjectEvents(req: operations.PutProjectEventsRequest, config?: AxiosRequestConfig): Promise<operations.PutProjectEventsResponse>;
    /**
     * Starts an existing experiment. To create an experiment, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateExperiment.html">CreateExperiment</a>.
     */
    startExperiment(req: operations.StartExperimentRequest, config?: AxiosRequestConfig): Promise<operations.StartExperimentResponse>;
    /**
     * Starts an existing launch. To create a launch, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateLaunch.html">CreateLaunch</a>.
     */
    startLaunch(req: operations.StartLaunchRequest, config?: AxiosRequestConfig): Promise<operations.StartLaunchResponse>;
    /**
     * Stops an experiment that is currently running. If you stop an experiment, you can't resume it or restart it.
     */
    stopExperiment(req: operations.StopExperimentRequest, config?: AxiosRequestConfig): Promise<operations.StopExperimentResponse>;
    /**
     * Stops a launch that is currently running. After you stop a launch, you will not be able to resume it or restart it. Also, it will not be evaluated as a rule for traffic allocation, and the traffic that was allocated to the launch will instead be available to the feature's experiment, if there is one. Otherwise, all traffic will be served the default variation after the launch is stopped.
     */
    stopLaunch(req: operations.StopLaunchRequest, config?: AxiosRequestConfig): Promise<operations.StopLaunchResponse>;
    /**
     * <p>Assigns one or more tags (key-value pairs) to the specified CloudWatch Evidently resource. Projects, features, launches, and experiments can be tagged.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a resource.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Use this operation to test a rules pattern that you plan to use to create an audience segment. For more information about segments, see <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateSegment.html">CreateSegment</a>.
     */
    testSegmentPattern(req: operations.TestSegmentPatternRequest, config?: AxiosRequestConfig): Promise<operations.TestSegmentPatternResponse>;
    /**
     * Removes one or more tags from the specified resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * <p>Updates an Evidently experiment. </p> <p>Don't use this operation to update an experiment's tag. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TagResource.html">TagResource</a>. </p>
     */
    updateExperiment(req: operations.UpdateExperimentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateExperimentResponse>;
    /**
     * <p>Updates an existing feature.</p> <p>You can't use this operation to update the tags of an existing feature. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TagResource.html">TagResource</a>. </p>
     */
    updateFeature(req: operations.UpdateFeatureRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFeatureResponse>;
    /**
     * <p>Updates a launch of a given feature. </p> <p>Don't use this operation to update the tags of an existing launch. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TagResource.html">TagResource</a>. </p>
     */
    updateLaunch(req: operations.UpdateLaunchRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLaunchResponse>;
    /**
     * <p>Updates the description of an existing project.</p> <p>To create a new project, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateProject.html">CreateProject</a>.</p> <p>Don't use this operation to update the data storage options of a project. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateProjectDataDelivery.html">UpdateProjectDataDelivery</a>. </p> <p>Don't use this operation to update the tags of a project. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TagResource.html">TagResource</a>. </p>
     */
    updateProject(req: operations.UpdateProjectRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProjectResponse>;
    /**
     * <p>Updates the data storage options for this project. If you store evaluation events, you an keep them and analyze them on your own. If you choose not to store evaluation events, Evidently deletes them after using them to produce metrics and other experiment results that you can view.</p> <p>You can't specify both <code>cloudWatchLogs</code> and <code>s3Destination</code> in the same operation.</p>
     */
    updateProjectDataDelivery(req: operations.UpdateProjectDataDeliveryRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProjectDataDeliveryResponse>;
}
