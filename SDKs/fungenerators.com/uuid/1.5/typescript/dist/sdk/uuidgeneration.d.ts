import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Generate different versions of UUID easily.
 *
 * @see {@link https://fungenerators.com/api/uuid/} - Find out more
 */
export declare class UUIDGeneration {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Generate a random UUID (v4).
     */
    getUuid(req: operations.GetUuidRequest, security: operations.GetUuidSecurity, config?: AxiosRequestConfig): Promise<operations.GetUuidResponse>;
    /**
     * Generate a random UUID (v4).
     */
    getUuidVersionVersion(req: operations.GetUuidVersionVersionRequest, security: operations.GetUuidVersionVersionSecurity, config?: AxiosRequestConfig): Promise<operations.GetUuidVersionVersionResponse>;
}
