import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceSnapshot } from "./instancesnapshot";
/**
 * Success
 */
export declare class GetInstanceSnapshotsResult extends SpeakeasyBase {
    instanceSnapshots?: InstanceSnapshot[];
    nextPageToken?: string;
}
