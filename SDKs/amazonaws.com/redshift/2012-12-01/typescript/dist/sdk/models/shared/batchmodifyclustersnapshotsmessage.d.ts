import { SpeakeasyBase } from "../../../internal/utils";
export declare class BatchModifyClusterSnapshotsMessage extends SpeakeasyBase {
    force?: boolean;
    manualSnapshotRetentionPeriod?: number;
    snapshotIdentifierList: string[];
}
