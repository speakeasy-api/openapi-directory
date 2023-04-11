import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for the parameters to the <code><a>DescribeAvailabilityOptions</a></code> operation. Specifies the name of the domain you want to describe. To show the active configuration and exclude any pending changes, set the Deployed option to <code>true</code>.
 */
export declare class DescribeAvailabilityOptionsRequest extends SpeakeasyBase {
    domainName: string;
}
