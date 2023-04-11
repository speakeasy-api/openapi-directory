import { SpeakeasyBase } from "../../../internal/utils";
import { DomainStatus } from "./domainstatus";
/**
 * A response message that contains the status of one or more domains.
 */
export declare class DescribeDomainsResponse extends SpeakeasyBase {
    /**
     * The current status of all of your search domains.
     */
    domainStatusList: DomainStatus[];
}
