import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListNodePoolsPathParams extends SpeakeasyBase {
    clusterId: string;
}
export declare class ListNodePools401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListNodePoolsRequest extends SpeakeasyBase {
    pathParams: ListNodePoolsPathParams;
}
export declare class ListNodePoolsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listNodePools200ApplicationJSONAny?: any;
    listNodePools401ApplicationJSONObject?: ListNodePools401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
