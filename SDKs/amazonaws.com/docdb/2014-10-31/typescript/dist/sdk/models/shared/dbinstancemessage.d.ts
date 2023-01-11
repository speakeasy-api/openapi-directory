import { SpeakeasyBase } from "../../../internal/utils";
import { DbInstanceList } from "./dbinstancelist";
/**
 * Represents the output of <a>DescribeDBInstances</a>.
**/
export declare class DbInstanceMessage extends SpeakeasyBase {
    dbInstances?: DbInstanceList[];
    marker?: string;
}
