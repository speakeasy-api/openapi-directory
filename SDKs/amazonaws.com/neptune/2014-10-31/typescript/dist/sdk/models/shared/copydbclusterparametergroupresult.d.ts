import { SpeakeasyBase } from "../../../internal/utils";
import { DBClusterParameterGroup } from "./dbclusterparametergroup";
/**
 * Success
 */
export declare class CopyDBClusterParameterGroupResult extends SpeakeasyBase {
    /**
     * <p>Contains the details of an Amazon Neptune DB cluster parameter group.</p> <p>This data type is used as a response element in the <a>DescribeDBClusterParameterGroups</a> action.</p>
     */
    dbClusterParameterGroup?: DBClusterParameterGroup;
}
