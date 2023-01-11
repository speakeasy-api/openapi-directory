import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDropletLoad5MetricsQueryParams extends SpeakeasyBase {
    end: string;
    hostId: string;
    start: string;
}
export declare class GetDropletLoad5Metrics200ApplicationJsonDataResult extends SpeakeasyBase {
    metric: Record<string, string>;
    values: any[][];
}
export declare enum GetDropletLoad5Metrics200ApplicationJsonDataResultTypeEnum {
    Matrix = "matrix"
}
export declare class GetDropletLoad5Metrics200ApplicationJsonData extends SpeakeasyBase {
    result: GetDropletLoad5Metrics200ApplicationJsonDataResult[];
    resultType: GetDropletLoad5Metrics200ApplicationJsonDataResultTypeEnum;
}
export declare enum GetDropletLoad5Metrics200ApplicationJsonStatusEnum {
    Success = "success",
    Error = "error"
}
export declare class GetDropletLoad5Metrics200ApplicationJson extends SpeakeasyBase {
    data: GetDropletLoad5Metrics200ApplicationJsonData;
    status: GetDropletLoad5Metrics200ApplicationJsonStatusEnum;
}
export declare class GetDropletLoad5Metrics401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetDropletLoad5MetricsRequest extends SpeakeasyBase {
    queryParams: GetDropletLoad5MetricsQueryParams;
}
export declare class GetDropletLoad5MetricsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getDropletLoad5Metrics200ApplicationJSONObject?: GetDropletLoad5Metrics200ApplicationJson;
    getDropletLoad5Metrics401ApplicationJSONObject?: GetDropletLoad5Metrics401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
