import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DevicesBlockLogsSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class DevicesBlockLogsRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The id of the device
     */
    installId: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare class DevicesBlockLogsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Operation successful
     */
    devicesBlockLogs200ApplicationJSONStringString?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
