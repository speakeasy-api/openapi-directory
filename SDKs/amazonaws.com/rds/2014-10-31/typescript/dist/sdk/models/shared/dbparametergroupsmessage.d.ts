import { SpeakeasyBase } from "../../../internal/utils";
import { DBParameterGroupList } from "./dbparametergrouplist";
/**
 * Contains the result of a successful invocation of the <code>DescribeDBParameterGroups</code> action.
 */
export declare class DBParameterGroupsMessage extends SpeakeasyBase {
    dbParameterGroups?: DBParameterGroupList[];
    marker?: string;
}
