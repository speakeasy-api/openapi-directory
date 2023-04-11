import { SpeakeasyBase } from "../../../internal/utils";
import { DoubleRangeList } from "./doublerangelist";
import { RangeList } from "./rangelist";
/**
 * <p>Information about valid modifications that you can make to your DB instance.</p> <p>Contains the result of a successful call to the <a>DescribeValidDBInstanceModifications</a> action.</p>
 */
export declare class ValidStorageOptionsList extends SpeakeasyBase {
    iopsToStorageRatio?: DoubleRangeList[];
    provisionedIops?: RangeList[];
    storageSize?: RangeList[];
    storageType?: string;
}
