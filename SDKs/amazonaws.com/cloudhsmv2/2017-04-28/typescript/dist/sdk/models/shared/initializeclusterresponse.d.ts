import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterStateEnum } from "./clusterstateenum";
/**
 * Success
 */
export declare class InitializeClusterResponse extends SpeakeasyBase {
    state?: ClusterStateEnum;
    stateMessage?: string;
}
