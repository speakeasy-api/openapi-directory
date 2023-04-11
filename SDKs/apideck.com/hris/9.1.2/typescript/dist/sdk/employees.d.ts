import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Employees {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Employee
     *
     * @remarks
     * Create Employee
     */
    employeesAdd(req: operations.EmployeesAddRequest, security: operations.EmployeesAddSecurity, config?: AxiosRequestConfig): Promise<operations.EmployeesAddResponse>;
    /**
     * List Employees
     *
     * @remarks
     * List Employees
     */
    employeesAll(req: operations.EmployeesAllRequest, security: operations.EmployeesAllSecurity, config?: AxiosRequestConfig): Promise<operations.EmployeesAllResponse>;
    /**
     * Delete Employee
     *
     * @remarks
     * Delete Employee
     */
    employeesDelete(req: operations.EmployeesDeleteRequest, security: operations.EmployeesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.EmployeesDeleteResponse>;
    /**
     * Get Employee
     *
     * @remarks
     * Get Employee
     */
    employeesOne(req: operations.EmployeesOneRequest, security: operations.EmployeesOneSecurity, config?: AxiosRequestConfig): Promise<operations.EmployeesOneResponse>;
    /**
     * Update Employee
     *
     * @remarks
     * Update Employee
     */
    employeesUpdate(req: operations.EmployeesUpdateRequest, security: operations.EmployeesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.EmployeesUpdateResponse>;
}
