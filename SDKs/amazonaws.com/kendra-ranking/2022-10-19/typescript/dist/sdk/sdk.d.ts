import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://kendra-ranking.{region}.api.aws", "https://kendra-ranking.{region}.api.aws", "http://kendra-ranking.{region}.amazonaws.com.cn", "https://kendra-ranking.{region}.amazonaws.com.cn"];
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
 * Amazon Kendra Intelligent Ranking uses Amazon Kendra semantic search capabilities to intelligently re-rank a search service's results.
 *
 * @see {@link https://docs.aws.amazon.com/kendra-ranking/} - Amazon Web Services documentation
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
     * <p>Creates a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. You set the number of capacity units that you require for Amazon Kendra Intelligent Ranking to rescore or re-rank a search service's results.</p> <p>For an example of using the <code>CreateRescoreExecutionPlan</code> API, including using the Python and Java SDKs, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/search-service-rerank.html">Semantically ranking a search service's results</a>.</p>
     */
    createRescoreExecutionPlan(req: operations.CreateRescoreExecutionPlanRequest, config?: AxiosRequestConfig): Promise<operations.CreateRescoreExecutionPlanResponse>;
    /**
     * Deletes a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API.
     */
    deleteRescoreExecutionPlan(req: operations.DeleteRescoreExecutionPlanRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRescoreExecutionPlanResponse>;
    /**
     * Gets information about a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API.
     */
    describeRescoreExecutionPlan(req: operations.DescribeRescoreExecutionPlanRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRescoreExecutionPlanResponse>;
    /**
     * Lists your rescore execution plans. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API.
     */
    listRescoreExecutionPlans(req: operations.ListRescoreExecutionPlansRequest, config?: AxiosRequestConfig): Promise<operations.ListRescoreExecutionPlansResponse>;
    /**
     * Gets a list of tags associated with a specified resource. A rescore execution plan is an example of a resource that can have tags associated with it.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Rescores or re-ranks search results from a search service such as OpenSearch (self managed). You use the semantic search capabilities of Amazon Kendra Intelligent Ranking to improve the search service's results.
     */
    rescore(req: operations.RescoreRequest, config?: AxiosRequestConfig): Promise<operations.RescoreResponse>;
    /**
     * Adds a specified tag to a specified rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. If the tag already exists, the existing value is replaced with the new value.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes a tag from a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> operation.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. You can update the number of capacity units you require for Amazon Kendra Intelligent Ranking to rescore or re-rank a search service's results.
     */
    updateRescoreExecutionPlan(req: operations.UpdateRescoreExecutionPlanRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRescoreExecutionPlanResponse>;
}
