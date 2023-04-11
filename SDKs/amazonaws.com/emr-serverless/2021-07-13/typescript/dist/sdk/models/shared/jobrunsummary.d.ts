import { SpeakeasyBase } from "../../../internal/utils";
import { JobRunStateEnum } from "./jobrunstateenum";
/**
 * The summary of attributes associated with a job run.
 */
export declare class JobRunSummary extends SpeakeasyBase {
    applicationId: string;
    arn: string;
    createdAt: Date;
    createdBy: string;
    executionRole: string;
    id: string;
    name?: string;
    releaseLabel: string;
    state: JobRunStateEnum;
    stateDetails: string;
    type?: string;
    updatedAt: Date;
}
