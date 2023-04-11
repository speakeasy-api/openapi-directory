import { SpeakeasyBase } from "../../../internal/utils";
import { AwsWafRegionalWebAclRulesListActionDetails } from "./awswafregionalwebaclruleslistactiondetails";
import { AwsWafRegionalWebAclRulesListOverrideActionDetails } from "./awswafregionalwebaclruleslistoverrideactiondetails";
/**
 * A combination of <code>ByteMatchSet</code>, <code>IPSet</code>, and/or <code>SqlInjectionMatchSet</code> objects that identify the web requests that you want to allow, block, or count.
 */
export declare class AwsWafRegionalWebAclRulesListDetails extends SpeakeasyBase {
    action?: AwsWafRegionalWebAclRulesListActionDetails;
    overrideAction?: AwsWafRegionalWebAclRulesListOverrideActionDetails;
    priority?: number;
    ruleId?: string;
    type?: string;
}
