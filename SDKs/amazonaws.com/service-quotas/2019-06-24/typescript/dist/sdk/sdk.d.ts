import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://servicequotas.{region}.amazonaws.com", "https://servicequotas.{region}.amazonaws.com", "http://servicequotas.{region}.amazonaws.com.cn", "https://servicequotas.{region}.amazonaws.com.cn"];
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
 * With Service Quotas, you can view and manage your quotas easily as your AWS workloads grow. Quotas, also referred to as limits, are the maximum number of resources that you can create in your AWS account. For more information, see the <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/">Service Quotas User Guide</a>.
 *
 * @see {@link https://docs.aws.amazon.com/servicequotas/} - Amazon Web Services documentation
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
     * Associates your quota request template with your organization. When a new account is created in your organization, the quota increase requests in the template are automatically applied to the account. You can add a quota increase request for any adjustable quota to your template.
     */
    associateServiceQuotaTemplate(req: operations.AssociateServiceQuotaTemplateRequest, config?: AxiosRequestConfig): Promise<operations.AssociateServiceQuotaTemplateResponse>;
    /**
     * Deletes the quota increase request for the specified quota from your quota request template.
     */
    deleteServiceQuotaIncreaseRequestFromTemplate(req: operations.DeleteServiceQuotaIncreaseRequestFromTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteServiceQuotaIncreaseRequestFromTemplateResponse>;
    /**
     * Disables your quota request template. After a template is disabled, the quota increase requests in the template are not applied to new accounts in your organization. Disabling a quota request template does not apply its quota increase requests.
     */
    disassociateServiceQuotaTemplate(req: operations.DisassociateServiceQuotaTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateServiceQuotaTemplateResponse>;
    /**
     * Retrieves the default value for the specified quota. The default value does not reflect any quota increases.
     */
    getAWSDefaultServiceQuota(req: operations.GetAWSDefaultServiceQuotaRequest, config?: AxiosRequestConfig): Promise<operations.GetAWSDefaultServiceQuotaResponse>;
    /**
     * Retrieves the status of the association for the quota request template.
     */
    getAssociationForServiceQuotaTemplate(req: operations.GetAssociationForServiceQuotaTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetAssociationForServiceQuotaTemplateResponse>;
    /**
     * Retrieves information about the specified quota increase request.
     */
    getRequestedServiceQuotaChange(req: operations.GetRequestedServiceQuotaChangeRequest, config?: AxiosRequestConfig): Promise<operations.GetRequestedServiceQuotaChangeResponse>;
    /**
     * Retrieves the applied quota value for the specified quota. For some quotas, only the default values are available. If the applied quota value is not available for a quota, the quota is not retrieved.
     */
    getServiceQuota(req: operations.GetServiceQuotaRequest, config?: AxiosRequestConfig): Promise<operations.GetServiceQuotaResponse>;
    /**
     * Retrieves information about the specified quota increase request in your quota request template.
     */
    getServiceQuotaIncreaseRequestFromTemplate(req: operations.GetServiceQuotaIncreaseRequestFromTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetServiceQuotaIncreaseRequestFromTemplateResponse>;
    /**
     * Lists the default values for the quotas for the specified AWS service. A default value does not reflect any quota increases.
     */
    listAWSDefaultServiceQuotas(req: operations.ListAWSDefaultServiceQuotasRequest, config?: AxiosRequestConfig): Promise<operations.ListAWSDefaultServiceQuotasResponse>;
    /**
     * Retrieves the quota increase requests for the specified service.
     */
    listRequestedServiceQuotaChangeHistory(req: operations.ListRequestedServiceQuotaChangeHistoryRequest, config?: AxiosRequestConfig): Promise<operations.ListRequestedServiceQuotaChangeHistoryResponse>;
    /**
     * Retrieves the quota increase requests for the specified quota.
     */
    listRequestedServiceQuotaChangeHistoryByQuota(req: operations.ListRequestedServiceQuotaChangeHistoryByQuotaRequest, config?: AxiosRequestConfig): Promise<operations.ListRequestedServiceQuotaChangeHistoryByQuotaResponse>;
    /**
     * Lists the quota increase requests in the specified quota request template.
     */
    listServiceQuotaIncreaseRequestsInTemplate(req: operations.ListServiceQuotaIncreaseRequestsInTemplateRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceQuotaIncreaseRequestsInTemplateResponse>;
    /**
     * Lists the applied quota values for the specified AWS service. For some quotas, only the default values are available. If the applied quota value is not available for a quota, the quota is not retrieved.
     */
    listServiceQuotas(req: operations.ListServiceQuotasRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceQuotasResponse>;
    /**
     * Lists the names and codes for the services integrated with Service Quotas.
     */
    listServices(req: operations.ListServicesRequest, config?: AxiosRequestConfig): Promise<operations.ListServicesResponse>;
    /**
     * Returns a list of the tags assigned to the specified applied quota.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Adds a quota increase request to your quota request template.
     */
    putServiceQuotaIncreaseRequestIntoTemplate(req: operations.PutServiceQuotaIncreaseRequestIntoTemplateRequest, config?: AxiosRequestConfig): Promise<operations.PutServiceQuotaIncreaseRequestIntoTemplateResponse>;
    /**
     * Submits a quota increase request for the specified quota.
     */
    requestServiceQuotaIncrease(req: operations.RequestServiceQuotaIncreaseRequest, config?: AxiosRequestConfig): Promise<operations.RequestServiceQuotaIncreaseResponse>;
    /**
     * Adds tags to the specified applied quota. You can include one or more tags to add to the quota.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes tags from the specified applied quota. You can specify one or more tags to remove.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
}
