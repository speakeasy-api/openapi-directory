import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AppBlockLogsSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class AppBlockLogsRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare class AppBlockLogsResponse extends SpeakeasyBase {
    /**
     * Operation successful
     */
    appBlockLogs200ApplicationJSONStringString?: string;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
