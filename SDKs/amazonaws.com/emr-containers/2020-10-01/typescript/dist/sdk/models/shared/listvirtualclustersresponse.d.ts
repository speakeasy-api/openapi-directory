import { SpeakeasyBase } from "../../../internal/utils";
import { VirtualCluster } from "./virtualcluster";
/**
 * Success
 */
export declare class ListVirtualClustersResponse extends SpeakeasyBase {
    nextToken?: string;
    virtualClusters?: VirtualCluster[];
}
