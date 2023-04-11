import { SpeakeasyBase } from "../../../internal/utils";
import { MaximumExecutionFrequencyEnum } from "./maximumexecutionfrequencyenum";
import { OrganizationConfigRuleTriggerTypeNoSNEnum } from "./organizationconfigruletriggertypenosnenum";
/**
 * An object that specifies metadata for your organization Config Custom Policy rule including the runtime system in use, which accounts have debug logging enabled, and other custom rule metadata such as resource type, resource ID of Amazon Web Services resource, and organization trigger types that trigger Config to evaluate Amazon Web Services resources against a rule.
 */
export declare class OrganizationCustomPolicyRuleMetadataNoPolicy extends SpeakeasyBase {
    debugLogDeliveryAccounts?: string[];
    description?: string;
    inputParameters?: string;
    maximumExecutionFrequency?: MaximumExecutionFrequencyEnum;
    organizationConfigRuleTriggerTypes?: OrganizationConfigRuleTriggerTypeNoSNEnum[];
    policyRuntime?: string;
    resourceIdScope?: string;
    resourceTypesScope?: string[];
    tagKeyScope?: string;
    tagValueScope?: string;
}
