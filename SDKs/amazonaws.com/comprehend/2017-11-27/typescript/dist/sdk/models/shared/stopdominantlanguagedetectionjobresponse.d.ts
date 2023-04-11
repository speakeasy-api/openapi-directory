import { SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";
/**
 * Success
 */
export declare class StopDominantLanguageDetectionJobResponse extends SpeakeasyBase {
    jobId?: string;
    jobStatus?: JobStatusEnum;
}
