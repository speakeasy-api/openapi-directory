import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLoadBalancerPathParams extends SpeakeasyBase {
    lbId: string;
}
export declare class GetLoadBalancer401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetLoadBalancerRequest extends SpeakeasyBase {
    pathParams: GetLoadBalancerPathParams;
}
export declare class GetLoadBalancerResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getLoadBalancer200ApplicationJSONAny?: any;
    getLoadBalancer401ApplicationJSONObject?: GetLoadBalancer401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
