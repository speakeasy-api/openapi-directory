import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The affinity setting for the instance.
 */
export declare enum ModifyInstancePlacementRequestAffinityEnum {
    Default = "default",
    Host = "host"
}
/**
 * <p>The tenancy for the instance.</p> <note> <p>For T3 instances, you can't change the tenancy from <code>dedicated</code> to <code>host</code>, or from <code>host</code> to <code>dedicated</code>. Attempting to make one of these unsupported tenancy changes results in the <code>InvalidTenancy</code> error code.</p> </note>
 */
export declare enum ModifyInstancePlacementRequestTenancyEnum {
    Dedicated = "dedicated",
    Host = "host"
}
export declare class ModifyInstancePlacementRequest extends SpeakeasyBase {
    affinity?: ModifyInstancePlacementRequestAffinityEnum;
    groupId?: string;
    groupName?: string;
    hostId?: string;
    hostResourceGroupArn?: string;
    instanceId: string;
    partitionNumber?: number;
    tenancy?: ModifyInstancePlacementRequestTenancyEnum;
}
