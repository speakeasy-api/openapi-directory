import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0 } from "./onev21droplets1percent7bdropletidpercent7d1firewallsgetresponses200contentapplication1jsonschemaallof0propertiesfirewallsitemsallof1propertiesinboundrulesitemsallof1propertiessourcesallof0";


export enum Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsInboundRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp"
}


export class Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsInboundRulesSources extends SpeakeasyBase {
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


export class Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsInboundRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ports" })
  ports: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsInboundRulesProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=sources" })
  sources: Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsInboundRulesSources;
}

export enum Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsOutboundRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp"
}


export class Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsOutboundRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinations" })
  destinations: Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0;

  @SpeakeasyMetadata({ data: "json, name=ports" })
  ports: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsOutboundRulesProtocolEnum;
}


export class Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsPendingChanges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=droplet_id" })
  dropletId?: number;

  @SpeakeasyMetadata({ data: "json, name=removing" })
  removing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}

export enum Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsStatusEnum {
    Waiting = "waiting",
    Succeeded = "succeeded",
    Failed = "failed"
}


export class Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=droplet_ids" })
  dropletIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=inbound_rules", elemType: Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsInboundRules })
  inboundRules?: Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsInboundRules[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=outbound_rules", elemType: Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsOutboundRules })
  outboundRules?: Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsOutboundRules[];

  @SpeakeasyMetadata({ data: "json, name=pending_changes", elemType: Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsPendingChanges })
  pendingChanges?: Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsPendingChanges[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Record<string, any>;
}
