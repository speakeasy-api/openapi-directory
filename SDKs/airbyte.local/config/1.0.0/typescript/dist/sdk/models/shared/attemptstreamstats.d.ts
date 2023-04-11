import { SpeakeasyBase } from "../../../internal/utils";
import { AttemptStats } from "./attemptstats";
export declare class AttemptStreamStats extends SpeakeasyBase {
    stats: AttemptStats;
    streamName: string;
    streamNamespace?: string;
}
