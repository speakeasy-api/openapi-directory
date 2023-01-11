import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteLoadBalancerPathParams extends SpeakeasyBase {
    lbId: string;
}
export declare class DeleteLoadBalancer401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class DeleteLoadBalancerRequest extends SpeakeasyBase {
    pathParams: DeleteLoadBalancerPathParams;
}
export declare class DeleteLoadBalancerResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    deleteLoadBalancer401ApplicationJSONObject?: DeleteLoadBalancer401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
