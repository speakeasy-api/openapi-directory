import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
export declare class CreateDBSnapshotMessage extends SpeakeasyBase {
    dbInstanceIdentifier: string;
    dbSnapshotIdentifier: string;
    tags?: TagList[];
}
