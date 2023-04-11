import { SpeakeasyBase } from "../../../internal/utils";
import { OrganizationConfigRule } from "./organizationconfigrule";
/**
 * Success
 */
export declare class DescribeOrganizationConfigRulesResponse extends SpeakeasyBase {
    nextToken?: string;
    organizationConfigRules?: OrganizationConfigRule[];
}
