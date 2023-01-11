import { SpeakeasyBase } from "../../../internal/utils";
import { DbSubnetGroups } from "./dbsubnetgroups";
/**
 *  Contains the result of a successful invocation of the <code>DescribeDBSubnetGroups</code> action.
**/
export declare class DbSubnetGroupMessage extends SpeakeasyBase {
    dbSubnetGroups?: DbSubnetGroups[];
    marker?: string;
}
