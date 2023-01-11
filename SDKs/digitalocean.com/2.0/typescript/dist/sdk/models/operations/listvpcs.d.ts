import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListVpcsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ListVpcs200ApplicationJsonLinksPages1 extends SpeakeasyBase {
    last?: string;
    next?: string;
}
export declare class ListVpcs200ApplicationJsonLinksPages2 extends SpeakeasyBase {
    first?: string;
    prev?: string;
}
export declare class ListVpcs200ApplicationJsonLinks extends SpeakeasyBase {
    pages?: any;
}
/**
 * Information about the response itself.
**/
export declare class ListVpcs200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
export declare class ListVpcs200ApplicationJsonVpcs extends SpeakeasyBase {
    createdAt?: Date;
    default?: boolean;
    description?: string;
    id?: string;
    ipRange?: string;
    name?: string;
    region?: string;
    urn?: string;
}
export declare class ListVpcs200ApplicationJson extends SpeakeasyBase {
    links?: ListVpcs200ApplicationJsonLinks;
    meta: ListVpcs200ApplicationJsonMeta;
    vpcs?: ListVpcs200ApplicationJsonVpcs[];
}
export declare class ListVpcs401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListVpcsRequest extends SpeakeasyBase {
    queryParams: ListVpcsQueryParams;
}
export declare class ListVpcsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listVpcs200ApplicationJSONObject?: ListVpcs200ApplicationJson;
    listVpcs401ApplicationJSONObject?: ListVpcs401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
