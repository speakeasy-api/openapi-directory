import { SpeakeasyBase } from "../../../internal/utils";
import { DbParameterGroupList } from "./dbparametergrouplist";
/**
 *  Contains the result of a successful invocation of the <code>DescribeDBParameterGroups</code> action.
**/
export declare class DbParameterGroupsMessage extends SpeakeasyBase {
    dbParameterGroups?: DbParameterGroupList[];
    marker?: string;
}
