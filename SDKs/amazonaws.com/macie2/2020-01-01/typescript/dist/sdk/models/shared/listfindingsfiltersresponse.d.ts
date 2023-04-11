import { SpeakeasyBase } from "../../../internal/utils";
import { FindingsFilterListItem } from "./findingsfilterlistitem";
/**
 * Success
 */
export declare class ListFindingsFiltersResponse extends SpeakeasyBase {
    findingsFilterListItems?: FindingsFilterListItem[];
    nextToken?: string;
}
