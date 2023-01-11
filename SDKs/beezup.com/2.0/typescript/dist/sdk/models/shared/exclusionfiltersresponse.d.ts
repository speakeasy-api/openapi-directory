import { SpeakeasyBase } from "../../../internal/utils";
import { ExclusionFilter } from "./exclusionfilter";
import { ExclusionFiltersResponseLinks } from "./exclusionfiltersresponselinks";
export declare class ExclusionFiltersResponse extends SpeakeasyBase {
    exclusionFilters?: ExclusionFilter[];
    links: ExclusionFiltersResponseLinks;
}
