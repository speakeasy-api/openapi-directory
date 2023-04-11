import { SpeakeasyBase } from "../../../internal/utils";
import { IngestionJobStatusEnum } from "./ingestionjobstatusenum";
/**
 * Success
 */
export declare class StartDataIngestionJobResponse extends SpeakeasyBase {
    jobId?: string;
    status?: IngestionJobStatusEnum;
}
