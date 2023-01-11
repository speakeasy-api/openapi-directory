import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DistrictAdmins {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDistrictAdmin - Returns a specific district admin
    **/
    getDistrictAdmin(req: operations.GetDistrictAdminRequest, config?: AxiosRequestConfig): Promise<operations.GetDistrictAdminResponse>;
    /**
     * getDistrictAdmins - Returns a list of district admins
    **/
    getDistrictAdmins(req: operations.GetDistrictAdminsRequest, config?: AxiosRequestConfig): Promise<operations.GetDistrictAdminsResponse>;
}
