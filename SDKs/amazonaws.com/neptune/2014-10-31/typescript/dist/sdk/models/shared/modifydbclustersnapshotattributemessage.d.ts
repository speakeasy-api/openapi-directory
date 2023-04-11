import { SpeakeasyBase } from "../../../internal/utils";
export declare class ModifyDBClusterSnapshotAttributeMessage extends SpeakeasyBase {
    attributeName: string;
    dbClusterSnapshotIdentifier: string;
    valuesToAdd?: string[];
    valuesToRemove?: string[];
}
