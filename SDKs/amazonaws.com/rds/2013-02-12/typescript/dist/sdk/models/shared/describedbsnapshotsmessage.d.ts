import { SpeakeasyBase } from "../../../internal/utils";
export declare class DescribeDBSnapshotsMessage extends SpeakeasyBase {
    dbInstanceIdentifier?: string;
    dbSnapshotIdentifier?: string;
    marker?: string;
    maxRecords?: number;
    snapshotType?: string;
}
