import { SpeakeasyBase } from "../../../internal/utils";
import { CompletionEstimation } from "./completionestimation";
import { ProvisioningJobStatusEnum } from "./provisioningjobstatusenum";
/**
 * Success
 */
export declare class ProvisioningJobInfo extends SpeakeasyBase {
    completion?: CompletionEstimation;
    /**
     * The id of the job.
     */
    id?: string;
    /**
     * Current job status
     */
    status?: ProvisioningJobStatusEnum;
}
