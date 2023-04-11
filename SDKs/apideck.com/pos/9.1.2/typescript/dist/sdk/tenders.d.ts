import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Tenders {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Tender
     *
     * @remarks
     * Create Tender
     */
    tendersAdd(req: operations.TendersAddRequest, security: operations.TendersAddSecurity, config?: AxiosRequestConfig): Promise<operations.TendersAddResponse>;
    /**
     * List Tenders
     *
     * @remarks
     * List Tenders
     */
    tendersAll(req: operations.TendersAllRequest, security: operations.TendersAllSecurity, config?: AxiosRequestConfig): Promise<operations.TendersAllResponse>;
    /**
     * Delete Tender
     *
     * @remarks
     * Delete Tender
     */
    tendersDelete(req: operations.TendersDeleteRequest, security: operations.TendersDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.TendersDeleteResponse>;
    /**
     * Get Tender
     *
     * @remarks
     * Get Tender
     */
    tendersOne(req: operations.TendersOneRequest, security: operations.TendersOneSecurity, config?: AxiosRequestConfig): Promise<operations.TendersOneResponse>;
    /**
     * Update Tender
     *
     * @remarks
     * Update Tender
     */
    tendersUpdate(req: operations.TendersUpdateRequest, security: operations.TendersUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.TendersUpdateResponse>;
}
