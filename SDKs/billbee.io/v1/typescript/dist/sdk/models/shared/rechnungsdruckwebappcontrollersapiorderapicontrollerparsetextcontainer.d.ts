import { SpeakeasyBase } from "../../../internal/utils";
export declare class RechnungsdruckWebAppControllersApiOrderApiControllerParseTextContainer extends SpeakeasyBase {
    /**
     * If true, the string will be handled as html.
     */
    isHtml?: boolean;
    /**
     * The ISO 639-1 code of the target language. Using default if not set.
     */
    language?: string;
    /**
     * The text to parse and replace the placeholders in.
     */
    textToParse?: string;
    /**
     * If true, then the placeholder values are trimmed after usage.
     */
    trim?: boolean;
}
