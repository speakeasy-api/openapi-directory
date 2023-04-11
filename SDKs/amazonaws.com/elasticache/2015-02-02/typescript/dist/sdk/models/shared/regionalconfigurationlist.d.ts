import { SpeakeasyBase } from "../../../internal/utils";
import { ReshardingConfigurationList } from "./reshardingconfigurationlist";
/**
 * A list of the replication groups
 */
export declare class RegionalConfigurationList extends SpeakeasyBase {
    replicationGroupId: string;
    replicationGroupRegion: string;
    reshardingConfiguration: ReshardingConfigurationList[];
}
