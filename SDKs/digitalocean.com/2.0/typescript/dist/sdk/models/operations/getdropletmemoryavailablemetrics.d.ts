import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDropletMemoryAvailableMetricsQueryParams extends SpeakeasyBase {
    end: string;
    hostId: string;
    start: string;
}
export declare class GetDropletMemoryAvailableMetrics200ApplicationJsonDataResult extends SpeakeasyBase {
    metric: Record<string, string>;
    values: any[][];
}
export declare enum GetDropletMemoryAvailableMetrics200ApplicationJsonDataResultTypeEnum {
    Matrix = "matrix"
}
export declare class GetDropletMemoryAvailableMetrics200ApplicationJsonData extends SpeakeasyBase {
    result: GetDropletMemoryAvailableMetrics200ApplicationJsonDataResult[];
    resultType: GetDropletMemoryAvailableMetrics200ApplicationJsonDataResultTypeEnum;
}
export declare enum GetDropletMemoryAvailableMetrics200ApplicationJsonStatusEnum {
    Success = "success",
    Error = "error"
}
export declare class GetDropletMemoryAvailableMetrics200ApplicationJson extends SpeakeasyBase {
    data: GetDropletMemoryAvailableMetrics200ApplicationJsonData;
    status: GetDropletMemoryAvailableMetrics200ApplicationJsonStatusEnum;
}
export declare class GetDropletMemoryAvailableMetrics401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetDropletMemoryAvailableMetricsRequest extends SpeakeasyBase {
    queryParams: GetDropletMemoryAvailableMetricsQueryParams;
}
export declare class GetDropletMemoryAvailableMetricsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getDropletMemoryAvailableMetrics200ApplicationJSONObject?: GetDropletMemoryAvailableMetrics200ApplicationJson;
    getDropletMemoryAvailableMetrics401ApplicationJSONObject?: GetDropletMemoryAvailableMetrics401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
