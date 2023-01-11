import { SpeakeasyBase } from "../../../internal/utils";
import { CacheSubnetGroups } from "./cachesubnetgroups";
/**
 * Represents the output of a <code>DescribeCacheSubnetGroups</code> operation.
**/
export declare class CacheSubnetGroupMessage extends SpeakeasyBase {
    cacheSubnetGroups?: CacheSubnetGroups[];
    marker?: string;
}
