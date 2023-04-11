import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
export declare class CreateDBParameterGroupMessage extends SpeakeasyBase {
    dbParameterGroupFamily: string;
    dbParameterGroupName: string;
    description: string;
    tags?: TagList[];
}
