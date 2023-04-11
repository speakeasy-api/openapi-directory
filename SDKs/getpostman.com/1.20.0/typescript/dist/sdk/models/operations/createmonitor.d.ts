import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateMonitorRequestBodyMonitorSchedule extends SpeakeasyBase {
    cron?: string;
    timezone?: string;
}
export declare class CreateMonitorRequestBodyMonitor extends SpeakeasyBase {
    collection?: string;
    environment?: string;
    name?: string;
    schedule?: CreateMonitorRequestBodyMonitorSchedule;
}
export declare class CreateMonitorRequestBody extends SpeakeasyBase {
    monitor?: CreateMonitorRequestBodyMonitor;
}
export declare class CreateMonitor400ApplicationJSONErrorDetails extends SpeakeasyBase {
    param?: string;
}
export declare class CreateMonitor400ApplicationJSONError extends SpeakeasyBase {
    details?: CreateMonitor400ApplicationJSONErrorDetails;
    message?: string;
    name?: string;
}
/**
 * Parameter Missing
 */
export declare class CreateMonitor400ApplicationJSON extends SpeakeasyBase {
    error?: CreateMonitor400ApplicationJSONError;
}
export declare class CreateMonitor200ApplicationJSONMonitor extends SpeakeasyBase {
    id?: string;
    name?: string;
    uid?: string;
}
/**
 * Create Monitor in a Workspace
 */
export declare class CreateMonitor200ApplicationJSON extends SpeakeasyBase {
    monitor?: CreateMonitor200ApplicationJSONMonitor;
}
export declare class CreateMonitorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Create Monitor in a Workspace
     */
    createMonitor200ApplicationJSONObject?: CreateMonitor200ApplicationJSON;
    /**
     * Parameter Missing
     */
    createMonitor400ApplicationJSONObject?: CreateMonitor400ApplicationJSON;
}
