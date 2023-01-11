import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDropletMemoryTotalMetricsQueryParams extends SpeakeasyBase {
    end: string;
    hostId: string;
    start: string;
}
export declare class GetDropletMemoryTotalMetrics200ApplicationJsonDataResult extends SpeakeasyBase {
    metric: Record<string, string>;
    values: any[][];
}
export declare enum GetDropletMemoryTotalMetrics200ApplicationJsonDataResultTypeEnum {
    Matrix = "matrix"
}
export declare class GetDropletMemoryTotalMetrics200ApplicationJsonData extends SpeakeasyBase {
    result: GetDropletMemoryTotalMetrics200ApplicationJsonDataResult[];
    resultType: GetDropletMemoryTotalMetrics200ApplicationJsonDataResultTypeEnum;
}
export declare enum GetDropletMemoryTotalMetrics200ApplicationJsonStatusEnum {
    Success = "success",
    Error = "error"
}
export declare class GetDropletMemoryTotalMetrics200ApplicationJson extends SpeakeasyBase {
    data: GetDropletMemoryTotalMetrics200ApplicationJsonData;
    status: GetDropletMemoryTotalMetrics200ApplicationJsonStatusEnum;
}
export declare class GetDropletMemoryTotalMetrics401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetDropletMemoryTotalMetricsRequest extends SpeakeasyBase {
    queryParams: GetDropletMemoryTotalMetricsQueryParams;
}
export declare class GetDropletMemoryTotalMetricsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getDropletMemoryTotalMetrics200ApplicationJSONObject?: GetDropletMemoryTotalMetrics200ApplicationJson;
    getDropletMemoryTotalMetrics401ApplicationJSONObject?: GetDropletMemoryTotalMetrics401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
