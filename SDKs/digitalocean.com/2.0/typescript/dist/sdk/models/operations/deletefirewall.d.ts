import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteFirewallPathParams extends SpeakeasyBase {
    firewallId: string;
}
export declare class DeleteFirewall401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class DeleteFirewallRequest extends SpeakeasyBase {
    pathParams: DeleteFirewallPathParams;
}
export declare class DeleteFirewallResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    deleteFirewall401ApplicationJSONObject?: DeleteFirewall401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
