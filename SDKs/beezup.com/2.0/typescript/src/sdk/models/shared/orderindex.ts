import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderIndexLinks } from "./orderindexlinks";
import { OrderIndexLovLinks } from "./orderindexlovlinks";



export class OrderIndex extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links: OrderIndexLinks;

  @SpeakeasyMetadata({ data: "json, name=lovLinks" })
  lovLinks: OrderIndexLovLinks;
}
