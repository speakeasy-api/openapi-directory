import { SpeakeasyBase } from "../../../internal/utils";
import { OrderHeaderWithLinks } from "./orderheaderwithlinks";
import { OrderListLightLinks } from "./orderlistlightlinks";
import { PaginationResult } from "./paginationresult";
/**
 * Successfully fetched the list of Orders
 */
export declare class OrderListLightWithLinks extends SpeakeasyBase {
    links: OrderListLightLinks;
    orders: OrderHeaderWithLinks[];
    paginationResult: PaginationResult;
}
