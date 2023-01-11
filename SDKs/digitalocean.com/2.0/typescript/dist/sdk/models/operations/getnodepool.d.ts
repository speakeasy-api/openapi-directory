import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNodePoolPathParams extends SpeakeasyBase {
    clusterId: string;
    nodePoolId: string;
}
export declare class GetNodePool401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetNodePoolRequest extends SpeakeasyBase {
    pathParams: GetNodePoolPathParams;
}
export declare class GetNodePoolResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getNodePool200ApplicationJSONAny?: any;
    getNodePool401ApplicationJSONObject?: GetNodePool401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
