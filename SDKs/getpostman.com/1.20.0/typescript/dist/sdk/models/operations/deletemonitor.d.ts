import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteMonitorRequest extends SpeakeasyBase {
    monitorUid: string;
}
export declare class DeleteMonitor404ApplicationJSONError extends SpeakeasyBase {
    message?: string;
    name?: string;
}
/**
 * Monitor Not Found
 */
export declare class DeleteMonitor404ApplicationJSON extends SpeakeasyBase {
    error?: DeleteMonitor404ApplicationJSONError;
}
export declare class DeleteMonitor200ApplicationJSONMonitor extends SpeakeasyBase {
    id?: string;
    uid?: string;
}
/**
 * Monitor Deleted
 */
export declare class DeleteMonitor200ApplicationJSON extends SpeakeasyBase {
    monitor?: DeleteMonitor200ApplicationJSONMonitor;
}
export declare class DeleteMonitorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Monitor Deleted
     */
    deleteMonitor200ApplicationJSONObject?: DeleteMonitor200ApplicationJSON;
    /**
     * Monitor Not Found
     */
    deleteMonitor404ApplicationJSONObject?: DeleteMonitor404ApplicationJSON;
}
