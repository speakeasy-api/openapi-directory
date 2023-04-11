import { SpeakeasyBase } from "../../../internal/utils";
import { Snapshot } from "./snapshot";
/**
 * Success
 */
export declare class DescribeWorkspaceSnapshotsResult extends SpeakeasyBase {
    rebuildSnapshots?: Snapshot[];
    restoreSnapshots?: Snapshot[];
}
