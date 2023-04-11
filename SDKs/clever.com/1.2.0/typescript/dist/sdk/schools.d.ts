import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Schools {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns the district for a school
     */
    getDistrictForSchool(req: operations.GetDistrictForSchoolRequest, config?: AxiosRequestConfig): Promise<operations.GetDistrictForSchoolResponse>;
    /**
     * Returns a specific school
     */
    getSchool(req: operations.GetSchoolRequest, config?: AxiosRequestConfig): Promise<operations.GetSchoolResponse>;
    /**
     * Returns a list of schools
     */
    getSchools(req: operations.GetSchoolsRequest, config?: AxiosRequestConfig): Promise<operations.GetSchoolsResponse>;
    /**
     * Returns the sections for a school
     */
    getSectionsForSchool(req: operations.GetSectionsForSchoolRequest, config?: AxiosRequestConfig): Promise<operations.GetSectionsForSchoolResponse>;
    /**
     * Returns the students for a school
     */
    getStudentsForSchool(req: operations.GetStudentsForSchoolRequest, config?: AxiosRequestConfig): Promise<operations.GetStudentsForSchoolResponse>;
    /**
     * Returns the teachers for a school
     */
    getTeachersForSchool(req: operations.GetTeachersForSchoolRequest, config?: AxiosRequestConfig): Promise<operations.GetTeachersForSchoolResponse>;
}
