import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Payrolls {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Payroll
     *
     * @remarks
     * List Payroll
     */
    payrollsAll(req: operations.PayrollsAllRequest, security: operations.PayrollsAllSecurity, config?: AxiosRequestConfig): Promise<operations.PayrollsAllResponse>;
    /**
     * Get Payroll
     *
     * @remarks
     * Get Payroll
     */
    payrollsOne(req: operations.PayrollsOneRequest, security: operations.PayrollsOneSecurity, config?: AxiosRequestConfig): Promise<operations.PayrollsOneResponse>;
}
