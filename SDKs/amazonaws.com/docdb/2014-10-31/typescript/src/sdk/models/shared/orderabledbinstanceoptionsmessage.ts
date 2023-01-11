import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderableDbInstanceOptionsList } from "./orderabledbinstanceoptionslist";



// OrderableDbInstanceOptionsMessage
/** 
 * Represents the output of <a>DescribeOrderableDBInstanceOptions</a>.
**/
export class OrderableDbInstanceOptionsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: OrderableDbInstanceOptionsList })
  orderableDBInstanceOptions?: OrderableDbInstanceOptionsList[];
}
