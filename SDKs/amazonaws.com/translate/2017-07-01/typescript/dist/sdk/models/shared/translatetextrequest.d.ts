import { SpeakeasyBase } from "../../../internal/utils";
import { TranslationSettings } from "./translationsettings";
export declare class TranslateTextRequest extends SpeakeasyBase {
    settings?: TranslationSettings;
    sourceLanguageCode: string;
    targetLanguageCode: string;
    terminologyNames?: string[];
    text: string;
}
