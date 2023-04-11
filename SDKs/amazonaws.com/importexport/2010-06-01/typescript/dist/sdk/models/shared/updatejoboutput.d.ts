import { SpeakeasyBase } from "../../../internal/utils";
import { Artifact } from "./artifact";
/**
 * Output structure for the UpateJob operation.
 */
export declare class UpdateJobOutput extends SpeakeasyBase {
    /**
     * A collection of artifacts.
     */
    artifactList?: Artifact[];
    /**
     * Specifies whether (true) or not (false) AWS Import/Export updated your job.
     */
    success?: boolean;
    /**
     * An optional message notifying you of non-fatal issues with the job, such as use of an incompatible Amazon S3 bucket name.
     */
    warningMessage?: string;
}
