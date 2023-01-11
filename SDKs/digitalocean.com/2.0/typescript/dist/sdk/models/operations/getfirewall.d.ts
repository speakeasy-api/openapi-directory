import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFirewallPathParams extends SpeakeasyBase {
    firewallId: string;
}
export declare class GetFirewall401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetFirewallRequest extends SpeakeasyBase {
    pathParams: GetFirewallPathParams;
}
export declare class GetFirewallResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getFirewall200ApplicationJSONAny?: any;
    getFirewall401ApplicationJSONObject?: GetFirewall401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
