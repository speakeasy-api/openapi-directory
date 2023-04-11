import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class ConvertRecoveryPointToSnapshotRequest extends SpeakeasyBase {
    recoveryPointId: string;
    retentionPeriod?: number;
    snapshotName: string;
    tags?: Tag[];
}
