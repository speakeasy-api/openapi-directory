import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDropletLoad15MetricsQueryParams extends SpeakeasyBase {
    end: string;
    hostId: string;
    start: string;
}
export declare class GetDropletLoad15Metrics200ApplicationJsonDataResult extends SpeakeasyBase {
    metric: Record<string, string>;
    values: any[][];
}
export declare enum GetDropletLoad15Metrics200ApplicationJsonDataResultTypeEnum {
    Matrix = "matrix"
}
export declare class GetDropletLoad15Metrics200ApplicationJsonData extends SpeakeasyBase {
    result: GetDropletLoad15Metrics200ApplicationJsonDataResult[];
    resultType: GetDropletLoad15Metrics200ApplicationJsonDataResultTypeEnum;
}
export declare enum GetDropletLoad15Metrics200ApplicationJsonStatusEnum {
    Success = "success",
    Error = "error"
}
export declare class GetDropletLoad15Metrics200ApplicationJson extends SpeakeasyBase {
    data: GetDropletLoad15Metrics200ApplicationJsonData;
    status: GetDropletLoad15Metrics200ApplicationJsonStatusEnum;
}
export declare class GetDropletLoad15Metrics401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetDropletLoad15MetricsRequest extends SpeakeasyBase {
    queryParams: GetDropletLoad15MetricsQueryParams;
}
export declare class GetDropletLoad15MetricsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getDropletLoad15Metrics200ApplicationJSONObject?: GetDropletLoad15Metrics200ApplicationJson;
    getDropletLoad15Metrics401ApplicationJSONObject?: GetDropletLoad15Metrics401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
