import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Leads {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create lead
     *
     * @remarks
     * Create lead
     */
    leadsAdd(req: operations.LeadsAddRequest, security: operations.LeadsAddSecurity, config?: AxiosRequestConfig): Promise<operations.LeadsAddResponse>;
    /**
     * List leads
     *
     * @remarks
     * List leads
     */
    leadsAll(req: operations.LeadsAllRequest, security: operations.LeadsAllSecurity, config?: AxiosRequestConfig): Promise<operations.LeadsAllResponse>;
    /**
     * Delete lead
     *
     * @remarks
     * Delete lead
     */
    leadsDelete(req: operations.LeadsDeleteRequest, security: operations.LeadsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.LeadsDeleteResponse>;
    /**
     * Get lead
     *
     * @remarks
     * Get lead
     */
    leadsOne(req: operations.LeadsOneRequest, security: operations.LeadsOneSecurity, config?: AxiosRequestConfig): Promise<operations.LeadsOneResponse>;
    /**
     * Update lead
     *
     * @remarks
     * Update lead
     */
    leadsUpdate(req: operations.LeadsUpdateRequest, security: operations.LeadsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.LeadsUpdateResponse>;
}
