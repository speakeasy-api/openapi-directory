import { SpeakeasyBase } from "../../../internal/utils";
import { ReshardingConfigurationList } from "./reshardingconfigurationlist";
/**
 * Represents the input for a <code>ModifyReplicationGroupShardConfiguration</code> operation.
 */
export declare class ModifyReplicationGroupShardConfigurationMessage extends SpeakeasyBase {
    applyImmediately: boolean;
    nodeGroupCount: number;
    nodeGroupsToRemove?: string[];
    nodeGroupsToRetain?: string[];
    replicationGroupId: string;
    reshardingConfiguration?: ReshardingConfigurationList[];
}
