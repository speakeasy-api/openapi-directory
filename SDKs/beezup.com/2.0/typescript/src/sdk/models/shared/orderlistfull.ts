import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderListFullLinks } from "./orderlistfulllinks";
import { Order } from "./order";
import { BeezUpCommonPaginationResult } from "./beezupcommonpaginationresult";



// OrderListFull
/** 
 * The order list with all information we have from the orders and its items.\
 * The paginationResult properties can be null if the list is empty.
 * 
**/
export class OrderListFull extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links: OrderListFullLinks;

  @SpeakeasyMetadata({ data: "json, name=orders", elemType: Order })
  orders: Order[];

  @SpeakeasyMetadata({ data: "json, name=paginationResult" })
  paginationResult?: BeezUpCommonPaginationResult;
}
