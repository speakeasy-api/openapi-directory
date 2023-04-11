import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterList } from "./clusterlist";
/**
 * Contains the output from the <a>DescribeClusters</a> action.
 */
export declare class ClustersMessage extends SpeakeasyBase {
    clusters?: ClusterList[];
    marker?: string;
}
