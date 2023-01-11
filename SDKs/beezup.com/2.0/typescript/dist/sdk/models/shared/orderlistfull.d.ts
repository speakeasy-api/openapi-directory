import { SpeakeasyBase } from "../../../internal/utils";
import { OrderListFullLinks } from "./orderlistfulllinks";
import { Order } from "./order";
import { BeezUpCommonPaginationResult } from "./beezupcommonpaginationresult";
/**
 * The order list with all information we have from the orders and its items.\
 * The paginationResult properties can be null if the list is empty.
 *
**/
export declare class OrderListFull extends SpeakeasyBase {
    links: OrderListFullLinks;
    orders: Order[];
    paginationResult?: BeezUpCommonPaginationResult;
}
