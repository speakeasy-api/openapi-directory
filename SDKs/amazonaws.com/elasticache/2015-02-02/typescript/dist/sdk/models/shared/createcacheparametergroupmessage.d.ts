import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
/**
 * Represents the input of a <code>CreateCacheParameterGroup</code> operation.
 */
export declare class CreateCacheParameterGroupMessage extends SpeakeasyBase {
    cacheParameterGroupFamily: string;
    cacheParameterGroupName: string;
    description: string;
    tags?: TagList[];
}
