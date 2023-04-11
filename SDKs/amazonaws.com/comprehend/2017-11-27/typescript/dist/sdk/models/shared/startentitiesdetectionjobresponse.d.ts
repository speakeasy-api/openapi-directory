import { SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";
/**
 * Success
 */
export declare class StartEntitiesDetectionJobResponse extends SpeakeasyBase {
    entityRecognizerArn?: string;
    jobArn?: string;
    jobId?: string;
    jobStatus?: JobStatusEnum;
}
