import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about as2_partners
 */
export declare class As2Partners {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete As2 Partner
     *
     * @remarks
     * Delete As2 Partner
     */
    deleteAs2PartnersId(req: operations.DeleteAs2PartnersIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAs2PartnersIdResponse>;
    /**
     * List As2 Partners
     *
     * @remarks
     * List As2 Partners
     */
    getAs2Partners(req: operations.GetAs2PartnersRequest, config?: AxiosRequestConfig): Promise<operations.GetAs2PartnersResponse>;
    /**
     * Show As2 Partner
     *
     * @remarks
     * Show As2 Partner
     */
    getAs2PartnersId(req: operations.GetAs2PartnersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAs2PartnersIdResponse>;
    /**
     * Update As2 Partner
     *
     * @remarks
     * Update As2 Partner
     */
    patchAs2PartnersId(req: operations.PatchAs2PartnersIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchAs2PartnersIdResponse>;
    /**
     * Create As2 Partner
     *
     * @remarks
     * Create As2 Partner
     */
    postAs2Partners(req: operations.PostAs2PartnersRequestBody, config?: AxiosRequestConfig): Promise<operations.PostAs2PartnersResponse>;
}
