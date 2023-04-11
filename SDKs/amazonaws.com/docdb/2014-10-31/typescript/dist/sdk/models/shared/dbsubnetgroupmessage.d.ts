import { SpeakeasyBase } from "../../../internal/utils";
import { DBSubnetGroups } from "./dbsubnetgroups";
/**
 * Represents the output of <a>DescribeDBSubnetGroups</a>.
 */
export declare class DBSubnetGroupMessage extends SpeakeasyBase {
    dbSubnetGroups?: DBSubnetGroups[];
    marker?: string;
}
