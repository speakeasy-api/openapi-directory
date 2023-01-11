import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddFirewallDropletsPathParams extends SpeakeasyBase {
    firewallId: string;
}
export declare class AddFirewallDroplets401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class AddFirewallDropletsRequest extends SpeakeasyBase {
    pathParams: AddFirewallDropletsPathParams;
    request?: any;
}
export declare class AddFirewallDropletsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    addFirewallDroplets401ApplicationJSONObject?: AddFirewallDroplets401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
