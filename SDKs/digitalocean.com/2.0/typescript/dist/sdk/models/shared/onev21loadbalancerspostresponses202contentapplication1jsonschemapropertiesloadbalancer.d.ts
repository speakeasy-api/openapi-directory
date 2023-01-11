import { SpeakeasyBase } from "../../../internal/utils";
export declare enum Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerAlgorithmEnum {
    RoundRobin = "round_robin",
    LeastConnections = "least_connections"
}
export declare enum Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesEntryProtocolEnum {
    Http = "http",
    Https = "https",
    Http2 = "http2",
    Tcp = "tcp"
}
export declare enum Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesTargetProtocolEnum {
    Http = "http",
    Https = "https",
    Http2 = "http2",
    Tcp = "tcp"
}
/**
 * An object specifying a forwarding rule for a load balancer.
**/
export declare class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRules extends SpeakeasyBase {
    certificateId?: string;
    entryPort: number;
    entryProtocol: Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesEntryProtocolEnum;
    targetPort: number;
    targetProtocol: Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesTargetProtocolEnum;
    tlsPassthrough?: boolean;
}
export declare enum Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheckProtocolEnum {
    Http = "http",
    Https = "https",
    Tcp = "tcp"
}
/**
 * An object specifying health check settings for the load balancer.
**/
export declare class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheck extends SpeakeasyBase {
    checkIntervalSeconds?: number;
    healthyThreshold?: number;
    path?: string;
    port?: number;
    protocol?: Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheckProtocolEnum;
    responseTimeoutSeconds?: number;
    unhealthyThreshold?: number;
}
/**
 * The region where the load balancer instance is located. When setting a region, the value should be the slug identifier for the region. When you query a load balancer, an entire region object will be returned.
**/
export declare class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerRegion extends SpeakeasyBase {
    available: boolean;
    features: any;
    name: string;
    sizes: any;
    slug: string;
}
export declare enum Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerSizeEnum {
    LbSmall = "lb-small",
    LbMedium = "lb-medium",
    LbLarge = "lb-large"
}
export declare enum Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStatusEnum {
    New = "new",
    Active = "active",
    Errored = "errored"
}
export declare enum Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStickySessionsTypeEnum {
    Cookies = "cookies",
    None = "none"
}
/**
 * An object specifying sticky sessions settings for the load balancer.
**/
export declare class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStickySessions extends SpeakeasyBase {
    cookieName?: string;
    cookieTtlSeconds?: number;
    type?: Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStickySessionsTypeEnum;
}
export declare class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancer extends SpeakeasyBase {
    algorithm?: Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerAlgorithmEnum;
    createdAt?: Date;
    dropletIds?: number[];
    enableBackendKeepalive?: boolean;
    enableProxyProtocol?: boolean;
    forwardingRules: Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRules[];
    healthCheck?: Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheck;
    id?: string;
    ip?: string;
    name?: string;
    redirectHttpToHttps?: boolean;
    region?: Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerRegion;
    size?: Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerSizeEnum;
    status?: Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStatusEnum;
    stickySessions?: Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStickySessions;
    tag?: string;
    vpcUuid?: string;
}
