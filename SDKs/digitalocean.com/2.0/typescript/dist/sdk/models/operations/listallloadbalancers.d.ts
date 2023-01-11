import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAllLoadBalancersQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ListAllLoadBalancers200ApplicationJsonLinksPages1 extends SpeakeasyBase {
    last?: string;
    next?: string;
}
export declare class ListAllLoadBalancers200ApplicationJsonLinksPages2 extends SpeakeasyBase {
    first?: string;
    prev?: string;
}
export declare class ListAllLoadBalancers200ApplicationJsonLinks extends SpeakeasyBase {
    pages?: any;
}
/**
 * Information about the response itself.
**/
export declare class ListAllLoadBalancers200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
export declare class ListAllLoadBalancers200ApplicationJson extends SpeakeasyBase {
    links?: ListAllLoadBalancers200ApplicationJsonLinks;
    loadBalancers?: shared.Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancer[];
    meta: ListAllLoadBalancers200ApplicationJsonMeta;
}
export declare class ListAllLoadBalancers401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListAllLoadBalancersRequest extends SpeakeasyBase {
    queryParams: ListAllLoadBalancersQueryParams;
}
export declare class ListAllLoadBalancersResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listAllLoadBalancers200ApplicationJSONObject?: ListAllLoadBalancers200ApplicationJson;
    listAllLoadBalancers401ApplicationJSONObject?: ListAllLoadBalancers401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
