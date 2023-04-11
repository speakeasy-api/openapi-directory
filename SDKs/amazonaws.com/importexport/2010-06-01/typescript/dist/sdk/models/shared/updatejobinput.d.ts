import { SpeakeasyBase } from "../../../internal/utils";
import { JobTypeEnum } from "./jobtypeenum";
/**
 * Input structure for the UpateJob operation.
 */
export declare class UpdateJobInput extends SpeakeasyBase {
    /**
     * Specifies the version of the client tool.
     */
    apiVersion?: string;
    /**
     * A unique identifier which refers to a particular job.
     */
    jobId: string;
    /**
     * Specifies whether the job to initiate is an import or export job.
     */
    jobType: JobTypeEnum;
    /**
     * The UTF-8 encoded text of the manifest file.
     */
    manifest: string;
    /**
     * Validate the manifest and parameter values in the request but do not actually create a job.
     */
    validateOnly: boolean;
}
