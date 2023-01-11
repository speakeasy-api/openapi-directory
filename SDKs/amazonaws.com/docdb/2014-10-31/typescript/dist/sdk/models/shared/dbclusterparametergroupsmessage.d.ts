import { SpeakeasyBase } from "../../../internal/utils";
import { DbClusterParameterGroupList } from "./dbclusterparametergrouplist";
/**
 * Represents the output of <a>DBClusterParameterGroups</a>.
**/
export declare class DbClusterParameterGroupsMessage extends SpeakeasyBase {
    dbClusterParameterGroups?: DbClusterParameterGroupList[];
    marker?: string;
}
