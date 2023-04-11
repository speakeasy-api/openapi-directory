import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentSuggesterOptions } from "./documentsuggesteroptions";
/**
 * Configuration information for a search suggester. Each suggester has a unique name and specifies the text field you want to use for suggestions. The following options can be configured for a suggester: <code>FuzzyMatching</code>, <code>SortExpression</code>.
 */
export declare class Suggester extends SpeakeasyBase {
    /**
     * Options for a search suggester.
     */
    documentSuggesterOptions: DocumentSuggesterOptions;
    /**
     * Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).
     */
    suggesterName: string;
}
