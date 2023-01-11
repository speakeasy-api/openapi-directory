import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Schools {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDistrictForSchool - Returns the district for a school
    **/
    getDistrictForSchool(req: operations.GetDistrictForSchoolRequest, config?: AxiosRequestConfig): Promise<operations.GetDistrictForSchoolResponse>;
    /**
     * getSchool - Returns a specific school
    **/
    getSchool(req: operations.GetSchoolRequest, config?: AxiosRequestConfig): Promise<operations.GetSchoolResponse>;
    /**
     * getSchools - Returns a list of schools
    **/
    getSchools(req: operations.GetSchoolsRequest, config?: AxiosRequestConfig): Promise<operations.GetSchoolsResponse>;
    /**
     * getSectionsForSchool - Returns the sections for a school
    **/
    getSectionsForSchool(req: operations.GetSectionsForSchoolRequest, config?: AxiosRequestConfig): Promise<operations.GetSectionsForSchoolResponse>;
    /**
     * getStudentsForSchool - Returns the students for a school
    **/
    getStudentsForSchool(req: operations.GetStudentsForSchoolRequest, config?: AxiosRequestConfig): Promise<operations.GetStudentsForSchoolResponse>;
    /**
     * getTeachersForSchool - Returns the teachers for a school
    **/
    getTeachersForSchool(req: operations.GetTeachersForSchoolRequest, config?: AxiosRequestConfig): Promise<operations.GetTeachersForSchoolResponse>;
}
