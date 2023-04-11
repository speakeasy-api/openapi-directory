import { SpeakeasyBase } from "../../../internal/utils";
import { DBClusterSnapshotAttributeList } from "./dbclustersnapshotattributelist";
/**
 * Detailed information about the attributes that are associated with a cluster snapshot.
 */
export declare class DBClusterSnapshotAttributesResult extends SpeakeasyBase {
    dbClusterSnapshotAttributes?: DBClusterSnapshotAttributeList[];
    dbClusterSnapshotIdentifier?: string;
}
