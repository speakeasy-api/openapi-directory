import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The retry strategy that's associated with a job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html"> Automated job retries</a> in the <i>Batch User Guide</i>.
 */
export declare class BatchRetryStrategy extends SpeakeasyBase {
    attempts?: number;
}
