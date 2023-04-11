import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Applicants {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create applicant
     *
     * @remarks
     * Create applicant
     */
    applicantsAdd(req: operations.ApplicantsAddRequest, security: operations.ApplicantsAddSecurity, config?: AxiosRequestConfig): Promise<operations.ApplicantsAddResponse>;
    /**
     * List applicants
     *
     * @remarks
     * List applicants
     */
    applicantsAll(req: operations.ApplicantsAllRequest, security: operations.ApplicantsAllSecurity, config?: AxiosRequestConfig): Promise<operations.ApplicantsAllResponse>;
    /**
     * Get applicant
     *
     * @remarks
     * Get applicant
     */
    applicantsOne(req: operations.ApplicantsOneRequest, security: operations.ApplicantsOneSecurity, config?: AxiosRequestConfig): Promise<operations.ApplicantsOneResponse>;
}
