import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the Traffic Mirror filter.
**/
export declare class CreateTrafficMirrorFilterResultTrafficMirrorFilter extends SpeakeasyBase {
    description?: Record<string, any>;
    egressFilterRules?: Record<string, any>;
    ingressFilterRules?: Record<string, any>;
    networkServices?: Record<string, any>;
    tags?: Record<string, any>;
    trafficMirrorFilterId?: Record<string, any>;
}
export declare class CreateTrafficMirrorFilterResult extends SpeakeasyBase {
    clientToken?: Record<string, any>;
    trafficMirrorFilter?: CreateTrafficMirrorFilterResultTrafficMirrorFilter;
}
