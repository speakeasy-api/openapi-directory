import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderListFullLinks } from "./orderlistfulllinks";
import { OrderWithLinks } from "./orderwithlinks";
import { PaginationResult } from "./paginationresult";



export class OrderListFullWithLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links: OrderListFullLinks;

  @SpeakeasyMetadata({ data: "json, name=orders", elemType: OrderWithLinks })
  orders: OrderWithLinks[];

  @SpeakeasyMetadata({ data: "json, name=paginationResult" })
  paginationResult: PaginationResult;
}
