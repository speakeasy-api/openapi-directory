import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddFirewallTagsPathParams extends SpeakeasyBase {
    firewallId: string;
}
export declare class AddFirewallTags401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class AddFirewallTagsRequest extends SpeakeasyBase {
    pathParams: AddFirewallTagsPathParams;
    request?: any;
}
export declare class AddFirewallTagsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    addFirewallTags401ApplicationJSONObject?: AddFirewallTags401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
