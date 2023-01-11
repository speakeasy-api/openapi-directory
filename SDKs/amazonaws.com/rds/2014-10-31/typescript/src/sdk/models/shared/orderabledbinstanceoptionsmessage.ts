import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderableDbInstanceOptionsList } from "./orderabledbinstanceoptionslist";



// OrderableDbInstanceOptionsMessage
/** 
 *  Contains the result of a successful invocation of the <code>DescribeOrderableDBInstanceOptions</code> action. 
**/
export class OrderableDbInstanceOptionsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: OrderableDbInstanceOptionsList })
  orderableDBInstanceOptions?: OrderableDbInstanceOptionsList[];
}
