import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SingleMonitorRequest extends SpeakeasyBase {
    monitorUid: string;
}
export declare class SingleMonitor404ApplicationJSONError extends SpeakeasyBase {
    message?: string;
    name?: string;
}
/**
 * Monitor Not Found
 */
export declare class SingleMonitor404ApplicationJSON extends SpeakeasyBase {
    error?: SingleMonitor404ApplicationJSONError;
}
export declare class SingleMonitor200ApplicationJSONMonitorLastRunStatsAssertions extends SpeakeasyBase {
    failed?: number;
    total?: number;
}
export declare class SingleMonitor200ApplicationJSONMonitorLastRunStatsRequests extends SpeakeasyBase {
    total?: number;
}
export declare class SingleMonitor200ApplicationJSONMonitorLastRunStats extends SpeakeasyBase {
    assertions?: SingleMonitor200ApplicationJSONMonitorLastRunStatsAssertions;
    requests?: SingleMonitor200ApplicationJSONMonitorLastRunStatsRequests;
}
export declare class SingleMonitor200ApplicationJSONMonitorLastRun extends SpeakeasyBase {
    finishedAt?: string;
    startedAt?: string;
    stats?: SingleMonitor200ApplicationJSONMonitorLastRunStats;
    status?: string;
}
export declare class SingleMonitor200ApplicationJSONMonitorNotificationsOnError extends SpeakeasyBase {
    email?: string;
}
export declare class SingleMonitor200ApplicationJSONMonitorNotificationsOnFailure extends SpeakeasyBase {
    email?: string;
}
export declare class SingleMonitor200ApplicationJSONMonitorNotifications extends SpeakeasyBase {
    onError?: SingleMonitor200ApplicationJSONMonitorNotificationsOnError[];
    onFailure?: SingleMonitor200ApplicationJSONMonitorNotificationsOnFailure[];
}
export declare class SingleMonitor200ApplicationJSONMonitorOptions extends SpeakeasyBase {
    followRedirects?: boolean;
    requestDelay?: number;
    requestTimeout?: number;
    strictSSL?: boolean;
}
export declare class SingleMonitor200ApplicationJSONMonitorSchedule extends SpeakeasyBase {
    cron?: string;
    nextRun?: string;
    timezone?: string;
}
export declare class SingleMonitor200ApplicationJSONMonitor extends SpeakeasyBase {
    collectionUid?: string;
    distribution?: any[];
    environmentUid?: string;
    id?: string;
    lastRun?: SingleMonitor200ApplicationJSONMonitorLastRun;
    name?: string;
    notifications?: SingleMonitor200ApplicationJSONMonitorNotifications;
    options?: SingleMonitor200ApplicationJSONMonitorOptions;
    owner?: string;
    schedule?: SingleMonitor200ApplicationJSONMonitorSchedule;
    uid?: string;
}
/**
 * Successful Response
 */
export declare class SingleMonitor200ApplicationJSON extends SpeakeasyBase {
    monitor?: SingleMonitor200ApplicationJSONMonitor;
}
export declare class SingleMonitorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful Response
     */
    singleMonitor200ApplicationJSONObject?: SingleMonitor200ApplicationJSON;
    /**
     * Monitor Not Found
     */
    singleMonitor404ApplicationJSONObject?: SingleMonitor404ApplicationJSON;
}
