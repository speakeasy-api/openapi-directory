import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
export declare class CopyDBParameterGroupMessage extends SpeakeasyBase {
    sourceDBParameterGroupIdentifier: string;
    tags?: TagList[];
    targetDBParameterGroupDescription: string;
    targetDBParameterGroupIdentifier: string;
}
