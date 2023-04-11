import { SpeakeasyBase } from "../../../internal/utils";
import { OrganizationConformancePackDetailedStatus } from "./organizationconformancepackdetailedstatus";
/**
 * Success
 */
export declare class GetOrganizationConformancePackDetailedStatusResponse extends SpeakeasyBase {
    nextToken?: string;
    organizationConformancePackDetailedStatuses?: OrganizationConformancePackDetailedStatus[];
}
