import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateLoadBalancerRequestBodyAssignDropletsByIdAlgorithmEnum {
    RoundRobin = "round_robin",
    LeastConnections = "least_connections"
}

export enum CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesEntryProtocolEnum {
    Http = "http",
    Https = "https",
    Http2 = "http2",
    Tcp = "tcp"
}

export enum CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesTargetProtocolEnum {
    Http = "http",
    Https = "https",
    Http2 = "http2",
    Tcp = "tcp"
}


// CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules
/** 
 * An object specifying a forwarding rule for a load balancer.
**/
export class CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificate_id" })
  certificateId?: string;

  @SpeakeasyMetadata({ data: "json, name=entry_port" })
  entryPort: number;

  @SpeakeasyMetadata({ data: "json, name=entry_protocol" })
  entryProtocol: CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesEntryProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=target_port" })
  targetPort: number;

  @SpeakeasyMetadata({ data: "json, name=target_protocol" })
  targetProtocol: CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesTargetProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=tls_passthrough" })
  tlsPassthrough?: boolean;
}

export enum CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheckProtocolEnum {
    Http = "http",
    Https = "https",
    Tcp = "tcp"
}


// CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck
/** 
 * An object specifying health check settings for the load balancer.
**/
export class CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=check_interval_seconds" })
  checkIntervalSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=healthy_threshold" })
  healthyThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheckProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=response_timeout_seconds" })
  responseTimeoutSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=unhealthy_threshold" })
  unhealthyThreshold?: number;
}

export enum CreateLoadBalancerRequestBodyAssignDropletsByIdSizeEnum {
    LbSmall = "lb-small",
    LbMedium = "lb-medium",
    LbLarge = "lb-large"
}

export enum CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessionsTypeEnum {
    Cookies = "cookies",
    None = "none"
}


// CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessions
/** 
 * An object specifying sticky sessions settings for the load balancer.
**/
export class CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cookie_name" })
  cookieName?: string;

  @SpeakeasyMetadata({ data: "json, name=cookie_ttl_seconds" })
  cookieTtlSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessionsTypeEnum;
}


export class CreateLoadBalancerRequestBodyAssignDropletsByIdInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=algorithm" })
  algorithm?: CreateLoadBalancerRequestBodyAssignDropletsByIdAlgorithmEnum;

  @SpeakeasyMetadata({ data: "json, name=droplet_ids" })
  dropletIds: number[];

  @SpeakeasyMetadata({ data: "json, name=enable_backend_keepalive" })
  enableBackendKeepalive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enable_proxy_protocol" })
  enableProxyProtocol?: boolean;

  @SpeakeasyMetadata({ data: "json, name=forwarding_rules", elemType: CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules })
  forwardingRules: CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules[];

  @SpeakeasyMetadata({ data: "json, name=health_check" })
  healthCheck?: CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=redirect_http_to_https" })
  redirectHttpToHttps?: boolean;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: CreateLoadBalancerRequestBodyAssignDropletsByIdSizeEnum;

  @SpeakeasyMetadata({ data: "json, name=sticky_sessions" })
  stickySessions?: CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessions;

  @SpeakeasyMetadata({ data: "json, name=vpc_uuid" })
  vpcUuid?: string;
}

export enum CreateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum {
    RoundRobin = "round_robin",
    LeastConnections = "least_connections"
}

export enum CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum {
    Http = "http",
    Https = "https",
    Http2 = "http2",
    Tcp = "tcp"
}

export enum CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum {
    Http = "http",
    Https = "https",
    Http2 = "http2",
    Tcp = "tcp"
}


// CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules
/** 
 * An object specifying a forwarding rule for a load balancer.
**/
export class CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificate_id" })
  certificateId?: string;

  @SpeakeasyMetadata({ data: "json, name=entry_port" })
  entryPort: number;

  @SpeakeasyMetadata({ data: "json, name=entry_protocol" })
  entryProtocol: CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=target_port" })
  targetPort: number;

  @SpeakeasyMetadata({ data: "json, name=target_protocol" })
  targetProtocol: CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=tls_passthrough" })
  tlsPassthrough?: boolean;
}

export enum CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum {
    Http = "http",
    Https = "https",
    Tcp = "tcp"
}


// CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck
/** 
 * An object specifying health check settings for the load balancer.
**/
export class CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=check_interval_seconds" })
  checkIntervalSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=healthy_threshold" })
  healthyThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=response_timeout_seconds" })
  responseTimeoutSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=unhealthy_threshold" })
  unhealthyThreshold?: number;
}

export enum CreateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum {
    LbSmall = "lb-small",
    LbMedium = "lb-medium",
    LbLarge = "lb-large"
}

export enum CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum {
    Cookies = "cookies",
    None = "none"
}


// CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessions
/** 
 * An object specifying sticky sessions settings for the load balancer.
**/
export class CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cookie_name" })
  cookieName?: string;

  @SpeakeasyMetadata({ data: "json, name=cookie_ttl_seconds" })
  cookieTtlSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum;
}


export class CreateLoadBalancerRequestBodyAssignDropletsByTagInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=algorithm" })
  algorithm?: CreateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum;

  @SpeakeasyMetadata({ data: "json, name=enable_backend_keepalive" })
  enableBackendKeepalive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enable_proxy_protocol" })
  enableProxyProtocol?: boolean;

  @SpeakeasyMetadata({ data: "json, name=forwarding_rules", elemType: CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules })
  forwardingRules: CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules[];

  @SpeakeasyMetadata({ data: "json, name=health_check" })
  healthCheck?: CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=redirect_http_to_https" })
  redirectHttpToHttps?: boolean;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: CreateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum;

  @SpeakeasyMetadata({ data: "json, name=sticky_sessions" })
  stickySessions?: CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessions;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag: string;

  @SpeakeasyMetadata({ data: "json, name=vpc_uuid" })
  vpcUuid?: string;
}


export class CreateLoadBalancer401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class CreateLoadBalancerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class CreateLoadBalancerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createLoadBalancer202ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createLoadBalancer401ApplicationJSONObject?: CreateLoadBalancer401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
