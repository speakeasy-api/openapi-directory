import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentBlock } from "./documentblock";



// DocumentBlockList
/** 
 * A object with a data property that contains an array of up to limit document blocks. Each entry in the array is a separate document block object. If no more document block are available, the resulting array will be empty.
**/
export class DocumentBlockList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current_page" })
  currentPage?: number;

  @SpeakeasyMetadata({ data: "json, name=data", elemType: DocumentBlock })
  data?: DocumentBlock[];

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
