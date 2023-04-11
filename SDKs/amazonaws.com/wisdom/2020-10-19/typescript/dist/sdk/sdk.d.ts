import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://wisdom.{region}.amazonaws.com", "https://wisdom.{region}.amazonaws.com", "http://wisdom.{region}.amazonaws.com.cn", "https://wisdom.{region}.amazonaws.com.cn"];
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
 * Amazon Connect Wisdom delivers agents the information they need to solve customer issues as they're actively speaking with customers. Agents can search across connected repositories from within their agent desktop to find answers quickly. Use Amazon Connect Wisdom to create an assistant and a knowledge base, for example, or manage content by uploading custom files.
 *
 * @see {@link https://docs.aws.amazon.com/wisdom/} - Amazon Web Services documentation
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
     * Creates an Amazon Connect Wisdom assistant.
     */
    createAssistant(req: operations.CreateAssistantRequest, config?: AxiosRequestConfig): Promise<operations.CreateAssistantResponse>;
    /**
     * Creates an association between an Amazon Connect Wisdom assistant and another resource. Currently, the only supported association is with a knowledge base. An assistant can have only a single association.
     */
    createAssistantAssociation(req: operations.CreateAssistantAssociationRequest, config?: AxiosRequestConfig): Promise<operations.CreateAssistantAssociationResponse>;
    /**
     * Creates Wisdom content. Before to calling this API, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a> to upload an asset.
     */
    createContent(req: operations.CreateContentRequest, config?: AxiosRequestConfig): Promise<operations.CreateContentResponse>;
    /**
     * <p>Creates a knowledge base.</p> <note> <p>When using this API, you cannot reuse <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/Welcome.html">Amazon AppIntegrations</a> DataIntegrations with external knowledge bases such as Salesforce and ServiceNow. If you do, you'll get an <code>InvalidRequestException</code> error. </p> <p>For example, you're programmatically managing your external knowledge base, and you want to add or remove one of the fields that is being ingested from Salesforce. Do the following:</p> <ol> <li> <p>Call <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_DeleteKnowledgeBase.html">DeleteKnowledgeBase</a>.</p> </li> <li> <p>Call <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteDataIntegration.html">DeleteDataIntegration</a>.</p> </li> <li> <p>Call <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> to recreate the DataIntegration or a create different one.</p> </li> <li> <p>Call CreateKnowledgeBase.</p> </li> </ol> </note>
     */
    createKnowledgeBase(req: operations.CreateKnowledgeBaseRequest, config?: AxiosRequestConfig): Promise<operations.CreateKnowledgeBaseResponse>;
    /**
     * Creates a session. A session is a contextual container used for generating recommendations. Amazon Connect creates a new Wisdom session for each contact on which Wisdom is enabled.
     */
    createSession(req: operations.CreateSessionRequest, config?: AxiosRequestConfig): Promise<operations.CreateSessionResponse>;
    /**
     * Deletes an assistant.
     */
    deleteAssistant(req: operations.DeleteAssistantRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAssistantResponse>;
    /**
     * Deletes an assistant association.
     */
    deleteAssistantAssociation(req: operations.DeleteAssistantAssociationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAssistantAssociationResponse>;
    /**
     * Deletes the content.
     */
    deleteContent(req: operations.DeleteContentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteContentResponse>;
    /**
     * <p>Deletes the knowledge base.</p> <note> <p>When you use this API to delete an external knowledge base such as Salesforce or ServiceNow, you must also delete the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/Welcome.html">Amazon AppIntegrations</a> DataIntegration. This is because you can't reuse the DataIntegration after it's been associated with an external knowledge base. However, you can delete and recreate it. See <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteDataIntegration.html">DeleteDataIntegration</a> and <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> in the <i>Amazon AppIntegrations API Reference</i>.</p> </note>
     */
    deleteKnowledgeBase(req: operations.DeleteKnowledgeBaseRequest, config?: AxiosRequestConfig): Promise<operations.DeleteKnowledgeBaseResponse>;
    /**
     * Retrieves information about an assistant.
     */
    getAssistant(req: operations.GetAssistantRequest, config?: AxiosRequestConfig): Promise<operations.GetAssistantResponse>;
    /**
     * Retrieves information about an assistant association.
     */
    getAssistantAssociation(req: operations.GetAssistantAssociationRequest, config?: AxiosRequestConfig): Promise<operations.GetAssistantAssociationResponse>;
    /**
     * Retrieves content, including a pre-signed URL to download the content.
     */
    getContent(req: operations.GetContentRequest, config?: AxiosRequestConfig): Promise<operations.GetContentResponse>;
    /**
     * Retrieves summary information about the content.
     */
    getContentSummary(req: operations.GetContentSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetContentSummaryResponse>;
    /**
     * Retrieves information about the knowledge base.
     */
    getKnowledgeBase(req: operations.GetKnowledgeBaseRequest, config?: AxiosRequestConfig): Promise<operations.GetKnowledgeBaseResponse>;
    /**
     * Retrieves recommendations for the specified session. To avoid retrieving the same recommendations in subsequent calls, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_NotifyRecommendationsReceived.html">NotifyRecommendationsReceived</a>. This API supports long-polling behavior with the <code>waitTimeSeconds</code> parameter. Short poll is the default behavior and only returns recommendations already available. To perform a manual query against an assistant, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_QueryAssistant.html">QueryAssistant</a>.
     */
    getRecommendations(req: operations.GetRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.GetRecommendationsResponse>;
    /**
     * Retrieves information for a specified session.
     */
    getSession(req: operations.GetSessionRequest, config?: AxiosRequestConfig): Promise<operations.GetSessionResponse>;
    /**
     * Lists information about assistant associations.
     */
    listAssistantAssociations(req: operations.ListAssistantAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.ListAssistantAssociationsResponse>;
    /**
     * Lists information about assistants.
     */
    listAssistants(req: operations.ListAssistantsRequest, config?: AxiosRequestConfig): Promise<operations.ListAssistantsResponse>;
    /**
     * Lists the content.
     */
    listContents(req: operations.ListContentsRequest, config?: AxiosRequestConfig): Promise<operations.ListContentsResponse>;
    /**
     * Lists the knowledge bases.
     */
    listKnowledgeBases(req: operations.ListKnowledgeBasesRequest, config?: AxiosRequestConfig): Promise<operations.ListKnowledgeBasesResponse>;
    /**
     * Lists the tags for the specified resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Removes the specified recommendations from the specified assistant's queue of newly available recommendations. You can use this API in conjunction with <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetRecommendations.html">GetRecommendations</a> and a <code>waitTimeSeconds</code> input for long-polling behavior and avoiding duplicate recommendations.
     */
    notifyRecommendationsReceived(req: operations.NotifyRecommendationsReceivedRequest, config?: AxiosRequestConfig): Promise<operations.NotifyRecommendationsReceivedResponse>;
    /**
     * Performs a manual search against the specified assistant. To retrieve recommendations for an assistant, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetRecommendations.html">GetRecommendations</a>.
     */
    queryAssistant(req: operations.QueryAssistantRequest, config?: AxiosRequestConfig): Promise<operations.QueryAssistantResponse>;
    /**
     * Removes a URI template from a knowledge base.
     */
    removeKnowledgeBaseTemplateUri(req: operations.RemoveKnowledgeBaseTemplateUriRequest, config?: AxiosRequestConfig): Promise<operations.RemoveKnowledgeBaseTemplateUriResponse>;
    /**
     * Searches for content in a specified knowledge base. Can be used to get a specific content resource by its name.
     */
    searchContent(req: operations.SearchContentRequest, config?: AxiosRequestConfig): Promise<operations.SearchContentResponse>;
    /**
     * Searches for sessions.
     */
    searchSessions(req: operations.SearchSessionsRequest, config?: AxiosRequestConfig): Promise<operations.SearchSessionsResponse>;
    /**
     * Get a URL to upload content to a knowledge base. To upload content, first make a PUT request to the returned URL with your file, making sure to include the required headers. Then use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateContent.html">CreateContent</a> to finalize the content creation process or <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_UpdateContent.html">UpdateContent</a> to modify an existing resource. You can only upload content to a knowledge base of type CUSTOM.
     */
    startContentUpload(req: operations.StartContentUploadRequest, config?: AxiosRequestConfig): Promise<operations.StartContentUploadResponse>;
    /**
     * Adds the specified tags to the specified resource.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes the specified tags from the specified resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates information about the content.
     */
    updateContent(req: operations.UpdateContentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateContentResponse>;
    /**
     * Updates the template URI of a knowledge base. This is only supported for knowledge bases of type EXTERNAL. Include a single variable in <code>${variable}</code> format; this interpolated by Wisdom using ingested content. For example, if you ingest a Salesforce article, it has an <code>Id</code> value, and you can set the template URI to <code>https://myInstanceName.lightning.force.com/lightning/r/Knowledge__kav/*${Id}* /view</code>.
     */
    updateKnowledgeBaseTemplateUri(req: operations.UpdateKnowledgeBaseTemplateUriRequest, config?: AxiosRequestConfig): Promise<operations.UpdateKnowledgeBaseTemplateUriResponse>;
}
