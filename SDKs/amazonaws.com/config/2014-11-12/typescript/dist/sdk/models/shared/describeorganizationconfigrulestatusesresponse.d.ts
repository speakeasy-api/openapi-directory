import { SpeakeasyBase } from "../../../internal/utils";
import { OrganizationConfigRuleStatus } from "./organizationconfigrulestatus";
/**
 * Success
 */
export declare class DescribeOrganizationConfigRuleStatusesResponse extends SpeakeasyBase {
    nextToken?: string;
    organizationConfigRuleStatuses?: OrganizationConfigRuleStatus[];
}
