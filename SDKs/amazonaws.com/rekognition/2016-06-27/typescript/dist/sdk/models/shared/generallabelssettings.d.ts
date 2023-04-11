import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains filters for the object labels returned by DetectLabels. Filters can be inclusive, exclusive, or a combination of both and can be applied to individual l abels or entire label categories.
 */
export declare class GeneralLabelsSettings extends SpeakeasyBase {
    labelCategoryExclusionFilters?: string[];
    labelCategoryInclusionFilters?: string[];
    labelExclusionFilters?: string[];
    labelInclusionFilters?: string[];
}
