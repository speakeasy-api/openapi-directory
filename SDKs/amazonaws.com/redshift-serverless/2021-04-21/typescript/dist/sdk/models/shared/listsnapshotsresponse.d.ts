import { SpeakeasyBase } from "../../../internal/utils";
import { Snapshot } from "./snapshot";
/**
 * Success
 */
export declare class ListSnapshotsResponse extends SpeakeasyBase {
    nextToken?: string;
    snapshots?: Snapshot[];
}
