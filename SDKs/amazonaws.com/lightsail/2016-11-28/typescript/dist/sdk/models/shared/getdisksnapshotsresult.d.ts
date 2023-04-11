import { SpeakeasyBase } from "../../../internal/utils";
import { DiskSnapshot } from "./disksnapshot";
/**
 * Success
 */
export declare class GetDiskSnapshotsResult extends SpeakeasyBase {
    diskSnapshots?: DiskSnapshot[];
    nextPageToken?: string;
}
