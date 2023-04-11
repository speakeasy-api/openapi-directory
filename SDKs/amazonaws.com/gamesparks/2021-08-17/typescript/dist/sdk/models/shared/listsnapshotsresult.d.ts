import { SpeakeasyBase } from "../../../internal/utils";
import { SnapshotSummary } from "./snapshotsummary";
/**
 * Success
 */
export declare class ListSnapshotsResult extends SpeakeasyBase {
    nextToken?: string;
    snapshots?: SnapshotSummary[];
}
