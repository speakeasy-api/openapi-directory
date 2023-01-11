import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Product } from "./product";



// ProductList
/** 
 * A object with a data property that contains an array of up to limit products. Each entry in the array is a separate product object. If no more products are available, the resulting array will be empty.
**/
export class ProductList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current_page" })
  currentPage?: number;

  @SpeakeasyMetadata({ data: "json, name=data", elemType: Product })
  data?: Product[];

  @SpeakeasyMetadata({ data: "json, name=last_page" })
  lastPage?: number;

  @SpeakeasyMetadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "json, name=prev_page_url" })
  prevPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
