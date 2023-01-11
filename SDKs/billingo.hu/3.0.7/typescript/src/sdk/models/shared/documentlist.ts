import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";



// DocumentList
/** 
 * A object with a data property that contains an array of up to limit documents. Each entry in the array is a separate document object. If no more documents are available, the resulting array will be empty.
**/
export class DocumentList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current_page" })
  currentPage?: number;

  @SpeakeasyMetadata({ data: "json, name=data", elemType: Document })
  data?: Document[];

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
