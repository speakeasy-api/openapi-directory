import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input of a <code>DescribeCacheSubnetGroups</code> operation.
 */
export declare class DescribeCacheSubnetGroupsMessage extends SpeakeasyBase {
    cacheSubnetGroupName?: string;
    marker?: string;
    maxRecords?: number;
}
