import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class EmployeeSchedules {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Employee Schedules
     *
     * @remarks
     * List schedules for employee, a schedule is a work pattern, not the actual worked hours, for an employee.
     */
    employeeSchedulesAll(req: operations.EmployeeSchedulesAllRequest, security: operations.EmployeeSchedulesAllSecurity, config?: AxiosRequestConfig): Promise<operations.EmployeeSchedulesAllResponse>;
}
