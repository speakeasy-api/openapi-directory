import { SpeakeasyBase } from "../../../internal/utils";
import { SnapshotDetails } from "./snapshotdetails";
/**
 * Success
 */
export declare class ListApplicationSnapshotsResponse extends SpeakeasyBase {
    nextToken?: string;
    snapshotSummaries?: SnapshotDetails[];
}
