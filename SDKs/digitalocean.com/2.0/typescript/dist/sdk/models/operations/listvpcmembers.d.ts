import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListVpcMembersPathParams extends SpeakeasyBase {
    vpcId: string;
}
export declare class ListVpcMembersQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
    resourceType?: string;
}
export declare class ListVpcMembers200ApplicationJsonLinksPages1 extends SpeakeasyBase {
    last?: string;
    next?: string;
}
export declare class ListVpcMembers200ApplicationJsonLinksPages2 extends SpeakeasyBase {
    first?: string;
    prev?: string;
}
export declare class ListVpcMembers200ApplicationJsonLinks extends SpeakeasyBase {
    pages?: any;
}
export declare class ListVpcMembers200ApplicationJsonMembers extends SpeakeasyBase {
    createdAt?: string;
    name?: string;
    urn?: string;
}
/**
 * Information about the response itself.
**/
export declare class ListVpcMembers200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
export declare class ListVpcMembers200ApplicationJson extends SpeakeasyBase {
    links?: ListVpcMembers200ApplicationJsonLinks;
    members?: ListVpcMembers200ApplicationJsonMembers[];
    meta: ListVpcMembers200ApplicationJsonMeta;
}
export declare class ListVpcMembers401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListVpcMembersRequest extends SpeakeasyBase {
    pathParams: ListVpcMembersPathParams;
    queryParams: ListVpcMembersQueryParams;
}
export declare class ListVpcMembersResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listVpcMembers200ApplicationJSONObject?: ListVpcMembers200ApplicationJson;
    listVpcMembers401ApplicationJSONObject?: ListVpcMembers401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
