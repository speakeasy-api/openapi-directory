import { SpeakeasyBase } from "../../../internal/utils";
import { Suggester } from "./suggester";
/**
 * Container for the parameters to the <code><a>DefineSuggester</a></code> operation. Specifies the name of the domain you want to update and the suggester configuration.
 */
export declare class DefineSuggesterRequest extends SpeakeasyBase {
    /**
     * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
     */
    domainName: string;
    /**
     * Configuration information for a search suggester. Each suggester has a unique name and specifies the text field you want to use for suggestions. The following options can be configured for a suggester: <code>FuzzyMatching</code>, <code>SortExpression</code>.
     */
    suggester: Suggester;
}
