import { SpeakeasyBase } from "../../../internal/utils";
import { AppliedTerminology } from "./appliedterminology";
import { TranslationSettings } from "./translationsettings";
/**
 * Success
 */
export declare class TranslateTextResponse extends SpeakeasyBase {
    appliedSettings?: TranslationSettings;
    appliedTerminologies?: AppliedTerminology[];
    sourceLanguageCode: string;
    targetLanguageCode: string;
    translatedText: string;
}
