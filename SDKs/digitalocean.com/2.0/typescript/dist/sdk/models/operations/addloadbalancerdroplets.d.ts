import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddLoadBalancerDropletsPathParams extends SpeakeasyBase {
    lbId: string;
}
export declare class AddLoadBalancerDroplets401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class AddLoadBalancerDropletsRequest extends SpeakeasyBase {
    pathParams: AddLoadBalancerDropletsPathParams;
    request: shared.Onev21loadBalancersPostRequestBodyContentApplication1jsonSchemaOneOf0AllOf0;
}
export declare class AddLoadBalancerDropletsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    addLoadBalancerDroplets401ApplicationJSONObject?: AddLoadBalancerDroplets401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
