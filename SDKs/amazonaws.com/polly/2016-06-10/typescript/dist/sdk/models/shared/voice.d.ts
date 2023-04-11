import { SpeakeasyBase } from "../../../internal/utils";
import { EngineEnum } from "./engineenum";
import { GenderEnum } from "./genderenum";
import { LanguageCodeEnum } from "./languagecodeenum";
import { VoiceIdEnum } from "./voiceidenum";
/**
 * Description of the voice.
 */
export declare class Voice extends SpeakeasyBase {
    additionalLanguageCodes?: LanguageCodeEnum[];
    gender?: GenderEnum;
    id?: VoiceIdEnum;
    languageCode?: LanguageCodeEnum;
    languageName?: string;
    name?: string;
    supportedEngines?: EngineEnum[];
}
