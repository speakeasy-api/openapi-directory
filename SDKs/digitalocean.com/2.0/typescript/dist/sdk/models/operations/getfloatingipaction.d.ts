import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFloatingIpActionPathParams extends SpeakeasyBase {
    actionId: number;
    floatingIp: string;
}
export declare class GetFloatingIpAction401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetFloatingIpActionRequest extends SpeakeasyBase {
    pathParams: GetFloatingIpActionPathParams;
}
export declare class GetFloatingIpActionResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getFloatingIpAction200ApplicationJSONAny?: any;
    getFloatingIpAction401ApplicationJSONObject?: GetFloatingIpAction401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
