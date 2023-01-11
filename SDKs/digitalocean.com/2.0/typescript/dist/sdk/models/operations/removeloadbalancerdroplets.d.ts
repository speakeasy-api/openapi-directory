import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveLoadBalancerDropletsPathParams extends SpeakeasyBase {
    lbId: string;
}
export declare class RemoveLoadBalancerDroplets401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class RemoveLoadBalancerDropletsRequest extends SpeakeasyBase {
    pathParams: RemoveLoadBalancerDropletsPathParams;
    request: shared.Onev21loadBalancersPostRequestBodyContentApplication1jsonSchemaOneOf0AllOf0;
}
export declare class RemoveLoadBalancerDropletsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    removeLoadBalancerDroplets401ApplicationJSONObject?: RemoveLoadBalancerDroplets401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
