import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
/**
 * Represents the input of a <code>CreateCacheSecurityGroup</code> operation.
 */
export declare class CreateCacheSecurityGroupMessage extends SpeakeasyBase {
    cacheSecurityGroupName: string;
    description: string;
    tags?: TagList[];
}
