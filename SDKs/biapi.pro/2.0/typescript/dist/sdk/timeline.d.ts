import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Timeline {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get incidents logs.
     *
     * @remarks
     * By default, provide all incidents. Results are paginated. Some filters can be set via query parameters.<br><br>
     */
    getIncidents(req: operations.GetIncidentsRequest, config?: AxiosRequestConfig): Promise<operations.GetIncidentsResponse>;
}
