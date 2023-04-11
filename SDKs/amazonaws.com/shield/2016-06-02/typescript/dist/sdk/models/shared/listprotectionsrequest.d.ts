import { SpeakeasyBase } from "../../../internal/utils";
import { InclusionProtectionFilters } from "./inclusionprotectionfilters";
export declare class ListProtectionsRequest extends SpeakeasyBase {
    inclusionFilters?: InclusionProtectionFilters;
    maxResults?: number;
    nextToken?: string;
}
