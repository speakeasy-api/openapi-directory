import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderListLightLinks } from "./orderlistlightlinks";
import { OrderHeaderWithLinks } from "./orderheaderwithlinks";
import { PaginationResult } from "./paginationresult";



export class OrderListLightWithLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links: OrderListLightLinks;

  @SpeakeasyMetadata({ data: "json, name=orders", elemType: OrderHeaderWithLinks })
  orders: OrderHeaderWithLinks[];

  @SpeakeasyMetadata({ data: "json, name=paginationResult" })
  paginationResult: PaginationResult;
}
