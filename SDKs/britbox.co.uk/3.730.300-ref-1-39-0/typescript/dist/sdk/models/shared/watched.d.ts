import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class Watched extends SpeakeasyBase {
    firstWatchedDate: Date;
    /**
     * True - if the item is fully watched, False - otherwise.
     */
    isFullyWatched?: boolean;
    /**
     * The id of the item watched.
     */
    itemId?: string;
    lastWatchedDate: Date;
    /**
     * The last playhead position watched for the item.
     */
    position: number;
}
