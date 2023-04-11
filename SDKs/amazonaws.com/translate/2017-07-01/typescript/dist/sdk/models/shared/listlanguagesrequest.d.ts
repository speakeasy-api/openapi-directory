import { SpeakeasyBase } from "../../../internal/utils";
import { DisplayLanguageCodeEnum } from "./displaylanguagecodeenum";
export declare class ListLanguagesRequest extends SpeakeasyBase {
    displayLanguageCode?: DisplayLanguageCodeEnum;
    maxResults?: number;
    nextToken?: string;
}
