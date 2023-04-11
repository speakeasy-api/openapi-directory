import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p/>
 */
export declare class ModifyDBSnapshotAttributeMessage extends SpeakeasyBase {
    attributeName: string;
    dbSnapshotIdentifier: string;
    valuesToAdd?: string[];
    valuesToRemove?: string[];
}
