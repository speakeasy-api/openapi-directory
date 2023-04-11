import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterVersionList } from "./clusterversionlist";
/**
 * Contains the output from the <a>DescribeClusterVersions</a> action.
 */
export declare class ClusterVersionsMessage extends SpeakeasyBase {
    clusterVersions?: ClusterVersionList[];
    marker?: string;
}
