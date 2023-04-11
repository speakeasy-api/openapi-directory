import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p/>
 */
export declare class DeleteDBInstanceMessage extends SpeakeasyBase {
    dbInstanceIdentifier: string;
    deleteAutomatedBackups?: boolean;
    finalDBSnapshotIdentifier?: string;
    skipFinalSnapshot?: boolean;
}
