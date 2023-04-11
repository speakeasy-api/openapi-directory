import { SpeakeasyBase } from "../../../internal/utils";
import { OrderListFullLinks } from "./orderlistfulllinks";
import { OrderWithLinks } from "./orderwithlinks";
import { PaginationResult } from "./paginationresult";
/**
 * Successfully fetched the full list of Orders
 */
export declare class OrderListFullWithLinks extends SpeakeasyBase {
    links: OrderListFullLinks;
    orders: OrderWithLinks[];
    paginationResult: PaginationResult;
}
