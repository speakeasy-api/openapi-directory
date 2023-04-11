import { SpeakeasyBase } from "../../../internal/utils";
export declare class ModifyClusterSnapshotMessage extends SpeakeasyBase {
    force?: boolean;
    manualSnapshotRetentionPeriod?: number;
    snapshotIdentifier: string;
}
