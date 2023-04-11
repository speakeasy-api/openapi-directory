import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterSnapshotInList } from "./clustersnapshotinlist";
/**
 * Success
 */
export declare class ListClusterSnapshotsOutput extends SpeakeasyBase {
    nextToken?: string;
    snapshots?: ClusterSnapshotInList[];
}
