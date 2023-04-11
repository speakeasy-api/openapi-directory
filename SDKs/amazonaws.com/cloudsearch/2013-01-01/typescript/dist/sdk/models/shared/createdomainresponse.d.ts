import { SpeakeasyBase } from "../../../internal/utils";
import { DomainStatus } from "./domainstatus";
/**
 * The result of a <code>CreateDomainRequest</code>. Contains the status of a newly created domain.
 */
export declare class CreateDomainResponse extends SpeakeasyBase {
    /**
     * The current status of the search domain.
     */
    domainStatus?: DomainStatus;
}
