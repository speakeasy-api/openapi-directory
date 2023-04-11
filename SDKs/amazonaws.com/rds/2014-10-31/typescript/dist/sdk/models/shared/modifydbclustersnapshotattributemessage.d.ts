import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p/>
 */
export declare class ModifyDBClusterSnapshotAttributeMessage extends SpeakeasyBase {
    attributeName: string;
    dbClusterSnapshotIdentifier: string;
    valuesToAdd?: string[];
    valuesToRemove?: string[];
}
