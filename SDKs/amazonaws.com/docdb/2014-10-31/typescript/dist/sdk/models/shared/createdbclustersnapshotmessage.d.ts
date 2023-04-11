import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
/**
 * Represents the input of <a>CreateDBClusterSnapshot</a>.
 */
export declare class CreateDBClusterSnapshotMessage extends SpeakeasyBase {
    dbClusterIdentifier: string;
    dbClusterSnapshotIdentifier: string;
    tags?: TagList[];
}
