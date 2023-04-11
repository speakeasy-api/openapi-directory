import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This structure specifies a segment that you have already created, and defines the traffic split for that segment to be used in a launch.
 */
export declare class SegmentOverride extends SpeakeasyBase {
    evaluationOrder: number;
    segment: string;
    weights: Record<string, number>;
}
