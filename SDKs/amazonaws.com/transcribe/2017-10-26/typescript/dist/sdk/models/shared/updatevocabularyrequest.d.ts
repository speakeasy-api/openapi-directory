import { SpeakeasyBase } from "../../../internal/utils";
import { LanguageCodeEnum } from "./languagecodeenum";
export declare class UpdateVocabularyRequest extends SpeakeasyBase {
    dataAccessRoleArn?: string;
    languageCode: LanguageCodeEnum;
    phrases?: string[];
    vocabularyFileUri?: string;
    vocabularyName: string;
}
