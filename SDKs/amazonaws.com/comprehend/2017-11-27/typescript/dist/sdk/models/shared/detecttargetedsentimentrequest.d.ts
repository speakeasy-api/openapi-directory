import { SpeakeasyBase } from "../../../internal/utils";
import { LanguageCodeEnum } from "./languagecodeenum";
export declare class DetectTargetedSentimentRequest extends SpeakeasyBase {
    languageCode: LanguageCodeEnum;
    text: string;
}
