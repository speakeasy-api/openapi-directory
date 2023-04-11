import { SpeakeasyBase } from "../../../internal/utils";
import { ContentRedaction } from "./contentredaction";
import { LanguageCodeEnum } from "./languagecodeenum";
import { LanguageIdSettings } from "./languageidsettings";
import { VocabularyFilterMethodEnum } from "./vocabularyfiltermethodenum";
/**
 * Provides additional optional settings for your request, including content redaction, automatic language identification; allows you to apply custom language models, custom vocabulary filters, and custom vocabularies.
 */
export declare class CallAnalyticsJobSettings extends SpeakeasyBase {
    /**
     * Makes it possible to redact or flag specified personally identifiable information (PII) in your transcript. If you use <code>ContentRedaction</code>, you must also include the sub-parameters: <code>PiiEntityTypes</code>, <code>RedactionOutput</code>, and <code>RedactionType</code>.
     */
    contentRedaction?: ContentRedaction;
    languageIdSettings?: Record<string, LanguageIdSettings>;
    languageModelName?: string;
    languageOptions?: LanguageCodeEnum[];
    vocabularyFilterMethod?: VocabularyFilterMethodEnum;
    vocabularyFilterName?: string;
    vocabularyName?: string;
}
