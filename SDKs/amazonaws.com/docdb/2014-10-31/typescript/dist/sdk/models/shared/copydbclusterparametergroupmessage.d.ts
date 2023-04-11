import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
/**
 * Represents the input to <a>CopyDBClusterParameterGroup</a>.
 */
export declare class CopyDBClusterParameterGroupMessage extends SpeakeasyBase {
    sourceDBClusterParameterGroupIdentifier: string;
    tags?: TagList[];
    targetDBClusterParameterGroupDescription: string;
    targetDBClusterParameterGroupIdentifier: string;
}
