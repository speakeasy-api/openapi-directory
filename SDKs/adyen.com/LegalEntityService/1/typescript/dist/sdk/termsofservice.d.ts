import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TermsOfService {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Terms of Service information for a legal entity
     *
     * @remarks
     * Returns Terms of Service information for a legal entity.
     */
    getLegalEntitiesIdTermsOfServiceAcceptanceInfos(req: operations.GetLegalEntitiesIdTermsOfServiceAcceptanceInfosRequest, security: operations.GetLegalEntitiesIdTermsOfServiceAcceptanceInfosSecurity, config?: AxiosRequestConfig): Promise<operations.GetLegalEntitiesIdTermsOfServiceAcceptanceInfosResponse>;
    /**
     * Get Terms of Service status
     *
     * @remarks
     * Returns the required types of Terms of Service that need to be accepted by a legal entity.
     */
    getLegalEntitiesIdTermsOfServiceStatus(req: operations.GetLegalEntitiesIdTermsOfServiceStatusRequest, security: operations.GetLegalEntitiesIdTermsOfServiceStatusSecurity, config?: AxiosRequestConfig): Promise<operations.GetLegalEntitiesIdTermsOfServiceStatusResponse>;
    /**
     * Accept Terms of Service
     *
     * @remarks
     * Accepts Terms of Service.
     */
    patchLegalEntitiesIdTermsOfServiceTermsofservicedocumentid(req: operations.PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidRequest, security: operations.PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidSecurity, config?: AxiosRequestConfig): Promise<operations.PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidResponse>;
    /**
     * Get Terms of Service document
     *
     * @remarks
     * Returns the Terms of Service document for a legal entity.
     */
    postLegalEntitiesIdTermsOfService(req: operations.PostLegalEntitiesIdTermsOfServiceRequest, security: operations.PostLegalEntitiesIdTermsOfServiceSecurity, config?: AxiosRequestConfig): Promise<operations.PostLegalEntitiesIdTermsOfServiceResponse>;
}
