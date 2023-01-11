import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksCatalogChangeCatalogColumnUserNameLink } from "./linkscatalogchangecatalogcolumnusernamelink";



export class CatalogColumnLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rename" })
  rename?: LinksCatalogChangeCatalogColumnUserNameLink;
}
