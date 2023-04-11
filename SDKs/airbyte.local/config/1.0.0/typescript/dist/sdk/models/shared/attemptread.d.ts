import { SpeakeasyBase } from "../../../internal/utils";
import { AttemptFailureSummary } from "./attemptfailuresummary";
import { AttemptStats } from "./attemptstats";
import { AttemptStatusEnum } from "./attemptstatusenum";
import { AttemptStreamStats } from "./attemptstreamstats";
export declare class AttemptRead extends SpeakeasyBase {
    bytesSynced?: number;
    createdAt: number;
    endedAt?: number;
    failureSummary?: AttemptFailureSummary;
    id: number;
    recordsSynced?: number;
    status: AttemptStatusEnum;
    streamStats?: AttemptStreamStats[];
    totalStats?: AttemptStats;
    updatedAt: number;
}
