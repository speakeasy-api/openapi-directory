import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateFirewallRequestBodyInboundRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp"
}


export class CreateFirewallRequestBodyInboundRulesSources extends SpeakeasyBase {
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


export class CreateFirewallRequestBodyInboundRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ports" })
  ports: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: CreateFirewallRequestBodyInboundRulesProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=sources" })
  sources: CreateFirewallRequestBodyInboundRulesSources;
}

export enum CreateFirewallRequestBodyOutboundRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp"
}


export class CreateFirewallRequestBodyOutboundRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinations" })
  destinations: shared.Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0;

  @SpeakeasyMetadata({ data: "json, name=ports" })
  ports: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: CreateFirewallRequestBodyOutboundRulesProtocolEnum;
}


export class CreateFirewallRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=droplet_ids" })
  dropletIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=inbound_rules", elemType: CreateFirewallRequestBodyInboundRules })
  inboundRules?: CreateFirewallRequestBodyInboundRules[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=outbound_rules", elemType: CreateFirewallRequestBodyOutboundRules })
  outboundRules?: CreateFirewallRequestBodyOutboundRules[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Record<string, any>;
}


export class CreateFirewall401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class CreateFirewallRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateFirewallRequestBodyInput;
}


export class CreateFirewallResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createFirewall202ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createFirewall401ApplicationJSONObject?: CreateFirewall401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
