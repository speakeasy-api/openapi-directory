import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Get holiday(s) with associated provinces
 */
export declare class Holidays {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a holiday by id
     *
     * @remarks
     * Returns one Canadian statutory holiday by integer id. Returns a 404 response for invalid ids.
     */
    holiday(req: operations.HolidayRequest, config?: AxiosRequestConfig): Promise<operations.HolidayResponse>;
    /**
     * Get all holidays
     *
     * @remarks
     * Returns Canadian public holidays. Each holiday lists the regions that observe it.
     */
    holidays(req: operations.HolidaysRequest, config?: AxiosRequestConfig): Promise<operations.HolidaysResponse>;
}
