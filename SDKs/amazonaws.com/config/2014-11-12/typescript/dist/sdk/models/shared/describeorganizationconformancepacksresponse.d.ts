import { SpeakeasyBase } from "../../../internal/utils";
import { OrganizationConformancePack } from "./organizationconformancepack";
/**
 * Success
 */
export declare class DescribeOrganizationConformancePacksResponse extends SpeakeasyBase {
    nextToken?: string;
    organizationConformancePacks?: OrganizationConformancePack[];
}
