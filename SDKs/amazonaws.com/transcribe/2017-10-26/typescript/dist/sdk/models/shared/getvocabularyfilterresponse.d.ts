import { SpeakeasyBase } from "../../../internal/utils";
import { LanguageCodeEnum } from "./languagecodeenum";
/**
 * Success
 */
export declare class GetVocabularyFilterResponse extends SpeakeasyBase {
    downloadUri?: string;
    languageCode?: LanguageCodeEnum;
    lastModifiedTime?: Date;
    vocabularyFilterName?: string;
}
