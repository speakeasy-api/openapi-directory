import { SpeakeasyBase } from "../../../internal/utils";
import { AccessAdvisorUsageGranularityTypeEnum } from "./accessadvisorusagegranularitytypeenum";
import { ErrorDetails } from "./errordetails";
import { JobStatusTypeEnum } from "./jobstatustypeenum";
import { ServiceLastAccessed } from "./servicelastaccessed";
/**
 * Success
 */
export declare class GetServiceLastAccessedDetailsResponse extends SpeakeasyBase {
    error?: ErrorDetails;
    isTruncated?: boolean;
    jobCompletionDate: Date;
    jobCreationDate: Date;
    jobStatus: JobStatusTypeEnum;
    jobType?: AccessAdvisorUsageGranularityTypeEnum;
    marker?: string;
    servicesLastAccessed: ServiceLastAccessed[];
}
