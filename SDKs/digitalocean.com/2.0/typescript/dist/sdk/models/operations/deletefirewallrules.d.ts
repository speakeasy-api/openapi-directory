import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteFirewallRulesPathParams extends SpeakeasyBase {
    firewallId: string;
}
export declare enum DeleteFirewallRulesRequestBodyInboundRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp"
}
export declare class DeleteFirewallRulesRequestBodyInboundRulesSources extends SpeakeasyBase {
    addresses?: string[];
    dropletIds?: number[];
    kubernetesIds?: string[];
    loadBalancerUids?: string[];
    tags?: Record<string, any>;
}
export declare class DeleteFirewallRulesRequestBodyInboundRules extends SpeakeasyBase {
    ports: string;
    protocol: DeleteFirewallRulesRequestBodyInboundRulesProtocolEnum;
    sources: DeleteFirewallRulesRequestBodyInboundRulesSources;
}
export declare enum DeleteFirewallRulesRequestBodyOutboundRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp"
}
export declare class DeleteFirewallRulesRequestBodyOutboundRules extends SpeakeasyBase {
    destinations: shared.Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0;
    ports: string;
    protocol: DeleteFirewallRulesRequestBodyOutboundRulesProtocolEnum;
}
export declare class DeleteFirewallRulesRequestBody extends SpeakeasyBase {
    inboundRules?: DeleteFirewallRulesRequestBodyInboundRules[];
    outboundRules?: DeleteFirewallRulesRequestBodyOutboundRules[];
}
export declare class DeleteFirewallRules401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class DeleteFirewallRulesRequest extends SpeakeasyBase {
    pathParams: DeleteFirewallRulesPathParams;
    request?: DeleteFirewallRulesRequestBody;
}
export declare class DeleteFirewallRulesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    deleteFirewallRules401ApplicationJSONObject?: DeleteFirewallRules401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
