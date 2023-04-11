import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Information about coaches
 */
export declare class Coaches {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Coaching records and history
     *
     * @remarks
     * Coaching history
     */
    getCoaches(req: operations.GetCoachesRequest, config?: AxiosRequestConfig): Promise<operations.GetCoachesResponse>;
}
