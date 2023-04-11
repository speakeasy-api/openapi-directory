import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class DistrictAdmins {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns a specific district admin
     */
    getDistrictAdmin(req: operations.GetDistrictAdminRequest, config?: AxiosRequestConfig): Promise<operations.GetDistrictAdminResponse>;
    /**
     * Returns a list of district admins
     */
    getDistrictAdmins(req: operations.GetDistrictAdminsRequest, config?: AxiosRequestConfig): Promise<operations.GetDistrictAdminsResponse>;
}
