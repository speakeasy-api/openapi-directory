import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDropletCpuMetricsQueryParams extends SpeakeasyBase {
    end: string;
    hostId: string;
    start: string;
}
export declare class GetDropletCpuMetrics200ApplicationJsonDataResult extends SpeakeasyBase {
    metric: Record<string, string>;
    values: any[][];
}
export declare enum GetDropletCpuMetrics200ApplicationJsonDataResultTypeEnum {
    Matrix = "matrix"
}
export declare class GetDropletCpuMetrics200ApplicationJsonData extends SpeakeasyBase {
    result: GetDropletCpuMetrics200ApplicationJsonDataResult[];
    resultType: GetDropletCpuMetrics200ApplicationJsonDataResultTypeEnum;
}
export declare enum GetDropletCpuMetrics200ApplicationJsonStatusEnum {
    Success = "success",
    Error = "error"
}
export declare class GetDropletCpuMetrics200ApplicationJson extends SpeakeasyBase {
    data: GetDropletCpuMetrics200ApplicationJsonData;
    status: GetDropletCpuMetrics200ApplicationJsonStatusEnum;
}
export declare class GetDropletCpuMetrics401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetDropletCpuMetricsRequest extends SpeakeasyBase {
    queryParams: GetDropletCpuMetricsQueryParams;
}
export declare class GetDropletCpuMetricsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getDropletCpuMetrics200ApplicationJSONObject?: GetDropletCpuMetrics200ApplicationJson;
    getDropletCpuMetrics401ApplicationJSONObject?: GetDropletCpuMetrics401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
