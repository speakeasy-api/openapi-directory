import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicationGroupList } from "./replicationgrouplist";
/**
 * Represents the output of a <code>DescribeReplicationGroups</code> operation.
 */
export declare class ReplicationGroupMessage extends SpeakeasyBase {
    marker?: string;
    replicationGroups?: ReplicationGroupList[];
}
