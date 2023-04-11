import { SpeakeasyBase } from "../../../internal/utils";
import { InclusionProtectionGroupFilters } from "./inclusionprotectiongroupfilters";
export declare class ListProtectionGroupsRequest extends SpeakeasyBase {
    inclusionFilters?: InclusionProtectionGroupFilters;
    maxResults?: number;
    nextToken?: string;
}
