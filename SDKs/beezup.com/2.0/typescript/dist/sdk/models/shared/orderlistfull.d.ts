import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonPaginationResult } from "./beezupcommonpaginationresult";
import { Order } from "./order";
import { OrderListFullLinks } from "./orderlistfulllinks";
/**
 * The order list with all information we have from the orders and its items.\
 *
 * @remarks
 * The paginationResult properties can be null if the list is empty.
 *
 */
export declare class OrderListFull extends SpeakeasyBase {
    links: OrderListFullLinks;
    orders: Order[];
    paginationResult?: BeezUPCommonPaginationResult;
}
