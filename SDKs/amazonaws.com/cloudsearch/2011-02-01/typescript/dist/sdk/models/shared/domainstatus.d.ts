import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceEndpoint } from "./serviceendpoint";
/**
 * The current status of the search domain.
 */
export declare class DomainStatus extends SpeakeasyBase {
    created?: boolean;
    deleted?: boolean;
    docService?: ServiceEndpoint;
    /**
     * An internally generated unique identifier for a domain.
     */
    domainId: string;
    /**
     * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
     */
    domainName: string;
    numSearchableDocs?: number;
    processing?: boolean;
    requiresIndexDocuments: boolean;
    searchInstanceCount?: number;
    searchInstanceType?: string;
    searchPartitionCount?: number;
    searchService?: ServiceEndpoint;
}
