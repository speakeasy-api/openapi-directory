import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateLoadBalancerRequestBodyAssignDropletsByIdAlgorithmEnum {
    RoundRobin = "round_robin",
    LeastConnections = "least_connections"
}
export declare enum CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesEntryProtocolEnum {
    Http = "http",
    Https = "https",
    Http2 = "http2",
    Tcp = "tcp"
}
export declare enum CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesTargetProtocolEnum {
    Http = "http",
    Https = "https",
    Http2 = "http2",
    Tcp = "tcp"
}
/**
 * An object specifying a forwarding rule for a load balancer.
**/
export declare class CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules extends SpeakeasyBase {
    certificateId?: string;
    entryPort: number;
    entryProtocol: CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesEntryProtocolEnum;
    targetPort: number;
    targetProtocol: CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesTargetProtocolEnum;
    tlsPassthrough?: boolean;
}
export declare enum CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheckProtocolEnum {
    Http = "http",
    Https = "https",
    Tcp = "tcp"
}
/**
 * An object specifying health check settings for the load balancer.
**/
export declare class CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck extends SpeakeasyBase {
    checkIntervalSeconds?: number;
    healthyThreshold?: number;
    path?: string;
    port?: number;
    protocol?: CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheckProtocolEnum;
    responseTimeoutSeconds?: number;
    unhealthyThreshold?: number;
}
export declare enum CreateLoadBalancerRequestBodyAssignDropletsByIdSizeEnum {
    LbSmall = "lb-small",
    LbMedium = "lb-medium",
    LbLarge = "lb-large"
}
export declare enum CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessionsTypeEnum {
    Cookies = "cookies",
    None = "none"
}
/**
 * An object specifying sticky sessions settings for the load balancer.
**/
export declare class CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessions extends SpeakeasyBase {
    cookieName?: string;
    cookieTtlSeconds?: number;
    type?: CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessionsTypeEnum;
}
export declare class CreateLoadBalancerRequestBodyAssignDropletsByIdInput extends SpeakeasyBase {
    algorithm?: CreateLoadBalancerRequestBodyAssignDropletsByIdAlgorithmEnum;
    dropletIds: number[];
    enableBackendKeepalive?: boolean;
    enableProxyProtocol?: boolean;
    forwardingRules: CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules[];
    healthCheck?: CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck;
    name?: string;
    redirectHttpToHttps?: boolean;
    region: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum;
    size?: CreateLoadBalancerRequestBodyAssignDropletsByIdSizeEnum;
    stickySessions?: CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessions;
    vpcUuid?: string;
}
export declare enum CreateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum {
    RoundRobin = "round_robin",
    LeastConnections = "least_connections"
}
export declare enum CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum {
    Http = "http",
    Https = "https",
    Http2 = "http2",
    Tcp = "tcp"
}
export declare enum CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum {
    Http = "http",
    Https = "https",
    Http2 = "http2",
    Tcp = "tcp"
}
/**
 * An object specifying a forwarding rule for a load balancer.
**/
export declare class CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules extends SpeakeasyBase {
    certificateId?: string;
    entryPort: number;
    entryProtocol: CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum;
    targetPort: number;
    targetProtocol: CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum;
    tlsPassthrough?: boolean;
}
export declare enum CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum {
    Http = "http",
    Https = "https",
    Tcp = "tcp"
}
/**
 * An object specifying health check settings for the load balancer.
**/
export declare class CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck extends SpeakeasyBase {
    checkIntervalSeconds?: number;
    healthyThreshold?: number;
    path?: string;
    port?: number;
    protocol?: CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum;
    responseTimeoutSeconds?: number;
    unhealthyThreshold?: number;
}
export declare enum CreateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum {
    LbSmall = "lb-small",
    LbMedium = "lb-medium",
    LbLarge = "lb-large"
}
export declare enum CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum {
    Cookies = "cookies",
    None = "none"
}
/**
 * An object specifying sticky sessions settings for the load balancer.
**/
export declare class CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessions extends SpeakeasyBase {
    cookieName?: string;
    cookieTtlSeconds?: number;
    type?: CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum;
}
export declare class CreateLoadBalancerRequestBodyAssignDropletsByTagInput extends SpeakeasyBase {
    algorithm?: CreateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum;
    enableBackendKeepalive?: boolean;
    enableProxyProtocol?: boolean;
    forwardingRules: CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules[];
    healthCheck?: CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck;
    name?: string;
    redirectHttpToHttps?: boolean;
    region: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum;
    size?: CreateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum;
    stickySessions?: CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessions;
    tag: string;
    vpcUuid?: string;
}
export declare class CreateLoadBalancer401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class CreateLoadBalancerRequest extends SpeakeasyBase {
    request: any;
}
export declare class CreateLoadBalancerResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    createLoadBalancer202ApplicationJSONAny?: any;
    createLoadBalancer401ApplicationJSONObject?: CreateLoadBalancer401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
