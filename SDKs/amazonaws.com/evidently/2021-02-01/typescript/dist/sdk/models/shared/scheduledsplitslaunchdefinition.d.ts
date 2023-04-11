import { SpeakeasyBase } from "../../../internal/utils";
import { ScheduledSplit } from "./scheduledsplit";
/**
 * An array of structures that define the traffic allocation percentages among the feature variations during each step of a launch. This also defines the start time of each step.
 */
export declare class ScheduledSplitsLaunchDefinition extends SpeakeasyBase {
    steps?: ScheduledSplit[];
}
