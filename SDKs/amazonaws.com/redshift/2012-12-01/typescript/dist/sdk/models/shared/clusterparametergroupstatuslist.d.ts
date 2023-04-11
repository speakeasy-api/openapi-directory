import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterParameterStatus } from "./clusterparameterstatus";
/**
 * Describes the status of a parameter group.
 */
export declare class ClusterParameterGroupStatusList extends SpeakeasyBase {
    clusterParameterStatusList?: ClusterParameterStatus[];
    parameterApplyStatus?: string;
    parameterGroupName?: string;
}
