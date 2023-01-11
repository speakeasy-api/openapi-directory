import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDropletFirewallsPathParams extends SpeakeasyBase {
    dropletId: number;
}
export declare class ListDropletFirewallsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare enum ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp"
}
export declare class ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesSources extends SpeakeasyBase {
    addresses?: string[];
    dropletIds?: number[];
    kubernetesIds?: string[];
    loadBalancerUids?: string[];
    tags?: Record<string, any>;
}
export declare class ListDropletFirewalls200ApplicationJsonFirewallsInboundRules extends SpeakeasyBase {
    ports: string;
    protocol: ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesProtocolEnum;
    sources: ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesSources;
}
export declare enum ListDropletFirewalls200ApplicationJsonFirewallsOutboundRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp"
}
export declare class ListDropletFirewalls200ApplicationJsonFirewallsOutboundRules extends SpeakeasyBase {
    destinations: shared.Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0;
    ports: string;
    protocol: ListDropletFirewalls200ApplicationJsonFirewallsOutboundRulesProtocolEnum;
}
export declare class ListDropletFirewalls200ApplicationJsonFirewallsPendingChanges extends SpeakeasyBase {
    dropletId?: number;
    removing?: boolean;
    status?: string;
}
export declare enum ListDropletFirewalls200ApplicationJsonFirewallsStatusEnum {
    Waiting = "waiting",
    Succeeded = "succeeded",
    Failed = "failed"
}
export declare class ListDropletFirewalls200ApplicationJsonFirewalls extends SpeakeasyBase {
    createdAt?: Date;
    dropletIds?: number[];
    id?: string;
    inboundRules?: ListDropletFirewalls200ApplicationJsonFirewallsInboundRules[];
    name?: string;
    outboundRules?: ListDropletFirewalls200ApplicationJsonFirewallsOutboundRules[];
    pendingChanges?: ListDropletFirewalls200ApplicationJsonFirewallsPendingChanges[];
    status?: ListDropletFirewalls200ApplicationJsonFirewallsStatusEnum;
    tags?: Record<string, any>;
}
export declare class ListDropletFirewalls200ApplicationJsonLinksPages1 extends SpeakeasyBase {
    last?: string;
    next?: string;
}
export declare class ListDropletFirewalls200ApplicationJsonLinksPages2 extends SpeakeasyBase {
    first?: string;
    prev?: string;
}
export declare class ListDropletFirewalls200ApplicationJsonLinks extends SpeakeasyBase {
    pages?: any;
}
/**
 * Information about the response itself.
**/
export declare class ListDropletFirewalls200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
export declare class ListDropletFirewalls200ApplicationJson extends SpeakeasyBase {
    firewalls?: ListDropletFirewalls200ApplicationJsonFirewalls[];
    links?: ListDropletFirewalls200ApplicationJsonLinks;
    meta: ListDropletFirewalls200ApplicationJsonMeta;
}
export declare class ListDropletFirewalls401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListDropletFirewallsRequest extends SpeakeasyBase {
    pathParams: ListDropletFirewallsPathParams;
    queryParams: ListDropletFirewallsQueryParams;
}
export declare class ListDropletFirewallsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listDropletFirewalls200ApplicationJSONObject?: ListDropletFirewalls200ApplicationJson;
    listDropletFirewalls401ApplicationJSONObject?: ListDropletFirewalls401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
