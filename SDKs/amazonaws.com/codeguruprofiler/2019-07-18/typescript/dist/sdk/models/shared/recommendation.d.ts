import { SpeakeasyBase } from "../../../internal/utils";
import { Match } from "./match";
import { Pattern } from "./pattern";
/**
 * A potential improvement that was found from analyzing the profiling data.
 */
export declare class Recommendation extends SpeakeasyBase {
    allMatchesCount: number;
    allMatchesSum: number;
    endTime: Date;
    pattern: Pattern;
    startTime: Date;
    topMatches: Match[];
}
