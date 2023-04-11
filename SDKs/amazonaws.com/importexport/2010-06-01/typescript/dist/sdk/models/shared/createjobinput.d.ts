import { SpeakeasyBase } from "../../../internal/utils";
import { JobTypeEnum } from "./jobtypeenum";
/**
 * Input structure for the CreateJob operation.
 */
export declare class CreateJobInput extends SpeakeasyBase {
    /**
     * Specifies the version of the client tool.
     */
    apiVersion?: string;
    /**
     * Specifies whether the job to initiate is an import or export job.
     */
    jobType: JobTypeEnum;
    /**
     * The UTF-8 encoded text of the manifest file.
     */
    manifest: string;
    /**
     * For internal use only.
     */
    manifestAddendum?: string;
    /**
     * Validate the manifest and parameter values in the request but do not actually create a job.
     */
    validateOnly: boolean;
}
