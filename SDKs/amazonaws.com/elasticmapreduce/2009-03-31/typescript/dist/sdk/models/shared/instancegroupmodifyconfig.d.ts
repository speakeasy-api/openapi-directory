import { SpeakeasyBase } from "../../../internal/utils";
import { Configuration } from "./configuration";
import { ReconfigurationTypeEnum } from "./reconfigurationtypeenum";
import { ShrinkPolicy } from "./shrinkpolicy";
/**
 * Modify the size or configurations of an instance group.
 */
export declare class InstanceGroupModifyConfig extends SpeakeasyBase {
    configurations?: Configuration[];
    ec2InstanceIdsToTerminate?: string[];
    instanceCount?: number;
    instanceGroupId: string;
    reconfigurationType?: ReconfigurationTypeEnum;
    shrinkPolicy?: ShrinkPolicy;
}
