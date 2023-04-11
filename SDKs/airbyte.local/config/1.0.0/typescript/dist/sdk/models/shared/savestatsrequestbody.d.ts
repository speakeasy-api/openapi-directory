import { SpeakeasyBase } from "../../../internal/utils";
import { AttemptStats } from "./attemptstats";
import { AttemptStreamStats } from "./attemptstreamstats";
export declare class SaveStatsRequestBody extends SpeakeasyBase {
    attemptNumber: number;
    jobId: number;
    stats: AttemptStats;
    streamStats?: AttemptStreamStats[];
}
