import { SpeakeasyBase } from "../../../internal/utils";
import { LanguageCodeEnum } from "./languagecodeenum";
/**
 * Provides information on the speech contained in a discreet utterance when multi-language identification is enabled in your request. This utterance represents a block of speech consisting of one language, preceded or followed by a block of speech in a different language.
 */
export declare class LanguageCodeItem extends SpeakeasyBase {
    durationInSeconds?: number;
    languageCode?: LanguageCodeEnum;
}
