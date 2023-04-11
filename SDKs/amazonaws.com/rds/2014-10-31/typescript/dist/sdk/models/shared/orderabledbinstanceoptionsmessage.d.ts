import { SpeakeasyBase } from "../../../internal/utils";
import { OrderableDBInstanceOptionsList } from "./orderabledbinstanceoptionslist";
/**
 * Contains the result of a successful invocation of the <code>DescribeOrderableDBInstanceOptions</code> action.
 */
export declare class OrderableDBInstanceOptionsMessage extends SpeakeasyBase {
    marker?: string;
    orderableDBInstanceOptions?: OrderableDBInstanceOptionsList[];
}
