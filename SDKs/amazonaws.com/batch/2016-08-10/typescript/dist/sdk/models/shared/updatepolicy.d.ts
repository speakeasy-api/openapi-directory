import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the infrastructure update policy for the compute environment. For more information about infrastructure updates, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.
 */
export declare class UpdatePolicy extends SpeakeasyBase {
    jobExecutionTimeoutMinutes?: number;
    terminateJobsOnUpdate?: boolean;
}
