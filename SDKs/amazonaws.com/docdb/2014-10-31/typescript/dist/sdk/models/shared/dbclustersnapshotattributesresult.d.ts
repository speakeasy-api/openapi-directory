import { SpeakeasyBase } from "../../../internal/utils";
import { DbClusterSnapshotAttributeList } from "./dbclustersnapshotattributelist";
/**
 * Detailed information about the attributes that are associated with a cluster snapshot.
**/
export declare class DbClusterSnapshotAttributesResult extends SpeakeasyBase {
    dbClusterSnapshotAttributes?: DbClusterSnapshotAttributeList[];
    dbClusterSnapshotIdentifier?: string;
}
