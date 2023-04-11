import { SpeakeasyBase } from "../../../internal/utils";
import { OrganizationCustomPolicyRuleMetadata } from "./organizationcustompolicyrulemetadata";
import { OrganizationCustomRuleMetadata } from "./organizationcustomrulemetadata";
import { OrganizationManagedRuleMetadata } from "./organizationmanagedrulemetadata";
export declare class PutOrganizationConfigRuleRequest extends SpeakeasyBase {
    excludedAccounts?: string[];
    organizationConfigRuleName: string;
    organizationCustomPolicyRuleMetadata?: OrganizationCustomPolicyRuleMetadata;
    organizationCustomRuleMetadata?: OrganizationCustomRuleMetadata;
    organizationManagedRuleMetadata?: OrganizationManagedRuleMetadata;
}
