import { SpeakeasyBase } from "../../../internal/utils";
export declare class TranslateRequest extends SpeakeasyBase {
    /**
     * The language of the input text. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/translation/types/LanguageEnum.html'>eBay API documentation</a>
     */
    from?: string;
    /**
     * The input text.
     */
    text?: string[];
    /**
     * The language to use for the translation of th einput text. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/translation/types/LanguageEnum.html'>eBay API documentation</a>
     */
    to?: string;
    /**
     * The context of the translation. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/translation/types/TranslationContextEnum.html'>eBay API documentation</a>
     */
    translationContext?: string;
}
