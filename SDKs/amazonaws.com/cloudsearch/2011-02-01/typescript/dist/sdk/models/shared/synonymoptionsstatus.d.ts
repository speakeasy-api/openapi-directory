import { SpeakeasyBase } from "../../../internal/utils";
import { OptionStatus } from "./optionstatus";
/**
 * The synonym options configured for this search domain and the current status of those options.
 */
export declare class SynonymOptionsStatus extends SpeakeasyBase {
    /**
     * Maps terms to their synonyms, serialized as a JSON document. The document has a single object with one property "synonyms" whose value is an object mapping terms to their synonyms. Each synonym is a simple string or an array of strings. The maximum size of a stopwords document is 100 KB. Example: <code>{ "synonyms": {"cat": ["feline", "kitten"], "puppy": "dog"} }</code>
     */
    options: string;
    /**
     * The status of an option, including when it was last updated and whether it is actively in use for searches.
     */
    status: OptionStatus;
}
