import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
/**
 * <p/>
 */
export declare class DescribeDBSnapshotsMessage extends SpeakeasyBase {
    dbInstanceIdentifier?: string;
    dbSnapshotIdentifier?: string;
    dbiResourceId?: string;
    filters?: FilterList[];
    includePublic?: boolean;
    includeShared?: boolean;
    marker?: string;
    maxRecords?: number;
    snapshotType?: string;
}
