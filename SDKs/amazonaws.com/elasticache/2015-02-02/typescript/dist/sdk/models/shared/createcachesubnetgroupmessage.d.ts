import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
/**
 * Represents the input of a <code>CreateCacheSubnetGroup</code> operation.
 */
export declare class CreateCacheSubnetGroupMessage extends SpeakeasyBase {
    cacheSubnetGroupDescription: string;
    cacheSubnetGroupName: string;
    subnetIds: string[];
    tags?: TagList[];
}
