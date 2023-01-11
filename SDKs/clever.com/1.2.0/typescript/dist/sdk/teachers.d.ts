import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Teachers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDistrictForTeacher - Returns the district for a teacher
    **/
    getDistrictForTeacher(req: operations.GetDistrictForTeacherRequest, config?: AxiosRequestConfig): Promise<operations.GetDistrictForTeacherResponse>;
    /**
     * getGradeLevelsForTeacher - Returns the grade levels for sections a teacher teaches
    **/
    getGradeLevelsForTeacher(req: operations.GetGradeLevelsForTeacherRequest, config?: AxiosRequestConfig): Promise<operations.GetGradeLevelsForTeacherResponse>;
    /**
     * getSchoolForTeacher - Retrieves school info for a teacher.
    **/
    getSchoolForTeacher(req: operations.GetSchoolForTeacherRequest, config?: AxiosRequestConfig): Promise<operations.GetSchoolForTeacherResponse>;
    /**
     * getSectionsForTeacher - Returns the sections for a teacher
    **/
    getSectionsForTeacher(req: operations.GetSectionsForTeacherRequest, config?: AxiosRequestConfig): Promise<operations.GetSectionsForTeacherResponse>;
    /**
     * getStudentsForTeacher - Returns the students for a teacher
    **/
    getStudentsForTeacher(req: operations.GetStudentsForTeacherRequest, config?: AxiosRequestConfig): Promise<operations.GetStudentsForTeacherResponse>;
    /**
     * getTeacher - Returns a specific teacher
    **/
    getTeacher(req: operations.GetTeacherRequest, config?: AxiosRequestConfig): Promise<operations.GetTeacherResponse>;
    /**
     * getTeachers - Returns a list of teachers
    **/
    getTeachers(req: operations.GetTeachersRequest, config?: AxiosRequestConfig): Promise<operations.GetTeachersResponse>;
}
