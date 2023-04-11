import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Departments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Department
     *
     * @remarks
     * Create Department
     */
    departmentsAdd(req: operations.DepartmentsAddRequest, security: operations.DepartmentsAddSecurity, config?: AxiosRequestConfig): Promise<operations.DepartmentsAddResponse>;
    /**
     * List Departments
     *
     * @remarks
     * List Departments
     */
    departmentsAll(req: operations.DepartmentsAllRequest, security: operations.DepartmentsAllSecurity, config?: AxiosRequestConfig): Promise<operations.DepartmentsAllResponse>;
    /**
     * Delete Department
     *
     * @remarks
     * Delete Department
     */
    departmentsDelete(req: operations.DepartmentsDeleteRequest, security: operations.DepartmentsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DepartmentsDeleteResponse>;
    /**
     * Get Department
     *
     * @remarks
     * Get Department
     */
    departmentsOne(req: operations.DepartmentsOneRequest, security: operations.DepartmentsOneSecurity, config?: AxiosRequestConfig): Promise<operations.DepartmentsOneResponse>;
    /**
     * Update Department
     *
     * @remarks
     * Update Department
     */
    departmentsUpdate(req: operations.DepartmentsUpdateRequest, security: operations.DepartmentsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DepartmentsUpdateResponse>;
}
