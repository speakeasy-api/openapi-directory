import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateLoadBalancerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=lb_id" })
  lbId: string;
}

export enum UpdateLoadBalancerRequestBodyAssignDropletsByIdAlgorithmEnum {
    RoundRobin = "round_robin",
    LeastConnections = "least_connections"
}

export enum UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesEntryProtocolEnum {
    Http = "http",
    Https = "https",
    Http2 = "http2",
    Tcp = "tcp"
}

export enum UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesTargetProtocolEnum {
    Http = "http",
    Https = "https",
    Http2 = "http2",
    Tcp = "tcp"
}


// UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules
/** 
 * An object specifying a forwarding rule for a load balancer.
**/
export class UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificate_id" })
  certificateId?: string;

  @SpeakeasyMetadata({ data: "json, name=entry_port" })
  entryPort: number;

  @SpeakeasyMetadata({ data: "json, name=entry_protocol" })
  entryProtocol: UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesEntryProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=target_port" })
  targetPort: number;

  @SpeakeasyMetadata({ data: "json, name=target_protocol" })
  targetProtocol: UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesTargetProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=tls_passthrough" })
  tlsPassthrough?: boolean;
}

export enum UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheckProtocolEnum {
    Http = "http",
    Https = "https",
    Tcp = "tcp"
}


// UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck
/** 
 * An object specifying health check settings for the load balancer.
**/
export class UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=check_interval_seconds" })
  checkIntervalSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=healthy_threshold" })
  healthyThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheckProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=response_timeout_seconds" })
  responseTimeoutSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=unhealthy_threshold" })
  unhealthyThreshold?: number;
}

export enum UpdateLoadBalancerRequestBodyAssignDropletsByIdSizeEnum {
    LbSmall = "lb-small",
    LbMedium = "lb-medium",
    LbLarge = "lb-large"
}

export enum UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessionsTypeEnum {
    Cookies = "cookies",
    None = "none"
}


// UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessions
/** 
 * An object specifying sticky sessions settings for the load balancer.
**/
export class UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cookie_name" })
  cookieName?: string;

  @SpeakeasyMetadata({ data: "json, name=cookie_ttl_seconds" })
  cookieTtlSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessionsTypeEnum;
}


export class UpdateLoadBalancerRequestBodyAssignDropletsByIdInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=algorithm" })
  algorithm?: UpdateLoadBalancerRequestBodyAssignDropletsByIdAlgorithmEnum;

  @SpeakeasyMetadata({ data: "json, name=droplet_ids" })
  dropletIds: number[];

  @SpeakeasyMetadata({ data: "json, name=enable_backend_keepalive" })
  enableBackendKeepalive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enable_proxy_protocol" })
  enableProxyProtocol?: boolean;

  @SpeakeasyMetadata({ data: "json, name=forwarding_rules", elemType: UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules })
  forwardingRules: UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules[];

  @SpeakeasyMetadata({ data: "json, name=health_check" })
  healthCheck?: UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=redirect_http_to_https" })
  redirectHttpToHttps?: boolean;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: UpdateLoadBalancerRequestBodyAssignDropletsByIdSizeEnum;

  @SpeakeasyMetadata({ data: "json, name=sticky_sessions" })
  stickySessions?: UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessions;

  @SpeakeasyMetadata({ data: "json, name=vpc_uuid" })
  vpcUuid?: string;
}

export enum UpdateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum {
    RoundRobin = "round_robin",
    LeastConnections = "least_connections"
}

export enum UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum {
    Http = "http",
    Https = "https",
    Http2 = "http2",
    Tcp = "tcp"
}

export enum UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum {
    Http = "http",
    Https = "https",
    Http2 = "http2",
    Tcp = "tcp"
}


// UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules
/** 
 * An object specifying a forwarding rule for a load balancer.
**/
export class UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificate_id" })
  certificateId?: string;

  @SpeakeasyMetadata({ data: "json, name=entry_port" })
  entryPort: number;

  @SpeakeasyMetadata({ data: "json, name=entry_protocol" })
  entryProtocol: UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=target_port" })
  targetPort: number;

  @SpeakeasyMetadata({ data: "json, name=target_protocol" })
  targetProtocol: UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=tls_passthrough" })
  tlsPassthrough?: boolean;
}

export enum UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum {
    Http = "http",
    Https = "https",
    Tcp = "tcp"
}


// UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck
/** 
 * An object specifying health check settings for the load balancer.
**/
export class UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=check_interval_seconds" })
  checkIntervalSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=healthy_threshold" })
  healthyThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=response_timeout_seconds" })
  responseTimeoutSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=unhealthy_threshold" })
  unhealthyThreshold?: number;
}

export enum UpdateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum {
    LbSmall = "lb-small",
    LbMedium = "lb-medium",
    LbLarge = "lb-large"
}

export enum UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum {
    Cookies = "cookies",
    None = "none"
}


// UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessions
/** 
 * An object specifying sticky sessions settings for the load balancer.
**/
export class UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cookie_name" })
  cookieName?: string;

  @SpeakeasyMetadata({ data: "json, name=cookie_ttl_seconds" })
  cookieTtlSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum;
}


export class UpdateLoadBalancerRequestBodyAssignDropletsByTagInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=algorithm" })
  algorithm?: UpdateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum;

  @SpeakeasyMetadata({ data: "json, name=enable_backend_keepalive" })
  enableBackendKeepalive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enable_proxy_protocol" })
  enableProxyProtocol?: boolean;

  @SpeakeasyMetadata({ data: "json, name=forwarding_rules", elemType: UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules })
  forwardingRules: UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules[];

  @SpeakeasyMetadata({ data: "json, name=health_check" })
  healthCheck?: UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=redirect_http_to_https" })
  redirectHttpToHttps?: boolean;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: UpdateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum;

  @SpeakeasyMetadata({ data: "json, name=sticky_sessions" })
  stickySessions?: UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessions;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag: string;

  @SpeakeasyMetadata({ data: "json, name=vpc_uuid" })
  vpcUuid?: string;
}


export class UpdateLoadBalancer401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class UpdateLoadBalancerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateLoadBalancerPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class UpdateLoadBalancerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateLoadBalancer200ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  updateLoadBalancer401ApplicationJSONObject?: UpdateLoadBalancer401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
