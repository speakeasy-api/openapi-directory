import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Describes a security group rule.</p> <p>You must specify exactly one of the following parameters, based on the rule type:</p> <ul> <li> <p>CidrIpv4</p> </li> <li> <p>CidrIpv6</p> </li> <li> <p>PrefixListId</p> </li> <li> <p>ReferencedGroupId</p> </li> </ul> <p>When you modify a rule, you cannot change the rule type. For example, if the rule uses an IPv4 address range, you must use <code>CidrIpv4</code> to specify a new IPv4 address range.</p>
 */
export declare class SecurityGroupRuleRequest extends SpeakeasyBase {
    cidrIpv4?: string;
    cidrIpv6?: string;
    description?: string;
    fromPort?: number;
    ipProtocol?: string;
    prefixListId?: string;
    referencedGroupId?: string;
    toPort?: number;
}
