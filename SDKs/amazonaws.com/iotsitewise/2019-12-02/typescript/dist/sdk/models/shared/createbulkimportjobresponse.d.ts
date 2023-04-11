import { SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";
/**
 * Success
 */
export declare class CreateBulkImportJobResponse extends SpeakeasyBase {
    jobId: string;
    jobName: string;
    jobStatus: JobStatusEnum;
}
