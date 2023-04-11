import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class APIs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Inner Line Permit
     *
     * @remarks
     * API to verify Inner Line Permit.
     */
    ilpmt(req: operations.IlpmtRequestBody, security: operations.IlpmtSecurity, config?: AxiosRequestConfig): Promise<operations.IlpmtResponse>;
}
