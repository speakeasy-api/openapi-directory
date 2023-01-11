import { SpeakeasyBase } from "../../../internal/utils";
import { DbClusterSnapshotList } from "./dbclustersnapshotlist";
export declare class DbClusterSnapshotMessage extends SpeakeasyBase {
    dbClusterSnapshots?: DbClusterSnapshotList[];
    marker?: string;
}
