import { SpeakeasyBase } from "../../../internal/utils";
import { OrganizationCustomPolicyRuleMetadataNoPolicy } from "./organizationcustompolicyrulemetadatanopolicy";
import { OrganizationCustomRuleMetadata } from "./organizationcustomrulemetadata";
import { OrganizationManagedRuleMetadata } from "./organizationmanagedrulemetadata";
/**
 * An organization Config rule that has information about Config rules that Config creates in member accounts.
 */
export declare class OrganizationConfigRule extends SpeakeasyBase {
    excludedAccounts?: string[];
    lastUpdateTime?: Date;
    organizationConfigRuleArn: string;
    organizationConfigRuleName: string;
    organizationCustomPolicyRuleMetadata?: OrganizationCustomPolicyRuleMetadataNoPolicy;
    organizationCustomRuleMetadata?: OrganizationCustomRuleMetadata;
    organizationManagedRuleMetadata?: OrganizationManagedRuleMetadata;
}
