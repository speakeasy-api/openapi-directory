import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input of a <code>DescribeCacheParameterGroups</code> operation.
 */
export declare class DescribeCacheParameterGroupsMessage extends SpeakeasyBase {
    cacheParameterGroupName?: string;
    marker?: string;
    maxRecords?: number;
}
