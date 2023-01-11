import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDropletFilesystemFreeMetricsQueryParams extends SpeakeasyBase {
    end: string;
    hostId: string;
    start: string;
}
export declare class GetDropletFilesystemFreeMetrics200ApplicationJsonDataResult extends SpeakeasyBase {
    metric: Record<string, string>;
    values: any[][];
}
export declare enum GetDropletFilesystemFreeMetrics200ApplicationJsonDataResultTypeEnum {
    Matrix = "matrix"
}
export declare class GetDropletFilesystemFreeMetrics200ApplicationJsonData extends SpeakeasyBase {
    result: GetDropletFilesystemFreeMetrics200ApplicationJsonDataResult[];
    resultType: GetDropletFilesystemFreeMetrics200ApplicationJsonDataResultTypeEnum;
}
export declare enum GetDropletFilesystemFreeMetrics200ApplicationJsonStatusEnum {
    Success = "success",
    Error = "error"
}
export declare class GetDropletFilesystemFreeMetrics200ApplicationJson extends SpeakeasyBase {
    data: GetDropletFilesystemFreeMetrics200ApplicationJsonData;
    status: GetDropletFilesystemFreeMetrics200ApplicationJsonStatusEnum;
}
export declare class GetDropletFilesystemFreeMetrics401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetDropletFilesystemFreeMetricsRequest extends SpeakeasyBase {
    queryParams: GetDropletFilesystemFreeMetricsQueryParams;
}
export declare class GetDropletFilesystemFreeMetricsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getDropletFilesystemFreeMetrics200ApplicationJSONObject?: GetDropletFilesystemFreeMetrics200ApplicationJson;
    getDropletFilesystemFreeMetrics401ApplicationJSONObject?: GetDropletFilesystemFreeMetrics401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
