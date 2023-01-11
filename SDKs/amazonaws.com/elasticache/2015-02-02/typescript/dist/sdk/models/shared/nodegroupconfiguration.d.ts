import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Node group (shard) configuration options. Each node group (shard) configuration has the following: <code>Slots</code>, <code>PrimaryAvailabilityZone</code>, <code>ReplicaAvailabilityZones</code>, <code>ReplicaCount</code>.
**/
export declare class NodeGroupConfiguration extends SpeakeasyBase {
    nodeGroupId?: string;
    primaryAvailabilityZone?: string;
    primaryOutpostArn?: string;
    replicaAvailabilityZones?: Record<string, any>[];
    replicaCount?: number;
    replicaOutpostArns?: Record<string, any>[];
    slots?: string;
}
