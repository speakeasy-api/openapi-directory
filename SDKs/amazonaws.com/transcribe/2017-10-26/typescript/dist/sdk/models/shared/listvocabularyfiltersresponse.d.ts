import { SpeakeasyBase } from "../../../internal/utils";
import { VocabularyFilterInfo } from "./vocabularyfilterinfo";
/**
 * Success
 */
export declare class ListVocabularyFiltersResponse extends SpeakeasyBase {
    nextToken?: string;
    vocabularyFilters?: VocabularyFilterInfo[];
}
