import { SpeakeasyBase } from "../../../internal/utils";
import { DbInstanceList } from "./dbinstancelist";
/**
 *  Contains the result of a successful invocation of the <code>DescribeDBInstances</code> action.
**/
export declare class DbInstanceMessage extends SpeakeasyBase {
    dbInstances?: DbInstanceList[];
    marker?: string;
}
