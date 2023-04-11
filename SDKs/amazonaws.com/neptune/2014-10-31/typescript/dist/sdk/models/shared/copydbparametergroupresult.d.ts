import { SpeakeasyBase } from "../../../internal/utils";
import { DBParameterGroup } from "./dbparametergroup";
/**
 * Success
 */
export declare class CopyDBParameterGroupResult extends SpeakeasyBase {
    /**
     * <p>Contains the details of an Amazon Neptune DB parameter group.</p> <p>This data type is used as a response element in the <a>DescribeDBParameterGroups</a> action.</p>
     */
    dbParameterGroup?: DBParameterGroup;
}
