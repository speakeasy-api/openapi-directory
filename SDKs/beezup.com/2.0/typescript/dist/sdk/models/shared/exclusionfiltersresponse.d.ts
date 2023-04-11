import { SpeakeasyBase } from "../../../internal/utils";
import { ExclusionFilter } from "./exclusionfilter";
import { ExclusionFiltersResponseLinks } from "./exclusionfiltersresponselinks";
/**
 * Channel catalog exclusion filter list
 */
export declare class ExclusionFiltersResponse extends SpeakeasyBase {
    /**
     * The exclusion filter list
     */
    exclusionFilters?: ExclusionFilter[];
    links: ExclusionFiltersResponseLinks;
}
