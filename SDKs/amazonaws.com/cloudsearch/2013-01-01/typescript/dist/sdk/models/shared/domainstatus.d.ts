import { SpeakeasyBase } from "../../../internal/utils";
import { Limits } from "./limits";
import { ServiceEndpoint } from "./serviceendpoint";
/**
 * The current status of the search domain.
 */
export declare class DomainStatus extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the search domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.
     */
    arn?: string;
    created?: boolean;
    deleted?: boolean;
    docService?: ServiceEndpoint;
    /**
     * An internally generated unique identifier for a domain.
     */
    domainId: string;
    /**
     * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
     */
    domainName: string;
    limits?: Limits;
    processing?: boolean;
    requiresIndexDocuments: boolean;
    searchInstanceCount?: number;
    searchInstanceType?: string;
    searchPartitionCount?: number;
    searchService?: ServiceEndpoint;
}
