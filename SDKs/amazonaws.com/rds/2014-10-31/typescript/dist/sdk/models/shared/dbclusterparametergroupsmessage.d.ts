import { SpeakeasyBase } from "../../../internal/utils";
import { DBClusterParameterGroupList } from "./dbclusterparametergrouplist";
/**
 * <p/>
 */
export declare class DBClusterParameterGroupsMessage extends SpeakeasyBase {
    dbClusterParameterGroups?: DBClusterParameterGroupList[];
    marker?: string;
}
