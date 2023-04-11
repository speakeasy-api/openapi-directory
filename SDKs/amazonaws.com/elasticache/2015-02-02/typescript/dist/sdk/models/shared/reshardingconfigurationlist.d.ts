import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A list of <code>PreferredAvailabilityZones</code> objects that specifies the configuration of a node group in the resharded cluster.
 */
export declare class ReshardingConfigurationList extends SpeakeasyBase {
    nodeGroupId?: string;
    preferredAvailabilityZones?: string[];
}
