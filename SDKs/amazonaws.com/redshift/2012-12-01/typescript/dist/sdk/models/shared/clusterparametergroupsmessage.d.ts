import { SpeakeasyBase } from "../../../internal/utils";
import { ParameterGroupList } from "./parametergrouplist";
/**
 * Contains the output from the <a>DescribeClusterParameterGroups</a> action.
 */
export declare class ClusterParameterGroupsMessage extends SpeakeasyBase {
    marker?: string;
    parameterGroups?: ParameterGroupList[];
}
