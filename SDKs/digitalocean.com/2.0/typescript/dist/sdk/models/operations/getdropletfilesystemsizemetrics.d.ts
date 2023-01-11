import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDropletFilesystemSizeMetricsQueryParams extends SpeakeasyBase {
    end: string;
    hostId: string;
    start: string;
}
export declare class GetDropletFilesystemSizeMetrics200ApplicationJsonDataResult extends SpeakeasyBase {
    metric: Record<string, string>;
    values: any[][];
}
export declare enum GetDropletFilesystemSizeMetrics200ApplicationJsonDataResultTypeEnum {
    Matrix = "matrix"
}
export declare class GetDropletFilesystemSizeMetrics200ApplicationJsonData extends SpeakeasyBase {
    result: GetDropletFilesystemSizeMetrics200ApplicationJsonDataResult[];
    resultType: GetDropletFilesystemSizeMetrics200ApplicationJsonDataResultTypeEnum;
}
export declare enum GetDropletFilesystemSizeMetrics200ApplicationJsonStatusEnum {
    Success = "success",
    Error = "error"
}
export declare class GetDropletFilesystemSizeMetrics200ApplicationJson extends SpeakeasyBase {
    data: GetDropletFilesystemSizeMetrics200ApplicationJsonData;
    status: GetDropletFilesystemSizeMetrics200ApplicationJsonStatusEnum;
}
export declare class GetDropletFilesystemSizeMetrics401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetDropletFilesystemSizeMetricsRequest extends SpeakeasyBase {
    queryParams: GetDropletFilesystemSizeMetricsQueryParams;
}
export declare class GetDropletFilesystemSizeMetricsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getDropletFilesystemSizeMetrics200ApplicationJSONObject?: GetDropletFilesystemSizeMetrics200ApplicationJson;
    getDropletFilesystemSizeMetrics401ApplicationJSONObject?: GetDropletFilesystemSizeMetrics401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
