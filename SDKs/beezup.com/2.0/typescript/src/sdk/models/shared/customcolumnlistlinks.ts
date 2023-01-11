import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksCatalogSaveCustomColumnLink } from "./linkscatalogsavecustomcolumnlink";
import { LinksCatalogGetCustomColumnsLink } from "./linkscataloggetcustomcolumnslink";



export class CustomColumnListLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add" })
  add?: LinksCatalogSaveCustomColumnLink;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: LinksCatalogGetCustomColumnsLink;
}
