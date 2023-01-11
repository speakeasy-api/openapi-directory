import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddLoadBalancerForwardingRulesPathParams extends SpeakeasyBase {
    lbId: string;
}
export declare class AddLoadBalancerForwardingRules401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class AddLoadBalancerForwardingRulesRequest extends SpeakeasyBase {
    pathParams: AddLoadBalancerForwardingRulesPathParams;
    request: any;
}
export declare class AddLoadBalancerForwardingRulesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    addLoadBalancerForwardingRules401ApplicationJSONObject?: AddLoadBalancerForwardingRules401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
