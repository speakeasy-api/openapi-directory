import { SpeakeasyBase } from "../../../internal/utils";
import { CustomVocabularyItem } from "./customvocabularyitem";
/**
 * Success
 */
export declare class ListCustomVocabularyItemsResponse extends SpeakeasyBase {
    botId?: string;
    botVersion?: string;
    customVocabularyItems?: CustomVocabularyItem[];
    localeId?: string;
    nextToken?: string;
}
