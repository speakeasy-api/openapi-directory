import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveLoadBalancerForwardingRulesPathParams extends SpeakeasyBase {
    lbId: string;
}
export declare class RemoveLoadBalancerForwardingRules401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class RemoveLoadBalancerForwardingRulesRequest extends SpeakeasyBase {
    pathParams: RemoveLoadBalancerForwardingRulesPathParams;
    request: any;
}
export declare class RemoveLoadBalancerForwardingRulesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    removeLoadBalancerForwardingRules401ApplicationJSONObject?: RemoveLoadBalancerForwardingRules401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
