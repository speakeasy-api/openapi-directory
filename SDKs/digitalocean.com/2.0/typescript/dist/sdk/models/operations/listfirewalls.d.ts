import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListFirewallsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ListFirewalls200ApplicationJsonLinksPages1 extends SpeakeasyBase {
    last?: string;
    next?: string;
}
export declare class ListFirewalls200ApplicationJsonLinksPages2 extends SpeakeasyBase {
    first?: string;
    prev?: string;
}
export declare class ListFirewalls200ApplicationJsonLinks extends SpeakeasyBase {
    pages?: any;
}
/**
 * Information about the response itself.
**/
export declare class ListFirewalls200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
export declare class ListFirewalls200ApplicationJson extends SpeakeasyBase {
    firewalls?: shared.Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItems[];
    links?: ListFirewalls200ApplicationJsonLinks;
    meta: ListFirewalls200ApplicationJsonMeta;
}
export declare class ListFirewalls401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListFirewallsRequest extends SpeakeasyBase {
    queryParams: ListFirewallsQueryParams;
}
export declare class ListFirewallsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listFirewalls200ApplicationJSONObject?: ListFirewalls200ApplicationJson;
    listFirewalls401ApplicationJSONObject?: ListFirewalls401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
