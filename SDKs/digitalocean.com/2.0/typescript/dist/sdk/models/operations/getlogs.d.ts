import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLogsPathParams extends SpeakeasyBase {
    appId: string;
    componentName: string;
    deploymentId: string;
}
export declare class GetLogsQueryParams extends SpeakeasyBase {
    follow?: boolean;
    podConnectionTimeout?: string;
    type: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetParameters0Enum;
}
export declare class GetLogs200ApplicationJson extends SpeakeasyBase {
    historicUrls?: string[];
    liveUrl?: string;
}
export declare class GetLogs401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetLogsRequest extends SpeakeasyBase {
    pathParams: GetLogsPathParams;
    queryParams: GetLogsQueryParams;
}
export declare class GetLogsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getLogs200ApplicationJSONObject?: GetLogs200ApplicationJson;
    getLogs401ApplicationJSONObject?: GetLogs401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
