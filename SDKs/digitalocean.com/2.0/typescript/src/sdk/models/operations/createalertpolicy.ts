import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateAlertPolicyRequestBodyCompareEnum {
    GreaterThan = "GreaterThan",
    LessThan = "LessThan"
}

export enum CreateAlertPolicyRequestBodyTypeEnum {
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

export enum CreateAlertPolicyRequestBodyWindowEnum {
    Fivem = "5m",
    Tenm = "10m",
    Thirtym = "30m",
    Oneh = "1h"
}


export class CreateAlertPolicyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alerts" })
  alerts: shared.Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsPropertiesAlerts;

  @SpeakeasyMetadata({ data: "json, name=compare" })
  compare: CreateAlertPolicyRequestBodyCompareEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=entities" })
  entities: string[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: CreateAlertPolicyRequestBodyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;

  @SpeakeasyMetadata({ data: "json, name=window" })
  window: CreateAlertPolicyRequestBodyWindowEnum;
}


export class CreateAlertPolicy401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class CreateAlertPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateAlertPolicyRequestBody;
}


export class CreateAlertPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createAlertPolicy401ApplicationJSONObject?: CreateAlertPolicy401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;

  @SpeakeasyMetadata()
  onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems?: shared.Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems;
}
