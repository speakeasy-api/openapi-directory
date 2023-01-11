import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAllDomainRecordsPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class ListAllDomainRecordsQueryParams extends SpeakeasyBase {
    name?: string;
    type?: shared.Onev21domains1Percent7BdomainNamePercent7DGetParameters0Enum;
}
export declare class ListAllDomainRecords200ApplicationJsonDomainRecords extends SpeakeasyBase {
    data?: string;
    flags?: number;
    id?: number;
    name?: string;
    port?: number;
    priority?: number;
    tag?: string;
    ttl?: number;
    type: string;
    weight?: number;
}
export declare class ListAllDomainRecords200ApplicationJsonLinksPages1 extends SpeakeasyBase {
    last?: string;
    next?: string;
}
export declare class ListAllDomainRecords200ApplicationJsonLinksPages2 extends SpeakeasyBase {
    first?: string;
    prev?: string;
}
export declare class ListAllDomainRecords200ApplicationJsonLinks extends SpeakeasyBase {
    pages?: any;
}
/**
 * Information about the response itself.
**/
export declare class ListAllDomainRecords200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
export declare class ListAllDomainRecords200ApplicationJson extends SpeakeasyBase {
    domainRecords?: ListAllDomainRecords200ApplicationJsonDomainRecords[];
    links?: ListAllDomainRecords200ApplicationJsonLinks;
    meta: ListAllDomainRecords200ApplicationJsonMeta;
}
export declare class ListAllDomainRecords401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListAllDomainRecordsRequest extends SpeakeasyBase {
    pathParams: ListAllDomainRecordsPathParams;
    queryParams: ListAllDomainRecordsQueryParams;
}
export declare class ListAllDomainRecordsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listAllDomainRecords200ApplicationJSONObject?: ListAllDomainRecords200ApplicationJson;
    listAllDomainRecords401ApplicationJSONObject?: ListAllDomainRecords401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
