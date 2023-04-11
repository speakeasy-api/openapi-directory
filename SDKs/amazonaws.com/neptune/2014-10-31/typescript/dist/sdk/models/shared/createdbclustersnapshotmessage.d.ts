import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
export declare class CreateDBClusterSnapshotMessage extends SpeakeasyBase {
    dbClusterIdentifier: string;
    dbClusterSnapshotIdentifier: string;
    tags?: TagList[];
}
