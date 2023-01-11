import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum Onev21databases1Percent7BdatabaseClusterUuidPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItemsTypeEnum {
    Droplet = "droplet",
    K8s = "k8s",
    IpAddr = "ip_addr",
    Tag = "tag",
    App = "app"
}


export class Onev21databases1Percent7BdatabaseClusterUuidPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItemsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cluster_uuid" })
  clusterUuid?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: Onev21databases1Percent7BdatabaseClusterUuidPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItemsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
