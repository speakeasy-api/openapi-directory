import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateFirewallRequestBodyInboundRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp"
}
export declare class CreateFirewallRequestBodyInboundRulesSources extends SpeakeasyBase {
    addresses?: string[];
    dropletIds?: number[];
    kubernetesIds?: string[];
    loadBalancerUids?: string[];
    tags?: Record<string, any>;
}
export declare class CreateFirewallRequestBodyInboundRules extends SpeakeasyBase {
    ports: string;
    protocol: CreateFirewallRequestBodyInboundRulesProtocolEnum;
    sources: CreateFirewallRequestBodyInboundRulesSources;
}
export declare enum CreateFirewallRequestBodyOutboundRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp"
}
export declare class CreateFirewallRequestBodyOutboundRules extends SpeakeasyBase {
    destinations: shared.Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0;
    ports: string;
    protocol: CreateFirewallRequestBodyOutboundRulesProtocolEnum;
}
export declare class CreateFirewallRequestBodyInput extends SpeakeasyBase {
    dropletIds?: number[];
    inboundRules?: CreateFirewallRequestBodyInboundRules[];
    name: string;
    outboundRules?: CreateFirewallRequestBodyOutboundRules[];
    tags?: Record<string, any>;
}
export declare class CreateFirewall401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class CreateFirewallRequest extends SpeakeasyBase {
    request?: CreateFirewallRequestBodyInput;
}
export declare class CreateFirewallResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    createFirewall202ApplicationJSONAny?: any;
    createFirewall401ApplicationJSONObject?: CreateFirewall401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
