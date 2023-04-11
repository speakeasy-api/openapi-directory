import { SpeakeasyBase } from "../../../internal/utils";
import { DBSecurityGroups } from "./dbsecuritygroups";
/**
 * Contains the result of a successful invocation of the <code>DescribeDBSecurityGroups</code> action.
 */
export declare class DBSecurityGroupMessage extends SpeakeasyBase {
    dbSecurityGroups?: DBSecurityGroups[];
    marker?: string;
}
