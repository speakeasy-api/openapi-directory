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
     * Skill Certificate
     *
     * @remarks
     * API to verify Skill Certificate.
     */
    skcer(req: operations.SkcerRequestBody, security: operations.SkcerSecurity, config?: AxiosRequestConfig): Promise<operations.SkcerResponse>;
    /**
     * Skill Marksheet/ Score Card
     *
     * @remarks
     * API to verify Skill Marksheet/ Score Card.
     */
    skmst(req: operations.SkmstRequestBody, security: operations.SkmstSecurity, config?: AxiosRequestConfig): Promise<operations.SkmstResponse>;
}
