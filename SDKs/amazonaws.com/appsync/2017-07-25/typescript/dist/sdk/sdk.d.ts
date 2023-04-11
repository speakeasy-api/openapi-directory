import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://appsync.{region}.amazonaws.com", "https://appsync.{region}.amazonaws.com", "http://appsync.{region}.amazonaws.com.cn", "https://appsync.{region}.amazonaws.com.cn"];
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
 * AppSync provides API actions for creating and interacting with data sources using GraphQL from your application.
 *
 * @see {@link https://docs.aws.amazon.com/appsync/} - Amazon Web Services documentation
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
     * Maps an endpoint to your custom domain.
     */
    associateApi(req: operations.AssociateApiRequest, config?: AxiosRequestConfig): Promise<operations.AssociateApiResponse>;
    /**
     * Creates a cache for the GraphQL API.
     */
    createApiCache(req: operations.CreateApiCacheRequest, config?: AxiosRequestConfig): Promise<operations.CreateApiCacheResponse>;
    /**
     * Creates a unique key that you can distribute to clients who invoke your API.
     */
    createApiKey(req: operations.CreateApiKeyRequest, config?: AxiosRequestConfig): Promise<operations.CreateApiKeyResponse>;
    /**
     * Creates a <code>DataSource</code> object.
     */
    createDataSource(req: operations.CreateDataSourceRequest, config?: AxiosRequestConfig): Promise<operations.CreateDataSourceResponse>;
    /**
     * Creates a custom <code>DomainName</code> object.
     */
    createDomainName(req: operations.CreateDomainNameRequest, config?: AxiosRequestConfig): Promise<operations.CreateDomainNameResponse>;
    /**
     * <p>Creates a <code>Function</code> object.</p> <p>A function is a reusable entity. You can use multiple functions to compose the resolver logic.</p>
     */
    createFunction(req: operations.CreateFunctionRequest, config?: AxiosRequestConfig): Promise<operations.CreateFunctionResponse>;
    /**
     * Creates a <code>GraphqlApi</code> object.
     */
    createGraphqlApi(req: operations.CreateGraphqlApiRequest, config?: AxiosRequestConfig): Promise<operations.CreateGraphqlApiResponse>;
    /**
     * <p>Creates a <code>Resolver</code> object.</p> <p>A resolver converts incoming requests into a format that a data source can understand, and converts the data source's responses into GraphQL.</p>
     */
    createResolver(req: operations.CreateResolverRequest, config?: AxiosRequestConfig): Promise<operations.CreateResolverResponse>;
    /**
     * Creates a <code>Type</code> object.
     */
    createType(req: operations.CreateTypeRequest, config?: AxiosRequestConfig): Promise<operations.CreateTypeResponse>;
    /**
     * Deletes an <code>ApiCache</code> object.
     */
    deleteApiCache(req: operations.DeleteApiCacheRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApiCacheResponse>;
    /**
     * Deletes an API key.
     */
    deleteApiKey(req: operations.DeleteApiKeyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApiKeyResponse>;
    /**
     * Deletes a <code>DataSource</code> object.
     */
    deleteDataSource(req: operations.DeleteDataSourceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDataSourceResponse>;
    /**
     * Deletes a custom <code>DomainName</code> object.
     */
    deleteDomainName(req: operations.DeleteDomainNameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDomainNameResponse>;
    /**
     * Deletes a <code>Function</code>.
     */
    deleteFunction(req: operations.DeleteFunctionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFunctionResponse>;
    /**
     * Deletes a <code>GraphqlApi</code> object.
     */
    deleteGraphqlApi(req: operations.DeleteGraphqlApiRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGraphqlApiResponse>;
    /**
     * Deletes a <code>Resolver</code> object.
     */
    deleteResolver(req: operations.DeleteResolverRequest, config?: AxiosRequestConfig): Promise<operations.DeleteResolverResponse>;
    /**
     * Deletes a <code>Type</code> object.
     */
    deleteType(req: operations.DeleteTypeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTypeResponse>;
    /**
     * Removes an <code>ApiAssociation</code> object from a custom domain.
     */
    disassociateApi(req: operations.DisassociateApiRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateApiResponse>;
    /**
     * Evaluates the given code and returns the response. The code definition requirements depend on the specified runtime. For <code>APPSYNC_JS</code> runtimes, the code defines the request and response functions. The request function takes the incoming request after a GraphQL operation is parsed and converts it into a request configuration for the selected data source operation. The response function interprets responses from the data source and maps it to the shape of the GraphQL field output type.
     */
    evaluateCode(req: operations.EvaluateCodeRequest, config?: AxiosRequestConfig): Promise<operations.EvaluateCodeResponse>;
    /**
     * <p>Evaluates a given template and returns the response. The mapping template can be a request or response template.</p> <p>Request templates take the incoming request after a GraphQL operation is parsed and convert it into a request configuration for the selected data source operation. Response templates interpret responses from the data source and map it to the shape of the GraphQL field output type.</p> <p>Mapping templates are written in the Apache Velocity Template Language (VTL).</p>
     */
    evaluateMappingTemplate(req: operations.EvaluateMappingTemplateRequest, config?: AxiosRequestConfig): Promise<operations.EvaluateMappingTemplateResponse>;
    /**
     * Flushes an <code>ApiCache</code> object.
     */
    flushApiCache(req: operations.FlushApiCacheRequest, config?: AxiosRequestConfig): Promise<operations.FlushApiCacheResponse>;
    /**
     * Retrieves an <code>ApiAssociation</code> object.
     */
    getApiAssociation(req: operations.GetApiAssociationRequest, config?: AxiosRequestConfig): Promise<operations.GetApiAssociationResponse>;
    /**
     * Retrieves an <code>ApiCache</code> object.
     */
    getApiCache(req: operations.GetApiCacheRequest, config?: AxiosRequestConfig): Promise<operations.GetApiCacheResponse>;
    /**
     * Retrieves a <code>DataSource</code> object.
     */
    getDataSource(req: operations.GetDataSourceRequest, config?: AxiosRequestConfig): Promise<operations.GetDataSourceResponse>;
    /**
     * Retrieves a custom <code>DomainName</code> object.
     */
    getDomainName(req: operations.GetDomainNameRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainNameResponse>;
    /**
     * Get a <code>Function</code>.
     */
    getFunction(req: operations.GetFunctionRequest, config?: AxiosRequestConfig): Promise<operations.GetFunctionResponse>;
    /**
     * Retrieves a <code>GraphqlApi</code> object.
     */
    getGraphqlApi(req: operations.GetGraphqlApiRequest, config?: AxiosRequestConfig): Promise<operations.GetGraphqlApiResponse>;
    /**
     * Retrieves the introspection schema for a GraphQL API.
     */
    getIntrospectionSchema(req: operations.GetIntrospectionSchemaRequest, config?: AxiosRequestConfig): Promise<operations.GetIntrospectionSchemaResponse>;
    /**
     * Retrieves a <code>Resolver</code> object.
     */
    getResolver(req: operations.GetResolverRequest, config?: AxiosRequestConfig): Promise<operations.GetResolverResponse>;
    /**
     * Retrieves the current status of a schema creation operation.
     */
    getSchemaCreationStatus(req: operations.GetSchemaCreationStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetSchemaCreationStatusResponse>;
    /**
     * Retrieves a <code>Type</code> object.
     */
    getType(req: operations.GetTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetTypeResponse>;
    /**
     * <p>Lists the API keys for a given API.</p> <note> <p>API keys are deleted automatically 60 days after they expire. However, they may still be included in the response until they have actually been deleted. You can safely call <code>DeleteApiKey</code> to manually delete a key before it's automatically deleted.</p> </note>
     */
    listApiKeys(req: operations.ListApiKeysRequest, config?: AxiosRequestConfig): Promise<operations.ListApiKeysResponse>;
    /**
     * Lists the data sources for a given API.
     */
    listDataSources(req: operations.ListDataSourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListDataSourcesResponse>;
    /**
     * Lists multiple custom domain names.
     */
    listDomainNames(req: operations.ListDomainNamesRequest, config?: AxiosRequestConfig): Promise<operations.ListDomainNamesResponse>;
    /**
     * List multiple functions.
     */
    listFunctions(req: operations.ListFunctionsRequest, config?: AxiosRequestConfig): Promise<operations.ListFunctionsResponse>;
    /**
     * Lists your GraphQL APIs.
     */
    listGraphqlApis(req: operations.ListGraphqlApisRequest, config?: AxiosRequestConfig): Promise<operations.ListGraphqlApisResponse>;
    /**
     * Lists the resolvers for a given API and type.
     */
    listResolvers(req: operations.ListResolversRequest, config?: AxiosRequestConfig): Promise<operations.ListResolversResponse>;
    /**
     * List the resolvers that are associated with a specific function.
     */
    listResolversByFunction(req: operations.ListResolversByFunctionRequest, config?: AxiosRequestConfig): Promise<operations.ListResolversByFunctionResponse>;
    /**
     * Lists the tags for a resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Lists the types for a given API.
     */
    listTypes(req: operations.ListTypesRequest, config?: AxiosRequestConfig): Promise<operations.ListTypesResponse>;
    /**
     * <p>Adds a new schema to your GraphQL API.</p> <p>This operation is asynchronous. Use to determine when it has completed.</p>
     */
    startSchemaCreation(req: operations.StartSchemaCreationRequest, config?: AxiosRequestConfig): Promise<operations.StartSchemaCreationResponse>;
    /**
     * Tags a resource with user-supplied tags.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Untags a resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates the cache for the GraphQL API.
     */
    updateApiCache(req: operations.UpdateApiCacheRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApiCacheResponse>;
    /**
     * Updates an API key. You can update the key as long as it's not deleted.
     */
    updateApiKey(req: operations.UpdateApiKeyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApiKeyResponse>;
    /**
     * Updates a <code>DataSource</code> object.
     */
    updateDataSource(req: operations.UpdateDataSourceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDataSourceResponse>;
    /**
     * Updates a custom <code>DomainName</code> object.
     */
    updateDomainName(req: operations.UpdateDomainNameRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDomainNameResponse>;
    /**
     * Updates a <code>Function</code> object.
     */
    updateFunction(req: operations.UpdateFunctionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFunctionResponse>;
    /**
     * Updates a <code>GraphqlApi</code> object.
     */
    updateGraphqlApi(req: operations.UpdateGraphqlApiRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGraphqlApiResponse>;
    /**
     * Updates a <code>Resolver</code> object.
     */
    updateResolver(req: operations.UpdateResolverRequest, config?: AxiosRequestConfig): Promise<operations.UpdateResolverResponse>;
    /**
     * Updates a <code>Type</code> object.
     */
    updateType(req: operations.UpdateTypeRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTypeResponse>;
}
