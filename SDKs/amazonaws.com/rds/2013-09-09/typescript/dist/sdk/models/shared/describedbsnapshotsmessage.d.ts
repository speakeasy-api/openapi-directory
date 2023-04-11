import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
export declare class DescribeDBSnapshotsMessage extends SpeakeasyBase {
    dbInstanceIdentifier?: string;
    dbSnapshotIdentifier?: string;
    filters?: FilterList[];
    marker?: string;
    maxRecords?: number;
    snapshotType?: string;
}
