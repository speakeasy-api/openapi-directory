import { SpeakeasyBase } from "../../../internal/utils";
import { TextTranslationJobProperties } from "./texttranslationjobproperties";
/**
 * Success
 */
export declare class ListTextTranslationJobsResponse extends SpeakeasyBase {
    nextToken?: string;
    textTranslationJobPropertiesList?: TextTranslationJobProperties[];
}
