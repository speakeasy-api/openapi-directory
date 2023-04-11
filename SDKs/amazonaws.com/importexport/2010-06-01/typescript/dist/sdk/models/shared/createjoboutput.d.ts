import { SpeakeasyBase } from "../../../internal/utils";
import { Artifact } from "./artifact";
import { JobTypeEnum } from "./jobtypeenum";
/**
 * Output structure for the CreateJob operation.
 */
export declare class CreateJobOutput extends SpeakeasyBase {
    /**
     * A collection of artifacts.
     */
    artifactList?: Artifact[];
    /**
     * A unique identifier which refers to a particular job.
     */
    jobId?: string;
    /**
     * Specifies whether the job to initiate is an import or export job.
     */
    jobType?: JobTypeEnum;
    /**
     * An encrypted code used to authenticate the request and response, for example, "DV+TpDfx1/TdSE9ktyK9k/bDTVI=". Only use this value is you want to create the signature file yourself. Generally you should use the SignatureFileContents value.
     */
    signature?: string;
    /**
     * The actual text of the SIGNATURE file to be written to disk.
     */
    signatureFileContents?: string;
    /**
     * An optional message notifying you of non-fatal issues with the job, such as use of an incompatible Amazon S3 bucket name.
     */
    warningMessage?: string;
}
