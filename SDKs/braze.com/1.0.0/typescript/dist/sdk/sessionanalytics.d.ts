import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SessionAnalytics {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * App Sessions by Time
     *
     * @remarks
     * This endpoint allows you to retrieve a series of the number of sessions for your app over a designated time period.
     *
     * ### Components Used
     * - [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)
     *
     * ## Response
     *
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR-REST-API-KEY
     * {
     *     "message": (required, string) the status of the export, returns 'success' when completed without errors,
     *     "data" : [
     *         {
     *             "time" : (string) point in time - as ISO 8601 extended when unit is "hour" and as ISO 8601 date when unit is "day",
     *             "sessions" : (int)
     *         },
     *         ...
     *     ]
     * }
     * ```
     */
    appSessionsByTime(req: operations.AppSessionsByTimeRequest, config?: AxiosRequestConfig): Promise<operations.AppSessionsByTimeResponse>;
}
