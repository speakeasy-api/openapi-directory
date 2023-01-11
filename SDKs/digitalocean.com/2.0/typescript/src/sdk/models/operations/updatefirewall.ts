import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateFirewallPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firewall_id" })
  firewallId: string;
}

export enum UpdateFirewallRequestBodyInboundRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp"
}


export class UpdateFirewallRequestBodyInboundRulesSources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addresses" })
  addresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=droplet_ids" })
  dropletIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=kubernetes_ids" })
  kubernetesIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=load_balancer_uids" })
  loadBalancerUids?: string[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Record<string, any>;
}


export class UpdateFirewallRequestBodyInboundRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ports" })
  ports: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: UpdateFirewallRequestBodyInboundRulesProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=sources" })
  sources: UpdateFirewallRequestBodyInboundRulesSources;
}

export enum UpdateFirewallRequestBodyOutboundRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp"
}


export class UpdateFirewallRequestBodyOutboundRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinations" })
  destinations: shared.Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0;

  @SpeakeasyMetadata({ data: "json, name=ports" })
  ports: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: UpdateFirewallRequestBodyOutboundRulesProtocolEnum;
}


export class UpdateFirewallRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=droplet_ids" })
  dropletIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=inbound_rules", elemType: UpdateFirewallRequestBodyInboundRules })
  inboundRules?: UpdateFirewallRequestBodyInboundRules[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=outbound_rules", elemType: UpdateFirewallRequestBodyOutboundRules })
  outboundRules?: UpdateFirewallRequestBodyOutboundRules[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Record<string, any>;
}


export class UpdateFirewall401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class UpdateFirewallRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateFirewallPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateFirewallRequestBodyInput;
}


export class UpdateFirewallResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateFirewall200ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  updateFirewall401ApplicationJSONObject?: UpdateFirewall401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
