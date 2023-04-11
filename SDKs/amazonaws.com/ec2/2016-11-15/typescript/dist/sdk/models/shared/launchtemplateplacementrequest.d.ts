import { SpeakeasyBase } from "../../../internal/utils";
import { TenancyEnum } from "./tenancyenum";
/**
 * Describes the placement of an instance.
 */
export declare class LaunchTemplatePlacementRequest extends SpeakeasyBase {
    affinity?: string;
    availabilityZone?: string;
    groupId?: string;
    groupName?: string;
    hostId?: string;
    hostResourceGroupArn?: string;
    partitionNumber?: number;
    spreadDomain?: string;
    tenancy?: TenancyEnum;
}
