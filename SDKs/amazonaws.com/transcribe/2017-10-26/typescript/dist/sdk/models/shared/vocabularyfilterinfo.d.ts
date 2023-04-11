import { SpeakeasyBase } from "../../../internal/utils";
import { LanguageCodeEnum } from "./languagecodeenum";
/**
 * Provides information about a custom vocabulary filter, including the language of the filter, when it was last modified, and its name.
 */
export declare class VocabularyFilterInfo extends SpeakeasyBase {
    languageCode?: LanguageCodeEnum;
    lastModifiedTime?: Date;
    vocabularyFilterName?: string;
}
