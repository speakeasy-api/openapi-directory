import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListCdnEndpointsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ListCdnEndpoints200ApplicationJsonEndpoints extends SpeakeasyBase {
    certificateId?: string;
    createdAt?: Date;
    customDomain?: string;
    endpoint?: string;
    id?: string;
    origin: string;
    ttl?: number;
}
export declare class ListCdnEndpoints200ApplicationJsonLinksPages1 extends SpeakeasyBase {
    last?: string;
    next?: string;
}
export declare class ListCdnEndpoints200ApplicationJsonLinksPages2 extends SpeakeasyBase {
    first?: string;
    prev?: string;
}
export declare class ListCdnEndpoints200ApplicationJsonLinks extends SpeakeasyBase {
    pages?: any;
}
/**
 * Information about the response itself.
**/
export declare class ListCdnEndpoints200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
export declare class ListCdnEndpoints200ApplicationJson extends SpeakeasyBase {
    endpoints?: ListCdnEndpoints200ApplicationJsonEndpoints[];
    links?: ListCdnEndpoints200ApplicationJsonLinks;
    meta: ListCdnEndpoints200ApplicationJsonMeta;
}
export declare class ListCdnEndpoints401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListCdnEndpointsRequest extends SpeakeasyBase {
    queryParams: ListCdnEndpointsQueryParams;
}
export declare class ListCdnEndpointsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listCdnEndpoints200ApplicationJSONObject?: ListCdnEndpoints200ApplicationJson;
    listCdnEndpoints401ApplicationJSONObject?: ListCdnEndpoints401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
