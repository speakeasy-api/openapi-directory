import { SpeakeasyBase } from "../../../internal/utils";
import { StatusEnum } from "./statusenum";
/**
 * A list of Elastic DocumentDB cluster.
 */
export declare class ClusterInList extends SpeakeasyBase {
    clusterArn: string;
    clusterName: string;
    status: StatusEnum;
}
