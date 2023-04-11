import { SpeakeasyBase } from "../../../internal/utils";
import { AccessDetail } from "./accessdetail";
import { ErrorDetails } from "./errordetails";
import { JobStatusTypeEnum } from "./jobstatustypeenum";
/**
 * Success
 */
export declare class GetOrganizationsAccessReportResponse extends SpeakeasyBase {
    accessDetails?: AccessDetail[];
    /**
     * <p>Contains information about the reason that the operation failed.</p> <p>This data type is used as a response element in the <a>GetOrganizationsAccessReport</a>, <a>GetServiceLastAccessedDetails</a>, and <a>GetServiceLastAccessedDetailsWithEntities</a> operations.</p>
     */
    errorDetails?: ErrorDetails;
    isTruncated?: boolean;
    jobCompletionDate?: Date;
    jobCreationDate: Date;
    jobStatus: JobStatusTypeEnum;
    marker?: string;
    numberOfServicesAccessible?: number;
    numberOfServicesNotAccessed?: number;
}
