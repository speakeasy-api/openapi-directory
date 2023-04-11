import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://apigateway.{region}.amazonaws.com", "https://apigateway.{region}.amazonaws.com", "http://apigateway.{region}.amazonaws.com.cn", "https://apigateway.{region}.amazonaws.com.cn"];
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
 * Amazon API Gateway V2
 *
 * @see {@link https://docs.aws.amazon.com/apigateway/} - Amazon Web Services documentation
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
     * Creates an Api resource.
     */
    createApi(req: operations.CreateApiRequest, config?: AxiosRequestConfig): Promise<operations.CreateApiResponse>;
    /**
     * Creates an API mapping.
     */
    createApiMapping(req: operations.CreateApiMappingRequest, config?: AxiosRequestConfig): Promise<operations.CreateApiMappingResponse>;
    /**
     * Creates an Authorizer for an API.
     */
    createAuthorizer(req: operations.CreateAuthorizerRequest, config?: AxiosRequestConfig): Promise<operations.CreateAuthorizerResponse>;
    /**
     * Creates a Deployment for an API.
     */
    createDeployment(req: operations.CreateDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeploymentResponse>;
    /**
     * Creates a domain name.
     */
    createDomainName(req: operations.CreateDomainNameRequest, config?: AxiosRequestConfig): Promise<operations.CreateDomainNameResponse>;
    /**
     * Creates an Integration.
     */
    createIntegration(req: operations.CreateIntegrationRequest, config?: AxiosRequestConfig): Promise<operations.CreateIntegrationResponse>;
    /**
     * Creates an IntegrationResponses.
     */
    createIntegrationResponse(req: operations.CreateIntegrationResponseRequest, config?: AxiosRequestConfig): Promise<operations.CreateIntegrationResponseResponse>;
    /**
     * Creates a Model for an API.
     */
    createModel(req: operations.CreateModelRequest, config?: AxiosRequestConfig): Promise<operations.CreateModelResponse>;
    /**
     * Creates a Route for an API.
     */
    createRoute(req: operations.CreateRouteRequest, config?: AxiosRequestConfig): Promise<operations.CreateRouteResponse>;
    /**
     * Creates a RouteResponse for a Route.
     */
    createRouteResponse(req: operations.CreateRouteResponseRequest, config?: AxiosRequestConfig): Promise<operations.CreateRouteResponseResponse>;
    /**
     * Creates a Stage for an API.
     */
    createStage(req: operations.CreateStageRequest, config?: AxiosRequestConfig): Promise<operations.CreateStageResponse>;
    /**
     * Creates a VPC link.
     */
    createVpcLink(req: operations.CreateVpcLinkRequest, config?: AxiosRequestConfig): Promise<operations.CreateVpcLinkResponse>;
    /**
     * Deletes the AccessLogSettings for a Stage. To disable access logging for a Stage, delete its AccessLogSettings.
     */
    deleteAccessLogSettings(req: operations.DeleteAccessLogSettingsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAccessLogSettingsResponse>;
    /**
     * Deletes an Api resource.
     */
    deleteApi(req: operations.DeleteApiRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApiResponse>;
    /**
     * Deletes an API mapping.
     */
    deleteApiMapping(req: operations.DeleteApiMappingRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApiMappingResponse>;
    /**
     * Deletes an Authorizer.
     */
    deleteAuthorizer(req: operations.DeleteAuthorizerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAuthorizerResponse>;
    /**
     * Deletes a CORS configuration.
     */
    deleteCorsConfiguration(req: operations.DeleteCorsConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCorsConfigurationResponse>;
    /**
     * Deletes a Deployment.
     */
    deleteDeployment(req: operations.DeleteDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDeploymentResponse>;
    /**
     * Deletes a domain name.
     */
    deleteDomainName(req: operations.DeleteDomainNameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDomainNameResponse>;
    /**
     * Deletes an Integration.
     */
    deleteIntegration(req: operations.DeleteIntegrationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteIntegrationResponse>;
    /**
     * Deletes an IntegrationResponses.
     */
    deleteIntegrationResponse(req: operations.DeleteIntegrationResponseRequest, config?: AxiosRequestConfig): Promise<operations.DeleteIntegrationResponseResponse>;
    /**
     * Deletes a Model.
     */
    deleteModel(req: operations.DeleteModelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteModelResponse>;
    /**
     * Deletes a Route.
     */
    deleteRoute(req: operations.DeleteRouteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRouteResponse>;
    /**
     * Deletes a route request parameter.
     */
    deleteRouteRequestParameter(req: operations.DeleteRouteRequestParameterRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRouteRequestParameterResponse>;
    /**
     * Deletes a RouteResponse.
     */
    deleteRouteResponse(req: operations.DeleteRouteResponseRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRouteResponseResponse>;
    /**
     * Deletes the RouteSettings for a stage.
     */
    deleteRouteSettings(req: operations.DeleteRouteSettingsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRouteSettingsResponse>;
    /**
     * Deletes a Stage.
     */
    deleteStage(req: operations.DeleteStageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStageResponse>;
    /**
     * Deletes a VPC link.
     */
    deleteVpcLink(req: operations.DeleteVpcLinkRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVpcLinkResponse>;
    exportApi(req: operations.ExportApiRequest, config?: AxiosRequestConfig): Promise<operations.ExportApiResponse>;
    /**
     * Gets an Api resource.
     */
    getApi(req: operations.GetApiRequest, config?: AxiosRequestConfig): Promise<operations.GetApiResponse>;
    /**
     * Gets an API mapping.
     */
    getApiMapping(req: operations.GetApiMappingRequest, config?: AxiosRequestConfig): Promise<operations.GetApiMappingResponse>;
    /**
     * Gets API mappings.
     */
    getApiMappings(req: operations.GetApiMappingsRequest, config?: AxiosRequestConfig): Promise<operations.GetApiMappingsResponse>;
    /**
     * Gets a collection of Api resources.
     */
    getApis(req: operations.GetApisRequest, config?: AxiosRequestConfig): Promise<operations.GetApisResponse>;
    /**
     * Gets an Authorizer.
     */
    getAuthorizer(req: operations.GetAuthorizerRequest, config?: AxiosRequestConfig): Promise<operations.GetAuthorizerResponse>;
    /**
     * Gets the Authorizers for an API.
     */
    getAuthorizers(req: operations.GetAuthorizersRequest, config?: AxiosRequestConfig): Promise<operations.GetAuthorizersResponse>;
    /**
     * Gets a Deployment.
     */
    getDeployment(req: operations.GetDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.GetDeploymentResponse>;
    /**
     * Gets the Deployments for an API.
     */
    getDeployments(req: operations.GetDeploymentsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeploymentsResponse>;
    /**
     * Gets a domain name.
     */
    getDomainName(req: operations.GetDomainNameRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainNameResponse>;
    /**
     * Gets the domain names for an AWS account.
     */
    getDomainNames(req: operations.GetDomainNamesRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainNamesResponse>;
    /**
     * Gets an Integration.
     */
    getIntegration(req: operations.GetIntegrationRequest, config?: AxiosRequestConfig): Promise<operations.GetIntegrationResponse>;
    /**
     * Gets an IntegrationResponses.
     */
    getIntegrationResponse(req: operations.GetIntegrationResponseRequest, config?: AxiosRequestConfig): Promise<operations.GetIntegrationResponseResponse>;
    /**
     * Gets the IntegrationResponses for an Integration.
     */
    getIntegrationResponses(req: operations.GetIntegrationResponsesRequest, config?: AxiosRequestConfig): Promise<operations.GetIntegrationResponsesResponse>;
    /**
     * Gets the Integrations for an API.
     */
    getIntegrations(req: operations.GetIntegrationsRequest, config?: AxiosRequestConfig): Promise<operations.GetIntegrationsResponse>;
    /**
     * Gets a Model.
     */
    getModel(req: operations.GetModelRequest, config?: AxiosRequestConfig): Promise<operations.GetModelResponse>;
    /**
     * Gets a model template.
     */
    getModelTemplate(req: operations.GetModelTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetModelTemplateResponse>;
    /**
     * Gets the Models for an API.
     */
    getModels(req: operations.GetModelsRequest, config?: AxiosRequestConfig): Promise<operations.GetModelsResponse>;
    /**
     * Gets a Route.
     */
    getRoute(req: operations.GetRouteRequest, config?: AxiosRequestConfig): Promise<operations.GetRouteResponse>;
    /**
     * Gets a RouteResponse.
     */
    getRouteResponse(req: operations.GetRouteResponseRequest, config?: AxiosRequestConfig): Promise<operations.GetRouteResponseResponse>;
    /**
     * Gets the RouteResponses for a Route.
     */
    getRouteResponses(req: operations.GetRouteResponsesRequest, config?: AxiosRequestConfig): Promise<operations.GetRouteResponsesResponse>;
    /**
     * Gets the Routes for an API.
     */
    getRoutes(req: operations.GetRoutesRequest, config?: AxiosRequestConfig): Promise<operations.GetRoutesResponse>;
    /**
     * Gets a Stage.
     */
    getStage(req: operations.GetStageRequest, config?: AxiosRequestConfig): Promise<operations.GetStageResponse>;
    /**
     * Gets the Stages for an API.
     */
    getStages(req: operations.GetStagesRequest, config?: AxiosRequestConfig): Promise<operations.GetStagesResponse>;
    /**
     * Gets a collection of Tag resources.
     */
    getTags(req: operations.GetTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsResponse>;
    /**
     * Gets a VPC link.
     */
    getVpcLink(req: operations.GetVpcLinkRequest, config?: AxiosRequestConfig): Promise<operations.GetVpcLinkResponse>;
    /**
     * Gets a collection of VPC links.
     */
    getVpcLinks(req: operations.GetVpcLinksRequest, config?: AxiosRequestConfig): Promise<operations.GetVpcLinksResponse>;
    /**
     * Imports an API.
     */
    importApi(req: operations.ImportApiRequest, config?: AxiosRequestConfig): Promise<operations.ImportApiResponse>;
    /**
     * Puts an Api resource.
     */
    reimportApi(req: operations.ReimportApiRequest, config?: AxiosRequestConfig): Promise<operations.ReimportApiResponse>;
    /**
     * Resets all authorizer cache entries on a stage. Supported only for HTTP APIs.
     */
    resetAuthorizersCache(req: operations.ResetAuthorizersCacheRequest, config?: AxiosRequestConfig): Promise<operations.ResetAuthorizersCacheResponse>;
    /**
     * Creates a new Tag resource to represent a tag.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Deletes a Tag.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates an Api resource.
     */
    updateApi(req: operations.UpdateApiRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApiResponse>;
    /**
     * The API mapping.
     */
    updateApiMapping(req: operations.UpdateApiMappingRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApiMappingResponse>;
    /**
     * Updates an Authorizer.
     */
    updateAuthorizer(req: operations.UpdateAuthorizerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAuthorizerResponse>;
    /**
     * Updates a Deployment.
     */
    updateDeployment(req: operations.UpdateDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeploymentResponse>;
    /**
     * Updates a domain name.
     */
    updateDomainName(req: operations.UpdateDomainNameRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDomainNameResponse>;
    /**
     * Updates an Integration.
     */
    updateIntegration(req: operations.UpdateIntegrationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateIntegrationResponse>;
    /**
     * Updates an IntegrationResponses.
     */
    updateIntegrationResponse(req: operations.UpdateIntegrationResponseRequest, config?: AxiosRequestConfig): Promise<operations.UpdateIntegrationResponseResponse>;
    /**
     * Updates a Model.
     */
    updateModel(req: operations.UpdateModelRequest, config?: AxiosRequestConfig): Promise<operations.UpdateModelResponse>;
    /**
     * Updates a Route.
     */
    updateRoute(req: operations.UpdateRouteRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRouteResponse>;
    /**
     * Updates a RouteResponse.
     */
    updateRouteResponse(req: operations.UpdateRouteResponseRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRouteResponseResponse>;
    /**
     * Updates a Stage.
     */
    updateStage(req: operations.UpdateStageRequest, config?: AxiosRequestConfig): Promise<operations.UpdateStageResponse>;
    /**
     * Updates a VPC link.
     */
    updateVpcLink(req: operations.UpdateVpcLinkRequest, config?: AxiosRequestConfig): Promise<operations.UpdateVpcLinkResponse>;
}
