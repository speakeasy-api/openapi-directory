import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Merchants {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Merchant
     *
     * @remarks
     * Create Merchant
     */
    merchantsAdd(req: operations.MerchantsAddRequest, security: operations.MerchantsAddSecurity, config?: AxiosRequestConfig): Promise<operations.MerchantsAddResponse>;
    /**
     * List Merchants
     *
     * @remarks
     * List Merchants
     */
    merchantsAll(req: operations.MerchantsAllRequest, security: operations.MerchantsAllSecurity, config?: AxiosRequestConfig): Promise<operations.MerchantsAllResponse>;
    /**
     * Delete Merchant
     *
     * @remarks
     * Delete Merchant
     */
    merchantsDelete(req: operations.MerchantsDeleteRequest, security: operations.MerchantsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.MerchantsDeleteResponse>;
    /**
     * Get Merchant
     *
     * @remarks
     * Get Merchant
     */
    merchantsOne(req: operations.MerchantsOneRequest, security: operations.MerchantsOneSecurity, config?: AxiosRequestConfig): Promise<operations.MerchantsOneResponse>;
    /**
     * Update Merchant
     *
     * @remarks
     * Update Merchant
     */
    merchantsUpdate(req: operations.MerchantsUpdateRequest, security: operations.MerchantsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.MerchantsUpdateResponse>;
}
