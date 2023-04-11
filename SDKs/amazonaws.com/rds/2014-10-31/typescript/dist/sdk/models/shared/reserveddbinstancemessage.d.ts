import { SpeakeasyBase } from "../../../internal/utils";
import { ReservedDBInstanceList } from "./reserveddbinstancelist";
/**
 * Contains the result of a successful invocation of the <code>DescribeReservedDBInstances</code> action.
 */
export declare class ReservedDBInstanceMessage extends SpeakeasyBase {
    marker?: string;
    reservedDBInstances?: ReservedDBInstanceList[];
}
