import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input to <a>ModifyDBClusterSnapshotAttribute</a>.
 */
export declare class ModifyDBClusterSnapshotAttributeMessage extends SpeakeasyBase {
    attributeName: string;
    dbClusterSnapshotIdentifier: string;
    valuesToAdd?: string[];
    valuesToRemove?: string[];
}
