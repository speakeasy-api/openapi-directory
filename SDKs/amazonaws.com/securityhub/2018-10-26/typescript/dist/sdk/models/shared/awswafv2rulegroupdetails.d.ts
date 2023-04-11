import { SpeakeasyBase } from "../../../internal/utils";
import { AwsWafv2RulesDetails } from "./awswafv2rulesdetails";
import { AwsWafv2VisibilityConfigDetails } from "./awswafv2visibilityconfigdetails";
/**
 *  Details about an WAFv2 rule group.
 */
export declare class AwsWafv2RuleGroupDetails extends SpeakeasyBase {
    arn?: string;
    capacity?: number;
    description?: string;
    id?: string;
    name?: string;
    rules?: AwsWafv2RulesDetails[];
    scope?: string;
    visibilityConfig?: AwsWafv2VisibilityConfigDetails;
}
