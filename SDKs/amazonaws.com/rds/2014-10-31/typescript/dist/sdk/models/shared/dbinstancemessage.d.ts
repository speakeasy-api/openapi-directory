import { SpeakeasyBase } from "../../../internal/utils";
import { DBInstanceList } from "./dbinstancelist";
/**
 * Contains the result of a successful invocation of the <code>DescribeDBInstances</code> action.
 */
export declare class DBInstanceMessage extends SpeakeasyBase {
    dbInstances?: DBInstanceList[];
    marker?: string;
}
