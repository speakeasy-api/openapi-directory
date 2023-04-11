import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input of a <code>DescribeCacheSecurityGroups</code> operation.
 */
export declare class DescribeCacheSecurityGroupsMessage extends SpeakeasyBase {
    cacheSecurityGroupName?: string;
    marker?: string;
    maxRecords?: number;
}
