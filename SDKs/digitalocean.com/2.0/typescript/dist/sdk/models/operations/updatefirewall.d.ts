import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateFirewallPathParams extends SpeakeasyBase {
    firewallId: string;
}
export declare enum UpdateFirewallRequestBodyInboundRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp"
}
export declare class UpdateFirewallRequestBodyInboundRulesSources extends SpeakeasyBase {
    addresses?: string[];
    dropletIds?: number[];
    kubernetesIds?: string[];
    loadBalancerUids?: string[];
    tags?: Record<string, any>;
}
export declare class UpdateFirewallRequestBodyInboundRules extends SpeakeasyBase {
    ports: string;
    protocol: UpdateFirewallRequestBodyInboundRulesProtocolEnum;
    sources: UpdateFirewallRequestBodyInboundRulesSources;
}
export declare enum UpdateFirewallRequestBodyOutboundRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp"
}
export declare class UpdateFirewallRequestBodyOutboundRules extends SpeakeasyBase {
    destinations: shared.Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0;
    ports: string;
    protocol: UpdateFirewallRequestBodyOutboundRulesProtocolEnum;
}
export declare class UpdateFirewallRequestBodyInput extends SpeakeasyBase {
    dropletIds?: number[];
    inboundRules?: UpdateFirewallRequestBodyInboundRules[];
    name?: string;
    outboundRules?: UpdateFirewallRequestBodyOutboundRules[];
    tags?: Record<string, any>;
}
export declare class UpdateFirewall401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class UpdateFirewallRequest extends SpeakeasyBase {
    pathParams: UpdateFirewallPathParams;
    request?: UpdateFirewallRequestBodyInput;
}
export declare class UpdateFirewallResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    updateFirewall200ApplicationJSONAny?: any;
    updateFirewall401ApplicationJSONObject?: UpdateFirewall401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
