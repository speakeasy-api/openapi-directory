import { SpeakeasyBase } from "../../../internal/utils";
export declare class Translation extends SpeakeasyBase {
    /**
     * The language of the input text. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/translation/types/LanguageEnum.html'>eBay API documentation</a>
     */
    from?: string;
    /**
     * Original text.
     */
    originalText?: string;
    /**
     * The language to use for the translation of th einput text. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/translation/types/LanguageEnum.html'>eBay API documentation</a>
     */
    to?: string;
    /**
     * Translated text.
     */
    translatedText?: string;
}
