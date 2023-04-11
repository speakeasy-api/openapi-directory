import { SpeakeasyBase } from "../../../internal/utils";
import { DBClusterParameterGroupList } from "./dbclusterparametergrouplist";
/**
 * Represents the output of <a>DBClusterParameterGroups</a>.
 */
export declare class DBClusterParameterGroupsMessage extends SpeakeasyBase {
    dbClusterParameterGroups?: DBClusterParameterGroupList[];
    marker?: string;
}
