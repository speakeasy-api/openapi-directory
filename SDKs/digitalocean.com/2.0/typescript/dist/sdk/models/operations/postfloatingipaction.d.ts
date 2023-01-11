import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostFloatingIpActionPathParams extends SpeakeasyBase {
    floatingIp: string;
}
export declare enum PostFloatingIpActionRequestBody1TypeEnum {
    Assign = "assign",
    Unassign = "unassign"
}
export declare class PostFloatingIpActionRequestBody1 extends SpeakeasyBase {
    type: PostFloatingIpActionRequestBody1TypeEnum;
}
export declare enum PostFloatingIpActionRequestBody2TypeEnum {
    Assign = "assign",
    Unassign = "unassign"
}
export declare class PostFloatingIpActionRequestBody2 extends SpeakeasyBase {
    dropletId: number;
    type: PostFloatingIpActionRequestBody2TypeEnum;
}
export declare class PostFloatingIpAction401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class PostFloatingIpActionRequest extends SpeakeasyBase {
    pathParams: PostFloatingIpActionPathParams;
    request?: any;
}
export declare class PostFloatingIpActionResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    postFloatingIpAction201ApplicationJSONAny?: any;
    postFloatingIpAction401ApplicationJSONObject?: PostFloatingIpAction401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
