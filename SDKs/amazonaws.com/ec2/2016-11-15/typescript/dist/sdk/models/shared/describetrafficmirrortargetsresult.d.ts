import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class DescribeTrafficMirrorTargetsResultTrafficMirrorTargetsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The type of Traffic Mirror target.
 */
export declare enum DescribeTrafficMirrorTargetsResultTrafficMirrorTargetsTypeEnum {
    NetworkInterface = "network-interface",
    NetworkLoadBalancer = "network-load-balancer",
    GatewayLoadBalancerEndpoint = "gateway-load-balancer-endpoint"
}
/**
 * Describes a Traffic Mirror target.
 */
export declare class DescribeTrafficMirrorTargetsResultTrafficMirrorTargets extends SpeakeasyBase {
    description?: string;
    gatewayLoadBalancerEndpointId?: string;
    networkInterfaceId?: string;
    networkLoadBalancerArn?: string;
    ownerId?: string;
    tags?: DescribeTrafficMirrorTargetsResultTrafficMirrorTargetsTags[];
    trafficMirrorTargetId?: string;
    type?: DescribeTrafficMirrorTargetsResultTrafficMirrorTargetsTypeEnum;
}
/**
 * Success
 */
export declare class DescribeTrafficMirrorTargetsResult extends SpeakeasyBase {
    nextToken?: string;
    trafficMirrorTargets?: DescribeTrafficMirrorTargetsResultTrafficMirrorTargets[];
}
