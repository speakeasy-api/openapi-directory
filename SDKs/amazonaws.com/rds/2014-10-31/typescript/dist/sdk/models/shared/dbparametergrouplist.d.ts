import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Contains the details of an Amazon RDS DB parameter group. </p> <p>This data type is used as a response element in the <code>DescribeDBParameterGroups</code> action. </p>
**/
export declare class DbParameterGroupList extends SpeakeasyBase {
    dbParameterGroupArn?: string;
    dbParameterGroupFamily?: string;
    dbParameterGroupName?: string;
    description?: string;
}
