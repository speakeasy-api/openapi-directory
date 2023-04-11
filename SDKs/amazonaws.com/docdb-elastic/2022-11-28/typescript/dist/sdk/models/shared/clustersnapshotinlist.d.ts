import { SpeakeasyBase } from "../../../internal/utils";
import { StatusEnum } from "./statusenum";
/**
 * A list of Elastic DocumentDB snapshots.
 */
export declare class ClusterSnapshotInList extends SpeakeasyBase {
    clusterArn: string;
    snapshotArn: string;
    snapshotCreationTime: string;
    snapshotName: string;
    status: StatusEnum;
}
