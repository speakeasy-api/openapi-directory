import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
/**
 * The region that the floating IP is reserved to. When you query a floating IP, the entire region object will be returned.
**/
export declare class ListFloatingIps200ApplicationJsonFloatingIpsRegion extends SpeakeasyBase {
    available: boolean;
    features: any;
    name: string;
    sizes: any;
    slug: string;
}
export declare class ListFloatingIps200ApplicationJsonFloatingIps extends SpeakeasyBase {
    droplet?: any;
    ip?: string;
    locked?: boolean;
    region?: ListFloatingIps200ApplicationJsonFloatingIpsRegion;
}
export declare class ListFloatingIps200ApplicationJsonLinksPages1 extends SpeakeasyBase {
    last?: string;
    next?: string;
}
export declare class ListFloatingIps200ApplicationJsonLinksPages2 extends SpeakeasyBase {
    first?: string;
    prev?: string;
}
export declare class ListFloatingIps200ApplicationJsonLinks extends SpeakeasyBase {
    pages?: any;
}
/**
 * Information about the response itself.
**/
export declare class ListFloatingIps200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
export declare class ListFloatingIps200ApplicationJson extends SpeakeasyBase {
    floatingIps?: ListFloatingIps200ApplicationJsonFloatingIps[];
    links?: ListFloatingIps200ApplicationJsonLinks;
    meta: ListFloatingIps200ApplicationJsonMeta;
}
export declare class ListFloatingIps401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListFloatingIpsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listFloatingIps200ApplicationJSONObject?: ListFloatingIps200ApplicationJson;
    listFloatingIps401ApplicationJSONObject?: ListFloatingIps401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
