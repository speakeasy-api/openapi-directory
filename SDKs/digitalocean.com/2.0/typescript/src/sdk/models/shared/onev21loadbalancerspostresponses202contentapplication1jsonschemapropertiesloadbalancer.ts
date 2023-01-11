import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerAlgorithmEnum {
    RoundRobin = "round_robin",
    LeastConnections = "least_connections"
}

export enum Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesEntryProtocolEnum {
    Http = "http",
    Https = "https",
    Http2 = "http2",
    Tcp = "tcp"
}

export enum Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesTargetProtocolEnum {
    Http = "http",
    Https = "https",
    Http2 = "http2",
    Tcp = "tcp"
}


// Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRules
/** 
 * An object specifying a forwarding rule for a load balancer.
**/
export class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificate_id" })
  certificateId?: string;

  @SpeakeasyMetadata({ data: "json, name=entry_port" })
  entryPort: number;

  @SpeakeasyMetadata({ data: "json, name=entry_protocol" })
  entryProtocol: Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesEntryProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=target_port" })
  targetPort: number;

  @SpeakeasyMetadata({ data: "json, name=target_protocol" })
  targetProtocol: Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesTargetProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=tls_passthrough" })
  tlsPassthrough?: boolean;
}

export enum Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheckProtocolEnum {
    Http = "http",
    Https = "https",
    Tcp = "tcp"
}


// Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheck
/** 
 * An object specifying health check settings for the load balancer.
**/
export class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheck extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=check_interval_seconds" })
  checkIntervalSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=healthy_threshold" })
  healthyThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheckProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=response_timeout_seconds" })
  responseTimeoutSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=unhealthy_threshold" })
  unhealthyThreshold?: number;
}


// Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerRegion
/** 
 * The region where the load balancer instance is located. When setting a region, the value should be the slug identifier for the region. When you query a load balancer, an entire region object will be returned.
**/
export class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerRegion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=available" })
  available: boolean;

  @SpeakeasyMetadata({ data: "json, name=features" })
  features: any;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=sizes" })
  sizes: any;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;
}

export enum Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerSizeEnum {
    LbSmall = "lb-small",
    LbMedium = "lb-medium",
    LbLarge = "lb-large"
}

export enum Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStatusEnum {
    New = "new",
    Active = "active",
    Errored = "errored"
}

export enum Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStickySessionsTypeEnum {
    Cookies = "cookies",
    None = "none"
}


// Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStickySessions
/** 
 * An object specifying sticky sessions settings for the load balancer.
**/
export class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStickySessions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cookie_name" })
  cookieName?: string;

  @SpeakeasyMetadata({ data: "json, name=cookie_ttl_seconds" })
  cookieTtlSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStickySessionsTypeEnum;
}


export class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=algorithm" })
  algorithm?: Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerAlgorithmEnum;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=droplet_ids" })
  dropletIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=enable_backend_keepalive" })
  enableBackendKeepalive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enable_proxy_protocol" })
  enableProxyProtocol?: boolean;

  @SpeakeasyMetadata({ data: "json, name=forwarding_rules", elemType: Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRules })
  forwardingRules: Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRules[];

  @SpeakeasyMetadata({ data: "json, name=health_check" })
  healthCheck?: Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheck;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=redirect_http_to_https" })
  redirectHttpToHttps?: boolean;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerRegion;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerSizeEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=sticky_sessions" })
  stickySessions?: Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStickySessions;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "json, name=vpc_uuid" })
  vpcUuid?: string;
}
