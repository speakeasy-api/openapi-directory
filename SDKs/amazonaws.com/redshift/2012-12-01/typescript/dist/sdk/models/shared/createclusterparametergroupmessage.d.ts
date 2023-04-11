import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
/**
 * <p/>
 */
export declare class CreateClusterParameterGroupMessage extends SpeakeasyBase {
    description: string;
    parameterGroupFamily: string;
    parameterGroupName: string;
    tags?: TagList[];
}
