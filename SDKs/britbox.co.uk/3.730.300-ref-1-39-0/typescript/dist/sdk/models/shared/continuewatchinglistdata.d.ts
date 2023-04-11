import { SpeakeasyBase } from "../../../internal/utils";
import { ContinueWatchingListDataExpansion } from "./continuewatchinglistdataexpansion";
/**
 * List data for ContinueWatching List
 */
export declare class ContinueWatchingListData extends SpeakeasyBase {
    /**
     * Object where keys are itemIds for the items in the list and values are objects
     *
     * @remarks
     * containing additional items (either episode/season/show) that were requested
     * in the "include" query option.
     *
     * For example if you request the ContinueWatching list with "season" items in
     * the list, you can specify `include=episode` and then the specific next episode
     * will be returned in this object.
     *
     */
    itemInclusions?: Record<string, ContinueWatchingListDataExpansion>;
}
