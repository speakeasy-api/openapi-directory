import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceRequirementsRequest } from "./instancerequirementsrequest";
import { InstanceTypeEnum } from "./instancetypeenum";
import { Placement } from "./placement";
/**
 * Describes overrides for a launch template.
 */
export declare class FleetLaunchTemplateOverridesListRequest extends SpeakeasyBase {
    availabilityZone?: string;
    imageId?: string;
    instanceRequirements?: InstanceRequirementsRequest;
    instanceType?: InstanceTypeEnum;
    maxPrice?: string;
    placement?: Placement;
    priority?: number;
    subnetId?: string;
    weightedCapacity?: number;
}
