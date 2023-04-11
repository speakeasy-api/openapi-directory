import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
/**
 * Represents the input to <a>CreateDBSubnetGroup</a>.
 */
export declare class CreateDBSubnetGroupMessage extends SpeakeasyBase {
    dbSubnetGroupDescription: string;
    dbSubnetGroupName: string;
    subnetIds: string[];
    tags?: TagList[];
}
