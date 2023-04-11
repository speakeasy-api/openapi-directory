import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Opportunities {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create opportunity
     *
     * @remarks
     * Create opportunity
     */
    opportunitiesAdd(req: operations.OpportunitiesAddRequest, security: operations.OpportunitiesAddSecurity, config?: AxiosRequestConfig): Promise<operations.OpportunitiesAddResponse>;
    /**
     * List opportunities
     *
     * @remarks
     * List opportunities
     */
    opportunitiesAll(req: operations.OpportunitiesAllRequest, security: operations.OpportunitiesAllSecurity, config?: AxiosRequestConfig): Promise<operations.OpportunitiesAllResponse>;
    /**
     * Delete opportunity
     *
     * @remarks
     * Delete opportunity
     */
    opportunitiesDelete(req: operations.OpportunitiesDeleteRequest, security: operations.OpportunitiesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.OpportunitiesDeleteResponse>;
    /**
     * Get opportunity
     *
     * @remarks
     * Get opportunity
     */
    opportunitiesOne(req: operations.OpportunitiesOneRequest, security: operations.OpportunitiesOneSecurity, config?: AxiosRequestConfig): Promise<operations.OpportunitiesOneResponse>;
    /**
     * Update opportunity
     *
     * @remarks
     * Update opportunity
     */
    opportunitiesUpdate(req: operations.OpportunitiesUpdateRequest, security: operations.OpportunitiesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.OpportunitiesUpdateResponse>;
}
