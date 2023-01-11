import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAlertPoliciesQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ListAlertPolicies200ApplicationJsonLinksPages1 extends SpeakeasyBase {
    last?: string;
    next?: string;
}
export declare class ListAlertPolicies200ApplicationJsonLinksPages2 extends SpeakeasyBase {
    first?: string;
    prev?: string;
}
export declare class ListAlertPolicies200ApplicationJsonLinks extends SpeakeasyBase {
    pages?: any;
}
/**
 * Information about the response itself.
**/
export declare class ListAlertPolicies200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
export declare class ListAlertPolicies200ApplicationJsonPoliciesAlertsSlack extends SpeakeasyBase {
    channel: string;
    url: string;
}
export declare class ListAlertPolicies200ApplicationJsonPoliciesAlerts extends SpeakeasyBase {
    email: string[];
    slack: ListAlertPolicies200ApplicationJsonPoliciesAlertsSlack[];
}
export declare enum ListAlertPolicies200ApplicationJsonPoliciesCompareEnum {
    GreaterThan = "GreaterThan",
    LessThan = "LessThan"
}
export declare enum ListAlertPolicies200ApplicationJsonPoliciesTypeEnum {
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
export declare enum ListAlertPolicies200ApplicationJsonPoliciesWindowEnum {
    Fivem = "5m",
    Tenm = "10m",
    Thirtym = "30m",
    Oneh = "1h"
}
export declare class ListAlertPolicies200ApplicationJsonPolicies extends SpeakeasyBase {
    alerts: ListAlertPolicies200ApplicationJsonPoliciesAlerts;
    compare: ListAlertPolicies200ApplicationJsonPoliciesCompareEnum;
    description: string;
    enabled: boolean;
    entities: string[];
    tags: string[];
    type: ListAlertPolicies200ApplicationJsonPoliciesTypeEnum;
    uuid: string;
    value: number;
    window: ListAlertPolicies200ApplicationJsonPoliciesWindowEnum;
}
export declare class ListAlertPolicies200ApplicationJson extends SpeakeasyBase {
    links?: ListAlertPolicies200ApplicationJsonLinks;
    meta: ListAlertPolicies200ApplicationJsonMeta;
    policies: ListAlertPolicies200ApplicationJsonPolicies[];
}
export declare class ListAlertPolicies401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListAlertPoliciesRequest extends SpeakeasyBase {
    queryParams: ListAlertPoliciesQueryParams;
}
export declare class ListAlertPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listAlertPolicies200ApplicationJSONObject?: ListAlertPolicies200ApplicationJson;
    listAlertPolicies401ApplicationJSONObject?: ListAlertPolicies401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
