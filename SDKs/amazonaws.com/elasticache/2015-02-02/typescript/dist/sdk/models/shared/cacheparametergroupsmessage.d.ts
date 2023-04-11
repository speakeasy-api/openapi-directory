import { SpeakeasyBase } from "../../../internal/utils";
import { CacheParameterGroupList } from "./cacheparametergrouplist";
/**
 * Represents the output of a <code>DescribeCacheParameterGroups</code> operation.
 */
export declare class CacheParameterGroupsMessage extends SpeakeasyBase {
    cacheParameterGroups?: CacheParameterGroupList[];
    marker?: string;
}
