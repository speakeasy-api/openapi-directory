import { SpeakeasyBase } from "../../../internal/utils";
export declare enum Onev21databases1Percent7BdatabaseClusterUuidPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItemsTypeEnum {
    Droplet = "droplet",
    K8s = "k8s",
    IpAddr = "ip_addr",
    Tag = "tag",
    App = "app"
}
export declare class Onev21databases1Percent7BdatabaseClusterUuidPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItemsInput extends SpeakeasyBase {
    clusterUuid?: string;
    type: Onev21databases1Percent7BdatabaseClusterUuidPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItemsTypeEnum;
    uuid?: string;
    value: string;
}
