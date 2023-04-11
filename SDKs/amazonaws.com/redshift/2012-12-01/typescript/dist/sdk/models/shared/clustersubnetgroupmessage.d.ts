import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterSubnetGroups } from "./clustersubnetgroups";
/**
 * Contains the output from the <a>DescribeClusterSubnetGroups</a> action.
 */
export declare class ClusterSubnetGroupMessage extends SpeakeasyBase {
    clusterSubnetGroups?: ClusterSubnetGroups[];
    marker?: string;
}
