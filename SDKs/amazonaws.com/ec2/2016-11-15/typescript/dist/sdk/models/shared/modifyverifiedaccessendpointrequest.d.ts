import { SpeakeasyBase } from "../../../internal/utils";
import { ModifyVerifiedAccessEndpointEniOptions } from "./modifyverifiedaccessendpointenioptions";
import { ModifyVerifiedAccessEndpointLoadBalancerOptions } from "./modifyverifiedaccessendpointloadbalanceroptions";
export declare class ModifyVerifiedAccessEndpointRequest extends SpeakeasyBase {
    clientToken?: string;
    description?: string;
    dryRun?: boolean;
    loadBalancerOptions?: ModifyVerifiedAccessEndpointLoadBalancerOptions;
    networkInterfaceOptions?: ModifyVerifiedAccessEndpointEniOptions;
    verifiedAccessEndpointId: string;
    verifiedAccessGroupId?: string;
}
