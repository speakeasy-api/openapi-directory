import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListDropletFirewallsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=droplet_id" })
  dropletId: number;
}


export class ListDropletFirewallsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}

export enum ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp"
}


export class ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesSources extends SpeakeasyBase {
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


export class ListDropletFirewalls200ApplicationJsonFirewallsInboundRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ports" })
  ports: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=sources" })
  sources: ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesSources;
}

export enum ListDropletFirewalls200ApplicationJsonFirewallsOutboundRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp"
}


export class ListDropletFirewalls200ApplicationJsonFirewallsOutboundRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinations" })
  destinations: shared.Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0;

  @SpeakeasyMetadata({ data: "json, name=ports" })
  ports: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: ListDropletFirewalls200ApplicationJsonFirewallsOutboundRulesProtocolEnum;
}


export class ListDropletFirewalls200ApplicationJsonFirewallsPendingChanges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=droplet_id" })
  dropletId?: number;

  @SpeakeasyMetadata({ data: "json, name=removing" })
  removing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}

export enum ListDropletFirewalls200ApplicationJsonFirewallsStatusEnum {
    Waiting = "waiting",
    Succeeded = "succeeded",
    Failed = "failed"
}


export class ListDropletFirewalls200ApplicationJsonFirewalls extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=droplet_ids" })
  dropletIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=inbound_rules", elemType: ListDropletFirewalls200ApplicationJsonFirewallsInboundRules })
  inboundRules?: ListDropletFirewalls200ApplicationJsonFirewallsInboundRules[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=outbound_rules", elemType: ListDropletFirewalls200ApplicationJsonFirewallsOutboundRules })
  outboundRules?: ListDropletFirewalls200ApplicationJsonFirewallsOutboundRules[];

  @SpeakeasyMetadata({ data: "json, name=pending_changes", elemType: ListDropletFirewalls200ApplicationJsonFirewallsPendingChanges })
  pendingChanges?: ListDropletFirewalls200ApplicationJsonFirewallsPendingChanges[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ListDropletFirewalls200ApplicationJsonFirewallsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Record<string, any>;
}


export class ListDropletFirewalls200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=last" })
  last?: string;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;
}


export class ListDropletFirewalls200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first" })
  first?: string;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListDropletFirewalls200ApplicationJsonLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: any;
}


// ListDropletFirewalls200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListDropletFirewalls200ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}


export class ListDropletFirewalls200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firewalls", elemType: ListDropletFirewalls200ApplicationJsonFirewalls })
  firewalls?: ListDropletFirewalls200ApplicationJsonFirewalls[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ListDropletFirewalls200ApplicationJsonLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: ListDropletFirewalls200ApplicationJsonMeta;
}


export class ListDropletFirewalls401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListDropletFirewallsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListDropletFirewallsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListDropletFirewallsQueryParams;
}


export class ListDropletFirewallsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listDropletFirewalls200ApplicationJSONObject?: ListDropletFirewalls200ApplicationJson;

  @SpeakeasyMetadata()
  listDropletFirewalls401ApplicationJSONObject?: ListDropletFirewalls401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
