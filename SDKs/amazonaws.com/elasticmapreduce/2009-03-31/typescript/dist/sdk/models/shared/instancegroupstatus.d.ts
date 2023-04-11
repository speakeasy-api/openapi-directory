import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceGroupStateChangeReason } from "./instancegroupstatechangereason";
import { InstanceGroupStateEnum } from "./instancegroupstateenum";
import { InstanceGroupTimeline } from "./instancegrouptimeline";
/**
 * The details of the instance group status.
 */
export declare class InstanceGroupStatus extends SpeakeasyBase {
    state?: InstanceGroupStateEnum;
    stateChangeReason?: InstanceGroupStateChangeReason;
    timeline?: InstanceGroupTimeline;
}
