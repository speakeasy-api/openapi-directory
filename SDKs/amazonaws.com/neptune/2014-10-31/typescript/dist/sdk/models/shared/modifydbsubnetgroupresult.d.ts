import { SpeakeasyBase } from "../../../internal/utils";
import { DBSubnetGroup } from "./dbsubnetgroup";
/**
 * Success
 */
export declare class ModifyDBSubnetGroupResult extends SpeakeasyBase {
    /**
     * <p>Contains the details of an Amazon Neptune DB subnet group.</p> <p>This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p>
     */
    dbSubnetGroup?: DBSubnetGroup;
}
