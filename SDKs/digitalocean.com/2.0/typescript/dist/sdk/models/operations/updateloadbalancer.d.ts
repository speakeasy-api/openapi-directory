import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateLoadBalancerPathParams extends SpeakeasyBase {
    lbId: string;
}
export declare enum UpdateLoadBalancerRequestBodyAssignDropletsByIdAlgorithmEnum {
    RoundRobin = "round_robin",
    LeastConnections = "least_connections"
}
export declare enum UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesEntryProtocolEnum {
    Http = "http",
    Https = "https",
    Http2 = "http2",
    Tcp = "tcp"
}
export declare enum UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesTargetProtocolEnum {
    Http = "http",
    Https = "https",
    Http2 = "http2",
    Tcp = "tcp"
}
/**
 * An object specifying a forwarding rule for a load balancer.
**/
export declare class UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules extends SpeakeasyBase {
    certificateId?: string;
    entryPort: number;
    entryProtocol: UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesEntryProtocolEnum;
    targetPort: number;
    targetProtocol: UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesTargetProtocolEnum;
    tlsPassthrough?: boolean;
}
export declare enum UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheckProtocolEnum {
    Http = "http",
    Https = "https",
    Tcp = "tcp"
}
/**
 * An object specifying health check settings for the load balancer.
**/
export declare class UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck extends SpeakeasyBase {
    checkIntervalSeconds?: number;
    healthyThreshold?: number;
    path?: string;
    port?: number;
    protocol?: UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheckProtocolEnum;
    responseTimeoutSeconds?: number;
    unhealthyThreshold?: number;
}
export declare enum UpdateLoadBalancerRequestBodyAssignDropletsByIdSizeEnum {
    LbSmall = "lb-small",
    LbMedium = "lb-medium",
    LbLarge = "lb-large"
}
export declare enum UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessionsTypeEnum {
    Cookies = "cookies",
    None = "none"
}
/**
 * An object specifying sticky sessions settings for the load balancer.
**/
export declare class UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessions extends SpeakeasyBase {
    cookieName?: string;
    cookieTtlSeconds?: number;
    type?: UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessionsTypeEnum;
}
export declare class UpdateLoadBalancerRequestBodyAssignDropletsByIdInput extends SpeakeasyBase {
    algorithm?: UpdateLoadBalancerRequestBodyAssignDropletsByIdAlgorithmEnum;
    dropletIds: number[];
    enableBackendKeepalive?: boolean;
    enableProxyProtocol?: boolean;
    forwardingRules: UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules[];
    healthCheck?: UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck;
    name?: string;
    redirectHttpToHttps?: boolean;
    region: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum;
    size?: UpdateLoadBalancerRequestBodyAssignDropletsByIdSizeEnum;
    stickySessions?: UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessions;
    vpcUuid?: string;
}
export declare enum UpdateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum {
    RoundRobin = "round_robin",
    LeastConnections = "least_connections"
}
export declare enum UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum {
    Http = "http",
    Https = "https",
    Http2 = "http2",
    Tcp = "tcp"
}
export declare enum UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum {
    Http = "http",
    Https = "https",
    Http2 = "http2",
    Tcp = "tcp"
}
/**
 * An object specifying a forwarding rule for a load balancer.
**/
export declare class UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules extends SpeakeasyBase {
    certificateId?: string;
    entryPort: number;
    entryProtocol: UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum;
    targetPort: number;
    targetProtocol: UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum;
    tlsPassthrough?: boolean;
}
export declare enum UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum {
    Http = "http",
    Https = "https",
    Tcp = "tcp"
}
/**
 * An object specifying health check settings for the load balancer.
**/
export declare class UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck extends SpeakeasyBase {
    checkIntervalSeconds?: number;
    healthyThreshold?: number;
    path?: string;
    port?: number;
    protocol?: UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum;
    responseTimeoutSeconds?: number;
    unhealthyThreshold?: number;
}
export declare enum UpdateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum {
    LbSmall = "lb-small",
    LbMedium = "lb-medium",
    LbLarge = "lb-large"
}
export declare enum UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum {
    Cookies = "cookies",
    None = "none"
}
/**
 * An object specifying sticky sessions settings for the load balancer.
**/
export declare class UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessions extends SpeakeasyBase {
    cookieName?: string;
    cookieTtlSeconds?: number;
    type?: UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum;
}
export declare class UpdateLoadBalancerRequestBodyAssignDropletsByTagInput extends SpeakeasyBase {
    algorithm?: UpdateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum;
    enableBackendKeepalive?: boolean;
    enableProxyProtocol?: boolean;
    forwardingRules: UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules[];
    healthCheck?: UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck;
    name?: string;
    redirectHttpToHttps?: boolean;
    region: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum;
    size?: UpdateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum;
    stickySessions?: UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessions;
    tag: string;
    vpcUuid?: string;
}
export declare class UpdateLoadBalancer401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class UpdateLoadBalancerRequest extends SpeakeasyBase {
    pathParams: UpdateLoadBalancerPathParams;
    request: any;
}
export declare class UpdateLoadBalancerResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    updateLoadBalancer200ApplicationJSONAny?: any;
    updateLoadBalancer401ApplicationJSONObject?: UpdateLoadBalancer401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
