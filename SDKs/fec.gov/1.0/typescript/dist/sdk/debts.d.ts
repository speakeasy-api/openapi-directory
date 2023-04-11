import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Schedule D, it shows debts and obligations owed to or by the committee that are required to be disclosed.
 */
export declare class Debts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     *
     * Schedule D, it shows debts and obligations owed to or by the committee that are
     * required to be disclosed.
     *
     *
     *
     */
    getSchedulesScheduleD(req: operations.GetSchedulesScheduleDRequest, config?: AxiosRequestConfig): Promise<operations.GetSchedulesScheduleDResponse>;
    /**
     *
     * Schedule D, it shows debts and obligations owed to or by the committee that are
     * required to be disclosed.
     *
     *
     *
     */
    getSchedulesScheduleDSubId(req: operations.GetSchedulesScheduleDSubIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSchedulesScheduleDSubIdResponse>;
}
