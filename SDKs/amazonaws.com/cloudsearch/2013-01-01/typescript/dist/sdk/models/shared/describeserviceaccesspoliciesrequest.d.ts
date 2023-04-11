import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for the parameters to the <code><a>DescribeServiceAccessPolicies</a></code> operation. Specifies the name of the domain you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>.
 */
export declare class DescribeServiceAccessPoliciesRequest extends SpeakeasyBase {
    deployed?: boolean;
    domainName: string;
}
