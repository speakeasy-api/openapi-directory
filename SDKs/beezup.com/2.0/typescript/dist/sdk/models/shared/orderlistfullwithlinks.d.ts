import { SpeakeasyBase } from "../../../internal/utils";
import { OrderListFullLinks } from "./orderlistfulllinks";
import { OrderWithLinks } from "./orderwithlinks";
import { PaginationResult } from "./paginationresult";
export declare class OrderListFullWithLinks extends SpeakeasyBase {
    links: OrderListFullLinks;
    orders: OrderWithLinks[];
    paginationResult: PaginationResult;
}
