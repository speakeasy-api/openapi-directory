import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * If you carry on a business you may need to hold a licence.
 *
 * @remarks
 *
 *   For example, if you provide financial services, you are required to hold an Australian Financial
 *   Services (AFS) licence.
 *
 */
export declare class Licenses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve a list of licenses
     *
     * @remarks
     * Retrieve a list of licenses
     *
     */
    getLicenses(req: operations.GetLicensesRequest, config?: AxiosRequestConfig): Promise<operations.GetLicensesResponse>;
}
