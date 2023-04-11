import { SpeakeasyBase } from "../../../internal/utils";
import { FraudsterRegistrationJobSummary } from "./fraudsterregistrationjobsummary";
/**
 * Success
 */
export declare class ListFraudsterRegistrationJobsResponse extends SpeakeasyBase {
    jobSummaries?: FraudsterRegistrationJobSummary[];
    nextToken?: string;
}
