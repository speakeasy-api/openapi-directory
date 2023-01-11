import { SpeakeasyBase } from "../../../internal/utils";
import { ReservedDbInstanceList } from "./reserveddbinstancelist";
/**
 *  Contains the result of a successful invocation of the <code>DescribeReservedDBInstances</code> action.
**/
export declare class ReservedDbInstanceMessage extends SpeakeasyBase {
    marker?: string;
    reservedDBInstances?: ReservedDbInstanceList[];
}
