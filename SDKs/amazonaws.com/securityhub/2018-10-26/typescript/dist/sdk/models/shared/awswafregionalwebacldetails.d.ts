import { SpeakeasyBase } from "../../../internal/utils";
import { AwsWafRegionalWebAclRulesListDetails } from "./awswafregionalwebaclruleslistdetails";
/**
 * Provides information about the web access control list (web ACL). The web ACL contains the rules that identify the requests that you want to allow, block, or count.
 */
export declare class AwsWafRegionalWebAclDetails extends SpeakeasyBase {
    defaultAction?: string;
    metricName?: string;
    name?: string;
    rulesList?: AwsWafRegionalWebAclRulesListDetails[];
    webAclId?: string;
}
