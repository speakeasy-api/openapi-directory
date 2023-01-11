import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDropletMemoryCachedMetricsQueryParams extends SpeakeasyBase {
    end: string;
    hostId: string;
    start: string;
}
export declare class GetDropletMemoryCachedMetrics200ApplicationJsonDataResult extends SpeakeasyBase {
    metric: Record<string, string>;
    values: any[][];
}
export declare enum GetDropletMemoryCachedMetrics200ApplicationJsonDataResultTypeEnum {
    Matrix = "matrix"
}
export declare class GetDropletMemoryCachedMetrics200ApplicationJsonData extends SpeakeasyBase {
    result: GetDropletMemoryCachedMetrics200ApplicationJsonDataResult[];
    resultType: GetDropletMemoryCachedMetrics200ApplicationJsonDataResultTypeEnum;
}
export declare enum GetDropletMemoryCachedMetrics200ApplicationJsonStatusEnum {
    Success = "success",
    Error = "error"
}
export declare class GetDropletMemoryCachedMetrics200ApplicationJson extends SpeakeasyBase {
    data: GetDropletMemoryCachedMetrics200ApplicationJsonData;
    status: GetDropletMemoryCachedMetrics200ApplicationJsonStatusEnum;
}
export declare class GetDropletMemoryCachedMetrics401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetDropletMemoryCachedMetricsRequest extends SpeakeasyBase {
    queryParams: GetDropletMemoryCachedMetricsQueryParams;
}
export declare class GetDropletMemoryCachedMetricsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getDropletMemoryCachedMetrics200ApplicationJSONObject?: GetDropletMemoryCachedMetrics200ApplicationJson;
    getDropletMemoryCachedMetrics401ApplicationJSONObject?: GetDropletMemoryCachedMetrics401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
