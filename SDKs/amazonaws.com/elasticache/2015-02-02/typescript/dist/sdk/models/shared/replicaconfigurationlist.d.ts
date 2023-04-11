import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Node group (shard) configuration options when adding or removing replicas. Each node group (shard) configuration has the following members: NodeGroupId, NewReplicaCount, and PreferredAvailabilityZones.
 */
export declare class ReplicaConfigurationList extends SpeakeasyBase {
    newReplicaCount: number;
    nodeGroupId: string;
    preferredAvailabilityZones?: string[];
    preferredOutpostArns?: string[];
}
