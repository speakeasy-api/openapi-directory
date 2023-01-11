import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteFirewallDropletsPathParams extends SpeakeasyBase {
    firewallId: string;
}
export declare class DeleteFirewallDroplets401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class DeleteFirewallDropletsRequest extends SpeakeasyBase {
    pathParams: DeleteFirewallDropletsPathParams;
    request?: any;
}
export declare class DeleteFirewallDropletsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    deleteFirewallDroplets401ApplicationJSONObject?: DeleteFirewallDroplets401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
