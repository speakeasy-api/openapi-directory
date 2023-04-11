import { SpeakeasyBase } from "../../../internal/utils";
import { ParametersList } from "./parameterslist";
/**
 * Contains the output from the <a>DescribeClusterParameters</a> action.
 */
export declare class ClusterParameterGroupDetails extends SpeakeasyBase {
    marker?: string;
    parameters?: ParametersList[];
}
