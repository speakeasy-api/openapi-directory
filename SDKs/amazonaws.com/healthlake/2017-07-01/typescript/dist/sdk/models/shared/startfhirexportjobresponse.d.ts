import { SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";
/**
 * Success
 */
export declare class StartFHIRExportJobResponse extends SpeakeasyBase {
    datastoreId?: string;
    jobId: string;
    jobStatus: JobStatusEnum;
}
