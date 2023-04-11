import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationSyncModeEnum } from "./destinationsyncmodeenum";
import { SelectedFieldInfo } from "./selectedfieldinfo";
import { SyncModeEnum } from "./syncmodeenum";
/**
 * the mutable part of the stream to configure the destination
 */
export declare class AirbyteStreamConfiguration extends SpeakeasyBase {
    /**
     * Alias name to the stream to be used in the destination
     */
    aliasName?: string;
    /**
     * Path to the field that will be used to determine if a record is new or modified since the last sync. This field is REQUIRED if `sync_mode` is `incremental`. Otherwise it is ignored.
     */
    cursorField?: string[];
    destinationSyncMode: DestinationSyncModeEnum;
    /**
     * Whether field selection should be enabled. If this is true, only the properties in `selectedFields` will be included.
     */
    fieldSelectionEnabled?: boolean;
    /**
     * Paths to the fields that will be used as primary key. This field is REQUIRED if `destination_sync_mode` is `*_dedup`. Otherwise it is ignored.
     */
    primaryKey?: string[][];
    /**
     * If this is true, the stream is selected with all of its properties. For new connections, this considers if the stream is suggested or not
     */
    selected?: boolean;
    /**
     * Paths to the fields that will be included in the configured catalog. This must be set if `fieldSelectedEnabled` is set. An empty list indicates that no properties will be included.
     */
    selectedFields?: SelectedFieldInfo[];
    /**
     * Does the connector suggest that this stream be enabled by default?
     */
    suggested?: boolean;
    syncMode: SyncModeEnum;
}
