import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksCatalogDeleteCustomColumnLink } from "./linkscatalogdeletecustomcolumnlink";
import { LinksCatalogGetCustomColumnExpressionLink } from "./linkscataloggetcustomcolumnexpressionlink";
import { LinksCatalogChangeCustomColumnUserNameLink } from "./linkscatalogchangecustomcolumnusernamelink";
import { LinksCatalogSaveCustomColumnLink } from "./linkscatalogsavecustomcolumnlink";
import { LinksCatalogChangeCustomColumnExpressionLink } from "./linkscatalogchangecustomcolumnexpressionlink";



export class CustomColumnLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete: LinksCatalogDeleteCustomColumnLink;

  @SpeakeasyMetadata({ data: "json, name=expression" })
  expression: LinksCatalogGetCustomColumnExpressionLink;

  @SpeakeasyMetadata({ data: "json, name=rename" })
  rename: LinksCatalogChangeCustomColumnUserNameLink;

  @SpeakeasyMetadata({ data: "json, name=save" })
  save: LinksCatalogSaveCustomColumnLink;

  @SpeakeasyMetadata({ data: "json, name=saveExpression" })
  saveExpression: LinksCatalogChangeCustomColumnExpressionLink;
}
