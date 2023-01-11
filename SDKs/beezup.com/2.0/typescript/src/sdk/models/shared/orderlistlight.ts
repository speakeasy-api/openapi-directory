import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderListLightLinks } from "./orderlistlightlinks";
import { OrderHeader } from "./orderheader";
import { BeezUpCommonPaginationResult } from "./beezupcommonpaginationresult";



// OrderListLight
/** 
 * The order list with minimum information we have from the orders.\
 * The paginationResult properties can be null if the list is empty.
 * 
**/
export class OrderListLight extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links: OrderListLightLinks;

  @SpeakeasyMetadata({ data: "json, name=orders", elemType: OrderHeader })
  orders: OrderHeader[];

  @SpeakeasyMetadata({ data: "json, name=paginationResult" })
  paginationResult?: BeezUpCommonPaginationResult;
}
