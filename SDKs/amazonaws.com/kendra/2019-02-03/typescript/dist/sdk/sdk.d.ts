import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://kendra.{region}.amazonaws.com", "https://kendra.{region}.amazonaws.com", "http://kendra.{region}.amazonaws.com.cn", "https://kendra.{region}.amazonaws.com.cn"];
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
 * Amazon Kendra is a service for indexing large document sets.
 *
 * @see {@link https://docs.aws.amazon.com/kendra/} - Amazon Web Services documentation
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
     * Grants users or groups in your IAM Identity Center identity source access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
     */
    associateEntitiesToExperience(req: operations.AssociateEntitiesToExperienceRequest, config?: AxiosRequestConfig): Promise<operations.AssociateEntitiesToExperienceResponse>;
    /**
     * Defines the specific permissions of users or groups in your IAM Identity Center identity source with access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
     */
    associatePersonasToEntities(req: operations.AssociatePersonasToEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.AssociatePersonasToEntitiesResponse>;
    /**
     * <p>Removes one or more documents from an index. The documents must have been added with the <code>BatchPutDocument</code> API.</p> <p>The documents are deleted asynchronously. You can see the progress of the deletion by using Amazon Web Services CloudWatch. Any error messages related to the processing of the batch are sent to you CloudWatch log.</p>
     */
    batchDeleteDocument(req: operations.BatchDeleteDocumentRequest, config?: AxiosRequestConfig): Promise<operations.BatchDeleteDocumentResponse>;
    /**
     * <p>Returns the indexing status for one or more documents submitted with the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html"> BatchPutDocument</a> API.</p> <p>When you use the <code>BatchPutDocument</code> API, documents are indexed asynchronously. You can use the <code>BatchGetDocumentStatus</code> API to get the current status of a list of documents so that you can determine if they have been successfully indexed.</p> <p>You can also use the <code>BatchGetDocumentStatus</code> API to check the status of the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchDeleteDocument.html"> BatchDeleteDocument</a> API. When a document is deleted from the index, Amazon Kendra returns <code>NOT_FOUND</code> as the status.</p>
     */
    batchGetDocumentStatus(req: operations.BatchGetDocumentStatusRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetDocumentStatusResponse>;
    /**
     * <p>Adds one or more documents to an index.</p> <p>The <code>BatchPutDocument</code> API enables you to ingest inline documents or a set of documents stored in an Amazon S3 bucket. Use this API to ingest your text and unstructured text into an index, add custom attributes to the documents, and to attach an access control list to the documents added to the index.</p> <p>The documents are indexed asynchronously. You can see the progress of the batch using Amazon Web Services CloudWatch. Any error messages related to processing the batch are sent to your Amazon Web Services CloudWatch log.</p> <p>For an example of ingesting inline documents using Python and Java SDKs, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/in-adding-binary-doc.html">Adding files directly to an index</a>.</p>
     */
    batchPutDocument(req: operations.BatchPutDocumentRequest, config?: AxiosRequestConfig): Promise<operations.BatchPutDocumentResponse>;
    /**
     * <p>Clears existing query suggestions from an index.</p> <p>This deletes existing suggestions only, not the queries in the query log. After you clear suggestions, Amazon Kendra learns new suggestions based on new queries added to the query log from the time you cleared suggestions. If you do not see any new suggestions, then please allow Amazon Kendra to collect enough queries to learn new suggestions.</p> <p> <code>ClearQuerySuggestions</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
     */
    clearQuerySuggestions(req: operations.ClearQuerySuggestionsRequest, config?: AxiosRequestConfig): Promise<operations.ClearQuerySuggestionsResponse>;
    /**
     * <p>Creates an access configuration for your documents. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.</p> <p>You can use this to re-configure your existing document level access control without indexing all of your documents again. For example, your index contains top-secret company documents that only certain employees or users should access. One of these users leaves the company or switches to a team that should be blocked from accessing top-secret documents. The user still has access to top-secret documents because the user had access when your documents were previously indexed. You can create a specific access control configuration for the user with deny access. You can later update the access control configuration to allow access if the user returns to the company and re-joins the 'top-secret' team. You can re-configure access control for your documents as circumstances change.</p> <p>To apply your access control configuration to certain documents, you call the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html">BatchPutDocument</a> API with the <code>AccessControlConfigurationId</code> included in the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_Document.html">Document</a> object. If you use an S3 bucket as a data source, you update the <code>.metadata.json</code> with the <code>AccessControlConfigurationId</code> and synchronize your data source. Amazon Kendra currently only supports access control configuration for S3 data sources and documents indexed using the <code>BatchPutDocument</code> API.</p>
     */
    createAccessControlConfiguration(req: operations.CreateAccessControlConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.CreateAccessControlConfigurationResponse>;
    /**
     * <p>Creates a data source connector that you want to use with an Amazon Kendra index.</p> <p>You specify a name, data source connector type and description for your data source. You also specify configuration information for the data source connector.</p> <p> <code>CreateDataSource</code> is a synchronous operation. The operation returns 200 if the data source was successfully created. Otherwise, an exception is raised.</p> <p>Amazon S3 and <a href="https://docs.aws.amazon.com/kendra/latest/dg/data-source-custom.html">custom</a> data sources are the only supported data sources in the Amazon Web Services GovCloud (US-West) region.</p> <p>For an example of creating an index and data source using the Python SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/gs-python.html">Getting started with Python SDK</a>. For an example of creating an index and data source using the Java SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/gs-java.html">Getting started with Java SDK</a>.</p>
     */
    createDataSource(req: operations.CreateDataSourceRequest, config?: AxiosRequestConfig): Promise<operations.CreateDataSourceResponse>;
    /**
     * Creates an Amazon Kendra experience such as a search application. For more information on creating a search application experience, including using the Python and Java SDKs, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
     */
    createExperience(req: operations.CreateExperienceRequest, config?: AxiosRequestConfig): Promise<operations.CreateExperienceResponse>;
    /**
     * <p>Creates an new set of frequently asked question (FAQ) questions and answers.</p> <p>Adding FAQs to an index is an asynchronous operation.</p> <p>For an example of adding an FAQ to an index using Python and Java SDKs, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/in-creating-faq.html#using-faq-file">Using your FAQ file</a>.</p>
     */
    createFaq(req: operations.CreateFaqRequest, config?: AxiosRequestConfig): Promise<operations.CreateFaqResponse>;
    /**
     * <p>Creates an Amazon Kendra index. Index creation is an asynchronous API. To determine if index creation has completed, check the <code>Status</code> field returned from a call to <code>DescribeIndex</code>. The <code>Status</code> field is set to <code>ACTIVE</code> when the index is ready to use.</p> <p>Once the index is active you can index your documents using the <code>BatchPutDocument</code> API or using one of the supported data sources.</p> <p>For an example of creating an index and data source using the Python SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/gs-python.html">Getting started with Python SDK</a>. For an example of creating an index and data source using the Java SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/gs-java.html">Getting started with Java SDK</a>.</p>
     */
    createIndex(req: operations.CreateIndexRequest, config?: AxiosRequestConfig): Promise<operations.CreateIndexResponse>;
    /**
     * <p>Creates a block list to exlcude certain queries from suggestions.</p> <p>Any query that contains words or phrases specified in the block list is blocked or filtered out from being shown as a suggestion.</p> <p>You need to provide the file location of your block list text file in your S3 bucket. In your text file, enter each block word or phrase on a separate line.</p> <p>For information on the current quota limits for block lists, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas for Amazon Kendra</a>.</p> <p> <code>CreateQuerySuggestionsBlockList</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p> <p>For an example of creating a block list for query suggestions using the Python SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/query-suggestions.html#suggestions-block-list">Query suggestions block list</a>.</p>
     */
    createQuerySuggestionsBlockList(req: operations.CreateQuerySuggestionsBlockListRequest, config?: AxiosRequestConfig): Promise<operations.CreateQuerySuggestionsBlockListResponse>;
    /**
     * <p>Creates a thesaurus for an index. The thesaurus contains a list of synonyms in Solr format.</p> <p>For an example of adding a thesaurus file to an index, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/index-synonyms-adding-thesaurus-file.html">Adding custom synonyms to an index</a>.</p>
     */
    createThesaurus(req: operations.CreateThesaurusRequest, config?: AxiosRequestConfig): Promise<operations.CreateThesaurusResponse>;
    /**
     * Deletes an access control configuration that you created for your documents in an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.
     */
    deleteAccessControlConfiguration(req: operations.DeleteAccessControlConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAccessControlConfigurationResponse>;
    /**
     * Deletes an Amazon Kendra data source connector. An exception is not thrown if the data source is already being deleted. While the data source is being deleted, the <code>Status</code> field returned by a call to the <code>DescribeDataSource</code> API is set to <code>DELETING</code>. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/delete-data-source.html">Deleting Data Sources</a>.
     */
    deleteDataSource(req: operations.DeleteDataSourceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDataSourceResponse>;
    /**
     * Deletes your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
     */
    deleteExperience(req: operations.DeleteExperienceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteExperienceResponse>;
    /**
     * Removes an FAQ from an index.
     */
    deleteFaq(req: operations.DeleteFaqRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFaqResponse>;
    /**
     * Deletes an existing Amazon Kendra index. An exception is not thrown if the index is already being deleted. While the index is being deleted, the <code>Status</code> field returned by a call to the <code>DescribeIndex</code> API is set to <code>DELETING</code>.
     */
    deleteIndex(req: operations.DeleteIndexRequest, config?: AxiosRequestConfig): Promise<operations.DeleteIndexResponse>;
    /**
     * <p>Deletes a group so that all users and sub groups that belong to the group can no longer access documents only available to that group.</p> <p>For example, after deleting the group "Summer Interns", all interns who belonged to that group no longer see intern-only documents in their search results.</p> <p>If you want to delete or replace users or sub groups of a group, you need to use the <code>PutPrincipalMapping</code> operation. For example, if a user in the group "Engineering" leaves the engineering team and another user takes their place, you provide an updated list of users or sub groups that belong to the "Engineering" group when calling <code>PutPrincipalMapping</code>. You can update your internal list of users or sub groups and input this list when calling <code>PutPrincipalMapping</code>.</p> <p> <code>DeletePrincipalMapping</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
     */
    deletePrincipalMapping(req: operations.DeletePrincipalMappingRequest, config?: AxiosRequestConfig): Promise<operations.DeletePrincipalMappingResponse>;
    /**
     * <p>Deletes a block list used for query suggestions for an index.</p> <p>A deleted block list might not take effect right away. Amazon Kendra needs to refresh the entire suggestions list to add back the queries that were previously blocked.</p> <p> <code>DeleteQuerySuggestionsBlockList</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
     */
    deleteQuerySuggestionsBlockList(req: operations.DeleteQuerySuggestionsBlockListRequest, config?: AxiosRequestConfig): Promise<operations.DeleteQuerySuggestionsBlockListResponse>;
    /**
     * Deletes an existing Amazon Kendra thesaurus.
     */
    deleteThesaurus(req: operations.DeleteThesaurusRequest, config?: AxiosRequestConfig): Promise<operations.DeleteThesaurusResponse>;
    /**
     * Gets information about an access control configuration that you created for your documents in an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.
     */
    describeAccessControlConfiguration(req: operations.DescribeAccessControlConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAccessControlConfigurationResponse>;
    /**
     * Gets information about an Amazon Kendra data source connector.
     */
    describeDataSource(req: operations.DescribeDataSourceRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDataSourceResponse>;
    /**
     * Gets information about your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
     */
    describeExperience(req: operations.DescribeExperienceRequest, config?: AxiosRequestConfig): Promise<operations.DescribeExperienceResponse>;
    /**
     * Gets information about an FAQ list.
     */
    describeFaq(req: operations.DescribeFaqRequest, config?: AxiosRequestConfig): Promise<operations.DescribeFaqResponse>;
    /**
     * Gets information about an existing Amazon Kendra index.
     */
    describeIndex(req: operations.DescribeIndexRequest, config?: AxiosRequestConfig): Promise<operations.DescribeIndexResponse>;
    /**
     * <p>Describes the processing of <code>PUT</code> and <code>DELETE</code> actions for mapping users to their groups. This includes information on the status of actions currently processing or yet to be processed, when actions were last updated, when actions were received by Amazon Kendra, the latest action that should process and apply after other actions, and useful error messages if an action could not be processed.</p> <p> <code>DescribePrincipalMapping</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
     */
    describePrincipalMapping(req: operations.DescribePrincipalMappingRequest, config?: AxiosRequestConfig): Promise<operations.DescribePrincipalMappingResponse>;
    /**
     * <p>Gets information about a block list used for query suggestions for an index.</p> <p>This is used to check the current settings that are applied to a block list.</p> <p> <code>DescribeQuerySuggestionsBlockList</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
     */
    describeQuerySuggestionsBlockList(req: operations.DescribeQuerySuggestionsBlockListRequest, config?: AxiosRequestConfig): Promise<operations.DescribeQuerySuggestionsBlockListResponse>;
    /**
     * <p>Gets information on the settings of query suggestions for an index.</p> <p>This is used to check the current settings applied to query suggestions.</p> <p> <code>DescribeQuerySuggestionsConfig</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
     */
    describeQuerySuggestionsConfig(req: operations.DescribeQuerySuggestionsConfigRequest, config?: AxiosRequestConfig): Promise<operations.DescribeQuerySuggestionsConfigResponse>;
    /**
     * Gets information about an existing Amazon Kendra thesaurus.
     */
    describeThesaurus(req: operations.DescribeThesaurusRequest, config?: AxiosRequestConfig): Promise<operations.DescribeThesaurusResponse>;
    /**
     * Prevents users or groups in your IAM Identity Center identity source from accessing your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
     */
    disassociateEntitiesFromExperience(req: operations.DisassociateEntitiesFromExperienceRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateEntitiesFromExperienceResponse>;
    /**
     * Removes the specific permissions of users or groups in your IAM Identity Center identity source with access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
     */
    disassociatePersonasFromEntities(req: operations.DisassociatePersonasFromEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.DisassociatePersonasFromEntitiesResponse>;
    /**
     * <p>Fetches the queries that are suggested to your users.</p> <p> <code>GetQuerySuggestions</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
     */
    getQuerySuggestions(req: operations.GetQuerySuggestionsRequest, config?: AxiosRequestConfig): Promise<operations.GetQuerySuggestionsResponse>;
    /**
     * Retrieves search metrics data. The data provides a snapshot of how your users interact with your search application and how effective the application is.
     */
    getSnapshots(req: operations.GetSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.GetSnapshotsResponse>;
    /**
     * Lists one or more access control configurations for an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.
     */
    listAccessControlConfigurations(req: operations.ListAccessControlConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.ListAccessControlConfigurationsResponse>;
    /**
     * Gets statistics about synchronizing a data source connector.
     */
    listDataSourceSyncJobs(req: operations.ListDataSourceSyncJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListDataSourceSyncJobsResponse>;
    /**
     * Lists the data source connectors that you have created.
     */
    listDataSources(req: operations.ListDataSourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListDataSourcesResponse>;
    /**
     * Lists specific permissions of users and groups with access to your Amazon Kendra experience.
     */
    listEntityPersonas(req: operations.ListEntityPersonasRequest, config?: AxiosRequestConfig): Promise<operations.ListEntityPersonasResponse>;
    /**
     * Lists users or groups in your IAM Identity Center identity source that are granted access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
     */
    listExperienceEntities(req: operations.ListExperienceEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.ListExperienceEntitiesResponse>;
    /**
     * Lists one or more Amazon Kendra experiences. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
     */
    listExperiences(req: operations.ListExperiencesRequest, config?: AxiosRequestConfig): Promise<operations.ListExperiencesResponse>;
    /**
     * Gets a list of FAQ lists associated with an index.
     */
    listFaqs(req: operations.ListFaqsRequest, config?: AxiosRequestConfig): Promise<operations.ListFaqsResponse>;
    /**
     * <p>Provides a list of groups that are mapped to users before a given ordering or timestamp identifier.</p> <p> <code>ListGroupsOlderThanOrderingId</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
     */
    listGroupsOlderThanOrderingId(req: operations.ListGroupsOlderThanOrderingIdRequest, config?: AxiosRequestConfig): Promise<operations.ListGroupsOlderThanOrderingIdResponse>;
    /**
     * Lists the Amazon Kendra indexes that you created.
     */
    listIndices(req: operations.ListIndicesRequest, config?: AxiosRequestConfig): Promise<operations.ListIndicesResponse>;
    /**
     * <p>Lists the block lists used for query suggestions for an index.</p> <p>For information on the current quota limits for block lists, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas for Amazon Kendra</a>.</p> <p> <code>ListQuerySuggestionsBlockLists</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
     */
    listQuerySuggestionsBlockLists(req: operations.ListQuerySuggestionsBlockListsRequest, config?: AxiosRequestConfig): Promise<operations.ListQuerySuggestionsBlockListsResponse>;
    /**
     * Gets a list of tags associated with a specified resource. Indexes, FAQs, and data sources can have tags associated with them.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Lists the thesauri for an index.
     */
    listThesauri(req: operations.ListThesauriRequest, config?: AxiosRequestConfig): Promise<operations.ListThesauriResponse>;
    /**
     * <p>Maps users to their groups so that you only need to provide the user ID when you issue the query.</p> <p>You can also map sub groups to groups. For example, the group "Company Intellectual Property Teams" includes sub groups "Research" and "Engineering". These sub groups include their own list of users or people who work in these teams. Only users who work in research and engineering, and therefore belong in the intellectual property group, can see top-secret company documents in their search results.</p> <p>This is useful for user context filtering, where search results are filtered based on the user or their group access to documents. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/user-context-filter.html">Filtering on user context</a>.</p> <p>If more than five <code>PUT</code> actions for a group are currently processing, a validation exception is thrown.</p> <p> <code>PutPrincipalMapping</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
     */
    putPrincipalMapping(req: operations.PutPrincipalMappingRequest, config?: AxiosRequestConfig): Promise<operations.PutPrincipalMappingResponse>;
    /**
     * <p>Searches an active index. Use this API to search your documents using query. The <code>Query</code> API enables to do faceted search and to filter results based on document attributes.</p> <p>It also enables you to provide user context that Amazon Kendra uses to enforce document access control in the search results.</p> <p>Amazon Kendra searches your index for text content and question and answer (FAQ) content. By default the response contains three types of results.</p> <ul> <li> <p>Relevant passages</p> </li> <li> <p>Matching FAQs</p> </li> <li> <p>Relevant documents</p> </li> </ul> <p>You can specify that the query return only one type of result using the <code>QueryResultTypeFilter</code> parameter.</p> <p>Each query returns the 100 most relevant results. </p>
     */
    query(req: operations.QueryRequest, config?: AxiosRequestConfig): Promise<operations.QueryResponse>;
    /**
     * Starts a synchronization job for a data source connector. If a synchronization job is already in progress, Amazon Kendra returns a <code>ResourceInUseException</code> exception.
     */
    startDataSourceSyncJob(req: operations.StartDataSourceSyncJobRequest, config?: AxiosRequestConfig): Promise<operations.StartDataSourceSyncJobResponse>;
    /**
     * Stops a synchronization job that is currently running. You can't stop a scheduled synchronization job.
     */
    stopDataSourceSyncJob(req: operations.StopDataSourceSyncJobRequest, config?: AxiosRequestConfig): Promise<operations.StopDataSourceSyncJobResponse>;
    /**
     * <p>Enables you to provide feedback to Amazon Kendra to improve the performance of your index.</p> <p> <code>SubmitFeedback</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
     */
    submitFeedback(req: operations.SubmitFeedbackRequest, config?: AxiosRequestConfig): Promise<operations.SubmitFeedbackResponse>;
    /**
     * Adds the specified tag to the specified index, FAQ, or data source resource. If the tag already exists, the existing value is replaced with the new value.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes a tag from an index, FAQ, or a data source.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * <p>Updates an access control configuration for your documents in an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.</p> <p>You can update an access control configuration you created without indexing all of your documents again. For example, your index contains top-secret company documents that only certain employees or users should access. You created an 'allow' access control configuration for one user who recently joined the 'top-secret' team, switching from a team with 'deny' access to top-secret documents. However, the user suddenly returns to their previous team and should no longer have access to top secret documents. You can update the access control configuration to re-configure access control for your documents as circumstances change.</p> <p>You call the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html">BatchPutDocument</a> API to apply the updated access control configuration, with the <code>AccessControlConfigurationId</code> included in the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_Document.html">Document</a> object. If you use an S3 bucket as a data source, you synchronize your data source to apply the <code>AccessControlConfigurationId</code> in the <code>.metadata.json</code> file. Amazon Kendra currently only supports access control configuration for S3 data sources and documents indexed using the <code>BatchPutDocument</code> API.</p>
     */
    updateAccessControlConfiguration(req: operations.UpdateAccessControlConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAccessControlConfigurationResponse>;
    /**
     * Updates an existing Amazon Kendra data source connector.
     */
    updateDataSource(req: operations.UpdateDataSourceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDataSourceResponse>;
    /**
     * Updates your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
     */
    updateExperience(req: operations.UpdateExperienceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateExperienceResponse>;
    /**
     * Updates an existing Amazon Kendra index.
     */
    updateIndex(req: operations.UpdateIndexRequest, config?: AxiosRequestConfig): Promise<operations.UpdateIndexResponse>;
    /**
     * <p>Updates a block list used for query suggestions for an index.</p> <p>Updates to a block list might not take effect right away. Amazon Kendra needs to refresh the entire suggestions list to apply any updates to the block list. Other changes not related to the block list apply immediately.</p> <p>If a block list is updating, then you need to wait for the first update to finish before submitting another update.</p> <p>Amazon Kendra supports partial updates, so you only need to provide the fields you want to update.</p> <p> <code>UpdateQuerySuggestionsBlockList</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
     */
    updateQuerySuggestionsBlockList(req: operations.UpdateQuerySuggestionsBlockListRequest, config?: AxiosRequestConfig): Promise<operations.UpdateQuerySuggestionsBlockListResponse>;
    /**
     * <p>Updates the settings of query suggestions for an index.</p> <p>Amazon Kendra supports partial updates, so you only need to provide the fields you want to update.</p> <p>If an update is currently processing (i.e. 'happening'), you need to wait for the update to finish before making another update.</p> <p>Updates to query suggestions settings might not take effect right away. The time for your updated settings to take effect depends on the updates made and the number of search queries in your index.</p> <p>You can still enable/disable query suggestions at any time.</p> <p> <code>UpdateQuerySuggestionsConfig</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
     */
    updateQuerySuggestionsConfig(req: operations.UpdateQuerySuggestionsConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateQuerySuggestionsConfigResponse>;
    /**
     * Updates a thesaurus for an index.
     */
    updateThesaurus(req: operations.UpdateThesaurusRequest, config?: AxiosRequestConfig): Promise<operations.UpdateThesaurusResponse>;
}
