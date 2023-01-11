import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CrmCleanseApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * crmCheck - CRM check of a particular vin
     *
     * Check whether particular vin has had a listing after stipulated date or not
    **/
    crmCheck(req: operations.CrmCheckRequest, config?: AxiosRequestConfig): Promise<operations.CrmCheckResponse>;
}
