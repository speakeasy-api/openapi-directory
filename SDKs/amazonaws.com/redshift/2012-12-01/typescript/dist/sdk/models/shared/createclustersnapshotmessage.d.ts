import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
/**
 * <p/>
 */
export declare class CreateClusterSnapshotMessage extends SpeakeasyBase {
    clusterIdentifier: string;
    manualSnapshotRetentionPeriod?: number;
    snapshotIdentifier: string;
    tags?: TagList[];
}
