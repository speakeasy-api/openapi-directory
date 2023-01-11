import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksCatalogGetBeezUpColumnsLink } from "./linkscataloggetbeezupcolumnslink";
import { LinksCatalogIndexLink } from "./linkscatalogindexlink";



export class CatalogIndexLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=beezUPColumns" })
  beezUPColumns: LinksCatalogGetBeezUpColumnsLink;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: LinksCatalogIndexLink;
}
