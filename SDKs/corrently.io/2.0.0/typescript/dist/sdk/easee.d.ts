import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Alternative access to EASEE.cloud Data.
 */
export declare class Easee {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns lastSession info for all easee wallboxes (chargers) given user has access to.
     *
     * @remarks
     * Refer to easee.cloud API for details.
     *
     */
    easeeSessions(req: operations.EaseeSessionsRequest, config?: AxiosRequestConfig): Promise<operations.EaseeSessionsResponse>;
}
