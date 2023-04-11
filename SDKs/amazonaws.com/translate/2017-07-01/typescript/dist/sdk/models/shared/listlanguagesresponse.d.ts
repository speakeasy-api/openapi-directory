import { SpeakeasyBase } from "../../../internal/utils";
import { DisplayLanguageCodeEnum } from "./displaylanguagecodeenum";
import { Language } from "./language";
/**
 * Success
 */
export declare class ListLanguagesResponse extends SpeakeasyBase {
    displayLanguageCode?: DisplayLanguageCodeEnum;
    languages?: Language[];
    nextToken?: string;
}
