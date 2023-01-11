import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderIdentifierWithETag } from "./orderidentifierwithetag";



// ChangeOrderListRequestItem
/** 
 * Contains the order identifier and the change order request
**/
export class ChangeOrderListRequestItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changeOrderRequest" })
  changeOrderRequest?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order: OrderIdentifierWithETag;
}
