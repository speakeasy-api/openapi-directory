import { SpeakeasyBase } from "../../../internal/utils";
import { OrderableDbInstanceOptionsList } from "./orderabledbinstanceoptionslist";
/**
 * Represents the output of <a>DescribeOrderableDBInstanceOptions</a>.
**/
export declare class OrderableDbInstanceOptionsMessage extends SpeakeasyBase {
    marker?: string;
    orderableDBInstanceOptions?: OrderableDbInstanceOptionsList[];
}
