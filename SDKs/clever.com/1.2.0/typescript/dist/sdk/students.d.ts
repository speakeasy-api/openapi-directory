import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Students {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns the contacts for a student
     */
    getContactsForStudent(req: operations.GetContactsForStudentRequest, config?: AxiosRequestConfig): Promise<operations.GetContactsForStudentResponse>;
    /**
     * Returns the district for a student
     */
    getDistrictForStudent(req: operations.GetDistrictForStudentRequest, config?: AxiosRequestConfig): Promise<operations.GetDistrictForStudentResponse>;
    /**
     * Returns the primary school for a student
     */
    getSchoolForStudent(req: operations.GetSchoolForStudentRequest, config?: AxiosRequestConfig): Promise<operations.GetSchoolForStudentResponse>;
    /**
     * Returns the sections for a student
     */
    getSectionsForStudent(req: operations.GetSectionsForStudentRequest, config?: AxiosRequestConfig): Promise<operations.GetSectionsForStudentResponse>;
    /**
     * Returns a specific student
     */
    getStudent(req: operations.GetStudentRequest, config?: AxiosRequestConfig): Promise<operations.GetStudentResponse>;
    /**
     * Returns a list of students
     */
    getStudents(req: operations.GetStudentsRequest, config?: AxiosRequestConfig): Promise<operations.GetStudentsResponse>;
    /**
     * Returns the teachers for a student
     */
    getTeachersForStudent(req: operations.GetTeachersForStudentRequest, config?: AxiosRequestConfig): Promise<operations.GetTeachersForStudentResponse>;
}
