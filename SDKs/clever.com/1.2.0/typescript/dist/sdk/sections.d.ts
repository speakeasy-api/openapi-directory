import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Sections {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns the district for a section
     */
    getDistrictForSection(req: operations.GetDistrictForSectionRequest, config?: AxiosRequestConfig): Promise<operations.GetDistrictForSectionResponse>;
    /**
     * Returns the school for a section
     */
    getSchoolForSection(req: operations.GetSchoolForSectionRequest, config?: AxiosRequestConfig): Promise<operations.GetSchoolForSectionResponse>;
    /**
     * Returns a specific section
     */
    getSection(req: operations.GetSectionRequest, config?: AxiosRequestConfig): Promise<operations.GetSectionResponse>;
    /**
     * Returns a list of sections
     */
    getSections(req: operations.GetSectionsRequest, config?: AxiosRequestConfig): Promise<operations.GetSectionsResponse>;
    /**
     * Returns the students for a section
     */
    getStudentsForSection(req: operations.GetStudentsForSectionRequest, config?: AxiosRequestConfig): Promise<operations.GetStudentsForSectionResponse>;
    /**
     * Returns the primary teacher for a section
     */
    getTeacherForSection(req: operations.GetTeacherForSectionRequest, config?: AxiosRequestConfig): Promise<operations.GetTeacherForSectionResponse>;
    /**
     * Returns the teachers for a section
     */
    getTeachersForSection(req: operations.GetTeachersForSectionRequest, config?: AxiosRequestConfig): Promise<operations.GetTeachersForSectionResponse>;
}
