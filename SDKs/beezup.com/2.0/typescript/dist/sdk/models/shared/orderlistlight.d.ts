import { SpeakeasyBase } from "../../../internal/utils";
import { OrderListLightLinks } from "./orderlistlightlinks";
import { OrderHeader } from "./orderheader";
import { BeezUpCommonPaginationResult } from "./beezupcommonpaginationresult";
/**
 * The order list with minimum information we have from the orders.\
 * The paginationResult properties can be null if the list is empty.
 *
**/
export declare class OrderListLight extends SpeakeasyBase {
    links: OrderListLightLinks;
    orders: OrderHeader[];
    paginationResult?: BeezUpCommonPaginationResult;
}
