import { SpeakeasyBase } from "../../../internal/utils";
import { DBInstanceList } from "./dbinstancelist";
/**
 * Represents the output of <a>DescribeDBInstances</a>.
 */
export declare class DBInstanceMessage extends SpeakeasyBase {
    dbInstances?: DBInstanceList[];
    marker?: string;
}
