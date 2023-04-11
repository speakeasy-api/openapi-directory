import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterListEntry } from "./clusterlistentry";
/**
 * Success
 */
export declare class ListClustersResult extends SpeakeasyBase {
    clusterListEntries?: ClusterListEntry[];
    nextToken?: string;
}
