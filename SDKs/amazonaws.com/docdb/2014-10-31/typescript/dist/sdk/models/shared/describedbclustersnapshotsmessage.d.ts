import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
/**
 * Represents the input to <a>DescribeDBClusterSnapshots</a>.
 */
export declare class DescribeDBClusterSnapshotsMessage extends SpeakeasyBase {
    dbClusterIdentifier?: string;
    dbClusterSnapshotIdentifier?: string;
    filters?: FilterList[];
    includePublic?: boolean;
    includeShared?: boolean;
    marker?: string;
    maxRecords?: number;
    snapshotType?: string;
}
