import { SpeakeasyBase } from "../../../internal/utils";
import { RetryCriteria } from "./retrycriteria";
/**
 * The configuration that determines how many retries are allowed for each failure type for a job.
 */
export declare class JobExecutionsRetryConfig extends SpeakeasyBase {
    criteriaList: RetryCriteria[];
}
