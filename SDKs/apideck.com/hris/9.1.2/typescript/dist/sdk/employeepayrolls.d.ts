import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class EmployeePayrolls {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Employee Payrolls
     *
     * @remarks
     * List payrolls for employee
     */
    employeePayrollsAll(req: operations.EmployeePayrollsAllRequest, security: operations.EmployeePayrollsAllSecurity, config?: AxiosRequestConfig): Promise<operations.EmployeePayrollsAllResponse>;
    /**
     * Get Employee Payroll
     *
     * @remarks
     * Get payroll for employee
     */
    employeePayrollsOne(req: operations.EmployeePayrollsOneRequest, security: operations.EmployeePayrollsOneSecurity, config?: AxiosRequestConfig): Promise<operations.EmployeePayrollsOneResponse>;
}
