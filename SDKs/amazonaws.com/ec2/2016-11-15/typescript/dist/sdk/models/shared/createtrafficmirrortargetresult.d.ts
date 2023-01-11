import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the Traffic Mirror target.
**/
export declare class CreateTrafficMirrorTargetResultTrafficMirrorTarget extends SpeakeasyBase {
    description?: Record<string, any>;
    networkInterfaceId?: Record<string, any>;
    networkLoadBalancerArn?: Record<string, any>;
    ownerId?: Record<string, any>;
    tags?: Record<string, any>;
    trafficMirrorTargetId?: Record<string, any>;
    type?: Record<string, any>;
}
export declare class CreateTrafficMirrorTargetResult extends SpeakeasyBase {
    clientToken?: Record<string, any>;
    trafficMirrorTarget?: CreateTrafficMirrorTargetResultTrafficMirrorTarget;
}
