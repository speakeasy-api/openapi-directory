import { SpeakeasyBase } from "../../../internal/utils";
export declare class Language extends SpeakeasyBase {
    /**
     * The ISO language code of the language e.g. "en-US".
     *
     * @remarks
     * See https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
     *
     */
    code: string;
    /**
     * Display label for the language.
     */
    label: string;
    /**
     * Display title for the language.
     */
    title: string;
}
