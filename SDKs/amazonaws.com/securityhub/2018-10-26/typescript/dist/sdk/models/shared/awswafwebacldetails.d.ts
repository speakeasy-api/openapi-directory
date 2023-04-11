import { SpeakeasyBase } from "../../../internal/utils";
import { AwsWafWebAclRule } from "./awswafwebaclrule";
/**
 * Provides information about an WAF web access control list (web ACL).
 */
export declare class AwsWafWebAclDetails extends SpeakeasyBase {
    defaultAction?: string;
    name?: string;
    rules?: AwsWafWebAclRule[];
    webAclId?: string;
}
