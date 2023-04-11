import { SpeakeasyBase } from "../../../internal/utils";
import { SpeakerEnrollmentJobStatusEnum } from "./speakerenrollmentjobstatusenum";
export declare class ListSpeakerEnrollmentJobsRequest extends SpeakeasyBase {
    domainId: string;
    jobStatus?: SpeakerEnrollmentJobStatusEnum;
    maxResults?: number;
    nextToken?: string;
}
