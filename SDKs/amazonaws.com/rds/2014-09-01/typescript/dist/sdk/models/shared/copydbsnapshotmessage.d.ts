import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
export declare class CopyDBSnapshotMessage extends SpeakeasyBase {
    sourceDBSnapshotIdentifier: string;
    tags?: TagList[];
    targetDBSnapshotIdentifier: string;
}
