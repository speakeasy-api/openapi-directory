import { SpeakeasyBase } from "../../../internal/utils";
import { ItemDetail } from "./itemdetail";
/**
 * Field indicating the type or reason behind the suggestion.
 *
 * @remarks
 *
 * Id Type   | Show Watched Status| Value            | Description
 * ----------|--------------------|------------------|---------------------------------
 * showId    | Unwatched          | StartWatching    |
 * showId    | Completely watched | RestartWatching  |
 * showId    | Partly watched     | ContinueWatching | Suggested episode partly watched
 * showId    | Partly watched     | Sequential       | Suggested episode unwatched
 * episodeId | Any                | Sequential       | Next episode in show
 *
 */
export declare enum NextPlaybackItemSuggestionTypeEnum {
    StartWatching = "StartWatching",
    ContinueWatching = "ContinueWatching",
    RestartWatching = "RestartWatching",
    Sequential = "Sequential",
    None = "None"
}
/**
 * The detail of the next item to play.
 */
export declare class NextPlaybackItem extends SpeakeasyBase {
    /**
     * Time when the item corresponding to the itemId passed in by the client was
     *
     * @remarks
     * first watched by the user. Will be `undefined` if the user has never
     * watched the item.
     *
     * It can be used to identify the scenario where the user has never watched a
     * show and we are suggesting they watch the first episode (i.e. it is
     * missing in this scenario)
     *
     * **This will only be populated when a `showId` is passed in**
     *
     */
    firstWatchedDate?: Date;
    /**
     * Time when the item corresponding to the itemId passed in by the client was
     *
     * @remarks
     * last watched by the user. Will be `undefined` if the user has never
     * watched the item.
     *
     * It can be used to identify the scenario where the user has never watched a
     * show and we are suggesting they watch the first episode (i.e. it is
     * missing in this scenario)
     *
     * **This will only be populated when a `showId` is passed in**
     *
     */
    lastWatchedDate?: Date;
    next?: ItemDetail;
    /**
     * The id of the item used to determine the next item to play.
     */
    sourceItemId: string;
    /**
     * Field indicating the type or reason behind the suggestion.
     *
     * @remarks
     *
     * Id Type   | Show Watched Status| Value            | Description
     * ----------|--------------------|------------------|---------------------------------
     * showId    | Unwatched          | StartWatching    |
     * showId    | Completely watched | RestartWatching  |
     * showId    | Partly watched     | ContinueWatching | Suggested episode partly watched
     * showId    | Partly watched     | Sequential       | Suggested episode unwatched
     * episodeId | Any                | Sequential       | Next episode in show
     *
     */
    suggestionType?: NextPlaybackItemSuggestionTypeEnum;
}
