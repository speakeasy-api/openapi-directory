import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteFirewallTagsPathParams extends SpeakeasyBase {
    firewallId: string;
}
export declare class DeleteFirewallTags401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class DeleteFirewallTagsRequest extends SpeakeasyBase {
    pathParams: DeleteFirewallTagsPathParams;
    request?: any;
}
export declare class DeleteFirewallTagsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    deleteFirewallTags401ApplicationJSONObject?: DeleteFirewallTags401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
