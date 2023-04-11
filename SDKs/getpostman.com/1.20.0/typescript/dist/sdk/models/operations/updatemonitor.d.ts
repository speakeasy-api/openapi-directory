import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateMonitorRequestBodyMonitorSchedule extends SpeakeasyBase {
    cron?: string;
    timezone?: string;
}
export declare class UpdateMonitorRequestBodyMonitor extends SpeakeasyBase {
    name?: string;
    schedule?: UpdateMonitorRequestBodyMonitorSchedule;
}
export declare class UpdateMonitorRequestBody extends SpeakeasyBase {
    monitor?: UpdateMonitorRequestBodyMonitor;
}
export declare class UpdateMonitorRequest extends SpeakeasyBase {
    requestBody?: UpdateMonitorRequestBody;
    monitorUid: string;
}
export declare class UpdateMonitor200ApplicationJSONMonitor extends SpeakeasyBase {
    id?: string;
    name?: string;
    uid?: string;
}
/**
 * Monitor Updated
 */
export declare class UpdateMonitor200ApplicationJSON extends SpeakeasyBase {
    monitor?: UpdateMonitor200ApplicationJSONMonitor;
}
export declare class UpdateMonitorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Monitor Updated
     */
    updateMonitor200ApplicationJSONObject?: UpdateMonitor200ApplicationJSON;
}
