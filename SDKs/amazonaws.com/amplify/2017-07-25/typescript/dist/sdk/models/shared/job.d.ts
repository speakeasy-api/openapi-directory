import { SpeakeasyBase } from "../../../internal/utils";
import { JobSummary } from "./jobsummary";
import { Step } from "./step";
/**
 *  Describes an execution job for an Amplify app.
 */
export declare class Job extends SpeakeasyBase {
    steps: Step[];
    summary: JobSummary;
}
