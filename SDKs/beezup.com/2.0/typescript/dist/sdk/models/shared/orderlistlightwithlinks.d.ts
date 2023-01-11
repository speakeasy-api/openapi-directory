import { SpeakeasyBase } from "../../../internal/utils";
import { OrderListLightLinks } from "./orderlistlightlinks";
import { OrderHeaderWithLinks } from "./orderheaderwithlinks";
import { PaginationResult } from "./paginationresult";
export declare class OrderListLightWithLinks extends SpeakeasyBase {
    links: OrderListLightLinks;
    orders: OrderHeaderWithLinks[];
    paginationResult: PaginationResult;
}
