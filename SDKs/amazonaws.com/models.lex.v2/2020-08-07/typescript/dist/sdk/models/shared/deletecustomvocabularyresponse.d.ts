import { SpeakeasyBase } from "../../../internal/utils";
import { CustomVocabularyStatusEnum } from "./customvocabularystatusenum";
/**
 * Success
 */
export declare class DeleteCustomVocabularyResponse extends SpeakeasyBase {
    botId?: string;
    botVersion?: string;
    customVocabularyStatus?: CustomVocabularyStatusEnum;
    localeId?: string;
}
