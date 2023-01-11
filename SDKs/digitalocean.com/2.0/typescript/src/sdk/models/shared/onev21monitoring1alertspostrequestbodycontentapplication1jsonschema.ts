import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsPropertiesAlerts } from "./onev21monitoring1alertsgetresponses200contentapplication1jsonschemaallof0propertiespoliciesitemspropertiesalerts";


export enum Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaCompareEnum {
    GreaterThan = "GreaterThan",
    LessThan = "LessThan"
}

export enum Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnum {
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

export enum Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaWindowEnum {
    Fivem = "5m",
    Tenm = "10m",
    Thirtym = "30m",
    Oneh = "1h"
}


export class Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alerts" })
  alerts: Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsPropertiesAlerts;

  @SpeakeasyMetadata({ data: "json, name=compare" })
  compare: Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaCompareEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=entities" })
  entities: string[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;

  @SpeakeasyMetadata({ data: "json, name=window" })
  window: Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaWindowEnum;
}
