import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
/**
 * Describes a parameter group.
 */
export declare class ClusterParameterGroup extends SpeakeasyBase {
    description?: string;
    parameterGroupFamily?: string;
    parameterGroupName?: string;
    tags?: TagList[];
}
