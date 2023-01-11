import { SpeakeasyBase } from "../../../internal/utils";
import { DbClusterParameterGroupList } from "./dbclusterparametergrouplist";
export declare class DbClusterParameterGroupsMessage extends SpeakeasyBase {
    dbClusterParameterGroups?: DbClusterParameterGroupList[];
    marker?: string;
}
