import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Traffic Mirror filter that the network service is associated with.
**/
export declare class ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilter extends SpeakeasyBase {
    description?: Record<string, any>;
    egressFilterRules?: Record<string, any>;
    ingressFilterRules?: Record<string, any>;
    networkServices?: Record<string, any>;
    tags?: Record<string, any>;
    trafficMirrorFilterId?: Record<string, any>;
}
export declare class ModifyTrafficMirrorFilterNetworkServicesResult extends SpeakeasyBase {
    trafficMirrorFilter?: ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilter;
}
