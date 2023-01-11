import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Companies } from "./companies";
import { Departments } from "./departments";
import { EmployeePayrolls } from "./employeepayrolls";
import { EmployeeSchedules } from "./employeeschedules";
import { Employees } from "./employees";
import { Jobs } from "./jobs";
import { Payrolls } from "./payrolls";
import { TimeOffRequests } from "./timeoffrequests";
export declare const ServerList: readonly ["https://unify.apideck.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    companies: Companies;
    departments: Departments;
    employeePayrolls: EmployeePayrolls;
    employeeSchedules: EmployeeSchedules;
    employees: Employees;
    jobs: Jobs;
    payrolls: Payrolls;
    timeOffRequests: TimeOffRequests;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
