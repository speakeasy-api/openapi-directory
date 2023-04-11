import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class OrderTypes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Order Type
     *
     * @remarks
     * Create Order Type
     */
    orderTypesAdd(req: operations.OrderTypesAddRequest, security: operations.OrderTypesAddSecurity, config?: AxiosRequestConfig): Promise<operations.OrderTypesAddResponse>;
    /**
     * List Order Types
     *
     * @remarks
     * List Order Types
     */
    orderTypesAll(req: operations.OrderTypesAllRequest, security: operations.OrderTypesAllSecurity, config?: AxiosRequestConfig): Promise<operations.OrderTypesAllResponse>;
    /**
     * Delete Order Type
     *
     * @remarks
     * Delete Order Type
     */
    orderTypesDelete(req: operations.OrderTypesDeleteRequest, security: operations.OrderTypesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.OrderTypesDeleteResponse>;
    /**
     * Get Order Type
     *
     * @remarks
     * Get Order Type
     */
    orderTypesOne(req: operations.OrderTypesOneRequest, security: operations.OrderTypesOneSecurity, config?: AxiosRequestConfig): Promise<operations.OrderTypesOneResponse>;
    /**
     * Update Order Type
     *
     * @remarks
     * Update Order Type
     */
    orderTypesUpdate(req: operations.OrderTypesUpdateRequest, security: operations.OrderTypesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.OrderTypesUpdateResponse>;
}
