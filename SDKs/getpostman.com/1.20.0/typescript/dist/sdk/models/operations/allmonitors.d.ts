import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AllMonitors200ApplicationJSONMonitors extends SpeakeasyBase {
    id?: string;
    name?: string;
    owner?: string;
    uid?: string;
}
/**
 * Successful Response
 */
export declare class AllMonitors200ApplicationJSON extends SpeakeasyBase {
    monitors?: AllMonitors200ApplicationJSONMonitors[];
}
export declare class AllMonitorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful Response
     */
    allMonitors200ApplicationJSONObject?: AllMonitors200ApplicationJSON;
}
