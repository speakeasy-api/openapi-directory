import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterInList } from "./clusterinlist";
/**
 * Success
 */
export declare class ListClustersOutput extends SpeakeasyBase {
    clusters?: ClusterInList[];
    nextToken?: string;
}
