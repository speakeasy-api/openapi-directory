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
     * Copy of Registered Deed
     *
     * @remarks
     * API to verify Copy of Registered Deed.
     */
    rdcer(req: operations.RdcerRequestBody, security: operations.RdcerSecurity, config?: AxiosRequestConfig): Promise<operations.RdcerResponse>;
    /**
     * Records of Rights
     *
     * @remarks
     * API to verify Records of Rights.
     */
    ror1b(req: operations.Ror1bRequestBody, security: operations.Ror1bSecurity, config?: AxiosRequestConfig): Promise<operations.Ror1bResponse>;
}
