import { SpeakeasyBase } from "../../../internal/utils";
import { SpeakerEnrollmentJobSummary } from "./speakerenrollmentjobsummary";
/**
 * Success
 */
export declare class ListSpeakerEnrollmentJobsResponse extends SpeakeasyBase {
    jobSummaries?: SpeakerEnrollmentJobSummary[];
    nextToken?: string;
}
