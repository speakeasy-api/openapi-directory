import { SpeakeasyBase } from "../../../internal/utils";
import { LanguageCodeEnum } from "./languagecodeenum";
export declare class BatchDetectTargetedSentimentRequest extends SpeakeasyBase {
    languageCode: LanguageCodeEnum;
    textList: string[];
}
