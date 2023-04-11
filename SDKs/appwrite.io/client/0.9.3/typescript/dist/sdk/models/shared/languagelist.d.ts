import { SpeakeasyBase } from "../../../internal/utils";
import { Language } from "./language";
/**
 * Languages List
 */
export declare class LanguageList extends SpeakeasyBase {
    /**
     * List of languages.
     */
    languages: Language[];
    /**
     * Total sum of items in the list.
     */
    sum: number;
}
