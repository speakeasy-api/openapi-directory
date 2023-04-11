import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteDBInstanceMessage extends SpeakeasyBase {
    dbInstanceIdentifier: string;
    finalDBSnapshotIdentifier?: string;
    skipFinalSnapshot?: boolean;
}
