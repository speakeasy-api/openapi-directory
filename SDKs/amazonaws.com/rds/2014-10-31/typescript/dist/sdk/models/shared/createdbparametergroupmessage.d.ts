import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
/**
 * <p/>
 */
export declare class CreateDBParameterGroupMessage extends SpeakeasyBase {
    dbParameterGroupFamily: string;
    dbParameterGroupName: string;
    description: string;
    tags?: TagList[];
}
