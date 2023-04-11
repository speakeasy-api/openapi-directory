import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Bills {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Bill
     *
     * @remarks
     * Create Bill
     */
    billsAdd(req: operations.BillsAddRequest, security: operations.BillsAddSecurity, config?: AxiosRequestConfig): Promise<operations.BillsAddResponse>;
    /**
     * List Bills
     *
     * @remarks
     * List Bills
     */
    billsAll(req: operations.BillsAllRequest, security: operations.BillsAllSecurity, config?: AxiosRequestConfig): Promise<operations.BillsAllResponse>;
    /**
     * Delete Bill
     *
     * @remarks
     * Delete Bill
     */
    billsDelete(req: operations.BillsDeleteRequest, security: operations.BillsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.BillsDeleteResponse>;
    /**
     * Get Bill
     *
     * @remarks
     * Get Bill
     */
    billsOne(req: operations.BillsOneRequest, security: operations.BillsOneSecurity, config?: AxiosRequestConfig): Promise<operations.BillsOneResponse>;
    /**
     * Update Bill
     *
     * @remarks
     * Update Bill
     */
    billsUpdate(req: operations.BillsUpdateRequest, security: operations.BillsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.BillsUpdateResponse>;
}
