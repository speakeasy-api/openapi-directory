import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Modifiers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Modifier
     *
     * @remarks
     * Create Modifier
     */
    modifiersAdd(req: operations.ModifiersAddRequest, security: operations.ModifiersAddSecurity, config?: AxiosRequestConfig): Promise<operations.ModifiersAddResponse>;
    /**
     * List Modifiers
     *
     * @remarks
     * List Modifiers
     */
    modifiersAll(req: operations.ModifiersAllRequest, security: operations.ModifiersAllSecurity, config?: AxiosRequestConfig): Promise<operations.ModifiersAllResponse>;
    /**
     * Delete Modifier
     *
     * @remarks
     * Delete Modifier
     */
    modifiersDelete(req: operations.ModifiersDeleteRequest, security: operations.ModifiersDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ModifiersDeleteResponse>;
    /**
     * Get Modifier
     *
     * @remarks
     * Get Modifier
     */
    modifiersOne(req: operations.ModifiersOneRequest, security: operations.ModifiersOneSecurity, config?: AxiosRequestConfig): Promise<operations.ModifiersOneResponse>;
    /**
     * Update Modifier
     *
     * @remarks
     * Update Modifier
     */
    modifiersUpdate(req: operations.ModifiersUpdateRequest, security: operations.ModifiersUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ModifiersUpdateResponse>;
}
