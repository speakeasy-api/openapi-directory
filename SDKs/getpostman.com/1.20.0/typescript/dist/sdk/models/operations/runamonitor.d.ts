import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RunAMonitorRequest extends SpeakeasyBase {
    monitorUid: string;
}
export declare class RunAMonitor200ApplicationJSONRunExecutionsItem extends SpeakeasyBase {
    id?: string;
    name?: string;
}
export declare class RunAMonitor200ApplicationJSONRunExecutionsRequestBody extends SpeakeasyBase {
    contentLength?: number;
    mode?: string;
}
export declare class RunAMonitor200ApplicationJSONRunExecutionsRequestHeaders extends SpeakeasyBase {
    accept?: string;
    acceptEncoding?: string;
    contentLength?: number;
    contentType?: string;
}
export declare class RunAMonitor200ApplicationJSONRunExecutionsRequest extends SpeakeasyBase {
    body?: RunAMonitor200ApplicationJSONRunExecutionsRequestBody;
    headers?: RunAMonitor200ApplicationJSONRunExecutionsRequestHeaders;
    method?: string;
    timestamp?: string;
    url?: string;
}
export declare class RunAMonitor200ApplicationJSONRunExecutionsResponseBody extends SpeakeasyBase {
    contentLength?: number;
}
export declare class RunAMonitor200ApplicationJSONRunExecutionsResponseHeaders extends SpeakeasyBase {
    connection?: string;
    contentEncoding?: string;
    contentType?: string;
    date?: string;
    transferEncoding?: string;
}
export declare class RunAMonitor200ApplicationJSONRunExecutionsResponse extends SpeakeasyBase {
    body?: RunAMonitor200ApplicationJSONRunExecutionsResponseBody;
    code?: number;
    headers?: RunAMonitor200ApplicationJSONRunExecutionsResponseHeaders;
    responseSize?: number;
    responseTime?: number;
}
export declare class RunAMonitor200ApplicationJSONRunExecutions extends SpeakeasyBase {
    id?: number;
    item?: RunAMonitor200ApplicationJSONRunExecutionsItem;
    request?: RunAMonitor200ApplicationJSONRunExecutionsRequest;
    response?: RunAMonitor200ApplicationJSONRunExecutionsResponse;
}
export declare class RunAMonitor200ApplicationJSONRunFailuresAssertion extends SpeakeasyBase {
    statusCodeIs400?: boolean;
}
export declare class RunAMonitor200ApplicationJSONRunFailures extends SpeakeasyBase {
    assertion?: RunAMonitor200ApplicationJSONRunFailuresAssertion;
    executionId?: number;
    message?: string;
    name?: string;
}
export declare class RunAMonitor200ApplicationJSONRunInfo extends SpeakeasyBase {
    collectionUid?: string;
    finishedAt?: string;
    jobId?: string;
    monitorId?: string;
    name?: string;
    startedAt?: string;
    status?: string;
}
export declare class RunAMonitor200ApplicationJSONRunStatsAssertions extends SpeakeasyBase {
    failed?: number;
    total?: number;
}
export declare class RunAMonitor200ApplicationJSONRunStatsRequests extends SpeakeasyBase {
    failed?: number;
    total?: number;
}
export declare class RunAMonitor200ApplicationJSONRunStats extends SpeakeasyBase {
    assertions?: RunAMonitor200ApplicationJSONRunStatsAssertions;
    requests?: RunAMonitor200ApplicationJSONRunStatsRequests;
}
export declare class RunAMonitor200ApplicationJSONRun extends SpeakeasyBase {
    executions?: RunAMonitor200ApplicationJSONRunExecutions[];
    failures?: RunAMonitor200ApplicationJSONRunFailures[];
    info?: RunAMonitor200ApplicationJSONRunInfo;
    stats?: RunAMonitor200ApplicationJSONRunStats;
}
/**
 * Monitor Run with Errors
 */
export declare class RunAMonitor200ApplicationJSON extends SpeakeasyBase {
    run?: RunAMonitor200ApplicationJSONRun;
}
export declare class RunAMonitorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Monitor Run with Errors
     */
    runAMonitor200ApplicationJSONObject?: RunAMonitor200ApplicationJSON;
}
