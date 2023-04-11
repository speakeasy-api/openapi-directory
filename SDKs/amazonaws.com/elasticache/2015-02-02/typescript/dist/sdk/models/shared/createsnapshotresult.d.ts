import { SpeakeasyBase } from "../../../internal/utils";
import { Snapshot } from "./snapshot";
/**
 * Success
 */
export declare class CreateSnapshotResult extends SpeakeasyBase {
    /**
     * Represents a copy of an entire Redis cluster as of the time when the snapshot was taken.
     */
    snapshot?: Snapshot;
}
