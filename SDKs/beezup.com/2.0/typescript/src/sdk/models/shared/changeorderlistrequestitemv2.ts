import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderIdentifier } from "./orderidentifier";



// ChangeOrderListRequestItemV2
/** 
 * Contains the order identifier and the change order request
**/
export class ChangeOrderListRequestItemV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changeOrderRequest" })
  changeOrderRequest?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order: OrderIdentifier;
}
