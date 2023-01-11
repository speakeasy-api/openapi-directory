import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDropletBandwidthMetricsDirectionEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}
export declare enum GetDropletBandwidthMetricsInterfaceEnum {
    Private = "private",
    Public = "public"
}
export declare class GetDropletBandwidthMetricsQueryParams extends SpeakeasyBase {
    direction: GetDropletBandwidthMetricsDirectionEnum;
    end: string;
    hostId: string;
    interface: GetDropletBandwidthMetricsInterfaceEnum;
    start: string;
}
export declare class GetDropletBandwidthMetrics200ApplicationJsonDataResult extends SpeakeasyBase {
    metric: Record<string, string>;
    values: any[][];
}
export declare enum GetDropletBandwidthMetrics200ApplicationJsonDataResultTypeEnum {
    Matrix = "matrix"
}
export declare class GetDropletBandwidthMetrics200ApplicationJsonData extends SpeakeasyBase {
    result: GetDropletBandwidthMetrics200ApplicationJsonDataResult[];
    resultType: GetDropletBandwidthMetrics200ApplicationJsonDataResultTypeEnum;
}
export declare enum GetDropletBandwidthMetrics200ApplicationJsonStatusEnum {
    Success = "success",
    Error = "error"
}
export declare class GetDropletBandwidthMetrics200ApplicationJson extends SpeakeasyBase {
    data: GetDropletBandwidthMetrics200ApplicationJsonData;
    status: GetDropletBandwidthMetrics200ApplicationJsonStatusEnum;
}
export declare class GetDropletBandwidthMetrics401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetDropletBandwidthMetricsRequest extends SpeakeasyBase {
    queryParams: GetDropletBandwidthMetricsQueryParams;
}
export declare class GetDropletBandwidthMetricsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getDropletBandwidthMetrics200ApplicationJSONObject?: GetDropletBandwidthMetrics200ApplicationJson;
    getDropletBandwidthMetrics401ApplicationJSONObject?: GetDropletBandwidthMetrics401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
