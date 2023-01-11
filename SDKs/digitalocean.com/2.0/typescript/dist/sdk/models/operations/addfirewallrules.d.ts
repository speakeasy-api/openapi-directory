import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddFirewallRulesPathParams extends SpeakeasyBase {
    firewallId: string;
}
export declare enum AddFirewallRulesRequestBodyInboundRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp"
}
export declare class AddFirewallRulesRequestBodyInboundRulesSources extends SpeakeasyBase {
    addresses?: string[];
    dropletIds?: number[];
    kubernetesIds?: string[];
    loadBalancerUids?: string[];
    tags?: Record<string, any>;
}
export declare class AddFirewallRulesRequestBodyInboundRules extends SpeakeasyBase {
    ports: string;
    protocol: AddFirewallRulesRequestBodyInboundRulesProtocolEnum;
    sources: AddFirewallRulesRequestBodyInboundRulesSources;
}
export declare enum AddFirewallRulesRequestBodyOutboundRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp"
}
export declare class AddFirewallRulesRequestBodyOutboundRules extends SpeakeasyBase {
    destinations: shared.Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0;
    ports: string;
    protocol: AddFirewallRulesRequestBodyOutboundRulesProtocolEnum;
}
export declare class AddFirewallRulesRequestBody extends SpeakeasyBase {
    inboundRules?: AddFirewallRulesRequestBodyInboundRules[];
    outboundRules?: AddFirewallRulesRequestBodyOutboundRules[];
}
export declare class AddFirewallRules401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class AddFirewallRulesRequest extends SpeakeasyBase {
    pathParams: AddFirewallRulesPathParams;
    request?: AddFirewallRulesRequestBody;
}
export declare class AddFirewallRulesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    addFirewallRules401ApplicationJSONObject?: AddFirewallRules401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
