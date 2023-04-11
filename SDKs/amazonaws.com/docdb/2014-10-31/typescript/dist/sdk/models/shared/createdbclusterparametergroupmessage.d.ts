import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
/**
 * Represents the input of <a>CreateDBClusterParameterGroup</a>.
 */
export declare class CreateDBClusterParameterGroupMessage extends SpeakeasyBase {
    dbClusterParameterGroupName: string;
    dbParameterGroupFamily: string;
    description: string;
    tags?: TagList[];
}
