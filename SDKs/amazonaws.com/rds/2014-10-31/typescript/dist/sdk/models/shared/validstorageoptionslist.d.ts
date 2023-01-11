import { SpeakeasyBase } from "../../../internal/utils";
import { DoubleRangeList } from "./doublerangelist";
import { RangeList } from "./rangelist";
/**
 * Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the <code>DescribeValidDBInstanceModifications</code> action.
**/
export declare class ValidStorageOptionsList extends SpeakeasyBase {
    iopsToStorageRatio?: DoubleRangeList[];
    provisionedIops?: RangeList[];
    storageSize?: RangeList[];
    storageType?: string;
    supportsStorageAutoscaling?: boolean;
}
