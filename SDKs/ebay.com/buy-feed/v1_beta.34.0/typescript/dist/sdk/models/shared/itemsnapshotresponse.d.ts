import { SpeakeasyBase } from "../../../internal/utils";
import { ItemSnapshot } from "./itemsnapshot";
/**
 * The type that defines the array for the items returned in the <b>Hourly Snapshot</b> feed file.
 */
export declare class ItemSnapshotResponse extends SpeakeasyBase {
    /**
     * The container for the array of items returned by the <b> getItemSnapshotFeed</b> method. <p><b>Note: </b> When the value of the <b> availability</b> column is <code>UNAVAILABLE</code>, only the <b>itemId</b> and <b> availability</b> columns are populated.  </p>
     */
    items?: ItemSnapshot[];
}
