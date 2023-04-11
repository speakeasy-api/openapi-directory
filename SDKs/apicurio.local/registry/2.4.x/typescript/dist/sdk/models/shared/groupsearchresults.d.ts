import { SpeakeasyBase } from "../../../internal/utils";
import { SearchedGroup } from "./searchedgroup";
/**
 * Describes the response received when searching for groups.
 */
export declare class GroupSearchResults extends SpeakeasyBase {
    /**
     * The total number of groups that matched the query that produced the result set (may be
     *
     * @remarks
     * more than the number of groups in the result set).
     */
    count: number;
    /**
     * The groups returned in the result set.
     */
    groups: SearchedGroup[];
}
