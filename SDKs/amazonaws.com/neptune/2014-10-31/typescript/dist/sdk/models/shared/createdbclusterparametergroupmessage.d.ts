import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
export declare class CreateDBClusterParameterGroupMessage extends SpeakeasyBase {
    dbClusterParameterGroupName: string;
    dbParameterGroupFamily: string;
    description: string;
    tags?: TagList[];
}
