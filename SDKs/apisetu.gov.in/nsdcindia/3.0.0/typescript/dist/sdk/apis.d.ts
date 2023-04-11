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
     * Executive Skill Enhancement Certificate
     *
     * @remarks
     * API to verify Executive Skill Enhancement Certificate.
     */
    escer(req: operations.EscerRequestBody, security: operations.EscerSecurity, config?: AxiosRequestConfig): Promise<operations.EscerResponse>;
    /**
     * Skill Certificate
     *
     * @remarks
     * API to verify Skill Certificate.
     */
    skcer(req: operations.SkcerRequestBody, security: operations.SkcerSecurity, config?: AxiosRequestConfig): Promise<operations.SkcerResponse>;
}
