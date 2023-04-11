import { SpeakeasyBase } from "../../../internal/utils";
import { DomainStatus } from "./domainstatus";
/**
 * A response message that contains the status of a newly created domain.
 */
export declare class CreateDomainResponse extends SpeakeasyBase {
    /**
     * The current status of the search domain.
     */
    domainStatus?: DomainStatus;
}
