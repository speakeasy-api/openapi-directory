import { SpeakeasyBase } from "../../../internal/utils";
import { SegmentOverride } from "./segmentoverride";
/**
 * This structure defines the traffic allocation percentages among the feature variations during one step of a launch, and the start time of that step.
 */
export declare class ScheduledSplitConfig extends SpeakeasyBase {
    groupWeights: Record<string, number>;
    segmentOverrides?: SegmentOverride[];
    startTime: Date;
}
