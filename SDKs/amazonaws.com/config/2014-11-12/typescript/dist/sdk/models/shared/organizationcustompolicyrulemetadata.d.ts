import { SpeakeasyBase } from "../../../internal/utils";
import { MaximumExecutionFrequencyEnum } from "./maximumexecutionfrequencyenum";
import { OrganizationConfigRuleTriggerTypeNoSNEnum } from "./organizationconfigruletriggertypenosnenum";
/**
 * An object that specifies metadata for your organization's Config Custom Policy rule. The metadata includes the runtime system in use, which accounts have debug logging enabled, and other custom rule metadata, such as resource type, resource ID of Amazon Web Services resource, and organization trigger types that initiate Config to evaluate Amazon Web Services resources against a rule.
 */
export declare class OrganizationCustomPolicyRuleMetadata extends SpeakeasyBase {
    debugLogDeliveryAccounts?: string[];
    description?: string;
    inputParameters?: string;
    maximumExecutionFrequency?: MaximumExecutionFrequencyEnum;
    organizationConfigRuleTriggerTypes?: OrganizationConfigRuleTriggerTypeNoSNEnum[];
    policyRuntime: string;
    policyText: string;
    resourceIdScope?: string;
    resourceTypesScope?: string[];
    tagKeyScope?: string;
    tagValueScope?: string;
}
