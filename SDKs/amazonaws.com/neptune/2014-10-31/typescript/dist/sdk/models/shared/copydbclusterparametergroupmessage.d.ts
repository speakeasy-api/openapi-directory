import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
export declare class CopyDBClusterParameterGroupMessage extends SpeakeasyBase {
    sourceDBClusterParameterGroupIdentifier: string;
    tags?: TagList[];
    targetDBClusterParameterGroupDescription: string;
    targetDBClusterParameterGroupIdentifier: string;
}
