import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Link3 } from "./link3";



// PaginationResultLinks
/** 
 * The navigation links 'first', 'last', 'next', 'previous'
**/
export class PaginationResultLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first" })
  first: Link3;

  @SpeakeasyMetadata({ data: "json, name=last" })
  last: Link3;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: Link3;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: Link3;
}
