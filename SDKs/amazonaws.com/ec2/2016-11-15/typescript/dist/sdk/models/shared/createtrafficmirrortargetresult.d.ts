import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class CreateTrafficMirrorTargetResultTrafficMirrorTargetTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The type of Traffic Mirror target.
 */
export declare enum CreateTrafficMirrorTargetResultTrafficMirrorTargetTypeEnum {
    NetworkInterface = "network-interface",
    NetworkLoadBalancer = "network-load-balancer",
    GatewayLoadBalancerEndpoint = "gateway-load-balancer-endpoint"
}
/**
 * Information about the Traffic Mirror target.
 */
export declare class CreateTrafficMirrorTargetResultTrafficMirrorTarget extends SpeakeasyBase {
    description?: string;
    gatewayLoadBalancerEndpointId?: string;
    networkInterfaceId?: string;
    networkLoadBalancerArn?: string;
    ownerId?: string;
    tags?: CreateTrafficMirrorTargetResultTrafficMirrorTargetTags[];
    trafficMirrorTargetId?: string;
    type?: CreateTrafficMirrorTargetResultTrafficMirrorTargetTypeEnum;
}
/**
 * Success
 */
export declare class CreateTrafficMirrorTargetResult extends SpeakeasyBase {
    clientToken?: string;
    trafficMirrorTarget?: CreateTrafficMirrorTargetResultTrafficMirrorTarget;
}
