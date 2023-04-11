import { SpeakeasyBase } from "../../../internal/utils";
import { DetectedDataDetails } from "./detecteddatadetails";
import { RevealRequestStatusEnum } from "./revealrequeststatusenum";
/**
 * Success
 */
export declare class GetSensitiveDataOccurrencesResponse extends SpeakeasyBase {
    error?: string;
    sensitiveDataOccurrences?: Record<string, DetectedDataDetails[]>;
    status?: RevealRequestStatusEnum;
}
