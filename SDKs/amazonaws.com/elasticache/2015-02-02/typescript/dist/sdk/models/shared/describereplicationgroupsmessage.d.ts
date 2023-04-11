import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input of a <code>DescribeReplicationGroups</code> operation.
 */
export declare class DescribeReplicationGroupsMessage extends SpeakeasyBase {
    marker?: string;
    maxRecords?: number;
    replicationGroupId?: string;
}
