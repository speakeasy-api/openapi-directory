import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDropletMemoryFreeMetricsQueryParams extends SpeakeasyBase {
    end: string;
    hostId: string;
    start: string;
}
export declare class GetDropletMemoryFreeMetrics200ApplicationJsonDataResult extends SpeakeasyBase {
    metric: Record<string, string>;
    values: any[][];
}
export declare enum GetDropletMemoryFreeMetrics200ApplicationJsonDataResultTypeEnum {
    Matrix = "matrix"
}
export declare class GetDropletMemoryFreeMetrics200ApplicationJsonData extends SpeakeasyBase {
    result: GetDropletMemoryFreeMetrics200ApplicationJsonDataResult[];
    resultType: GetDropletMemoryFreeMetrics200ApplicationJsonDataResultTypeEnum;
}
export declare enum GetDropletMemoryFreeMetrics200ApplicationJsonStatusEnum {
    Success = "success",
    Error = "error"
}
export declare class GetDropletMemoryFreeMetrics200ApplicationJson extends SpeakeasyBase {
    data: GetDropletMemoryFreeMetrics200ApplicationJsonData;
    status: GetDropletMemoryFreeMetrics200ApplicationJsonStatusEnum;
}
export declare class GetDropletMemoryFreeMetrics401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetDropletMemoryFreeMetricsRequest extends SpeakeasyBase {
    queryParams: GetDropletMemoryFreeMetricsQueryParams;
}
export declare class GetDropletMemoryFreeMetricsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getDropletMemoryFreeMetrics200ApplicationJSONObject?: GetDropletMemoryFreeMetrics200ApplicationJson;
    getDropletMemoryFreeMetrics401ApplicationJSONObject?: GetDropletMemoryFreeMetrics401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
