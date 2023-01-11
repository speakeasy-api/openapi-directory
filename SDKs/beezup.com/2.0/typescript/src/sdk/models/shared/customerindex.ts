import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomerIndexLinks } from "./customerindexlinks";
import { CustomerIndexLovLinks } from "./customerindexlovlinks";



// CustomerIndex
/** 
 * The index of the customer API
**/
export class CustomerIndex extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links: CustomerIndexLinks;

  @SpeakeasyMetadata({ data: "json, name=lovLinks" })
  lovLinks: CustomerIndexLovLinks;
}
