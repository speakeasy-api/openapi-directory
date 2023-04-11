import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for the parameters to the <code><a>DescribeDomains</a></code> operation. By default shows the status of all domains. To restrict the response to particular domains, specify the names of the domains you want to describe.
 */
export declare class DescribeDomainsRequest extends SpeakeasyBase {
    domainNames?: string[];
}
