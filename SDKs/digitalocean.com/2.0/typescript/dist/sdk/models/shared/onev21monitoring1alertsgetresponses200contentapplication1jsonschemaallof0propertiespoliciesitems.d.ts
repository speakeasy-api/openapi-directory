import { SpeakeasyBase } from "../../../internal/utils";
export declare class Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsAlertsSlack extends SpeakeasyBase {
    channel: string;
    url: string;
}
export declare class Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsAlerts extends SpeakeasyBase {
    email: string[];
    slack: Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsAlertsSlack[];
}
export declare enum Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsCompareEnum {
    GreaterThan = "GreaterThan",
    LessThan = "LessThan"
}
export declare enum Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsTypeEnum {
    V1InsightsDropletLoad1 = "v1/insights/droplet/load_1",
    V1InsightsDropletLoad5 = "v1/insights/droplet/load_5",
    V1InsightsDropletLoad15 = "v1/insights/droplet/load_15",
    V1InsightsDropletMemoryUtilizationPercent = "v1/insights/droplet/memory_utilization_percent",
    V1InsightsDropletDiskUtilizationPercent = "v1/insights/droplet/disk_utilization_percent",
    V1InsightsDropletCpu = "v1/insights/droplet/cpu",
    V1InsightsDropletDiskRead = "v1/insights/droplet/disk_read",
    V1InsightsDropletDiskWrite = "v1/insights/droplet/disk_write",
    V1InsightsDropletPublicOutboundBandwidth = "v1/insights/droplet/public_outbound_bandwidth",
    V1InsightsDropletPublicInboundBandwidth = "v1/insights/droplet/public_inbound_bandwidth",
    V1InsightsDropletPrivateOutboundBandwidth = "v1/insights/droplet/private_outbound_bandwidth",
    V1InsightsDropletPrivateInboundBandwidth = "v1/insights/droplet/private_inbound_bandwidth"
}
export declare enum Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsWindowEnum {
    Fivem = "5m",
    Tenm = "10m",
    Thirtym = "30m",
    Oneh = "1h"
}
export declare class Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems extends SpeakeasyBase {
    alerts: Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsAlerts;
    compare: Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsCompareEnum;
    description: string;
    enabled: boolean;
    entities: string[];
    tags: string[];
    type: Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsTypeEnum;
    uuid: string;
    value: number;
    window: Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsWindowEnum;
}
