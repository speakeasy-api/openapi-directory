import { SpeakeasyBase } from "../../../internal/utils";
import { CustomVocabularyItem } from "./customvocabularyitem";
import { FailedCustomVocabularyItem } from "./failedcustomvocabularyitem";
/**
 * Success
 */
export declare class BatchDeleteCustomVocabularyItemResponse extends SpeakeasyBase {
    botId?: string;
    botVersion?: string;
    errors?: FailedCustomVocabularyItem[];
    localeId?: string;
    resources?: CustomVocabularyItem[];
}
