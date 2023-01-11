import { SpeakeasyBase } from "../../../internal/utils";
import { DbSecurityGroups } from "./dbsecuritygroups";
/**
 *  Contains the result of a successful invocation of the <code>DescribeDBSecurityGroups</code> action.
**/
export declare class DbSecurityGroupMessage extends SpeakeasyBase {
    dbSecurityGroups?: DbSecurityGroups[];
    marker?: string;
}
