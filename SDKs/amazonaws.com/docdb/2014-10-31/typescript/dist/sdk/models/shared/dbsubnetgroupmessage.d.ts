import { SpeakeasyBase } from "../../../internal/utils";
import { DbSubnetGroups } from "./dbsubnetgroups";
/**
 * Represents the output of <a>DescribeDBSubnetGroups</a>.
**/
export declare class DbSubnetGroupMessage extends SpeakeasyBase {
    dbSubnetGroups?: DbSubnetGroups[];
    marker?: string;
}
