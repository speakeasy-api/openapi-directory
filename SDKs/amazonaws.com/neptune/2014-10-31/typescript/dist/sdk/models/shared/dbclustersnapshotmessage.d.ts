import { SpeakeasyBase } from "../../../internal/utils";
import { DBClusterSnapshotList } from "./dbclustersnapshotlist";
/**
 * Success
 */
export declare class DBClusterSnapshotMessage extends SpeakeasyBase {
    dbClusterSnapshots?: DBClusterSnapshotList[];
    marker?: string;
}
