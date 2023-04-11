import { SpeakeasyBase } from "../../../internal/utils";
import { CacheSecurityGroups } from "./cachesecuritygroups";
/**
 * Represents the output of a <code>DescribeCacheSecurityGroups</code> operation.
 */
export declare class CacheSecurityGroupMessage extends SpeakeasyBase {
    cacheSecurityGroups?: CacheSecurityGroups[];
    marker?: string;
}
