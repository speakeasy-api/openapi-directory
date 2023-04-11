import { SpeakeasyBase } from "../../../internal/utils";
import { DBSubnetGroups } from "./dbsubnetgroups";
/**
 * Contains the result of a successful invocation of the <code>DescribeDBSubnetGroups</code> action.
 */
export declare class DBSubnetGroupMessage extends SpeakeasyBase {
    dbSubnetGroups?: DBSubnetGroups[];
    marker?: string;
}
