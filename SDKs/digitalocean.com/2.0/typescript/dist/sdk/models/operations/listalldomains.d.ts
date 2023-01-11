import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAllDomains200ApplicationJsonDomainsOutput extends SpeakeasyBase {
    name?: string;
    ttl?: number;
    zoneFile?: string;
}
export declare class ListAllDomains200ApplicationJsonLinksPages1 extends SpeakeasyBase {
    last?: string;
    next?: string;
}
export declare class ListAllDomains200ApplicationJsonLinksPages2 extends SpeakeasyBase {
    first?: string;
    prev?: string;
}
export declare class ListAllDomains200ApplicationJsonLinks extends SpeakeasyBase {
    pages?: any;
}
/**
 * Information about the response itself.
**/
export declare class ListAllDomains200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
export declare class ListAllDomains200ApplicationJsonOutput extends SpeakeasyBase {
    domains: ListAllDomains200ApplicationJsonDomainsOutput[];
    links?: ListAllDomains200ApplicationJsonLinks;
    meta: ListAllDomains200ApplicationJsonMeta;
}
export declare class ListAllDomains401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListAllDomainsResponseOutput extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listAllDomains200ApplicationJSONObject?: ListAllDomains200ApplicationJsonOutput;
    listAllDomains401ApplicationJSONObject?: ListAllDomains401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
