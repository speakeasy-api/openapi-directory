import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListAlertPoliciesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ListAlertPolicies200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=last" })
  last?: string;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;
}


export class ListAlertPolicies200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first" })
  first?: string;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListAlertPolicies200ApplicationJsonLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: any;
}


// ListAlertPolicies200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListAlertPolicies200ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}


export class ListAlertPolicies200ApplicationJsonPoliciesAlertsSlack extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class ListAlertPolicies200ApplicationJsonPoliciesAlerts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string[];

  @SpeakeasyMetadata({ data: "json, name=slack", elemType: ListAlertPolicies200ApplicationJsonPoliciesAlertsSlack })
  slack: ListAlertPolicies200ApplicationJsonPoliciesAlertsSlack[];
}

export enum ListAlertPolicies200ApplicationJsonPoliciesCompareEnum {
    GreaterThan = "GreaterThan",
    LessThan = "LessThan"
}

export enum ListAlertPolicies200ApplicationJsonPoliciesTypeEnum {
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

export enum ListAlertPolicies200ApplicationJsonPoliciesWindowEnum {
    Fivem = "5m",
    Tenm = "10m",
    Thirtym = "30m",
    Oneh = "1h"
}


export class ListAlertPolicies200ApplicationJsonPolicies extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alerts" })
  alerts: ListAlertPolicies200ApplicationJsonPoliciesAlerts;

  @SpeakeasyMetadata({ data: "json, name=compare" })
  compare: ListAlertPolicies200ApplicationJsonPoliciesCompareEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=entities" })
  entities: string[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: ListAlertPolicies200ApplicationJsonPoliciesTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;

  @SpeakeasyMetadata({ data: "json, name=window" })
  window: ListAlertPolicies200ApplicationJsonPoliciesWindowEnum;
}


export class ListAlertPolicies200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ListAlertPolicies200ApplicationJsonLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: ListAlertPolicies200ApplicationJsonMeta;

  @SpeakeasyMetadata({ data: "json, name=policies", elemType: ListAlertPolicies200ApplicationJsonPolicies })
  policies: ListAlertPolicies200ApplicationJsonPolicies[];
}


export class ListAlertPolicies401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListAlertPoliciesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListAlertPoliciesQueryParams;
}


export class ListAlertPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listAlertPolicies200ApplicationJSONObject?: ListAlertPolicies200ApplicationJson;

  @SpeakeasyMetadata()
  listAlertPolicies401ApplicationJSONObject?: ListAlertPolicies401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
