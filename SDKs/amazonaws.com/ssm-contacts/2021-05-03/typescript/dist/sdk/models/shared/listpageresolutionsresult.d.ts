import { SpeakeasyBase } from "../../../internal/utils";
import { ResolutionContact } from "./resolutioncontact";
/**
 * Success
 */
export declare class ListPageResolutionsResult extends SpeakeasyBase {
    nextToken?: string;
    pageResolutions: ResolutionContact[];
}
