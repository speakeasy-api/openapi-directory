import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SchoolAdmins {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns a specific school admin
     */
    getSchoolAdmin(req: operations.GetSchoolAdminRequest, config?: AxiosRequestConfig): Promise<operations.GetSchoolAdminResponse>;
    /**
     * Returns a list of school admins
     */
    getSchoolAdmins(req: operations.GetSchoolAdminsRequest, config?: AxiosRequestConfig): Promise<operations.GetSchoolAdminsResponse>;
    /**
     * Returns the schools for a school admin
     */
    getSchoolsForSchoolAdmin(req: operations.GetSchoolsForSchoolAdminRequest, config?: AxiosRequestConfig): Promise<operations.GetSchoolsForSchoolAdminResponse>;
}
