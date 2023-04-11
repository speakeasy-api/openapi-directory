import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterEndpoint } from "./clusterendpoint";
import { StatusEnum } from "./statusenum";
/**
 * A set of five redundant Regional endpoints against which you can execute API calls to update or get the state of routing controls. You can host multiple control panels and routing controls on one cluster.
 */
export declare class Cluster extends SpeakeasyBase {
    clusterArn?: string;
    clusterEndpoints?: ClusterEndpoint[];
    name?: string;
    status?: StatusEnum;
}
