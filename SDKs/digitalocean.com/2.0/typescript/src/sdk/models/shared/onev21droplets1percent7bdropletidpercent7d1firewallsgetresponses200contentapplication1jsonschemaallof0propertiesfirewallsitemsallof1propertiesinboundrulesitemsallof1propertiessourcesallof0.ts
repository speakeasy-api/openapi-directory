import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0 extends SpeakeasyBase {
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
