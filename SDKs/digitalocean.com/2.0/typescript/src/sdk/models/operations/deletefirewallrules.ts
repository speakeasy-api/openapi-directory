import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteFirewallRulesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firewall_id" })
  firewallId: string;
}

export enum DeleteFirewallRulesRequestBodyInboundRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp"
}


export class DeleteFirewallRulesRequestBodyInboundRulesSources extends SpeakeasyBase {
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


export class DeleteFirewallRulesRequestBodyInboundRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ports" })
  ports: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: DeleteFirewallRulesRequestBodyInboundRulesProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=sources" })
  sources: DeleteFirewallRulesRequestBodyInboundRulesSources;
}

export enum DeleteFirewallRulesRequestBodyOutboundRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp"
}


export class DeleteFirewallRulesRequestBodyOutboundRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinations" })
  destinations: shared.Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0;

  @SpeakeasyMetadata({ data: "json, name=ports" })
  ports: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: DeleteFirewallRulesRequestBodyOutboundRulesProtocolEnum;
}


export class DeleteFirewallRulesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inbound_rules", elemType: DeleteFirewallRulesRequestBodyInboundRules })
  inboundRules?: DeleteFirewallRulesRequestBodyInboundRules[];

  @SpeakeasyMetadata({ data: "json, name=outbound_rules", elemType: DeleteFirewallRulesRequestBodyOutboundRules })
  outboundRules?: DeleteFirewallRulesRequestBodyOutboundRules[];
}


export class DeleteFirewallRules401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class DeleteFirewallRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteFirewallRulesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: DeleteFirewallRulesRequestBody;
}


export class DeleteFirewallRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteFirewallRules401ApplicationJSONObject?: DeleteFirewallRules401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
