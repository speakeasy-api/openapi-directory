import { SpeakeasyBase } from "../../../internal/utils";
import { ClarifyTextGranularityEnum } from "./clarifytextgranularityenum";
import { ClarifyTextLanguageEnum } from "./clarifytextlanguageenum";
/**
 * A parameter used to configure the SageMaker Clarify explainer to treat text features as text so that explanations are provided for individual units of text. Required only for natural language processing (NLP) explainability.
 */
export declare class ClarifyTextConfig extends SpeakeasyBase {
    granularity: ClarifyTextGranularityEnum;
    language: ClarifyTextLanguageEnum;
}
