import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonPaginationResult } from "./beezupcommonpaginationresult";
import { OrderHeader } from "./orderheader";
import { OrderListLightLinks } from "./orderlistlightlinks";
/**
 * The order list with minimum information we have from the orders.\
 *
 * @remarks
 * The paginationResult properties can be null if the list is empty.
 *
 */
export declare class OrderListLight extends SpeakeasyBase {
    links: OrderListLightLinks;
    orders: OrderHeader[];
    paginationResult?: BeezUPCommonPaginationResult;
}
