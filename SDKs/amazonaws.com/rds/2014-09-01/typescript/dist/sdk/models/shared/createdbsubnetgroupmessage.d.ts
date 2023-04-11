import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
export declare class CreateDBSubnetGroupMessage extends SpeakeasyBase {
    dbSubnetGroupDescription: string;
    dbSubnetGroupName: string;
    subnetIds: string[];
    tags?: TagList[];
}
