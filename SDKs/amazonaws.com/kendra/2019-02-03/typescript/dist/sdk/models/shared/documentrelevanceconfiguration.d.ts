import { SpeakeasyBase } from "../../../internal/utils";
import { Relevance } from "./relevance";
/**
 * Overrides the document relevance properties of a custom index field.
 */
export declare class DocumentRelevanceConfiguration extends SpeakeasyBase {
    name: string;
    relevance: Relevance;
}
