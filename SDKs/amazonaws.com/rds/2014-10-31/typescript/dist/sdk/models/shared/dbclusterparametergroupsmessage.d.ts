import { SpeakeasyBase } from "../../../internal/utils";
import { DbClusterParameterGroupList } from "./dbclusterparametergrouplist";
/**
 * <p/>
**/
export declare class DbClusterParameterGroupsMessage extends SpeakeasyBase {
    dbClusterParameterGroups?: DbClusterParameterGroupList[];
    marker?: string;
}
