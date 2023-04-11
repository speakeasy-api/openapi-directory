import { SpeakeasyBase } from "../../../internal/utils";
import { AwsWafv2RulesActionDetails } from "./awswafv2rulesactiondetails";
import { AwsWafv2VisibilityConfigDetails } from "./awswafv2visibilityconfigdetails";
/**
 *  Provides details about rules in a rule group. A rule identifies web requests that you want to allow, block, or count. Each rule includes one top-level Statement that WAF uses to identify matching web requests, and parameters that govern how WAF handles them.
 */
export declare class AwsWafv2RulesDetails extends SpeakeasyBase {
    action?: AwsWafv2RulesActionDetails;
    name?: string;
    overrideAction?: string;
    priority?: number;
    visibilityConfig?: AwsWafv2VisibilityConfigDetails;
}
