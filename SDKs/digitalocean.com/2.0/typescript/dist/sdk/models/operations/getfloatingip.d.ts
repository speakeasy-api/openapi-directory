import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFloatingIpPathParams extends SpeakeasyBase {
    floatingIp: string;
}
export declare class GetFloatingIp200ApplicationJson extends SpeakeasyBase {
    floatingIp?: shared.Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItems;
}
export declare class GetFloatingIp401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetFloatingIpRequest extends SpeakeasyBase {
    pathParams: GetFloatingIpPathParams;
}
export declare class GetFloatingIpResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getFloatingIp200ApplicationJSONObject?: GetFloatingIp200ApplicationJson;
    getFloatingIp401ApplicationJSONObject?: GetFloatingIp401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
