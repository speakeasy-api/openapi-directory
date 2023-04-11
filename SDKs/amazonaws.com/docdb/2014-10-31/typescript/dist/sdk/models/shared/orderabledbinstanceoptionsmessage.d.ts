import { SpeakeasyBase } from "../../../internal/utils";
import { OrderableDBInstanceOptionsList } from "./orderabledbinstanceoptionslist";
/**
 * Represents the output of <a>DescribeOrderableDBInstanceOptions</a>.
 */
export declare class OrderableDBInstanceOptionsMessage extends SpeakeasyBase {
    marker?: string;
    orderableDBInstanceOptions?: OrderableDBInstanceOptionsList[];
}
