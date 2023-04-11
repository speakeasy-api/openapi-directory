import { SpeakeasyBase } from "../../../internal/utils";
import { OrganizationConformancePackStatus } from "./organizationconformancepackstatus";
/**
 * Success
 */
export declare class DescribeOrganizationConformancePackStatusesResponse extends SpeakeasyBase {
    nextToken?: string;
    organizationConformancePackStatuses?: OrganizationConformancePackStatus[];
}
