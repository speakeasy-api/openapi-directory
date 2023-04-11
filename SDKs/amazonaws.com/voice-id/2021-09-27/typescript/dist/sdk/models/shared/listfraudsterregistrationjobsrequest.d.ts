import { SpeakeasyBase } from "../../../internal/utils";
import { FraudsterRegistrationJobStatusEnum } from "./fraudsterregistrationjobstatusenum";
export declare class ListFraudsterRegistrationJobsRequest extends SpeakeasyBase {
    domainId: string;
    jobStatus?: FraudsterRegistrationJobStatusEnum;
    maxResults?: number;
    nextToken?: string;
}
