import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderableClusterOptionsList } from "./orderableclusteroptionslist";



// OrderableClusterOptionsMessage
/** 
 * Contains the output from the <a>DescribeOrderableClusterOptions</a> action. 
**/
export class OrderableClusterOptionsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: OrderableClusterOptionsList })
  orderableClusterOptions?: OrderableClusterOptionsList[];
}
