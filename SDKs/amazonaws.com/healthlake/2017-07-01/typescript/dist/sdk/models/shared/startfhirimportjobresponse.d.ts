import { SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";
/**
 * Success
 */
export declare class StartFHIRImportJobResponse extends SpeakeasyBase {
    datastoreId?: string;
    jobId: string;
    jobStatus: JobStatusEnum;
}
