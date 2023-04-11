import { SpeakeasyBase } from "../../../internal/utils";
import { JobSummary } from "./jobsummary";
/**
 *  The result structure for the delete job request.
 */
export declare class DeleteJobResult extends SpeakeasyBase {
    /**
     *  Describes the summary for an execution job for an Amplify app.
     */
    jobSummary: JobSummary;
}
