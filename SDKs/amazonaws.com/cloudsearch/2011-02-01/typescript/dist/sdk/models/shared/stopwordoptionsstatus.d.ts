import { SpeakeasyBase } from "../../../internal/utils";
import { OptionStatus } from "./optionstatus";
/**
 * The stopword options configured for this search domain and the current status of those options.
 */
export declare class StopwordOptionsStatus extends SpeakeasyBase {
    /**
     * Lists stopwords serialized as a JSON document. The document has a single object with one property "stopwords" whose value is an array of strings. The maximum size of a stopwords document is 10 KB. Example: <code>{ "stopwords": ["a", "an", "the", "of"] }</code>
     */
    options: string;
    /**
     * The status of an option, including when it was last updated and whether it is actively in use for searches.
     */
    status: OptionStatus;
}
