import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDropletLoad1MetricsQueryParams extends SpeakeasyBase {
    end: string;
    hostId: string;
    start: string;
}
export declare class GetDropletLoad1Metrics200ApplicationJsonDataResult extends SpeakeasyBase {
    metric: Record<string, string>;
    values: any[][];
}
export declare enum GetDropletLoad1Metrics200ApplicationJsonDataResultTypeEnum {
    Matrix = "matrix"
}
export declare class GetDropletLoad1Metrics200ApplicationJsonData extends SpeakeasyBase {
    result: GetDropletLoad1Metrics200ApplicationJsonDataResult[];
    resultType: GetDropletLoad1Metrics200ApplicationJsonDataResultTypeEnum;
}
export declare enum GetDropletLoad1Metrics200ApplicationJsonStatusEnum {
    Success = "success",
    Error = "error"
}
export declare class GetDropletLoad1Metrics200ApplicationJson extends SpeakeasyBase {
    data: GetDropletLoad1Metrics200ApplicationJsonData;
    status: GetDropletLoad1Metrics200ApplicationJsonStatusEnum;
}
export declare class GetDropletLoad1Metrics401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetDropletLoad1MetricsRequest extends SpeakeasyBase {
    queryParams: GetDropletLoad1MetricsQueryParams;
}
export declare class GetDropletLoad1MetricsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getDropletLoad1Metrics200ApplicationJSONObject?: GetDropletLoad1Metrics200ApplicationJson;
    getDropletLoad1Metrics401ApplicationJSONObject?: GetDropletLoad1Metrics401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
