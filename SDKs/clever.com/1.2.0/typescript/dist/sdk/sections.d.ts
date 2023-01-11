import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Sections {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDistrictForSection - Returns the district for a section
    **/
    getDistrictForSection(req: operations.GetDistrictForSectionRequest, config?: AxiosRequestConfig): Promise<operations.GetDistrictForSectionResponse>;
    /**
     * getSchoolForSection - Returns the school for a section
    **/
    getSchoolForSection(req: operations.GetSchoolForSectionRequest, config?: AxiosRequestConfig): Promise<operations.GetSchoolForSectionResponse>;
    /**
     * getSection - Returns a specific section
    **/
    getSection(req: operations.GetSectionRequest, config?: AxiosRequestConfig): Promise<operations.GetSectionResponse>;
    /**
     * getSections - Returns a list of sections
    **/
    getSections(req: operations.GetSectionsRequest, config?: AxiosRequestConfig): Promise<operations.GetSectionsResponse>;
    /**
     * getStudentsForSection - Returns the students for a section
    **/
    getStudentsForSection(req: operations.GetStudentsForSectionRequest, config?: AxiosRequestConfig): Promise<operations.GetStudentsForSectionResponse>;
    /**
     * getTeacherForSection - Returns the primary teacher for a section
    **/
    getTeacherForSection(req: operations.GetTeacherForSectionRequest, config?: AxiosRequestConfig): Promise<operations.GetTeacherForSectionResponse>;
    /**
     * getTeachersForSection - Returns the teachers for a section
    **/
    getTeachersForSection(req: operations.GetTeachersForSectionRequest, config?: AxiosRequestConfig): Promise<operations.GetTeachersForSectionResponse>;
}
